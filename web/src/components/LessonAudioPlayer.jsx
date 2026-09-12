import React, { useState, useEffect } from 'react'
import { Play, Pause, Square, Sparkles, Smartphone, Volume2, Gauge, AlertCircle, MousePointerClick } from 'lucide-react'
import { ttsService } from '../services/ttsService'

export default function LessonAudioPlayer({ textToRead, title, onActiveChunkChange }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [mode, setMode] = useState('neural') // 'neural' | 'device'
  const [speed, setSpeed] = useState(1.0)
  const [progress, setProgress] = useState({ current: 0, total: 0 })
  const [errorMsg, setErrorMsg] = useState(null)
  const [selectedSnippet, setSelectedSnippet] = useState('')
  const [isSelectionMode, setIsSelectionMode] = useState(false)
  const [isSelectionOnly, setIsSelectionOnly] = useState(false)

  // Listen to document selection changes
  useEffect(() => {
    function handleSelectionChange() {
      const selection = window.getSelection()
      if (selection) {
        const text = selection.toString().trim()
        if (text.length >= 3) {
          setSelectedSnippet(text)
        }
      }
    }

    document.addEventListener('selectionchange', handleSelectionChange)
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange)
    }
  }, [])

  useEffect(() => {
    ttsService.setListeners({
      onPlay: () => {
        setIsPlaying(true)
        setIsPaused(false)
        setErrorMsg(null)
      },
      onPause: () => {
        setIsPaused(true)
      },
      onStop: () => {
        setIsPlaying(false)
        setIsPaused(false)
        setProgress({ current: 0, total: 0 })
        setIsSelectionMode(false)
        setIsSelectionOnly(false)
        if (onActiveChunkChange) onActiveChunkChange(null)
      },
      onProgress: (current, total, currentChunkText) => {
        setProgress({ current, total })
        if (onActiveChunkChange) onActiveChunkChange(currentChunkText)
      },
      onError: (msg) => {
        setErrorMsg(msg)
        setIsPlaying(false)
        setIsPaused(false)
        setIsSelectionOnly(false)
        if (onActiveChunkChange) onActiveChunkChange(null)
      }
    })

    return () => {
      ttsService.stop()
      if (onActiveChunkChange) onActiveChunkChange(null)
    }
  }, [onActiveChunkChange])

  // If chapter/lesson changes, stop previous playback
  useEffect(() => {
    ttsService.stop()
    setSelectedSnippet('')
  }, [textToRead])

  function handleModeChange(newMode) {
    setMode(newMode)
    ttsService.setMode(newMode)
  }

  function handleSpeedChange(newSpeed) {
    setSpeed(newSpeed)
    ttsService.setSpeed(newSpeed)
  }

  function handlePlayAll() {
    setIsSelectionMode(false)
    setIsSelectionOnly(false)
    if (!isPlaying) {
      ttsService.setMode(mode)
      ttsService.setSpeed(speed)
      ttsService.play(textToRead)
    } else if (isPaused) {
      ttsService.resume()
    } else {
      ttsService.pause()
    }
  }

  function handlePlayOnlySelection(snippetOverride) {
    const textToUse = snippetOverride || selectedSnippet || window.getSelection()?.toString().trim()
    if (!textToUse) {
      setErrorMsg('অনুগ্রহ করে নিচের পড়ার অংশ থেকে যেকোনো শব্দ বা বাক্য সিলেক্ট করুন (মাউস দিয়ে ড্র্যাগ করে হাইলাইট করুন)।')
      return
    }

    setErrorMsg(null)
    setIsSelectionOnly(true)
    setIsSelectionMode(false)
    ttsService.setMode(mode)
    ttsService.setSpeed(speed)
    ttsService.playOnlySelection(textToUse)
  }

  function handlePlayFromSelection(snippetOverride) {
    const textToUse = snippetOverride || selectedSnippet || window.getSelection()?.toString().trim()
    if (!textToUse) {
      setErrorMsg('অনুগ্রহ করে নিচের পড়ার অংশ থেকে যেকোনো লাইন বা শব্দ সিলেক্ট (হাইলাইট) করুন।')
      return
    }

    setIsSelectionMode(true)
    setIsSelectionOnly(false)
    ttsService.setMode(mode)
    ttsService.setSpeed(speed)
    ttsService.playFromSelection(textToRead, textToUse)
  }

  function handleStop() {
    ttsService.stop()
  }

  return (
    <div className="sticky top-16 z-40 bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-2xl p-3 md:p-4 shadow-2xl border border-emerald-500/30 mb-4 backdrop-blur-md">
      {/* Top Row: Title & Dual Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-xl transition-all ${isPlaying && !isPaused ? 'bg-emerald-500/20 text-emerald-400 animate-pulse' : 'bg-white/10 text-white/70'}`}>
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm md:text-base tracking-wide text-white">
                {title ? `${title} অডিও রিডার` : 'স্মার্ট পাঠ অডিও রিডার'}
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-medium px-2 py-0.5 rounded-full border border-emerald-500/40">
                100% Free HD
              </span>
            </div>
            <p className="text-xs text-emerald-200/70 mt-0.5">
              {mode === 'neural' 
                ? '🌟 আল্ট্রা-রিয়্যালিস্টিক নিউরাল এআই ভয়েস (স্টুডিও কোয়ালিটি)' 
                : '📱 ডিভাইস সিস্টেম ভয়েস (অফলাইন মোড)'}
            </p>
          </div>
        </div>

        {/* Dual Voice Mode Toggle Buttons */}
        <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => handleModeChange('neural')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              mode === 'neural'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>স্টুডিও নিউরাল এআই</span>
          </button>
          <button
            onClick={() => handleModeChange('device')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              mode === 'device'
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>ডিভাইস ভয়েস</span>
          </button>
        </div>
      </div>

      {/* Playback Controls & Selection Feature */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-3.5">
        {/* Play / Selection / Stop Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Main Play/Pause Button */}
          <button
            onClick={handlePlayAll}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg transition-all active:scale-95 font-semibold text-xs md:text-sm ${
              isPlaying && !isPaused && !isSelectionMode && !isSelectionOnly
                ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/20'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30'
            }`}
          >
            {isPlaying && !isPaused && !isSelectionMode && !isSelectionOnly ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>পজ করুন</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>শুরু থেকে শুনুন</span>
              </>
            )}
          </button>

          {/* Play ONLY Selected Section Button (Stops when finished) */}
          <button
            onClick={() => handlePlayOnlySelection()}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs md:text-sm font-semibold transition-all active:scale-95 ${
              isPlaying && isSelectionOnly
                ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 border-cyan-300 font-bold shadow-md animate-pulse ring-2 ring-cyan-400/50'
                : selectedSnippet
                ? 'bg-teal-500/25 hover:bg-teal-500/35 border-teal-400 text-teal-200 shadow-md ring-1 ring-teal-400/40 animate-pulse'
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/70'
            }`}
            title="মাউস দিয়ে যেটুকু শব্দ বা বাক্য সিলেক্ট করবেন শুধুমাত্র সেটুকুই পড়বে এবং পড়া শেষ হলে সাথে সাথে থেমে যাবে"
          >
            <MousePointerClick className="w-4 h-4 text-cyan-300" />
            <span>
              {selectedSnippet 
                ? 'শুধুমাত্র সিলেক্টেড অংশ শুনুন (পড়া শেষে থামবে)' 
                : 'সিলেক্টেড অংশ শুনুন (Only Selection)'}
            </span>
          </button>

          {/* Stop Button */}
          {isPlaying && (
            <button
              onClick={handleStop}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition-all shadow-sm"
              title="বন্ধ করুন (Stop Audio)"
            >
              <Square className="w-4 h-4 fill-current" />
            </button>
          )}

          {/* Status Indicator */}
          <div className="text-xs text-emerald-200/80 pl-1">
            {isPlaying ? (
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>
                  {isSelectionOnly 
                    ? 'শুধুমাত্র সিলেকশন পড়ছে: ' 
                    : isSelectionMode 
                    ? 'সিলেকশন থেকে পড়ছে: ' 
                    : 'পড়ছে: '}
                  {progress.current} / {progress.total} বাক্য
                  {isSelectionOnly && ' (পড়া শেষে থামবে)'}
                </span>
              </div>
            ) : selectedSnippet ? (
              <span className="text-teal-300 font-medium truncate max-w-[200px] inline-block">
                সিলেক্টেড: "{selectedSnippet.slice(0, 28)}..."
              </span>
            ) : (
              <span className="text-white/50 text-[11px]">
                টিপস: যেকোনো লাইন সিলেক্ট করে শুনুন
              </span>
            )}
          </div>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1.5 bg-black/30 px-2 py-1.5 rounded-xl border border-white/10 text-xs text-white/80">
          <Gauge className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] text-white/50 mr-1">গতি:</span>
          {[0.75, 1.0, 1.25, 1.5].map((s) => (
            <button
              key={s}
              onClick={() => handleSpeedChange(s)}
              className={`px-2 py-0.5 rounded-lg transition-all ${
                speed === s
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'hover:bg-white/10 text-white/70'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Error alert if any */}
      {errorMsg && (
        <div className="mt-3 text-xs bg-rose-500/20 border border-rose-500/40 text-rose-300 p-2.5 rounded-lg flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
          <button onClick={() => setErrorMsg(null)} className="text-white/60 hover:text-white text-sm px-1 font-bold">✕</button>
        </div>
      )}

      {/* Floating Action Pill when text is selected anywhere */}
      {selectedSnippet && !isPlaying && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 border border-emerald-500/50 shadow-2xl rounded-2xl p-3 flex items-center gap-3 backdrop-blur-lg animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="text-xs text-emerald-300 max-w-[180px] sm:max-w-[260px] truncate">
            সিলেক্টেড: <span className="font-semibold text-white">"{selectedSnippet}"</span>
          </div>
          <button
            onClick={() => handlePlayFromSelection()}
            className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg transition active:scale-95 shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>এখান থেকে শুনুন</span>
          </button>
        </div>
      )}
    </div>
  )
}
