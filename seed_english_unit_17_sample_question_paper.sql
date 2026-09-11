-- ============================================================
-- Unit 17: Sample Question Paper (১৭শ অধ্যায়: নমুনা প্রশ্নপত্র (Sample Question Paper))
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

    -- Find Chapter (Unit 17)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 17 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 17 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Model Test: English 1st Paper (Class 9)
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u17_l01$
# ১৭শ অধ্যায়: নমুনা প্রশ্নপত্র (Sample Question Paper)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

**Sample Question Subject:** English 1st Paper Grade: Nine

Time: 3 hours Marks: 100

[Marks for individual items are mentioned next to the test items}

Part A - Reading (Marks: 70)

> 📝 **Activity:** Read the text and answer the questions 1 & 2

'Heritage' is what we inherit from the past, live with in the present and then pass on to our children or future generations. Our unique source oflife and inspiration is our cultural and natural heritage. When we speak out of 'World Heritage' indicates places and sites that we inherited from the past and pass on to the future generation of the entire world.

The Shat Gambuj Mosque in Bagerhat is such a heritage. It became a UNESCO World Heritage Site in 1985. Originally the Historic City was known as 'Khalifatabad'. It is situated at the outskirts of Bagerhat town not very far from the dense mangrove forest of the Sundarbans. Khalifatabad was a Muslim colony. It was founded by the Turkish general, a saint warrior Ulugh Khan Jahan in the 15th century .The infrastructure of the city reveals significant technical skills in many mosques as well as early Islamic monuments. Baked bricks were used for the construction of the buildings. The planning of the city was dominated by the tradition of Islamic architecture and the decorations were a combination of Mughal and Turkish architecture.

Khan Jahan built a network of roads, bridges, public buildings and reservoirs to make the city habitable. There were about 360 mosques in the city. Among them the most remarkable is the multi-domed Shat Gambuj Mosque. The mosque is unique in the sense that it has 60 pillars that support the roof, with 77 low height domes. The 4 towers at the 4 comers have smaller domes at the top as well. The vast prayer hall has 11 arched doorways in the East and 7 each on the North South for light and ventilation. It has 7 aisles running along the length of the mosque and 11 deep curves between the slender stone columns. These columns support the curving arches created by the domes. The thickness of the arches is 6 feet and have slightly narrowing hollow and round wall.

The west wall in the interior has 11 'mihrabs'. These mihrabs are decorated with stone work and terracotta. The floor of the mosque is made of brick.

Besides being used as a prayer hall, Khan Jahan used the mosque as the court too. Today, it is one of the greatest tourist attractions and one of the best architectural beauties of Bangladesh.

Choose the correct answer from the following alternatives:

Khalifatabad was a colony where lived the - lx7=7

Chainess ii. Muslims iii. Christians iv. Portugees

Shat Gambuj Mosque got the status of a world heritage site from - 1985 ii. 1995 iii. 1965 iv. 1975

The mosque is situated in - Khulna ii. Cumilla iii. Bagerhat iv. Barishal

The surface of the mosque is of -

1. stone ii. marbel iii. brick IV. Iron

What is the meaning of the word 'Significant'?

evidential ii. inconsiderable iii. meaningless

The mosque was established by a person who was - irrelevant

Turkish ii. British iii. American

What is the opposite word of 'Inspiration'?

1. encouragement

11. hindrance

111. innovation

iv. Irani

### ❓ Answer the following questions.

What is 'World Heritage'?

What do you know about Khalifatabad?

What is the floor of the mosque made of?

2x5=10

What were the activities of Khan Jahan Ali to make the city habitable?

Why do you think the decoration of the Shat Gambuj Mosque is unique?

Fill in each gap with a suitable word based on the information of the text lx5=5 We use the term "World Heritage" in a (a) sense because it

represents a place or site to the entire world. The Shat Gambuj mosque in

Bagerhat is (b) as a "World Heritage" site in 1985. The mosque is famous for its (c) Islamic architecture. Ulugh Khan Jahan Ali founded it who was not only a saint but also a (d) . He decorated the old city "Khalifatabad" to

(e) the tradition of Islamic architecture.

Read the following passage carefully and answer the question no 4 & 5

Nobel prize is awarded every year for outstanding performance in the field of science, literature and for promoting world peace. Under this prize, the winner gets a gold medal, a certificate and a large sum of money. The Nobel prize is the world's most important prize. The prize is given to the persons with most outstanding contributions in six fields, namely Physics, Chemistry, Literature, Physiology or Medicine, Peace and Economics. Economics was added in this list in 1969 for the first time. One prize is awarded in each field. If there are more than one recipient of the prize in one field, the prize money is equally distributed amongst all the winners.

