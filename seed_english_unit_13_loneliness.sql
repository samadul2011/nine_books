-- ============================================================
-- Unit 13: Loneliness (১৩শ অধ্যায়: একাকীত্ব (Unit 13: Loneliness))
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

    -- Find Chapter (Unit 13)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 13 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 13 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Loneliness: Causes, Effects and Preventi
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u13_l01$
# ১৩শ অধ্যায়: একাকীত্ব (Unit 13: Loneliness)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

- after we have studied this unit, we will be able to know new words and extend our vocabulary

- read a text and understand overall meaning

- infer meanings from the context

- answer and give opinions on a given topic

---

## 📖 Lesson 1: Loneliness: Causes, Effects and Prevention

> 📝 **Activity:** Look at the picture on the previous page and guess what the person might be feeling. Make a list of those emotions and describe them briefly.

Let's read the following excerpt.

What is Loneliness? Causes, Effects and Prevention

**By:** Lindsay Modglin

Loneliness is a universal emotion that most of us experience at least once during our lifetime, although certain events, such as an illness or a pandemic, can make it feel more pervasive. If you're currently experiencing feelings of loneliness, you aren't alone. In fact, a 2020 study by Cigna found that 61% of Americans reported being lonely in 2019, up from 54% in 2018.

No matter what events are occurring around you, understanding loneliness and its risks is important for recognising when you may need support. Read on to learn what loneliness is, its causes, long-term risks and ways to cope with the emotions that may come up when you're lonely.

What Is Loneliness?

The American Psychological Association (APA) defines loneliness as the "affective and cognitive discomfort or uneasiness from being or perceiving oneself to be alone or otherwise solitary."

In other words, loneliness is the mental or emotional discomfort you may experience from either being alone or feeling as though you are alone. This feeling stems from your social needs not being met and/or an inability to get the social connection you desire.

Loneliness vs Being Alone

Although loneliness and being alone are commonly confused, being alone doesn't necessarily mean someone is lonely. "Loneliness is a feeling, while being alone is a situation or state of being, which is not inherently negative," says Nina Vasan, M.D., psychiatrist and professor at Stanford University School

\c, of Medicine and chief medical officer at Real, an online mental wellness

f"-) membership site.

"You can feel lonely even when you're surrounded by other people-such as a partner, family, co-workers or friends," continues Dr. Vasan.

It's also possible to be alone, but not feel lonely, she adds. "For example, if you're by yourself but connecting to others through good communication or activities like volunteering, you don't feel lonely."

What Causes Loneliness?

There are various demographic factors that may contribute to loneliness. Although Dr. Vasan notes that anyone can feel lonely at any time in their life, a few groups that stand out as having an increased risk of loneliness include "young adults, mothers with young children and the elderly." Immigrants are also at higher risk for loneliness, continues Dr. Vasan.

You may experience loneliness for a variety of reasons, but it can often stem from a major life change. A 2020 study by the University of Edinburgh suggests that the causes of loneliness differ depending on the age of the individual. For example, older adults experience loneliness more frequently as a result of living alone, while middle-aged individuals aren't as likely to report living alone as a cause of their loneliness.

This discrepancy between what causes loneliness in older adults versus those who are middle-aged could be due to the fact that older adults have retired and no longer have the community and daily interactions of work life, explains Nikki Press, Psy.D., a clinical psychologist in New York City. Older individuals are more likely to have lost friends and family members, and they are more likely to experience medical or physical limitations that restrict their opportunities for activities and socialising, continues Dr. Press.

Other common causes of loneliness include:

The death of a close friend or family member

Physical isolation, such as living alone or movmg away from family and friends

Illness or disability

Retirement

Working alone

How to Cope with and Prevent Loneliness

Just as the cause of loneliness can vary from person to person, coping and prevention strategies can also differ. In general, the goal is to make strong, healthy connections that fulfill your need for social interaction.

While there is no substitute for help from a mental health professional, the following tips may help you build emotional connections.

**Find hobbies you enjoy:** Taking part in activities you enjoy can be a great way to meet others with similar interests. Consider a book club, art class, fitness group or any other activity where you can interact with others who enjoy the same things.

Volunteer for an organisation you support: Volunteering will not only give you a sense of accomplishment and pride, but it's an opportunity to meet others who support that same organisation.

**Join support groups:** Support groups are an excellent way to connect with others who you have something in common with, such as a mental or physical condition.

Routinely contacting family and friends: Attempting to stay connected, even if only by phone or video chat, can help nurture your emotional health and help prevent loneliness.

Maintain a healthy diet and regular exercise regime: Living a healthy lifestyle promotes overall wellness and reduces your risk of chronic medical conditions-which could interfere with your social life.

Regardless of your interests, it's important to listen to and fulfill your desire for social connection. This can help diminish feelings of loneliness or isolation, and could help improve the overall quality of your life.

(Abridged)

### ❓ Answer the following questions.

What difference is there between being lonely and being alone?

What feelings a person may have when he/she is lonely?

What factors influence older adults' loneliness?

