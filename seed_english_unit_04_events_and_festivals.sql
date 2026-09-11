-- ============================================================
-- Unit 4: Events and Festivals (৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals))
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

    -- Find Chapter (Unit 4)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 4 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 4 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Mother's Day
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u04_l01$
# ৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to talk about events and festivals*

- ask and answer questions and give opinions in a logical sequence

- infer meanings from the context.

---

## 📖 Lesson 1: Mother's Day

> 📝 **Activity:** Look at the picture and discuss the questions.

What do you think the woman is to the child?

Why is she holding the child on her flank?

Can a mother be compared to anybody? "She can be compared with no other; This lovely lady is none but my mother."

> 📝 **Activity:** Listen to the audio and answer the questions that follow.

Choose the correct answer.

According to ancient Greek myths Rhea is the mother of gods. b. goddess of love.

c. goddess of wealth. d. goddess of health.

The name of Jesus Christ's mother was

Rhea. b. Mary.

c. Anna. d. Anna Junior.

Julia Ward Howe was

Dutch. b. English.

c. Australian. d. American.

Mother's Day was first announced as a formal holiday in the USA in

1872. b. 1905.

c. 1910. d. 1914.

In 1914 the American president was

Roosevelt. b. Ford.

c. Nixon. d. Wilson.

Which country doesn't celebrate Mother's Day on the 2nd Sunday of May?

Denmark

c. Italy

The UK

d. Turkey

> 📝 **Activity:** Listen to the text again and answer these questions.

What country first observed Mother's Day as a national holiday?

When is Mother's Day now celebrated by most of the countries in the world?

How is Mother's Day usually observed?

Why should we observe Mother's Day?

Write a paragraph by answering each of the following questions.

Do you help your mother with her housework? How?

Do you celebrate Mother's Day? If yes, when and how?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What country first observed Mother's Day as a national holiday?**
> 💡 **Answer:** The United States of America first observed Mother's Day as a national holiday in 1914 when President Woodrow Wilson signed a proclamation.

> ❓ **Q: When is Mother's Day celebrated by most countries today?**
> 💡 **Answer:** Most countries around the world celebrate Mother's Day on the second Sunday of May every year.

> ❓ **Q: How is Mother's Day usually observed by families?**
> 💡 **Answer:** Families observe Mother's Day by honouring mothers with flowers, heartfelt cards, thoughtful gifts, and preparing special meals.

> ❓ **Q: Why should we observe Mother's Day?**
> 💡 **Answer:** We should observe Mother's Day to acknowledge and express gratitude for our mothers' unconditional love, care, and lifelong sacrifices.
$tag_u04_l01$, 1);

    -- Lesson 2: Lesson 2 : May Day
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u04_l02$
# ৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2 : May Day

> 📝 **Activity:** Look at the picture and talk about it.

What do you see in the picture?

Can you relate any historical event to this picture? What happened on this day?

> 📝 **Activity:** Read the text and answer the questions that follow.

May Day or International Workers' Day is observed on May 1 all over the world today to commemorate the historical struggle and sacrifices of the working people to establish an eight-hour workday. It is a public holiday in almost all the countries of the world.

Since the Industrial RevolutionCl) in the 18th and 19th centuries in Europe and the US, the workers in mills and factories had been working a long shift, fourteen or even more hours a day.

On May pt in 1886, inspired by the trade unions(2), half of the workers at the McCormick Harvesting Machine Company in Chicago went on strike demanding an eight-hour workday. Two days later, a workers' rally was held near the McCormick Harvester Machine Company and about 6000 workers joined it. The rally was addressed by the labour leaders. They urged the workers to stand together, to go on with their struggle and not to give in to their bosses. At one point of the rally, some strike breakers started leaving the meeting place. The strikers went down the street to bring them back. Suddenly about 200 policemen attacked them with clubs and revolvers. One striker was killed instantly, five or six others were seriously wounded and many others were injured.

The events of May 1, 1886 are a reminder that workers will continue to be exploited until they stand up and speak out to gain better working conditions, better pay and better lives.

Questions

What does May Day refer to?

How long did the workers have to work in a day before the May 1 strike?

Why did the workers in Chicago go on a strike?

What do you learn from the events of May 1, 1886?

Fill in the blanks with the verbs given in the box. Put them into their correct forms.

Tania is a poor garment worker. She in a big garment factory in Gazipur. She in a slum with a few fellow workers. She works eight hours a day on a monthly salary of Tk. 3000/-. She does overtime to _ some more

money to her income. If she can save something, she it to her father to the family.

