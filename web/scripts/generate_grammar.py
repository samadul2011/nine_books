import json
import os
import re

c8_path = r"..\EasyGrammar\app\src\main\res\raw\topics.json"
c9_path = r"..\EasyGrammar\app\src\main\res\raw\classes_9_10_topics.json"

with open(c8_path, "r", encoding="utf-8") as f:
    c8 = json.load(f)

with open(c9_path, "r", encoding="utf-8") as f:
    c9_12 = json.load(f)

bn_titles = {
    "Parts of Speech (basic)": "Parts of Speech (পদ প্রকরণ / শব্দশ্রেণি)",
    "Sentences (subject—predicate, kinds)": "Sentences (বাক্য ও প্রকারভেদ)",
    "Changing Sentences": "Changing Sentences (বাক্য রূপান্তর)",
    "Articles (a/an/the, zero)": "Articles (পদাশ্রিত নির্দেশক: a, an, the)",
    "Prepositions (time/place/movement)": "Prepositions (পদান্বয়ী অব্যয়: সময়, স্থান ও গতি)",
    "Tense (simple)": "Tense (কাল ও সময় - প্রাথমিক)",
    "Subject—Verb Agreement (basic)": "Subject-Verb Agreement (কর্তা-ক্রিয়া সংগতি)",
    "Voice (simple)": "Voice (বাচ্য পরিবর্তন - সাধারণ)",
    "Narration (statements)": "Narration (উক্তি পরিবর্তন: উক্তি ও বর্ণনা)",
    "Modifiers (basic)": "Modifiers (মডিফায়ার্স - প্রাথমিক)",
    "Punctuation (basic)": "Punctuation (বিরামচিহ্ন - প্রাথমিক)",
    
    "Parts of Speech (Advanced)": "Parts of Speech: Advanced (উচ্চতর পদ প্রকরণ)",
    "Prepositions (collocations)": "Prepositions: Collocations (উপযুক্ত প্রিপজিশন)",
    "Parts of Speech (Professional Usage)": "Parts of Speech: Professional Usage (ব্যবহারিক প্রয়োগ)",
    "Parts of Speech (word form)": "Parts of Speech: Word Forms (শব্দের রূপান্তর)",
    "Sentences (phrase vs clause, simple/compound)": "Phrases & Clauses, Simple/Compound (বাক্যাংশ ও বাক্য)",
    "Articles (exceptions)": "Articles: Exceptions (আর্টিকেলের ব্যতিক্রমী নিয়ম)",
    "Tense": "Tense: All Tenses & Structures (সমগ্র কাল ও গঠন)",
    "Subject-Verb Agreement (tricky subjects)": "Subject-Verb Agreement: Tricky Subjects (জটিল কর্তা-ক্রিয়া সংগতি)",
    "Transformation of Sentences": "Transformation of Sentences (বাক্য রূপান্তর: Simple, Complex, Compound)",
    "Voice (Active and Passive)": "Voice: Active & Passive (বাচ্য পরিবর্তন: সম্পূর্ণ নিয়ম)",
    "Narration (Direct and Indirect)": "Narration: Direct & Indirect (প্রত্যক্ষ ও পরোক্ষ উক্তি)",
    "Combination of Sentences": "Combination of Sentences (বাক্য সংযোজন)",
    "Modifiers": "Modifiers: Pre & Post Modifiers (উচ্চতর মডিফায়ার)",
    
    "Advanced Grammar & Composition": "Advanced Grammar & Composition (উচ্চতর ব্যাকরণ ও কম্পোজিশন)",
    "Idioms and Phrases": "Idioms and Phrases (বাগধারা ও প্রবচন)",
    "Advanced Sentence Patterns": "Advanced Sentence Patterns (উন্নত বাক্য কাঠামো)",
    "Articles & Determiners (Advanced)": "Articles & Determiners (আর্টিকেল ও ডিটারমিনার্স)",
    "Prepositions (Advanced Patterns)": "Prepositions: Advanced Patterns (উচ্চতর প্রিপজিশন প্যাটার্ন)",
    "Punctuation for Academic Writing": "Punctuation for Academic Writing (একাডেমিক বিরামচিহ্ন)",
    "Word Order & Emphasis": "Word Order & Emphasis (শব্দের ক্রম ও ইনভার্সন)",
    "Determiners & Quantifiers": "Determiners & Quantifiers (কোয়ান্টিফায়ার্স ও পরিমাপক)",
    "Reported Speech (Advanced)": "Reported Speech: Advanced (উন্নত ন্যারেশন ও রিপোর্টিং)",
    "Modal Verbs (Advanced)": "Modal Verbs: Advanced (মডাল ভার্ব ও মোডাল অক্সিলিয়ারি)"
}

classes_order = [
    ("Class 8", c8["Class 8"]),
    ("Class 9-10", c9_12["Class 9-10"]),
    ("Class 11-12", c9_12["Class 11-12"])
]

chapters = []
lessons_map = {}
mcqs_map = {}

global_order = 1

