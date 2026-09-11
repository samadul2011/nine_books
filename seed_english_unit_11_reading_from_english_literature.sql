-- ============================================================
-- Unit 11: Reading from English Literature (১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature))
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

    -- Find Chapter (Unit 11)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 11 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 11 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Books
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l01$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied the unit, we will be able to recognize and use English sounds, stress, and intonation*

- understand and enjoy stories and other texts

- interpret, evaluate, and summarise literary texts.

---

## 📖 Lesson 1: Books

### Section A: Ask and answer these questions in pairs.

Do you read any books other than your school textbooks?

If yes, what kinds of books do you read? (stories, poems, etc)

Now write one or two reasons why you read those books and share with your partner.

Read the poem.

Books

- Eleanor Farjeon

What worlds of wonder are our books! As one opens them and looks, New ideas and people rise In our fancies and our eyes.

The room we sit in melts away, And we find ourselves at play

With some one who, before the end, May become our chosen friend.

Or we sail along the page To some other land or age. Here's our body in the chair, But our mind is over there.

Each book is a magic box, Which with a touch a child unlocks. In between their outside covers Books hold all things for their lovers.

### Section C: Answer that following questions.

What does the poet say about the good things that reading a book can do to you?

What does the poet compare book to in the opening lines of the poem?

How does the poem describe the way books "fly" to us?

According to the poem, how do books provide comfort or companionship?

Do you agree with the poet's portrayal of books as magical and timeless? Why or why not?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why does literature hold an enduring place in human culture?**
> 💡 **Answer:** Literature reflects the human condition, timeless emotions, moral dilemmas, societal conflicts, and universal truths across cultures and eras.

> ❓ **Q: How does reading classic poetry and prose enrich a student's mind?**
> 💡 **Answer:** It refines linguistic taste, deepens empathy, fosters aesthetic appreciation, and stimulates profound philosophical contemplation.
$tag_u11_l01$, 1);

    -- Lesson 2: Lesson 2: Two Mothers Remembered
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l02$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: Two Mothers Remembered

Read the poem and answer the following questions Two Mothers Remembered

- Joann Snow Duncanson I had two Mothers - two Mothers I claim

Two different people, yet with the same name.

Two separate women, diverse by design, But I loved them both because they were mine. The first was the Mother who carried me here, Gave birth and nurtured and launched my career.

She was the one whose features I bear, Complete with the facial expressions I wear. She gave me her love, which follows me yet, Along with the examples in life she set.

As I got older, she somehow younger grew, And we'd laugh as just Mothers and daughters do. But then came the time that her mind clouded so, And I sensed that the Mother I knew would soon go. So quickly she changed and turned into the other, A stranger who dressed in the clothes of my Mother. Oh, she looked the same, at least at arm's length, But now she was the child and I was her strength.

We'd come full circle, we women three, My mother the first, the second and me.

And if my own children should come to a day, When a new Mother comes and the old goes away, I'd ask of them nothing that I didn't do.

Love both of your Mothers as both have loved you.

Questions

### ❓ Answer the following questions:

How are the two mothers different from each other?

How are they the same?

What did the first mother do to the speaker?

Who was the speaker's second mother? Describe her briefly.

What would be the speaker's advice to her own children?

Who are the three women referred to in the poem? Briefly describe them.

What should children do to their mother and why?

Do you like this poem? Why?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is the central theme of the poem 'Two Mothers Remembered'?**
> 💡 **Answer:** The poem depicts the unconditional love, tender memories, and profound emotional bond between a daughter and her mother across passing years.

> ❓ **Q: How does the poet portray the passage of time in the poem?**
> 💡 **Answer:** Time is portrayed through physical aging, shifting family roles, yet enduring emotional warmth and gratitude that never fades.
$tag_u11_l02$, 2);

    -- Lesson 3: Lesson 3: The Sands of Dee
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l03$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: The Sands of Dee

### Section A: Listen to the poem. Read it aloud in groups.

The Sands of Dee