One day Tania was busy her work in the factory. Suddenly she

--- someone shouting "Fire! Fire!" The workers were panic-stricken and everyone to rush to the stairs. There were not enough staircases in the factory building. So some workers were under the foot and others were injured in some other ways. However, the fire brigade there in minutes and nothing serious happened.

Now read the completed passage in C silently and answer the following questions.

Do you think Tania's monthly salary is enough for her work?

Is the factory safe enough for workers? Why do you think so?

Do you have any suggestions for safety of factory workers? If so, what?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What does May Day refer to and commemorate?**
> 💡 **Answer:** May Day or International Workers' Day refers to May 1, commemorating the historic struggle and sacrifices of working people to establish an eight-hour workday.

> ❓ **Q: How long did factory workers have to work before the May 1 strike of 1886?**
> 💡 **Answer:** Workers had to endure long, exhausting shifts of fourteen or even more hours a day in dangerous factory conditions.

> ❓ **Q: Why did the workers in Chicago go on strike on May 1, 1886?**
> 💡 **Answer:** About half of the workers at the McCormick Harvesting Machine Company went on strike demanding an eight-hour workday and fair treatment.

> ❓ **Q: What lesson do we learn from the historic events of May 1, 1886?**
> 💡 **Answer:** We learn that workers will continue to be exploited unless they unite, stand together, and fearlessly demand their fundamental labor rights.
$tag_u04_l02$, 2);

    -- Lesson 3: Lesson 3 : International Mother Language Day - 1
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u04_l03$
# ৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3 : International Mother Language Day - 1

> 📝 **Activity:** Look at the picture and talk about it.

What's the picture about?

What's the place in the picture?

Why was it built?

### Section B: Read the text.

21 February is a memorable day in our national history. We observe the day every year as International Mother Language Day. The day is a national holiday.

On this day, we pay tribute to the martyrs who laid down their lives to establish Bangla as a state language in undivided Pakistan in 1952. The struggle to achieve our language rights is known as the Language Movement.

The seed of the Language Movement was sown on 21 March 1948 when Mohammad Ali Jinnah, the Governor General of Pakistan, declared in a public meeting in Dhaka that Urdu would be the only state language of Pakistan. The declaration raised a storm of protest all over the country. The protest continued non-stop, gathering momentum day by day. It turned into a movement and reached its climax in 1952. The government outlawed all sorts of public meetings and rallies to stop it.

The students of Dhaka University defied the law and brought out a peaceful protest procession on 21 February 1952. When the procession reached near Dhaka Medical College, the police opened fire on the students, killing Salam, Rafiq, Barkat, Safiur and Jabbar. As a result, there were mass protests all over the country and the government had to declare Bangla as a state language. This kindled the sparks of independence movement of Bangladesh.

Complete the chart.

| Time | What happened |
| --- | --- |
| 1947 |   |
| 1948 |   |
| 1952 |   |

Match the words with their meanings.

Answer these questions.

Why do we observe 21 February as the International Mother Language Day?

What happened when Urdu was declared as the only state language of Pakistan?

"The seed of independence was sown on 21 February 1952". Do you agree? Why?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why is 21 February a memorable and historic day in Bangladesh?**
> 💡 **Answer:** On 21 February 1952, brave students and youths laid down their lives in Dhaka to establish Bangla as a recognized state language of Pakistan.

> ❓ **Q: Who were the heroic martyrs killed in the language movement on 21 February 1952?**
> 💡 **Answer:** Salam, Barkat, Rafiq, Jabbar, Safiur, and several others were martyred when police opened fire on a peaceful student procession near Dhaka Medical College.

> ❓ **Q: How did the seed of the Language Movement start in 1948?**
> 💡 **Answer:** It started on 21 March 1948 when Pakistan's Governor-General Mohammad Ali Jinnah declared that Urdu alone would be the state language of Pakistan, triggering fierce protests.
$tag_u04_l03$, 3);

    -- Lesson 4: Lesson 4: International Mother Language Day - 2
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u04_l04$
# ৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: International Mother Language Day - 2

Discuss these questions.

When did the International Mother Language Day celebration begin?

What does the abbreviation UNESCO stand for?

\Q

3. What is the other name of 21 February?

Read more about International Mother Language Day.

21 February is observed as Shaheed Dibosh every year throughout the country in remembrance of the martyrs of language movement of 1952. The comme-moration begins at the early hours of the day with mourning songs that recall the supreme sacrifices of our language martyrs. People wear black badges and go to the Shaheed Minar in barefoot processions, singing mourning songs. They place wreaths at the Minar. Many of them visit the graves of the martyrs at Azimpur graveyard and pray for them. They also attend various programmes organised in remembrance of the language martyrs.

