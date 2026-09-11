-- ============================================================
-- Complete 30 Practice Questions Bank (25 Yes/No + 5 Board MCQs)
-- For Chapter 6: জাবেদা (Journal)
-- Class 9 Bangladesh Curriculum - Accounting (হিসাববিজ্ঞান)
-- Perfect for 6 Rounds of 5-Question Checkpoint Review
-- ============================================================

DO $$
DECLARE
    v_ch6_id UUID;
BEGIN
    SELECT id INTO v_ch6_id FROM chapters WHERE title_bn = 'জাবেদা' LIMIT 1;

    IF v_ch6_id IS NULL THEN
        RAISE NOTICE 'Chapter 6 (জাবেদা) not found. Please run seed_accounting.sql first.';
        RETURN;
    END IF;

    -- Clean previous questions to have an ordered, balanced 30-question bank
    DELETE FROM exam_questions WHERE chapter_id = v_ch6_id;

    -- ============================================================
    -- ROUND 1: Questions 1 - 5 (Yes/No Core Journal Principles)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch6_id,
        '১. জাবেদাকে কি হিসাবের প্রাথমিক বা মৌলিক বই (Book of Original Entry) বলা হয়?',
        'Is the journal called the book of original entry in accounting?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '২. নগদে পণ্য ক্রয় করলে কি "পণ্য হিসাব" নামে কোনো হিসাব খোলা যায়?',
        'Can an account named "Goods Account" be opened when goods are purchased in cash?',
        '["হ্যাঁ (Yes)", "না (No) - ক্রয় হিসাব লিখতে হয়"]'::jsonb,
        1
    ),
    (
        v_ch6_id,
        '৩. সাধারণ জাবেদার ছকে কি মোট ৫টি কলাম থাকে?',
        'Are there 5 columns in a standard general journal table?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '৪. একটি জাবেদা দাখিলায় মোট ডেবিট টাকার পরিমাণ ও মোট ক্রেডিট টাকার পরিমাণ কি সর্বদা সমান হতে হয়?',
        'Must total debit amount always equal total credit amount in a journal entry?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '৫. যে জাবেদায় একাধিক ডেবিট বা একাধিক ক্রেডিট পক্ষ থাকে, তাকে কি যৌগিক জাবেদা (Compound Entry) বলে?',
        'Is a journal entry with multiple debits or credits called a compound entry?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    );

    -- ============================================================
    -- ROUND 2: Questions 6 - 10 (Yes/No Basic Transactions)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch6_id,
        '৬. মালিক ব্যবসা হতে ব্যক্তিগত ব্যবহারের জন্য পণ্য উত্তোলন করলে কি "ক্রয় হিসাব" ক্রেডিট হয়?',
        'When the owner withdraws goods for personal use, is Purchase Account credited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '৭. ধারে পণ্য ক্রয় করলে কি পাওনাদার / প্রদেয় হিসাব ডেবিট হবে?',
        'When goods are bought on credit, is Accounts Payable debited?',
        '["হ্যাঁ (Yes)", "না (No) - পাওনাদার ক্রেডিট হবে"]'::jsonb,
        1
    ),
    (
        v_ch6_id,
        '৮. দেনাদারের নিকট হতে চেকে টাকা আদায় হলে কি ব্যাংক হিসাবকে ডেবিট করতে হয়?',
        'When money is collected by cheque from a debtor, is Bank Account debited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '৯. কর্মচারীদের বকেয়া বেতন নগদে পরিশোধ করা হলে কি নগদান হিসাব ক্রেডিট হবে?',
        'When outstanding salary is paid in cash, is Cash Account credited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '১০. ব্যবসায়ের পুরনো আসবাবপত্র নগদে বিক্রি করলে কি "বিক্রয় হিসাব" ক্রেডিট হয়?',
        'When old furniture is sold for cash, is Sales Account credited?',
        '["হ্যাঁ (Yes)", "না (No) - আসবাবপত্র হিসাব ক্রেডিট হবে"]'::jsonb,
        1
    );

    -- ============================================================
    -- ROUND 3: Questions 11 - 15 (Yes/No Discount & Banking)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch6_id,
        '১১. পণ্যের চালান মূল্যের ওপর যে "কারবারি বাট্টা" দেওয়া হয়, তা কি জাবেদায় লেখা হয়?',
        'Is Trade Discount written in the journal entry?',
        '["হ্যাঁ (Yes)", "না (No) - সরাসরি বাদ দিয়ে নিট মূল্যে লিখতে হয়"]'::jsonb,
        1
    ),
    (
        v_ch6_id,
        '১২. দেনাদারের কাছ থেকে দ্রুত টাকা আদায়ে যে নগদ ছাড় দেওয়া হয়, তা কি "প্রদত্ত বাট্টা" হিসেবে ডেবিট হয়?',
        'Is cash discount given to debtors debited as Discount Allowed?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '১৩. ব্যাংক থেকে ঋণ গ্রহণ করলে কি ব্যাংক ঋণ হিসাব ক্রেডিট (দায় বৃদ্ধি) হয়?',
        'When a bank loan is received, is Bank Loan credited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '১৪. ব্যাংক ঋণের সুদ পরিশোধ করলে কি "সুদ খরচ হিসাব" ডেবিট হয়?',
        'When paying interest on bank loan, is Interest Expense debited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '১৫. ব্যাংক কর্তৃক হিসাব পরিচালন ফি বাবদ "ব্যাংক চার্জ" কর্তন করলে কি ব্যাংক হিসাব বৃদ্ধি পায়?',
        'When bank deducts bank charges, does the bank account balance increase?',
        '["হ্যাঁ (Yes)", "না (No) - ব্যাংক হিসাব কমে তাই ক্রেডিট হবে"]'::jsonb,
        1
    );

    -- ============================================================
    -- ROUND 4: Questions 16 - 20 (Yes/No Returns, Loss & Drawings)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch6_id,
        '১৬. সরবরাহকারীকে ত্রুটিপূর্ণ ক্রয়কৃত পণ্য ফেরত দিলে কি "ক্রয় ফেরত হিসাব" ক্রেডিট হয়?',
        'When defective goods are returned to supplier, is Purchase Return credited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '১৭. গ্রাহক কর্তৃক বিক্রিত পণ্য ফেরত আসলে কি "বিক্রয় ফেরত হিসাব" ডেবিট হয়?',
        'When customer returns defective sold goods, is Sales Return debited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '১৮. গুদামের পণ্য আগুনে পুড়ে নষ্ট হলে কি "ক্রয় হিসাব" ক্রেডিট করতে হয়?',
        'When goods are damaged by fire, is Purchase Account credited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '১৯. ব্যবসায়ের ক্যাশবাক্স থেকে নগদ অর্থ চুরি হলে কি তা "বিবিধ ক্ষতি" হিসেবে ডেবিট হয়?',
        'When cash is stolen from the cashbox, is it debited as Miscellaneous Loss?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '২০. মালিকের ব্যক্তিগত জীবন বিমা প্রিমিয়াম ব্যবসা হতে দিলে কি তা কারবারের "বিমা খরচ" হিসেবে ডেবিট হবে?',
        'If owners personal life insurance premium is paid by business, is it debited as Insurance Expense?',
        '["হ্যাঁ (Yes)", "না (No) - এটি উত্তোলন হিসাব ডেবিট হবে"]'::jsonb,
        1
    );

    -- ============================================================
    -- ROUND 5: Questions 21 - 25 (Yes/No Advanced Transactions)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch6_id,
        '২১. বিনামূল্যে ক্রেতাদের মাঝে পণ্য বিতরণ করলে কি "বিজ্ঞাপন খরচ" হিসাব ডেবিট হয়?',
        'When goods are distributed free to customers, is Advertisement Expense debited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '২২. গ্রাহকের কাছ থেকে পণ্য সরবরাহের জন্য অগ্রিম টাকা পাওয়া গেলে তা কি সঙ্গে সঙ্গেই "বিক্রয় আয়" হিসেবে ক্রেডিট হয়?',
        'When advance cash is received from a customer, is it immediately credited as Sales Revenue?',
        '["হ্যাঁ (Yes)", "না (No) - পণ্য দেওয়ার আগ পর্যন্ত এটি দায় (অগ্রিম প্রাপ্তি)"]'::jsonb,
        1
    ),
    (
        v_ch6_id,
        '২৩. নতুন যন্ত্রপাতির উৎপাদন ক্ষমতা স্থায়ীভাবে বাড়ানোর জন্য নতুন যন্ত্রাংশ বসানো কি "যন্ত্রপাতি হিসাব" ডেবিট হয়?',
        'Is installing new parts to permanently increase machinery capacity debited to Machinery Account?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '২৪. দেনাদারের নিকট হতে যে টাকা আর কখনো পাওয়া যাবে না (কুঋণ), তা কি "অনাদায়ী পাওনা" হিসেবে ডেবিট হয়?',
        'Is uncollectible debt from a customer debited as Bad Debt Expense?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '২৫. কর্মচারীদের চলতি মাসের বেতন বকেয়া থাকলে কি "বকেয়া বেতন হিসাব" ক্রেডিট হয়?',
        'When employee salary remains outstanding, is Outstanding Salary credited?',
        '["হ্যাঁ (Yes)", "না (No)"]'::jsonb,
        0
    );

    -- ============================================================
    -- ROUND 6: Questions 26 - 30 (Board Standard Analytical MCQs)
    -- ============================================================
    INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
    VALUES
    (
        v_ch6_id,
        '২৬. ৫০,০০০ টাকার পণ্য বাকিতে ক্রয় করে ২,০০০ টাকা পরিবহন খরচ নগদে দেওয়া হলো। এখানে ডেবিট হবে কোনটি?',
        'Goods purchased on credit for 50,000 and 2,000 transport paid in cash. Which are debited?',
        '["ক্রয় হিসাব ৫০,০০০ ও পরিবহন খরচ ২,০০০", "ক্রয় হিসাব ৫২,০০০", "প্রদেয় হিসাব ৫০,০০০", "নগদান হিসাব ২,০০০"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '২৭. দেনাদার শফিককে ৩% নগদ বাট্টায় ৯,৭০০ টাকা আদায় হলো (পাওনা ১০,০০০ টাকা)। এখানে "প্রদত্ত বাট্টা" কত?',
        'Collected 9,700 from debtor Shafiq allowing 3% discount (due was 10,000). What is the discount?',
        '["৩০০ টাকা (ডেবিট)", "৩০০ টাকা (ক্রেডিট)", "৭০০ টাকা (ডেবিট)", "কোন বাট্টা নেই"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '২৮. মালিকের ব্যক্তিগত মোটরসাইকেল ২,০০,০০০ টাকায় বিক্রি করে টাকা নিজের ব্যক্তিগত ব্যাংকে রাখলেন। এটি জাবেদায় কী হবে?',
        'Owner sold his personal motorcycle for 200,000 and kept money in his personal account. What is the entry?',
        '["এটি কোনো লেনদেন নয়, তাই জাবেদায় আসবে না", "নগদান ডেবিট, মূলধন ক্রেডিট", "মোটরসাইকেল ডেবিট, নগদান ক্রেডিট", "উত্তোলন ডেবিট, নগদান ক্রেডিট"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '২৯. বিনামূল্যে পণ্য বিতরণের সঠিক জাবেদা দাখিলা কোনটি?',
        'What is the correct journal entry for free distribution of goods?',
        '["বিজ্ঞাপন হিসাব ডেবিট, ক্রয় হিসাব ক্রেডিট", "দান হিসাব ডেবিট, বিক্রয় হিসাব ক্রেডিট", "বিজ্ঞাপন হিসাব ডেবিট, নগদান হিসাব ক্রেডিট", "বিক্রয় হিসাব ডেবিট, বিজ্ঞাপন হিসাব ক্রেডিট"]'::jsonb,
        0
    ),
    (
        v_ch6_id,
        '৩০. জাবেদায় খতিয়ান পৃষ্ঠা (L.F.) কলামটি রাখার মূল উদ্দেশ্য কী?',
        'What is the primary purpose of the Ledger Folio (L.F.) column in a journal?',
        '["খতিয়ানের কোন পৃষ্ঠায় লেনদেনটি স্থানান্তরিত হয়েছে তা নির্দেশ করা", "মোট লাভ হিসাব করা", "কাউন্টার ভাউচার নম্বর লেখা", "তারিখ নির্দেশ করা"]'::jsonb,
        0
    );

    RAISE NOTICE 'Complete 30-Question Bank (25 Yes/No + 5 MCQs across 6 Rounds) successfully seeded for Chapter 6!';
END $$;
