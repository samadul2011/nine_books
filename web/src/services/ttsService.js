// ==============================================================================
// Web Text-to-Speech (TTS) Service
// Dual Engine:
// 1. Studio Neural AI (Ultra-Realistic HD Bengali Voice - No subscription required)
// 2. Device Voice (Browser Native SpeechSynthesis)
// Features: Full Chapter Playback, Selected Text Playback, Speed Controls
// ==============================================================================

export class TTSService {
  constructor() {
    this.currentMode = 'neural' // 'neural' | 'device'
    this.speed = 1.0
    this.isPlaying = false
    this.isPaused = false
    this.currentChunkIndex = 0
    this.chunks = []
    this.availableVoices = []
    
    // Audio elements & synthesis
    this.audioElement = null
    this.speechUtterance = null
    this._currentBlobUrl = null   // track blob URLs for cleanup
    
    // Listeners
    this.listeners = {
      onPlay: () => {},
      onPause: () => {},
      onStop: () => {},
      onProgress: (current, total, currentChunkText, currentChunkIndex) => {},
      onError: (err) => {}
    }

    // Pre-fetch available system voices when ready
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.loadVoices()
      window.speechSynthesis.onvoiceschanged = () => {
        this.loadVoices()
      }
    }
  }

  loadVoices() {
    if ('speechSynthesis' in window) {
      this.availableVoices = window.speechSynthesis.getVoices()
    }
  }

  setListeners({ onPlay, onPause, onStop, onProgress, onError }) {
    this.listeners = {
      onPlay: onPlay || (() => {}),
      onPause: onPause || (() => {}),
      onStop: onStop || (() => {}),
      onProgress: onProgress || (() => {}),
      onError: onError || (() => {})
    }
  }

  setMode(mode) {
    if (this.currentMode !== mode) {
      const wasPlaying = this.isPlaying
      const currentIndex = this.currentChunkIndex
      this.stop()
      this.currentMode = mode
      if (wasPlaying && this.chunks.length > 0) {
        this.isPlaying = true
        this.playChunk(currentIndex)
      }
    }
  }

  setSpeed(speed) {
    this.speed = speed
    if (this.audioElement) {
      this.audioElement.playbackRate = speed
    }
    if (this.currentMode === 'device' && this.isPlaying) {
      const resumeChunk = this.currentChunkIndex
      this.stop()
      this.isPlaying = true
      this.playChunk(resumeChunk)
    }
  }

  /**
   * Cleans raw educational markdown and tables into fluent spoken Bengali narration.
   */
  cleanTextForSpeech(raw) {
    if (!raw) return ''

    let text = raw
      // Decode entities
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/<br\s*\/?>/gi, ' ')
      // Remove code fences
      .replace(/```[\s\S]*?```/g, ' ')
      // Clean table divider lines
      .replace(/^\|?[\s\-:]+(\|[\s\-:]+)+\|?$/gm, '')

    // Convert table rows to spoken text: | কলাম ১ | কলাম ২ | -> "কলাম ১: কলাম ২।"
    const lines = text.split('\n').map(line => {
      const trimmed = line.trim()
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const cells = trimmed
          .slice(1, -1)
          .split('|')
          .map(c => c.trim())
          .filter(c => c.length > 0)
        return cells.join(', ') + '।'
      }
      return trimmed
    })

    text = lines.join(' ')
      // Remove markdown headings and bullets
      .replace(/^[#■•\-\*]+\s*/gm, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/_{1,2}(.*?)_{1,2}/g, '$1')
      .replace(/━+|─+|-{3,}/g, ' ')
      .replace(/[📌💡⚠️🎯]/g, '')
      .replace(/\s+/g, ' ')
      .trim()

    return text
  }

  /**
   * Split long text into natural sentence chunks (up to ~180 chars).
   */
  splitIntoChunks(text) {
    // Match natural sentences ending with Bengali dori (।), English period (.), question mark (?), exclamation (!)
    const sentences = text.match(/[^।\.?!]+[।\.?!]?/g) || [text]
    const chunks = []
    let current = ''

    for (const s of sentences) {
      const trimmed = s.trim()
      if (!trimmed) continue

      if ((current + ' ' + trimmed).length <= 180) {
        current = current ? (current + ' ' + trimmed) : trimmed
      } else {
        if (current) chunks.push(current)
        if (trimmed.length > 180) {
          // Break large sentence by commas or spaces
          const parts = trimmed.match(/.{1,160}(\s|$)/g) || [trimmed]
          parts.forEach(p => chunks.push(p.trim()))
          current = ''
        } else {
          current = trimmed
        }
      }
    }

    if (current) chunks.push(current)
    return chunks.filter(c => c.length > 0)
  }

  /**
   * Play entire lesson or text.
   */
  play(rawText) {
    this.stop()
    const cleaned = this.cleanTextForSpeech(rawText)
    if (!cleaned) {
      this.listeners.onError('পড়ার জন্য কোনো লেখা পাওয়া যায়নি।')
      return
    }

    this.chunks = this.splitIntoChunks(cleaned)
    this.currentChunkIndex = 0
    this.isPlaying = true
    this.isPaused = false
    this.listeners.onPlay()

    this.playChunk(0)
  }

  /**
   * Play starting from selected text to the end of the text.
   */
  playFromSelection(fullRawText, selectedSnippet) {
    this.stop()
    if (!selectedSnippet || !selectedSnippet.trim()) {
      this.play(fullRawText)
      return
    }

    const cleanSelected = this.cleanTextForSpeech(selectedSnippet)
    const cleanFull = this.cleanTextForSpeech(fullRawText)

    if (!cleanFull) {
      this.listeners.onError('কোনো লেখা পাওয়া যায়নি।')
      return
    }

    // Find the position of the selected snippet in the full text
    // We search with the first 20 characters of selection for robust matching
    const searchPrefix = cleanSelected.slice(0, Math.min(25, cleanSelected.length)).trim()
    let startIndex = 0
    if (searchPrefix) {
      const foundPos = cleanFull.indexOf(searchPrefix)
      if (foundPos !== -1) {
        startIndex = foundPos
      }
    }

    // Slice the full text from the selection point onwards
    const remainingText = cleanFull.slice(startIndex).trim()
    this.chunks = this.splitIntoChunks(remainingText)
    
    if (this.chunks.length === 0) {
      this.chunks = this.splitIntoChunks(cleanSelected)
    }

    this.currentChunkIndex = 0
    this.isPlaying = true
    this.isPaused = false
    this.listeners.onPlay()

    this.playChunk(0)
  }

  playChunk(index) {
    if (!this.isPlaying) return
    if (index >= this.chunks.length) {
      this.stop()
      return
    }

    this.currentChunkIndex = index
    const chunkText = this.chunks[index]
    this.listeners.onProgress(index + 1, this.chunks.length, chunkText, index)

    if (this.currentMode === 'neural') {
      this.playNeuralChunk(chunkText, index)
    } else {
      this.playDeviceChunk(chunkText, index)
    }
  }

  // Internal helper — attaches event handlers to an Audio element and starts playback
  _playAudioElement(audio, blobUrl, index) {
    audio.playbackRate = this.speed
    this._currentBlobUrl = blobUrl
    this.audioElement = audio

    audio.onended = () => {
      audio.onended = null
      audio.onerror = null
      if (blobUrl) { URL.revokeObjectURL(blobUrl); this._currentBlobUrl = null }
      if (this.audioElement === audio && this.isPlaying && !this.isPaused) {
        this.playChunk(index + 1)
      }
    }

    audio.onerror = (e) => {
      audio.onended = null
      audio.onerror = null
      if (blobUrl) { URL.revokeObjectURL(blobUrl); this._currentBlobUrl = null }
      // ONLY trigger fallback if this audio element is currently active and not obsolete
      if (this.audioElement === audio && this.isPlaying && !this.isPaused) {
        this.audioElement = null
        console.warn('Neural audio error, falling back to device TTS:', e)
        this.playDeviceChunk(this.chunks[index], index)
      }
    }

    const p = audio.play()
    if (p !== undefined) {
      p.catch(err => {
        // If aborted by user pause/stop or chunk transition, never fallback
        if (err && err.name === 'AbortError') return
        audio.onended = null
        audio.onerror = null
        if (blobUrl) { URL.revokeObjectURL(blobUrl); this._currentBlobUrl = null }
        if (this.audioElement === audio && this.isPlaying && !this.isPaused) {
          this.audioElement = null
          console.warn('Audio play() rejected, falling back to device TTS:', err)
          this.playDeviceChunk(this.chunks[index], index)
        }
      })
    }
  }

  async playNeuralChunk(text, index) {
    try {
      if (this.audioElement) {
        const oldAudio = this.audioElement
        this.audioElement = null
        oldAudio.onended = null
        oldAudio.onerror = null
        oldAudio.pause()
        oldAudio.removeAttribute('src')
        oldAudio.load()
      }
      if (this._currentBlobUrl) {
        URL.revokeObjectURL(this._currentBlobUrl)
        this._currentBlobUrl = null
      }

      // Detect language: English vs Bengali
      const engCount = (text.match(/[a-zA-Z]/g) || []).length
      const bnCount = (text.match(/[\u0980-\u09FF]/g) || []).length
      const lang = engCount >= bnCount && engCount > 0 ? 'en' : 'bn'
      const encoded = encodeURIComponent(text)
      const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encoded}`

      const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname)

      if (isLocalhost) {
        // On localhost: Vite proxy adds spoofed Referer/User-Agent headers — use it directly
        const localUrl = `/api/tts?text=${encoded}&lang=${lang}`
        this._playAudioElement(new Audio(localUrl), null, index)
        return
      }

      // On GitHub Pages / production:
      // Google TTS blocks direct browser requests (no server-side Referer spoofing).
      // Solution: fetch audio via corsproxy.io → convert to Blob URL → play.
      // Fallback chain: corsproxy.io → allorigins.win → device voice
      const proxies = [
        `https://corsproxy.io/?url=${encodeURIComponent(googleTtsUrl)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(googleTtsUrl)}`
      ]

      for (const proxyUrl of proxies) {
        if (!this.isPlaying) return  // user stopped while we were fetching
        try {
          const controller = new AbortController()
          const timer = setTimeout(() => controller.abort(), 8000)
          const res = await fetch(proxyUrl, { signal: controller.signal })
          clearTimeout(timer)

          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          if (!this.isPlaying) return

          const blob = await res.blob()
          if (!this.isPlaying) return

          const blobUrl = URL.createObjectURL(blob)
          this._playAudioElement(new Audio(blobUrl), blobUrl, index)
          return  // success — stop trying proxies
        } catch (err) {
          console.warn(`Neural TTS proxy failed (${proxyUrl}):`, err.message)
        }
      }

      // All proxies failed — fall back to device voice
      console.warn('All Neural TTS proxies failed, using device voice.')
      if (this.isPlaying) this.playDeviceChunk(text, index)

    } catch (err) {
      console.warn('playNeuralChunk unexpected error:', err)
      if (this.isPlaying) this.playDeviceChunk(text, index)
    }
  }

  playDeviceChunk(text, index) {
    if (!('speechSynthesis' in window)) {
      this.listeners.onError('আপনার ব্রাউজার ডিভাইস ভয়েস সমর্থন করে না।')
      return
    }

    // Stop neural audio so both never run simultaneously
    if (this.audioElement) {
      const oldAudio = this.audioElement
      this.audioElement = null
      oldAudio.onended = null
      oldAudio.onerror = null
      oldAudio.pause()
      oldAudio.removeAttribute('src')
      oldAudio.load()
    }

    window.speechSynthesis.cancel()
    window.speechSynthesis.resume() // Unfreeze Chrome speech engine

    const utterance = new SpeechSynthesisUtterance(text)

    // Detect language: English vs Bengali
    const engCount = (text.match(/[a-zA-Z]/g) || []).length
    const bnCount = (text.match(/[\u0980-\u09FF]/g) || []).length
    const isEnglish = engCount >= bnCount && engCount > 0

    utterance.lang = isEnglish ? 'en-US' : 'bn-BD'
    utterance.rate = this.speed

    // Find language-appropriate voice
    if (this.availableVoices.length === 0) {
      this.loadVoices()
    }

    if (isEnglish) {
      const enVoice = this.availableVoices.find(v => 
        v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.default)
      ) || this.availableVoices.find(v => v.lang.startsWith('en'))
      if (enVoice) utterance.voice = enVoice
    } else {
      const bnVoice = this.availableVoices.find(v => 
        v.lang.includes('bn') || 
        v.name.toLowerCase().includes('bengali') || 
        v.name.toLowerCase().includes('bangla')
      )
      if (bnVoice) utterance.voice = bnVoice
    }

    utterance.onend = () => {
      if (this.isPlaying && !this.isPaused) {
        this.playChunk(index + 1)
      }
    }

    utterance.onerror = (e) => {
      console.warn('Device speech error:', e)
      if (this.isPlaying && !this.isPaused) {
        this.playChunk(index + 1)
      }
    }

    this.speechUtterance = utterance
    window.speechSynthesis.speak(utterance)
  }

  pause() {
    if (!this.isPlaying || this.isPaused) return
    this.isPaused = true

    if (this.currentMode === 'neural' && this.audioElement) {
      this.audioElement.pause()
    } else if (this.currentMode === 'device' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause()
    }

    this.listeners.onPause()
  }

  resume() {
    if (!this.isPlaying || !this.isPaused) return
    this.isPaused = false

    if (this.currentMode === 'neural' && this.audioElement) {
      this.audioElement.play().catch(() => {})
    } else if (this.currentMode === 'device' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume()
    }

    this.listeners.onPlay()
  }

  stop() {
    this.isPlaying = false
    this.isPaused = false
    this.currentChunkIndex = 0

    if (this.audioElement) {
      const oldAudio = this.audioElement
      this.audioElement = null
      oldAudio.onended = null
      oldAudio.onerror = null
      oldAudio.pause()
      oldAudio.removeAttribute('src')
      oldAudio.load()
    }

    // Revoke any blob URL to free memory
    if (this._currentBlobUrl) {
      URL.revokeObjectURL(this._currentBlobUrl)
      this._currentBlobUrl = null
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      this.speechUtterance = null
    }

    this.listeners.onStop()
  }

  cancel() {
    this.stop()
  }
}

export const ttsService = new TTSService()
