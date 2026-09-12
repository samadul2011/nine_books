import React, { useState, useMemo, useEffect } from 'react'
import { marked } from 'marked'
import katex from 'katex'
import { Eye, EyeOff, HelpCircle, CheckCircle2, Lightbulb, BookOpen, Sparkles, Award } from 'lucide-react'
import { getChapterStudyGuide } from '../data/banglaStudyGuide'
import { FINANCE_CQS_MAP } from '../data/financeBankingData'

/**
 * InteractiveLessonViewer:
 * Parses lesson markdown and renders textbook reading text alongside
 * interactive expandable Q&A cards with "উত্তর দেখুন (Show Answer) / লুকান" buttons.
 * Also renders easy-to-understand story/poem summaries and board-standard Creative Questions (CQ).
 */
export default function InteractiveLessonViewer({
  content = '',
  userHighlights = [],
  activePlayingChunk = '',
  chapter = null,
  subject = null
}) {
  // Track open/closed state for each Q&A item
  const [openMap, setOpenMap] = useState({})
  const [openCqMap, setOpenCqMap] = useState({})
  const [activeCqIndex, setActiveCqIndex] = useState(0)
  const [allCqOpen, setAllCqOpen] = useState(false)
  const [openMathMap, setOpenMathMap] = useState({})
  const [allMathOpen, setAllMathOpen] = useState(false)

  // Scroll to top (1st page) whenever a new chapter is opened
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [chapter?.id])

  const toggleAnswer = (id) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const toggleCqAnswer = (key) => {
    setOpenCqMap((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const toggleAllCqAnswers = () => {
    const nextState = !allCqOpen
    setAllCqOpen(nextState)
    setOpenCqMap({
      k: nextState,
      kh: nextState,
      g: nextState,
      gh: nextState
    })
  }

  const toggleMathSolution = (id) => {
    setOpenMathMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const toggleAllMathSolutions = (mathIds) => {
    const nextState = !allMathOpen
    setAllMathOpen(nextState)
    const newMap = {}
    mathIds.forEach((id) => {
      newMap[id] = nextState
    })
    setOpenMathMap(newMap)
  }

  // Determine if current subject is Bengali Literature (বাংলা সাহিত্য)
  const isBanglaLiterature = useMemo(() => {
    const subBn = subject?.name_bn || ''
    const subEn = (subject?.name_en || '').toLowerCase()
    if (subBn.includes('বাংলা') || subEn.includes('bangla')) return true
    if (subBn || subEn) return false // Subject is explicitly known and not Bangla (ICT, English, Accounting, etc.)

    // Fallback if subject object is not yet loaded
    const chapBn = chapter?.title_bn || ''
    return chapBn.includes('সাহিত্য') || (chapBn.includes('বাংলা') && !chapBn.includes('আমাদের বাংলাদেশ'))
  }, [subject, chapter])

  const isFinanceSubject = useMemo(() => {
    const subBn = (subject?.name_bn || '').toLowerCase()
    const subEn = (subject?.name_en || '').toLowerCase()
    const chapBn = (chapter?.title_bn || '').toLowerCase()
    return subBn.includes('ফিন্যান্স') || subEn.includes('finance') || chapBn.includes('অর্থায়ন') || chapBn.includes('ব্যাংক')
  }, [subject, chapter])

  // Get study guide (summary & creative questions) for Bangla or Finance chapters
  const studyGuide = useMemo(() => {
    if (isBanglaLiterature && chapter) {
      return getChapterStudyGuide(chapter.order_index, chapter.title_bn || '')
    }
    if (isFinanceSubject && chapter) {
      const cqs = FINANCE_CQS_MAP[chapter.id] || FINANCE_CQS_MAP[`finance-ch-${chapter.order_index}`]
      if (cqs) {
        const cqList = Array.isArray(cqs) ? cqs : [cqs]
        const currentCq = cqList[activeCqIndex] || cqList[0]
        return {
          creativeQuestions: cqList,
          creativeQuestion: currentCq
        }
      }
    }
    return null
  }, [chapter, isBanglaLiterature, isFinanceSubject, activeCqIndex])

/**
 * KaTeX Mathematical & Financial Formula Typesetting
 * Translates LaTeX formulas ($...$ and $$...$$) into textbook-quality MathML & HTML
 */
function renderMathWithKaTeX(text) {
  if (!text) return ''

  // Normalize potential JS escape artifacts (\f, \t)
  let s = text
    .replace(/\x0crac/g, '\\frac')
    .replace(/\t(?=imes)/g, '\\times')

  // 1. Process Display Math: $$ ... $$
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (match, formula) => {
    try {
      const rendered = katex.renderToString(formula.trim(), {
        displayMode: true,
        throwOnError: false
      })
      return `\n\n<div class="katex-display-container my-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-teal-500/40 text-center shadow-xl overflow-x-auto select-text">\n${rendered}\n</div>\n\n`
    } catch (e) {
      return match
    }
  })

  // 2. Process Inline Math: $ ... $
  s = s.replace(/(?<!\$)\$([^\$\n]+)\$(?!\$)/g, (match, formula) => {
    try {
      const rendered = katex.renderToString(formula.trim(), {
        displayMode: false,
        throwOnError: false
      })
      return `<span class="katex-math-inline px-1 py-0.5 rounded text-cyan-100 font-medium">${rendered}</span>`
    } catch (e) {
      return match
    }
  })

  return s
}

/**
 * Preprocesses lesson markdown to:
 * 1. Remove scan/illustration OCR junk (e.g. ্বালযাদশ STE লা!, neers ma, etc.)
 * 2. Correct common Bengali and ICT OCR typos
 * 3. Format topic headings ("বিষয়") into large, colorful, glowing showcase cards
 * 4. Format "বহুনির্বাচনি প্রশ্ন" (MCQ) options (ক, খ, গ, ঘ) into a responsive 2-column grid with clear gap
 */
function preprocessLessonMarkdown(content, isBangla = true) {
  if (!content) return ''

  // 1. Normalize CRLF to \n and divider lines
  let text = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  text = text.replace(/^[─━═]{3,}$/gm, '\n---\n')

  // 2. Comprehensive Bengali & ICT OCR typo corrections
  text = text
    .replace(/নমুনা\s+প্রন/g, 'নমুনা প্রশ্ন')
    .replace(/বীরতৃ/g, 'বীরত্ব')
    .replace(/উঁদার্ধ্য/g, 'ঔদার্য')
    .replace(/উঁদার্য/g, 'ঔদার্য')
    .replace(/প্রত্যপকার(?=[^\u0980-\u09FF]|$)/g, 'প্রত্যুপকার')
    .replace(/([কখগঘ][\.।]\s*)ষ্ঠ(?=[^\u0980-\u09FF]|$)/g, '$1ষষ্ঠ')
    .replace(/([কখগঘ][\.।]\s*)অপ্তম(?=[^\u0980-\u09FF]|$)/g, '$1সপ্তম')
    .replace(/মহানৃভবতা/g, 'মহানুভবতা')
    .replace(/ওচিত্যবোধ/g, 'ঔচিত্যবোধ')
    .replace(/প্রজাশ্রীতি/g, 'প্রজাপ্রীতি')
    .replace(/আব্বাসীয(?=[^\u0980-\u09FF]|$)/g, 'আব্বাসীয়')
    .replace(/প্রাণরক্ার্থ[েএ]?/g, 'প্রাণরক্ষার্থে')
    .replace(/কৃতিম\s+garg/g, 'কৃত্রিম বুদ্ধিমত্তা (AI)')
    .replace(/কৃত্তিম\s+garg/g, 'কৃত্রিম বুদ্ধিমত্তা (AI)')
    .replace(/কৃতিম/g, 'কৃত্রিম')
    .replace(/কৃত্তিম/g, 'কৃত্রিম')
    .replace(/আযাপল/g, 'অ্যাপল')
    .replace(/আ্যাপল/g, 'অ্যাপল')
    .replace(/আযাডা/g, 'অ্যাডা')
    .replace(/বালোদেশ/g, 'বাংলাদেশ')
    .replace(/্বালযাদশ/g, 'বাংলাদেশ')
    .replace(/আর্টফোন/g, 'স্মার্টফোন')
    .replace(/কষউসাধ্/g, 'কষ্টসাধ্য')
    .replace(/কষটসাধ্য/g, 'কষ্টসাধ্য')
    .replace(/বিভির/g, 'বিভিন্ন')
    .replace(/দুনীতি/g, 'দুর্নীতি')
    .replace(/প্রোথাম/g, 'প্রোগ্রাম')
    .replace(/প্রোগ্াম/g, 'প্রোগ্রাম')
    .replace(/আ্যাকাউন্ট/g, 'অ্যাকাউন্ট')
    .replace(/আ্যানিমেশন/g, 'অ্যানিমেশন')
    .replace(/আ্যাকসেস/g, 'অ্যাকসেস')
    .replace(/আ্যাটাচ/g, 'অ্যাটাচ')
    .replace(/ম্যালওয্যার/g, 'ম্যালওয়্যার')
    .replace(/আভাস্ত/g, 'আভাস্ট')
    .replace(/নর্টনটি/g, 'নর্টন')
    .replace(/গুগলিয়েলমো\s+মার্কনি\s*\([^\)]*\)/g, 'গুগলিয়েলমো মার্কোনি (১৮৭৪-১৯৩৭)')
    .replace(/ইন্সটিটিউট\s+অফ\s+ইলেকট্রিক্যাল\s+এন্ড\s+ইলেকট্রনিক\s+ইঞ্জিনিয়ারিং\s*\([^\)]*\)/g, 'ইনস্টিটিউট অব ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ার্স (IEEE)')
    .replace(/পারবে\s+AT\b/g, 'পারবে না')
    .replace(/হতে\s+VT\b/g, 'হতে হবে')
    .replace(/যেতে\s+BA\b/g, 'যেতে হয়')
    .replace(/ব্যবহৃত\s+A\b/g, 'ব্যবহৃত হয়')
    .replace(/হিসাব\s+ergs/g, 'হিসাব প্রস্তুত')
    .replace(/\bkinতু\b/g, 'কিন্তু')
    .replace(/পাপ্ডিত্য/g, 'পাণ্ডিত্য')
    .replace(/পঞ্তিত/g, 'পণ্ডিত')
    .replace(/সঙ্ভো/g, 'সঙ্গে')

  // 2.5 KaTeX Mathematical & Financial formula typesetting (True textbook quality equations)
  text = renderMathWithKaTeX(text)

  // Remove lingering textbook running page headers
  text = text.replace(/(?:^|\n)(?:তথ্য ও যোগাযোগ প্রযুক্তি ও আমাদের বাংলাদেশ|কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার নিরাপত্তা|ইন্টারনেট ও ওয়েব পরিচিতি|আমার লেখালেখি ও হিসাব|মাল্টিমিডিয়া ও গ্রাফিক্স|প্রোগ্রামিংয়ের মাধ্যমে সমস্যার সমাধান)\s*(?:\d+|[০-৯]+)?(?:\n+|$)/g, '\n\n')

  // 3. Story Title & Author showcase banner under "## 📖 মূল পাঠ" (STRICTLY ONLY for Bangla Literature)
  if (isBangla) {
    const mainReadingRegex = /(## 📖 মূল পাঠ\s*\(গদ্য[^\n]*\n+|## 📖 মূল পাঠ\s*\(কবিতা[^\n]*\n+)([^\n#]+)\n+([^\n#]+)(\n+)/
    text = text.replace(mainReadingRegex, (match, header, title, author, trailing) => {
      const cleanTitle = title.trim()
      const cleanAuthor = author.trim()
      if (cleanTitle && cleanAuthor && cleanTitle.length < 80 && cleanAuthor.length < 80) {
        return `${header}\n\n<div class="story-hero-showcase my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-indigo-950/50 border border-sky-500/35 text-center shadow-2xl relative overflow-hidden select-text">\n` +
          `  <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wider uppercase mb-3">\n` +
          `    <span>📖</span> মূল সাহিত্য পাঠ\n` +
          `  </div>\n` +
          `  <h1 class="story-hero-title text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-indigo-200 tracking-wide drop-shadow-md py-1 mb-3">\n` +
          `    ${cleanTitle}\n` +
          `  </h1>\n` +
          `  <div class="inline-flex items-center gap-2.5 px-5 py-2 rounded-xl bg-slate-800/80 border border-emerald-500/40 text-emerald-300 text-base sm:text-lg font-semibold shadow-inner mt-1">\n` +
          `    <span class="text-emerald-400 font-bold">✍️ রচয়িতা:</span>\n` +
          `    <span class="text-white font-bold tracking-wide">${cleanAuthor}</span>\n` +
          `  </div>\n` +
          `</div>\n\n` + trailing
      }
      return match
    })
  }

  // 4. Topic Header Showcase: Make subjects/topics larger, colorful & prominent
  text = text.replace(/(?:^|\n)###\s+(🔹\s*বিষয়[^\n]*|👤[^\n]*|🎯\s*এ\s*অধ্যায়\s*শেষে[^\n]*|⚙️\s*ব্যবহারিক\s*গাইড[^\n]*|💡\s*বিষয়[^\n]*|📌[^\n]*)/g, (match, headingText) => {
    return `\n\n<div class="topic-header-showcase my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-indigo-950/70 border-l-4 border-cyan-400 border-y border-r border-slate-800/90 shadow-2xl select-text">\n` +
      `  <div class="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-2 flex items-center gap-2">\n` +
      `    <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>\n` +
      `    <span>গুরুত্বপূর্ণ পাঠ্য বিষয় ও আলোচনা</span>\n` +
      `  </div>\n` +
      `  <h3 class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-200 m-0 p-0 leading-tight tracking-wide drop-shadow-sm">\n` +
      `    ${headingText.trim()}\n` +
      `  </h3>\n` +
      `</div>\n\n`
  })

  // 5. MCQ Section Header enhancement
  text = text.replace(/(?:^|\n)(?:নমুনা\s+প্রশ্ন\s*\n+)?বহুনির্বাচনি\s+প্রশ্ন\s*\n+/g, () => {
    return `\n\n<div class="mcq-section-banner my-8 p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900/90 border-l-4 border-sky-400 shadow-xl">\n` +
      `  <div class="text-xs uppercase font-bold tracking-wider text-sky-400 mb-1">পরীক্ষার প্রস্তুতি ও স্ব-মূল্যায়ন</div>\n` +
      `  <h3 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">\n` +
      `    <span class="p-1.5 rounded-lg bg-sky-500/20 text-sky-300">🎯</span> বহুনির্বাচনি প্রশ্ন (নমুনা প্রশ্ন)\n` +
      `  </h3>\n` +
      `</div>\n\n`
  })

  // 6. Gibberish cleaning & Topic Card Elevating for line-by-line stream
  const GIBBERISH_PATTERNS = [
    /STE\s*লা/i,
    /neers\s*ma/i,
    /8799\s*=/i,
    /বালোদেশ\s*ea/i,
    /Gr\s*[‘'`]Seca/i,
    /Ce\s*SAO/i,
    /ence\s*sete/i,
    /YY\s*8\s*2/i,
    /we\s*pfs/i,
    /#e\s*7\s*©/i,
    /\(টি\)\s*\.\.\.\.এ/i,
    /্বালযাদশ/i,
    /Once\s*sa\s*he/i,
    /RENNES\s*পানা/i,
    /^[০-৯\d\.\-\,\s\(\)\=\+\*\/\?\!\@\#\$\%\^\&\_~]+$/
  ]

  const KNOWN_TOPICS = [
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?একুশ\s+শতক\s+এবং\s+তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s*$/i, title: 'একুশ শতক এবং তথ্য ও যোগাযোগ প্রযুক্তি', badge: '📌 মূল পাঠ্য বিষয়' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👥\s*)?তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তির\s+বিকাশে\s+উল্লেখযোগ্য\s+ব্যক্তিত্ব\s*$/i, title: 'তথ্য ও যোগাযোগ প্রযুক্তির বিকাশে উল্লেখযোগ্য ব্যক্তিত্ব', badge: '👥 স্মরণীয় ব্যক্তিত্ব' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?(?:বিজ্ঞানী\s+)?চার্লস\s+ব্যাবেজ(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'চার্লস ব্যাবেজ (Charles Babbage: ১৭৯১-১৮৭১) — আধুনিক কম্পিউটারের জনক', badge: '👤 ব্যক্তিত্ব ও আবিষ্কারক' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?অ্যাডা\s+লাভলেস(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'অ্যাডা লাভলেস (Ada Lovelace: ১৮১৫-১৮৫২) — প্রথম কম্পিউটার প্রোগ্রামার', badge: '👤 ব্যক্তিত্ব ও প্রোগ্রামার' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?(?:বিজ্ঞানী\s+)?জেমস\s+ক্লার্ক\s+ম্যাক্সওয়েল(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'জেমস ক্লার্ক ম্যাক্সওয়েল (James Clerk Maxwell: ১৮৩১-১৮৭৯) — তড়িৎ চৌম্বকীয় বল', badge: '👤 বিজ্ঞানী ও গবেষক' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?(?:বিজ্ঞানী\s+|স্যার\s+)?জগদীশ\s+চন্দ্র\s+বসু(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'স্যার জগদীশ চন্দ্র বসু (Jagadish Chandra Bose: ১৮৫৮-১৯৩৭) — অতিক্ষুদ্র তরঙ্গ ও বেতার', badge: '👤 বিজ্ঞানী ও উদ্ভাবক' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?গুগলিয়?েলমো\s+মার্কো?নি(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'গুগলিয়েলমো মার্কোনি (Guglielmo Marconi: ১৮৭৪-১৯৩৭) — বেতার তরঙ্গ ও রেডিও', badge: '👤 বিজ্ঞানী ও নোবেলজয়ী' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?রেমন্ড\s+স্যামুয়েল\s+টমলিনসন(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'রেমন্ড স্যামুয়েল টমলিনসন (Raymond Samuel Tomlinson) — ই-মেইলের জনক', badge: '👤 উদ্ভাবক ও ইঞ্জিনিয়ার' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?স্টিভ\s+জবস(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'স্টিভ জবস (Steve Jobs: ১৯৫৫-২০১১) — অ্যাপল কম্পিউটার', badge: '👤 উদ্যোক্তা ও আইকন' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?(?:উইলিয়াম\s+হেনরি\s+)?বিল\s+গেটস(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'উইলিয়াম হেনরি "বিল" গেটস (Bill Gates) — মাইক্রোসফট ও উইন্ডোজ', badge: '👤 সফটওয়্যার প্রবক্তা' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?(?:স্যার\s+টিমোথি\s+জন\s+)?(?:“|")?টিম(?:”|")?\s+বার্নার্স[- ]লি(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'স্যার টিম বার্নার্স-লি (Tim Berners-Lee) — ওয়ার্ল্ড ওয়াইড ওয়েব (WWW) ও HTTP', badge: '👤 WWW এর জনক' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:👤\s*)?মার্ক\s+জাকারবার্গ(?:\s*\([^\)]*\))?(?:\s*—[^\n]*)?$/i, title: 'মার্ক জাকারবার্গ (Mark Zuckerberg) — ফেসবুক ও সোশ্যাল মিডিয়া', badge: '👤 সামাজিক যোগাযোগ মাধ্যম' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?ই[- ]লার্নিং\s+ও\s+বাংলাদেশ\s*$/i, title: 'বাংলাদেশে ই-লার্নিং (E-Learning)', badge: '💻 ডিজিটাল শিক্ষা' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?ই[- ]গভর্ন্যান্স\s+ও\s+বাংলাদেশ\s*$/i, title: 'বাংলাদেশে ই-গভর্ন্যান্স (E-Governance)', badge: '🏛️ ডিজিটাল সুশাসন' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?ই[- ]সেবা\s+ও\s+বাংলাদেশ\s*$/i, title: 'বাংলাদেশে ই-সেবা (E-Services: ই-পর্চা, ই-পুর্জি, ডিজিটাল স্বাস্থ্যসেবা)', badge: '⚡ নাগরিক সেবা' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?ই[- ]কমার্স\s+ও\s+বাংলাদেশ\s*$/i, title: 'বাংলাদেশে ই-কমার্স (E-Commerce)', badge: '🛍️ অনলাইন বাণিজ্য' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?কর্মক্ষেত্রে\s+তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s*$/i, title: 'কর্মক্ষেত্রে তথ্য ও যোগাযোগ প্রযুক্তি ও ক্যারিয়ার', badge: '💼 ক্যারিয়ার ও শ্রমবাজার' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?সামাজিক\s+যোগাযোগ\s+ও\s+তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s*$/i, title: 'সামাজিক যোগাযোগ ও আইসিটি', badge: '🌐 নেটওয়ার্কিং' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?বিনোদন\s+এবং\s+তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s*$/i, title: 'বিনোদন এবং তথ্য ও যোগাযোগ প্রযুক্তি', badge: '🎮 ডিজিটাল বিনোদন' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?ডিজিটাল\s+বাংলাদেশ\s*$/i, title: 'ডিজিটাল বাংলাদেশ ও স্মার্ট বাংলাদেশ রূপকল্প', badge: '🇧🇩 জাতীয় রূপকল্প' },

    // Chapter 2
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?কম্পিউটার\s+ও\s+কম্পিউটার\s+ব্যবহারকারীর\s+নিরাপত্তা/i, title: 'কম্পিউটার ও ব্যবহারকারীর নিরাপত্তা বিধান', badge: '🛡️ সাইবার সিকিউরিটি' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?বিশেষ\s+নিরাপত্তা\s+ও\s+পাসওয়ার্ড|পাসওয়ার্ড/i, title: 'পাসওয়ার্ড ও বিশেষ নিরাপত্তা কৌশল', badge: '🔑 অ্যাকাউন্ট সুরক্ষা' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?কম্পিউটার\s+ভাইরাস\s+ও\s+অ্যান্টিভাইরাস|ভাইরাস\s+ও\s+অ্যান্টিভাইরাস/i, title: 'কম্পিউটার ভাইরাস ও অ্যান্টিভাইরাস সুরক্ষা', badge: '🦠 ম্যালওয়্যার প্রোটেকশন' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?সফটওয়্যার\s+ইনস্টলেশন\s+ও\s+আনইনস্টলেশন|সফটওয়্যার\s+ইনস্টল/i, title: 'সফটওয়্যার ইনস্টলেশন ও আনইনস্টলেশন পদ্ধতি', badge: '⚙️ ব্যবহারিক গাইড' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?পাইরেসি\s+ও\s+কপিরাইট\s+আইন/i, title: 'পাইরেসি ও কপিরাইট আইন সচেতনতা', badge: '⚖️ সাইবার আইন ও নৈতিকতা' },
    { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?কম্পিউটার\s+ট্রাবলশুটিং|সাধারণ\s+ট্রাবলশুটিং/i, title: 'কম্পিউটার হার্ডওয়্যার ও সাধারণ ট্রাবলশুটিং', badge: '🔧 সমস্যা ও সমাধান' }
  ]
  const lines = text.split('\n')
  const processedLines = []
  let inLearningOutcomes = false
  let learningOutcomes = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // 1. Skip OCR noise / illustration gibberish lines
    if (GIBBERISH_PATTERNS.some((pat) => pat.test(trimmed))) {
      continue
    }

    // 2. Learning outcomes detection and grouping
    if (trimmed.endsWith('পারবঃ') || trimmed.endsWith('পারব;') || trimmed.endsWith('পারব।') || trimmed.endsWith('পারব')) {
      inLearningOutcomes = true
      learningOutcomes.push(trimmed)
      continue
    } else if (inLearningOutcomes && learningOutcomes.length > 0 && trimmed.length > 0) {
      processedLines.push(
        `\n<div class="learning-outcomes-card my-6 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-teal-950/40 border border-teal-500/40 shadow-xl select-text">\n` +
        `  <div class="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">\n` +
        `    <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>\n` +
        `    <span>🎯 এ অধ্যায় শেষে আমরা যা শিখতে পারব (শিখনফল)</span>\n` +
        `  </div>\n` +
        `  <ul class="list-disc pl-5 space-y-1.5 text-slate-200 font-medium">\n` +
        learningOutcomes.map((item) => `    <li>${item.replace(/^[>•\s-]+/, '')}</li>`).join('\n') +
        `\n  </ul>\n` +
        `</div>\n`
      )
      learningOutcomes = []
      inLearningOutcomes = false
    }

    // 3. Elevate known curriculum topics (from plain text or heading) into showcase cards
    const matchedTopic = KNOWN_TOPICS.find((top) => top.match.test(trimmed))
    if (matchedTopic && trimmed.length < 80) {
      processedLines.push(
        `\n<div class="topic-header-showcase my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-indigo-950/70 border-l-4 border-cyan-400 border-y border-r border-slate-800/90 shadow-2xl select-text">\n` +
        `  <div class="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-2 flex items-center gap-2">\n` +
        `    <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>\n` +
        `    <span>${matchedTopic.badge}</span>\n` +
        `  </div>\n` +
        `  <h3 class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-200 m-0 p-0 leading-tight tracking-wide drop-shadow-sm">\n` +
        `    ${matchedTopic.title}\n` +
        `  </h3>\n` +
        `</div>\n`
      )
      continue
    }

    // Check if line starts with an option like ক. or ক।
    if (/^[কখগঘ][\.।]\s+/.test(trimmed)) {
      const optionMatches = []
      let curLineIdx = i

      while (curLineIdx < lines.length) {
        const cLine = lines[curLineIdx].trim()
        if (!/^[কখগঘ][\.।]\s+/.test(cLine)) break

        const regex = /(?:^|\s+)([কখগঘ])[\.।]\s*([\s\S]+?)(?=(?:\s+[কখগঘ][\.।]\s+)|$)/g
        let match
        while ((match = regex.exec(cLine)) !== null) {
          const letter = match[1].trim()
          const optText = match[2].trim()
          if (letter && optText) {
            optionMatches.push({ letter, text: optText })
          }
        }
        curLineIdx++
      }

      if (optionMatches.length >= 2) {
        const badgeStyles = {
          'ক': { badge: 'bg-sky-500/20 border-sky-500/40 text-sky-300', border: 'border-slate-800 hover:border-sky-500/40' },
          'খ': { badge: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300', border: 'border-slate-800 hover:border-emerald-500/40' },
          'গ': { badge: 'bg-amber-500/20 border-amber-500/40 text-amber-300', border: 'border-slate-800 hover:border-amber-500/40' },
          'ঘ': { badge: 'bg-purple-500/20 border-purple-500/40 text-purple-300', border: 'border-slate-800 hover:border-purple-500/40' }
        }

        const gridHtml = `\n<div class="mcq-options-grid grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3.5 w-full select-text">\n` +
          optionMatches.map((opt) => {
            const style = badgeStyles[opt.letter] || badgeStyles['ক']
            return `  <div class="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-900/80 border ${style.border} hover:bg-slate-800/60 transition-all duration-150 shadow-sm">\n` +
              `    <span class="w-7 h-7 rounded-lg border font-bold text-sm flex items-center justify-center flex-shrink-0 ${style.badge}">${opt.letter}</span>\n` +
              `    <span class="text-slate-100 font-medium text-base leading-snug">${opt.text}</span>\n` +
              `  </div>`
          }).join('\n') +
          `\n</div>\n`

        processedLines.push(gridHtml)
        i = curLineIdx - 1
        continue
      }
    }

    // Format Question prompts in MCQ section ONLY IF immediately followed by MCQ options (ক, খ, গ, ঘ)
    if (/^[১-৯][০-৯]*[।\.]\s+/.test(trimmed)) {
      const qParts = [trimmed]
      let curLineIdx = i + 1

      // Gather multi-line question prompt if wrapped
      while (curLineIdx < lines.length) {
        const nextLine = lines[curLineIdx].trim()
        if (!nextLine || /^[কখগঘ][\.।]\s+/.test(nextLine) || /^[১-৯][০-৯]*[।\.]\s+/.test(nextLine) || nextLine.startsWith('#')) {
          break
        }
        qParts.push(nextLine)
        curLineIdx++
      }

      // Check if next non-empty line actually starts with an option (ক, খ, গ, ঘ)
      const nextLineTrimmed = curLineIdx < lines.length ? lines[curLineIdx].trim() : ''
      const isActualMcqQuestion = /^[কখগঘ][\.।]\s+/.test(nextLineTrimmed)

      if (isActualMcqQuestion) {
        const fullPrompt = qParts.join(' ')
        const qHtml = `\n\n<div class="mcq-question-prompt text-base sm:text-lg font-bold text-sky-100 mt-6 mb-2 flex items-start gap-2.5 select-text">\n` +
          `  <span class="w-6 h-6 rounded-md bg-sky-500/20 text-sky-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">?</span>\n` +
          `  <span class="flex-1 leading-relaxed">${fullPrompt}</span>\n` +
          `</div>\n\n`

        processedLines.push(qHtml)
        i = curLineIdx - 1
        continue
      }
    }

    processedLines.push(line)
  }

  if (learningOutcomes.length > 0) {
    processedLines.push(
      `\n<div class="learning-outcomes-card my-6 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-teal-950/40 border border-teal-500/40 shadow-xl select-text">\n` +
      `  <div class="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">\n` +
      `    <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>\n` +
      `    <span>🎯 এ অধ্যায় শেষে আমরা যা শিখতে পারব (শিখনফল)</span>\n` +
      `  </div>\n` +
      `  <ul class="list-disc pl-5 space-y-1.5 text-slate-200 font-medium">\n` +
      learningOutcomes.map((item) => `    <li>${item.replace(/^[>•\s-]+/, '')}</li>`).join('\n') +
      `\n  </ul>\n` +
      `</div>\n`
    )
  }

  return processedLines.join('\n')
}

// Parse the content into structured blocks: { type: 'markdown' | 'qa', content | items }
  const blocks = useMemo(() => {
    if (!content) return []

    const preprocessed = preprocessLessonMarkdown(content, isBanglaLiterature)
    const lines = preprocessed.split('\n')
    const parsedBlocks = []
    let currentMarkdownLines = []

    let i = 0
    while (i < lines.length) {
      const line = lines[i]
      const trimmed = line.trim()

      // Detect Math Problem start (e.g. > 🔢 **সমস্যা... or **সমস্যা... or **উদাহরণ...)
      const isMathProblem =
        trimmed.startsWith('> 🔢') ||
        trimmed.startsWith('🔢') ||
        trimmed.startsWith('> **সমস্যা') ||
        trimmed.startsWith('**সমস্যা:') ||
        trimmed.startsWith('**গাণিতিক সমস্যা') ||
        trimmed.startsWith('> **উদাহরণ') ||
        trimmed.startsWith('**উদাহরণ:')

      if (isMathProblem) {
        const problemLines = [
          trimmed
            .replace(/^>\s*🔢?\s*/, '')
            .replace(/^\*\*সমস্যা[:.]?\s*/, '')
            .replace(/^\*\*গাণিতিক সমস্যা[:.]?\s*/, '')
            .replace(/^\*\*উদাহরণ[:.]?\s*/, '')
        ]
        let j = i + 1
        const solutionLines = []
        let foundSolution = false

        while (j < lines.length) {
          const nextTrim = lines[j].trim()
          if (
            nextTrim.startsWith('> 💡 **সমাধান') ||
            nextTrim.startsWith('💡 **সমাধান') ||
            nextTrim.startsWith('**সমাধান:') ||
            nextTrim.startsWith('> **সমাধান:') ||
            nextTrim.startsWith('সমাধান:')
          ) {
            foundSolution = true
            const cleanSolHeader = nextTrim
              .replace(/^>\s*💡?\s*\*\*সমাধান[:.]?\s*\*{0,2}/, '')
              .replace(/^\*\*সমাধান[:.]?\s*\*{0,2}/, '')
              .replace(/^সমাধান[:.]?\s*/, '')
            if (cleanSolHeader) {
              solutionLines.push(cleanSolHeader)
            }
            j++
            break
          } else if (
            nextTrim.startsWith('> 🔢') ||
            nextTrim.startsWith('🔢') ||
            nextTrim.startsWith('###') ||
            nextTrim.startsWith('## ') ||
            nextTrim.startsWith('# ')
          ) {
            break
          } else {
            problemLines.push(nextTrim.replace(/^>\s*/, ''))
            j++
          }
        }

        if (foundSolution) {
          while (j < lines.length) {
            const sLine = lines[j]
            const sTrim = sLine.trim()
            if (
              sTrim.startsWith('> 🔢') ||
              sTrim.startsWith('🔢') ||
              sTrim.startsWith('###') ||
              sTrim.startsWith('## ') ||
              sTrim.startsWith('# ') ||
              sTrim.startsWith('> ❓') ||
              sTrim.startsWith('**Q')
            ) {
              break
            }
            solutionLines.push(sTrim.replace(/^>\s*/, ''))
            j++
          }

          if (currentMarkdownLines.length > 0) {
            parsedBlocks.push({
              type: 'markdown',
              text: currentMarkdownLines.join('\n')
            })
            currentMarkdownLines = []
          }

          parsedBlocks.push({
            type: 'math-problem',
            id: `math-${i}`,
            problem: problemLines.filter(Boolean).join('\n'),
            solution: solutionLines.filter(Boolean).join('\n')
          })

          i = j
          continue
        }
      }

      // Detect Question start (Supports English Q/Answer and Bengali প্রশ্ন/উত্তর)
      const isQuestion =
        trimmed.startsWith('> ❓ **Q') ||
        trimmed.startsWith('> **Q') ||
        trimmed.startsWith('**Q:') ||
        trimmed.startsWith('**Q1') ||
        trimmed.startsWith('**Q2') ||
        trimmed.startsWith('**Q3') ||
        trimmed.startsWith('**Q4') ||
        trimmed.startsWith('**Q5') ||
        trimmed.startsWith('**Q6') ||
        trimmed.startsWith('**Q7') ||
        trimmed.startsWith('**Q8') ||
        trimmed.startsWith('**Q9') ||
        trimmed.startsWith('**Question') ||
        trimmed.startsWith('> ❓ **প্রশ্ন') ||
        trimmed.startsWith('> **প্রশ্ন') ||
        trimmed.startsWith('**প্রশ্ন:') ||
        trimmed.startsWith('**প্রশ্ন') ||
        trimmed.startsWith('প্রশ্ন:')

      if (isQuestion) {
        // Look for matching answer in subsequent lines
        let answerText = ''
        let nextIdx = i + 1
        while (nextIdx < lines.length) {
          const nextTrimmed = lines[nextIdx].trim()
          if (!nextTrimmed) {
            nextIdx++
            continue
          }
          const isAnswer =
            nextTrimmed.startsWith('> 💡 **Answer') ||
            nextTrimmed.startsWith('> 💡 **A') ||
            nextTrimmed.startsWith('> **Answer') ||
            nextTrimmed.startsWith('> **A') ||
            nextTrimmed.startsWith('**Answer') ||
            nextTrimmed.startsWith('**A:') ||
            nextTrimmed.startsWith('Answer:') ||
            nextTrimmed.startsWith('> 💡 **উত্তর') ||
            nextTrimmed.startsWith('> **উত্তর') ||
            nextTrimmed.startsWith('**উত্তর') ||
            nextTrimmed.startsWith('উত্তর:')

          if (isAnswer) {
            answerText = nextTrimmed
              .replace(/^>\s*💡?\s*\*\*Answer[:.]?\s*/i, '')
              .replace(/^>\s*💡?\s*\*\*A[:.]?\s*/i, '')
              .replace(/^\*\*Answer[:.]?\s*/i, '')
              .replace(/^\*\*A[:.]?\s*/i, '')
              .replace(/^Answer[:.]?\s*/i, '')
              .replace(/^>\s*💡?\s*\*\*উত্তর[:.]?\s*/i, '')
              .replace(/^>\s*\*\*উত্তর[:.]?\s*/i, '')
              .replace(/^\*\*উত্তর[:.]?\s*/i, '')
              .replace(/^উত্তর[:.]?\s*/i, '')
              .replace(/\*\*$/, '')
              .trim()
            break
          } else {
            break
          }
        }

        if (answerText) {
          // Flush accumulated markdown
          if (currentMarkdownLines.length > 0) {
            parsedBlocks.push({
              type: 'markdown',
              text: currentMarkdownLines.join('\n')
            })
            currentMarkdownLines = []
          }

          const questionText = trimmed
            .replace(/^>\s*❓?\s*\*\*Q\d*[:.]?\s*/i, '')
            .replace(/^>\s*\*\*Question\d*[:.]?\s*/i, '')
            .replace(/^\*\*Q\d*[:.]?\s*/i, '')
            .replace(/^\*\*Question\d*[:.]?\s*/i, '')
            .replace(/\*\*$/, '')
            .trim()

          parsedBlocks.push({
            type: 'qa',
            id: `qa-${i}`,
            question: questionText,
            answer: answerText
          })

          i = nextIdx + 1
          continue
        }
      }

      currentMarkdownLines.push(line)
      i++
    }

    if (currentMarkdownLines.length > 0) {
      parsedBlocks.push({
        type: 'markdown',
        text: currentMarkdownLines.join('\n')
      })
    }

    return parsedBlocks
  }, [content, isBanglaLiterature])

  // Helper to apply highlight markers and audio karaoke highlights to HTML
  const formatHtml = (rawMarkdown) => {
    // Render any math formulas with KaTeX first before Markdown parses underscores/stars
    const withMath = renderMathWithKaTeX(rawMarkdown || '')
    let html = marked.parse(withMath)

    // Apply persistent user highlights
    if (userHighlights && userHighlights.length > 0) {
      userHighlights.forEach((h) => {
        if (h.text && html.includes(h.text)) {
          const markTag = `<mark class="bg-amber-500/25 text-amber-200 px-1 py-0.5 rounded border-b border-amber-500/50" title="সংরক্ষিত হাইলাইট">${h.text}</mark>`
          html = html.split(h.text).join(markTag)
        }
      })
    }

    // Apply active audio karaoke highlight
    if (activePlayingChunk && activePlayingChunk.trim()) {
      const chunk = activePlayingChunk.trim()
      if (html.includes(chunk)) {
        const activeMark = `<mark class="active-audio-highlight bg-cyan-500/35 text-white font-medium px-1.5 py-0.5 rounded-md border-b-2 border-cyan-400 shadow-sm shadow-cyan-500/20 transition-all duration-300">${chunk}</mark>`
        html = html.split(chunk).join(activeMark)
      } else {
        const prefix = chunk.slice(0, Math.min(25, chunk.length)).trim()
        if (prefix && html.includes(prefix)) {
          const activeMark = `<mark class="active-audio-highlight bg-cyan-500/35 text-white font-medium px-1.5 py-0.5 rounded-md border-b-2 border-cyan-400 shadow-sm shadow-cyan-500/20 transition-all duration-300">${prefix}</mark>`
          html = html.replace(prefix, activeMark)
        }
      }
    }

    return html
  }

  return (
    <div className="space-y-6 w-full">
      {/* 1. Quick Story/Poem Summary Card (সহজ পাঠ-সারাংশ ও মূলভাব) */}
      {studyGuide?.summary && (
        <div className="summary-card p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-900 border border-amber-500/35 shadow-xl select-text">
          <div className="flex items-center justify-between gap-3 mb-3.5 border-b border-amber-500/20 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-sm shadow-sm border border-amber-500/30">
                💡
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-amber-200 leading-snug">
                  {studyGuide.summary.title || 'সহজ পাঠ-সারাংশ ও মূলভাব'}
                </h3>
                <p className="text-[11px] text-amber-300/75 font-medium">সহজে গল্প ও কবিতার মূল অর্থ বোঝার বিশেষ সহায়িকা</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
              সহজ সারসংক্ষেপ
            </span>
          </div>

          {/* Summary Text */}
          <div className="text-slate-100 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
            <p>{studyGuide.summary.short}</p>
          </div>

          {/* Theme & Moral */}
          {studyGuide.summary.theme && (
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-start gap-2.5 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/70">
              <span className="text-emerald-400 font-bold text-sm flex-shrink-0 mt-0.5">🎯 মূলভাব ও শিক্ষা:</span>
              <span className="text-emerald-100/90 text-xs sm:text-sm font-medium leading-relaxed">
                {studyGuide.summary.theme}
              </span>
            </div>
          )}

          {/* Key Points */}
          {studyGuide.summary.keyPoints && studyGuide.summary.keyPoints.length > 0 && (
            <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {studyGuide.summary.keyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/70 px-3 py-2 rounded-lg border border-slate-800/80">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Math Problems Master Toolbar (Quick toggle all solutions) */}
      {blocks.filter((b) => b.type === 'math-problem').length > 0 && (
        <div className="math-master-toolbar p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-950/50 via-slate-900 to-indigo-950/40 border border-teal-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 shadow-xl select-text mb-6">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-base shadow-sm border border-teal-500/30">
              📐
            </span>
            <div>
              <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>গাণিতিক সমস্যাবলি ও সমাধান</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-semibold">
                  {blocks.filter((b) => b.type === 'math-problem').length}টি অঙ্ক
                </span>
              </div>
              <div className="text-xs text-teal-300/80 font-medium mt-0.5">
                প্রথমে নিজে খাতায় সমাধান করার চেষ্টা করুন, এরপর সমাধান দেখুন বাটনে ক্লিক করুন
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toggleAllMathSolutions(blocks.filter((b) => b.type === 'math-problem').map((b) => b.id))}
            className="text-xs sm:text-sm px-4 py-2 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-teal-500/50 text-slate-100 flex items-center gap-2 transition-all shadow-sm self-end sm:self-auto"
          >
            {allMathOpen ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-amber-400" />
                <span>সব সমাধান লুকান</span>
              </>
            ) : (
              <>
                <Lightbulb className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
                <span>সব সমাধান দেখুন</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* 2. Main Textbook Content & Blocks */}
      {blocks.map((block, idx) => {
        if (block.type === 'markdown') {
          const html = formatHtml(block.text)
          return (
            <div
              key={`md-${idx}`}
              className="markdown-content text-slate-100 select-text w-full"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )
        }

        if (block.type === 'qa') {
          const isOpen = !!openMap[block.id]
          return (
            <div
              key={block.id}
              style={{ fontSize: 'var(--lesson-font-size, 1.05rem)' }}
              className={`rounded-2xl border transition-all duration-200 p-4 sm:p-5 select-text w-full ${
                isOpen
                  ? 'bg-slate-900/90 border-sky-500/40 shadow-lg shadow-sky-950/30'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Question Row */}
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 font-bold text-xs flex items-center justify-center shadow-sm">
                  Q
                </span>
                <div className="flex-1 font-semibold text-slate-100 leading-snug pt-0.5">
                  {block.question}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-3.5 flex justify-end">
                <button
                  type="button"
                  onClick={() => toggleAnswer(block.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl font-bold flex items-center gap-1.5 border transition-all duration-150 ${
                    isOpen
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 hover:bg-emerald-950/60 shadow-sm'
                      : 'bg-sky-950/30 border-sky-500/30 text-sky-300 hover:bg-sky-900/40'
                  }`}
                >
                  {isOpen ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5 text-emerald-400" />
                      <span>উত্তর লুকান (Hide Answer)</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5 text-sky-400" />
                      <span>উত্তর দেখুন (Show Answer)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Expandable Answer Box */}
              {isOpen && (
                <div className="mt-4 pt-3.5 border-t border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-start gap-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-3.5 sm:p-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center">
                      A
                    </span>
                    <div className="flex-1 text-emerald-100/90 text-sm leading-relaxed font-medium">
                      {block.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        }

        if (block.type === 'math-problem') {
          const isMathOpen = !!openMathMap[block.id]
          const solutionHtml = formatHtml(block.solution)
          return (
            <div
              key={block.id}
              style={{ fontSize: 'var(--lesson-font-size, 1.05rem)' }}
              className={`math-problem-card rounded-3xl border transition-all duration-300 p-5 sm:p-6 select-text w-full my-6 shadow-xl ${
                isMathOpen
                  ? 'bg-gradient-to-br from-slate-900 via-slate-900/95 to-teal-950/40 border-teal-500/50 shadow-teal-950/20'
                  : 'bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Problem Header & Prompt */}
              <div className="flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500/20 to-sky-500/20 border border-teal-500/40 text-teal-300 font-bold text-sm flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                  🔢
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold tracking-wider text-teal-400 uppercase bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded-full">
                      গাণিতিক সমস্যা ও অনুশীলন
                    </span>
                  </div>
                  <div 
                    className="font-bold text-slate-100 text-base sm:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatHtml(block.problem) }}
                  />
                </div>
              </div>

              {/* Action Button: Show / Hide Solution */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400 hidden sm:inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>নিজে চেষ্টা করার পর সমাধান মিলিয়ে দেখুন</span>
                </span>
                <button
                  type="button"
                  onClick={() => toggleMathSolution(block.id)}
                  className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-bold flex items-center gap-2 border transition-all duration-200 shadow-md ml-auto ${
                    isMathOpen
                      ? 'bg-amber-950/40 border-amber-500/50 text-amber-300 hover:bg-amber-950/60 shadow-amber-950/30'
                      : 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-teal-500/40 text-teal-300 hover:bg-teal-500/30 hover:border-teal-400 hover:shadow-teal-500/20'
                  }`}
                >
                  {isMathOpen ? (
                    <>
                      <EyeOff className="w-4 h-4 text-amber-400" />
                      <span>🙈 সমাধান লুকান (Hide Solution)</span>
                    </>
                  ) : (
                    <>
                      <Lightbulb className="w-4 h-4 text-teal-400 animate-pulse" />
                      <span>💡 সমাধান দেখুন (Show Solution)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Collapsible Solution Container */}
              {isMathOpen && (
                <div className="mt-4 pt-4 border-t border-slate-800/80 animate-in fade-in slide-in-from-top-3 duration-200">
                  <div className="rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-slate-950/90 via-slate-900 to-teal-950/30 border border-teal-500/35 shadow-inner">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider mb-3.5 pb-2.5 border-b border-slate-800/80">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
                      <span>ধাপভিত্তিক বিস্তারিত সমাধান (Step-by-Step Solution)</span>
                    </div>
                    <div
                      className="markdown-content text-slate-100 text-sm sm:text-base leading-relaxed math-solution-body"
                      dangerouslySetInnerHTML={{ __html: solutionHtml }}
                    />
                  </div>
                </div>
              )}
            </div>
          )
        }

        return null
      })}

      {/* 3. Creative Question Card (সৃজনশীল প্রশ্ন - CQ) with Model Answers */}
      {studyGuide?.creativeQuestion && (
        <div className="creative-question-card mt-12 mb-8 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/35 shadow-2xl select-text">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-5 border-b border-indigo-500/20 pb-4 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/35 flex items-center justify-center font-bold text-lg shadow-sm">
                ✍️
              </span>
              <div>
                <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">বোর্ড পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি</div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {studyGuide.creativeQuestion.title || 'পাঠভিত্তিক সৃজনশীল প্রশ্ন ও আদর্শ সমাধান (CQ)'}
                </h3>
              </div>
            </div>

            {/* Master Toggle to Show / Hide All Answers */}
            <button
              type="button"
              onClick={toggleAllCqAnswers}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 text-xs font-bold transition shadow-sm"
            >
              {allCqOpen ? <EyeOff className="w-3.5 h-3.5 text-indigo-400" /> : <Eye className="w-3.5 h-3.5 text-indigo-400" />}
              <span>{allCqOpen ? 'সব সমাধান লুকান' : 'সব সমাধান দেখুন'}</span>
            </button>
          </div>

          {/* Multi-CQ Selector Tabs if multiple CQs exist for this chapter */}
          {studyGuide.creativeQuestions && studyGuide.creativeQuestions.length > 1 && (
            <div className="flex items-center gap-2 mb-6 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800 w-fit flex-wrap">
              {studyGuide.creativeQuestions.map((cqItem, qIdx) => (
                <button
                  key={qIdx}
                  type="button"
                  onClick={() => {
                    setActiveCqIndex(qIdx)
                    setOpenCqMap({})
                    setAllCqOpen(false)
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
                    activeCqIndex === qIdx
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span>📝</span>
                  <span>{cqItem.title ? (cqItem.title.includes('(') ? cqItem.title.split('(')[0].trim() : cqItem.title) : `সৃজনশীল প্রশ্ন - 0${qIdx + 1}`}</span>
                </button>
              ))}
            </div>
          )}

          {/* Stimulus (উদ্দীপক) */}
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border-l-4 border-indigo-400 border-r border-t border-b border-slate-800 shadow-inner">
            <div className="text-xs font-bold text-indigo-300 mb-2 flex items-center gap-2">
              <span>📖</span> নিচের উদ্দীপকটি পড়ে সংশ্লিষ্ট প্রশ্নগুলোর উত্তর দাও:
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
              "{studyGuide.creativeQuestion.stimulus}"
            </p>
          </div>

          {/* 4 Sub-questions: ক, খ, গ, ঘ */}
          <div className="space-y-4">
            {[
              { key: 'k', label: 'ক', type: 'জ্ঞানমূলক (১ নম্বর)', text: studyGuide.creativeQuestion.questions.k, ans: studyGuide.creativeQuestion.answers.k },
              { key: 'kh', label: 'খ', type: 'অনুধাবনমূলক (২ নম্বর)', text: studyGuide.creativeQuestion.questions.kh, ans: studyGuide.creativeQuestion.answers.kh },
              { key: 'g', label: 'গ', type: 'প্রয়োগমূলক (৩ নম্বর)', text: studyGuide.creativeQuestion.questions.g, ans: studyGuide.creativeQuestion.answers.g },
              { key: 'gh', label: 'ঘ', type: 'উচ্চতর দক্ষতা (৪ নম্বর)', text: studyGuide.creativeQuestion.questions.gh, ans: studyGuide.creativeQuestion.answers.gh },
            ].map((subQ) => {
              const isOpen = !!openCqMap[subQ.key]
              return (
                <div key={subQ.key} className="p-4 sm:p-4.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/35 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        {subQ.label}
                      </span>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                          {subQ.type}
                        </span>
                        <div className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                          {subQ.text}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleCqAnswer(subQ.key)}
                      className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-xl border font-bold flex items-center gap-1.5 transition ${
                        isOpen
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 shadow-sm'
                          : 'bg-indigo-950/40 border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50'
                      }`}
                    >
                      {isOpen ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5 text-emerald-400" />
                          <span>উত্তর লুকান</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5 text-indigo-400" />
                          <span>আদর্শ উত্তর</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expandable Model Answer rendered with Markdown and Table support */}
                  {isOpen && (
                    <div className="mt-3.5 pt-3.5 border-t border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                        <span className="font-bold text-emerald-400 block mb-2.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>আদর্শ সমাধান:</span>
                        </span>
                        <div
                          className="markdown-content text-slate-100 text-sm sm:text-base leading-relaxed cq-solution-body select-text"
                          dangerouslySetInnerHTML={{ __html: marked.parse(preprocessLessonMarkdown(subQ.ans)) }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
