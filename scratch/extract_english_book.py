import docx
import os
import re
import sys

# Ensure UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

DOCX_PATH = r"C:\Users\samad\OneDrive\Documents\Secondary (BV)-2026_Class 9-10_English For Today.docx"
OUTPUT_DIR = r"c:\Users\samad\OneDrive\Desktop\Android\NineBooks"

DANGLING_CONNECTORS = {
    'and', 'or', 'but', 'of', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 
    'from', 'as', 'that', 'which', 'who', 'whom', 'whose', 'the', 'a', 'an', 
    'her', 'his', 'their', 'our', 'my', 'its', 'is', 'was', 'are', 'were', 
    'will', 'would', 'shall', 'should', 'can', 'could', 'may', 'might', 
    'only', 'every', 'such', 'into', 'onto', 'under', 'over', 'during'
}

def clean_text(txt):
    if not txt:
        return ""
    # Normalize spaces and tabs
    txt = txt.replace('\xa0', ' ')
    txt = txt.replace('\u2018', "'").replace('\u2019', "'")
    txt = txt.replace('\u201c', '"').replace('\u201d', '"')
    txt = txt.replace('\u2013', '-').replace('\u2014', '--')
    txt = txt.replace('\ufffd', '')
    
    # Specific OCR / typesetting fixes
    txt = txt.replace('0\tMe!0\tLife!', 'O Me! O Life!')
    txt = txt.replace('0 Me!0 Life!', 'O Me! O Life!')
    txt = txt.replace('The ard of Apple', 'The Wizard of Apple')
    txt = re.sub(r'[ \t]+', ' ', txt)
    
    return txt.strip()

def format_paragraph(txt):
    cleaned = clean_text(txt)
    if not cleaned:
        return ""
    
    # Dialogue formatting: "Speaker : Speech"
    diag_match = re.match(r'^([A-Z][a-zA-Z\s\.\,\'\-]{1,25})\s*:\s*(.+)$', cleaned)
    if diag_match and not any(cleaned.startswith(k) for k in ["Note:", "Source:", "Time:", "Questions:", "Marks:"]):
        speaker = diag_match.group(1).strip()
        speech = diag_match.group(2).strip()
        return f"**{speaker}:** {speech}"
    
    # Section header: "A . Look at..." or "B. Read..." or "C. Work in pairs..."
    sec_match = re.match(r'^([A-G])\s*[\.\)]\s*(.*)$', cleaned)
    if sec_match:
        sec_letter = sec_match.group(1).strip()
        sec_rest = sec_match.group(2).strip()
        if sec_rest:
            return f"### Section {sec_letter}: {sec_rest}"
        else:
            return f"### Section {sec_letter}"
            
    return cleaned

def table_to_markdown(table):
    rows_data = []
    for row in table.rows:
        row_cells = []
        for cell in row.cells:
            cell_txt = clean_text(cell.text)
            cell_txt = re.sub(r'[\r\n]+', ' <br> ', cell_txt)
            cell_txt = cell_txt.replace('|', '\\|')
            cell_txt = re.sub(r'\s+', ' ', cell_txt).strip()
            row_cells.append(cell_txt)
        if any(c for c in row_cells):
            rows_data.append(row_cells)
            
    if not rows_data:
        return ""
        
    num_cols = max(len(r) for r in rows_data)
    for r in rows_data:
        while len(r) < num_cols:
            r.append('')
            
    header = rows_data[0]
    header_line = '| ' + ' | '.join(c if c else ' ' for c in header) + ' |'
    sep_line = '| ' + ' | '.join(['---'] * num_cols) + ' |'
    data_lines = ['| ' + ' | '.join(c if c else ' ' for c in r) + ' |' for r in rows_data[1:]]
    
    return '\n\n' + '\n'.join([header_line, sep_line] + data_lines) + '\n\n'

