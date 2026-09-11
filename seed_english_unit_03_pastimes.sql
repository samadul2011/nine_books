-- ============================================================
-- Unit 3: Pastimes (৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes))
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

    -- Find Chapter (Unit 3)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 3 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 3 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Have You Any Favourite Pastime?
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u03_l01$
# ৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied the unit, we will be able to narrate incidents and events in a logical sequence*

- participate in conversation, discussions and debates

- read maps, charts, graphs etc.

---

## 📖 Lesson 1: Have You Any Favourite Pastime?

A Look at the pictures. What are the persons doing here? When do they do these kinds of activities?

Read the conversation and answer the questions.

**Tiya:** Anusha, what's the matter? You're wearing sports trousers, T-shirts, sports shoes and carrying a bag! Where are you coming from?

And you look tired!

Anusha

Tiya Anusha Tiya

Anusha

Tiya Anusha Tiya Anusha

: Not exactly, Tiya. I'm feeling great because I'm just coming back from the gym.

: Do you go to the gym regularly?

: Yes, I do. I go twice a week. It's one of my favourite pastimes.

: Really! Going to the gym is your favourite pastime! You make me laugh!

: Why not? I like sports because I like to be fit. I'm not a lazy person like you!

: What do you do there?

: I do yoga.

: Don't you have any other pastimes?

: Hmm... yes, I have. I like playing chess, painting, and reading books when I'm free. I also like photography but I'm yet to learn it. What do you do in your pastime?

**Tiya:** I like watching TV, listening to music, reading books and magazines, and playing games on the computer. I do like gardening. But we don't have sufficient space. So I do pot planting. By the way, I don't know much about yoga. Would you please tell me about it?

**Anusha:** Sure! I' 11 give you an article on it. It will help you know about yoga.

Questions

Okay?

Why does Anusha like going to the gym?

What are her pastimes?

Make a list ofTiya's pastimes.

How will Tiya learn about yoga?

Read the following texts. Then check (✓) the statements below: Yoga: Tap Into the Many Health Benefits

Understanding yoga

Yoga is a kind of posture and breathing exercise. It brings together physical and mental disciplines to achieve peace of body and mind, helping you relax and manage stress and anxiety. Traditional yoga puts emphasis on behavior, diet and meditation. But if you're just looking for better stress management- and not an entire lifestyle change-yoga can still help. Yoga trainers gradually choose easier to complex activities for practitioners. However, all practitioners do not necessarily need the same kinds of practice.

The health benefits of yoga

The potential health benefits of yoga are numerous and may include:

Stress reduction

With its quiet, precise movements, yoga draws your focus away from your busy and chaotic day towards calm as you move your body through poses that require balance and concentration.

Increased fitness

As you learn and refine new poses, you may enjoy improved balance, flexibility, range of motion and strength. And this means you're less likely to injure yourself in other physical endeavours or in your daily activities.

Management of chronic health conditions

Yoga might help in a variety of health conditions, such as cancer, depression, pain, anxiety and insomnia, fatigue and mood shifts. Yoga can also help reduce heart rate and blood pressure.

Weight loss

If you're overweight or have eating disorder, yoga may help you make the healthy lifestyle changes necessary to gain control of your eating and reduce weight.

While you shouldn't expect yoga to cure you or offer you 100 percent relief, it can help some health conditions when combined with standard medical treatment. And if you already enjoy good health, yoga can be an enjoyable supplement to your regular fitness routine.

> 📝 **Activity:** Work in pairs. Discuss these questions. Give your own opinions.

How does exercise work on our memory?

What other benefits can you think of from exercise?

What is the most important benefit of exercise to you and why?

Complete the sentences.

Yoga is a practice of ........................................

Traditional Yoga works through ............................................. .

Yoga is very effective in managing.............................. .

Through the poses of balance and concentration Yoga ....................

.......................................... results in increased fitness.

Yoga can reduce or work for .................................................. g_ Yoga can control .......................................

h. Yoga cannot cure 100 percent, but .................................

Check (✓)the statements about yoga below.

a. Yoga improves fitness.

c. It may differ according to practitioners' levels.

D b. Yoga has little to do with eating D

habits.

D d. It helps people shake off all types D

