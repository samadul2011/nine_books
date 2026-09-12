import React, { useState } from 'react'
import { 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Award,
  Copy,
  Check,
  Calculator,
  ListOrdered
} from 'lucide-react'

export default function CreativeQuestionsViewer({ questions = [], chapterTitle = '', chapterIndex = 1 }) {
  const [expandedSolutions, setExpandedSolutions] = useState({})
  const [copiedId, setCopiedId] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const toggleSolution = (qId) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }))
  }

  const toggleAllSolutions = (expand) => {
    if (!expand) {
      setExpandedSolutions({})
      return
    }
    const all = {}
    questions.forEach(q => {
      all[q.id] = true
    })
    setExpandedSolutions(all)
  }

  const handleCopyQuestion = (q) => {
    const text = `${q.title}\n\nউদ্দীপক:\n${q.stem}\n\nক. ${q.ka}\nখ. ${q.kha}\nগ. ${q.ga}`
    navigator.clipboard.writeText(text)
    setCopiedId(q.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-xl">
        <div className="inline-flex p-4 rounded-2xl bg-teal-500/10 text-teal-400 mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">এই অধ্যায়ে কোনো সৃজনশীল প্রশ্ন নেই</h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          এই অধ্যায়টির প্রস্তুতি নিতে 'সংক্ষিপ্ত প্রশ্ন' ও 'কুইজ (MCQ)' ট্যাবগুলো দেখুন।
        </p>
      </div>
    )
  }

  const filteredQuestions = activeFilter === 'all' 
    ? questions 
    : questions.filter(q => q.id === activeFilter)

  const isAllExpanded = Object.keys(expandedSolutions).length === questions.length

  return (
    <div className="space-y-6">
      {/* Top Banner Toolbar */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 border border-teal-500/30 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>NCTB পাঠ্যবই সৃজনশীল প্রশ্নাবলী • ১০ নম্বর বোর্ড মান</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span>{chapterTitle || `অধ্যায় ${chapterIndex}`}</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                মোট {questions.length}টি প্রশ্ন
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              উদ্দীপকটি ভালোভাবে পড়ে 'ক', 'খ' ও 'গ' অংশের সমাধান করুন। সমাধান দেখতে 'উত্তর ও সমাধান দেখুন' বাটনে চাপুন।
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap self-start md:self-auto">
            <button
              onClick={() => toggleAllSolutions(!isAllExpanded)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-teal-300 border border-teal-500/30 transition shadow-sm flex items-center gap-1.5"
            >
              {isAllExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>সব সমাধান লুকান</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span>সব সমাধান দেখুন</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Jump Bar */}
        <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-white/10 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1 shrink-0">
            <ListOrdered className="w-3.5 h-3.5 text-teal-400" />
            প্রশ্ন নং:
          </span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition shrink-0 ${
              activeFilter === 'all'
                ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
            }`}
          >
            সবগুলো ({questions.length})
          </button>
          {questions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setActiveFilter(q.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition shrink-0 ${
                activeFilter === q.id
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
              }`}
            >
              প্রশ্ন {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Creative Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, idx) => {
          const isExpanded = expandedSolutions[q.id]
          const isCopied = copiedId === q.id
          const qNum = q.question_no || idx + 1

          return (
            <div
              key={q.id || idx}
              id={`creative-q-${qNum}`}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-xl transition-all"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-slate-950 font-black text-sm shadow-md">
                    {qNum}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {q.title || `সৃজনশীল প্রশ্ন ${qNum}`}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[11px] font-bold">
                    ১০ নম্বর
                  </span>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => handleCopyQuestion(q)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs flex items-center gap-1"
                    title="প্রশ্নটি কপি করুন"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">কপি হয়েছে</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>কপি</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Scenario / Stimulus (উদ্দীপক) */}
              <div className="my-5 bg-slate-950/70 border border-slate-800/90 rounded-2xl p-4 sm:p-5">
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-teal-400" />
                  <span>উদ্দীপক (Scenario / Transaction Data):</span>
                </div>
                <div className="text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans">
                  {q.stem}
                </div>
              </div>

              {/* Sub-Questions (ক, খ, গ) */}
              <div className="space-y-3 mb-5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  প্রশ্নসমূহ (Questions):
                </div>

                {/* ক */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-black shrink-0">
                    ক
                  </span>
                  <div className="flex-1 text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                    {q.ka}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded-md shrink-0">
                    ২ নম্বর
                  </span>
                </div>

                {/* খ */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="px-2.5 py-1 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-black shrink-0">
                    খ
                  </span>
                  <div className="flex-1 text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                    {q.kha}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded-md shrink-0">
                    ৪ নম্বর
                  </span>
                </div>

                {/* গ */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-black shrink-0">
                    গ
                  </span>
                  <div className="flex-1 text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                    {q.ga}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded-md shrink-0">
                    ৪ নম্বর
                  </span>
                </div>
              </div>

              {/* Solution Toggle & Content */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => toggleSolution(q.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                    isExpanded
                      ? 'bg-teal-500/20 text-teal-200 border border-teal-500/40'
                      : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-teal-400" />
                    <span>{isExpanded ? 'সমাধান লুকান' : 'উত্তর ও সমাধান দেখুন (Show Solution)'}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-teal-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {isExpanded && q.solution && (
                  <div className="mt-4 p-5 rounded-2xl bg-teal-950/20 border border-teal-500/30 space-y-4 animate-in fade-in zoom-in-98 duration-200">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>মডেল সমাধান ও পাঠ্যবই উত্তরমালা (Model Solution)</span>
                    </div>

                    {/* ক সমাধান */}
                    {q.solution.ka && (
                      <div className="bg-slate-950/60 rounded-xl p-4 border border-teal-500/20">
                        <div className="text-xs font-bold text-cyan-300 mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>'ক' অংশের সমাধান:</span>
                        </div>
                        <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">
                          {q.solution.ka}
                        </div>
                      </div>
                    )}

                    {/* খ সমাধান */}
                    {q.solution.kha && (
                      <div className="bg-slate-950/60 rounded-xl p-4 border border-teal-500/20">
                        <div className="text-xs font-bold text-teal-300 mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                          <span>'খ' অংশের সমাধান:</span>
                        </div>
                        <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">
                          {q.solution.kha}
                        </div>
                      </div>
                    )}

                    {/* গ সমাধান */}
                    {q.solution.ga && (
                      <div className="bg-slate-950/60 rounded-xl p-4 border border-teal-500/20">
                        <div className="text-xs font-bold text-emerald-300 mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>'গ' অংশের সমাধান:</span>
                        </div>
                        <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">
                          {q.solution.ga}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