- Charles Kingsley

"O Mary, go and call the cattle home, And call the cattle home, And call the cattle home

Across the sands of Dee!"

The western wind was wild and dank with foam, And all alone went she.

The western tide crept up along the sand, And o'er and o'er the sand, And round and round the sand, As far as eye could see.

The rolling mist came down and hid the land And never home came she.

"Oh! Is it weed, or fish, or floating hair, A tress of golden hair, A drowned maiden's hair Above the nets at sea?

Was never salmon yet that shone so fair Among the stakes of Dee?'

They rowed her in across the rolling foam, The cruel crawling foam, The cruel hungry foam, To her grave beside the sea:

But still the boatmen hear her call the cattle home Across the sands of Dee.

Answer these questions.

What was the weather like when Mary went to bring the cattle home?

Look at some words, phrases and sentences that have been repeated several times. Explain why the poet has done that.

How has the poet described the sea?

Narrate the story of Mary in your own words.

Suppose you were walking on the shore with a couple of your

friends while Mary was drowning. Describe what you would have done.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What tragedy unfolds in Charles Kingsley's poem 'The Sands of Dee'?**
> 💡 **Answer:** Young Mary goes out alone to call the cattle home across the treacherous sands of the River Dee and drowns in the rapidly rising coastal tide.

> ❓ **Q: How do fishermen still remember Mary's tragic fate in local folklore?**
> 💡 **Answer:** Local fishermen believe they can still hear Mary's haunting voice calling the cattle home across the misty foam of the tide.
$tag_u11_l03$, 3);

    -- Lesson 4: Lesson 4: Time, You Old Gipsy Man
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l04$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: Time, You Old Gipsy Man

### Section A: Read and answer the following questions.

Have you ever seen a gipsy? If yes, where?

Do gipsies live in our country?

In what ways are they different from the general people?

### Section B: Now read the poem and answer the questions that follow.

Time, You Old Gipsy Man

- Ralph Hodgson Time, you old gipsy man, Will you not stay, Put up your caravan Just for a day?

All things I' 11 give you, Will you be my guest? Bells for your jennet Of silver the best, Goldsmiths shall beat you A great golden ring, Peacocks shall bow to you, Little boys sing, Oh, and sweet girls will Festoon you with may. Time, you old gipsy, Why hasten away?

Last week in Babylon, Last night in Rome, Morning, and in the crush Under Paul's dome; Under Paul's dial

You tighten your rein-Only a moment

And off once again; Off to some city

Now blind in the womb, Off to another

Ere that's in the tomb.

Time, you old gipsy man, Will you not stay, Put up your caravan Just for a day?

| Questions: |   |   |
| --- | --- | --- |
| 1. | Why does the poet call time an 'old gipsy man'? |   |
| 2. | Make a list of things the poet will offer time if it stays just for a day. |   |
| 3. | What else can you offer time if it stays for a day? |   |
| 4. | What does the poem imply about the human struggle to control or |   |
| 5. | delay Time? <br> Is the poem's message about Time ultimately pessimistic or realistic? | '-a |
|   | Discuss. |   |

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: How does the poet address time in 'Time, You Old Gipsy Man'?**
> 💡 **Answer:** The poet personifies time as a restless, relentless gipsy who never stays in one place and cannot be bribed by bells or golden treats to halt his caravan.

> ❓ **Q: What universal truth does Ralph Hodgson convey about time?**
> 💡 **Answer:** He conveys that time waits for no man, continuously advancing and bringing an end to all earthly moments and civilizations.
$tag_u11_l04$, 4);

    -- Lesson 5: Lesson 5: Stopping by Woods on a Snowy Evening
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l05$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 5: Stopping by Woods on a Snowy Evening

Ask and answer these questions.

Do you enjoy natural beauty like flowers, trees, woods, hills, etc.?

Have you ever been to a place where you enjoyed such beauty? If yes, briefly describe it.

Read the poem and say how the words in each stanza rhyme. For example, in stanza 1 know (line 1) though (line 2) and snow (line 4) rhyme with each other.

