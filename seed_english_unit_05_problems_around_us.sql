-- ============================================================
-- Unit 5: Problems Around Us (৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us))
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

    -- Find Chapter (Unit 5)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 5 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 5 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: The Ferry Boat
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u05_l01$
# ৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied the unit, we will be able to ask and tell about problems*

- seek and give suggestions

- listen for specific information

- narrate something in writing

- read charts and do a project work.

---

## 📖 Lesson 1: The Ferry Boat

> 📝 **Activity:** Look at the picture and answer these questions.

Where can you find this kind of boat?

Why does the boatman carry passengers across a river?

Why do people use country boats?

> 📝 **Activity:** Read the text and answer the following questions.

"Is there anybody here who has ever crossed a river by a country boat?"

"I have, teacher," said Jamil. "And I clearly remember what happened in that journey."

"Would you please tell us what happened?" the teacher asked.

"Okay, teacher. It happened when I was in class 6. On a weekly bazar day, people were coming back with their shopping bags and baskets in hands, on shoulders and heads. They had to cross the river. It was not a big river. There was a ferry boat plying on the river. The boat could cross it in 8-10 minutes. It was just after sunset. The weather was getting bad. The wind started blowing from the north-west. Black clouds were moving fast in the sky.

Everybody was trying to get into the boat. 'No more, no more, please wait,' shouted the boatman. But nobody listened to him."

"What happened then, Jamil?" asked Rumi.

"With too many people on board, the boat sank in the middle of the river," replied Jamil.

"Oh no! What happened then?" asked the teacher. "There were no casualties by the grace of the Almighty. All the passengers swam to the other side. But some of them lost the stuff they were carrying such as oil, salt and milk," said Jamil.

"Were you on the boat?" asked the teacher. "No, teacher. Seeing the boat over-crowded, I waited for the next boat," replied Jamil.

"You did the right thing, Jamil."

Questions

Tick the best answer.

A ferry boat was plying on the river.

Here 'plying' means

playing with other boats.

sinking in the river.

travelling along a route.

waiting for passengers.

Why was everybody trying to get into the boat?

Because

it was a weekly bazar day.

after sunset no ferry would ply on the river.

everybody had shopping bags with them.

it was going to be a dark and stormy evening.

The boatman requested the people to wait, because

his boat was very small.

the boat had already too many people.

there were other boats they could take.

he would not ferry people with bags and baskets.

"With too many people on board , the boat sank ... "

Here the phrase 'on board' means

on the boat.

on the wooden board.

outside the boat.

on the notice board.

There were no casualties.

The statement tells us that nobody died.

nobody was rescued.

nobody accepted their fate.

nobody lost anything.

The boat was overcrowded.

Here 'overcrowded' means

people were quarrelling on the boat.

the boat was unable to carry any more people.

the boatman did not like a crowd.

people were sitting on the boat's bamboo hood.

Discuss in groups and write answers to these questions.

Why did some people have little or no patience when the ferry boat was in danger of sinking?

'No more, No more, please wait' who said this? Explain in 2/3 sentences.

Answer the questions below:

If we have too many passengers at a bus or train station, what may happen?

If we have too many people in a village/ town/ city, what will happen?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What happened to the ferry boat in Jamil's story?**
> 💡 **Answer:** The ferry boat sank in the middle of the river because too many passengers rushed aboard on a weekly bazar day in bad weather.

> ❓ **Q: Were there any casualties in the ferry boat incident?**
> 💡 **Answer:** No, fortunately all passengers managed to swim ashore safely, although many lost their goods like oil, salt, and milk.

> ❓ **Q: Why did the passengers board the boat despite the boatman's warning?**
> 💡 **Answer:** Everyone was in a hurry to reach home after sunset because black clouds were gathering and a storm was approaching from the northwest.
$tag_u05_l01$, 1);

    -- Lesson 2: Lesson 2: Are We Too Many?
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u05_l02$
# ৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: Are We Too Many?

