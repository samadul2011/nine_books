-- ============================================================
-- NineBooks — English For Today (Class 9-10) COMPLETE BUNDLE
-- Full Textbook Content: All 16 Units + Sample Question Paper
-- NCTB 2026 Curriculum (Line-by-line chapter-wise)
-- Run this single script in Supabase SQL Editor!
-- ============================================================

DO $$
DECLARE
    v_subject_id UUID;
    v_chapter_id UUID;
BEGIN
    -- 1. Insert or get Subject
    SELECT id INTO v_subject_id FROM subjects WHERE name_en = 'English For Today' LIMIT 1;
    IF v_subject_id IS NULL THEN
        INSERT INTO subjects (name_bn, name_en, icon_url)
        VALUES ('ইংরেজি', 'English For Today', 'https://img.icons8.com/color/96/books.png')
        RETURNING id INTO v_subject_id;
        RAISE NOTICE 'Created Subject: English For Today (%)', v_subject_id;
    END IF;

    -- ======================================================
    -- Unit 1: Sense of Self
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 1) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১ম অধ্যায়: আত্মপরিচয় (Unit 1: Sense of Self)', 'Sense of Self', 1)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '১ম অধ্যায়: আত্মপরিচয় (Unit 1: Sense of Self)', title_en = 'Sense of Self'
        WHERE subject_id = v_subject_id AND order_index = 1
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u01_l01$
# ১ম অধ্যায়: আত্মপরিচয় (Unit 1: Sense of Self)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

*(Source: Internet)*

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to understand our position as humans*

- recognise our responsibilities towards society and culture

- define our relationship with humans and the natural world at large

---

## 📖 Lesson 1: "Mr. Moti" by Rahad Abir

Economy and education are two major factors that segregate people in a society. 'Mr. Moti' is a story by a Bangladeshi writer Rahad Abir. Read the two sections of the story and try to understand the identity of people belonging to different social classes. Also, think about how the human world and animals/birds are inter-related.

Ameen is seventeen when the war breaks out. One Monday, after supper, he announces he will go to war. Sonabhan shrieks in surprise, "You want to leave me alone?"

"It won't take long;' Ma, he assures her. "I'll be back soon after the training:' That night Sonabhan cannot sleep.

After sun-up, she opens the duck coop. The flock streams out, stretches and quacks around her for their morning meal. She takes longer than usual. She mixes water with rice husks in an earthen bowl and puts it down. They gobble it up in five minutes and head for the pond.

Ameen has let out the chickens by then. He lifts his 12-week-old cockerel, Moti, and sits on the veranda. During his breakfast he doesn't strike up any conversation. Having noticed Sonabhan's puffy eyes, he knows not to mention last night's subject. He casts his glance to the side, down at the cockerel eating rice in silence.

Today is haat bar, market day. Sonabhan has arranged the things Ameen will take to the bazaar to sell. Two dozen eggs, a sheaf of areca nuts, a bottle gourd. The bazaar is about a mile away.

Ameen wears his short-sleeved floral shirt over his lungi. He whistles as he looks into the cloudy mirror to comb his hair. Placing the rattan basket on his head before setting off, he hollers: "I'm off, Ma

Sonabhan watches him go along the bank of the little river. For the first time it occurs to her that Ameen has grown up. He has reached the height of his dead father, has his long neck and straight shoulders.

In that moment, Sonabhan realizes it's not the war, it's the fighting that Ameen is fascinated with. Like his dead father, he is crazy about bullfighting, cockfighting and boat racing. The same stubbornness flows in his blood. Once he decides on something, nothing can stop him.

Her little son! Now a man. Even up to his fifteenth birthday barely a day passed without neighbours appearing with a slew of complaints. Sometimes one or two turned up from other villages. They peeked into the house and asked,"Does Ameen live here?"

Sonabhan would sigh,"What did he do?"

"Your son stole my date juice! Emptied the juice pots hanging on the date trees!" Sonabhan would sigh again. Then ask the visitor to pardon him. She hated saying that she'd raised her son alone. If she could spare them, she would bring half a dozen eggs and hand them to the visitor: "Please take these for your children

At night, Sonabhan climbs out of her bed, clutches the hurricane lamp and tiptoes into Ameen's room. She stands by his bed, looks at her sleeping son. He snores like his father. He has her light skin and button nose. She touches his cheek. His broad forehead. She suppresses a desire to lie beside him. Like the old days, when she slept cuddling her baby.

<div align="center">❖ ❖ ❖</div>

A warning comes from old Chowkidar's young wife. "Watch your rooster," she threatens. "I don't want him in my house again."

If someone touches my boy, Sonabhan responds,"lhey'll see the consequences." She grounds Moti for an entire day. It makes him sad. His forlorn captivity crucifies her. She sets him loose the following morning.

Some boys come and ask Sonabhan to lend them Moti for cockfighting at a fair. They are happy to pay.

"Never," she tells them. "He is my son."

Monday dawns without Moti's crowing. His cold body is resting on its right side. Lying against the basket. Eyes closed. His kingly head down.

With Moti's basket in her lap, Sonabhan is motionless.

She puts Moti to rest beside her husband's grave. She sighs, plods across the empty yard, steps onto an empty veranda, crawls into an empty home and sits on the edge of an empty bed.

Another morning breaks.... Noon and afternoon come and go The birds in the coops quack and crow....No one lets them out. For the first time, Sonabhan's doors do not open.

Note: The excerpts of "Mr. Moti" are selected from the complete story included in When the Mango Tree Blossomed: Fifty Short Stories from Bangladesh edited by Niaz Zaman.

### ❓ Answer the following questions:

Why is the rooster called Mr. Moti?

Is the writer trying to compare the son with the rooster? What are the reasons for doing so?

Why is the story a Bangladeshi story? Which war is referred to in the story?

Do you know what cockfighting is?

What do you think about the mother-son relationship?

Make a list of words from the story that have cultural connotations. Make use of them in a conversation between two friends in your class.

In our culture, sons are believed to follow their father's ways and daughters are found similar with their mothers. Do you see that kind of belief in the story? Discuss it with your friends and bring examples from your own life if you are compared with your father or mother.

Arrange a debate on the motion:

"Man is known by his work, not by his looks."

\c,

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What does 'Sense of Self' mean for a growing teenager?**
> 💡 **Answer:** Sense of self refers to a person's awareness of their own identity, values, strengths, weaknesses, and how they perceive their place in the world and society.

> ❓ **Q: Why is self-awareness important during adolescence?**
> 💡 **Answer:** Self-awareness helps adolescents understand their emotions, make thoughtful decisions, build self-confidence, and develop healthy relationships with family and peers.

> ❓ **Q: What learning outcomes are expected after studying this unit?**
> 💡 **Answer:** Students will be able to understand their position as humans, describe familiar objects, narrate incidents logically, and talk about personal goals and values.
$tag_u01_l01$, 1);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u01_l02$
# ১ম অধ্যায়: আত্মপরিচয় (Unit 1: Sense of Self)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: "Girl" by Jamaica Kincaid

Let's read the following story and answer the following questions.

Wash the white clothes on Monday and put them on the stone heap; wash the color clothes on Tuesday and put them on the clothesline to dry; don't walk barehead in the hot sun; cook pumpkin fritters in very hot sweet oil; soak your little cloths right after you take them off; when buying cotton to make yourself a nice blouse, be sure that it doesn't have gum in it, because that way it won't hold up well after a wash; soak salt fish overnight before you cook it; is it true that you sing benna in Sunday school?; always eat your food in such a way that it won't tum someone else's stomach; on Sundays try to walk like a lady and not like the slut you are so bent on becoming; don't sing benna in Sunday school; you mustn't speak to wharf-rat boys, not even to give directions; don't eat fruits on the street-flies will follow you; but I don 't sing henna on Sundays at all and never in Sunday school; this is how to sew on a button; this is how to make a buttonhole for the button you have just sewed on; this is how to hem a dress when you see the hem coming down and so to prevent yourself from looking like the slut I know you are so bent on becoming; this is how you iron your father's khaki shirt so that it doesn't have a crease; this is how you iron your father's khaki pants so that they don't have a crease; this is how you grow okra-far from the house, because okra tree harbors red ants; when you are growing dasheen, make sure it gets plenty of water or else it makes your throat itch when you are eating it; this is how you sweep a comer; this is how you sweep a whole house; this is how you sweep a yard; this is how you smile to someone you don't like too much; this is how you smile to someone you don't like at all; this is how you smile to someone you like completely; this is how you set a table for tea; this is how you set a table for dinner; this is how you set a table for dinner with an important guest; this is how you set a table for lunch; this is how you set a table for breakfast; this is how to behave in the presence of men who don't know you very well, and this way they won't recognize immediately the slut I have warned you against becoming; be sure to wash every day, even if it is with your own spit; don't squat down to play marbles-you are not a boy, you know; don't pick people's flowers-you might catch something; don't throw stones at blackbirds, because it might not be a blackbird at all; this is how to make a bread pudding; this is how to make doukona; this is how to make pepper pot; this is how to make

a good medicine for a cold; this is how to catch a fish; this is how to throw

f"-)

back a fish you don't like, and that way something bad won't fall on you; this is how to bully a man; this is how a man bullies you; this is how to love a man, and if this doesn't work there are other ways, and if they don't work don't feel too bad about giving up; this is how to spit up in the air if you feel like it, and this is how to move quick so that it doesn't fall on you; this is how to make ends meet; always squeeze bread to make sure it's fresh; but what if the baker won't let me feel the bread?; you mean to say that after all you are really going to be the kind of woman who the baker won't let near the bread?

### ❓ Answer the following questions:

Is it a story about a mother and daughter? Do you find the mother and daughter familiar to you?

What is the cultural identity of the speaker and listener?

What is henna?

What is the importance of gender in the story? If the girl in "Girl" were a boy, would the mother be telling him the same things?

If the father were talking instead of the mother, would he say the same?

**Group work:** Make a list of foreign or unfamiliar objects mentioned in the story and make short notes on them in small groups. Present the notes in the class.

One is not born a woman, one becomes a woman. This is a comment by a famous gender theorist. Does the story give you a sense of that kind? Write ten sentences on your thoughts.

Biological attributes make a person act as a man or a woman in society. This creates gender identity and gender discrimination. In the following table, complete the list of activities that you find marked in our society as man's job and woman's job:

| Man's job | Woman's job |
| --- | --- |
| Driving a car Athletics Scuba diving | Cooking Nursing |

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What are the key elements that shape a person's identity?**
> 💡 **Answer:** A person's identity is shaped by personal beliefs, family values, cultural heritage, social experiences, education, and individual talents.

> ❓ **Q: How can one develop a positive self-image?**
> 💡 **Answer:** One can develop a positive self-image by focusing on personal strengths, learning from mistakes, staying physically active, and maintaining supportive friendships.
$tag_u01_l02$, 2);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u01_l03$
# ১ম অধ্যায়: আত্মপরিচয় (Unit 1: Sense of Self)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3:O Me! O Life!

O Me! O Life!

Walt Whitman

Oh me! Oh life! of the questions of these recurring, Of the endless trains of the faithless, of cities fill'd with the foolish, Of myself forever reproaching myself, (for who more foolish than I, and who more faithless?)

Of eyes that vainly crave the light, of the objects mean, of the struggle ever renew'd, Of the poor results of all, of the plodding and sordid crowds I see around me, Of the empty and useless years of the rest, with the rest me intertwined, The question, 0 me! so sad, recurring-What good amid these, 0 me, 0 life?

Answer.

That you are here-that life exists and identity, That the powerful play goes on, and you may contribute a verse.

> 📝 **Activity:** Listen to the poem using the following YouTube link:

https://www.youtube.com/watch?v=kGZo87If2T8

### ❓ Answer the following questions:

1. What is the main theme of the poem?

11. What recurring questions does the poet mention?

111. What does the poet mean by 'useless years'?

1v. Is age an identity marker? What are the attributes of old age?

What do 'sordid' and 'plodding' mean?

What 'faith' does the poet mention here?

Is there a symbolic meaning of 'contribute a verse' m the last line?

Do you find the answer section of the poem convincing?

**Pair work:** There are some words in the poem like 'fill'ed' and 'renew'd'. These are called 'contractions'. Make a list of such words in pairs with the help of your subject teacher.

Write a summary of the poem and present it in the class.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: How do personal values influence human behavior?**
> 💡 **Answer:** Personal values guide daily choices, moral judgments, empathy towards others, and help individuals act responsibly in society.

> ❓ **Q: Why is reflection necessary for personal growth?**
> 💡 **Answer:** Reflection allows a person to evaluate their actions, understand the consequences of their choices, and continuously improve their character.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Subject-Verb Agreement):**
  - A singular subject takes a singular verb: *"Every teenager **develops** a distinct personality."*
  - Indefinite pronouns like *each*, *every*, *everyone* take singular verbs: *"Each of the students **is** unique."*
- **Writing Activity (Personal Profile):**
  - Write a 120-word paragraph describing your identity, strengths, values, and how you hope to contribute positively to your school and community.
$tag_u01_l03$, 3);

    -- ======================================================
    -- Unit 2: Climate Change
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 2) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)', 'Climate Change', 2)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)', title_en = 'Climate Change'
        WHERE subject_id = v_subject_id AND order_index = 2
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u02_l01$
# ২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to demonstrate understanding and summarise texts*

- ask and answer questions

- take part in debates on given topics

- take part in role playing and conversations

- draft and deliver lectures on given topics

- write letters to newspapers highlighting certain problems

- write slogans for posters.

---

## 📖 Lesson 1: The Greed of the Mighty Rivers

Read the following text and answer the questions.

Meherjan lives in a slum on the Sirajgonj Town Protection Embankment. The whispering wind from the river Jamuna makes the fire unsteady. The dancing flames remind Meherjan of the turmoil in her life.

Not long ago Meherjan had everything- a family, arable land and cattle. The erosion of the Jamuna gradually consumed all her land property. It finally claimed her only shelter during the last monsoon. It took the river only a day to devour Meher's house, trees, vegetable garden and the bamboo bush. She had a happy family once. Over the years, she lost her husband and her family to diseases that cruel hunger and poverty brought to the family. Now, she is the only one left to live on with the loss and the pain. The greedy Jamuna has shattered her dreams and happiness.

There are thousand others wa1tmg to share the same fate like Meherjan. Bangladesh is a land of rivers, some of whose banks overflow or erode during monsoon. Erosion is a harsh reality for the people living along the river banks. During each monsoon many more villages are threatened by the mighty rivers like the Jamuna, the Padma and the Meghna. It is estimated that river erosion makes at least 100,000 people homeless every year in Bangladesh. In fact, river erosion is one of the main dangers caused by climate change. If we can't take prompt actions to adapt to climate change, there will be thousands of more Meherjans in our towns and villages every year.

For each phrase below choose the meanin_g that is closest to the meaning used in the text in A.

In paragraph 3 'mighty rivers' mean

rivers that have huge volumes of water and very strong currents

rivers having many rowing boats in them

rivers that make people cry out

rivers that have strong banks

landed property

a rented piece of land

a piece of land on the bank of a river

property in the form of a source of income to its owner

property used only as an agricultural farm

whispering wind

wind that blows from across the river

wind that blows with a hissing sound

wind that helps someone make a fire

wind that blows in summer

dancing flames

a traditional form of folk dance

flames that make people dance around them

flames that are made unstable by the blast of air

flames made by people to remember their past

Ask and answer the following questions in pairs.

What does Meherjan use to make fire for cooking her meals?

What property did Meherjan lose due to river erosion?

What do you know about Meherjan's family?

In which season is river erosion most likely to occur?

Why is the phrase 'greedy Jamuna' used to describe the river? What greed do you notice in the description?

Complete the summary of Meherjan's life with words/phrases from the box.

Meherjan is a typical (1) ..................... woman who lives m a slum. She

lost her shelter and properties (2) ..................... the erosion of the river Jamuna. She also lost her family. Her husband had died of diseases caused by poverty and (3) .................. Now, she is only a (4) .............. Like Meherjan there are many people who have become the (5) ............ of river erosion. River erosion is still posing (6) to the lives

and properties of thousands of people. People living (7) the rivers are the most likely victims of river erosion. Each year about

(8) ............ ......... people become homeless due to river erosion in

Bangladesh. Meherjan's life is just one (9) ..................... of how climate

