import pytesseract
from PIL import Image
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
tessdata_dir = r'C:\Users\samad\OneDrive\Desktop\Android\NineBooks\scratch\tessdata'.replace('\\', '/')
os.environ['TESSDATA_PREFIX'] = tessdata_dir

img = Image.open('scratch_page_5.png')
text = pytesseract.image_to_string(img, lang='ben', config=f'--tessdata-dir {tessdata_dir}')
print('OCR Result:\n' + text)