> 📝 **Activity:** Read the text and do the following project work.

The next day when the teacher came to the class and was about to start the lesson, Shanti Barua stood up and said, "Teacher, can I ask you a question, please?"

"Go ahead, Shanti," said the teacher.

"In our last class, we heard Jamil's story of how too many people made the ferry boat sink. I have also seen crowds of people at bus stand, railway station, launch and steamer ghats. It is not uncommon to see people travelling on top of a bus or train and meeting with tragic accidents. My question is: Are there really too many people in our country?"

"Thank you, Shanti. Please sit down."

The teacher then looked round the class and asked,"How many of you have the same question in mind?"

Almost all the hands went up.

"Okay," the teacher continued. "Finding the right answer to this question is very important for us- for our national development. So,we will look at this issue with some facts so that we can find out if we are really too many or not."

**Project work:** Discuss in groups and carry out a survey on the topic: "Too many people'.' You can do the following things:

Select only one small area such as your village or locality in the town / city where you live.

Find out its area. (You can do it by walking around it. At normal speed you can cover about one kilometer in ten minutes.)

Find out the number of people living in it.

Find out about the people's occupations, unemployment and poverty.

> 📝 **Activity:** Listen to the Audio . Listen how the teacher talks about the population of Bangladesh and answer the following questions.

Questions

Tick the best answer.

Bangladesh is a small country, because

its land area is small.

it has about 150 million people.

it is the 8th most populous country in the world.

it has limited resources.

Density of population in any country means

all the people in a country.

number of people living in one square kilometer.

1000 people living in one square kilometer.

too many people living in one square kilometer.

Our yearly population growth rate is

1.9% b. 1.40%

c. 2.1% d. 1.1%

Our birth rate is per thousand.

6.1 b. 1.40

c. 20.1 d. 14

What will be the size of our population in 2050?

| a. | 150 m | b. | 197 m |
| --- | --- | --- | --- |
| c. | 217 m | d. | 250 m |

Listen again and answer these questions.

How do you get the population growth rate of a country?

Why will the population of Bangladesh be so large in 2050?

Read the chart and fill in the gaps with information from the table. Use comparatives and superlatives where necessary. The table shows facts about some countries including Bangladesh.

Bangladesh Sri Lanka India China

|   | Bangladesh | Sri Lanka | India | China |
| --- | --- | --- | --- | --- |
| Land area sqkm | 148,460 sq km (approx) | 62,710 sqkm | 3,287,263 sq km | 9,600,000 sq km |
| Population in million | 165 m | 21.4 m | 1380 | 1420 m |
| Density of <br> population per sq km | 1116 | 341 | 464 | 153 |
| Birth rate <br> (per 1000) | 18.18 | 15.5 | 18.2 | 10.48 |
| Death rate (per 1000) | 5.5 | 4.2 | 7.3 | 7.4 |
| Growth rate | 1.04% | 0.42% | 1.1% | 0.6% |

In terms of land area Bangladesh is (1) (larger) than Sri Lanka, but (2) _ than India. China is, of course, (3) of all the four countries. Sri Lanka has the (4) population among the four countries. However, China has the (5) population shown in the chart. In fact, China has the (6) population in the world and India has the (7) highest population in the world. On the other hand, China has the (8) growth rate among the 4 countries. Bangladesh has (9) growth rate than India, but higher birth rate than (10) and (11)

Write a paragraph about the population situation of any of the countries above. Use the facts given in the chart in D above.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What are the major problems caused by rapid population growth in Bangladesh?**
> 💡 **Answer:** Rapid population growth causes acute shortages of food, shelter, clean water, medical care, educational institutions, and employment opportunities.

> ❓ **Q: How does overpopulation affect cultivable agricultural land?**
> 💡 **Answer:** To house the growing population, arable agricultural lands are constantly converted into residential settlements, factories, and roads.
$tag_u05_l02$, 2);

    -- Lesson 3: Lesson 3: Our Food and Shelter
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u05_l03$
# ৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: Our Food and Shelter