change (10) ..................... the lives of thousands of people

**Debate:** Form two groups of 3/4. Decide which group will speak for/against the motion given below. In your group, first, discuss and note down five/six points to support/oppose the motion. Then select the speakers from each group to start the debate.

**Motion:** Humans can't do anything to control the course of nature.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is climate change and what causes it?**
> 💡 **Answer:** Climate change refers to long-term shifts in global temperatures and weather patterns, primarily driven by human activities like burning fossil fuels and deforestation.

> ❓ **Q: How does global warming affect our environment?**
> 💡 **Answer:** Global warming leads to melting polar ice caps, rising sea levels, severe droughts, erratic rainfall, and frequent extreme weather events.
$tag_u02_l01$, 1);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u02_l02$
# ২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: Environmental Pollution

> 📝 **Activity:** Look at the pictures below and discuss the questions.

What do you see in each picture?

What are some of the common sources of environmental pollution?

Which of these sources are most threatening for your environment?

Picture 1 Picture 2

Picture 3 Picture 4

Now read the following passage to know more about environmental pollution in Bangladesh.

Bangladesh is now in the grip of all sorts of pollution like air pollution, soil pollution and water pollution. The dwellers of the urban areas are the worst sufferers of such pollution. The indiscriminate industrialisation process in Bangladesh over the past decades has created significant environmental problems. We will now read about some of the most common types of environmental pollutions and ways of coping with them.

Air Pollution

Air pollution comes from a wide variety of sources. In Bangladesh poisonous exhausts from industrial plants, brick kilns, old or poorly-serviced vehicles and dust from roads and construction sites are some of the major sources of air pollution.

We can minimise this type of pollution by making less use of motor vehicles and avoiding the use of vehicles older than 20 years. We may also use proper lubricants to lessen the level of emission and pollutants. We can encourage

people to use Compressed Natural Gas (CNG) or Liquid Petroleum Gas (LPG) for fuelling their cars. The government may relocate hazardous industries like brick kilns to areas away from human habitations.

Water Pollution

Water pollution can occur in oceans, rivers, lakes, ponds and underground reservoirs. As different water sources flow together, the pollution can spread easily and quickly. Causes of water pollution include:

increased sediment from soil

erosion

improper waste disposal and littering

leakage of soil pollution into water supplies

organic materials that decay in water supplies

In fact, polluting the land means polluting the water. Throwing away a toxic substance on the ground near a water source means it eventually reaches the body of water. As a result, the water is polluted. Industrial wastes must not be disposed in rivers or lakes. We need to be more careful about disposing household wastes too. Use of pesticides means that when it rains, chemicals used in the lawn or garden wash into the water bodies. Therefore, we must be aware of the dangers of using pesticides as they may pollute our rivers, canals and lakes.

Soil Pollution

Among the most significant causes of soil pollution is the enormous volume of industrial waste which is being produced every day but not disposed properly. The mismanagement of household wastes, particularly the polythene shopping bags, has caused serious threat to the soil and the drainage system. Another cause for soil pollution is the use of agricultural pesticides, fertilizers, etc. Sometimes fuel leakages from automobiles may get washed away by rain and seep into the nearby soil.

Pesticides and fertilizers are useful for plant growth but their overuse has led to soil pollution. Natural fertilizers and compost can be used instead of their chemical alternatives. Recycling is another way to reduce and control soil pollution. Recycling papers, plastics and other materials reduces the volume of refuse in landfills. Deforestation also causes erosion, pollution and the loss of fertility in the topsoil. Planting trees and re-forestation help prevent soil erosion and pollution.

From your reading of the text B complete each blank space in the table with no more than two words and/or numbers.

.

In groups of four, prepare a summary in 100 words of the topic below. First, work together to prepare a draft. When the draft is complete, select a group member to read it to the class.

**Topic:** Polluting the land means polluting the water

Look at the three posters below. What messages do they give? Which one do you like the most? Tell your friend why you like it.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why is Bangladesh considered highly vulnerable to climate change?**
> 💡 **Answer:** Bangladesh is low-lying with a vast delta, making it prone to sea-level rise, frequent cyclones, riverbank erosion, and salinity intrusion in agricultural land.

> ❓ **Q: What happens when sea levels rise along the coast of Bangladesh?**
> 💡 **Answer:** Rising sea levels submerge coastal arable land, displace millions of coastal people, and contaminate freshwater sources with saltwater.
$tag_u02_l02$, 2);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u02_l03$
# ২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: Human Being and Climate

Discuss the questions in pairs.

Can human being influence the climate? If the answer is yes, explain how?

Which human activities are responsible for increasing carbon dioxide in the atmosphere?

How can trees help save our environment?

Now read the text below and find answers to the above questions.

Human being can neither change the sun's radiation nor the earth's orbit around the sun. But they can control the increase in the amount of greenhouse gases and its effect on the atmosphere. Only during the last hundred years the carbon dioxide concentration has been raised alarmingly in the atmosphere and we humans can be held responsible for this.

The main cause of the increase in carbon dioxide level in the atmosphere is the burning of fossil fuels. Since the end of the 19th century, industrial activities increased rapidly giving rise to many factories. These factories required energy, which was produced through the combustion of coal. Besides coal, other sources of energy such as mineral oil and natural gas were also burned to heat our houses, run cars and airplanes or to produce electricity. Nowadays, about 85 million barrels of crude oil are burned daily. Every time a fossil raw material is burned, it releases carbon dioxide into the air.

Therefore, it is clear that more and more greenhouse gases like carbon dioxide are being generated worldwide by humans. Moreover, we are also strengthening the greenhouse effect by deforestation, which means cutting down trees. Every year enormous areas of forests are destroyed by people to obtain wood and to clear regions for mining and to create pasture. This loss of the forest causes dual problems. Trees that are burned up release large volumes of carbon dioxide gas into the air. On the other hand, as forests absorb a lot of carbon dioxide from the air and deliver oxygen instead, we also destroy an important storehouse of carbon dioxide when we clear forests.

Read the statements below and say if they are True/False. If false, give the correct information.

Fossil fuels are burned at an alarming rate due to industrialisation.

Coal is the only fuel used for generating energy.

At present, nearly 85 million barrels of crude oil are used weekly.

Deforestation is caused by nature.

Forests help consume carbon dioxide gases from the air.

Match the meanings in column B and the words/phrases in column A.

| A | B |
| --- | --- |
| Sun's radiation <br> Fossil fuels <br> Combustion of coals <br> Crude oil <br> Raw materials <br> Deforestation <br> Photosynthesis | energy that is transmitted from the sun in the form of rays or waves or particles <br> the process used by plants to convert light energy captured from the sun to chemical energy <br> a basic material or substance used in the production or manufacturing of goods <br> non-renewable sources of energy that come from the remains of plants and animals <br> intentional destructions or removal of trees and other vegetations for agricultural, commercial, housing or firewood use <br> a naturally occurring, unrefined petroleum product that can be refined to produce usable products such as diesel, gasoline, heating oil, jet fuel, kerosene, etc. <br> burning of coal usually in industrial plants. |

Write a letter to the Editor of a newspaper expressing your concern about growing deforestation in your area. Describe how deforestation is changing your environment. Also suggest what actions could be taken to stop cutting down trees. Follow the clues below.

dangers caused by deforestation

increase of carbon dioxide in the atmosphere

the greenhouse effect

making people aware of the adverse effect of deforestation

making an action plan to stop deforestation

Look at these posters below. They are made to make people aware of the dangers of deforestation. In groups, design a poster to show the dangers caused by deforestation. Then write a slogan for the poster.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is deforestation and why is it dangerous?**
> 💡 **Answer:** Deforestation is the large-scale cutting down of trees without replanting, which reduces carbon absorption, destroys wildlife habitats, and accelerates soil erosion.

> ❓ **Q: How do trees help in fighting global climate change?**
> 💡 **Answer:** Trees absorb carbon dioxide from the atmosphere during photosynthesis, release life-giving oxygen, and help regulate global temperatures and rainfall cycles.
$tag_u02_l03$, 3);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u02_l04$
# ২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: The Wheel of Cyclone

A Read the following excerpt from Amitabh Ghosh's The Great Derangement and answer the questions.

On the afternoon of March 17, 1978, the weather took an odd tum in north Delhi. Mid-march is usually a nice time of year in that part of India: the chill of winter is gone and the blazing heat of summer is yet to come; the sky is clear and monsoon is far away. But that day dark clouds appeared suddenly and there were squalls of rain. Then followed an even bigger surprise: a hailstorm.

I was then studying for an MA at Delhi University while also working as a part-time journalist. When the hailstorm broke, I was in a library. I had planned to stay late, but the unseasonal weather led to a change of mind and I decided to leave. I was on my way back to my room when, on an impulse, I changed direction and dropped in on a friend's. But the weather continued to worsen as we were chatting, so after a few minutes, I decided to head straight back by a route that I rarely had occasion to take.

I had just passed a busy intersection called Maurice Nagar when I heard a rumbling sound somewhere above. Glancing over my shoulder I saw a gray, tube-like extrusion forming on the underside of a dark cloud: it grew rapidly as I watched, and then all of a sudden it turned and came whiplashing down to earth, heading in my direction.

Across the street lay a large administrative building. I sprinted over and headed toward what seemed to be an entrance. But the glass-fronted doors were shut, and a small crowd stood huddled outside, in the shelter of an overhang. There was no room for me there so I ran around to the front of the building. Spotting a small balcony, I jumped over the parapet and crouched on the floor.

The noise quickly rose to a frenzied pitch, and the wind began to tug fiercely at my clothes. Stealing a glance over the parapet, I saw, to my astonishment, that my surroundings had been darkened by a churning cloud or dust. In the dim glow that was shining down from above, I saw an extraordinary panoply of objects flying past-bicycles, scooters, lampposts, sheets of corrugated iron, even entire teastalls. In that instant, gravity itself seemed to have been transformed into a wheel spinning upon the fingertip of some unknown power.

I buried my head in my arms and lay still. Moments later the noise died down and was replaced by an eerie silence. When at last I climbed out of the balcony, I was confronted by a scene of devastation such as I had never before beheld. Buses lay overturned, scooters sat perched on treetops, walls had been ripped out of buildings, exposing interiors in which ceiling fans had been twisted into tulip-like spirals. The place where I had first thought to take shelter, the glass-fronted doorway had been reduced to a jumble of jagged debris. The panes had shattered and many people had been wounded by the shards. I realised that I too would have been among the injured had I remained there. I walked away in a daze.

Long afterward, I am not sure exactly when or where I hunted down the Times oflndia's New Delhi edition of March 18, I still have the photocopies I made of it. "30 dead", says the banner headline, "700 Hurt As Cyclone Hits North Delhi."

(Abridged)

### ❓ Answer the following questions from your understanding of the above text

What do you mean by the title "The Great Derangement"? What reasons are there for our environment to be deranged?

Describe the weather of 17th March 1978 in your own words.

What job did the author do while studying in Delhi?

What steps did the author take to save himself when the cyclone hit North Delhi?

Have you ever seen any natural calamity around you? Describe what you saw in your own words.

### Section B: Match the following group of words in column A with the meanings given in column and translate each words/group of words into Bengali.

| A | B |
| --- | --- |
| the chill of winter | changing a decision |
| squalls of rain | i suddenly and forcefully like <br> a whip being cracked |
| blazing heat of summer | doing something suddenly |
| an impulse | at that moment |
| over | the coldness of winter |
| 1s no room | something unexpected |
| a glance | amazed |
| took an odd tum | space |
| of mind | tremendous heat of summer |
| dumbfounded | violent gust of rain |
|   | inspecting quickly |
| in that instant | look quickly |

### Section C: 1. Find out published news about natural calamity in Bangladesh and bring that paper cutting to class. Discuss in groups of four classmates on how journalists report news of disasters.

2. Write a news report describing a natural calamity in your locality in 100 words.

### Section D: Write a personal diary entry in 100 words, describing a day in your life that did not go as you had planned. A Sample diary entry is given below:

30th September 2024 Dear Diary, Today was one of the worst days of my life. I had started for school right on time at 7.30am. Usually, my father gives me a ride to the school on his bike. But today, he had to go earlier to his office and asked me to take a rickshaw.

I knew that it would take a longer time to reach school on a rickshaw, and so I had decided to leave earlier. As I stood in front of my house to call a rickshawpuller, I found that all the rickshaws had already been taken by school students and their guardians. I waited there for 10 minutes and found one vacant rickshaw and rode on it.

On my way, suddenly it began raining heavily and I was soaked from head to toe. Just imagine! What a disaster the day was for me. I entered my class drenched as a crow!

Will write to you tomorrow again. I have to sleep now so that I can be up early for school tomorrow.

**Goodnight:** -)

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is a 'carbon footprint'?**
> 💡 **Answer:** A carbon footprint is the total amount of greenhouse gases (including carbon dioxide and methane) produced directly and indirectly by an individual's or organization's activities.

> ❓ **Q: How can students reduce their daily carbon footprint?**
> 💡 **Answer:** Students can reduce their carbon footprint by walking or cycling short distances, conserving electricity, minimizing plastic use, and planting trees.
$tag_u02_l04$, 4);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u02_l05$
# ২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 5: A Friend of the Earth

Discuss the questions in pairs.

Do you throw away empty cans and bottles?

What do you do with your old newspapers?

What happens to the garbage after you throw it away?

### Section B: Read the following text carefully to know about how we can save our environment.

LET'S SAVE OUR PLANET!

Everyone must play a part in protecting the environment. There are many things you can do on your own every day to help save the planet. Here are some suggestions.

\c, f"-)

REDUCE!

Really, the best thing we can do for the planet is to use its resources properly. Our unplanned activities are mainly responsible for the environmental crisis. Here are some questions you can ask yourself before buying something, "Do I really need this?" or "Is there another product which would do the same thing but is more sustainable?" Or ask the question, "Will this last a long time?" Some other questions may be, "Do I know how this item was made, how it will be used and how it will be disposed of?"

REUSE!

What do you think of using your own ceramic cup or mug at your school or local club? It means there are no plastic cups to throw away. You can wash it and reuse it every day. Unfortunately, we are encouraged to buy a new "improved" item even if the one we have can be repaired or reused. When we buy things, we should buy those that are durable; we should use them properly, and have them repaired when necessary. If we practise this, many things will not only last a life-time, but also be passed on for future use. However, if something is truly unusable for its original purposes, try to be more creative and think of how else it might be used. When you're done with it, think of whether someone else might be able to use it. You can donate some of the things to the poor. You may also sell some of your used items through personal advertisements in a local newspaper or in social media.

RECYCLE!

Rather than throwing an item out when neither you nor anyone else can make use of it, have it recycled. And if recycling is not possible, it is better to send goods to a landfill or have them burned up. Find out what types of materials can be recycled in your area. Clean and sort the materials before putting them out in the bin. Recycling your drink and food cans means there will be less trash in a resource recovery facility or landfill. Moreover, a company can use the old cans to make new ones.

Now ask and answer these questions in pairs.

How can you cut down your shopping list?

What can you do to reuse things?

What kind of household goods, clothes and toys, can be donated?

How can you sell your used items?

How recycling may help save our environment?

Complete the blank spaces in the table below.

·

To do this exercise, you will need information about recycling in your local community. If you don't know, ask your teacher to help you learn what you can recycle from your home. Then choose one item from the box to talk about it following the model below.

A: What are you going to do with these old magazines? B: I don't know what to do with these.

A: Why don't you reuse/recycle them? B: How can I do that?

A: It's easy. Take them to a shop that buys old newspapers and magazines for recycling.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What does 'the greening of the world' mean?**
> 💡 **Answer:** It means adopting sustainable eco-friendly practices, expanding forest cover, using clean renewable energy, and conserving natural ecosystems worldwide.

> ❓ **Q: What collective steps should nations take to combat climate change?**
> 💡 **Answer:** Nations should enforce international climate agreements, transition from fossil fuels to renewable energy, and support vulnerable developing countries with climate adaptation funds.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Cause & Effect Connectors):**
  - Use connectors such as *because*, *due to*, *as a result*, *consequently*, and *therefore*:
    - *"Fossil fuel burning produces carbon dioxide; **consequently**, global temperatures are rising."*
- **Writing Activity (Cause-Effect Paragraph):**
  - Write a paragraph on *"Climate Change and Its Impact on Bangladesh"*, highlighting coastal erosion, erratic weather, and personal green habits.
