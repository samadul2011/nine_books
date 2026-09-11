-- ============================================================
-- Seed Sample Exam Questions for Accounting (হিসাববিজ্ঞান)
-- Run this in Supabase SQL Editor to test the exam screen
-- ============================================================

DO $$
DECLARE
    v_ch1_id UUID;
    v_ch2_id UUID;
BEGIN
    -- Get Chapter 1 ID (Introduction to Accounting)
    SELECT id INTO v_ch1_id FROM chapters WHERE title_bn = 'হিসাববিজ্ঞান পরিচিতি' LIMIT 1;
    -- Get Chapter 2 ID (Transaction)
    SELECT id INTO v_ch2_id FROM chapters WHERE title_bn = 'লেনদেন' LIMIT 1;

    IF v_ch1_id IS NOT NULL THEN
        -- Chapter 1 Questions
        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES 
        (
            v_ch1_id,
            'হিসাববিজ্ঞানের জনক কাকে বলা হয়?',
            'Who is considered the father of accounting?',
            '["অ্যাডাম স্মিথ", "লুকা প্যাসিওলি", "আলফ্রেড মার্শাল", "এফ ডব্লিউ টেলর"]'::jsonb,
            1
        ),
        (
            v_ch1_id,
            'লুকা প্যাসিওলি কোন দেশের নাগরিক ছিলেন?',
            'Which country was Luca Pacioli from?',
            '["যুক্তরাজ্য", "ফ্রান্স", "ইতালি", "জার্মানি"]'::jsonb,
            2
        ),
        (
            v_ch1_id,
            'হিসাববিজ্ঞানের মূল উদ্দেশ্য কী?',
            'What is the primary objective of accounting?',
            '["লেনদেন সঠিকভাবে লিপিবদ্ধ করা ও আর্থিক অবস্থা নিরূপণ", "কেবল কর্মচারীদের বেতন হিসাব করা", "বাজার পর্যবেক্ষণ করা", "পণ্য উৎপাদন বন্ধ রাখা"]'::jsonb,
            0
        );
    END IF;

    IF v_ch2_id IS NOT NULL THEN
        -- Chapter 2 Questions
        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES 
        (
            v_ch2_id,
            'মৌলিক হিসাব সমীকরণ কোনটি?',
            'Which is the fundamental accounting equation?',
            '["A = L + E", "A = L - E", "E = A + L", "L = A + E"]'::jsonb,
            0
        ),
        (
            v_ch2_id,
            'নিচের কোনটি লেনদেন নয়?',
            'Which of the following is NOT a transaction?',
            '["১০,০০০ টাকার পণ্য বিক্রয়", "মালিক কর্তৃক ব্যক্তিগত প্রয়োজনে নগদ উত্তোলন", "পণ্য ক্রয়ের জন্য ফরমায়েশ প্রদান", "কর্মচারীদের মাসিক বেতন প্রদান"]'::jsonb,
            2
        );
    END IF;

END $$;
