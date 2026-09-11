-- ============================================================
-- Unit 9: Unconventional Jobs (৯ম অধ্যায়: অপ্রচলিত পেশা (Unit 9: Unconventional Jobs))
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

    -- Find Chapter (Unit 9)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 9 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 9 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Jobs that People Do
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u09_l01$
# ৯ম অধ্যায়: অপ্রচলিত পেশা (Unit 9: Unconventional Jobs)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to describe familiar objects*

- read intensively and extensively

- participate in debate, discussion

- write about jobs and situations

- read for skimming, scanning, and inferring

- [Skimming= to read quickly to get the gist of a text Scanning = to read quickly to get specific information

- Inferring = to read text to be able to make logical conclusions.]

---

## 📖 Lesson 1: Jobs that People Do

Many of us think that we must have a steady big job to be happy in life. Is that always true? Why/Why not?

### Section B: Read the text. It is about a young entrepreneur, Sayeed Kamal. Notice what he thinks about job and happiness. Then answer the questions that follow.

I know you will wonder if I say the best thing that ever happened to me was when I left my last job. Yes, really!

I was a desk clerk in an office. But believe me I never liked my job. Nothing can be more boring than being stuck in an office all day with computers and telephone.

So after two years or so, I decided to leave my job though I had a good salary. Now I'm the owner of a nursery. Planting seeds, budding, grafting, taking care of saplings, cleaning the flower beds and spending time with trees are different parts of my full time job. I start work very early. In summer I usually leave home at 5:30 in the morning, but in winter not until about 7. I've a small hut in my nursery. There cannot be any more pleasure for me than when I see the moon from there or walk through the trees in the soft moonlit night. The winter is just over. So I'm cleaning up the winter flower garden. Now I'm busy producing more timber and medicinal plants which people will buy from July. Every season is so different and I love them all. When I compare my present days with the past, I simply can't understand how I could survive in my previous job. I love nature. I just love working outside in the open air after all those months in a stuffy office. Gadgets never attract me and perhaps never will.

I'm not married. I do my own work, even cook my own food. I try not to depend on others for the work which I myself can do. Often my friends are annoyed with me. They say, that I should engage a maid for household chores.They are not happy to see me in this 'rustic life'. They are professionals. They earn a lot. Maybe

much more than what I do, but I think I enjoy my work more.

At weekends, I often go to the countryside. Sometimes with my friends, sometimes alone. I love collecting unknown saplings. I have another hobby. I love collecting stamps. I have a Russian stamp from the period of Lenin. I don't watch TV.

The only problem I face is I do not earn enough money in all seasons. The winter and the monsoon are two busy seasons for me. But it's OK. Maybe I do not earn enough like many other people around me. But I at least earn enough for my family, employees, and myself to run a decent life. I must say I'm a very happy man!

### ❓ Questions:

What is the best thing that ever happened to this man?

Why didn't Kamal like his last job?

What are the advantages and disadvantages of his present job?

When does he earn most money?

What attitude of Kamal is reflected in the lines: 'Maybe I do not earn much like many other people around me. But I at least earn enough for my family, employees, and me to run a decent life?'

Ask and answer questions about Kamal. Use the clues given.

Example:

. married?

Q: Is he married?

A: No, he isn't. He isn't married.

1 happy?

When leave home in summer?

What plant after winter?

What do at the weekend?

\Q 5. What collect?

Look at the following table. The left column shows some positive aspects of Sayeed Kamal's character. Add some more to the list. Also find out some aspects of Sayeed that you think are unconventional and write them in the right column.

| Good aspects of Sayeed | Unconventional aspects of Sayeed |
| --- | --- |
| simple <br> diligent <br> loves nature <br> caring e. <br> f. <br> g. | old fashioned <br> loner c. <br> d. |

Write a paragraph on Sayeed Kamal. Take your cues from D.

