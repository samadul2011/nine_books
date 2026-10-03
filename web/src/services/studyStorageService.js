// ==============================================================================
// Study Storage Service (Web)
// Manages Persistent Saved Vocabulary Words & Sentence Highlights
// ==============================================================================

const VOCAB_KEY = 'ninebooks_saved_vocabulary_v1'
const HIGHLIGHTS_KEY = 'ninebooks_saved_highlights_v1'
const BOOKMARKS_KEY = 'ninebooks_saved_bookmarks_v1'
const LAST_READ_KEY = 'ninebooks_last_read_v1'

class StudyStorageService {
  constructor() {
    this.listeners = new Set()
  }

  subscribe(listener) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  notify() {
    this.listeners.forEach(cb => {
      try {
        cb()
      } catch (e) {
        console.error('Listener callback error:', e)
      }
    })
  }

  // ----------------------------------------------------------------------------
  // VOCABULARY / SAVED WORDS
  // ----------------------------------------------------------------------------

  getVocabulary() {
    try {
      const raw = localStorage.getItem(VOCAB_KEY)
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      console.error('Failed to read vocabulary from localStorage', e)
      return []
    }
  }

  saveWord({ word, translation, chapterTitle = '', contextSentence = '' }) {
    if (!word || !word.trim()) return null
    const cleanWord = word.trim()
    const cleanTrans = (translation || '').trim()

    const list = this.getVocabulary()
    // Check if word already exists (case-insensitive)
    const existingIndex = list.findIndex(item => item.word.toLowerCase() === cleanWord.toLowerCase())

    const newItem = {
      id: existingIndex !== -1 ? list[existingIndex].id : 'vocab_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      word: cleanWord,
      translation: cleanTrans || (existingIndex !== -1 ? list[existingIndex].translation : ''),
      chapterTitle: chapterTitle || (existingIndex !== -1 ? list[existingIndex].chapterTitle : ''),
      contextSentence: contextSentence || (existingIndex !== -1 ? list[existingIndex].contextSentence : ''),
      timestamp: Date.now()
    }

    if (existingIndex !== -1) {
      list[existingIndex] = newItem
    } else {
      list.unshift(newItem)
    }

    try {
      localStorage.setItem(VOCAB_KEY, JSON.stringify(list))
      this.notify()
      return newItem
    } catch (e) {
      console.error('Failed to save word', e)
      return null
    }
  }

  removeWord(id) {
    const list = this.getVocabulary().filter(item => item.id !== id)
    try {
      localStorage.setItem(VOCAB_KEY, JSON.stringify(list))
      this.notify()
    } catch (e) {
      console.error('Failed to remove word', e)
    }
  }

  isWordSaved(word) {
    if (!word) return false
    const clean = word.trim().toLowerCase()
    return this.getVocabulary().some(item => item.word.toLowerCase() === clean)
  }

  // ----------------------------------------------------------------------------
  // SENTENCE HIGHLIGHTS
  // ----------------------------------------------------------------------------

  getHighlights(chapterId = null, lessonId = null) {
    try {
      const raw = localStorage.getItem(HIGHLIGHTS_KEY)
      const all = raw ? JSON.parse(raw) : []
      if (!chapterId && !lessonId) return all

      return all.filter(h => {
        if (chapterId && h.chapterId !== chapterId) return false
        if (lessonId && h.lessonId !== lessonId) return false
        return true
      })
    } catch (e) {
      console.error('Failed to read highlights from localStorage', e)
      return []
    }
  }