> 📝 **Activity:** Look at the pictures and answer these questions.

What do the people do in a tree or a boat?

Why do they do so?

Discuss what will be our problems if our population becomes double the size it is now.

Read what the teacher Ms Choudhury and her students are talking about.

The class comes up with different problems. One group leader says, "The scarcity of food will be a serious problem in the years ahead. It is true that our agriculturists have developed new varieties of rice and its per acre production has definitely increased. But the rate of increase in food production cannot keep pace with the rate of population growth. This is because our land is fixed, i.e. we cannot increase it, while our population is increasing rapidly."

Another group leader comes up with the housing problem in the country, which he says, adds much to the food problem. He says, "Families are growing larger in size and at the same time breaking into smaller families. Each smaller family needs a separate house to live in. Also, the arable fields are being divided by these smaller families among themselves. Mills and factories are being set up, which occupy a considerable portion of our land. So while we need more land to grow more food to feed more mouths, our land is shrinking day by day.

"No way," another student argues. "Trees are being cut, hills are being cleared and water bodies are being filled up --- all to meet the needs of too many people."

"Thank you students," Ms Choudhury says, "You're quite right. Let me tell you about this village where I was born and brought up. Things were not like this in the past. I remember as a child, the village was so beautiful! The green paddy fields and yellow mustard fields seemed to be unending. They used to wave and dance in the breeze. There used to be a wood in the northern side of the village. There was a tall tamarind tree in the middle of the wood. Also there was a big banyan tree which looked like a huge green umbrella, with its aerial roots hanging down. I often used to go there with my friends. We would often have picnic there. While the boys would climb the tamarind tree and pick some tamarinds, I and my best friend Rima used to swing from the hanging roots. But now, look, the wood is gone. The beauty of the crop fields is spoiled by the unplanned houses built here and there."

Tick the best answer.

The rate of increase in food production cannot keep pace with the rate of population growth.

The sentence means that the food production

is as much as needed.

is less than what is needed.

is more than what is needed.

is sufficient for the population.

How can our housing problem add to our food problem?

After making houses, farmers do not have enough time to work in the field.

After making houses, farmers do not have enough money to buy food.

If you do not have a house, you cannot store your food.

For making too many houses, people are using the crop land.

What makes our land shrink day by day mentioned in line no. 13?

Families are growing larger in size.

Houses and factories are being built on it.

Smaller families need smaller houses.

Land grabbers are occupying portions of our land.

Many people may have to live on trees, because

they would like tree houses.

making houses on trees is less expensive.

they may not find land to make houses.

tree houses are safer during floods.

People are cutting trees to plant more trees.

keep the environment clean.

make articles of furniture.

grow crops or make houses.

Make a list of things Ms Choudhury saw as a child in the village. Why do you think she liked them?

Write a composition about your village or locality. Describe any change in the things you have noticed over the years, such as houses, fields, trees, plants etc.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why are food and shelter considered basic human rights?**
> 💡 **Answer:** Food provides nutrition essential for survival and health, while shelter provides safety, dignity, and protection from harsh weather and hazards.

> ❓ **Q: How can modern agricultural science help overcome food scarcity?**
> 💡 **Answer:** By developing high-yielding, drought-resistant, and saline-tolerant crop varieties and practicing modern efficient farming techniques.
$tag_u05_l03$, 3);

    -- Lesson 4: Lesson 4: The Story of Lipi
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u05_l04$
# ৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: The Story of Lipi

Discuss in groups and suggest how we can control the high growth rate of our population. Check whether your suggestions include any of the following:

Raise awareness among the people, particularly in the rural areas, about the bad consequences of having more children in the family.

Stop child marriage.

Keep the size of the family small with two children.

Read the story of Lipi and answer the questions.

In the next class Ms Choudhury tells her students the story of Lipi.

