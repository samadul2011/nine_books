# -*- coding: utf-8 -*-
"""
generate_all_nctb_math_exercises.py
Generates full line-by-line textbook lessons and comprehensive NCTB exercise problems
with hidden step-by-step solutions for all 17 chapters of Class 9-10 Mathematics.
"""

import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

def clean_math(text):
    if not text:
        return ""
    
    text = text.replace('$$', '')
    text = text.replace('$', '')
    text = re.sub(r'\\text\{([^}]+)\}', r'\1', text)
    text = text.replace(r'\left', '').replace(r'\right', '')
    text = text.replace(r'\{', '{').replace(r'\}', '}')
    text = text.replace(r'\;', ' ').replace(r'\,', ' ').replace(r'\:', ' ')
    text = text.replace(r'\quad', '  ')
    text = text.replace(r'\\', '')

    text = text.replace(r'\mathbb{N}', 'ℕ')
    text = text.replace(r'\mathbb{Z}', 'ℤ')
    text = text.replace(r'\mathbb{Q}', 'ℚ')
    text = text.replace(r'\mathbb{R}', 'ℝ')

    idx_map = {'3': '³', '4': '⁴', 'n': 'ⁿ'}
    def replace_root_idx(m):
        idx = m.group(1)
        body = m.group(2)
        sym = idx_map.get(idx, f"({idx})")
        return f"{sym}√({body})"
    text = re.sub(r'\\sqrt\[([0-9a-zA-Z]+)\]\{([^}]+)\}', replace_root_idx, text)

    for _ in range(4):
        text = re.sub(r'\\frac\{([^{}]+)\}\{([^{}]+)\}', r'(\1 / \2)', text)

    text = re.sub(r'\\sqrt\{([^}]+)\}', r'√(\1)', text)
    text = re.sub(r'\\sqrt([0-9a-zA-Z])', r'√\1', text)

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

    text = re.sub(r'\(\s*([a-zA-Z0-9²³⁴ⁿ]+)\s*/\s*([a-zA-Z0-9²³⁴ⁿ]+)\s*\)', r'\1/\2', text)
    text = re.sub(r'\\([a-zA-Z])', r'\1', text)

    return text

print("Clean math function initialized.")