  addHighlight({ text, chapterId = '', lessonId = '', chapterTitle = '', color = 'amber' }) {
    const cleanText = (text || '').trim()
    if (!cleanText || cleanText.length < 3) return null

    const all = this.getHighlights()
    // Avoid exact duplicates in same chapter/lesson
    const exists = all.find(h => h.text.toLowerCase() === cleanText.toLowerCase() && h.chapterId === chapterId)
    if (exists) {
      return exists
    }

    const newHighlight = {
      id: 'hl_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      text: cleanText,
      chapterId,
      lessonId,
      chapterTitle,
      color, // 'amber' | 'emerald' | 'cyan' | 'pink'
      timestamp: Date.now()
    }

    all.unshift(newHighlight)
    try {
      localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(all))
      this.notify()
      return newHighlight
    } catch (e) {
      console.error('Failed to save highlight', e)
      return null
    }
  }

  removeHighlight(id) {
    const all = this.getHighlights().filter(h => h.id !== id)
    try {
      localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(all))
      this.notify()
    } catch (e) {
      console.error('Failed to remove highlight', e)
    }
  }

  removeHighlightByText(text, chapterId = null) {
    const clean = (text || '').trim().toLowerCase()
    const all = this.getHighlights().filter(h => {
      const matchText = h.text.toLowerCase() === clean
      if (chapterId) {
        return !(matchText && h.chapterId === chapterId)
      }
      return !matchText
    })
    try {
      localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(all))
      this.notify()
    } catch (e) {
      console.error('Failed to remove highlight by text', e)
    }
  }

  // ----------------------------------------------------------------------------
  // BOOKMARKS / বুকমার্কস
  // ----------------------------------------------------------------------------

  getBookmarks() {
    try {
      const raw = localStorage.getItem(BOOKMARKS_KEY)
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      console.error('Failed to read bookmarks from localStorage', e)
      return []
    }
  }

  isBookmarked(chapterId) {
    if (!chapterId) return false
    const list = this.getBookmarks()
    return list.some(b => String(b.chapterId) === String(chapterId))
  }

  toggleBookmark({ chapterId, chapterTitle, subjectId, subjectName, orderIndex = 1 }) {
    if (!chapterId) return false
    const list = this.getBookmarks()
    const existingIndex = list.findIndex(b => String(b.chapterId) === String(chapterId))

    if (existingIndex !== -1) {
      list.splice(existingIndex, 1)
      try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list))
        this.notify()
      } catch (e) {
        console.error('Failed to update bookmarks', e)
      }
      return false // unbookmarked
    } else {
      const newBookmark = {
        id: 'bm_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        chapterId: String(chapterId),
        chapterTitle: chapterTitle || 'অধ্যায়',
        subjectId: subjectId || '',
        subjectName: subjectName || 'বিষয়',
        orderIndex,
        timestamp: Date.now()
      }
      list.unshift(newBookmark)
      try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list))
        this.notify()
      } catch (e) {
        console.error('Failed to save bookmark', e)
      }
      return true // bookmarked
    }
  }

  removeBookmark(chapterId) {
    const list = this.getBookmarks().filter(b => String(b.chapterId) !== String(chapterId) && b.id !== chapterId)
    try {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(list))
      this.notify()
    } catch (e) {
      console.error('Failed to remove bookmark', e)
    }
  }

  // ----------------------------------------------------------------------------
  // CONTINUE READING / পড়া চালিয়ে যান
  // ----------------------------------------------------------------------------

  getLastRead() {
    try {
      const raw = localStorage.getItem(LAST_READ_KEY)
      return raw ? JSON.parse(raw) : null
    } catch (e) {
      console.error('Failed to read last-read from localStorage', e)
      return null
    }
  }

  saveLastRead({ subjectId, chapterId, subjectNameBn, subjectNameEn, chapterTitleBn, chapterTitleEn, activeView = 'reading' }) {
    if (!subjectId || !chapterId) return null
    const entry = {
      subjectId,
      chapterId: String(chapterId),
      subjectNameBn: subjectNameBn || '',
      subjectNameEn: subjectNameEn || '',
      chapterTitleBn: chapterTitleBn || '',
      chapterTitleEn: chapterTitleEn || '',
      activeView: activeView || 'reading',
      timestamp: Date.now()
    }
    try {
      localStorage.setItem(LAST_READ_KEY, JSON.stringify(entry))
      this.notify()
      return entry
    } catch (e) {
      console.error('Failed to save last-read', e)
      return null
    }
  }

  clearLastRead() {
    try {
      localStorage.removeItem(LAST_READ_KEY)
      this.notify()
    } catch (e) {
      console.error('Failed to clear last-read', e)
    }
  }
}

export const studyStorageService = new StudyStorageService()

