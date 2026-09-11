import React, { useState, useEffect } from 'react'
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  BarChart3, 
  Layers,
  GraduationCap,
  HelpCircle,
  TrendingUp,
  AlertCircle
} from 'lucide-react'
import { GRAMMAR_MCQS_MAP, GRAMMAR_CHAPTERS } from '../data/grammarData'

export default function GrammarLevelExam({ onClose, onSelectChapter }) {
  const [selectedExamType, setSelectedExamType] = useState('ssc') // 'class8' | 'ssc' | 'hsc' | 'all'
  const [examState, setExamState] = useState('intro') // 'intro' | 'running' | 'result'
  const [examQuestions, setExamQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(1200) // 20 mins in seconds
  const [startTime, setStartTime] = useState(null)
  const [completedTimeSeconds, setCompletedTimeSeconds] = useState(0)

  // Timer effect
  useEffect(() => {
    let timer = null
    if (examState === 'running') {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            finishExam()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [examState, examQuestions])

  const examConfigs = {
    class8: {
      title: 'Class 8 Diagnostic Level Test',
      title_bn: '৮ম শ্রেণি ব্যাকরণ মূল্যায়ন পরীক্ষা',
      questionCount: 15,
      timeLimitMinutes: 15,
      classFilter: 'Class 8',
      desc: '৮ম শ্রেণির NCTB সিলেবাস অনুযায়ী Parts of Speech, Tense, Articles, Voice ও Narration-এর উপর যাচাই।'
    },
    ssc: {
      title: 'SSC Board Grammar Model Test',
      title_bn: 'এসএসসি (৯ম-১০ম) বোর্ড মডেল টেস্ট',
      questionCount: 20,
      timeLimitMinutes: 20,
      classFilter: 'Class 9-10',
      desc: 'এসএসসি বোর্ড পরীক্ষার অনুরূপ Transformation, Modifiers, Right Form of Verbs, Articles ও Narration।'
    },
    hsc: {
      title: 'HSC College Grammar Model Test',
      title_bn: 'এইচএসসি (১১শ-১২শ) মডেল টেস্ট',
      questionCount: 20,
      timeLimitMinutes: 20,
      classFilter: 'Class 11-12',
      desc: 'উচ্চ মাধ্যমিক পর্যায়ের Advanced Sentence Patterns, Idioms, Punctuation ও Modal Verbs-এর উপর পূর্ণাঙ্গ টেস্ট।'
    },
    all: {
      title: 'Grand English Grammar Challenge',
      title_bn: 'সমগ্র ইংরেজি ব্যাকরণ অল-রাউন্ড চ্যালেঞ্জ',
      questionCount: 25,
      timeLimitMinutes: 25,
      classFilter: null,
      desc: 'সবগুলো ৩৪টি টপিক থেকে নির্বাচিত সেরা প্রশ্নগুলোর মাধ্যমে আপনার ইংরেজি স্তরের সামগ্রিক মূল্যায়ন।'
    }
  }

  const startExam = (type = selectedExamType) => {
    const config = examConfigs[type]
    const targetChapters = config.classFilter 
      ? GRAMMAR_CHAPTERS.filter(c => c.class_level === config.classFilter)
      : GRAMMAR_CHAPTERS

    // Gather all questions from target chapters
    let allPool = []
    targetChapters.forEach(ch => {
      const qList = GRAMMAR_MCQS_MAP[ch.id] || []
      qList.forEach(q => {
        allPool.push({
          ...q,
          topic_name: ch.title_bn,
          class_level: ch.class_level
        })
      })
    })

    // Shuffle and pick
    const shuffled = [...allPool].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, config.questionCount)

    setExamQuestions(selected)
    setUserAnswers({})
    setCurrentIndex(0)
    setTimeRemaining(config.timeLimitMinutes * 60)
    setStartTime(Date.now())
    setExamState('running')
  }

  const handleSelectOption = (optIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optIndex
    }))
  }

  const finishExam = () => {
    if (startTime) {
      const elapsed = Math.round((Date.now() - startTime) / 1000)
      setCompletedTimeSeconds(elapsed)
    }
    setExamState('result')
  }

  // Calculate score & level
  const totalQuestions = examQuestions.length
  const correctCount = examQuestions.filter((q, idx) => userAnswers[idx] === q.correct_answer_index).length
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0

  const getStudentLevel = (pct) => {
    if (pct >= 90) {
      return {
        level: 'Master / Expert (A+)',
        badge: '🏆',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10 border-amber-500/30',
        message: 'অসাধারণ দক্ষতা! আপনার ব্যাকরণে দখল নিখুঁত ও চমৎকার। বোর্ড পরীক্ষায় সর্বোচ্চ নম্বর পাওয়ার জন্য আপনি প্রস্তুত।'
      }
    } else if (pct >= 75) {
      return {
        level: 'Advanced Level (A)',
        badge: '🌟',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10 border-emerald-500/30',
        message: 'খুব ভালো! আপনার অধিকাংশ ব্যাকরণ ধারণা পরিষ্কার। অল্প কিছু ব্যতিক্রমী নিয়ম পুনরায় রিভিশন করলেই A+ নিশ্চিত হবে।'
      }
    } else if (pct >= 50) {
      return {
        level: 'Intermediate Level (B)',
        badge: '📘',
        color: 'text-sky-400',
        bg: 'bg-sky-500/10 border-sky-500/30',
        message: 'মাঝারি স্তর। আপনার মূল ধারণা ঠিক আছে, কিন্তু দুর্বল টপিকগুলোর নিয়ম ও বাস্তব উদাহরণ আরও নিবিড়ভাবে অনুশীলন করা দরকার।'
      }
    } else {
      return {
        level: 'Beginner Level (C)',
        badge: '📚',
        color: 'text-rose-400',
        bg: 'bg-rose-500/10 border-rose-500/30',
        message: 'প্রাথমিক স্তর। ভয় পাওয়ার কিছু নেই! প্রতিদিন একটি করে ব্যাকরণ অধ্যায়ের নিয়মাবলী ও উদাহরণগুলো মনোযোগ দিয়ে পড়ুন ও কুইজ দিন।'
      }
    }
  }

  const studentLevel = getStudentLevel(percentage)

  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 shadow-sm">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>লেভেল মূল্যায়ন পরীক্ষা (Grammar Level Exam)</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                Live Assessment
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              পরীক্ষা দিয়ে আপনার ইংরেজি ব্যাকরণ দক্ষতার বর্তমান স্তর যাচাই করুন
            </p>
          </div>
        </div>

        {examState !== 'intro' && (
          <button
            onClick={() => setExamState('intro')}
            className="text-xs px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
          >
            অন্যান্য টেস্ট দেখুন
          </button>
        )}
      </div>

      {/* VIEW 1: INTRO / SELECTOR */}
      {examState === 'intro' && (
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2 py-2">
            <h3 className="text-lg font-bold text-white">
              আপনার শ্রেণি বা লক্ষ্য অনুযায়ী লেভেল টেস্ট বেছে নিন
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              প্রতিটি টেস্টে সিলেবাস অনুযায়ী বাস্তব প্রশ্ন থাকবে। পরীক্ষা শেষে আপনি আপনার দক্ষতা স্তর (Level), বিস্তারিত রিপোর্ট এবং দুর্বল টপিকের তালিকা দেখতে পাবেন।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(examConfigs).map(([key, cfg]) => {
              const isSelected = selectedExamType === key
              return (
                <div
                  key={key}
                  onClick={() => setSelectedExamType(key)}
                  className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-teal-500/15 border-teal-500 text-white shadow-lg ring-1 ring-teal-500/50'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                        {cfg.title}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                        {cfg.questionCount}টি প্রশ্ন
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {cfg.title_bn}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cfg.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-400" />
                      সময়: {cfg.timeLimitMinutes} মিনিট
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        startExam(key)
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 transition shadow-sm flex items-center gap-1"
                    >
                      <span>শুরু করুন</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: RUNNING EXAM */}
      {examState === 'running' && examQuestions.length > 0 && (
        <div className="space-y-6">
          {/* Progress & Live Timer Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                প্রশ্ন {currentIndex + 1} / {totalQuestions}
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-400">
                টপিক: {examQuestions[currentIndex]?.topic_name}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900 border border-slate-700 text-teal-300 font-mono text-xs font-bold">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>{formatTimer(timeRemaining)}</span>
              </div>

              <button
                onClick={finishExam}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 text-xs font-bold transition"
              >
                পরীক্ষা জমা দিন (Submit)
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Active Question Card */}
          {(() => {
            const currentQ = examQuestions[currentIndex]
            const options = Array.isArray(currentQ.options_json)
              ? currentQ.options_json
              : JSON.parse(currentQ.options_json || '[]')
            const selectedOpt = userAnswers[currentIndex]

            return (
              <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-6">
                <div className="space-y-2">
                  <div className="text-xs text-teal-400 font-semibold uppercase tracking-wider">
                    {currentQ.class_level} • {currentQ.topic_name}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                    {currentQ.question_bn || currentQ.question_text || currentQ.question_en}
                  </h3>
                </div>

                {/* Options List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`p-4 rounded-2xl text-left transition border flex items-start gap-3 ${
                          isSelected
                            ? 'bg-teal-500/20 border-teal-500 text-white font-semibold shadow-md ring-1 ring-teal-500/50'
                            : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="text-sm sm:text-base leading-snug">
                          {opt}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
                    disabled={currentIndex === 0}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>পূর্ববর্তী</span>
                  </button>

                  <div className="flex items-center gap-1 overflow-x-auto max-w-xs sm:max-w-md px-2 py-1">
                    {examQuestions.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition flex-shrink-0 ${
                          currentIndex === i
                            ? 'bg-teal-500 text-slate-950 shadow-sm'
                            : userAnswers[i] !== undefined
                              ? 'bg-slate-800 text-teal-300 border border-teal-500/40'
                              : 'bg-slate-900 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  {currentIndex < totalQuestions - 1 ? (
                    <button
                      onClick={() => setCurrentIndex(prev => Math.min(prev + 1, totalQuestions - 1))}
                      className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 text-xs font-bold flex items-center gap-1.5 transition"
                    >
                      <span>পরবর্তী</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={finishExam}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:opacity-95 text-xs font-bold flex items-center gap-1.5 transition shadow-md"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>জমা দিন</span>
                    </button>
                  )}
                </div>
              </div>
            )
          })()}
        </div>
      )}

      {/* VIEW 3: RESULT & LEVEL REPORT */}
      {examState === 'result' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Main Level Badge Card */}
          <div className={`p-6 sm:p-8 rounded-3xl border text-center space-y-4 ${studentLevel.bg}`}>
            <div className="text-5xl">{studentLevel.badge}</div>
            
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                আপনার ইংরেজি ব্যাকরণ দক্ষতা স্তর (Proficiency Level)
              </div>
              <h3 className={`text-2xl sm:text-3xl font-extrabold ${studentLevel.color}`}>
                {studentLevel.level}
              </h3>
            </div>

            <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="text-center">
                <div className="text-xs text-slate-400">প্রাপ্ত স্কোর</div>
                <div className="text-xl font-bold text-white">{correctCount} / {totalQuestions}</div>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div className="text-center">
                <div className="text-xs text-slate-400">সঠিকতা (Accuracy)</div>
                <div className="text-xl font-bold text-teal-400">{percentage}%</div>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div className="text-center">
                <div className="text-xs text-slate-400">সময় লেগেছে</div>
                <div className="text-xl font-bold text-sky-400">{formatTimer(completedTimeSeconds)}</div>
              </div>
            </div>

            <p className="text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
              {studentLevel.message}
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => startExam(selectedExamType)}
                className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 transition flex items-center gap-2 text-xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>আবার পরীক্ষা দিন (Retake)</span>
              </button>
              <button
                onClick={() => setExamState('intro')}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition text-xs font-semibold"
              >
                অন্যান্য পরীক্ষা নির্বাচন করুন
              </button>
            </div>
          </div>

          {/* Question-by-Question Detailed Review */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
              <BarChart3 className="w-4 h-4 text-teal-400" />
              <span>প্রশ্নের বিস্তারিত সমাধান ও ফলাফল পর্যালোচনা ({totalQuestions}টি প্রশ্ন)</span>
            </h4>

            <div className="space-y-4">
              {examQuestions.map((q, idx) => {
                const options = Array.isArray(q.options_json) ? q.options_json : JSON.parse(q.options_json || '[]')
                const userSelected = userAnswers[idx]
                const isCorrect = userSelected === q.correct_answer_index

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition ${
                      isCorrect
                        ? 'bg-emerald-950/20 border-emerald-500/30'
                        : 'bg-rose-950/20 border-rose-500/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                          isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {q.topic_name}
                        </span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                        isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                      }`}>
                        {isCorrect ? 'সঠিক (+১)' : 'ভুল / অনুত্তরিত (০)'}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-white mb-3">
                      {q.question_bn || q.question_text || q.question_en}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                      {options.map((opt, oIdx) => {
                        const isThisCorrect = oIdx === q.correct_answer_index
                        const isThisUser = oIdx === userSelected

                        let optClass = 'bg-slate-900/60 border-slate-800 text-slate-300'
                        if (isThisCorrect) {
                          optClass = 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold'
                        } else if (isThisUser && !isCorrect) {
                          optClass = 'bg-rose-500/20 border-rose-500/60 text-rose-300 font-bold'
                        }

                        return (
                          <div key={oIdx} className={`p-2.5 rounded-xl border flex items-center justify-between ${optClass}`}>
                            <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                            {isThisCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />}
                            {isThisUser && !isCorrect && <XCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />}
                          </div>
                        )
                      })}
                    </div>

                    <div className="text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                      <span className="font-semibold text-teal-300">ব্যাখ্যা: </span>
                      <span>{q.explanation || `সঠিক উত্তর: ${options[q.correct_answer_index]}`}</span>
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
