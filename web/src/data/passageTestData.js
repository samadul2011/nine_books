// web/src/data/passageTestData.js
// Authentic Bangladeshi NCTB Board Exam Style Passage-Wise Test Questions
// Features at least 20 authentic 5-gap (a to e) contextual passages per section with instant grading,
// correct answer validation, and detailed Bengali grammatical explanations.

export const PASSAGE_TESTS = [
  {
    id: 'art-passage-1',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #1)',
    clues: ["a","an","the","x"],
    passage: "A library is (a) [___] storehouse of knowledge. (b) [___] books of different tastes and categories are kept here. It helps (c) [___] student to acquire wide knowledge. We should make (d) [___] best use of (e) [___] library to build a bright future.",
    blanks: [
      {
            "id": "a",
            "answer": "a",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "Singular Countable Noun ‘storehouse’ কনসোনেন্ট সাউন্ড ‘s’ দিয়ে শুরু হওয়ায় ‘a’ বসেছে।"
      },
      {
            "id": "b",
            "answer": "The",
            "accepted": [
                  "the",
                  "The",
                  "x"
            ],
            "exp": "নির্দিষ্ট লাইব্রেরির বইগুলোকে নির্দেশ করায় Definite Article ‘The’ বসে।"
      },
      {
            "id": "c",
            "answer": "a",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "যেকোনো সাধারণ শিক্ষার্থীকে বোঝাতে Singular Countable Noun (student) এর পূর্বে ‘a’ বসেছে।"
      },
      {
            "id": "d",
            "answer": "the",
            "accepted": [
                  "the",
                  "The"
            ],
            "exp": "Superlative Degree (best) এর পূর্বে সর্বদাই Definite Article ‘the’ বসে।"
      },
      {
            "id": "e",
            "answer": "a",
            "accepted": [
                  "a",
                  "the",
                  "A",
                  "The"
            ],
            "exp": "সাধারণ লাইব্রেরি হিসেবে ‘a library’ অথবা নির্দিষ্ট হিসেবে ‘the library’ উভয়ই গৃহীত।"
      }
]
  },
  {
    id: 'art-passage-2',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #2)',
    clues: ["a","an","the","x"],
    passage: "Honesty is (a) [___] great virtue. An honest man is loved and respected by (b) [___] all. He never aspires after (c) [___] wealth or luxury. He rejects (d) [___] bribe with hatred. Thus he leads (e) [___] peaceful and happy life.",
    blanks: [
      {
            "id": "a",
            "answer": "a",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "Singular Noun Phrase (great virtue) এর পূর্বে Indefinite Article ‘a’ বসেছে।"
      },
      {
            "id": "b",
            "answer": "x",
            "accepted": [
                  "x",
                  "X",
                  "no article"
            ],
            "exp": "‘all’ শব্দটি যখন সর্বজনীন নির্দেশক হিসেবে একা বসে, তখন এর পূর্বে Article বসে না (Zero Article: x)।"
      },
      {
            "id": "c",
            "answer": "x",
            "accepted": [
                  "x",
                  "X",
                  "no article"
            ],
            "exp": "Uncountable Abstract Noun (wealth) এর পূর্বে সাধারণ অর্থে Article বসে না।"
      },
      {
            "id": "d",
            "answer": "a",
            "accepted": [
                  "a",
                  "the"
            ],
            "exp": "Singular Countable Noun (bribe) এর পূর্বে ‘a’ বসে।"
      },
      {
            "id": "e",
            "answer": "a",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "Noun Phrase (peaceful and happy life) এর পূর্বে ‘a’ বসে।"
      }
]
  },
  {
    id: 'art-passage-3',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #3)',
    clues: ["a","an","the","x"],
    passage: "English is (a) [___] international language. In order to achieve (b) [___] higher education abroad, we must master it. Today it functions as (c) [___] official medium in numerous global organizations. Without proficiency in English, (d) [___] graduate cannot secure (e) [___] prestigious career.",
    blanks: [
      {
            "id": "a",
            "answer": "an",
            "accepted": [
                  "an",
                  "An"
            ],
            "exp": "Vowel সাউন্ড দিয়ে শুরু হওয়া Adjective ‘international’ এর পূর্বে ‘an’ বসে।"
      },
      {
            "id": "b",
            "answer": "x",
            "accepted": [
                  "x",
                  "X"
            ],
            "exp": "Uncountable Noun ‘higher education’ এর পূর্বে সাধারণ অর্থে কোনো article বসে না।"
      },
      {
            "id": "c",
            "answer": "an",
            "accepted": [
                  "an",
                  "the"
            ],
            "exp": "Vowel সাউন্ড যুক্ত ‘official’ এর পূর্বে ‘an’ বসে।"
      },
      {
            "id": "d",
            "answer": "a",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "Singular Countable Noun ‘graduate’ এর পূর্বে ‘a’ বসে।"
      },
      {
            "id": "e",
            "answer": "a",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "Noun Phrase ‘prestigious career’ এর পূর্বে ‘a’ বসে।"
      }
]
  },
  {
    id: 'art-passage-4',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #4)',
    clues: ["a","an","the","x"],
    passage: "Morning walk is (a) [___] ideal exercise for people of all ages. It costs (b) [___] nothing but gives immense physical benefits. In (c) [___] early morning, nature remains calm and quiet. (d) [___] fresh breeze fills (e) [___] mind with joy and energy.",
    blanks: [
      {
            "id": "a",
            "answer": "an",
            "accepted": [
                  "an"
            ],
            "exp": "Vowel সাউন্ড ‘ideal’ এর পূর্বে ‘an’ বসে।"
      },
      {
            "id": "b",
            "answer": "x",
            "accepted": [
                  "x"
            ],
            "exp": "Pronoun ‘nothing’ এর পূর্বে কোনো article বসে না।"
      },
      {
            "id": "c",
            "answer": "the",
            "accepted": [
                  "the",
                  "The"
            ],
            "exp": "দিনের নির্দিষ্ট অংশ ‘in the morning / in the early morning’ এ ‘the’ বসে।"
      },
      {
            "id": "d",
            "answer": "The",
            "accepted": [
                  "the",
                  "The",
                  "A"
            ],
            "exp": "সকালের স্নিগ্ধ বাতাস নির্দিষ্ট অর্থে ‘The fresh breeze’ বসে।"
      },
      {
            "id": "e",
            "answer": "the",
            "accepted": [
                  "the",
                  "our",
                  "a"
            ],
            "exp": "মানবমনকে নির্দেশ করায় ‘the mind’ বসে।"
      }
]
  },
  {
    id: 'art-passage-5',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #5)',
    clues: ["a","an","the","x"],
    passage: "Newspaper is (a) [___] mirror of the world. It brings us (b) [___] news of home and abroad. By reading (c) [___] daily newspaper, we can enrich our knowledge. Those who do not read (d) [___] newspaper remain isolated from (e) [___] current affairs.",
    blanks: [
      {
            "id": "a",
            "answer": "the",
            "accepted": [
                  "the",
                  "a"
            ],
            "exp": "নির্দিষ্ট রূপক সংজ্ঞা প্রকাশে ‘the mirror of the world’ বা ‘a mirror’ বসে।"
      },
      {
            "id": "b",
            "answer": "the",
            "accepted": [
                  "the",
                  "x"
            ],
            "exp": "‘News of home and abroad’ নির্দিষ্ট থাকায় ‘the news’ বসে।"
      },
      {
            "id": "c",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "সাধারণ পত্রিকা অর্থে ‘a daily newspaper’ বসে।"
      },
      {
            "id": "d",
            "answer": "the",
            "accepted": [
                  "the",
                  "a"
            ],
            "exp": "শ্রেণিগত মাধ্যম বোঝাতে ‘the newspaper’ বসে।"
      },
      {
            "id": "e",
            "answer": "the",
            "accepted": [
                  "the",
                  "x"
            ],
            "exp": "নির্দিষ্ট চলতি ঘটনাবলি নির্দেশ করতে ‘the current affairs’ বসে।"
      }
]
  },
  {
    id: 'art-passage-6',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #6)',
    clues: ["a","an","the","x"],
    passage: "The Sundarbans is (a) [___] largest mangrove forest in the world. It is situated in (b) [___] south-west part of Bangladesh. (c) [___] Royal Bengal Tiger is (d) [___] pride of this dense forest. Many tourists visit it throughout (e) [___] year.",
    blanks: [
      {
            "id": "a",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "Superlative Degree ‘largest’ এর পূর্বে সর্বদা ‘the’ বসে।"
      },
      {
            "id": "b",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "ভৌগোলিক দিক নির্দেশক ‘in the south-west’ এ ‘the’ বসে।"
      },
      {
            "id": "c",
            "answer": "The",
            "accepted": [
                  "the",
                  "The"
            ],
            "exp": "প্রাণীর সমগ্র প্রজাতি নির্দেশ করতে Singular Common Noun এর পূর্বে ‘The’ বসে।"
      },
      {
            "id": "d",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "নির্দিষ্ট গৌরব বোঝাতে ‘the pride’ বসে।"
      },
      {
            "id": "e",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "‘Throughout the year’ (সারা বছর ধরে) একটি সুপরিচিত ফ্রেজ।"
      }
]
  },
  {
    id: 'art-passage-7',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #7)',
    clues: ["a","an","the","x"],
    passage: "Patriotism is (a) [___] noble quality of human mind. (b) [___] true patriot loves his motherland more than his life. He does not hesitate to make (c) [___] supreme sacrifice for the freedom of his nation. On the contrary, (d) [___] unpatriotic person is hated by (e) [___] everyone.",
    blanks: [
      {
            "id": "a",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Singular Noun Phrase ‘noble quality’ এর পূর্বে ‘a’ বসে।"
      },
      {
            "id": "b",
            "answer": "A",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "যেকোনো খাঁটি দেশপ্রেমিক বোঝাতে ‘A true patriot’ বসে।"
      },
      {
            "id": "c",
            "answer": "the",
            "accepted": [
                  "the",
                  "a"
            ],
            "exp": "সর্বোচ্চ আত্মত্যাগ নির্দিষ্ট থাকায় ‘the supreme sacrifice’ বসে।"
      },
      {
            "id": "d",
            "answer": "an",
            "accepted": [
                  "an"
            ],
            "exp": "Vowel সাউন্ড ‘unpatriotic’ এর পূর্বে ‘an’ বসে।"
      },
      {
            "id": "e",
            "answer": "x",
            "accepted": [
                  "x"
            ],
            "exp": "Pronoun ‘everyone’ এর পূর্বে কোনো article বসে না।"
      }
]
  },
  {
    id: 'art-passage-8',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #8)',
    clues: ["a","an","the","x"],
    passage: "Computer is (a) [___] wonderful gift of modern science. It has brought about (b) [___] revolutionary change in our communication system. Nowadays, (c) [___] computer is used in almost every office. Even (d) [___] ordinary school student can operate (e) [___] device easily.",
    blanks: [
      {
            "id": "a",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Singular Noun Phrase ‘wonderful gift’ এর পূর্বে ‘a’ বসে।"
      },
      {
            "id": "b",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "‘A revolutionary change’ এর পূর্বে Indefinite Article ‘a’ বসে।"
      },
      {
            "id": "c",
            "answer": "a",
            "accepted": [
                  "a",
                  "the"
            ],
            "exp": "সাধারণ কম্পিউটার নির্দেশ করতে ‘a computer’ বসে।"
      },
      {
            "id": "d",
            "answer": "an",
            "accepted": [
                  "an"
            ],
            "exp": "Vowel সাউন্ড ‘ordinary’ এর পূর্বে ‘an’ বসে।"
      },
      {
            "id": "e",
            "answer": "the",
            "accepted": [
                  "the",
                  "this",
                  "a"
            ],
            "exp": "পূর্বে উল্লেখিত কম্পিউটার ডিভাইসটিকে নির্দিষ্ট করায় ‘the device’ বসে।"
      }
]
  },
  {
    id: 'art-passage-9',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #9)',
    clues: ["a","an","the","x"],
    passage: "Water is (a) [___] essential element of human environment. Clean water is (b) [___] source of life, whereas polluted water causes (c) [___] fatal diseases. We must prevent (d) [___] water pollution at any cost to ensure (e) [___] healthy existence.",
    blanks: [
      {
            "id": "a",
            "answer": "an",
            "accepted": [
                  "an"
            ],
            "exp": "Vowel সাউন্ড ‘essential’ এর পূর্বে ‘an’ বসে।"
      },
      {
            "id": "b",
            "answer": "the",
            "accepted": [
                  "the",
                  "a"
            ],
            "exp": "জীবনের মূল উৎস হিসেবে ‘the source of life’ বসে।"
      },
      {
            "id": "c",
            "answer": "x",
            "accepted": [
                  "x"
            ],
            "exp": "Plural Countable Noun (diseases) সাধারণ অর্থে ব্যবহৃত হওয়ায় কোনো article বসে না (x)।"
      },
      {
            "id": "d",
            "answer": "x",
            "accepted": [
                  "x",
                  "the"
            ],
            "exp": "Uncountable Noun ‘water pollution’ এর পূর্বে সাধারণ অর্থে Article বসে না।"
      },
      {
            "id": "e",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Noun Phrase ‘healthy existence’ এর পূর্বে ‘a’ বসে।"
      }
]
  },
  {
    id: 'art-passage-10',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #10)',
    clues: ["a","an","the","x"],
    passage: "Education removes (a) [___] darkness of ignorance from our mind. It acts like (b) [___] bright light in a dark room. (c) [___] educated person knows how to differentiate right from wrong. He plays (d) [___] vital role in (e) [___] society.",
    blanks: [
      {
            "id": "a",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "অজ্ঞতার অন্ধকার নির্দিষ্ট করায় ‘the darkness of ignorance’ বসে।"
      },
      {
            "id": "b",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Singular Noun Phrase ‘bright light’ এর পূর্বে ‘a’ বসে।"
      },
      {
            "id": "c",
            "answer": "An",
            "accepted": [
                  "an",
                  "An"
            ],
            "exp": "Vowel সাউন্ড ‘educated’ এর পূর্বে ‘An’ বসে।"
      },
      {
            "id": "d",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Idiomatic Phrase ‘play a vital role’ এ ‘a’ বসে।"
      },
      {
            "id": "e",
            "answer": "the",
            "accepted": [
                  "the",
                  "x"
            ],
            "exp": "সমগ্র মানবসমাজ নির্দেশ করতে ‘the society’ বসে।"
      }
]
  },
  {
    id: 'art-passage-11',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #11)',
    clues: ["a","an","the","x"],
    passage: "Discipline is (a) [___] key to success in student life. Without discipline, (b) [___] army cannot fight successfully, nor can (c) [___] school run properly. (d) [___] disciplined student reaches (e) [___] peak of prosperity.",
    blanks: [
      {
            "id": "a",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "সফলতার একমাত্র চাবিকাঠি বোঝাতে ‘the key to success’ বসে।"
      },
      {
            "id": "b",
            "answer": "an",
            "accepted": [
                  "an"
            ],
            "exp": "Vowel সাউন্ড ‘army’ এর পূর্বে ‘an’ বসে।"
      },
      {
            "id": "c",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Singular Noun ‘school’ এর পূর্বে ‘a’ বসে।"
      },
      {
            "id": "d",
            "answer": "A",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "যেকোনো সুশৃঙ্খল শিক্ষার্থীকে বোঝাতে ‘A disciplined student’ বসে।"
      },
      {
            "id": "e",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "উন্নতির শীর্ষচূড়া নির্দিষ্ট করায় ‘the peak of prosperity’ বসে।"
      }
]
  },
  {
    id: 'art-passage-12',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #12)',
    clues: ["a","an","the","x"],
    passage: "Friendship is (a) [___] sacred relationship between two souls. (b) [___] real friend never leaves his companion in (c) [___] danger. He is always ready to render (d) [___] helping hand. Blessed is the person who has (e) [___] faithful friend.",
    blanks: [
      {
            "id": "a",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Singular Noun Phrase ‘sacred relationship’ এর পূর্বে ‘a’ বসে।"
      },
      {
            "id": "b",
            "answer": "A",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "যেকোনো প্রকৃত বন্ধু বোঝাতে ‘A real friend’ বসে।"
      },
      {
            "id": "c",
            "answer": "x",
            "accepted": [
                  "x"
            ],
            "exp": "Phrasal Expression ‘in danger’ (বিপদে) এর মাঝে কোনো article বসে না।"
      },
      {
            "id": "d",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Phrase ‘render a helping hand’ এ ‘a’ বসে।"
      },
      {
            "id": "e",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Singular Noun Phrase ‘faithful friend’ এর পূর্বে ‘a’ বসে।"
      }
]
  },
  {
    id: 'art-passage-13',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #13)',
    clues: ["a","an","the","x"],
    passage: "The moon shines at (a) [___] night. It receives its light from (b) [___] sun. (c) [___] gentle rays of the moon soothe (d) [___] tired traveller. Poets often compare (e) [___] beautiful face to the moon.",
    blanks: [
      {
            "id": "a",
            "answer": "x",
            "accepted": [
                  "x"
            ],
            "exp": "Phrasal Expression ‘at night’ এর মাঝে কোনো article বসে না।"
      },
      {
            "id": "b",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "মহাজাগতিক একক বস্তু ‘sun’ এর পূর্বে সর্বদা ‘the’ বসে।"
      },
      {
            "id": "c",
            "answer": "The",
            "accepted": [
                  "the",
                  "The"
            ],
            "exp": "চাঁদের স্নিগ্ধ কিরণ নির্দিষ্ট করায় ‘The gentle rays’ বসে।"
      },
      {
            "id": "d",
            "answer": "a",
            "accepted": [
                  "a",
                  "the"
            ],
            "exp": "ক্লান্ত পথিক বোঝাতে ‘a tired traveller’ বা ‘the’ বসে।"
      },
      {
            "id": "e",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "যেকোনো সুন্দর মুখ নির্দেশ করতে ‘a beautiful face’ বসে।"
      }
]
  },
  {
    id: 'art-passage-14',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #14)',
    clues: ["a","an","the","x"],
    passage: "Gold is (a) [___] precious yellow metal. It is found in (b) [___] deep mines underground. (c) [___] gold of South Africa is known for its high purity. Women all over (d) [___] world are fond of (e) [___] gold ornaments.",
    blanks: [
      {
            "id": "a",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Noun Phrase ‘precious yellow metal’ এর পূর্বে ‘a’ বসে।"
      },
      {
            "id": "b",
            "answer": "x",
            "accepted": [
                  "x"
            ],
            "exp": "Plural Noun ‘mines’ অনির্দিষ্ট হওয়ায় কোনো article বসে না।"
      },
      {
            "id": "c",
            "answer": "The",
            "accepted": [
                  "the",
                  "The"
            ],
            "exp": "দক্ষিণ আফ্রিকার নির্দিষ্ট সোনা বোঝাতে ‘The gold of South Africa’ বসে।"
      },
      {
            "id": "d",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "বিশ্ব বোঝাতে ‘all over the world’ এ ‘the’ বসে।"
      },
      {
            "id": "e",
            "answer": "x",
            "accepted": [
                  "x",
                  "the"
            ],
            "exp": "সাধারণ স্বর্ণালংকার (Plural Noun) এর পূর্বে Article বসে না।"
      }
]
  },
  {
    id: 'art-passage-15',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #15)',
    clues: ["a","an","the","x"],
    passage: "Mother Teresa was (a) [___] extraordinarily devoted woman. She dedicated her life to (b) [___] service of destitute people. She established (c) [___] home for dying destitutes called Nirmal Hriday. She won (d) [___] Nobel Prize for (e) [___] Peace in 1979.",
    blanks: [
      {
            "id": "a",
            "answer": "an",
            "accepted": [
                  "an"
            ],
            "exp": "Vowel সাউন্ড ‘extraordinarily’ এর পূর্বে ‘an’ বসে।"
      },
      {
            "id": "b",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "অসহায়দের সেবা নির্দিষ্ট করায় ‘the service of destitute people’ বসে।"
      },
      {
            "id": "c",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "একটি আশ্রম নির্দেশ করতে ‘a home’ বসে।"
      },
      {
            "id": "d",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "বিশ্বখ্যাত পুরস্কারের নামের পূর্বে ‘the Nobel Prize’ বসে।"
      },
      {
            "id": "e",
            "answer": "x",
            "accepted": [
                  "x"
            ],
            "exp": "পুরস্কারের ক্ষেত্র ‘for Peace’ এ কোনো article বসে না।"
      }
]
  },
  {
    id: 'art-passage-16',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #16)',
    clues: ["a","an","the","x"],
    passage: "Industry is (a) [___] mother of good luck. (b) [___] idle person can never prosper in life. If we look at (c) [___] history of developed nations, we will see that they worked round (d) [___] clock. Hard work brings (e) [___] ultimate glory.",
    blanks: [
      {
            "id": "a",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "প্রবাদ বাক্যে ‘the mother of good luck’ এ ‘the’ বসে।"
      },
      {
            "id": "b",
            "answer": "An",
            "accepted": [
                  "an",
                  "An"
            ],
            "exp": "Vowel সাউন্ড ‘idle’ এর পূর্বে ‘An’ বসে।"
      },
      {
            "id": "c",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "উন্নত দেশগুলোর ইতিহাস নির্দিষ্ট করায় ‘the history’ বসে।"
      },
      {
            "id": "d",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "Phrasal Expression ‘round the clock’ (দিনরাত ২৪ ঘণ্টা) এ ‘the’ বসে।"
      },
      {
            "id": "e",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "নির্দিষ্ট চূড়ান্ত সাফল্য বোঝাতে ‘the ultimate glory’ বসে।"
      }
]
  },
  {
    id: 'art-passage-17',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #17)',
    clues: ["a","an","the","x"],
    passage: "Punctuality is (a) [___] habit of doing duties in right time. To (b) [___] student, punctuality is of great significance. (c) [___] punctual boy completes his tasks on (d) [___] schedule. He is praised by (e) [___] his teachers.",
    blanks: [
      {
            "id": "a",
            "answer": "the",
            "accepted": [
                  "the",
                  "a"
            ],
            "exp": "নির্দিষ্ট ভালো অভ্যাস প্রকাশ করতে ‘the habit’ বসে।"
      },
      {
            "id": "b",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "যেকোনো সাধারণ শিক্ষার্থীর জন্য ‘To a student’ বসে।"
      },
      {
            "id": "c",
            "answer": "A",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "যেকোনো সময়নিষ্ঠ বালক বোঝাতে ‘A punctual boy’ বসে।"
      },
      {
            "id": "d",
            "answer": "x",
            "accepted": [
                  "x",
                  "the"
            ],
            "exp": "Phrasal Expression ‘on schedule’ এ কোনো article বসে না।"
      },
      {
            "id": "e",
            "answer": "x",
            "accepted": [
                  "x",
                  "all"
            ],
            "exp": "Possessive Pronoun ‘his teachers’ এর পূর্বে কোনো article বসে না।"
      }
]
  },
  {
    id: 'art-passage-18',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #18)',
    clues: ["a","an","the","x"],
    passage: "Internet has made (a) [___] world into a global village. With (b) [___] click of a mouse, one can get (c) [___] huge amount of information. (d) [___] student can easily download reference books from (e) [___] web.",
    blanks: [
      {
            "id": "a",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "আমাদের সমগ্র পৃথিবী নির্দিষ্ট থাকায় ‘the world’ বসে।"
      },
      {
            "id": "b",
            "answer": "a",
            "accepted": [
                  "a",
                  "the"
            ],
            "exp": "ইঁদুরের এক ক্লিকে ‘With a click’ বসে।"
      },
      {
            "id": "c",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Phrasal Quantifier ‘a huge amount of’ এ ‘a’ বসে।"
      },
      {
            "id": "d",
            "answer": "A",
            "accepted": [
                  "a",
                  "A"
            ],
            "exp": "যেকোনো শিক্ষার্থী বোঝাতে ‘A student’ বসে।"
      },
      {
            "id": "e",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "ইন্টারনেট ওয়েবকে সুনির্দিষ্ট করায় ‘the web’ বসে।"
      }
]
  },
  {
    id: 'art-passage-19',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #19)',
    clues: ["a","an","the","x"],
    passage: "Dhaka is (a) [___] capital of Bangladesh. It is (b) [___] densely populated city situated on (c) [___] bank of the river Buriganga. It is famous as (d) [___] city of mosques. Every day thousands of people arrive here in (e) [___] search of livelihood.",
    blanks: [
      {
            "id": "a",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "একটি দেশের একক রাজধানী নির্দিষ্ট থাকায় ‘the capital’ বসে।"
      },
      {
            "id": "b",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "Singular Noun Phrase ‘densely populated city’ এর পূর্বে ‘a’ বসে।"
      },
      {
            "id": "c",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "বুড়িগঙ্গার তীর নির্দিষ্ট হওয়ায় ‘on the bank of’ এ ‘the’ বসে।"
      },
      {
            "id": "d",
            "answer": "the",
            "accepted": [
                  "the",
                  "a"
            ],
            "exp": "মসজিদের নগরী হিসেবে পরিচিত থাকায় ‘the city of mosques’ বসে।"
      },
      {
            "id": "e",
            "answer": "x",
            "accepted": [
                  "x"
            ],
            "exp": "Phrasal Expression ‘in search of’ এর মাঝে কোনো article বসে না।"
      }
]
  },
  {
    id: 'art-passage-20',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Article (a, an, the বা x) বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #20)',
    clues: ["a","an","the","x"],
    passage: "Truthfulness is (a) [___] greatest of all virtues. It makes (b) [___] man trustworthy and respected in society. Nobody trusts (c) [___] liar who speaks falsehood. Even if (d) [___] liar tells truth, nobody pays (e) [___] heed to him.",
    blanks: [
      {
            "id": "a",
            "answer": "the",
            "accepted": [
                  "the"
            ],
            "exp": "Superlative Degree ‘greatest’ এর পূর্বে সর্বদাই ‘the’ বসে।"
      },
      {
            "id": "b",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "সাধারণ মানুষকে বোঝাতে ‘makes a man’ এ ‘a’ বসে।"
      },
      {
            "id": "c",
            "answer": "a",
            "accepted": [
                  "a"
            ],
            "exp": "যেকোনো মিথ্যাবাদীকে বোঝাতে ‘a liar’ বসে।"
      },
      {
            "id": "d",
            "answer": "a",
            "accepted": [
                  "a",
                  "the"
            ],
            "exp": "সাধারণ মিথ্যাবাদী অর্থে ‘a liar’ বসে।"
      },
      {
            "id": "e",
            "answer": "x",
            "accepted": [
                  "x",
                  "any"
            ],
            "exp": "Phrasal Expression ‘pay heed to’ (মনোযোগ দেওয়া) এ কোনো article বসে না।"
      }
]
  },
  {
    id: 'prep-passage-1',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #1)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "A true friend is an asset. He stands (a) [___] his friends in time of danger. He is not a greedy person. He always wishes (b) [___] the welfare (c) [___] his friend. But it is a matter (d) [___] regret that a true friend is very rare today. A selfish man cannot be a true friend. He always thinks (e) [___] his own interest.",
    blanks: [
      {
            "id": "a",
            "answer": "by",
            "accepted": [
                  "by"
            ],
            "exp": "Phrasal Verb: ‘stand by’ অর্থ বিপদে পাশে থাকা বা সমর্থন দেওয়া।"
      },
      {
            "id": "b",
            "answer": "for",
            "accepted": [
                  "for"
            ],
            "exp": "Appropriate Preposition: ‘wish for’ অর্থ কল্যাণ প্রার্থনা করা।"
      },
      {
            "id": "c",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "‘বন্ধুটির কল্যাণ’ (welfare of his friend) — সম্বন্ধবাচক হিসেবে ‘of’ বসে।"
      },
      {
            "id": "d",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "‘A matter of regret’ (দুঃখের বিষয়) — বহুল প্রচলিত ইংরেজি ফ্রেজ।"
      },
      {
            "id": "e",
            "answer": "of",
            "accepted": [
                  "of",
                  "about"
            ],
            "exp": "কোনো বিষয়ে ভাবা বা চিন্তা করা বোঝাতে ‘think of’ বা ‘think about’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-2',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #2)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Patriotism is a noble virtue. It inspires a man to shed the last drop (a) [___] blood to defend the freedom (b) [___] his country. A man devoid (c) [___] patriotism is no better than a beast. He is dead (d) [___] all feelings of humanity. He never thinks (e) [___] anything noble.",
    blanks: [
      {
            "id": "a",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "‘Last drop of blood’ (রক্তের শেষ বিন্দু) — সম্বন্ধসূচক ‘of’ বসে।"
      },
      {
            "id": "b",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "‘দেশের স্বাধীনতা’ (freedom of his country) — এখানে ‘of’ বসে।"
      },
      {
            "id": "c",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "Appropriate Preposition: ‘Devoid of’ অর্থ বর্জিত বা শূন্য।"
      },
      {
            "id": "d",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Dead to’ অর্থ অনুভূতিহীন বা উদাসীন।"
      },
      {
            "id": "e",
            "answer": "of",
            "accepted": [
                  "of",
                  "about"
            ],
            "exp": "‘Think of / think about’ অর্থ চিন্তা করা।"
      }
]
  },
  {
    id: 'prep-passage-3',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #3)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Success in life depends largely (a) [___] the proper utilization of time. Those who waste their precious time (b) [___] idleness lag behind. We should not brood (c) [___] our past failures. Instead, we must devote ourselves (d) [___] honest labor. This will lead us (e) [___] the peak of success.",
    blanks: [
      {
            "id": "a",
            "answer": "on",
            "accepted": [
                  "on",
                  "upon"
            ],
            "exp": "Appropriate Preposition: ‘Depend on / depend upon’ অর্থ নির্ভর করা।"
      },
      {
            "id": "b",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "অলসতায় সময় কাটানো বোঝাতে ‘waste time in idleness’ বসে।"
      },
      {
            "id": "c",
            "answer": "over",
            "accepted": [
                  "over",
                  "on"
            ],
            "exp": "Appropriate Preposition: ‘Brood over’ অর্থ ব্যর্থতা নিয়ে অনুশোচনা করা।"
      },
      {
            "id": "d",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Devote oneself to’ অর্থ কোনো কাজে আত্মনিয়োগ করা।"
      },
      {
            "id": "e",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "গন্তব্য বা ফলাফলে পৌঁছানো বোঝাতে ‘lead to’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-4',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #4)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Honesty is essential (a) [___] peace and progress in society. An honest man never yields (b) [___] any temptation. He is content (c) [___] what he earns by honest means. He does not hankers (d) [___] worldly riches. He is respected (e) [___] all.",
    blanks: [
      {
            "id": "a",
            "answer": "for",
            "accepted": [
                  "for",
                  "to"
            ],
            "exp": "কোনো উদ্দেশ্যের জন্য আবশ্যক বোঝাতে ‘essential for’ বসে।"
      },
      {
            "id": "b",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Yield to’ অর্থ প্রলোভন বা চাপের কাছে নতি স্বীকার করা।"
      },
      {
            "id": "c",
            "answer": "with",
            "accepted": [
                  "with"
            ],
            "exp": "Appropriate Preposition: ‘Content with’ অর্থ যা আছে তাতে সন্তুষ্ট থাকা।"
      },
      {
            "id": "d",
            "answer": "after",
            "accepted": [
                  "after"
            ],
            "exp": "Appropriate Preposition: ‘Hanker after’ অর্থ কোনো কিছুর পেছনে লালসা করা।"
      },
      {
            "id": "e",
            "answer": "by",
            "accepted": [
                  "by"
            ],
            "exp": "প্যাসিভ ভয়েসে ব্যক্তি দ্বারা শ্রদ্ধা পাওয়া বোঝাতে ‘respected by all’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-5',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #5)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Smoking is injurious (a) [___] human health. It tells (b) [___] our lungs and heart severely. A smoker is prone (c) [___] various fatal diseases like cancer. Even passive smoking is harmful (d) [___] non-smokers. Therefore, one should refrain (e) [___] smoking completely.",
    blanks: [
      {
            "id": "a",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Injurious to’ অর্থ স্বাস্থ্যের জন্য ক্ষতিকর।"
      },
      {
            "id": "b",
            "answer": "upon",
            "accepted": [
                  "upon",
                  "on"
            ],
            "exp": "Appropriate Idiom: ‘Tell upon / tell on’ অর্থ মারাত্মক ক্ষতি করা।"
      },
      {
            "id": "c",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Prone to’ অর্থ কোনো রোগের প্রতি ঝুঁকিপূর্ণ হওয়া।"
      },
      {
            "id": "d",
            "answer": "to",
            "accepted": [
                  "to",
                  "for"
            ],
            "exp": "কারো জন্য ক্ষতিকর বোঝাতে ‘harmful to’ বসে।"
      },
      {
            "id": "e",
            "answer": "from",
            "accepted": [
                  "from"
            ],
            "exp": "Appropriate Preposition: ‘Refrain from’ অর্থ কোনো খারাপ কাজ থেকে বিরত থাকা।"
      }
]
  },
  {
    id: 'prep-passage-6',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #6)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Trees are very useful (a) [___] man. They supply us (b) [___] oxygen and protect us (c) [___] natural calamities. We depend (d) [___] trees for timber, medicine, and food. Hence, we must not cut them down (e) [___] random.",
    blanks: [
      {
            "id": "a",
            "answer": "to",
            "accepted": [
                  "to",
                  "for"
            ],
            "exp": "মানুষের জন্য উপকারী বোঝাতে ‘useful to man’ বসে।"
      },
      {
            "id": "b",
            "answer": "with",
            "accepted": [
                  "with"
            ],
            "exp": "Appropriate Preposition: ‘Supply someone with something’ বসে।"
      },
      {
            "id": "c",
            "answer": "from",
            "accepted": [
                  "from",
                  "against"
            ],
            "exp": "বিপদ থেকে রক্ষা করতে ‘protect from’ বসে।"
      },
      {
            "id": "d",
            "answer": "on",
            "accepted": [
                  "on",
                  "upon"
            ],
            "exp": "নির্ভর করা অর্থে ‘depend on’ বসে।"
      },
      {
            "id": "e",
            "answer": "at",
            "accepted": [
                  "at"
            ],
            "exp": "Phrasal Expression: ‘At random’ অর্থ নির্বিচারে বা এলোমেলোভাবে।"
      }
]
  },
  {
    id: 'prep-passage-7',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #7)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Education is compared (a) [___] light because it dispels darkness. It enables a man to distinguish (b) [___] truth and falsehood. An educated person is tolerant (c) [___] others' opinions. He contributes significantly (d) [___] the welfare of his motherland (e) [___] all times.",
    blanks: [
      {
            "id": "a",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "ভিন্ন জাতীয় বিষয়ের সাথে তুলনা করতে ‘compare to’ বসে।"
      },
      {
            "id": "b",
            "answer": "between",
            "accepted": [
                  "between"
            ],
            "exp": "দুটি বিষয়ের মধ্যে পার্থক্য বোঝাতে ‘distinguish between’ বসে।"
      },
      {
            "id": "c",
            "answer": "of",
            "accepted": [
                  "of",
                  "towards"
            ],
            "exp": "Appropriate Preposition: ‘Tolerant of’ অর্থ পরমতসহিষ্ণু।"
      },
      {
            "id": "d",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Contribute to’ অর্থ কোনো মহৎ কাজে অবদান রাখা।"
      },
      {
            "id": "e",
            "answer": "at",
            "accepted": [
                  "at"
            ],
            "exp": "Phrasal Expression: ‘At all times’ অর্থ সর্বাবস্থায় বা সবসময়।"
      }
]
  },
  {
    id: 'prep-passage-8',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #8)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Student life is the golden season (a) [___] life. A student should be attentive (b) [___] his studies. He should never indulge (c) [___] idle gossip. He must abide (d) [___] the rules of school. This prepares him (e) [___] the struggles of future life.",
    blanks: [
      {
            "id": "a",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "জীবনের শ্রেষ্ঠ ঋতু (season of life) — সম্বন্ধসূচক ‘of’ বসে।"
      },
      {
            "id": "b",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Attentive to’ অর্থ পড়ালেখায় মনোযোগী।"
      },
      {
            "id": "c",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "Appropriate Preposition: ‘Indulge in’ অর্থ কোনো বাজে অভ্যাসে লিপ্ত হওয়া।"
      },
      {
            "id": "d",
            "answer": "by",
            "accepted": [
                  "by"
            ],
            "exp": "Appropriate Preposition: ‘Abide by’ অর্থ কোনো নিয়মকানুন মেনে চলা।"
      },
      {
            "id": "e",
            "answer": "for",
            "accepted": [
                  "for"
            ],
            "exp": "ভবিষ্যতের জন্য প্রস্তুতি বোঝাতে ‘prepare for’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-9',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #9)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "A pious man puts his trust (a) [___] Almighty Allah. He does not boast (b) [___] his wealth or intelligence. He is indifferent (c) [___] worldly praise or blame. He feels pity (d) [___] the poor and shares his bread (e) [___] them.",
    blanks: [
      {
            "id": "a",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "Appropriate Preposition: ‘Trust in’ অর্থ বিশ্বাস বা ভরসা রাখা।"
      },
      {
            "id": "b",
            "answer": "of",
            "accepted": [
                  "of",
                  "about"
            ],
            "exp": "Appropriate Preposition: ‘Boast of’ অর্থ অহংকার করা।"
      },
      {
            "id": "c",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Indifferent to’ অর্থ উদাসীন থাকা।"
      },
      {
            "id": "d",
            "answer": "for",
            "accepted": [
                  "for"
            ],
            "exp": "Appropriate Preposition: ‘Pity for’ অর্থ কারো জন্য দয়া বা সহানুভূতি বোধ করা।"
      },
      {
            "id": "e",
            "answer": "with",
            "accepted": [
                  "with"
            ],
            "exp": "কারো সাথে ভাগ করে নেওয়া বোঝাতে ‘share with’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-10',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #10)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Man has an unquenchable thirst (a) [___] knowledge. He travels (b) [___] distant countries to explore the unknown. He dives deep (c) [___] the ocean and lands (d) [___] the moon. Nothing can deter him (e) [___] achieving his goals.",
    blanks: [
      {
            "id": "a",
            "answer": "for",
            "accepted": [
                  "for"
            ],
            "exp": "Appropriate Preposition: ‘Thirst for’ অর্থ কোনো কিছুর প্রতি তীব্র তৃষ্ণা বা আকাঙ্ক্ষা।"
      },
      {
            "id": "b",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "কোনো গন্তব্যে ভ্রমণ করতে ‘travel to’ বসে।"
      },
      {
            "id": "c",
            "answer": "into",
            "accepted": [
                  "into"
            ],
            "exp": "ভেতরে গতিশীল প্রবেশ বোঝাতে ‘dive into’ বসে।"
      },
      {
            "id": "d",
            "answer": "on",
            "accepted": [
                  "on"
            ],
            "exp": "পৃষ্ঠতলে অবতরণ বোঝাতে ‘land on’ বসে।"
      },
      {
            "id": "e",
            "answer": "from",
            "accepted": [
                  "from"
            ],
            "exp": "Appropriate Preposition: ‘Deter from’ অর্থ বাধা দেওয়া বা নিরুৎসাহিত করা।"
      }
]
  },
  {
    id: 'prep-passage-11',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #11)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Good manners cost nothing but pay (a) [___] a lot. We must show respect (b) [___] our elders and love (c) [___] youngsters. A polite man is popular (d) [___] everyone. He never behaves rudely (e) [___] anyone.",
    blanks: [
      {
            "id": "a",
            "answer": "for",
            "accepted": [
                  "for",
                  "off"
            ],
            "exp": "ভালো ফল দেওয়া অর্থে ‘pay for’ বা ‘pay off’ বসে।"
      },
      {
            "id": "b",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "বড়দের প্রতি শ্রদ্ধা প্রকাশে ‘respect to’ বসে।"
      },
      {
            "id": "c",
            "answer": "for",
            "accepted": [
                  "for",
                  "to"
            ],
            "exp": "ছোটদের প্রতি ভালোবাসা বোঝাতে ‘love for’ বসে।"
      },
      {
            "id": "d",
            "answer": "with",
            "accepted": [
                  "with",
                  "among"
            ],
            "exp": "সবার কাছে জনপ্রিয় বোঝাতে ‘popular with’ বসে।"
      },
      {
            "id": "e",
            "answer": "with",
            "accepted": [
                  "with",
                  "towards",
                  "to"
            ],
            "exp": "কারো সাথে খারাপ আচরণ করতে ‘behave rudely towards / to / with’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-12',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #12)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Early rising is beneficial (a) [___] human body and mind. The fresh air of morning is free (b) [___] pollution. A morning walker enjoys the beauty (c) [___] sunrise. He can start his daily duties (d) [___] proper time and finish them (e) [___] ease.",
    blanks: [
      {
            "id": "a",
            "answer": "to",
            "accepted": [
                  "to",
                  "for"
            ],
            "exp": "Appropriate Preposition: ‘Beneficial to’ অর্থ স্বাস্থ্যের জন্য উপকারী।"
      },
      {
            "id": "b",
            "answer": "from",
            "accepted": [
                  "from",
                  "of"
            ],
            "exp": "দূষণমুক্ত অবস্থা বোঝাতে ‘free from’ বসে।"
      },
      {
            "id": "c",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "সূর্যোদয়ের সৌন্দর্য (beauty of sunrise) — সম্বন্ধসূচক ‘of’ বসে।"
      },
      {
            "id": "d",
            "answer": "in",
            "accepted": [
                  "in",
                  "at"
            ],
            "exp": "সঠিক সময়ে কাজ শুরু করতে ‘in proper time’ বসে।"
      },
      {
            "id": "e",
            "answer": "with",
            "accepted": [
                  "with"
            ],
            "exp": "Phrasal Expression: ‘With ease’ অর্থ অত্যন্ত সহজে বা স্বাচ্ছন্দ্যে।"
      }
]
  },
  {
    id: 'prep-passage-13',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #13)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "We should never laugh (a) [___] the helpless or lame. Instead, we should sympathize (b) [___] their misery. If we are blind (c) [___] their distress, society will suffer. We must take pride (d) [___] serving humanity (e) [___] all our capacity.",
    blanks: [
      {
            "id": "a",
            "answer": "at",
            "accepted": [
                  "at"
            ],
            "exp": "Appropriate Preposition: ‘Laugh at’ অর্থ কাউকে নিয়ে উপহাস করা।"
      },
      {
            "id": "b",
            "answer": "with",
            "accepted": [
                  "with"
            ],
            "exp": "Appropriate Preposition: ‘Sympathize with’ অর্থ কারো প্রতি সহানুভূতি প্রকাশ করা।"
      },
      {
            "id": "c",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Blind to’ অর্থ দেখেও না দেখার ভান করা বা উদাসীন থাকা।"
      },
      {
            "id": "d",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "Appropriate Preposition: ‘Take pride in’ অর্থ গর্ববোধ করা।"
      },
      {
            "id": "e",
            "answer": "with",
            "accepted": [
                  "with",
                  "to"
            ],
            "exp": "‘With all our capacity’ অর্থ সর্বশক্তি দিয়ে।"
      }
]
  },
  {
    id: 'prep-passage-14',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #14)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Books introduce us (a) [___] the realm of knowledge. They are faithful companions (b) [___] solitude. By reading books, we can converse (c) [___] the greatest thinkers of history. We should never part (d) [___] good books (e) [___] any circumstances.",
    blanks: [
      {
            "id": "a",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "পরিচয় করিয়ে দেওয়া অর্থে ‘introduce to’ বসে।"
      },
      {
            "id": "b",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "একাকীত্বের মুহূর্তগুলোতে বোঝাতে ‘in solitude’ বসে।"
      },
      {
            "id": "c",
            "answer": "with",
            "accepted": [
                  "with"
            ],
            "exp": "কারো সাথে আলাপচারিতা প্রকাশ করতে ‘converse with’ বসে।"
      },
      {
            "id": "d",
            "answer": "with",
            "accepted": [
                  "with"
            ],
            "exp": "বস্তু থেকে বিচ্ছিন্ন হওয়া বোঝাতে ‘part with’ বসে।"
      },
      {
            "id": "e",
            "answer": "under",
            "accepted": [
                  "under"
            ],
            "exp": "Phrasal Expression: ‘Under any circumstances’ অর্থ কোনো অবস্থাতেই।"
      }
]
  },
  {
    id: 'prep-passage-15',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #15)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "The brave soldier fought (a) [___] great courage. He laid down his life (b) [___] the defense of the nation. His name is written (c) [___] letters of gold. We are indebted (d) [___] him for our freedom, and we pray (e) [___] his soul.",
    blanks: [
      {
            "id": "a",
            "answer": "with",
            "accepted": [
                  "with"
            ],
            "exp": "সাহসিকতার সাথে যুদ্ধ বোঝাতে ‘fought with great courage’ বসে।"
      },
      {
            "id": "b",
            "answer": "for",
            "accepted": [
                  "for",
                  "in"
            ],
            "exp": "দেশের প্রতিরক্ষার উদ্দেশ্যে বোঝাতে ‘for / in the defense’ বসে।"
      },
      {
            "id": "c",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "স্বর্ণাক্ষরে লেখা অর্থে ‘written in letters of gold’ বসে।"
      },
      {
            "id": "d",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Indebted to’ অর্থ কারো কাছে ঋণী থাকা।"
      },
      {
            "id": "e",
            "answer": "for",
            "accepted": [
                  "for"
            ],
            "exp": "কারো আত্মার জন্য প্রার্থনা করতে ‘pray for his soul’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-16',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #16)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "A greedy man is never satisfied (a) [___] his possessions. He longs (b) [___] more and more riches. He is envious (c) [___] others' prosperity. In the end, his greed leads him (d) [___] total destruction (e) [___] his life.",
    blanks: [
      {
            "id": "a",
            "answer": "with",
            "accepted": [
                  "with"
            ],
            "exp": "Appropriate Preposition: ‘Satisfied with’ অর্থ কোনো কিছু নিয়ে সন্তুষ্ট থাকা।"
      },
      {
            "id": "b",
            "answer": "for",
            "accepted": [
                  "for"
            ],
            "exp": "Appropriate Preposition: ‘Long for’ অর্থ কোনো কিছুর তীব্র আকাঙ্ক্ষা করা।"
      },
      {
            "id": "c",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "Appropriate Preposition: ‘Envious of’ অর্থ কারো সাফল্যে ঈর্ষান্বিত হওয়া।"
      },
      {
            "id": "d",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "ধ্বংসের দিকে নিয়ে যাওয়া অর্থে ‘leads to destruction’ বসে।"
      },
      {
            "id": "e",
            "answer": "in",
            "accepted": [
                  "in",
                  "of"
            ],
            "exp": "জীবনে বোঝাতে ‘in his life’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-17',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #17)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Health is compared (a) [___] gold because without it life is worthless. We must take good care (b) [___] our physical fitness. We should eat food rich (c) [___] vitamins and abstain (d) [___] junk foods (e) [___] all cost.",
    blanks: [
      {
            "id": "a",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "সোনার সাথে তুলনা প্রকাশ করতে ‘compare to’ বসে।"
      },
      {
            "id": "b",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "যত্ন নেওয়া অর্থে ‘take care of’ বসে।"
      },
      {
            "id": "c",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "Appropriate Preposition: ‘Rich in’ অর্থ কোনো পুষ্টি উপাদানে সমৃদ্ধ থাকা।"
      },
      {
            "id": "d",
            "answer": "from",
            "accepted": [
                  "from"
            ],
            "exp": "Appropriate Preposition: ‘Abstain from’ অর্থ ক্ষতিকর জিনিস এড়িয়ে চলা।"
      },
      {
            "id": "e",
            "answer": "at",
            "accepted": [
                  "at"
            ],
            "exp": "Phrasal Expression: ‘At all costs’ অর্থ যেকোনো মূল্যে।"
      }
]
  },
  {
    id: 'prep-passage-18',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #18)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Honesty and sincerity are essential (a) [___] professional success. A sincere worker is dedicated (b) [___] his assigned duties. He takes pleasure (c) [___] completing tasks punctually. His superiors rely (d) [___] his integrity (e) [___] doubt.",
    blanks: [
      {
            "id": "a",
            "answer": "for",
            "accepted": [
                  "for"
            ],
            "exp": "পেশাগত সাফল্যের জন্য প্রয়োজন বোঝাতে ‘essential for’ বসে।"
      },
      {
            "id": "b",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Preposition: ‘Dedicated to’ অর্থ কর্তব্যকর্মে একনিষ্ঠ।"
      },
      {
            "id": "c",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "আনন্দ পাওয়া প্রকাশ করতে ‘take pleasure in’ বসে।"
      },
      {
            "id": "d",
            "answer": "on",
            "accepted": [
                  "on",
                  "upon"
            ],
            "exp": "নির্ভর করা বা ভরসা করা অর্থে ‘rely on’ বসে।"
      },
      {
            "id": "e",
            "answer": "without",
            "accepted": [
                  "without"
            ],
            "exp": "নিঃসন্দেহে বোঝাতে ‘without doubt’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-19',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #19)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "An honest student does not adopt unfair means (a) [___] the examination. He prepares himself (b) [___] hard study. He never copies (c) [___] others' scripts. He is confident (d) [___] his own capabilities and succeeds (e) [___] life.",
    blanks: [
      {
            "id": "a",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "পরীক্ষার ভেতরে বোঝাতে ‘in the examination’ বসে।"
      },
      {
            "id": "b",
            "answer": "by",
            "accepted": [
                  "by",
                  "through"
            ],
            "exp": "কঠোর অধ্যবসায়ের মাধ্যমে প্রস্তুতি বোঝাতে ‘prepare by hard study’ বসে।"
      },
      {
            "id": "c",
            "answer": "from",
            "accepted": [
                  "from"
            ],
            "exp": "অন্যের খাতা থেকে নকল করা অর্থে ‘copy from’ বসে।"
      },
      {
            "id": "d",
            "answer": "of",
            "accepted": [
                  "of",
                  "in"
            ],
            "exp": "Appropriate Preposition: ‘Confident of’ অর্থ নিজের দক্ষতায় আত্মবিশ্বাসী।"
      },
      {
            "id": "e",
            "answer": "in",
            "accepted": [
                  "in"
            ],
            "exp": "জীবনের ক্ষেত্রে সাফল্য বোঝাতে ‘succeed in life’ বসে।"
      }
]
  },
  {
    id: 'prep-passage-20',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #20)',
    clues: ["by","for","of","about","in","to","with","at","on"],
    passage: "Pollution is a grave threat (a) [___] our existence on earth. Harmful smoke released (b) [___] vehicles poisons the air. Wastes are dumped (c) [___] rivers carelessly. We must put an end (d) [___] this malpractice (e) [___] our collective efforts.",
    blanks: [
      {
            "id": "a",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "অস্তিত্বের জন্য হুমকি নির্দেশ করতে ‘threat to’ বসে।"
      },
      {
            "id": "b",
            "answer": "from",
            "accepted": [
                  "from",
                  "by"
            ],
            "exp": "গাড়ি থেকে নির্গত হওয়া বোঝাতে ‘released from’ বসে।"
      },
      {
            "id": "c",
            "answer": "into",
            "accepted": [
                  "into",
                  "in"
            ],
            "exp": "নদীর পানির ভেতরে বর্জ্য ফেলা বোঝাতে ‘dumped into’ বসে।"
      },
      {
            "id": "d",
            "answer": "to",
            "accepted": [
                  "to"
            ],
            "exp": "Appropriate Idiom: ‘Put an end to’ অর্থ কোনো অনিয়ম বন্ধ করা।"
      },
      {
            "id": "e",
            "answer": "through",
            "accepted": [
                  "through",
                  "by"
            ],
            "exp": "সম্মিলিত প্রচেষ্টার মাধ্যমে বোঝাতে ‘through our collective efforts’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-1',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #1)',
    clues: ["equip","see","buy","realize","need","do","read","give","save","become"],
    passage: "A book is like a storehouse of knowledge and source of joy. In books we can (a) [___: see] the society reflected. By (b) [___: read] books we can (c) [___: equip] ourselves for life and (d) [___: realize] our best selves. So reading books is one of the worthiest things that we can (e) [___: do].",
    blanks: [
      {
            "id": "a",
            "answer": "see",
            "accepted": [
                  "see"
            ],
            "exp": "Modal ‘can’ এর পর মূল ভার্বের Base form (V1: see) বসে।"
      },
      {
            "id": "b",
            "answer": "reading",
            "accepted": [
                  "reading"
            ],
            "exp": "Preposition ‘By’ এর পর ভার্বের সাথে ing যুক্ত হয়ে Gerund ‘reading’ হয়।"
      },
      {
            "id": "c",
            "answer": "equip",
            "accepted": [
                  "equip"
            ],
            "exp": "Modal ‘can’ এর অধীনে থাকায় প্রথম রূপ ‘equip’ বহাল থাকবে।"
      },
      {
            "id": "d",
            "answer": "realize",
            "accepted": [
                  "realize",
                  "realise"
            ],
            "exp": "Parallel structure অনুযায়ী ‘and’ এর পর Base form ‘realize’ বসে।"
      },
      {
            "id": "e",
            "answer": "do",
            "accepted": [
                  "do"
            ],
            "exp": "Modal ‘can’ এর পরে মূল ভার্ব ‘do’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-2',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #2)',
    clues: ["be","reach","rain","start","wait"],
    passage: "Yesterday when I (a) [___: reach] home, it (b) [___: rain] heavily. My mother (c) [___: wait] for me anxiously at the veranda. I had no umbrella, so I (d) [___: be] completely drenched. Since then, fever (e) [___: start] bothering me.",
    blanks: [
      {
            "id": "a",
            "answer": "reached",
            "accepted": [
                  "reached"
            ],
            "exp": "অতীতের নির্দিষ্ট সময় ‘Yesterday’ এর কারণে Past Simple ‘reached’ বসে।"
      },
      {
            "id": "b",
            "answer": "was raining",
            "accepted": [
                  "was raining"
            ],
            "exp": "অতীতে একটি কাজ চলাকালে বৃষ্টি হচ্ছিল, তাই Past Continuous ‘was raining’ বসেছে।"
      },
      {
            "id": "c",
            "answer": "was waiting",
            "accepted": [
                  "was waiting"
            ],
            "exp": "অতীতে চলমান অবস্থা বোঝাতে Past Continuous ‘was waiting’ বসেছে।"
      },
      {
            "id": "d",
            "answer": "was",
            "accepted": [
                  "was"
            ],
            "exp": "Subject ‘I’ এবং অতীত প্রেক্ষাপটে be-verb এর Past Form ‘was’ বসে।"
      },
      {
            "id": "e",
            "answer": "has started",
            "accepted": [
                  "has started",
                  "started"
            ],
            "exp": "‘Since then’ থাকলে সাধারণত Present Perfect (has started) বসে।"
      }
]
  },
  {
    id: 'verb-passage-3',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #3)',
    clues: ["stop","change","affect","take","become"],
    passage: "It is high time we (a) [___: stop] cutting trees indiscriminately. If we destroy forests, climate (b) [___: change] drastically. Already unpredictable rains and floods (c) [___: affect] our agriculture. Tree plantation (d) [___: should take] as a national movement before it (e) [___: become] too late.",
    blanks: [
      {
            "id": "a",
            "answer": "stopped",
            "accepted": [
                  "stopped"
            ],
            "exp": "‘It is high time’ এর পর Subject আসলে Past Simple (stopped) বসে।"
      },
      {
            "id": "b",
            "answer": "will change",
            "accepted": [
                  "will change"
            ],
            "exp": "First Conditional: If + Present Simple হলে Main Clause এ Future Simple (will change) হয়।"
      },
      {
            "id": "c",
            "answer": "have affected",
            "accepted": [
                  "have affected",
                  "are affecting"
            ],
            "exp": "‘Already’ থাকলে সাধারণত Present Perfect (have affected) বসে।"
      },
      {
            "id": "d",
            "answer": "should be taken",
            "accepted": [
                  "should be taken"
            ],
            "exp": "Passive Voice: Modal + be + V3 (should be taken) হবে।"
      },
      {
            "id": "e",
            "answer": "becomes",
            "accepted": [
                  "becomes"
            ],
            "exp": "Time clause ‘before’ এর পর Present Simple (becomes) বসে।"
      }
]
  },
  {
    id: 'verb-passage-4',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #4)',
    clues: ["be","watch","play","give","win"],
    passage: "Cricket (a) [___: be] one of the most popular sports today. People of all ages enjoy (b) [___: watch] cricket matches. Millions of spectators gather when our national team (c) [___: play] on home ground. The players always try (d) [___: give] their best to (e) [___: win] victory.",
    blanks: [
      {
            "id": "a",
            "answer": "is",
            "accepted": [
                  "is"
            ],
            "exp": "Singular Subject ‘Cricket’ এর সাথে Present Simple ‘is’ বসে।"
      },
      {
            "id": "b",
            "answer": "watching",
            "accepted": [
                  "watching"
            ],
            "exp": "‘Enjoy’ ভার্বের পরে পরবর্তী ভার্বের সাথে ing (Gerund: watching) বসে।"
      },
      {
            "id": "c",
            "answer": "plays",
            "accepted": [
                  "plays"
            ],
            "exp": "Collective Noun ‘team’ Singular হওয়ায় 3rd Person Singular Verb ‘plays’ বসে।"
      },
      {
            "id": "d",
            "answer": "to give",
            "accepted": [
                  "to give"
            ],
            "exp": "‘Try’ এর পর Infinitive (to give) বসে।"
      },
      {
            "id": "e",
            "answer": "win",
            "accepted": [
                  "win"
            ],
            "exp": "Infinitive ‘to’ এর পর ভার্বের Base form (win) বসে।"
      }
]
  },
  {
    id: 'verb-passage-5',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #5)',
    clues: ["enlighten","receive","eradicate","work","ensure"],
    passage: "Education (a) [___: enlighten] the human mind. A person who (b) [___: receive] proper schooling can distinguish between good and bad. If we educate all our citizens, poverty (c) [___: eradicate] soon. The government (d) [___: work] hard now to (e) [___: ensure] primary education for all.",
    blanks: [
      {
            "id": "a",
            "answer": "enlightens",
            "accepted": [
                  "enlightens"
            ],
            "exp": "Universal Truth এবং 3rd Person Singular Subject এর জন্য Verb এ ‘-s’ যুক্ত হয়ে ‘enlightens’ হয়।"
      },
      {
            "id": "b",
            "answer": "receives",
            "accepted": [
                  "receives"
            ],
            "exp": "Present Simple এ Singular Subject এর জন্য ‘receives’ বসে।"
      },
      {
            "id": "c",
            "answer": "will be eradicated",
            "accepted": [
                  "will be eradicated"
            ],
            "exp": "First Conditional Passive: will + be + V3 (will be eradicated) বসে।"
      },
      {
            "id": "d",
            "answer": "is working",
            "accepted": [
                  "is working"
            ],
            "exp": "‘Now’ নির্দেশক থাকায় Present Continuous (is working) বসেছে।"
      },
      {
            "id": "e",
            "answer": "ensure",
            "accepted": [
                  "ensure"
            ],
            "exp": "Infinitive ‘to’ এর পর Base form ‘ensure’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-6',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #6)',
    clues: ["cross","notice","signal","avert","praise"],
    passage: "While the students (a) [___: cross] the busy road, a speeding truck came. Fortunately, the traffic sergeant (b) [___: notice] it in time. He instantly (c) [___: signal] the truck to stop. Thus a major accident (d) [___: avert] through his timely action. We (e) [___: praise] his vigilance.",
    blanks: [
      {
            "id": "a",
            "answer": "were crossing",
            "accepted": [
                  "were crossing"
            ],
            "exp": "‘While’ এর পর চলমান অতীত বোঝাতে Past Continuous (were crossing) বসে।"
      },
      {
            "id": "b",
            "answer": "noticed",
            "accepted": [
                  "noticed"
            ],
            "exp": "অতীতের নির্দিষ্ট ঘটনা বোঝাতে Past Simple (noticed) বসে।"
      },
      {
            "id": "c",
            "answer": "signaled",
            "accepted": [
                  "signaled",
                  "signalled"
            ],
            "exp": "অতীতের ধারাবাহিকতায় Past Simple (signaled) বসে।"
      },
      {
            "id": "d",
            "answer": "was averted",
            "accepted": [
                  "was averted"
            ],
            "exp": "Passive Voice: দুর্ঘটনা এড়ানো হয়েছিল (was averted)।"
      },
      {
            "id": "e",
            "answer": "praise",
            "accepted": [
                  "praise",
                  "should praise"
            ],
            "exp": "সাধারণ বর্তমান মন্তব্য হিসেবে ‘praise’ বা ‘should praise’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-7',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #7)',
    clues: ["enter","stand","pay","study","pass"],
    passage: "No sooner had the teacher (a) [___: enter] the classroom than the students (b) [___: stand] up. He advised them (c) [___: pay] full attention to studies. He told them that unless they (d) [___: study] hard, they would not (e) [___: pass] the test.",
    blanks: [
      {
            "id": "a",
            "answer": "entered",
            "accepted": [
                  "entered"
            ],
            "exp": "‘No sooner had’ এর পর ভার্বের Past Participle (V3: entered) বসে।"
      },
      {
            "id": "b",
            "answer": "stood",
            "accepted": [
                  "stood"
            ],
            "exp": "‘than’ এর পরের ক্লজে Past Simple (stood) বসে।"
      },
      {
            "id": "c",
            "answer": "to pay",
            "accepted": [
                  "to pay"
            ],
            "exp": "‘Advise someone to do’ কাঠামোয় Infinitive (to pay) বসে।"
      },
      {
            "id": "d",
            "answer": "studied",
            "accepted": [
                  "studied"
            ],
            "exp": "Past Reported Speech ক্লজে ‘unless they studied’ বসে।"
      },
      {
            "id": "e",
            "answer": "pass",
            "accepted": [
                  "pass"
            ],
            "exp": "Modal ‘would not’ এর পর Base form ‘pass’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-8',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #8)',
    clues: ["pollute","use","throw","become","take"],
    passage: "Water (a) [___: pollute] in many ways. Farmers (b) [___: use] chemical fertilizers and insecticides that wash into ponds. Mills and factories (c) [___: throw] toxic waste into rivers daily. If this continues, pure water (d) [___: become] scarce. Effective steps must (e) [___: take] immediately.",
    blanks: [
      {
            "id": "a",
            "answer": "is polluted",
            "accepted": [
                  "is polluted"
            ],
            "exp": "Present Simple Passive: পানি দূষিত হয় (is polluted)।"
      },
      {
            "id": "b",
            "answer": "use",
            "accepted": [
                  "use"
            ],
            "exp": "Plural Subject ‘Farmers’ এর জন্য Present Simple (use) বসে।"
      },
      {
            "id": "c",
            "answer": "throw",
            "accepted": [
                  "throw"
            ],
            "exp": "অভ্যাসগত বর্তমান প্রকাশে ‘throw’ বসে।"
      },
      {
            "id": "d",
            "answer": "will become",
            "accepted": [
                  "will become"
            ],
            "exp": "Conditional Clause এর ফলাফলে Future Simple (will become) বসে।"
      },
      {
            "id": "e",
            "answer": "be taken",
            "accepted": [
                  "be taken"
            ],
            "exp": "Modal Passive: must + be + V3 (must be taken) বসে।"
      }
]
  },
  {
    id: 'verb-passage-9',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #9)',
    clues: ["speak","help","learn","open","secure"],
    passage: "English (a) [___: speak] all over the world as a global language. It (b) [___: help] people of different nations communicate. Many youths in our country (c) [___: learn] spoken English at language centers nowadays. Mastering this skill (d) [___: open] up bright career opportunities for (e) [___: secure] jobs.",
    blanks: [
      {
            "id": "a",
            "answer": "is spoken",
            "accepted": [
                  "is spoken"
            ],
            "exp": "Present Simple Passive: ইংরেজি ভাষা বলা হয় (is spoken)।"
      },
      {
            "id": "b",
            "answer": "helps",
            "accepted": [
                  "helps"
            ],
            "exp": "Singular Subject ‘It’ এর পর 3rd person singular ‘helps’ বসে।"
      },
      {
            "id": "c",
            "answer": "are learning",
            "accepted": [
                  "are learning"
            ],
            "exp": "‘Nowadays’ নির্দেশক থাকায় Present Continuous (are learning) বসে।"
      },
      {
            "id": "d",
            "answer": "opens",
            "accepted": [
                  "opens"
            ],
            "exp": "Gerund Subject ‘Mastering this skill’ Singular হওয়ায় ‘opens’ বসে।"
      },
      {
            "id": "e",
            "answer": "securing",
            "accepted": [
                  "securing"
            ],
            "exp": "Preposition ‘for’ এর পর ভার্বের সাথে ing (securing) বসে।"
      }
]
  },
  {
    id: 'verb-passage-10',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #10)',
    clues: ["die","save","mourn","build","avoid"],
    passage: "The patient (a) [___: die] before the doctor came. If the doctor had arrived on time, the man (b) [___: save]. His relatives (c) [___: mourn] the loss ever since. We should (d) [___: build] hospital facilities in villages to (e) [___: avoid] such tragedies.",
    blanks: [
      {
            "id": "a",
            "answer": "had died",
            "accepted": [
                  "had died"
            ],
            "exp": "‘Before’ এর পূর্বের অতীতে সম্পন্ন কাজের জন্য Past Perfect (had died) বসে।"
      },
      {
            "id": "b",
            "answer": "would have been saved",
            "accepted": [
                  "would have been saved"
            ],
            "exp": "Third Conditional Passive: would + have + been + V3 বসে।"
      },
      {
            "id": "c",
            "answer": "have been mourning",
            "accepted": [
                  "have been mourning",
                  "have mourned"
            ],
            "exp": "‘Ever since’ নির্দেশক থাকায় Present Perfect Continuous বসে।"
      },
      {
            "id": "d",
            "answer": "build",
            "accepted": [
                  "build"
            ],
            "exp": "Modal ‘should’ এর পর Base form ‘build’ বসে।"
      },
      {
            "id": "e",
            "answer": "avoid",
            "accepted": [
                  "avoid"
            ],
            "exp": "Infinitive ‘to’ এর পর Base form ‘avoid’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-11',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #11)',
    clues: ["hinder","practice","face","enact","root"],
    passage: "Corruption is a great obstacle that (a) [___: hinder] our national progress. Bribery (b) [___: practice] by unscrupulous people in various sectors. Honest officers often (c) [___: face] discrimination. Stringent laws (d) [___: must enact] to (e) [___: root] out corruption.",
    blanks: [
      {
            "id": "a",
            "answer": "hinders",
            "accepted": [
                  "hinders"
            ],
            "exp": "Singular Antecedent ‘obstacle’ এর জন্য Verb ‘hinders’ বসে।"
      },
      {
            "id": "b",
            "answer": "is practiced",
            "accepted": [
                  "is practiced",
                  "is practised"
            ],
            "exp": "Present Simple Passive: ঘুষ লেনদেন চর্চা করা হয় (is practiced)।"
      },
      {
            "id": "c",
            "answer": "face",
            "accepted": [
                  "face"
            ],
            "exp": "Plural Subject ‘officers’ এর জন্য Present Simple ‘face’ বসে।"
      },
      {
            "id": "d",
            "answer": "must be enacted",
            "accepted": [
                  "must be enacted"
            ],
            "exp": "Modal Passive: must + be + V3 (must be enacted) বসে।"
      },
      {
            "id": "e",
            "answer": "root",
            "accepted": [
                  "root"
            ],
            "exp": "Infinitive ‘to root out’ এ Base form ‘root’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-12',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #12)',
    clues: ["be","travel","run","enjoy","look"],
    passage: "A journey by train (a) [___: be] always pleasant and thrilling. Last week I (b) [___: travel] from Dhaka to Chittagong by train. The train (c) [___: run] smoothly through green fields. I (d) [___: enjoy] the scenic beauty of countryside while sitting (e) [___: look] through the window.",
    blanks: [
      {
            "id": "a",
            "answer": "is",
            "accepted": [
                  "is"
            ],
            "exp": "সাধারণ সত্য প্রকাশ করতে ‘is’ বসে।"
      },
      {
            "id": "b",
            "answer": "travelled",
            "accepted": [
                  "travelled",
                  "traveled"
            ],
            "exp": "‘Last week’ অতীত সময় নির্দেশ করায় Past Simple ‘travelled’ বসে।"
      },
      {
            "id": "c",
            "answer": "was running",
            "accepted": [
                  "was running",
                  "ran"
            ],
            "exp": "অতীতের দৃশ্যমান চলা নির্দেশ করতে Past Continuous ‘was running’ বসে।"
      },
      {
            "id": "d",
            "answer": "enjoyed",
            "accepted": [
                  "enjoyed"
            ],
            "exp": "অতীত ঘটনার জন্য Past Simple ‘enjoyed’ বসে।"
      },
      {
            "id": "e",
            "answer": "looking",
            "accepted": [
                  "looking"
            ],
            "exp": "Participle: জানালা দিয়ে তাকিয়ে থাকা অবস্থায় (looking)।"
      }
]
  },
  {
    id: 'verb-passage-13',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #13)',
    clues: ["reward","fear","respect","suffer","gain"],
    passage: "Honesty always (a) [___: reward] in the end. An honest man (b) [___: fear] nobody on earth. Even his enemies (c) [___: respect] him for his integrity. Though he (d) [___: suffer] temporarily, he (e) [___: gain] ultimate triumph.",
    blanks: [
      {
            "id": "a",
            "answer": "is rewarded",
            "accepted": [
                  "is rewarded"
            ],
            "exp": "Present Simple Passive: সততা পুরস্কৃত হয় (is rewarded)।"
      },
      {
            "id": "b",
            "answer": "fears",
            "accepted": [
                  "fears"
            ],
            "exp": "3rd Person Singular Subject এর জন্য Verb এ ‘-s’ যুক্ত হয়ে ‘fears’ হয়।"
      },
      {
            "id": "c",
            "answer": "respect",
            "accepted": [
                  "respect"
            ],
            "exp": "Plural Subject ‘enemies’ এর জন্য ‘respect’ বসে।"
      },
      {
            "id": "d",
            "answer": "suffers",
            "accepted": [
                  "suffers"
            ],
            "exp": "Present Simple এ ‘suffers’ বসে।"
      },
      {
            "id": "e",
            "answer": "gains",
            "accepted": [
                  "gains"
            ],
            "exp": "চূড়ান্ত বিজয় লাভ করে অর্থে ‘gains’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-14',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #14)',
    clues: ["be","discover","suffer","save","support"],
    passage: "I wish I (a) [___: be] a scientist. If I had the chance, I (b) [___: discover] new cures for dangerous diseases. Today millions of patients (c) [___: suffer] around the globe. Dedicated research (d) [___: can save] countless lives if scientists (e) [___: support] adequately.",
    blanks: [
      {
            "id": "a",
            "answer": "were",
            "accepted": [
                  "were"
            ],
            "exp": "‘Wish’ এর পর অবাস্তব কল্পনা প্রকাশে be-verb সর্বদা ‘were’ হয়।"
      },
      {
            "id": "b",
            "answer": "would discover",
            "accepted": [
                  "would discover"
            ],
            "exp": "Second Conditional: would + V1 (would discover) বসে।"
      },
      {
            "id": "c",
            "answer": "are suffering",
            "accepted": [
                  "are suffering"
            ],
            "exp": "‘Today’ বর্তমান চলমান অবস্থা নির্দেশ করায় Present Continuous বসে।"
      },
      {
            "id": "d",
            "answer": "can save",
            "accepted": [
                  "can save"
            ],
            "exp": "Modal ‘can save’ বসে।"
      },
      {
            "id": "e",
            "answer": "are supported",
            "accepted": [
                  "are supported"
            ],
            "exp": "Passive Voice: বিজ্ঞানীরা যদি সহায়তা পান (are supported)।"
      }
]
  },
  {
    id: 'verb-passage-15',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #15)',
    clues: ["deliver","inspire","electrify","recognize","remember"],
    passage: "The historic speech of 7th March 1971 (a) [___: deliver] by Bangabandhu Sheikh Mujibur Rahman. It (b) [___: inspire] seven crore Bengalis to take up arms. His thunderous voice (c) [___: electrify] the entire nation. Today UNESCO (d) [___: recognize] it as part of world documentary heritage to (e) [___: remember] forever.",
    blanks: [
      {
            "id": "a",
            "answer": "was delivered",
            "accepted": [
                  "was delivered"
            ],
            "exp": "Past Simple Passive: ভাষণটি প্রদত্ত হয়েছিল (was delivered)।"
      },
      {
            "id": "b",
            "answer": "inspired",
            "accepted": [
                  "inspired"
            ],
            "exp": "অতীতের ঐতিহাসিক ঘটনায় Past Simple ‘inspired’ বসে।"
      },
      {
            "id": "c",
            "answer": "electrified",
            "accepted": [
                  "electrified"
            ],
            "exp": "Past Simple: জাতিকে উদ্বেলিত করেছিল (electrified)।"
      },
      {
            "id": "d",
            "answer": "has recognized",
            "accepted": [
                  "has recognized",
                  "recognized"
            ],
            "exp": "সাম্প্রতিক স্বীকৃতি হিসেবে Present Perfect ‘has recognized’ বসে।"
      },
      {
            "id": "e",
            "answer": "be remembered",
            "accepted": [
                  "be remembered",
                  "remember"
            ],
            "exp": "Passive Infinitive: চিরস্মরণীয় হয়ে থাকতে (be remembered)।"
      }
]
  },
  {
    id: 'verb-passage-16',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #16)',
    clues: ["wait","repent","study","know","recall"],
    passage: "Time (a) [___: wait] for no man. Those who waste time (b) [___: repent] in old age. A student who (c) [___: study] regularly never fails in examinations. He (d) [___: know] that time once lost (e) [___: can never recall].",
    blanks: [
      {
            "id": "a",
            "answer": "waits",
            "accepted": [
                  "waits"
            ],
            "exp": "প্রবাদ বাক্যে 3rd Person Singular Verb ‘waits’ বসে।"
      },
      {
            "id": "b",
            "answer": "repent",
            "accepted": [
                  "repent"
            ],
            "exp": "Plural Subject ‘Those’ এর জন্য ‘repent’ বসে।"
      },
      {
            "id": "c",
            "answer": "studies",
            "accepted": [
                  "studies"
            ],
            "exp": "Singular Subject ‘student’ এর জন্য ‘studies’ বসে।"
      },
      {
            "id": "d",
            "answer": "knows",
            "accepted": [
                  "knows"
            ],
            "exp": "Singular Subject ‘He’ এর জন্য ‘knows’ বসে।"
      },
      {
            "id": "e",
            "answer": "can never be recalled",
            "accepted": [
                  "can never be recalled"
            ],
            "exp": "Modal Passive: can + be + V3 (can never be recalled) বসে।"
      }
]
  },
  {
    id: 'verb-passage-17',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #17)',
    clues: ["construct","inaugurate","connect","reduce","grow"],
    passage: "The Padma Bridge (a) [___: construct] with our own financial resources. It (b) [___: inaugurate] in June 2022. It (c) [___: connect] 21 southern districts with the capital. Travelling time (d) [___: reduce] drastically and the national economy (e) [___: grow] faster.",
    blanks: [
      {
            "id": "a",
            "answer": "was constructed",
            "accepted": [
                  "was constructed"
            ],
            "exp": "Past Simple Passive: সেতুটি নির্মিত হয়েছিল (was constructed)।"
      },
      {
            "id": "b",
            "answer": "was inaugurated",
            "accepted": [
                  "was inaugurated"
            ],
            "exp": "Past Simple Passive: উদ্বোধন করা হয়েছিল (was inaugurated)।"
      },
      {
            "id": "c",
            "answer": "has connected",
            "accepted": [
                  "has connected",
                  "connects"
            ],
            "exp": "বর্তমান ফলপ্রসূ সংযোগ হিসেবে ‘has connected’ বা ‘connects’ বসে।"
      },
      {
            "id": "d",
            "answer": "has reduced",
            "accepted": [
                  "has reduced",
                  "has been reduced"
            ],
            "exp": "ভ্রমণ সময় হ্রাস পেয়েছে বোঝাতে ‘has reduced’ বসে।"
      },
      {
            "id": "e",
            "answer": "is growing",
            "accepted": [
                  "is growing",
                  "will grow"
            ],
            "exp": "অর্থনীতি দ্রুত বৃদ্ধি পাচ্ছে প্রকাশ করতে Present Continuous ‘is growing’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-18',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #18)',
    clues: ["ring","provide","write","write","finish"],
    passage: "When the bell (a) [___: ring], the examination hall became quiet. Every examinee (b) [___: provide] with question papers and answer sheets. The invigilator asked everyone (c) [___: write] their roll numbers carefully. The students (d) [___: write] diligently until the exam (e) [___: finish].",
    blanks: [
      {
            "id": "a",
            "answer": "rang",
            "accepted": [
                  "rang"
            ],
            "exp": "অতীত প্রেক্ষাপটে ‘When’ ক্লজে Past Simple ‘rang’ বসে।"
      },
      {
            "id": "b",
            "answer": "was provided",
            "accepted": [
                  "was provided"
            ],
            "exp": "Passive: ‘Every examinee’ Singular হওয়ায় ‘was provided’ বসে।"
      },
      {
            "id": "c",
            "answer": "to write",
            "accepted": [
                  "to write"
            ],
            "exp": "‘Ask someone to do’ কাঠামোয় Infinitive (to write) বসে।"
      },
      {
            "id": "d",
            "answer": "were writing",
            "accepted": [
                  "were writing",
                  "wrote"
            ],
            "exp": "অতীতে পরীক্ষার সময় ধরে লেখা চলছিল তাই ‘were writing’ বসে।"
      },
      {
            "id": "e",
            "answer": "finished",
            "accepted": [
                  "finished",
                  "was finished"
            ],
            "exp": "Time clause এ Past Simple ‘finished’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-19',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #19)',
    clues: ["become","use","cause","avoid","protect"],
    passage: "Mobile phone (a) [___: become] an indispensable part of daily life. It (b) [___: use] for both communication and academic learning. However, excessive use of mobile phones (c) [___: cause] serious eye problems. Students (d) [___: should avoid] unnecessary screen time to (e) [___: protect] their eyesight.",
    blanks: [
      {
            "id": "a",
            "answer": "has become",
            "accepted": [
                  "has become"
            ],
            "exp": "বর্তমান কালের রূপান্তর প্রকাশে Present Perfect ‘has become’ বসে।"
      },
      {
            "id": "b",
            "answer": "is used",
            "accepted": [
                  "is used"
            ],
            "exp": "Present Simple Passive: এটি ব্যবহৃত হয় (is used)।"
      },
      {
            "id": "c",
            "answer": "causes",
            "accepted": [
                  "causes"
            ],
            "exp": "Singular Subject ‘excessive use’ এর জন্য ‘causes’ বসে।"
      },
      {
            "id": "d",
            "answer": "should avoid",
            "accepted": [
                  "should avoid"
            ],
            "exp": "উচিত অর্থে Modal ‘should avoid’ বসে।"
      },
      {
            "id": "e",
            "answer": "protect",
            "accepted": [
                  "protect"
            ],
            "exp": "Infinitive ‘to’ এর পর Base form ‘protect’ বসে।"
      }
]
  },
  {
    id: 'verb-passage-20',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'ভার্বের সঠিক রূপ (Right Forms of Verbs) দিয়ে শূন্যস্থান পূরণ করুন (প্যাসেজ #20)',
    clues: ["mean","wait","overcome","achieve","cultivate"],
    passage: "Self-reliance (a) [___: mean] depending on one's own abilities. A self-reliant man (b) [___: not wait] for others' help. He (c) [___: overcome] obstacles by working persistently. Great nations of the world (d) [___: achieve] prosperity by (e) [___: cultivate] self-reliance.",
    blanks: [
      {
            "id": "a",
            "answer": "means",
            "accepted": [
                  "means"
            ],
            "exp": "Singular Subject ‘Self-reliance’ এর জন্য 3rd person singular ‘means’ বসে।"
      },
      {
            "id": "b",
            "answer": "does not wait",
            "accepted": [
                  "does not wait"
            ],
            "exp": "Negative Present Simple: does + not + wait বসে।"
      },
      {
            "id": "c",
            "answer": "overcomes",
            "accepted": [
                  "overcomes"
            ],
            "exp": "Singular Subject ‘He’ এর জন্য ‘overcomes’ বসে।"
      },
      {
            "id": "d",
            "answer": "have achieved",
            "accepted": [
                  "have achieved"
            ],
            "exp": "ইতিহাসে অর্জিত সমৃদ্ধি বোঝাতে ‘have achieved’ বসে।"
      },
      {
            "id": "e",
            "answer": "cultivating",
            "accepted": [
                  "cultivating"
            ],
            "exp": "Preposition ‘by’ এর পর Gerund ‘cultivating’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-1',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #1)',
    clues: ["brother","Buddha","believe","concept","true"],
    passage: "To maintain peace in this world, we need universal (a) [___: brother]. In this world there are different religions like Islam, Christianity, (b) [___: Buddha] etc. Friendship among the (c) [___: believe] of different religions can play an important role to drive away distrust and (d) [___: concept] about different religions. We should prefer humanity to religious difference. A person who is (e) [___: true] aware of his own religion can never dislike the followers of other religions.",
    blanks: [
      {
            "id": "a",
            "answer": "brotherhood",
            "accepted": [
                  "brotherhood"
            ],
            "exp": "Adjective ‘universal’ এর পর Abstract Noun ‘brotherhood’ (ভ্রাতৃত্ব) বসে।"
      },
      {
            "id": "b",
            "answer": "Buddhism",
            "accepted": [
                  "Buddhism",
                  "buddhism"
            ],
            "exp": "ধর্মের নাম হিসেবে ‘Buddha’ এর সাথে ‘-ism’ যুক্ত হয়ে ‘Buddhism’ গঠিত হয়।"
      },
      {
            "id": "c",
            "answer": "believers",
            "accepted": [
                  "believers",
                  "believer"
            ],
            "exp": "Plural Noun: বিশ্বাসীদের বোঝাতে ‘believe’ এর সাথে ‘-ers’ যুক্ত হয়ে ‘believers’ হয়।"
      },
      {
            "id": "d",
            "answer": "misconceptions",
            "accepted": [
                  "misconceptions",
                  "misconception"
            ],
            "exp": "ভুল ধারণা বোঝাতে ‘mis-’ প্রিফিক্স এবং ‘-tion’ সাফিক্স যুক্ত হয়ে ‘misconceptions’ হয়।"
      },
      {
            "id": "e",
            "answer": "truly",
            "accepted": [
                  "truly"
            ],
            "exp": "Adjective ‘aware’ কে Modify করতে Adverb হিসেবে ‘truly’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-2',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #2)',
    clues: ["harm","curable","conscious","pleasant","legal"],
    passage: "Smoking is (a) [___: harm] to human health. It causes (b) [___: curable] diseases like lung cancer. A smoker is (c) [___: conscious] of the dangerous consequences. Even non-smokers face (d) [___: pleasant] situations in public places. Therefore, smoking should be (e) [___: legal] in open spaces.",
    blanks: [
      {
            "id": "a",
            "answer": "harmful",
            "accepted": [
                  "harmful"
            ],
            "exp": "‘harm’ এর সাথে ‘-ful’ যুক্ত হয়ে Adjective ‘harmful’ (ক্ষতিকর) গঠিত হয়।"
      },
      {
            "id": "b",
            "answer": "incurable",
            "accepted": [
                  "incurable"
            ],
            "exp": "দুরারোগ্য বোঝাতে প্রিফিক্স ‘in-’ যুক্ত হয়ে ‘incurable’ হয়।"
      },
      {
            "id": "c",
            "answer": "unconscious",
            "accepted": [
                  "unconscious"
            ],
            "exp": "অসচেতন বোঝাতে নেতিবাচক প্রিফিক্স ‘un-’ যুক্ত হয়ে ‘unconscious’ হয়।"
      },
      {
            "id": "d",
            "answer": "unpleasant",
            "accepted": [
                  "unpleasant"
            ],
            "exp": "অপ্রীতিকর অবস্থা প্রকাশ করতে ‘unpleasant’ গঠিত হয়।"
      },
      {
            "id": "e",
            "answer": "illegal",
            "accepted": [
                  "illegal"
            ],
            "exp": "অবৈধ বোঝাতে প্রিফিক্স ‘il-’ যুক্ত হয়ে ‘illegal’ হয়।"
      }
]
  },
  {
    id: 'suffix-passage-3',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #3)',
    clues: ["use","degrade","forestation","drive","balance"],
    passage: "Trees are of great (a) [___: use] to mankind. They protect our environment from (b) [___: degrade]. (c) [___: forestation] leads to severe drought and desertification. We must launch tree plantation (d) [___: drive] to maintain ecological (e) [___: balance].",
    blanks: [
      {
            "id": "a",
            "answer": "usefulness",
            "accepted": [
                  "usefulness",
                  "utility"
            ],
            "exp": "‘of great’ এর পর Abstract Noun ‘usefulness’ (উপকারিতা) বসে।"
      },
      {
            "id": "b",
            "answer": "degradation",
            "accepted": [
                  "degradation"
            ],
            "exp": "Preposition ‘from’ এর পর Noun ‘degradation’ (অবনতি) বসে।"
      },
      {
            "id": "c",
            "answer": "Deforestation",
            "accepted": [
                  "deforestation",
                  "Deforestation"
            ],
            "exp": "বন উজাড় বোঝাতে ‘de-’ প্রিফিক্স যুক্ত হয়ে ‘Deforestation’ গঠিত হয়।"
      },
      {
            "id": "d",
            "answer": "drives",
            "accepted": [
                  "drives",
                  "campaign"
            ],
            "exp": "বৃক্ষরোপণ কর্মসূচি বোঝাতে ‘tree plantation drives’ বসে।"
      },
      {
            "id": "e",
            "answer": "balance",
            "accepted": [
                  "balance"
            ],
            "exp": "Noun ‘balance’ (ভারসাম্য) বসে।"
      }
]
  },
  {
    id: 'suffix-passage-4',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #4)',
    clues: ["character","peace","hate","honest","ultimate"],
    passage: "Honesty is a noble (a) [___: character] of a human being. An honest person leads a (b) [___: peace] life. He rejects ill-gotten wealth with (c) [___: hate]. On the other hand, a (d) [___: honest] man is punished (e) [___: ultimate].",
    blanks: [
      {
            "id": "a",
            "answer": "characteristic",
            "accepted": [
                  "characteristic",
                  "trait"
            ],
            "exp": "বৈশিষ্ট্য অর্থে Noun ‘characteristic’ বসে।"
      },
      {
            "id": "b",
            "answer": "peaceful",
            "accepted": [
                  "peaceful"
            ],
            "exp": "Noun ‘life’ কে বর্ণনা করতে Adjective ‘peaceful’ বসে।"
      },
      {
            "id": "c",
            "answer": "hatred",
            "accepted": [
                  "hatred"
            ],
            "exp": "Preposition ‘with’ এর পর Abstract Noun ‘hatred’ (ঘৃণা) বসে।"
      },
      {
            "id": "d",
            "answer": "dishonest",
            "accepted": [
                  "dishonest"
            ],
            "exp": "অসৎ ব্যক্তি বোঝাতে বিপরীতার্থক প্রিফিক্স ‘dis-’ যুক্ত হয়ে ‘dishonest’ হয়।"
      },
      {
            "id": "e",
            "answer": "ultimately",
            "accepted": [
                  "ultimately"
            ],
            "exp": "ভার্ব ‘punished’ কে Modify করতে Adverb ‘ultimately’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-5',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #5)',
    clues: ["nature","please","forget","regular","charm"],
    passage: "Bangladesh is blessed with (a) [___: nature] beauty. The rivers, hills, and greenery give us great (b) [___: please]. The scenic beauty of Cox's Bazar is (c) [___: forget]. Many foreign tourists visit it (d) [___: regular] to enjoy the (e) [___: charm] sunset.",
    blanks: [
      {
            "id": "a",
            "answer": "natural",
            "accepted": [
                  "natural"
            ],
            "exp": "Noun ‘beauty’ এর পূর্বে Adjective হিসেবে ‘natural’ বসে।"
      },
      {
            "id": "b",
            "answer": "pleasure",
            "accepted": [
                  "pleasure"
            ],
            "exp": "‘great’ এর পর Noun ‘pleasure’ (আনন্দ) বসে।"
      },
      {
            "id": "c",
            "answer": "unforgettable",
            "accepted": [
                  "unforgettable"
            ],
            "exp": "অবিস্মরণীয় বোঝাতে প্রিফিক্স ‘un-’ এবং সাফিক্স ‘-able’ যুক্ত হয়ে ‘unforgettable’ হয়।"
      },
      {
            "id": "d",
            "answer": "regularly",
            "accepted": [
                  "regularly"
            ],
            "exp": "নিয়মিতভাবে বোঝাতে Adverb ‘regularly’ বসে।"
      },
      {
            "id": "e",
            "answer": "charming",
            "accepted": [
                  "charming"
            ],
            "exp": "Noun ‘sunset’ এর পূর্বে Adjective ‘charming’ (মুগ্ধকর) বসে।"
      }
]
  },
  {
    id: 'suffix-passage-6',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #6)',
    clues: ["adulterate","poison","danger","punish","human"],
    passage: "Food (a) [___: adulterate] is a heinous crime in our society. Greedy businessmen mix (b) [___: poison] chemicals with food items. Consuming such food is (c) [___: danger] for health. The government must take (d) [___: punish] measures to stop this (e) [___: human] practice.",
    blanks: [
      {
            "id": "a",
            "answer": "adulteration",
            "accepted": [
                  "adulteration"
            ],
            "exp": "Noun গঠন করতে ‘-tion’ যুক্ত হয়ে ‘adulteration’ (ভেজাল) হয়।"
      },
      {
            "id": "b",
            "answer": "poisonous",
            "accepted": [
                  "poisonous"
            ],
            "exp": "Noun ‘chemicals’ এর পূর্বে Adjective হিসেবে ‘poisonous’ (বিষাক্ত) বসে।"
      },
      {
            "id": "c",
            "answer": "dangerous",
            "accepted": [
                  "dangerous"
            ],
            "exp": "‘is’ এর পর Adjective ‘dangerous’ (বিপজ্জনক) বসে।"
      },
      {
            "id": "d",
            "answer": "punitive",
            "accepted": [
                  "punitive"
            ],
            "exp": "শাস্তিমূলক ব্যবস্থা বোঝাতে Adjective ‘punitive’ বসে।"
      },
      {
            "id": "e",
            "answer": "inhuman",
            "accepted": [
                  "inhuman"
            ],
            "exp": "অমানবিক বোঝাতে নেতিবাচক প্রিফিক্স ‘in-’ যুক্ত হয়ে ‘inhuman’ হয়।"
      }
]
  },
  {
    id: 'suffix-passage-7',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #7)',
    clues: ["prepare","fruit","sincere","regular","fail"],
    passage: "Success in examination depends on systematic (a) [___: prepare]. Cramming without understanding is (b) [___: fruit]. A student must show (c) [___: sincere] in attending classes. (d) [___: regular] attendance will lead to (e) [___: fail].",
    blanks: [
      {
            "id": "a",
            "answer": "preparation",
            "accepted": [
                  "preparation"
            ],
            "exp": "Adjective ‘systematic’ এর পর Noun ‘preparation’ (প্রস্তুতি) বসে।"
      },
      {
            "id": "b",
            "answer": "fruitless",
            "accepted": [
                  "fruitless"
            ],
            "exp": "ফলহীন বোঝাতে নেতিবাচক সাফিক্স ‘-less’ যুক্ত হয়ে ‘fruitless’ হয়।"
      },
      {
            "id": "c",
            "answer": "sincerity",
            "accepted": [
                  "sincerity"
            ],
            "exp": "Abstract Noun ‘sincerity’ (আন্তরিকতা) বসে।"
      },
      {
            "id": "d",
            "answer": "Irregular",
            "accepted": [
                  "irregular",
                  "Irregular"
            ],
            "exp": "অনিয়মিত উপস্থিতি বোঝাতে প্রিফিক্স ‘ir-’ যুক্ত হয়ে ‘Irregular’ হয়।"
      },
      {
            "id": "e",
            "answer": "failure",
            "accepted": [
                  "failure"
            ],
            "exp": "Preposition ‘to’ এর পর Noun ‘failure’ (ব্যর্থতা) বসে।"
      }
]
  },
  {
    id: 'suffix-passage-8',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #8)',
    clues: ["affect","self","corrupt","treason","hate"],
    passage: "Patriotism is a deep (a) [___: affect] for one's motherland. A patriot acts (b) [___: self] for the welfare of his nation. He hates (c) [___: corrupt] and injustice. On the contrary, a traitor behaves (d) [___: treason] and earns public (e) [___: hate].",
    blanks: [
      {
            "id": "a",
            "answer": "affection",
            "accepted": [
                  "affection"
            ],
            "exp": "‘deep’ এর পর Abstract Noun ‘affection’ (স্নেহ/মমতা) বসে।"
      },
      {
            "id": "b",
            "answer": "selflessly",
            "accepted": [
                  "selflessly"
            ],
            "exp": "নিঃস্বার্থভাবে বোঝাতে Adverb ‘selflessly’ গঠিত হয়।"
      },
      {
            "id": "c",
            "answer": "corruption",
            "accepted": [
                  "corruption"
            ],
            "exp": "দুর্নীতি বোঝাতে Noun ‘corruption’ বসে।"
      },
      {
            "id": "d",
            "answer": "treasonously",
            "accepted": [
                  "treasonously"
            ],
            "exp": "বিশ্বাসঘাতকতার সাথে বোঝাতে Adverb ‘treasonously’ বসে।"
      },
      {
            "id": "e",
            "answer": "hatred",
            "accepted": [
                  "hatred"
            ],
            "exp": "ঘৃণা বোঝাতে Noun ‘hatred’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-9',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #9)',
    clues: ["help","suffice","free","hurry","punctuate"],
    passage: "Early rising is (a) [___: help] for good health. An early riser gets (b) [___: suffice] time to do his tasks. He can inhale fresh morning air (c) [___: free]. On the other hand, a late riser is always in (d) [___: hurry] and fails to maintain (e) [___: punctuate].",
    blanks: [
      {
            "id": "a",
            "answer": "helpful",
            "accepted": [
                  "helpful"
            ],
            "exp": "উপকারী বোঝাতে Adjective ‘helpful’ বসে।"
      },
      {
            "id": "b",
            "answer": "sufficient",
            "accepted": [
                  "sufficient"
            ],
            "exp": "পর্যাপ্ত বোঝাতে Adjective ‘sufficient’ বসে।"
      },
      {
            "id": "c",
            "answer": "freely",
            "accepted": [
                  "freely"
            ],
            "exp": "মুক্তভাবে শ্বাস নিতে Adverb ‘freely’ বসে।"
      },
      {
            "id": "d",
            "answer": "hurriedly",
            "accepted": [
                  "hurriedly",
                  "a hurry"
            ],
            "exp": "ব্যস্ততার সাথে বোঝাতে ‘hurriedly’ বা ‘in a hurry’ বসে।"
      },
      {
            "id": "e",
            "answer": "punctuality",
            "accepted": [
                  "punctuality"
            ],
            "exp": "সময়নিষ্ঠতা বোঝাতে Noun ‘punctuality’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-10',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #10)',
    clues: ["develop","narrow","power","prosper","possible"],
    passage: "Education brings about mental (a) [___: develop]. It broadens our outlook and eliminates (b) [___: narrow]. An uneducated person remains (c) [___: power] in the modern world. Without education, national (d) [___: prosper] is totally (e) [___: possible].",
    blanks: [
      {
            "id": "a",
            "answer": "development",
            "accepted": [
                  "development"
            ],
            "exp": "মানসিক বিকাশ বোঝাতে Noun ‘development’ বসে।"
      },
      {
            "id": "b",
            "answer": "narrowness",
            "accepted": [
                  "narrowness"
            ],
            "exp": "সংকীর্ণতা বোঝাতে Abstract Noun ‘narrowness’ বসে।"
      },
      {
            "id": "c",
            "answer": "powerless",
            "accepted": [
                  "powerless"
            ],
            "exp": "ক্ষমতাহীন বোঝাতে সাফিক্স ‘-less’ যুক্ত হয়ে ‘powerless’ হয়।"
      },
      {
            "id": "d",
            "answer": "prosperity",
            "accepted": [
                  "prosperity"
            ],
            "exp": "সমৃদ্ধি বোঝাতে Noun ‘prosperity’ বসে।"
      },
      {
            "id": "e",
            "answer": "impossible",
            "accepted": [
                  "impossible"
            ],
            "exp": "অসম্ভব বোঝাতে বিপরীতার্থক প্রিফিক্স ‘im-’ যুক্ত হয়ে ‘impossible’ হয়।"
      }
]
  },
  {
    id: 'suffix-passage-11',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #11)',
    clues: ["happy","cheer","musclar","digest","active"],
    passage: "Good health is the key to (a) [___: happy]. A healthy man can work (b) [___: cheer] throughout the day. Physical exercise strengthens our (c) [___: musclar] system. Overeating causes severe (d) [___: digest] and makes a person (e) [___: active].",
    blanks: [
      {
            "id": "a",
            "answer": "happiness",
            "accepted": [
                  "happiness"
            ],
            "exp": "সুখ বোঝাতে Noun ‘happiness’ বসে।"
      },
      {
            "id": "b",
            "answer": "cheerfully",
            "accepted": [
                  "cheerfully"
            ],
            "exp": "প্রফুল্লতার সাথে কাজ করতে Adverb ‘cheerfully’ বসে।"
      },
      {
            "id": "c",
            "answer": "muscular",
            "accepted": [
                  "muscular"
            ],
            "exp": "পেশীতন্ত্র বোঝাতে Adjective ‘muscular’ বসে।"
      },
      {
            "id": "d",
            "answer": "indigestion",
            "accepted": [
                  "indigestion"
            ],
            "exp": "বদহজম বোঝাতে প্রিফিক্স ‘in-’ যুক্ত হয়ে ‘indigestion’ হয়।"
      },
      {
            "id": "e",
            "answer": "inactive",
            "accepted": [
                  "inactive"
            ],
            "exp": "নিষ্ক্রিয় বোঝাতে নেতিবাচক প্রিফিক্স ‘in-’ যুক্ত হয়ে ‘inactive’ হয়।"
      }
]
  },
  {
    id: 'suffix-passage-12',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #12)',
    clues: ["credible","accurate","sign","use","wise"],
    passage: "The computer is an (a) [___: credible] invention of science. It performs complex calculations (b) [___: accurate]. It has reduced human labor (c) [___: sign]. However, cyber crimes are spreading due to (d) [___: use] of internet. We must use technology (e) [___: wise].",
    blanks: [
      {
            "id": "a",
            "answer": "incredible",
            "accepted": [
                  "incredible"
            ],
            "exp": "অবিশ্বাস্য বোঝাতে প্রিফিক্স ‘in-’ যুক্ত হয়ে ‘incredible’ হয়।"
      },
      {
            "id": "b",
            "answer": "accurately",
            "accepted": [
                  "accurately"
            ],
            "exp": "নির্ভুলভাবে গণনা করতে Adverb ‘accurately’ বসে।"
      },
      {
            "id": "c",
            "answer": "significantly",
            "accepted": [
                  "significantly"
            ],
            "exp": "উল্লেখযোগ্যভাবে বোঝাতে Adverb ‘significantly’ বসে।"
      },
      {
            "id": "d",
            "answer": "misuse",
            "accepted": [
                  "misuse"
            ],
            "exp": "অপব্যবহার বোঝাতে প্রিফিক্স ‘mis-’ যুক্ত হয়ে ‘misuse’ হয়।"
      },
      {
            "id": "e",
            "answer": "wisely",
            "accepted": [
                  "wisely"
            ],
            "exp": "বুদ্ধিমানের সাথে ব্যবহারে Adverb ‘wisely’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-13',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #13)',
    clues: ["important","manage","obey","obedient","punish"],
    passage: "Discipline is of supreme (a) [___: important] in human life. Without discipline, an organization faces total (b) [___: manage]. A student must show (c) [___: obey] to his teachers. (d) [___: obedient] behavior invites strict (e) [___: punish].",
    blanks: [
      {
            "id": "a",
            "answer": "importance",
            "accepted": [
                  "importance"
            ],
            "exp": "গুরুত্ব বোঝাতে Noun ‘importance’ বসে।"
      },
      {
            "id": "b",
            "answer": "mismanagement",
            "accepted": [
                  "mismanagement"
            ],
            "exp": "অব্যবস্থাপনা বোঝাতে প্রিফিক্স ‘mis-’ এবং সাফিক্স ‘-ment’ যুক্ত হয়ে ‘mismanagement’ হয়।"
      },
      {
            "id": "c",
            "answer": "obedience",
            "accepted": [
                  "obedience"
            ],
            "exp": "বাধ্যতা বোঝাতে Noun ‘obedience’ বসে।"
      },
      {
            "id": "d",
            "answer": "Disobedient",
            "accepted": [
                  "disobedient",
                  "Disobedient"
            ],
            "exp": "অবাধ্য বোঝাতে প্রিফিক্স ‘dis-’ যুক্ত হয়ে ‘Disobedient’ হয়।"
      },
      {
            "id": "e",
            "answer": "punishment",
            "accepted": [
                  "punishment"
            ],
            "exp": "শাস্তি বোঝাতে Noun ‘punishment’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-14',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #14)',
    clues: ["understand","faith","friend","cover","careful"],
    passage: "Friendship requires mutual (a) [___: understand]. A true friend is never (b) [___: faith] to his companion. Selfish people behave (c) [___: friend] only in prosperity. In times of crisis, their true color is (d) [___: cover]. We should choose friends (e) [___: careful].",
    blanks: [
      {
            "id": "a",
            "answer": "understanding",
            "accepted": [
                  "understanding"
            ],
            "exp": "পারস্পরিক বোঝাপড়া বোঝাতে Noun ‘understanding’ বসে।"
      },
      {
            "id": "b",
            "answer": "unfaithful",
            "accepted": [
                  "unfaithful"
            ],
            "exp": "অবিশ্বাসী বোঝাতে ‘unfaithful’ গঠিত হয়।"
      },
      {
            "id": "c",
            "answer": "friendly",
            "accepted": [
                  "friendly"
            ],
            "exp": "বন্ধুসুলভ বোঝাতে Adjective ‘friendly’ বসে।"
      },
      {
            "id": "d",
            "answer": "uncovered",
            "accepted": [
                  "uncovered",
                  "discovered"
            ],
            "exp": "উন্মোচিত হওয়া বোঝাতে ‘uncovered’ বসে।"
      },
      {
            "id": "e",
            "answer": "carefully",
            "accepted": [
                  "carefully"
            ],
            "exp": "সতর্কতার সাথে বাছাই করতে Adverb ‘carefully’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-15',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #15)',
    clues: ["intellect","system","choose","strict","disturb"],
    passage: "A library is a center of (a) [___: intellect] pursuit. Books are arranged (b) [___: system] on the shelves. Readers can find books of their (c) [___: choose] easily. Silence must be (d) [___: strict] maintained to avoid any (e) [___: disturb].",
    blanks: [
      {
            "id": "a",
            "answer": "intellectual",
            "accepted": [
                  "intellectual"
            ],
            "exp": "বুদ্ধিবৃত্তিক অন্বেষণ বোঝাতে Adjective ‘intellectual’ বসে।"
      },
      {
            "id": "b",
            "answer": "systematically",
            "accepted": [
                  "systematically"
            ],
            "exp": "সুশৃঙ্খলভাবে সাজাতে Adverb ‘systematically’ বসে।"
      },
      {
            "id": "c",
            "answer": "choice",
            "accepted": [
                  "choice"
            ],
            "exp": "পছন্দ বোঝাতে Noun ‘choice’ বসে।"
      },
      {
            "id": "d",
            "answer": "strictly",
            "accepted": [
                  "strictly"
            ],
            "exp": "কঠোরভাবে বোঝাতে Adverb ‘strictly’ বসে।"
      },
      {
            "id": "e",
            "answer": "disturbance",
            "accepted": [
                  "disturbance"
            ],
            "exp": "বিঘ্ন বা গোলযোগ বোঝাতে Noun ‘disturbance’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-16',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #16)',
    clues: ["content","satisfy","rest","pure","kind"],
    passage: "Money cannot buy true (a) [___: content]. A greedy man remains (b) [___: satisfy] despite huge wealth. His (c) [___: rest] mind never enjoys peace. True richness lies in spiritual (d) [___: pure] and (e) [___: kind] towards others.",
    blanks: [
      {
            "id": "a",
            "answer": "contentment",
            "accepted": [
                  "contentment"
            ],
            "exp": "পরিতৃপ্তি বোঝাতে Noun ‘contentment’ বসে।"
      },
      {
            "id": "b",
            "answer": "dissatisfied",
            "accepted": [
                  "dissatisfied",
                  "unsatisfied"
            ],
            "exp": "অসন্তুষ্ট বোঝাতে ‘dissatisfied’ বসে।"
      },
      {
            "id": "c",
            "answer": "restless",
            "accepted": [
                  "restless"
            ],
            "exp": "অশান্ত মন বোঝাতে Adjective ‘restless’ বসে।"
      },
      {
            "id": "d",
            "answer": "purity",
            "accepted": [
                  "purity"
            ],
            "exp": "পবিত্রতা বোঝাতে Noun ‘purity’ বসে।"
      },
      {
            "id": "e",
            "answer": "kindness",
            "accepted": [
                  "kindness"
            ],
            "exp": "দয়া বা সহমর্মিতা বোঝাতে Noun ‘kindness’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-17',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #17)',
    clues: ["confident","certain","depend","courage","produce"],
    passage: "Self-reliance gives a man immense (a) [___: confident]. A dependent person is always (b) [___: certain] about his future. Hard work leads to (c) [___: depend]. Our youths must be (d) [___: courage] to take up (e) [___: produce] work.",
    blanks: [
      {
            "id": "a",
            "answer": "confidence",
            "accepted": [
                  "confidence"
            ],
            "exp": "আত্মবিশ্বাস বোঝাতে Noun ‘confidence’ বসে।"
      },
      {
            "id": "b",
            "answer": "uncertain",
            "accepted": [
                  "uncertain"
            ],
            "exp": "অনিশ্চিত অবস্থা বোঝাতে প্রিফিক্স ‘un-’ যুক্ত হয়ে ‘uncertain’ হয়।"
      },
      {
            "id": "c",
            "answer": "independence",
            "accepted": [
                  "independence"
            ],
            "exp": "স্বাবলম্বিতা বা স্বাধীনতা বোঝাতে ‘independence’ গঠিত হয়।"
      },
      {
            "id": "d",
            "answer": "encouraged",
            "accepted": [
                  "encouraged"
            ],
            "exp": "উদ্বুদ্ধ করা অর্থে ‘encouraged’ বসে।"
      },
      {
            "id": "e",
            "answer": "productive",
            "accepted": [
                  "productive"
            ],
            "exp": "উৎপাদনমুখী কাজ বোঝাতে Adjective ‘productive’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-18',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #18)',
    clues: ["repair","addict","endur","capable","intense"],
    passage: "Smoking causes (a) [___: repair] damage to human lungs. Nicotine is an (b) [___: addict] substance. A smoker loses his physical (c) [___: endur]. He becomes (d) [___: capable] of rigorous physical labor. Anti-smoking campaigns should be (e) [___: intense].",
    blanks: [
      {
            "id": "a",
            "answer": "irreparable",
            "accepted": [
                  "irreparable"
            ],
            "exp": "অপূরণীয় ক্ষতি বোঝাতে ‘irreparable’ গঠিত হয়।"
      },
      {
            "id": "b",
            "answer": "addictive",
            "accepted": [
                  "addictive"
            ],
            "exp": "আসক্তি সৃষ্টিকারী বোঝাতে Adjective ‘addictive’ বসে।"
      },
      {
            "id": "c",
            "answer": "endurance",
            "accepted": [
                  "endurance"
            ],
            "exp": "সহনশীলতা বা দম বোঝাতে Noun ‘endurance’ বসে।"
      },
      {
            "id": "d",
            "answer": "incapable",
            "accepted": [
                  "incapable"
            ],
            "exp": "অক্ষম বোঝাতে প্রিফিক্স ‘in-’ যুক্ত হয়ে ‘incapable’ হয়।"
      },
      {
            "id": "e",
            "answer": "intensified",
            "accepted": [
                  "intensified"
            ],
            "exp": "জোরদার করা অর্থে ভার্ব ‘intensified’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-19',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #19)',
    clues: ["punctual","regular","clean","polite","unreserved"],
    passage: "Honesty and (a) [___: punctual] make a man great. An honest student studies (b) [___: regular] and maintains (c) [___: clean] of mind. He shows (d) [___: polite] to everybody. His conduct is praised (e) [___: unreserved].",
    blanks: [
      {
            "id": "a",
            "answer": "punctuality",
            "accepted": [
                  "punctuality"
            ],
            "exp": "সময়নিষ্ঠতা বোঝাতে Noun ‘punctuality’ বসে।"
      },
      {
            "id": "b",
            "answer": "regularly",
            "accepted": [
                  "regularly"
            ],
            "exp": "নিয়মিতভাবে অধ্যয়ন করতে Adverb ‘regularly’ বসে।"
      },
      {
            "id": "c",
            "answer": "cleanliness",
            "accepted": [
                  "cleanliness"
            ],
            "exp": "মনের পরিচ্ছন্নতা প্রকাশে Noun ‘cleanliness’ বসে।"
      },
      {
            "id": "d",
            "answer": "politeness",
            "accepted": [
                  "politeness"
            ],
            "exp": "ভদ্রতা প্রদর্শন করতে Noun ‘politeness’ বসে।"
      },
      {
            "id": "e",
            "answer": "unreservedly",
            "accepted": [
                  "unreservedly"
            ],
            "exp": "অকুণ্ঠ প্রশংসা বোঝাতে Adverb ‘unreservedly’ বসে।"
      }
]
  },
  {
    id: 'suffix-passage-20',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #20)',
    clues: ["match","occupy","hero","free","grate"],
    passage: "The freedom fighters showed (a) [___: match] courage in 1971. They fought against the (b) [___: occupy] Pakistani army with (c) [___: hero] bravery. Their supreme sacrifice brought our long-cherished (d) [___: free]. We remember them with utmost (e) [___: grate].",
    blanks: [
      {
            "id": "a",
            "answer": "unmatched",
            "accepted": [
                  "unmatched",
                  "matchless"
            ],
            "exp": "অতুলনীয় বোঝাতে ‘unmatched’ বা ‘matchless’ গঠিত হয়।"
      },
      {
            "id": "b",
            "answer": "occupation",
            "accepted": [
                  "occupation",
                  "occupying"
            ],
            "exp": "দখলদার বাহিনী বোঝাতে ‘occupying / occupation army’ বসে।"
      },
      {
            "id": "c",
            "answer": "heroic",
            "accepted": [
                  "heroic"
            ],
            "exp": "বীরত্বপূর্ণ বোঝাতে Adjective ‘heroic’ বসে।"
      },
      {
            "id": "d",
            "answer": "freedom",
            "accepted": [
                  "freedom"
            ],
            "exp": "স্বাধীনতা বোঝাতে Noun ‘freedom’ বসে।"
      },
      {
            "id": "e",
            "answer": "gratitude",
            "accepted": [
                  "gratitude"
            ],
            "exp": "কৃতজ্ঞতা বোঝাতে Abstract Noun ‘gratitude’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-1',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #1)',
    clues: ["of","for","in","between","In","therefore","moreover","as a result"],
    passage: "A man (a) [___] letters is respected always even after his death (b) [___] his works. He is an enlightened person who devotes himself with a view to spreading education (c) [___] the society. He always teaches people how to differentiate (d) [___] the right and wrong. (e) [___] fact, he is the authentic person whom the world should respect.",
    blanks: [
      {
            "id": "a",
            "answer": "of",
            "accepted": [
                  "of"
            ],
            "exp": "‘A man of letters’ একটি বিখ্যাত ইংরেজি ইডিয়াম, যার অর্থ পণ্ডিত ব্যক্তি।"
      },
      {
            "id": "b",
            "answer": "for",
            "accepted": [
                  "for"
            ],
            "exp": "কাজের কারণে শ্রদ্ধা পাওয়া বোঝাতে কারণসূচক ‘for’ বসে।"
      },
      {
            "id": "c",
            "answer": "in",
            "accepted": [
                  "in",
                  "throughout"
            ],
            "exp": "সমাজে শিক্ষা ছড়াতে ‘in the society’ বসে।"
      },
      {
            "id": "d",
            "answer": "between",
            "accepted": [
                  "between"
            ],
            "exp": "দুটি বিষয় (right and wrong) এর মাঝে পার্থক্য করতে ‘differentiate between’ বসে।"
      },
      {
            "id": "e",
            "answer": "In",
            "accepted": [
                  "In",
                  "in"
            ],
            "exp": "‘In fact’ (প্রকৃতপক্ষে) বাক্যের শুরুতে জোর দেওয়ার জন্য ব্যবহৃত হয়।"
      }
]
  },
  {
    id: 'connector-passage-2',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #2)',
    clues: ["Firstly","Secondly","Moreover","Therefore","Finally"],
    passage: "Trees are our best friends. (a) [___], they provide us with oxygen without which we cannot survive. (b) [___], they protect the topsoil from erosion. (c) [___], they give us sweet fruits and timber for shelter. (d) [___], we must plant more trees every year. (e) [___], we should never cut down trees indiscriminately.",
    blanks: [
      {
            "id": "a",
            "answer": "Firstly",
            "accepted": [
                  "Firstly",
                  "First of all",
                  "First"
            ],
            "exp": "প্রথম কারণ বা পয়েন্ট উপস্থাপনে ‘Firstly’ বসে।"
      },
      {
            "id": "b",
            "answer": "Secondly",
            "accepted": [
                  "Secondly",
                  "Besides"
            ],
            "exp": "দ্বিতীয় ধারাবাহিক কারণ নির্দেশ করতে ‘Secondly’ বসে।"
      },
      {
            "id": "c",
            "answer": "Moreover",
            "accepted": [
                  "Moreover",
                  "Furthermore"
            ],
            "exp": "অতিরিক্ত তথ্য যোগ করতে ‘Moreover’ বসে।"
      },
      {
            "id": "d",
            "answer": "Therefore",
            "accepted": [
                  "Therefore",
                  "So",
                  "Hence"
            ],
            "exp": "সারসংক্ষেপ বা ফলাফল প্রকাশে ‘Therefore’ বসে।"
      },
      {
            "id": "e",
            "answer": "Finally",
            "accepted": [
                  "Finally",
                  "Above all"
            ],
            "exp": "চূড়ান্ত সিদ্ধান্ত বা উপসংহার টানতে ‘Finally’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-3',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #3)',
    clues: ["Firstly","Secondly","However","For instance","Therefore"],
    passage: "Mobile phones are extremely useful. (a) [___], they enable instant communication worldwide. (b) [___], students can access study materials with ease. (c) [___], excessive use of mobile phones has serious demerits. (d) [___], it impairs eyesight and causes headaches. (e) [___], we should use mobile phones with discretion.",
    blanks: [
      {
            "id": "a",
            "answer": "Firstly",
            "accepted": [
                  "Firstly",
                  "To begin with"
            ],
            "exp": "সুবিধা বর্ণনার শুরুতে ‘Firstly’ বসে।"
      },
      {
            "id": "b",
            "answer": "Secondly",
            "accepted": [
                  "Secondly",
                  "In addition"
            ],
            "exp": "পরবর্তী সুবিধা বর্ণনায় ‘Secondly’ বসে।"
      },
      {
            "id": "c",
            "answer": "However",
            "accepted": [
                  "However",
                  "On the other hand",
                  "But"
            ],
            "exp": "বিপরীত চিত্র বা কুফল বোঝাতে ‘However’ বসে।"
      },
      {
            "id": "d",
            "answer": "For instance",
            "accepted": [
                  "For instance",
                  "For example"
            ],
            "exp": "নির্দিষ্ট উদাহরণ তুলে ধরতে ‘For instance’ বসে।"
      },
      {
            "id": "e",
            "answer": "Therefore",
            "accepted": [
                  "Therefore",
                  "So",
                  "Hence"
            ],
            "exp": "উপসংহার হিসেবে ‘Therefore’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-4',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #4)',
    clues: ["Indeed","Even though","On the contrary","yet","In the end"],
    passage: "Honesty is the best policy. (a) [___], an honest man is trusted by all. (b) [___] he faces difficulties, he never deviates from the path of truth. (c) [___], a dishonest man may become rich overnight, (d) [___] his wealth brings no peace. (e) [___], honesty always triumphs.",
    blanks: [
      {
            "id": "a",
            "answer": "Indeed",
            "accepted": [
                  "Indeed",
                  "Truly"
            ],
            "exp": "সত্যতা জোরালোভাবে উপস্থাপন করতে ‘Indeed’ বসে।"
      },
      {
            "id": "b",
            "answer": "Even though",
            "accepted": [
                  "Even though",
                  "Although",
                  "Though"
            ],
            "exp": "শর্তসাপেক্ষ বিপরীত বৈপরীত্য বোঝাতে ‘Even though’ বসে।"
      },
      {
            "id": "c",
            "answer": "On the contrary",
            "accepted": [
                  "On the contrary",
                  "In contrast"
            ],
            "exp": "বিপরীত অবস্থা বোঝাতে ‘On the contrary’ বসে।"
      },
      {
            "id": "d",
            "answer": "yet",
            "accepted": [
                  "yet",
                  "but"
            ],
            "exp": "বৈপরীত্য প্রকাশ করতে ‘yet’ বা ‘but’ বসে।"
      },
      {
            "id": "e",
            "answer": "In the end",
            "accepted": [
                  "In the end",
                  "Ultimately",
                  "Finally"
            ],
            "exp": "শেষ পরিণতি নির্দেশ করতে ‘In the end’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-5',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #5)',
    clues: ["As a result","Furthermore","Consequently","Unless","Hence"],
    passage: "Deforestation is causing severe ecological imbalance. (a) [___], rainfall has become irregular. (b) [___], topsoil is being washed away by river erosion. (c) [___], wildlife is losing natural habitats rapidly. (d) [___] we stop felling trees, desertification will overtake us. (e) [___], tree plantation must be promoted nationwide.",
    blanks: [
      {
            "id": "a",
            "answer": "As a result",
            "accepted": [
                  "As a result",
                  "Consequently"
            ],
            "exp": "কুফলের ফলাফল নির্দেশ করতে ‘As a result’ বসে।"
      },
      {
            "id": "b",
            "answer": "Furthermore",
            "accepted": [
                  "Furthermore",
                  "Moreover",
                  "Besides"
            ],
            "exp": "অতিরিক্ত প্রভাব বর্ণনায় ‘Furthermore’ বসে।"
      },
      {
            "id": "c",
            "answer": "Consequently",
            "accepted": [
                  "Consequently",
                  "In addition"
            ],
            "exp": "ধারাবাহিক পরিণতি প্রকাশে ‘Consequently’ বসে।"
      },
      {
            "id": "d",
            "answer": "Unless",
            "accepted": [
                  "Unless",
                  "If not"
            ],
            "exp": "নেতিবাচক শর্ত প্রকাশে ‘Unless’ বসে।"
      },
      {
            "id": "e",
            "answer": "Hence",
            "accepted": [
                  "Hence",
                  "Therefore",
                  "So"
            ],
            "exp": "চূড়ান্ত সমাধানমূলক পরামর্শে ‘Hence’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-6',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #6)',
    clues: ["First of all","Besides","Moreover","On the other hand","Thus"],
    passage: "Early rising is a wholesome habit. (a) [___], it provides extra time to finish duties. (b) [___], early morning air is fresh and pollution-free. (c) [___], it helps keep our mind cheerful. (d) [___], late rising leads to hurried work and frustration. (e) [___], everyone should practice waking up early.",
    blanks: [
      {
            "id": "a",
            "answer": "First of all",
            "accepted": [
                  "First of all",
                  "Firstly"
            ],
            "exp": "প্রাথমিক সুবিধা প্রকাশে ‘First of all’ বসে।"
      },
      {
            "id": "b",
            "answer": "Besides",
            "accepted": [
                  "Besides",
                  "In addition"
            ],
            "exp": "পাশাপাশি অন্য বিষয় যোগ করতে ‘Besides’ বসে।"
      },
      {
            "id": "c",
            "answer": "Moreover",
            "accepted": [
                  "Moreover",
                  "Furthermore"
            ],
            "exp": "আরও সুবিধা যোগ করতে ‘Moreover’ বসে।"
      },
      {
            "id": "d",
            "answer": "On the other hand",
            "accepted": [
                  "On the other hand",
                  "In contrast"
            ],
            "exp": "বিপরীত দেরিতে ওঠার ক্ষতি বর্ণনায় ‘On the other hand’ বসে।"
      },
      {
            "id": "e",
            "answer": "Thus",
            "accepted": [
                  "Thus",
                  "Therefore"
            ],
            "exp": "সিদ্ধান্ত নির্দেশ করতে ‘Thus’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-7',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #7)',
    clues: ["Actually","If","Whereas","Above all","So"],
    passage: "Student life is the formative period of human life. (a) [___], whatever habits a student forms now will shape his future. (b) [___] a student is diligent, he will succeed in examinations. (c) [___] an idle student will lag behind. (d) [___], time management is crucial in this period. (e) [___], no moment should be wasted.",
    blanks: [
      {
            "id": "a",
            "answer": "Actually",
            "accepted": [
                  "Actually",
                  "In fact"
            ],
            "exp": "বাস্তব প্রেক্ষাপট প্রকাশ করতে ‘Actually’ বসে।"
      },
      {
            "id": "b",
            "answer": "If",
            "accepted": [
                  "If"
            ],
            "exp": "ইতিবাচক শর্ত প্রকাশ করতে ‘If’ বসে।"
      },
      {
            "id": "c",
            "answer": "Whereas",
            "accepted": [
                  "Whereas",
                  "On the contrary",
                  "While"
            ],
            "exp": "বিপরীত অবস্থা নির্দেশ করতে ‘Whereas’ বসে।"
      },
      {
            "id": "d",
            "answer": "Above all",
            "accepted": [
                  "Above all",
                  "Most importantly"
            ],
            "exp": "সবচেয়ে গুরুত্বপূর্ণ বিষয় প্রকাশে ‘Above all’ বসে।"
      },
      {
            "id": "e",
            "answer": "So",
            "accepted": [
                  "So",
                  "Therefore"
            ],
            "exp": "ফলশ্রুতিতে সিদ্ধান্ত প্রকাশে ‘So’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-8',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #8)',
    clues: ["Undoubtedly","Unfortunately","For instance","Similarly","As a consequence"],
    passage: "Water is called life. (a) [___], pure water is essential for the survival of living beings. (b) [___], water is being polluted in numerous ways. (c) [___], agricultural chemicals run into water reservoirs. (d) [___], industrial wastes are dumped into rivers. (e) [___], our water resources are in grave peril.",
    blanks: [
      {
            "id": "a",
            "answer": "Undoubtedly",
            "accepted": [
                  "Undoubtedly",
                  "Clearly"
            ],
            "exp": "নিঃসন্দেহে সত্য প্রকাশে ‘Undoubtedly’ বসে।"
      },
      {
            "id": "b",
            "answer": "Unfortunately",
            "accepted": [
                  "Unfortunately",
                  "However"
            ],
            "exp": "দুঃখজনক বাস্তবতা তুলে ধরতে ‘Unfortunately’ বসে।"
      },
      {
            "id": "c",
            "answer": "For instance",
            "accepted": [
                  "For instance",
                  "For example"
            ],
            "exp": "উদাহরণ দিতে ‘For instance’ বসে।"
      },
      {
            "id": "d",
            "answer": "Similarly",
            "accepted": [
                  "Similarly",
                  "In addition"
            ],
            "exp": "একই রকম অন্য কারণ যোগ করতে ‘Similarly’ বসে।"
      },
      {
            "id": "e",
            "answer": "As a consequence",
            "accepted": [
                  "As a consequence",
                  "Therefore"
            ],
            "exp": "সার্বিক পরিণতি প্রকাশ করতে ‘As a consequence’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-9',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #9)',
    clues: ["First and foremost","Secondly","Thirdly","Unless","Hence"],
    passage: "Poverty is a curse for our society. (a) [___], it deprives children of educational facilities. (b) [___], it forces young boys to work in hazardous conditions. (c) [___], it degrades human dignity. (d) [___] we provide vocational training, poor youths cannot escape poverty. (e) [___], collective efforts are imperative.",
    blanks: [
      {
            "id": "a",
            "answer": "First and foremost",
            "accepted": [
                  "First and foremost",
                  "Firstly"
            ],
            "exp": "সবচেয়ে প্রধান সমস্যা নির্দেশ করতে ‘First and foremost’ বসে।"
      },
      {
            "id": "b",
            "answer": "Secondly",
            "accepted": [
                  "Secondly",
                  "Besides"
            ],
            "exp": "দ্বিতীয় সমস্যা বর্ণনায় ‘Secondly’ বসে।"
      },
      {
            "id": "c",
            "answer": "Thirdly",
            "accepted": [
                  "Thirdly",
                  "Moreover"
            ],
            "exp": "তৃতীয় সমস্যা বর্ণনায় ‘Thirdly’ বসে।"
      },
      {
            "id": "d",
            "answer": "Unless",
            "accepted": [
                  "Unless"
            ],
            "exp": "নেতিবাচক শর্ত প্রকাশে ‘Unless’ বসে।"
      },
      {
            "id": "e",
            "answer": "Hence",
            "accepted": [
                  "Hence",
                  "Therefore"
            ],
            "exp": "উপসংহার হিসেবে ‘Hence’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-10',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #10)',
    clues: ["Primarily","Furthermore","Moreover","Regrettably","Therefore"],
    passage: "Reading books is a noble habit. (a) [___], it enriches our vocabulary and knowledge. (b) [___], it stimulates imaginative thinking. (c) [___], it provides peaceful companionship in solitude. (d) [___], social media addiction is drawing students away from books. (e) [___], teachers and parents must revive the reading habit.",
    blanks: [
      {
            "id": "a",
            "answer": "Primarily",
            "accepted": [
                  "Primarily",
                  "Firstly"
            ],
            "exp": "প্রধান উপকারিতা প্রকাশে ‘Primarily’ বসে।"
      },
      {
            "id": "b",
            "answer": "Furthermore",
            "accepted": [
                  "Furthermore",
                  "In addition"
            ],
            "exp": "অতিরিক্ত ভালো দিক বর্ণনায় ‘Furthermore’ বসে।"
      },
      {
            "id": "c",
            "answer": "Moreover",
            "accepted": [
                  "Moreover",
                  "Also"
            ],
            "exp": "আরও একটি ভালো দিক যোগ করতে ‘Moreover’ বসে।"
      },
      {
            "id": "d",
            "answer": "Regrettably",
            "accepted": [
                  "Regrettably",
                  "However",
                  "Sadly"
            ],
            "exp": "দুঃখজনক পরিস্থিতি প্রকাশে ‘Regrettably’ বসে।"
      },
      {
            "id": "e",
            "answer": "Therefore",
            "accepted": [
                  "Therefore",
                  "Hence"
            ],
            "exp": "পরামর্শমূলক সিদ্ধান্তে ‘Therefore’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-11',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #11)',
    clues: ["In addition","Besides","Above all","Indeed","Thus"],
    passage: "Sports and games are vital for physical fitness. (a) [___], they develop mental alertness. (b) [___], games teach us discipline and teamwork. (c) [___], players learn how to accept defeat gracefully. (d) [___], students who only study without play become dull. (e) [___], regular participation in sports should be made compulsory.",
    blanks: [
      {
            "id": "a",
            "answer": "In addition",
            "accepted": [
                  "In addition",
                  "Also"
            ],
            "exp": "অতিরিক্ত সুবিধা প্রকাশে ‘In addition’ বসে।"
      },
      {
            "id": "b",
            "answer": "Besides",
            "accepted": [
                  "Besides",
                  "Moreover"
            ],
            "exp": "অন্য গুণ যোগ করতে ‘Besides’ বসে।"
      },
      {
            "id": "c",
            "answer": "Above all",
            "accepted": [
                  "Above all",
                  "Most of all"
            ],
            "exp": "সবচেয়ে বড় গুণ প্রকাশে ‘Above all’ বসে।"
      },
      {
            "id": "d",
            "answer": "Indeed",
            "accepted": [
                  "Indeed",
                  "Truly"
            ],
            "exp": "বাস্তব সত্য জোর দিতে ‘Indeed’ বসে।"
      },
      {
            "id": "e",
            "answer": "Thus",
            "accepted": [
                  "Thus",
                  "Therefore"
            ],
            "exp": "সিদ্ধান্ত টানতে ‘Thus’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-12',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #12)',
    clues: ["Rather","For instance","Similarly","However","Therefore"],
    passage: "Digital Bangladesh is no longer a dream. (a) [___], it has become a living reality. (b) [___], government services are now delivered online. (c) [___], electronic financial transactions have made life easier. (d) [___], computer illiteracy in remote villages remains a barrier. (e) [___], digital literacy campaigns must be expanded.",
    blanks: [
      {
            "id": "a",
            "answer": "Rather",
            "accepted": [
                  "Rather",
                  "Instead",
                  "In fact"
            ],
            "exp": "পূর্বের কথার বিপরীতে দৃঢ় অবস্থান প্রকাশে ‘Rather’ বসে।"
      },
      {
            "id": "b",
            "answer": "For instance",
            "accepted": [
                  "For instance",
                  "For example"
            ],
            "exp": "দৃষ্টান্ত উপস্থাপনে ‘For instance’ বসে।"
      },
      {
            "id": "c",
            "answer": "Similarly",
            "accepted": [
                  "Similarly",
                  "Likewise"
            ],
            "exp": "একই রকম অন্য সুবিধা প্রকাশে ‘Similarly’ বসে।"
      },
      {
            "id": "d",
            "answer": "However",
            "accepted": [
                  "However",
                  "Nevertheless"
            ],
            "exp": "সীমাবদ্ধতা বা প্রতিবন্ধকতা তুলে ধরতে ‘However’ বসে।"
      },
      {
            "id": "e",
            "answer": "Therefore",
            "accepted": [
                  "Therefore",
                  "So"
            ],
            "exp": "সমাধানমূলক সিদ্ধান্তে ‘Therefore’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-13',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #13)',
    clues: ["Obviously","Moreover","Consequently","As a result","Hence"],
    passage: "Illiteracy is a grave national problem. (a) [___], an illiterate person cannot read or write. (b) [___], he is unaware of health and sanitation rules. (c) [___], he falls victim to superstitions. (d) [___], national development is severely hampered. (e) [___], illiteracy eradication must receive top priority.",
    blanks: [
      {
            "id": "a",
            "answer": "Obviously",
            "accepted": [
                  "Obviously",
                  "Clearly"
            ],
            "exp": "স্পষ্ট বাস্তবতা তুলে ধরতে ‘Obviously’ বসে।"
      },
      {
            "id": "b",
            "answer": "Moreover",
            "accepted": [
                  "Moreover",
                  "Besides"
            ],
            "exp": "অতিরিক্ত সীমাবদ্ধতা যোগ করতে ‘Moreover’ বসে।"
      },
      {
            "id": "c",
            "answer": "Consequently",
            "accepted": [
                  "Consequently",
                  "In addition"
            ],
            "exp": "পরিণতি প্রকাশে ‘Consequently’ বসে।"
      },
      {
            "id": "d",
            "answer": "As a result",
            "accepted": [
                  "As a result",
                  "Thus"
            ],
            "exp": "সামগ্রিক ক্ষতি প্রকাশে ‘As a result’ বসে।"
      },
      {
            "id": "e",
            "answer": "Hence",
            "accepted": [
                  "Hence",
                  "Therefore"
            ],
            "exp": "উপসংহার হিসেবে ‘Hence’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-14',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #14)',
    clues: ["To begin with","Subsequently","Eventually","On the contrary","Therefore"],
    passage: "Discipline in student life is of paramount value. (a) [___], an undisciplined student cannot complete his homework on time. (b) [___], he loses the respect of teachers and peers. (c) [___], examination results will be disappointing. (d) [___], disciplined students make remarkable progress. (e) [___], let us embrace discipline wholeheartedly.",
    blanks: [
      {
            "id": "a",
            "answer": "To begin with",
            "accepted": [
                  "To begin with",
                  "Firstly"
            ],
            "exp": "বর্ণনার শুরুতে ‘To begin with’ বসে।"
      },
      {
            "id": "b",
            "answer": "Subsequently",
            "accepted": [
                  "Subsequently",
                  "Secondly"
            ],
            "exp": "পরবর্তী ক্ষতি প্রকাশে ‘Subsequently’ বসে।"
      },
      {
            "id": "c",
            "answer": "Eventually",
            "accepted": [
                  "Eventually",
                  "Finally"
            ],
            "exp": "চূড়ান্ত পরিণতি প্রকাশে ‘Eventually’ বসে।"
      },
      {
            "id": "d",
            "answer": "On the contrary",
            "accepted": [
                  "On the contrary",
                  "In contrast"
            ],
            "exp": "সুশৃঙ্খল ছাত্রদের বিপরীত সাফল্য তুলে ধরতে ‘On the contrary’ বসে।"
      },
      {
            "id": "e",
            "answer": "Therefore",
            "accepted": [
                  "Therefore",
                  "So"
            ],
            "exp": "পরামর্শ হিসেবে ‘Therefore’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-15',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #15)',
    clues: ["Firstly","Secondly","Moreover","That is why","Therefore"],
    passage: "Female education is essential for our development. (a) [___], women constitute half of our total population. (b) [___], keeping them uneducated means keeping half the nation in darkness. (c) [___], an educated mother can raise ideal children. (d) [___], Napoleon said, \"Give me an educated mother, I will give you an educated nation.\" (e) [___], female education must be encouraged at all levels.",
    blanks: [
      {
            "id": "a",
            "answer": "Firstly",
            "accepted": [
                  "Firstly",
                  "First of all"
            ],
            "exp": "প্রথম যুক্তি উপস্থাপনে ‘Firstly’ বসে।"
      },
      {
            "id": "b",
            "answer": "Secondly",
            "accepted": [
                  "Secondly",
                  "Besides"
            ],
            "exp": "দ্বিতীয় যুক্তি প্রকাশে ‘Secondly’ বসে।"
      },
      {
            "id": "c",
            "answer": "Moreover",
            "accepted": [
                  "Moreover",
                  "In addition"
            ],
            "exp": "মায়ের ভূমিকা যোগ করতে ‘Moreover’ বসে।"
      },
      {
            "id": "d",
            "answer": "That is why",
            "accepted": [
                  "That is why",
                  "For this reason"
            ],
            "exp": "উক্তিটির প্রেক্ষাপট ব্যাখ্যায় ‘That is why’ বসে।"
      },
      {
            "id": "e",
            "answer": "Therefore",
            "accepted": [
                  "Therefore",
                  "Hence"
            ],
            "exp": "সিদ্ধান্ত প্রকাশে ‘Therefore’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-16',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #16)',
    clues: ["For example","Furthermore","As a consequence","Particularly","Therefore"],
    passage: "Noise pollution is increasing alarmingly in urban areas. (a) [___], hydraulic horns of buses and trucks generate deafening sound. (b) [___], loudspeakers and construction work add to the noise. (c) [___], city dwellers suffer from high blood pressure and insomnia. (d) [___], children's hearing power is impaired. (e) [___], strict laws must be enforced against hydraulic horns.",
    blanks: [
      {
            "id": "a",
            "answer": "For example",
            "accepted": [
                  "For example",
                  "For instance"
            ],
            "exp": "প্রধান কারণের উদাহরণে ‘For example’ বসে।"
      },
      {
            "id": "b",
            "answer": "Furthermore",
            "accepted": [
                  "Furthermore",
                  "In addition"
            ],
            "exp": "অতিরিক্ত কারণ যোগ করতে ‘Furthermore’ বসে।"
      },
      {
            "id": "c",
            "answer": "As a consequence",
            "accepted": [
                  "As a consequence",
                  "Consequently"
            ],
            "exp": "পরিণতি প্রকাশে ‘As a consequence’ বসে।"
      },
      {
            "id": "d",
            "answer": "Particularly",
            "accepted": [
                  "Particularly",
                  "Especially"
            ],
            "exp": "বিশেষভাবে শিশুদের ক্ষতি তুলে ধরতে ‘Particularly’ বসে।"
      },
      {
            "id": "e",
            "answer": "Therefore",
            "accepted": [
                  "Therefore",
                  "Hence"
            ],
            "exp": "আইন প্রয়োগের সিদ্ধান্তে ‘Therefore’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-17',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #17)',
    clues: ["First of all","Besides","Moreover","However","So"],
    passage: "A journey by boat is delightful. (a) [___], it offers an opportunity to view nature closely. (b) [___], gentle ripples of water create musical rhythm. (c) [___], the river breeze refreshes the weary mind. (d) [___], overloading of boats often leads to tragic sinkings during stormy weather. (e) [___], safety guidelines must be maintained strictly.",
    blanks: [
      {
            "id": "a",
            "answer": "First of all",
            "accepted": [
                  "First of all",
                  "Firstly"
            ],
            "exp": "প্রথম আনন্দদায়ক দিক প্রকাশে ‘First of all’ বসে।"
      },
      {
            "id": "b",
            "answer": "Besides",
            "accepted": [
                  "Besides",
                  "Secondly"
            ],
            "exp": "দ্বিতীয় সৌন্দর্য প্রকাশে ‘Besides’ বসে।"
      },
      {
            "id": "c",
            "answer": "Moreover",
            "accepted": [
                  "Moreover",
                  "Also"
            ],
            "exp": "তৃতীয় স্নিগ্ধতা প্রকাশে ‘Moreover’ বসে।"
      },
      {
            "id": "d",
            "answer": "However",
            "accepted": [
                  "However",
                  "On the other hand"
            ],
            "exp": "বিপদ ও ঝুঁকির কথা উল্লেখ করতে ‘However’ বসে।"
      },
      {
            "id": "e",
            "answer": "So",
            "accepted": [
                  "So",
                  "Therefore"
            ],
            "exp": "সতর্কতামূলক সিদ্ধান্তে ‘So’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-18',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #18)',
    clues: ["Firstly","In contrast","Indeed","If","Therefore"],
    passage: "Self-confidence is essential for personal triumphs. (a) [___], it makes a person resilient against failures. (b) [___], self-doubt paralyses human initiative. (c) [___], history proves that great inventors faced repeated rejections before succeeding. (d) [___] you believe in your abilities, nobody can hold you back. (e) [___], never lose faith in yourself.",
    blanks: [
      {
            "id": "a",
            "answer": "Firstly",
            "accepted": [
                  "Firstly",
                  "To begin with"
            ],
            "exp": "আত্মবিশ্বাসের মূল ভূমিকা বর্ণনায় ‘Firstly’ বসে।"
      },
      {
            "id": "b",
            "answer": "In contrast",
            "accepted": [
                  "In contrast",
                  "On the other hand"
            ],
            "exp": "বিপরীত আত্মসন্দেহের ক্ষতি প্রকাশে ‘In contrast’ বসে।"
      },
      {
            "id": "c",
            "answer": "Indeed",
            "accepted": [
                  "Indeed",
                  "In fact"
            ],
            "exp": "ঐতিহাসিক সত্যের সমর্থনে ‘Indeed’ বসে।"
      },
      {
            "id": "d",
            "answer": "If",
            "accepted": [
                  "If"
            ],
            "exp": "শর্তসূচক বাক্যাংশে ‘If’ বসে।"
      },
      {
            "id": "e",
            "answer": "Therefore",
            "accepted": [
                  "Therefore",
                  "Hence"
            ],
            "exp": "চূড়ান্ত অনুপ্রেরণামূলক উপদেশে ‘Therefore’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-19',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #19)',
    clues: ["Admittedly","However","In fact","As a matter of fact","So"],
    passage: "Time is the most valuable asset. (a) [___], lost health or wealth may be regained through medication and labor. (b) [___], lost time can never be recalled by any power. (c) [___], procrastination is the thief of time. (d) [___], students who postpone work face immense distress before exams. (e) [___], do your duty today without delay.",
    blanks: [
      {
            "id": "a",
            "answer": "Admittedly",
            "accepted": [
                  "Admittedly",
                  "Of course"
            ],
            "exp": "স্বীকারোক্তি হিসেবে ‘Admittedly’ বসে।"
      },
      {
            "id": "b",
            "answer": "However",
            "accepted": [
                  "However",
                  "But"
            ],
            "exp": "বিপরীত চূড়ান্ত বাস্তবতা প্রকাশে ‘However’ বসে।"
      },
      {
            "id": "c",
            "answer": "In fact",
            "accepted": [
                  "In fact",
                  "Truly"
            ],
            "exp": "প্রবাদের অন্তর্নিহিত সত্য প্রকাশে ‘In fact’ বসে।"
      },
      {
            "id": "d",
            "answer": "As a matter of fact",
            "accepted": [
                  "As a matter of fact",
                  "For instance"
            ],
            "exp": "বাস্তব উদাহরণে ‘As a matter of fact’ বসে।"
      },
      {
            "id": "e",
            "answer": "So",
            "accepted": [
                  "So",
                  "Therefore"
            ],
            "exp": "চূড়ান্ত উপদেশে ‘So’ বসে।"
      }
]
  },
  {
    id: 'connector-passage-20',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable items (a) through (e).',
    titleBn: 'উপযুক্ত Sentence Connector / Linker বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #20)',
    clues: ["Undoubtedly","However","Rather","Furthermore","Thus"],
    passage: "Patriotism is an innate sentiment. (a) [___], love for motherland is natural to human heart. (b) [___], true patriotism does not mean narrow nationalism. (c) [___], a true patriot respects the sovereignty of all nations. (d) [___], he works selflessly for the collective good of mankind. (e) [___], universal brotherhood and patriotism go hand in hand.",
    blanks: [
      {
            "id": "a",
            "answer": "Undoubtedly",
            "accepted": [
                  "Undoubtedly",
                  "Certainly"
            ],
            "exp": "নিঃসন্দেহে স্বাভাবিক অনুভূতি বোঝাতে ‘Undoubtedly’ বসে।"
      },
      {
            "id": "b",
            "answer": "However",
            "accepted": [
                  "However",
                  "Yet"
            ],
            "exp": "ভুল ধারণা সংশোধন করতে ‘However’ বসে।"
      },
      {
            "id": "c",
            "answer": "Rather",
            "accepted": [
                  "Rather",
                  "Instead"
            ],
            "exp": "প্রকৃত দেশপ্রেমিকের দায়িত্ব বোঝাতে ‘Rather’ বসে।"
      },
      {
            "id": "d",
            "answer": "Furthermore",
            "accepted": [
                  "Furthermore",
                  "In addition"
            ],
            "exp": "অতিরিক্ত গুণ তুলে ধরতে ‘Furthermore’ বসে।"
      },
      {
            "id": "e",
            "answer": "Thus",
            "accepted": [
                  "Thus",
                  "Hence"
            ],
            "exp": "উপসংহার টানতে ‘Thus’ বসে।"
      }
]
  },

  // ================= MODIFIERS =================
  {
    id: 'mod-passage-1',
    topicCategory: 'Modifiers',
    classLevel: 'Class 11-12',
    title: 'Read the passage and fill in the blanks with suitable modifiers as directed.',
    titleBn: 'নির্দেশনা অনুযায়ী উপযুক্ত Modifier বসিয়ে প্যাসেজটি সম্পূর্ণ করুন।',
    clues: ['national', 'properly', 'to eradicate', 'great', 'our'],
    passage: 'Illiteracy is a (a) [___: pre-modify the noun] curse of our country. It hinders all kinds of development. We must educate all people (b) [___: post-modify the verb]. The government is taking steps (c) [___: use an infinitive phrase] this curse. It is (d) [___: use a possessive] sacred duty to cooperate with the government. Otherwise, our (e) [___: pre-modify the noun] progress will be hampered.',
    blanks: [
      { id: 'a', label: '(a)', answer: 'great', accepted: ['great', 'big', 'serious', 'grave'], explanation: 'Noun ‘curse’ কে Pre-modify করার জন্য একটি উপযুক্ত Adjective ‘great’ বা ‘serious’ বসে।' },
      { id: 'b', label: '(b)', answer: 'properly', accepted: ['properly', 'well', 'rapidly'], explanation: 'Verb ‘educate’ কে Post-modify করার জন্য একটি উপযুক্ত Adverb ‘properly’ বসে।' },
      { id: 'c', label: '(c)', answer: 'to eradicate', accepted: ['to eradicate', 'to remove', 'to eliminate'], explanation: 'উদ্দেশ্য বোঝাতে Infinitive (to + V1) ‘to eradicate’ বা ‘to remove’ সঠিক।' },
      { id: 'd', label: '(d)', answer: 'our', accepted: ['our'], explanation: 'Possessive Pronoun হিসেবে ‘our’ (আমাদের) বসে।' },
      { id: 'e', label: '(e)', answer: 'national', accepted: ['national', 'overall'], explanation: 'Noun ‘progress’ কে Pre-modify করার জন্য Adjective হিসেবে ‘national’ উপযুক্ত।' }
    ]
  },
  // ================= VOICE =================
  {
    id: 'voice-passage-1',
    topicCategory: 'Voice',
    classLevel: 'All',
    title: 'Complete the passage by changing sentences between active and passive voice as directed.',
    titleBn: 'Voice পরিবর্তনের নিয়ম অনুসারে শূন্যস্থানগুলো পূরণ করুন।',
    clues: ['is loved', 'was written', 'must be taken', 'are planted', 'is respected'],
    passage: 'An honest man (a) [___: love - passive] by everyone in the community. Hamlet (b) [___: write - passive] by William Shakespeare centuries ago. Care (c) [___: must take - passive] of elderly citizens in every home. Trees (d) [___: plant - passive] in large numbers during the rainy season. A scholar (e) [___: respect - passive] everywhere for his wisdom.',
    blanks: [
      { id: 'a', label: '(a)', answer: 'is loved', accepted: ['is loved'], explanation: 'Present Simple Passive: am/is/are + V3 (loved)।' },
      { id: 'b', label: '(b)', answer: 'was written', accepted: ['was written'], explanation: 'Past Simple Passive: was/were + V3 (written)।' },
      { id: 'c', label: '(c)', answer: 'must be taken', accepted: ['must be taken'], explanation: 'Modal Passive: must + be + V3 (taken)।' },
      { id: 'd', label: '(d)', answer: 'are planted', accepted: ['are planted'], explanation: 'Plural Subject ‘Trees’ এর জন্য Present Simple Passive: are + V3 (planted)।' },
      { id: 'e', label: '(e)', answer: 'is respected', accepted: ['is respected'], explanation: 'Singular Subject ‘A scholar’ এর জন্য Present Passive: is + V3 (respected)।' }
    ]
  },
  // ================= NARRATION =================
  {
    id: 'narration-passage-1',
    topicCategory: 'Narration',
    classLevel: 'All',
    title: 'Complete the reported speech passage by filling in the blanks.',
    titleBn: 'Direct থেকে Indirect Narration রূপান্তরের নিয়ম অনুযায়ী শূন্যস্থান পূরণ করুন।',
    clues: ['asked', 'replied that', 'if he had done', 'had finished', 'praised him'],
    passage: 'The teacher entered the class and (a) [___] the student why he was late. The student politely (b) [___] that he had missed the school bus. The teacher then inquired (c) [___] his home assignment. The student responded that he (d) [___] it already. Finally, the teacher allowed him to sit down and (e) [___] for his honesty.',
    blanks: [
      { id: 'a', label: '(a)', answer: 'asked', accepted: ['asked', 'enquired of'], explanation: 'Interrogative Sentence এর Indirect Narration এ Reporting Verb ‘asked’ বসে।' },
      { id: 'b', label: '(b)', answer: 'replied that', accepted: ['replied that', 'answered that'], explanation: 'প্রশ্নের উত্তর দেওয়ার ক্ষেত্রে ‘replied that’ ব্যবহার করা হয়।' },
      { id: 'c', label: '(c)', answer: 'if he had done', accepted: ['if he had done', 'if he had completed', 'whether he had done'], explanation: 'Yes/No কোশ্চেনের জন্য ‘if/whether’ + Subject + Past Perfect বসে।' },
      { id: 'd', label: '(d)', answer: 'had finished', accepted: ['had finished', 'had completed'], explanation: 'Present Perfect পরিবর্তিত হয়ে Past Perfect (had + V3) হয়।' },
      { id: 'e', label: '(e)', answer: 'praised him', accepted: ['praised him', 'thanked him'], explanation: 'সাধুবাদ বা প্রশংসা বোঝাতে ‘praised him’ সঠিক।' }
    ]
  },
  // ================= PUNCTUATION =================
  {
    id: 'punc-passage-1',
    topicCategory: 'Punctuation',
    classLevel: 'All',
    title: 'Identify the missing punctuation and capitalization marks.',
    titleBn: 'সঠিক বিরামচিহ্ন ও ক্যাপিটালাইজেশন (Punctuation) অনুযায়ী শূন্যস্থান পূরণ করুন।',
    clues: ['?', ',', '.', '!', '"'],
    passage: 'The traveler said to the peasant (a) [___: quote/comma] "Can you tell me the way to the nearest inn (b) [___: mark]" The peasant replied (c) [___: comma] "Yes, sir, I can (d) [___: mark]" "Thank you very much (e) [___: mark]" said the traveler.',
    blanks: [
      { id: 'a', label: '(a)', answer: ',', accepted: [','], explanation: 'Direct Speech এর পূর্বে Reporting Verb এর পর কমা (,) বসে।' },
      { id: 'b', label: '(b)', answer: '?', accepted: ['?'], explanation: 'প্রশ্নবোধক বাক্য (Can you tell me...) এর শেষে প্রশ্নচিহ্ন (?) বসে।' },
      { id: 'c', label: '(c)', answer: ',', accepted: [','], explanation: 'Reporting Verb ‘replied’ এর পরে কমা (,) বসে।' },
      { id: 'd', label: '(d)', answer: '.', accepted: ['.'], explanation: 'Assertive বক্তব্য শেষ হওয়ায় ফুলস্টপ (.) বসে।' },
      { id: 'e', label: '(e)', answer: '!', accepted: ['!', '.'], explanation: 'কৃতজ্ঞতা বা আবেগ প্রকাশ করতে বিস্ময়সূচক চিহ্ন (!) অথবা ফুলস্টপ (.) ব্যবহৃত হয়।' }
    ]
  },
  // ================= SUBJECT-VERB AGREEMENT =================
  {
    id: 'sva-passage-1',
    topicCategory: 'Subject-Verb Agreement',
    classLevel: 'All',
    title: 'Fill in the blanks with correct verbs according to subject-verb agreement.',
    titleBn: 'Subject-Verb Agreement এর নিয়ম মেনে সঠিক Verb দ্বারা শূন্যস্থান পূরণ করুন।',
    clues: ['is', 'are', 'has', 'have', 'were'],
    passage: 'Slow and steady (a) [___: win] the race. Neither the teacher nor the students (b) [___: be] present in the auditorium. Fifty thousand taka (c) [___: be] a handsome amount for this charity. Each of the participants (d) [___: have] received an award certificate. The quality of these mangoes (e) [___: be] exceptional.',
    blanks: [
      { id: 'a', label: '(a)', answer: 'wins', accepted: ['wins'], explanation: '‘Slow and steady’ একটি একক ভাব প্রকাশ করায় Singular Verb ‘wins’ বসে।' },
      { id: 'b', label: '(b)', answer: 'were', accepted: ['were', 'are'], explanation: '‘Neither... nor’ থাকলে শেষের Subject (the students - Plural) অনুযায়ী Plural Verb ‘were’ বা ‘are’ বসে।' },
      { id: 'c', label: '(c)', answer: 'is', accepted: ['is', 'was'], explanation: 'নির্দিষ্ট পরিমাণ অর্থ (Fifty thousand taka) একক সমষ্টি বোঝায়, তাই Singular Verb ‘is’ বসে।' },
      { id: 'd', answer: 'has', accepted: ['has'], explanation: '‘Each of’ এর পর Plural Noun থাকলেও Verb সর্বদা Singular ‘has’ হয়।' },
      { id: 'e', answer: 'is', accepted: ['is', 'was'], explanation: 'মূল Subject হলো ‘The quality’ (Singular), তাই Verb হবে ‘is’।' }
    ]
  },
{
  "id": "tag-passage-1",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #1)",
  "clues": [],
  "passage": "Always obey your parents, (a) [___]?\nNever disobey their advice, (b) [___]?\nLet us take care of them, (c) [___]?\nMay they live long, (d) [___]?\nHow loving our parents are, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "aren't they?",
      "accepted": [
        "aren't they",
        "aren't they?",
        "Aren't they",
        "Aren't they?"
      ],
      "exp": "Exclamatory বা Plural/I am বাক্যের Tag হিসেবে 'aren't + pronoun?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-2",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #2)",
  "clues": [],
  "passage": "Get up early in the morning, (a) [___]?\nDo not waste your morning hours, (b) [___]?\nLet us go for a morning walk, (c) [___]?\nMay we remain healthy and active, (d) [___]?\nWhat a refreshing habit morning walking is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't we?",
      "accepted": [
        "mayn't we",
        "mayn't we?",
        "Mayn't we",
        "Mayn't we?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-3",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #3)",
  "clues": [],
  "passage": "Always speak the truth, (a) [___]?\nNever tell a lie, (b) [___]?\nLet us practise honesty in our lives, (c) [___]?\nMay honest people prosper, (d) [___]?\nWhat a noble virtue honesty is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-4",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #4)",
  "clues": [],
  "passage": "Keep your classroom clean, (a) [___]?\nDo not throw rubbish on the floor, (b) [___]?\nLet us use the wastepaper basket, (c) [___]?\nMay our school remain clean and beautiful, (d) [___]?\nHow beautiful a clean classroom looks, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't it?",
      "accepted": [
        "mayn't it",
        "mayn't it?",
        "Mayn't it",
        "Mayn't it?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "doesn't it?",
      "accepted": [
        "doesn't it",
        "doesn't it?",
        "Doesn't it",
        "Doesn't it?"
      ],
      "exp": "Present Simple Affirmative বাক্যে একবচন Subject এর সাথে 'doesn't + pronoun?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-5",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #5)",
  "clues": [],
  "passage": "Plant more trees around your house, (a) [___]?\nNever cut down trees unnecessarily, (b) [___]?\nLet us protect our forests, (c) [___]?\nMay our country become greener, (d) [___]?\nWhat useful friends trees are, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't it?",
      "accepted": [
        "mayn't it",
        "mayn't it?",
        "Mayn't it",
        "Mayn't it?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "aren't they?",
      "accepted": [
        "aren't they",
        "aren't they?",
        "Aren't they",
        "Aren't they?"
      ],
      "exp": "Exclamatory বা Plural/I am বাক্যের Tag হিসেবে 'aren't + pronoun?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-6",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #6)",
  "clues": [],
  "passage": "Read your lessons attentively, (a) [___]?\nDo not neglect your studies, (b) [___]?\nLet us study together, (c) [___]?\nMay you succeed in the examination, (d) [___]?\nWhat an intelligent student you are, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't you?",
      "accepted": [
        "mayn't you",
        "mayn't you?",
        "Mayn't you",
        "Mayn't you?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "aren't you?",
      "accepted": [
        "aren't you",
        "aren't you?",
        "Aren't you",
        "Aren't you?"
      ],
      "exp": "Exclamatory বা Plural/I am বাক্যের Tag হিসেবে 'aren't + pronoun?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-7",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #7)",
  "clues": [],
  "passage": "Help the poor and helpless, (a) [___]?\nNever behave badly towards them, (b) [___]?\nLet us stand beside needy people, (c) [___]?\nMay everyone enjoy a happy life, (d) [___]?\nHow helpless the poor people are, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "aren't they?",
      "accepted": [
        "aren't they",
        "aren't they?",
        "Aren't they",
        "Aren't they?"
      ],
      "exp": "Exclamatory বা Plural/I am বাক্যের Tag হিসেবে 'aren't + pronoun?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-8",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #8)",
  "clues": [],
  "passage": "Follow the traffic rules, (a) [___]?\nDo not cross the road carelessly, (b) [___]?\nLet us use the footbridge, (c) [___]?\nMay everyone have a safe journey, (d) [___]?\nWhat a busy road it is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-9",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #9)",
  "clues": [],
  "passage": "Take regular physical exercise, (a) [___]?\nDo not remain idle all day, (b) [___]?\nLet us play in the field, (c) [___]?\nMay we enjoy sound health, (d) [___]?\nHow important physical exercise is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't we?",
      "accepted": [
        "mayn't we",
        "mayn't we?",
        "Mayn't we",
        "Mayn't we?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-10",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #10)",
  "clues": [],
  "passage": "Use water carefully, (a) [___]?\nNever waste clean water, (b) [___]?\nLet us keep our rivers free from pollution, (c) [___]?\nMay everyone have access to safe water, (d) [___]?\nWhat an essential resource water is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-11",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #11)",
  "clues": [],
  "passage": "Be kind to animals, (a) [___]?\nDo not hurt them unnecessarily, (b) [___]?\nLet us protect wild animals, (c) [___]?\nMay all animals live safely, (d) [___]?\nHow beautiful these birds are, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "aren't they?",
      "accepted": [
        "aren't they",
        "aren't they?",
        "Aren't they",
        "Aren't they?"
      ],
      "exp": "Exclamatory বা Plural/I am বাক্যের Tag হিসেবে 'aren't + pronoun?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-12",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #12)",
  "clues": [],
  "passage": "Learn English properly, (a) [___]?\nDo not be afraid of making mistakes, (b) [___]?\nLet us practise speaking English every day, (c) [___]?\nMay you become fluent in English, (d) [___]?\nWhat an important language English is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't you?",
      "accepted": [
        "mayn't you",
        "mayn't you?",
        "Mayn't you",
        "Mayn't you?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-13",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #13)",
  "clues": [],
  "passage": "Respect your teachers, (a) [___]?\nNever ignore their valuable advice, (b) [___]?\nLet us follow their instructions, (c) [___]?\nMay our teachers live long, (d) [___]?\nHow dedicated our teachers are, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "aren't they?",
      "accepted": [
        "aren't they",
        "aren't they?",
        "Aren't they",
        "Aren't they?"
      ],
      "exp": "Exclamatory বা Plural/I am বাক্যের Tag হিসেবে 'aren't + pronoun?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-14",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #14)",
  "clues": [],
  "passage": "Save a part of your income, (a) [___]?\nDo not spend money carelessly, (b) [___]?\nLet us develop the habit of saving, (c) [___]?\nMay your savings increase, (d) [___]?\nWhat a useful habit saving money is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-15",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #15)",
  "clues": [],
  "passage": "Keep your environment clean, (a) [___]?\nDo not pollute the air and water, (b) [___]?\nLet us work together to prevent pollution, (c) [___]?\nMay our planet remain safe, (d) [___]?\nWhat a serious problem pollution is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't it?",
      "accepted": [
        "mayn't it",
        "mayn't it?",
        "Mayn't it",
        "Mayn't it?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-16",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #16)",
  "clues": [],
  "passage": "Make proper use of your time, (a) [___]?\nNever put off today’s work until tomorrow, (b) [___]?\nLet us complete our work in time, (c) [___]?\nMay you achieve success in life, (d) [___]?\nHow valuable time is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't you?",
      "accepted": [
        "mayn't you",
        "mayn't you?",
        "Mayn't you",
        "Mayn't you?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-17",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #17)",
  "clues": [],
  "passage": "Love your country, (a) [___]?\nNever do anything harmful to it, (b) [___]?\nLet us work for the development of our country, (c) [___]?\nMay our country prosper, (d) [___]?\nWhat a beautiful country ours is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't it?",
      "accepted": [
        "mayn't it",
        "mayn't it?",
        "Mayn't it",
        "Mayn't it?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-18",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #18)",
  "clues": [],
  "passage": "Read good books regularly, (a) [___]?\nDo not spend all your free time using mobile phones, (b) [___]?\nLet us visit the library today, (c) [___]?\nMay books enlighten our minds, (d) [___]?\nWhat wonderful sources of knowledge books are, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "aren't they?",
      "accepted": [
        "aren't they",
        "aren't they?",
        "Aren't they",
        "Aren't they?"
      ],
      "exp": "Exclamatory বা Plural/I am বাক্যের Tag হিসেবে 'aren't + pronoun?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-19",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #19)",
  "clues": [],
  "passage": "Work hard to reach your goal, (a) [___]?\nNever lose hope, (b) [___]?\nLet us face our challenges bravely, (c) [___]?\nMay all your dreams come true, (d) [___]?\nWhat a difficult journey life is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "tag-passage-20",
  "topicCategory": "Tag Questions",
  "classLevel": "Class 9-10",
  "title": "Add tag questions to the following sentences (a) through (e).",
  "titleBn": "প্রদত্ত বাক্যগুলোতে সঠিক Tag Question বসিয়ে প্যাসেজটি সম্পূর্ণ করুন (প্যাসেজ #20)",
  "clues": [],
  "passage": "Maintain discipline in your life, (a) [___]?\nDo not break the rules, (b) [___]?\nLet us become disciplined citizens, (c) [___]?\nMay everyone understand the value of discipline, (d) [___]?\nWhat an important quality discipline is, (e) [___]?",
  "blanks": [
    {
      "id": "a",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "b",
      "answer": "will you?",
      "accepted": [
        "will you",
        "will you?",
        "Will you",
        "Will you?",
        "won't you",
        "won't you?",
        "can you",
        "can you?"
      ],
      "exp": "অনুরোধমূলক বা আদেশসূচক Imperative বাক্যের Tag হিসেবে 'will you?' বা 'won't you?' বসে।"
    },
    {
      "id": "c",
      "answer": "shall we?",
      "accepted": [
        "shall we",
        "shall we?",
        "Shall we",
        "Shall we?"
      ],
      "exp": "'Let us / Let's' দ্বারা প্রস্তাব বোঝাতে Tag Question সর্বদা 'shall we?' হয়।"
    },
    {
      "id": "d",
      "answer": "mayn't they?",
      "accepted": [
        "mayn't they",
        "mayn't they?",
        "Mayn't they",
        "Mayn't they?"
      ],
      "exp": "Optative বাক্যে প্রার্থনা বা আশীর্বাদে Tag হিসেবে 'mayn't + pronoun?' বসে।"
    },
    {
      "id": "e",
      "answer": "isn't it?",
      "accepted": [
        "isn't it",
        "isn't it?",
        "Isn't it",
        "Isn't it?"
      ],
      "exp": "একবচন বস্তুবাচক Exclamatory বা Affirmative বাক্যে 'isn't it?' বসে।"
    }
  ]
},
{
  "id": "sp-passage-1",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Honesty.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #1: Honesty)",
  "clues": [],
  "passage": "Honesty is a great virtue. An (a) [___] (honest) person is respected by everyone. A dishonest person is often (b) [___] (truth) and cannot gain people’s trust. Honesty brings peace and (c) [___] (happy) to our lives. We should never behave (d) [___] (honest) with others. Therefore, every person should understand the (e) [___] (important) of honesty.",
  "blanks": [
    {
      "id": "a",
      "answer": "honest",
      "accepted": [
        "honest",
        "Honest",
        "honest"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'honest' বসানো হয়েছে।"
    },
    {
      "id": "b",
      "answer": "untruthful",
      "accepted": [
        "untruthful",
        "Untruthful",
        "untruthful"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'untruthful' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "happiness",
      "accepted": [
        "happiness",
        "Happiness",
        "happiness"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'happiness' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "dishonestly",
      "accepted": [
        "dishonestly",
        "Dishonestly",
        "dishonestly"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'dishonestly' বসেছে।"
    },
    {
      "id": "e",
      "answer": "importance",
      "accepted": [
        "importance",
        "Importance",
        "importance"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'importance' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-2",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Education.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #2: Education)",
  "clues": [],
  "passage": "Education is essential for both personal and national (a) [___] (develop). An (b) [___] (educate) person can distinguish between right and wrong. Education removes (c) [___] (ignorant) and broadens our minds. Without education, people may remain (d) [___] (aware) of their rights. Therefore, the government should make education easily (e) [___] (access) to everyone.",
  "blanks": [
    {
      "id": "a",
      "answer": "development",
      "accepted": [
        "development",
        "Development",
        "development"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'development' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "educated",
      "accepted": [
        "educated",
        "Educated",
        "educated"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'educated' বসানো হয়েছে।"
    },
    {
      "id": "c",
      "answer": "ignorance",
      "accepted": [
        "ignorance",
        "Ignorance",
        "ignorance"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'ignorance' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "unaware",
      "accepted": [
        "unaware",
        "Unaware",
        "unaware"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'unaware' বসেছে।"
    },
    {
      "id": "e",
      "answer": "accessible",
      "accepted": [
        "accessible",
        "Accessible",
        "accessible"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'accessible' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-3",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: A Good Student.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #3: A Good Student)",
  "clues": [],
  "passage": "A good student is always attentive and (a) [___] (discipline). He or she attends school (b) [___] (regular) and completes every task carefully. A good student is never (c) [___] (respect) to teachers. Such a student knows the (d) [___] (valuable) of time and avoids all kinds of (e) [___] (necessary) activities.",
  "blanks": [
    {
      "id": "a",
      "answer": "disciplined",
      "accepted": [
        "disciplined",
        "Disciplined",
        "disciplined"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'disciplined' বসেছে।"
    },
    {
      "id": "b",
      "answer": "regularly",
      "accepted": [
        "regularly",
        "Regularly",
        "regularly"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'regularly' বসেছে।"
    },
    {
      "id": "c",
      "answer": "disrespectful",
      "accepted": [
        "disrespectful",
        "Disrespectful",
        "disrespectful"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'disrespectful' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "value",
      "accepted": [
        "value",
        "Value",
        "value"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'value' বসানো হয়েছে।"
    },
    {
      "id": "e",
      "answer": "unnecessary",
      "accepted": [
        "unnecessary",
        "Unnecessary",
        "unnecessary"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'unnecessary' বসেছে।"
    }
  ]
},
{
  "id": "sp-passage-4",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Tree Plantation.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #4: Tree Plantation)",
  "clues": [],
  "passage": "Trees are extremely (a) [___] (use) to human beings. The (b) [___] (destroy) of forests causes serious environmental problems. People cut down trees (c) [___] (discriminate) for fuel and timber. This practice creates an ecological (d) [___] (balance). Therefore, tree plantation is (e) [___] (essential) for protecting our environment.",
  "blanks": [
    {
      "id": "a",
      "answer": "useful",
      "accepted": [
        "useful",
        "Useful",
        "useful"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'useful' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "destruction",
      "accepted": [
        "destruction",
        "Destruction",
        "destruction"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'destruction' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "indiscriminately",
      "accepted": [
        "indiscriminately",
        "Indiscriminately",
        "indiscriminately"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'indiscriminately' বসেছে।"
    },
    {
      "id": "d",
      "answer": "imbalance",
      "accepted": [
        "imbalance",
        "Imbalance",
        "imbalance"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'imbalance' গঠিত হয়েছে।"
    },
    {
      "id": "e",
      "answer": "essential",
      "accepted": [
        "essential",
        "Essential",
        "essential"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'essential' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-5",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Physical Exercise.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #5: Physical Exercise)",
  "clues": [],
  "passage": "Physical exercise is necessary for maintaining good health. It keeps us physically (a) [___] (strength) and mentally cheerful. Regular exercise improves blood (b) [___] (circulate) and digestion. People who remain (c) [___] (active) may suffer from different diseases. However, (d) [___] (excess) exercise can be harmful. Therefore, we should exercise (e) [___] (regular) but moderately.",
  "blanks": [
    {
      "id": "a",
      "answer": "strong",
      "accepted": [
        "strong",
        "Strong",
        "strong"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'strong' বসানো হয়েছে।"
    },
    {
      "id": "b",
      "answer": "circulation",
      "accepted": [
        "circulation",
        "Circulation",
        "circulation"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'circulation' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "inactive",
      "accepted": [
        "inactive",
        "Inactive",
        "inactive"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'inactive' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "excessive",
      "accepted": [
        "excessive",
        "Excessive",
        "excessive"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'excessive' গঠিত হয়েছে।"
    },
    {
      "id": "e",
      "answer": "regularly",
      "accepted": [
        "regularly",
        "Regularly",
        "regularly"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'regularly' বসেছে।"
    }
  ]
},
{
  "id": "sp-passage-6",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: The Internet.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #6: The Internet)",
  "clues": [],
  "passage": "The internet is a wonderful invention of (a) [___] (modern) science. It has made global (b) [___] (communicate) faster and easier. Students can find (c) [___] (use) information through the internet. However, the (d) [___] (proper) use of this technology can cause serious problems. Therefore, internet users should behave (e) [___] (responsible).",
  "blanks": [
    {
      "id": "a",
      "answer": "modern",
      "accepted": [
        "modern",
        "Modern",
        "modern"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'modern' বসানো হয়েছে।"
    },
    {
      "id": "b",
      "answer": "communication",
      "accepted": [
        "communication",
        "Communication",
        "communication"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'communication' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "useful",
      "accepted": [
        "useful",
        "Useful",
        "useful"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'useful' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "improper",
      "accepted": [
        "improper",
        "Improper",
        "improper"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'improper' বসেছে।"
    },
    {
      "id": "e",
      "answer": "responsibly",
      "accepted": [
        "responsibly",
        "Responsibly",
        "responsibly"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'responsibly' বসেছে।"
    }
  ]
},
{
  "id": "sp-passage-7",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Traffic Rules.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #7: Traffic Rules)",
  "clues": [],
  "passage": "Traffic rules are made for public (a) [___] (safe). Unfortunately, many drivers are (b) [___] (care) about these rules. Their (c) [___] (responsible) behaviour often causes road accidents. Pedestrians should also avoid crossing roads (d) [___] (care). Strict laws and public (e) [___] (aware) can reduce accidents.",
  "blanks": [
    {
      "id": "a",
      "answer": "safety",
      "accepted": [
        "safety",
        "Safety",
        "safety"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'safety' বসানো হয়েছে।"
    },
    {
      "id": "b",
      "answer": "careless",
      "accepted": [
        "careless",
        "Careless",
        "careless"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'careless' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "irresponsible",
      "accepted": [
        "irresponsible",
        "Irresponsible",
        "irresponsible"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'irresponsible' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "carelessly",
      "accepted": [
        "carelessly",
        "Carelessly",
        "carelessly"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'carelessly' বসেছে।"
    },
    {
      "id": "e",
      "answer": "awareness",
      "accepted": [
        "awareness",
        "Awareness",
        "awareness"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'awareness' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-8",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Female Education.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #8: Female Education)",
  "clues": [],
  "passage": "Female education is necessary for national (a) [___] (progressive). In the past, many girls were deprived of (b) [___] (education) opportunities. This situation made them economically (c) [___] (dependent) and socially powerless. Education brings about the (d) [___] (empower) of women. No country can achieve real development by keeping women (e) [___] (educated).",
  "blanks": [
    {
      "id": "a",
      "answer": "progress",
      "accepted": [
        "progress",
        "Progress",
        "progress"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'progress' বসানো হয়েছে।"
    },
    {
      "id": "b",
      "answer": "educational",
      "accepted": [
        "educational",
        "Educational",
        "educational"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'educational' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "dependent",
      "accepted": [
        "dependent",
        "Dependent",
        "dependent"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'dependent' বসানো হয়েছে।"
    },
    {
      "id": "d",
      "answer": "empowerment",
      "accepted": [
        "empowerment",
        "Empowerment",
        "empowerment"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'empowerment' গঠিত হয়েছে।"
    },
    {
      "id": "e",
      "answer": "uneducated",
      "accepted": [
        "uneducated",
        "Uneducated",
        "uneducated"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'uneducated' বসেছে।"
    }
  ]
},
{
  "id": "sp-passage-9",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: The Value of Time.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #9: The Value of Time)",
  "clues": [],
  "passage": "Time is extremely (a) [___] (value), but many people use it (b) [___] (proper). They remain idle and waste their time in (c) [___] (use) activities. Such people are often (d) [___] (success) in life. A wise person understands the (e) [___] (important) of every moment.",
  "blanks": [
    {
      "id": "a",
      "answer": "valuable",
      "accepted": [
        "valuable",
        "Valuable",
        "valuable"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'valuable' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "improperly",
      "accepted": [
        "improperly",
        "Improperly",
        "improperly"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'improperly' বসেছে।"
    },
    {
      "id": "c",
      "answer": "useless",
      "accepted": [
        "useless",
        "Useless",
        "useless"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'useless' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "unsuccessful",
      "accepted": [
        "unsuccessful",
        "Unsuccessful",
        "unsuccessful"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'unsuccessful' গঠিত হয়েছে।"
    },
    {
      "id": "e",
      "answer": "importance",
      "accepted": [
        "importance",
        "Importance",
        "importance"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'importance' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-10",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Food Adulteration.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #10: Food Adulteration)",
  "clues": [],
  "passage": "Food adulteration is a serious problem. Some (a) [___] (honest) traders mix harmful substances with food. Adulterated food is extremely (b) [___] (health) and may cause various diseases. The government should take (c) [___] (effect) measures against food adulteration. Regular market inspections and public (d) [___] (aware) are necessary. The lawbreakers must receive proper (e) [___] (punish).",
  "blanks": [
    {
      "id": "a",
      "answer": "dishonest",
      "accepted": [
        "dishonest",
        "Dishonest",
        "dishonest"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'dishonest' বসেছে।"
    },
    {
      "id": "b",
      "answer": "unhealthy",
      "accepted": [
        "unhealthy",
        "Unhealthy",
        "unhealthy"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'unhealthy' বসেছে।"
    },
    {
      "id": "c",
      "answer": "effective",
      "accepted": [
        "effective",
        "Effective",
        "effective"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'effective' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "awareness",
      "accepted": [
        "awareness",
        "Awareness",
        "awareness"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'awareness' গঠিত হয়েছে।"
    },
    {
      "id": "e",
      "answer": "punishment",
      "accepted": [
        "punishment",
        "Punishment",
        "punishment"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'punishment' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-11",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Early Rising.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #11: Early Rising)",
  "clues": [],
  "passage": "Early rising is a highly (a) [___] (benefit) habit. An early riser can enjoy the (b) [___] (beautiful) of nature. The fresh morning air keeps a person (c) [___] (health) and active. Those who wake up late often become (d) [___] (regular) in their daily activities. Therefore, everyone should understand the (e) [___] (important) of early rising.",
  "blanks": [
    {
      "id": "a",
      "answer": "beneficial",
      "accepted": [
        "beneficial",
        "Beneficial",
        "beneficial"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'beneficial' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "beauty",
      "accepted": [
        "beauty",
        "Beauty",
        "beauty"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'beauty' বসানো হয়েছে।"
    },
    {
      "id": "c",
      "answer": "healthy",
      "accepted": [
        "healthy",
        "Healthy",
        "healthy"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'healthy' বসানো হয়েছে।"
    },
    {
      "id": "d",
      "answer": "irregular",
      "accepted": [
        "irregular",
        "Irregular",
        "irregular"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'irregular' বসেছে।"
    },
    {
      "id": "e",
      "answer": "importance",
      "accepted": [
        "importance",
        "Importance",
        "importance"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'importance' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-12",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Discipline.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #12: Discipline)",
  "clues": [],
  "passage": "Discipline is necessary for achieving (a) [___] (succeed) in life. A (b) [___] (discipline) person follows rules and performs duties punctually. On the other hand, an (c) [___] (discipline) person often experiences failure. Students should behave (d) [___] (obedient) and respect their teachers. Discipline ensures the smooth (e) [___] (manage) of every institution.",
  "blanks": [
    {
      "id": "a",
      "answer": "success",
      "accepted": [
        "success",
        "Success",
        "success"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'success' বসানো হয়েছে।"
    },
    {
      "id": "b",
      "answer": "disciplined",
      "accepted": [
        "disciplined",
        "Disciplined",
        "disciplined"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'disciplined' বসেছে।"
    },
    {
      "id": "c",
      "answer": "undisciplined",
      "accepted": [
        "undisciplined",
        "Undisciplined",
        "undisciplined"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'undisciplined' বসেছে।"
    },
    {
      "id": "d",
      "answer": "obediently",
      "accepted": [
        "obediently",
        "Obediently",
        "obediently"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'obediently' বসেছে।"
    },
    {
      "id": "e",
      "answer": "management",
      "accepted": [
        "management",
        "Management",
        "management"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'management' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-13",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: A Village Doctor.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #13: A Village Doctor)",
  "clues": [],
  "passage": "A village doctor is an important person in a rural area. He provides (a) [___] (medicine) treatment to poor villagers. He is usually very (b) [___] (care) when examining patients. Sometimes, he treats patients who are seriously (c) [___] (health). Although his income may be (d) [___] (sufficient), he continues serving the villagers. His services are highly (e) [___] (value) to the community.",
  "blanks": [
    {
      "id": "a",
      "answer": "medical",
      "accepted": [
        "medical",
        "Medical",
        "medical"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'medical' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "careful",
      "accepted": [
        "careful",
        "Careful",
        "careful"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'careful' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "unhealthy",
      "accepted": [
        "unhealthy",
        "Unhealthy",
        "unhealthy"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'unhealthy' বসেছে।"
    },
    {
      "id": "d",
      "answer": "insufficient",
      "accepted": [
        "insufficient",
        "Insufficient",
        "insufficient"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'insufficient' বসেছে।"
    },
    {
      "id": "e",
      "answer": "valuable",
      "accepted": [
        "valuable",
        "Valuable",
        "valuable"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'valuable' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-14",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Road Accidents.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #14: Road Accidents)",
  "clues": [],
  "passage": "Road accidents have become a common (a) [___] (occur) in our country. They usually happen because of the (b) [___] (care) of drivers. Some drivers operate vehicles (c) [___] (reckless) and ignore traffic rules. Many roads are also (d) [___] (suitable) for heavy traffic. Public awareness and the proper (e) [___] (enforce) of traffic laws can reduce accidents.",
  "blanks": [
    {
      "id": "a",
      "answer": "occurrence",
      "accepted": [
        "occurrence",
        "Occurrence",
        "occurrence"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'occurrence' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "carelessness",
      "accepted": [
        "carelessness",
        "Carelessness",
        "carelessness"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'carelessness' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "recklessly",
      "accepted": [
        "recklessly",
        "Recklessly",
        "recklessly"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'recklessly' বসেছে।"
    },
    {
      "id": "d",
      "answer": "unsuitable",
      "accepted": [
        "unsuitable",
        "Unsuitable",
        "unsuitable"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'unsuitable' গঠিত হয়েছে।"
    },
    {
      "id": "e",
      "answer": "enforcement",
      "accepted": [
        "enforcement",
        "Enforcement",
        "enforcement"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'enforcement' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-15",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: A School Library.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #15: A School Library)",
  "clues": [],
  "passage": "A school library is an extremely (a) [___] (use) place for students. It contains books on different subjects and provides valuable (b) [___] (inform). Books are usually arranged (c) [___] (system) on shelves. Students should maintain (d) [___] (silent) while reading. Regular library use can greatly (e) [___] (rich) their knowledge.",
  "blanks": [
    {
      "id": "a",
      "answer": "useful",
      "accepted": [
        "useful",
        "Useful",
        "useful"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'useful' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "information",
      "accepted": [
        "information",
        "Information",
        "information"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'information' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "systematically",
      "accepted": [
        "systematically",
        "Systematically",
        "systematically"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'systematically' বসেছে।"
    },
    {
      "id": "d",
      "answer": "silence",
      "accepted": [
        "silence",
        "Silence",
        "silence"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'silence' গঠিত হয়েছে।"
    },
    {
      "id": "e",
      "answer": "enrich",
      "accepted": [
        "enrich",
        "Enrich",
        "enrich"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'enrich' বসানো হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-16",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Climate Change.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #16: Climate Change)",
  "clues": [],
  "passage": "Climate change is a major (a) [___] (environment) problem. Human activities are mainly (b) [___] (response) for it. The temperature of the earth is rising because of the (c) [___] (excess) emission of greenhouse gases. Climate change has already affected many countries (d) [___] (serious). Immediate action is necessary to prevent further (e) [___] (destroy).",
  "blanks": [
    {
      "id": "a",
      "answer": "environmental",
      "accepted": [
        "environmental",
        "Environmental",
        "environmental"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'environmental' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "responsible",
      "accepted": [
        "responsible",
        "Responsible",
        "responsible"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'responsible' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "excessive",
      "accepted": [
        "excessive",
        "Excessive",
        "excessive"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'excessive' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "seriously",
      "accepted": [
        "seriously",
        "Seriously",
        "seriously"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'seriously' বসেছে।"
    },
    {
      "id": "e",
      "answer": "destruction",
      "accepted": [
        "destruction",
        "Destruction",
        "destruction"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'destruction' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-17",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Patriotism.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #17: Patriotism)",
  "clues": [],
  "passage": "Patriotism means love for one’s country. A (a) [___] (patriot) person works for the welfare of the nation. Such a person performs national duties (b) [___] (sincere). A person without love for the country is considered (c) [___] (patriot). Patriotism encourages people to protect national (d) [___] (independent). It is necessary for the peace and (e) [___] (prosperous) of a country.",
  "blanks": [
    {
      "id": "a",
      "answer": "patriotic",
      "accepted": [
        "patriotic",
        "Patriotic",
        "patriotic"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'patriotic' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "sincerely",
      "accepted": [
        "sincerely",
        "Sincerely",
        "sincerely"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'sincerely' বসেছে।"
    },
    {
      "id": "c",
      "answer": "unpatriotic",
      "accepted": [
        "unpatriotic",
        "Unpatriotic",
        "unpatriotic"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'unpatriotic' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "independence",
      "accepted": [
        "independence",
        "Independence",
        "independence"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'independence' গঠিত হয়েছে।"
    },
    {
      "id": "e",
      "answer": "prosperity",
      "accepted": [
        "prosperity",
        "Prosperity",
        "prosperity"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'prosperity' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-18",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: A Rainy Day.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #18: A Rainy Day)",
  "clues": [],
  "passage": "A rainy day is sometimes pleasant but often (a) [___] (comfort) for poor people. Roads become muddy and (b) [___] (pass) after heavy rain. People without umbrellas get (c) [___] (complete) wet. Day labourers may become (d) [___] (work) because they cannot go outside. However, rainfall is highly (e) [___] (benefit) for crops.",
  "blanks": [
    {
      "id": "a",
      "answer": "uncomfortable",
      "accepted": [
        "uncomfortable",
        "Uncomfortable",
        "uncomfortable"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'uncomfortable' গঠিত হয়েছে।"
    },
    {
      "id": "b",
      "answer": "impassable",
      "accepted": [
        "impassable",
        "Impassable",
        "impassable"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'impassable' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "completely",
      "accepted": [
        "completely",
        "Completely",
        "completely"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'completely' বসেছে।"
    },
    {
      "id": "d",
      "answer": "workless",
      "accepted": [
        "workless",
        "Workless",
        "workless"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'workless' গঠিত হয়েছে।"
    },
    {
      "id": "e",
      "answer": "beneficial",
      "accepted": [
        "beneficial",
        "Beneficial",
        "beneficial"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'beneficial' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-19",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: A Good Teacher.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #19: A Good Teacher)",
  "clues": [],
  "passage": "A good teacher plays an important role in the lives of students. He or she makes lessons (a) [___] (interest) and understandable. A good teacher is always (b) [___] (friend) towards students. He or she explains difficult topics (c) [___] (clear) and corrects students’ mistakes. An (d) [___] (patient) teacher may discourage learners. Therefore, patience and (e) [___] (kind) are essential qualities of a teacher.",
  "blanks": [
    {
      "id": "a",
      "answer": "interesting",
      "accepted": [
        "interesting",
        "Interesting",
        "interesting"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'interesting' বসেছে।"
    },
    {
      "id": "b",
      "answer": "friendly",
      "accepted": [
        "friendly",
        "Friendly",
        "friendly"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'friendly' বসেছে।"
    },
    {
      "id": "c",
      "answer": "clearly",
      "accepted": [
        "clearly",
        "Clearly",
        "clearly"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'clearly' বসেছে।"
    },
    {
      "id": "d",
      "answer": "impatient",
      "accepted": [
        "impatient",
        "Impatient",
        "impatient"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'impatient' বসেছে।"
    },
    {
      "id": "e",
      "answer": "kindness",
      "accepted": [
        "kindness",
        "Kindness",
        "kindness"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'kindness' গঠিত হয়েছে।"
    }
  ]
},
{
  "id": "sp-passage-20",
  "topicCategory": "Suffix and Prefix",
  "classLevel": "Class 9-10",
  "title": "Fill in the gaps (a) through (e) using suffix, prefix or both: Social Media.",
  "titleBn": "ব্র্যাকেটের মূল শব্দে উপযুক্ত Suffix, Prefix বা উভয়ই যোগ করে শূন্যস্থান পূরণ করুন (প্যাসেজ #20: Social Media)",
  "clues": [],
  "passage": "Social media has become extremely (a) [___] (popularity) among young people. It makes online (b) [___] (communicate) quick and easy. However, the (c) [___] (responsible) use of social media can create problems. Some users spread false or (d) [___] (lead) information. Everyone should use social media (e) [___] (wise).",
  "blanks": [
    {
      "id": "a",
      "answer": "popular",
      "accepted": [
        "popular",
        "Popular",
        "popular"
      ],
      "exp": "প্রদত্ত শূন্যস্থানের পদক্রম ও অর্থ অনুযায়ী সঠিক প্রত্যয়/উপসর্গ যুক্ত করে 'popular' বসানো হয়েছে।"
    },
    {
      "id": "b",
      "answer": "communication",
      "accepted": [
        "communication",
        "Communication",
        "communication"
      ],
      "exp": "Preposition/Article/Adjective এর পর Noun হিসেবে উপযুক্ত Suffix যোগে 'communication' গঠিত হয়েছে।"
    },
    {
      "id": "c",
      "answer": "irresponsible",
      "accepted": [
        "irresponsible",
        "Irresponsible",
        "irresponsible"
      ],
      "exp": "Noun এর পূর্বে বা Linking Verb এর পর Adjective হিসেবে Suffix যোগে 'irresponsible' গঠিত হয়েছে।"
    },
    {
      "id": "d",
      "answer": "misleading",
      "accepted": [
        "misleading",
        "Misleading",
        "misleading"
      ],
      "exp": "অর্থের বৈপরীত্য বা নেতিবাচক ভাব প্রকাশে বিপরীতার্থক Prefix যোগে 'misleading' বসেছে।"
    },
    {
      "id": "e",
      "answer": "wisely",
      "accepted": [
        "wisely",
        "Wisely",
        "wisely"
      ],
      "exp": "Adjective বা Verb কে Modify করার জন্য Adverb হিসেবে '-ly' প্রত্যয় যোগে 'wisely' বসেছে।"
    }
  ]
}
];

/**
 * Returns passage tests matching a topic name or chapter title
 * @param {string} topicName 
 * @param {string} classLevel 
 */
export function getPassagesForTopic(topicName = '', classLevel = '') {
  if (!topicName) return PASSAGE_TESTS.slice(0, 5);

  const lower = topicName.toLowerCase();

  // Match category with precise keywords
  let category = '';
  if (lower.includes('tag')) {
    category = 'Tag Questions';
  } else if (lower.includes('suffix') || lower.includes('prefix')) {
    category = 'Suffix and Prefix';
  } else if (lower.includes('part of speech') || lower.includes('parts of speech') || lower.includes('word form')) {
    category = 'Parts of Speech';
  } else if (lower.includes('article') || lower.includes('determiner')) {
    category = 'Articles';
  } else if (lower.includes('preposition')) {
    category = 'Prepositions';
  } else if (lower.includes('agreement') || lower.includes('subject-verb') || lower.includes('subject–verb')) {
    category = 'Subject-Verb Agreement';
  } else if (lower.includes('tense') || lower.includes('verb') || lower.includes('right form')) {
    category = 'Tense';
  } else if (lower.includes('voice')) {
    category = 'Voice';
  } else if (lower.includes('narration') || lower.includes('reported speech') || lower.includes('direct') || lower.includes('indirect')) {
    category = 'Narration';
  } else if (lower.includes('modifier')) {
    category = 'Modifiers';
  } else if (lower.includes('punctuation')) {
    category = 'Punctuation';
  } else if (lower.includes('sentence') || lower.includes('connector') || lower.includes('changing') || lower.includes('transformation')) {
    category = 'Sentences';
  }

  let matched = PASSAGE_TESTS.filter(p => p.topicCategory === category);

  if (matched.length === 0) {
    matched = PASSAGE_TESTS.filter(p => 
      p.topicCategory.toLowerCase().includes(lower) || 
      lower.includes(p.topicCategory.toLowerCase())
    );
  }

  if (matched.length === 0) {
    matched = PASSAGE_TESTS.filter(p => p.topicCategory === 'Articles');
  }

  return matched;
}
