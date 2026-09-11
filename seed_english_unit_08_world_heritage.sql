-- ============================================================
-- Unit 8: World Heritage (৮ম অধ্যায়: বিশ্ব ঐতিহ্য (Unit 8: World Heritage))
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

    -- Find Chapter (Unit 8)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 8 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 8 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: The Shat Gambuj Mosque
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

    -- Lesson 2: Lesson 2: The Somapura Mahavihara
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

    -- Lesson 3: Lesson 3: The Statue of Liberty
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

    -- Lesson 4: Lesson 4: Lake Baikal
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

END $$;
