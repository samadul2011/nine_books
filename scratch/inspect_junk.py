import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r'scratch\ict_pages\all_pages_ocr.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

print("=== Page 6 ===")
print(pages['page_6'])

print("=== Page 20 ===")
print(pages['page_20'][:500])

print("=== Page 47 ===")
print(pages['page_47'][:500])

print("=== Page 69 ===")
print(pages['page_69'][:500])

print("=== Page 115 ===")
print(pages['page_115'][:500])
