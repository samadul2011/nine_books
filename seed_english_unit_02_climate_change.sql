-- ============================================================
-- Unit 2: Climate Change (২য় অধ্যায়: জলবায়ু পরিবর্তন (Unit 2: Climate Change))
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

    -- Find Chapter (Unit 2)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 2 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 2 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: The Greed of the Mighty Rivers
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

    -- Lesson 2: Lesson 2: Environmental Pollution
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

    -- Lesson 3: Lesson 3: Human Being and Climate
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

    -- Lesson 4: Lesson 4: The Wheel of Cyclone
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

    -- Lesson 5: Lesson 5: A Friend of the Earth
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

END $$;
