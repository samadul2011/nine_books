-- ============================================================
-- Unit 12: Roots (১২শ অধ্যায়: শিকড় (Unit 12: Roots))
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

    -- Find Chapter (Unit 12)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 12 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 12 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: My Roots
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u12_l01$
# ১২শ অধ্যায়: শিকড় (Unit 12: Roots)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied the unit, we will able to participate in conversations and debates*

- exchange personal information

- narrate incidents and events in a logical sequence

- present own ideas, give and ask for information

- write letters to newspapers

- lodge complaint

- present information in a chart.

---

## 📖 Lesson 1: My Roots

How do you feel looking at the photo?

People rush to their roots on different occasions

Read the following text.

Eid is the main religious festival of the Muslims in Bangladesh. Eid means happiness. Eveyone wants to share this happiness with near and dear ones. So most of the people, who are living outside their homes for different reasons have a strong desire to get back home during the Eid vacation. As a result, there is a mad rush to board buses, trains, or launches for going home. This often causes transport accidents that take away many lives. However, these cannot stop people from going home to meet their family, in-laws, or friends. What makes people rush for their homes in spite of serious hazards? This is nothing but people's desire to return to the roots. Do human beings have roots like the trees? The answer is 'yes' but unlike the roots of the trees they are invisible, they lie in our minds. It's these roots that make a bond between us and family

members, in-laws, friends, neighbours or even between us and the land where we were born and grow up. In that sense our families, our land of birth, relatives, our culture, traditions, or surroundings are our roots. And wherever we stay, we feel the power of our roots. It's our roots that develop our identity making us what we are. When we lose that bond, we become rootless. Human beings who do not have any roots are a non-entity. In other words, they do not have an identity. They don't know where they are from, and/or where they are heading to. This often makes them feel empty and lost.

> 📝 **Activity:** Read the text in the speech bubbles. Make questions based on the bubbles and then compare them in pairs.

0

Fill in the grid with appropriate information from the text above.

| That makes our roots | The problems of a rootless person |
| --- | --- |
| 1. .................................... | 1. ........................................... |
| 2. .................................... | 2............................................ |
| 3. .................................... | 3............................................ |
| 4. .................................... | 4............................................ |
| 5. .................................... | 5............................................ |

> 📝 **Activity:** Work in pairs. Talk about these questions.

Do you have any root other than the place where you are living now? If yes, where is it and who live there? If not, why not?

How do you label your roots? I have my roots in

D a remote rural village D a village D a semi-urban area (upazila) Cl a small town Cl a midsize city Cl a suburb Cl a city

Do you feel any attraction for your roots?

How do you nourish your roots?

What, according to you, are the reasons why people become rootless?

Make a classroom survey and present in a chart the types of roots your classmates have.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What does the concept of 'roots' mean in human life?**
> 💡 **Answer:** Roots represent a person's ancestral home, cultural heritage, family background, and the social soil from which their identity and values sprung.

> ❓ **Q: Why do millions of people rush from cities to their home villages during Eid?**
> 💡 **Answer:** They are drawn by the powerful invisible pull of their roots, eager to reunite with elderly parents, relatives, and childhood memories.
$tag_u12_l01$, 1);

    -- Lesson 2: Lesson 2: My Roots -2
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u12_l02$
# ১২শ অধ্যায়: শিকড় (Unit 12: Roots)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: My Roots -2

Read the following remarks and find out who is like you.

I simply just can't bear the people who don't have any respect for their roots.

Haridas Soren

We have a moderately big house in a town but we frequently go to our village home as well. I always feel so at home when I visit my village and stay with my near ones.

- Bidisha Yasmin

I live in a small apartment with my morn, dad, and my little sister. Most of my relatives live in a village. I seldom go over there as I don't like village life.

- Ifti Mahmud

Some people are so eager to leave their own homes, friends, and everything behind only to be a part of the city life. They are not for me.

Antara Gomes To be frank, I don't get used to visiting my relatives in the village.

- Jhilik Ahsan

I live in a city but I never forget my parents are from a tiny but beautiful village. I know I have my roots there and I'm so proud of that.

