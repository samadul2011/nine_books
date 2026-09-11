import React, { useState, useRef, useEffect } from 'react'
import { Search, X, Lightbulb, BookOpen, ChevronRight } from 'lucide-react'

// ──────────────────────────────────────────────────────────────
// Stop-word list (English + Bangla common words)
// ──────────────────────────────────────────────────────────────
const STOP_WORDS = new Set([
  'what','why','how','when','where','who','which','is','are','was','were',
  'the','a','an','in','on','at','to','for','of','and','or','it','its',
  'this','that','do','does','did','has','have','had','be','been','being',
  'with','from','by','as','not','but','so','if','can','will','would',
  'should','could','about','than','then','there','here','also','just',
  // Bangla stops
  'কি','কে','কেন','কোন','এর','এটি','হয়','করে','কী','এই','সেই','তার',
  'একটি','একটা','আর','ও','থেকে','জন্য','হলো','ছিল','ছিলো','আছে','আছেন',
])

// ──────────────────────────────────────────────────────────────
// Extract meaningful keywords from a query
// ──────────────────────────────────────────────────────────────
function extractKeywords(query) {
  return query
    .toLowerCase()
    .replace(/[?।!.,]/g, '')
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length >= 3 && !STOP_WORDS.has(w))
}

// ──────────────────────────────────────────────────────────────
// Score a passage against keywords (TF-style scoring)
// ──────────────────────────────────────────────────────────────
function scorePassage(passage, keywords) {
  const lower = passage.toLowerCase()
  let score = 0
  const matched = []

  for (const kw of keywords) {
    // Exact substring match counts more
    const exactRe = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    const exactMatches = (lower.match(exactRe) || []).length
    if (exactMatches > 0) {
      score += exactMatches * 2
      matched.push(kw)
    } else {
      // Partial match (keyword starts with kw or kw inside word)
      const partialRe = new RegExp(kw.slice(0, Math.max(4, kw.length - 1)), 'gi')
      const partialMatches = (lower.match(partialRe) || []).length
      if (partialMatches > 0) {
        score += partialMatches
        matched.push(kw)
      }
    }
  }

  // Bonus: all keywords found = higher confidence
  const coverageBonus = (matched.length / Math.max(keywords.length, 1)) * 3
  score += coverageBonus

  return { score: Math.round(score * 10) / 10, matched }
}

// ──────────────────────────────────────────────────────────────
// Highlight matched keywords in a passage snippet
// ──────────────────────────────────────────────────────────────
function highlightKeywords(text, keywords) {
  if (!keywords || keywords.length === 0) return text
  const escapedKws = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const re = new RegExp(`(${escapedKws.join('|')})`, 'gi')
  const parts = text.split(re)
  return parts.map((part, i) =>
    re.test(part)
      ? <mark key={i} className="bg-teal-400/30 text-teal-200 rounded px-0.5 font-semibold">{part}</mark>
      : part
  )
}

