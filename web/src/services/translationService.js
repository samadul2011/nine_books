// ==============================================================================
// Google Translate Service (Web)
// Translates selected words, phrases, and sentences to Bengali
// ==============================================================================

class TranslationService {
  constructor() {
    this.cache = new Map()
  }

  /**
   * Translates given text into Bengali (bn).
   * Automatically caches results for instant re-lookup.
   */
  async translateToBengali(text, fromLang = 'auto') {
    const trimmed = (text || '').trim()
    if (!trimmed) {
      return { originalText: '', translatedText: '', detectedLang: 'en' }
    }

    const cacheKey = `${fromLang}->bn:${trimmed.toLowerCase()}`
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)
    }

    // 1. Try local Vite proxy first
    try {
      const res = await fetch(`/api/translate?text=${encodeURIComponent(trimmed)}&from=${fromLang}&to=bn`)
      if (res.ok) {
        const data = await res.json()
        if (data && data.translatedText) {
          const result = {
            originalText: trimmed,
            translatedText: data.translatedText,
            detectedLang: data.detectedLang || 'en'
          }
          this.cache.set(cacheKey, result)
          return result
        }
      }
    } catch (e) {
      console.warn('Local translate proxy failed, trying direct Google Translate API...', e)
    }

    // 2. Direct fallback to Google Translate public endpoint
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=bn&dt=t&q=${encodeURIComponent(trimmed)}`
      const res = await fetch(url)
      if (res.ok) {
        const data = await res.json()
        const translatedText = data[0] ? data[0].map(item => item[0]).filter(Boolean).join('') : trimmed
        const detectedLang = data[2] || 'en'
        const result = {
          originalText: trimmed,
          translatedText: translatedText,
          detectedLang: detectedLang
        }
        this.cache.set(cacheKey, result)
        return result
      }
    } catch (err) {
      console.error('Direct Google Translate request failed:', err)
    }

    // Return original text if translation completely unavailable
    return {
      originalText: trimmed,
      translatedText: trimmed,
      detectedLang: 'en',
      error: 'অনুবাদ সম্পন্ন করা সম্ভব হয়নি।'
    }
  }
}

export const translationService = new TranslationService()