$tag_u02_l05$, 5);

    -- ======================================================
    -- Unit 3: Pastimes
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 3) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)', 'Pastimes', 3)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '৩য় অধ্যায়: অবসর ও বিনোদন (Unit 3: Pastimes)', title_en = 'Pastimes'
        WHERE subject_id = v_subject_id AND order_index = 3
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

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

    -- ======================================================
    -- Unit 4: Events and Festivals
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 4) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)', 'Events and Festivals', 4)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '৪র্থ অধ্যায়: অনুষ্ঠান ও উৎসব (Unit 4: Events and Festivals)', title_en = 'Events and Festivals'
        WHERE subject_id = v_subject_id AND order_index = 4
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

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

    -- ======================================================
    -- Unit 5: Problems Around Us
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 5) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)', 'Problems Around Us', 5)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '৫ম অধ্যায়: চারপাশের সমস্যা (Unit 5: Problems Around Us)', title_en = 'Problems Around Us'
        WHERE subject_id = v_subject_id AND order_index = 5
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

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

    -- ======================================================
    -- Unit 6: Our Neighbours
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 6) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)', 'Our Neighbours', 6)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)', title_en = 'Our Neighbours'
        WHERE subject_id = v_subject_id AND order_index = 6
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u06_l01$
# ৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to read, comprehend and summarise texts*

- ask and answer questions

- read travel advertisements and talk about them

- select and write headings

- write letters to friends describing places of interest.

---

## 📖 Lesson 1: Nepal, the Land of the Everest

Read the following passage on Nepal.

Known as the Land of Everest, Nepal is one of the most charming countries in Asia. The Kingdom of Nepal is a small land of sublime beauty. It has some of the world's best and very important temples. It is a country that is rich in scenic beauty and cultural heritage.

Nepal lies between India and the Tibetan part of China. This small country has an area of 147,181 square kilometers. Southern Nepal is tropical low land known as the Terai Plains. This part of Nepal has hot summers and warm winters. Here the temperatures reach up to 40°C in April and May and monsoon rains drench this region from June to September. The central

hill-lands including the Kathmandu and Pokhara valleys have a temperate climate and are also influenced by the monsoon. North of that is the slope of the main section of the Himalayan range. This part of Nepal has some of the highest peaks of the world including Everest.

Nepal is home to nearly 29,000,000 people. The population is primarily rural. Kathmandu, the capital city, has less than one million inhabitants. Nepal's demographic features are complicated not only by dozens of ethnic groups, but by different castes. In total, there are 103 castes and ethnic groups living in this small country. The two largest of such groups are known as Chetri and Bahun. Others include Magar, Tharu and Tamang, Newar, Muslim, Gurung and Damai. About 48 percent of the people speak Nepali. Among other languages spoken are Maithali, Bhojpuri, Tharu and Tamang.

Nepal is the holy land of Lord Pashupatinath and Gautam Buddha where the Hindus and Buddhists have lived together in harmony for centuries. The Temple of Pashupatinath is the most sacred Hindu shrine and one of the four most important sites in the world for Shiva worshippers. Lord Buddha, the light of Asia, was born in Lumbini in Nepal's southern plains, which makes this a sacred pilgrimage destination for the Buddhists as well. In fact, many Nepalese combine Hindu and Buddhist practices; many temples and shrines are shared between the two faiths, and some deities are worshipped by both Hindus and Buddhists.

The Kathmandu Valley is the richest cultural heritage centre of Nepal. The three ancient cities of the Valley - Patan, Kathmandu and Bhaktapur - represent an epitome of harmony in urban design, elegant architecture and refined culture. These cities are famous for religious monuments unequalled in the world. The seven monument zones situated within the Valley have been named as World Heritage Sites by UNESCO.

Many festivals add dazzling colour to Nepal's vibrant culture, which are celebrated throughout the year. Dasain or dusherra is celebrated nationwide in October. This is the most important of all Nepalese celebrations and includes the biggest animal sacrifice of the year. Tihar is celebrated in November. Other festivals include the Holi and Chaitra Daisan. Some Hindu festivals are the Haribodhini Ekadashi, Maha Sivaratri and the Krishna Jayanti. There are Buddhist celebrations too and those include Mani Rimd, Buddha Jayanti and Losar, which marks the Tibetan New Year.

The passage has six paragraphs (a-f). Choose the most suitable headings for paragraphs (a-f) from the list of headings below. There

are more headings in the box than the paragraphs, so you will not use all of them.

For each phrase below choose the meaning that is closest to the meaning used in the passage.

tropical lowland

an area of land having humid climate

a land situated on the hill

a low land close to river

a land that lies at the foot of a hill

temperate climate

a weather condition of high temperature

a moderate climate

a climate with high rainfall

a climate that is uncomfortable to live in ethnic groups

groups based on their religious faiths

groups of people living in the hills-tracts

groups having distinct racial and cultural features

groups who believe in Buddhism

pilgrimage destination

a sacred place where people travel to perform religious rites.

a historical place with many old buildings.

a tourist spot of great scenic beauty.

the birthplace of a famous person.

elegant architecture

temples of gods

graceful work of building crafts

buildings of historical importance

well-designed area of cultural acts

### ❓ Answer the following questions.

How many ethnic groups are there in Nepal?

What do you know about the weather of Nepal?

"Many Nepalese combine Hindu and Buddhist practices."- Explain this statement with examples from the passage.

Which three cities of Nepal will you visit in order to see the rich samples of Nepal's cultural heritage sites?

Make a list of the festivals that are celebrated in Nepal.

Give at least three reasons why you might be interested to visit Nepal. Also make a list of the places you would love to visit in Nepal.

Look at the advertisement of a package tour to Nepal.

Now, discuss if the following statements are True/False. Give the correct information if a statement is false.

The package includes the cost of travelling from Kathmandu airport to the hotel in Kathmandu.

The tourists will be provided with breakfast, lunch and dinner.

The tourists do not have to pay extra for a half-day sightseeing m Pokhara.

The tour operators will bear all visa related costs.

The tourists will go to Pokhara from Kathmandu by domestic airlines flights.

Imagine that you have chosen the package tour shown in E to visit Kathmandu and Pokhara. Now, write a letter to your friend highlighting the main attractions offered by the package. In your letter you should cover the following points:

Duration of travel

Means of transport used:

Dhaka-Kathmandu-Dhaka

Kathmandu-Pokhara-Kathmandu

Accommodation facilities

Breakfast, lunch and dinner

Total cost of the package

Any other cost that is not covered by the package offer

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is Nepal widely known for worldwide?**
> 💡 **Answer:** Nepal is known as the Land of Everest, home to Mount Everest (the highest peak on Earth) and eight of the world's ten tallest mountains.

> ❓ **Q: What is the capital of Nepal and what are its notable cultural sites?**
> 💡 **Answer:** Kathmandu is the capital, famous for ancient Hindu and Buddhist temples like Pashupatinath, Swayambhunath, and Boudhanath.
$tag_u06_l01$, 1);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u06_l02$
# ৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: Sri Lanka: The Pearl of the Indian Ocean

> 📝 **Activity:** Look at the picture. Ask and answer the following questions in pair.

What is the name of the country?

What is the country surrounded by?

What do you know about the country?

Now read the following passage to find your answers to the questions in A. a Anyone visiting Sri Lanka may often hear the word Ayubowan. This word means 'May you have the gift of long life'. It is with this traditional greeting that everyone is welcomed to Sri Lanka. Sri Lanka is variously known as: Serendip, Ceylon, Teardrop of India, Pearl of the Indian Ocean, etc. These names reveal the richness and beauty of this island nation. Many travellers, from ancient mariners and merchants to present day tourists, have been attracted by the beauty of this island.

Sri Lanka is located in the Indian Ocean, just off the south-eastern coast of India. Shaped like a teardrop, the island of Sri Lanka measures about 415 kilometers from north to south, and about 220 kilometers from east to west, with a total land area of about 65,600 square kilometers. It has more than 1340 kilometers of coastline.

Despite its modest size Sri Lanka has a population of about 20 million. Sri Lanka is a multi- religious, multi-racial and multi-lingual country. The four major ethnic groups are the Sinhalese, Sri Lank.an Tamils, Indian Tamils and Sri Lankan Moors or Muslims. A fifth group, the Veddhas are the original inhabitants of the island. The ancient history of Sri Lanka is depicted in the Hindu epic the Ramayana and in the

Mahavamsa or 'The Great Chronicle'. Colombo: The capital city

Sri Lanka's economy has traditionally been based on agriculture. The emphasis is on exporting crops such as tea, rubber, and coconuts. In fact, Sri Lanka is the largest tea exporter of the world. The country is also a major producer and supplier of a variety of spices such as cinnamon, cardamom, pepper, cloves, and nutmeg. Cinnamon first originated in Sri Lanka and was introduced later to the world by the Arab merchants.

Sri Lanka's archaeological treasures may be compared to other civilizations of the past like the Golden Age of Greece, the Roman Empire and Mayan citadels. The culture has been influenced by the western colonisers and eastern

traders. That resulted in developing a unique mix of races and religions, arts and crafts, festivals and costumes in this small country.

Besides the man-made riches,one may find the God-given blessings of nature in Sri Lanka. The island is circled by azure seas and is blessed with sandy beaches, green hills, cascading waterfalls, abundant wildlife and a variety of flowers and fruits. The country abounds with coconut groves, spice gardens, tea estates and many other gardens and woods. Travellers from all over the world come to Sri Lanka. Here, a weary traveller can pass a relaxing day by a palm-shaded lagoon looking at the endless ocean. And for the adventurous, days can be full of excitement snorkelling, swimming, fishing or sailing.

From your reading of the above text, complete the table with no more than two words and/or numbers.

**Sri Lanka:** Facts

| People | Economy | Natural beauty |
| --- | --- | --- |
| There are , | Agriculture is a | Sri Lanka is blessed with |
| four main ethnic | traditional form of | awesome natural beauty. |
| groups. They are | economic activity in | There are blue seas, sandy |
| Sinhalese, Sri Lankan | Sri Lanka. The | beaches, green hills, and |
| Tamils, ................ | country exports many | flowing ............... . |
| and Sri Lank.an Moors | crops and ..... .......... | The country has a very |
| who are also known as | Sri Lanka tops the | rich wild life. A wide |
| . The | world in tea export. | variety of fruits and |
| earliest residents of Sri | The spice | . are also |
| Lanka are known as | . was | available there. Traveller |
|   | found first in Sri | can enjoy the ............... |
|   | Lanka. | view sitting by the palm shaded lagoons. |

The passage in B has six paragraphs (a-f). Choose the most suitable headings for paragraphs (a-f) from the list of headings below. There are more headings in the box than the paragraphs, so you will not use all of them.

Read the brief descriptions of some of the best tourist places in Sri Lanka. Then discuss the questions that follow.

Anuradhapura

Anuradhapura is one of the ancient capitals of Sri Lanka. The old city is today surrounded by monasteries, covering an area of over sixteen square miles. The city is also significant in Hindu legend as the capital of King Ravana.

Bundala National Park

Bundala National Park is one of Sri Lanka's leading destinations for birdwatchers. The park is also home to large populations of elephants, crocodiles, turtles and leopards.

Hikkaduwa-Coral reef & sandy beaches

Hikkaduwa is a little town on the south coast of Sri Lanka. It is well-known for its beach and corals. It is principally a tourist destination, and serves as a great beach with options to surf, snorkel and enjoy the sun.

Dambulla

Major attractions of this city include the biggest and greatest potted cave temple complex of Sri Lanka. It is also famous for the Rangiri Dambulla Global Stadium, which was built in just 167 days . The city also boasts of the biggest rose quartz mountain range in South Asia and the iron wood forest.

Now discuss the following questions in pairs.

Which of the following tourist places do you like to visit?

Places with beaches

Places of historical importance

Places that preserve wildlife Explain why you like such a place.

If you are given an offer to visit any two of the four Sri Lankan cities

above, which two cities will you choose. Explain why.

Write a paragraph on some of the interesting places to visit in Sri Lanka. Use your own words and the information given in section E.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why is Sri Lanka called the 'Pearl of the Indian Ocean'?**
> 💡 **Answer:** Sri Lanka is called the Pearl of the Indian Ocean due to its teardrop geographic shape, rich biodiversity, tropical beaches, and historic gem trade.

> ❓ **Q: What are the main agricultural export commodities of Sri Lanka?**
> 💡 **Answer:** Sri Lanka is world-famous for exporting premium Ceylon tea, cinnamon, rubber, and coconuts.
$tag_u06_l02$, 2);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u06_l03$
# ৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: The Maldives

Discuss the questions in pairs.

Have you ever visited any island or seen any island on TV?

Have you ever heard of a coral island? Is there any coral island in Bangladesh?

What do you know about the Maldives?

Now read the text below and answer the questions in C, D and E.

The Republic of Maldives is an island country in the Indian Ocean. It has 1199 islands that are clustered into 26 major atolls. An atoll is a ring-shaped coral reef or a string of closely spaced coral islands. The natural coral reefs of the Maldives are surrounded by the sea all around and stand out as a pearl in the Indian Ocean. The Maldives is the eighth smallest country in the world with an area of only 300 square kilometers. It is the smallest Asian country in terms of population and size.

People have been living on the islands of the Maldives for nearly 3000 years. They set sail from different parts of the world - Asia, Arabia, Europe and America - to come to these islands. The earliest settlers of the Maldives were probably from southern India and Sri Lanka who came to these islands in the fourth and fifth centuries BC. In the 12th century AD, sailors from East Africa and Arab countries came to the Maldives. As a result, the Maldivians who were originally Buddhists were converted to Sunni Islam in the mid-12th century. In 1344 Ibn Batuta, a famous Arab historian and scholar travelled around the Maldives.

In the 16th century, the Portuguese conquered the Maldives and ruled the country for 15 years. Although governed as an independent Islamic sultanate for most of its history from 1153 to 1968, the Maldives was a British colony from 1887 to 1965. Following independence from Britain in 1965, the sultanate continued to operate for another 3 years. On November 11, 1968, the sultanate was abolished and replaced by a republic and the country assumed its present name.

The Maldives is famous as a tourist destination because of its pleasant weather, heavenly beaches and lagoons, luxurious holiday resorts and the peace-loving people. The Maldives was ranked as the best country for beautiful beaches and facilities for recreation in 2008.

The Maldives is well known for being the lowest country in the world. Unfortunately, this small country with idyllic natural beauty is under threat from rising sea levels due to global warming. Most of the country is just 1.5 meters above sea level with the highest point of2.3 meters! Many predictions have been made with respect to Maldives being swept away by the rising water level in the Indian Ocean. When the power tsunami of2004 hit the island nation, many of the island's dry parts were flooded by the sea water. The government of the Maldives has begun to purchase land from nearby countries for resettling

its people in case the islands go under water? In order to highlight the threats of global warming to its low lying

islands, the government of Maldives held a cabinet meeting underwater in 2009.

That was the first ever underwater cabinet meeting in the world. The meeting took place about 5 meters underwater, in a blue-green lagoon on a small island. While underwater, the cabinet signed a document

calling on all nations to cut their carbon Underwater meeting

em1ss10ns.

Ask and answer the questions.

What is an atoll?

How many countries in the world are smaller than the Maldives in size?

When was Islam introduced in the Maldives?

What makes the Maldives an ideal place for the tourists?

What dangers of climate change might affect the Maldives?

Do you support the idea of having a cabinet meeting underwater? What could be the reason for holding such a strange meeting?

Complete the table with no more than two words and/or numbers.

| Time | Facts |
| --- | --- |
| 4th and 5th centuries <br> BC | The early inhabitants of the Maldives arrived and <br> settled from Southern India and Sri Lanka. |
| 12th Century | The sailors from African and Arab countries started <br> to settle in the islands. Buddhism was <br> . by Islam. |
|   | A famous scholar and historian named lbn Batuta <br> visited the islands of the Maldives. |
| 16th century | the Portuguese occupied the Maldives and became <br> the of the country for 15 years |
| 1887 | Beginning of the British era. |
|   | Maldives became independent from the British rule. |
| 1968 | End of Islamic sultanate and .......................... <br> of the Republic of Maldives. |

Say if the statements are True/False. Give the correct information in case of a false statement.

Only seven countries in the world are smaller in size than the Maldives.

