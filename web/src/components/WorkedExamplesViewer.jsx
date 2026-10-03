import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  FileSpreadsheet, 
  Sparkles, 
  HelpCircle, 
  Layers,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { marked } from 'marked';

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: true,
});

export default function WorkedExamplesViewer({ 
  examples = [], 
  chapterTitle = '', 
  chapterIndex = 1 
}) {
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const [expandedSolutions, setExpandedSolutions] = useState({});

  if (!examples || examples.length === 0) {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 text-center text-slate-400 my-4 shadow-xl">
        <Calculator className="w-12 h-12 text-teal-400/50 mx-auto mb-3 animate-pulse" />
        <h4 className="text-base font-bold text-white mb-1">কোনো গাণিতিক উদাহরণ পাওয়া যায়নি</h4>
        <p className="text-xs text-slate-400">এই অধ্যায়ের গাণিতিক উদাহরণসমূহ শীঘ্রই সংযুক্ত করা হবে।</p>
      </div>
    );
  }

  const currentExample = examples[selectedExampleIndex] || examples[0];
  const isExpanded = expandedSolutions[currentExample.id] !== false; // default expanded

  const toggleExpand = (id) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [id]: !isExpanded
    }));
  };

  return (
    <div className="space-y-6 w-full max-w-5xl mx-auto my-2">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border border-teal-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" />
                পাঠ্যবইয়ের কাজের সমাধান ও গাণিতিক উদাহরণ
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300">
                NCTB ২০২৬ পাঠ্যবই
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span>{chapterTitle || `অধ্যায় ${chapterIndex}`}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>জাবেদা ছক, খতিয়ান ব্যালেন্সিং, রেওয়ামিল ও আর্থিক বিবরণীর নিখুঁত বোর্ড-মান গাণিতিক সমাধান।</span>
            </p>
          </div>

          <div className="bg-slate-950/80 border border-teal-500/30 rounded-2xl px-4 py-2.5 text-center flex-shrink-0">
            <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block">মোট উদাহরণ</span>
            <span className="text-2xl font-black text-white">{examples.length} <span className="text-xs font-normal text-slate-400">টি</span></span>
          </div>
        </div>

        {/* Multi-Example Selector Tabs (if more than 1 example in chapter) */}
        {examples.length > 1 && (
          <div className="flex items-center gap-2 mt-5 pt-4 border-t border-slate-800/80 overflow-x-auto pb-1">
            {examples.map((ex, idx) => (
              <button
                key={ex.id || idx}
                onClick={() => setSelectedExampleIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
                  selectedExampleIndex === idx
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-black shadow-lg shadow-teal-500/20'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>{ex.title.split(':')[0] || `উদাহরণ ${idx + 1}`}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Example Problem & Working Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
        {/* Example Title Bar */}
        <div className="p-5 sm:p-6 bg-slate-950/90 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                {currentExample.category || 'গাণিতিক সমস্যা'}
              </span>
              {currentExample.source && (
                <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-teal-400" />
                  {currentExample.source}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {currentExample.title}
            </h3>
          </div>

          <button
            onClick={() => toggleExpand(currentExample.id)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-teal-300 text-xs font-bold border border-slate-700 transition"
          >
            <span>{isExpanded ? 'সমাধান সংক্ষেপ করুন' : 'সম্পূর্ণ সমাধান দেখুন'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Problem Stem (উদ্দীপক ও লেনদেনসমূহ) */}
        <div className="p-6 sm:p-8 space-y-5 bg-gradient-to-b from-slate-900/40 to-transparent">
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 sm:p-6">
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>উদ্দীপক ও আর্থিক লেনদেনসমূহ (Problem Scenario)</span>
            </div>
            <div 
              className="text-sm sm:text-base text-slate-200 leading-relaxed prose prose-invert max-w-none prose-p:my-2"
              dangerouslySetInnerHTML={{ __html: marked.parse(currentExample.stem || '') }}
            />
          </div>

          {/* Requirements List (করণীয়) */}
          {currentExample.requirements && currentExample.requirements.length > 0 && (
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 sm:p-5">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>করণীয় কাজ (Requirements)</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-semibold text-emerald-100/90">
                {currentExample.requirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Detailed Mathematical Solution / Accounting Tables */}
        {isExpanded && (
          <div className="border-t border-slate-800 p-6 sm:p-8 bg-slate-950/90 animate-fadeIn">
            <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">ধাপভিত্তিক নিখুঁত সমাধান ও খতিয়ান/জাবেদা ছক</h4>
                  <span className="text-[11px] text-slate-400">প্রমিত হিসাববিজ্ঞান নীতিমালা অনুযায়ী প্রস্তুতকৃত</span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-teal-500/20 text-teal-300 border border-teal-500/30 hidden sm:inline-flex items-center gap-1">
                <Award className="w-3 h-3" />
                ১০০% নির্ভুল ব্যালেন্স
              </span>
            </div>

            {/* Markdown Rendered Table Content */}
            <div 
              className="accounting-math-solution text-slate-200 text-sm sm:text-[15px] leading-relaxed overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: marked.parse(currentExample.solution_markdown || '') }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
