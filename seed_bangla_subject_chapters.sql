-- ============================================================
-- NineBooks — Bangla Sahitto (বাংলা সাহিত্য - নবম-দশম শ্রেণি)
-- Subject and 53 Chapters Seed File (NCTB 2026 Curriculum)
-- Pure SQL: 100% Compatible with Supabase SQL Editor (Standard ANSI/PostgreSQL DML)
-- ============================================================

-- 1. Insert Subject if not exists, then update
INSERT INTO subjects (name_bn, name_en, icon_url)
SELECT 'বাংলা সাহিত্য', 'Bangla Sahitto', 'https://img.icons8.com/color/96/open-book.png'
WHERE NOT EXISTS (SELECT 1 FROM subjects WHERE name_en = 'Bangla Sahitto');

UPDATE subjects 
SET name_bn = 'বাংলা সাহিত্য', icon_url = 'https://img.icons8.com/color/96/open-book.png'
WHERE name_en = 'Bangla Sahitto';

-- 2. Insert or update 53 Chapters (25 Prose + 28 Poems)
-- Chapter 1: Protyupakar (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১ম অধ্যায়: প্রত্যুপকার (ঈশ্বরচন্দ্র বিদ্যাসাগর)', 'Protyupakar', 1
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 1
);

UPDATE chapters c
SET title_bn = '১ম অধ্যায়: প্রত্যুপকার (ঈশ্বরচন্দ্র বিদ্যাসাগর)', title_en = 'Protyupakar'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 1;

-- Chapter 2: Fuler Bibaho (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২য় অধ্যায়: ফুলের বিবাহ (বঙ্কিমচন্দ্র চট্টোপাধ্যায়)', 'Fuler Bibaho', 2
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 2
);

UPDATE chapters c
SET title_bn = '২য় অধ্যায়: ফুলের বিবাহ (বঙ্কিমচন্দ্র চট্টোপাধ্যায়)', title_en = 'Fuler Bibaho'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 2;

-- Chapter 3: Shuva (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩য় অধ্যায়: শুভা (রবীন্দ্রনাথ ঠাকুর)', 'Shuva', 3
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 3
);

UPDATE chapters c
SET title_bn = '৩য় অধ্যায়: শুভা (রবীন্দ্রনাথ ঠাকুর)', title_en = 'Shuva'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 3;

-- Chapter 4: Library (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪র্থ অধ্যায়: লাইব্রেরি (রবীন্দ্রনাথ ঠাকুর)', 'Library', 4
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 4
);

UPDATE chapters c
SET title_bn = '৪র্থ অধ্যায়: লাইব্রেরি (রবীন্দ্রনাথ ঠাকুর)', title_en = 'Library'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 4;

-- Chapter 5: Boi Pora (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৫ম অধ্যায়: বই পড়া (প্রমথ চৌধুরী)', 'Boi Pora', 5
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 5
);

UPDATE chapters c
SET title_bn = '৫ম অধ্যায়: বই পড়া (প্রমথ চৌধুরী)', title_en = 'Boi Pora'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 5;

-- Chapter 6: Abhagir Swargo (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৬ষ্ঠ অধ্যায়: অভাগীর স্বর্গ (শরৎচন্দ্র চট্টোপাধ্যায়)', 'Abhagir Swargo', 6
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 6
);

UPDATE chapters c
SET title_bn = '৬ষ্ঠ অধ্যায়: অভাগীর স্বর্গ (শরৎচন্দ্র চট্টোপাধ্যায়)', title_en = 'Abhagir Swargo'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 6;

-- Chapter 7: Niriho Bangali (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৭ম অধ্যায়: নিরীহ বাঙালি (রোকেয়া সাখাওয়াত হোসেন)', 'Niriho Bangali', 7
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 7
);

UPDATE chapters c
SET title_bn = '৭ম অধ্যায়: নিরীহ বাঙালি (রোকেয়া সাখাওয়াত হোসেন)', title_en = 'Niriho Bangali'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 7;