for cls_name, topics in classes_order:
    cls_slug = cls_name.lower().replace(" ", "-").replace("--", "-")
    for t_index, (t_name, t_val) in enumerate(topics.items(), 1):
        clean_slug = re.sub(r"[^a-z0-9]+", "-", t_name.lower()).strip("-")
        chap_id = f"grammar-{cls_slug}-{t_index}-{clean_slug}"
        
        bn_title = bn_titles.get(t_name, t_name)
        en_title = f"{t_name} ({cls_name})"
        
        raw_lessons = [item.get("en", "") if isinstance(item, dict) else str(item) for item in t_val.get("lessons", [])]
        raw_examples = [item.get("en", "") if isinstance(item, dict) else str(item) for item in t_val.get("examples", [])]
        raw_practice = [item.get("en", "") if isinstance(item, dict) else str(item) for item in t_val.get("practice", [])]
        
        md_lines = [f"# {t_name}", f"**Level**: {cls_name} | **Topic**: {bn_title}\n"]
        
        md_lines.append("## 1. 📖 Grammar Rules & Explanations (নিয়মাবলী ও ব্যাখ্যা)")
        for i, rule in enumerate(raw_lessons, 1):
            if ":" in rule:
                head, body = rule.split(":", 1)
                md_lines.append(f"- **{head.strip()}:** {body.strip()}")
            else:
                md_lines.append(f"- {rule}")
                
        md_lines.append("\n## 2. 💡 Practical Examples (বাস্তব উদাহরণসমূহ)")
        for i, ex in enumerate(raw_examples, 1):
            md_lines.append(f"{i}. {ex}")
            
        md_lines.append("\n## 3. ✍️ Practice Drills (অনুশীলনমূলক কাজ)")
        for i, pr in enumerate(raw_practice, 1):
            md_lines.append(f"- **Exercise {i}:** {pr}")
            
        md_content = "\n\n".join(md_lines)
        
        lessons_map[chap_id] = [{
            "id": f"lesson-{chap_id}",
            "chapter_id": chap_id,
            "order_index": 1,
            "content_text": md_content,
            "rules": raw_lessons,
            "examples": raw_examples,
            "practice": raw_practice
        }]
        
        mcqs = []
        for q_idx, q in enumerate(t_val.get("tests", [])):
            q_text = q.get("en", "").strip()
            raw_opts = q.get("options", [])
            opts = [str(o).strip() for o in raw_opts]
            ans = str(q.get("answer", "")).strip()
            
            if t_name == "Articles (exceptions)" and q_idx == 42:
                opts = ["A, the", "An, the", "The, the", "Some, some"]
                ans = "The, the"
            elif t_name == "Combination of Sentences" and q_idx == 9:
                ans = "The boy ran fast because he wanted to escape"
                
            correct_idx = -1
            for oi, opt in enumerate(opts):
                if opt == ans:
                    correct_idx = oi
                    break
            if correct_idx == -1:
                for oi, opt in enumerate(opts):
                    if opt.lower() == ans.lower():
                        correct_idx = oi
                        break
            if correct_idx == -1:
                correct_idx = 0
                
            mcqs.append({
                "id": f"grammar-mcq-{chap_id}-{q_idx+1}",
                "chapter_id": chap_id,
                "question_text": q_text,
                "question_bn": q_text,
                "question_en": q_text,
                "options_json": opts,
                "correct_answer_index": correct_idx,
                "explanation": f"Correct Answer: {ans}"
            })
            
        mcqs_map[chap_id] = mcqs
        
        chapters.append({
            "id": chap_id,
            "subject_id": "grammar-subject-id",
            "title_bn": bn_title,
            "title_en": en_title,
            "class_level": cls_name,
            "topic_name": t_name,
            "order_index": global_order,
            "rules_count": len(raw_lessons),
            "examples_count": len(raw_examples),
            "practice_count": len(raw_practice),
            "tests_count": len(mcqs)
        })
        global_order += 1

out_file = os.path.join(os.path.dirname(__file__), "..", "src", "data", "grammarData.js")
out_file = os.path.abspath(out_file)

with open(out_file, "w", encoding="utf-8") as f:
    f.write("// Auto-generated comprehensive English Grammar data from EasyGrammar\n")
    f.write("// 34 Topics, 1,037+ MCQs, full rules, examples & practice drills\n\n")
    f.write("export const GRAMMAR_SUBJECT = {\n")
    f.write('  id: "grammar-subject-id",\n')
    f.write('  name_bn: "ইংরেজি ব্যাকরণ",\n')
    f.write('  name_en: "English Grammar",\n')
    f.write('  icon_url: "https://img.icons8.com/color/96/books.png"\n')
    f.write("};\n\n")
    f.write(f"export const GRAMMAR_CHAPTERS = {json.dumps(chapters, ensure_ascii=False, indent=2)};\n\n")
    f.write(f"export const GRAMMAR_LESSONS_MAP = {json.dumps(lessons_map, ensure_ascii=False, indent=2)};\n\n")
    f.write(f"export const GRAMMAR_MCQS_MAP = {json.dumps(mcqs_map, ensure_ascii=False, indent=2)};\n")

print(f"Generated {len(chapters)} chapters, {sum(len(m) for m in mcqs_map.values())} MCQs.")
print(f"Wrote to {out_file}, size: {os.path.getsize(out_file)} bytes")