The year before last, Lipi, a 14-year old girl, was in class 9 in a rural school in Rangpur. Lipi is the eldest of five children---three daughters and two sons. Their

\Q father is a day labourer working on other people's land and mother is a homemaker and a part-time worker at other people's homes. The parents, particularly the mother, found it really difficult to raise five children on the small income the father could earn. Perhaps that is why Lipi's father wanted to marry her off. But Lipi was not ready to accept what her parents wanted to impose on her. She wanted to pursue her education. Her mother stood by her, though secretly. When her father arranged her marriage with Tara Mia, the only son of a farmer in the same village, she became greatly upset. Tara Mia was a widower and illiterate, but well off. His father had a few acres of arable land and was influential in the village. The marriage seemed to be inevitable.

Question 1

Discuss in groups and agree upon an answer to this question: What do you think Lipi should do? Why?

Lipi first talked with her classmates and then with the Headteacher, who was very sympathetic to her. He called a meeting of the teachers and students of the school. He also invited the school managing committee members and some respectable persons of the village to attend the meeting. The Headteacher explained in detail the serious consequences that would follow Lipi's marriage. She would be having children from very early age -15 or 16. It would create constant health hazards to her. Her education would stop. On top of all, her marriage against her will might shatter her future dream. At one stage, Tara Mia's father stood up and tried to argue, "You are all making mistakes. Lipi would be very happy if she got married with Tara Mia. She would have everything- money, clothes, home and status in the society. Why are you trying to deprive her of this opportunity?"

But no, the big majority, who attended the meeting, supported the Headteacher. Lipi's marriage was called off. She is now studying at Carmichael College, Rangpur.

Question 2

Make predictions. One is done for you.

If Lipi had married Tara Mia that time, ...

she would have become a mother of one or two children. b.

c.

d.

Fill in the blanks in the passage with will / would.

Ms. Anjali Barua, a retired college teacher, is a widow who lives in her own flat in Dhaka. At this stage of her life, she wants to do something for the people of her village in Sherpur district. Her only daughter lives in Khulna with her husband and children. Right now she is in her village home. She is writing about her future plan in a diary.

"I don't exactly know how I should go about my plan. But one thing I know for sure, I (1) _will need a lot of money for the work. If I had 5

million taka, I (2) start an adult education centre. Then if I found an expert on adult education, I (3) prepare learning materials for the people. If you ask him what the materials (4) look like, he (5) be able to explain in details. I know if the people attended the classes at the centre, they (6) learn how to read, write and count. I (7) definitely give time to this project. But to carry out the project successfully I (8) have to live in the village almost permanently. Here is a problem. Who (9) take care ofmy flat in Dhaka? Ifl had a good, reliable man, I (10) make him caretaker of my flat. But where

(11) I find such a man?

Read the beginning of the story. Write ten new sentences to complete the story in a way you would like.

Nahar, an 18 year old garments worker lives with her family in a slum. She dreams of having a life full of joy. One day while going to her work place, she found a piece of gold in front of the factory gate.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Who was Lipi and what crisis did she face at age fourteen?**
> 💡 **Answer:** Lipi was a brilliant fourteen-year-old schoolgirl whose poor rural parents arranged her early marriage to an older widower against her will.

> ❓ **Q: How did Lipi successfully resist early child marriage?**
> 💡 **Answer:** Lipi informed her headmaster, teachers, and classmates, who convinced her parents that child marriage is harmful, illegal, and destructive to a girl's future.
$tag_u05_l04$, 4);

    -- Lesson 5: Lesson 5: Let's Become Skilled Workforce
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u05_l05$
# ৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 5: Let's Become Skilled Workforce

In groups discuss the following question and give your opinion to the whole class:

Why should we learn English?

Read the conversation between Ratan and Rumi to find out about the importance of English.

**Rumi:** You remember my brother Raihan, don't you? He applied for a front desk officers' job in a 5-star hotel.

