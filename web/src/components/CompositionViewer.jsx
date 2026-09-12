import React, { useState, useEffect, useRef } from 'react'
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Copy,
  Check,
  BookOpen,
  Award,
  HelpCircle,
  FileText,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  Languages,
  Bookmark,
  Share2,
  Mail,
  Printer,
  Edit3,
  Lightbulb,
  Info,
  Clock,
  Type,
  FileCheck2
} from 'lucide-react'
import { ttsService } from '../services/ttsService'
import { EXAM_TIPS, FORMAT_GUIDES, CV_TEMPLATES } from '../data/compositionData'

export default function CompositionViewer({
  topic,
  isCVMode = false,
  onSelectTopic
}) {
  // TTS State
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeSentence, setActiveSentence] = useState(null)
  const [ttsRate, setTtsRate] = useState(1.0)
  
  // Modals & View Toggles
  const [showExamTips, setShowExamTips] = useState(false)
  const [showFormatGuide, setShowFormatGuide] = useState(false)
  const [showVocab, setShowVocab] = useState(true)
  const [showBangla, setShowBangla] = useState(false)
  const [copied, setCopied] = useState(false)

  // CV Mode State
  const [selectedCvTemplate, setSelectedCvTemplate] = useState(CV_TEMPLATES[0])
  const [cvData, setCvData] = useState({ ...CV_TEMPLATES[0] })
  const [cvViewMode, setCvViewMode] = useState('preview') // 'preview' | 'edit'

  // Reset TTS when topic changes
  useEffect(() => {
    stopAudio()
    setShowBangla(false)
    setCopied(false)
  }, [topic?.id, isCVMode])

  useEffect(() => {
    return () => {
      ttsService.cancel()
    }
  }, [])

  const cleanTemplate = (raw = '') => {
    return raw
      .replace(/\{ADDRESS\}/g, 'Dhanmondi, Dhaka')
      .replace(/\{DATE\}/g, '15 October 2024')
      .replace(/\{SCHOOL_NAME\}/g, 'Ideal School and College, Dhaka')
      .replace(/\{NAME\}/g, 'Rahim')
      .replace(/\{FRIEND_NAME\}/g, 'Tanvir')
      .replace(/\{CLASS\}/g, '9')
      .replace(/\{SECTION\}/g, 'A')
      .replace(/\{ROLL_NO\}/g, '01')
      .replace(/\{EMAIL\}/g, 'student.bangladesh@gmail.com')
  }

  const rawTemplate = topic?.template || ''
  const displayTemplate = cleanTemplate(rawTemplate)

  const stopAudio = () => {
    ttsService.stop()
    setIsPlaying(false)
    setActiveSentence(null)
  }

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio()
      return
    }

    if (!displayTemplate) return

    setIsPlaying(true)
    ttsService.setListeners({
      onPlay: () => setIsPlaying(true),
      onPause: () => setIsPlaying(false),
      onStop: () => {
        setIsPlaying(false)
        setActiveSentence(null)
      },
      onProgress: (curr, total, chunkText) => {
        setActiveSentence(chunkText)
      },
      onError: () => {
        setIsPlaying(false)
        setActiveSentence(null)
      }
    })
    ttsService.play(displayTemplate)
  }

  const handleCopy = () => {
    const textToCopy = isCVMode
      ? generateCvPlainText(cvData)
      : displayTemplate

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const handlePrint = () => {
    window.print()
  }

  // Calculate stats
  const wordCount = topic?.wordCount || (displayTemplate ? displayTemplate.split(/\s+/).length : 0)
  const readingTime = Math.max(1, Math.ceil(wordCount / 120))
  const category = topic?.category || 'Paragraph'
  const tips = EXAM_TIPS[category] || EXAM_TIPS['Paragraph']
  const formatGuide = FORMAT_GUIDES[category] || (category.toLowerCase().includes('story') ? FORMAT_GUIDES['Story'] : null)

  // Dialogue Parser: identify speaker turns
  const isDialogue = category === 'Dialogue' || (topic?.title || '').toLowerCase().includes('dialogue')
  const dialogueLines = isDialogue && displayTemplate
    ? displayTemplate.split('\n').filter(l => l.trim().length > 0).map(line => {
        const match = line.match(/^([A-Za-z0-9\s]+):(.*)$/)
        if (match) {
          return { speaker: match[1].trim(), speech: match[2].trim(), isTurn: true }
        }
        return { text: line, isTurn: false }
      })
    : null

  // CV plain text builder
  function generateCvPlainText(data) {
    return `CURRICULUM VITAE OF ${data.fullName.toUpperCase()}
Email: ${data.email} | Mobile: ${data.phone}
Address: ${data.presentAddress}

CAREER OBJECTIVE:
${data.careerObjective}

EDUCATION:
${data.education}

EXPERIENCE & INTERNSHIP:
${data.experience}

KEY SKILLS:
${data.skills}

LANGUAGES:
${data.languages}

PERSONAL DETAILS:
Father's Name: ${data.fatherName}
Mother's Name: ${data.motherName}
Date of Birth: ${data.dateOfBirth}
Gender: ${data.gender}
Nationality: ${data.nationality}
Religion: ${data.religion}
Blood Group: ${data.bloodGroup}
NID: ${data.nid}
Permanent Address: ${data.permanentAddress}

REFERENCES:
${data.references}

HOBBIES & INTERESTS:
${data.hobbies}
`
  }

  // Render CV Builder View
  if (isCVMode) {
    return (
      <div className="space-y-6 w-full max-w-5xl mx-auto">
        {/* CV Top Header Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Interactive CV Builder</span>
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  SSC / HSC & Job Standard
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Curriculum Vitae (CV) Generator & Formats
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                পরীক্ষা ও কর্মক্ষেত্রের জন্য আকর্ষণীয় সিভি তৈরি করুন, প্রিভিউ দেখুন এবং এক ক্লিকে কপি বা প্রিন্ট করুন।
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex bg-slate-800/80 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => setCvViewMode('preview')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    cvViewMode === 'preview'
                      ? 'bg-rose-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setCvViewMode('edit')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    cvViewMode === 'edit'
                      ? 'bg-rose-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Edit Details
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition shadow-sm"
                title="Copy full CV text"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy CV'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-rose-600 hover:bg-rose-500 text-white transition shadow-sm shadow-rose-950"
                title="Print CV"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Template Selector Bar */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              Select Template:
            </span>
            <div className="flex gap-2 flex-wrap">
              {CV_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => {
                    setSelectedCvTemplate(tmpl)
                    setCvData({ ...tmpl })
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition border flex items-center gap-1.5 ${
                    selectedCvTemplate.id === tmpl.id
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300 ring-2 ring-rose-500/30'
                      : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <span>{tmpl.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CV Edit Mode or Formatted Preview */}
        {cvViewMode === 'edit' ? (
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-3 border-b border-slate-800">
              <Edit3 className="w-5 h-5 text-rose-400" />
              সিভির তথ্য পরিবর্তন ও ব্যক্তিগতকরণ
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Full Name (পূর্ণ নাম)</label>
                <input
                  type="text"
                  value={cvData.fullName}
                  onChange={(e) => setCvData({ ...cvData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Email Address (ইমেইল)</label>
                <input
                  type="email"
                  value={cvData.email}
                  onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Mobile Phone (মোবাইল নম্বর)</label>
                <input
                  type="text"
                  value={cvData.phone}
                  onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Present Address (বর্তমান ঠিকানা)</label>
                <input
                  type="text"
                  value={cvData.presentAddress}
                  onChange={(e) => setCvData({ ...cvData, presentAddress: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Career Objective (ক্যারিয়ার লক্ষ্য)</label>
              <textarea
                rows={2}
                value={cvData.careerObjective}
                onChange={(e) => setCvData({ ...cvData, careerObjective: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-rose-500 custom-scrollbar"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Education & Qualifications (শিক্ষাগত যোগ্যতা)</label>
              <textarea
                rows={3}
                value={cvData.education}
                onChange={(e) => setCvData({ ...cvData, education: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-rose-500 custom-scrollbar font-mono text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Experience & Projects (অভিজ্ঞতা)</label>
              <textarea
                rows={3}
                value={cvData.experience}
                onChange={(e) => setCvData({ ...cvData, experience: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-rose-500 custom-scrollbar"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Skills (দক্ষতা)</label>
                <input
                  type="text"
                  value={cvData.skills}
                  onChange={(e) => setCvData({ ...cvData, skills: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Languages (ভাষাজ্ঞান)</label>
                <input
                  type="text"
                  value={cvData.languages}
                  onChange={(e) => setCvData({ ...cvData, languages: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setCvViewMode('preview')}
                className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md"
              >
                Done & Preview
              </button>
            </div>
          </div>
        ) : (
          /* Formatted Resume Paper / Printable Preview */
          <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 max-w-4xl mx-auto font-sans">
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-5 mb-6 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                  {cvData.fullName}
                </h1>
                <p className="text-sm font-semibold text-rose-600 mt-0.5">
                  {cvData.careerObjective.slice(0, 70)}...
                </p>
              </div>
              <div className="mt-3 sm:mt-0 text-xs text-slate-600 space-y-0.5 sm:text-right">
                <div>📞 {cvData.phone}</div>
                <div>✉️ {cvData.email}</div>
                <div>📍 {cvData.presentAddress}</div>
              </div>
            </div>

            {/* Career Objective */}
            <section className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Career Objective
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {cvData.careerObjective}
              </p>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Education & Academic Background
              </h3>
              <div className="text-xs sm:text-sm text-slate-800 space-y-1.5 whitespace-pre-line font-medium">
                {cvData.education}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Experience & Projects
              </h3>
              <div className="text-xs sm:text-sm text-slate-800 space-y-1.5 whitespace-pre-line">
                {cvData.experience}
              </div>
            </section>

            {/* Skills & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <section>
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Key Skills & Competencies
                </h3>
                <p className="text-xs text-slate-800">{cvData.skills}</p>
              </section>
              <section>
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Language Proficiency
                </h3>
                <p className="text-xs text-slate-800">{cvData.languages}</p>
              </section>
            </div>

            {/* Personal Details Table */}
            <section className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Personal Information (ব্যক্তিগত বিবরণ)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs text-slate-700 pt-1">
                <div><span className="font-bold text-slate-900">Father's Name:</span> {cvData.fatherName}</div>
                <div><span className="font-bold text-slate-900">Mother's Name:</span> {cvData.motherName}</div>
                <div><span className="font-bold text-slate-900">Date of Birth:</span> {cvData.dateOfBirth}</div>
                <div><span className="font-bold text-slate-900">Gender:</span> {cvData.gender}</div>
                <div><span className="font-bold text-slate-900">Nationality:</span> {cvData.nationality}</div>
                <div><span className="font-bold text-slate-900">Religion:</span> {cvData.religion}</div>
                <div><span className="font-bold text-slate-900">Blood Group:</span> {cvData.bloodGroup}</div>
                <div><span className="font-bold text-slate-900">NID / Reg No:</span> {cvData.nid}</div>
                <div><span className="font-bold text-slate-900">Permanent Address:</span> {cvData.permanentAddress}</div>
              </div>
            </section>

            {/* References */}
            <section className="pt-2 border-t border-slate-200">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                References
              </h3>
              <p className="text-xs text-slate-700 whitespace-pre-line">{cvData.references}</p>
            </section>
          </div>
        )}
      </div>
    )
  }

  // Fallback if no topic selected
  if (!topic) {
    return (
      <div className="p-12 text-center text-slate-500 border border-dashed border-slate-800 rounded-3xl">
        বামপাশের মেনু থেকে কোনো টপিক নির্বাচন করুন।
      </div>
    )
  }

  return (
    <div className="space-y-6 w-full max-w-5xl mx-auto">
      {/* Top Banner Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Metadata badges */}
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/15 text-teal-300 border border-teal-500/30 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{topic.category}</span>
              </span>

              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{topic.classLevel || 'Class 6-10'}</span>
              </span>

              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                <Type className="w-3.5 h-3.5 text-sky-400" />
                <span>{wordCount} Words</span>
              </span>

              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>~{readingTime} min read</span>
              </span>

              {topic.isSuggestion && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                  ★ Suggestion
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {topic.title}
            </h1>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Audio Reader Play/Pause */}
            <button
              onClick={toggleAudio}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition shadow-md ${
                isPlaying
                  ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                  : 'bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold'
              }`}
              title="Listen to text audio"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Stop Audio' : 'Play Audio (TTS)'}</span>
            </button>

            {/* Exam Tips Button */}
            {tips && (
              <button
                onClick={() => setShowExamTips(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 transition shadow-sm"
                title="Board Exam Rules and Tips"
              >
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Exam Tips</span>
              </button>
            )}

            {/* Format Guide Button */}
            {formatGuide && (
              <button
                onClick={() => setShowFormatGuide(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/40 transition shadow-sm"
                title="Format Guide and Structure"
              >
                <FileCheck2 className="w-4 h-4 text-indigo-400" />
                <span>Format Guide</span>
              </button>
            )}

            {/* Bangla Translation Toggle */}
            {topic.banglaTranslation && (
              <button
                onClick={() => setShowBangla(!showBangla)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition shadow-sm ${
                  showBangla
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                    : 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border-emerald-500/40'
                }`}
                title="Toggle Bangla Translation"
              >
                <Languages className="w-4 h-4" />
                <span>{showBangla ? 'English Only' : 'Bangla Translation'}</span>
              </button>
            )}

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
              title="Copy to Clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Text Content Area */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-xl relative">
        {/* If Dialogue Category: Render formatted conversation bubbles */}
        {isDialogue && dialogueLines ? (
          <div className="space-y-4">
            <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>Dialogue Exchange:</span>
            </div>
            {dialogueLines.map((line, idx) => {
              if (!line.isTurn) {
                return (
                  <div key={idx} className="text-slate-400 text-sm italic my-2">
                    {line.text}
                  </div>
                )
              }
              const isFirstSpeaker = idx % 2 === 0
              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row sm:items-start gap-3 p-3.5 rounded-2xl border transition ${
                    isFirstSpeaker
                      ? 'bg-slate-800/60 border-slate-700/80'
                      : 'bg-indigo-950/30 border-indigo-500/30'
                  }`}
                >
                  <span
                    className={`px-3 py-1 rounded-xl text-xs font-extrabold uppercase tracking-wide flex-shrink-0 self-start ${
                      isFirstSpeaker
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                        : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                    }`}
                  >
                    {line.speaker}
                  </span>
                  <p className="text-slate-200 text-base leading-relaxed flex-1">
                    {line.speech}
                  </p>
                </div>
              )
            })}
          </div>
        ) : (
          /* Standard Paragraph, Letter, Application, or Essay Content */
          <div className="prose prose-invert max-w-none">
            <div className="text-slate-200 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-4 font-normal">
              {displayTemplate}
            </div>
          </div>
        )}

        {/* Letter Category: Draw the required postal envelope */}
        {category === 'Letter' && (
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Postal Envelope (Board Marking Requirement):</span>
            </div>
            <div className="border-2 border-dashed border-amber-500/50 bg-slate-950/60 rounded-2xl p-5 max-w-lg mx-auto relative shadow-inner">
              {/* Stamp box */}
              <div className="absolute top-4 right-4 border-2 border-amber-400/80 rounded-md px-3 py-1.5 text-[10px] font-black uppercase text-amber-400 tracking-wider bg-amber-500/10">
                STAMP
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4 text-xs">
                <div className="space-y-1">
                  <div className="font-extrabold text-amber-300">FROM (প্রেরক):</div>
                  <div className="text-slate-300">Name: [Your Name]</div>
                  <div className="text-slate-400">Road: Dhanmondi</div>
                  <div className="text-slate-400">Post: Dhaka - 1205</div>
                  <div className="text-slate-400">Dist: Dhaka</div>
                </div>
                <div className="space-y-1">
                  <div className="font-extrabold text-amber-300">TO (প্রাপক):</div>
                  <div className="text-slate-300">Name: [Friend's Name]</div>
                  <div className="text-slate-400">Road: GEC Circle</div>
                  <div className="text-slate-400">Post: Chattogram - 4000</div>
                  <div className="text-slate-400">Dist: Chattogram</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bangla Translation View (if toggled) */}
        {showBangla && topic.banglaTranslation && (
          <div className="mt-8 pt-6 border-t border-emerald-500/30 bg-emerald-950/20 rounded-2xl p-5 border">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Languages className="w-4 h-4 text-emerald-400" />
              <span>বাংলা ভাবার্থ ও অনুবাদ (Bangla Translation):</span>
            </div>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {topic.banglaTranslation}
            </div>
          </div>
        )}
      </div>

      {/* Vocabulary Drawer/Section (When topic has vocabulary items) */}
      {topic.vocabulary && topic.vocabulary.length > 0 && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-400" />
              <span>Topic Vocabulary ({topic.vocabulary.length} Words)</span>
            </h3>
            <button
              onClick={() => setShowVocab(!showVocab)}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
            >
              {showVocab ? 'Hide' : 'Show'}
              {showVocab ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showVocab && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              {topic.vocabulary.map((v, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-teal-500/40 transition group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-teal-300 text-sm group-hover:text-teal-200">
                      {v.word}
                    </span>
                    {v.partOfSpeech && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600">
                        {v.partOfSpeech}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {v.banglaMeaning}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Exam Tips Modal */}
      {showExamTips && tips && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <span>{tips.title}</span>
              </div>
              <button
                onClick={() => setShowExamTips(false)}
                className="text-slate-400 hover:text-white text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              {tips.rules.map((r, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-300">{r.point}</div>
                  <div className="text-slate-300 leading-relaxed">{r.desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowExamTips(false)}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Format Guide Modal */}
      {showFormatGuide && formatGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-base">
                <FileCheck2 className="w-5 h-5 text-indigo-400" />
                <span>{formatGuide.title}</span>
              </div>
              <button
                onClick={() => setShowFormatGuide(false)}
                className="text-slate-400 hover:text-white text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {formatGuide.steps.map((s, i) => (
                <div key={i} className="p-3 rounded-2xl bg-slate-800/40 border border-slate-800 text-slate-300 leading-relaxed">
                  {s}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowFormatGuide(false)}
                className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-xs transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