// ──────────────────────────────────────────────────────────────
// Main component
// ──────────────────────────────────────────────────────────────
export default function SmartSearch({ lessonText, chapterTitle, isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setQuery('')
      setResults([])
      setSearched(false)
    }
  }, [isOpen])

  function handleSearch(e) {
    e?.preventDefault()
    if (!query.trim()) return
    setLoading(true)

    setTimeout(() => {
      const keywords = extractKeywords(query)
      if (keywords.length === 0) {
        setResults([])
        setSearched(true)
        setLoading(false)
        return
      }

      // Split lesson text into paragraphs and sentence groups
      const raw = lessonText || ''
      const paragraphs = raw
        .split(/\n+/)
        .map(p => p.trim())
        .filter(p => p.length > 30)

      // Also split long paragraphs into sentence windows (3-sentence sliding window)
      const sentences = raw
        .replace(/([।.!?])\s+/g, '$1\n')
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 20)

      const windows = []
      for (let i = 0; i < sentences.length; i++) {
        const win = sentences.slice(i, i + 3).join(' ')
        if (win.length > 40) windows.push(win)
      }

      const allPassages = [...new Set([...paragraphs, ...windows])]

      const scored = allPassages
        .map(p => ({ text: p, ...scorePassage(p, keywords) }))
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score)

      // Deduplicate: remove results that are substrings of higher-ranked ones
      const deduplicated = []
      for (const r of scored) {
        const isDuplicate = deduplicated.some(
          d => d.text.includes(r.text.slice(0, 40)) || r.text.includes(d.text.slice(0, 40))
        )
        if (!isDuplicate) deduplicated.push(r)
        if (deduplicated.length >= 4) break
      }

      setResults(deduplicated)
      setSearched(true)
      setLoading(false)
    }, 200)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[72px] px-3 pb-28 lg:pb-6" onClick={onClose}>
      <div
        className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-1">
            <Search className="w-4 h-4 text-teal-400 shrink-0" />
            <span className="text-sm font-bold text-white">পাঠ থেকে উত্তর খুঁজুন</span>
            <span className="text-[11px] text-slate-500 ml-1">Search Answer from Lesson</span>
            <button onClick={onClose} className="ml-auto p-1 rounded-lg hover:bg-slate-800 text-slate-400">
              <X className="w-4 h-4" />
            </button>
          </div>
          {chapterTitle && (
            <p className="text-[11px] text-teal-400/70 pl-6">
              📖 {chapterTitle}
            </p>
          )}

          {/* Query Input */}
          <form onSubmit={handleSearch} className="mt-3 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="প্রশ্ন লিখুন… e.g. Why is the rooster called Mr. Moti?"
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30"
            />
            <button
              type="submit"
              disabled={!query.trim() || loading}
              className="flex items-center gap-1.5 bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-xl transition-all active:scale-95 shrink-0"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">খুঁজুন</span>
            </button>
          </form>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-4 space-y-3">
          {loading && (
            <div className="text-center text-slate-400 py-8 text-sm animate-pulse">
              🔍 পাঠ থেকে উত্তর খোঁজা হচ্ছে...
            </div>
          )}

          {!loading && searched && results.length === 0 && (
            <div className="text-center py-10">
              <div className="text-3xl mb-2">😔</div>
              <div className="text-sm font-semibold text-slate-300">কোনো মিল পাওয়া যায়নি</div>
              <div className="text-xs text-slate-500 mt-1">
                অন্য শব্দে বা ইংরেজিতে প্রশ্ন করে দেখুন।
              </div>
            </div>
          )}

          {!loading && results.map((r, i) => (
            <div
              key={i}
              className={`rounded-xl border p-4 ${
                i === 0
                  ? 'bg-teal-950/40 border-teal-500/40 shadow-md'
                  : 'bg-slate-800/60 border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  {i === 0 ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-teal-300 bg-teal-500/20 border border-teal-500/40 px-2 py-0.5 rounded-full">
                      <Lightbulb className="w-3 h-3" /> সেরা মিল
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">#{i + 1} মিল</span>
                  )}
                </div>
                <span className="text-[10px] text-slate-500">
                  স্কোর: {r.score} | মিলেছে: {r.matched.join(', ')}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-200">
                {highlightKeywords(r.text, r.matched)}
              </p>
            </div>
          ))}

          {!loading && !searched && (
            <div className="text-center py-10 text-slate-500">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-slate-700" />
              <div className="text-sm font-medium text-slate-400">
                যেকোনো প্রশ্ন লিখুন, পাঠ থেকে উত্তর খুঁজে দেব!
              </div>
              <div className="text-xs mt-2 space-y-1 text-slate-600">
                <div>✅ সম্পূর্ণ বিনামূল্যে — কোনো AI API নেই</div>
                <div>✅ পাঠের ভেতর থেকেই উত্তর খোঁজে</div>
                <div>✅ বাংলা ও ইংরেজি উভয় ভাষায় কাজ করে</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