of physical and mental disorders.

e. It works both on body and mind. D f. It helps practitioners undergo □

similar level of difficulty.

g. If you know yoga, you have better D h. It also helps you live longer. D

control over your real life hazards.

> 📝 **Activity:** Read the text.

Hi, I'm Siyam. I'm from Magura. Although it's the district headquarters, it's a small town. I'm in grade 9 now in Chander Haat Bidyaloya. I love games and sports very much. My father was an athlete in his student life. He inspires me to follow in his footsteps and take part in games and sports or do some exercise besides my studies. So I get up early in the morning and take a walk with my father almost every day. We walk for about an hour. At school, during break I play kabadi, gollachhut, badminton, table tennis, and carom. Sometimes I prac-tise the high jump and the long jump outside the school campus. Playing football is a passion for me. I like watching television too.

I watch sports programmes on different TV channels during my free time. I'm a fan of National Geographic, Discovery, and Animal Planet for their documentaries as they are quite interesting as well as educative. Recently my father has presented me with a camera as he was very happy with the result of my Junior School Certificate exam. When I hold the camera, I feel so excited! I wish I could be an amateur photographer in future - not to take only personal photographs at different parties but to shoot our beautiful Bangladesh. I'm sure that soon photography will be my most favourite pastime.

> 📝 **Activity:** Work in pairs. Read the statements of the following grid. First match the parts in Column B with Column C to make complete sentences. Then make questions for the statements in Column A.

| Column A | Column B | Column C |
| --- | --- | --- |
| What ------------------------- <br> When ------------------------- <br> How-------------------------- <br> When------------------------- <br> Who -------------------------- <br> How long -------------------- <br> Why --------------------------- <br> What-------------------------- | Despite the fact that Magura 1s a district headquarters, <br> His father was a sportsman <br> He encourages Shyam to participate in games and sports <br> Shyam enjoys playing different games and sports <br> He walks <br> They walk <br> He prefers programmes on nature and life <br> He watches sports programmes | besides his studies. <br> it is a small town. <br> in his student life. <br> during break at school. <br> on different TV channels. <br> with his father. <br> for their educative values. <br> for about an hour. |

I . Write about your own pastime following the model in G.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is a pastime and why is it beneficial?**
> 💡 **Answer:** A pastime is an enjoyable leisure activity done regularly for relaxation, which refreshes the mind, relieves stress, and enhances physical and mental well-being.

> ❓ **Q: How do traditional pastimes differ from modern pastimes?**
> 💡 **Answer:** Traditional pastimes involved outdoor games like Ha-du-du, swimming, and kite flying, while modern pastimes increasingly revolve around digital screens, social media, and video games.
$tag_u03_l01$, 1);

    -- Lesson 2: Lesson 2: Reading Really Helps!
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u03_l02$
# ৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: Reading Really Helps!

Read the conversation and tell what Anusha is going to read.

Anusha Tiya

Anusha

Tiya

Anusha

: Tiya, hope you enjoyed the article on yoga.

: Yes, it's great. By the way, Anusha, how did you enJoy London Olympics as a sports lover?

: People rightly say that it is the greatest show on earth. I'm still thrilled to remember what Michael Phelps and Usain Bolt have shown. Amazing!

: Right you are. They are incredible. However, I've got an interesting article on the Internet on Michael Phelps and Usain Bolt. You might like it and take part in the debate on who is better between these two greats. Please read it.

: Ahh... Michael Phelps and Usain Bolt! Thank you Tiya! I would love to read it.

> 📝 **Activity:** Read the text published in a newspaper in 2012, and answer the questions that follow.

Michael Phelps, Usain Bolt are great, but who's better?

With the curtains closing on the 2012 London Olympics, it's impossible not to look back and reflect on the greatest performances by Olympic athletes.

[Photo: Kirby Lee, USA TODAY Sports]