No other South Asian century has a population smaller than the Maldives.

The islands of the Maldives were inhabited in the 12th century.

The Maldives was an independent Islamic sultanate from 1153 to 1968.

The Maldives was ranked as the second best country for natural beauty in 2008.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What geographic feature makes the Maldives unique?**
> 💡 **Answer:** The Maldives is an archipelago of about 1,192 coral islands grouped into 26 natural atolls in the Indian Ocean, famous for white sandy beaches and clear lagoons.

> ❓ **Q: Why is the Maldives seriously threatened by global climate change?**
> 💡 **Answer:** The Maldives has an average ground elevation of only 1.5 meters above sea level, making it extremely vulnerable to total submersion from rising sea levels.
$tag_u06_l03$, 3);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u06_l04$
# ৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: India: Unity in Diversity

Read the following text and complete the activities in section Band C.

India is our closest neighbour. It is the largest among South Asian Countries. In fact, India is the seventh largest country in the world with an area of 3,287,590 square kilometers. India is bounded by the Indian Ocean on the South, the Arabian Sea on the West and the Bay of Bengal on the East. It is bordered by Pakistan to the West; China, Nepal, and Bhutan to the North; and Bangladesh and Myanmar to the East. India is the world's most populous

country folletd by China. Its population is around 1.5 billion. New Delhi is the capital of India and about 13 million people live in the city.

India is a land of ancient civilization. The social, economic and cultural diversity of this vast country is the result of invasions by different races in the process of history. Indian history begins with the birth of the Indus Valley Civilization and the coming of the Aryans. During this period, Aryan culture flourished in this part of the world. The fifth century saw the unification of India under Ashoka, and it is in his time that Buddhism spread in many parts of Asia. In the eighth century, Islam came to India for the first time and by the eleventh century it had firmly established itself. In 1206, Qutbuddin Aybeck founded the Delhi Sultanate. This was finally succeeded by the Mughal Empire in 1526, under which India once again achieved a large measure of political unity.

It was in the 17th century that the Europeans came to India. This coincided with the disintegration of the Mughal Empire, paving the way for supremacy of the English, the French, the Dutch and the Portuguese who were vying with each other to gain control of India. The English emerged as the 'victors'. In 1774, Warren Hastings was appointed the first Governor General of India by the East India Company. In 1876, Queen Victoria was given the title 'Empress oflndia' by the British Parliament and India came under the British rule. The British ruled India for nearly two hundred years. This period was marked by India's struggle

for independence. Through a series of heroic and patriotic movements to restore freedom, India got its independence in 1947.

The culture of India is one of the oldest and the most unique in the world. There is amazing cultural diversity throughout the country. The South, North, and Northeast have their own distinct cultures and almost every state has carved out its own cultural distinction. There is hardly any culture in the world that is as varied and unique as India. There are 17 major languages and 844 dialects used by the people of India.

India is a tourists' delight. The Taj Mahal, Fatehpur Sikri, the Qutb Minar and the Red Fort are a few of the many wonders which attract people from all over the world. Kashmir has been described as a paradise on earth. The country of mountains, valleys, deserts, rivers

and lakes offer the richness of a mini The Tajmahal

world within a single country. The Nilgiri mountains, hill stations like Ooty and Darjeeling and the temples of South India, Ajanta and Ellora caves are the places one can explore in India.

Discuss the following questions in pairs.

What do you know about the population and geographical area of India?

When did Buddhism spread in India?

What happened to India during the Mughal Empire?

What are some of the tourist attractions in India?

Complete the flow chart below to show the history of India. Use one word to fill in each gap.

i

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What does the motto 'Unity in Diversity' mean in the context of India?**
> 💡 **Answer:** It describes how people of diverse religions, languages, cultures, and ethnicities coexist harmoniously within a single sovereign democratic nation.

> ❓ **Q: What are some prominent world heritage landmarks in India?**
> 💡 **Answer:** Iconic landmarks include the Taj Mahal in Agra, Qutub Minar, Red Fort in Delhi, and the ancient Ajanta and Ellora caves.
$tag_u06_l04$, 4);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u06_l05$
# ৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 5: Bhutan: The Land of Happiness

Read the following text and complete section B and C.

Bhutan is called the Jewel of the Eastern Himalayas. This small, landlocked country is located along the southern slopes of the Himalayan range, bounded by Tibet in the North and India from the other sides. The official name of Bhutan is Druk-yul which means 'land of the thunder dragon'. It earned this name because of the fierce storms that often roll in from the Himalayas. The country

has an area of 38,394 sq km and a population of 716,896. Since it is cut off from the rest of the world by the Great Himalayas, a unique culture and tradition based on gentle Buddhist beliefs have evolved there over time.

Bhutanese men wear Gho - a knee length robe and women wear Kira-a sheet like cloth piece.

Bhutanese houses are built from mud and stone, with wooden shingle roof. The Bhutanese never use iron nails in their buildings. Usually, the Bhutanese build each other's houses by exchanging labour within the community. Different Festivals are celebrated all year round in Bhutan. Colourful masks are used in the festivals which reflect the rich Bhutanese culture. Dances are performed by the Buddhist monks to protect the valleys and ward off evil spirits. The main religious festival is called Tshechus. The teachings of Lord Buddha are enacted through mask dances for three to five days in the courtyard of the monasteries. People attend these events in their best clothes, carrying picnic baskets. Another major festival is called Losar. It is celebrated on Lunar New Year. People cook special dishes and wear new clothes. It is a time for family get-together. Men play archery or darts while women sing and dance.

Pure mountain air, crystal blue skies and pristine vegetation cover have made this small country an ideal destination for the environment lovers. The ecosystem of this small nation supports the existence of rich flora and fauna which are protected by strict laws. found guilty of killing even a black-necked crane could be sentenced to life in prison.

The government of Bhutan has taken a number of steps to protect its bio-diversity.

A Bhutanese family in traditional clothes

Bhutan is the first country in the world with specific constitutional obligations on its people to protect the environment. According to the constitution, at least 60 percent of the country must remain under forest cover at all times. Efforts are also taken to protect the nation against the intrusion of foreign cultures and values. The first foreign tourists were allowed into Bhutan in 1974. Now, tourism is encouraged but is controlled and limited to about 6,000 visitors a year. Bhutan is one of the last countries in the world to introduce television and the Internet to its people. The government lifted a ban on TV and the Internet only in 1999. The Bhutanese government has made it mandatory for all Bhutanese to wear only their national dress in public.

Finally, the most interesting fact about Bhutan is that they are the only country that measures success in Gross National Happiness rather than Gross National Product! In 2006, Business Week rated Bhutan as the happiest country in Asia and the eighth happiest country in the world.

Choose the most suitable answer for each of the questions below.

A unique culture and tradition has evolved in Bhutan because

fierce Himalayan storms often hit the country.

it is cut off from the other parts of the world.

it has a very small area.

it is called the Jewel of the Eastern Himalayas.

Bhutanese houses are built from mud, stone, woods with iron nails.

a sheet of cloth and wooden roof.

mud and stone with wooden roof.

bamboo and wood.

Which of the following activities is mentioned as a way of celebrating

Losar.

cooking special dishes and wearing new clothes

playing chess and badminton

having a trip to the neighbouring households

harvesting crops

According to Bhutan's constitutional obligations

60% of the country must remain under forest cover.

foreign nationals are not allowed to visit Bhutan even now.

citizens can not use the Internet in their houses.

people must always wear traditional Bhutanese clothes.

The progress of Bhutan as a nation is measured by

Gross National Income.

Gross National Happiness.

Gross National Product.

Per Capita Income.

**Group work:** You have read about some countries. Which one do you like? Make a chart adding more information to it.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why is Bhutan known as the 'Land of Happiness'?**
> 💡 **Answer:** Bhutan measures national progress through Gross National Happiness (GNH) rather than purely economic GDP, prioritizing environmental conservation and cultural well-being.

> ❓ **Q: What constitutional mandate protects Bhutan's environment?**
> 💡 **Answer:** Bhutan's constitution mandates that at least 60 percent of the country's land area must remain under forest cover for all generations.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Degrees of Comparison):**
  - Positive: *"No other mountain peak is as high as Mount Everest."*
  - Comparative: *"Mount Everest is **higher than** any other peak."*
  - Superlative: *"Mount Everest is the **highest** peak on Earth."*
- **Writing Activity (Descriptive Report):**
  - Write a 150-word report describing the natural beauty and Gross National Happiness philosophy of Bhutan.
$tag_u06_l05$, 5);

    -- ======================================================
    -- Unit 7: People Who Stand Out
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 7) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)', 'People Who Stand Out', 7)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)', title_en = 'People Who Stand Out'
        WHERE subject_id = v_subject_id AND order_index = 7
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u07_l01$
# ৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to read and demonstrate the understanding texts through silent reading*

- ask and answer questions

- listen to an audio text for specific information

- write a dialogue.

---

## 📖 Lesson 1: Zainul Abedin, The Great Artist

Zainul Abedin in 1955

> 📝 **Activity:** Work in pairs and discuss the following questions.

Do you know this person? Why is he famous?

Can you name some of his world famous sketches?

Now read the text below and complete the activities that follow.

Zainul Abedin (29 December, 1914 - 28 May, 1976) was a Bangladeshi painter. He had an extraordinary talent and was internationally recognized for his paintings. He became well known in 1944 through his series of paintings on the great man-made famine in Bengal during British Colonial rule.

He played a vital role in the art movement in Bangladesh and was the founding Principal of the Government Institute of Arts (Now Faculty of Fine Arts) at University of Dhaka. His paintings on Bengal Famine are considered as his most characteristic works. His homeland honoured him with the title 'Shilpacharya', or the great teacher of arts for his artistic and visionary qualities. He was a pioneer of the modem art movement and was rightly considered as the founding father of Bangladeshi modem arts.

Abedin was born in Kishoregonj on 29 December, 1914. He spent most of his childhood near the scenic banks of the Brahmaputra River. The river and the open nature inspired him from his early life. The Brahmaputra later appeared in

\c, many of his paintings and remained a great source of inspiration throughout his f"-) career. As his tribute to the river Brahmaputra, he drew a series of water colour

paintings in this regard. This helped him earn Governor's Gold Medal in all India Exhibition in 1938. This was the first time when he came under spotlight and this award gave Abedin the confidence to create his own visual style.

Abedin got admitted to the Government School of Art in Calcutta (Now Government College of Art and Craft, Kolkata, India). Here, he learned European academic style for five years. Later, he joined the faculty of the same school after his graduation. He was the first Muslim student to obtain 'First Class' with distinction from the school. In 1951, Zainul went to London to study at Slade School of Art for two years. From the dissatisfaction of oriental style and the limitations of European academic style, he was attracted to realism. After his return from London, he started a new style called 'Bengali Style'. Later he realized the limitations of 'Bengali Style'. Therefore, he went back to nature, rural life and the daily struggles of men to make art that would be realistic but modern in appearance.

Struggle Rebel cow

In 1943, he painted a series of sketches on the man-made famine, which had spread throughout Bengal. The famine killed thousands of people. The devastating famine touched his heart. He used Chinese ink and brush and drew sketches of the devastations of the famine on cheap packing paper. The series of those sketches are known as 'Famine Sketches'. Through those sketches, he drew the helplessness and deprivation of the poor people, their miseries and death without having food. He painted those starving people who were dying by the roadside. These sketches are his most remarkable works, which spread his name and fame around the world as a famous and humanitarian artist. Abedin not only documented the famine but also showed its sinister face through skeletal figures of people fated to die of starvation. He depicted the inhuman story with very human emotions. These drawings became iconic images of human sufferings. These sketches helped him to find his way into a realistic approach that focused on human sufferings, struggle and protest. Through a 65 feet scroll, he depicted the mass movement of 1969 and with a 30 feet scroll painting called 'Monpura'; he showed the devastating cyclone of 1970 and the sufferings of the people. Through the later sketch, he remembered the people who died in that calamity.

In 1975, Zainul Abedin set up a folk museum at Sonargaon and a gallery in Mymensingh named Shilpacharya Zainul Abedin Museum. He became actively involved in a movement to preserve the heritage of Bengal and reintroduce Bengal art from the roots of Bengali culture. He passed away on 28 May, 1976 in Dhaka.

**Sources:** Banglapedia and wikipedia

Ask and answer the questions.

How did Zainul Abedin become famous?

What were the themes of his famous sketches?

Give information regarding his education.

How did river Brahmaputra influence his sketches?

After the failure of 'Bengali style', which style did he adopt for his sketches? Why?

Why is he called humanitarian artist?

Why did he establish the 'Folk Museum at Sonargaon' and 'Shil pacharya Zainul Abedin Museum' at Mymensingh?

> 📝 **Activity:** Look at the pictures in the text. Work in group and talk about them. Then write briefly about what each picture portrays.

Now write a paragraph on one of the pictures in the text. If necessary, take help from 'Google'.

Write an email to your friend about your recent visit to 'Folk Museum at Sonargaon'.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Who was Shilpacharya Zainul Abedin and why is he celebrated?**
> 💡 **Answer:** Zainul Abedin was the pioneer of modern Bangladeshi art, renowned for his poignant 1943 Bengal Famine sketches depicting the tragic suffering of starving people.

> ❓ **Q: What major art institution did Zainul Abedin establish in Dhaka?**
> 💡 **Answer:** He founded the Government Institute of Arts (now the Faculty of Fine Arts at the University of Dhaka) in 1948 and the Folk Art Museum at Sonargaon.
$tag_u07_l01$, 1);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u07_l02$
# ৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: The Art of Silence

> 📝 **Activity:** Look at the pictures. Get into pairs and ask and answer the following questions.

What can you see in the two pictures?

Do you think they are different from each other? Why?

> 📝 **Activity:** Read the text.

Culturally rich Bangladesh is the homeland of an artist whose fame took him across the border and honoured him with different national and international awards. Have you heard about Partha Pratim Majumder? He is a maestro performer of miming art.

If food is the nutrition for a body, art is the nutrition of soul. To keep the souls alive and fresh different arts like music, dance, paintings have evolved during the ancient time. Humankind has tried to express himself from the very begin-ning of civilization. These expressions have taken the forms of art with the touch of his creativity in expressing the untold in silence. It is an art of depicting a character, mood, idea, or narration through gestures and bodily movements without any utterance. This ancient dramatic entertainment represents the primi-tive time when people would use signs as a medium of communication.

In Bangladesh, the boy named Partha Pratim Mojumder from Pabna overwhelmed people with this Art. He left people mesmerized by his graceful presentations of art of silence. It was like a new era in theatre art in Bangladesh when Partha came with effort to make people look at their everyday experience, but in a new form. He made people reveal meanings for all trivial things of life which they usually would overlook. He used to depict stories of sadness, laughter, different characters, birds, insects or even animals through his miming. Some of his topics are the portrayal of a thief stealing, one-sided love, picking up flower and hurting it, delicate changes in nature etc. His actions often led audience to their conscience on different issues. He is regarded as the pioneer of miming in Bangladesh.

Partha cherished a passion for art from his very childhood. He was born in a very cultural minded family on 18 January in 1954. His photographer father nurtured him as a passionate lover of art. The family resided in a village called Kalachandpara. There used be a lot of cultural programmes in Kalachandpara in those days which had an impeccable influence on Partha's affection for art.

Destiny introduced Partha to a mime artist Mr. Jogesh Dutta in 1966 when he went to live at his aunt's home in Chandemagar, 30 kilometres away from Kolkata. Partha could foresee his future and got admission in Mr. Dutta's mime academy in Kolkata. The major lift up of his life was when he presented a solo

performance at Bangladesh Shilpakala Academy in 1979. The then French Ambassador in Bangladesh Mr. Loic Moreau, having observed his talent as an audience in that programme, offered him a scholarship at France.

Partha took all the opportunities to learn from Mr. Etienne Decroux and Mr. Marcel Marceau, both of whom were legendary genius of miming at that time in Paris. He was trained in the mime school called 'Ecole Internationale de Mimodrame de Paris Marcel Marceau'. Gradually he became a very busy artist performing in Europe and America and he was highlighted in media too. Later on this Bangladeshi legendary mime artist received 'the Moliere Award' in the year 2009 which is the highest honourable accolade in the French Theatre. Next year, he was honoured with 'Ekushey Padak' for the contributing to Bangladesh. He was also awarded with Chevalier de I' odre des Art et des Letters' (Knight in the order of Arts and Humanities) in 2012 for his contribution all over the world.

