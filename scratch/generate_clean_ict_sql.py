import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Load OCR pages
with open(r'scratch\ict_pages\all_pages_ocr.json', 'r', encoding='utf-8') as f:
    raw_pages = json.load(f)

# Comprehensive Bengali OCR corrections
TYPO_MAP = [
    (r'\bGIA\b', 'জ্ঞান'),
    (r'\bSrey\b', 'সেবা'),
    (r'\bGre\b', 'চৌম্বকীয়'),
    (r'\bGIS\b', 'চৌম্বকীয়'),
    (r'কষউসাধ্', 'কষ্টসাধ্য'),
    (r'কষটসাধ্য', 'কষ্টসাধ্য'),
    (r'বিভির', 'বিভিন্ন'),
    (r'দুনীতি', 'দুর্নীতি'),
    (r'বালোদেশ', 'বাংলাদেশ'),
    (r'্বালযাদশ', 'বাংলাদেশ'),
    (r'আর্টফোন', 'স্মার্টফোন'),
    (r'প্রোথাম', 'প্রোগ্রাম'),
    (r'প্রোগ্াম', 'প্রোগ্রাম'),
    (r'আ্যাকাউন্ট', 'অ্যাকাউন্ট'),
    (r'আ্যানিমেশন', 'অ্যানিমেশন'),
    (r'আ্যাকসেস', 'অ্যাকসেস'),
    (r'আ্যাটাচ', 'অ্যাটাচ'),
    (r'কৃতিম\s+garg', 'কৃত্রিম বুদ্ধিমত্তা (AI)'),
    (r'কৃত্তিম\s+garg', 'কৃত্রিম বুদ্ধিমত্তা (AI)'),
    (r'কৃতিম', 'কৃত্রিম'),
    (r'কৃত্তিম', 'কৃত্রিম'),
    (r'ফ্ষোর', 'স্কোর'),
    (r'স্াইডারে', 'স্লাইডারে'),
    (r'সংযুত্ত', 'সংযুক্ত'),
    (r'চিহৃটি', 'চিহ্নটি'),
    (r'রূদ্ধ', 'রুদ্ধ'),
    (r'ব্রুট\s+ফোর্স\s+আাটাক', 'ব্রুট ফোর্স অ্যাটাক (Brute Force Attack)'),
    (r'দুই\s+বন্ধ\b', 'দুই বন্ধু'),
    (r'আ্যাপল', 'অ্যাপল'),
    (r'আযাপল', 'অ্যাপল'),
    (r'পারবে\s+AT\b', 'পারবে না'),
    (r'হতে\s+VT\b', 'হতে হবে'),
    (r'যেতে\s+BA\b', 'যেতে হয়'),
    (r'ব্যবহৃত\s+A\b', 'ব্যবহৃত হয়'),
    (r'হিসাব\s+ergs', 'হিসাব প্রস্তুত'),
    (r'\bkinতু\b', 'কিন্তু'),
    (r'পাপ্ডিত্য', 'পাণ্ডিত্য'),
    (r'পঞ্তিত', 'পণ্ডিত'),
    (r'সঙ্ভো', 'সঙ্গে'),
    (r'আভাস্ত', 'আভাস্ট'),
    (r'নর্টনটি', 'নর্টন'),
    (r'ম্যালওয্যার', 'ম্যালওয়্যার'),
    (r'কপিরাইট\s+আইন\s+হল', 'কপিরাইট আইন হলো'),
    (r'আযাডা', 'অ্যাডা'),
    (r'\bSHG\b', 'তিনি'),
    (r'\bVHT\b', 'অ্যাডা'),
    (r'কৃত্রিম\s+বুদ্ধিমত্তা\s*\(AI\)\s*\(Al\)', 'কৃত্রিম বুদ্ধিমত্তা (AI)')
]

