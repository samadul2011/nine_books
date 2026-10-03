import React, { useState, useEffect } from 'react'
import { BookOpen, ArrowRight, X, Sparkles, Clock } from 'lucide-react'
import { studyStorageService } from '../services/studyStorageService'

export default function ContinueReadingCard({ currentChapterId, onResume }) {
  const [lastRead, setLastRead] = useState(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    function checkLastRead() {
      const entry = studyStorageService.getLastRead()
      setLastRead(entry)
    }

    checkLastRead()
    return studyStorageService.subscribe(checkLastRead)
  }, [])

  // If dismissed or no lastRead or user is already viewing this exact chapter
  if (dismissed || !lastRead || String(lastRead.chapterId) === String(currentChapterId)) {
    return null
  }

  const formatTimeAgo = (ts) => {
    if (!ts) return ''
    const diff = Math.floor((Date.now() - ts) / 60000)
    if (diff < 2) return 'এইমাত্র'
    if (diff < 60) return `${diff} মিনিট আগে`
    const hours = Math.floor(diff / 60)
    if (hours < 24) return `${hours} ঘণ্টা আগে`
    const days = Math.floor(hours / 24)
    return `${days} দিন আগে`
  }

  return (
    <div className="mb-5 rounded-2xl bg-gradient-to-r from-teal-950/70 via-slate-900/90 to-emerald-950/70 border border-teal-500/40 p-4 sm:p-5 shadow-lg shadow-teal-950/40 relative overflow-hidden animate-in fade-in slide-in-from-top-3 duration-300">
      {/* Decorative gradient orb */}
      <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center flex-shrink-0 text-teal-300 shadow-sm">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-teal-500/20 text-teal-300 border border-teal-500/40 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                পড়া চালিয়ে যান
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {lastRead.subjectNameBn || lastRead.subjectNameEn}
              </span>
              {lastRead.timestamp && (
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  • <Clock className="w-3 h-3 text-slate-500" />
                  {formatTimeAgo(lastRead.timestamp)}
                </span>
              )}
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mt-1 line-clamp-1">
              {lastRead.chapterTitleBn || lastRead.chapterTitleEn}
            </h3>
          </div>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-xl transition flex-shrink-0"
          title="লুকান"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3 relative z-10">
        <p className="text-xs text-slate-400 hidden sm:block">
          গত সেশনে যেখানে পড়া থামিয়েছিলেন, সেখান থেকেই শুরু করুন
        </p>

        <button
          onClick={() => onResume(lastRead)}
          className="ml-auto px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-slate-950 text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-teal-500/20 group"
        >
          <span>পড়া শুরু করুন</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}
