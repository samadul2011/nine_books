import React, { useState, useEffect } from 'react'
import { Bookmark, BookmarkX, X, ExternalLink, Calendar, BookOpen } from 'lucide-react'
import { studyStorageService } from '../services/studyStorageService'

export default function BookmarksDrawer({ isOpen, onClose, onSelectBookmark }) {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    function loadBookmarks() {
      setBookmarks(studyStorageService.getBookmarks())
    }

    loadBookmarks()
    return studyStorageService.subscribe(loadBookmarks)
  }, [])

  if (!isOpen) return null

  function handleRemove(chapterId, e) {
    e.stopPropagation()
    studyStorageService.removeBookmark(chapterId)
  }

  return (
    <div className="fixed inset-0 z-[10000] flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-teal-400/30" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>বুকমার্কস (Bookmarks)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-semibold">
                  {bookmarks.length}
                </span>
              </h2>
              <p className="text-xs text-slate-400">সংরক্ষিত প্রিয় অধ্যায় ও পাঠ্যাংশ</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
            title="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bookmarks List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {bookmarks.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-500 mb-3 shadow-inner">
                <Bookmark className="w-6 h-6 stroke-[1.5]" />
              </div>
              <p className="font-semibold text-slate-300">কোনো বুকমার্ক নেই</p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
                পড়ার সময় উপরে থাকা <span className="text-teal-400 font-semibold">বুকমার্ক বাটনে</span> ক্লিক করলেই সেই অধ্যায়টি এখানে দ্রুত এক্সেসের জন্য সংরক্ষিত হয়ে যাবে।
              </p>
            </div>
          ) : (
            bookmarks.map((bm) => (
              <div
                key={bm.id || bm.chapterId}
                onClick={() => {
                  if (onSelectBookmark) {
                    onSelectBookmark({
                      subjectId: bm.subjectId,
                      chapterId: bm.chapterId,
                      chapterTitle: bm.chapterTitle
                    })
                  }
                  onClose()
                }}
                className="bg-slate-950/60 border border-slate-800/90 rounded-2xl p-4 hover:border-teal-500/50 hover:bg-slate-800/40 transition cursor-pointer relative group shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-teal-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/30 mb-1">
                        {bm.subjectName || 'বিষয়'}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition line-clamp-2 leading-snug">
                        {bm.chapterTitle}
                      </h4>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleRemove(bm.chapterId, e)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition opacity-60 group-hover:opacity-100 flex-shrink-0"
                    title="বুকমার্ক সরান"
                  >
                    <BookmarkX className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-900/80 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {bm.timestamp ? new Date(bm.timestamp).toLocaleDateString('bn-BD', { month: 'short', day: 'numeric' }) : 'সংরক্ষিত'}
                  </span>
                  <span className="text-teal-400 font-semibold group-hover:underline flex items-center gap-1">
                    পড়া শুরু করুন <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