Stopping by Woods on a Snowy Evening

- Robert Frost

Whose woods these are I think I know. His house is in the village though;

He will not see me stopping here

To watch his woods fill up with snow.

My little horse must think it queer To stop without a farmhouse near Between the woods and frozen lake The darkest evening of the year.

He gives his harness bells a shake To ask if there is some mistake.

The only other sound's the sweep Of easy wind and downy flake.

The woods are lovely, dark and deep. But I have promises to keep, And miles to go before I sleep, And miles to go before I sleep.

### ❓ Answer the following questions.

Where do you think the poet is going? Why is he going there?

Why does the speaker stop by the woods on a snowy evening?

What does the speaker mean when he says, "The woods are lovely, dark and deep"?

Guess what promise the poet had to keep before he would sleep.

Why did the poet stop by the woods though it was dark and he was alone?

Is the poem's ending hopeful or resigned? Discuss your interpretation.

Write an imaginary dialogue between the poet and his horse.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What conflict does the speaker face in 'Stopping by Woods on a Snowy Evening'?**
> 💡 **Answer:** The speaker is captivated by the dark, quiet beauty of the snowy woods, but feels the tug of duty and promises he must fulfill before resting.

> ❓ **Q: What is the symbolic meaning of the poem's famous closing lines?**
> 💡 **Answer:** 'And miles to go before I sleep' symbolizes the responsibilities and duties a person must accomplish in life before death arrives.
$tag_u11_l05$, 5);

    -- Lesson 6: Lesson 6: The Purple Jar (Part-1)
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l06$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 6: The Purple Jar (Part-1)

### Section A: Think about the following situation.

Suppose your mother/father has given you some money to spend on anything you like in a fair. Going round the fair, you have shortlisted the following items:

a beautiful decorative wooden horse

a colourful shirtlkamiz of latest fashion

a box of delicious chocolates for your family

a golden pen---a gift for your best friend

But you have money enough to buy only one thing. Write a paragraph about what you will buy and why.

Now read the story and answer the questions that follow.

Rosamond, a little girl about seven years old, was walking with her mother in the streets of London. As she passed along she looked in at the windows of several shops, and saw a great variety of things. She wanted to stop to look at them and buy them all, without knowing their uses or even without knowing their names.

At first they stopped at a milliner's shop. The windows of the shop were decorated with ribbons, lace and festoons of artificial flowers.

"Oh, Mamma, what beautiful roses! Won't you buy some of them?" "No, my dear."

"Why?"

"Because I don't want them. They are not real flowers."

They went a little further and came to a jeweller's shop. In it were a great many pretty, bright ornaments of little value, set beautifully behind the glass.

"Mamma, will you buy some of these?" "Which of them, Rosamond?"

"Which? I don't know which. Look at those earrings, that necklace, those pendants! Any of them will do, they are so pretty!"

"Yes, they are all pretty, but of what use would they be to me?"

"I am sure, Mamma, you could find some use if you only bought them first."

"But I would rather find out the use first."

Though a little disheartened, Rosamond kept on looking at the shops and tried to persuade her mother to buy this or that.

"Mamma, buckles are very useful things. Please buy some."

"I have a pair of buckles. I don't need any now." So saying her mother walked on.

### ❓ Questions:

Make a list of things Rosamond wanted to buy.

How did the milliner's shop look like?

What can you see in a jeweller's shop in a town/city in Bangladesh, which you know well?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Who is Rosamond in 'The Purple Jar' and what mistake did she make?**
> 💡 **Answer:** Rosamond was a young girl who chose an attractive purple vase from a chemist's shop window instead of buying practical, desperately needed shoes.

> ❓ **Q: Why was Rosamond so fascinated by the purple jar?**
> 💡 **Answer:** She was deceived by its vibrant purple glow, unaware that the color came merely from colored liquid inside plain dark glass.
$tag_u11_l06$, 6);

    -- Lesson 7: Lesson 7: The Purple Jar (Part-2)
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l07$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 7: The Purple Jar (Part-2)

