# -*- coding: utf-8 -*-
"""
build_and_assemble_all_math.py
Assembles all 17 chapters of Class 9-10 Mathematics with textbook exercise problems
(including exact NCTB exercises like অনুশীলনী ৩.২ (১ এর ক, খ, গ; ২ এর ক, খ, গ, ঘ, ঙ ইত্যাদি))
and step-by-step solutions into seed_math_all_chapters_bundle.sql and mathFallbackData.js.
"""

import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

import os
sys.path.append(os.path.abspath('.'))

# Import all chapters
import scratch.math_data.ch01 as ch01

import scratch.math_data.ch02 as ch02
import scratch.math_data.ch03 as ch03
import scratch.math_data.ch04 as ch04
import scratch.math_data.ch05 as ch05
import scratch.math_data.ch06 as ch06
import scratch.math_data.ch07 as ch07
import scratch.math_data.ch08 as ch08
import scratch.math_data.ch09 as ch09
import scratch.math_data.ch10 as ch10
import scratch.math_data.ch11 as ch11
import scratch.math_data.ch12 as ch12
import scratch.math_data.ch13 as ch13
import scratch.math_data.ch14 as ch14
import scratch.math_data.ch15 as ch15
import scratch.math_data.ch16 as ch16
import scratch.math_data.ch17 as ch17

ALL_CHAPTERS = [
    ch01.CHAPTER, ch02.CHAPTER, ch03.CHAPTER, ch04.CHAPTER, ch05.CHAPTER,
    ch06.CHAPTER, ch07.CHAPTER, ch08.CHAPTER, ch09.CHAPTER, ch10.CHAPTER,
    ch11.CHAPTER, ch12.CHAPTER, ch13.CHAPTER, ch14.CHAPTER, ch15.CHAPTER,
    ch16.CHAPTER, ch17.CHAPTER
]