The UNESCO (United Nations Educational, Scientific and Cultural Organisation) on 17 November in 1999 proclaimed February 21 as the International Mother Language Day in recognition of the sacrifices of the martyrs for the rightful place of Bangla. Two Bangladeshi expatriates living in Vancouver in Canada, Rafiqul Islam and Abdus Salam, sent a proposal to Kofi Anan, the then Secretary General of United Nations. They requested him to declare 21st February as the International Mother Language Day. They added that the decision will honour and save all extinct languages of the world. As per their logical expectations the goverment of bangladesh then took prompt initiative by sending formal proposal to UNESCO. Finally, on 17 November 1999, UNESCO declared 21st February as the International Mother Language Day. The day is now annually observed worldwide to promote awareness of linguistic and cultural diversity and multilingualism.

Match the words/phrases in the table with their meanings.

| Words/phrases | Meanings |
| --- | --- |
| wreath <br> in remembrance of proclaim <br> promote diversity multilingualism in recognition of | encourage <br> in appreciation of <br> practice of using several languages <br> an arrangement of flowers in the shape of a circle <br> declare <br> in memory of <br> variety |

> 📝 **Activity:** Read the text in B again and answer these questions.

Why is 21 February called Shaheed Dibosh?

Why do people go to the Shaheed Minar? How do they go there?

Why is 21 February now observed throughout the world every year?

Complete the passage with suitable words.

On 21 February 1952 was shed at a place between Dhaka Medical College and Dhaka University to establish Bangla as a state of Pakistan.

All subsequent movements struggles for independence had their origin in the historic language . Shaheed Minar is the of the supreme sacrifice the mother tongue.

Write briefly how you observed this year's 21 February at your school.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: When did UNESCO declare 21 February as International Mother Language Day?**
> 💡 **Answer:** UNESCO declared 21 February as International Mother Language Day on 17 November 1999 to promote linguistic and cultural diversity and multilingualism worldwide.

> ❓ **Q: How is International Mother Language Day observed across Bangladesh every year?**
> 💡 **Answer:** People wake up early, walk barefoot in mourning processions (Provatferi) to the Shaheed Minar, offer floral wreaths, and sing the immortal song 'Amar Bhaier Rokte Rangano'.

> ❓ **Q: What is the global significance of International Mother Language Day?**
> 💡 **Answer:** It honors language martyrs, protects endangered indigenous languages worldwide, and promotes peace and mutual respect among different linguistic communities.
$tag_u04_l04$, 4);

    -- Lesson 5: Lesson 5 : Independence Day
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u04_l05$
# ৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 5 : Independence Day

> 📝 **Activity:** Look at the picture and ask and answer the questions about it.

What do you see in the picture?

Where is it?

Why was it built?

> 📝 **Activity:** Read the text.

26 March, our Independence Day, is the one of the most important state festivals. The day is celebrated every year in the country with great enthusiasm and fervour. It is a national holiday. All offices, educational institutions, shops and factories remain closed on this day. The day begins with a 31 gun salute.

Early in the morning the President and the Prime Minister, on behalf of the nation, place floral wreaths at the National Mausoleum at Savar. Then other leaders, political parties, diplomats, social and cultural organisations, educational institutions and freedom fighters pay homage to the martyrs. People from all walks of life also go there in rallies and processions. There are many cultural programmes throughout the day, highlighting the heroic struggle and sacrifice in 1971.

In the National Stadium, school children, scouts and girl guides take part in various displays to entertain thousands of spectators. Educational institutions also organise their individual programmes. Sports meets and tournaments are also organised on the day, including the exciting boat race in the river Buriganga.

In the evening, all major public buildings are illuminated with colourful lights. Bangla Academy, Bangladesh Shilpakala Academy and other socio-cultural organisations hold cultural functions. Similar functions are also arranged in other places in the country.

Match the words with their meanings.

| Words | Meanings |
| --- | --- |
| fervour alike spectator displays illuminate | acts of performing skills <br> to light up <br> in a similar way <br> a strong feeling of excitement <br> a person who is watching an event |

Choose the best answer.

Our one of the most important state festivals is

Victory Day. b. Shaheed Dibosh.

c. Pahela Boishakh. d. Independence Day.

The celebration of Independence Day begins with process10ns.

gun salute.

placing wreaths at the National Mausoleum.

parade by defence forces.

The National Mausoleum is on Dhaka University campus.

c. at Savar.

at Ramna Park.

d. near Dhaka Medical College.