-- Chapter 8: Polli Sahitto (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৮ম অধ্যায়: পল্লিসাহিত্য (মুহম্মদ শহীদুল্লাহ)', 'Polli Sahitto', 8
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 8
);

UPDATE chapters c
SET title_bn = '৮ম অধ্যায়: পল্লিসাহিত্য (মুহম্মদ শহীদুল্লাহ)', title_en = 'Polli Sahitto'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 8;

-- Chapter 9: Uddom O Parishrom (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৯ম অধ্যায়: উদ্যম ও পরিশ্রম (মোহাম্মদ লুৎফর রহমান)', 'Uddom O Parishrom', 9
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 9
);

UPDATE chapters c
SET title_bn = '৯ম অধ্যায়: উদ্যম ও পরিশ্রম (মোহাম্মদ লুৎফর রহমান)', title_en = 'Uddom O Parishrom'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 9;

-- Chapter 10: Jibone Shilper Sthan (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১০ম অধ্যায়: জীবনে শিল্পের স্থান (এস ওয়াজেদ আলি)', 'Jibone Shilper Sthan', 10
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 10
);

UPDATE chapters c
SET title_bn = '১০ম অধ্যায়: জীবনে শিল্পের স্থান (এস ওয়াজেদ আলি)', title_en = 'Jibone Shilper Sthan'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 10;

-- Chapter 11: Aam Aatir Vepu (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১১তম অধ্যায়: আম-আঁটির ভেঁপু (বিভূতিভূষণ বন্দ্যোপাধ্যায়)', 'Aam Aatir Vepu', 11
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 11
);

UPDATE chapters c
SET title_bn = '১১তম অধ্যায়: আম-আঁটির ভেঁপু (বিভূতিভূষণ বন্দ্যোপাধ্যায়)', title_en = 'Aam Aatir Vepu'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 11;

-- Chapter 12: Manush Muhammad (pbuh) (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১২তম অধ্যায়: মানুষ মুহম্মদ (স.) (মোহাম্মদ ওয়াজেদ আলী)', 'Manush Muhammad (pbuh)', 12
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 12
);

UPDATE chapters c
SET title_bn = '১২তম অধ্যায়: মানুষ মুহম্মদ (স.) (মোহাম্মদ ওয়াজেদ আলী)', title_en = 'Manush Muhammad (pbuh)'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 12;

-- Chapter 13: Upekkhito Shoktir Udbodhon (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১৩তম অধ্যায়: উপেক্ষিত শক্তির উদ্বোধন (কাজী নজরুল ইসলাম)', 'Upekkhito Shoktir Udbodhon', 13
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 13
);

UPDATE chapters c
SET title_bn = '১৩তম অধ্যায়: উপেক্ষিত শক্তির উদ্বোধন (কাজী নজরুল ইসলাম)', title_en = 'Upekkhito Shoktir Udbodhon'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 13;

-- Chapter 14: Neemgach (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১৪তম অধ্যায়: নিমগাছ (বনফুল)', 'Neemgach', 14
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 14
);

UPDATE chapters c
SET title_bn = '১৪তম অধ্যায়: নিমগাছ (বনফুল)', title_en = 'Neemgach'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 14;

-- Chapter 15: Shikkha O Monushotto (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১৫তম অধ্যায়: শিক্ষা ও মনুষ্যত্ব (মোতাহের হোসেন চৌধুরী)', 'Shikkha O Monushotto', 15
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 15
);

UPDATE chapters c
SET title_bn = '১৫তম অধ্যায়: শিক্ষা ও মনুষ্যত্ব (মোতাহের হোসেন চৌধুরী)', title_en = 'Shikkha O Monushotto'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 15;