def clean_math(text):
    if not text:
        return ""
    
    # 1. Remove LaTeX display math and inline math wrappers
    text = text.replace('$$', '')
    text = text.replace('$', '')

    # 2. Text and delimiter cleanups
    text = re.sub(r'\\text\{([^}]+)\}', r'\1', text)
    text = text.replace(r'\left', '').replace(r'\right', '')
    text = text.replace(r'\{', '{').replace(r'\}', '}')
    text = text.replace(r'\;', ' ').replace(r'\,', ' ').replace(r'\:', ' ')
    text = text.replace(r'\quad', '  ')
    text = text.replace(r'\\', '')

    # 3. Number Sets
    text = text.replace(r'\mathbb{N}', 'ℕ')
    text = text.replace(r'\mathbb{Z}', 'ℤ')
    text = text.replace(r'\mathbb{Q}', 'ℚ')
    text = text.replace(r'\mathbb{R}', 'ℝ')

    # 4. Roots with indices: \sqrt[n]{a} -> ⁿ√(a), \sqrt[3]{a} -> ³√(a)
    idx_map = {'3': '³', '4': '⁴', 'n': 'ⁿ'}
    def replace_root_idx(m):
        idx = m.group(1)
        body = m.group(2)
        sym = idx_map.get(idx, f"({idx})")
        return f"{sym}√({body})"
    text = re.sub(r'\\sqrt\[([0-9a-zA-Z]+)\]\{([^}]+)\}', replace_root_idx, text)

    # 5. Fractions BEFORE square roots so nested \sqrt{\frac{a}{b}} works cleanly
    for _ in range(4):
        text = re.sub(r'\\frac\{([^{}]+)\}\{([^{}]+)\}', r'(\1 / \2)', text)

    # 6. Standard Square Roots
    text = re.sub(r'\\sqrt\{([^}]+)\}', r'√(\1)', text)
    text = re.sub(r'\\sqrt([0-9a-zA-Z])', r'√\1', text)

    # 7. Exact LaTeX command tokens (sorted longest first to avoid partial prefix collisions)
    token_replacements = [
        (r'\\implies', '⇒'),
        (r'\\parallel', '∥'),
        (r'\\emptyset', '∅'),
        (r'\\approx', '≈'),
        (r'\\cdot', '·'),
        (r'\\circ', '°'),
        (r'\\theta', 'θ'),
        (r'\\Delta', 'Δ'),
        (r'\\angle', '∠'),
        (r'\\times', '×'),
        (r'\\cosec', 'cosec'),
        (r'\\infty', '∞'),
        (r'\\notin', '∉'),
        (r'\\subset', '⊂'),
        (r'\\bar\{x\}', 'x̄'),
        (r'\\bar{x}', 'x̄'),
        (r'\\bar\s*x', 'x̄'),
        (r'\\dot\{7\}', '7̇'),
        (r'\\dot\{3\}', '3̇'),
        (r'\\dot\s*7', '7̇'),
        (r'\\dot\s*3', '3̇'),
        (r'\\neq', '≠'),
        (r'\\div', '÷'),
        (r'\\phi', 'ϕ'),
        (r'\\csc', 'cosec'),
        (r'\\sec', 'sec'),
        (r'\\cot', 'cot'),
        (r'\\tan', 'tan'),
        (r'\\cos', 'cos'),
        (r'\\sin', 'sin'),
        (r'\\log', 'log'),
        (r'\\sum', '∑'),
        (r'\\cup', '∪'),
        (r'\\cap', '∩'),
        (r'\\pm', '±'),
        (r'\\pi', 'π'),
        (r'\\ge\b', '≥'),
        (r'\\le\b', '≤'),
        (r'\\in\b', '∈'),
    ]

    for pattern, repl in token_replacements:
        text = re.sub(pattern, repl, text)

    # 8. Superscripts
    super_map = {
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
        '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
        'n': 'ⁿ', 'i': 'ⁱ', 'x': 'ˣ', 'y': 'ʸ', '°': '°'
    }
    def replace_sup(m):
        content = m.group(1) or m.group(2)
        return "".join(super_map.get(c, c) for c in content)

    text = re.sub(r'\^\{([^}]+)\}', replace_sup, text)
    text = re.sub(r'\^([0-9nxy+-°])', replace_sup, text)

    # 9. Subscripts
    sub_map = {
        '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
        '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
        '+': '₊', '-': '₋', 'i': 'ᵢ', 'n': 'ₙ', 'm': 'ₘ'
    }
    def replace_sub(m):
        content = m.group(1) or m.group(2)
        return "".join(sub_map.get(c, c) for c in content)

    text = re.sub(r'\_\{([^}]+)\}', replace_sub, text)
    text = re.sub(r'\_([0-9inm+-])', replace_sub, text)

    # 10. Clean up duplicate parentheses / redundant spacings
    text = re.sub(r'\(\s*([a-zA-Z0-9²³⁴ⁿ]+)\s*/\s*([a-zA-Z0-9²³⁴ⁿ]+)\s*\)', r'\1/\2', text)
    text = re.sub(r'\\([a-zA-Z])', r'\1', text)

    return text

def build_lesson_markdown(ch):
    title_bn = ch["title_bn"]
    lesson_md = []
    lesson_md.append(f"# {title_bn}")
    lesson_md.append("")
    lesson_md.append("**গণিত • নবম-দশম শ্রেণি (NCTB ২০২৬ শিক্ষাক্রম)**")
    lesson_md.append(f"*{clean_math(ch['summary'])}*")
    lesson_md.append("")
    lesson_md.append("---")
    lesson_md.append("")
    lesson_md.append("### 🎯 এ অধ্যায় শেষে আমরা যা শিখতে পারব (শিখনফল)")
    lesson_md.append("")
    for o in ch["outcomes"]:
        lesson_md.append(f"> {clean_math(o)}")
    lesson_md.append("")

    # Topics
    for top in ch["topics"]:
        lesson_md.append(f"### 🔹 বিষয়: {clean_math(top['title'])}")
        lesson_md.append(clean_math(top["content"]))
        lesson_md.append("")

    # Exercise Problems & Hidden Solutions
    lesson_md.append("### 📐 পাঠ্যবইয়ের অনুশীলনীভিত্তিক সমস্যাবলি ও সমাধান (সমাধান দেখতে বাটনে ক্লিক করুন)")
    lesson_md.append("")
    for prob in ch["problems"]:
        lesson_md.append(f"> 🔢 **{clean_math(prob['prompt'])}**")
        lesson_md.append(f"> 💡 **সমাধান:**")
        for sol_line in clean_math(prob["solution"]).split("\n"):
            lesson_md.append(f"> {sol_line}")
        lesson_md.append("")

    return "\n".join(lesson_md)

