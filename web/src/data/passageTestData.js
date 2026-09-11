// web/src/data/passageTestData.js
// Authentic Bangladeshi NCTB Board Exam Style Passage-Wise Test Questions
// Features 5-gap (a to e) and 10-gap (a to j) contextual passages with instant grading,
// correct answer validation, and detailed Bengali grammatical explanations.

export const PASSAGE_TESTS = [
  // ==========================================
  // 1. ARTICLES (a, an, the, or x for zero article)
  // ==========================================
  {
    id: 'art-passage-1',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable articles (a, an, the) or put a cross (x) where no article is needed.',
    titleBn: 'উপযুক্ত Article (a, an, the) বসিয়ে শূন্যস্থান পূরণ করুন অথবা যেখানে প্রয়োজন নেই সেখানে (x) দিন।',
    clues: ['a', 'an', 'the', 'x'],
    passage: 'A library is (a) [___] storehouse of knowledge. (b) [___] books of different tastes and categories are kept here. It helps (c) [___] student to acquire wide knowledge. We should make (d) [___] best use of (e) [___] library to build a bright future.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'a',
        accepted: ['a', 'A'],
        explanation: 'সাধারণ Singular Countable Noun (storehouse) কনসোনেন্ট সাউন্ড ‘s’ দিয়ে শুরু হওয়ায় ‘a’ বসেছে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'The',
        accepted: ['the', 'The', 'x'],
        explanation: 'নির্দিষ্ট লাইব্রেরির বইগুলোকে নির্দেশ করায় Definite Article ‘The’ বসে (অথবা অনির্দিষ্টভাবে plural noun বিবেচনায় ‘x’ গৃহীত)।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'a',
        accepted: ['a', 'A'],
        explanation: 'যেকোনো সাধারণ শিক্ষার্থীকে বোঝাতে Singular Countable Noun (student) এর পূর্বে ‘a’ বসেছে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'the',
        accepted: ['the', 'The'],
        explanation: 'Superlative Degree (best) এর পূর্বে সর্বদাই Definite Article ‘the’ বসে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'a',
        accepted: ['a', 'the', 'A', 'The'],
        explanation: 'সাধারণ লাইব্রেরি হিসেবে ‘a library’ অথবা পরিচিত নির্দিষ্ট লাইব্রেরি হিসেবে ‘the library’ উভয়ই গ্রহণযোগ্য।'
      }
    ]
  },
  {
    id: 'art-passage-2',
    topicCategory: 'Articles',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable articles (a, an, the) or put a cross (x) for zero article.',
    titleBn: 'সঠিক Article (a, an, the বা x) দিয়ে শূন্যস্থান পূরণ করুন।',
    clues: ['a', 'an', 'the', 'x'],
    passage: 'Honesty is (a) [___] great virtue. An honest man is loved and respected by (b) [___] all. He never aspires after (c) [___] wealth or luxury. He rejects (d) [___] bribe with hatred. Thus he leads (e) [___] peaceful and happy life.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'a',
        accepted: ['a', 'A'],
        explanation: 'Singular Noun Phrase (great virtue) এর পূর্বে Indefinite Article ‘a’ বসেছে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'x',
        accepted: ['x', 'X', 'no article'],
        explanation: '‘all’ শব্দটি যখন নিজেই সর্বজনীন নির্দেশক হিসেবে ব্যবহৃত হয়, তখন এর পূর্বে কোনো article বসে না (Zero Article: x)।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'x',
        accepted: ['x', 'X', 'no article'],
        explanation: 'Uncountable Abstract Noun (wealth) এর পূর্বে সাধারণ অর্থে Article বসে না।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'a',
        accepted: ['a', 'A', 'the', 'The'],
        explanation: 'Singular Countable Noun (bribe) এর আগে ‘a’ অথবা নির্দিষ্ট বিবেচনায় ‘the’ বসে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'a',
        accepted: ['a', 'A'],
        explanation: 'Noun Phrase (peaceful and happy life) এর পূর্বে ‘a’ বসেছে।'
      }
    ]
  },
  {
    id: 'art-passage-3',
    topicCategory: 'Articles',
    classLevel: 'Class 11-12',
    title: 'Complete the text with suitable articles or zero article (x).',
    titleBn: 'উপযুক্ত Article বা শূন্য আর্টিকেলে (x) প্যাসেজটি সম্পূর্ণ করুন।',
    clues: ['a', 'an', 'the', 'x'],
    passage: 'English is (a) [___] international language. In order to achieve (b) [___] higher education abroad, we must master it. Today it functions as (c) [___] official medium in numerous global organizations. Without proficiency in English, (d) [___] graduate cannot secure (e) [___] prestigious career.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'an',
        accepted: ['an', 'An'],
        explanation: 'Vowel Sound দিয়ে শুরু হওয়া Adjective ‘international’ এর পূর্বে ‘an’ বসে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'x',
        accepted: ['x', 'X', 'no article'],
        explanation: 'Uncountable Noun ‘higher education’ এর আগে সাধারণ অর্থে কোনো article বসে না।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'an',
        accepted: ['an', 'the', 'An', 'The'],
        explanation: 'Vowel সাউন্ড যুক্ত ‘official’ এর আগে ‘an’ বসে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'a',
        accepted: ['a', 'A'],
        explanation: 'Singular Countable Noun ‘graduate’ কনসোনেন্ট সাউন্ড দিয়ে শুরু হওয়ায় ‘a’ বসেছে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'a',
        accepted: ['a', 'A'],
        explanation: 'Singular Noun Phrase ‘prestigious career’ এর আগে ‘a’ বসে।'
      }
    ]
  },

  // ==========================================
  // 2. PREPOSITIONS (Suitable Prepositions)
  // (Directly includes Kali Bazar High School Q7)
  // ==========================================
  {
    id: 'prep-passage-1',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Fill in the blanks with suitable prepositions.',
    titleBn: 'উপযুক্ত Preposition বসিয়ে শূন্যস্থান পূরণ করুন (কালী বাজার উচ্চ বিদ্যালয় অর্ধ-বার্ষিক পরীক্ষা প্রশ্ন)।',
    clues: ['by', 'for', 'of', 'about', 'in', 'to', 'with'],
    passage: 'A true friend is an asset. He stands (a) [___] his friends in time of danger. He is not a greedy person. He always wishes (b) [___] the welfare (c) [___] his friend. But it is a matter (d) [___] regret that a true friend is very rare today. A selfish man cannot be a true friend. He always thinks (e) [___] his own interest.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'by',
        accepted: ['by'],
        explanation: '‘Stand by’ একটি সুপরিচিত Phrasal Verb, যার অর্থ বিপদে পাশে থাকা বা সমর্থন করা।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'for',
        accepted: ['for'],
        explanation: 'কারো কল্যাণ কামনা করার ক্ষেত্রে Appropriate Preposition হিসেবে ‘wish for’ বসে।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'of',
        accepted: ['of'],
        explanation: '‘বন্ধুটির কল্যাণ’ (Welfare of his friend) — অধিকার বা সম্বন্ধ বোঝাতে ‘of’ বসে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'of',
        accepted: ['of'],
        explanation: '‘A matter of regret’ (দুঃখের বিষয়) — এটি একটি বহুল প্রচলিত ইংরেজি ইডিয়াম/ফ্রেজ।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'of',
        accepted: ['of', 'about'],
        explanation: 'কোনো বিষয়ে ভাবা বা চিন্তা করা বোঝাতে ‘think of’ বা ‘think about’ বসে।'
      }
    ]
  },
  {
    id: 'prep-passage-2',
    topicCategory: 'Prepositions',
    classLevel: 'All',
    title: 'Complete the passage using appropriate prepositions.',
    titleBn: 'উপযুক্ত Preposition ব্যবহার করে শূন্যস্থান পূরণ করুন।',
    clues: ['to', 'of', 'in', 'at', 'on', 'for', 'from'],
    passage: 'Patriotism is a noble virtue. It inspires a man to shed the last drop (a) [___] blood to defend the freedom (b) [___] his country. A man devoid (c) [___] patriotism is no better than a beast. He is dead (d) [___] all feelings of humanity. He never thinks (e) [___] anything noble.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'of',
        accepted: ['of'],
        explanation: '‘Last drop of blood’ (রক্তের শেষ বিন্দু) — সম্বন্ধবাচক হিসেবে ‘of’ বসেছে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'of',
        accepted: ['of'],
        explanation: '‘দেশের স্বাধীনতা’ (Freedom of his country) — এখানে ‘of’ বসে।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'of',
        accepted: ['of'],
        explanation: 'Appropriate Preposition: ‘Devoid of’ অর্থ বর্জিত বা শূন্য।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'to',
        accepted: ['to'],
        explanation: 'Appropriate Preposition: ‘Dead to’ অর্থ অনুভূতিহীন বা উদাসীন।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'of',
        accepted: ['of', 'about'],
        explanation: '‘Think of’ বা ‘Think about’ অর্থ চিন্তা করা।'
      }
    ]
  },

  // ==========================================
  // 3. RIGHT FORMS OF VERBS & TENSE
  // (Directly includes Kali Bazar High School Q3)
  // ==========================================
  {
    id: 'verb-passage-1',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Complete the following text with right forms of the verbs given in the box.',
    titleBn: 'বক্সের ভার্বগুলোর সঠিক রূপ (Right Forms of Verbs) বসিয়ে প্যাসেজটি পূরণ করুন (পরীক্ষার হুবহু প্রশ্ন)।',
    clues: ['equip', 'see', 'buy', 'realize', 'need', 'do', 'read', 'give', 'save', 'become'],
    passage: 'A book is like a storehouse of knowledge and source of joy. In books we can (a) [___] the society reflected. By (b) [___] books we can (c) [___] ourselves for life and (d) [___] our best selves. So reading books is one of the worthiest things that we can (e) [___].',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'see',
        accepted: ['see'],
        explanation: 'Modal Auxiliary Verb ‘can’ এর পর মূল Verb এর বেস ফর্ম (Base form: V1) ‘see’ বসে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'reading',
        accepted: ['reading'],
        explanation: 'Preposition ‘By’ এর পর Verb আসলে তার সাথে ing যুক্ত হয় (Gerund: reading)।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'equip',
        accepted: ['equip'],
        explanation: 'Modal ‘can’ এর অধীনে থাকায় প্রথম রূপ ‘equip’ বহাল থাকবে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'realize',
        accepted: ['realize', 'realise'],
        explanation: '‘and’ দ্বারা যুক্ত সমান্তরাল কাঠামোয় (parallel structure) can + V1 হিসেবে ‘realize’ বসে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'do',
        accepted: ['do'],
        explanation: 'Modal ‘can’ এর পরে মূল Verb এর Base form ‘do’ বসে।'
      }
    ]
  },
  {
    id: 'verb-passage-2',
    topicCategory: 'Tense',
    classLevel: 'All',
    title: 'Fill in the blanks with the right forms of verbs in brackets.',
    titleBn: 'ব্র্যাকেটের ভার্বগুলোর সঠিক রূপ (Tense & Right Form) দিয়ে প্যাসেজটি পূরণ করুন।',
    clues: ['be', 'reach', 'rain', 'start', 'wait'],
    passage: 'Yesterday when I (a) [___: reach] home, it (b) [___: rain] heavily. My mother (c) [___: wait] for me anxiously at the veranda. I had no umbrella, so I (d) [___: be] completely drenched. Since then, fever (e) [___: start] bothering me.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'reached',
        accepted: ['reached'],
        explanation: 'অতীতের নির্দিষ্ট সময় ‘Yesterday’ ও ‘when’ ক্লজের সাধারণ অতীত নির্দেশ করতে Past Simple ‘reached’ বসে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'was raining',
        accepted: ['was raining'],
        explanation: 'অতীতে একটি কাজ চলাকালীন অন্য ঘটনা বোঝাতে Past Continuous ‘was raining’ বসেছে।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'was waiting',
        accepted: ['was waiting'],
        explanation: 'অতীতে অপেক্ষমাণ অবস্থা বোঝাতে Past Continuous ‘was waiting’ সঠিক।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'was',
        accepted: ['was'],
        explanation: 'Subject ‘I’ এবং অতীত প্রেক্ষাপটের কারণে ‘be’ ভার্বের Past Form ‘was’ বসে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'has started',
        accepted: ['has started', 'started'],
        explanation: '‘Since then’ (তখন থেকে অদ্যাবধি) থাকলে সাধারণত Present Perfect Tense (has started) বসে।'
      }
    ]
  },

  // ==========================================
  // 4. SUFFIXES & PREFIXES (Word Formation)
  // (Directly includes Kali Bazar High School Q6)
  // ==========================================
  {
    id: 'suffix-passage-1',
    topicCategory: 'Parts of Speech',
    classLevel: 'All',
    title: 'Complete the text adding suffixes, prefixes or both with the root words.',
    titleBn: 'মূল শব্দের সাথে Suffix বা Prefix যুক্ত করে প্যাসেজটি সম্পূর্ণ করুন (কালী বাজার উচ্চ বিদ্যালয় প্রশ্ন)।',
    clues: ['brother', 'Buddha', 'believe', 'concept', 'true'],
    passage: 'To maintain peace in this world, we need universal (a) [___: brother]. In this world there are different religions like Islam, Christianity, (b) [___: Buddha] etc. Friendship among the (c) [___: believe] of different religions can play an important role to drive away distrust and (d) [___: concept] about different religions. We should prefer humanity to religious difference. A person who is (e) [___: true] aware of his own religion can never dislike the followers of other religions.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'brotherhood',
        accepted: ['brotherhood'],
        explanation: 'Adjective ‘universal’ এর পরে Noun প্রয়োজন। ‘brother’ এর সাথে ‘-hood’ যুক্ত হয়ে Abstract Noun ‘brotherhood’ (ভ্রাতৃত্ব) হয়েছে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'Buddhism',
        accepted: ['Buddhism', 'buddhism'],
        explanation: 'ধর্মের নাম বোঝাতে ‘Buddha’ এর সাথে ‘-ism’ যুক্ত হয়ে ‘Buddhism’ (বৌদ্ধধর্ম) গঠিত হয়।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'believers',
        accepted: ['believers', 'believer'],
        explanation: 'The + Noun (Plural): বিশ্বাসীদের বোঝাতে ‘believe’ ভার্বের সাথে ‘-ers’ যুক্ত হয়ে Plural Noun ‘believers’ হয়েছে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'misconception',
        accepted: ['misconception', 'misconceptions'],
        explanation: '‘distrust’ (অবিশ্বাস) এর সমান্তরালে ভুল ধারণা বোঝাতে ‘mis-’ প্রিফিক্স এবং ‘-tion’ সাফিক্স যুক্ত হয়ে ‘misconceptions’ গঠিত হয়েছে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'truly',
        accepted: ['truly'],
        explanation: 'Adjective ‘aware’ কে Modify করার জন্য ‘true’ এর সাথে ‘-ly’ যুক্ত হয়ে Adverb ‘truly’ গঠিত হয়েছে।'
      }
    ]
  },

  // ==========================================
  // 5. SENTENCE CONNECTORS / LINKERS
  // (Directly includes Kali Bazar High School Q8)
  // ==========================================
  {
    id: 'connector-passage-1',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Complete the passage using suitable connectors / linkers.',
    titleBn: 'উপযুক্ত Sentence Connector ব্যবহার করে প্যাসেজটি সম্পূর্ণ করুন (বোর্ড পরীক্ষার প্রশ্ন)।',
    clues: ['of', 'for', 'in', 'between', 'In', 'therefore', 'moreover', 'as a result'],
    passage: 'A man (a) [___] letters is respected always even after his death (b) [___] his works. He is an enlightened person who devotes himself with a view to spreading education (c) [___] the society. He always teaches people how to differentiate (d) [___] the right and wrong. (e) [___] fact, he is the authentic person whom the world should respect.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'of',
        accepted: ['of'],
        explanation: '‘A man of letters’ একটি বিখ্যাত ইংরেজি ইডিয়াম, যার অর্থ বিদ্বান বা পণ্ডিত ব্যক্তি।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'for',
        accepted: ['for'],
        explanation: 'কোনো কাজের কারণে শ্রদ্ধা পাওয়া বোঝাতে কারণসূচক Preposition ‘for’ বসে।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'in',
        accepted: ['in', 'throughout', 'across'],
        explanation: 'সমাজে শিক্ষা ছড়াতে ‘in the society’ বা ‘throughout the society’ বসে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'between',
        accepted: ['between'],
        explanation: 'দুটি বিষয় (right and wrong) এর মধ্যে পার্থক্য নির্দেশ করতে ‘differentiate between’ বসে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'In',
        accepted: ['In', 'in'],
        explanation: '‘In fact’ (প্রকৃতপক্ষে) বাক্যের শুরুতে জোর দেওয়ার জন্য বহুল ব্যবহৃত লিংকার।'
      }
    ]
  },
  {
    id: 'connector-passage-2',
    topicCategory: 'Sentences',
    classLevel: 'Class 9-10',
    title: 'Use suitable sentence linkers in the passage below.',
    titleBn: 'প্যাসেজে সঠিক Sentence Connector / Linker বসিয়ে পূরণ করুন।',
    clues: ['Firstly', 'Secondly', 'Moreover', 'Therefore', 'Finally'],
    passage: 'Trees are our best friends. (a) [___], they provide us with oxygen without which we cannot survive. (b) [___], they protect the topsoil from erosion. (c) [___], they give us sweet fruits and timber for shelter. (d) [___], we must plant more trees every year. (e) [___], we should never cut down trees indiscriminately.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'Firstly',
        accepted: ['Firstly', 'First', 'First of all'],
        explanation: 'প্রথম পয়েন্ট বা কারণ উপস্থাপনে ‘Firstly’ বা ‘First of all’ বসে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'Secondly',
        accepted: ['Secondly', 'Besides', 'Next'],
        explanation: 'দ্বিতীয় ধারাবাহিক কারণ নির্দেশ করতে ‘Secondly’ বসে।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'Moreover',
        accepted: ['Moreover', 'Furthermore', 'In addition'],
        explanation: 'অতিরিক্ত তথ্য যোগ করতে ‘Moreover’ বা ‘Furthermore’ বসে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'Therefore',
        accepted: ['Therefore', 'So', 'Hence', 'As a result'],
        explanation: 'পূর্ববর্তী বক্তব্যের সারসংক্ষেপ বা সিদ্ধান্ত বোঝাতে ‘Therefore’ বসে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'Finally',
        accepted: ['Finally', 'Lastly', 'Above all'],
        explanation: 'চূড়ান্ত পরামর্শ বা সমাপ্তি টানতে ‘Finally’ বা ‘Above all’ বসে।'
      }
    ]
  },

  // ==========================================
  // 6. TAG QUESTIONS
  // (Directly includes Kali Bazar High School Q5)
  // ==========================================
  {
    id: 'tag-passage-1',
    topicCategory: 'Sentences',
    classLevel: 'All',
    title: 'Add tag questions to the statements below.',
    titleBn: 'নিচের বাক্যগুলোতে সঠিক Tag Question যুক্ত করুন (কালী বাজার উচ্চ বিদ্যালয় প্রশ্ন)।',
    clues: ["isn't it?", "aren't they?", "don't we?", "shall we?", "isn't it?"],
    passage: '(a) Hello, Liza. Father\'s birthday is on Monday next, [___]?\n(b) Yes, Lili, only two days are left, [___]?\n(c) We need to buy some beautiful gifts this year, [___]?\n(d) Of course. Let\'s go to a watch shop, [___]?\n(e) What a nice idea, Liza, [___]?',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: "isn't it",
        accepted: ["isn't it", "is not it", "isn't it?"],
        explanation: 'বাক্যটি Affirmative এবং Subject ‘Father\'s birthday’ (ইতরবাচক/দিন), তাই Tag হবে Negative: ‘isn\'t it?’'
      },
      {
        id: 'b',
        label: '(b)',
        answer: "aren't they",
        accepted: ["aren't they", "are not they", "aren't they?"],
        explanation: '‘two days are left’ Affirmative এবং Subject Plural হওয়ায় Tag হবে: ‘aren\'t they?’'
      },
      {
        id: 'c',
        label: '(c)',
        answer: "don't we",
        accepted: ["don't we", "do not we", "don't we?"],
        explanation: '‘need’ এখানে মূল Verb (Present Simple), তাই ‘We need’ এর Tag হবে ‘don\'t we?’'
      },
      {
        id: 'd',
        label: '(d)',
        answer: "shall we",
        accepted: ["shall we", "shall we?"],
        explanation: '‘Let\'s’ (Let us) দিয়ে শুরু হওয়া প্রস্তাবমূলক বাক্যের Tag Question সর্বদা ‘shall we?’ হয়।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: "isn't it",
        accepted: ["isn't it", "is not it", "isn't it?"],
        explanation: 'Exclamatory Sentence ‘What a nice idea (it is)’ এর গোপন অংশ অনুযায়ী Tag হবে ‘isn\'t it?’'
      }
    ]
  },

  // ==========================================
  // 7. MODIFIERS (Pre-modifiers & Post-modifiers)
  // (NCTB Class 11-12 Board Standard)
  // ==========================================
  {
    id: 'mod-passage-1',
    topicCategory: 'Modifiers',
    classLevel: 'Class 11-12',
    title: 'Read the passage and fill in the blanks with suitable modifiers as directed.',
    titleBn: 'নির্দেশনা অনুযায়ী উপযুক্ত Modifier বসিয়ে প্যাসেজটি সম্পূর্ণ করুন।',
    clues: ['national', 'properly', 'to eradicate', 'great', 'our'],
    passage: 'Illiteracy is a (a) [___: pre-modify the noun] curse of our country. It hinders all kinds of development. We must educate all people (b) [___: post-modify the verb]. The government is taking steps (c) [___: use an infinitive phrase] this curse. It is (d) [___: use a possessive] sacred duty to cooperate with the government. Otherwise, our (e) [___: pre-modify the noun] progress will be hampered.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'great',
        accepted: ['great', 'big', 'serious', 'grave'],
        explanation: 'Noun ‘curse’ কে Pre-modify করার জন্য একটি উপযুক্ত Adjective ‘great’ বা ‘serious’ বসে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'properly',
        accepted: ['properly', 'well', 'rapidly'],
        explanation: 'Verb ‘educate’ কে Post-modify করার জন্য একটি উপযুক্ত Adverb ‘properly’ বসে।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'to eradicate',
        accepted: ['to eradicate', 'to remove', 'to eliminate'],
        explanation: 'উদ্দেশ্য বোঝাতে Infinitive (to + V1) ‘to eradicate’ বা ‘to remove’ সঠিক।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'our',
        accepted: ['our'],
        explanation: 'Possessive Pronoun হিসেবে ‘our’ (আমাদের) বসে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'national',
        accepted: ['national', 'overall'],
        explanation: 'Noun ‘progress’ কে Pre-modify করার জন্য Adjective হিসেবে ‘national’ উপযুক্ত।'
      }
    ]
  },

  // ==========================================
  // 8. VOICE (Active & Passive Transformation)
  // ==========================================
  {
    id: 'voice-passage-1',
    topicCategory: 'Voice',
    classLevel: 'All',
    title: 'Complete the passage by changing sentences between active and passive voice as directed.',
    titleBn: 'Voice পরিবর্তনের নিয়ম অনুসারে শূন্যস্থানগুলো পূরণ করুন।',
    clues: ['is loved', 'was written', 'must be taken', 'are planted', 'is respected'],
    passage: 'An honest man (a) [___: love - passive] by everyone in the community. Hamlet (b) [___: write - passive] by William Shakespeare centuries ago. Care (c) [___: must take - passive] of elderly citizens in every home. Trees (d) [___: plant - passive] in large numbers during the rainy season. A scholar (e) [___: respect - passive] everywhere for his wisdom.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'is loved',
        accepted: ['is loved'],
        explanation: 'Present Simple Passive: am/is/are + V3 (loved)।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'was written',
        accepted: ['was written'],
        explanation: 'Past Simple Passive: was/were + V3 (written)।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'must be taken',
        accepted: ['must be taken'],
        explanation: 'Modal Passive: must + be + V3 (taken)।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'are planted',
        accepted: ['are planted'],
        explanation: 'Plural Subject ‘Trees’ এর জন্য Present Simple Passive: are + V3 (planted)।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'is respected',
        accepted: ['is respected'],
        explanation: 'Singular Subject ‘A scholar’ এর জন্য Present Passive: is + V3 (respected)।'
      }
    ]
  },

  // ==========================================
  // 9. NARRATION / REPORTED SPEECH
  // ==========================================
  {
    id: 'narration-passage-1',
    topicCategory: 'Narration',
    classLevel: 'All',
    title: 'Complete the reported speech passage by filling in the blanks.',
    titleBn: 'Direct থেকে Indirect Narration রূপান্তরের নিয়ম অনুযায়ী শূন্যস্থান পূরণ করুন।',
    clues: ['asked', 'if he had completed', 'replied that', 'had finished', 'praised him'],
    passage: 'The teacher entered the class and (a) [___] the student why he was late. The student politely (b) [___] that he had missed the school bus. The teacher then inquired (c) [___] his home assignment. The student responded that he (d) [___] it already. Finally, the teacher allowed him to sit down and (e) [___] for his honesty.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'asked',
        accepted: ['asked', 'enquired of'],
        explanation: 'Interrogative Sentence এর Indirect Narration এ Reporting Verb ‘asked’ বসে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'replied that',
        accepted: ['replied that', 'answered that'],
        explanation: 'প্রশ্নের উত্তর দেওয়ার ক্ষেত্রে ‘replied that’ ব্যবহার করা হয়।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'if he had done',
        accepted: ['if he had done', 'if he had completed', 'whether he had done'],
        explanation: 'Yes/No কোশ্চেনের জন্য ‘if/whether’ + Subject + Past Perfect বসে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'had finished',
        accepted: ['had finished', 'had completed'],
        explanation: 'Present Perfect পরিবর্তিত হয়ে Past Perfect (had + V3) হয়।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'praised him',
        accepted: ['praised him', 'thanked him'],
        explanation: 'সাধুবাদ বা প্রশংসা বোঝাতে ‘praised him’ সঠিক।'
      }
    ]
  },

  // ==========================================
  // 10. PUNCTUATION & CAPITALIZATION
  // ==========================================
  {
    id: 'punc-passage-1',
    topicCategory: 'Punctuation',
    classLevel: 'All',
    title: 'Identify the missing punctuation and capitalization marks.',
    titleBn: 'সঠিক বিরামচিহ্ন ও ক্যাপিটালাইজেশন (Punctuation) অনুযায়ী শূন্যস্থান পূরণ করুন।',
    clues: ['?', ',', '.', '!', '"'],
    passage: 'The traveler said to the peasant (a) [___: quote/comma] "Can you tell me the way to the nearest inn (b) [___: mark]" The peasant replied (c) [___: comma] "Yes, sir, I can (d) [___: mark]" "Thank you very much (e) [___: mark]" said the traveler.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: ',',
        accepted: [','],
        explanation: 'Direct Speech এর পূর্বে Reporting Verb এর পর কমা (,) বসে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: '?',
        accepted: ['?'],
        explanation: 'প্রশ্নবোধক বাক্য (Can you tell me...) এর শেষে প্রশ্নচিহ্ন (?) বসে।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: ',',
        accepted: [','],
        explanation: 'Reporting Verb ‘replied’ এর পরে কমা (,) বসে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: '.',
        accepted: ['.'],
        explanation: 'Assertive বক্তব্য শেষ হওয়ায় ফুলস্টপ (.) বসে।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: '!',
        accepted: ['!', '.'],
        explanation: 'কৃতজ্ঞতা বা আবেগ প্রকাশ করতে বিস্ময়সূচক চিহ্ন (!) অথবা ফুলস্টপ (.) ব্যবহৃত হয়।'
      }
    ]
  },

  // ==========================================
  // 11. SUBJECT-VERB AGREEMENT
  // ==========================================
  {
    id: 'sva-passage-1',
    topicCategory: 'Subject-Verb Agreement',
    classLevel: 'All',
    title: 'Fill in the blanks with correct verbs according to subject-verb agreement.',
    titleBn: 'Subject-Verb Agreement এর নিয়ম মেনে সঠিক Verb দ্বারা শূন্যস্থান পূরণ করুন।',
    clues: ['is', 'are', 'has', 'have', 'were'],
    passage: 'Slow and steady (a) [___: win] the race. Neither the teacher nor the students (b) [___: be] present in the auditorium. Fifty thousand taka (c) [___: be] a handsome amount for this charity. Each of the participants (d) [___: have] received an award certificate. The quality of these mangoes (e) [___: be] exceptional.',
    blanks: [
      {
        id: 'a',
        label: '(a)',
        answer: 'wins',
        accepted: ['wins'],
        explanation: '‘Slow and steady’ একটি একক ভাব প্রকাশ করায় Singular Verb ‘wins’ বসে।'
      },
      {
        id: 'b',
        label: '(b)',
        answer: 'were',
        accepted: ['were', 'are'],
        explanation: '‘Neither... nor’ থাকলে শেষের Subject (the students - Plural) অনুযায়ী Plural Verb ‘were’ বা ‘are’ বসে।'
      },
      {
        id: 'c',
        label: '(c)',
        answer: 'is',
        accepted: ['is', 'was'],
        explanation: 'নির্দিষ্ট পরিমাণ অর্থ (Fifty thousand taka) একক সমষ্টি বোঝায়, তাই Singular Verb ‘is’ বসে।'
      },
      {
        id: 'd',
        label: '(d)',
        answer: 'has',
        accepted: ['has'],
        explanation: '‘Each of’ এর পর Plural Noun থাকলেও Verb সর্বদা Singular ‘has’ হয়।'
      },
      {
        id: 'e',
        label: '(e)',
        answer: 'is',
        accepted: ['is', 'was'],
        explanation: 'মূল Subject হলো ‘The quality’ (Singular), তাই Verb হবে ‘is’।'
      }
    ]
  }
]