The prize was instituted by a man who was the inventor of the science of destruction. This scientist was Alfred Bernard Nobel. He was born in Stockholm, Sweden on October 21, 1833, and died on December 10, 1896. Though he was a citizen of Sweden, he was educated in Russia. He invented dynamite. This material is widely used for breaking rocks, digging petrol wells and also used in wars. For this valuable discovery, Nobel becomes famous all over the world. He earned a huge amount of money by selling it. At the time of his death in 1896, Nobel left behind a fabulous sum 90,00,000 dollars. He left a will indicating that the interest on this money should be given as prizes to persons for their outstanding contributions to Physics, Chemistry, Medicine, Literature and Peace. This Prize was named Nobel prize. The first Nobel Prize was given to Roentgen on 10th December, 1901 for his outstanding research in X-ray. The prize money was 40,000 dollars. The winners of this prize are treated with great respect all over the world.

Complete the following table with the information given in the passage. 1x5=5

| Name of Events | Place | Year/Time | Achievement |
| --- | --- | --- | --- |
| Alfred Bernard Nobel was born | i) ...... |   |   |
| Nobel Prize was launched |   | ii) ...... |   |
| Economics was added to the list |   | iii) ...... |   |
| Roentgen |   | IV ...... | v) ....... |

Write a summary of the above passage in your words. 10

Match the parts of sentences given in column A', 'B' and 'C' to write five complete sentences. lx5=5

| Column A | Column B | Column C |
| --- | --- | --- |
| a) A book fair is an exhibition | i) iterature, history, culture, science | i) are displayed and sold |
| b) People in large numbers pay a visit to | ii) a great attraction | ii) to buy some newly published books |
| c) There are books of | iii) a love of books and | iii) sports and religion |
| d) It has become | iv) the Ekushey Boi Mela usually held in the Bangla Academy premises | iv) for the educated and cultured people |
| e) It also instils | v) where books of different writers | v) develops the habits of reading books |

Put the following parts of the story in correct order to make the whole story.

Only the corresponding numbers of the sentences need to be written. lx8=8

And he took shelter in a remove cave.

Then he saw a spider trying hard to reach the celling of the cave.

Robert Bruce was a famous king.

One day he was lying in the cave.

This king fought bravely but lost the battle.

The king was always in a gloomy state for his unhappy conditions.

Enemies invaded his kingdom.

He had to flee from his kingdom to save his life.

Answer any five of the following questions from the poems in your texbook. 2x5=10

According to the poem "Two Mothers Remembered", What should children do to their mother and why?

When do you have many friends and when do they leave you? Write the answer according to the poem "Solitude"?

What does the poet mean by "useless years" in the poem "O Me! 0 Life!"?

What benefits do you think reading books can give you according to the poet of "Books"?

Why did the poet stop by the woods in the poem "Stopping by Woods on a Snowy Evening"?

What was the weather like when Mary went to bring the cattle home in the poem "The Sands of Dee"?

Why does the poet call time an 'Old Gipsy Man'?

Guess what promise the poet had to keep before he would sleep in his poem "Stopping by Woods on a Snowy Evening"?

Answer any five of the following questions from the stories in your textbook. 2x5=10

In the story "The Purple Jar", how did the milliner's shop look like?

What made Rosamond finally decide to buy the purple jar?

Why did Shylock get a bond signed by Antonio in the story "A Pound of Flesh"?

Why did Portia's father make a strange plan in the story "The Three Caskets"?

What do you think about mother son relationship according to the story "Mr. Moti"?

What is the importance of gender in the story "Girl"?

What do you mean by the statement "a joy that kills" in "The Story of an Hour"?

What did Portia say regarding mercy in the story "The Trial"?

**Part A:** Writing (Marks-30)

Read the beginning of a story. Add at least ten new sentences to complete the story. Give a suitable title to it. 15

Rana was running late for work, as usual. His morning routine was a busy one-skipping breakfast, barely managing to catch the bus. That morning, as he rushed out of his house, his phone rang. It was his mother. He declined the call thinking to call her back later.........

Suppose, you are Meghla and your brother is Akash. You want to go to your village home with your brother. You like to go there by train but your brother likes bus journey.

Write a dialogue between you and your brother about the comfort and discomfort of bus journey.

a)

b)

c)

d)

e)

f)

g)

Muslims

i. 1985

Bagerhat

iii. brick

1. evidential

1. Turkish

11. hindrance

Suggested Answers

a) "World Heritage" refers to places or sites that are inherited from the past and passed on to future generations of the entire world. These sites are recognized for their cultural or natural significance.

Khalifatabad was a Muslim colony founded by the Turkish general Ulugh Khan Jahan in the 15th century. It is located near Bagerhat and is known for its Islamic architecture, including the Shat Gambuj Mosque.

The floor of the mosque is made of brick.

Khan Jahan Ali built a network of roads, bridges, public buildings, and reservoirs to make the city habitable. He also constructed mosques and monuments.

Yes, the decoration of the Shat Gambuj Mosque is unique because its architectural design combines Mughal and Turkish styles. It is a remarkable example of Islamic architecture.

a) broader b) recognized c) traditional

d) warnor e) uphold

1. Stockholm 11. 1901

111. 1969 IV. 1901

V. Outstanding research in X-ray