-- Chapter 16: Probash Bondhu (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১৬তম অধ্যায়: প্রবাস বন্ধু (সৈয়দ মুজতবা আলী)', 'Probash Bondhu', 16
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 16
);

UPDATE chapters c
SET title_bn = '১৬তম অধ্যায়: প্রবাস বন্ধু (সৈয়দ মুজতবা আলী)', title_en = 'Probash Bondhu'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 16;

-- Chapter 17: Mamatadi (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১৭তম অধ্যায়: মমতাদি (মানিক বন্দ্যোপাধ্যায়)', 'Mamatadi', 17
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 17
);

UPDATE chapters c
SET title_bn = '১৭তম অধ্যায়: মমতাদি (মানিক বন্দ্যোপাধ্যায়)', title_en = 'Mamatadi'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 17;

-- Chapter 18: Bonmanush (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১৮তম অধ্যায়: বনমানুষ (আবু ইসহাক)', 'Bonmanush', 18
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 18
);

UPDATE chapters c
SET title_bn = '১৮তম অধ্যায়: বনমানুষ (আবু ইসহাক)', title_en = 'Bonmanush'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 18;

-- Chapter 19: Ekattorer Dinguli (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '১৯তম অধ্যায়: একাত্তরের দিনগুলি (জাহানারা ইমাম)', 'Ekattorer Dinguli', 19
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 19
);

UPDATE chapters c
SET title_bn = '১৯তম অধ্যায়: একাত্তরের দিনগুলি (জাহানারা ইমাম)', title_en = 'Ekattorer Dinguli'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 19;

-- Chapter 20: Shadhinota Amar Shadhinota (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২০তম অধ্যায়: স্বাধীনতা আমার স্বাধীনতা (মমতাজউদ্দীন আহমদ)', 'Shadhinota Amar Shadhinota', 20
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 20
);

UPDATE chapters c
SET title_bn = '২০তম অধ্যায়: স্বাধীনতা আমার স্বাধীনতা (মমতাজউদ্দীন আহমদ)', title_en = 'Shadhinota Amar Shadhinota'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 20;

-- Chapter 21: Ekusher Golpo (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২১তম অধ্যায়: একুশের গল্প (জহির রায়হান)', 'Ekusher Golpo', 21
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 21
);

UPDATE chapters c
SET title_bn = '২১তম অধ্যায়: একুশের গল্প (জহির রায়হান)', title_en = 'Ekusher Golpo'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 21;

-- Chapter 22: Amader Sangskriti (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২২তম অধ্যায়: আমাদের সংস্কৃতি (আনিসুজ্জামান)', 'Amader Sangskriti', 22
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 22
);

UPDATE chapters c
SET title_bn = '২২তম অধ্যায়: আমাদের সংস্কৃতি (আনিসুজ্জামান)', title_en = 'Amader Sangskriti'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 22;

-- Chapter 23: Sahitter Rup O Riti (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২৩তম অধ্যায়: সাহিত্যের রূপ ও রীতি (হায়াৎ মামুদ)', 'Sahitter Rup O Riti', 23
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 23
);

UPDATE chapters c
SET title_bn = '২৩তম অধ্যায়: সাহিত্যের রূপ ও রীতি (হায়াৎ মামুদ)', title_en = 'Sahitter Rup O Riti'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 23;

-- Chapter 24: Bangla Shobdo (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২৪তম অধ্যায়: বাঙলা শব্দ (হুমায়ুন আজাদ)', 'Bangla Shobdo', 24
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 24
);

UPDATE chapters c
SET title_bn = '২৪তম অধ্যায়: বাঙলা শব্দ (হুমায়ুন আজাদ)', title_en = 'Bangla Shobdo'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 24;

-- Chapter 25: Amader Notun Gourob Gatha (গদ্য)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২৫তম অধ্যায়: আমাদের নতুন গৌরবগাথা (সংকলিত)', 'Amader Notun Gourob Gatha', 25
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 25
);

