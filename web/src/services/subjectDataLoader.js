/**
 * Dynamic Subject Data Loader for NineBooks
 * Implements lazy loading / code splitting for massive subject datasets.
 * Reduces initial JavaScript bundle from ~5.6MB down to lightweight footprint.
 */

// Lightweight initial metadata for local fallback & offline subjects
export const STATIC_LOCAL_SUBJECTS = [
  {
    id: 'accounting-subject-id',
    name_bn: 'হিসাববিজ্ঞান',
    name_en: 'Accounting',
    icon_url: 'https://img.icons8.com/color/96/calculator.png'
  },
  {
    id: 'ict-subject-id',
    name_bn: 'তথ্য ও যোগাযোগ প্রযুক্তি',
    name_en: 'ICT',
    icon_url: 'https://img.icons8.com/color/96/laptop.png'
  },
  {
    id: 'science-subject-id',
    name_bn: 'সাধারণ বিজ্ঞান',
    name_en: 'General Science',
    icon_url: 'https://img.icons8.com/color/96/microscope.png'
  },
  {
    id: 'business-subject-id',
    name_bn: 'ব্যবসায় উদ্যোগ',
    name_en: 'Business Entrepreneurship',
    icon_url: 'https://img.icons8.com/color/96/briefcase.png'
  },
  {
    id: 'math-preview-subject-id',
    name_bn: 'গণিত',
    name_en: 'Mathematics',
    icon_url: 'https://img.icons8.com/color/96/calculator.png'
  },
  {
    id: 'finance-preview-subject-id',
    name_bn: 'ফিন্যান্স ও ব্যাংকিং',
    name_en: 'Finance and Banking',
    icon_url: 'https://img.icons8.com/color/96/bank-building.png'
  },
  {
    id: 'grammar-subject-id',
    name_bn: 'ইংরেজি ব্যাকরণ',
    name_en: 'English Grammar Master',
    icon_url: 'https://img.icons8.com/color/96/abc.png'
  },
  {
    id: 'composition-subject-id',
    name_bn: 'কম্পোজিশন ও রাইটিং',
    name_en: 'Composition & Writing',
    icon_url: 'https://img.icons8.com/color/96/fountain-pen.png'
  }
]

// In-memory module cache
const moduleCache = {}

