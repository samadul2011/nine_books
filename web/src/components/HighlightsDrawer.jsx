import React, { useState, useEffect } from 'react'
import { Highlighter, Trash2, X, Volume2, Copy, Check } from 'lucide-react'
import { studyStorageService } from '../services/studyStorageService'
import { ttsService } from '../services/ttsService'

export default function HighlightsDrawer({ isOpen, onClose, onJumpToHighlight }) {
  const [highlights, setHighlights] = useState([])
  const [copiedId, setCopiedId] = useState(null)

  useEffect(() => {
    function loadHighlights() {
      setHighlights(studyStorageService.getHighlights())
    }

    loadHighlights()
    return studyStorageService.subscribe(loadHighlights)
  }, [])

  if (!isOpen) return null

  function handleDelete(id) {
    studyStorageService.removeHighlight(id)
  }

  function handlePronounce(text) {
    ttsService.play(text)
  }

  function handleCopy(text, id) {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1500)
  }

  return (
    <div className="fixed inset-0 z-[10000] flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400"></span>
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>গুরুত্বপূর্ণ বাক্য (Highlights)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold">
                  {highlights.length}
                </span>
              </h2>
              <p className="text-xs text-slate-400">সংরক্ষিত মূল পয়েন্ট ও কোটেশন</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {highlights.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-600 mb-3">
                <span className="w-4 h-4 rounded-full bg-slate-600"></span>
              </div>
              <p className="font-semibold text-slate-300">কোনো হাইলাইট নেই</p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                পড়ার সময় যেকোনো গুরুত্বপূর্ণ বাক্য সিলেক্ট করে "হাইলাইট" বাটনে ক্লিক করুন। এখানে আপনার সব নোট সাজানো থাকবে।
              </p>
            </div>
          ) : (
            highlights.map((item) => (
              <div
                key={item.id}
                className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 hover:border-amber-500/40 transition relative group"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-slate-200 text-sm leading-relaxed font-sans font-medium">
                      "{item.text}"
                    </p>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-900 text-xs">
                      <span className="text-slate-500 text-[11px] truncate max-w-[180px]">
                        {item.chapterTitle || 'পাঠ্যাংশ'}
                      </span>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handlePronounce(item.text)}
                          className="p-1 text-slate-400 hover:text-teal-400 rounded-md transition"
                          title="শুনুন"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleCopy(item.text, item.id)}
                          className="p-1 text-slate-400 hover:text-white rounded-md transition"
                          title="কপি করুন"
                        >
                          {copiedId === item.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1 text-slate-400 hover:text-red-400 rounded-md transition"
                          title="মুছে ফেলুন"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
