import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'scratch\ict_pages\all_pages_ocr.json', 'r', encoding='utf-8') as f:
    raw_pages = json.load(f)

for p in range(11, 20):
    txt = raw_pages[f'page_{p}']
    lines = [l.strip() for l in txt.split('\n') if l.strip()]
    print(f"=== Page {p} ({len(lines)} lines) ===")
    for l in lines[:6]:
        print("  ", l)
