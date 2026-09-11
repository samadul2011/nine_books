import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'scratch\ict_pages\all_pages_ocr.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_page_text(txt):
    lines = txt.split('\n')
    cleaned = []
    for line in lines:
        l = line.strip()
        # Remove page header / footer noise like "২০২৬", standalone page numbers, repetitive book headers
        if re.match(r'^(২০২৬|\d+|[০-৯]+)$', l):
            continue
        if re.match(r'^[০-৯\d]+\s+তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি', l):
            continue
        if re.match(r'^তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s+[০-৯\d]+', l):
            continue
        if re.match(r'^তথ্য\s+ও\s+যোগাযোগ\s+প্রযুক্তি\s+ও\s+আমাদের\s+বাংলাদেশ\s+[০-৯\d]+', l):
            continue
        if re.match(r'^কম্পিউটার\s+রক্ষণাবেক্ষণ\s+ও\s+সাইবার\s+নিরাপত্তা\s+[০-৯\d]+', l):
            continue
        if re.match(r'^ইন্টারনেট\s+ও\s+ওয়েব\s+পরিচিতি\s+[০-৯\d]+', l):
            continue
        if re.match(r'^আমার\s+লেখালেখি\s+ও\s+হিসাব\s+[০-৯\d]+', l):
            continue
        if re.match(r'^মাল্টিমিডিয়া\s+ও\s+গ্রাফিক্স\s+[০-৯\d]+', l):
            continue
        if re.match(r'^প্রোগ্রামিংয়ের\s+মাধ্যমে\s+সমস্যার\s+সমাধান\s+[০-৯\d]+', l):
            continue
        # Filter very garbled OCR lines (less than 3 chars and no letters)
        if len(l) < 3 and not re.search(r'[a-zA-Z\u0980-\u09FF]', l):
            continue
        cleaned.append(l)
    return '\n'.join(cleaned)

chapters_def = [
    {
        "index": 1,
        "title_bn": "১ম অধ্যায়: তথ্য ও যোগাযোগ প্রযুক্তি ও আমাদের বাংলাদেশ",
        "title_en": "ICT and Our Bangladesh",
        "start": 6,
        "end": 19
    },
    {
        "index": 2,
        "title_bn": "২য় অধ্যায়: কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার নিরাপত্তা",
        "title_en": "Computer Maintenance and Cyber Security",
        "start": 20,
        "end": 46
    },
    {
        "index": 3,
        "title_bn": "৩য় অধ্যায়: ইন্টারনেট ও ওয়েব পরিচিতি",
        "title_en": "Internet and Web Introduction",
        "start": 47,
        "end": 56
    },
    {
        "index": 4,
        "title_bn": "৪র্থ অধ্যায়: আমার লেখালেখি ও হিসাব",
        "title_en": "My Writing and Calculation",
        "start": 57,
        "end": 68
    },
    {
        "index": 5,
        "title_bn": "৫ম অধ্যায়: মাল্টিমিডিয়া ও গ্রাফিক্স",
        "title_en": "Multimedia and Graphics",
        "start": 69,
        "end": 114
    },
    {
        "index": 6,
        "title_bn": "৬ষ্ঠ অধ্যায়: প্রোগ্রামিংয়ের মাধ্যমে সমস্যার সমাধান",
        "title_en": "Problem Solving Through Programming",
        "start": 115,
        "end": 139
    }
]

for ch in chapters_def:
    ch_text_parts = []
    for p in range(ch['start'], ch['end'] + 1):
        raw = pages.get(f'page_{p}', '')
        cleaned = clean_page_text(raw)
        if cleaned.strip():
            ch_text_parts.append(cleaned)
    combined = '\n\n'.join(ch_text_parts)
    print(f"Chapter {ch['index']}: {ch['title_bn']} -> Total Characters: {len(combined)}, Lines: {len(combined.splitlines())}")
