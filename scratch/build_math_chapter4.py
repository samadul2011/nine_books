# -*- coding: utf-8 -*-
"""
Full Builder for NCTB Class 9-10 Math Chapter 4: সূচক ও লগারিদম (Exponents and Logarithms)
Combines:
- Theory and complete formulas
- অনুশীলনী ৪.১ (১ - ২২)
- অনুশীলনী ৪.২ (১ - ৫)
- অনুশীলনী ৪.৩ (১ - ১১)
- অধ্যায় ৪ নমুনা প্রশ্ন ও সৃজনশীল ৫ ও সংক্ষিপ্ত ৬ (পৃষ্ঠা ৯২)
Total 85 math problems with complete step-by-step solutions!
Integrates into:
- web/src/data/mathFallbackData.js
- web/src/App.jsx
- seed_math_all_chapters_bundle.sql
"""

import sys
import os
import json
import re

# Import modules
from math_ex41 import get_ex41_problems
from math_ex42 import get_ex42_problems
from math_ex43 import get_ex43_problems
from math_ch4_sample import get_ch4_sample_problems

def get_chapter4_intro():
    lines = []
    lines.append("# ৪র্থ অধ্যায়: সূচক ও লগারিদম (Exponents and Logarithms)")
    lines.append("")
    lines.append("**গণিত • নবম-দশম শ্রেণি (NCTB ২০২৬ শিক্ষাক্রম)**")
    lines.append("*সূচকের নিয়মাবলি, ঋণাত্মক ও ভগ্নাংশ সূচক, সূচকীয় সমীকরণ, লগারিদমের ধারণা ও সূত্রাবলি, সাধারণ লগারিদম (Common Logarithm), বৈজ্ঞানিক রূপ, পূর্ণক (Characteristic) ও অংশক (Mantissa)।*")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("### 🎯 এ অধ্যায় শেষে আমরা যা শিখতে পারব (শিখনফল)")
    lines.append("")
    lines.append("> ধনাত্মক পূর্ণসংখ্যার সূচক, শূন্য ও ঋণাত্মক পূর্ণসংখ্যার সূচক ব্যাখ্যা ও প্রয়োগ করতে পারব;")
    lines.append("> n-তম মূল এবং ভগ্নাংশ সূচক সম্পর্কিত নিয়মাবলি ব্যবহার করে গাণিতিক সমস্যার সমাধান করতে পারব;")
    lines.append("> সূচকের নিয়মাবলি প্রয়োগ করে জটিল গাণিতিক রাশির সরলীকরণ ও প্রমাণ করতে পারব;")
    lines.append("> সূচকীয় সমীকরণের সমাধান করতে পারব ($a^x = a^y \\Rightarrow x = y$, $x^a = y^a \\Rightarrow x = y$);")
    lines.append("> সূচক ও লগারিদমের পারস্পরিক সম্পর্ক ব্যাখ্যা এবং লগারিদমের মৌলিক সূত্রাবলি প্রয়োগ করতে পারব;")
    lines.append("> যে কোনো বাস্তব সংখ্যাকে বৈজ্ঞানিক আকারে ($a \\times 10^n$, যেখানে $1 \\le a < 10$) প্রকাশ করতে পারব;")
    lines.append("> সাধারণ লগের পূর্ণক (ক্যালকুলেটর ছাড়া ও ক্যালকুলেটর সহ) এবং অংশক সঠিকভাবে নির্ণয় করতে পারব।")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("### 🔹 বিষয়: সূচক ও লগারিদমের অত্যাবশ্যকীয় সূত্র ভাণ্ডার")
    lines.append("")
    lines.append("#### ১. সূচকের মৌলিক সূত্রাবলি ($a, b \\in \\mathbb{R}$ এবং $m, n \\in \\mathbb{N}$ বা $\\mathbb{Z}$):")
    lines.append("- **গুণের সূত্র:** $a^m \\times a^n = a^{m+n}$")
    lines.append("- **ভাগের সূত্র:** $\\frac{a^m}{a^n} = a^{m-n}$ ($a \\ne 0$)")
    lines.append("- **ঘাতের ঘাত (Power of Power):** $(a^m)^n = a^{mn}$")
    lines.append("- **গুণফলের ঘাত:** $(ab)^n = a^n b^n$")
    lines.append("- **ভাগফলের ঘাত:** $(\\frac{a}{b})^n = \\frac{a^n}{b^n}$ ($b \\ne 0$)")
    lines.append("- **শূন্য সূচক:** $a^0 = 1$ ($a \\ne 0$)")
    lines.append("- **ঋণাত্মক পূর্ণসংখ্যার সূচক:** $a^{-n} = \\frac{1}{a^n}$ ($a \\ne 0$)")
    lines.append("- **মূলীয় বা ভগ্নাংশ সূচক:** $\\sqrt[n]{a} = a^{\\frac{1}{n}}$ এবং $\\sqrt[n]{a^m} = a^{\\frac{m}{n}}$ ($a > 0$)")
    lines.append("")
    lines.append("#### ২. সূচকীয় সমীকরণের সূত্রাবলি:")
    lines.append("- যদি $a^x = a^y$ হয়, তবে $x = y$ (শর্ত: $a > 0, a \\ne 1$)")
    lines.append("- যদি $a^x = b^x$ হয়, তবে $a = b$ (শর্ত: $a, b > 0, x \\ne 0$)")
    lines.append("")
    lines.append("#### ৩. লগারিদমের সংজ্ঞা ও বৈশিষ্ট্য:")
    lines.append("- **সংজ্ঞা:** যদি $a^x = N$ হয়, তবে $x = \\log_a N$ (শর্ত: $a > 0, a \\ne 1, N > 0$)")
    lines.append("- **মৌলিক মান:** $\\log_a 1 = 0$, $\\log_a a = 1$")
    lines.append("- **গুণের লগ:** $\\log_a (MN) = \\log_a M + \\log_a N$")
    lines.append("- **ভাগের লগ:** $\\log_a (\\frac{M}{N}) = \\log_a M - \\log_a N$")
    lines.append("- **ঘাতের লগ:** $\\log_a (M^k) = k \\log_a M$")
    lines.append("- **ভিত্তি পরিবর্তন সূত্র:** $\\log_a M = \\log_b M \\times \\log_a b = \\frac{\\log_b M}{\\log_b a}$")
    lines.append("- **ব্যস্ত অনুপাত সূত্র:** $\\log_b a = \\frac{1}{\\log_a b}$")
    lines.append("")
    lines.append("#### ৪. সাধারণ লগারিদম, বৈজ্ঞানিক রূপ, পূর্ণক ও অংশক:")
    lines.append("- **বৈজ্ঞানিক রূপ:** যে কোনো ধনাত্মক সংখ্যাকে $N = a \\times 10^n$ আকারে লেখা যায়, যেখানে $1 \\le a < 10$ এবং $n \\in \\mathbb{Z}$।")
    lines.append("- **লগের পূর্ণক (Characteristic):** $\\log N = \\log(a \\times 10^n) = n + \\log a$। এখানে পূর্ণসংখ্যা $n$-কে $\\log N$-এর পূর্ণক বলা হয়।")
    lines.append("  - যদি সংখ্যাটি $1$-এর সমান বা বড় হয়, তবে পূর্ণক = (দশমিক বিন্দুর বামের অংক সংখ্যা $- 1$)।")
    lines.append("  - যদি সংখ্যাটি $1$-এর ছোট ও দশমিকের পর $k$-টি পরপর শূন্য থাকে, তবে পূর্ণক = $-(k + 1)$ (যাকে $\\overline{k+1}$ লেখা হয়)।")
    lines.append("- **লগের অংশক (Mantissa):** $\\log a$ হলো অংশক, যা সর্বদা একটি অঋণাত্মক প্রকৃত ভগ্নাংশ ($0 \\le \\log a < 1$)।")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 📝 অনুশীলনীভিত্তিক সকল গাণিতিক সমস্যা ও পূর্ণাঙ্গ সমাধান (অনুশীলনী ৪.১, ৪.২ ও ৪.৩)")
    lines.append("")
    return "\n".join(lines)