def should_join_paragraphs(p1, p2):
    """
    Returns True ONLY if p1 ends with a dangling connector, comma, or possessive,
    indicating it was split mid-sentence by a docx line break.
    """
    l1 = p1.strip()
    l2 = p2.strip()
    if not l1 or not l2:
        return False
        
    # If next line is a header, bullet, dialogue, activity, or table, do not join
    if (re.match(r'^(lesson\s+\d+|lesson\b|###|[A-G]\s*[\.\)]|\d+\.|\-|\•|\(?[a-z]\))', l2, re.IGNORECASE) or
        re.match(r'^[A-Z][a-zA-Z\s]{1,20}\s*:', l2) or
        l2.startswith(">") or
        l2.startswith("***") or
        l2.lower().startswith("after we have studied") or
        l2.lower().startswith("learning outcomes") or
        l2.lower().startswith("choose the correct") or
        l2.lower().startswith("questions:") or
        l2.lower().startswith("answer the")):
        return False
        
    # Check dangling endings
    if l1.endswith('-') or l1.endswith(',') or l1.endswith("'s"):
        return True
        
    words = re.findall(r"[a-zA-Z']+", l1)
    if words and words[-1].lower() in DANGLING_CONNECTORS and (l2[0].islower() or l2.startswith('(')):
        return True
        
    return False

def merge_lesson_items(items):
    out = []
    i = 0
    while i < len(items):
        el = items[i]
        if el[0] == 'tbl':
            out.append(el)
            i += 1
            continue
            
        txt = clean_text(el[1])
        if not txt:
            i += 1
            continue
            
        while i + 1 < len(items):
            next_el = items[i + 1]
            if next_el[0] != 'p':
                break
            next_txt = clean_text(next_el[1])
            if not next_txt:
                i += 1
                continue
                
            if should_join_paragraphs(txt, next_txt):
                txt = txt + " " + next_txt
                i += 1
            else:
                break
                
        out.append(('p', txt))
        i += 1
        
    return out