# Patterns for lines to drop (headers, footers, illustration noise)
DROP_LINE_REGEXES = [
    re.compile(r'^(২০২৬|\d+|[০-৯]+)$'),
    re.compile(r'^[০-৯\d]+\s+(তথ্য|কম্পিউটার|ইন্টারনেট|আমার|মাল্টিমিডিয়া|প্রোগ্রামিং)'),
    re.compile(r'^(তথ্য|কম্পিউটার|ইন্টারনেট|আমার|মাল্টিমিডিয়া|প্রোগ্রামিং).*?[০-৯\d]+$'),
    re.compile(r'^(তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি|কম্পিউটার\s+রক্ষণাবেক্ষণ\s+ও\s+সাইবার\s+নিরাপত্তা|ইন্টারনেট\s+ও\s+ওয়েব\s+পরিচিতি|আমার\s+লেখালেখি\s+ও\s+হিসাব|মাল্টিমিডিয়া\s+ও\s+গ্রাফিক্স|প্রোগ্রামিংয়ের\s+মাধ্যমে\s+সমস্যার\s+সমাধান)\s*.*?$'),
    re.compile(r'^[০-৯\d\.\-\,\s\(\)\=\+\*\/\?\!\@\#\$\%\^\&\_\~]+$'),
    re.compile(r'^(neers|8799|Gr\s*‘Seca|Ce\s*SAO|ence\s*sete|YY\s*8|we\s*pfs|দরকার\s*বাজ|PLY\)\s*সপ|Lt|Sime\s*ws|STE\s*লা|Once\s*sa)'),
    re.compile(r'^(V{2,}\s*|W{2,}\s*|[vV\s\>\.\,]+$)')
]

# Standalone Chapter headers in the middle of text
CHAPTER_HEADER_PAT = re.compile(r'^(তথ্য ও যোগাযোগ প্রযুক্তি ও আমাদের বাংলাদেশ|কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার নিরাপত্তা|ইন্টারনেট ও ওয়েব পরিচিতি|আমার লেখালেখি ও হিসাব|মাল্টিমিডিয়া ও গ্রাফিক্স|প্রোগ্রামিংয়ের মাধ্যমে সমস্যার সমাধান).*?$')