This great artist is now looking forward to opening an international miming institute in Bangladesh. We hope more Partha Pratim Majumder comes out from the dream institution.

### Section C: Choose the best answers.

Miming is a solo dance

c. music

drama without sound

d. recitation

What is not synonym for the word mesmerize mean?

make spell bound b. overwhelm

c. hypnotise d. shock

Who was not Partha Pratim's trainer?

Marcel Marceau

c. Loic Moreau

Jogesh Dutta

d. Etienne Decroux

Which year did Partha Pratim Majumder receive 'Ekushey Padak'?

in 2010 b. in 2009

c. in 2011 d. in 2012

> 📝 **Activity:** Read the text B again. See if the following statements are True or False.

If false, give the correct information.

Partho Pratim belonged to a culturally enlightened family.

Kalachandpara was 30 kilometres away from Kolkata.

Ecole Internationale de Mimodrame de Paris Marcel Marceau is an international award.

Partha Pratim took his topics from very trivial issues of everyday life.

Performance at Shilpakala Academy created the major opportunity for him.

Read the statements below and form appropriate questions for each of them.

The birthplace of Partha Pratim Majumder is in Pabna.

Partha Pratim developed a passion for art from his childhood.

Jogesh Dutta was a renowned mime artist in Kolkata.

Partha Pratim performed in Europe and America.

Partha Pratim's dream is now to open an international miming school in Bangladesh.

> 📝 **Activity:** Listen to the audio and complete the chart about Partha Pratim.

| Year | Achievement | From where |
| --- | --- | --- |
| 1987 | Master of Mime |   |
| 1987 |   | Journalist Association <br> of Malayasia |
| 2009 |   |   |
|   | Munir Chaudhury <br> Award |   |
| 2010 |   | Bangladesh |
|   | Knight in order of Arts <br> and Humanities |   |

**Project:** Do you know anyone who has skills to perform a special fit? Write about the person covering the following points.

the first time the person came to know about it

the time the person began to practise it

people who supported him/her his/her achievements/recognitions

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Who is Partha Pratim Majumder and what is his unique achievement?**
> 💡 **Answer:** Partha Pratim Majumder is the pioneer of mime art in Bangladesh, who achieved international fame and won prestigious honors like France's Molière Award.

> ❓ **Q: Where did Partha Pratim Majumder study mime under world-famous masters?**
> 💡 **Answer:** He trained in Paris under the legendary French master of mime, Marcel Marceau, and developed a distinctive artistic style blending Western and Eastern traditions.
$tag_u07_l02$, 2);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u07_l03$
# ৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: The Beginning

> 📝 **Activity:** Look at the picture and discuss the following questions in pairs.

Who is there in the picture?

Why is she famous?

> 📝 **Activity:** Read the text and choose the best answer.

It was late summer, 26 August 1910. A little girl was born to a rich Catholic merchants' family of Albanian descent in a small town called Skopje, Macedonia. She was the youngest of the three siblings and was named Agnes Gonxha Bojaxhiu. Who could imagine at the time that this little girl would one day become the mother of humanity, loving and serving the poorest of the poor. Yes, we are talking about none other than Mother Teresa.

At the age of 12, she heard a voice from within that urged her to spread the love of Christ. She decided that she would be a missionary. At the age of 18 she left her parental home. She then joined an Irish community of nuns called the Sisters of Loreto, which had missions in India.

After a few months of training at the Institute of the Blessed Virgin Mary in Dublin, Mother Teresa came to India. On May 24, 1931, she took her initial vows as a nun. From 1931 to 1948, Mother Teresa taught geography and theology at St. Mary's High School in Kolkata (then Calcutta). However, the widespread poverty in Kolkata had a deep impact on Mother Teresa and in 1948 she received permission from her superiors to leave the convent and devote herself to caring for the poorest of the poor in the slums of Kolkata.

What does' mother of humanity' mean in the text?

a good mother

a kind mother who has many children

a mother who likes humans

a mother figure who serves the poor like her own childem

Why did Mother Teresa want to be a missionary?

Because she heard

the voice of her neighbours discussing it.

a voice in her dream.

a voice within herself.

the voice of her parents talking about it.

Mother Teresa set out to join the missionary of the Sisters of Loreto in the year

1927

c. 1929

1928

d. 1930

Mother Teresa took her first vows as a nun at the age of

18 b. 19

c. 20 d. 21

> 📝 **Activity:** Read the text in A again and answer the questions.

Where did Mother Teresa's ancestors come from?

Where was her father's home?

Why did she want to become a missionary?

What made her different from other girls at such an early age? What words and expressions are used in the text to describe this difference?

What did Mother Teresa do in the first seventeen years in India?

Who did she work for? How?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Who was Mother Teresa and what was her life's calling?**
> 💡 **Answer:** Mother Teresa was a Catholic nun who dedicated her entire life to serving the poorest of the poor, sick, dying, and destitute in the slums of Kolkata.

> ❓ **Q: What religious congregation did Mother Teresa establish in 1950?**
> 💡 **Answer:** She founded the Missionaries of Charity, which established homes for the dying (Nirmal Hriday), orphanages, and clinics across the globe.
$tag_u07_l03$, 3);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u07_l04$
# ৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: Love for Humanity

> 📝 **Activity:** Listen to the Audio and fill in the gaps.

To prepare herself to work with the ,Mother Teresa took an intensive medical with the American Medical Missionary Sisters in , India. Her first course of action in Kolkata was to children from the slums and start to teach them. Financial support and volunteers came to give a hand to Mother Teresa in her work for .In 1950 her group, now called the Missionaries of Charity, received status as a religious community. Members took the vows of poverty, chastity (purity), and ,but they added a fourth vow -to give free

to the most poor.

The Missionaries of Charity received publicity, and Mother Teresa used it to her work. In 1957 they began to work with lepers (those suffering from leprosy, which is a terrible infectious disease). Gradually from one school they to nine elementary schools in Kolkata. They also opened a home for and abandoned children. Soon they were in more than Indian cities. Mother Teresa also visited other such as Sri Lanka, Australia, Tanzania, Venezuela and Italy to begin new foundations.

Mother Teresa's group to expand throughout the 1970s. They opened new in places such as Amman, Jordan, London, ; and New York. By 1979 Mother Teresa's groups had more than different operations in over twenty-five

countries around the world'

with dozens more ventures to follow.

Read the completed text and say if the following statements are True or False. If false, give the correct information.

Mother Teresa took a thorough medical training from the USA.

At first she collected children from the streets and gave them food and \c:, clothing.

She and her group started to look after and care for the lepers.

It took them a long time to go to other cities of India.

Mother Teresa went to several countries.

> 📝 **Activity:** Read the text in A again and complete the chart given below.

| Dates | Events |
| --- | --- |

> 📝 **Activity:** Read the text in A again and answer the following questions.

What did Mother Teresa initially do before beginning to work for humanity?

How many vows did the Missionaries of Charity take? What were they?

What did Mother Teresa and her group do?

Now write the answers in your exercise book.

Do you know anyone in your locality who helps the needy and does so to make others happy? Write a short composition about him/her.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What prestigious global award was bestowed upon Mother Teresa in 1979?**
> 💡 **Answer:** She was awarded the Nobel Peace Prize in 1979 for her tireless humanitarian work overcoming poverty and distress.

> ❓ **Q: What was Mother Teresa's core message to humanity?**
> 💡 **Answer:** She believed that love begins at home, and that even the smallest act of compassion and kindness can bring immense joy to suffering souls.
$tag_u07_l04$, 4);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u07_l05$
# ৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 5: Love for Humanity

Read more about Mother Teresa.

Mother Teresa was moved by the sight of the sick and dying on the streets of Kolkata. She founded a home for the dying destitute and named it 'Nirmal Hriday', meaning 'Pure Heart'. She and her fellow nuns brought the dying people off the streets ofKolkata to this home. They were lovingly looked after and cared for. Since then many men, women and children have been taken from the streets and carried to Nirmal Hriday. These unloved and uncared for people get an opportunity to die in an environment of kindness and love. In their last hours they get human and divine love, and can feel they are also children of God. The Missionaries of Charity try to find jobs for those who survive, or send them to homes where they can live happily for some more years in a caring environment.

Regarding commitment to family, Mother Teresa said, "May be in our own family, we have somebody, who is feeling lonely, who is feeling sick, who is feeling worried. Are we there? Are we willing to give until it hurts in order to be with our families, or do we put our interest first? We must remember that love begins at home and we must also remember that future of humanity passes through the family".

Mother Teresa's work has been recognised throughout the world and she received a number of awards. These include the Pope John XXIII Peace Prize (1971), the Nehru Prize for Promotion of International Peace & Understanding (1972), the Balzan Prize (1978), the Nobel Peace Prize (1979) and the Bharat Ratna (1980).

Mother Teresa died at the age of 87, on 5 September 1997. The world salutes her for her love and compassion for humanity. She has taught us how to extend our hand towards those who need our love and support irrespective of creed, caste and religion. The picture of Mother Teresa, draped in a white and blue-bordered

sari, with a wrinkled face, ever soft eyes and a saintly smile, lives on in our mind.

Now say whether the following statements are True or False. If false, give the correct information.

Mother Teresa was moved to see the diseases that spread m the streets of Kolkata.

She opened a home for the orphans.

She and her group brought in the dying people from the streets of Kolkata.

'Nirmal Hriday' was founded so that the poor people who are dying can get love and care before death.

Mother Teresa said that humanity passes through charitable organizations.

We have learnt from Mother Teresa how to come forward to help only those who belong to a special caste.

> 📝 **Activity:** Read the text in A again and write the answer to the following questions in your exercise book.

Why do you think Mother Teresa won so many awards?

What does 'Nirmal Hriday' stand for?

Why do you think the home is named 'Nirmal Hriday'?

Why did Mother Teresa want the dying people to feel that they too deserve care and love?

What are the things that we have learnt from Mother Teresa?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: How did Mother Teresa view service to abandoned and dying people?**
> 💡 **Answer:** She saw the face of Jesus in every suffering, abandoned, and unloved individual, treating each destitute person with profound dignity and tenderness.

> ❓ **Q: Why did she request not to have a customary celebratory Nobel banquet?**
> 💡 **Answer:** She asked that the money allocated for the celebratory dinner be donated directly to feed hungry and needy people in Kolkata.
$tag_u07_l05$, 5);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u07_l06$
# ৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 6: The Wizard of Apple

> 📝 **Activity:** Look at the picture and ask and answer the questions.

What do you see in the box beside?

What does this logo stand for?

Which company uses this logo for its products?

Do you know the logo of any Bangladeshi product?

Do you like it? Why/Why not?

Read about Steve Jobs.

Steven Paul Jobs ( 24 February 1955-5 October 2011), most popularly known as Steve Jobs was the co-founder, chairman and chief executive officer of Apple Inc. He was the pioneer of the personal computer revolution. He was famous for his career in the electronic field of computers and consumers. This became possible through the marketing of Apple computers.

In 1985, Jobs left Apple after losing a power battle with the board of directors. He then founded NeXT, a computer platform development company specializing in the higher education and business market. Apple, howover failed to bring up any new operating system during Job's absence. Jobs returned to Apple as an adviser, and took control

of the company as an interim CEO. By 1998, Jobs brought Apple back to profitability from the verge of bankruptcy. He supervised the development of iMac, iTunes, iPod, iPhone and iPad. These devices are so simple and user friendly that even a child can operate them.

He supervised the company's Apple Stores, iTunes Stores and the App Stores too. The success of these products and services brought about steady financial returns for several years and pushed Apple to become the world's most valuable publicly traded company in 2011. This triumph is regarded as the greatest turnarounds in the business history.

Steve Jobs has been highly acclaimed as a visionary leader. He has changed people's perspective towards the computer and how they use it, consume personal media and how they communicate with each other. Hence iBooks, iPhones, iPods and iPads have become extremely popular. Jobs saw and felt the need ofWi-Fi (wireless Internet connection) in laptops. It is he who made Wi-Fi a standard feature of every laptop, and of many other devices worldwide. So Jobs' dream to be anywhere anytime became a reality.

Jobs also co-founded and served as chief executive of Pixar Animation Studios. He became a member of the board of directors of The Walt Disney Company in 2006, when Disney acquired Pixar.

True or False? If false, give the correct information.

Jobs spent his entire career working for Apple.

He became famous because he knew how to market computers and keep the buyers happy.

He became the chairman of The Walt Disney Company.

Jobs left Apple in 2001.

Jobs was a visionary.

> 📝 **Activity:** Read the text in B again and answer the following qustions.

Write about Jobs' successful career.

What does 'power battle' mean?

How did Jobs manage to bring Apple back to profitalriity?

Why was he called a visionary?

Why did Jobs feel that Wi-Fi connection was needed in laptops?

**Pairwork:** Write a dialogue about the contribution of Steve Jobs on ICT and do a role play.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Why was Steve Jobs called the 'Wizard of Apple'?**
> 💡 **Answer:** Steve Jobs co-founded Apple Inc. and revolutionized personal computing, animated movies, digital music, smartphones, and tablet computers with visionary designs.

> ❓ **Q: What groundbreaking consumer devices were introduced under Steve Jobs' leadership?**
> 💡 **Answer:** He spearheaded the creation of the Macintosh computer, iPod, iPhone, iPad, and iTunes, transforming global technology and lifestyle.
$tag_u07_l06$, 6);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u07_l07$
# ৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 7: Jobs' Childhood

> 📝 **Activity:** Read the text and write answers to the questions that follow.

A car mechanic Paul Jobs and his wife Clara Jobs adopted Steve who was abandoned at birth. Paul and Clara loved Steve very much. They made him feel that he was 'chosen' and very 'special'.

One of his colleagues, Del Yocam said about Steve, "I think his desire for complete control of whatever he makes derives directly from his personality and from the fact that he was abandoned at birth."

Jobs' mother taught him how to read and write before he went to the elementary school. So when he went to school, he found out that he knew everything that the teachers were teaching. He got bored and played pranks to keep himself busy. This continued for the first few years. It was clear from his behaviour that he could not accept other people's authority. He said, "I encountered authority of a different kind that I have never encountered before, and I did not like it."

A turning point came when he was in grade four. His teacher Imogene Hill watched him very closely for some time and soon found out how to handle him and get things done by him. In order to get things done she used to give him money and food. One day after school, she gave Jobs a workbook with math problems in it. She said,"I want you to take it home and do this." She showed Jobs a huge lollipop and said, "When you are done with it, if you get it mostly right, I will give you this and five dollars. "Within two days, Jobs solved the math problem and returned the book to his teacher.

This continued for a couple of months and Jobs enjoyed learning so much that he did not need any return. Also he liked his teacher very much and wanted to please her. In Ms. Hill's class, Jobs felt he was special. At the end of the fourth grade, Jobs did very well. It was clear not only to Jobs and his parents but also to the teachers that he was exceptionally intelligent. The school proposed that Jobs should skip two classes and go into the seventh grade. This would mean that Jobs would find the study challenging and he would be motivated to study. His parents had him skip only one grade.

Source: Steve Jobs by Walter Isaacson

Questions

What do the words 'chosen' and 'special' mean in the text. Explain.

Why didn't Jobs enjoy school?

What did he do to keep himself entertained?

Why couldn't Jobs accept other people's authority at school? Why hadn't he come across other people's authority before?

Why did Jobs have the wish to control everything?

How did Jobs' teacher Imogene Hill keep him busy?

Match the words with their meanings as used in the context.

| Words | Meanings |
| --- | --- |
| adopted <br> abandoned encounter authority pranks <br> motivate | deserted /left alone <br> encourage <br> power or right to control <br> a playful or mischievous trick <br> legally took and raised another's child <br> to face |

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What was notable about Steve Jobs' childhood and upbringing?**
> 💡 **Answer:** He was adopted at birth by Paul and Clara Jobs in California, grew up tinkering with electronics in his father's garage, and showed early entrepreneurial brilliance.

> ❓ **Q: What philosophy guided Steve Jobs throughout his career?**
> 💡 **Answer:** Jobs believed in passionate innovation, exquisite design simplicity, and famously advised young people: 'Stay hungry, stay foolish.'

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Relative Clauses):**
  - Use *who* for people and *which/that* for things:
    - *"Zainul Abedin was an iconic artist **who** captured the tragic 1943 famine."*