UPDATE chapters c
SET title_bn = '২৫তম অধ্যায়: আমাদের নতুন গৌরবগাথা (সংকলিত)', title_en = 'Amader Notun Gourob Gatha'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 25;

-- Chapter 26: Bandana (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২৬তম অধ্যায়: বন্দনা (শাহ মুহম্মদ সগীর)', 'Bandana', 26
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 26
);

UPDATE chapters c
SET title_bn = '২৬তম অধ্যায়: বন্দনা (শাহ মুহম্মদ সগীর)', title_en = 'Bandana'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 26;

-- Chapter 27: Hamd (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২৭তম অধ্যায়: হাম্দ (আলাওল)', 'Hamd', 27
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 27
);

UPDATE chapters c
SET title_bn = '২৭তম অধ্যায়: হাম্দ (আলাওল)', title_en = 'Hamd'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 27;

-- Chapter 28: Bangabani (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২৮তম অধ্যায়: বঙ্গবাণী (আবদুল হাকিম)', 'Bangabani', 28
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 28
);

UPDATE chapters c
SET title_bn = '২৮তম অধ্যায়: বঙ্গবাণী (আবদুল হাকিম)', title_en = 'Bangabani'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 28;

-- Chapter 29: Kopotakkho Nod (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '২৯তম অধ্যায়: কপোতাক্ষ নদ (মাইকেল মধুসূদন দত্ত)', 'Kopotakkho Nod', 29
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 29
);

UPDATE chapters c
SET title_bn = '২৯তম অধ্যায়: কপোতাক্ষ নদ (মাইকেল মধুসূদন দত্ত)', title_en = 'Kopotakkho Nod'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 29;

-- Chapter 30: Jibon Sangeet (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩০তম অধ্যায়: জীবন-সঙ্গীত (হেমচন্দ্র বন্দ্যোপাধ্যায়)', 'Jibon Sangeet', 30
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 30
);

UPDATE chapters c
SET title_bn = '৩০তম অধ্যায়: জীবন-সঙ্গীত (হেমচন্দ্র বন্দ্যোপাধ্যায়)', title_en = 'Jibon Sangeet'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 30;

-- Chapter 31: Pran (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩১তম অধ্যায়: প্রাণ (রবীন্দ্রনাথ ঠাকুর)', 'Pran', 31
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 31
);

UPDATE chapters c
SET title_bn = '৩১তম অধ্যায়: প্রাণ (রবীন্দ্রনাথ ঠাকুর)', title_en = 'Pran'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 31;

-- Chapter 32: Juta Abishkar (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩২তম অধ্যায়: জুতা-আবিষ্কার (রবীন্দ্রনাথ ঠাকুর)', 'Juta Abishkar', 32
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 32
);

UPDATE chapters c
SET title_bn = '৩২তম অধ্যায়: জুতা-আবিষ্কার (রবীন্দ্রনাথ ঠাকুর)', title_en = 'Juta Abishkar'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 32;

-- Chapter 33: Ondhobodhu (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩৩তম অধ্যায়: অন্ধবধূ (যতীন্দ্রমোহন বাগচী)', 'Ondhobodhu', 33
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 33
);

UPDATE chapters c
SET title_bn = '৩৩তম অধ্যায়: অন্ধবধূ (যতীন্দ্রমোহন বাগচী)', title_en = 'Ondhobodhu'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 33;

-- Chapter 34: Jhornar Gaan (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩৪তম অধ্যায়: ঝরনার গান (সত্যেন্দ্রনাথ দত্ত)', 'Jhornar Gaan', 34
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 34
);

UPDATE chapters c
SET title_bn = '৩৪তম অধ্যায়: ঝরনার গান (সত্যেন্দ্রনাথ দত্ত)', title_en = 'Jhornar Gaan'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 34;

-- Chapter 35: Chhayabaji (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩৫তম অধ্যায়: ছায়াবাজি (সুকুমার রায়)', 'Chhayabaji', 35
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 35
);

