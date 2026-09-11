import React, { useState, useEffect } from 'react'
import { BookMarked, Search, Volume2, Trash2, X, Sparkles, Layers, RotateCcw, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react'
import { studyStorageService } from '../services/studyStorageService'
import { ttsService } from '../services/ttsService'

export default function VocabularyDrawer({ isOpen, onClose }) {
  const [vocabList, setVocabList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [flashcardMode, setFlashcardMode] = useState(false)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    function loadVocab() {
      setVocabList(studyStorageService.getVocabulary())
    }

    loadVocab()
    return studyStorageService.subscribe(loadVocab)
  }, [])

  if (!isOpen) return null

  const filteredVocab = vocabList.filter(item => {
    const q = searchQuery.toLowerCase()
    return item.word.toLowerCase().includes(q) || (item.translation && item.translation.toLowerCase().includes(q))
  })

  function handleDelete(id) {
    studyStorageService.removeWord(id)
  }

  function handlePronounce(word) {
    ttsService.play(word)
  }

  const currentCard = filteredVocab[currentCardIndex] || filteredVocab[0]

  return (
    <div className="fixed inset-0 z-[10000] flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>শব্দভাণ্ডার (Vocabulary)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-semibold">
                  {vocabList.length}
                </span>
              </h2>
              <p className="text-xs text-slate-400">সংরক্ষিত নতুন শব্দ ও অর্থ</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setFlashcardMode(!flashcardMode)
                setIsFlipped(false)
                setCurrentCardIndex(0)
              }}
              className={`p-2 rounded-xl text-xs font-medium border transition flex items-center gap-1.5 ${
                flashcardMode
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
              }`}
              title="ফ্ল্যাশ কার্ড মোড"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ফ্ল্যাশ কার্ড</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {!flashcardMode && (
          <div className="p-4 border-b border-slate-800/60 bg-slate-950/20">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="শব্দ বা অর্থ দিয়ে খুঁজুন..."
                className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60 transition"
              />
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {flashcardMode ? (
            // Flashcard Practice Mode
            filteredVocab.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <Layers className="w-12 h-12 text-slate-600 mb-3" />
                <p className="font-semibold text-white">কোনো শব্দ পাওয়া যায়নি</p>
                <p className="text-xs mt-1">অনুশীলন করার জন্য প্রথমে পাঠ্য থেকে শব্দ সেভ করুন।</p>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-between py-4">
                <div className="text-center text-xs text-slate-400 font-medium">
                  কার্ড {currentCardIndex + 1} / {filteredVocab.length}
                </div>

                {/* Flip Card */}
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className={`cursor-pointer rounded-2xl p-8 text-center transition-all duration-300 min-h-[260px] flex flex-col items-center justify-center border shadow-xl relative select-none ${
                    isFlipped
                      ? 'bg-teal-950/40 border-teal-500/40 text-teal-100'
                      : 'bg-slate-950 border-slate-800 text-white hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider font-semibold mb-3 text-slate-400">
                    {isFlipped ? 'বাংলা অর্থ (Meaning)' : 'ইংরেজি শব্দ (English Word)'}
                  </span>

                  <div className="text-2xl font-bold mb-2">
                    {isFlipped ? (currentCard.translation || 'অর্থ নেই') : currentCard.word}
                  </div>

                  {!isFlipped && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePronounce(currentCard.word)
                      }}
                      className="mt-2 inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-xs px-3 py-1 rounded-full bg-teal-500/10"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>উচ্চারণ শুনুন</span>
                    </button>
                  )}

                  <div className="absolute bottom-3 text-xs text-slate-500 flex items-center gap-1">
                    <RotateCcw className="w-3 h-3" />
                    <span>ক্লিক করে {isFlipped ? 'মূল শব্দ' : 'অর্থ'} দেখুন</span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between gap-3 pt-4">
                  <button
                    disabled={currentCardIndex === 0}
                    onClick={() => {
                      setCurrentCardIndex(prev => Math.max(0, prev - 1))
                      setIsFlipped(false)
                    }}
                    className="flex-1 flex items-center justify-center gap-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-medium transition disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>পূর্ববর্তী</span>
                  </button>

                  <button
                    disabled={currentCardIndex === filteredVocab.length - 1}
                    onClick={() => {
                      setCurrentCardIndex(prev => Math.min(filteredVocab.length - 1, prev + 1))
                      setIsFlipped(false)
                    }}
                    className="flex-1 flex items-center justify-center gap-1 py-2.5 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-xl text-sm font-semibold transition disabled:opacity-30 shadow-lg shadow-teal-500/20"
                  >
                    <span>পরবর্তী</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          ) : (
            // Word List View
            filteredVocab.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
                <BookMarked className="w-12 h-12 text-slate-700 mb-3" />
                <p className="font-semibold text-slate-300">শব্দভাণ্ডার খালি</p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  যেকোনো পাঠ্যের শব্দ সিলেক্ট করে "শব্দ সেভ করুন" বা অনুবাদে ক্লিক করে আপনার শব্দভাণ্ডারে যোগ করুন।
                </p>
              </div>
            ) : (
              filteredVocab.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition relative group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-white font-sans">{item.word}</span>
                        <button
                          onClick={() => handlePronounce(item.word)}
                          className="p-1 text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 rounded-md transition"
                          title="উচ্চারণ শুনুন"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.translation && (
                        <div className="text-teal-300 text-sm font-medium mt-1">
                          {item.translation}
                        </div>
                      )}

                      {item.chapterTitle && (
                        <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
                          <span>{item.chapterTitle}</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="opacity-60 hover:opacity-100 p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                      title="মুছে ফেলুন"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </div>
  )
}