def parse_document():
    print(f"Loading document: {DOCX_PATH}")
    doc = docx.Document(DOCX_PATH)
    from docx.text.paragraph import Paragraph
    from docx.table import Table

    raw_elements = []
    for child in doc.element.body:
        if child.tag.endswith('p'):
            p = Paragraph(child, doc)
            txt = p.text.strip()
            raw_elements.append(('p', txt))
        elif child.tag.endswith('tbl'):
            t = Table(child, doc)
            raw_elements.append(('tbl', t))

    print(f"Extracted {len(raw_elements)} raw body elements.")

    # Exact boundary index positions in raw_elements
    units_meta = [
        {"num": 1, "pos": 85, "title_en": "Sense of Self", "title_bn": "১ম অধ্যায়: আত্মপরিচয় (Unit 1: Sense of Self)"},
        {"num": 2, "pos": 282, "title_en": "Climate Change", "title_bn": "২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)"},
        {"num": 3, "pos": 616, "title_en": "Pastimes", "title_bn": "৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)"},
        {"num": 4, "pos": 850, "title_en": "Events and Festivals", "title_bn": "৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)"},
        {"num": 5, "pos": 1058, "title_en": "Problems Around Us", "title_bn": "৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)"},
        {"num": 6, "pos": 1319, "title_en": "Our Neighbours", "title_bn": "৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)"},
        {"num": 7, "pos": 1610, "title_en": "People Who Stand Out", "title_bn": "৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)"},
        {"num": 8, "pos": 1880, "title_en": "World Heritage", "title_bn": "৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage)"},
        {"num": 9, "pos": 2065, "title_en": "Unconventional Jobs", "title_bn": "৯ম অধ্যায়: অপ্রচলিত পেশা (Unit 9: Unconventional Jobs)"},
        {"num": 10, "pos": 2187, "title_en": "Dreams", "title_bn": "১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams)"},
        {"num": 11, "pos": 2314, "title_en": "Reading from English Literature", "title_bn": "১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)"},
        {"num": 12, "pos": 2748, "title_en": "Roots", "title_bn": "১২শ অধ্যায়: শিকড় (Unit 12: Roots)"},
        {"num": 13, "pos": 2923, "title_en": "Loneliness", "title_bn": "১৩শ অধ্যায়: একাকীত্ব (Unit 13: Loneliness)"},
        {"num": 14, "pos": 3090, "title_en": "Renewable Energy", "title_bn": "১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy)"},
        {"num": 15, "pos": 3267, "title_en": "Media and Modes of E-communication", "title_bn": "১৫শ অধ্যায়: মাধ্যম ও ই-যোগাযোগ (Unit 15: Media & E-communication)"},
        {"num": 16, "pos": 3438, "title_en": "Graffiti", "title_bn": "১৬শ অধ্যায়: গ্রাফিতি (Unit 16: Graffiti)"},
        {"num": 17, "pos": 3490, "title_en": "Sample Question Paper", "title_bn": "১৭শ অধ্যায়: নমুনা প্রশ্নপত্র (Sample Question Paper)"}
    ]

    all_units_data = []

    for idx, u in enumerate(units_meta):
        start_pos = u["pos"]
        end_pos = units_meta[idx + 1]["pos"] if idx + 1 < len(units_meta) else len(raw_elements)
        sub_elements = raw_elements[start_pos:end_pos]
        
        # Segment into lessons
        raw_lessons = []
        curr_title = f"Unit {u['num']} Introduction"
        curr_items = []
        
        for item_idx, el in enumerate(sub_elements):
            if el[0] == 'p':
                t = clean_text(el[1])
                is_lesson = False
                lesson_title = t
                
                # Check lesson patterns
                m = re.match(r'^(lesson\s+(\d+|[ivx]+)[\s\:\.\-]+(.*)|lesson\s+3:0\s*me!0\s*life!)', t, re.IGNORECASE)
                if m:
                    is_lesson = True
                    lesson_title = t
                elif u["num"] == 10 and (t.startswith("A . Work in groups") or "How are they related to dreams?" in t):
                    is_lesson = True
                    lesson_title = "Lesson 2: What I Dream to Be"
                elif u["num"] == 16 and item_idx == 0:
                    is_lesson = True
                    lesson_title = "Lesson 1: Graffiti — The Voice of the Streets"
                elif u["num"] == 17 and item_idx == 0:
                    is_lesson = True
                    lesson_title = "Model Test: English 1st Paper (Class 9)"
                
                if is_lesson and item_idx > 0:
                    raw_lessons.append((curr_title, curr_items))
                    curr_title = lesson_title
                    curr_items = [el]
                else:
                    if is_lesson and item_idx == 0:
                        curr_title = lesson_title
                    curr_items.append(el)
            else:
                curr_items.append(el)
                
        if curr_items:
            raw_lessons.append((curr_title, curr_items))

        # Check if first item is "Unit Introduction/Overview"
        # If so, prepend it nicely to Lesson 1 so lesson numbering aligns perfectly with textbook
        final_lessons = []
        if len(raw_lessons) > 1 and "Introduction" in raw_lessons[0][0]:
            intro_title, intro_items = raw_lessons[0]
            l1_title, l1_items = raw_lessons[1]
            
            # Combine intro into l1
            combined_items = intro_items + l1_items
            final_lessons.append((l1_title, merge_lesson_items(combined_items), True)) # True = has_intro
            for rem_title, rem_items in raw_lessons[2:]:
                final_lessons.append((rem_title, merge_lesson_items(rem_items), False))
        else:
            for l_title, l_items in raw_lessons:
                final_lessons.append((l_title, merge_lesson_items(l_items), False))

        all_units_data.append({
            "meta": u,
            "lessons": final_lessons
        })

    return all_units_data