Can you name some of the common causes of loneliness?

How can a person cope with loneliness and improve their quality oflife?

Have you ever felt lonely and sad in your life? What was the reason for your loneliness and how did you overcome the situation?

Fill in the blanks with the correct information from the above text.

Every human being must feel lonely in a lifetime.

"You can feel lonely even when you're ..........by other people-such as a ........., family, or friends".

Volunteering will not only give you a sense of ........... and , but it's an opportunity to meet others who support that same organisation.

Staying connected via phone or video chat, can help one's emotional health and help loneliness.

A few groups that stand out as having an increased risk of loneliness include "young adults, ............ with young children and the "

Discuss in pairs and draw a mind map of causes, effects, and ways of preventing loneliness. A sample mind map of "Flood" has been done for you below.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What are the primary causes of loneliness in contemporary society?**
> 💡 **Answer:** Causes include social fragmentation, breakdown of extended families, excessive virtual screen time, relocation, and lack of deep meaningful conversations.

> ❓ **Q: How does chronic loneliness affect human physical and psychological health?**
> 💡 **Answer:** It increases stress hormones, triggers depression and anxiety, impairs sleep quality, and elevates risks of heart disease and early cognitive decline.
$tag_u13_l01$, 1);

    -- Lesson 2: Lesson 2: A Poem
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u13_l02$
# ১৩শ অধ্যায়: একাকীত্ব (Unit 13: Loneliness)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: A Poem

Read the following poem titled "Solitude" by Ella Wheeler Wilcox and answer the questions that follow.

Solitude

By Ella Wheeler Wilcox

Laugh, and the world laughs with you; Weep, and you weep alone;

For the sad old earth must borrow its mirth, But has trouble enough of its own.

Sing, and the hills will answer; Sigh, it is lost on the air;

The echoes bound to a joyful sound, But shrink from voicing care.

Rejoice, and men will seek you; Grieve, and they tum and go;

They want full measure of all your pleasure, But they do not need your woe.

Be glad, and your friends are many; Be sad, and you lose them all, There are none to decline your nectared wine, But alone you must drink life's gall.

Feast, and your halls are crowded; Fast, and the world goes by.

Succeed and give, and it helps you live, But no man can help you die.

There is room in the halls of pleasure For a large and lordly train, But one by one we must all file on Through the narrow aisles of pain.

Look up the dictionary for the meaning of the following words and make a sentence with each of them.

Weep Shrink Decline Rejoice Nectar Gall Mirth Succeed

### ❓ Answer the following questions from your understanding of the poem you have just read.

Explain the following lines in your own words

"Laugh, and the world laughs with you; Weep, and you weep alone;"

"Succeed and give, and it helps you live, But no man can help you die."

Why do the mountains echo the songs that we sing but not our sighs?

When do you have many friends and when do they leave you?

What does the poet imply about the nature of friendship and companionship in the poem?

Do you agree with the poet's view that people are only present during happy times but absent during struggles? Why or why not?

How does the poem reflect the idea of self-reliance and inner strength?

What is the central theme of the poem "Solitude"?

Write a summary of the poem in your own words (100 words).

Write a letter to your best friend about your activities when you feel lonely.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What emotions are evoked in the poem on solitude and loneliness?**
> 💡 **Answer:** The poem conveys feelings of longing, isolation, silent contemplation of nature, and the human search for understanding and emotional warmth.

> ❓ **Q: How can communion with nature help heal feelings of loneliness?**
> 💡 **Answer:** Nature's serene rhythm, bird song, and greenery calm the troubled mind, offering peace and a gentle reminder of interconnected life.
$tag_u13_l02$, 2);

    -- Lesson 3: Lesson 3: The Story of an Hour
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u13_l03$
# ১৩শ অধ্যায়: একাকীত্ব (Unit 13: Loneliness)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: The Story of an Hour

Read the following story titled "The Story of an Hour" by Kate Chopin and answer the questions.

The Story of an Hour

Kate Chopin

Knowing that Mrs. Mallard was afflicted with a heart trouble, great care was taken to break to her as gently as possible the news of her husband's death.

It was her sister Josephine who told her, in broken sentences; veiled hints that revealed in half concealing. Her husband's friend Richards was there, too, near her. It was he who had been in the newspaper office when intelligence of the railroad disaster was received, with Brently Mallard's name leading the list of "killed." He had only taken the time to assure himself of its truth by a second telegram, and had hastened to forestall any less careful, less tender friend in bearing the sad message.

She did not hear the story as many women have heard the same, with a paralysed inability to accept its significance. She wept at once, with sudden, wild abandonment, in her sister's arms. When the storm of grief had spent itself she went away to her room alone. She would have no one follow her.

There stood, facing the open window, a comfortable, roomy armchair. Into this she sank, pressed down by a physical exhaustion that haunted her body and seemed to reach into her soul.

She could see in the open square before her house the tops of trees that were all aquiver with the new spring life. The delicious breath of rain was in the air. In the street below a peddler was crying his wares. The notes of a distant song which some one was singing reached her faintly, and countless sparrows were twittering in the eaves.