# Generate SQL Bundle
sql_lines = []
sql_lines.append("-- ============================================================")
sql_lines.append("-- NineBooks — Mathematics (গণিত) COMPLETE BUNDLE")
sql_lines.append("-- Full Textbook Content: All 17 Chapters + Line-by-Line Lessons")
sql_lines.append("-- Complete NCTB Textbook Exercise Problems (অনুশীলনী ১, ২, ৩.১, ৩.২ ইত্যাদি)")
sql_lines.append("-- Interactive Hidden Mathematics Solutions (💡 সমাধান দেখুন / 🙈 সমাধান লুকান)")
sql_lines.append("-- 85+ Board-Standard Exam Questions (MCQs) with Verified Answer Keys")
sql_lines.append("-- NCTB 2026 Curriculum (Pure PostgreSQL DML for Supabase SQL Editor)")
sql_lines.append("-- ============================================================")
sql_lines.append("")
sql_lines.append("DO $ROOT_MATH_BLOCK$")
sql_lines.append("DECLARE")
sql_lines.append("    v_subject_id UUID;")
sql_lines.append("    v_chapter_id UUID;")
sql_lines.append("BEGIN")
sql_lines.append("    -- 1. Insert or get Subject")
sql_lines.append("    SELECT id INTO v_subject_id FROM subjects WHERE name_en = 'Mathematics' OR name_en = 'Math' OR name_bn = 'গণিত' LIMIT 1;")
sql_lines.append("    IF v_subject_id IS NULL THEN")
sql_lines.append("        INSERT INTO subjects (name_bn, name_en, icon_url)")
sql_lines.append("        VALUES ('গণিত', 'Mathematics', 'https://img.icons8.com/color/96/calculator.png')")
sql_lines.append("        RETURNING id INTO v_subject_id;")
sql_lines.append("        RAISE NOTICE 'Created Subject: Mathematics (%)', v_subject_id;")
sql_lines.append("    ELSE")
sql_lines.append("        UPDATE subjects")
sql_lines.append("        SET name_bn = 'গণিত', icon_url = 'https://img.icons8.com/color/96/calculator.png'")
sql_lines.append("        WHERE id = v_subject_id;")
sql_lines.append("    END IF;")
sql_lines.append("")

