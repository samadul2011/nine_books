-- ============================================================
-- Unit 6: Our Neighbours (৬ষ্ঠ অধ্যায়: আমাদের প্রতিবেশী (Unit 6: Our Neighbours))
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

    -- Find Chapter (Unit 6)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 6 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 6 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Nepal, the Land of the Everest
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

    -- Lesson 2: Lesson 2: Sri Lanka: The Pearl of the Indian Ocean
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

    -- Lesson 3: Lesson 3: The Maldives
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

    -- Lesson 4: Lesson 4: India: Unity in Diversity
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

    -- Lesson 5: Lesson 5: Bhutan: The Land of Happiness
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

END $$;
