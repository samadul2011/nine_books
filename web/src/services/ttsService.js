// ==============================================================================
// Web AI Voice / Speech Service
// High-Fidelity AI Female Voice Engine:
// 1. Natural AI Female Voice (Microsoft Jenny / Aria / Google Female / Neural Voices)
// 2. Cloud Studio AI (Google Cloud Studio Neural Audio)
// 3. System Female Voice
// Features: Full Reading Playback, Selection-Only Playback, Speed Controls, Female Vocal Tuning
// ==============================================================================

export class TTSService {
  constructor() {
    this.currentMode = 'ai-female' // 'ai-female' | 'neural' | 'device'
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

  /**
   * Intelligently selects the best Natural AI Female Voice.
   * Gives top priority to high-realism neural female voices in English & Bengali.
   * Explicitly excludes robotic male voices like Microsoft David.
   */
  getBestFemaleVoice(lang = 'en') {
    if (this.availableVoices.length === 0) {
      this.loadVoices()
    }

    const isEng = lang.startsWith('en')

    if (isEng) {
      // 1. Top Tier: Ultra-realistic Microsoft Edge / Windows 11 Natural Neural Female Voices
      const topNeuralFemaleNames = [
        'jenny', 'aria', 'ava', 'emma', 'michelle', 'libby', 'sonia', 
        'maisie', 'natasha', 'neerja', 'clara', 'steffan-natural', 'ana'
      ]

      for (const name of topNeuralFemaleNames) {
        const found = this.availableVoices.find(v => 
          v.lang.startsWith('en') && 
          v.name.toLowerCase().includes(name) && 
          v.name.toLowerCase().includes('natural') &&
          !v.name.toLowerCase().includes('male')
        )
        if (found) return found
      }

      // 2. Google High-Quality Female voices (Chrome & Android)
      const googleFemale = this.availableVoices.find(v => 
        v.lang.startsWith('en') && 
        v.name.toLowerCase().includes('google') && 
        (v.name.toLowerCase().includes('uk english female') || 
         v.name.toLowerCase().includes('us english') || 
         v.name.toLowerCase().includes('female')) &&
        !v.name.toLowerCase().includes('male')
      )
      if (googleFemale) return googleFemale

      // 3. Any Natural / Online voice with female name
      for (const name of topNeuralFemaleNames) {
        const found = this.availableVoices.find(v => 
          v.lang.startsWith('en') && 
          v.name.toLowerCase().includes(name) && 
          !v.name.toLowerCase().includes('male')
        )
        if (found) return found
      }

      // 4. Apple / Safari Female Voices (macOS / iOS)
      const appleFemaleNames = ['samantha', 'victoria', 'karen', 'moira', 'tessa', 'fiona', 'serena']
      for (const name of appleFemaleNames) {
        const found = this.availableVoices.find(v => 
          v.lang.startsWith('en') && 
          v.name.toLowerCase().includes(name) &&
          !v.name.toLowerCase().includes('male')
        )
        if (found) return found
      }

      // 5. Windows Desktop Female (Zira)
      const zira = this.availableVoices.find(v => 
        v.lang.startsWith('en') && v.name.toLowerCase().includes('zira')
      )
      if (zira) return zira

      // 6. Any voice with 'female' in name or URI
      const genericFemale = this.availableVoices.find(v => 
        v.lang.startsWith('en') && 
        (v.name.toLowerCase().includes('female') || (v.voiceURI && v.voiceURI.toLowerCase().includes('female')))
      )
      if (genericFemale) return genericFemale

      // 7. Filter out all known male voices (David, Mark, George, Guy, Ryan, Eric, etc.)
      const maleNames = ['david', 'mark', 'george', 'guy', 'ryan', 'christopher', 'eric', 'steffan', 'pradeep', 'male']
      const nonMale = this.availableVoices.find(v => 
        v.lang.startsWith('en') && 
        !maleNames.some(m => v.name.toLowerCase().includes(m))
      )
      if (nonMale) return nonMale

      return this.availableVoices.find(v => v.lang.startsWith('en'))
    } else {
      // Bengali Female Voices
      const bnFemaleNames = ['nabaneeta', 'tanishaa', 'google বাংলা', 'female']
      for (const name of bnFemaleNames) {
        const found = this.availableVoices.find(v => 
          (v.lang.includes('bn') || v.name.toLowerCase().includes('bengali') || v.name.toLowerCase().includes('bangla')) &&
          v.name.toLowerCase().includes(name) &&
          !v.name.toLowerCase().includes('male')
        )
        if (found) return found
      }

      // Filter out male
      const maleNames = ['bashkar', 'male']
      const nonMaleBn = this.availableVoices.find(v => 
        (v.lang.includes('bn') || v.name.toLowerCase().includes('bengali') || v.name.toLowerCase().includes('bangla')) &&
        !maleNames.some(m => v.name.toLowerCase().includes(m))
      )
      if (nonMaleBn) return nonMaleBn

      return this.availableVoices.find(v => 
        v.lang.includes('bn') || v.name.toLowerCase().includes('bengali') || v.name.toLowerCase().includes('bangla')
      )
    }
  }

  /**
   * Returns a friendly display label for the currently active female voice.
   */
  getActiveVoiceDisplayName(lang = 'en') {
    const voice = this.getBestFemaleVoice(lang)
    if (!voice) return 'AI Female Voice'
    
    const name = voice.name
    if (name.includes('Jenny')) return 'Jenny (AI Female Natural)'
    if (name.includes('Aria')) return 'Aria (AI Female Natural)'
    if (name.includes('Ava')) return 'Ava (AI Female Natural)'
    if (name.includes('Emma')) return 'Emma (AI Female Natural)'
    if (name.includes('Google UK English Female')) return 'Google UK (AI Female)'
    if (name.includes('Google US English')) return 'Google US (AI Female)'
    if (name.includes('Zira')) return 'Zira (Female Voice)'
    if (name.includes('Samantha')) return 'Samantha (AI Female)'
    if (name.includes('Victoria')) return 'Victoria (AI Female)'
    if (name.includes('Nabaneeta')) return 'Nabaneeta (AI Female)'
    if (name.includes('Tanishaa')) return 'Tanishaa (AI Female)'

    // Clean up generic name
    const cleaned = name.replace(/Microsoft |Online |\(Natural\) |Desktop/gi, '').trim()
    return cleaned ? `${cleaned} (Female)` : 'AI Female Voice'
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
    if ((this.currentMode === 'ai-female' || this.currentMode === 'device') && this.isPlaying) {
      const resumeChunk = this.currentChunkIndex
      this.stop()
      this.isPlaying = true
      this.playChunk(resumeChunk)
    }
  }

  /**
   * Cleans raw educational markdown and tables into fluent spoken narration.
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

    // Convert table rows to spoken text
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

    const searchPrefix = cleanSelected.slice(0, Math.min(25, cleanSelected.length)).trim()
    let startIndex = 0
    if (searchPrefix) {
      const foundPos = cleanFull.indexOf(searchPrefix)
      if (foundPos !== -1) {
        startIndex = foundPos
      }
    }

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

  /**
   * Play ONLY the selected text (words, phrases, or sentences) and STOP immediately when finished.
   */
  playOnlySelection(selectedSnippet) {
    this.stop()
    if (!selectedSnippet || !selectedSnippet.trim()) {
      this.listeners.onError('অনুগ্রহ করে পড়ার অংশ থেকে যেকোনো শব্দ বা বাক্য সিলেক্ট করুন।')
      return
    }

    const cleanSelected = this.cleanTextForSpeech(selectedSnippet)
    if (!cleanSelected) {
      this.listeners.onError('সিলেক্টেড অংশে পড়ার মতো কোনো লেখা পাওয়া যায়নি।')
      return
    }

    this.chunks = this.splitIntoChunks(cleanSelected)
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
      // Default & 'ai-female': high quality Female AI voice
      this.playFemaleAIChunk(chunkText, index)
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
      if (this.audioElement === audio && this.isPlaying && !this.isPaused) {
        this.audioElement = null
        console.warn('Neural audio error, switching to Natural Female AI voice:', e)
        this.playFemaleAIChunk(this.chunks[index], index)
      }
    }

    const p = audio.play()
    if (p !== undefined) {
      p.catch(err => {
        if (err && err.name === 'AbortError') return
        audio.onended = null
        audio.onerror = null
        if (blobUrl) { URL.revokeObjectURL(blobUrl); this._currentBlobUrl = null }
        if (this.audioElement === audio && this.isPlaying && !this.isPaused) {
          this.audioElement = null
          console.warn('Audio play() rejected, switching to Natural Female AI voice:', err)
          this.playFemaleAIChunk(this.chunks[index], index)
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
        const localUrl = `/api/tts?text=${encoded}&lang=${lang}`
        this._playAudioElement(new Audio(localUrl), null, index)
        return
      }

      // On GitHub Pages: Try CORS proxies with fast timeout
      const proxies = [
        `https://corsproxy.io/?url=${encodeURIComponent(googleTtsUrl)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(googleTtsUrl)}`
      ]

      for (const proxyUrl of proxies) {
        if (!this.isPlaying) return
        try {
          const controller = new AbortController()
          const timer = setTimeout(() => controller.abort(), 6000)
          const res = await fetch(proxyUrl, { signal: controller.signal })
          clearTimeout(timer)

          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          if (!this.isPlaying) return

          const blob = await res.blob()
          if (!this.isPlaying) return

          const blobUrl = URL.createObjectURL(blob)
          this._playAudioElement(new Audio(blobUrl), blobUrl, index)
          return
        } catch (err) {
          console.warn(`Neural TTS proxy failed (${proxyUrl}):`, err.message)
        }
      }

      // Fallback immediately to high-quality female AI voice
      if (this.isPlaying) this.playFemaleAIChunk(text, index)

    } catch (err) {
      console.warn('playNeuralChunk unexpected error:', err)
      if (this.isPlaying) this.playFemaleAIChunk(text, index)
    }
  }

  /**
   * Plays chunk using the browser's Natural AI Female voice with fine-tuned pitch and speed.
   */
  playFemaleAIChunk(text, index) {
    if (!('speechSynthesis' in window)) {
      this.listeners.onError('আপনার ব্রাউজার ভয়েস সিন্থেসিস সমর্থন করে না।')
      return
    }

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
    window.speechSynthesis.resume()

    const utterance = new SpeechSynthesisUtterance(text)

    // Detect language: English vs Bengali
    const engCount = (text.match(/[a-zA-Z]/g) || []).length
    const bnCount = (text.match(/[\u0980-\u09FF]/g) || []).length
    const isEnglish = engCount >= bnCount && engCount > 0

    utterance.lang = isEnglish ? 'en-US' : 'bn-BD'
    utterance.rate = this.speed
    // Slightly elevated pitch to enhance female vocal brightness and natural warmth
    utterance.pitch = isEnglish ? 1.08 : 1.05

    // Choose the best female AI voice
    const femaleVoice = this.getBestFemaleVoice(isEnglish ? 'en' : 'bn')
    if (femaleVoice) {
      utterance.voice = femaleVoice
    }

    utterance.onend = () => {
      if (this.isPlaying && !this.isPaused) {
        this.playChunk(index + 1)
      }
    }

    utterance.onerror = (e) => {
      console.warn('AI Female speech error:', e)
      if (this.isPlaying && !this.isPaused) {
        this.playChunk(index + 1)
      }
    }

    this.speechUtterance = utterance
    window.speechSynthesis.speak(utterance)
  }

  // Alias for backward compatibility
  playDeviceChunk(text, index) {
    this.playFemaleAIChunk(text, index)
  }

  /**
   * Standalone pronunciation method with Female AI voice.
   * Resolves a Promise when playback completes.
   */
  speak(text, lang = 'en') {
    return new Promise((resolve) => {
      this.stop()
      if (!text || !text.trim()) {
        resolve()
        return
      }

      const cleaned = this.cleanTextForSpeech(text)
      if (!cleaned) {
        resolve()
        return
      }

      const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname)

      if (isLocalhost && this.currentMode === 'neural') {
        const encoded = encodeURIComponent(cleaned)
        const localUrl = `/api/tts?text=${encoded}&lang=${lang}`
        const audio = new Audio(localUrl)
        audio.playbackRate = this.speed
        this.audioElement = audio
        audio.onended = () => {
          this.audioElement = null
          resolve()
        }
        audio.onerror = () => {
          this.audioElement = null
          this._speakFemaleDevice(cleaned, lang, resolve)
        }
        audio.play().catch(() => {
          this.audioElement = null
          this._speakFemaleDevice(cleaned, lang, resolve)
        })
      } else {
        this._speakFemaleDevice(cleaned, lang, resolve)
      }
    })
  }

  _speakFemaleDevice(text, lang, resolve) {
    if (!('speechSynthesis' in window)) {
      resolve()
      return
    }

    window.speechSynthesis.cancel()
    window.speechSynthesis.resume()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang.startsWith('en') ? 'en-US' : 'bn-BD'
    utterance.rate = this.speed
    utterance.pitch = lang.startsWith('en') ? 1.08 : 1.05

    const femaleVoice = this.getBestFemaleVoice(lang)
    if (femaleVoice) {
      utterance.voice = femaleVoice
    }

    utterance.onend = () => resolve()
    utterance.onerror = () => resolve()

    window.speechSynthesis.speak(utterance)
  }

  pause() {
    if (!this.isPlaying || this.isPaused) return
    this.isPaused = true

    if (this.currentMode === 'neural' && this.audioElement) {
      this.audioElement.pause()
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.pause()
    }

    this.listeners.onPause()
  }

  resume() {
    if (!this.isPlaying || !this.isPaused) return
    this.isPaused = false

    if (this.currentMode === 'neural' && this.audioElement) {
      this.audioElement.play().catch(() => {})
    } else if ('speechSynthesis' in window) {
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
