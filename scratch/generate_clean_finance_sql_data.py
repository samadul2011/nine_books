# -*- coding: utf-8 -*-
"""
Class 9-10 Finance and Banking Complete 13 Chapters Data
2 Table-Based Creative Questions (CQ 1 & CQ 2) per chapter
Total 26 CQs + Full Line-by-Line Theory + 52 Exam MCQs
"""

from make_finance_data import CHAPTERS as CH1_TO_CH3
from chapters_ch4_to_ch7 import PART1_CHAPTERS
from chapters_ch8_to_ch13 import PART2_CHAPTERS

CHAPTERS_DATA = CH1_TO_CH3 + PART1_CHAPTERS + PART2_CHAPTERS

assert len(CHAPTERS_DATA) == 13, f"Expected 13 chapters, got {len(CHAPTERS_DATA)}"

for ch in CHAPTERS_DATA:
    assert len(ch["cqs"]) == 2, f"Chapter {ch['order']} has {len(ch['cqs'])} CQs, expected 2"
    assert len(ch["mcqs"]) == 4, f"Chapter {ch['order']} has {len(ch['mcqs'])} MCQs, expected 4"

print("All 13 Chapters successfully validated with 2 CQs each (Total 26 CQs)!")
