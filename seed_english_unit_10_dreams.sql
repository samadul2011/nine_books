-- ============================================================
-- Unit 10: Dreams (১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams))
-- English For Today — Class 9 (NCTB 2026 Curriculum)
-- Full textbook content extracted line-by-line chapter-wise
-- ============================================================

DO $$
DECLARE
    v_subject_id UUID;
    v_chapter_id UUID;
BEGIN
    -- Find Subject
    SELECT id INTO v_subject_id FROM subjects WHERE name_en = 'English For Today' LIMIT 1;
    IF v_subject_id IS NULL THEN
        RAISE EXCEPTION 'Subject "English For Today" not found. Please run seed_english.sql first.';
    END IF;

    -- Find Chapter (Unit 10)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 10 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 10 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: I Have a Dream
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u10_l01$
# ১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

*After we have studied the unit, we will be able to listen for specific information*

- participate in conversations and discussions

- understand and narrate problems

- take and give interviews

- complete a grid.

---

## 📖 Lesson 1: I Have a Dream

> 📝 **Activity:** Read these texts and say what is common among them.

> 📝 **Activity:** Read the texts again and then work in pairs. Which person do you think is most like you and why? Write a similar text stating your own dream.

c. Read this interview between Sathi Begum,a successful student in JSC and a newspaper reporter, Animesh Roy. The interview is jumbled up.Read the text and then organise the conversation properly.

**Animesh:** So you mean learning from each other?

**Sathi:** There is no magic behind my success. I just worked hard. I followed our teachers' advice, 'The more you read, the more you learn'. I'm grateful to my teachers and parents for guiding me properly.

**Animesh:** Well Swati, we are really so proud of you for your brilliant performance in the JSC exams. Please tell us how you could achieve this success.

**Sathi:** Ohh....and I'm grateful to my school and friends too. Animesh : That's great!

**Sathi:** In my school, we had a nice study group. Whenever we had any problem, we discussed it in our group first. We tried to help each other. And it always worked. Never forget, two heads are better than one.

**Animesh:** I understand why you are grateful to your school but would you explain how you are grateful to your friends, please?

**Sathi:** Exactly that!

**Animesh:** By the way, Swati, what are your dreams for the future?

**Sathi:** To keep up the success in next exams and make my dreams come true. I want to be a scientist. Since my childhood I've known that many people in Bangladesh are under arsenic threat. They are taking arsenic directly from their drinking water and indirectly from the crops and vegetables they eat. It's a kind of slow poisoning. People are helpless. They are suffering from many kinds of diseases. Therefore, I have a dream to carry out a research on how to get rid of this problem, using our own recourses and expertise.

**Animesh:** Wish you luck.

Now listen to the Audio and check whether your answer is correct.

> 📝 **Activity:** Work in pairs. Make questions for your partner to know about his/her dreams and take his/her interview.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Who was Martin Luther King Jr. and what was his historic dream?**
> 💡 **Answer:** Martin Luther King Jr. was a prominent American civil rights leader who dreamed that his children would one day live in a nation where they are judged by character, not skin color.

> ❓ **Q: Where and when did Dr. King deliver his famous 'I Have a Dream' speech?**
> 💡 **Answer:** He delivered the speech on 28 August 1963 from the steps of the Lincoln Memorial in Washington, D.C., before over 250,000 civil rights marchers.
$tag_u10_l01$, 1);

    -- Lesson 2: Lesson 2: What I Dream to Be
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u10_l02$
# ১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### Section A: Work in groups. Read the following words. How are they related to dreams?

imagination, emotion, passion, obsessions, strong desire, colour, rosy, future, mind, brain, plan.

Work in groups, and discuss the following questions:

Do you consider dreams important for life? Why/Why not?

What do you dream at this moment as a student?

What, according to you is the dream of Bangladesh at present?

Give examples of some dreams that are commonly shared by Bangladesh as a nation.

Do you think the world has any common dream? What is that?

### Section C: Listen to the Audio. Three persons are telling about their dreams. Take notes in the following grid to show what they plan to do and what they don't want to do.

|   | plans to | doesn't want to |
| --- | --- | --- |
| 1. Catherine Aich |   |   |
| 2. Masum Billah |   |   |
| 3. Nirmal Drong |   |   |

> 📝 **Activity:** Listen to the texts again and check (✓;x) the statements.

Masum Billah desires to study agriculture as his teacher suggests him to do that.

If Masum qualifies, he will get admitted to a university in his rural area.

