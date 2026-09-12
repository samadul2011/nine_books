import React, { useState, useEffect, useRef } from 'react'
import { Languages, Highlighter, BookmarkPlus, Volume2, X, Check, Loader2, Sparkles } from 'lucide-react'
import { translationService } from '../services/translationService'
import { studyStorageService } from '../services/studyStorageService'
import { ttsService } from '../services/ttsService'

export default function TextSelectionToolbar({ chapterTitle = '', lessonId = '' }) {
  const [selectionInfo, setSelectionInfo] = useState(null)
  const [translationModal, setTranslationModal] = useState(null) // { text, translation, loading }
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [highlightSuccess, setHighlightSuccess] = useState(false)
  const toolbarRef = useRef(null)

  useEffect(() => {
    function handleMouseUp(e) {
      // If clicking inside toolbar or modal, don't clear
      if (toolbarRef.current && toolbarRef.current.contains(e.target)) {
        return
      }

      const selection = window.getSelection()
      if (!selection || selection.isCollapsed) {
        setSelectionInfo(null)
        return
      }

      const text = selection.toString().trim()
      if (text.length < 2) {
        setSelectionInfo(null)
        return
      }

      // Check if selection is within the reading material
      const anchorNode = selection.anchorNode
      const readingContainer = anchorNode?.parentElement?.closest('.markdown-content') || anchorNode?.parentElement?.closest('.reading-area')
      if (!readingContainer) {
        setSelectionInfo(null)
        return
      }

      try {
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        if (rect && rect.width > 0) {
          setSelectionInfo({
            text,
            x: Math.max(16, Math.min(window.innerWidth - 320, rect.left + (rect.width / 2) - 130)),
            y: Math.max(10, rect.top + window.scrollY - 52)
          })
          setSaveSuccess(false)
          setHighlightSuccess(false)
        }
      } catch (err) {
        // Range bounding box fallback
      }
    }

    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchend', handleMouseUp)
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  async function handleTranslate() {
    if (!selectionInfo) return
    const textToTranslate = selectionInfo.text
    setSelectionInfo(null)

    setTranslationModal({
      text: textToTranslate,
      translation: '',
      loading: true
    })

    const res = await translationService.translateToBengali(textToTranslate)
    setTranslationModal({
      text: textToTranslate,
      translation: res.translatedText,
      loading: false
    })
  }

  function handlePronounce(textToSpeak) {
    const text = textToSpeak || selectionInfo?.text
    if (text) {
      ttsService.playOnlySelection(text)
    }
  }

  function handleSaveWord(customWord, customTranslation) {
    const wordToSave = customWord || selectionInfo?.text
    const transToSave = customTranslation || ''
    if (!wordToSave) return

    studyStorageService.saveWord({
      word: wordToSave,
      translation: transToSave,
      chapterTitle
    })

    setSaveSuccess(true)
    setTimeout(() => {
      setSaveSuccess(false)
      setSelectionInfo(null)
    }, 1500)
  }

  function handleHighlight(color = 'amber') {
    if (!selectionInfo) return
    studyStorageService.addHighlight({
      text: selectionInfo.text,
      chapterTitle,
      lessonId,
      color
    })

    setHighlightSuccess(true)
    setTimeout(() => {
      setHighlightSuccess(false)
      setSelectionInfo(null)
    }, 1500)
  }

  return (
    <>
      {/* Floating Action Bar upon Text Selection */}
      {selectionInfo && (
        <div
          ref={toolbarRef}
          style={{
            position: 'absolute',
            top: `${selectionInfo.y}px`,
            left: `${selectionInfo.x}px`,
            zIndex: 9999
          }}
          className="flex items-center gap-1 bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/80 px-2 py-1.5 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        >
          <button
            onClick={handleTranslate}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 transition"
            title="বাংলা অনুবাদ (Google Translate)"
          >
            <Languages className="w-3.5 h-3.5 text-teal-400" />
            <span>অনুবাদ</span>
          </button>

          <button
            onClick={() => handlePronounce()}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg hover:bg-slate-800 text-cyan-300 hover:text-white transition"
            title="শুধুমাত্র এই সিলেক্টেড অংশ শুনুন (পড়া শেষে থামবে)"
          >
            <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>শুনুন</span>
          </button>

          <button
            onClick={() => handleHighlight('amber')}
            className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg transition ${
              highlightSuccess 
                ? 'bg-amber-500/30 text-amber-300' 
                : 'hover:bg-slate-800 text-slate-300 hover:text-amber-300'
            }`}
            title="গুরুত্বপূর্ণ বাক্য হাইলাইট করুন"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span>{highlightSuccess ? 'হাইলাইটেড!' : 'হাইলাইট'}</span>
          </button>

          <button
            onClick={() => handleSaveWord()}
            className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg transition ${
              saveSuccess 
                ? 'bg-emerald-500/30 text-emerald-300' 
                : 'hover:bg-slate-800 text-slate-300 hover:text-emerald-300'
            }`}
            title="শব্দভাণ্ডারে সেভ করুন"
          >
            {saveSuccess ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <BookmarkPlus className="w-3.5 h-3.5 text-emerald-400" />
            )}
            <span>{saveSuccess ? 'সেভ হয়েছে!' : 'সেভ'}</span>
          </button>

          <button
            onClick={() => setSelectionInfo(null)}
            className="p-1 text-slate-400 hover:text-slate-200 rounded-md hover:bg-slate-800"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Translation Popup Modal */}
      {translationModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setTranslationModal(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">
              <Languages className="w-4 h-4" />
              <span>Google Translate • বাংলা অনুবাদ</span>
            </div>

            {/* Original Text */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 mb-4">
              <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-between">
                <span>মূল ইংরেজি (Original Text):</span>
                <button
                  onClick={() => handlePronounce(translationModal.text)}
                  className="flex items-center gap-1 text-teal-400 hover:text-teal-300 text-xs"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>শুনুন</span>
                </button>
              </div>
              <div className="text-white text-base font-medium leading-relaxed font-sans">
                {translationModal.text}
              </div>
            </div>

            {/* Translated Output */}
            <div className="bg-teal-950/30 border border-teal-500/30 rounded-xl p-4 mb-5">
              <div className="text-xs text-teal-400 font-medium mb-1">
                বাংলা অর্থ (Bengali Meaning):
              </div>
              {translationModal.loading ? (
                <div className="flex items-center gap-2 text-teal-300 text-sm py-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>অনুবাদ করা হচ্ছে...</span>
                </div>
              ) : (
                <div className="text-teal-100 text-lg font-semibold leading-relaxed">
                  {translationModal.translation || 'অনুবাদ পাওয়া যায়নি।'}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  handleSaveWord(translationModal.text, translationModal.translation)
                  setTranslationModal(null)
                }}
                disabled={translationModal.loading}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-xl text-sm transition shadow-lg shadow-teal-500/20 disabled:opacity-50"
              >
                <BookmarkPlus className="w-4 h-4" />
                <span>শব্দার্থ সেভ করুন</span>
              </button>

              <button
                onClick={() => {
                  studyStorageService.addHighlight({
                    text: translationModal.text,
                    chapterTitle,
                    lessonId,
                    color: 'amber'
                  })
                  setTranslationModal(null)
                }}
                disabled={translationModal.loading}
                className="flex items-center gap-2 py-2.5 px-3.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl text-sm font-medium border border-slate-700 transition"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span>হাইলাইট</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