- Anupom Chakma

I just can't stand the people who have grown up in the village but forget it once they are out from there.

- Debashish Biswash

Now make your own statement about your roots.

Read the above statements of different in A people again and make two lists-one stating what they like and the other stating their dislikes.

Do you agree/disagree with their statements? Write down why.

Read the following text.

Mainul Islam is a qualified farmer in Naogaon. Mr.Islam was very brilliant as a student. He took his higher education from Bangladesh Agricultural University in Mymensingh. He then came back home and started advanced farming. He has two other brothers who are graduates in different disciplines. The specialty of the Islam family is that they all are living in their village and all are renowned in their own fields. Mr. Islam's younger brother, who is a Rajshahi University graduate, is a science teacher in a local school. His youngest brother is a social science graduate who likes to start a local NGO to work for this area. When asked "What makes you decide to stay here in this village?" Mr Islam smiled and said, "Look, it's true that we could leave this village for city life. I could be banker or my brothers could be bureaucrats. But it didn't attract us. We are sons of this soil. Yes, we have education but does education prepare a person only to be an officer? Don't we have any obligation to the soil that has made us what we are?" He also added that not every educated individual should be a job seeker. He added that since his discipline was agriculture, after his education he took the occupation of a farmer. In response to a question whether they had any frustration living in a village, he confirmed that they were indeed very pleased with their life. He said, "I work in my own farm, stay with my family members, pass time with my old friends, and sleep at my own home. All these count a lot."

Mr. Islam is right. Many people go to cities and forget or loosen their roots knowingly or unknowingly. Mr Islam and his brothers are great-they haven't forgotten their roots. They not only stuck to their own roots, they have been torch bearers for others to be respectful of their roots.

> 📝 **Activity:** Work in pairs. If you are given a chance to meet Mr. Islam, what questions would you ask him? Make both wh-questions and yes/no questions.

Read the statements in columns A and B. Then match them to make complete sentences.

| Column A | Column B |
| --- | --- |
| Mr.Islam <br> The specialty oflslam's brothers is <br> Mr. Islam never believes that <br> Mr.Islam also believes <br> Staying with the roots | if anyone has education she/he <br> must have a job. <br> has multi- faceted opportunities. <br> graduated from Bangladesh Agricultural University. <br> in the duty toward roots. <br> that city life couldn't attract them. |

Do you like Mr. Islam? Why/ Why not? Write down some reasons in favour of your opinion and share with your partner.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What happens to an individual who severs their connection with their roots?**
> 💡 **Answer:** A rootless person often feels alienated, spiritually empty, lacking a firm sense of belonging, like a tree without roots vulnerable to being toppled.

> ❓ **Q: How does maintaining ties with rural roots strengthen society?**
> 💡 **Answer:** It promotes intergenerational harmony, sustains rural economies through remittances, and preserves rich indigenous folk culture.
$tag_u12_l02$, 2);

    -- Lesson 3: Lesson 3: The Return of the Native
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u12_l03$
# ১২শ অধ্যায়: শিকড় (Unit 12: Roots)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: The Return of the Native

### Section A: Read the following text.

Michael Madhusudan Dutt, was a celebrated 19th century Bangalee poet and dramatist. He was born in Sagordari on the bank of the Kopotaksho River, a village in Keshabpur Upazila under Jashore district.

From an early age, Michael aspired to be an Englishman in form and manner. Though he was born in a sophisticated Hindu family, he converted to Christianity as a young man, much to the ire of his family, and adopted the first name Michael. In his childhood, he was recognised by his teachers as a precious child with a gift of literary talent. His early exposure to English education and European literature at home and his college inspired him to imitate the English in taste, manners and intellect.

Since his adolescence, he started believing that he was born on the wrong side of the planet, and that his society was unable to appreciate his talent. He also believed that the West would be more receptive to his creative genius.