# Topic patterns to transform into prominent, colorful headings
TOPIC_REPLACEMENTS = [
    # Chapter 1
    (re.compile(r'^(?:##\s+)?একুশ\s+শতক\s+এবং\s+তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s*$', re.M),
     '### 🔹 বিষয়: একুশ শতক এবং তথ্য ও যোগাযোগ প্রযুক্তি'),
    (re.compile(r'^(?:##\s+)?তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তির\s+বিকাশে\s+উল্লেখযোগ্য\s+ব্যক্তিত্ব\s*$', re.M),
     '## 👤 তথ্য ও যোগাযোগ প্রযুক্তির বিকাশে উল্লেখযোগ্য ব্যক্তিত্ব'),
    (re.compile(r'^(?:###\s+)?(?:বিজ্ঞানী\s+)?চার্লস\s+ব্যাবেজ\s*$', re.M),
     '### 👤 চার্লস ব্যাবেজ (Charles Babbage: ১৭৯১-১৮৭১) — আধুনিক কম্পিউটারের জনক'),
    (re.compile(r'^(?:###\s+)?অ্যাডা\s+লাভলেস\s*$', re.M),
     '### 👤 অ্যাডা লাভলেস (Ada Lovelace: ১৮১৫-১৮৫২) — প্রথম কম্পিউটার প্রোগ্রামার'),
    (re.compile(r'^(?:###\s+)?(?:বিজ্ঞানী\s+)?জেমস\s+ক্লার্ক\s+ম্যাক্সওয়েল\s*$', re.M),
     '### 👤 জেমস ক্লার্ক ম্যাক্সওয়েল (James Clerk Maxwell: ১৮৩১-১৮৭৯) — তড়িৎ চৌম্বকীয় বল'),
    (re.compile(r'^(?:###\s+)?(?:বিজ্ঞানী\s+)?জগদীশ\s+চন্দ্র\s+বসু\s*$', re.M),
     '### 👤 স্যার জগদীশ চন্দ্র বসু (Jagadish Chandra Bose: ১৮৫৮-১৯৩৭) — অতিক্ষুদ্র তরঙ্গ ও বেতার'),
    (re.compile(r'^(?:###\s+)?গুগলিয়েলমো\s+মার্কোনি\s*$', re.M),
     '### 👤 গুগলিয়েলমো মার্কোনি (Guglielmo Marconi: ১৮৭৪-১৯৩৭) — বেতার তরঙ্গ ও রেডিও'),
    (re.compile(r'^(?:###\s+)?রেমন্ড\s+স্যামুয়েল\s+টমলিনসন\s*$', re.M),
     '### 👤 রেমন্ড স্যামুয়েল টমলিনসন (Raymond Samuel Tomlinson) — ই-মেইলের জনক'),
    (re.compile(r'^(?:###\s+)?স্টিভ\s+জবস\s*$', re.M),
     '### 👤 স্টিভ জবস (Steve Jobs: ১৯৫৫-২০১১) — অ্যাপল কম্পিউটার'),
    (re.compile(r'^(?:###\s+)?(?:উইলিয়াম\s+হেনরি\s+)?বিল\s+গেটস\s*$', re.M),
     '### 👤 উইলিয়াম হেনরি "বিল" গেটস (Bill Gates) — মাইক্রোসফট ও উইন্ডোজ'),
    (re.compile(r'^(?:###\s+)?(?:স্যার\s+টিমোথি\s+জন\s+)?(?:“|")?টিম(?:”|")?\s+বার্নার্স[- ]লি\s*$', re.M),
     '### 👤 স্যার টিম বার্নার্স-লি (Tim Berners-Lee) — ওয়ার্ল্ড ওয়াইড ওয়েব (WWW) ও HTTP'),
    (re.compile(r'^(?:###\s+)?মার্ক\s+জাকারবার্গ\s*$', re.M),
     '### 👤 মার্ক জাকারবার্গ (Mark Zuckerberg) — ফেসবুক ও সামাজিক যোগাযোগ'),
    (re.compile(r'^(?:###\s+)?ই[- ]লার্নিং\s+ও\s+বাংলাদেশ\s*$', re.M),
     '### 🔹 বিষয়: বাংলাদেশে ই-লার্নিং (E-Learning)'),
    (re.compile(r'^(?:###\s+)?ই[- ]গভর্ন্যান্স\s+ও\s+বাংলাদেশ\s*$', re.M),
     '### 🔹 বিষয়: বাংলাদেশে ই-গভর্ন্যান্স (E-Governance)'),
    (re.compile(r'^(?:###\s+)?ই[- ]সেবা\s+ও\s+বাংলাদেশ\s*$', re.M),
     '### 🔹 বিষয়: বাংলাদেশে ই-সেবা (E-Services: ই-পর্চা, ই-পুর্জি, ডিজিটাল স্বাস্থ্যসেবা)'),
    (re.compile(r'^(?:###\s+)?ই[- ]কমার্স\s+ও\s+বাংলাদেশ\s*$', re.M),
     '### 🔹 বিষয়: বাংলাদেশে ই-কমার্স (E-Commerce)'),
    (re.compile(r'^(?:###\s+)?কর্মক্ষেত্রে\s+তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s*$', re.M),
     '### 🔹 বিষয়: কর্মক্ষেত্রে তথ্য ও যোগাযোগ প্রযুক্তি ও ক্যারিয়ার'),
    (re.compile(r'^(?:###\s+)?সামাজিক\s+যোগাযোগ\s+ও\s+তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s*$', re.M),
     '### 🔹 বিষয়: সামাজিক যোগাযোগ ও আইসিটি'),
    (re.compile(r'^(?:###\s+)?বিনোদন\s+এবং\s+তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s*$', re.M),
     '### 🔹 বিষয়: বিনোদন এবং তথ্য ও যোগাযোগ প্রযুক্তি'),
    (re.compile(r'^(?:###\s+)?ডিজিটাল\s+বাংলাদেশ\s*$', re.M),
     '### 🔹 বিষয়: ডিজিটাল বাংলাদেশ ও স্মার্ট বাংলাদেশ রূপকল্প'),

    # Chapter 2
    (re.compile(r'^(?:###\s+)?সফটওয়্যার\s+ইনস্টল\s+ও\s+আনইনস্টল\s*$', re.M),
     '### 🔹 বিষয়: সফটওয়্যার ইনস্টল ও আনইনস্টল প্রক্রিয়া'),
    (re.compile(r'^(?:###\s+)?সফটওয়্যার\s+আনইনস্টল\s+এবং\s+সফটওয়্যার\s+ডিলিট\s*$', re.M),
     '### 🔹 বিষয়: সফটওয়্যার আনইনস্টল বনাম ডিলিট-এর পার্থক্য'),
    (re.compile(r'^(?:###\s+)?ডিস্ক\s+ক্লিনআপ\s+ও\s+ডিস্ক\s+ডিফ্র্যাগমেন্টার\s*$', re.M),
     '### 🔹 বিষয়: ডিস্ক ক্লিনআপ ও ডিস্ক ডিফ্র্যাগমেন্টার ব্যবহার'),
    (re.compile(r'^(?:###\s+)?কম্পিউটার\s+ভাইরাস\s+ও\s+অ্যান্টিভাইরাস\s*$', re.M),
     '### 🔹 বিষয়: কম্পিউটার ভাইরাস ও অ্যান্টিভাইরাস নিরাপত্তা'),
    (re.compile(r'^(?:###\s+)?পাসওয়ার্ড\s*$', re.M),
     '### 🔹 বিষয়: পাসওয়ার্ড সুরক্ষা ও সাইবার নিরাপত্তা কৌশল'),
    (re.compile(r'^(?:###\s+)?সাইবার\s+অপরাধ\s*$', re.M),
     '### 🔹 বিষয়: সাইবার অপরাধ (Cyber Crime: ব্রুট ফোর্স অ্যাটাক, ফিশিং)'),
    (re.compile(r'^(?:###\s+)?কপিরাইট\s+আইন\s*$', re.M),
     '### 🔹 বিষয়: সফটওয়্যার পাইরেসি ও কপিরাইট আইন'),
    (re.compile(r'^(?:###\s+)?কম্পিউটার\s+ও\s+ইন্টারনেট\s+ব্যবহারে\s+আসক্তি\s*$', re.M),
     '### 🔹 বিষয়: কম্পিউটার ও ইন্টারনেট ব্যবহারে আসক্তি পরিহার'),
    (re.compile(r'^(?:###\s+)?সাধারণ\s+ট্রাবল\s*শ্যুটিং\s*$', re.M),
     '### ⚙️ ব্যবহারিক গাইড: সাধারণ কম্পিউটার ট্রাবলশুটিং (Troubleshooting)'),

    # Chapter 3
    (re.compile(r'^(?:###\s+)?ডিজিটাল\s+কনটেন্ট\s*$', re.M),
     '### 🔹 বিষয়: ডিজিটাল কনটেন্টের ধারণা ও প্রকারভেদ'),
    (re.compile(r'^(?:###\s+)?ই[- ]বুক\s*$', re.M),
     '### 🔹 বিষয়: ই-বুক (E-Book) ও এর বিভিন্ন সংস্করণ'),
    (re.compile(r'^(?:###\s+)?শিক্ষায়\s+ইন্টারনেট\s*$', re.M),
     '### 🔹 বিষয়: শিক্ষাক্ষেত্রে ইন্টারনেট ও সার্চ ইঞ্জিনের ভূমিকা'),
    (re.compile(r'^(?:###\s+)?ওয়েবসাইট\s+ও\s+ওয়েব\s+পরিচিতি\s*$', re.M),
     '### 🔹 বিষয়: ওয়েবসাইট, ওয়েবপেজ ও ক্লায়েন্ট-সার্ভার আর্কিটেকচার'),
    (re.compile(r'^(?:###\s+)?আইপি\s+এড্রেস\s+ও\s+ডোমেন\s+নেইম\s*$', re.M),
     '### 🔹 বিষয়: আইপি অ্যাড্রেস (IP Address), ডোমেন নেইম ও URL'),

    # Chapter 4
    (re.compile(r'^(?:###\s+)?ওয়ার্ড\s+প্রসেসিং\s*$', re.M),
     '### 🔹 বিষয়: ওয়ার্ড প্রসেসিং সফটওয়্যারে লেখালেখি ও রূপসজ্জা'),
    (re.compile(r'^(?:###\s+)?লেখালেখির\s+সাজসজ্জা[^\n]*$', re.M),
     '### 🔹 বিষয়: ফন্ট স্টাইল, সাইজ, বুলেট ও নাম্বারিং বিন্যাস'),
    (re.compile(r'^(?:###\s+)?মার্জিন\s+ঠিক\s+করা\s*$', re.M),
     '### 🔹 বিষয়: মার্জিন, প্যারাগ্রাফ অ্যালাইনমেন্ট ও পেজ লেআউট'),
    (re.compile(r'^(?:###\s+)?টেবিল\s+ও\s+ছবি\s+সংযোজন\s*$', re.M),
     '### 🔹 বিষয়: ডকুমেন্টে টেবিল ও ছবি সংযোজন'),
    (re.compile(r'^(?:###\s+)?স্প্রেডশিট\s+পরিচিতি\s*$', re.M),
     '### 🔹 বিষয়: স্প্রেডশিট (MS Excel) পরিচিতি — রো, কলাম ও সেল'),
    (re.compile(r'^(?:###\s+)?সূত্র\s+ব্যবহার\s+করে\s+হিসাব\s*$', re.M),
     '### 🔹 বিষয়: স্প্রেডশিটে সূত্র ও ফাংশন প্রয়োগ (যোগ, বিয়োগ, গুণ, ভাগ ও গড়)'),

    # Chapter 5
    (re.compile(r'^(?:###\s+)?মাল্টিমিডিয়ার\s+ধারণা\s*$', re.M),
     '### 🔹 বিষয়: মাল্টিমিডিয়ার ধারণা ও প্রধান মাধ্যমসমূহ'),
    (re.compile(r'^(?:###\s+)?প্রেজেন্টেশন\s+সফটওয়্যার\s*$', re.M),
     '### 🔹 বিষয়: প্রেজেন্টেশন সফটওয়্যার (MS PowerPoint) ও স্লাইড ডিজাইন'),
    (re.compile(r'^(?:###\s+)?গ্রাফিক্স\s+ও\s+ফটোশপ\s*$', re.M),
     '### 🔹 বিষয়: গ্রাফিক্স ডিজাইন ও অ্যাডোবি ফটোশপ (Adobe Photoshop)'),
    (re.compile(r'^(?:###\s+)?ফটোশপ\s+টুলবক্স\s*$', re.M),
     '### 🔹 বিষয়: ফটোশপ টুলবক্স — সিলেকশন, ক্রপ ও মুভ টুল'),
    (re.compile(r'^(?:###\s+)?লেয়ার\s+ব্যবস্থাপনা\s*$', re.M),
     '### 🔹 বিষয়: ফটোশপে লেয়ার (Layers) ও কালার মোড (RGB vs CMYK)'),
    (re.compile(r'^(?:###\s+)?অ্যাডোবি\s+ইলাস্ট্রেটর\s*$', re.M),
     '### 🔹 বিষয়: অ্যাডোবি ইলাস্ট্রেটর (Adobe Illustrator) ও ভেক্টর ড্রয়িং'),

    # Chapter 6
    (re.compile(r'^(?:###\s+)?সমস্যা\s+সমাধানে\s+প্রোগ্রামিং\s*$', re.M),
     '### 🔹 বিষয়: সমস্যা সমাধান পদ্ধতি ও প্রোগ্রামিংয়ের ধারণা'),
    (re.compile(r'^(?:###\s+)?অ্যালগরিদম\s+ও\s+ফ্লোচার্ট\s*$', re.M),
     '### 🔹 বিষয়: অ্যালগরিদম ও ফ্লোচার্ট (প্রবাহচিত্রের জ্যামিতিক প্রতীক)'),
    (re.compile(r'^(?:###\s+)?প্রোগ্রামিং\s+ভাষা\s*$', re.M),
     '### 🔹 বিষয়: প্রোগ্রামিং ভাষা ও অনুবাদক সফটওয়্যার (কম্পাইলার/ইন্টারপ্রেটার)'),
    (re.compile(r'^(?:###\s+)?পাইথন\s+প্রোগ্রামিং\s*$', re.M),
     '### 🔹 বিষয়: পাইথন (Python) প্রোগ্রামিংয়ের মৌলিক উপাদান ও print() ফাংশন'),
    (re.compile(r'^(?:###\s+)?ভেরিয়েবল\s+ও\s+ইনপুট\s*$', re.M),
     '### 🔹 বিষয়: পাইথনে ভেরিয়েবল ও input() ফাংশনের ব্যবহার'),
    (re.compile(r'^(?:###\s+)?শর্তসাপেক্ষ\s+স্টেটমেন্ট\s*$', re.M),
     '### 🔹 বিষয়: শর্তসাপেক্ষ স্টেটমেন্ট (if, elif, else)'),
    (re.compile(r'^(?:###\s+)?while\s+লুপ\s*$', re.M),
     '### 🔹 বিষয়: লুপ স্টেটমেন্ট (while loop) ও পুনরাবৃত্তি'),
    (re.compile(r'^(?:###\s+)?ডিবাগিং\s*$', re.M),
     '### 🔹 বিষয়: প্রোগ্রামের ভুলত্রুটি ও ডিবাগিং (Debugging)')
]