'I must say I'm a very happy man!'--- Do you agree with Sayeed? Write why/why not?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is an unconventional job?**
> 💡 **Answer:** An unconventional job is a non-traditional career path outside customary office or corporate roles, driven by creative passion, unique skills, and independent enterprise.

> ❓ **Q: Why are more young people pursuing unconventional professions today?**
> 💡 **Answer:** Young people value personal freedom, creative fulfillment, flexible working hours, and the opportunity to turn hobbies into lucrative livelihoods.
$tag_u09_l01$, 1);

    -- Lesson 2: Lesson 2: Weird Jobs Around
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u09_l02$
# ৯ম অধ্যায়: অপ্রচলিত পেশা (Unit 9: Unconventional Jobs)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: Weird Jobs Around

Look at the following pictures and discuss with your partner what you see in them.

> 📝 **Activity:** Read the text and answer the questions that follow.

What type of job do you want to have? Is it a highly paid and high-profile conventional job most people like? Yes, you can have it. It is matter of your choice and an important decision that would help you advance in your life. But have you ever thought of other types of jobs out there--- cool, fun, exciting, even strange or weird jobs you never knew existed? What are they? Did you ever wonder who picks up the chewing gum left on a park bench or who assesses whether a piece of furniture is comfortable enough or who constructs glass eye-balls or who farms oysters in the middle of the ocean? These are all odd, unexpected, wild, unconventional, strange or just plain weird jobs and careers. They are not your traditional career choices, but somebody out there does all these things, gets paid for it, and enjoys life like anybody else.

There are hundreds of such jobs to take if you want to travel the less taken

ways of life. You have to decide on several questions:

f"-)

What companies will recruit/hire me?

Do I actually get a paycheck?

What type of education/diploma will I need?

Can I make a living doing this?

Your answers to these questions will help draw your career roadmap and help you decide if you are ready to take the challenge. Decide if you want a change. A lot of strange jobs also allow you to work part-time or towards a freelancer when it fits your schedule. This way you can get a taste of freedom, a secondary income, and gain experience at the same time.

Do you have interests beyond writing memos and attending boring meetings? If so, you may wonder how you can find a strange job. Hobbies are a good place to start. What do you do for fun? Do you stuff animals, act like Charlie Chaplin, or make model cars? There are people out there working in fields, making money off their hobbies. May be they are testing mountaineering equipment, developing fragrances, or saving sea turtles. And they are getting paid good wages too.

Questions

'But have you ever thought of other types of jobs out there----?' What does 'other types of jobs' mean here?

There are four particular strange and weird jobs mentioned in para one of the text. Which one of them seems to be most weird to you and why?

Before going for an unconventional and strange job the author has suggested several questions to decide on. Rearrange them, beginning from what you think is the most important to the least. Add some more questions to the list that might be important to consider.

What are some other strange part-time jobs mentioned in the text?

What type of job is referred to by the expression 'writing memos and attending boring meetings'? Do you think the author's observation on the particular job is justified? Why/Why not?

### Section C: Look at the following dialogue and act it out in pairs.

X Have you heard of a job like picking up the chewing gums le/ft on a park bench?

y Yes, I have. I know one person who does that job.

X What do you think of the job?

y Sounds rather funny/odd/crazy/ though. But what's wrong?

You can go for it as long as you enjoy it. And if it pays, I think it's fine.

Now make dialogues on the following:

Assessing the comfort of a piece of furniture

Farming oysters in the middle of the ocean

Arrange a debate in the class in favour of and against strange jobs.

> 📝 **Activity:** Work in pairs. Make a list of adjectives used in the text to describe strange jobs (at least 10). Are you familiar with all of them? If yes, use them in your own written sentences. Compare with your partner's.

If no, try to guess their meaning from the context. Then look up a dictionary to get the meanings. Finally, use them in your own sentences.

A number of strange jobs have been mentioned in the text. Do you know any one around you who does one of the jobs? If yes, write a paragraph on him/her.