UPDATE chapters c
SET title_bn = '৩৫তম অধ্যায়: ছায়াবাজি (সুকুমার রায়)', title_en = 'Chhayabaji'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 35;

-- Chapter 36: Jibon Binimoy (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩৬তম অধ্যায়: জীবন বিনিময় (গোলাম মোস্তফা)', 'Jibon Binimoy', 36
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 36
);

UPDATE chapters c
SET title_bn = '৩৬তম অধ্যায়: জীবন বিনিময় (গোলাম মোস্তফা)', title_en = 'Jibon Binimoy'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 36;

-- Chapter 37: Manush (Poem) (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩৭তম অধ্যায়: মানুষ (কাজী নজরুল ইসলাম)', 'Manush (Poem)', 37
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 37
);

UPDATE chapters c
SET title_bn = '৩৭তম অধ্যায়: মানুষ (কাজী নজরুল ইসলাম)', title_en = 'Manush (Poem)'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 37;

-- Chapter 38: Umar Farooq (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩৮তম অধ্যায়: উমর ফারুক (কাজী নজরুল ইসলাম)', 'Umar Farooq', 38
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 38
);

UPDATE chapters c
SET title_bn = '৩৮তম অধ্যায়: উমর ফারুক (কাজী নজরুল ইসলাম)', title_en = 'Umar Farooq'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 38;

-- Chapter 39: Sheidin Ei Math (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৩৯তম অধ্যায়: সেইদিন এই মাঠ (জীবনানন্দ দাশ)', 'Sheidin Ei Math', 39
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 39
);

UPDATE chapters c
SET title_bn = '৩৯তম অধ্যায়: সেইদিন এই মাঠ (জীবনানন্দ দাশ)', title_en = 'Sheidin Ei Math'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 39;

-- Chapter 40: Jabo Ami Tomar Deshe (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪০তম অধ্যায়: যাব আমি তোমার দেশে (জসীমউদ্দীন)', 'Jabo Ami Tomar Deshe', 40
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 40
);

UPDATE chapters c
SET title_bn = '৪০তম অধ্যায়: যাব আমি তোমার দেশে (জসীমউদ্দীন)', title_en = 'Jabo Ami Tomar Deshe'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 40;

-- Chapter 41: Ekti Kafi (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪১তম অধ্যায়: একটি কাফি (বিষ্ণু দে)', 'Ekti Kafi', 41
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 41
);

UPDATE chapters c
SET title_bn = '৪১তম অধ্যায়: একটি কাফি (বিষ্ণু দে)', title_en = 'Ekti Kafi'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 41;

-- Chapter 42: Amar Desh (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪২তম অধ্যায়: আমার দেশ (সুফিয়া কামাল)', 'Amar Desh', 42
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 42
);

UPDATE chapters c
SET title_bn = '৪২তম অধ্যায়: আমার দেশ (সুফিয়া কামাল)', title_en = 'Amar Desh'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 42;

-- Chapter 43: Ami Kono Agontuk Noi (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪৩তম অধ্যায়: আমি কোনো আগন্তুক নই (আহসান হাবীব)', 'Ami Kono Agontuk Noi', 43
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 43
);

UPDATE chapters c
SET title_bn = '৪৩তম অধ্যায়: আমি কোনো আগন্তুক নই (আহসান হাবীব)', title_en = 'Ami Kono Agontuk Noi'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 43;

-- Chapter 44: Brishti (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪৪তম অধ্যায়: বৃষ্টি (ফররুখ আহমদ)', 'Brishti', 44
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 44
);

UPDATE chapters c
SET title_bn = '৪৪তম অধ্যায়: বৃষ্টি (ফররুখ আহমদ)', title_en = 'Brishti'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 44;