for ch in ALL_CHAPTERS:
    order = ch["order"]
    title_bn = ch["title_bn"]
    title_en = ch["title_en"]
    tag = ch["tag"]

    sql_lines.append(f"    -- ======================================================")
    sql_lines.append(f"    -- Chapter {order}: {title_en}")
    sql_lines.append(f"    -- ======================================================")
    sql_lines.append(f"    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = {order}) THEN")
    sql_lines.append(f"        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)")
    sql_lines.append(f"        VALUES (v_subject_id, '{title_bn}', '{title_en}', {order})")
    sql_lines.append(f"        RETURNING id INTO v_chapter_id;")
    sql_lines.append("    ELSE")
    sql_lines.append(f"        UPDATE chapters SET title_bn = '{title_bn}', title_en = '{title_en}'")
    sql_lines.append(f"        WHERE subject_id = v_subject_id AND order_index = {order}")
    sql_lines.append(f"        RETURNING id INTO v_chapter_id;")
    sql_lines.append("    END IF;")
    sql_lines.append("")
    sql_lines.append(f"    DELETE FROM lessons WHERE chapter_id = v_chapter_id;")
    sql_lines.append("")

    lesson_content = build_lesson_markdown(ch)
    sql_lines.append(f"    INSERT INTO lessons (chapter_id, content_text, order_index)")
    sql_lines.append(f"    VALUES (v_chapter_id, ${tag}$")
    sql_lines.append(lesson_content)
    sql_lines.append(f"${tag}$, 1);")
    sql_lines.append("")

    # Exam MCQs
    sql_lines.append(f"    DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;")
    for q_bn, options, correct_idx in ch["mcqs"]:
        clean_q = clean_math(q_bn).replace("'", "''")
        clean_opts = [clean_math(opt) for opt in options]
        opts_json = json.dumps(clean_opts, ensure_ascii=False).replace("'", "''")
        sql_lines.append(f"    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)")
        sql_lines.append(f"    VALUES (v_chapter_id, '{clean_q}', '{clean_q}', '{opts_json}'::jsonb, {correct_idx});")
    sql_lines.append("")

sql_lines.append("    RAISE NOTICE 'Class 9-10 Mathematics (all 17 chapters with complete exercises) seeded successfully!';")
sql_lines.append("END $ROOT_MATH_BLOCK$;")
sql_lines.append("")

final_sql = "\n".join(sql_lines)
with open("seed_math_all_chapters_bundle.sql", "w", encoding="utf-8") as f:
    f.write(final_sql)

print(f"Generated seed_math_all_chapters_bundle.sql ({len(final_sql)} chars, {len(final_sql.splitlines())} lines)")

# Also update mathFallbackData.js with Chapter 1 and Chapter 3 full contents
ch1_content = build_lesson_markdown(ch01.CHAPTER)
ch3_content = build_lesson_markdown(ch03.CHAPTER)