def build_lesson_markdown(unit_meta, lesson_title, items, has_intro, lesson_idx):
    lines = []
    
    unit_num = unit_meta["num"]
    unit_title_en = unit_meta["title_en"]
    unit_title_bn = unit_meta["title_bn"]

    # Header banner
    lines.append(f"# {unit_title_bn}")
    lines.append(f"**English For Today • Class 9 (NCTB 2026 Curriculum)**\n")
    lines.append("---")
    
    # Process items
    in_intro = has_intro
    
    for el in items:
        if el[0] == 'p':
            txt = el[1]
            if not txt.strip():
                continue
                
            cleaned = clean_text(txt)
            
            # Detect transitions
            if in_intro:
                if re.match(r'^(lesson\s+(\d+|[ivx]+)|lesson\s+3:0)', cleaned, re.IGNORECASE):
                    in_intro = False
                    lines.append("\n---\n")
                    lines.append(f"## 📖 {clean_text(cleaned)}\n")
                    continue
                elif "learning outcomes" in cleaned.lower():
                    lines.append("\n### 🎯 Learning Outcomes")
                    continue
                elif cleaned.startswith("After we have studied"):
                    lines.append(f"*{cleaned}*\n")
                    continue
                elif cleaned.lower().startswith("unit ") or cleaned.lower() == unit_title_en.lower():
                    continue
                elif "source: internet" in cleaned.lower():
                    lines.append(f"*(Source: Internet)*")
                    continue
                else:
                    # Learning outcome bullet
                    if cleaned.startswith("-") or cleaned.startswith("•"):
                        lines.append(f"{cleaned}")
                    else:
                        lines.append(f"- {cleaned}")
                    continue
            
            # Normal lesson formatting
            if re.match(r'^(lesson\s+(\d+|[ivx]+)|lesson\s+3:0)', cleaned, re.IGNORECASE):
                lines.append(f"\n## 📖 {cleaned}\n")
            elif cleaned.startswith("### Section "):
                lines.append(f"\n{cleaned}\n")
            elif cleaned.startswith("Section ") or re.match(r'^[A-G]\s*[\.\)]', cleaned):
                fmt = format_paragraph(cleaned)
                lines.append(f"\n{fmt}\n")
            elif re.match(r'^(read the text|read the dialogue|read these texts|listen to the|work in pairs|look at the picture)', cleaned, re.IGNORECASE):
                lines.append(f"\n> 📝 **Activity:** {cleaned}\n")
            elif re.match(r'^([A-Z][a-zA-Z\s\.\,\'\-]{1,25})\s*:\s*(.+)$', cleaned) and not cleaned.startswith("Time:") and not cleaned.startswith("Marks:"):
                fmt = format_paragraph(cleaned)
                lines.append(fmt)
            elif re.match(r'^\*{3,}$', cleaned) or cleaned == "***":
                lines.append("\n<div align=\"center\">❖ ❖ ❖</div>\n")
            elif re.match(r'^(questions:|now answer the questions|answer the following questions)', cleaned, re.IGNORECASE):
                lines.append(f"\n### ❓ {cleaned}\n")
            elif cleaned.lower().startswith("unit ") or cleaned.lower() == unit_title_en.lower():
                # Skip duplicate unit title paragraph
                continue
            else:
                fmt = format_paragraph(cleaned)
                lines.append(fmt)
                
        elif el[0] == 'tbl':
            md_tbl = table_to_markdown(el[1])
            if md_tbl.strip():
                lines.append(md_tbl)
                
    # Join with sensible spacing
    result_text = "\n\n".join([l for l in lines if l.strip()])
    result_text = re.sub(r'\n{3,}', '\n\n', result_text)
    return result_text.strip()

