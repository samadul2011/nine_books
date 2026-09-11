# -*- coding: utf-8 -*-
"""
Class 9-10 Finance and Banking (ফিন্যান্স ও ব্যাংকিং) NCTB 2026 Curriculum
Generator with 2 Complete Creative Questions (CQ 1 & CQ 2) per Chapter
100% Table-Based Solutions, Clean Formulas & Correct Supabase Schema
"""

import json
import os
import re

SQL_FILE = r"c:\Users\samad\OneDrive\Desktop\Android\NineBooks\seed_finance_banking_bundle.sql"
JS_FILE = r"c:\Users\samad\OneDrive\Desktop\Android\NineBooks\web\src\data\financeBankingData.js"

SUBJECT_BN = "ফিন্যান্স ও ব্যাংকিং"
SUBJECT_EN = "Finance and Banking"
SUBJECT_ICON = "https://img.icons8.com/color/96/bank-building.png"

# We build CHAPTERS_DATA comprehensively
from generate_clean_finance_sql_data import CHAPTERS_DATA

def escape_sql(text):
    if not text:
        return ""
    return text.replace("'", "''")

def build_sql_file():
    print("Generating pure PostgreSQL SQL seed script with 2 CQs per chapter...")
    
    lines = []
    lines.append("-- ============================================================")
    lines.append("-- Seed Bundle: Class 9-10 Finance and Banking (ফিন্যান্স ও ব্যাংকিং)")
    lines.append("-- 13 Complete NCTB Curriculum Chapters, Lessons, Multiple CQs & MCQs")
    lines.append("-- 100% Valid PostgreSQL DML for Supabase SQL Editor")
    lines.append("-- ============================================================\n")
    
    lines.append("DO $ROOT_FINANCE_BLOCK$")
    lines.append("DECLARE")
    lines.append("    v_subject_id UUID;")
    lines.append("    v_chapter_id UUID;")
    lines.append("BEGIN")
    lines.append("    -- 1. Subject Insertion / Resolution")
    lines.append("    SELECT id INTO v_subject_id FROM subjects WHERE name_bn = 'ফিন্যান্স ও ব্যাংকিং' LIMIT 1;")
    lines.append("    IF v_subject_id IS NULL THEN")
    lines.append(f"        INSERT INTO subjects (name_bn, name_en, icon_url)")
    lines.append(f"        VALUES ('{SUBJECT_BN}', '{SUBJECT_EN}', '{SUBJECT_ICON}')")
    lines.append("        RETURNING id INTO v_subject_id;")
    lines.append("        RAISE NOTICE 'Created subject: %', v_subject_id;")
    lines.append("    ELSE")
    lines.append(f"        UPDATE subjects SET icon_url = '{SUBJECT_ICON}', name_en = '{SUBJECT_EN}' WHERE id = v_subject_id;")
    lines.append("        RAISE NOTICE 'Found existing subject: %', v_subject_id;")
    lines.append("    END IF;\n")
    
    for ch in CHAPTERS_DATA:
        order = ch["order"]
        t_bn = escape_sql(ch["title_bn"])
        t_en = escape_sql(ch["title_en"])
        
        lines.append(f"    -- Chapter {order}: {ch['title_bn']}")
        lines.append(f"    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = {order} LIMIT 1;")
        lines.append("    IF v_chapter_id IS NULL THEN")
        lines.append(f"        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)")
        lines.append(f"        VALUES (v_subject_id, '{t_bn}', '{t_en}', {order})")
        lines.append("        RETURNING id INTO v_chapter_id;")
        lines.append("    ELSE")
        lines.append(f"        UPDATE chapters SET title_bn = '{t_bn}', title_en = '{t_en}', order_index = {order} WHERE id = v_chapter_id;")
        lines.append("    END IF;\n")
        
        lines.append(f"    DELETE FROM lessons WHERE chapter_id = v_chapter_id;")
        lines.append(f"    DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;\n")
        
        # Lesson 1: Full Textbook Line-by-Line Content
        th_text = escape_sql(ch["theory_markdown"])
        lines.append(f"    INSERT INTO lessons (chapter_id, content_text, order_index)")
        lines.append(f"    VALUES (v_chapter_id, '{th_text}', 1);\n")
        
        # Lessons for Creative Questions (CQ 1 & CQ 2)
        for cq_idx, cq in enumerate(ch["cqs"]):
            l_order = cq_idx + 2
            cq_title = cq.get("title", f"সৃজনশীল প্রশ্ন - 0{cq_idx+1}")
            cq_markdown = f"""# 📝 {cq_title}

### উদ্দীপক:
> {cq['stimulus']}

---

### প্রশ্নাবলি:
- **(ক)** {cq['questions']['k']} *(জ্ঞানমূলক - ১ নম্বর)*
- **(খ)** {cq['questions']['kh']} *(অনুধাবনমূলক - ২ নম্বর)*
- **(গ)** {cq['questions']['g']} *(প্রয়োগমূলক - ৩ নম্বর)*
- **(ঘ)** {cq['questions']['gh']} *(উচ্চতর দক্ষতা - ৪ নম্বর)*

---

### আদর্শ সমাধান:

#### (ক) জ্ঞানমূলক উত্তর:
{cq['answers']['k']}

#### (খ) অনুধাবনমূলক উত্তর:
{cq['answers']['kh']}

#### (গ) প্রয়োগমূলক উত্তর:
{cq['answers']['g']}

#### (ঘ) উচ্চতর দক্ষতা উত্তর:
{cq['answers']['gh']}
"""
            cq_text = escape_sql(cq_markdown)
            lines.append(f"    INSERT INTO lessons (chapter_id, content_text, order_index)")
            lines.append(f"    VALUES (v_chapter_id, '{cq_text}', {l_order});\n")
            
        # Exam Questions (MCQs)
        for mcq in ch["mcqs"]:
            q_bn = escape_sql(mcq["q_bn"])
            q_en = escape_sql(mcq["q_en"])
            opts_json = json.dumps(mcq["options"], ensure_ascii=False).replace("'", "''")
            ans_idx = mcq["ans"]
            
            lines.append(f"    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)")
            lines.append(f"    VALUES (v_chapter_id, '{q_bn}', '{q_en}', '{opts_json}'::jsonb, {ans_idx});")
        
        lines.append("\n")
        
    lines.append("    RAISE NOTICE 'Finance and Banking complete 13 chapters bundle seeded successfully with multiple CQs!';")
    lines.append("END $ROOT_FINANCE_BLOCK$;")
    
    with open(SQL_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
        
    print(f"Generated SQL bundle at: {SQL_FILE} (Size: {os.path.getsize(SQL_FILE):,} bytes)")

def build_js_file():
    print("Generating client-side fallback data for web frontend...")
    
    fallback_chapters = []
    lessons_map = {}
    cqs_map = {}
    mcqs_map = {}
    
    for ch in CHAPTERS_DATA:
        ch_id = f"finance-ch-{ch['order']}"
        fallback_chapters.append({
            "id": ch_id,
            "order_index": ch["order"],
            "title_bn": f"{ch['order']}ম অধ্যায়: {ch['title_bn']}" if ch['order'] not in [1, 2, 3] else (
                f"১ম অধ্যায়: {ch['title_bn']}" if ch['order'] == 1 else (
                    f"২য় অধ্যায়: {ch['title_bn']}" if ch['order'] == 2 else f"৩য় অধ্যায়: {ch['title_bn']}"
                )
            ),
            "title_en": f"Chapter {ch['order']}: {ch['title_en']}",
            "description": ch["desc_bn"],
            "page_range": ch["pages"]
        })
        
        # Lessons for this chapter (Theory + all CQs)
        ch_lessons = [
            {
                "id": f"{ch_id}-l1",
                "order_index": 1,
                "content_text": ch["theory_markdown"]
            }
        ]
        
        for cq_idx, cq in enumerate(ch["cqs"]):
            cq_title = cq.get("title", f"সৃজনশীল প্রশ্ন - 0{cq_idx+1}")
            cq_md = f"""# 📝 {cq_title}

### উদ্দীপক:
> {cq['stimulus']}

---

### প্রশ্নাবলি:
- **(ক)** {cq['questions']['k']} *(জ্ঞানমূলক - ১ নম্বর)*
- **(খ)** {cq['questions']['kh']} *(অনুধাবনমূলক - ২ নম্বর)*
- **(গ)** {cq['questions']['g']} *(প্রয়োগমূলক - ৩ নম্বর)*
- **(ঘ)** {cq['questions']['gh']} *(উচ্চতর দক্ষতা - ৪ নম্বর)*

---

### আদর্শ সমাধান:

#### (ক) জ্ঞানমূলক উত্তর:
{cq['answers']['k']}

#### (খ) অনুধাবনমূলক উত্তর:
{cq['answers']['kh']}

#### (গ) প্রয়োগমূলক উত্তর:
{cq['answers']['g']}

#### (ঘ) উচ্চতর দক্ষতা উত্তর:
{cq['answers']['gh']}
"""
            ch_lessons.append({
                "id": f"{ch_id}-l{cq_idx+2}",
                "order_index": cq_idx + 2,
                "content_text": cq_md
            })
            
        lessons_map[ch_id] = ch_lessons
        
        # cqs_map contains array of CQs for this chapter
        cqs_map[ch_id] = ch["cqs"]
        
        mcqs_map[ch_id] = [
            {
                "id": f"{ch_id}-q{idx+1}",
                "chapter_id": ch_id,
                "question_bn": mcq["q_bn"],
                "question_en": mcq["q_en"],
                "options_json": mcq["options"],
                "correct_answer_index": mcq["ans"]
            }
            for idx, mcq in enumerate(ch["mcqs"])
        ]
        
    js_content = f"""// Class 9-10 Finance and Banking (ফিন্যান্স ও ব্যাংকিং) Fallback Data
// NCTB 2026 Curriculum - 13 Complete Chapters with Line-by-Line Content, Multiple CQs & MCQs

export const FINANCE_FALLBACK_CHAPTERS = {json.dumps(fallback_chapters, ensure_ascii=False, indent=2)};

export const FINANCE_LESSONS_MAP = {json.dumps(lessons_map, ensure_ascii=False, indent=2)};

export const FINANCE_CQS_MAP = {json.dumps(cqs_map, ensure_ascii=False, indent=2)};

export const FINANCE_MCQS_MAP = {json.dumps(mcqs_map, ensure_ascii=False, indent=2)};
"""

    with open(JS_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"Generated JS data file at: {JS_FILE} (Size: {os.path.getsize(JS_FILE):,} bytes)")

if __name__ == "__main__":
    build_sql_file()
    build_js_file()
    print("All Finance and Banking multi-CQ generation completed successfully!")