fallback_js = f"""// Fallback data for Mathematics (গণিত) with complete NCTB exercises
export const MATH_FALLBACK_CHAPTERS = [
  {{ id: 'math-ch-1', order_index: 1, title_bn: '১ম অধ্যায়: বাস্তব সংখ্যা', title_en: 'Real Numbers' }},
  {{ id: 'math-ch-2', order_index: 2, title_bn: '২য় অধ্যায়: সেট ও ফাংশন', title_en: 'Sets and Functions' }},
  {{ id: 'math-ch-3', order_index: 3, title_bn: '৩য় অধ্যায়: বীজগাণিতিক রাশি', title_en: 'Algebraic Expressions' }},
  {{ id: 'math-ch-4', order_index: 4, title_bn: '৪র্থ অধ্যায়: সূচক ও লগারিদম', title_en: 'Exponents and Logarithms' }},
  {{ id: 'math-ch-5', order_index: 5, title_bn: '৫ম অধ্যায়: এক চলকবিশিষ্ট সমীকরণ', title_en: 'Equations in One Variable' }},
  {{ id: 'math-ch-6', order_index: 6, title_bn: '৬ষ্ঠ অধ্যায়: রেখা, কোণ ও ত্রিভুজ', title_en: 'Lines, Angles and Triangles' }},
  {{ id: 'math-ch-7', order_index: 7, title_bn: '৭ম অধ্যায়: ব্যবহারিক জ্যামিতি', title_en: 'Practical Geometry' }},
  {{ id: 'math-ch-8', order_index: 8, title_bn: '৮ম অধ্যায়: বৃত্ত', title_en: 'Circle' }},
  {{ id: 'math-ch-9', order_index: 9, title_bn: '৯ম অধ্যায়: ত্রিকোণমিতিক অনুপাত', title_en: 'Trigonometrical Ratio' }},
  {{ id: 'math-ch-10', order_index: 10, title_bn: '১০ম অধ্যায়: দূরত্ব ও উচ্চতা', title_en: 'Distance and Elevation' }},
  {{ id: 'math-ch-11', order_index: 11, title_bn: '১১শ অধ্যায়: বীজগাণিতিক অনুপাত ও সমানুপাত', title_en: 'Algebraic Ratio and Proportion' }},
  {{ id: 'math-ch-12', order_index: 12, title_bn: '১২শ অধ্যায়: দুই চলকবিশিষ্ট সরল সহসমীকরণ', title_en: 'Simple Simultaneous Equations in Two Variables' }},
  {{ id: 'math-ch-13', order_index: 13, title_bn: '১৩শ অধ্যায়: সসীম ধারা', title_en: 'Finite Series' }},
  {{ id: 'math-ch-14', order_index: 14, title_bn: '১৪শ অধ্যায়: অনুপাত, সদৃশতা ও প্রতিসমতা', title_en: 'Ratio, Similarity and Symmetry' }},
  {{ id: 'math-ch-15', order_index: 15, title_bn: '১৫শ অধ্যায়: ক্ষেত্রফল সম্পর্কিত উপপাদ্য ও সম্পাদ্য', title_en: 'Area Related Theorems and Constructions' }},
  {{ id: 'math-ch-16', order_index: 16, title_bn: '১৬শ অধ্যায়: পরিমিতি', title_en: 'Mensuration' }},
  {{ id: 'math-ch-17', order_index: 17, title_bn: '১৭শ অধ্যায়: পরিসংখ্যান', title_en: 'Statistics' }}
];

export const MATH_CH1_FALLBACK_LESSON = {json.dumps(ch1_content, ensure_ascii=False)};
export const MATH_CH3_FALLBACK_LESSON = {json.dumps(ch3_content, ensure_ascii=False)};

export const MATH_CH1_FALLBACK_MCQS = [
  {{
    id: 'math-mcq-1',
    question_bn: 'নিচের কোনটি অমূলদ সংখ্যা?',
    question_en: 'Which of the following is an irrational number?',
    options_json: ['√(4)', '√(9)', '√(7)', '3/4'],
    correct_answer_index: 2
  }},
  {{
    id: 'math-mcq-2',
    question_bn: 'কোনো সংখ্যার p ও q পরস্পর সহমৌলিক এবং q > 1 হলে p/q কোন ধরণের সংখ্যা?',
    question_en: 'If p and q are coprime and q > 1, what kind of number is p/q?',
    options_json: ['অমূলদ সংখ্যা', 'মূলদ সংখ্যা', 'অবাস্তব সংখ্যা', 'ঋণাত্মক পূর্ণসংখ্যা'],
    correct_answer_index: 1
  }},
  {{
    id: 'math-mcq-3',
    question_bn: '0.3̇ এর সাধারণ ভগ্নাংশ রূপ কোনটি?',
    question_en: 'What is the fraction form of 0.3̇?',
    options_json: ['3/10', '1/3', '3/100', '1/30'],
    correct_answer_index: 1
  }},
  {{
    id: 'math-mcq-4',
    question_bn: 'সকল মূলদ ও অমূলদ সংখ্যাকে একত্রে কী বলা হয়?',
    question_en: 'What are all rational and irrational numbers collectively called?',
    options_json: ['বাস্তব সংখ্যা', 'স্বাভাবিক সংখ্যা', 'পূর্ণসংখ্যা', 'জটিল সংখ্যা'],
    correct_answer_index: 0
  }},
  {{
    id: 'math-mcq-5',
    question_bn: 'নিচের কোনটি অনাবৃত্ত অসীম দশমিক ভগ্নাংশ?',
    question_en: 'Which of the following is a non-recurring infinite decimal?',
    options_json: ['0.333...', '0.1212...', '1.4142135...', '0.5000...'],
    correct_answer_index: 2
  }}
];
"""

with open("web/src/data/mathFallbackData.js", "w", encoding="utf-8") as f:
    f.write(fallback_js)

print("Updated web/src/data/mathFallbackData.js successfully!")