There were patches of blue sky showing here and there through the clouds that had met and piled one above the other in the west facing her window. She sat with her head thrown back upon the cushion of the chair, quite motionless, except when a sob came up into her throat and shook her, as a child who has cried itself to sleep continues to sob in its dreams.

She was young, with a fair, calm face, whose lines bespoke repression and even a certain strength. But now there was a dull stare in her eyes, whose gaze was fixed away off yonder on one of those patches of blue sky. It was not a glance of reflection, but rather indicated a suspension of intelligent thought.

There was something coming to her and she was waiting for it, fearfully. What was it? She did not know; it was too subtle and elusive to name. But she felt it, creeping out of the sky, reaching toward her through the sounds, the scents, the color that filled the air.

Now, her bosom rose and fell tumultuously. She was beginning to recognize this thing that was approaching to possess her, and she was striving to beat it back with her will - as powerless as her two white slender hands would have been.

When she abandoned herself, a little whispered word escaped her slightly parted lips. She said it over and over under her breath: "free, free, free!" The vacant stare and the look of terror that had followed it went from her eyes. They stayed keen and bright. Her pulses beat fast, and the coursing blood warmed and relaxed every inch of her body.

She did not stop to ask if it were or were not a monstrous joy that held her. A clear and exalted perception enabled her to dismiss the suggestion as trivial.

She knew that she would weep again when she saw the kind, tender hands folded in death; the face that had never looked save with love upon her, fixed and gray and dead. But she saw beyond that bitter moment a long procession of years to come that would belong to her absolutely. And she opened and spread her arms out to them in welcome.

There would be no one to live for during those coming years; she would live for herself. There would be no powerful will bending hers in that blind persistence with which men and women believe they have a right to impose a private will upon a fellow-creature. A kind intention or a cruel intention made the act seem no less a crime as she looked upon it in that brief moment of illumination.

And yet she had loved him - sometimes. Often she had not. What did it matter! What could love, the unsolved mystery, count for in face of this possession of self-assertion which she suddenly recognized as the strongest impulse of her being!

"Free! Body and soul free!" she kept whispering.

Josephine was kneeling before the closed door with her lips to the keyhole, imploring for admission. "Louise, open the door! I beg, open the door - you will make yourself ill. What are you doing Louise? For heaven's sake open the door."

"Go away. I am not making myself ill." No; she was drinking in a very elixir of life through that open window.

Her fancy was running riot along those days ahead of her. Spring days, and summer days, and all sorts of days that would be her own. She breathed a quick prayer that life might be long. It was only yesterday she had thought with a shudder that life might be long.

She arose at length and opened the door to her sister's importunities. There was a feverish triumph in her eyes, and she carried herself unwittingly like a goddess of Victory. She clasped her sister's waist, and together they descended the stairs. Richards stood waiting for them at the bottom.

Someone was opening the front door with a latchkey. It was Brently Mallard who entered, a little travel-stained, composedly carrying his grip-sack and umbrella. He had been far from the scene of accident, and did not even know there had been one. He stood amazed at Josephine's piercing cry; at Richards' quick motion to screen him from the view of his wife.

But Richards was too late.

When the doctors came they said she had died of heart disease - of joy that kills.

### ❓ Answer the following questions.

Who had brought the news of Mr. Brently Mallard's death?

How did Mr. Mallard die, according to the rumour?

Why was everyone scared of breaking the news to Mrs. Mallard?

How did Mrs. Mallard react after getting the death news?

How did her reactions change when she went to her room?

Why do you think Mrs. Mallard felt happy and free?

What do you mean by the statement "a joy that kills"?

What happened to Mrs. Mallard at the end of the story?

> 📝 **Activity:** Work in pairs with the friend next to you and think of a sad news that you both have to convey to your classmate. Now, write a dialogue with that friend to whom you are informing the sad news to.

References

Modgin, L. (2023). What is loneliness? Causes, effects and prevention. Forbes Health.

**Loneliness:** Causes, Effects And Prevention - Forbes Health

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What happens to Mrs. Mallard in Kate Chopin's 'The Story of an Hour'?**
> 💡 **Answer:** Upon hearing news of her husband's accidental death in a train disaster, Mrs. Mallard initially weeps, but then experiences an overwhelming feeling of newfound freedom.

> ❓ **Q: What is the dramatic irony at the conclusion of 'The Story of an Hour'?**
> 💡 **Answer:** Her husband walks through the door alive; she suffers a fatal heart attack from the sudden loss of her dream of freedom, though doctors ironically believe she died of joy.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Transition & Conjunctive Adverbs):**
  - Use words like *furthermore*, *nevertheless*, *on the contrary*, and *in addition* to structure analytical essays.
- **Writing Activity (School Magazine Article):**
  - Write a short article titled *"Screen Addiction and Modern Youth Loneliness: How to Reconnect with Real Life"*.
$tag_u13_l03$, 3);

END $$;