If no, first select a job. Then try to imagine who around you could successfully do that particular job. Write why you think so.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What are some unusual and weird jobs found around the world?**
> 💡 **Answer:** Unique jobs include professional cuddlers, pet food tasters, water slide testers, golf ball divers, and professional line-standers.

> ❓ **Q: What qualities are required to succeed in unusual professions?**
> 💡 **Answer:** Patience, specialized training, adaptability, passion, and the courage to ignore societal stereotypes.
$tag_u09_l02$, 2);

    -- Lesson 3: Lesson 3: Floral career
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u09_l03$
# ৯ম অধ্যায়: অপ্রচলিত পেশা (Unit 9: Unconventional Jobs)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: Floral career

### Section A: Look at the pictures and say what you see in them.

> 📝 **Activity:** Work in pairs. Choose a job from the box below but do not tell your friend. Ask and answer the following Yes/No questions to find out what the job is.

Use these questions to help you.

| Do you... ? | Do you have to... ? | Did you have to... ? |
| --- | --- | --- |
| work inside | wear a uniform | study at college |
| earn a lot | work in shifts | do a lot of training |
| work with people | use your hands | do intemship |
| use a computer | get up early |   |
|   | speak English |   |

> 📝 **Activity:** Read the text and answer the questions that follow.

Have you ever thought of a very creative career? Have you dreamt of a rosy environment full of colour and fragrance? How much would you love it if you were placed in a store full of flowers the whole day? I'm just going to give you some clues about such a job which can also be a business.

Yes. Daisies, violets, tulips, marigolds, dahlias, lilies, jasmines, roses and all those things of beauty can also earn you a living if you handle them professionally. If you start such a profession you will be called a florist. A florist's career is a good choice as an unconventional job for many around the world. Wherever you see eye-catching floral displays, you actually see the professional performance of a floral designer. Using both real and artificial flowers with other greeneries, florists prepare flower displays for a variety of events such as weddings, birthdays, anniversaries, Valentine's day, official receptions and even funerals. Every flower comes with its distinct colour, design, value and meaning which flower designers have to know well. There are conventions and meanings associated with flowers. We know that conventionally roses are meant for romance and marriage anniversaries and (tulips for) birthdays.

Although formal education or a diploma is not always essential for florists, they must have good taste, a good eye for colours, shapes and proportion. They have to have good sense for selecting flowers, ribbons and other accessories to make beautiful arrangements. Professional florists are knowledgeable about not only flowers but also designs and techniques. Most florists learn the trade mainly through apprenticeship in a flower farming job and also by attending formal floral schools and courses. However, a true passion for flowers and a bit of aesthetic sense are all that can make a florist's career successful.

Flower designers earn fairly handsome money. But the bonus is that they work in a fresh and beautiful environment which their clients also enjoy. They work with flowers all day long in a pleasant and fragrant atmosphere with vivid colours around.

### ❓ Questions:

How is the career of a florist?

What qualities do you need to have for a florist's job?

How do most florists learn the trade?

What is the extra advantage of a florist's job?

Suppose you have met a florist in a flower shop. Write an imaginary interview with him/her.

Write a short paragraph giving reasons why you like or don't like the job of a florist.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What does a career in floristry (floral career) entail?**
> 💡 **Answer:** A floral career involves growing exotic flowers, designing decorative bouquets, arranging floral decor for events and weddings, and floral retail.

> ❓ **Q: How has modern commercial floriculture expanded in Bangladesh?**
> 💡 **Answer:** Areas like Gadkhali in Jashore have become national flower hubs, generating substantial income and employment opportunities for thousands of rural farmers.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Modal Auxiliaries):**
  - *Must/have to* (obligation): *"Entrepreneurs **must** work persistently."*
  - *Can/could* (ability): *"Skilled florists **can** design intricate wedding floral decor."*
- **Writing Activity (Informal Letter):**
  - Write a letter to your cousin sharing your interest in pursuing an unconventional creative career like commercial floriculture or photography.
$tag_u09_l03$, 3);

END $$;
