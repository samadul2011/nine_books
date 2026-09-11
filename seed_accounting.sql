-- ============================================================
-- Seed Data: Accounting (হিসাববিজ্ঞান) - Class 9 Curriculum
-- ============================================================

DO $$
DECLARE
    v_subject_id UUID;
    v_ch1_id UUID;
    v_ch2_id UUID;
    v_ch3_id UUID;
    v_ch4_id UUID;
    v_ch5_id UUID;
    v_ch6_id UUID;
    v_ch7_id UUID;
    v_ch8_id UUID;
    v_ch9_id UUID;
    v_ch10_id UUID;
    v_ch11_id UUID;
    v_ch12_id UUID;
BEGIN
    -- 1. Insert or get Subject
    INSERT INTO subjects (name_bn, name_en, icon_url)
    VALUES ('হিসাববিজ্ঞান', 'Accounting', 'https://img.icons8.com/color/96/accounting.png')
    RETURNING id INTO v_subject_id;

    -- 2. Insert 12 Chapters with their IDs
    -- ১ম অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'হিসাববিজ্ঞান পরিচিতি', 'Introduction to Accounting', 1)
    RETURNING id INTO v_ch1_id;

    -- ২য় অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'লেনদেন', 'Transaction', 2)
    RETURNING id INTO v_ch2_id;

    -- ৩য় অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'দুতরফা দাখিলা পদ্ধতি', 'Double Entry System', 3)
    RETURNING id INTO v_ch3_id;

    -- ৪র্থ অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'মূলধন ও মুনাফা', 'Capital and Revenue', 4)
    RETURNING id INTO v_ch4_id;

    -- ৫ম অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'হিসাব', 'Accounts', 5)
    RETURNING id INTO v_ch5_id;

    -- ৬ষ্ঠ অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'জাবেদা', 'Journal', 6)
    RETURNING id INTO v_ch6_id;

    -- ৭ম অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'খতিয়ান', 'Ledger', 7)
    RETURNING id INTO v_ch7_id;

    -- ৮ম অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'নগদান বই', 'Cash Book', 8)
    RETURNING id INTO v_ch8_id;

    -- ৯ম অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'রেওয়ামিল', 'Trial Balance', 9)
    RETURNING id INTO v_ch9_id;

    -- ১০ম অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'আর্থিক বিবরণী', 'Financial Statement', 10)
    RETURNING id INTO v_ch10_id;

    -- ১১শ অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'পণ্যের ক্রয়মূল্য, উৎপাদন ব্যয় ও বিক্রয়মূল্য', 'Cost of Goods Sold', 11)
    RETURNING id INTO v_ch11_id;

    -- ১২শ অধ্যায়
    INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
    VALUES (v_subject_id, 'পারিবারিক ও আত্মকর্মসংস্থানমূলক উদ্যোগের হিসাব', 'Family & Self-employment', 12)
    RETURNING id INTO v_ch12_id;

    -- 3. Seed starter Lessons for each chapter
    INSERT INTO lessons (chapter_id, content_text, order_index) VALUES
    (v_ch1_id, '১ম অধ্যায়: হিসাববিজ্ঞান পরিচিতি (Introduction to Accounting)
হিসাববিজ্ঞান হলো এমন একটি প্রক্রিয়া যার মাধ্যমে ব্যক্তি বা প্রতিষ্ঠানের যাবতীয় আর্থিক কার্যাবলি সুষ্ঠু ও সুনির্দিষ্ট নিয়মে লিপিবদ্ধ, শ্রেণিবিভাগ ও সারসংক্ষেপ প্রস্তুত করে সামগ্রিক ফলাফল নিরূপণ করা হয়। 
লুকা প্যাসিওলি (Luca Pacioli)-কে হিসাববিজ্ঞানের জনক বলা হয়। ১৪৯৪ সালে তিনি "Summa de Arithmetica, Geometria, Proportioni et Proportionalita" গ্রন্থে দুতরফা দাখিলা পদ্ধতির মূলনীতি ব্যাখ্যা করেন।', 1),
    
    (v_ch2_id, '২য় অধ্যায়: লেনদেন (Transaction)
ব্যবসায়ের আর্থিক অবস্থায় পরিবর্তন ঘটায় এমন প্রতিটি ঘটনাই হলো লেনদেন। প্রতিটি লেনদেনে দুটি পক্ষ থাকে এবং অর্থের অঙ্কে পরিমাপযোগ্য হতে হয়।
হিসাব সমীকরণ: A = L + E (সম্পদ = দায় + মালিকানাস্বত্ব)।', 1),
    
    (v_ch3_id, '৩য় অধ্যায়: দুতরফা দাখিলা পদ্ধতি (Double Entry System)
দুতরফা দাখিলা পদ্ধতি হিসাবরক্ষণের একটি পূর্ণাঙ্গ, নির্ভুল ও বিজ্ঞানসম্মত পদ্ধতি। এই পদ্ধতির মূলনীতি অনুযায়ী প্রতিটি লেনদেনের সমপরিমাণ মূল্যে দুটি পক্ষ থাকে—একটি পক্ষ সুবিধা গ্রহণকারী (ডেবিট) এবং অপর পক্ষ সুবিধা প্রদানকারী (ক্রেডিট)।', 1),

    (v_ch4_id, '৪র্থ অধ্যায়: মূলধন ও মুনাফা জাতীয় লেনদেন (Capital and Revenue)
যেসব লেনদেন দীর্ঘমেয়াদী সুবিধা দেয়, অনিয়মিত এবং বড় অঙ্কের অর্থ সংশ্লিষ্ট, সেগুলো মূলধন জাতীয়। অপরদিকে যেসব লেনদেন স্বল্পমেয়াদী সুবিধা দেয় এবং নিয়মিত ঘটে থাকে, সেগুলো মুনাফা জাতীয় লেনদেন।', 1),

    (v_ch5_id, '৫ম অধ্যায়: হিসাব (Accounts)
লেনদেনসমূহকে পৃথক পৃথক শিরোনামে স্থায়ীভাবে সংরক্ষণ করার ছককে হিসাব বলে। সাধারণত হিসাবকে সম্পদ, দায়, মালিকানাস্বত্ব, আয় ও ব্যয়—এই ৫ শ্রেণিতে বিভক্ত করা হয়।', 1),

    (v_ch6_id, '৬ষ্ঠ অধ্যায়: জাবেদা (Journal)
জাবেদা হলো হিসাবের প্রাথমিক বই। প্রতিদিনের লেনদেনগুলো তারিখ অনুযায়ী ডেবিট ও ক্রেডিট বিশ্লেষণ করে সংক্ষিপ্ত বিবরণসহ সর্বপ্রথম জাবেদায় লিপিবদ্ধ করা হয়।', 1),

    (v_ch7_id, '৭ম অধ্যায়: খতিয়ান (Ledger)
খতিয়ান হলো হিসাবের পাকা বই বা চূড়ান্ত বই। জাবেদায় অন্তর্ভুক্ত লেনদেনসমূহকে শ্রেণিবিন্যাস করে নির্দিষ্ট শিরোনামে পৃথকভাবে খতিয়ানে পাকাপাকিভাবে স্থানান্তর করা হয়।', 1),

    (v_ch8_id, '৮ম অধ্যায়: নগদান বই (Cash Book)
যে প্রাথমিক বইতে শুধুমাত্র সকল প্রকার নগদ ও ব্যাংকের প্রাপ্তি ও প্রদান লিপিবদ্ধ করা হয়, তাকে নগদান বই বলে। এতে কখনোই কোনো অনগদ বা বাকির লেনদেন লিপিবদ্ধ হয় না।', 1),

    (v_ch9_id, '৯ম অধ্যায়: রেওয়ামিল (Trial Balance)
খতিয়ান হিসাবগুলোর গাণিতিক শুদ্ধতা যাচাই করার উদ্দেশ্যে একটি নির্দিষ্ট তারিখে সকল খতিয়ান জের নিয়ে ডেবিট ও ক্রেডিট দুই ভাগে সাজিয়ে যে বিবরণী প্রস্তুত করা হয়, তাকে রেওয়ামিল বলে।', 1),

    (v_ch10_id, '১০ম অধ্যায়: আর্থিক বিবরণী (Financial Statement)
একটি নির্দিষ্ট সময়ের শেষে ব্যবসায়ের সঠিক লাভ-ক্ষতি ও আর্থিক অবস্থা জানার জন্য প্রস্তুত বিবরণী। এর মূল অংশগুলো হলো: বিশদ আয় বিবরণী, মালিকানাস্বত্ব বিবরণী এবং আর্থিক অবস্থার বিবরণী (ব্যালেন্স শিট)।', 1),

    (v_ch11_id, '১১শ অধ্যায়: পণ্যের ক্রয়মূল্য, উৎপাদন ব্যয় ও বিক্রয়মূল্য (Cost of Goods Sold)
উৎপাদনকারী ও ট্রেডিং প্রতিষ্ঠানে পণ্যের প্রকৃত মূল্য নির্ধারণে ক্রয়মূল্য ও প্রত্যক্ষ ব্যয়সমূহ যোগ করে উৎপাদন ব্যয় এবং তার সাথে কাঙ্ক্ষিত মুনাফা যোগ করে বিক্রয়মূল্য নির্ধারণ করা হয়।', 1),

    (v_ch12_id, '১২শ অধ্যায়: পারিবারিক ও আত্মকর্মসংস্থানমূলক উদ্যোগের হিসাব (Family & Self-employment)
পারিবারিক শান্তি ও শৃঙ্খলা রক্ষায় পারিবারিক আয়-ব্যয়ের বাজেট প্রস্তুত করা এবং ছোট ব্যবসার আর্থিক নিরাপত্তার জন্য সহজ পদ্ধতিতে হিসাব সংরক্ষণ করা অত্যন্ত জরুরি।', 1);

END $$;
