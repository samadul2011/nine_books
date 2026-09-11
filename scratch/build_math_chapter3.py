import json
from math_ex31 import EX_31
from math_ex32 import EX_32
from math_ex33 import EX_33
from math_ex34 import EX_34

CH3_HEADER = """# ৩য় অধ্যায়: বীজগাণিতিক রাশি

**গণিত • নবম-দশম শ্রেণি (NCTB ২০২৬ শিক্ষাক্রম)**
*বীজগাণিতিক সূত্রাবলি (বর্গ ও ঘন), অনুসিদ্ধান্ত, মান নির্ণয়, সরলীকরণ, উৎপাদকে বিশ্লেষণ (মধ্যপদ বিভাজন ও ভাগশেষ উপপাদ্য)।*

---

### 🎯 এ অধ্যায় শেষে আমরা যা শিখতে পারব (শিখনফল)

> বীজগাণিতিক সূত্রের সাহায্যে বর্গ ও ঘন নির্ণয় করতে পারব;
> অনুরূপ অনুসিদ্ধান্ত প্রয়োগ করে রাশি ও সমীকরণের মান নির্ণয় করতে পারব;
> জটিল বীজগাণিতিক রাশির সরলীকরণ সম্পাদন করতে পারব;
> মধ্যপদ বিভক্তিকরণ (Middle Term Factor) পদ্ধতিতে উৎপাদকে বিশ্লেষণ করতে পারব;
> ভাগশেষ উপপাদ্য (Remainder Theorem) প্রয়োগ করে ত্রিঘাত ও বহুঘাত রাশির উৎপাদক বের করতে পারব।

### 🔹 বিষয়: বীজগাণিতিক বর্গ ও ঘনের মৌলিক সূত্রাবলি
১. বর্গ সূত্রাবলি:
- (a + b)² = a² + 2ab + b²
- (a - b)² = a² - 2ab + b²
- a² - b² = (a + b)(a - b)
- (a + b + c)² = a² + b² + c² + 2(ab + bc + ca)
- 4ab = (a + b)² - (a - b)²
- 2(a² + b²) = (a + b)² + (a - b)²

২. ঘন সূত্রাবলি ও অনুসিদ্ধান্ত:
- (a + b)³ = a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a + b)
- (a - b)³ = a³ - 3a²b + 3ab² - b³ = a³ - b³ - 3ab(a - b)
- a³ + b³ = (a + b)(a² - ab + b²) = (a + b)³ - 3ab(a + b)
- a³ - b³ = (a - b)(a² + ab + b²) = (a - b)³ + 3ab(a - b)

### 🔹 বিষয়: উৎপাদকে বিশ্লেষণ ও ভাগশেষ উপপাদ্য
উৎপাদকে বিশ্লেষণ হলো একটি বীজগাণিতিক রাশিকে দুই বা ততোধিক রাশির গুণফল আকারে প্রকাশ করা।
১. সাধারণ উৎপাদক কমন নিয়ে: ab + ac = a(b + c)
২. সূত্র প্রয়োগ করে: a² - b² = (a + b)(a - b), a³ ± b³ সূত্রাবলি
৩. মধ্যপদ বিভক্তিকরণ (Middle Term Factor): ax² + bx + c আকারের রাশিতে b কে দুটি রাশিতে বিভক্ত করা যাদের গুণফল ac।
৪. ভাগশেষ উপপাদ্য (Remainder Theorem): কোনো ধনাত্মক মাত্রার বহুপদী f(x) কে (x - a) দ্বারা ভাগ করলে ভাগশেষ হয় f(a)। যদি f(a) = 0 হয়, তবে (x - a) হবে f(x) এর একটি উৎপাদক।

### 📐 পাঠ্যবইয়ের অনুশীলনীভিত্তিক সকল গাণিতিক সমস্যাবলি ও সমাধান (অনুশীলনী ৩.১, ৩.২, ৩.৩ ও ৩.৪)
"""

all_problems = []
all_problems.append("\n### 📘 অনুশীলনী ৩.১ (বর্গ নির্ণয়, সরল ও মান নির্ণয়)\n")
for p in EX_31:
    all_problems.append(p.strip())

all_problems.append("\n### 📘 অনুশীলনী ৩.২ (ঘন নির্ণয়, সরল ও মান নির্ণয়)\n")
for p in EX_32:
    all_problems.append(p.strip())

all_problems.append("\n### 📘 অনুশীলনী ৩.৩ (উৎপাদকে বিশ্লেষণ: সাধারণ ও মধ্যপদ বিভাজন)\n")
for p in EX_33:
    all_problems.append(p.strip())

all_problems.append("\n### 📘 অনুশীলনী ৩.৪ (উৎপাদকে বিশ্লেষণ: ভাগশেষ উপপাদ্য)\n")
for p in EX_34:
    all_problems.append(p.strip())

full_ch3_markdown = CH3_HEADER + "\n\n" + "\n\n".join(all_problems) + "\n"

print(f"Total problems generated: {len(EX_31) + len(EX_32) + len(EX_33) + len(EX_34)}")
print(f"Full markdown length: {len(full_ch3_markdown)} chars")

# 1. Update mathFallbackData.js
fallback_path = "web/src/data/mathFallbackData.js"
with open(fallback_path, "r", encoding="utf-8") as f:
    fallback_content = f.read()

# Split strictly by key markers
marker_start = "export const MATH_CH3_FALLBACK_LESSON = "
marker_end = "\nexport const MATH_CH1_FALLBACK_MCQS ="

if marker_start in fallback_content and marker_end in fallback_content:
    before = fallback_content.split(marker_start)[0]
    after = fallback_content.split(marker_end)[1]
    
    # Encode cleanly using json.dumps
    json_val = json.dumps(full_ch3_markdown, ensure_ascii=False)
    
    updated_fallback = before + marker_start + json_val + ";\n" + marker_end + after
    with open(fallback_path, "w", encoding="utf-8") as f:
        f.write(updated_fallback)
    print("Updated web/src/data/mathFallbackData.js successfully with valid escaped JSON!")
else:
    print("Error: markers not found in fallback file")

# 2. Update seed_math_all_chapters_bundle.sql
sql_path = "seed_math_all_chapters_bundle.sql"
with open(sql_path, "r", encoding="utf-8") as f:
    sql_content = f.read()

tag = "$tag_math_ch03$"
if tag in sql_content:
    parts = sql_content.split(tag)
    new_sql = parts[0] + tag + "\n" + full_ch3_markdown + tag + parts[2]
    with open(sql_path, "w", encoding="utf-8") as f:
        f.write(new_sql)
    print("Updated seed_math_all_chapters_bundle.sql successfully!")
else:
    print(f"Warning: {tag} not found in {sql_path}")