-- Chapter 45: May Diner Kobita (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪৫তম অধ্যায়: মে-দিনের কবিতা (সুভাষ মুখোপাধ্যায়)', 'May Diner Kobita', 45
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 45
);

UPDATE chapters c
SET title_bn = '৪৫তম অধ্যায়: মে-দিনের কবিতা (সুভাষ মুখোপাধ্যায়)', title_en = 'May Diner Kobita'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 45;

-- Chapter 46: Asha (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪৬তম অধ্যায়: আশা (সিকান্দার আবু জাফর)', 'Asha', 46
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 46
);

UPDATE chapters c
SET title_bn = '৪৬তম অধ্যায়: আশা (সিকান্দার আবু জাফর)', title_en = 'Asha'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 46;

-- Chapter 47: Poster (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪৭তম অধ্যায়: পোস্টার (আবুল হোসেন)', 'Poster', 47
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 47
);

UPDATE chapters c
SET title_bn = '৪৭তম অধ্যায়: পোস্টার (আবুল হোসেন)', title_en = 'Poster'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 47;

-- Chapter 48: Runner (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪৮তম অধ্যায়: রানার (সুকান্ত ভট্টাচার্য)', 'Runner', 48
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 48
);

UPDATE chapters c
SET title_bn = '৪৮তম অধ্যায়: রানার (সুকান্ত ভট্টাচার্য)', title_en = 'Runner'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 48;

-- Chapter 49: Tomake Paowar Jonne, Hey Shadhinota (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৪৯তম অধ্যায়: তোমাকে পাওয়ার জন্যে, হে স্বাধীনতা (শামসুর রাহমান)', 'Tomake Paowar Jonne, Hey Shadhinota', 49
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 49
);

UPDATE chapters c
SET title_bn = '৪৯তম অধ্যায়: তোমাকে পাওয়ার জন্যে, হে স্বাধীনতা (শামসুর রাহমান)', title_en = 'Tomake Paowar Jonne, Hey Shadhinota'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 49;

-- Chapter 50: Obak Surjodoy (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৫০তম অধ্যায়: অবাক সূর্যোদয় (হাসান হাফিজুর রহমান)', 'Obak Surjodoy', 50
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 50
);

UPDATE chapters c
SET title_bn = '৫০তম অধ্যায়: অবাক সূর্যোদয় (হাসান হাফিজুর রহমান)', title_en = 'Obak Surjodoy'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 50;

-- Chapter 51: Boishakh (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৫১তম অধ্যায়: বোশেখ (আল মাহমুদ)', 'Boishakh', 51
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 51
);

UPDATE chapters c
SET title_bn = '৫১তম অধ্যায়: বোশেখ (আল মাহমুদ)', title_en = 'Boishakh'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 51;

-- Chapter 52: Chunia Amar Arcadia (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৫২তম অধ্যায়: চুনিয়া আমার আর্কেডিয়া (রফিক আজাদ)', 'Chunia Amar Arcadia', 52
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 52
);

UPDATE chapters c
SET title_bn = '৫২তম অধ্যায়: চুনিয়া আমার আর্কেডিয়া (রফিক আজাদ)', title_en = 'Chunia Amar Arcadia'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 52;

-- Chapter 53: Michhil (কবিতা)
INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
SELECT s.id, '৫৩তম অধ্যায়: মিছিল (রুদ্র মুহম্মদ শহিদুল্লাহ)', 'Michhil', 53
FROM subjects s
WHERE s.name_en = 'Bangla Sahitto'
AND NOT EXISTS (
    SELECT 1 FROM chapters c WHERE c.subject_id = s.id AND c.order_index = 53
);

UPDATE chapters c
SET title_bn = '৫৩তম অধ্যায়: মিছিল (রুদ্র মুহম্মদ শহিদুল্লাহ)', title_en = 'Michhil'
FROM subjects s
WHERE c.subject_id = s.id AND s.name_en = 'Bangla Sahitto' AND c.order_index = 53;

