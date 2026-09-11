-- ============================================================
-- NineBooks — English For Today (Class 9-10)
-- Subject and Chapters Seed File (NCTB 2026 Curriculum)
-- ============================================================

DO $$
DECLARE
    v_subject_id UUID;
BEGIN
    -- 1. Insert or get English For Today Subject
    SELECT id INTO v_subject_id FROM subjects WHERE name_en = 'English For Today' LIMIT 1;

    IF v_subject_id IS NULL THEN
        INSERT INTO subjects (name_bn, name_en, icon_url)
        VALUES ('ইংরেজি', 'English For Today', 'https://img.icons8.com/color/96/books.png')
        RETURNING id INTO v_subject_id;
        RAISE NOTICE 'Created Subject: English For Today (%)', v_subject_id;
    ELSE
        RAISE NOTICE 'Found existing Subject: English For Today (%)', v_subject_id;
    END IF;

    -- 2. Insert or update 16 Units + Sample Question Paper
    -- Unit 1
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 1) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১ম অধ্যায়: আত্মপরিচয় (Unit 1: Sense of Self)', 'Sense of Self', 1);
    ELSE
        UPDATE chapters SET title_bn = '১ম অধ্যায়: আত্মপরিচয় (Unit 1: Sense of Self)', title_en = 'Sense of Self'
        WHERE subject_id = v_subject_id AND order_index = 1;
    END IF;

    -- Unit 2
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 2) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)', 'Climate Change', 2);
    ELSE
        UPDATE chapters SET title_bn = '২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)', title_en = 'Climate Change'
        WHERE subject_id = v_subject_id AND order_index = 2;
    END IF;

    -- Unit 3
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 3) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)', 'Pastimes', 3);
    ELSE
        UPDATE chapters SET title_bn = '৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)', title_en = 'Pastimes'
        WHERE subject_id = v_subject_id AND order_index = 3;
    END IF;

    -- Unit 4
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 4) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)', 'Events and Festivals', 4);
    ELSE
        UPDATE chapters SET title_bn = '৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)', title_en = 'Events and Festivals'
        WHERE subject_id = v_subject_id AND order_index = 4;
    END IF;

    -- Unit 5
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 5) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)', 'Problems Around Us', 5);
    ELSE
        UPDATE chapters SET title_bn = '৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)', title_en = 'Problems Around Us'
        WHERE subject_id = v_subject_id AND order_index = 5;
    END IF;

    -- Unit 6
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 6) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)', 'Our Neighbours', 6);
    ELSE
        UPDATE chapters SET title_bn = '৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)', title_en = 'Our Neighbours'
        WHERE subject_id = v_subject_id AND order_index = 6;
    END IF;

    -- Unit 7
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 7) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)', 'People Who Stand Out', 7);
    ELSE
        UPDATE chapters SET title_bn = '৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)', title_en = 'People Who Stand Out'
        WHERE subject_id = v_subject_id AND order_index = 7;
    END IF;

    -- Unit 8
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 8) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage)', 'World Heritage', 8);
    ELSE
        UPDATE chapters SET title_bn = '৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage)', title_en = 'World Heritage'
        WHERE subject_id = v_subject_id AND order_index = 8;
    END IF;

    -- Unit 9
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 9) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৯ম অধ্যায়: অপ্রচলিত পেশা (Unit 9: Unconventional Jobs)', 'Unconventional Jobs', 9);
    ELSE
        UPDATE chapters SET title_bn = '৯ম অধ্যায়: অপ্রচলিত পেশা (Unit 9: Unconventional Jobs)', title_en = 'Unconventional Jobs'
        WHERE subject_id = v_subject_id AND order_index = 9;
    END IF;

    -- Unit 10
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 10) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams)', 'Dreams', 10);
    ELSE
        UPDATE chapters SET title_bn = '১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams)', title_en = 'Dreams'
        WHERE subject_id = v_subject_id AND order_index = 10;
    END IF;

    -- Unit 11
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 11) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)', 'Reading from English Literature', 11);
    ELSE
        UPDATE chapters SET title_bn = '১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)', title_en = 'Reading from English Literature'
        WHERE subject_id = v_subject_id AND order_index = 11;
    END IF;

    -- Unit 12
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 12) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১২শ অধ্যায়: শিকড় (Unit 12: Roots)', 'Roots', 12);
    ELSE
        UPDATE chapters SET title_bn = '১২শ অধ্যায়: শিকড় (Unit 12: Roots)', title_en = 'Roots'
        WHERE subject_id = v_subject_id AND order_index = 12;
    END IF;

    -- Unit 13
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 13) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৩শ অধ্যায়: একাকীত্ব (Unit 13: Loneliness)', 'Loneliness', 13);
    ELSE
        UPDATE chapters SET title_bn = '১৩শ অধ্যায়: একাকীত্ব (Unit 13: Loneliness)', title_en = 'Loneliness'
        WHERE subject_id = v_subject_id AND order_index = 13;
    END IF;

    -- Unit 14
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 14) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy)', 'Renewable Energy', 14);
    ELSE
        UPDATE chapters SET title_bn = '১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy)', title_en = 'Renewable Energy'
        WHERE subject_id = v_subject_id AND order_index = 14;
    END IF;

    -- Unit 15
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 15) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৫শ অধ্যায়: মাধ্যম ও ই-যোগাযোগ (Unit 15: Media & E-communication)', 'Media and Modes of E-communication', 15);
    ELSE
        UPDATE chapters SET title_bn = '১৫শ অধ্যায়: মাধ্যম ও ই-যোগাযোগ (Unit 15: Media & E-communication)', title_en = 'Media and Modes of E-communication'
        WHERE subject_id = v_subject_id AND order_index = 15;
    END IF;

    -- Unit 16
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 16) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৬শ অধ্যায়: গ্রাফিতি (Unit 16: Graffiti)', 'Graffiti', 16);
    ELSE
        UPDATE chapters SET title_bn = '১৬শ অধ্যায়: গ্রাফিতি (Unit 16: Graffiti)', title_en = 'Graffiti'
        WHERE subject_id = v_subject_id AND order_index = 16;
    END IF;

    -- Unit 17
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 17) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৭শ অধ্যায়: নমুনা প্রশ্নপত্র (Sample Question Paper)', 'Sample Question Paper', 17);
    ELSE
        UPDATE chapters SET title_bn = '১৭শ অধ্যায়: নমুনা প্রশ্নপত্র (Sample Question Paper)', title_en = 'Sample Question Paper'
        WHERE subject_id = v_subject_id AND order_index = 17;
    END IF;

END $$;