/**
 * Returns passage tests matching a topic name or chapter title
 * @param {string} topicName 
 * @param {string} classLevel 
 */
export function getPassagesForTopic(topicName = '', classLevel = '') {
  if (!topicName) return PASSAGE_TESTS.slice(0, 3)

  const lower = topicName.toLowerCase()

  // Match category with precise keywords
  let category = ''
  if (lower.includes('part of speech') || lower.includes('parts of speech') || lower.includes('suffix') || lower.includes('prefix') || lower.includes('word form')) {
    category = 'Parts of Speech'
  } else if (lower.includes('article') || lower.includes('determiner')) {
    category = 'Articles'
  } else if (lower.includes('preposition')) {
    category = 'Prepositions'
  } else if (lower.includes('agreement') || lower.includes('subject-verb') || lower.includes('subject–verb')) {
    category = 'Subject-Verb Agreement'
  } else if (lower.includes('tense') || lower.includes('verb') || lower.includes('right form')) {
    category = 'Tense'
  } else if (lower.includes('voice')) {
    category = 'Voice'
  } else if (lower.includes('narration') || lower.includes('reported speech') || lower.includes('direct') || lower.includes('indirect')) {
    category = 'Narration'
  } else if (lower.includes('modifier')) {
    category = 'Modifiers'
  } else if (lower.includes('punctuation')) {
    category = 'Punctuation'
  } else if (lower.includes('sentence') || lower.includes('connector') || lower.includes('changing') || lower.includes('transformation') || lower.includes('tag')) {
    category = 'Sentences'
  }

  let matched = PASSAGE_TESTS.filter(p => p.topicCategory === category)

  if (matched.length === 0) {
    // Fallback: search anywhere in title or topicCategory
    matched = PASSAGE_TESTS.filter(p => 
      p.topicCategory.toLowerCase().includes(lower) || 
      lower.includes(p.topicCategory.toLowerCase())
    )
  }

  // If still empty, return standard Articles & Preposition tests
  if (matched.length === 0) {
    matched = PASSAGE_TESTS.slice(0, 2)
  }

  return matched
}
