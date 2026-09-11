-- ============================================================
-- Unit 15: Media and Modes of E-communication (১৫শ অধ্যায়: মাধ্যম ও ই-যোগাযোগ (Unit 15: Media & E-communication))
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

    -- Find Chapter (Unit 15)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 15 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 15 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Media and Modes of E-communication
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

    -- Lesson 2: Lesson 2: Social Network Services
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

    -- Lesson 3: Lesson 3: E-learning
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

END $$;