On Independence Day various displays are held

at the National Parade Ground. b. in the streets.

c. in the decorated vehicles. d. the National Stadium.

Write in brief, how you have celebrated this year's Independence Day at your school.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why is 26 March celebrated as the Independence Day of Bangladesh?**
> 💡 **Answer:** On 26 March 1971, Father of the Nation Bangabandhu Sheikh Mujibur Rahman declared the independence of Bangladesh following the brutal crackdown by the Pakistani military.

> ❓ **Q: Where do people pay homage to liberation war martyrs on Independence Day?**
> 💡 **Answer:** People from all walks of life, including the President and Prime Minister, pay floral tributes at the National Martyrs' Memorial (Jatiya Smriti Soudha) at Savar.
$tag_u04_l05$, 5);

    -- Lesson 6: Lesson 6: Pahela Boishakh
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u04_l06$
# ৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 6: Pahela Boishakh

> 📝 **Activity:** Look at the picture. Then ask and answer the questions about it.

What's the picture about?

Where do you think the picture was taken?

What are the people doing?

> 📝 **Activity:** Read the text and complete the tasks C and D.

'Pahela Boishakh' is the first day of Bangla new year. The day is a public holiday. This day has a special significance for us as it is a part of Bangalee culture and tradition. People from all walks of life, irrespective of their ethnic identity or religious beliefs, celebrate the day with traditional festivities. On this day, the whole of Bangladesh is in a festive mood. The day inspires people to start life with renewed hopes aspirations.

Every year the day is celebrated traditionally. People wake up early in the morning, have a bath and wear traditional clothes. Women wear white sarees with red borders and adorn themselves with colourful churis and flowers, while men dress themselves in pajamas and punjabis. It is a day when people love eating traditional food.

One of the most colourful events of the day is held in Dhaka. Early in the morning, people in hundreds and thousands pour in from all directions to attend the cultural function at Ramna Batamul organised by Chhayanaut. The cultural programme begins just at sunrise and the renowned artists of the country take part in the programme that starts with the famous Tagore-song Esho-he-Boishakh, Esho Esho .....Artists also sing traditional folk songs, and perform classical dances to the rhythm of musical instruments.

People also come to join the colourful processions, the biggest carnival of the country, organised by the Fine Arts students of Dhaka University. The procession usually displays the traditional practices of Bangalee culture. The masks and wreaths worn by the people are so fascinating! Often they symbolise contemporary worries or happiness in the national life. It attracts an increasing number of foreign tourists every year.

The day is also observed all over the country. Different social and cultural organisations and educational institutions celebrate the day with their own cultural programmes.

On this day, newspapers bring out special supplements. There are also special programmes on the radio and television.

The celebration of Pahela Boishakh marks a day of cultural unity for the whole nation.

Ask and answer these questions in pairs.

Do you go out in the morning of Pahela Boishakh? If you do, where do you go? If not, what do you do?

What kind of food do you eat in the morning of Pahela Boishakh?

Do you wear any special clothes on this occasion?

Complete the passage with suitable words.

The word Pahela means the first and Boishakh 1s the month of Bangla calendar. The day is observed not m Bangladesh but m some other parts of the world. It is celebrated m West Bengal, Assam and Tripura. It is also in Australia and the UK. In Australia, the largest for Bangla new year is the Sydney Boishakhi Mela held

Sydney Olympic Park. In England, the Bangalees celebrate the day with a street in London. It is the Asian festival in

Europe, --- Bangladesh and West Bengal.

Describe your own cultural or religious festival that you celebrate. You can use the following words. You can also use other words relevant to the festival.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is Pahela Boishakh and how do people celebrate it?**
> 💡 **Answer:** Pahela Boishakh is the first day of the Bangla New Year, celebrated enthusiastically across Bangladesh with Chhayanaut's musical sunrise at Ramna Batamul and the colorful Mangal Shobhajatra.

> ❓ **Q: What traditional food is customary on Pahela Boishakh?**
> 💡 **Answer:** People customarily eat Panta Ilish (soaked leftover fermented rice served with fried hilsa fish, green chilies, and onions) on Pahela Boishakh morning.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Past Continuous vs Simple Past):**
  - Use past continuous for an ongoing action interrupted by another past event:
    - *"The workers **were rallying** when the police **attacked** them."*
- **Writing Activity (Festival Paragraph):**
  - Write a paragraph on *"How I Celebrated Pahela Boishakh"*, mentioning traditional morning foods, cultural programs, and Mangal Shobhajatra.
$tag_u04_l06$, 6);

END $$;
