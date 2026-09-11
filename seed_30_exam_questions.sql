-- ============================================================
-- Complete 30 Questions Exam Bank (20 Yes/No + 10 Board MCQ)
-- For Chapter 2: লেনদেন (Transaction)
-- Class 9 Bangladesh Curriculum - Accounting (হিসাববিজ্ঞান)
-- Perfect for 5-Question Checkpoint Review (6 complete rounds)
-- ============================================================

DO $$
DECLARE
    v_ch2_id UUID;
BEGIN
    SELECT id INTO v_ch2_id FROM chapters WHERE title_bn = 'লেনদেন' LIMIT 1;

    IF v_ch2_id IS NULL THEN
        RAISE NOTICE 'Chapter 2 (লেনদেন) not found. Please run seed_accounting.sql first.';
        RETURN;
    END IF;

    -- Clean previous questions to have a clean, perfectly ordered 30-question bank
    DELETE FROM exam_questions WHERE chapter_id = v_ch2_id;

    -- ============================================================
    -- ROUND 1: Questions 1 - 5 (Yes/No Practice)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch2_id,
        '১. দোকান থেকে নগদ ২০০ টাকার চাল কেনা হলো—এটি কি লেনদেন?',
        'Bought 200 taka rice in cash from a store—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '২. মোবাইল ফোনের দাম জানার জন্য শো-রুমে গিয়ে ক্যাটালগ দেখা—এটি কি লেনদেন?',
        'Visiting a showroom to view the catalog for mobile price—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '৩. ব্যবসায়িক ব্যাংক হিসাব থেকে ৫,০০০ টাকা উত্তোলন করা হলো—এটি কি লেনদেন?',
        'Withdrawn 5,000 taka from the business bank account—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '৪. চাচা প্রতিজ্ঞা করলেন, "পরীক্ষায় জিপিএ-৫ পেলে ১,০০০ টাকা দেব"—এটি কি লেনদেন?',
        'Uncle promised 1,000 taka for GPA-5—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '৫. দোকানের মাসিক ভাড়া বাবদ ৩,০০০ টাকা বাড়িওয়ালাকে পরিশোধ করা হলো—এটি কি লেনদেন?',
        'Paid 3,000 taka shop rent to the landlord—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    );

    -- ============================================================
    -- ROUND 2: Questions 6 - 10 (Yes/No Practice)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch2_id,
        '৬. পুরনো খাতার দর কষাকষি করা হলো ৫০ টাকায়, কিন্তু বিক্রি করা হলো না—এটি কি লেনদেন?',
        'Bargained old notebook for 50 taka but did not sell—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '৭. অফিসের বিদ্যুৎ বিল বাবদ ১,২০০ টাকা বিকাশে পে করা হলো—এটি কি লেনদেন?',
        'Paid office electricity bill of 1,200 taka via bKash—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '৮. ১০,০০০ টাকা মূল্যের একটি টিভি ২ বছরের জন্য ভাড়া দেওয়ার চুক্তি করা হলো—এটি কি লেনদেন?',
        'Signed an agreement to rent a TV for 2 years—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '৯. কারখানার মেশিনের ৫,০০০ টাকা অবচয় (Depreciation) ধরা হলো—এটি কি লেনদেন?',
        'Estimated 5,000 taka depreciation on factory machinery—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '১০. ব্যবসায়ের মালিক বাড়িতে রান্না করা খাবার খেলেন—এটি কি ব্যবসায়িক লেনদেন?',
        'Business owner ate home-cooked meal—is this a business transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    );

    -- ============================================================
    -- ROUND 3: Questions 11 - 15 (Yes/No Practice)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch2_id,
        '১১. ৫০,০০০ টাকার পণ্য ধারে (বাকিতে) ক্রয় করা হলো—এটি কি লেনদেন?',
        'Purchased 50,000 taka goods on credit—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '১২. প্রতিষ্ঠানে একজন হিসাবরক্ষক নিয়োগের জন্য চাকরির আবেদন জমা নেওয়া হলো—এটি কি লেনদেন?',
        'Received job application for recruiting an accountant—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '১৩. ব্যবসায়ের পুরনো ডেলিভারি ভ্যান ২,০০,০০০ টাকায় বিক্রি করা হলো—এটি কি লেনদেন?',
        'Sold old delivery van for 200,000 taka—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '১৪. ডাক্তার রোগীকে দেখে ঔষধের একটি প্রেসক্রিপশন লিখে দিলেন—এটি কি লেনদেন?',
        'Doctor wrote a medical prescription for patient—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '১৫. কর্মীকে কাজের বিনিময়ে ১৫,০০০ টাকা মাসিক বেতন প্রদান করা হলো—এটি কি লেনদেন?',
        'Paid 15,000 taka monthly salary to employee—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    );

    -- ============================================================
    -- ROUND 4: Questions 16 - 20 (Yes/No Practice)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch2_id,
        '১৬. ব্যবসা প্রতিষ্ঠানের জন্য সরকারি কর অঞ্চল থেকে TIN সনদ সংগ্রহ করা হলো—এটি কি লেনদেন?',
        'Obtained corporate TIN certificate from tax authority—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '১৭. গুদামের ২০,০০০ টাকার পণ্য আগুনে পুড়ে বিনষ্ট হয়ে গেল—এটি কি লেনদেন?',
        'Goods worth 20,000 taka destroyed by fire in warehouse—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '১৮. আগামী মাস থেকে ৫ জন নতুন বিক্রয়কর্মী নিয়োগের সিদ্ধান্ত গ্রহণ করা হলো—এটি কি লেনদেন?',
        'Management decided to hire 5 new sales staff next month—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '১৯. ব্যবসা সম্প্রসারণের জন্য সোনালী ব্যাংক থেকে ৫০,০০০ টাকা ঋণ নেওয়া হলো—এটি কি লেনদেন?',
        'Took a 50,000 taka loan from Sonali Bank—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '২০. "আগামীকাল আপনার দোকানে যাব"—বন্ধুকে এই আশ্বাস প্রদান করা কি লেনদেন?',
        'Promising a friend "I will visit your shop tomorrow"—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    );

    -- ============================================================
    -- ROUND 5: Questions 21 - 25 (Advanced Yes/No & Conceptual)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch2_id,
        '২১. মালিকের ব্যক্তিগত তহবিল হতে ব্যবসায়ের ঋণের কিস্তি পরিশোধ করা হলো—এটি কি ব্যবসায়িক লেনদেন?',
        'Loan installment paid from owner personal fund—is this a business transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '২২. ২০,০০০ টাকার পণ্য ক্রয়ের জন্য সরবরাহকারীকে লিখিত ফরমায়েশ পাঠানো হলো—এটি কি লেনদেন?',
        'Purchase order sent to supplier for 20,000 taka goods—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '২৩. মালিক ব্যক্তিগত ব্যবহারের জন্য ব্যবসা থেকে নগদ ২,০০০ টাকা উত্তোলন করলেন—এটি কি লেনদেন?',
        'Owner withdrew 2,000 taka cash for personal use—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '২৪. ব্যবসায়ের দক্ষ ম্যানেজার মারা গেলেন—হিসাববিজ্ঞানের দৃষ্টিতে এটি কি লেনদেন?',
        'Skilled business manager passed away—is this a transaction in accounting?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '২৫. দেনাদারের নিকট হতে পাওনা ১০,০০০ টাকার মধ্যে ৫,০০০ টাকা চেকে আদায় হলো—এটি কি লেনদেন?',
        'Collected 5,000 taka by cheque from accounts receivable—is this a transaction?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    );

    -- ============================================================
    -- ROUND 6: Questions 26 - 30 (Board MCQ & Equation Questions)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch2_id,
        '২৬. হিসাব সমীকরণের মূল রূপ কোনটি?',
        'What is the core accounting equation?',
        '["A = L + E", "A = L - E", "E = A + L", "L = A + E"]'::jsonb,
        0
    ),
    (
        v_ch2_id,
        '২৭. বর্ধিত হিসাব সমীকরণে মালিকানাস্বত্ব (E)-কে প্রভাবিত করে কয়টি উপাদান?',
        'How many components affect Owner Equity (E) in expanded equation?',
        '["২টি", "৩টি", "৪টি (C, R, E, D)", "৫টি"]'::jsonb,
        2
    ),
    (
        v_ch2_id,
        '২৮. ধারে পণ্য বিক্রয়ের ফলে হিসাব সমীকরণে কী প্রভাব পড়ে?',
        'What is the effect on the equation when goods are sold on credit?',
        '["সম্পদ (A) বৃদ্ধি ও দায় (L) বৃদ্ধি", "সম্পদ (A) বৃদ্ধি ও মালিকানাস্বত্ব (E) বৃদ্ধি", "সম্পদ (A) হ্রাস ও দায় (L) হ্রাস", "শুধুমাত্র দায় (L) বৃদ্ধি"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '২৯. নিচের কোনটি অদৃশ্যমান (Invisible) লেনদেনের উদাহরণ?',
        'Which of the following is an example of an invisible transaction?',
        '["নগদে পণ্য ক্রয়", "মেশিনের ব্যবহারজনিত অবচয়", "ব্যাংকে টাকা জমা", "কর্মচারীর বেতন পরিশোধ"]'::jsonb,
        1
    ),
    (
        v_ch2_id,
        '৩০. "প্রত্যেক লেনদেনই একটি ঘটনা, কিন্তু প্রতিটি ঘটনা লেনদেন নয়"—উক্তিটির সঠিকতা কী?',
        'Every transaction is an event, but every event is not a transaction. This is:',
        '["সম্পূর্ণ সত্য", "সম্পূর্ণ অসত্য", "আংশিক সত্য", "শুধুমাত্র ব্যাংক লেনদেনের জন্য প্রযোজ্য"]'::jsonb,
        0
    );

    RAISE NOTICE 'Complete 30-Question Bank (6 Rounds of 5) successfully created for Chapter 2!';
END $$;