The Nobel Prize is awarded annually for outstanding contributions in Physics, Chemistry, Medicine, Literature, Peace, and Economics. It was established by Alfred Nobel, the inventor of dynamite, who left his fortune to fund the prizes. The first Nobel Prize was awarded in 1901 to Roentgen for his work on X-rays. Winners receive a gold medal, a certificate, and a cash prize. The Nobel Prize is globally recognized as the most prestigious award.

a) v+i A book fair is an exhibition where books of different writers are displayed and sold.

iv+ii People in large numbers pay a visit to the Ekushey Boi Mela to buy some newly published books.

i+iii There are books of literature, history, culture, science sports and religion.

ii+iv It has become a great attraction for the educated and cultured people

iii+v It also instils a love of books and develops the habits of reading books.

a) According to the poem "Two Mothers Remembered," children should love and respect their mothers because they sacrifice everything for their children.

According to the poem "Solitude," you have many friends when you are happy, but they leave you when you are in trouble.

In the poem "O Me! 0 Life!," the poet refers to "useless years" as the time spent without purpose or achievement.

According to the poem "Books," reading books can provide knowledge, wisdom, and inspiration.

'In the poem; "Stopping by Woods on a Snowy Evening," the poet stopped by the woods to admire their beauty and tranquility.

In the poem "The Sands of Dee," the weather was stormy and harsh when Mary went to bring the cattle home.

The poet calls time an "Old Gipsy Man" because time is unpredictable and constantly moves forward.

In the poem "Stopping by Woods on a Snowy Evening," the poet had promises to keep, likely responsibilities or commitments, before he could sleep.

a) In the story "The Purple Jar," the milliner's shop looked attractive and colorful, filled with various items.

Rosamond decided to buy the purple jar because she found it beautiful and unique.

Shylock got a bond signed by Antonio to ensure repayment of the loan, with the condition of taking a pound of flesh if Antonio failed to repay.

Portia's father made a strange plan to ensure that only a worthy suitor would marry his daughter by choosing the correct casket.

According to the story "Mr. Moti," the mother-son relationship is based on love, care, and mutual understanding.

In the story "Girl," gender plays a significant role in defining societal expectations and responsibilities.

The statement "a joy that kills" in "The Story of an Hour" refers to the overwhelming shock and joy that ultimately leads to the protagonist's death.

A Lesson in Priorities

Rana was running late for work, as usual. His morning routine was a busy one-skipping breakfast, barely managing to catch the bus. That morning, as he rushed out of his house, his phone rang. It was his mother. He declined the call, thinking to call her back later. On the bus, he felt a pang of guilt but brushed it off, focusing on his workday ahead. At the office, he was swamped with meetings and deadlines. By evening, he finally checked his phone and saw multiple missed calls from his mother. He got worried and he called her back. His mother's voice trembled as she told him his father had been hospitalized. Rana's heart sank. He realized he had been too busy to prioritize his family. He rushed to the hospital, where his father was recovering. From that day on, Rana promised to balance work and family, understanding that some things are more important than a busy schedule.

**Myself:** Hey brother, have you thought about how we're going to our village home this weekend?

**Akash:** Hi! Yes, I was just thinking about it. I think we should take the bus. It's faster and more convenient.

**Myself:** Hmm, I was actually leaning toward taking the train. It's more comfortable, and we can relax during the journey.

**Akash:** But the bus is cheaper, and we don't have to wait for scheduled departures. We can leave whenever we want.

**Myself:** That's true, but buses are often crowded, especially on weekends. It can get really uncomfortable.

**Akash:** I agree, but trains can also be crowded, and sometimes they get delayed. At least with the bus, we can enjoy the scenery along the way.

**Myself:** That's a good point, but trains are safer, and there's less chance of getting stuck in traffic. Plus, we can walk around and stretch our legs.

**Akash:** I see your point, but buses are more flexible. We can choose any time to leave, and there are usually more options available.

**Myself:** How about we compromise? Let's take the train this time and try the bus on our next trip. That way, we can experience both.

**Akash:** That sounds like a good plan. Let's do it!

**Myself:** Great! I'll book the train tickets tonight. Thanks for discussing it with me.

**Akash:** No problem. I'm looking forward to the trip. See you later!

**Myself:** See you!

The End

2026 Academic Year

**Nine and Ten:** English For Today

A thing of beauty is a joy for ever.

For free distribution by the Government of the People's Republic of Bangladesh.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is the primary objective of the sample English question paper?**
> 💡 **Answer:** It familiarizes students with the official NCTB Class 9 examination format, assessing reading comprehension, grammar accuracy, vocabulary, and creative writing competence.

> ❓ **Q: How should students approach reading comprehension questions during exams?**
> 💡 **Answer:** Students should read the passage attentively, identify key details, answer in their own concise words, and maintain correct grammatical tense and spelling.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Board Exam Revision Checklist):**
  - Double-check agreement, right form of verbs, appropriate prepositions, sentence transformation, and punctuation before submitting answer scripts.
- **Writing Activity (Letter to the Editor):**
  - Write a formal letter to the editor of a daily newspaper highlighting the need for road safety awareness among school students.
$tag_u17_l01$, 1);

END $$;