The Olympics have many memorable moments and athletes we'll remember by name alone. The list is quite big. Michael Phelps and Usain Bolt are the latest addition to this list of the bests. They made London Olympics stand apart. If there is any question like this: "What is the standout performance of London 2012?" perhaps the answer is "The London Games gave us Michael Phelps vs. Usain Bolt." The first one is an already decorated Olympian, who put the finishing touches on his great athletic careers. And another came up with a new definition of fast. Two of the most popular Olympic sports, sprinting and swimming, saw their two biggest stars captivating audiences. They'd also domi-nated the 2008 Beijing Games, but Phelps and Bolt cemented their legacies in London. Phelps, the American swimmer, passed gymnast Larissa Latynia for the most Olympic medals ever. Bolt was the third man to repeat as a 100-meter gold medalist and the first as a 200-meter gold medalist, and he broke his own Olym-pic record by running the 100 meter in 9.63 seconds. Once Phelps and Bolt were back in their pool and track, the story lines changed.

Phelps is the most-decorated Olympian ever, with 22 overall medals: 18 gold, 2 silver, 2 bronze. Bolt is the most accomplished Olympic sprinter with the unprecedented double, making clear that he's the fastest man in the world.

**But there's a debate:** Who had the better Olympics? It'd be tough to top Phelps' eight gold medals in Beijing, but what if we're only talking London?

London was Phelps' grand finale. He won four golds and two silvers in seven events, and he says he'll never race again.

London was Bolt's chance to prove he's still the greatest. Bolt won six gold medals in six Olympic finals. He is the first man ever in the history of the modem Games to sweep the 100 and 200 in back-to-back Olympics. Not to mention the addition of back-to-back relay golds.

And Bolt became a legend, in his own words. Phelps already was. Bolt is just 25 years old, so there is no telling how long he can be on top of the sprinting world. What if he decides to "retire" from sprinting to focus on the 400 meters, just to break another world record or two? It would be amazing and entirely possible for him to accomplish.

Who had the better 2012 Games? You tell us, let the debate begin.

[Adapted from USA Today, Sports, London 2012]

Questions

What makes London Olympic 2012 exceptionally sensational?

How are Phelps and Bolt brilliantly similar and different?

Between these two Olympians who has bagged the highest honour within the same time frame?

What is special in Bolt so far?

How does Bolt evaluate himself ?

Make two flow charts on Michael Phelps and Usain Bolt. The first two are done for you.

Michael Phelps

Usain Bolt

Read the following text and complete the blank spaces with the appropriate words from the box below.

These are the stories of two most successful Olympians of history. While one is famous as the fastest .........., the other is celebrated as the fastest

...... of the world. However, both are unparalleled for their ........... in their own field. They made history in the Beijing .......... They have made newer

........... in the London Olympics too. They are the living now.

Though Phelps has .......... from his race, Bolt has prospects to himself

in the next Olympic as well. After the .......... show on earth is over in London, this .......... will go on- who is better. Only time will this question.

> 📝 **Activity:** Work in pairs. Decide who is better between these two champions. Give reasons in favour of your decisions.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why is reading books considered one of the best pastimes?**
> 💡 **Answer:** Reading books stimulates the imagination, enriches vocabulary and language skills, broadens worldview, and enhances concentration and critical thinking.

> ❓ **Q: How does regular reading help improve academic performance?**
> 💡 **Answer:** Regular reading improves comprehension speed, analytical thinking, and writing ability across all academic subjects.
$tag_u03_l02$, 2);

    -- Lesson 3: Lesson 3: Change in Pastime
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u03_l03$
# ৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: Change in Pastime

### Section A: Read the text.

Childhood outdoor pastimes 'in decline'

Traditional childhood pastimes of climbing trees and playing conkers are in decline, according to a survey by the RSPB (Royal Society for the Protection of Birds). It's a charitable organisation registered in England and Wales.

The survey shows that people under 34 recall far fewer such childhood outdoor experiences than people over 55, according to a survey by RSPB.

People were asked which of the twelve childhood outdoor experiences they could remember. The answer included making dens, daisy chains, climbing trees, playing conkers and feeding birds. Four out of five boys climbed trees and the same number of girls made daisy chains. But the survey showed the numbers declining among the newer generations.

Some 15% more of those aged over 55 had these outdoor experiences in their childhood, compared with those between 15-34 years old. Some 92% of the public agreed that experiences of nature were still important to children, and 82% agreed that schools should play a role in providing them to all children.