Madhusudan was an ardent follower of the famous English poet Lord Byron. So after adopting Christianity, he went to Europe and started composing poems and plays in English. They showed his higher level of intellectual ability. However, he failed to gain the right appreciation. To his utter frustration he found that he was not esteemed as a native writer of English literature. Out of his frustration, he composed a sonnet in Bangla "Kopotaksha Nad" which earned him huge reputation in Bangla. Gradually he could realise that his true identity lay in Bengal and he was a sojourner in Europe. Afterwards, he regretted his fascination for England and the West. He came back to Bengal and devoted himself to Bangla literature from this period. He has written the first Bangla epic Meghnad BadhKabya.

Write notes about Madhusudan under the followinheadins. One is done for you.

| Madhusudan as a man | Madhusudan as a poet | Attitude to his roots |
| --- | --- | --- |
|   | celebrated 19th century Bengali poet and dramatist |   |

Read some more information on Madhusudan. Make questions for those statements. a................................................................................

He introduced amitrakshar chhanda (blank verse) in Bangla literature. b................................................................................

Madhusudan passed most of his European days in Versailles, France.

c................................................................................

His days in Europe were full of hardship. d................................................................................

It was unbearable to him as he had to suffer extreme poverty.

e................................................................................

It was Iswar Chandra Vidyasagar who helped him to pay off his debts and return to India.

f................................................................................

Madhusudan married twice. While living in Madras, he married Rebecca Mactavys of English descent.

> 📝 **Activity:** Work in pairs and decide how the story of Madhusudan is related to the unit theme Roots.

Read the sentences carefully and identify the logical sequence of events in Mikhail Naimy's life. Then rearrange the sentences in the correct order to form a meaningful paragraph.

He later returned to Lebanon, where he dedicated himself to Arabic literature and philosophy.

Mikhail Naimy was born in 1889 in the small village of Baskinta, Lebanon.

His works often explored themes of spirituality, humanism, and the connec-tion between East and West.

During his time in the U.S., he became a prominent member of the New York Pen League, a group of Arab-American writers.

Naimy is best known for his book The Book of Mirdad, a spiritual masterpiece that gained international acclaim.

He moved to the United States in 1911 to pursue higher education, studying law and literature.

Naimy's contributions to Arabic literature earned him a lasting legacy as one of the Mahjar movement's most influential figures.

After completing his studies, he began writing poetry and essays in both Arabic and English.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Who was Michael Madhusudan Dutt and why did he leave his homeland?**
> 💡 **Answer:** Michael Madhusudan Dutt was a 19th-century Bengali poetic genius who embraced Christianity and Western lifestyle, dreaming of literary fame in English literature.

> ❓ **Q: What painful realization brought Madhusudan back to his mother tongue?**
> 💡 **Answer:** Experiencing disappointment and poverty in Europe, he realized that true poetic immortality lay in his mother tongue Bangla, leading him to create masterpieces like 'Meghnad Badh Kavya'.
$tag_u12_l03$, 3);

    -- Lesson 4: Lesson 4: In Search of Identity
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u12_l04$
# ১২শ অধ্যায়: শিকড় (Unit 12: Roots)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: In Search of Identity

Do you ever read the Problem Page in magazines or newspapers? What kinds of problems do people often write about?

Here are two letters from the problem page in the Daily Bangladesh.

Read them and discuss with a partner what you think the content of

'a the letters is. Use a dictionary to check any new words.

Look at the texts. Say who/what they, their, this, that, it refer to in the following sentences.

They are living in some makeshift shacks.

Within few square yards in their possession they sleep, socialise, cook and even beautify themselves.

This cannot be the picture oflife in a civilized society.

Why don't you form a committee with other young people in your locality that will teach them basic health and hygiene?

Give it a try.

> 📝 **Activity:** Work in pairs. First,write two problem letters. The problems can be personal or of your locality as in B. Read your partner's problem and give suggestions.

Work in groups. Take roles as a TV Anchor, Mojnu Mia, Fazlur Rahman, and Nilima Chowdhury as given in the following text. Put suitable verb form into each gap of the text related to your role. Then, act out the talk show.

**TV Anchor:** Viewers, ................... to our program 'Looking back to roots'.

Today we ................... three guests with us- Mr Mojnu Mia, a slum dweller, Mr Fazlur Rahman, an immigrant to UK, and a social scientist Nilima Chowdhury. Today we ...................

