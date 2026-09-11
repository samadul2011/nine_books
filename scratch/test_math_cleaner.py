import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

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
    # Remove any stray backslashes remaining before a letter
    text = re.sub(r'\\([a-zA-Z])', r'\1', text)

    return text

# Test tricky samples
sample_nested = r"\sqrt{\frac{1 - \sin A}{1 + \sin A}}"
sample_set = r"A = \{1, 2, 3\} \text{ এবং } B = \{2, 3, 4\}"
sample_le = r"\left\{\frac{n(n + 1)}{2}\right\}^2 \quad x \le y"
sample_root = r"\sqrt[3]{5^6} \text{ and } \sqrt[n]{a} = a^{1/n}"

print("Nested:", clean_math(sample_nested))
print("Set:", clean_math(sample_set))
print("Le & Left:", clean_math(sample_le))
print("Root:", clean_math(sample_root))
