import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Load raw OCR pages
with open(r'scratch\ict_pages\all_pages_ocr.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_ocr_text(txt):
    """Clean typical OCR noise and formatting quirks"""
    # Fix broken Bengali characters / ligatures commonly misread by OCR
    corrections = [
        (r'প্রোগ্াম', 'প্রোগ্রাম'),
        (r'প্রোথাম', 'প্রোগ্রাম'),
        (r'ফ্ষোর', 'স্কোর'),
        (r'কৃত্রিম\s+garg', 'কৃত্রিম বুদ্ধিমত্তা'),
        (r'কৃত্তিম', 'কৃত্রিম'),
        (r'বঙ্কিমচন্দ্', 'বঙ্কিমচন্দ্র'),
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
        (r'হিসাব হিসাবে', 'হিসাব হিসেবে')
    ]
    
    lines = txt.split('\n')
    cleaned_lines = []
    
    for line in lines:
        l = line.strip()
        # Drop headers and footers
        if re.match(r'^(২০২৬|\d+|[০-৯]+)$', l):
            continue
        if re.match(r'^[০-৯\d]+\s+(তথ্য|কম্পিউটার|ইন্টারনেট|আমার|মাল্টিমিডিয়া|প্রোগ্রামিং)', l):
            continue
        if re.match(r'^(তথ্য|কম্পিউটার|ইন্টারনেট|আমার|মাল্টিমিডিয়া|প্রোগ্রামিং).*?[০-৯\d]+$', l):
            continue
        if len(l) < 3 and not re.search(r'[a-zA-Z\u0980-\u09FF]', l):
            continue
            
        for pat, repl in corrections:
            l = re.sub(pat, repl, l)
            
        cleaned_lines.append(l)
        
    return '\n'.join(cleaned_lines)

print("Helper loaded successfully.")