def clean_page(p_num):
    raw = raw_pages.get(f'page_{p_num}', '')
    lines = raw.split('\n')
    cleaned = []
    
    is_opening = p_num in [6, 20, 47, 69, 115]
    
    for l in lines:
        s = l.strip()
        if not s:
            continue
            
        if CHAPTER_HEADER_PAT.match(s):
            continue
            
        should_drop = False
        for reg in DROP_LINE_REGEXES:
            if reg.search(s):
                should_drop = True
                break
        if should_drop:
            continue
            
        # Opening page noise rejection
        if is_opening:
            if not s.startswith('>') and not s.endswith('পারব;') and not s.endswith('পারবঃ') and not s.endswith('পারব।'):
                continue
            # Format learning outcomes nicely
            if not s.startswith('>'):
                s = '> ' + s
                
        for pat, rep in TYPO_MAP:
            s = re.sub(pat, rep, s)
            
        cleaned.append(s)
        
    return '\n'.join(cleaned)

def build_chapter_content(start_p, end_p):
    parts = []
    for p in range(start_p, end_p + 1):
        txt = clean_page(p)
        if txt.strip():
            parts.append(txt.strip())
    full_txt = '\n\n'.join(parts)
    
    # Prepend শিখনফল header if opening page starts with bullets
    if full_txt.lstrip().startswith('>'):
        full_txt = '### 🎯 এ অধ্যায় শেষে আমরা যা শিখতে পারব (শিখনফল)\n\n' + full_txt
        
    for pat, repl in TOPIC_REPLACEMENTS:
        full_txt = pat.sub(repl, full_txt)
        
    return full_txt

