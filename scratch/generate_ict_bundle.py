import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Load OCR pages
with open(r'scratch\ict_pages\all_pages_ocr.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_ocr(text):
    corrections = [
        (r'প্রোগ্াম', 'প্রোগ্রাম'),
        (r'প্রোথাম', 'প্রোগ্রাম'),
        (r'ফ্ষোর', 'স্কোর'),
        (r'কৃত্রিম\s+garg', 'কৃত্রিম বুদ্ধিমত্তা (AI)'),
        (r'কৃত্তিম', 'কৃত্রিম'),
        (r'GIA', 'জ্ঞান'),
        (r'Srey', 'সেবা'),
        (r'আর্টফোন', 'স্মার্টফোন'),
        (r'আযনিমেটেড', 'অ্যানিমেটেড'),
        (r'আ্যানিমেশন', 'অ্যানিমেশন'),
        (r'আ্যাকসেস', 'অ্যাকসেস'),
        (r'আ্যাকাউন্ট', 'অ্যাকাউন্ট'),
        (r'ত্যাপ্রিকেশন', 'অ্যাপ্লিকেশন'),
        (r'স্াইডারে', 'স্লাইডারে'),
        (r'রূদ্ধ', 'রুদ্ধ'),
        (r'সংযুত্ত', 'সংযুক্ত'),
        (r'চিহৃটি', 'চিহ্নটি'),
        (r'হিসাব হিসাবে', 'হিসাব হিসেবে'),
        (r'স্টিভ\s+জবস\s*\(১৯৫৫-২০১১\)\s*ও\s*তার\s*দুই\s*বন্ধ', 'স্টিভ জবস (Steve Jobs) (১৯৫৫-২০১১) ও তার দুই বন্ধু'),
        (r'GA\s*মে\s*১৪,\s*১৯৮৪', 'মে ১৪, ১৯৮৪'),
        (r'টিম\s*apf\s*fer', 'টিম বার্নার্স-লি')
    ]
    lines = text.split('\n')
    cleaned = []
    for l in lines:
        s = l.strip()
        if re.match(r'^(২০২৬|\d+|[০-৯]+)$', s):
            continue
        if re.match(r'^[০-৯\d]+\s+(তথ্য|কম্পিউটার|ইন্টারনেট|আমার|মাল্টিমিডিয়া|প্রোগ্রামিং)', s):
            continue
        if re.match(r'^(তথ্য|কম্পিউটার|ইন্টারনেট|আমার|মাল্টিমিডিয়া|প্রোগ্রামিং).*?[০-৯\d]+$', s):
            continue
        if len(s) < 3 and not re.search(r'[a-zA-Z\u0980-\u09FF]', s):
            continue
        for p, r in corrections:
            s = re.sub(p, r, s)
        cleaned.append(s)
    return '\n'.join(cleaned)

def get_chapter_text(start_p, end_p):
    parts = []
    for p in range(start_p, end_p + 1):
        txt = pages.get(f'page_{p}', '')
        cln = clean_ocr(txt)
        if cln.strip():
            parts.append(cln.strip())
    return '\n\n'.join(parts)

# Chapters definitions
chapters = [
    {
        "index": 1,
        "title_bn": "১ম অধ্যায়: তথ্য ও যোগাযোগ প্রযুক্তি ও আমাদের বাংলাদেশ",
        "title_en": "ICT and Our Bangladesh",
        "tag": "tag_ict_ch01",
        "start": 6,
        "end": 19,
        "intro": "একুশ শতক এবং তথ্য ও যোগাযোগ প্রযুক্তির বিকাশ, উল্লেখযোগ্য ব্যক্তিত্ব, ই-লার্নিং, ই-গভর্ন্যান্স, ই-সেবা, ই-কমার্স এবং কর্মক্ষেত্রে আইসিটি।",
        "qa": [
            {
                "q": "একুশ শতকে পৃথিবীর সবচেয়ে গুরুত্বপূর্ণ সম্পদ কী এবং কেন?",
                "a": "একুশ শতকের সবচেয়ে গুরুত্বপূর্ণ সম্পদ হলো 'জ্ঞান' এবং সেই জ্ঞানকে ধারণকারী সাধারণ মানুষ। কারণ শুধুমাত্র মানুষই নতুন জ্ঞান অন্বেষণ, ধারণ ও ব্যবহার করে সমস্যা সমাধান করতে এবং নতুন সম্ভাবনা সৃষ্টি করতে পারে।"
            },
            {
                "q": "চার্লস ব্যাবেজ ও অ্যাডা লাভলেসের অবদান কী?",
                "a": "চার্লস ব্যাবেজ আধুনিক কম্পিউটারের জনক, যিনি 'ডিফারেন্স ইঞ্জিন' ও 'অ্যানালিটিক্যাল ইঞ্জিন' পরিকল্পনা করেছিলেন। অন্যদিকে কবি লর্ড বায়রনের কন্যা অ্যাডা লাভলেস চার্লস ব্যাবেজের ইঞ্জিনের জন্য প্রথম প্রোগ্রামিং অ্যালগরিদম রচনা করেন, যার কারণে তাকে ইতিহাসের প্রথম কম্পিউটার প্রোগ্রামার হিসেবে গণ্য করা হয়।"
            },
            {
                "q": "ই-গভর্ন্যান্স ও ই-সেবা বলতে কী বোঝায়?",
                "a": "সরকারি কাজকর্ম, ফাইল ব্যবস্থাপনা ও নীতিমালায় তথ্যপ্রযুক্তির প্রয়োগকে ই-গভর্ন্যান্স বলে। এর মাধ্যমে জনগণ ঘরে বসেই বিভিন্ন সেবা (যেমন: ই-পর্চা, ই-পুর্জি, ডিজিটাল স্বাস্থ্যসেবা, অনলাইনে বিল পরিশোধ ও টিকেট সংগ্রহ) সহজে ও দ্রুত গ্রহণ করতে পারে।"
            }
        ],
        "mcqs": [
            {
                "bn": "একুশ শতকের সবচেয়ে গুরুত্বপূর্ণ সম্পদ কোনটি?",
                "en": "What is the most important resource of the twenty-first century?",
                "options": ["জ্ঞান", "কৃষি জমি", "খনিজ তেল", "শিল্প কারখানা"],
                "ans": 0
            },
            {
                "bn": "আধুনিক কম্পিউটারের জনক কাকে বলা হয়?",
                "en": "Who is considered the father of modern computers?",
                "options": ["চার্লস ব্যাবেজ", "অ্যাডা লাভলেস", "অ্যালান টুরিং", "জন ভন নিউম্যান"],
                "ans": 0
            },
            {
                "bn": "ইতিহাসের প্রথম কম্পিউটার প্রোগ্রামার হিসেবে কে স্বীকৃত?",
                "en": "Who is recognized as the first computer programmer in history?",
                "options": ["অ্যাডা লাভলেস", "চার্লস ব্যাবেজ", "টিম বার্নার্স-লি", "স্টিভ জবস"],
                "ans": 0
            },
            {
                "bn": "বিনা তারে এক স্থান থেকে অন্য স্থানে বার্তা প্রেরণে প্রথম সফল বাঙালি বিজ্ঞানী কে?",
                "en": "Who was the first Bengali scientist to succeed in wireless communication?",
                "options": ["স্যার জগদীশ চন্দ্র বসু", "সত্যেন্দ্রনাথ বসু", "কুদরাত-এ-খুদা", "প্রফুল্ল চন্দ্র রায়"],
                "ans": 0
            },
            {
                "bn": "ই-মেইল (E-mail) ব্যবস্থার প্রবর্তক কে?",
                "en": "Who introduced the E-mail communication system?",
                "options": ["রেমন্ড স্যামুয়েল টমলিনসন", "বিল গেটস", "স্টিভ জবস", "ল্যারি পেজ"],
                "ans": 0
            },
            {
                "bn": "ওয়ার্ল্ড ওয়াইড ওয়েব (WWW)-এর জনক কাকে বলা হয়?",
                "en": "Who is called the father of the World Wide Web (WWW)?",
                "options": ["স্যার টিমোথি জন 'টিম' বার্নার্স-লি", "মার্ক জাকারবার্গ", "স্টিভ ওজনিয়াক", "রবার্ট কান"],
                "ans": 0
            },
            {
                "bn": "ফেসবুক কত সালে প্রতিষ্ঠিত হয়?",
                "en": "In which year was Facebook founded?",
                "options": ["২০০৪ সালে", "১৯৯৮ সালে", "২০০১ সালে", "২০০৭ সালে"],
                "ans": 0
            },
            {
                "bn": "জমির খতিয়ান বা রেকর্ডের অনুলিপি অনলাইনে পাওয়ার সেবাকে কী বলা হয়?",
                "en": "What is the online service for obtaining land record copies called in Bangladesh?",
                "options": ["ই-পর্চা", "ই-পুর্জি", "ই-টোকেন", "ই-নামজারি"],
                "ans": 0
            },
            {
                "bn": "চিনি কলের চাষিদের কাছে মোবাইল ফোনে আখ সরবরাহের ডিজিটাল অনুমতিপত্রকে কী বলে?",
                "en": "What is the SMS-based sugarcane delivery authorization permit called?",
                "options": ["ই-পুর্জি", "ই-পর্চা", "ই-চালান", "ই-ট্যাক্স"],
                "ans": 0
            },
            {
                "bn": "লন্ডন বিজ্ঞান জাদুঘর চার্লস ব্যাবেজের বর্ণনানুযায়ী কত সালে সফলভাবে গণনা ইঞ্জিন তৈরি করে?",
                "en": "In which year did the London Science Museum build a calculating engine based on Babbage's plans?",
                "options": ["১৯৯১ সালে", "১৮৩৩ সালে", "১৮৪২ সালে", "১৯৫৩ সালে"],
                "ans": 0
            }
        ]
    },
    {
        "index": 2,
        "title_bn": "২য় অধ্যায়: কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার নিরাপত্তা",
        "title_en": "Computer Maintenance and Cyber Security",
        "tag": "tag_ict_ch02",
        "start": 20,
        "end": 46,
        "intro": "ডিজিটাল ডিভাইস রক্ষণাবেক্ষণ, সফটওয়্যার ইনস্টল ও আনইনস্টল, ডিস্ক ক্লিনআপ, ভাইরাস ও অ্যান্টিভাইরাস, পাসওয়ার্ড সুরক্ষা, সাইবার অপরাধ এবং কম্পিউটার ট্রাবলশুটিং গাইড।",
        "qa": [
            {
                "q": "সফটওয়্যার ডিলিট (Delete) এবং আনইনস্টল (Uninstall)-এর মধ্যে পার্থক্য কী?",
                "a": "সফটওয়্যারের আইকন বা ফোল্ডার 'Delete' করলে কেবল শর্টকাট বা ফাইলটি মুছে যায় কিন্তু অপারেটিং সিস্টেমের রেজিস্ট্রি ও সিস্টেম ফাইলগুলো অবশিষ্ট থেকে যায়। পক্ষান্তরে 'Uninstall' করলে সফটওয়্যারটির সকল ফাইল, লাইব্রেরি ও সিস্টেম রেজিস্ট্রির এন্ট্রি পুরোপুরি ক্লিন হয়ে অপসারিত হয়।"
            },
            {
                "q": "ডিস্ক ক্লিনআপ (Disk Cleanup) ও ডিস্ক ডিফ্র্যাগমেন্টার (Disk Defragmenter)-এর কাজ কী?",
                "a": "ডিস্ক ক্লিনআপ হার্ডডিস্কের অপ্রয়োজনীয় ক্যাশ, টেম্পোরারি ফাইল ও রিসাইকেল বিনের ফাইল স্ক্যান করে মুছে ফেলে ডিস্কের খালি জায়গা পুনরুদ্ধার করে। আর ডিস্ক ডিফ্র্যাগমেন্টার হার্ডডিস্কের ছড়িয়ে-ছিটিয়ে থাকা ফাইলের খণ্ডগুলোকে সাজিয়ে সুবিন্যস্ত করে, যাতে কম্পিউটার ফাইলগুলো দ্রুত পড়তে পারে ও সামগ্রিক গতি বৃদ্ধি পায়।"
            },
            {
                "q": "শক্তিশালী পাসওয়ার্ড কেন জরুরি এবং এটি কীভাবে তৈরি করতে হয়?",
                "a": "সাইবার আক্রমণ ও হ্যাকিং থেকে ডিজিটাল অ্যাকাউন্ট ও ডেটা নিরাপদ রাখতে শক্তিশালী পাসওয়ার্ড আবশ্যক। একটি শক্তিশালী পাসওয়ার্ড তৈরি করতে ছোট ও বড় হাতের অক্ষর (a-z, A-Z), সংখ্যা (0-9) এবং বিশেষ চিহ্নের (@, #, $, %, !) সংমিশ্রণে কমপক্ষে ৮-১২ অক্ষরের একটি অনন্য সিকোয়েন্স ব্যবহার করতে হয়।"
            }
        ],
        "mcqs": [
            {
                "bn": "উইন্ডোজ অপারেটিং সিস্টেমে কোনো সফটওয়্যার পুরোপুরি কম্পিউটার থেকে অপসারণ করতে কোনটি ব্যবহার করা হয়?",
                "en": "Which feature is used in Windows to completely remove a software from computer?",
                "options": ["Uninstall", "Delete", "Copy", "Rename"],
                "ans": 0
            },
            {
                "bn": "কম্পিউটার হার্ডডিস্কের অপ্রয়োজনীয় ফাইল মুছে জায়গা খালি করার ইউটিলিটি কোনটি?",
                "en": "Which utility frees up hard disk space by removing unnecessary files?",
                "options": ["Disk Cleanup", "Disk Defragmenter", "Task Manager", "Firewall"],
                "ans": 0
            },
            {
                "bn": "ডিস্কের ছড়ানো-ছিটানো ফাইলগুলোকে সারিবদ্ধভাবে সাজিয়ে গতি বাড়ানোর প্রক্রিয়া কোনটি?",
                "en": "Which utility rearranges fragmented files on disk to improve performance?",
                "options": ["Disk Defragmenter", "Disk Cleanup", "Disk Format", "Antivirus Scan"],
                "ans": 0
            },
            {
                "bn": "প্রথম কম্পিউটার ভাইরাস 'Brain' কত সালে আবিষ্কৃত হয়?",
                "en": "In which year was the first computer virus 'Brain' created?",
                "options": ["১৯৮৬ সালে", "১৯৯১ সালে", "১৯৭৫ সালে", "২০০০ সালে"],
                "ans": 0
            },
            {
                "bn": "VIRUS শব্দটির পূর্ণরূপ কী?",
                "en": "What is the full form of VIRUS in computing?",
                "options": ["Vital Information Resources Under Siege", "Very Important Resource Unit System", "Virtual Information Routine Utility Service", "Visual Interactive Resource User Standard"],
                "ans": 0
            },
            {
                "bn": "নিচের কোনটি কম্পিউটার অ্যান্টিভাইরাস সফটওয়্যার নয়?",
                "en": "Which of the following is NOT an antivirus software?",
                "options": ["ট্রোজান হর্স (Trojan Horse)", "ক্যাসপারস্কি (Kaspersky)", "আভাষ্ট (Avast)", "নর্টন (Norton)"],
                "ans": 0
            },
            {
                "bn": "শক্তিশালী পাসওয়ার্ড তৈরির ক্ষেত্রে নিচের কোন নিয়মটি সবচেয়ে কার্যকর?",
                "en": "Which rule is most effective for creating a strong password?",
                "options": ["অক্ষর, সংখ্যা ও বিশেষ চিহ্নের মিশ্রণ", "নিজের নাম বা জন্মতারিখ", "ধারাবাহিক সংখ্যা (123456)", "সহজ মোবাইল নম্বর"],
                "ans": 0
            },
            {
                "bn": "সফটওয়্যার পাইরেসি রোধে এবং নির্মাতাদের মেধাস্বত্ব সুরক্ষায় কোন আইন প্রয়োগ করা হয়?",
                "en": "Which law protects intellectual property and prevents software piracy?",
                "options": ["কপিরাইট আইন (Copyright Law)", "ভোক্তা অধিকার আইন", "ট্রেডমার্ক আইন", "শ্রম আইন"],
                "ans": 0
            },
            {
                "bn": "কম্পিউটারে কোনো হার্ডওয়্যার বা সফটওয়্যার সমস্যার উৎস ও সমাধান নির্ণয়ের প্রক্রিয়াকে কী বলে?",
                "en": "What is the process of diagnosing and resolving computer hardware/software issues called?",
                "options": ["ট্রাবলশুটিং (Troubleshooting)", "প্রোগ্রামিং (Programming)", "ডিবাগিং (Debugging)", "এনক্রিপশন (Encryption)"],
                "ans": 0
            },
            {
                "bn": "কম্পিউটার চালু করার পর মনিটরে কোনো ডিসপ্লে না এলে প্রথমে কী পরীক্ষা করা উচিত?",
                "en": "If there is no display on monitor after turning on computer, what should be checked first?",
                "options": ["র‍্যাম (RAM) স্লট ও ক্যাবল সংযোগ", "সাউন্ড কার্ড", "সিডি রম ড্রাইভ", "মাউস প্যাড"],
                "ans": 0
            }
        ]
    },
    {
        "index": 3,
        "title_bn": "৩য় অধ্যায়: ইন্টারনেট ও ওয়েব পরিচিতি",
        "title_en": "Internet and Web Introduction",
        "tag": "tag_ict_ch03",
        "start": 47,
        "end": 56,
        "intro": "ডিজিটাল কনটেন্টের প্রকারভেদ, ই-বুক ও ই-রিডার, শিক্ষায় ইন্টারনেট ও সার্চ ইঞ্জিন, ওয়েবসাইট, ওয়েব ব্রাউজার, আইপি অ্যাড্রেস ও ইউআরএল (URL)।",
        "qa": [
            {
                "q": "ডিজিটাল কনটেন্ট কী এবং এর প্রধান শ্রেণিগুলো কী কী?",
                "a": "ডিজিটাল মাধ্যমে কোনো তথ্য, জ্ঞান বা উপাত্ত যখন টেক্সট, ছবি, শব্দ বা ভিডিও আকারে উপস্থাপিত ও সংরক্ষিত হয় তখন তাকে ডিজিটাল কনটেন্ট বলে। এর প্রধান চারটি শ্রেণি হলো: (১) টেক্সট বা লিখিত কনটেন্ট, (২) ছবি বা গ্রাফিক্স, (৩) শব্দ বা অডিও, এবং (৪) ভিডিও ও অ্যানিমেশন।"
            },
            {
                "q": "ই-বুকের বিভিন্ন প্রকারভেদ সংক্ষেপে আলোচনা করো।",
                "a": "ই-বুকের প্রধান প্রকারভেদ: (১) মুদ্রিত বইয়ের হুবহু প্রতিলিপি (সাধারণত PDF ফরম্যাট), (২) এইচটিএমএল বা ইপাব (EPUB) ফরম্যাট যা যেকোনো ডিভাইসের স্ক্রিনের সাথে সামঞ্জস্যপূর্ণ হয়, (৩) চৌকস বা ইন্টারেক্টিভ ই-বুক (যাতে টেক্সটের সাথে অডিও, ভিডিও ও কুইজ যুক্ত থাকে), এবং (৪) অ্যাপস আকারে প্রকাশিত ই-বুক।"
            },
            {
                "q": "URL এবং IP Address-এর মধ্যে সম্পর্ক কী?",
                "a": "ইন্টারনেটের প্রতিটি কম্পিউটার বা সার্ভারের একটি নির্দিষ্ট সাংখ্যিক ঠিকানা থাকে যাকে IP Address (যেমন: 192.168.1.1) বলে। মানুষের পক্ষে এই জটিল সংখ্যা মনে রাখা কঠিন বিধায় সহজে মনে রাখার জন্য শব্দভিত্তিক ডোমেন নেইম ও URL (যেমন: http://www.shikkha.com) ব্যবহার করা হয়। DNS সার্ভার এই URL-কে ব্যাকএন্ডে আইপি অ্যাড্রেসে রূপান্তর করে ওয়েবপেজ প্রদর্শন করে।"
            }
        ],
        "mcqs": [
            {
                "bn": "ডিজিটাল মাধ্যমে প্রকাশিত টেক্সট, ছবি, অডিও বা ভিডিওকে কী বলা হয়?",
                "en": "What is text, image, audio, or video published digitally called?",
                "options": ["ডিজিটাল কনটেন্ট", "অ্যানালগ ডেটা", "হার্ডকপি", "সোর্স কোড"],
                "ans": 0
            },
            {
                "bn": "মুদ্রিত বইয়ের ডিজিটাল বা ইলেকট্রনিক সংস্করণকে কী বলা হয়?",
                "en": "What is the electronic version of a printed book called?",
                "options": ["ই-বুক (E-book)", "ই-কমার্স", "ই-মেইল", "ই-পাসপোর্ট"],
                "ans": 0
            },
            {
                "bn": "চৌকস ই-বুক (Smart E-book)-এ নিচের কোন অতিরিক্ত সুবিধাটি পাওয়া যায়?",
                "en": "Which additional feature is found in a smart interactive e-book?",
                "options": ["অডিও, ভিডিও ও অ্যানিমেশন সংযোজন", "কেবল সাদাকালো টেক্সট", "প্রিন্ট করার বাধ্যবাধকতা", "কোনো ছবি দেখা যায় না"],
                "ans": 0
            },
            {
                "bn": "বাংলাদেশের তথ্যপ্রযুক্তিবিদদের উদ্ভাবিত প্রথম বাংলা সার্চ ইঞ্জিনের নাম কী?",
                "en": "What is the name of the first Bengali search engine created by Bangladeshi computer scientists?",
                "options": ["পিপীলিকা", "গুগল", "বিং", "ইয়াহু"],
                "ans": 0
            },
            {
                "bn": "ওয়েবসাইটে প্রবেশের জন্য ব্যবহারকারীর প্রধানতম প্রয়োজনীয় সফটওয়্যার কোনটি?",
                "en": "What is the primary software required for a user to access websites?",
                "options": ["ওয়েব ব্রাউজার (Web Browser)", "ওয়ার্ড প্রসেসর", "ফটোশপ", "অ্যান্টিভাইরাস"],
                "ans": 0
            },
            {
                "bn": "URL শব্দটির পূর্ণরূপ কী?",
                "en": "What does URL stand for?",
                "options": ["Uniform Resource Locator", "Universal Real Locator", "United Resource Link", "Unique Resource Level"],
                "ans": 0
            },
            {
                "bn": "ইন্টারনেটে প্রতিটি সার্ভার বা ডিভাইসের নির্দিষ্ট সংখ্যাসূচক পরিচিতিকে কী বলা হয়?",
                "en": "What is the unique numerical identifier assigned to every device connected to the Internet?",
                "options": ["আইপি অ্যাড্রেস (IP Address)", "ম্যাক অ্যাড্রেস (MAC Address)", "পিন নম্বর (PIN)", "পাসকোড"],
                "ans": 0
            },
            {
                "bn": "আইপি অ্যাড্রেসের পরিবর্তে মানুষের সুবিধার্থে ব্যবহৃত শব্দভিত্তিক ঠিকানাকে কী বলা হয়?",
                "en": "What is the human-readable text address used instead of an IP address called?",
                "options": ["ডোমেন নেইম (Domain Name)", "প্রোটোকল", "ফাইল পাথ", "হাইপারলিঙ্ক"],
                "ans": 0
            },
            {
                "bn": "নিচের কোনটি একটি জনপ্রিয় ইন্টারনেট ওয়েব ব্রাউজার?",
                "en": "Which of the following is a popular web browser?",
                "options": ["গুগল ক্রোম (Google Chrome)", "ভিএলসি প্লেয়ার", "এমএস ওয়ার্ড", "অ্যাডোবি রিডার"],
                "ans": 0
            },
            {
                "bn": "শিক্ষাক্ষেত্রে ইন্টারনেটের কার্যকর ব্যবহারের প্রধান সুবিধা কোনটি?",
                "en": "What is the primary benefit of using the Internet effectively in education?",
                "options": ["যেকোনো স্থান থেকে তথ্য ও শিক্ষা উপকরণ সহজে পাওয়া যায়", "পরীক্ষা দেওয়ার প্রয়োজন হয় না", "বই কেনার সুযোগ বন্ধ হয়", "শিক্ষকদের সাথে যোগাযোগ কমে যায়"],
                "ans": 0
            }
        ]
    },
    {
        "index": 4,
        "title_bn": "৪র্থ অধ্যায়: আমার লেখালেখি ও হিসাব",
        "title_en": "My Writing and Calculation",
        "tag": "tag_ict_ch04",
        "start": 57,
        "end": 68,
        "intro": "ওয়ার্ড প্রসেসিং সফটওয়্যারে লেখালেখি, ফন্ট ও প্যারাগ্রাফ ফরম্যাটিং, বুলেট ও নাম্বার, টেবিল, মার্জিন এবং স্প্রেডশিটে (এক্সেল) যোগ, বিয়োগ, গুণ, ভাগ ও গড়ের সূত্র।",
        "qa": [
            {
                "q": "ওয়ার্ড প্রসেসরে লেখালেখির প্রধান সুবিধাগুলো কী কী?",
                "a": "ওয়ার্ড প্রসেসরে লেখার প্রধান সুবিধা হলো ভুল হলে সহজেই কাটাছেঁড়া ছাড়া সংশোধন করা যায়, লেখার ফন্ট, সাইজ ও রঙ পরিবর্তন করা যায়, স্বয়ংক্রিয় স্পেল চেকার দিয়ে বানান শুদ্ধ করা যায়, টেবিল ও ছবি সংযোজন করা যায় এবং ডকুমেন্টটি নিরাপদে সংরক্ষণ করে যতবার ইচ্ছা প্রিন্ট করা যায়।"
            },
            {
                "q": "স্প্রেডশিটের সেল (Cell), রো (Row) এবং কলাম (Column) বলতে কী বোঝায়?",
                "a": "স্প্রেডশিট বা ওয়ার্কশিটে উল্লম্ব বা খাড়া দাগের অংশগুলোকে 'কলাম' (A, B, C ইত্যাদি অক্ষর দ্বারা চিহ্নিত) এবং অনুভূমিক দাগের অংশগুলোকে 'রো' (1, 2, 3 ইত্যাদি সংখ্যা দ্বারা চিহ্নিত) বলা হয়। একটি রো এবং একটি কলামের পরস্পর ছেদবিন্দুতে তৈরি আয়তাকার ঘরটিকে 'সেল' (যেমন: A1, B5) বলা হয়।"
            },
            {
                "q": "এক্সেলে সূত্র (Formula) ও ফাংশন ব্যবহারের নিয়ম কী?",
                "a": "এক্সেলে যেকোনো সূত্র বা ফাংশন লেখার শুরুতে অবশ্যই সমান চিহ্ন (=) দিতে হয়। যেমন: দুটি সেলের যোগফলের সাধারণ সূত্র হলো =A1+B1 এবং রেঞ্জের যোগফলের ফাংশন হলো =SUM(A1:A10)।"
            }
        ],
        "mcqs": [
            {
                "bn": "কম্পিউটারে পেশাদার লেখালেখি ও ডকুমেন্ট তৈরির জন্য সবচেয়ে উপযুক্ত সফটওয়্যার কোনটি?",
                "en": "Which software is most suitable for professional writing and document creation?",
                "options": ["ওয়ার্ড প্রসেসর (Word Processor)", "স্প্রেডশিট", "গ্রাফিক্স সফটওয়্যার", "মিডিয়া প্লেয়ার"],
                "ans": 0
            },
            {
                "bn": "মাইক্রোসফট ওয়ার্ডে লেখাকে মোটা (Bold) করার কীবোর্ড শর্টকাট কোনটি?",
                "en": "What is the keyboard shortcut to make text Bold in Microsoft Word?",
                "options": ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + K"],
                "ans": 0
            },
            {
                "bn": "ওয়ার্ডে লেখাকে বাঁকা (Italic) করতে কোন কীবোর্ড শর্টকাট ব্যবহার করা হয়?",
                "en": "Which keyboard shortcut is used to make text Italic?",
                "options": ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + E"],
                "ans": 0
            },
            {
                "bn": "ওয়ার্ড ডকুমেন্টে ভুল বানান চিহ্নিত ও সংশোধনের জন্য কোন টুলটি ব্যবহৃত হয়?",
                "en": "Which tool in Word is used to identify and correct spelling errors?",
                "options": ["Spelling & Grammar Checker", "Find and Replace", "Word Count", "Font Color"],
                "ans": 0
            },
            {
                "bn": "ডকুমেন্টের লেখায় পয়েন্ট আকারে তালিকা তৈরির জন্য কোন অপশনটি ব্যবহার করা হয়?",
                "en": "Which option is used to create itemized bulleted lists in a document?",
                "options": ["Bullets and Numbering", "Drop Cap", "Watermark", "Header & Footer"],
                "ans": 0
            },
            {
                "bn": "তৈরিকৃত কোনো ডকুমেন্ট প্রথমবার সংরক্ষণ (Save) করতে কোন কীবোর্ড কমান্ড দেওয়া হয়?",
                "en": "What keyboard shortcut is used to Save a newly created document?",
                "options": ["Ctrl + S", "Ctrl + O", "Ctrl + P", "Ctrl + N"],
                "ans": 0
            },
            {
                "bn": "স্প্রেডশিট সফটওয়্যারের ওয়ার্কশিটে উল্লম্ব বা খাড়া দাগের অংশগুলোকে কী বলা হয়?",
                "en": "What are the vertical columns in a spreadsheet worksheet called?",
                "options": ["কলাম (Column)", "রো (Row)", "সেল (Cell)", "ওয়ার্কবুক"],
                "ans": 0
            },
            {
                "bn": "স্প্রেডশিটে একটি রো এবং একটি কলামের পরস্পর সংযোগস্থলে গঠিত ঘরটিকে কী বলা হয়?",
                "en": "What is the intersection box of a row and a column called in Excel?",
                "options": ["সেল (Cell)", "ব্লক", "পয়েন্টার", "রিবন"],
                "ans": 0
            },
            {
                "bn": "স্প্রেডশিটে কোনো হিসাবের সূত্র বা ফাংশন লেখার শুরুতে কোন চিহ্নটি বাধ্যতামূলক?",
                "en": "Which symbol is mandatory at the beginning of a formula or function in Excel?",
                "options": ["= (সমান চিহ্ন)", "+ (যোগ চিহ্ন)", "* (গুণ চিহ্ন)", ": (কোলন চিহ্ন)"],
                "ans": 0
            },
            {
                "bn": "এক্সেলে A1 সেল থেকে A10 সেল পর্যন্ত সকল সংখ্যার যোগফল নির্ণয়ের সঠিক ফাংশন কোনটি?",
                "en": "What is the correct function in Excel to calculate the sum of cells A1 through A10?",
                "options": ["=SUM(A1:A10)", "=TOTAL(A1:A10)", "=ADD(A1:A10)", "=PLUS(A1:A10)"],
                "ans": 0
            }
        ]
    },
    {
        "index": 5,
        "title_bn": "৫ম অধ্যায়: মাল্টিমিডিয়া ও গ্রাফিক্স",
        "title_en": "Multimedia and Graphics",
        "tag": "tag_ict_ch05",
        "start": 69,
        "end": 114,
        "intro": "মাল্টিমিডিয়ার ধারণা ও উপাদান, প্রেজেন্টেশন সফটওয়্যার (পাওয়ারপয়েন্ট), অ্যাডোবি ফটোশপ (টুলবক্স, রেজোলিউশন, লেয়ার, কালার মোড) এবং অ্যাডোবি ইলাস্ট্রেটর।",
        "qa": [
            {
                "q": "মাল্টিমিডিয়া কী এবং এর প্রধান উপাদানগুলো কী কী?",
                "a": "মানুষের ভাব প্রকাশের জন্য যখন দুই বা ততোধিক মাধ্যম (যেমন: বর্ণ বা টেক্সট, চিত্র বা গ্রাফিক্স এবং শব্দ বা অডিও) সমন্বিতভাবে ব্যবহৃত হয় তখন তাকে মাল্টিমিডিয়া বলে। এর প্রধান উপাদান তিনটি: (১) টেক্সট বা বর্ণ, (২) গ্রাফিক্স বা চিত্র (স্থির ও অ্যানিমেশন), এবং (৩) সাউন্ড বা অডিও।"
            },
            {
                "q": "পাওয়ারপয়েন্টে প্রেজেন্টেশন স্লাইড প্রদর্শনের নিয়ম কী?",
                "a": "পাওয়ারপয়েন্টে প্রতিটি পৃষ্ঠাকে স্লাইড বলা হয়। প্রেজেন্টেশন সম্পূর্ণ স্ক্রিনে স্লাইড শো হিসেবে প্রদর্শনের জন্য কীবোর্ডের F5 বোতাম চাপতে হয়। পরবর্তী স্লাইডে যেতে স্পেসবার বা ডানমুখী তীরচিহ্ন এবং আগের স্লাইডে ফিরতে ব্যাকস্পেস বা বামমুখী তীরচিহ্ন ব্যবহৃত হয়।"
            },
            {
                "q": "ফটোশপে RGB এবং CMYK কালার মোডের পার্থক্য কী?",
                "a": "RGB (Red, Green, Blue) কালার মোড কম্পিউটার স্ক্রিন, টেলিভিশন বা ইন্টারনেটে ডিজিটাল মাধ্যমে প্রদর্শনের জন্য ব্যবহৃত হয়। অন্যদিকে CMYK (Cyan, Magenta, Yellow, blacK) কালার মোড অফসেট প্রেস বা যেকোনো প্রকার কাগজের মুদ্রণ ও প্রকাশনার কাজের জন্য ব্যবহৃত হয়।"
            }
        ],
        "mcqs": [
            {
                "bn": "মানুষের ভাব প্রকাশের একাধিক মাধ্যমের সমন্বিত রূপকে কী বলা হয়?",
                "en": "What is the integrated form of multiple communication media called?",
                "options": ["মাল্টিমিডিয়া (Multimedia)", "মনোমিডিয়া", "ডুয়েলমিডিয়া", "সিঙ্গেলমিডিয়া"],
                "ans": 0
            },
            {
                "bn": "নিচের কোনটি মাল্টিমিডিয়ার প্রধান তিনটি উপাদানের অন্তর্ভুক্ত?",
                "en": "Which of the following is among the three primary elements of multimedia?",
                "options": ["বর্ণ, চিত্র ও শব্দ", "কেবল কিবোর্ড ও মাউস", "কেবল প্রিন্টার ও স্ক্যানার", "কেবল বিদ্যুতের উৎস"],
                "ans": 0
            },
            {
                "bn": "শ্রেণিকক্ষে বা সেমিনারে উপস্থাপনার জন্য সবচেয়ে জনপ্রিয় প্রেজেন্টেশন সফটওয়্যার কোনটি?",
                "en": "Which is the most popular presentation software for lectures and seminars?",
                "options": ["মাইক্রোসফট পাওয়ারপয়েন্ট", "মাইক্রোসফট ওয়ার্ড", "মাইক্রোসফট এক্সেল", "মাইক্রোসফট অ্যাকসেস"],
                "ans": 0
            },
            {
                "bn": "পাওয়ারপয়েন্ট প্রেজেন্টেশনের প্রতিটি একক পৃষ্ঠাকে কী বলা হয়?",
                "en": "What is each single page in a PowerPoint presentation called?",
                "options": ["স্লাইড (Slide)", "শিট", "লেয়ার", "টেম্পলেট"],
                "ans": 0
            },
            {
                "bn": "পাওয়ারপয়েন্টে তৈরি স্লাইড শো শুরু থেকে ফুলস্ক্রিনে চালু করার কীবোর্ড কমান্ড কোনটি?",
                "en": "What is the keyboard shortcut to start a full-screen slideshow in PowerPoint?",
                "options": ["F5", "F1", "F12", "Enter"],
                "ans": 0
            },
            {
                "bn": "ছবি সম্পাদনা ও রাস্টার গ্রাফিক্স ডিজাইনের বিশ্বমানের সফটওয়্যার কোনটি?",
                "en": "Which is the world-standard software for image editing and raster graphics?",
                "options": ["অ্যাডোবি ফটোশপ (Adobe Photoshop)", "নোটপ্যাড", "ভিএলসি প্লেয়ার", "এমএস পেইন্ট"],
                "ans": 0
            },
            {
                "bn": "ফটোশপে একটি ডিজিটাল ছবির পরিমাপের ক্ষুদ্রতম একককে কী বলা হয়?",
                "en": "What is the smallest measurable unit of a digital image in Photoshop?",
                "options": ["পিক্সেল (Pixel)", "ডট (Dot)", "ইঞ্চি (Inch)", "বিট (Bit)"],
                "ans": 0
            },
            {
                "bn": "প্রেস বা কাগজে মুদ্রণ ও প্রকাশনার কাজের জন্য কোন কালার মোড ব্যবহার করা হয়?",
                "en": "Which color mode is used for press printing and physical publication?",
                "options": ["CMYK", "RGB", "Grayscale", "Indexed Color"],
                "ans": 0
            },
            {
                "bn": "কম্পিউটার বা মোবাইলের ডিজিটাল ডিসপ্লেতে ব্যবহারের জন্য কোন কালার মোড উপযুক্ত?",
                "en": "Which color mode is ideal for digital displays and web viewing?",
                "options": ["RGB", "CMYK", "Monochrome", "Duotone"],
                "ans": 0
            },
            {
                "bn": "ফটোশপে কোনো ছবিকে মুক্তহস্তে আঁকাবাঁকাভাবে সিলেক্ট করার টুলের নাম কী?",
                "en": "What is the tool in Photoshop used to make freehand arbitrary selections?",
                "options": ["ল্যাসো টুল (Lasso Tool)", "মার্কি টুল (Marquee Tool)", "মুভ টুল (Move Tool)", "ক্রপ টুল (Crop Tool)"],
                "ans": 0
            }
        ]
    },
    {
        "index": 6,
        "title_bn": "৬ষ্ঠ অধ্যায়: প্রোগ্রামিংয়ের মাধ্যমে সমস্যার সমাধান",
        "title_en": "Problem Solving Through Programming",
        "tag": "tag_ict_ch06",
        "start": 115,
        "end": 139,
        "intro": "প্রোগ্রাম ও অ্যালগরিদম, ফ্লোচার্ট ও জ্যামিতিক প্রতীক, পাইথন (Python) প্রোগ্রামিংয়ের মৌলিক উপাদান (print, input, ভেরিয়েবল, ডেটা টাইপ, if-else শর্ত এবং while লুপ)।",
        "qa": [
            {
                "q": "কম্পিউটার প্রোগ্রাম ও অ্যালগরিদম বলতে কী বোঝায়?",
                "a": "কোনো নির্দিষ্ট সমস্যা সমাধানের জন্য কম্পিউটারের বোধগম্য ভাষায় লিখিত ধারাবাহিক নির্দেশাবলিকে 'প্রোগ্রাম' বলে। আর সেই সমস্যাটি সমাধানের যুক্তিপূর্ণ ধারাবাহিক ধাপগুলোকে মানুষের বোঝার ভাষায় ধারাবাহিকভাবে লিপিবদ্ধ করাকে 'অ্যালগরিদম' বলে।"
            },
            {
                "q": "ফ্লোচার্ট কী এবং এতে কোন কোন মৌলিক প্রতীক ব্যবহৃত হয়?",
                "a": "অ্যালগরিদমের ধাপগুলোকে যখন বিভিন্ন জ্যামিতিক প্রতীকের সাহায্যে চিত্ররূপ দেওয়া হয় তখন তাকে 'ফ্লোচার্ট' বলে। এর মৌলিক প্রতীকগুলো হলো: শুরু ও শেষের জন্য উপবৃত্ত (Oval), ইনপুট ও আউটপুটের জন্য সামান্তরিক (Parallelogram), প্রক্রিয়াকরণের জন্য আয়তক্ষেত্র (Rectangle), এবং শর্ত বা সিদ্ধান্তের জন্য হীরক/রম্বস (Diamond)।"
            },
            {
                "q": "পাইথনে শর্তসাপেক্ষ স্টেটমেন্ট (if-else) এবং লুপের ভূমিকা কী?",
                "a": "পাইথনে কোনো শর্ত সত্য বা মিথ্যা হওয়ার ওপর ভিত্তি করে নির্দিষ্ট কোড সম্পাদনের জন্য 'if-else' স্টেটমেন্ট ব্যবহৃত হয়। আর একই কাজ বারবার স্বয়ংক্রিয়ভাবে সম্পাদনের জন্য 'while' বা 'for' লুপ ব্যবহৃত হয়।"
            }
        ],
        "mcqs": [
            {
                "bn": "কম্পিউটারের সাহায্যে সমস্যা সমাধানের জন্য লিখিত ধারাবাহিক নির্দেশমালাকে কী বলা হয়?",
                "en": "What is a sequence of instructions written for a computer to solve a problem called?",
                "options": ["প্রোগ্রাম (Program)", "হার্ডওয়্যার", "ফাইল সিস্টেম", "অ্যালবাম"],
                "ans": 0
            },
            {
                "bn": "সমস্যা সমাধানের ধারাবাহিক ধাপসমূহকে জ্যামিতিক চিত্রের মাধ্যমে উপস্থাপন করাকে কী বলে?",
                "en": "What is representing the step-by-step logic of an algorithm geometrically called?",
                "options": ["ফ্লোচার্ট (Flowchart)", "সিউডোকোড", "টেবিল", "গ্রাফ"],
                "ans": 0
            },
            {
                "bn": "ফ্লোচার্টে গাণিতিক প্রক্রিয়াকরণ (Processing) বোঝাতে কোন প্রতীক ব্যবহৃত হয়?",
                "en": "Which symbol represents data processing in a flowchart?",
                "options": ["আয়তক্ষেত্র (Rectangle)", "সামান্তরিক", "রম্বস", "উপবৃত্ত"],
                "ans": 0
            },
            {
                "bn": "ফ্লোচার্টে কোনো সিদ্ধান্ত বা শর্ত (Decision Making) নির্দেশ করতে কোন প্রতীক ব্যবহৃত হয়?",
                "en": "Which symbol is used for decision-making in a flowchart?",
                "options": ["রম্বস বা ডায়মন্ড (Diamond)", "বৃত্ত", "আয়তক্ষেত্র", "তীরচিহ্ন"],
                "ans": 0
            },
            {
                "bn": "পাইথন প্রোগ্রামিং ভাষায় কোনো টেক্সট বা ফলাফল স্ক্রিনে প্রদর্শন করতে কোন ফাংশনটি ব্যবহৃত হয়?",
                "en": "Which function in Python is used to output text or results to the screen?",
                "options": ["print()", "input()", "display()", "write()"],
                "ans": 0
            },
            {
                "bn": "পাইথনে ব্যবহারকারীর কাছ থেকে কীবোর্ডের মাধ্যমে ডেটা গ্রহণ করার ফাংশন কোনটি?",
                "en": "Which function in Python takes user input from the keyboard?",
                "options": ["input()", "get()", "read()", "scan()"],
                "ans": 0
            },
            {
                "bn": "পাইথন প্রোগ্রামে কোনো শর্ত যাচাই করার জন্য কোন কীওয়ার্ড ব্যবহৃত হয়?",
                "en": "Which keyword is used for conditional checks in Python?",
                "options": ["if", "loop", "switch", "case"],
                "ans": 0
            },
            {
                "bn": "একই নির্দেশ বা কাজের পুনরাবৃত্তি করার জন্য প্রোগ্রামিংয়ে কী ব্যবহৃত হয়?",
                "en": "What is used in programming to repeat a set of instructions multiple times?",
                "options": ["লুপ (Loop)", "কম্পাইলার", "অ্যারে", "পয়েন্টার"],
                "ans": 0
            },
            {
                "bn": "পাইথনে শর্ত পূরণ থাকা পর্যন্ত স্বয়ংক্রিয়ভাবে পুনরাবৃত্তি হতে থাকা লুপ কোনটি?",
                "en": "Which loop in Python executes repeatedly as long as its condition is true?",
                "options": ["while লুপ", "break স্টেটমেন্ট", "pass স্টেটমেন্ট", "continue স্টেটমেন্ট"],
                "ans": 0
            },
            {
                "bn": "কম্পিউটার প্রোগ্রামের ভুলত্রুটি (Bug) খুঁজে বের করে তা সংশোধন করার প্রক্রিয়াকে কী বলে?",
                "en": "What is the process of finding and resolving bugs in a computer program called?",
                "options": ["ডিবাগিং (Debugging)", "এনকোডিং (Encoding)", "ডিকোডিং (Decoding)", "কম্পাইলিং (Compiling)"],
                "ans": 0
            }
        ]
    }
]

# Generate master SQL
sql_lines = [
    "-- ============================================================",
    "-- NineBooks — Information and Communication Technology (ICT)",
    "-- তথ্য ও যোগাযোগ প্রযুক্তি (নবম-দশম শ্রেণি) COMPLETE BUNDLE",
    "-- Full Textbook Content: All 6 Chapters + Line-by-Line Lessons + Exam MCQs",
    "-- NCTB 2026 Curriculum (Line-by-line chapter-wise extraction)",
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
    raw_text = get_chapter_text(ch['start'], ch['end'])
    
    # Build formatted lesson text
    lesson_md = f"""# {ch['title_bn']}

**তথ্য ও যোগাযোগ প্রযুক্তি • নবম-দশম শ্রেণি (NCTB ২০২৬ শিক্ষাক্রম)**
*{ch['intro']}*

---

## 📖 মূল পাঠ্যবই আলোচনা (Line-by-Line Content)

{raw_text}

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
    "    RAISE NOTICE 'Successfully seeded all 6 chapters, line-by-line lessons, and exam MCQs for ICT!';",
    "END $$;"
])

output_sql = '\n'.join(sql_lines)
target_path = r'C:\Users\samad\OneDrive\Desktop\Android\NineBooks\seed_ict_all_chapters_bundle.sql'
with open(target_path, 'w', encoding='utf-8') as f:
    f.write(output_sql)

print(f"Generated {target_path} successfully!")
print(f"Size: {len(output_sql)} characters ({len(output_sql.splitlines())} lines)")
