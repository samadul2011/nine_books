import React, { useState, useEffect } from 'react'
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  ChevronLeft, 
  HelpCircle, 
  Volume2, 
  Sparkles,
  BookOpen,
  Send,
  AlertCircle
} from 'lucide-react'
import { ttsService } from '../services/ttsService'

export default function PassageExamViewer({ passages = [], topicName = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [activeBlankId, setActiveBlankId] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const currentPassage = passages[currentIndex] || null

  // Reset when current passage changes
  useEffect(() => {
    setUserAnswers({})
    setIsSubmitted(false)
    setScore(0)
    if (currentPassage?.blanks?.[0]) {
      setActiveBlankId(currentPassage.blanks[0].id)
    }
  }, [currentIndex, currentPassage?.id])

  if (!currentPassage) {
    return (
      <div className="p-8 text-center text-slate-400 bg-slate-950/60 rounded-3xl border border-slate-800">
        <HelpCircle className="w-10 h-10 mx-auto mb-2 text-slate-500" />
        <p>এই অধ্যায়ের জন্য এখনও কোনো প্যাসেজ টেস্ট প্রস্তুত করা হয়নি।</p>
      </div>
    )
  }

  const blanks = currentPassage.blanks || []
  const clues = currentPassage.clues || []

  const handleInputChange = (blankId, value) => {
    if (isSubmitted) return
    setUserAnswers(prev => ({
      ...prev,
      [blankId]: value
    }))
  }

  const handleClueClick = (clue) => {
    if (isSubmitted) return
    // If active blank, fill it
    let targetBlank = activeBlankId
    if (!targetBlank || userAnswers[targetBlank]) {
      // Find first empty blank
      const empty = blanks.find(b => !userAnswers[b.id])
      if (empty) targetBlank = empty.id
      else targetBlank = blanks[0].id
    }

    if (targetBlank) {
      setUserAnswers(prev => ({
        ...prev,
        [targetBlank]: clue
      }))
      // Advance to next blank
      const currIdx = blanks.findIndex(b => b.id === targetBlank)
      if (currIdx >= 0 && currIdx < blanks.length - 1) {
        setActiveBlankId(blanks[currIdx + 1].id)
      }
    }
  }

  const handleSubmit = () => {
    let earned = 0
    blanks.forEach(b => {
      const ans = (userAnswers[b.id] || '').trim().toLowerCase()
      const acceptedList = (b.accepted || [b.answer]).map(a => a.toLowerCase().trim())
      if (acceptedList.includes(ans)) {
        earned++
      }
    })
    setScore(earned)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setUserAnswers({})
    setIsSubmitted(false)
    setScore(0)
    if (blanks[0]) setActiveBlankId(blanks[0].id)
  }

  const handleSpeakPassage = async () => {
    if (isSpeaking) return
    try {
      setIsSpeaking(true)
      // Clean passage markers for smooth reading
      const cleanText = currentPassage.passage
        .replace(/\([a-j]\)\s*\[___[^\]]*\]/gi, '...')
      await ttsService.speak(cleanText, 'en')
    } catch (e) {
      console.error(e)
    } finally {
      setIsSpeaking(false)
    }
  }

  // Render the passage text with inline inputs or result badges
  const renderPassageWithBlanks = () => {
    const text = currentPassage.passage
    // Regex matching (a) [___] or (a) [___: clue]
    const parts = text.split(/(\([a-j]\)\s*\[___[^\]]*\])/gi)

    return (
      <div className="text-base sm:text-lg leading-relaxed text-slate-200 font-serif space-y-2">
        {parts.map((part, idx) => {
          const match = part.match(/\(([a-j])\)\s*\[___:?\s*([^\]]*)\]/i)
          if (match) {
            const blankId = match[1].toLowerCase()
            const hint = match[2]?.trim()
            const blankObj = blanks.find(b => b.id === blankId)
            const val = userAnswers[blankId] || ''
            const isCorrect = isSubmitted && blankObj && 
              (blankObj.accepted || [blankObj.answer])
                .map(a => a.toLowerCase().trim())
                .includes(val.trim().toLowerCase())

            return (
              <span key={idx} className="inline-flex items-center mx-1 my-1 align-middle">
                <span className="font-sans text-xs font-bold text-teal-400 bg-teal-950/60 border border-teal-800/60 px-1.5 py-0.5 rounded-l-md">
                  ({blankId})
                </span>
                
                {isSubmitted ? (
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-sm font-sans font-semibold rounded-r-md border ${
                    isCorrect 
                      ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-300' 
                      : 'bg-rose-950/80 border-rose-500/80 text-rose-300'
                  }`}>
                    <span>{val || '(খালি)'}</span>
                    {isCorrect ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <span className="text-xs text-emerald-300 font-bold ml-1">
                        → {blankObj?.answer}
                      </span>
                    )}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={val}
                    placeholder={hint ? hint : '...'}
                    onFocus={() => setActiveBlankId(blankId)}
                    onChange={(e) => handleInputChange(blankId, e.target.value)}
                    className={`font-sans text-sm px-2 py-0.5 w-24 sm:w-28 rounded-r-md bg-slate-900 border text-white focus:outline-none transition ${
                      activeBlankId === blankId
                        ? 'border-teal-400 ring-2 ring-teal-500/30'
                        : val
                        ? 'border-teal-600/70 bg-teal-950/20'
                        : 'border-slate-700'
                    }`}
                  />
                )}
              </span>
            )
          }
          return <span key={idx}>{part}</span>
        })}
      </div>
    )
  }

  const percentage = blanks.length > 0 ? Math.round((score / blanks.length) * 100) : 0

  return (
    <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-6">
      {/* Header Banner: Board Exam Standard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center gap-1">
              <Award className="w-3 h-3" />
              NCTB Board Exam Standard
            </span>
            <span className="text-xs text-slate-400 font-semibold">
              Mark: 1 × {blanks.length} = {blanks.length}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>{currentPassage.titleBn || 'বোর্ড স্ট্যান্ডার্ড প্যাসেজ টেস্ট'}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {currentPassage.title}
          </p>
        </div>

        {/* Action icons & Passage switcher */}
        <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
          <button
            onClick={handleSpeakPassage}
            disabled={isSpeaking}
            title="Read passage aloud"
            className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-teal-500/60 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-semibold"
          >
            <Volume2 className={`w-4 h-4 text-teal-400 ${isSpeaking ? 'animate-pulse' : ''}`} />
            <span className="hidden sm:inline">পড়ে শোনাও</span>
          </button>

          {passages.length > 1 && (
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="p-1.5 rounded-lg text-slate-300 hover:bg-slate-800 disabled:opacity-30 transition"
                title="পূর্ববর্তী প্যাসেজ"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <select
                value={currentIndex}
                onChange={(e) => setCurrentIndex(Number(e.target.value))}
                className="bg-slate-950 text-teal-300 font-bold text-xs px-2 py-1 rounded-lg border border-slate-700 focus:outline-none focus:border-teal-400 cursor-pointer"
              >
                {passages.map((_, pIdx) => (
                  <option key={pIdx} value={pIdx} className="bg-slate-900 text-white">
                    প্যাসেজ #{pIdx + 1} / {passages.length}
                  </option>
                ))}
              </select>

              <button
                disabled={currentIndex === passages.length - 1}
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="p-1.5 rounded-lg text-slate-300 hover:bg-slate-800 disabled:opacity-30 transition"
                title="পরবর্তী প্যাসেজ"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Horizontal Quick Jump Pills (1 to 20) */}
      {passages.length > 1 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-800">
          <span className="text-xs font-semibold text-slate-400 flex-shrink-0 mr-1">
            প্যাসেজ দ্রুত বাছাই:
          </span>
          {passages.map((_, pIdx) => (
            <button
              key={pIdx}
              type="button"
              onClick={() => setCurrentIndex(pIdx)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex-shrink-0 ${
                currentIndex === pIdx
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              #{pIdx + 1}
            </button>
          ))}
        </div>
      )}

      {/* Clue Box / Word Bank (Words from Box) */}
      {clues.length > 0 && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 to-teal-950/40 border border-teal-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              বক্সের শব্দ বা ক্লু তালিকা (Words from Box / Clues):
            </span>
            <span className="text-[11px] text-slate-400">
              {isSubmitted ? 'পরীক্ষা সমাপ্ত' : 'ক্লুতে ক্লিক করলে সরাসরি শূন্যস্থানে বসবে'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {clues.map((clue, cIdx) => (
              <button
                key={cIdx}
                type="button"
                disabled={isSubmitted}
                onClick={() => handleClueClick(clue)}
                className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-950/80 border border-slate-700/80 hover:border-teal-400 text-teal-200 hover:text-white hover:bg-teal-950/60 transition shadow-sm active:scale-95 disabled:cursor-not-allowed"
              >
                {clue}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Interactive Passage Container */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 shadow-inner">
        {renderPassageWithBlanks()}
      </div>

      {/* Quick Input Row for Mobile / Handy Typing */}
      {!isSubmitted && (
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 flex items-center gap-1">
            <span>দ্রুত উত্তর লেখার তালিকা (Quick Blank Answers):</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {blanks.map((b) => (
              <div 
                key={b.id} 
                onClick={() => setActiveBlankId(b.id)}
                className={`flex items-center rounded-xl border bg-slate-900/70 px-2.5 py-1.5 transition ${
                  activeBlankId === b.id 
                    ? 'border-teal-400 ring-2 ring-teal-500/20' 
                    : 'border-slate-800'
                }`}
              >
                <span className="text-xs font-bold text-teal-300 mr-1.5 flex-shrink-0">
                  {b.label}:
                </span>
                <input
                  type="text"
                  value={userAnswers[b.id] || ''}
                  onChange={(e) => handleInputChange(b.id, e.target.value)}
                  placeholder="উত্তর লিখুন..."
                  className="w-full text-xs bg-transparent text-white focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submission & Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        {!isSubmitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 transition active:scale-98"
          >
            <Send className="w-4 h-4" />
            <span>উত্তর সাবমিট করুন ও নম্বর দেখুন (Submit Answers)</span>
          </button>
        ) : (
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-2 transition"
            >
              <RotateCcw className="w-4 h-4 text-teal-400" />
              <span>পুনরায় চেষ্টা করুন (Try Again)</span>
            </button>

            {passages.length > 1 && currentIndex < passages.length - 1 && (
              <button
                type="button"
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
              >
                <span>পরবর্তী প্যাসেজ টেস্ট</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Live Blank Counter */}
        <span className="text-xs text-slate-400">
          পূরণ হয়েছে: {Object.values(userAnswers).filter(Boolean).length} / {blanks.length} টি শূন্যস্থান
        </span>
      </div>

      {/* Post-Submission Result Card & Explanations */}
      {isSubmitted && (
        <div className="mt-6 space-y-6 pt-6 border-t border-slate-800/80 animate-fadeIn">
          {/* Result Score Card */}
          <div className={`p-5 sm:p-6 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            percentage >= 80 
              ? 'bg-gradient-to-r from-emerald-950/70 via-slate-900 to-teal-950/70 border-emerald-500/50'
              : percentage >= 50
              ? 'bg-gradient-to-r from-amber-950/70 via-slate-900 to-slate-900 border-amber-500/50'
              : 'bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-900 border-rose-500/50'
          }`}>
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 ${
                percentage >= 80 ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-teal-300'
              }`}>
                {score}/{blanks.length}
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {percentage === 100 && '🌟 অসাধারণ! আপনি সম্পূর্ণ ফুল মার্কস পেয়েছেন!'}
                  {percentage >= 80 && percentage < 100 && '🎉 চমৎকার ফলাফল! আপনি ৮০%+ মার্কস অর্জন করেছেন!'}
                  {percentage >= 50 && percentage < 80 && '👍 ভালো হয়েছে! ভুলগুলো সংশোধন করে আবার চেষ্টা করুন।'}
                  {percentage < 50 && '💡 আরো অনুশীলন প্রয়োজন! নিচের ব্যাখ্যাটি মনোযোগ দিয়ে পড়ুন।'}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  প্রাপ্ত নম্বর: {score} / {blanks.length} ({percentage}%) • বিষয়: {topicName || 'Grammar Test'}
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-teal-400 text-xs font-bold text-teal-300 transition"
            >
              আবার পরীক্ষা দিন
            </button>
          </div>

          {/* Detailed Solution & Grammar Explanations Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-teal-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-400" />
              <span>প্রতিটি শূন্যস্থানের সঠিক উত্তর ও ব্যাকরণিক ব্যাখ্যা (Detailed Grammar Explanations):</span>
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {blanks.map((b) => {
                const userVal = (userAnswers[b.id] || '').trim()
                const isCorrect = (b.accepted || [b.answer])
                  .map(a => a.toLowerCase().trim())
                  .includes(userVal.toLowerCase())

                return (
                  <div
                    key={b.id}
                    className={`p-4 rounded-2xl border transition ${
                      isCorrect 
                        ? 'bg-emerald-950/20 border-emerald-500/30' 
                        : 'bg-rose-950/20 border-rose-500/30'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800/60">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs px-2 py-0.5 rounded-md bg-slate-800 text-teal-300 border border-slate-700">
                          {b.label}
                        </span>
                        <span className="text-xs text-slate-400">আপনার উত্তর:</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isCorrect ? 'bg-emerald-900/60 text-emerald-300' : 'bg-rose-900/60 text-rose-300'
                        }`}>
                          {userVal || '(কিছু লেখেননি)'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">বোর্ড সঠিক উত্তর:</span>
                        <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-600/50 px-2 py-0.5 rounded">
                          {b.answer}
                        </span>
                        {isCorrect ? (
                          <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> +১ মার্ক
                          </span>
                        ) : (
                          <span className="text-xs text-rose-400 font-bold flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> ০
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Explanation */}
                    <div className="text-xs text-slate-300 leading-relaxed pl-1 flex items-start gap-2">
                      <span className="text-teal-400 font-bold flex-shrink-0">ব্যাখ্যা:</span>
                      <span>{b.explanation}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