- **Writing Activity (Biographical Sketch):**
  - Write a short biography of Mother Teresa focusing on her humanitarian work and Nobel Peace Prize message.
$tag_u07_l07$, 7);

    -- ======================================================
    -- Unit 8: World Heritage
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 8) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage)', 'World Heritage', 8)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage)', title_en = 'World Heritage'
        WHERE subject_id = v_subject_id AND order_index = 8
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u08_l01$
# ৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to listen for specific information*

- read and understand texts through silent reading

- ask and answer questions

- describe a place.

---

## 📖 Lesson 1: The Shat Gambuj Mosque

> 📝 **Activity:** Look at the picture. Work in pairs. Talk about the picture and ask and answer the following questions.

What can you see in the picture?

Do you have a building like this in your town/village?

What do we call it?

What is it used for?

> 📝 **Activity:** Read the text and complete the table given after it.

'Heritage' is what we inherit from the past, live with in the present and then pass on to our children or future generations. Our unique source of life and inspiration is our cultural and natural heritage. When we speak of 'World Heritage', it indicates places and sites that we inherited from the past and pass on to the future generation of the entire world.

The 'Shat Gambuj Mosque' in Bagerhat is such a heritage. It became a UNESCO World Heritage Site in 1985.

Originally, the historic Mosque City was known as 'Khalifatabad'. It is situated at the outskirts of Bagerhat town, - not very far from the dense mangrove forest of the Sundarbans. Khalifatabad was a Muslim colony. It was founded by the Turkish general, a saint warrior Ulugh Khan Jahan in the 15th century. The infrastructure of the city reveals significant technical skills in many mosques as well as early Islamic monuments. Baked bricks were used for the construction of the buildings. The planning of the city was dominated by the tradition of Islamic architecture and the decorations were a combination of Mughal and Turkish architecture.

Khan Jahan built a network of roads, bridges, public buildings and reservoirs to make the city habitable. There were about 360 mosques in the city. Among them the most remarkable is the multi-domed Shat Gombuj Mosque. The mosque is unique in the sense that it has 60 pillars that support the roof, with 77 low height domes. The 4 towers at 4 comers have smaller domes at the top as well. The vast prayer hall has 11 arched doorways on the east and 7 each on the north and south for light and ventilation. It has 7 aisles running along the length of the mosque and 11 deep curves between the slender stone columns. These columns support the curving arches created by the domes. The thickness of the arches is 6 feet and have slightly narrowing hollow and round wall.

The west wall in the interior has 11 'mihrabs' (niche in mosque pointing towards Makkah). These mihrabs are decorated with stonework and terracotta. The floor of the mosque is made of brick.

Besides being used as a prayer hall, Khan Jahan used the mosque as his court too. Today, it is one of the greatest tourist attractions and one of the best architectural beauties of Bangladesh.

| Shat Gambuj Mosque | Information |
| --- | --- |
| Founded by |   |
| When |   |
| Number of domes |   |
| Number of pillars |   |
| Arches |   |
| Thickness of the arches |   |
| Mihrabs |   |

> 📝 **Activity:** Look at the picture of the Tara Mosque in Dhaka. Read the information and write a description of the mosque with the help of the given clues.

**Location:** Dhaka, Abul Khairat Road Style: Mughal

**Number of domes:** 5

**Decoration:** different sizes of stars on dome and outside wall

Materials used for decoration: Chinaware and white cement

**Interior of the mosque:** mosaic floor, floral tiles on the wall

**Built by:** Mirza Ghulam Pir- a respectable Zamindar of Dhaka

Time: early 18th century

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Where is the historic Shat Gambuj Mosque located and who built it?**
> 💡 **Answer:** The Shat Gambuj Mosque is located in Bagerhat, Bangladesh, built in the 15th century by the saint-warrior Ulugh Khan Jahan Ali.

> ❓ **Q: How many domes does the Shat Gambuj Mosque actually have?**
> 💡 **Answer:** Despite its Bengali name meaning 'Sixty Domes', the mosque actually has 81 domes in total (77 low domes on the roof and 4 on corner towers).

> ❓ **Q: What recognition did UNESCO grant to the historic mosque city of Bagerhat?**
> 💡 **Answer:** UNESCO declared Bagerhat as a World Heritage Site in 1985 recognizing its unique medieval Islamic architectural brilliance.
$tag_u08_l01$, 1);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u08_l02$
# ৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: The Somapura Mahavihara

> 📝 **Activity:** Read the text.

Paharpur is an important archaeological site situated in a village named 'Paharpur' in Naogaon district of northern Bangladesh. Naogaon is mainly plain land but in the middle of it stood a hill covered with jungle. When the jungle was cleared and the hill excavated, there emerged a lofty ruin of an ancient temple. The temple is about 24 meter high from the surrounding level. 'Pahar' means hill. Hence the name Paharpur.

The Paharpur site has been excavated and re-excavated a number of times by archaeologists. Sir Alexander Cunningham, archaeological surveyor of India, visited the place in 1879. He intended to carry out an extensive excavation but was prevented by the land owner. Nevertheless, he was satisfied with whatever excavation he was permitted to carry out. The site was declared to be protected by the Archaeological Survey of India in 1919 under the Ancient Monuments Preservation Act of 1904.

Systematic and regular excavation started jointly by the Archaeological Survey of India, and Varendra Research Society of Rajshahi and Calcutta University in 1923. They excavated the south-west comer of the monastery. Next, in 1925-26, historian and archaeologist RD Banerjee excavated the northern part of the central mound. From 1926-27 onward, excavation was carried out under the super-vision of KN Dikshit.

The Department of Archaeology of Bangladesh brought the site under further excavation after independence. The operations took place in two phases. The first phase was initiated in 1981-82 and continued till 1984-1985. The second phase was started in 1988-89 and continued till 1990-91.

Pre-liberation expeditions have revealed the architecture of a vast Buddhist monastery, the Somapura Mahavihara. It is dominated by the central shrine, attracting immediate attention by its lofty height and unusual architectural design.

Somapura Mahavihara was one of the most famous Buddhist institutions for monks of ancient Bengal and Southern Asia. The excavated complex at Paharpur has been identified as Somapura Mahavihara built by the second Pala king Dharmapala (781- 821 AD). Some clay seals from the ruins bear the inscription Shri-Somapure-Shri-Dharmapaladeva-Mahavihariyarya-bhik-su-sangghasya.

The Pala rulers were devout Buddhists and they founded a number of monasteries throughout their growing empire. Some of them became great centres of learning and their reputation quickly spread throughout Asia. Somapura Mahavihara's close relationship with the ruling dynasty implied that it shared the political ups and downs of its benefactors.

Match the words with their meanings.

| Words | Meanings |
| --- | --- |
| archaeological | rubbles/wreckage |
| excavate | widespread |
| lofty | ancient cultural remains |
| extensive | p10us |
| systematic | uncover something with difficulty |
| debris | grand |
| devout | done methodically |

Read Text in A again and choose the correct answer.

Paharpur is a typical Bangladeshi village.

a very small village.

an extraordinary village.

a village on top of a mountain.

After excavation, the archaeologists discovered a huge

king's palace.

Buddhist monastery.

emperor's courtyard.

d. Hindu temple.

How many phases of excavation of Paharpur have been mentioned in the text?

four

SIX

five

seven

What objects indicate that the site was built by the second Pala king?

earthen seals

c. stone seals

ceramic seals

d. iron seals

The word 'benefactors' in the text means

banks.

people with money.

famous businessmen.

financial supporters.

> 📝 **Activity:** Read the text again. Work in pairs. Ask and answer the following questions. Then write the answers in your exercise book.

Why is the village named Paharpur?

Where is it located?

What is it famous for?

What did Cunningham find when he was digging the Paharpur site?

Why was the site officially stated to be preserved?

Do you have any old or ancient relic in your city/town/village? Write about it with the help of the following questions. If you don't, surf the Internet for a relic in Bangladesh that you find interesting and write about it.

When was it established?

How does it look like?

What was it for?

Why do you like it?

Who built it?

How big is it?

What is its present condition?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Where is Somapura Mahavihara situated and what was its historical role?**
> 💡 **Answer:** Somapura Mahavihara is located in Paharpur, Naogaon, Bangladesh, and was one of the largest Buddhist monastic universities in ancient Asia.

> ❓ **Q: Which king established Somapura Mahavihara during the Pala dynasty?**
> 💡 **Answer:** It was founded by the second Pala king, Dharmapala, in the late 8th or early 9th century AD.
$tag_u08_l02$, 2);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u08_l03$
# ৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: The Statue of Liberty

> 📝 **Activity:** Look at the picture and talk about it in pairs.

Read the following questions first. Now listen to the audio about the Statue

of Liberty and answer the questions.

Where is the Statue of Liberty situated?

Which country gave the statue as a gift?

The gift was meant for which country?

On what occasion was it given?

When was the statue given?

What does the statue represent?

> 📝 **Activity:** Listen to the text again and complete the chart.

| Statue of Liberty | Information |
| --- | --- |
| situated |   |
| artist |   |
| gift from |   |
| reason for the gift |   |
| presented on |   |
| occas10n |   |
| the statue symbolises |   |
| framework made of |   |
| amount of copper used |   |
| weight |   |
| year it was declared a UNESCO World |   |
| Heritage Site |   |

> 📝 **Activity:** Read the text and answer the following questions.

The French sculptor Frederic Auguste Bartholdi was assigned to design and complete a sculpture Liberty Enlightening the World within 1876, so that it could be a gift for the Americans on the occasion of the hundredth anniversary of the American Declaration of Independence. The statue was a joint venture between the USA and France. The French people built the statue and assemble it in the States, and the people of the USA built the pedestal for the statue.

Raising money for the pedestal was completed in August 1885. The construction of the pedestal was finished in April 1886. In the meantime, France completed the Statue in July 1884. They sent it to New York by the French warship 'Isere' in 1885. While transporting the statue, it was split up into 350 pieces and packed in 214 crates.

It took four months to put the Statue together and place it on the pedestal. Thousands of people saw the unveiling ceremony of the Statue of Liberty on 28 October 1886.

The Freedom that the Statue stands for is not stationary. The broken chain wrapped around her feet, sticking out from the bottom of her robe, symbolizes her free forward movement, enlightening the world with her torch, free from oppression and slavery.

The Statue's original torch was the first part constructed in 1876. It was replaced by a new copper torch covered in 24K gold leaf in 1984. The torch is lighted by flood light at night. The original torch is currently located in the lobby of the monument. Access to the torch has been closed since 1916.

From 28 October 2011, on her 125th anniversary, the Statue of Liberty was also named "Liberty Enlightening the World Wide Web". The credit goes to a series of new web cams placed around her torch. Several amazing views will be just a click of a mouse away. On clear days, three cameras provide unobstructed views of scenes far and near. Two cameras provide an ultra wide-angle interactive view of the famous golden torch. The remaining camera looks downwards towards the crown of The Statue of Liberty, her face and the tablet she is holding. So a person can have access to the web cam's live feed of The Statue of Liberty from anywhere in the world.

### ❓ Questions:

On what occasion did the French government give the Statue of Liberty to the USA?

When did she reach her destination?

How was she transported?

How has new technology made it possible for people to see the statue from anywhere they are?

What do you understand by the expression 'enlightening the world'?

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: Which country gifted the Statue of Liberty to the United States and why?**
> 💡 **Answer:** France gifted the Statue of Liberty to the United States in 1886 to commemorate the centennial of American independence and celebrate their enduring alliance.

> ❓ **Q: What does the Statue of Liberty symbolize in American culture?**
> 💡 **Answer:** She holds a torch of enlightenment and a tablet of law inscribed with 'July 4, 1776', symbolizing freedom, democracy, and welcoming immigrants to the new world.
$tag_u08_l03$, 3);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u08_l04$
# ৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 4: Lake Baikal

> 📝 **Activity:** Look at the picture. Work in pairs and ask and answer the following questions.

What do you think it is?

Where is this situated?

Are you familiar with something like this? Lake Baikal

### Section B: Read the text to find out if your guess about questions 1 and 2 is right.

Lake Baikal is the deepest and one of the biggest and most ancient lakes of the world. It is situated almost in the centre of Asia. Lake Baikal is a gigantic bowl set at 445 meters above sea level. This grand, enormous, unusual and charming miracle of nature is located in the south of Eastern Siberia, in the Buryat Autonomous Republic and region of Irkutsk, Russia.

The lake covers 31,500 sq km. It is 636 km long and on an average of 48 km wide. The widest point of the lake is 79.4 km. The water basin occupies 557,000 sq km. and contains 23,000 cu km (cubic kilometer) of water, which is about one fifth of the world's reservoir of fresh surface water.

The average water level in the lake is never higher than 456m. The average depth of Lake Baikal is 730 m, and its maximum depth in the middle is 1,620 m. It would take about one year for all the rivers of the world to fill Baikal's basin, and would take four hundred years for all the rivers, streams and brooks now flowing into Siberian lakesea to do the same.

There are hot springs in the surrounding area of Lake Baikal. The quality of the water of these springs is excellent. The lake acts as a powerful generator and bio filter producing this water. Baikal is a stormy lake. Autumn is the most stormy time. The wind blows in various directions.

The weather depends on the wind. If it is blowing from the north, the weather is bright and sunny. The water of the lake looks green and dark blue. But if the winds get stronger, Baikal turns black, waves rise high with white crest. The

'a beauty of Lake Baikal is exceptional.

Match the words with the meanings.

| Words | Meanings |
| --- | --- |
| miracle | small stream |
| basin | top |
| brook | outstanding |
| crest | a surprising event that is not explicable <br> by natural or scientific laws |
| exceptional | bowl-shaped depression filled with water |

> 📝 **Activity:** Read the text in C again and complete the chart.

| Lake Baikal | Information |
| --- | --- |
| location |   |
| setting/placed |   |
| length |   |
| width |   |
| maximum depth/ utmost/highest depth |   |
| extended over an area/occupies an area |   |
| amount of water |   |

### Section E: Make a list of attractive features of Lake Baikal.

Have you seen a lake or river that has attracted you very much? If yes, write what aspects of the lake or river appealed to you. If not, go and see a lake or a river. Then write about it.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What geographic records are held by Lake Baikal in Russia?**
> 💡 **Answer:** Lake Baikal in Siberia is the oldest freshwater lake (25 million years old) and the deepest lake in the world, holding 20 percent of Earth's unfrozen surface freshwater.

> ❓ **Q: Why is Lake Baikal ecologically significant?**
> 💡 **Answer:** It is renowned for crystal-clear water and exceptional biodiversity, hosting thousands of unique plant and animal species found nowhere else on Earth.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Prepositions of Place & Time):**
  - Precise time/point: *at* (at sunrise, at Paharpur)
  - Enclosed areas/cities: *in* (in Bagerhat, in 1985)
  - Surfaces/days: *on* (on the bank of the river, on Friday)
- **Writing Activity (Heritage Site Paragraph):**
  - Write a descriptive paragraph on the architectural marvel of the *Shat Gambuj Mosque* of Bagerhat.
$tag_u08_l04$, 4);

    -- ======================================================
    -- Unit 9: Unconventional Jobs
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 9) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '৯ম অধ্যায়: অপ্রচলিত পেশা (Unit 9: Unconventional Jobs)', 'Unconventional Jobs', 9)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '৯ম অধ্যায়: অপ্রচলিত পেশা (Unit 9: Unconventional Jobs)', title_en = 'Unconventional Jobs'
        WHERE subject_id = v_subject_id AND order_index = 9
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

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

    -- ======================================================
    -- Unit 10: Dreams
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 10) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams)', 'Dreams', 10)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '১০ম অধ্যায়: স্বপ্ন (Unit 10: Dreams)', title_en = 'Dreams'
        WHERE subject_id = v_subject_id AND order_index = 10
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

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

    -- ======================================================
    -- Unit 11: Reading from English Literature
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 11) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)', 'Reading from English Literature', 11)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '১১শ অধ্যায়: সাহিত্য পাঠ (Unit 11: English Literature)', title_en = 'Reading from English Literature'
        WHERE subject_id = v_subject_id AND order_index = 11
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

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

    -- ======================================================
    -- Unit 12: Roots
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 12) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১২শ অধ্যায়: শিকড় (Unit 12: Roots)', 'Roots', 12)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '১২শ অধ্যায়: শিকড় (Unit 12: Roots)', title_en = 'Roots'
        WHERE subject_id = v_subject_id AND order_index = 12
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

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

    -- ======================================================
    -- Unit 13: Loneliness
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 13) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৩শ অধ্যায়: একাকীত্ব (Unit 13: Loneliness)', 'Loneliness', 13)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '১৩শ অধ্যায়: একাকীত্ব (Unit 13: Loneliness)', title_en = 'Loneliness'
        WHERE subject_id = v_subject_id AND order_index = 13
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

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

    -- ======================================================
    -- Unit 14: Renewable Energy
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 14) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy)', 'Renewable Energy', 14)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy)', title_en = 'Renewable Energy'
        WHERE subject_id = v_subject_id AND order_index = 14
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u14_l01$
# ১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to describe familiar objects*

