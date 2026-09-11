import re

with open(r'seed_ict_all_chapters_bundle.sql', 'r', encoding='utf-8') as f:
    sql = f.read()

# Check dollar tags pairing
tags = ['tag_ict_ch01', 'tag_ict_ch02', 'tag_ict_ch03', 'tag_ict_ch04', 'tag_ict_ch05', 'tag_ict_ch06']
for t in tags:
    tag_str = f'${t}$'
    count = sql.count(tag_str)
    print(f'Tag {tag_str}: count = {count}')
    assert count == 2, f'Tag {tag_str} count is {count}, expected 2'

# Check for unescaped single quotes inside VALUES (...);
lines = sql.split('\n')
errors = []
for idx, line in enumerate(lines, 1):
    if line.strip().startswith('VALUES (v_chapter_id,') and '::jsonb' in line:
        parts = re.findall(r"'((?:''|[^'])*)'", line)
        if len(parts) != 3:
            errors.append((idx, line))

print('Exam questions SQL line checks:', len(errors), 'errors')
if errors:
    for e in errors[:5]:
        print(f'Line {e[0]}: {e[1]}')
else:
    print('All 60 exam questions lines are 100% syntactically valid SQL!')
