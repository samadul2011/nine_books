// Test preprocessing for ICT chapter 1
const testRawText = `
্বালযাদশ STE লা! Es
(টি) ....এ.।০.০..
neers ma টি
8799 =
বালোদেশ ea
Gr ‘Seca RENNES পানা ঢাল
Ce SAO I Once sa he দের nee Tg
#e 7 © w সঃ it o
ence sete gen erie টিন চি ও জ্ঞায় অনা নি [ও সদ ae rey
YY 8 2 =o
we pfs রর এরর জা জর
তথ্য ও যোগাযোগ প্রযুক্তির গুরুত্ব ব্যাখ্যা করতে পারবঃ
তথ্য ও যোগাযোগ প্রযুক্তি সংশ্লিষ্ট ব্যক্তিবর্গের অবদান বর্ণনা করতে পারব;
বাংলাদেশে ই-লার্নিংয়ের গুরুত্ব ব্যাখ্যা করতে পারব;

একুশ শতক এবং তথ্য ও যোগাযোগ প্রযুক্তি
বিগত শতাব্দীতে সম্পদের যে ধারণা ছিল, একুশ শতকে এসে সেটি পুরোপুরি পাল্টে গেছে।

তথ্য ও যোগাযোগ প্রযুক্তির বিকাশে উল্লেখযোগ্য ব্যক্তিত্ব
কম্পিউটার তৈরিতে অনেকের অবদান রয়েছে।

চার্লস ব্যাবেজ
চার্লস ব্যাবেজ (Charles Babbage) (১৭৯১-১৮৭১) আধুনিক কম্পিউটারের জনক।

স্টিভ জবস
স্টিভ জবস (Steve Jobs) (১৯৫৫-২০১১) ও তার দুই বন্ধু স্টিভ ওজনিয়াক...
`;

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
  /RENNES\s*পানা/i
];

const TOPICS = [
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
  { match: /^(?:###\s+)?(?:##\s+)?(?:🔹\s*বিষয়:\s*)?ডিজিটাল\s+বাংলাদেশ\s*$/i, title: 'ডিজিটাল বাংলাদেশ ও স্মার্ট বাংলাদেশ রূপকল্প', badge: '🇧🇩 জাতীয় রূপকল্প' }
];

console.log("Topics defined:", TOPICS.length);

function testClean(raw) {
  let lines = raw.split('\n');
  let result = [];
  let inLearningOutcomes = false;
  let learningOutcomes = [];

  for (let line of lines) {
    let t = line.trim();
    if (!t) continue;

    // Gibberish check
    if (GIBBERISH_PATTERNS.some(pat => pat.test(t))) {
      continue;
    }

    // Learning outcomes check
    if (t.endsWith('পারবঃ') || t.endsWith('পারব;') || t.endsWith('পারব।') || t.endsWith('পারব')) {
      inLearningOutcomes = true;
      learningOutcomes.push(t);
      continue;
    } else if (inLearningOutcomes) {
      // flush learning outcomes
      result.push('<div class="learning-outcomes-card my-6 p-5 rounded-2xl bg-slate-900/90 border border-teal-500/40">\n<div class="text-xs font-bold text-teal-400 uppercase mb-2">🎯 এ অধ্যায় শেষে আমরা যা শিখতে পারব (শিখনফল)</div>\n<ul class="list-disc pl-5 space-y-1 text-slate-200">\n' + 
        learningOutcomes.map(item => `<li>${item.replace(/^[>•\s-]+/, '')}</li>`).join('\n') +
        '\n</ul>\n</div>');
      learningOutcomes = [];
      inLearningOutcomes = false;
    }

    // Check if line matches a topic
    let matchedTopic = TOPICS.find(top => top.match.test(t));
    if (matchedTopic && t.length < 80) {
      result.push(`<div class="topic-header-showcase my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-indigo-950/70 border-l-4 border-cyan-400 border-y border-r border-slate-800/90 shadow-2xl">\n` +
        `  <div class="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-2 flex items-center gap-2">\n` +
        `    <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>\n` +
        `    <span>${matchedTopic.badge}</span>\n` +
        `  </div>\n` +
        `  <h3 class="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-200 m-0 p-0 leading-tight">\n` +
        `    ${matchedTopic.title}\n` +
        `  </h3>\n` +
        `</div>`);
      continue;
    }

    result.push(t);
  }

  if (learningOutcomes.length > 0) {
    result.push('<div class="learning-outcomes-card my-6 p-5 rounded-2xl bg-slate-900/90 border border-teal-500/40">\n<div class="text-xs font-bold text-teal-400 uppercase mb-2">🎯 এ অধ্যায় শেষে আমরা যা শিখতে পারব (শিখনফল)</div>\n<ul class="list-disc pl-5 space-y-1 text-slate-200">\n' + 
      learningOutcomes.map(item => `<li>${item.replace(/^[>•\s-]+/, '')}</li>`).join('\n') +
      '\n</ul>\n</div>');
  }

  return result.join('\n\n');
}

console.log("CLEANED OUTPUT:\n" + testClean(testRawText));