### Section A: Read more of the story.

This time Rosamond was really disappointed as her mother wanted nothing. However, while they were passing by a chemist's shop, she saw some jars---blue, green, red, yellow and purple---and she seemed to have a fascination for a purple jar. But her mother answered as before, "Of what use would they be to me, Rosamond?"

f"-)

"Oh, Mamma, I would use it for a flower pot."

"But you have a flower pot and the jar you are dying for buying• 1s not a flower pot."

"Yet, Mamma, I like it so much ... !"

Then suddenly she cried, "Ouch! A stone, mamma, a stone has got in my shoe. It hurts!"

"Oh! How did it get there?"

"See, there's a hole in my shoe, Mamma. In fact, my shoes are quite worn out. Would you be so good as to buy me another pair?"

"But, Rosamond, I haven't got money enough to buy shoes, jars, jewellary, buckles and all that you wish to buy."

Rosamond became sad again. Her mind flashed back to all those beautiful things she had seen that morning.

"But, Mamma, I like the purple jar very much. And now my foot hurts. Could you buy me only these two things --- the jar and a pair of shoes, please?"

"No, Rosamond, you can buy only one thing. However, you may buy the other thing next month. And you have to decide which one you would like to buy now."

"I need the shoes badly," Rosamond began to argue with herself, but my heart is in that beautiful jar.

Then looking at her shoes, she told her mother, "These shoes are not so bad, except for the hole in one. I think I can make them last till the end of the month, can't I? Don't you think so, Mamma?"

"I want you to think for yourself, dear."

"Okay, if you please, I would like to have the purple jar." "Very well, you will have it."

Tick the best answer.

Which is the correct statement?

Rosamond saw the chemist's shop from a distance.

She liked the jars of all the colours equally.

She had a special liking for a jar of a particular colour.

Her mother found some use of the purple jar.

Rosamond wanted to buy

all the jars. b.

c. a flower pot. d.

the purple jar. a useful pot.

The money Rosamond's mother has can buy only one thing. b. two things.

c. three things. d. four things.

Why did Rosamond persuade her mother to buy her a pair of shoes?

Because

her shoes had become old and ugly.

she had no money to buy the purple jar.

the shoes in the shop were very beautiful.

a stone got in her shoe and was hurting her.

What made Rosamond finally decide to buy the purple jar?

the beautiful size of the jar

her mother's inability to buy the shoes

her shoes being not so bad

the beautiful colour of the jar

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What happened when Rosamond emptied the liquid from the purple jar at home?**
> 💡 **Answer:** To her disappointment, she discovered that the jar was made of plain white glass and the purple beauty vanished completely with the foul-smelling liquid.

> ❓ **Q: How did Rosamond suffer for her foolish choice?**
> 💡 **Answer:** With torn shoes, her feet hurt, stones got inside, she could not walk comfortably, and was unable to accompany her father on an enjoyable visit.
$tag_u11_l07$, 7);

    -- Lesson 8: Lesson 8: The Purple Jar (Part-3)
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l08$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 8: The Purple Jar (Part-3)

Read the last part of the story to see what happened to Rosamond's beautiful purple jar.

Rosamond and her mother were going back to the chemist's shop. As they were walking, Rosamond had to stop once again to take another stone out of the broken shoe, and she often limped with pain.

When they got back to the shop, Rosamond's mother asked her to carefully examine the jar before she bought it. But Rosamond was so excited that she bought it even without looking at what was inside the jar.

Happily she came back home with her mother. Then Rosamond quickly brought some flowers from the garden and was going to put them into the jar. But as soon as she took the top off, she saw something dark inside, which gave off an unpleasant smell.

"What is it, Mamma? I didn't want this black thing and the terrible smell."

"Nor did I, my dear."

"But what shall I do with it?" "That I can't tell."

"Okay, Mamma, I must pour it out and fill the jar with fresh water."

