import React, { useState } from 'react'
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react'

export default function ShortQuestionsViewer({ questions = [], chapterTitle = '', chapterIndex = 1 }) {
  const [expanded, setExpanded] = useState({})
  const [copiedId, setCopiedId] = useState(null)

  const toggleAnswer = (qId) => {
    setExpanded(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }))
  }

  const toggleAll = (open) => {
    if (!open) {
      setExpanded({})
      return
    }
    const all = {}
    questions.forEach(q => {
      all[q.id] = true
    })
    setExpanded(all)
  }

  const handleCopy = (q) => {
    const text = `প্রশ্ন: ${q.question}\nউত্তর: ${q.answer}`
    navigator.clipboard.writeText(text)
    setCopiedId(q.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-xl">
        <div className="inline-flex p-4 rounded-2xl bg-amber-500/10 text-amber-400 mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">এই অধ্যায়ে কোনো সংক্ষিপ্ত প্রশ্ন পাওয়া যায়নি</h3>
      </div>
    )
  }

  const isAllOpen = Object.keys(expanded).length === questions.length

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-teal-950/40 border border-amber-500/30 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>পাঠ্যবই সংক্ষিপ্ত প্রশ্নোত্তর • বোর্ড ও ক্লাসের রিভিশন</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span>{chapterTitle || `অধ্যায় ${chapterIndex}`}</span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              মোট {questions.length}টি প্রশ্ন
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            গুরুত্বপূর্ণ সংজ্ঞামূলক ও ব্যাখ্যামূলক প্রশ্নসমূহের আদর্শ উত্তরমালা।
          </p>
        </div>

        <button
          onClick={() => toggleAll(!isAllOpen)}
          className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-amber-500/30 transition shadow-sm flex items-center gap-1.5 self-start sm:self-auto"
        >
          {isAllOpen ? (
            <>
              <ChevronUp className="w-4 h-4" />
              <span>সব উত্তর লুকান</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              <span>সব উত্তর দেখুন</span>
            </>
          )}
        </button>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const isOpen = expanded[q.id]
          const isCopied = copiedId === q.id
          const qNum = q.question_no || idx + 1

          return (
            <div
              key={q.id || idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 shadow-lg transition-all"
            >
              <div 
                onClick={() => toggleAnswer(q.id)}
                className="flex items-start justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-xs shrink-0 mt-0.5 border border-amber-500/30">
                    {qNum}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {q.question}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCopy(q)
                    }}
                    className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
                    title="কপি করুন"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <div className="p-1 text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {isOpen && (
                <div className="mt-4 pt-3.5 border-t border-slate-800/80 pl-10 animate-in fade-in duration-150">
                  <div className="text-xs font-bold text-amber-400/90 mb-1 flex items-center gap-1.5 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>আদর্শ উত্তর:</span>
                  </div>
                  <div className="text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans">
                    {q.answer}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