to see how people ................... when they are detached

from their roots, what might some consequences, and how a social scientist ........................ them. Let me

................... to Mr. Mojnu Mia. Mojnu Mia, where ............ you from and why and how have you ................... to this city?

**Mojnu Mia:** I'm from Sherpur. You ................. it's a river erosion-prone area. The river has washed away most of my agricultural land. It has ................... my home as well. Now you can

..... .............. that I'm a refugee. I and my family members

................... to this city with our last savings. But I'm

fed up with the life here. I ................... vegetables as a hawker. I ...................very hard. I can't ................... any time to my wife or kids. I ................ in a slum. It's very dirty. People are sometimes involved in different sorts of crime. My kids don't ................... it. Neither my wife nor me. In the village, everybody used to . .. ... ... ... ... .... us but here no one knows me. I have nowhere to ..............., none to ............... beside me. Nobody ................... me. I the city

will give me a moderate life. But I'm mistaken.

**TV anchor:** Right. We are really sorry to ................... about your situation.

Now let us ................... to Mr Fazlur Rahman. Mr. Rahman, why did you ................... your country and how are you feeling in the UK?

**Fazlur Rahman:** Well I was young when I went to UK. My first few years were terrible. I ... ... ... ... ... .... all kinds of odd jobs. Gradually I ..... .... ... ... .... experience. I ................... different professional training courses. And over the period my language ... ........... ...... Now I'm a citizen there. I

... ................ my own detached home, personal car, and business. When I ................... there I was a poor man but now I'm a rich man. I ................... a good amount of income tax but to be honest, when I ................... to my own

country, I wish I should not . . . . . . . . . . . . . . . . . .. to UK. It's my own country. I .................. my friends and family members

here. I miss my culture, tradition, food, and what not? I

................... there for more than 15 years but still there is a distinction between the native people and expatriates like me. Perhaps we will never shake off our identity as foreigners.

**TV Anchor:** Ok, let us ................... the explanation of these problems from a social scientist, Nilima Chowdhury. Ms Chowdhury, what are your interpretations of these problems?

**Nilima Chowdhury:** You see, this problem is often diaspora.

A diaspora is created through migration, or scattering of people away from an established or ancestral homeland. There might be different reasons for that. It may be due to government action, political decisions or for avoiding conflict and war. Diaspora has some common consequences. Once people are away from their roots, they have a kind of culture shock. They take time to

......................to the new culture. Sometimes they never integrate. This ............. them a feeling of home sickness. In spite of their strong fascination for homeland or hometown diaspora

people ....................to get back to their roots because of ecomomic and social realities. As a result, they have a kind of mental conflict and identity crisis which make their life restless. Sometimes a lack of social acceptance coupled with economic hardship, inadequate education, and loose family ties people

................ involved in crimes. You may ask, "Does it. ..........

that peop1e won' t ..................... to oht er c1• t•lesi1count•nes?."

People will, as it is 21st century when the world is a big global village. But we .................. to be aware of the problems created by migration. It's a reality that people with better ties

with their roots suffer less from this problem. So instead of being

allured by the 'better life' we can .................... to be happy with what we have and gradually try to develop our condition without forgetting our roots.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is cultural identity and why is it important in a globalized world?**
> 💡 **Answer:** Cultural identity is an individual's sense of belonging to a distinct cultural group, providing grounding and pride amid rapid globalization.

> ❓ **Q: How can students celebrate their Bangladeshi identity while engaging with global culture?**
> 💡 **Answer:** By honoring our rich history, Bangla language, and festivals while mastering modern international knowledge and technological skills.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Compound & Complex Sentences):**
  - Compound: *"He earned fame abroad, **yet** he longed for his motherland."*
  - Complex: *"**Although** Michael wrote in English initially, his true immortality came through Bangla poetry."*
- **Writing Activity (Reflective Paragraph):**
  - Write a paragraph on *"The Importance of Preserving Our Cultural Roots in a Globalized Era"*.
$tag_u12_l04$, 4);

END $$;