Catherine's mother died in a doctor's hand.

If Catherine's family had brought a trained nurse, her mother might have survived.

If Najmun Sultana came a few months ago, Nirmal could take admission to a foreign University.

If Nirmal's dreams come true, his near and dear ones will be more conscious about their rights.

Now make sentences from the following substitution table.

| If Masum | becomes a nurse | he will be a leader in the field |
| --- | --- | --- |
| If Catherine | deserves any merit | of education. |
| IfNirmal | has opportunities | she will serve her community. |
| IfNajmun | called a trained medical person | she could save her mother's life. |
| Sultana | came to Nirmal's class a few days ago | he will be a farmer's friend. they could learn more. |

### Section F: Work in pairs and make sentences reflecting your own life using if

clauses as in the table above.

### Section G: Write a composition about an event in your life that has inspired you to have a dream. Then briefly describe the dream. Make predictions and possibilities.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: How can dreams inspire positive social and political reform?**
> 💡 **Answer:** Dreams inspire people to envision justice, overcome fear, unite against oppression, and pursue peaceful struggle for human dignity and equality.

> ❓ **Q: What sacrifices did civil rights activists make to realize their dreams?**
> 💡 **Answer:** They endured imprisonment, violent attacks, police brutality, and many gave their lives so future generations could enjoy equal voting and human rights.
$tag_u10_l02$, 2);

    -- Lesson 3: Lesson 3: They Had Dreams (Part-1)
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u10_l03$
# ১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: They Had Dreams (Part-1)

Shanta was chatting with one of her foreign friends Jenny. Read the dialogue and tell what the subject of their conversation is.

**Jenny:** Shanta, what's your dream for the future?

**Shanta:** To be a good human being first and then work for my country-no matter whether I become a social worker, an artist, or a professional.

**Jenny:** Wow! I really appreciate your thought! By the way, Shanta, does anyone inspire you in your dreams?

**Shanta:** Certainly. I'm always influenced by the great personalities in our coun-try and abroad. Whenever I read the biography of great people, I try to understand how their dreams helped them to be what they have been.

Jenny Would you please tell me about some of your favourite dreamers?

Shanta Sure! Read the following texts to know about some dreamers in my country. They are my icons as well.

### Section B: Read the text and complete the tasks C and D.

Pritilata Waddedar was born in Chattogram on 5 May 1911. She was a meritorious student at Dr Khastagir Government Girls' School m Chattogram and Eden College, Dhaka. She graduated in philosophy with distinction from Bethune College in Kolkata. In her college days, Pritilata was an activist in the anti-British movement. All through her life, she dreamt of two things: a society without gender discrimination, and her motherland free from British colonial rule.

So, she decided to fight against the British rule.

Soon after, Pritilata became the head teacher of Nandankanon Aparna Charan

'a School in Chattogram. Gradually, she involved herself in Surja Sen's armed

resistance movement. Surja Sen was a famous anti-British movement organiser and revolutionary activist in Chattogram area at that time. In 1932, Surja Sen planned an attack on the Pahartali European

Club. The club was well-known for its notorious sign at its entrance: Dogs and Indians not allowed. Surja Sen assigned Pritilata to lead a team of 10-12 men to attack the Club. The raid was successful but Pritilata, dressed as a man, failed to get out of the Club.

She committed suicide by taking potassium cyanide to avoid arrest. She proved that women can work like men. She also proved that women too needed to be prepared to sacrifice their lives for freedom from the British colonial rule. Her dream finally came true. The British rule came to an end in 1947 though she couldn't see it during her lifetime.

Read the words in Column A and match them with the meanings in Column B.

| Column A | Column B |
| --- | --- |
| graduated | a member of a certain social or political group |
| activist | fight |
| movement | took a university degree |
| gender discrimination | rule by a powerful country over a weaker country |
| colonial rule | battle |
| combat | inequality between male and female |
| gradually | slowly |
| resistance | give responsibilities |
| notorious | activities |
| assign | ill-famed |

### ❓ Now answer the questions.

Where did Pritilata fight?

When did she fight?

Why did she fight?

What was Pritilata's profession?

What do you learn from Pritilata's life?

Now, make questions from the substitution table and match the answers. One is done for you.

