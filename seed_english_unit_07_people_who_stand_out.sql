-- ============================================================
-- Unit 7: People Who Stand Out (৭ম অধ্যায়: অনন্য ব্যক্তিত্ব (Unit 7: People Who Stand Out))
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

    -- Find Chapter (Unit 7)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 7 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 7 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Zainul Abedin, The Great Artist
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

    -- Lesson 2: Lesson 2: The Art of Silence
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

    -- Lesson 3: Lesson 3: The Beginning
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

    -- Lesson 4: Lesson 4: Love for Humanity
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

    -- Lesson 5: Lesson 5: Love for Humanity
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

    -- Lesson 6: Lesson 6: The Wizard of Apple
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

    -- Lesson 7: Lesson 7: Jobs' Childhood
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

END $$;
