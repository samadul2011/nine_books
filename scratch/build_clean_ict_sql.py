import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Load raw OCR pages
with open(r'scratch\ict_pages\all_pages_ocr.json', 'r', encoding='utf-8') as f:
    raw_pages = json.load(f)

print("Raw pages loaded successfully:", len(raw_pages))