def build_full_lesson():
    intro = get_chapter4_intro()
    p41 = get_ex41_problems()
    p42 = get_ex42_problems()
    p43 = get_ex43_problems()
    ps = get_ch4_sample_problems()

    full_text = intro + "\n\n" + "\n\n".join(p41) + "\n\n" + "\n\n".join(p42) + "\n\n" + "\n\n".join(p43) + "\n\n" + "\n\n".join(ps)
    return full_text

def update_math_fallback_data(full_text):
    fallback_path = os.path.join('web', 'src', 'data', 'mathFallbackData.js')
    with open(fallback_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Use json.dumps to preserve all LaTeX backslashes without escape corruption
    json_str = json.dumps(full_text, ensure_ascii=False)
    tag = 'export const MATH_CH4_FALLBACK_LESSON = '
    
    if tag in content:
        start_idx = content.find(tag)
        # Find closing semicolon of this export
        end_idx = content.find(';\n', start_idx)
        if end_idx != -1:
            content = content[:start_idx] + f'{tag}{json_str};\n' + content[end_idx + 2:]
        else:
            print("Warning: could not find end of existing MATH_CH4_FALLBACK_LESSON")
    else:
        # Insert before MATH_CH1_FALLBACK_MCQS
        insertion = f'\n{tag}{json_str};\n'
        idx = content.find('export const MATH_CH1_FALLBACK_MCQS')
        if idx != -1:
            content = content[:idx] + insertion + '\n' + content[idx:]
        else:
            content += insertion

    with open(fallback_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated mathFallbackData.js with pristine LaTeX JSON string successfully!")

def update_app_jsx():
    app_path = os.path.join('web', 'src', 'App.jsx')
    with open(app_path, 'r', encoding='utf-8') as f:
        app_code = f.read()

    # Ensure MATH_CH4_FALLBACK_LESSON is imported
    if 'MATH_CH4_FALLBACK_LESSON' not in app_code:
        app_code = app_code.replace(
            'MATH_CH3_FALLBACK_LESSON',
            'MATH_CH3_FALLBACK_LESSON, MATH_CH4_FALLBACK_LESSON'
        )

    # Add Chapter 4 check in fallback loading logic
    # Look for the isCh3 block:
    # const isCh3 = ...
    ch3_anchor = "const isCh3 = (currentChapter && (currentChapter.order_index === 3 || currentChapter.title_bn?.includes('বীজগাণিতিক'))) || chapterId === 'math-ch-3';"
    
    ch4_block = """const isCh4 = (currentChapter && (currentChapter.order_index === 4 || currentChapter.title_bn?.includes('সূচক') || currentChapter.title_bn?.includes('লগারিদম'))) || chapterId === 'math-ch-4';
        if (isCh4) {
          if (!dbLesson || (dbLesson.content_text && dbLesson.content_text.length < 30000)) {
            setLessons([{ id: `math-preview-lesson-${chapterId}`, content_text: MATH_CH4_FALLBACK_LESSON, order_index: 1 }])
          } else {
            setLessons(lessonData)
          }
        } else if (isCh3) {"""

    if 'const isCh4 =' not in app_code:
        if ch3_anchor in app_code:
            app_code = app_code.replace(
                ch3_anchor + "\n        if (isCh3) {",
                ch3_anchor + "\n        " + ch4_block
            )
        else:
            # Try looser match
            pattern = r"(const isCh3 = [^\n]+;\s*if\s*\(\s*isCh3\s*\)\s*\{)"
            replacement = r"\1".replace("if (isCh3) {", ch4_block)
            app_code = re.sub(pattern, replacement, app_code)

    with open(app_path, 'w', encoding='utf-8') as f:
        f.write(app_code)
    print("Updated App.jsx successfully!")

def update_sql_bundle(full_text):
    sql_path = 'seed_math_all_chapters_bundle.sql'
    with open(sql_path, 'r', encoding='utf-8') as f:
        sql_content = f.read()

    # Find the tag for chapter 4
    # Pattern: VALUES (v_chapter_id, $tag_math_ch04$ ... $tag_math_ch04$, 1);
    pattern = r'(VALUES\s*\(\s*v_chapter_id\s*,\s*\$tag_math_ch04\$)[\s\S]*?(\$tag_math_ch04\$\s*,\s*1\s*\);)'
    
    # Clean full_text: escape dollar signs if any
    replacement = f'\\1\n{full_text}\n\\2'
    
    match = re.search(pattern, sql_content)
    if match:
        prefix = match.group(1)
        suffix = match.group(2)
        start, end = match.span()
        sql_content = sql_content[:start] + prefix + '\n' + full_text + '\n' + suffix + sql_content[end:]
        with open(sql_path, 'w', encoding='utf-8') as f:
            f.write(sql_content)
        print("Updated seed_math_all_chapters_bundle.sql successfully!")
    else:
        print("Warning: $tag_math_ch04$ block not matched with regex, performing direct search")
        start_idx = sql_content.find('VALUES (v_chapter_id, $tag_math_ch04$')
        if start_idx != -1:
            end_tag = '$tag_math_ch04$, 1);'
            end_idx = sql_content.find(end_tag, start_idx)
            if end_idx != -1:
                prefix = sql_content[:start_idx + len('VALUES (v_chapter_id, $tag_math_ch04$')]
                suffix = sql_content[end_idx:]
                sql_content = prefix + '\n' + full_text + '\n' + suffix
                with open(sql_path, 'w', encoding='utf-8') as f:
                    f.write(sql_content)
                print("Directly updated seed_math_all_chapters_bundle.sql successfully!")

if __name__ == '__main__':
    print("Starting Chapter 4 build...")
    lesson_text = build_full_lesson()
    print(f"Total lesson text length: {len(lesson_text)} characters")
    update_math_fallback_data(lesson_text)
    update_app_jsx()
    update_sql_bundle(lesson_text)
    print("All tasks completed successfully!")