The survey has highlighted the positive impact of contact with nature on a child's education, health, wellbeing and social skills. At the same time, there has been a decline in these opportunities, with negative consequences for children, families and society-a condition now known as nature deficit disorder.

Mike Clarke, chief executive of the RSPB, will meet parliament members to urge the government to join other organisations in providing children with first-hand experiences of the natural environment. ... "We believe this guidance should include the many positive impacts to children of having contact with nature and learning outside the classroom."

[Adapted from BBC news 6 September 2010]

Read the following words and write their meanings as you understand them from the context. If you don't understand, check the words from a dictionary.

conkers ........................................................................... .

dens ................................................................................

decline ............................................................................

highlight ..........................................................................

impact ........................................................................... .

consequence .....................................................................

disorder ...........................................................................

urge ................................................................................

Read the following statement taken from the text in A and say what the subject of comparison is. Find out the other comparison in text A.

People under 34 recall fewer such childhood outdoor experiences than people over 55, according to the survey by Ipsos Mori for RSPB.

Do you agree that if children have more contacts with nature, they may have a positive impact on them? Make a list of the benefits or harms they may have if taken to nature frequently.

Speak to the senior citizens in your home or community. Ask them about their pastime activities and take notes on them. Then write a paragraph in the style of the text given in Section A to show the differences. Also mention why these differences have taken place.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why are young people's pastime habits changing in recent years?**
> 💡 **Answer:** Young people's pastime habits are changing due to rapid urbanization, lack of open playgrounds, and widespread availability of smartphones and high-speed internet.

> ❓ **Q: What negative consequences can result from excessive screen time?**
> 💡 **Answer:** Excessive screen time can cause eye strain, obesity, irregular sleep patterns, social isolation, and reduced physical stamina.
$tag_u03_l03$, 3);

    -- Lesson 4: Lesson 4: Change in Pastimes in Bangladesh
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u03_l04$
# ৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: Change in Pastimes in Bangladesh

Tiya and Anusha decided to make a survey on students' pastimes in their class. After the survey they presented their findings in a chart. Look at the chart and read how they explain their findings.

| Items | For classes 9-10 | For classes 5-6 |
| --- | --- | --- |
| Playing games and sports | 22.3% | 9.2% |
| Watching television | 17.2% | 31.2% |
| Chatting with friends | 13.7% | 6.7% |
| Reading books or magazmes | 12.9% | 11.7% |
| Gardening | 10.7% | 6.1% |
| Attending social programs such as music, recitations or debates | 9.1% | 7.8% |
| Playing games on computers | 8.2% | 20.9% |
| Others | 5.9% | 6.4% |

**Tiya:** Hello everyone! My name is Tiya. My friend, Anusha and I are going to do a presentation on Pastime Habits of Classes 9 and 10 students in our school. There are 120 students, 60 in class 9 and 60 in class 10. The classes have gender equity. Each class has 30 male and 30 female students. The survey shows that

22.3 percent of students in classes 9-10 like games and sports as their most favourite pastime, which is the 4th option given by classes 5-6 students. Watching television is the second choice (17.2%) by the first group in contrast to 31.2% of the second group. It is noteworthy that watching television is the first choice of the second group. A considerable number (13.7%) of 9-10 students like to chat with their friends and thus it becomes the third popular choice in the chart while this becomes one of the less important choices by the younger kids. Only 6.7% of the kids take it as their first priority. It's interesting that both the groups like reading books. 12.9% of students of classes 9-10 take it as their favourite pastime. The number is 11.7% for Classes 5-6 students. Besides, gardening is voted (10.7% of students) to be the 5th preference by the grown up

group though it is not that much liked by the younger group. Only 6.1% of the young kids are involved in it. This is interesting that though the higher number of students in classes 9-10 prefer attending social programs ( 9.1% ) than students of classes 5-6 (7.8%), yet as a choice it is preferred by the latter group. It is the 5th choice for them while to the older group it is the 6th. Young kids have greater fascination for playing games on the computers (20.9% like it as their first choice). The chart shows that as the kids grow up, they lose their passion for computer games. According to the chart the ratio declines to 8.2% from 20.9% when the kids are students of classes 9-10. Finally, it can be said that the influence of television has impact on both the groups but the more students grow up, the more they opt for fields/ gym.