export async function loadSubjectData(subjectInput) {
  if (!subjectInput) return null

  let key = ''
  let nameBn = ''
  let nameEn = ''

  if (typeof subjectInput === 'object') {
    key = String(subjectInput.id || '').toLowerCase()
    nameBn = String(subjectInput.name_bn || '')
    nameEn = String(subjectInput.name_en || '').toLowerCase()
  } else {
    key = String(subjectInput).toLowerCase()
  }

  // 1. Check cache first
  if (moduleCache[key]) {
    return moduleCache[key]
  }

  try {
    let loaded = null

    const isAccounting = key === 'c1d2ad1b-e83e-472f-8e1f-d39ec167a316' || key.includes('accounting') || key === 'accounting-subject-id' || nameBn.includes('হিসাববিজ্ঞান') || nameEn.includes('accounting')
    const isIct = key === '9c839f02-8b37-46b3-9e12-76a491ae4708' || key.includes('ict') || key === 'ict-subject-id' || nameBn.includes('তথ্য ও যোগাযোগ প্রযুক্তি') || nameEn.includes('ict')
    const isScience = key.includes('science') || key === 'science-subject-id' || nameBn.includes('বিজ্ঞান') || nameEn.includes('science')
    const isBusiness = key.includes('business') || key.includes('entrepreneurship') || key === 'business-subject-id' || nameBn.includes('ব্যবসায়') || nameEn.includes('business')
    const isMath = key === '4955acfa-1df3-48c1-8bfd-e2542fab2c64' || key.includes('math') || key === 'math-preview-subject-id' || nameBn.includes('গণিত') || nameEn.includes('math')
    const isFinance = key === '0acf2e41-7e84-48ae-a20e-05463c5ea667' || key.includes('finance') || key === 'finance-preview-subject-id' || nameBn.includes('ফিন্যান্স') || nameEn.includes('finance')
    const isGrammar = key.includes('grammar') || key === 'grammar-subject-id' || nameBn.includes('ব্যাকরণ') || nameEn.includes('grammar')
    const isComposition = key.includes('composition') || key.includes('writing') || key === 'composition-subject-id' || nameBn.includes('কম্পোজিশন') || nameEn.includes('composition')

    if (isAccounting) {
      const mod = await import('../data/accountingData')
      loaded = {
        type: 'accounting',
        subject: mod.ACCOUNTING_SUBJECT,
        chapters: mod.ACCOUNTING_CHAPTERS,
        lessonsMap: mod.ACCOUNTING_LESSONS_MAP,
        mcqsMap: mod.ACCOUNTING_MCQS_MAP,
        creativeQuestionsMap: mod.ACCOUNTING_CREATIVE_QUESTIONS_MAP,
        shortQuestionsMap: mod.ACCOUNTING_SHORT_QUESTIONS_MAP,
        workedExamplesMap: mod.ACCOUNTING_WORKED_EXAMPLES_MAP
      }
      moduleCache['accounting'] = loaded
      moduleCache['accounting-subject-id'] = loaded
      moduleCache['c1d2ad1b-e83e-472f-8e1f-d39ec167a316'] = loaded
    } else if (isIct) {
      const mod = await import('../data/ictData')
      loaded = {
        type: 'ict',
        subject: mod.ICT_SUBJECT,
        chapters: mod.ICT_CHAPTERS,
        lessonsMap: mod.ICT_LESSONS_MAP,
        mcqsMap: mod.ICT_MCQS_MAP,
        creativeQuestionsMap: mod.ICT_CREATIVE_QUESTIONS_MAP,
        shortQuestionsMap: mod.ICT_SHORT_QUESTIONS_MAP
      }
      moduleCache['ict'] = loaded
      moduleCache['ict-subject-id'] = loaded
      moduleCache['9c839f02-8b37-46b3-9e12-76a491ae4708'] = loaded
    } else if (isScience) {
      const mod = await import('../data/scienceData')
      loaded = {
        type: 'science',
        subject: mod.SCIENCE_SUBJECT,
        chapters: mod.SCIENCE_CHAPTERS,
        lessonsMap: mod.SCIENCE_LESSONS_MAP,
        mcqsMap: mod.SCIENCE_MCQS_MAP,
        creativeQuestionsMap: mod.SCIENCE_CREATIVE_QUESTIONS_MAP,
        shortQuestionsMap: mod.SCIENCE_SHORT_QUESTIONS_MAP
      }
      moduleCache['science'] = loaded
      moduleCache['science-subject-id'] = loaded
    } else if (isBusiness) {
      const mod = await import('../data/businessData')
      loaded = {
        type: 'business',
        subject: mod.BUSINESS_SUBJECT,
        chapters: mod.BUSINESS_CHAPTERS,
        lessonsMap: mod.BUSINESS_LESSONS_MAP,
        mcqsMap: mod.BUSINESS_MCQS_MAP,
        creativeQuestionsMap: mod.BUSINESS_CREATIVE_QUESTIONS_MAP,
        shortQuestionsMap: mod.BUSINESS_SHORT_QUESTIONS_MAP
      }
      moduleCache['business'] = loaded
      moduleCache['business-subject-id'] = loaded
    } else if (isMath) {
      const mod = await import('../data/mathFallbackData')
      loaded = {
        type: 'math',
        chapters: mod.MATH_FALLBACK_CHAPTERS,
        ch1Lesson: mod.MATH_CH1_FALLBACK_LESSON,
        ch3Lesson: mod.MATH_CH3_FALLBACK_LESSON,
        ch4Lesson: mod.MATH_CH4_FALLBACK_LESSON,
        ch1Mcqs: mod.MATH_CH1_FALLBACK_MCQS
      }
      moduleCache['math'] = loaded
      moduleCache['math-preview-subject-id'] = loaded
      moduleCache['4955acfa-1df3-48c1-8bfd-e2542fab2c64'] = loaded
    } else if (isFinance) {
      const mod = await import('../data/financeBankingData')
      loaded = {
        type: 'finance',
        chapters: mod.FINANCE_FALLBACK_CHAPTERS,
        lessonsMap: mod.FINANCE_LESSONS_MAP,
        mcqsMap: mod.FINANCE_MCQS_MAP
      }
      moduleCache['finance'] = loaded
      moduleCache['finance-preview-subject-id'] = loaded
      moduleCache['0acf2e41-7e84-48ae-a20e-05463c5ea667'] = loaded
    } else if (isGrammar) {
      const mod = await import('../data/grammarData')
      loaded = {
        type: 'grammar',
        subject: mod.GRAMMAR_SUBJECT,
        chapters: mod.GRAMMAR_CHAPTERS,
        lessonsMap: mod.GRAMMAR_LESSONS_MAP,
        mcqsMap: mod.GRAMMAR_MCQS_MAP
      }
      moduleCache['grammar'] = loaded
      moduleCache['grammar-subject-id'] = loaded
    } else if (isComposition) {
      const mod = await import('../data/compositionData')
      loaded = {
        type: 'composition',
        subject: mod.COMPOSITION_SUBJECT,
        categories: mod.COMPOSITION_CATEGORIES,
        topics: mod.COMPOSITION_TOPICS,
        filterCompositionTopics: mod.filterCompositionTopics,
        getCompositionCategoryCount: mod.getCompositionCategoryCount
      }
      moduleCache['composition'] = loaded
      moduleCache['composition-subject-id'] = loaded
    }

    if (loaded && key) {
      moduleCache[key] = loaded
    }
    return loaded
  } catch (err) {
    console.error(`Failed to lazy-load subject data for ${subjectKey}:`, err)
    return null
  }
}
