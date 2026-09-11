import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

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

def get_chapter_raw(start_p, end_p):
    parts = []
    for p in range(start_p, end_p + 1):
        txt = pages.get(f'page_{p}', '')
        cln = clean_ocr(txt)
        if cln.strip():
            parts.append(cln.strip())
    return '\n\n'.join(parts)

# Print verification of page counts
print("Chapter 1 pages 6-19 chars:", len(get_chapter_raw(6, 19)))
print("Chapter 2 pages 20-46 chars:", len(get_chapter_raw(20, 46)))
print("Chapter 3 pages 47-56 chars:", len(get_chapter_raw(47, 56)))
print("Chapter 4 pages 57-68 chars:", len(get_chapter_raw(57, 68)))
print("Chapter 5 pages 69-114 chars:", len(get_chapter_raw(69, 114)))
print("Chapter 6 pages 115-139 chars:", len(get_chapter_raw(115, 139)))