Questions

What are the gender policy of the surveyors?

What are the survey findings regarding watching television?

Which age group is more interested in socializing with others?

According to the chart, how do the kids change their pastimes when they are grown up? What changes does the chart for 9-10 reflect?

Work in groups. Make a chart on the pastimes of the students in your class and present it to your class.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What traditional sports were popular in rural Bangladesh in the past?**
> 💡 **Answer:** Traditional rural sports included Ha-du-du (Kabaddi), Kanamachi, Golap Tagar, Bouchi, Dariyabandha, and boat racing during the monsoon.

> ❓ **Q: Why are traditional village games disappearing today?**
> 💡 **Answer:** They are disappearing because of declining open spaces, increased academic pressure, migration to cities, and the dominance of mobile entertainment.
$tag_u03_l04$, 4);

    -- Lesson 5: Lesson 5: Pastimes Vary
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u03_l05$
# ৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 5: Pastimes Vary

### Section A: Read the conversation. What is it about? Do you agree or disagree?

Tiya Anusha, I really wonder how pastimes vary from generation to generation.

Anusha Tiya Anusha

Oh yes. I can tell you how.

: Although I don't know exactly, I think time is a big factor.

: You are right. Time changes many things. It changes our tastes and abilities. Technology has roles too. Look, there was a time when playing in the fields was very popular because we had many open fields around. Going to a neighbours' houses and hanging out in groups were popular pastimes as well. You won't see these activities now. The process of urbanization, the aggression of satellite television and people's dependence on technology have changed our lifestyle. Now boys and girls of urban and semi-urban areas are more dependent on the computer for social networking, video games, or computer assisted programmes.

Tiya Anusha

Right. But how do you know all these things, Anusha?

Oh....I read an interesting article on people's changing pastimes. It analyses the issue through a graph. Here it is. Read, and I'm sure you will enjoy it.

Read the article. Underline the words/expressions used in the article to show the changes in the data. The first one is done for you in the text.

There is change in people's preferences for pastimes. A recent survey shows that during the last twenty years, teenagers have gone through significant changes in choosing their pastimes. The survey results are presented through a graph which shows that there is a steady rise in young people's tendency to watch TV. In 1990, 41% of teenagers liked watching TV which increased to 48% in the next ten years and it further increased to 52% in the next decade. Unfortunately, the picture is grim in terms of young people's attraction to field games and sports. While 50% of youngsters opted for games and sports in the 1990s, the figure was 12% less after a decade at 38%. Unfortunately the falling tendency persisted through the next ten years and by 2010 it came down to 25%. Though the young people have dissociated themselves noticeably from games and sports, there is a sharp and steady rise in their association with online or computer assisted programmes. In 1990 when the users of online or computer for pastimes were only 9%, in 2000 the number nearly doubled and reached 14%, and with a rapid increase in the next ten years it shot up to 23%.

The survey also explains the reasons for this change. It says that television has become a part of everyday life even to the underprivileged section of society. This has resulted in larger number of young people opting for watching TV as one of the most favourite pastimes. The increasing urbanization has reduced the number of open fields. Therefore, there is a fall in selecting games and sports as favourite pastimes, though it's not a good news for the country.

And the reason for selecting the computer assisted or online programmes is that computer technology is getting cheaper, easier and more popular every day. Indeed, our young generations are stepping into the e-world.

Now work in groups and analyse the following graph.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why do pastimes vary from person to person and culture to culture?**
> 💡 **Answer:** Pastimes vary according to geographical environment, cultural traditions, personal interests, age groups, and socioeconomic background.

> ❓ **Q: How can young people strike a healthy balance between online and offline pastimes?**
> 💡 **Answer:** They can set strict time limits on screen use and dedicate daily time to outdoor sports, gardening, painting, reading, or voluntary community work.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Gerunds & Infinitives):**
  - Prepositions are followed by gerunds (-ing): *"She is fond **of reading** books."*
  - Certain verbs take infinitives: *"He decided **to learn** swimming."*
- **Writing Activity (Dialogue Writing):**
  - Write a dialogue between two friends discussing the benefits of outdoor pastimes compared to excessive mobile gaming.
$tag_u03_l05$, 5);

END $$;