**Ratan:** What happened? Has he got the job?

**Rumi:** No! He couldn't answer most of the questions in the interview. Ratan: Why? He did well in the HSC, didn't he?

**Rumi:** Yes, he did. But the recruiting officer in the interview asked him questions in English and he couldn't understand most of them.

**Ratan:** Sorry, but I have a different story to tell you. My cousin Sheela did her HSC from a college in Mymensingh. She couldn't do as well as Raihan in her exams, but she got a job as a crew member in Biman Bangladesh. She said she had answered all the questions in English both in her written test and interview.

**Rumi:** Great! She must be good in English. Well, then the key to getting some jobs is English, isn't it?

**Ratan:** Yes, you're right.

Discuss in groups.

Try to find out why English is needed for a good hotel front desk job and a flight crew member.

Choose two I three other jobs where English is needed and write why and how English is used in those jobs.

Read what Ms Choudhury says to her students about learning English.

"Today there are many jobs where you need English. This is because the world has become smaller. Vast distances are shortened by speedy transports. We can talk to a person thousands of kilometers away on the phone or the Internet. So we can communicate with the whole world easily. English has made this communication easier.

There are many countries in the world with many languages, but to communicate with them, you cannot use all the languages. So you need a common language that you can use with more or less all the people in the world. English is that common language. You can talk to a Chinese toy maker, a French artist, an Arab ambassador or a Korean builder in one language- English.

English, for us in Bangladesh, is all the more important. As we have seen earlier, we are too many people in a small country. So if you learn English, you have the best opportunity to find a good job, both within and outside the country. And that is good news for millions of our unemployed youths."

"But Miss, we learn English for 12 or 14 years, yet we do not find good jobs," says Rumi. She then tells the class about what happened to her brother. "Could you please tell us why?" Rumi asks.

"This is a very important question, Rumi. We should learn how to use English both orally and in writing for doing things as needed in our work, such as communicating with others at personal, social, national and international levels. But unfortunately, at the moment we are learning English mainly for our exams," continues Ms. Choudhury. "Remember, English can greatly help you become skilled workers."

"But where and how can we learn such kind of English, Miss?" asks Ratan. Ms. Choudhury says, "We can learn English both in and outside the classroom. Besides your textbooks, the radio, television, newspapers, magazines, computers and other supplementary materials will greatly help you. During our classroom activities, we'll see how we can learn English."

Write a paragraph by rearranging the following sentences or sentence parts.

You can learn a common language in and outside the classroom.

You cannot speak all the languages of different people of different countries to communicate with them.

For example, you can do businesses with a Chinese, a Japanese, a French, an Arab or a Nigerian if you know English.

Also other things like the radio, TV, computers and newspapers can help you learn English.

Therefore, you need a common language, i.e. English, which is understood by people more or less all over the world.

Discuss in groups and write answers to these questions.

Describe briefly the things that have made the present world smaller.

Give reasons why a common language is needed in today's world.

Why is English needed all the more in Bangladesh?

How can our youths become a skilled workforce?

**Project:** Find out how many people in your village or locality can speak or write English for communication. State their age, education and profession.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why is vocational and technical education vital for Bangladesh's youth?**
> 💡 **Answer:** Technical education equips young people with practical, in-demand skills in computing, engineering, and trades, turning youth into productive human resources.

> ❓ **Q: How does a skilled workforce benefit the national economy?**
> 💡 **Answer:** A skilled workforce boosts industrial productivity, attracts foreign investment, and earns valuable foreign remittance through high-wage international employment.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Active and Passive Voice):**
  - Active: *"The teachers prevented Lipi's early marriage."*
  - Passive: *"Lipi's early marriage **was prevented** by the teachers."*
- **Writing Activity (Formal Application):**
  - Write an application to the Headmaster of your school requesting permission to organize a vocational skill development workshop for students.
$tag_u05_l05$, 5);

END $$;