- participate in conversation, discussion

- read intensively and extensively

- write formal letters.

---

## 📖 Lesson 1: Renewable Energy Sources (Part 1)

Pairwork. Read the words in the box. Which of the words are related to energy?

| 1. fuel | 2. desert | 3. fossil | 4. sun |
| --- | --- | --- | --- |
| oil | forest | relic | wind |
| gas | valley | remnant | water |
| soil | waterfall | sign | coal |

Now, underline the odd word in each column that doesn't belong to the group. Then compare with your partner. Check the meanings of the new words in a dictionary.

> 📝 **Activity:** Read the text and answer the questions that follow.

In a speech at the 90th Science

Congress, acknowledged

internationally scientist and former Indian president Mr.APJ Abdul Kalam mentioned a very important aspect of this mankind's future energy crisis. He pointed out that the era of wood and bio-mass has almost come to an end.

The age of oil and natural gas

would soon be over within the next few decades. Massive burning of world's coal reserves may lead to a worldwide ecological disaster because coal burning emits the highest amount of carbon in the atmosphere. So according to Kalam, the only solution that mankind can look to is the massive use of solar energy in future because it has some advantages over other forms of renewable energies.

Now, why has Kalam put so much importance to the issue of energy? The energy sources have always been a major factor of change throughout history. The world's petroleum consumption has increased from 3 billion barrels annually in 1930 to 37 billion barrels annually today. In the next quarter century, the world's population is expected to be about 8 billion which is 30 percent higher than today. Developing countries will grow their economies about two times faster than industrialised countries. Global economic growth is expected to continue at 3 percent per year. Consequently, the global demand for energy will grow at about 1.7 percent per year on an average. It indicates a 50-percent rise of energy consumption by 2030. If the world's daily petroleum consumption is 100 million barrels now, it will rise to 150 million barrels by that time. The present reserve of hydro-carbon energy resources is limited and it will not be sufficient to meet the future energy challenges of the world. Hence, leading industrial countries have taken initiatives to use alternative energy sources mainly known as green or renewable energy sources. The bottom line of Kalam's speech indicates the concern of mankind in the 21st century.

### ❓ Questions:

What is the scientist Kalam concerned about?

Why do you think the massive burning of coal may lead to an ecological disaster?

What according to Mr Kalam is the solution of future energy crisis?

Why does Mr Kalam put so much importance on the issue of energy?

Why does Mr Kalam put much importance on solar energy?

Make sentences using the substitution table.

| The energy industries |   |   | the use of renewable energy |
| --- | --- | --- | --- |
|   |   | taken | sources. |
| The global petroleum consumption | have has | been <br> emphasised | a major factor for change throughout history. |
| Major industrial economies |   | increased | to three billion barrels per year. |
|   |   |   | initiatives to tap alternative |
| Scientists |   |   | energy sources. |

Complete the following passage with words from the box. There are more words than necessary.

| suggested | radiates | would | effective | conducted either | energy |
| --- | --- | --- | --- | --- | --- |
| affected | cns1s | use | were |   |   |

To answer the energy.......... in the world, scientist, professor, and former Indian president Mr. APJ Abdul Kalam has ........... that solar energy can be harnessed by establishing space stations in outer space in order to.......... solar power round

the clock.

Mr. Kalam said that the sun .......... about 10 trillion times the energy which humans consume across the world today.

If we .......... able to extract even a small portion of this energy from the sun, it .......... be sufficient to secure the energy demands of our future.

Pointing out that space based solar power plants do not get by weather, the scientist said that it would thus be far more m

efficiency and power generation than the surface based systems.

Professor Kalam suggested that the energy should be transmitted from space back to earth .......... through microwave or any other technology like laser. Careful research of the impact and safety concerns would have to be in this regard.

'Massive burning of world's coal reserves may lead to a worldwide ecological disaster ...'--- Do you support this view? Explain why/why not.

In Sohan's village, some people headed by Mr Asadul Islam came from an organisation to hold a meeting at the local Union Parishad (UP) Office. Their objective was to introduce alternative power supply systems in rural households. Read the dialogue between the UP Chairman and Mr. Islam.

Chairman Mr.Islam

What's your alternative power supply system?

Well, it's solar power and we are going to use solar power units in rural areas.

Chairman What is it? Is it something new?

Mr. Islam Not exactly. It's already familiar in many parts of the world. We've introduced it in our country too. But yes, in this locality it's something new.

Chairman Mr.Islam

Chairman

I see. Why do you call it 'alternative power supply system'?

Because solar power is a substitute for conventional electricity. It's actually a renewable energy source. Our solar units can be installed on open roof tops or at any open place where sunlight is available.

Sounds good. How much electricity can they give? Can they run my irrigation pump?

Mr.Islam

Chairman

Mr.Islam Chairman

I'm afraid Mr. Chairman, they can't. Our solar panels are small and are designed for domestic purposes only. They can produce enough electricity to run say, two or three tube lights, two fans, a TV set and the like. But larger units can run...

Sorry to interrupt Mr. Asad. I've to go to the bus stand now to receive a friend. Anyway, several villages in our Union are still without electricity. I hope people will welcome your 'alternative power supply system'.

Thank you, Mr. Chairman. Goodbye. Goodbye, Mr. Islam. See you again.

True or False? If false, write the correct answer.

Alternative power supply system 1s a completely new system m our country.

A renewable energy source can be a substitute for conventional electricity.

Solar power units of Mr.Islam are for commercial use only.

What questions would you like to ask Mr. Islam about solar panel, solar unit, energy sources, 'alternative power supply system', its capacity, its advantages and disadvantages, etc? Make a list of your probable questions.

Role play. Work in pairs. You take the role of the Chairman and your partner the role of Mr. Islam. Rewrite the dialogue and act If out.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What are renewable energy sources and why are they vital?**
> 💡 **Answer:** Renewable energy sources are clean, naturally replenishing power sources like solar, wind, hydro, and biomass that produce little or no greenhouse gas emissions.

> ❓ **Q: Why must the world transition away from conventional fossil fuels?**
> 💡 **Answer:** Fossil fuels (coal, oil, and gas) are finite, rapidly depleting, cause dangerous air pollution, and are the primary driver of catastrophic global climate change.
$tag_u14_l01$, 1);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u14_l02$
# ১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: Renewable Energy Sources (Part 2)

Look at the following pictures and discuss with your partner what you see in them. How are the two pictures related to each other?

> 📝 **Activity:** Read the text and answer the questions that follow.

Countries of the world rely heavily on petroleum, coal and natural gas for their energy sources. There are two major types of energy sources: renewable and non-renewable. Hydro-carbon or fossil fuels are non-renewable sources of energy. Reliance on them poses real big problems. First, fossil fuels such as oil, coal, gas etc, are finite energy resources and the world eventually will run out of them. Secondly, they will become too expensive in the coming decades and too damaging for the environment. Thirdly, fossil fuels have direct polluting impacts on earth's environment causing global warming. In contrast, renewable energy sources such as, wind and solar energy are constantly and naturally replenished and never run out.

Most renewable energy comes either directly or indirectly from the sun. Sunlight or solar energy can be used for heating and lighting homes, for generating electricity and for other commercial and industrial uses.

The sun's heat drives the wind and this wind energy can be captured with wind turbines to produce electricity. Then the wind and the sun's heat cause water to evaporate. When the water vapour turns into rain or snow and flows downhill into rivers or streams, its energy can be captured as hydroelectric energy.

Along with the rain and snow, sunlight causes plants to grow. Plants produce

\c, biomass which again can be turned into fuels such as firewood, alcohol, etc.

f"-) that are called bioenergy.

Scientists have identified Hydrogen as another form of renewable energy source. It is the most abundant element in nature. But it does not exist separately as a gas. It is always combined with other elements, such as with oxygen to make water. Hydrogen, separated from another element, can be burned as a fuel to produce electricity.

Our Earth's interior contains molten lava which gives off extreme heat. This heat inside the Earth produces steam and hot water which can be used as geothermal energy to produce electricity for heating homes, etc.

Ocean energy comes from several sources. Ocean's force of tide and wave can be used to produce energy. The surface of the ocean gets more heat from the sun than the ocean depths. This temperature difference can be used as energy source too.

Questions

What do you mean by renewable energy sources?

What are the problems with non-renewable energy sources?

What are the major differences between renewable and non-renewable energy sources?

c. Which of the renewable energy sources mentioned in the text have you heard of before? One of those resources is used in the Chittagong Hill Tracts (CHT) to produce electricity. Can you say what it is? Browse the net in groups to find out the answers to the following issues and present them to the class.

What is the name of the project?

Where in the CHT is the project located?

When did it start operation?

How much electricity is being produced from here for the national grid?

How many units are working there?

What is the positive impact of the project on our national development?

> 📝 **Activity:** Read the dialogue between Raju, a student of class ten and his uncle, Mr. Barua who works at Sangu Gas Field and answer the questions that follow.

Mr.Barna Raju Mr.Barna Raju

Mr.Barna

Raju Mr.Barna

Raju

Questions

What are you reading, Raju?

English, Uncle. A chapter on renewable energy sources.

I see. Do you know renewable energy is also called green energy? Green energy?... No Uncle, I don't know. Nothing is there about green energy in the text either.

Are you sure? Anyway, renewable energy sources provide us with energy which doesn't harm environment during its production or consumption. Say, solar energy. You see, there's no burning, no smoke, no emission of gases. It's a sort of clean technology and clean energy source.

Oh exactly. That's what our teacher said, I remember.

On the other hand, burning fossil fuels, say oil or coal, emits greenhouse gases that harm the environment.

0 ... I see. Yes, I've got the clue, Uncle. Thanks a lot. I now understand the relation between the two pictures in section A. Green energy sources make a green globe.

Why is renewable energy called green energy?

'Nothing is there about green energy in the text either'. --- Do you think this statement of Raju is correct? Explain why yes/no.

'I now understand the relation between the two pictures in section A'. What does Raju mean here? What does he really understand? Do you agree with Raju's view here? Why?

> 📝 **Activity:** Read the dialogue and act it out in pairs.

: What's solar energy?

: It's one of the renewable energy sources.

: Why is it called green energy?

: Well, it's green energy because it helps us keep the Earth green. I mean it doesn't emit any pollutants in the atmosphere when we produce and use it.

: I see. Then it must be a clean source of energy.

: Exactly. And that's why it's also called clean energy.

Now complete the following dialogue taking cues from the above model.

: What's wind energy?

: It's one of the .................................

: Why's it called ?

: Well, it's green energy because the

Earth green. I mean it doesn't ......................................

. when we produce

and use it.

: I see. Then it source of energy.

: Exactly. And that's why clean energy.

Now write dialogues on hydroelectricity, ocean energy, geothermal energy, hydrogen energy, using the model in E above.

Both South and North Dhaka City Corporation are installing solar panels in place of conventional electricity connections to illuminate roads in many areas. Write a letter to the editor of a daily newspaper appreciating this initiative and saying why this should be followed by other city authorities too.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What are the major prospects for solar energy in Bangladesh?**
> 💡 **Answer:** Bangladesh receives abundant tropical sunshine throughout the year, making rooftop solar systems and solar irrigation pumps exceptionally viable and cost-effective.

> ❓ **Q: How has the Solar Home System (SHS) program impacted rural Bangladesh?**
> 💡 **Answer:** It brought clean electricity to millions of off-grid rural households, enabling children to study at night, powering mobile phones, and boosting rural businesses.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Predictive Future & Passive):**
  - *"In the coming decades, renewable power **will be adopted** across Bangladesh."*
- **Writing Activity (Argumentative Paragraph):**
  - Write a paragraph presenting why solar and wind energy are superior alternatives to polluting coal-fired power plants.
$tag_u14_l02$, 2);

    -- ======================================================
    -- Unit 15: Media and Modes of E-communication
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 15) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৫শ অধ্যায়: মাধ্যম ও ই-যোগাযোগ (Unit 15: Media & E-communication)', 'Media and Modes of E-communication', 15)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '১৫শ অধ্যায়: মাধ্যম ও ই-যোগাযোগ (Unit 15: Media & E-communication)', title_en = 'Media and Modes of E-communication'
        WHERE subject_id = v_subject_id AND order_index = 15
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u15_l01$
# ১৫শ অধ্যায়: মাধ্যম ও ই-যোগাযোগ (Unit 15: Media & E-communication)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to surf the Internet*

- read and write emails

- narrate incidents in a logical sequence

- understand texts

- read intensively and extensively

- participate in debates.

---

## 📖 Lesson 1: Media and Modes of E-communication

### Section A: Look at the pictures and say what you see in them.

> 📝 **Activity:** Work in pairs. Discuss which of the following words you are familiar with. How are they related toe-communication?

> 📝 **Activity:** Read the text and answer the questions that follow.

Let's imagine a citizen's ordinary day at work. The morning probably starts with a cup of coffee/tea, followed by greeting the colleagues. Then comes the inevitable, which is log in the computer. For many of us the third step has become an automatic behavior and it dominates the rest of our work day, receiving and sending dozens of emails.

An e-mail is an electronic mail. It is a computer-aided way of exchanging digital text

messages from a sender to one or multiple recipient/s. E-mails operate through a network of computers linked by the Internet. There are commercial server agencies such as Yahoo, Gmail, Ymail, Hotmail, etc. that accept the text message from the sender, forward it and deliver instantly to the digital mailbox of the recipient. If the recipient is not online, the message is stored and delivered later when the recipient is online. It works instantly just with the click of your mouse. It has been a powerful communication tool in modem life.

### ❓ Questions:

What is an e-mail?

How do e-mails operate?

How do the commercial servers serve in the process of an e-mail?

'It has been a powerful communication tool in modem life.' Explain the statement.

How do e-mails affect our daily work schedule?

> 📝 **Activity:** Work in pairs and discuss the steps of your normal days, weekends etc.

Pairwork. Read the following e-mail exchanged between two friends. Like an informal letter, an e-mail to a close one is casually written. Identify the mistakes in the main body of the message, discuss with your partner, and correct them.

**Subject:** Details of Dhaka Tour

**FROM:** TO:

Alexa Dowson<alexa.dowson@yahoo.com> Moutushi Laboni<moutushi1997@ymail.com>

Monday, 21 May 2012 6:20 AM

Hi Moutushi!

Thanks for your mail. I'll fly from Ottawa on 7:36 hours local time on 13 July with Qatar Airlines via London-Doha and land Dhaka on 15 July around 13:41 hours local time. Wish to stay 2 days in the Cox's Bazar and 1 day in Khulna. Return flight on 21 July at 3:04 hours local time.

Keep in touch and stay fine. Hope to see you soon!

\Q

Alexa

Pairwork. The e-mail in section Eis a reply by Alexa to Moutushi's previous e-mail. Imagine what Moutushi might have written to Alexa. Write that e-mail.

Read the following text. It gives the information about the origin of the e-mail. Choose the appropriate forms of the verbs from the box to complete the sentences. You can use a verb more than once.

Sending text messages electronically could be to date back to the

Morse code telegraph of the mid 1800s and the 1939 New York World's Fair. In the fair, IBM ................ a letter of congratulations from San Francisco to New York on an IBM radio-type, ...... .......... it a high-speed substitute for mail service in the world of tomorrow. Teleprinters were in

Germany during World War II. The use ... ... .... ...... until the late 1960s when there was a worldwide Telex network. Additionally, there was the similar American system ................ TWX which important

until the late 1980s.

With the introduction of MIT's Compatible Time-Sharing System (CTSS) in 1961, for the first time multiple users were ...... .......... to log into a central system from remote dial-up terminals. They were also able to store and share files on the central disk. Informal methods of using this to pass

