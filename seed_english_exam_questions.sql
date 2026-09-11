-- ============================================================
-- Complete Exam Question Bank for English For Today (Class 9)
-- High-Yield Board Standard MCQs for All 17 Units
-- Run this in Supabase SQL Editor to enable Mobile & Web Exams
-- ============================================================

DO $$
DECLARE
    v_subject_id UUID;
    v_chapter_id UUID;
BEGIN
    -- 1. Locate English Subject
    SELECT id INTO v_subject_id FROM subjects WHERE name_en = 'English For Today' LIMIT 1;
    IF v_subject_id IS NULL THEN
        RAISE EXCEPTION 'Subject "English For Today" not found. Please run seed_english_all_units_bundle.sql first.';
    END IF;

    -- ======================================================
    -- Unit 1 Questions (Order Index 1)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 1 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What does ''Sense of Self'' primarily refer to?',
            'What does ''Sense of Self'' primarily refer to?',
            '["One''s ability to imitate others", "A person''s awareness of their own identity, values, and strengths", "Financial wealth and status", "Popularity on social media"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Why is self-awareness crucial during adolescence?',
            'Why is self-awareness crucial during adolescence?',
            '["It helps teenagers understand emotions and make thoughtful choices", "It ensures high marks in exams without study", "It guarantees immediate success", "It eliminates the need for friends"]'::jsonb,
            0
        ),
        (
            v_chapter_id,
            'Which of the following contributes most to building a positive self-image?',
            'Which of the following contributes most to building a positive self-image?',
            '["Comparing oneself constantly to peers", "Focusing on personal strengths and learning from mistakes", "Hiding weaknesses from teachers", "Always agreeing with others"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What is the synonym of ''identity''?',
            'What is the synonym of ''identity''?',
            '["Anonymity", "Individuality", "Disguise", "Conformity"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Choose the correct sentence: ''Every teenager _____ a unique sense of self.''',
            'Choose the correct sentence: ''Every teenager _____ a unique sense of self.''',
            '["develop", "develops", "developing", "are developing"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 1: Added 5 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 2 Questions (Order Index 2)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 2 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What is the primary cause of modern global climate change?',
            'What is the primary cause of modern global climate change?',
            '["Natural lunar cycles", "Human activities like burning fossil fuels and deforestation", "Ocean tides", "Solar eclipses"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Why is Bangladesh exceptionally vulnerable to rising sea levels?',
            'Why is Bangladesh exceptionally vulnerable to rising sea levels?',
            '["It is surrounded by high mountain ranges", "It has no rivers", "It is a low-lying deltaic country with extensive coastlines", "It is situated near the North Pole"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'What is the term for the total greenhouse gases produced by an individual?',
            'What is the term for the total greenhouse gases produced by an individual?',
            '["Carbon credit", "Ozone layer", "Carbon footprint", "Green index"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'What does deforestation directly lead to?',
            'What does deforestation directly lead to?',
            '["Increase in groundwater levels", "Loss of biodiversity and accelerated soil erosion", "Cooler global temperatures", "Reduction of desert areas"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            '''Trees absorb carbon dioxide and release oxygen.'' What type of sentence is this?',
            '''Trees absorb carbon dioxide and release oxygen.'' What type of sentence is this?',
            '["Simple sentence", "Compound sentence", "Complex sentence", "Interrogative sentence"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 2: Added 5 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 3 Questions (Order Index 3)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 3 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What is the primary definition of a pastime?',
            'What is the primary definition of a pastime?',
            '["A compulsory academic subject", "An enjoyable leisure activity done regularly for relaxation", "A commercial business venture", "A household chore"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Which traditional rural game was historically popular in Bangladesh?',
            'Which traditional rural game was historically popular in Bangladesh?',
            '["Cricket", "Ha-du-du (Kabaddi)", "Baseball", "Ice hockey"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Why is reading books considered an ideal pastime?',
            'Why is reading books considered an ideal pastime?',
            '["It broadens worldview, enriches vocabulary, and stimulates imagination", "It requires expensive equipment", "It replaces social interaction", "It guarantees high income"]'::jsonb,
            0
        ),
        (
            v_chapter_id,
            'What is the main negative impact of excessive smartphone screen time?',
            'What is the main negative impact of excessive smartphone screen time?',
            '["Excessive physical stamina", "Physical inactivity and eye strain", "Higher academic memory", "Faster reflex development"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Complete the sentence: ''She is fond _____ reading historical novels.''',
            'Complete the sentence: ''She is fond _____ reading historical novels.''',
            '["with", "in", "of", "for"]'::jsonb,
            2
        );

        RAISE NOTICE 'Unit 3: Added 5 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 4 Questions (Order Index 4)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 4 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'Which country first declared Mother''s Day as a formal national holiday?',
            'Which country first declared Mother''s Day as a formal national holiday?',
            '["The UK", "Denmark", "The USA", "France"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'When is Mother''s Day celebrated by the majority of nations worldwide?',
            'When is Mother''s Day celebrated by the majority of nations worldwide?',
            '["1st day of May", "2nd Sunday of May", "21st of February", "8th of March"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Why did the Chicago workers go on strike on May 1, 1886?',
            'Why did the Chicago workers go on strike on May 1, 1886?',
            '["To demand free transport", "To demand an eight-hour workday", "To protest against new machines", "To ask for holiday bonuses"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Who among the following was martyred on 21 February 1952?',
            'Who among the following was martyred on 21 February 1952?',
            '["Zahir Raihan", "Pritilata Waddedar", "Rafiq, Barkat, Salam, Jabbar", "Zainul Abedin"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'When did UNESCO recognize 21 February as International Mother Language Day?',
            'When did UNESCO recognize 21 February as International Mother Language Day?',
            '["26 March 1971", "17 November 1999", "16 December 1972", "21 February 1952"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What traditional food is customarily eaten on Pahela Boishakh morning?',
            'What traditional food is customarily eaten on Pahela Boishakh morning?',
            '["Biryani", "Panta Ilish", "Pitha", "Kichuri"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 4: Added 6 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 5 Questions (Order Index 5)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 5 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What caused the ferry boat to sink in Jamil''s story?',
            'What caused the ferry boat to sink in Jamil''s story?',
            '["Collision with a large steamer", "A leak in the boat bottom", "Too many passengers rushing aboard during sudden stormy weather", "The boatman fell asleep"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'What is a direct consequence of rapid population growth on arable land?',
            'What is a direct consequence of rapid population growth on arable land?',
            '["Farmland expands rapidly", "Farmland is converted into houses and factories", "Soil fertility doubles", "Crop varieties increase"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'How did Lipi successfully avoid early child marriage at age fourteen?',
            'How did Lipi successfully avoid early child marriage at age fourteen?',
            '["She ran away to another city", "With help from her teachers, headmaster, and classmates", "Her parents changed their mind alone", "The marriage registrar refused"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Why is vocational and technical education vital for Bangladesh?',
            'Why is vocational and technical education vital for Bangladesh?',
            '["It reduces school attendance", "It transforms youth into a productive, skilled workforce", "It is only meant for dropouts", "It costs less than primary school"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Choose the correct passive voice: ''The police attacked the peaceful strikers.''',
            'Choose the correct passive voice: ''The police attacked the peaceful strikers.''',
            '["The peaceful strikers are attacked by the police.", "The peaceful strikers were attacked by the police.", "The peaceful strikers attacked the police.", "The police was attacked by strikers."]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 5: Added 5 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 6 Questions (Order Index 6)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 6 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What is Nepal popularly known as around the world?',
            'What is Nepal popularly known as around the world?',
            '["The Land of the Rising Sun", "The Land of the Everest", "The Emerald Isle", "The Pearl of the Orient"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Why is Sri Lanka called the ''Pearl of the Indian Ocean''?',
            'Why is Sri Lanka called the ''Pearl of the Indian Ocean''?',
            '["It produces the most pearls in the world", "Due to its teardrop shape, rich biodiversity, and natural beauty", "It is shaped like an oyster", "It was discovered by divers"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What is the primary environmental threat facing the Maldives?',
            'What is the primary environmental threat facing the Maldives?',
            '["Desertification", "Rising sea level due to its low elevation", "Volcanic eruptions", "Deforestation"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What philosophy does Bhutan use to measure its national development?',
            'What philosophy does Bhutan use to measure its national development?',
            '["Gross Domestic Product (GDP)", "Gross National Happiness (GNH)", "Industrial Output Index", "Military Strength Index"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What is the capital city of Nepal?',
            'What is the capital city of Nepal?',
            '["Thimphu", "Colombo", "Kathmandu", "Male"]'::jsonb,
            2
        );

        RAISE NOTICE 'Unit 6: Added 5 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 7 Questions (Order Index 7)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 7 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'Who is celebrated as ''Shilpacharya'' in Bangladesh?',
            'Who is celebrated as ''Shilpacharya'' in Bangladesh?',
            '["SM Sultan", "Zainul Abedin", "Quamrul Hassan", "Hashem Khan"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What historical event inspired Zainul Abedin''s internationally acclaimed sketches?',
            'What historical event inspired Zainul Abedin''s internationally acclaimed sketches?',
            '["The 1952 Language Movement", "The 1943 Bengal Famine", "The 1971 Liberation War", "The 1969 Mass Uprising"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Who pioneered the art of mime in Bangladesh and earned France''s Molière Award?',
            'Who pioneered the art of mime in Bangladesh and earned France''s Molière Award?',
            '["Aly Zaker", "Partha Pratim Majumder", "Asaduzzaman Noor", "Mustafa Monwar"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'In which year was Mother Teresa awarded the Nobel Peace Prize?',
            'In which year was Mother Teresa awarded the Nobel Peace Prize?',
            '["1971", "1979", "1985", "1997"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What famous quote did Steve Jobs share with Stanford university graduates?',
            'What famous quote did Steve Jobs share with Stanford university graduates?',
            '["''Work hard, play hard''", "''Stay hungry, stay foolish''", "''Knowledge is power''", "''Slow and steady wins the race''"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 7: Added 5 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 8 Questions (Order Index 8)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 8 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'Where is the historic Shat Gambuj Mosque located?',
            'Where is the historic Shat Gambuj Mosque located?',
            '["Rajshahi", "Bagerhat", "Sylhet", "Dinajpur"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'How many domes does the Shat Gambuj Mosque actually have in total?',
            'How many domes does the Shat Gambuj Mosque actually have in total?',
            '["60 domes", "77 domes", "81 domes", "99 domes"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'Who established the ancient Somapura Mahavihara in Paharpur?',
            'Who established the ancient Somapura Mahavihara in Paharpur?',
            '["King Gopala", "King Dharmapala", "King Ashoka", "King Sasanka"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Which country presented the Statue of Liberty to the United States?',
            'Which country presented the Statue of Liberty to the United States?',
            '["United Kingdom", "Germany", "France", "Italy"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'What unique geographic record belongs to Lake Baikal in Siberia?',
            'What unique geographic record belongs to Lake Baikal in Siberia?',
            '["It is the largest saltwater sea", "It is the warmest lake in winter", "It is the oldest and deepest freshwater lake on Earth", "It has no aquatic life"]'::jsonb,
            2
        );

        RAISE NOTICE 'Unit 8: Added 5 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 9 Questions (Order Index 9)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 9 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What characterizes an unconventional job?',
            'What characterizes an unconventional job?',
            '["A mandatory government post", "A non-traditional career driven by personal passion and creativity", "A job with fixed pension only", "An illegal enterprise"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Which of the following is considered an unusual or weird job?',
            'Which of the following is considered an unusual or weird job?',
            '["Bank teller", "Civil engineer", "Professional line stander", "School teacher"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'Which region in Bangladesh has become famous as the national floriculture hub?',
            'Which region in Bangladesh has become famous as the national floriculture hub?',
            '["Sreemangal in Moulvibazar", "Gadkhali in Jashore", "Haluaghat in Mymensingh", "Teknaf in Cox''s Bazar"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What skill is most critical for a successful floral designer?',
            'What skill is most critical for a successful floral designer?',
            '["Heavy vehicle driving", "Aesthetic sense of color, arrangement, and flower preservation", "Computer programming", "Chemical manufacturing"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 9: Added 4 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 10 Questions (Order Index 10)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 10 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'Who delivered the world-renowned ''I Have a Dream'' speech in 1963?',
            'Who delivered the world-renowned ''I Have a Dream'' speech in 1963?',
            '["Nelson Mandela", "Martin Luther King Jr.", "Abraham Lincoln", "Barack Obama"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What was the core message of Dr. Martin Luther King Jr.''s dream?',
            'What was the core message of Dr. Martin Luther King Jr.''s dream?',
            '["Creating a separate state for minorities", "Judging people by the content of their character, not skin color", "Ending all immigration", "Gaining political monopoly"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Which acclaimed documentary was created by Zahir Raihan during 1971?',
            'Which acclaimed documentary was created by Zahir Raihan during 1971?',
            '["Jibon Theke Neya", "Stop Genocide", "Let There Be Light", "Kancher Deyal"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Where did heroic freedom fighter Pritilata Waddedar lead a raid in 1932?',
            'Where did heroic freedom fighter Pritilata Waddedar lead a raid in 1932?',
            '["Dhaka Cantonment", "Pahartali European Club in Chattogram", "Kolkata Writers'' Building", "Chittagong Armoury"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 10: Added 4 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 11 Questions (Order Index 11)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 11 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What tragic event takes place in the poem ''The Sands of Dee''?',
            'What tragic event takes place in the poem ''The Sands of Dee''?',
            '["A ship collides with rocks", "Mary drowns while calling cattle home across the rising tide", "A village is flooded by rain", "A fisherman is lost at sea"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'In Robert Frost''s poem, why can''t the traveler stay in the lovely snowy woods?',
            'In Robert Frost''s poem, why can''t the traveler stay in the lovely snowy woods?',
            '["Because his horse refuses to stop", "Because he has promises to keep and miles to go before sleeping", "Because of a severe blizzard", "Because the owner told him to leave"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Why was Rosamond disappointed with the purple jar in Maria Edgeworth''s story?',
            'Why was Rosamond disappointed with the purple jar in Maria Edgeworth''s story?',
            '["The jar broke immediately", "The purple color came merely from foul liquid inside plain glass", "Her father took it away", "The shopkeeper cheated on the price"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'In Shakespeare''s ''The Merchant of Venice'', what bond did Shylock demand?',
            'In Shakespeare''s ''The Merchant of Venice'', what bond did Shylock demand?',
            '["Antonio''s ship and cargo", "A pound of flesh from Antonio''s body", "Bassanio''s ancestral estate", "Three thousand golden crowns"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'How did Portia successfully defend Antonio in court?',
            'How did Portia successfully defend Antonio in court?',
            '["By paying ten times the money", "By proving the bond allowed flesh but not a single drop of blood", "By arresting Shylock before trial", "By appealing to the Duke''s mercy alone"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 11: Added 5 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 12 Questions (Order Index 12)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 12 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What do ''roots'' symbolically represent in human life?',
            'What do ''roots'' symbolically represent in human life?',
            '["Physical tree roots only", "One''s birthplace, family heritage, and ancestral culture", "One''s financial savings", "Legal citizenship papers"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Why do urban migrants feel an irresistible urge to return home during festivals?',
            'Why do urban migrants feel an irresistible urge to return home during festivals?',
            '["Because offices force them to leave", "Due to the emotional pull of their roots and family ties", "Because city markets are closed", "To escape city pollution alone"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Which celebrated Bengali poet returned to his mother tongue after failing in English poetry?',
            'Which celebrated Bengali poet returned to his mother tongue after failing in English poetry?',
            '["Rabindranath Tagore", "Kazi Nazrul Islam", "Michael Madhusudan Dutt", "Jibanananda Das"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'What epic masterpiece did Michael Madhusudan Dutt compose in Bangla blank verse?',
            'What epic masterpiece did Michael Madhusudan Dutt compose in Bangla blank verse?',
            '["Captive Ladie", "Meghnad Badh Kavya", "Bisarjan", "Sanchaita"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 12: Added 4 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 13 Questions (Order Index 13)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 13 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What is a major psychological cause of modern loneliness?',
            'What is a major psychological cause of modern loneliness?',
            '["Living in a peaceful village", "Superficial online interactions replacing genuine human connection", "Reading too many books", "Regular physical exercise"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What happens to Mrs. Mallard in Kate Chopin''s ''The Story of an Hour''?',
            'What happens to Mrs. Mallard in Kate Chopin''s ''The Story of an Hour''?',
            '["She moves to Paris happily", "She dies of heart disease upon the shock of seeing her husband alive", "She remarries immediately", "She inherits a large estate"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What is the dramatic irony at the end of ''The Story of an Hour''?',
            'What is the dramatic irony at the end of ''The Story of an Hour''?',
            '["Her husband was never married to her", "Doctors said she died of joy, but she died from losing her new freedom", "The train accident never occurred", "She survived the shock"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 13: Added 3 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 14 Questions (Order Index 14)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 14 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'Which of the following is a renewable energy source?',
            'Which of the following is a renewable energy source?',
            '["Coal", "Natural gas", "Solar energy", "Petroleum"]'::jsonb,
            2
        ),
        (
            v_chapter_id,
            'Why are renewable energy sources considered environmentally superior?',
            'Why are renewable energy sources considered environmentally superior?',
            '["They cost zero money to install", "They produce negligible greenhouse gas emissions and replenish naturally", "They require no maintenance", "They are imported from overseas"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'How has the Solar Home System (SHS) program impacted rural Bangladesh?',
            'How has the Solar Home System (SHS) program impacted rural Bangladesh?',
            '["It replaced all national grid lines", "It provided clean off-grid electricity to millions of rural families", "It was only installed in urban schools", "It powered heavy industries"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What natural advantage does Bangladesh possess for solar energy generation?',
            'What natural advantage does Bangladesh possess for solar energy generation?',
            '["High geothermal volcanic activity", "Abundant sunlight throughout most of the year", "Strong constant desert winds", "Large glacial rivers"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 14: Added 4 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 15 Questions (Order Index 15)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 15 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What is the primary function of electronic communication (e-communication)?',
            'What is the primary function of electronic communication (e-communication)?',
            '["Delivering handwritten letters by courier", "Instant transmission of digital text, voice, image, and video data", "Printing physical newspapers", "Broadcasting analog radio only"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Which cyber safety rule is most vital for students on social media?',
            'Which cyber safety rule is most vital for students on social media?',
            '["Accept friend requests from every stranger", "Never share confidential passwords or private personal information", "Post current location in real-time always", "Keep accounts completely public"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'How did e-learning prove indispensable during the COVID-19 pandemic?',
            'How did e-learning prove indispensable during the COVID-19 pandemic?',
            '["It eliminated all school examinations", "It enabled continuous distance education when schools were shut down", "It made textbooks obsolete", "It doubled summer holidays"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 15: Added 3 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 16 Questions (Order Index 16)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 16 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'How has modern society''s view of graffiti changed over time?',
            'How has modern society''s view of graffiti changed over time?',
            '["From high art to illegal nuisance only", "From simple vandalism to a recognized form of public art and sociopolitical expression", "It is now banned worldwide", "It is exclusively used for commercial ads"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'What historic role have street murals and graffiti played in Bangladesh?',
            'What historic role have street murals and graffiti played in Bangladesh?',
            '["They were only used to advertise cinema films", "They gave visual voice to democratic uprisings, language rights, and freedom", "They were painted solely by foreign artists", "They had no social significance"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 16: Added 2 exam MCQs';
    END IF;

    -- ======================================================
    -- Unit 17 Questions (Order Index 17)
    -- ======================================================
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 17 LIMIT 1;
    IF v_chapter_id IS NOT NULL THEN
        -- Clean existing questions for clean re-run
        DELETE FROM exam_questions WHERE chapter_id = v_chapter_id;

        INSERT INTO exam_questions (chapter_id, question_bn, question_en, options_json, correct_answer_index)
        VALUES
        (
            v_chapter_id,
            'What is the best strategy for answering reading comprehension questions in exams?',
            'What is the best strategy for answering reading comprehension questions in exams?',
            '["Copying the entire first paragraph", "Reading the passage carefully, understanding context, and answering concisely in one''s own words", "Guessing without reading the passage", "Writing answers in Bengali on an English paper"]'::jsonb,
            1
        ),
        (
            v_chapter_id,
            'Why is consistent grammatical accuracy essential in English writing examinations?',
            'Why is consistent grammatical accuracy essential in English writing examinations?',
            '["It allows students to skip vocabulary", "It ensures clear communication and prevents ambiguity in meaning", "Grammar has no marks in exams", "It only matters in oral tests"]'::jsonb,
            1
        );

        RAISE NOTICE 'Unit 17: Added 2 exam MCQs';
    END IF;

    RAISE NOTICE 'All English Units Exam Questions Seeded Successfully!';
END $$;
