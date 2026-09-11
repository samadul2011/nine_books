import React, { useState } from 'react'
import { 
  BookOpen, 
  Lightbulb, 
  Edit3, 
  HelpCircle, 
  Volume2, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  Eye,
  EyeOff,
  Layers,
  GraduationCap
} from 'lucide-react'
import { ttsService } from '../services/ttsService'

export default function GrammarSectionViewer({ 
  lesson, 
  chapter,
  onJumpToQuiz
}) {
  const [activeSection, setActiveSection] = useState('rules') // 'rules' | 'examples' | 'practice' | 'all'
  const [revealedPractice, setRevealedPractice] = useState({})
  const [speakingIndex, setSpeakingIndex] = useState(null)

  const rules = lesson?.rules || []
  const examples = lesson?.examples || []
  const practice = lesson?.practice || []

  const handleSpeak = async (text, idKey) => {
    try {
      setSpeakingIndex(idKey)
      await ttsService.speak(text, 'en')
    } catch (e) {
      console.error(e)
    } finally {
      setSpeakingIndex(null)
    }
  }

  const togglePracticeReveal = (idx) => {
    setRevealedPractice(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }))
  }

  // Helper to parse rule into title, structure, and body
  const parseRule = (text) => {
    let title = ''
    let body = text
    let structure = ''

    if (text.includes('Structure:')) {
      const parts = text.split('Structure:')
      body = parts[0].trim()
      structure = parts[1].trim()
    }

    if (body.includes(':')) {
      const colParts = body.split(':')
      title = colParts[0].trim()
      body = colParts.slice(1).join(':').trim()
    }

    return { title, body, structure }
  }

  return (
    <div className="space-y-6 select-text">
      {/* Section Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-950/80 border border-slate-800 rounded-2xl">
        <button
          onClick={() => setActiveSection('rules')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
            activeSection === 'rules'
              ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>নিয়মাবলী (Rules)</span>
          <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
            activeSection === 'rules' ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400'
          }`}>
            {rules.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSection('examples')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
            activeSection === 'examples'
              ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>বাস্তব উদাহরণ (Examples)</span>
          <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
            activeSection === 'examples' ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400'
          }`}>
            {examples.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSection('practice')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
            activeSection === 'practice'
              ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          <span>অনুশীলন (Practice)</span>
          <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
            activeSection === 'practice' ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400'
          }`}>
            {practice.length}
          </span>
        </button>

        <button
          onClick={() => setActiveSection('all')}
          className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition ml-auto ${
            activeSection === 'all'
              ? 'bg-slate-800 text-teal-300 border border-teal-500/40'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>সব একসাথে (All Sections)</span>
        </button>
      </div>

      {/* SECTION 1: RULES & CONCEPTS */}
      {(activeSection === 'rules' || activeSection === 'all') && (
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 className="text-base font-bold text-teal-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-400" />
              <span>১. ব্যাকরণের নিয়মাবলী ও গঠন (Grammar Rules)</span>
            </h3>
            <span className="text-xs text-slate-400">
              যেকোনো ইংরেজি শব্দের বাংলা অর্থ জানতে শব্দটিতে সিলেক্ট করুন
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {rules.map((ruleText, idx) => {
              const { title, body, structure } = parseRule(ruleText)
              const idKey = `rule-${idx}`
              return (
                <div 
                  key={idx}
                  className="bg-slate-950/60 border border-slate-800/90 hover:border-teal-500/40 rounded-2xl p-4 sm:p-5 transition group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="w-6 h-6 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="space-y-1.5 flex-1">
                        {title && (
                          <h4 className="text-sm font-bold text-white tracking-wide">
                            {title}
                          </h4>
                        )}
                        <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                          {body || ruleText}
                        </p>
                        {structure && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono mt-1">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            <span><strong>Structure:</strong> {structure}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleSpeak(ruleText, idKey)}
                      className={`p-2 rounded-xl transition flex-shrink-0 ${
                        speakingIndex === idKey 
                          ? 'bg-teal-500 text-slate-950 animate-pulse'
                          : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white'
                      }`}
                      title="উচ্চারণ শুনুন (Pronounce)"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* SECTION 2: EXAMPLES */}
      {(activeSection === 'examples' || activeSection === 'all') && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 className="text-base font-bold text-amber-300 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>২. বাস্তব উদাহরণসমূহ (Real-world Examples)</span>
            </h3>
            <span className="text-xs text-slate-400">
              {examples.length}টি বাস্তব বাক্য
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {examples.map((exText, idx) => {
              const idKey = `ex-${idx}`
              return (
                <div 
                  key={idx}
                  className="bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-4 flex items-start justify-between gap-3 transition"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-slate-200 text-sm sm:text-base leading-snug">
                      {exText}
                    </p>
                  </div>

                  <button
                    onClick={() => handleSpeak(exText, idKey)}
                    className={`p-1.5 rounded-lg transition flex-shrink-0 ${
                      speakingIndex === idKey 
                        ? 'bg-amber-500 text-slate-950 animate-pulse'
                        : 'bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white'
                    }`}
                    title="শুনুন"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* SECTION 3: PRACTICE DRILLS */}
      {(activeSection === 'practice' || activeSection === 'all') && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 className="text-base font-bold text-sky-300 flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-sky-400" />
              <span>৩. অনুশীলনমূলক কাজ (Practice Drills)</span>
            </h3>
            <span className="text-xs text-slate-400">
              পরীক্ষার পূর্বে নিজেকে যাচাই করুন
            </span>
          </div>

          <div className="space-y-3">
            {practice.map((prText, idx) => {
              const isRevealed = revealedPractice[idx]
              return (
                <div 
                  key={idx}
                  className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 sm:p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-300 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="space-y-2">
                        <p className="text-slate-100 text-sm sm:text-base font-medium">
                          {prText}
                        </p>
                        {isRevealed && (
                          <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-800/40 text-sky-200 text-xs sm:text-sm animate-in fade-in duration-150">
                            <span className="font-semibold text-sky-300">সহায়িকা / ইঙ্গিত: </span>
                            উপরে উল্লেখিত ব্যাকরণের নিয়ম এবং বাস্তব উদাহরণের সাথে মিলিয়ে সঠিক বাক্য গঠন করুন অথবা নিজের খাতায় লিখে চর্চা করুন।
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => togglePracticeReveal(idx)}
                      className="px-2.5 py-1.5 rounded-xl border border-slate-700/80 bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition flex items-center gap-1.5 flex-shrink-0"
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5 text-amber-400" />
                          <span className="hidden sm:inline">লুকান</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5 text-sky-400" />
                          <span className="hidden sm:inline">সমাধান ইঙ্গিত</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Quick Jump to Quiz Footer Banner */}
      {chapter?.tests_count > 0 && (
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-emerald-950/60 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">
                এই অধ্যায়ের {chapter.tests_count}টি কুইজ প্রশ্ন প্রস্তুত!
              </h4>
              <p className="text-xs text-slate-400">
                নিয়মগুলো শেখা শেষ হলে নিচের টেস্ট অংশে গিয়ে নিজের প্রস্তুতি যাচাই করুন।
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const quizEl = document.getElementById('quiz-section')
              if (quizEl) {
                quizEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-xs sm:text-sm hover:opacity-95 transition shadow-md flex items-center justify-center gap-1.5 flex-shrink-0"
          >
            <span>কুইজ শুরু করুন ({chapter.tests_count}টি প্রশ্ন)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
