import os
import sys
import time
import json
from concurrent.futures import ProcessPoolExecutor, as_completed
import pymupdf
import pytesseract
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

PDF_PATH = r'C:\Users\samad\Downloads\Secondary (BV)-2026_Class 9-10_ICT.pdf'
OUTPUT_DIR = r'C:\Users\samad\OneDrive\Desktop\Android\NineBooks\scratch\ict_pages'
TESSDATA_DIR = r'C:\Users\samad\OneDrive\Desktop\Android\NineBooks\scratch\tessdata'.replace('\\', '/')
TESSERACT_EXE = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def ocr_page(page_num):
    try:
        doc = pymupdf.open(PDF_PATH)
        page = doc[page_num]
        pix = page.get_pixmap(dpi=150)
        img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
        
        pytesseract.pytesseract.tesseract_cmd = TESSERACT_EXE
        txt = pytesseract.image_to_string(img, lang='ben+eng', config=f'--tessdata-dir {TESSDATA_DIR}')
        doc.close()
        return page_num, txt
    except Exception as e:
        return page_num, f"ERROR: {str(e)}"

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    doc = pymupdf.open(PDF_PATH)
    total_pages = len(doc)
    doc.close()
    
    print(f"Total pages in PDF: {total_pages}")
    # Content pages start from index 5 (page 6) to 138 (page 139)
    pages_to_process = list(range(5, total_pages - 1))
    print(f"Processing {len(pages_to_process)} pages using ProcessPoolExecutor...")
    
    start_time = time.time()
    results = {}
    
    with ProcessPoolExecutor(max_workers=6) as executor:
        futures = {executor.submit(ocr_page, p): p for p in pages_to_process}
        completed = 0
        for future in as_completed(futures):
            p_num, txt = future.result()
            results[p_num] = txt
            completed += 1
            if completed % 15 == 0 or completed == len(pages_to_process):
                elapsed = time.time() - start_time
                print(f"Done {completed}/{len(pages_to_process)} pages ({elapsed:.1f}s)...")
                
    # Save all results sorted by page number
    sorted_pages = {f"page_{p+1}": results[p] for p in sorted(results.keys())}
    out_file = os.path.join(OUTPUT_DIR, 'all_pages_ocr.json')
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(sorted_pages, f, ensure_ascii=False, indent=2)
        
    print(f"All done in {time.time() - start_time:.1f}s! Saved to {out_file}")

if __name__ == '__main__':
    main()