Then she made the jar empty. But to her great disappointment, she found that it was no longer a purple jar --- it was a plain white glass jar. With its coloured water gone, the jar did no longer look beautiful.

Rosamond cried with tears of disappointment in her eyes. She also cried for her folly. Every day her shoes grew worse and worse, and she could neither run, dance, jump, nor go shopping with her mother.

Thus Rosamond suffered for a whole month and learned a lesson the hard way. She hoped that she would be wiser in future.

Adapted from The Purple Jar by Maria Edgeworth

Answer these questions.

Why didn't Rosamond examine the jar before buying it?

What did she take the jar for?

How did she come to know that the purple jar was in fact a plain white glass jar?

Describe her sufferings and disappointments for buying the purple Jar.

Read all the three parts of the story again and answer these questions.

How did Rosamond try to persuade her mother to buy all the pretty things she saw in the shops?

How did her mother try to stop Rosamond from buying all the things she wanted to buy?

Write two paragraphs-one about Rosamond and the other about her mother. Use words and phrases from the box below, which are appropriate for each character. You can also use your own words and phrases.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What moral lesson did Rosamond learn from the purple jar episode?**
> 💡 **Answer:** She learned to judge things by their real utility and inner value rather than being swayed by superficial outward appearances.

> ❓ **Q: How did Rosamond's mother help teach her this lesson?**
> 💡 **Answer:** Her mother allowed her to make her own choice and experience the natural consequences, teaching her valuable self-restraint and wisdom.
$tag_u11_l08$, 8);

    -- Lesson 9: Lesson 9: A Pound of Flesh
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l09$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 9: A Pound of Flesh

> 📝 **Activity:** Look at the picture and ask and answer the questions.

What do you see?

What are the three persons doing?

What type of clothes are they wearing?

Are you familiar with such clothes?

Who wears such clothes?

Mention which clothes of our country are close to the ones the men are wearing in the picture?

> 📝 **Activity:** Read the text.

Once upon a time in Venice, Italy, there was a very rich merchant named Antonio. He had many ships that sailed in the sea. His ships carried different types of merchandise to other countries. He sold those goods there. He bought spices and other valuables from foreign countries and sold them in Venice.

Antonio was a good and kind man. He always helped the poor. The people of Venice loved him very much for his honesty and kindness.

Antonio had a close friend named Bassanio. He was a handsome young man and was born in a noble family. Bassanio liked to live a very luxurious life. He loved grandeur and style. He spent more money than he earned. As a result, he was very often short of money. In such situations, Bassanio would go to his best friend Antonio for help. Antonio would help him with cash.

It so happened that Bassanio fell in love with a wealthy lady named Portia. Portia was known not only for her beauty but also for her wisdom. She was soft towards Bassanio too. He wanted to visit Portia in a grand manner but he did not have any money. So he went to Antonio.

Bassanio said, "Dear friend Antonio, I am in great need of some money. I would like to visit Portia at Belmont, grandly dressed and with many servants. But I don't have any money right now. Please help me to fulfill my intention."

Antonio said, "This is not a problem, my friend. How much do you need?" "Three thousand ducats [Venetian currency] will do."

"I don't have that much money with me now as all my ships have gone out in the sea with merchandise. But don't worry, my friend, I'll arrange three thousand ducats for you."

So he decided to borrow the sum from a moneylender named Shylock. Shylock was a very crooked man. Antonio and Shylock hated each other. Shylock used to lend money with high interest. He would even send the debtor to prison if the latter failed to pay his debt. On the contrary, Antonio used to lend money to help those who needed it and would not charge any interest.

Shylock agreed to lend him money but on one condition. If he failed to repay the money in three month's time, he would pay a penalty. Shylock would cut a pound of flesh from any part of Antonio's body.

Antonio willingly agreed, thinking that his ships would soon return with all the rich merchandise and he could easily return the money to Shylock by selling them. Shylock made Antonio sign a bond before giving him the money. Antonio took the money and gave it to Bassanio.

True or False? If false, give the correct information.

