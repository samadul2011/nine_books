-- ============================================================
-- Complete Exam Question Bank for Bangla Sahitto (বাংলা সাহিত্য)
-- High-Yield Board Standard MCQs for All 53 Chapters (গদ্য ও কবিতা)
-- Pure SQL: 100% Compatible with Supabase SQL Editor (Standard ANSI/PostgreSQL DML)
-- ============================================================

-- 1. Clean existing questions for Bangla Sahitto
DELETE FROM exam_questions 
WHERE chapter_id IN (
    SELECT c.id FROM chapters c
    JOIN subjects s ON s.id = c.subject_id
    WHERE s.name_en = 'Bangla Sahitto'
);

-- ======================================================
-- Chapter 1 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘প্রত্যুপকার’ শব্দের সঠিক অর্থ কোনটি?', '‘প্রত্যুপকার’ শব্দের সঠিক অর্থ কোনটি?', '["উপকারের বদলে উপকার", "উপকারের বদলে ক্ষতি", "উপকারের আশা করা", "উপকার স্বীকার না করা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 1;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'খলিফা মামুন কোন বংশের খলিফা ছিলেন?', 'খলিফা মামুন কোন বংশের খলিফা ছিলেন?', '["উমাইয়া", "আব্বাসীয়", "ফাতেমীয়", "উসমানীয়"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 1;

-- ======================================================
-- Chapter 2 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘ফুলের বিবাহ’ রচনাটি কোন জাতীয় সাহিত্যকর্ম?', '‘ফুলের বিবাহ’ রচনাটি কোন জাতীয় সাহিত্যকর্ম?', '["ঐতিহাসিক গল্প", "হাস্যরসাত্মক রূপক গল্প", "ভ্রমণকাহিনী", "শোকগাথা"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 2;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়কে বাংলা সাহিত্যের কী বলা হয়?', 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়কে বাংলা সাহিত্যের কী বলা হয়?', '["গদ্যের জনক", "সাহিত্যসম্রাট", "বিদ্রোহী কবি", "ভোরের পাখি"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 2;

-- ======================================================
-- Chapter 3 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘শুভা’ গল্পে শুভার আসল নাম কী ছিল?', '‘শুভা’ গল্পে শুভার আসল নাম কী ছিল?', '["সুকেশী", "সুহাসিনী", "সুভাষিণী", "সুরভী"]'::jsonb, 2
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 3;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'শুভার প্রিয় দুই বান্ধবীর মতো গাভী দুটির নাম কী ছিল?', 'শুভার প্রিয় দুই বান্ধবীর মতো গাভী দুটির নাম কী ছিল?', '["প্রতাপ ও সারদা", "সর্বশী ও পাঙ্গুলি", "যমুনা ও পদ্মা", "কাজলী ও শিউলি"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 3;

-- ======================================================
-- Chapter 4 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'রবীন্দ্রনাথের মতে লাইব্রেরি কীসের সমাহার?', 'রবীন্দ্রনাথের মতে লাইব্রেরি কীসের সমাহার?', '["মৃত কাগজের স্তূপ", "মানবাত্মার অমর মহাসমুদ্র", "কেবল ধনীলোকের বিলাসিতা", "পরীক্ষার প্রস্তুতির স্থান"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 4;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'লাইব্রেরির নীরব বইগুলোকে কীসের সাথে তুলনা করা হয়েছে?', 'লাইব্রেরির নীরব বইগুলোকে কীসের সাথে তুলনা করা হয়েছে?', '["সুপ্ত আগ্নেয়গিরি ও নীরব মহাসমুদ্র", "অন্ধকার গুহা", "শুকনো মরুভূমি", "ব্যস্ত হাটবাজার"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 4;

-- ======================================================
-- Chapter 5 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'প্রমথ চৌধুরীর মতে শিক্ষার আসল উদ্দেশ্য কী?', 'প্রমথ চৌধুরীর মতে শিক্ষার আসল উদ্দেশ্য কী?', '["অর্থোপার্জন", "আত্মার মুক্তি ও মনের স্ফূর্তি", "চাকরি লাভ", "সমাজ শাসন"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 5;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘বই পড়া’ শখটিকে শ্রেষ্ঠ শখ বলা হয়েছে কেন?', '‘বই পড়া’ শখটিকে শ্রেষ্ঠ শখ বলা হয়েছে কেন?', '["বই মানুষের আত্মাকে জাগ্রত ও স্বাধীন করে", "বই সস্তায় পাওয়া যায়", "বই জমিয়ে রাখা যায়", "বই পড়লে সবাই পণ্ডিত বলে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 5;

-- ======================================================
-- Chapter 6 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘অভাগীর স্বর্গ’ গল্পে কাঙ্গালীর বাবার নাম কী ছিল?', '‘অভাগীর স্বর্গ’ গল্পে কাঙ্গালীর বাবার নাম কী ছিল?', '["রসরাজ", "রসনা", "রসুই", "রসিক বাঘ"]'::jsonb, 3
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 6;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কাঙ্গালীর মায়ের একমাত্র অন্তিম সাধ কী ছিল?', 'কাঙ্গালীর মায়ের একমাত্র অন্তিম সাধ কী ছিল?', '["স্বামীর কোলে মাথা রেখে দেহত্যাগ ও স্বর্গলাভ", "অনেক ধনসম্পদ লাভ", "জমিদারের স্নেহ লাভ", "তীর্থ ভ্রমণ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 6;

-- ======================================================
-- Chapter 7 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘নিরীহ বাঙালি’ প্রবন্ধে বাঙালি চরিত্রের কোন দিকটি তীব্রভাবে ব্যঙ্গ করা হয়েছে?', '‘নিরীহ বাঙালি’ প্রবন্ধে বাঙালি চরিত্রের কোন দিকটি তীব্রভাবে ব্যঙ্গ করা হয়েছে?', '["বীরত্ব", "আলস্য ও ঘরকুনো স্বভাব", "উদ্যম", "দানশীলতা"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 7;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'রোকেয়া সাখাওয়াত হোসেন কোন ক্ষেত্রে পথিকৃৎ ছিলেন?', 'রোকেয়া সাখাওয়াত হোসেন কোন ক্ষেত্রে পথিকৃৎ ছিলেন?', '["নারী শিক্ষা ও সমাজ সংস্কার", "আধুনিক বিজ্ঞান", "রাজনীতি", "বাণিজ্য"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 7;

-- ======================================================
-- Chapter 8 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'ড. মুহম্মদ শহীদুল্লাহর মতে আমাদের প্রকৃত জাতীয় সাহিত্য কোথায় রক্ষিত আছে?', 'ড. মুহম্মদ শহীদুল্লাহর মতে আমাদের প্রকৃত জাতীয় সাহিত্য কোথায় রক্ষিত আছে?', '["শহরের রাজপ্রাসাদে", "পল্লির ছড়া, প্রবাদ ও লোকগাথায়", "ইউরোপীয় লাইব্রেরিতে", "সংবাদপত্রের পাতায়"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 8;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘মৈমনসিংহ গীতিকা’ সংগ্রহ ও সম্পাদনা করেছিলেন কে?', '‘মৈমনসিংহ গীতিকা’ সংগ্রহ ও সম্পাদনা করেছিলেন কে?', '["মুহম্মদ শহীদুল্লাহ", "দীনেশচন্দ্র সেন", "রবীন্দ্রনাথ ঠাকুর", "সুনীতিকুমার চট্টোপাধ্যায়"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 8;

-- ======================================================
-- Chapter 9 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘উদ্যম ও পরিশ্রম’ প্রবন্ধে উন্নতির মূল হাতিয়ার হিসেবে কী বলা হয়েছে?', '‘উদ্যম ও পরিশ্রম’ প্রবন্ধে উন্নতির মূল হাতিয়ার হিসেবে কী বলা হয়েছে?', '["ভাগ্য", "অবিরাম শ্রম ও অধ্যবসায়", "দৈব আশীর্বাদ", "অলস চিন্তা"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 9;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'মানুষের ব্যক্তিত্ব বিকাশে কোনটি অপরিহার্য?', 'মানুষের ব্যক্তিত্ব বিকাশে কোনটি অপরিহার্য?', '["পরনির্ভরশীলতা", "কঠোর পরিশ্রম ও আত্মবিশ্বাস", "অতিরিক্ত আরাম", "লোভ"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 9;

-- ======================================================
-- Chapter 10 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'এস ওয়াজেদ আলির মতে শিল্প মানবজীবনে কী আনে?', 'এস ওয়াজেদ আলির মতে শিল্প মানবজীবনে কী আনে?', '["আত্মিক আনন্দ ও সুষমা", "যান্ত্রিক ক্লান্তি", "বিদ্বেষ", "অর্থহীন মোহ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 10;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'শিল্পচেতনাকে লেখক কার সাথে সম্পর্কিত করেছেন?', 'শিল্পচেতনাকে লেখক কার সাথে সম্পর্কিত করেছেন?', '["জীবনের সামগ্রিক সৌন্দর্য ও রুচির সাথে", "কেবল ধনীদের শখের সাথে", "কেবল জাদুঘরের সাথে", "আইনের সাথে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 10;

-- ======================================================
-- Chapter 11 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘আম-আঁটির ভেঁপু’ গল্পে অপুর দিদির নাম কী?', '‘আম-আঁটির ভেঁপু’ গল্পে অপুর দিদির নাম কী?', '["রাণু", "দুর্গা", "সর্বজয়া", "কমলা"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 11;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'অপু-দুর্গার বাবার নাম কী ছিল?', 'অপু-দুর্গার বাবার নাম কী ছিল?', '["হরিহর রায়", "ভুবন মুখুয্যে", "ভবতারণ", "তারাদাস"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 11;

-- ======================================================
-- Chapter 12 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘মানুষ মুহম্মদ (স.)’ প্রবন্ধে মহানবীর কোন চরিত্র বৈশিষ্ট্য প্রধান হয়ে উঠেছে?', '‘মানুষ মুহম্মদ (স.)’ প্রবন্ধে মহানবীর কোন চরিত্র বৈশিষ্ট্য প্রধান হয়ে উঠেছে?', '["অনমনীয় কঠোরতা", "অসীম ক্ষমা ও মানবিক সংবেদনশীলতা", "রাজকীয় অহংকার", "যুদ্ধপ্রিয়তা"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 12;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'মক্কা বিজয়ের পর মহানবী (স.) শত্রুদের কী বলেছিলেন?', 'মক্কা বিজয়ের পর মহানবী (স.) শত্রুদের কী বলেছিলেন?', '["সকলকে বন্দি করো", "আজ তোমাদের ওপর কোনো প্রতিশোধ নেই, তোমরা মুক্ত", "সব সম্পদ বাজেয়াপ্ত করো", "দেশ ত্যাগ করো"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 12;

-- ======================================================
-- Chapter 13 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'নজরুলের ‘উপেক্ষিত শক্তির উদ্বোধন’ প্রবন্ধে উপেক্ষিত শক্তি কারা?', 'নজরুলের ‘উপেক্ষিত শক্তির উদ্বোধন’ প্রবন্ধে উপেক্ষিত শক্তি কারা?', '["শ্রমজীবী ও কৃষক-মজুর সাধারণ মানুষ", "আমলাতন্ত্র", "জমিদার শ্রেণি", "ধনী ব্যবসায়ী"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 13;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'দেশের সামগ্রিক মুক্তির শর্ত কী?', 'দেশের সামগ্রিক মুক্তির শর্ত কী?', '["মুষ্টিমেয় ব্যক্তির উন্নয়ন", "উপেক্ষিত গণমানুষের অধিকার প্রতিষ্ঠা ও ঐক্য", "বিদেশে সাহায্য প্রার্থনা", "যুদ্ধ"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 13;

-- ======================================================
-- Chapter 14 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘নিমগাছ’ গল্পে লেখক নিমগাছের রূপকে কাকে ফুটিয়ে তুলেছেন?', '‘নিমগাছ’ গল্পে লেখক নিমগাছের রূপকে কাকে ফুটিয়ে তুলেছেন?', '["আত্মত্যাগী গৃহবধূকে", "কৃপণ মহাজনকে", "অলস যুবককে", "চতুর চাটুকারকে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 14;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'নিমগাছটির ইচ্ছা সত্ত্বেও চলে যেতে পারল না কেন?', 'নিমগাছটির ইচ্ছা সত্ত্বেও চলে যেতে পারল না কেন?', '["শিকড় মাটির বহু দূর প্রবেশ করেছে", "ডালপালা কাটা ছিল", "গাছ হাঁটতে পারে না", "কেউ অনুমতি দেয়নি"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 14;

-- ======================================================
-- Chapter 15 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'মোতাহের হোসেন চৌধুরীর মতে মানুষের আসল সত্তা কোনটি?', 'মোতাহের হোসেন চৌধুরীর মতে মানুষের আসল সত্তা কোনটি?', '["জীবসত্তা", "মানবসত্তা বা মনুষ্যত্ব", "অর্থলিপ্সা", "দেহসুখ"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 15;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'জীবসত্তার কারাগার থেকে মানবসত্তার মুক্ত আকাশে পৌঁছানোর মাধ্যম কী?', 'জীবসত্তার কারাগার থেকে মানবসত্তার মুক্ত আকাশে পৌঁছানোর মাধ্যম কী?', '["অর্থসম্পদ", "প্রকৃত শিক্ষা", "শারীরিক শক্তি", "ক্ষমতা"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 15;

-- ======================================================
-- Chapter 16 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘প্রবাস বন্ধু’ রচনায় আবদুর রহমান কোন দেশের নাগরিক ছিলেন?', '‘প্রবাস বন্ধু’ রচনায় আবদুর রহমান কোন দেশের নাগরিক ছিলেন?', '["ইরান", "আফগানিস্তান (কাবুল)", "পাকিস্তান", "তুরস্ক"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 16;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'আবদুর রহমানের প্রধান চারিত্রিক বৈশিষ্ট্য কী ছিল?', 'আবদুর রহমানের প্রধান চারিত্রিক বৈশিষ্ট্য কী ছিল?', '["চরম আতিথেয়তা ও প্রভুভক্তি", "অলসতা", "লোভ", "কুটিলতা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 16;

-- ======================================================
-- Chapter 17 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘মমতাদি’ গল্পে মমতাদি কত টাকা মাইনেতে কাজে যোগ দিয়েছিল?', '‘মমতাদি’ গল্পে মমতাদি কত টাকা মাইনেতে কাজে যোগ দিয়েছিল?', '["বারো টাকা", "পনেরো টাকা", "বিশ টাকা", "দশ টাকা"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 17;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'মমতাদির চোখের চাহনি ও ব্যক্তিত্ব কেমন ছিল?', 'মমতাদির চোখের চাহনি ও ব্যক্তিত্ব কেমন ছিল?', '["শান্ত, সংযত ও আত্মমর্যাদাপূর্ণ", "ভীতু ও কাতর", "উদ্ধত ও অহংকারী", "অসৎ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 17;

-- ======================================================
-- Chapter 18 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘বনমানুষ’ গল্পের মূল বিষয়বস্তু কী?', '‘বনমানুষ’ গল্পের মূল বিষয়বস্তু কী?', '["মানুষ ও প্রকৃতির মধ্যকার বৈপরীত্য ও বন্যপ্রাণীর প্রতি করুণা", "শিকারের রোমাঞ্চ", "যুদ্ধ", "ধনীদের শিকার উৎসব"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 18;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'গল্পে বন্দি প্রাণীটির প্রতি পাঠকের অনুভূতি কেমন হয়?', 'গল্পে বন্দি প্রাণীটির প্রতি পাঠকের অনুভূতি কেমন হয়?', '["গভীর সহানুভূতি ও সমবেদনা", "ভয়", "বিদ্বেষ", "উদাসীনতা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 18;

-- ======================================================
-- Chapter 19 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘একাত্তরের দিনগুলি’ কোন ধরনের রচনা?', '‘একাত্তরের দিনগুলি’ কোন ধরনের রচনা?', '["মুক্তিযুদ্ধের দিনলিপি (ডায়েরি)", "কাল্পনিক উপন্যাস", "রূপকথা", "ভ্রমণকাহিনী"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 19;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'জাহানারা ইমামের কোন সন্তান মুক্তিযুদ্ধে শহীদ হয়েছিলেন?', 'জাহানারা ইমামের কোন সন্তান মুক্তিযুদ্ধে শহীদ হয়েছিলেন?', '["জামী", "রুমী", "বাপ্পি", "শরীফ"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 19;

-- ======================================================
-- Chapter 20 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘স্বাধীনতা আমার স্বাধীনতা’ নাটকটির মূল প্রেক্ষাপট কোনটি?', '‘স্বাধীনতা আমার স্বাধীনতা’ নাটকটির মূল প্রেক্ষাপট কোনটি?', '["১৯৭১ সালের মুক্তিযুদ্ধ ও বাঙালির স্বাধীনতা সংগ্রাম", "১৯৪৭-এর দেশভাগ", "ছিয়াত্তরের মন্বন্তর", "প্রথম বিশ্বযুদ্ধ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 20;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'নাটকের মূল চরিত্রদের চেতনা কী ছিল?', 'নাটকের মূল চরিত্রদের চেতনা কী ছিল?', '["পরাধীনতার শৃঙ্খল ভেঙে স্বাধীন স্বদেশ গড়া", "অর্থ লাভ", "বিদেশ পাড়ি দেওয়া", "সন্ধি করা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 20;

-- ======================================================
-- Chapter 21 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'জহির রায়হানের ‘একুশের গল্প’ কোন ঐতিহাসিক পটভূমিতে রচিত?', 'জহির রায়হানের ‘একুশের গল্প’ কোন ঐতিহাসিক পটভূমিতে রচিত?', '["১৯৫২ সালের মহান ভাষা আন্দোলন", "১৯৬৯-এর গণঅভ্যুত্থান", "১৯৭১-এর মুক্তিযুদ্ধ", "১৯৪৭-এর দেশভাগ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 21;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'গল্পের কেন্দ্রীয় চরিত্র তপু কীসের প্রতীক?', 'গল্পের কেন্দ্রীয় চরিত্র তপু কীসের প্রতীক?', '["ভাষার জন্য আত্মত্যাগী নির্ভীক তারুণ্যের", "লোভী যুবকের", "অসহায় বৃদ্ধের", "শাসকের"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 21;

-- ======================================================
-- Chapter 22 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘আমাদের সংস্কৃতি’ প্রবন্ধে আনিসুজ্জামানের মতে সংস্কৃতির বৈশিষ্ট্য কী?', '‘আমাদের সংস্কৃতি’ প্রবন্ধে আনিসুজ্জামানের মতে সংস্কৃতির বৈশিষ্ট্য কী?', '["স্থবির ও অপরিবর্তনীয়", "গতিশীল, মানবকল্যাণমুখী ও সমন্বয়ধর্মী", "কেবল আচার-অনুষ্ঠান", "বিদেশি অনুকরণ"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 22;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'বাঙালি সংস্কৃতির মূল বৈশিষ্ট্য কোনটি?', 'বাঙালি সংস্কৃতির মূল বৈশিষ্ট্য কোনটি?', '["অসাম্প্রদায়িক মানবিক চেতনা", "ধর্মান্ধতা", "বিচ্ছিন্নতাবাদ", "আভিজাত্য"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 22;

-- ======================================================
-- Chapter 23 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘সাহিত্যের রূপ ও রীতি’ রচনায় সাহিত্যের কোন শাখাটি সবচেয়ে প্রাচীন বলা হয়েছে?', '‘সাহিত্যের রূপ ও রীতি’ রচনায় সাহিত্যের কোন শাখাটি সবচেয়ে প্রাচীন বলা হয়েছে?', '["উপন্যাস", "কবিতা", "নাটক", "ছোটগল্প"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 23;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'নাটকের প্রাণ কী?', 'নাটকের প্রাণ কী?', '["সংলাপ ও দ্বন্দ্ব", "বর্ণনা", "ছন্দ", "অলংকার"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 23;

-- ======================================================
-- Chapter 24 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘বাঙলা শব্দ’ প্রবন্ধে বাংলা ভাষার শব্দভাণ্ডারকে কীসের সাথে তুলনা করা হয়েছে?', '‘বাঙলা শব্দ’ প্রবন্ধে বাংলা ভাষার শব্দভাণ্ডারকে কীসের সাথে তুলনা করা হয়েছে?', '["বহমান নদীর বৈচিত্র্যের সাথে", "বদ্ধ জলাশয়ের সাথে", "মরুভূমির সাথে", "লোহার খাঁচার সাথে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 24;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'বাংলা ভাষার শব্দভাণ্ডার কোন ধরনের সংমিশ্রণে ঋদ্ধ?', 'বাংলা ভাষার শব্দভাণ্ডার কোন ধরনের সংমিশ্রণে ঋদ্ধ?', '["তৎসম, তদ্ভব, দেশি ও বিদেশি শব্দের মেলবন্ধনে", "কেবল সংস্কৃত শব্দে", "কেবল ইংরেজি শব্দে", "কেবল আরবি শব্দে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 24;

-- ======================================================
-- Chapter 25 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘আমাদের নতুন গৌরবগাথা’ রচনাটিতে বাংলাদেশের কোন গৌরবোজ্জ্বল দিক ফুটিয়ে তোলা হয়েছে?', '‘আমাদের নতুন গৌরবগাথা’ রচনাটিতে বাংলাদেশের কোন গৌরবোজ্জ্বল দিক ফুটিয়ে তোলা হয়েছে?', '["আত্মমর্যাদাশীল উন্নয়ন ও জাতীয় অগ্রগতি", "কেবল অতীতের পরাজয়", "অর্থনৈতিক ব্যর্থতা", "বিদেশ নির্ভরতা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 25;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'পদ্মা সেতু নির্মাণ বাঙালি জাতির কোন চেতনার প্রতীক?', 'পদ্মা সেতু নির্মাণ বাঙালি জাতির কোন চেতনার প্রতীক?', '["আত্মবিশ্বাস ও স্বাবলম্বনের প্রতীক", "বিলাসিতার প্রতীক", "ঋণগ্রস্ততার প্রতীক", "অসহায়ত্বের প্রতীক"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 25;

-- ======================================================
-- Chapter 26 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'শাহ মুহম্মদ সগীরের ‘বন্দনা’ কবিতায় দ্বিতীয় প্রণাম কার উদ্দেশে করা হয়েছে?', 'শাহ মুহম্মদ সগীরের ‘বন্দনা’ কবিতায় দ্বিতীয় প্রণাম কার উদ্দেশে করা হয়েছে?', '["সুলতানের", "পিতামাতার পা দুটিতে", "বন্ধুর", "রাজার"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 26;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কবি শাহ মুহম্মদ সগীর কোন কাব্যের রচয়িতা?', 'কবি শাহ মুহম্মদ সগীর কোন কাব্যের রচয়িতা?', '["ইউসুফ জোলেখা", "পদ্মাবতী", "মধুমালতী", "লায়লী মজনু"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 26;

-- ======================================================
-- Chapter 27 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'আলাওলের ‘হাম্দ’ কবিতায় কার মহিমা বর্ণিত হয়েছে?', 'আলাওলের ‘হাম্দ’ কবিতায় কার মহিমা বর্ণিত হয়েছে?', '["সুলতানের", "আল্লাহ তায়ালার", "প্রকৃতির", "নিজের"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 27;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'আলাওল কোন রাজসভার কবি ছিলেন?', 'আলাওল কোন রাজসভার কবি ছিলেন?', '["রোসাঙ্গ (আরাকান) রাজসভার", "গৌড় রাজসভার", "দিল্লি দরবারের", "ত্রিপুরা রাজসভার"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 27;

-- ======================================================
-- Chapter 28 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'আবদুল হাকিমের ‘বঙ্গবাণী’ কবিতাটি কোন শতকের রচনা?', 'আবদুল হাকিমের ‘বঙ্গবাণী’ কবিতাটি কোন শতকের রচনা?', '["সপ্তদশ শতকের", "দ্বাদশ শতকের", "বিংশ শতকের", "চতুর্দশ শতকের"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 28;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘যে সবে বঙ্গেত জন্মি হিংসে বঙ্গবাণী / সে সব কাহার জন্ম নির্ণয় ন জানি’—এখানে কবির কী প্রকাশ পেয়েছে?', '‘যে সবে বঙ্গেত জন্মি হিংসে বঙ্গবাণী / সে সব কাহার জন্ম নির্ণয় ন জানি’—এখানে কবির কী প্রকাশ পেয়েছে?', '["দেশপ্রেম ও মাতৃভাষার প্রতি প্রগাঢ় ভালোবাসা", "ধর্মবিদ্বেষ", "অর্থলোভ", "অহংকার"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 28;

-- ======================================================
-- Chapter 29 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘কপোতাক্ষ নদ’ কবিতাটি সাহিত্যের কোন শাখার অন্তর্গত?', '‘কপোতাক্ষ নদ’ কবিতাটি সাহিত্যের কোন শাখার অন্তর্গত?', '["চতুর্দশপদী কবিতা (সনেট)", "গীতিকবিতা", "মহাকাব্য", "ব্যঙ্গকবিতা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 29;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'মাইকেল মধুসূদন দত্ত সনেটের অষ্টকে কী প্রকাশ করেছেন?', 'মাইকেল মধুসূদন দত্ত সনেটের অষ্টকে কী প্রকাশ করেছেন?', '["স্মৃতিকাতরতা ও নদের প্রতি ভালোবাসা", "উপদেশ", "অর্থকষ্ট", "বিদেশের প্রশংসা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 29;

-- ======================================================
-- Chapter 30 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'হেমচন্দ্র বন্দ্যোপাধ্যায়ের ‘জীবন-সঙ্গীত’ কবিতাটির মূল বাণী কী?', 'হেমচন্দ্র বন্দ্যোপাধ্যায়ের ‘জীবন-সঙ্গীত’ কবিতাটির মূল বাণী কী?', '["জীবন স্বপ্ন বা মায়া নয়, কর্মের দ্বারাই সার্থকতা লাভ করে", "সংসার এক ফাঁকি", "বৈরাগ্যই জীবনের লক্ষ্য", "কেবল ভোগেই আনন্দ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 30;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘মহাজ্ঞানী মহাজন যে পথে করে গমন’—এখানে কী করার পরামর্শ দেওয়া হয়েছে?', '‘মহাজ্ঞানী মহাজন যে পথে করে গমন’—এখানে কী করার পরামর্শ দেওয়া হয়েছে?', '["মহাজনদের আদর্শ অনুসরণ করে স্মরণীয় হওয়া", "মহাজনদের ভয় পাওয়া", "টাকা জমানো", "যুদ্ধ করা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 30;

-- ======================================================
-- Chapter 31 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'রবীন্দ্রনাথের ‘প্রাণ’ কবিতায় কবি কোথায় অমর হয়ে বাঁচতে চেয়েছেন?', 'রবীন্দ্রনাথের ‘প্রাণ’ কবিতায় কবি কোথায় অমর হয়ে বাঁচতে চেয়েছেন?', '["স্বর্গের বাগানে", "মানুষের হাসিকান্নার মাঝে", "রাজপ্রাসাদে", "বিজন অরণ্যে"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 31;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘মরিতে চাহি না আমি সুন্দর ভুবনে’—চরণে কবির কী প্রকাশ পেয়েছে?', '‘মরিতে চাহি না আমি সুন্দর ভুবনে’—চরণে কবির কী প্রকাশ পেয়েছে?', '["জীবন ও পৃথিবীর প্রতি গভীর প্রেম", "মৃত্যুভীতি", "বার্ধক্য", "রোগশোক"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 31;

-- ======================================================
-- Chapter 32 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘জুতা-আবিষ্কার’ কবিতায় রাজা হবুচন্দ্রের মন্ত্রীর নাম কী ছিল?', '‘জুতা-আবিষ্কার’ কবিতায় রাজা হবুচন্দ্রের মন্ত্রীর নাম কী ছিল?', '["গোবু রায়", "চমচম খাঁ", "বিরবল", "মহারাজ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 32;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'অবশেষে কে জুতো আবিষ্কার করে রাজাকে ধুলা থেকে রক্ষা করেছিল?', 'অবশেষে কে জুতো আবিষ্কার করে রাজাকে ধুলা থেকে রক্ষা করেছিল?', '["রাজসভার পণ্ডিতেরা", "চর্মকার (বৃদ্ধ মুচি)", "মন্ত্রী গোবু রায়", "বিদেশি বৈজ্ঞানিক"]'::jsonb, 1
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 32;

-- ======================================================
-- Chapter 33 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'যতীন্দ্রমোহন বাগচীর ‘অন্ধবধূ’ কবিতায় বধূটির কোন ইন্দ্রিয় সবচেয়ে সজাগ?', 'যতীন্দ্রমোহন বাগচীর ‘অন্ধবধূ’ কবিতায় বধূটির কোন ইন্দ্রিয় সবচেয়ে সজাগ?', '["শ্রবণ ও অনুভূতি", "দৃষ্টিশক্তি", "কোনোটিই নয়", "লোভ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 33;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'বধূটি প্রকৃতির আগমন কীভাবে টের পায়?', 'বধূটি প্রকৃতির আগমন কীভাবে টের পায়?', '["বাতাস, গন্ধ ও পাখির ডাকে", "চোখে দেখে", "বই পড়ে", "টেলিভিশনে দেখে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 33;

-- ======================================================
-- Chapter 34 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'সত্যেন্দ্রনাথ দত্তকে বাংলা কাব্যে কী উপাধি দেওয়া হয়েছে?', 'সত্যেন্দ্রনাথ দত্তকে বাংলা কাব্যে কী উপাধি দেওয়া হয়েছে?', '["ছন্দের জাদুকর", "ভোরের পাখি", "বিদ্রোহী কবি", "পল্লিকবি"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 34;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘ঝরনার গান’ কবিতায় ঝরনার গতিপ্রকৃতি কেমন?', '‘ঝরনার গান’ কবিতায় ঝরনার গতিপ্রকৃতি কেমন?', '["চঞ্চল, ছন্দময় ও উচ্ছল", "মন্থর ও শান্ত", "থমকে যাওয়া", "ভয়ানক"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 34;

-- ======================================================
-- Chapter 35 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'সুকুমার রায়ের ‘ছায়াবাজি’ কবিতাটি কোন কাব্যগ্রন্থের সুর বহন করে?', 'সুকুমার রায়ের ‘ছায়াবাজি’ কবিতাটি কোন কাব্যগ্রন্থের সুর বহন করে?', '["খাই খাই / আবোল তাবোল", "পদ্মা", "মেঘনাদবধ", "গীতাঞ্জলি"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 35;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কবিতায় ছায়ার নানা রূপ বদলকে কীসের সাথে তুলনা করা হয়েছে?', 'কবিতায় ছায়ার নানা রূপ বদলকে কীসের সাথে তুলনা করা হয়েছে?', '["মায়াময় খেলার সাথে", "ভয়ংকর দৈত্যের সাথে", "অন্ধকারের সাথে", "ঘুমের সাথে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 35;

-- ======================================================
-- Chapter 36 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'গোলাম মোস্তফার ‘জীবন বিনিময়’ কবিতায় কোন মুঘল সম্রাটের আত্মত্যাগের ইতিহাস বর্ণিত?', 'গোলাম মোস্তফার ‘জীবন বিনিময়’ কবিতায় কোন মুঘল সম্রাটের আত্মত্যাগের ইতিহাস বর্ণিত?', '["সম্রাট বাবর", "সম্রাট আকবর", "সম্রাট শাহজাহান", "সম্রাট ঔরঙ্গজেব"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 36;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'বাবর কার জীবন বাঁচাতে নিজের জীবন উৎসর্গ করেছিলেন?', 'বাবর কার জীবন বাঁচাতে নিজের জীবন উৎসর্গ করেছিলেন?', '["পুত্র হুমায়ুনের", "স্ত্রী মাহাম বেগমের", "সেনাপতির", "মন্ত্রীর"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 36;

-- ======================================================
-- Chapter 37 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কাজী নজরুল ইসলামের ‘মানুষ’ কবিতার মূল সুর কী?', 'কাজী নজরুল ইসলামের ‘মানুষ’ কবিতার মূল সুর কী?', '["সাম্যবাদ ও মানবধর্ম", "ধর্মীয় গোঁড়ামি", "বর্ণভেদ", "রাজার স্তুতি"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 37;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘পূজারী, দুয়ার খোল / ক্ষুধার ঠাকুর দাঁড়ায়ে দুয়ারে’—এখানে ক্ষুধার ঠাকুর কে?', '‘পূজারী, দুয়ার খোল / ক্ষুধার ঠাকুর দাঁড়ায়ে দুয়ারে’—এখানে ক্ষুধার ঠাকুর কে?', '["অভুক্ত তৃষ্ণার্ত কাঙাল মানুষ", "মন্দিরের প্রতিমা", "ধনী ব্যক্তি", "রাজা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 37;

-- ======================================================
-- Chapter 38 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'নজরুলের ‘উমর ফারুক’ কবিতায় খলিফা উমরের কোন মহান আদর্শ বর্ণিত হয়েছে?', 'নজরুলের ‘উমর ফারুক’ কবিতায় খলিফা উমরের কোন মহান আদর্শ বর্ণিত হয়েছে?', '["সাম্য, প্রজাভক্তি ও সততা", "বিলাসিতা", "অহংকার", "স্বৈরাচার"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 38;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'উমর (রা.) মরুভূমিতে কার সাথে উটের রশি ভাগ করে টেনেছিলেন?', 'উমর (রা.) মরুভূমিতে কার সাথে উটের রশি ভাগ করে টেনেছিলেন?', '["নিজের ভৃত্যের সাথে", "মন্ত্রীর সাথে", "সেনাপতির সাথে", "শত্রুর সাথে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 38;

-- ======================================================
-- Chapter 39 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'জীবনানন্দ দাশের ‘সেইদিন এই মাঠ’ কবিতায় কোন চিরন্তন সত্য প্রকাশ পেয়েছে?', 'জীবনানন্দ দাশের ‘সেইদিন এই মাঠ’ কবিতায় কোন চিরন্তন সত্য প্রকাশ পেয়েছে?', '["সভ্যতার পতন হলেও প্রকৃতির সৌন্দর্য চিরস্থায়ী", "প্রকৃতি একদিন ধ্বংস হবে", "মানুষই অমর", "যুদ্ধের জয়ই শেষ কথা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 39;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কবি কোন নদীর তীরে গন্ধ ও হাওয়ার কথা উল্লেখ করেছেন?', 'কবি কোন নদীর তীরে গন্ধ ও হাওয়ার কথা উল্লেখ করেছেন?', '["ধানসিঁড়ি নদী", "মেঘনা নদী", "পদ্মা নদী", "যমুনা নদী"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 39;

-- ======================================================
-- Chapter 40 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'জসীমউদ্দীনকে বাংলা সাহিত্যে কী কবি বলা হয়?', 'জসীমউদ্দীনকে বাংলা সাহিত্যে কী কবি বলা হয়?', '["পল্লিকবি", "নাগরিক কবি", "বিদ্রোহী কবি", "স্বভাব কবি"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 40;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘যাব আমি তোমার দেশে’ কবিতায় কবি কেন ফিরে যেতে চান?', '‘যাব আমি তোমার দেশে’ কবিতায় কবি কেন ফিরে যেতে চান?', '["পল্লির স্নিগ্ধ মমতা ও শান্তির খোঁজে", "টাকা উপার্জনের জন্য", "শিকারের জন্য", "যুদ্ধ করার জন্য"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 40;

-- ======================================================
-- Chapter 41 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'বিষ্ণু দের ‘একটি কাফি’ কবিতায় আধুনিক জীবনের কোন সুর ধ্বনিত?', 'বিষ্ণু দের ‘একটি কাফি’ কবিতায় আধুনিক জীবনের কোন সুর ধ্বনিত?', '["নাগরিক ক্লান্তি ও সঙ্গীতের আকুতি", "গ্রাম্য রূপকথা", "যুদ্ধোন্মাদনা", "ধর্মপ্রচার"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 41;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘কাফি’ মূলত কীসের নাম?', '‘কাফি’ মূলত কীসের নাম?', '["একটি ধ্রুপদি রাগিনী (সুর)", "একটি নদীর নাম", "একটি শহরের নাম", "একটি বইয়ের নাম"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 41;

-- ======================================================
-- Chapter 42 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'সুফিয়া কামালের ‘আমার দেশ’ কবিতায় প্রধান বৈশিষ্ট্য কী?', 'সুফিয়া কামালের ‘আমার দেশ’ কবিতায় প্রধান বৈশিষ্ট্য কী?', '["স্বদেশের প্রকৃতির প্রতি গভীর অনুরাগ ও গর্ব", "বিদেশের প্রশংসা", "ধর্মীয় উপদেশ", "বিজ্ঞানের বন্দনা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 42;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কবি সুফিয়া কামাল বাংলাদেশের কোন আন্দোলনের সাথে ওতপ্রোতভাবে যুক্ত ছিলেন?', 'কবি সুফিয়া কামাল বাংলাদেশের কোন আন্দোলনের সাথে ওতপ্রোতভাবে যুক্ত ছিলেন?', '["ভাষা আন্দোলন ও মুক্তিযুদ্ধসহ সকল প্রগতিশীল আন্দোলনে", "কেবল সাহিত্য আড্ডায়", "রাজনীতিতে নয়", "কোনোটিতেই নয়"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 42;

-- ======================================================
-- Chapter 43 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'আহসান হাবীবের ‘আমি কোনো আগন্তুক নই’ কবিতায় কবি নিজেকে কী বলে দাবি করেছেন?', 'আহসান হাবীবের ‘আমি কোনো আগন্তুক নই’ কবিতায় কবি নিজেকে কী বলে দাবি করেছেন?', '["এ মাটির খাঁটি সন্তান", "একজন অচেনা মুসাফির", "একজন পর্যটক", "একজন রাজা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 43;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কবিকে স্বদেশের কী কী চেনে বলে উল্লেখ করেছেন?', 'কবিকে স্বদেশের কী কী চেনে বলে উল্লেখ করেছেন?', '["বাঁশবাগান, ধানের ক্ষেত, শিশির ও জমিন", "কেবল শহরের দালানকোঠা", "কেবল বই", "কেবল পুলিশ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 43;

-- ======================================================
-- Chapter 44 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'ফররুখ আহমদের ‘বৃষ্টি’ কবিতায় বৃষ্টির স্পর্শে কী ঘটে?', 'ফররুখ আহমদের ‘বৃষ্টি’ কবিতায় বৃষ্টির স্পর্শে কী ঘটে?', '["তৃষ্ণার্ত প্রকৃতি সজীব ও প্রাণবন্ত হয়ে ওঠে", "বন্যা হয়ে সব ভেসে যায়", "মানুষের ক্ষতি হয়", "সূর্য রাগ করে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 44;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'বৃষ্টির শব্দকে কবি কীসের সাথে তুলনা করেছেন?', 'বৃষ্টির শব্দকে কবি কীসের সাথে তুলনা করেছেন?', '["সুরের ঝঙ্কারের সাথে", "অস্ত্রের শব্দের সাথে", "চিৎকারের সাথে", "ঝড়ের সাথে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 44;

-- ======================================================
-- Chapter 45 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'সুভাষ মুখোপাধ্যায়ের ‘মে-দিনের কবিতা’য় কোন শ্রেণির জাগরণ প্রত্যাশা করা হয়েছে?', 'সুভাষ মুখোপাধ্যায়ের ‘মে-দিনের কবিতা’য় কোন শ্রেণির জাগরণ প্রত্যাশা করা হয়েছে?', '["সর্বহারা শ্রমজীবী মেহনতি মানুষের", "ধনিক শ্রেণির", "আমলাদের", "ব্যবসায়ীদের"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 45;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'মে দিবস বিশ্বজুড়ে কীসের প্রতীক?', 'মে দিবস বিশ্বজুড়ে কীসের প্রতীক?', '["শ্রমিকের ঐক্য ও অধিকার আদায়ের প্রতীক", "ছুটি কাটানোর প্রতীক", "যুদ্ধজয়ের প্রতীক", "বণিক সভার প্রতীক"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 45;

-- ======================================================
-- Chapter 46 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'সিকান্দার আবু জাফরের ‘আশা’ কবিতায় কবি কোথায় ফিরতে চান?', 'সিকান্দার আবু জাফরের ‘আশা’ কবিতায় কবি কোথায় ফিরতে চান?', '["যেখানে লোভ নেই, সামান্যতেই মানুষ পরম শান্তিতে বাঁচে", "বিশাল অট্টালিকায়", "রাজদরবারে", "বিদেশি দ্বীপে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 46;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কবি শহুরে জীবনের কোন দিককে অপছন্দ করেছেন?', 'কবি শহুরে জীবনের কোন দিককে অপছন্দ করেছেন?', '["বিত্তের অন্ধ অহংকার ও কৃত্রিমতাকে", "বিদ্যুৎকে", "গাড়িকে", "শিক্ষাকে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 46;

-- ======================================================
-- Chapter 47 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'আবুল হোসেনের ‘পোস্টার’ কবিতাটির মূল বৈশিষ্ট্য কোনটি?', 'আবুল হোসেনের ‘পোস্টার’ কবিতাটির মূল বৈশিষ্ট্য কোনটি?', '["সামাজিক ব্যঙ্গ ও রাজনৈতিক অসঙ্গতির চিত্র", "রোমান্টিক প্রেম", "প্রকৃতির বন্দনা", "শোকগাথা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 47;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'পোস্টারগুলো দেয়ালে কীসের প্রতীক হয়ে ঝুলছে?', 'পোস্টারগুলো দেয়ালে কীসের প্রতীক হয়ে ঝুলছে?', '["মিথ্যা প্রতিশ্রুতি ও সাধারণ মানুষের বঞ্চনার", "সৌন্দর্যের", "বিজ্ঞাপনের", "চিত্রকর্মের"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 47;

-- ======================================================
-- Chapter 48 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'সুকান্ত ভট্টাচার্যের ‘রানার’ কবিতায় রানারের পরিচয় কী?', 'সুকান্ত ভট্টাচার্যের ‘রানার’ কবিতায় রানারের পরিচয় কী?', '["চিঠির বোঝা নিয়ে অবিরাম ছুটে চলা ডাকহরকরা", "ঘোড়সওয়ার", "সৈনিক", "অ্যাথলেট"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 48;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘রানার চলেছে খবরের বোঝা হাতে’—তার নিজের ঘরে কী ছিল?', '‘রানার চলেছে খবরের বোঝা হাতে’—তার নিজের ঘরে কী ছিল?', '["দারিদ্র্য ও অনাহারের হাহাকার", "প্রচুর ধনসম্পদ", "উৎসবের আনন্দ", "আলোর বন্যা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 48;

-- ======================================================
-- Chapter 49 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'শামসুর রাহমানের ‘তোমাকে পাওয়ার জন্যে, হে স্বাধীনতা’ কবিতায় স্বাধীনতা কার রক্তে কেনা?', 'শামসুর রাহমানের ‘তোমাকে পাওয়ার জন্যে, হে স্বাধীনতা’ কবিতায় স্বাধীনতা কার রক্তে কেনা?', '["লাখো শহীদের বুকের তাজা রক্তে", "সোনার বিনিময়ে", "চুক্তির মাধ্যমে", "ভোটের মাধ্যমে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 49;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, '‘সখিনা বিবির কপাল ভাঙল’—চরণটি কী প্রকাশ করে?', '‘সখিনা বিবির কপাল ভাঙল’—চরণটি কী প্রকাশ করে?', '["মুক্তিযুদ্ধের সীমাহীন আত্মত্যাগ ও স্বজন হারানোর বেদনা", "ভাগ্যের পরিহাস", "দুর্ঘটনা", "রোগ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 49;

-- ======================================================
-- Chapter 50 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'হাসান হাফিজুর রহমানের ‘অবাক সূর্যোদয়’ কবিতায় সূর্যোদয় কীসের ইঙ্গিত দেয়?', 'হাসান হাফিজুর রহমানের ‘অবাক সূর্যোদয়’ কবিতায় সূর্যোদয় কীসের ইঙ্গিত দেয়?', '["রক্তক্ষয়ী যুদ্ধের পর বিজয়ী স্বাধীন বাংলাদেশের অভ্যুদয়", "সূর্যোদয় দেখা", "দিনের শুরু", "প্রকৃতির খেলা"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 50;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কবি হাসান হাফিজুর রহমান কোন ঐতিহাসিক সংকলনের সম্পাদক ছিলেন?', 'কবি হাসান হাফিজুর রহমান কোন ঐতিহাসিক সংকলনের সম্পাদক ছিলেন?', '["‘একুশে ফেব্রুয়ারি’ সংকলন ও মুক্তিযুদ্ধের দলিলপত্রের", "গীতাঞ্জলির", "পদ্মানদীর মাঝির", "সবুজপত্রের"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 50;

-- ======================================================
-- Chapter 51 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'আল মাহমুদের ‘বোশেখ’ কবিতায় বৈশাখের রূপ কেমন?', 'আল মাহমুদের ‘বোশেখ’ কবিতায় বৈশাখের রূপ কেমন?', '["প্রচণ্ড রুদ্র, উন্মাতাল ও সৃষ্টির তীব্র শক্তিসম্পন্ন", "শান্ত ও ঘুমন্ত", "স্নিগ্ধ ও শীতল", "দুর্বল"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 51;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'আল মাহমুদ মূলত কোন মাটির কবি হিসেবে পরিচিত?', 'আল মাহমুদ মূলত কোন মাটির কবি হিসেবে পরিচিত?', '["ভাটি বাংলার লোকজ মাটির কবি", "সমুদ্রের কবি", "পাহাড়ের কবি", "বিদেশি সাহিত্যের কবি"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 51;

-- ======================================================
-- Chapter 52 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'রফিক আজাদের ‘চুনিয়া আমার আর্কেডিয়া’ কবিতায় ‘আর্কেডিয়া’ শব্দের অর্থ কী?', 'রফিক আজাদের ‘চুনিয়া আমার আর্কেডিয়া’ কবিতায় ‘আর্কেডিয়া’ শব্দের অর্থ কী?', '["শান্তিময় স্বপ্নের স্বর্গোদ্যান", "যুদ্ধের ময়দান", "কারাগার", "জাহাজ"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 52;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কবি চুনিয়াকে কীসের বিরুদ্ধে মানবপ্রেমের প্রতীক করেছেন?', 'কবি চুনিয়াকে কীসের বিরুদ্ধে মানবপ্রেমের প্রতীক করেছেন?', '["অস্ত্র ও যুদ্ধের নির্মম ধ্বংসের বিরুদ্ধে", "শীতের বিরুদ্ধে", "বৃষ্টির বিরুদ্ধে", "রাতের বিরুদ্ধে"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 52;

-- ======================================================
-- Chapter 53 Questions
-- ======================================================
INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'রুদ্র মুহম্মদ শহিদুল্লাহর ‘মিছিল’ কবিতায় মিছিল কীসের প্রতীক?', 'রুদ্র মুহম্মদ শহিদুল্লাহর ‘মিছিল’ কবিতায় মিছিল কীসের প্রতীক?', '["জনগণের সম্মিলিত প্রতিরোধ ও বিপ্লবের প্রতীক", "একটি শান্ত শোভাযাত্রার", "মেলায় যাওয়ার", "নাটকের"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 53;

INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
SELECT c.id, 'কবি রুদ্র মুহম্মদ শহিদুল্লাহ কোন চেতনার কবি ছিলেন?', 'কবি রুদ্র মুহম্মদ শহিদুল্লাহ কোন চেতনার কবি ছিলেন?', '["তারুণ্যের প্রতিবাদী ও দ্রোহের চেতনার কবি", "বৈরাগ্যের কবি", "রাজকীয় কবি", "ধর্মীয় কবি"]'::jsonb, 0
FROM chapters c
JOIN subjects s ON s.id = c.subject_id
WHERE s.name_en = 'Bangla Sahitto' AND c.order_index = 53;