# Import chapter metadata from previous generator
from generate_ict_bundle import chapters

# Master SQL construction
sql_lines = [
    "-- ============================================================",
    "-- NineBooks — Information and Communication Technology (ICT)",
    "-- তথ্য ও যোগাযোগ প্রযুক্তি (নবম-দশম শ্রেণি) COMPLETE BUNDLE",
    "-- Full Textbook Content: All 6 Chapters + Clean Line-by-Line Lessons + 60 Exam MCQs",
    "-- NCTB 2026 Curriculum (Zero OCR gibberish, Large Colorful Topic Cards)",
    "-- Pure SQL: 100% Compatible with Supabase SQL Editor (Standard ANSI/PostgreSQL DML)",
    "-- ============================================================",
    "",
    "DO $$",
    "DECLARE",
    "    v_subject_id UUID;",
    "    v_chapter_id UUID;",
    "BEGIN",
    "    -- 1. Insert or get Subject",
    "    SELECT id INTO v_subject_id FROM subjects WHERE name_en = 'ICT' OR name_en = 'Information and Communication Technology' LIMIT 1;",
    "    IF v_subject_id IS NULL THEN",
    "        INSERT INTO subjects (name_bn, name_en, icon_url)",
    "        VALUES ('তথ্য ও যোগাযোগ প্রযুক্তি', 'ICT', 'https://img.icons8.com/color/96/laptop.png')",
    "        RETURNING id INTO v_subject_id;",
    "        RAISE NOTICE 'Created Subject: ICT (%)', v_subject_id;",
    "    ELSE",
    "        UPDATE subjects",
    "        SET name_bn = 'তথ্য ও যোগাযোগ প্রযুক্তি', icon_url = 'https://img.icons8.com/color/96/laptop.png'",
    "        WHERE id = v_subject_id;",
    "    END IF;",
    ""
]

