import React, { useState, useEffect } from 'react'
import { marked } from 'marked'
import { supabase } from './supabaseClient'

marked.setOptions({
  gfm: true,
  breaks: true,
})
import { 
  BookOpen, 
  Layers, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Award, 
  RefreshCw,
  BookMarked,
  FileText,
  HelpCircle,
  TrendingUp,
  AlertCircle,
  Languages,
  Sparkles,
  PanelLeftClose,
  PanelLeftOpen,
  ZoomIn,
  ZoomOut,
  Type,
  Eye,
  EyeOff,
  RotateCcw,
  BookOpenCheck,
  ListOrdered,
  BarChart3,
  Search,
  ArrowLeft
} from 'lucide-react'
import LessonAudioPlayer from './components/LessonAudioPlayer'
import TextSelectionToolbar from './components/TextSelectionToolbar'
import VocabularyDrawer from './components/VocabularyDrawer'
import HighlightsDrawer from './components/HighlightsDrawer'
import InteractiveLessonViewer from './components/InteractiveLessonViewer'
import SmartSearch from './components/SmartSearch'
import { studyStorageService } from './services/studyStorageService'
import { MATH_FALLBACK_CHAPTERS, MATH_CH1_FALLBACK_LESSON, MATH_CH3_FALLBACK_LESSON, MATH_CH4_FALLBACK_LESSON, MATH_CH1_FALLBACK_MCQS } from './data/mathFallbackData'
import { FINANCE_FALLBACK_CHAPTERS, FINANCE_LESSONS_MAP, FINANCE_MCQS_MAP } from './data/financeBankingData'
import { GRAMMAR_SUBJECT, GRAMMAR_CHAPTERS, GRAMMAR_LESSONS_MAP, GRAMMAR_MCQS_MAP } from './data/grammarData'
import GrammarSectionViewer from './components/GrammarSectionViewer'
import GrammarLevelExam from './components/GrammarLevelExam'
import { 
  COMPOSITION_SUBJECT, 
  COMPOSITION_CATEGORIES, 
  COMPOSITION_TOPICS, 
  filterCompositionTopics, 
  getCompositionCategoryCount 
} from './data/compositionData'
import CompositionViewer from './components/CompositionViewer'