messages ................ and were ................ to create the first true e-mail system.

Read the following grid first. Then listen to the Audio and tick the right box in the following grid.

Comparison among e-mails, phone conversations and face to face meetings

|   | time-consuming | time-consuming | reliable | reliable | efficient | efficient |
| --- | --- | --- | --- | --- | --- | --- |
|   | less | more | less | more | less | more |
| E-mails |   |   |   |   |   |   |
| Phone conversations |   |   |   |   |   |   |
| Fto F meetings |   |   |   |   |   |   |

I Group work. Arrange a debate in the class on the advantages and the disadvantages of the e-mail.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is electronic communication (e-communication)?**
> 💡 **Answer:** E-communication is the transmission of text, voice, image, and video data across digital telecommunications networks, including email, messaging apps, and video conferencing.

> ❓ **Q: How has e-communication revolutionized modern daily life and commerce?**
> 💡 **Answer:** It enables instantaneous global messaging, paperless banking, tele-medicine, cross-border remote work, and frictionless international e-commerce.
$tag_u15_l01$, 1);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u15_l02$
# ১৫শ অধ্যায়: মাধ্যম ও ই-যোগাযোগ (Unit 15: Media & E-communication)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: Social Network Services

Look at the following logos. Are you familiar with them? Discuss with your partner what they are and how they are related to the field of e-communication.

> 📝 **Activity:** Read the text and answer the following questions.

The Internet technology has helped desgin a large number of web sites to facilitate social relations among people around the world. These are known as social networking services or social networks or social media. At present, Face-book is the most popular social media site. Linkedin, X (formerly Twitter), Google+ etc. are other frequently used social services. Social network services are web-based and hence, provide ways for the users to interact through the Internet. These services make it possible to connect people across the borders and thus have

\0) made the users feel that they really live in a global village.

Why are social networks expanding so fast? The answer is simple. Most of the social services are cost-free. You can make use of them free, paying a very little to your Internet service provider. Secondly, you can make your personal profile public before the entire online community. It is like presenting yourself before the entire world. You can also look into other people's profile if you are interested. It is simple and easy. Thirdly, social networks allow users to upload pictures, multimedia contents and modify the profile. Some services like Facebook allow users to update their profiles. Fourthly, networks allow users to post blog entries. User profiles have a section dedicated to comments from friends and other users. Finally, there are privacy protection measures too. A user himself or herself decides over the number of visitors/viewers, and what information should be shared with others.

Questions

What do you understand by social networks?

What are some uses of social networks?

'These services ... have made the users feel that they really live in a global village'. Do you agree with this view? Why/ Why not?

Make a list of the arguments as to why social networks are expanding so fast. Why do you think this is happening?

Read the second paragraph of the text in section B again. Notice the words in italics and write how they work in maintaining logical sequence in the paragraph.

Choose the best answers.

The technology has helped social networking sites to emerge.

Linkedin b. Google+

c. Internet d. Twitter

Users have to pay for social networks. b. their online connections.

c. multimedia contents. d. uploading pictures.

User accounts have ----------- protection measures.

virus b. identity

c. personal secrecy d. network

User profiles have a section for others' remarks. b. outsiders' editing.

c. outsiders' moderation. d. outsiders' uploading.

Fill in the following dialogue box to open a Facebook account.

Look at the following table adapted from Wikipedia. It shows some data on worldwide use of social networks.

| Social Networks | Individual users | Percentage (%) of <br> popularity | Regions covered |
| --- | --- | --- | --- |
| Facebook | 792,999,000 | 55.1 % | worldwide |
| Google+ | 250,000,000 | 17.7 % | worldwide |
| Twitter | 167,903,000 | 11.7 % | worldwide |
| Linkedln | 94,823,000 | 6.6% | Asia and Europe |
| MySpace | 61,037,000 | 4.2% | USA and Canada |
| Others | 255,539,000 | 17.8 % |   |
| Total | 1,438,877,000 | 100% |   |

Now complete the following dialogues about Facebook and MySpace, and provide your own questions and answers on the rest of the social networks in the table. Act them out in pairs.

'a 1. Q: social network is the most popular?

A: Facebook is

Q: individual users use Facebook? A: About 793 million.

Q: part of the world is Facebook mostly used in? A: Worldwide. It's popular worldwide among individual users.

Q: the least popular? A: MySpace is _ Q: individual users use MySpace? A:

Q: mostly used? A: among individual users. (Continue)

... 4 ....... 5.......

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What are social networking services and why are they so popular?**
> 💡 **Answer:** Platforms like Facebook, Instagram, and X allow users to build public profiles, share multimedia content, and interact with friends and communities worldwide.

> ❓ **Q: What cyber safety precautions should young people practice on social media?**
> 💡 **Answer:** Never share private passwords or sensitive personal details, verify friend requests, respect others' privacy, and beware of online scams and misinformation.
$tag_u15_l02$, 2);

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u15_l03$
# ১৫শ অধ্যায়: মাধ্যম ও ই-যোগাযোগ (Unit 15: Media & E-communication)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 3: E-learning

Look at the following picture. What objects do you see in the picture?

How are they related? Discuss with your partner and say what these are.

> 📝 **Activity:** Work in pairs. Discuss the following questions.

Have you ever experienced any digital education programmes m multimedia or CD/DVD?

Have you ever used any digitized educational resources such as Oxford Dictionary, Banglapedia or Wikipedia?

Have you ever heard of any online education course?

Have you ever seen a classroom teaching programme on TV?

> 📝 **Activity:** Read the text and answer the questions that follow.

Can you think of a classroom where there is no blackboard or desks? Do you believe that you can be a student without a printed book or a writing pad or even pen/pencil? Are you not thrilled to imagine that you have asked a question and your tutor is answering it while flying in a Boeing from Dubai to Dhaka? These are all possible in a 'virtual campus' in the system of e-learning. No kidding! For quite a long time, educationists have been utilizing the advantages of computer technology. The social networking services have a huge potential to help educationists in this sector. They have access to millions of people worldwide. Educationists have noticed that a large number of social network users come from young generation who especially belong to student community. So side by side with computer assisted teaching-learning software, online education programmes are evolving fairly rapidly to assist conventional education system. Is that e-learning?

We may confuse distant education or computer-based learning or computer-assisted training or even online education programmes with e-learning. But we should be cautious about the mix-up. What happens in an online education programme? Maybe you get some materials online from your tutor. Maybe you submit your assignment through email. Or even you may take your test online. But there must be some conventional campus, a department/institute from where your certificate will come. But in e-learning, as said by global e-learning guru Dr.Badrul H Khan*, every step, such as registration, admission, classroom entry and exit, class work, attendance, discussion with course Dr. Badrul H Khan mates, feedback, exams and finally certification must take place electronically through computer and the Internet technology in a virtual campus.

Everything is digitised and conducted by a system called Learning Management System (LMS). So online education programmes blend various components of e-leaming.

The revolutionary concept of e-leaming is already in its practice phase in many parts of the world. Professor Khan has developed a framework and important literatures on e-leaming which have been praised by pundits worldwide He is especially enthusiastic about the prospect of e-leaming in Bangladesh.

How would you feel if Bangladesh contemplates establishing South Asia's first virtual university? Won't it be a pioneering step for us in the world of e-leaming? Let's keep our fingers crossed.

*Born in Bangladesh and graduated in the United States, Dr. Badrul H Khan was a Professor at George Washington University and the University of Texas, USA. He is one of the celebrated theorists in the field of e-learning.

Write an e-mail to your teacher expressing your feelings and opinion regarding the next mode of education - e-learning. Also ask your teacher to clarify if anything in the text is unclear to you.

Suppose Dr. Badrul Huda Khan has come to visit your school and intends to meet students for a presentation on e-learning. Write a text message to invite your friend to attend the presentation.

Complete the following sentences with suitable words.

Education experts . . . . . . . . . . . . . . . . . . . . . .... utilising the advantages of computer technology a long time.

In e-leaming, everything from admission to certification must ..............

. electronically through computer and the Internet technology

in a virtual campus.

In some online courses, you . . . ......... your test online.

In case of online programmes, there ...................... some conventional campus from where

In e-leaming, all activities . . . ........... .................... by a system called Leaming Management System (LMS).

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is e-learning and what benefits does it offer to students?**
> 💡 **Answer:** E-learning is education delivered via digital devices over the internet, offering flexible self-paced learning, interactive multimedia lessons, and access to global experts.

> ❓ **Q: How did e-learning prove its critical value during the COVID-19 pandemic?**
> 💡 **Answer:** It ensured educational continuity for millions of home-bound students through virtual classrooms, video lectures, and online examinations when schools were closed.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Imperatives & Cyber Etiquette):**
  - *"**Never share** confidential passwords."* / *"**Verify** the credibility of online news."*
- **Writing Activity (Advisory Email):**
  - Write an email to your younger sibling advising them on essential cyber safety rules and responsible social media habits.
$tag_u15_l03$, 3);

    -- ======================================================
    -- Unit 16: Graffiti
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 16) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৬শ অধ্যায়: গ্রাফিতি (Unit 16: Graffiti)', 'Graffiti', 16)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '১৬শ অধ্যায়: গ্রাফিতি (Unit 16: Graffiti)', title_en = 'Graffiti'
        WHERE subject_id = v_subject_id AND order_index = 16
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u16_l01$
# ১৬শ অধ্যায়: গ্রাফিতি (Unit 16: Graffiti)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

"Why did you kill my son?"-graffiti on a Dhaka metro rail pillar near Mirpur I O circle.

Learning outcomes

After we have studied this unit, we will be able to describe the function of graffiti during people's movements m Bangladesh

recognize graffiti as a form of art

redefine our responsibilities as citizens

> 📝 **Activity:** Read the text and complete the activities that follow.

"Art should comfort the disturbed and disturb the comfortable," writes the pseudonymous street artist Banksy-a sentiment that encapsulates the spirit of graffiti's defiance.

On 16 July 2024, Abu Sayeed, an unarmed organizer of the students' movement for quota reform at Begum Rokeya University in Rangpur, was shot and killed by police as he stood with his arms stretched out, leaving his mother, Monowara Begum, shell-shocked and crying, "My son only wanted a job; if you don't want to give him a job, then don't-but why did you kill him?"

Since the 1960s, graffiti in Bangladesh has served as a powerful voice for resistance. In 1966, student activists spray-painted slogans like "Down with Ayub Khan" on walls, using graffiti as a covert means of protest against a repressive regime. When military forces approached, they shouted "chika! chika!"-a word meaning mole or muskrat- pretending they were killing rodents to disguise their actions. This guerrilla tactic marked the beginning of graffiti as a tool of dissent in Bangladesh, and it played a crucial role in the Liberation War in 1971.

Noor Hossain, with the words "Down with Autocracy" ("C:16" -r1" <li<f"; however, the Bangla spelling for -r1" is f;r - the misspelling underscoring raw spontaneity of such expressions) boldly painted in bright white on his bare chest, was photographed by Dinu Alam on 10 November, 1987, during a pro-democracy protest in Dhaka. Shortly after, he was shot and killed by

Bangladesh Police.

Wall art featuring Noor Hossain's iconic photograph, displayed on a Dhaka wall.

In recent times, graffiti has resurfaced as a powerful expression of dissent, particularly during the July uprising. Spray-painted messages-like "The country is nobody's father's"-invoked the legacy of past movements, echoing the iconic "Gonotontro Mukti Paak" (Let Democracy Be Free), famously written on the body of protester Noor Hossain during the Ershad regime. Each stroke of paint carried forward a history of defiance that has shaped Bangladesh's political landscape, drawing connections between past and present struggles for justice.

Wall art depicting iconic moments of the July uprising

Graffiti 's potency lies in its subversive, guerrilla nature. Unlike wall art, which is typically organized and sanctioned, graffiti thrives on immediacy, spontaneity, and the risk of persecution. Where wall art may take time and care, graffiti is often quick, requiring speed and anonymity due to the threat of detection. Its purpose is to challenge power, counter surveillance, and inscribe messages that are otherwise censored or suppressed.

The July uprising brought new dimensions to this medium of dissent. Spray-painted slogans defied erasure, embodying collective rage and revolutionary solidarity. Demands like "Ek dofa, ek dabi, shoirachar tui kobe jabi?" surfaced as cries for justice, echoing the French philosopher Jacques Derrida's assertion that "What cannot be said... must not be silenced but written."

A strong sense of inclusivity was also reflected in the wall art and graffiti during and after the July uprising, which highlighted the case of the marginalized and minoritized people in multiple instances. Numerous graffiti and wall art pieces not only called for justice but also carried a broader message of liberation, "Not a land of one nation, Bangladesh is a land of many communities" symbolizing the interconnected struggles of all communities. It underscored the message i.e. our collective liberation is intertwined, with the fight for justice uniting people across

regions and backgrounds. Wall art stating: "Not a land of one nation, Bangladesh is a land of many communities. "

The true power of graffiti lies in its resilience; it persists as a medium for revolutionary memory and collective consciousness. It speaks for those

'Cl silenced, ensures the struggles of the marginalized endure, and, as Banksy's words suggest, comforts the disturbed while disturbing the comfortable.

### ❓ Answer the following questions based on your reading of the passage:

How does graffiti serve as a powerful tool of resistance and dissent, especially in political movements? Compare its role in Bangladesh from the 1960s to the July uprising of 2024.

How does graffiti reflect the interconnected struggles for justice across different communities and regions? How do slogans like "From the plains to the hills, this time liberation is for all" illustrate this message?

In what ways do graffiti and wall art differ in terms of their purpose, creation, and the risks involved? What makes graffiti a more subversive, guerrilla form of expression?

What role do immediacy and anonymity play in the creation of graffiti, especially in politically charged contexts? Why are these characteristics essential to its effectiveness?

How can graffiti contribute to collective memory and preserve the struggles of marginalized communities, as seen in the recent protests? What makes it an enduring form of expression, even in the face of censorship?

Writing Exercise:

Graffiti has been considered a significant form of expression in political movements, especially in times of oppression. Write a short essay discussing the role of graffiti in resisting censorship and challenging power, particularly in the context of Bangladesh's history. Analyze how graffiti, as a form of spontaneous and guerrilla expression, differs from other more organized artistic expressions like wall art. Use examples from the passage, including the slogans during the July uprising, to support your argument.

**Group Work:** Graffiti or Wall Art Project

In your group, design a graffiti or wall art piece that expresses your message of resistance, solidarity, or demand for change. Focus on the symbolism, color choices, and text that will best represent your cause. Afterward, explain your design choices and how they reflect the message you want to convey to the public.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is graffiti and how has its cultural perception evolved?**
> 💡 **Answer:** Graffiti refers to writing or drawings painted on public walls; once dismissed as vandalism, it is now widely recognized as a powerful form of public art and sociopolitical expression.

> ❓ **Q: How have graffiti and street murals played a role in Bangladesh's history?**
> 💡 **Answer:** From the 1952 Language Movement and 1971 Liberation War to modern student movements, street murals and calligraphic graffiti have voiced citizens' aspiration for justice and freedom.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Expressing Opinions & Stance):**
  - Phrases: *From my perspective*, *Evidence suggests that*, *It is widely held that*.
- **Writing Activity (Analytical Paragraph):**
  - Write a paragraph analyzing how street graffiti and murals played an inspiring role in Bangladesh's democratic movements.
$tag_u16_l01$, 1);

    -- ======================================================
    -- Unit 17: Sample Question Paper
    -- ======================================================
    IF NOT EXISTS (SELECT 1 FROM chapters WHERE subject_id = v_subject_id AND order_index = 17) THEN
        INSERT INTO chapters (subject_id, title_bn, title_en, order_index)
        VALUES (v_subject_id, '১৭শ অধ্যায়: নমুনা প্রশ্নপত্র (Sample Question Paper)', 'Sample Question Paper', 17)
        RETURNING id INTO v_chapter_id;
    ELSE
        UPDATE chapters SET title_bn = '১৭শ অধ্যায়: নমুনা প্রশ্নপত্র (Sample Question Paper)', title_en = 'Sample Question Paper'
        WHERE subject_id = v_subject_id AND order_index = 17
        RETURNING id INTO v_chapter_id;
    END IF;

    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

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

    RAISE NOTICE 'Successfully seeded all English For Today units!';
END $$;