def generate_sql_files(all_units_data):
    # 1. Base seed_english.sql
    seed_english_path = os.path.join(OUTPUT_DIR, "seed_english.sql")
    with open(seed_english_path, "w", encoding="utf-8") as f:
        f.write("-- ============================================================\n")
        f.write("-- NineBooks — English For Today (Class 9-10)\n")
        f.write("-- Subject and Chapters Seed File (NCTB 2026 Curriculum)\n")
        f.write("-- ============================================================\n\n")
        f.write("DO $$\nDECLARE\n    v_subject_id UUID;\nBEGIN\n")
        f.write("    -- 1. Insert or get English For Today Subject\n")
        f.write("    SELECT id INTO v_subject_id FROM subjects WHERE name_en = 'English For Today' LIMIT 1;\n\n")
        f.write("    IF v_subject_id IS NULL THEN\n")
        f.write("        INSERT INTO subjects (name_bn, name_en, icon_url)\n")
        f.write("        VALUES ('ইংরেজি', 'English For Today', 'https://img.icons8.com/color/96/books.png')\n")
        f.write("        RETURNING id INTO v_subject_id;\n")
        f.write("        RAISE NOTICE 'Created Subject: English For Today (%)', v_subject_id;\n")
        f.write("    ELSE\n")
        f.write("        RAISE NOTICE 'Found existing Subject: English For Today (%)', v_subject_id;\n")
        f.write("    END IF;\n\n")
        f.write("    -- 2. Insert or update 16 Units + Sample Question Paper\n")
        
        for u in all_units_data:
            meta = u["meta"]
            num = meta["num"]
            t_en = meta["title_en"].replace("'", "''")
            t_bn = meta["title_bn"].replace("'", "''")
            f.write(f"    -- Unit {num}\n")
            f.write(f"    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = {num}) THEN\n")
            f.write(f"        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)\n")
            f.write(f"        VALUES (v_subject_id, '{t_bn}', '{t_en}', {num});\n")
            f.write("    ELSE\n")
            f.write(f"        UPDATE chapters SET title_bn = '{t_bn}', title_en = '{t_en}'\n")
            f.write(f"        WHERE subject_id = v_subject_id AND order_index = {num};\n")
            f.write("    END IF;\n\n")
            
        f.write("END $$;\n")
    print(f"Generated: {seed_english_path}")

    # 2. Individual chapter files
    chapter_sql_files = []
    
    for u in all_units_data:
        meta = u["meta"]
        num = meta["num"]
        t_en = meta["title_en"]
        safe_name = re.sub(r'[^a-zA-Z0-9]+', '_', t_en).strip('_').lower()
        filename = f"seed_english_unit_{num:02d}_{safe_name}.sql"
        filepath = os.path.join(OUTPUT_DIR, filename)
        chapter_sql_files.append((filename, filepath, u))
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(f"-- ============================================================\n")
            f.write(f"-- Unit {num}: {t_en} ({meta['title_bn']})\n")
            f.write(f"-- English For Today — Class 9 (NCTB 2026 Curriculum)\n")
            f.write(f"-- Full textbook content extracted line-by-line chapter-wise\n")
            f.write(f"-- ============================================================\n\n")
            f.write("DO $$\nDECLARE\n    v_subject_id UUID;\n    v_chapter_id UUID;\nBEGIN\n")
            f.write("    -- Find Subject\n")
            f.write("    SELECT id INTO v_subject_id FROM subjects WHERE name_en = 'English For Today' LIMIT 1;\n")
            f.write("    IF v_subject_id IS NULL THEN\n")
            f.write("        RAISE EXCEPTION 'Subject \"English For Today\" not found. Please run seed_english.sql first.';\n")
            f.write("    END IF;\n\n")
            f.write(f"    -- Find Chapter (Unit {num})\n")
            f.write(f"    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = {num} LIMIT 1;\n")
            f.write("    IF v_chapter_id IS NULL THEN\n")
            f.write(f"        RAISE EXCEPTION 'Chapter for Unit {num} not found. Please run seed_english.sql first.';\n")
            f.write("    END IF;\n\n")
            f.write("    -- Clean previous lessons for this chapter\n")
            f.write("    DELETE FROM lessons WHERE chapter_id = v_chapter_id;\n\n")
            f.write("    -- Insert Lessons\n")
            
            for l_idx, (l_title, l_items, has_intro) in enumerate(u["lessons"]):
                order_idx = l_idx + 1
                md_content = build_lesson_markdown(meta, l_title, l_items, has_intro, order_idx)
                tag = f"tag_u{num:02d}_l{order_idx:02d}"
                f.write(f"    -- Lesson {order_idx}: {clean_text(l_title)[:50]}\n")
                f.write(f"    INSERT INTO lessons (chapter_id, content_text, order_index)\n")
                f.write(f"    VALUES (v_chapter_id, ${tag}$\n{md_content}\n${tag}$, {order_idx});\n\n")
                
            f.write("END $$;\n")
        print(f"Generated: {filename} ({len(u['lessons'])} lessons)")

    # 3. Master All-In-One Bundle File
    bundle_path = os.path.join(OUTPUT_DIR, "seed_english_all_units_bundle.sql")
    with open(bundle_path, "w", encoding="utf-8") as f:
        f.write("-- ============================================================\n")
        f.write("-- NineBooks — English For Today (Class 9-10) COMPLETE BUNDLE\n")
        f.write("-- Full Textbook Content: All 16 Units + Sample Question Paper\n")
        f.write("-- NCTB 2026 Curriculum (Line-by-line chapter-wise)\n")
        f.write("-- Run this single script in Supabase SQL Editor!\n")
        f.write("-- ============================================================\n\n")
        f.write("DO $$\nDECLARE\n    v_subject_id UUID;\n    v_chapter_id UUID;\nBEGIN\n")
        f.write("    -- 1. Insert or get Subject\n")
        f.write("    SELECT id INTO v_subject_id FROM subjects WHERE name_en = 'English For Today' LIMIT 1;\n")
        f.write("    IF v_subject_id IS NULL THEN\n")
        f.write("        INSERT INTO subjects (name_bn, name_en, icon_url)\n")
        f.write("        VALUES ('ইংরেজি', 'English For Today', 'https://img.icons8.com/color/96/books.png')\n")
        f.write("        RETURNING id INTO v_subject_id;\n")
        f.write("        RAISE NOTICE 'Created Subject: English For Today (%)', v_subject_id;\n")
        f.write("    END IF;\n\n")
        
        # Chapter creation & lessons
        for u in all_units_data:
            meta = u["meta"]
            num = meta["num"]
            t_en = meta["title_en"].replace("'", "''")
            t_bn = meta["title_bn"].replace("'", "''")
            f.write(f"    -- ======================================================\n")
            f.write(f"    -- Unit {num}: {meta['title_en']}\n")
            f.write(f"    -- ======================================================\n")
            f.write(f"    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = {num}) THEN\n")
            f.write(f"        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)\n")
            f.write(f"        VALUES (v_subject_id, '{t_bn}', '{t_en}', {num})\n")
            f.write("        RETURNING id INTO v_chapter_id;\n")
            f.write("    ELSE\n")
            f.write(f"        UPDATE chapters SET title_bn = '{t_bn}', title_en = '{t_en}'\n")
            f.write(f"        WHERE subject_id = v_subject_id AND order_index = {num}\n")
            f.write("        RETURNING id INTO v_chapter_id;\n")
            f.write("    END IF;\n\n")
            f.write("    DELETE FROM lessons WHERE chapter_id = v_chapter_id;\n\n")
            
            for l_idx, (l_title, l_items, has_intro) in enumerate(u["lessons"]):
                order_idx = l_idx + 1
                md_content = build_lesson_markdown(meta, l_title, l_items, has_intro, order_idx)
                tag = f"tag_u{num:02d}_l{order_idx:02d}"
                f.write(f"    INSERT INTO lessons (chapter_id, content_text, order_index)\n")
                f.write(f"    VALUES (v_chapter_id, ${tag}$\n{md_content}\n${tag}$, {order_idx});\n\n")
                
        f.write("    RAISE NOTICE 'Successfully seeded all English For Today units!';\n")
        f.write("END $$;\n")

    print(f"Generated Master Bundle: {bundle_path}")

if __name__ == "__main__":
    units_data = parse_document()
    generate_sql_files(units_data)
    print("All tasks completed successfully!")