Bassanio was a very rich man.

Bassanio and Antonio hated each other.

Antonio went to Shylock to borrow some money.

Shylock happily gave Antonio the money he asked for.

Antonio needed the money to bring his merchandise.

> 📝 **Activity:** Read the text in B again and answer the following questions.

Why was Bassanio short of money all the time?

Why did he go to Antonio?

Why did Antonio go to Shylock?

Why did Shylock get a bond signed by Antonio?

What was written in the bond?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is the background of the conflict in Shakespeare's 'The Merchant of Venice'?**
> 💡 **Answer:** Antonio, a generous Christian merchant, borrows three thousand ducats from Shylock, a vengeful Jewish moneylender, to help his friend Bassanio court Portia.

> ❓ **Q: What unusual and cruel penalty did Shylock demand in his bond?**
> 💡 **Answer:** If Antonio failed to repay the debt within three months, Shylock would be entitled to cut a pound of flesh from Antonio's body near his heart.
$tag_u11_l09$, 9);

    -- Lesson 10: Lesson 10: The Three Caskets
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l10$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 10: The Three Caskets

### Section A: Look at the picture and discuss it in pairs.

> 📝 **Activity:** Read the text and answer the questions that follow.

Bassanio went to Belmont to visit Portia grandly dressed, with many servants. Portia's father had died lately. Before his death he had thought of an unusual plan to find a good husband for his daughter. He wanted a man to marry Portia for herself and not for her wealth. He had three caskets made, one of gold, one of silver and one of lead. One of the caskets had Portia's portrait in it. The suitor who would first choose the casket with the portrait would marry her.

The first one to try was the prince of Morocco. He thought that silver and lead are poor metals. It is the casket made of precious metal that can hold the precious picture. So he chose the gold casket. But all he found was a picture of a skull with a message that said, "All that glitters is not gold." The prince was very sad and went back home. Then came the prince of Spain. He looked at the silver casket for a long time. On it was written, "He who chooses me will get what he deserves." The prince had a very high opinion about himself. He thought that he deserved the best. He therefore chose the silver casket and opened it. Inside the casket he found the picture of a blinking fool. He was very disappointed and offended. He immediately rode away.

Then it was Bassanio's tum. He looked at the caskets for a long time. He thought, "Appearances are often misleading. Bad men appear good and they hide their inner ugliness under fine clothes." So he chose the plain looking lead casket. On opening the casket, he found the portrait of Portia inside.

Bassanio and Portia got married. There was great joy at Belmont and the newly married couple were spending their time happily.

But soon their happiness turned into sorrow by a piece of news. A messenger came with a letter from Antonio. The letter said, "Dear friend Bassanio, all my ships have been lost at sea. I cannot pay the money I owe to Shylock. So I have to pay the penalty. Dear friend, come and see me if possible. I would like to see you once before I die." Bassanio quickly left for Venice.

### ❓ Questions:

Why did Portia's father make such a strange plan?

Write what you know of the three caskets.

How many people attempted to choose the right casket? What was the result?

Who succeeded to marry Portia? Why/How?

Why did the joyous mood at Belmont tum sad?

\c,

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What test did Portia's deceased father design for her suitors?**
> 💡 **Answer:** Suitors had to choose between three caskets made of gold, silver, and lead; only the one who chose the casket containing Portia's portrait could marry her.

> ❓ **Q: Why did Bassanio choose the plain lead casket?**
> 💡 **Answer:** Bassanio recognized that outward show often deceives; he chose the humble lead casket and won Portia's hand in marriage.
$tag_u11_l10$, 10);

    -- Lesson 11: Lesson 11: The Trial
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u11_l11$
# ১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 11: The Trial

> 📝 **Activity:** Read the text and answer the questions that follow.

When Bassanio reached Venice, Antonio was already in the court of justice. They were waiting for the trial to begin. The Duke entered the courtroom, took his seat and the trial began. The Duke requested Shylock to be merciful and not to claim his pound of flesh. But Shylock would not listen to him. Bassanio offered him twice the amount of money that Shylock lent Antonio but Shylock did not accept it. He said, "I claim my pound of flesh. The law is on my side. Antonio must pay the penalty written in the bond."