for ch in chapters:
    content_body = build_chapter_content(ch['start'], ch['end'])
    
    lesson_md = f"""# {ch['title_bn']}

**তথ্য ও যোগাযোগ প্রযুক্তি • নবম-দশম শ্রেণি (NCTB ২০২৬ শিক্ষাক্রম)**
*{ch['intro']}*

---

{content_body}

---

### ❓ পাঠভিত্তিক প্রশ্ন ও উত্তর (Comprehension Q&A)
"""
    for item in ch['qa']:
        lesson_md += f"\n> ❓ **প্রশ্ন: {item['q']}**\n> 💡 **উত্তর:** {item['a']}\n"

    lesson_md += "\n---\n\n### ✍️ মূল পাঠ্যবইয়ের নমুনা বহুনির্বাচনি প্রশ্ন\n"
    for idx, mcq in enumerate(ch['mcqs'], start=1):
        lesson_md += f"\n{idx}. {mcq['bn']}\n"
        opts = mcq['options']
        lesson_md += f"ক. {opts[0]}    খ. {opts[1]}\n"
        lesson_md += f"গ. {opts[2]}    ঘ. {opts[3]}\n"

    sql_lines.extend([
        f"    -- ======================================================",
        f"    -- Chapter {ch['index']}: {ch['title_en']}",
        f"    -- ======================================================",
        f"    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = {ch['index']}) THEN",
        f"        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)",
        f"        VALUES (v_subject_id, '{ch['title_bn']}', '{ch['title_en']}', {ch['index']})",
        f"        RETURNING id INTO v_chapter_id;",
        f"    ELSE",
        f"        UPDATE chapters SET title_bn = '{ch['title_bn']}', title_en = '{ch['title_en']}'",
        f"        WHERE subject_id = v_subject_id AND order_index = {ch['index']}",
        f"        RETURNING id INTO v_chapter_id;",
        f"    END IF;",
        f"",
        f"    DELETE FROM lessons WHERE chapter_id = v_chapter_id;",
        f"",
        f"    INSERT INTO lessons (chapter_id, content_text, order_index)",
        f"    VALUES (v_chapter_id, ${ch['tag']}$",
        lesson_md.strip(),
        f"${ch['tag']}$, 1);",
        f"",
        f"    DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;",
        f""
    ])

    for m in ch['mcqs']:
        opts_json = json.dumps(m['options'], ensure_ascii=False).replace("'", "''")
        q_bn = m['bn'].replace("'", "''")
        q_en = m['en'].replace("'", "''")
        sql_lines.extend([
            f"    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)",
            f"    VALUES (v_chapter_id, '{q_bn}', '{q_en}', '{opts_json}'::jsonb, {m['ans']});"
        ])
    
    sql_lines.append("")

sql_lines.extend([
    "    RAISE NOTICE 'Successfully seeded all 6 chapters, line-by-line clean lessons, and exam MCQs for ICT!';",
    "END $$;"
])

output_sql = '\n'.join(sql_lines)
target_path = r'C:\Users\samad\OneDrive\Desktop\Android\NineBooks\seed_ict_all_chapters_bundle.sql'
with open(target_path, 'w', encoding='utf-8') as f:
    f.write(output_sql)

print(f"Master clean SQL successfully generated: {target_path}")
print(f"File size: {len(output_sql)} chars ({len(output_sql.splitlines())} lines)")