| When |   | she graduate in? | On 5 May 1911. |
| --- | --- | --- | --- |
| Where |   | Pritilata born? | In Chattogram |
| What | was | assigned Pritilata to attack | Philosophy. |
| Why | did | the Club? | To fight against the British rule. |
| What |   | Pritilata die? | For its notorious sign-Dogs and |
| Who How |   | the Pahartali European Club famous for? <br> she born? | Indians not allowed. <br> Surja Sen. <br> She committed suicide by taking |
|   |   |   | potassium cyanide. |

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Who was Zahir Raihan and what was his contribution to our Liberation War?**
> 💡 **Answer:** Zahir Raihan was an eminent Bangladeshi novelist, filmmaker, and journalist whose documentary 'Stop Genocide' alerted global consciousness to the atrocities of 1971.

> ❓ **Q: What happened to Zahir Raihan in January 1972?**
> 💡 **Answer:** He went to Mirpur in search of his missing elder brother Shahidullah Kaiser, who had been abducted by Pakistani collaborators, and Zahir Raihan never returned.
$tag_u10_l03$, 3);

    -- Lesson 4: Lesson 4: They Had Dreams (Part 2)
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u10_l04$
# ১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: They Had Dreams (Part 2)

### Section A: Look at the picture. He is a great son of our country. Who is he?

What do you know about him?

### Section B: Read the text.

Zahir Raihan was one of the most talented film makers in Bangladesh. He was born on 19 August 1935 in the village Majupur in Feni district. He was an active worker of the Language Movement. He was one of the ten students to go out in a procession on 21 February 1952 despite a ban on such activities imposed by the authorities. As a result, he and many others were arrested and taken to prison. Raihan was also present at the historical meeting of Amtala on 21 February 1952. He also took part in the mass movement m 1969. In 1971, he joined the Liberation War.

All through his life, Zahir Raihan dreamt of a democratic society, a society that would ensure freedom of speech. He had many dreams about our film industry too. He made a legendary film Jibon Theke Neya based on the Language Movement of 1952. It was a protest against the autocratic government then ruling our country. The family portrayed in that film symbolically represented East Pakistan. The family was ruled by an autocrat who had to go to prison for her conspiracy. During the Liberation War in 1971, this film was shown outside Bangladesh. Celebrated film makers like Satyajit Ray, Mrinal Sen, and Ritwik Ghatak appreciated the film. Raihan gave all the money the film made to the Freedom Fighters' trust. Besides, his great documentary on Pakistani atrocities, Stop Genocide, helped create world sentiment in favour of our liberation war.

On 30 December 1971, someone informed Raihan about an address somewhere at Mirpur where he might find his brother, the famous writer Shahidullah Kaiser, who had gone missing from 14 December 1971. Kaiser was captured and killed by the Pakistani army and the local collaborators during the last days of the war. Accordingly, Raihan left home to get his brother back but he never returned.

Zahir Raihan's dream was fulfilled. But it's a pity that this dreamer could not live to see his dream come true.

Use appropriate information from the text above to complete the grid.

| Zahir Raihan | Zahir Raihan | Zahir Raihan | Zahir Raihan | Zahir Raihan | Zahir Raihan |
| --- | --- | --- | --- | --- | --- |
| participated in | famous as | best <br> document ary | movie based <br> on language movement | 1mssmg <br> smce | his dream |

Read the following sentences and complete them.

Zahir Raihan is famous as ...............................

Raihan was imprisoned because ....................................

He participated in ......................................... and ................

Jibon Theke Neya symbolises ............................................ .

He donated ................................................................... .

He worked to organise by his great documentary Stop Genocide.

His disappearance is a great........................................ .

### Section E: Work in pairs. Discuss.

Why is Zahir Raihan considered a freedom fighter though he was a film maker?

How does the title of the lesson fit the story of Zahir Raihan?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Who was Pritilata Waddedar and what was her patriotic mission?**
> 💡 **Answer:** Pritilata Waddedar was a heroic revolutionary from Chattogram who led a daring armed attack on the European Club at Pahartali in 1932 against British colonial rule.

> ❓ **Q: Why did Pritilata embrace martyrdom by swallowing potassium cyanide?**
> 💡 **Answer:** After being wounded during the assault, she took cyanide to avoid arrest and interrogation by British police, sacrificing herself proudly for motherland's freedom.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Conditional Sentences):**
  - First Conditional: *"If we work together, we **will realize** our dreams."*
  - Second Conditional: *"If I were a leader, I **would prioritize** free education."*
- **Writing Activity (Essay):**
  - Write a paragraph on *"My Dream for a Developed and Fair Bangladesh"*, inspired by Dr. Martin Luther King Jr.'s speech.
$tag_u10_l04$, 4);

END $$;