The Duke was extremely sorry that he could do nothing to help Antonio. The law was on Shylock's side and the law must be abided. The Duke feared that although the wisest lawyer in Venice was coming to speak in defense of Antonio, he would not be able to save the merchant. Soon a young clerk entered the courtroom with a letter from that lawyer. The lawyer was ill and would not be able to come to the court.

He requested the Duke to let his young friend, Doctor Balthazar, defend Antonio. The Duke gave his permission, and Doctor Balthazar entered the courtroom. He looked very young, and the Duke doubted if the wisdom of the young lawyer could save Antonio. This young lawyer was no other than Portia in disguise and the young clerk was her friend, who was also in disguise.

Portia begged Shylock to be merciful and told him how God bestows mercy to those who are merciful themselves.

"Mercy" Portia said, "brings a blessing to him who shows it and to him who receives it. All ofus pray to God for mercy. But God will only have mercy on us if we have mercy on others."

Shylock paid no heed to Portia. All he wanted was his pound of flesh. Portia asked, "Can't Antonio pay the debt?"

Bassanio cried, "Yes, he can pay it, and even more.... Even I can pay ten

times the sum my friend borrowed from Shylock." "Won't you take the money, Shylock?" Portia asked.

"No, I demand the lawful penalty. Give me my pound of flesh." "Let me see the bond Shylock," said Portia.

Shylock handed the bond to her. She read it with great attention and then said, "You are right Shylock. The law is on your side. You can claim the flesh. But I would request you one more time to accept the sum Bassanio is offering you, and let me tear up the bond." But Shylock would not give up his claim. Portia then turned towards Antonio and said, "Get ready Antonio for Shylock to cut his pound of flesh. The law gives it to him."

Shylock was filled with joy on hearing what Portia said. He began to praise Portia in disguise, for her wisdom and righteousness. He cried out, "Oh noble judge! Oh excellent young man, you are a second Daniel, who has come to this earth."

Portia urged Shylock to cut the pound of flesh he demanded. Delighted, Shylock walked towards Antonio with a knife in hand. He told Antonio to uncover his chest. But as he was about to cut Antonio's flesh, Portia stopped him. She cried out, "Wait a second, Shylock! Never forget - there is no mention of blood in the bond. Therefore, you cannot shed a single drop of blood while you cut your pound of flesh; or else you pay the penalty. And the penalty is, the state will take your property from you. You lose everything that you have now, Shylock."

Shylock understood it was not possible for him to cut a pound of flesh without shedding blood. He was defeated by the wise lawyer. He hung his head and without another word left the courtroom. Thus Antonio's life was saved.

Lessons 9, 10 & 11 are adapted from The Merchant of Venice by William Shakespeare.

### ❓ Questions:

Who was Portia? What do you know about her?

What did Portia say regarding mercy?

How did Portia save Antonio's life?

Sketch the character of Antonio.

How do you evaluate the character of Shylock?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: How did Portia, disguised as a young lawyer, save Antonio's life during the trial?**
> 💡 **Answer:** Portia argued that Shylock's bond entitled him to a pound of flesh, but not a single drop of blood; if he spilled Christian blood, his wealth and life would be forfeited.

> ❓ **Q: What is the celebrated theme of Portia's speech on 'The Quality of Mercy'?**
> 💡 **Answer:** She proclaimed that mercy is an attribute of God Himself, dropping like gentle rain from heaven, and blesses both the giver and the receiver.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Reported Speech):**
  - Direct: *The traveler said, "I have promises to keep."*
  - Indirect: *The traveler said that he **had** promises to keep.*
- **Writing Activity (Story Summary):**
  - Write a summary of Maria Edgeworth's moral story *"The Purple Jar"*, explaining the lesson Rosamond learned.
$tag_u11_l11$, 11);

END $$;