export default function App() {
  const [activeTab, setActiveTab] = useState('curriculum') // 'curriculum' | 'progress'
  const [mobileView, setMobileView] = useState('subjects') // 'subjects'|'chapters'|'read'|'quiz'|'progress'
  const [isSidebarOpen, setIsSidebarOpen] = useState(true) // Collapsible sidebar for expansive reading
  const [grammarClassFilter, setGrammarClassFilter] = useState('All') // 'All' | 'Class 8' | 'Class 9-10' | 'Class 11-12'
  const [compositionCategory, setCompositionCategory] = useState('All') // 'All' | 'Paragraph' | 'Easy' | ...
  const [compositionClassFilter, setCompositionClassFilter] = useState('All') // 'All' | 'Class 6-8' | 'SSC' | 'HSC'
  const [compositionSearchQuery, setCompositionSearchQuery] = useState('')
  const [selectedCompositionTopic, setSelectedCompositionTopic] = useState(null)
  const [isCVModeActive, setIsCVModeActive] = useState(false)
  const [isLevelExamActive, setIsLevelExamActive] = useState(false)
  const [textZoom, setTextZoom] = useState(() => {
    const saved = localStorage.getItem('ninebooks_text_zoom')
    return saved ? parseInt(saved, 10) : 125 // Default to 125% for grand, comfortable reading
  })

  useEffect(() => {
    localStorage.setItem('ninebooks_text_zoom', textZoom.toString())
  }, [textZoom])

  const zoomIn = () => setTextZoom(prev => Math.min(prev + 15, 200))
  const zoomOut = () => setTextZoom(prev => Math.max(prev - 15, 85))
  const resetZoom = () => setTextZoom(125)

  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [chapters, setChapters] = useState([])
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [lessons, setLessons] = useState([])
  const [questions, setQuestions] = useState([])
  const [progressList, setProgressList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Audio sentence highlighting & study tool states
  const [activePlayingChunk, setActivePlayingChunk] = useState(null)
  const [isVocabOpen, setIsVocabOpen] = useState(false)
  const [isHighlightsOpen, setIsHighlightsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [vocabCount, setVocabCount] = useState(0)
  const [highlightsCount, setHighlightsCount] = useState(0)
  const [userHighlights, setUserHighlights] = useState([])

  // Interactive MCQ Quiz state: correct answers hidden by default
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [revealedQuestions, setRevealedQuestions] = useState({})
  const [showAllAnswers, setShowAllAnswers] = useState(false)

  const handleSelectOption = (qKey, optIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [qKey]: optIndex
    }))
  }

  const toggleRevealQuestion = (qKey) => {
    setRevealedQuestions(prev => ({
      ...prev,
      [qKey]: !prev[qKey]
    }))
  }

  const toggleShowAllAnswers = () => {
    setShowAllAnswers(prev => !prev)
  }

  const resetQuiz = () => {
    setSelectedAnswers({})
    setRevealedQuestions({})
    setShowAllAnswers(false)
  }

  // Subscribe to persistent vocabulary and highlights
  useEffect(() => {
    function refreshStudyData() {
      const vocab = studyStorageService.getVocabulary()
      const hl = studyStorageService.getHighlights(selectedChapter?.id)
      setVocabCount(vocab.length)
      setHighlightsCount(studyStorageService.getHighlights().length)
      setUserHighlights(hl)
    }

    refreshStudyData()
    return studyStorageService.subscribe(refreshStudyData)
  }, [selectedChapter?.id])

  // Auto-scroll to active sentence when audio is playing
  useEffect(() => {
    if (activePlayingChunk) {
      const el = document.querySelector('.active-audio-highlight')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [activePlayingChunk])

  // Fetch subjects and progress on mount
  useEffect(() => {
    fetchInitialData()
  }, [])

  async function fetchInitialData() {
    setLoading(true)
    setError(null)
    try {
      // 1. Fetch Subjects
      const { data: subData, error: subError } = await supabase
        .from('subjects')
        .select('*')
        .order('name_bn')

      if (subError) throw subError
      
      const allSubs = [...(subData || [])]
      if (!allSubs.some((s) => s.name_bn === 'গণিত' || (s.name_en || '').toLowerCase() === 'mathematics')) {
        allSubs.push({
          id: 'math-preview-subject-id',
          name_bn: 'গণিত',
          name_en: 'Mathematics',
          icon_url: 'https://img.icons8.com/color/96/calculator.png'
        })
      }
      if (!allSubs.some((s) => s.name_bn === 'ফিন্যান্স ও ব্যাংকিং' || (s.name_en || '').toLowerCase().includes('finance'))) {
        allSubs.push({
          id: 'finance-preview-subject-id',
          name_bn: 'ফিন্যান্স ও ব্যাংকিং',
          name_en: 'Finance and Banking',
          icon_url: 'https://img.icons8.com/color/96/bank-building.png'
        })
      }
      if (!allSubs.some((s) => s.id === 'grammar-subject-id' || s.name_bn === 'ইংরেজি ব্যাকরণ' || (s.name_en || '').toLowerCase().includes('grammar'))) {
        allSubs.push(GRAMMAR_SUBJECT)
      }
      if (!allSubs.some((s) => s.id === 'composition-subject-id' || s.name_bn === 'কম্পোজিশন ও রাইটিং' || (s.name_en || '').toLowerCase().includes('composition'))) {
        allSubs.push(COMPOSITION_SUBJECT)
      }
      setSubjects(allSubs)
      if (allSubs && allSubs.length > 0) {
        setSelectedSubject(allSubs[0])
        fetchChapters(allSubs[0].id)
      }

      // 2. Fetch Progress
      fetchProgress()
    } catch (err) {
      console.error(err)
      setError(err.message || 'Failed to connect to Supabase')
    } finally {
      setLoading(false)
    }
  }

  const applyCompositionFilter = (newCat, newClassLvl, newQuery) => {
    const cat = newCat !== undefined ? newCat : compositionCategory
    const lvl = newClassLvl !== undefined ? newClassLvl : compositionClassFilter
    const q = newQuery !== undefined ? newQuery : compositionSearchQuery
    if (newCat !== undefined) setCompositionCategory(newCat)
    if (newClassLvl !== undefined) setCompositionClassFilter(newClassLvl)
    if (newQuery !== undefined) setCompositionSearchQuery(newQuery)

    const filtered = filterCompositionTopics({ category: cat, classLevel: lvl, query: q })
    const mapped = filtered.map((t, idx) => ({
      ...t,
      id: t.id,
      title_bn: t.title,
      title_en: t.category,
      order_index: idx + 1,
      class_level: t.classLevel
    }))
    setChapters(mapped)
    if (mapped.length > 0) {
      setSelectedChapter(mapped[0])
      setSelectedCompositionTopic(mapped[0])
    } else {
      setSelectedChapter(null)
      setSelectedCompositionTopic(null)
    }
    setLessons([])
    setQuestions([])
  }

  async function fetchChapters(subjectId, targetSub = null, classFilter = null) {
    try {
      const activeSub = targetSub || selectedSubject
      const isComposition = subjectId === 'composition-subject-id' || activeSub?.id === 'composition-subject-id' || (activeSub?.name_en || '').toLowerCase().includes('composition') || (activeSub?.name_en || '').toLowerCase().includes('writing')
      const isGrammar = subjectId === 'grammar-subject-id' || activeSub?.id === 'grammar-subject-id' || (activeSub?.name_en || '').toLowerCase().includes('grammar')
      const isMath = subjectId === 'math-preview-subject-id' || activeSub?.name_bn === 'গণিত'
      const isFinance = subjectId === 'finance-preview-subject-id' || activeSub?.name_bn === 'ফিন্যান্স ও ব্যাংকিং' || (activeSub?.name_en || '').toLowerCase().includes('finance')
      
      if (isComposition) {
        setIsLevelExamActive(false)
        applyCompositionFilter(undefined, classFilter !== null ? classFilter : undefined, undefined)
        return
      }

      if (isGrammar) {
        const filter = classFilter !== null ? classFilter : grammarClassFilter
        const chaps = filter === 'All'
          ? GRAMMAR_CHAPTERS
          : GRAMMAR_CHAPTERS.filter(c => c.class_level === filter)
        setChapters(chaps)
        if (chaps && chaps.length > 0) {
          setSelectedChapter(chaps[0])
          fetchChapterDetails(chaps[0].id, activeSub, chaps[0])
        } else {
          setSelectedChapter(null)
          setLessons([])
          setQuestions([])
        }
        return
      }

      const { data, error } = await supabase
        .from('chapters')
        .select('*')
        .eq('subject_id', subjectId)
        .order('order_index', { ascending: true })

      if (error && !isMath && !isFinance) throw error
      const chaps = (data && data.length > 0) ? data : (isFinance ? FINANCE_FALLBACK_CHAPTERS : (isMath ? MATH_FALLBACK_CHAPTERS : []))
      setChapters(chaps)
      if (chaps && chaps.length > 0) {
        setSelectedChapter(chaps[0])
        fetchChapterDetails(chaps[0].id, activeSub)
      } else {
        setSelectedChapter(null)
        setLessons([])
        setQuestions([])
      }
    } catch (err) {
      console.error(err)
    }
  }

  async function fetchChapterDetails(chapterId, targetSub = null, targetChapter = null) {
    try {
      resetQuiz()
      const activeSub = targetSub || selectedSubject
      const activeChap = targetChapter || selectedChapter || chapters.find(c => c.id === chapterId)
      const chapOrder = activeChap?.order_index || (typeof chapterId === 'string' && chapterId.match(/\d+/)?.[0])
      const isComposition = activeSub?.id === 'composition-subject-id' || (activeSub?.name_en || '').toLowerCase().includes('composition')
      const isGrammar = activeSub?.id === 'grammar-subject-id' || (activeSub?.name_en || '').toLowerCase().includes('grammar') || (chapterId && String(chapterId).startsWith('grammar-'))
      const isMath = activeSub?.name_bn === 'গণিত' || (chapterId && String(chapterId).startsWith('math-')) || (activeChap?.title_bn && activeChap.title_bn.includes('অধ্যায়') && activeSub?.name_bn === 'গণিত')
      const isFinance = activeSub?.name_bn === 'ফিন্যান্স ও ব্যাংকিং' || (activeSub?.name_en || '').toLowerCase().includes('finance') || (chapterId && String(chapterId).startsWith('finance-'))

      if (isComposition) {
        setSelectedCompositionTopic(activeChap)
        setLessons([])
        setQuestions([])
        return
      }

      if (isGrammar) {
        const gramLessons = GRAMMAR_LESSONS_MAP[chapterId] || []
        setLessons(gramLessons)
        const gramMcqs = GRAMMAR_MCQS_MAP[chapterId] || []
        setQuestions(gramMcqs)
        return
      }

      // Fetch Lessons
      const { data: lessonData } = await supabase
        .from('lessons')
        .select('*')
        .eq('chapter_id', chapterId)
        .order('order_index', { ascending: true })

      if (isFinance) {
        const finLessons = FINANCE_LESSONS_MAP[chapterId] || FINANCE_LESSONS_MAP[`finance-ch-${chapOrder}`] || FINANCE_LESSONS_MAP['finance-ch-1'] || []
        setLessons(finLessons)
      } else if (isMath) {
        const isCh3 = chapterId === 'math-ch-3' || Number(chapOrder) === 3 || (activeChap?.title_bn && activeChap.title_bn.includes('বীজগাণিতিক'))
        const isCh4 = chapterId === 'math-ch-4' || Number(chapOrder) === 4 || (activeChap?.title_bn && (activeChap.title_bn.includes('সূচক') || activeChap.title_bn.includes('লগারিদম')))
        const dbLesson = lessonData && lessonData.length > 0 ? lessonData[0] : null
        // If DB has the older truncated lesson (< 30000 chars), display the rich, comprehensive complete lesson
        if (isCh4) {
          if (!dbLesson || (dbLesson.content_text && dbLesson.content_text.length < 30000)) {
            setLessons([{ id: `math-preview-lesson-${chapterId}`, content_text: MATH_CH4_FALLBACK_LESSON, order_index: 1 }])
          } else {
            setLessons(lessonData)
          }
        } else if (isCh3) {
          if (!dbLesson || (dbLesson.content_text && dbLesson.content_text.length < 30000)) {
            setLessons([{ id: `math-preview-lesson-${chapterId}`, content_text: MATH_CH3_FALLBACK_LESSON, order_index: 1 }])
          } else {
            setLessons(lessonData)
          }
        } else {
          setLessons(lessonData && lessonData.length > 0 ? lessonData : [{ id: `math-preview-lesson-${chapterId}`, content_text: MATH_CH1_FALLBACK_LESSON, order_index: 1 }])
        }
      } else if (lessonData && lessonData.length > 0) {
        setLessons(lessonData)
      } else {
        setLessons([])
      }

      // Fetch Exam Questions
      const { data: qData } = await supabase
        .from('exam_questions')
        .select('*')
        .eq('chapter_id', chapterId)

      if (qData && qData.length > 0) {
        setQuestions(qData)
      } else if (isFinance) {
        const finMcqs = FINANCE_MCQS_MAP[chapterId] || FINANCE_MCQS_MAP[`finance-ch-${selectedChapter?.order_index}`] || FINANCE_MCQS_MAP['finance-ch-1'] || []
        setQuestions(finMcqs)
      } else if (isMath) {
        setQuestions(MATH_CH1_FALLBACK_MCQS)
      } else {
        setQuestions([])
      }
    } catch (err) {
      console.error(err)
    }
  }

  async function fetchProgress() {
    try {
      const { data, error } = await supabase
        .from('student_progress')
        .select(`
          id,
          score,
          total,
          completed_at,
          chapters (
            title_bn,
            title_en,
            subjects (
              name_bn,
              name_en
            )
          )
        `)
        .order('completed_at', { ascending: false })

      if (!error) {
        setProgressList(data || [])
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {activeTab === 'curriculum' && (
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition flex items-center gap-1.5 shadow-sm"
                title={isSidebarOpen ? "বিষয় ও অধ্যায় সাইডবার লুকান" : "বিষয় ও অধ্যায় সাইডবার দেখান"}
              >
                {isSidebarOpen ? (
                  <PanelLeftClose className="w-4 h-4 text-teal-400" />
                ) : (
                  <PanelLeftOpen className="w-4 h-4 text-teal-400" />
                )}
                <span className="text-xs font-semibold hidden md:inline">
                  {isSidebarOpen ? "সাইডবার লুকান" : "বিষয় তালিকা"}
                </span>
              </button>
            )}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <GraduationCap className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="font-bold text-lg leading-none flex items-center gap-2">
                <span>NineBooks</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/30">
                  Parent Dashboard
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Class 9 Curriculum & Progress Monitor</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Search Answer button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-violet-500/15 hover:bg-violet-500/25 text-violet-300 border border-violet-500/40 transition"
              title="পাঠ থেকে উত্তর খুঁজুন"
            >
              <Search className="w-3.5 h-3.5 text-violet-400" />
              <span>উত্তর খুঁজুন</span>
            </button>

            {/* Study Tools Action Buttons: Vocabulary & Highlights */}
            <button
              onClick={() => setIsVocabOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 border border-teal-500/40 transition"
              title="সংরক্ষিত শব্দভাণ্ডার"
            >
              <BookMarked className="w-3.5 h-3.5 text-teal-400" />
              <span>শব্দভাণ্ডার</span>
              {vocabCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-teal-500/30 text-[10px] text-white font-bold">
                  {vocabCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsHighlightsOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 transition"
              title="গুরুত্বপূর্ণ হাইলাইটস"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>হাইলাইটস</span>
              {highlightsCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-amber-500/30 text-[10px] text-white font-bold">
                  {highlightsCount}
                </span>
              )}
            </button>

            {/* Quick Text Zoom Controls */}
            <div className="flex items-center bg-slate-800/90 rounded-xl p-0.5 border border-slate-700/80 shadow-sm" title="টেক্সট সাইজ জুম (Text Zoom)">
              <button
                onClick={zoomOut}
                disabled={textZoom <= 85}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 transition"
                title="লেখা ছোট করুন (A-)"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={resetZoom}
                className="px-2 text-xs font-bold text-teal-300 hover:text-teal-200 transition min-w-[44px] text-center"
                title="রিসেট সাইজ (125%)"
              >
                {textZoom}%
              </button>
              <button
                onClick={zoomIn}
                disabled={textZoom >= 200}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 transition"
                title="লেখা বড় করুন (A+)"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={fetchInitialData}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
              title="Refresh Data"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh</span>
            </button>

            <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  activeTab === 'curriculum'
                    ? 'bg-teal-500 text-slate-950 shadow-md font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Curriculum & Lessons</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('progress')
                  fetchProgress()
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  activeTab === 'progress'
                    ? 'bg-teal-500 text-slate-950 shadow-md font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Exam Progress ({progressList.length})</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area - Full Page Width */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-5">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/50 border border-red-800 text-red-300 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
            <div>
              <div className="font-semibold">Connection Error</div>
              <div className="text-sm mt-0.5">{error}</div>
              <div className="text-xs text-red-400 mt-2">
                Make sure you ran <code>supabase_schema.sql</code> and <code>seed_accounting.sql</code> in your Supabase SQL Editor!
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="h-96 flex flex-col items-center justify-center text-slate-400">
            <RefreshCw className="w-8 h-8 animate-spin text-teal-400 mb-3" />
            <p className="text-sm">Connecting to Supabase...</p>
          </div>
        ) : activeTab === 'curriculum' ? (
          <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
            {/* Left Sidebar: Subjects & Chapters List — hidden on mobile, controlled by bottom nav */}
            {isSidebarOpen && (
              <aside className={`w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto custom-scrollbar pr-0.5 animate-in fade-in slide-in-from-left-2 duration-150
                ${ /* desktop: always visible when sidebar open; mobile: only show when mobileView is 'subjects' or 'chapters' */
                  mobileView === 'subjects' || mobileView === 'chapters' ? 'block' : 'hidden lg:block'
                }`}>
                {/* Mobile: show Subjects panel OR Chapters panel based on mobileView */}
                <div className={mobileView === 'chapters' ? 'block lg:block' : 'block'}>
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3.5 shadow-sm">
                  <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookMarked className="w-3.5 h-3.5 text-teal-400" />
                    Subjects (বিষয়সমূহ)
                  </h2>
                  <div className="space-y-1.5">
                    {subjects.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          setSelectedSubject(sub)
                          fetchChapters(sub.id, sub)
                          setMobileView('chapters') // auto-advance on mobile
                        }}
                        className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between border ${
                          selectedSubject?.id === sub.id
                            ? 'bg-teal-500/15 border-teal-500/50 text-white shadow-sm font-semibold'
                            : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="truncate flex-1">
                          <div className="font-semibold text-sm truncate">{sub.name_bn}</div>
                          <div className="text-[11px] text-slate-400 truncate">{sub.name_en}</div>
                        </div>
                        {selectedSubject?.id === sub.id && (
                          <span className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0 ml-2"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>{/* end subjects card */}
                </div>{/* end mobile subjects/chapters switch */}

                {/* Chapters List */}
                <div className={`bg-slate-900/60 border border-slate-800 rounded-2xl p-3.5 shadow-sm ${
                  mobileView === 'chapters' ? 'block' : 'hidden lg:block'
                }`}>
                  <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-teal-400" />
                      {selectedSubject?.id === 'grammar-subject-id'
                        ? 'Topics (টপিকসমূহ)'
                        : selectedSubject?.id === 'composition-subject-id'
                        ? 'Writings & Composition'
                        : 'Chapters (অধ্যায়সমূহ)'}
                    </span>
                    <span className="text-[11px] font-normal text-slate-500">
                      {chapters.length} {selectedSubject?.id === 'composition-subject-id' ? 'Topics' : selectedSubject?.id === 'grammar-subject-id' ? 'টপিক' : 'অধ্যায়'}
                    </span>
                  </h2>

                  {/* Composition Specific Search, CV Launcher & Category Filter */}
                  {selectedSubject?.id === 'composition-subject-id' && (
                    <div className="mb-3 space-y-2.5">
                      {/* Live Topic Search */}
                      <div className="relative">
                        <input
                          type="text"
                          value={compositionSearchQuery}
                          onChange={(e) => applyCompositionFilter(undefined, undefined, e.target.value)}
                          placeholder="Search writings (e.g. Rainy Day, Letter)..."
                          className="w-full px-3 py-2 pl-8 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                        />
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        {compositionSearchQuery && (
                          <button
                            type="button"
                            onClick={() => applyCompositionFilter(undefined, undefined, '')}
                            className="absolute right-2.5 top-2 text-slate-400 hover:text-white text-xs"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      {/* CV Builder Banner */}
                      <button
                        type="button"
                        onClick={() => {
                          setIsCVModeActive(true)
                          setMobileView('read')
                        }}
                        className={`w-full p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-between shadow-sm ${
                          isCVModeActive
                            ? 'bg-rose-500/20 border-rose-500 text-rose-300 ring-2 ring-rose-500/40'
                            : 'bg-gradient-to-r from-slate-900 to-slate-800/90 border-rose-500/40 text-rose-300 hover:border-rose-500/70 hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-rose-400" />
                          <span>CV Builder (Resume Maker)</span>
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-extrabold">
                          CV
                        </span>
                      </button>

                      {/* Category Selector Grid */}
                      <div className="pt-2 border-t border-slate-800/80">
                        <div className="text-[11px] font-semibold text-slate-400 mb-1.5 flex items-center justify-between">
                          <span>Categories</span>
                          <span className="text-teal-400 text-[10px]">{chapters.length} Topics</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 max-h-36 overflow-y-auto custom-scrollbar pr-1">
                          {COMPOSITION_CATEGORIES.map(cat => {
                            const count = getCompositionCategoryCount(cat.id)
                            const isSelected = compositionCategory === cat.id
                            return (
                              <button
                                key={cat.id}
                                type="button"
                                onClick={() => {
                                  setIsCVModeActive(false)
                                  applyCompositionFilter(cat.id, undefined, undefined)
                                }}
                                className={`px-2 py-1.5 rounded-lg text-[11px] font-medium flex items-center justify-between transition border ${
                                  !isCVModeActive && isSelected
                                    ? 'bg-teal-500/20 border-teal-500/60 text-teal-300 font-bold shadow-sm'
                                    : 'bg-slate-800/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                                }`}
                              >
                                <span className="truncate">{cat.name_en}</span>
                                <span className="text-[10px] opacity-75 ml-1">{count}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Class Filter Tabs */}
                      <div className="grid grid-cols-4 gap-1 pt-2 border-t border-slate-800/80">
                        {['All', 'Class 6-8', 'SSC', 'HSC'].map(lvl => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => applyCompositionFilter(undefined, lvl, undefined)}
                            className={`px-1 py-1 rounded-lg text-[10px] font-semibold text-center transition border ${
                              compositionClassFilter === lvl
                                ? 'bg-teal-500/20 border-teal-500 text-teal-300'
                                : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {lvl === 'All' ? 'All' : lvl}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Grammar Level Exam Launcher Banner */}
                  {(selectedSubject?.id === 'grammar-subject-id' || (selectedSubject?.name_en || '').toLowerCase().includes('grammar')) && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsLevelExamActive(true)
                        setMobileView('read')
                      }}
                      className={`w-full mb-3 p-3 rounded-2xl border text-xs font-bold transition flex items-center justify-between shadow-sm ${
                        isLevelExamActive
                          ? 'bg-gradient-to-r from-amber-500/20 via-teal-500/20 to-emerald-500/20 border-amber-500 text-amber-300 ring-2 ring-amber-500/40'
                          : 'bg-gradient-to-r from-slate-900 to-slate-800/90 border-amber-500/40 text-amber-300 hover:border-amber-500/70 hover:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-400 animate-pulse" />
                        <span>লেভেল মূল্যায়ন পরীক্ষা</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-extrabold">
                        TEST
                      </span>
                    </button>
                  )}

                  {/* Grammar Class Filter Tabs */}
                  {(selectedSubject?.id === 'grammar-subject-id' || (selectedSubject?.name_en || '').toLowerCase().includes('grammar')) && (
                    <div className="grid grid-cols-2 gap-1.5 mb-3 pb-3 border-b border-slate-800/80">
                      {[
                        { id: 'All', label: 'সব লেভেল', count: '৩৪' },
                        { id: 'Class 9-10', label: 'SSC (৯-১০)', count: '১৩' },
                        { id: 'Class 8', label: '৮ম শ্রেণি', count: '১১' },
                        { id: 'Class 11-12', label: 'HSC (১১-১২)', count: '১০' }
                      ].map((lvl) => (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => {
                            setIsLevelExamActive(false)
                            setGrammarClassFilter(lvl.id)
                            fetchChapters('grammar-subject-id', selectedSubject, lvl.id)
                          }}
                          className={`px-2 py-1.5 rounded-lg text-[11px] font-medium flex items-center justify-between transition border ${
                            !isLevelExamActive && grammarClassFilter === lvl.id
                              ? 'bg-teal-500/20 border-teal-500/60 text-teal-300 font-bold shadow-sm'
                              : 'bg-slate-800/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                          }`}
                        >
                          <span>{lvl.label}</span>
                          <span className="text-[10px] opacity-75">{lvl.count}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="space-y-1 max-h-[calc(100vh-22rem)] overflow-y-auto pr-1 custom-scrollbar">
                    {chapters.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => {
                          setIsCVModeActive(false)
                          setIsLevelExamActive(false)
                          setSelectedChapter(ch)
                          if (selectedSubject?.id === 'composition-subject-id') {
                            setSelectedCompositionTopic(ch)
                          } else {
                            fetchChapterDetails(ch.id, selectedSubject, ch)
                          }
                          setMobileView('read') // auto-advance on mobile
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-xl text-xs transition flex items-center gap-2.5 border ${
                          !isLevelExamActive && !isCVModeActive && ((selectedSubject?.id === 'composition-subject-id' && selectedCompositionTopic?.id === ch.id) || selectedChapter?.id === ch.id)
                            ? 'bg-slate-800 border-teal-500/60 text-teal-300 font-medium shadow-sm'
                            : 'border-transparent text-slate-300 hover:bg-slate-800/60'
                        }`}
                        title={`${ch.title_bn} (${ch.title_en})`}
                      >
                        <span className="w-5 h-5 rounded-md bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-semibold flex-shrink-0">
                          {ch.order_index}
                        </span>
                        <div className="truncate flex-1">
                          <div className="truncate font-medium">{ch.title_bn}</div>
                          <div className="text-[10px] text-slate-500 truncate flex items-center gap-1.5">
                            {ch.class_level && (
                              <span className="text-[9px] px-1 rounded bg-slate-800/90 text-teal-400 font-medium">
                                {ch.class_level}
                              </span>
                            )}
                            <span className="truncate">{ch.title_en}</span>
                            {ch.wordCount && (
                              <span className="text-slate-500 text-[9px]">({ch.wordCount} words)</span>
                            )}
                          </div>
                        </div>
                        {ch.isSuggestion && (
                          <span className="text-[9px] font-bold px-1 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            ★
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>
            )}

            {/* Right Pane: Lesson Content & Exam Questions — hidden on mobile unless mobileView is 'read' or 'quiz' */}
            <div className={`flex-1 min-w-0 space-y-6 w-full ${
              mobileView === 'read' || mobileView === 'quiz' ? 'block' : 'hidden lg:block'
            }`}>
              {!isSidebarOpen && (
                <div className="flex items-center gap-2 mb-2">
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-teal-500/40 text-xs font-semibold text-teal-300 hover:bg-slate-800 transition shadow-sm"
                  >
                    <PanelLeftOpen className="w-4 h-4 text-teal-400" />
                    <span>বিষয় ও অধ্যায় তালিকা খুলুন (Show Sidebar)</span>
                  </button>
                </div>
              )}
              {selectedSubject?.id === 'composition-subject-id' ? (
                <CompositionViewer
                  topic={selectedCompositionTopic || selectedChapter}
                  isCVMode={isCVModeActive}
                  onSelectTopic={(t) => {
                    setIsCVModeActive(false)
                    setSelectedCompositionTopic(t)
                    setSelectedChapter(t)
                  }}
                />
              ) : isLevelExamActive ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setIsLevelExamActive(false)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-teal-500/40 text-xs font-semibold text-teal-300 hover:bg-slate-800 transition shadow-sm"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>টপিক ও পাঠে ফিরে যান (Back to Topic Lessons)</span>
                    </button>
                  </div>
                  <GrammarLevelExam 
                    onClose={() => setIsLevelExamActive(false)} 
                    onSelectChapter={(ch) => {
                      setIsLevelExamActive(false)
                      setSelectedChapter(ch)
                      fetchChapterDetails(ch.id, selectedSubject, ch)
                    }}
                  />
                </div>
              ) : selectedChapter ? (
                <>
                  {/* Chapter Header */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-900/40 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1 flex-wrap">
                      <span>{selectedSubject?.name_bn}</span>
                      <span>•</span>
                      <span>{selectedSubject?.id === 'grammar-subject-id' ? `টপিক ${selectedChapter.order_index}` : `অধ্যায় ${selectedChapter.order_index}`}</span>
                      {selectedChapter.class_level && (
                        <>
                          <span>•</span>
                          <span className="px-2 py-0.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-[10px] font-bold">
                            {selectedChapter.class_level}
                          </span>
                        </>
                      )}
                    </div>
                    <h1 className="text-2xl font-bold text-white">{selectedChapter.title_bn}</h1>
                    <p className="text-sm text-slate-400 mt-1">{selectedChapter.title_en}</p>

                    <div className="flex items-center gap-4 mt-4 text-xs text-slate-400 pt-4 border-t border-slate-800 flex-wrap">
                      {selectedSubject?.id === 'grammar-subject-id' || (selectedChapter?.id && String(selectedChapter.id).startsWith('grammar-')) ? (
                        <>
                          <span className="flex items-center gap-1.5 text-teal-300 font-medium">
                            <BookOpen className="w-4 h-4 text-teal-400" />
                            {selectedChapter.rules_count || lessons[0]?.rules?.length || 0}টি নিয়ম (Rules)
                          </span>
                          <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            {selectedChapter.examples_count || lessons[0]?.examples?.length || 0}টি উদাহরণ (Examples)
                          </span>
                          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                            <HelpCircle className="w-4 h-4 text-emerald-400" />
                            {questions.length}টি কুইজ প্রশ্ন (MCQ Tests)
                          </span>

                          <button
                            type="button"
                            onClick={() => setIsLevelExamActive(true)}
                            className="ml-auto px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-teal-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                          >
                            <Award className="w-3.5 h-3.5 text-amber-400" />
                            <span>লেভেল টেস্ট পরীক্ষা দিন</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <span className="flex items-center gap-1.5">
                            <FileText className="w-4 h-4 text-teal-400" />
                            {lessons.length} পাঠ (Lessons)
                          </span>
                          <span className="flex items-center gap-1.5">
                            <HelpCircle className="w-4 h-4 text-emerald-400" />
                            {questions.length} কুইজ প্রশ্ন (Questions)
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Studio Neural Audio Player with Dual Voice Toggle & Live Highlighting */}
                  {lessons.length > 0 && (
                    <LessonAudioPlayer 
                      textToRead={lessons.map(l => l.content_text).join('\n\n')} 
                      title={selectedChapter.title_bn}
                      onActiveChunkChange={setActivePlayingChunk}
                    />
                  )}

                  {/* Lessons Section with Interactive Highlighting & Reading Material */}
                  <div 
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 reading-area relative w-full"
                    style={{ '--lesson-font-size': `${(textZoom / 100) * 1.05}rem` }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <FileText className="w-5 h-5 text-teal-400" />
                        <span>
                          {selectedSubject?.id === 'grammar-subject-id' || (selectedChapter?.id && String(selectedChapter.id).startsWith('grammar-'))
                            ? 'ব্যাকরণের নিয়ম ও পাঠ (Grammar Rules & Lessons)'
                            : 'পড়ার বিষয়বস্তু (Reading Material)'}
                        </span>
                      </h3>

                      {/* Text Zoom Pill Toolbar */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-slate-950/80 border border-slate-700/80 rounded-xl p-1 shadow-sm">
                          <span className="text-xs font-semibold text-slate-400 px-1.5 hidden sm:flex items-center gap-1">
                            <Type className="w-3.5 h-3.5 text-teal-400" />
                            টেক্সট জুম:
                          </span>
                          <button
                            onClick={zoomOut}
                            disabled={textZoom <= 85}
                            className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 transition shadow-sm"
                            title="লেখা ছোট করুন (A-)"
                          >
                            A-
                          </button>
                          <button
                            onClick={resetZoom}
                            className="px-2.5 py-1 text-xs font-bold text-teal-300 hover:text-teal-200 transition min-w-[48px] text-center"
                            title="রিসেট সাইজ (125%)"
                          >
                            {textZoom}%
                          </button>
                          <button
                            onClick={zoomIn}
                            disabled={textZoom >= 200}
                            className="px-2.5 py-1 text-xs font-bold rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/30 disabled:opacity-30 transition shadow-sm"
                            title="লেখা বড় করুন (A+)"
                          >
                            A+
                          </button>
                        </div>
                      </div>
                    </div>

                    {lessons.length === 0 ? (
                      <div className="p-8 text-center text-slate-500 border border-dashed border-slate-800 rounded-xl">
                        এই অধ্যায়ে কোনো পাঠ পাওয়া যায়নি।
                      </div>
                    ) : (
                      <div className="space-y-6 w-full">
                        {lessons.map((lesson, idx) => (
                          <div
                            key={lesson.id || idx}
                            className="w-full"
                          >
                            {lessons.length > 1 && (
                              <div className="text-xs font-semibold text-teal-400/80 mb-3 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                                <span>পাঠ ক্রম #{lesson.order_index}</span>
                              </div>
                            )}
                            {selectedSubject?.id === 'grammar-subject-id' || (selectedChapter?.id && String(selectedChapter.id).startsWith('grammar-')) ? (
                              <GrammarSectionViewer
                                lesson={lesson}
                                chapter={selectedChapter}
                                onJumpToQuiz={() => {
                                  const qEl = document.getElementById('quiz-section')
                                  if (qEl) qEl.scrollIntoView({ behavior: 'smooth' })
                                }}
                              />
                            ) : (
                              <InteractiveLessonViewer
                                content={lesson.content_text || ''}
                                userHighlights={userHighlights}
                                activePlayingChunk={activePlayingChunk}
                                chapter={selectedChapter}
                                subject={selectedSubject}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Exam Questions Section (Interactive Self-Test Quiz) */}
                  <div id="quiz-section" className={`bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl ${
                    // On mobile, highlight the quiz section when mobileView === 'quiz'
                    mobileView === 'quiz' ? 'ring-2 ring-teal-500/40' : ''
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-emerald-400" />
                          অধ্যায়ভিত্তিক কুইজ ও আত্মযাচাই (Exam MCQs)
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          সঠিক উত্তরটি যাচাই করতে অপশনে ক্লিক করুন অথবা 'উত্তর দেখুন' চাপুন।
                        </p>
                      </div>

                      {questions.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap">
                          {Object.keys(selectedAnswers).length > 0 && (
                            <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-sky-300">
                              স্কোর: {questions.filter((q, idx) => selectedAnswers[q.id || `q-${idx}`] === q.correct_answer_index).length}/{questions.length} সঠিক
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={toggleShowAllAnswers}
                            className="text-xs px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700 transition flex items-center gap-1.5 shadow-sm"
                          >
                            {showAllAnswers ? (
                              <>
                                <EyeOff className="w-3.5 h-3.5 text-amber-400" />
                                <span>সব উত্তর লুকান</span>
                              </>
                            ) : (
                              <>
                                <Eye className="w-3.5 h-3.5 text-sky-400" />
                                <span>সব উত্তর দেখুন</span>
                              </>
                            )}
                          </button>
                          {Object.keys(selectedAnswers).length > 0 && (
                            <button
                              type="button"
                              onClick={resetQuiz}
                              className="text-xs px-2.5 py-1.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-1"
                              title="পুনরায় পরীক্ষা দিন"
                            >
                              <RotateCcw className="w-3 h-3" />
                              <span>রিসেট</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {questions.length === 0 ? (
                      <div className="p-8 text-center text-slate-500 border border-dashed border-slate-800 rounded-2xl">
                        এই অধ্যায়ে কোনো কুইজ প্রশ্ন যোগ করা হয়নি।
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {questions.map((q, qIndex) => {
                          const qKey = q.id || `q-${qIndex}`
                          const options = Array.isArray(q.options_json)
                            ? q.options_json
                            : JSON.parse(q.options_json || '[]')

                          const selectedOpt = selectedAnswers[qKey]
                          const isRevealed = showAllAnswers || revealedQuestions[qKey] || selectedOpt !== undefined

                          return (
                            <div
                              key={qKey}
                              className="bg-slate-950/60 border border-slate-800/90 rounded-2xl p-5 sm:p-5.5 transition-all"
                            >
                              {/* Question Title & Reveal Button */}
                              <div className="flex items-start justify-between gap-3 mb-3.5">
                                <div className="font-semibold text-slate-200 flex items-start gap-2.5">
                                  <span className="w-7 h-7 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                                    {qIndex + 1}
                                  </span>
                                  <div>
                                    <div className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                                      {q.question_bn || q.question_text || q.question_en}
                                    </div>
                                    {q.question_en && q.question_en !== (q.question_bn || q.question_text) && (
                                      <div className="text-xs text-slate-400 font-normal mt-0.5">
                                        {q.question_en}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => toggleRevealQuestion(qKey)}
                                  className={`flex-shrink-0 text-[11px] px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1 font-medium ${
                                    isRevealed
                                      ? 'bg-amber-950/30 border-amber-500/40 text-amber-300'
                                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40'
                                  }`}
                                >
                                  {isRevealed ? (
                                    <>
                                      <EyeOff className="w-3 h-3 text-amber-400" />
                                      <span>উত্তর লুকান</span>
                                    </>
                                  ) : (
                                    <>
                                      <Eye className="w-3 h-3 text-sky-400" />
                                      <span>উত্তর দেখুন</span>
                                    </>
                                  )}
                                </button>
                              </div>

                              {/* Interactive Options Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                                {options.map((opt, optIndex) => {
                                  const isSelected = selectedOpt === optIndex
                                  const isThisCorrect = optIndex === q.correct_answer_index

                                  let cardStyle = 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-sky-500/50 hover:bg-slate-800/60'
                                  let badge = null

                                  if (isRevealed) {
                                    if (isThisCorrect) {
                                      cardStyle = 'bg-emerald-950/50 border-emerald-500/60 text-emerald-200 shadow-sm shadow-emerald-950/40 font-medium'
                                      badge = (
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                                          ✓ সঠিক উত্তর
                                        </span>
                                      )
                                    } else if (isSelected) {
                                      cardStyle = 'bg-rose-950/40 border-rose-500/60 text-rose-200 font-medium'
                                      badge = (
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/40">
                                          ✗ ভুল উত্তর
                                        </span>
                                      )
                                    }
                                  } else if (isSelected) {
                                    cardStyle = 'bg-sky-950/50 border-sky-500/60 text-sky-200 font-medium'
                                  }

                                  return (
                                    <button
                                      type="button"
                                      key={optIndex}
                                      onClick={() => handleSelectOption(qKey, optIndex)}
                                      className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-medium border flex items-center justify-between transition-all duration-150 cursor-pointer ${cardStyle}`}
                                    >
                                      <span className="flex-1 pr-2 leading-relaxed">{opt}</span>
                                      {badge}
                                    </button>
                                  )
                                })}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="h-96 flex items-center justify-center text-slate-500 bg-slate-900/30 border border-slate-800 rounded-2xl">
                  বাম পাশ থেকে একটি অধ্যায় নির্বাচন করুন।
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Tab 2: Daughter's Exam Progress Monitor */
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                মেয়ের পরীক্ষার অগ্রগতি রেকর্ড (Progress Monitor)
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                মোবাইল অ্যাপ থেকে দেওয়া সব কুইজ পরীক্ষার ফলাফল ও স্কোর এখানে স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়।
              </p>
            </div>

            {progressList.length === 0 ? (
              <div className="p-16 text-center text-slate-500 bg-slate-900/40 border border-dashed border-slate-800 rounded-2xl">
                <GraduationCap className="w-12 h-12 mx-auto text-slate-600 mb-3" />
                <div className="text-base font-medium text-slate-400">এখনো কোনো পরীক্ষার ফলাফল নেই</div>
                <div className="text-xs text-slate-500 mt-1">
                  আপনার মেয়ে মোবাইল অ্যাপে কুইজ সম্পন্ন করলেই সাথে সাথে এখানে ফলাফল দেখা যাবে।
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {progressList.map((item) => {
                  const percentage = Math.round((item.score / item.total) * 100) || 0
                  const passed = percentage >= 50
                  const dateStr = new Date(item.completed_at).toLocaleString()

                  return (
                    <div
                      key={item.id}
                      className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs text-teal-400 font-semibold">
                            {item.chapters?.subjects?.name_bn || 'বিষয়'}
                          </div>
                          <div className="font-bold text-base text-white mt-0.5">
                            {item.chapters?.title_bn || 'অধ্যায়'}
                          </div>
                        </div>
                        <div
                          className={`text-sm font-extrabold px-2.5 py-1 rounded-xl border ${
                            percentage >= 80
                              ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                              : passed
                              ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                              : 'bg-red-950/60 border-red-500 text-red-300'
                          }`}
                        >
                          {item.score} / {item.total}
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                          <span>স্কোর শতকরা হার</span>
                          <span className="font-semibold text-white">{percentage}%</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              percentage >= 80 ? 'bg-emerald-500' : passed ? 'bg-amber-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {dateStr}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          যাচাইকৃত
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </main>

      {/* ===== MOBILE BOTTOM NAVIGATION BAR ===== */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-t border-slate-800 flex items-center justify-around px-1 py-1 safe-area-pb">
        {/* বিষয় - Subjects */}
        <button
          onClick={() => { setActiveTab('curriculum'); setMobileView('subjects') }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all min-w-[56px] ${
            activeTab === 'curriculum' && mobileView === 'subjects'
              ? 'text-teal-400 bg-teal-500/10'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <BookMarked className="w-5 h-5" />
          <span className="text-[10px] font-semibold">বিষয়</span>
        </button>

        {/* অধ্যায় - Chapters */}
        <button
          onClick={() => { setActiveTab('curriculum'); setMobileView('chapters') }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all min-w-[56px] ${
            activeTab === 'curriculum' && mobileView === 'chapters'
              ? 'text-teal-400 bg-teal-500/10'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] font-semibold">অধ্যায়</span>
        </button>

        {/* পড়া - Read (center, highlighted) */}
        <button
          onClick={() => { setActiveTab('curriculum'); setMobileView('read') }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all min-w-[56px] ${
            activeTab === 'curriculum' && mobileView === 'read'
              ? 'text-teal-400 bg-teal-500/10'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-semibold">পড়া</span>
        </button>

        {/* কুইজ - Quiz */}
        <button
          onClick={() => {
            setActiveTab('curriculum')
            setMobileView('quiz')
            // Scroll to quiz section after a short delay
            setTimeout(() => {
              document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100)
          }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all min-w-[56px] ${
            activeTab === 'curriculum' && mobileView === 'quiz'
              ? 'text-emerald-400 bg-emerald-500/10'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <HelpCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold">কুইজ</span>
        </button>

        {/* প্রগতি - Progress */}
        <button
          onClick={() => { setActiveTab('progress'); fetchProgress() }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all min-w-[56px] ${
            activeTab === 'progress'
              ? 'text-amber-400 bg-amber-500/10'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="text-[10px] font-semibold">প্রগতি</span>
        </button>
      </nav>

      {/* Smart Search Modal */}
      <SmartSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        lessonText={lessons.map(l => l.content_text).join('\n\n')}
        chapterTitle={selectedChapter?.title_bn}
      />

      {/* Floating Text Selection Toolbar (Translate, Speak, Highlight, Save) */}
      <TextSelectionToolbar
        chapterTitle={selectedChapter?.title_bn || ''}
        lessonId={selectedChapter?.id || ''}
      />

      {/* Vocabulary Notebook Drawer */}
      <VocabularyDrawer
        isOpen={isVocabOpen}
        onClose={() => setIsVocabOpen(false)}
      />

      {/* Important Sentences Highlights Drawer */}
      <HighlightsDrawer
        isOpen={isHighlightsOpen}
        onClose={() => setIsHighlightsOpen(false)}
      />
    </div>
  )
}
