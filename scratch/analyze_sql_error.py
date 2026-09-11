import re

with open('seed_math_all_chapters_bundle.sql', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all occurrences of $$
matches = [m.start() for m in re.finditer(r'\$\$', content)]
print(f"Total occurrences of $$: {len(matches)}")
for idx in matches[:15]:
    line_no = content[:idx].count('\n') + 1
    snippet = content[idx:idx+35].replace('\n', ' ')
    print(f"Line {line_no}: {repr(snippet)}")
