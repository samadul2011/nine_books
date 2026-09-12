import React, { useState, useEffect } from 'react'
import { 
  Play, 
  Pause, 
  Square, 
  Sparkles, 
  Smartphone, 
  Volume2, 
  Gauge, 
  AlertCircle, 
  MousePointerClick,
  ChevronUp,
  ChevronDown
} from 'lucide-react'
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
  const [isCollapsed, setIsCollapsed] = useState(false)

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
      setErrorMsg('নিচের পড়ার অংশ থেকে যেকোনো শব্দ বা বাক্য সিলেক্ট করুন (ড্র্যাগ করে হাইলাইট করুন)।')
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
      setErrorMsg('নিচের পড়ার অংশ থেকে যেকোনো লাইন বা শব্দ সিলেক্ট করুন।')
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
    <div className={`sticky top-16 z-40 bg-gradient-to-r from-emerald-950/95 via-teal-950/95 to-slate-900/95 text-white rounded-xl shadow-xl border border-emerald-500/30 mb-3 backdrop-blur-md transition-all duration-200 ${
      isCollapsed ? 'py-1.5 px-3' : 'py-2 px-3 sm:px-4'
    }`}>
      {/* Collapsed Micro-Bar View */}
      {isCollapsed ? (
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <button
              onClick={handlePlayAll}
              className={`p-1.5 rounded-lg font-bold text-xs transition active:scale-95 flex items-center justify-center ${
                isPlaying && !isPaused
                  ? 'bg-amber-500 text-black'
                  : 'bg-emerald-500 text-slate-950'
              }`}
              title={isPlaying && !isPaused ? "পজ করুন" : "শুনুন"}
            >
              {isPlaying && !isPaused ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
            </button>

            {isPlaying && (
              <button
                onClick={handleStop}
                className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 transition"
                title="বন্ধ করুন"
              >
                <Square className="w-3 h-3 fill-current" />
              </button>
            )}

            <span className="text-xs font-medium text-emerald-200/90 truncate">
              {isPlaying ? (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>পড়ছে: {progress.current}/{progress.total} বাক্য ({speed}x)</span>
                </span>
              ) : (
                <span>{title ? `${title} অডিও রিডার` : 'অডিও রিডার'} (মিনিমাইজড)</span>
              )}
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Speed indicator */}
            <span className="text-[10px] text-teal-300/80 font-bold bg-black/40 px-1.5 py-0.5 rounded border border-white/10">
              {speed}x
            </span>
            <button
              onClick={() => setIsCollapsed(false)}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-teal-300 transition flex items-center gap-1 text-[11px] font-medium px-2"
              title="অডিও প্লেয়ার বড় করুন"
            >
              <span>বড় করুন</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Expanded Sleek Bar View (Single Compact Bar) */
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            {/* Left Controls: Play, Selection, Stop & Status */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Main Play/Pause Button */}
              <button
                onClick={handlePlayAll}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg shadow-md transition active:scale-95 font-bold text-xs ${
                  isPlaying && !isPaused && !isSelectionMode && !isSelectionOnly
                    ? 'bg-amber-500 hover:bg-amber-400 text-black'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                }`}
              >
                {isPlaying && !isPaused && !isSelectionMode && !isSelectionOnly ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>পজ</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>শুরু থেকে শুনুন</span>
                  </>
                )}
              </button>

              {/* Play Only Selection */}
              <button
                onClick={() => handlePlayOnlySelection()}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition active:scale-95 ${
                  isPlaying && isSelectionOnly
                    ? 'bg-cyan-500 text-slate-950 border-cyan-300 font-bold shadow animate-pulse'
                    : selectedSnippet
                    ? 'bg-teal-500/25 hover:bg-teal-500/35 border-teal-400 text-teal-200'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/75'
                }`}
                title="মাউস দিয়ে যেটুকু শব্দ বা বাক্য সিলেক্ট করবেন শুধুমাত্র সেটুকুই পড়বে এবং সাথে সাথে থামবে"
              >
                <MousePointerClick className="w-3.5 h-3.5 text-cyan-300" />
                <span>{selectedSnippet ? 'সিলেক্টেড অংশ শুনুন (থামবে)' : 'সিলেকশন শুনুন'}</span>
              </button>

              {/* Stop Button */}
              {isPlaying && (
                <button
                  onClick={handleStop}
                  className="p-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition shadow-sm"
                  title="বন্ধ করুন (Stop)"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                </button>
              )}

              {/* Status Display */}
              <div className="text-[11px] text-emerald-200/90 hidden sm:flex items-center gap-1.5 pl-1">
                {isPlaying ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>
                      {isSelectionOnly ? 'সিলেকশন পড়ছে: ' : 'পড়ছে: '}
                      {progress.current} / {progress.total} বাক্য
                    </span>
                  </>
                ) : selectedSnippet ? (
                  <span className="text-teal-300 truncate max-w-[150px] inline-block">
                    "{selectedSnippet.slice(0, 20)}..."
                  </span>
                ) : (
                  <span className="text-white/40 text-[10px]">লাইন সিলেক্ট করে শুনতে পারেন</span>
                )}
              </div>
            </div>

            {/* Right Controls: Mode Toggle, Speed & Minimize */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Voice Mode Toggle */}
              <div className="flex items-center bg-black/40 p-0.5 rounded-lg border border-white/10">
                <button
                  onClick={() => handleModeChange('neural')}
                  className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-semibold transition ${
                    mode === 'neural'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                  title="আল্ট্রা-রিয়্যালিস্টিক নিউরাল এআই ভয়েস"
                >
                  <Sparkles className="w-3 h-3" />
                  <span className="hidden xs:inline">স্টুডিও এআই</span>
                </button>
                <button
                  onClick={() => handleModeChange('device')}
                  className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-semibold transition ${
                    mode === 'device'
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                  title="ডিভাইস সিস্টেম ভয়েস"
                >
                  <Smartphone className="w-3 h-3" />
                  <span className="hidden xs:inline">ডিভাইস</span>
                </button>
              </div>

              {/* Speed Buttons */}
              <div className="flex items-center gap-0.5 bg-black/30 px-1.5 py-1 rounded-lg border border-white/10 text-[11px]">
                <Gauge className="w-3 h-3 text-emerald-400 mr-0.5 hidden xs:block" />
                {[0.75, 1.0, 1.25, 1.5].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSpeedChange(s)}
                    className={`px-1.5 py-0.5 rounded text-[10px] transition ${
                      speed === s
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'hover:bg-white/10 text-white/70'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>

              {/* Minimize Button */}
              <button
                onClick={() => setIsCollapsed(true)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition flex items-center"
                title="প্লেয়ার ছোট করুন (Minimize for reading)"
              >
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error alert if any */}
      {errorMsg && (
        <div className="mt-2 text-xs bg-rose-500/20 border border-rose-500/40 text-rose-300 p-2 rounded-lg flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
          <button onClick={() => setErrorMsg(null)} className="text-white/60 hover:text-white text-xs px-1 font-bold">✕</button>
        </div>
      )}

      {/* Floating Action Pill when text is selected anywhere */}
      {selectedSnippet && !isPlaying && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 border border-emerald-500/50 shadow-2xl rounded-2xl p-2.5 flex items-center gap-2.5 backdrop-blur-lg animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="text-xs text-emerald-300 max-w-[160px] sm:max-w-[240px] truncate">
            সিলেক্টেড: <span className="font-semibold text-white">"{selectedSnippet}"</span>
          </div>
          <button
            onClick={() => handlePlayFromSelection()}
            className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold px-2.5 py-1.5 rounded-xl shadow-lg transition active:scale-95 shrink-0"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>এখান থেকে শুনুন</span>
          </button>
        </div>
      )}
    </div>
  )
}
