// web/src/data/grammarPracticeData.js
// Enriched practice exercises, correct answers, and Bengali grammatical explanations for each exercise.

export const TOPIC_EXTRA_PRACTICE = {
  'Articles': [
    'Fill in the blank: He is ___ honest man who returned the lost wallet.',
    'Fill in the blank: ___ Bay of Bengal lies to the south of Bangladesh.',
    'Fill in the blank: Gold is ___ precious metal used in jewelry.',
    'Fill in the blank: He reads ___ Daily Star every morning.',
    'Fill in the blank: I saw ___ one-eyed beggar standing by the gate.',
    'Fill in the blank: ___ poor should be treated with dignity and compassion.',
    'Fill in the blank: He is ___ university student studying English.',
    'Fill in the blank: We arrived at the station ___ hour ago.'
  ],
  'Prepositions': [
    'Fill in the blank: He is proficient ___ speaking and writing English.',
    'Fill in the blank: The police caught the thief ___ the collar.',
    'Fill in the blank: She was absent ___ school yesterday due to illness.',
    'Fill in the blank: We must adhere ___ our principles in all situations.',
    'Fill in the blank: He died ___ overeating at the feast.',
    'Fill in the blank: The old man died ___ cancer last night.',
    'Fill in the blank: They arrived ___ Dhaka airport at 10 PM.',
    'Fill in the blank: He is senior ___ me by two years in college.'
  ],
  'Tense': [
    'Supply the correct verb form: If it rains, we (not go) out.',
    'Supply the correct verb form: It is high time we (change) our bad habits.',
    'Supply the correct verb form: The train (leave) before we reached the station.',
    'Supply the correct verb form: I wish I (be) a bird flying in the blue sky.',
    'Supply the correct verb form: He talks as if he (know) everything.',
    'Supply the correct verb form: While I (walk) in the garden, a thorn pricked my foot.',
    'Supply the correct verb form: Scarcely had he reached the school when the bell (ring).',
    'Supply the correct verb form: Five years (pass) since I last met you.'
  ],
  'Parts of Speech': [
    'Identify the part of speech of the underlined word: "Fast" in "He runs very fast."',
    'Identify the part of speech of the underlined word: "Water" in "Please water the plants."',
    'Add suffix/prefix to the root word: We should encourage the (able) students.',
    'Add suffix/prefix to the root word: Smoking is (harm) to health.',
    'Identify the part of speech of: "Honesty" in "Honesty is the best policy."',
    'Add suffix/prefix to the root word: Regular practice helps in (fluent) in English.',
    'Identify the part of speech of: "Above" in "The moral law is above all."',
    'Identify the part of speech of: "Well" in "He did well in the examination."'
  ],
  'Sentences': [
    'Transform into Negative: Only Allah can save us from this catastrophe.',
    'Transform into Complex: Seeing the tiger, the woodcutter ran away in fear.',
    'Transform into Simple: As he was ill, he could not attend the meeting.',
    'Transform into Assertive: How beautiful the full moon is!',
    'Add a tag question: Nobody believes a liar, ___?',
    'Add a tag question: Let us arrange a study tour, ___?',
    'Transform into Compound: In spite of his poverty, he is thoroughly honest.',
    'Transform into Affirmative: No sooner had the bell rung than the students entered.'
  ],
  'Voice': [
    'Change into Passive: The committee elected him president of the club.',
    'Change into Passive: One should keep one\'s promises without fail.',
    'Change into Passive: Who taught you French in school?',
    'Change into Passive: Do not look down upon the underprivileged.',
    'Change into Active: The thief was caught red-handed by the vigilant guard.',
    'Change into Passive: He made me do all the calculations.',
    'Change into Passive: Honey tastes sweet when eaten fresh.',
    'Change into Active: A new bridge is being constructed by the engineers.'
  ],
  'Narration': [
    'Change into Indirect Speech: He said to me, "Are you preparing for the board exam?"',
    'Change into Indirect Speech: Mother said to her son, "Always speak the truth."',
    'Change into Indirect Speech: The teacher said, "The sun rises in the east."',
    'Change into Indirect Speech: He said, "Alas! I am undone in this tragedy."',
    'Change into Indirect Speech: Father said to me, "May you succeed in life."',
    'Change into Indirect Speech: She said to him, "Please help me with this heavy bag."'
  ],
  'Modifiers': [
    'Use an intensifier to pre-modify the adjective: The lecture was (___) informative.',
    'Use an infinitive phrase to post-modify the verb: He went to the library (___).',
    'Use a present participle phrase to pre-modify the noun: The (___) dog barked loudly.',
    'Use a noun adjective to pre-modify the noun: He bought a new (___) ticket.',
    'Use a relative clause to post-modify the noun: The boy (___) won the first prize.'
  ],
  'Punctuation': [
    'Punctuate the sentence: the teacher said have you completed your homework karim',
    'Punctuate the sentence: alas the poor beggar died of cold last night',
    'Punctuate the sentence: will you go to dhaka tomorrow asked salam',
    'Punctuate the sentence: o friend look at the scenic beauty of the river'
  ],
  'Subject-Verb Agreement': [
    'Fill in the correct verb: The quality of these mangoes (is / are) very good.',
    'Fill in the correct verb: Neither of the two boys (has / have) submitted the paper.',
    'Fill in the correct verb: The news (is / are) too shocking to believe.',
    'Fill in the correct verb: Bread and butter (is / are) his favourite breakfast.',
    'Fill in the correct verb: Ten miles (is / are) a long distance to walk on foot.',
    'Fill in the correct verb: One of the students (was / were) absent from the class.'
  ]
}

/**
 * Returns structured answer and Bengali grammatical reason for any practice question
 */
export function getPracticeSolution(questionText = '', topicName = '', index = 0) {
  const text = questionText.toLowerCase()
  const top = (topicName || '').toLowerCase()

  // 1. Articles
  if (top.includes('article') || text.includes('article') || text.includes('honest man') || text.includes('bay of bengal')) {
    if (text.includes('honest man')) {
      return {
        answer: 'an',
        reason: '‘Honest’ শব্দটি ‘h’ দিয়ে শুরু হলেও উচ্চারণ ভাওয়েল সাউন্ড ‘অনেস্ট’ (/ɒ/) হওয়ায় ‘an’ বসেছে।'
      }
    }
    if (text.includes('bay of bengal')) {
      return {
        answer: 'The',
        reason: 'সাগর, উপসাগর (Bay), মহাসাগর বা নদীর নামের পূর্বে সর্বদা Definite Article ‘The’ বসে।'
      }
    }
    if (text.includes('precious metal') || text.includes('gold is')) {
      return {
        answer: 'a',
        reason: 'Singular Countable Noun Phrase (precious metal) কনসোনেন্ট সাউন্ড ‘p’ দিয়ে শুরু হওয়ায় ‘a’ বসেছে।'
      }
    }
    if (text.includes('daily star')) {
      return {
        answer: 'the',
        reason: 'সংবাদপত্রের নামের পূর্বে সর্বদা Definite Article ‘the’ বসে (যেমন: The Daily Star)।'
      }
    }
    if (text.includes('one-eyed')) {
      return {
        answer: 'a',
        reason: '‘One’ শব্দটি ‘o’ ভাওয়েল দিয়ে শুরু হলেও এর উচ্চারণ ‘ওয়া’ (W sound) হওয়ায় ‘a’ বসে।'
      }
    }
    if (text.includes('poor should be treated') || text.includes('the poor')) {
      return {
        answer: 'The',
        reason: 'Adjective ‘poor’ এর পূর্বে ‘The’ বসিয়ে সমগ্র দরিদ্র শ্রেণিকে Plural Common Noun হিসেবে বোঝানো হয়েছে।'
      }
    }
    if (text.includes('university student')) {
      return {
        answer: 'a',
        reason: '‘University’ শব্দটি ‘u’ ভাওয়েল দিয়ে শুরু হলেও উচ্চারণ ‘ইউ’ (/juː/) কনসোনেন্ট সাউন্ড হওয়ায় ‘a’ বসে।'
      }
    }
    if (text.includes('hour ago')) {
      return {
        answer: 'an',
        reason: '‘Hour’ শব্দে ‘h’ অনুচ্চারিত (silent) থেকে ভাওয়েল সাউন্ড ‘আওয়ার’ হওয়ায় ‘an’ বসে।'
      }
    }
    return {
      answer: 'a / an / the / x (প্রসঙ্গ অনুযায়ী)',
      reason: 'নিয়ম: নির্দিষ্ট কিছু বোঝাতে বা Superlative-এ ‘the’, একক সাধারণ ভাওয়েল সাউন্ডে ‘an’, কনসোনেন্ট সাউন্ডে ‘a’ এবং Uncountable/General Plural-এ কোনো article (x) বসে না।'
    }
  }

  // 2. Prepositions
  if (top.includes('preposition') || text.includes('preposition') || text.includes('proficient') || text.includes('adhere') || text.includes('absent')) {
    if (text.includes('proficient')) {
      return {
        answer: 'in',
        reason: 'Appropriate Preposition: ‘Proficient in’ অর্থ কোনো বিষয়ে দক্ষ বা পারদর্শী।'
      }
    }
    if (text.includes('by the collar') || text.includes('collar')) {
      return {
        answer: 'by',
        reason: 'কাউকে কোনো অঙ্গ বা পোশাক ধরে আটকানোর ক্ষেত্রে Preposition ‘by’ বসে (caught by the collar)।'
      }
    }
    if (text.includes('absent')) {
      return {
        answer: 'from',
        reason: 'Appropriate Preposition: ‘Absent from’ অর্থ কোথাও থেকে অনুপস্থিত থাকা।'
      }
    }
    if (text.includes('adhere')) {
      return {
        answer: 'to',
        reason: 'Appropriate Preposition: ‘Adhere to’ অর্থ কোনো নীতি বা সিদ্ধান্তে অবিচল বা দৃঢ় থাকা।'
      }
    }
    if (text.includes('overeating')) {
      return {
        answer: 'from',
        reason: 'বেশি খাওয়া বা কাজের ক্ষতিকর প্রভাবে মৃত্যুর ক্ষেত্রে ‘die from’ বসে।'
      }
    }
    if (text.includes('cancer')) {
      return {
        answer: 'of',
        reason: 'কোনো নির্দিষ্ট রোগ বা ব্যাধিতে মৃত্যুর ক্ষেত্রে সর্বদা ‘die of’ বসে (died of cancer)।'
      }
    }
    if (text.includes('airport')) {
      return {
        answer: 'at',
        reason: 'নির্দিষ্ট ছোট স্থান বা ট্রানজিট পয়েন্ট বোঝাতে Preposition ‘at’ বসে (arrived at Dhaka airport)।'
      }
    }
    if (text.includes('senior')) {
      return {
        answer: 'to',
        reason: 'ল্যাটিন কম্পারেটিভ (senior, junior, superior, inferior) এর পর ‘than’ না বসে ‘to’ বসে।'
      }
    }
    if (text.includes('cat is under') || text.includes('under the chair')) {
      return {
        answer: 'under',
        reason: 'কোনো কিছুর নিচে অবস্থান বোঝাতে Preposition ‘under’ ব্যবহৃত হয়।'
      }
    }
    return {
      answer: 'উপযুক্ত Preposition',
      reason: 'নিয়ম: নির্দিষ্ট সময় ও ছোট স্থানে ‘at’, বিস্তৃত স্থান ও বড় মাধ্যমে ‘in’, পৃষ্ঠতলে ‘on’, দিকে বোঝাতে ‘to’ এবং গ্রুপ শব্দের সাথে Appropriate Preposition ব্যবহৃত হয়।'
    }
  }

  // 3. Tense & Verbs
  if (top.includes('tense') || top.includes('verb') || text.includes('verb') || text.includes('high time') || text.includes('scarcely')) {
    if (text.includes('high time')) {
      return {
        answer: 'changed',
        reason: '‘It is high time’ এর পর কোনো Subject আসলে পরবর্তী Verb এর Past Simple Form (V2: changed) বসে।'
      }
    }
    if (text.includes('if it rains')) {
      return {
        answer: 'will not go',
        reason: 'First Conditional: If + Present Simple হলে Main Clause এ Future Simple (will + not + V1) বসে।'
      }
    }
    if (text.includes('train') && text.includes('reached')) {
      return {
        answer: 'had left',
        reason: 'অতীতের দুটি কাজের মধ্যে যেটি পূর্বে ঘটেছিল তার জন্য Past Perfect (had + V3: had left) বসে।'
      }
    }
    if (text.includes('wish i')) {
      return {
        answer: 'were',
        reason: 'অবাস্তব কল্পনা বা অসম্ভব ইচ্ছা প্রকাশে ‘wish’ এর পর be-verb হিসেবে সর্বদাই ‘were’ বসে।'
      }
    }
    if (text.includes('as if he')) {
      return {
        answer: 'knew',
        reason: 'Present Clause + ‘as if’ থাকলে পরবর্তী ক্লজে Past Simple (V2: knew) বসে।'
      }
    }
    if (text.includes('while i')) {
      return {
        answer: 'was walking',
        reason: '‘While’ এর পর সরাসরি Subject আসলে Past Continuous Tense (was walking) ব্যবহৃত হয়।'
      }
    }
    if (text.includes('scarcely had')) {
      return {
        answer: 'rang',
        reason: '‘Scarcely had... when’ কাঠামোয় when-এর পরবর্তী অংশ Past Simple (rang) হয়।'
      }
    }
    if (text.includes('five years')) {
      return {
        answer: 'have passed',
        reason: '‘since’ এর পরের অংশ Past Simple হলে পূর্বের অংশ Present Perfect (have passed) হয়।'
      }
    }
    return {
      answer: 'সঠিক ভার্ব ফর্ম',
      reason: 'নিয়ম: বাক্যটির সময়সূচক নির্দেশক (Time marker) ও শর্তের ধরন বিশ্লেষণ করে Tense ও Subject অনুযায়ী ভার্বের সঠিক রূপ নির্ণয় করতে হয়।'
    }
  }

  // 4. Parts of Speech
  if (top.includes('parts of speech') || top.includes('part of speech') || top.includes('suffix') || top.includes('prefix')) {
    if (text.includes('teacher teaches students') || text.includes('identify the nouns')) {
      return {
        answer: 'teacher, students',
        reason: '‘teacher’ এবং ‘students’ দ্বারা ব্যক্তি বা পেশা নির্দেশ করায় এগুলো Noun (বিশেষ্য পদ)।'
      }
    }
    if (text.includes('find pronouns') || text.includes('he gave her')) {
      return {
        answer: 'He, her',
        reason: 'Noun এর পরিবর্তে ব্যক্তির জায়গায় ব্যবহৃত হওয়ায় ‘He’ (Subjective) ও ‘her’ (Objective) হলো Pronoun।'
      }
    }
    if (text.includes('underline verbs') || text.includes('birds fly')) {
      return {
        answer: 'fly',
        reason: '‘fly’ (উড়া) দ্বারা কাজ বা ক্রিয়া সম্পাদন বোঝানো হয়েছে, তাই এটি Verb।'
      }
    }
    if (text.includes('tall man') || text.includes('black hat') || text.includes('adjectives in')) {
      return {
        answer: 'tall, black',
        reason: '‘tall’ এবং ‘black’ যথাক্রমে ‘man’ ও ‘hat’ নাউনের আকার ও রঙের গুণ নির্দেশ করায় এগুলো Adjective।'
      }
    }
    if (text.includes('sings beautifully') || text.includes('adverbs in')) {
      return {
        answer: 'beautifully',
        reason: '‘beautifully’ শব্দটি ‘sings’ ভার্বটির গান গাওয়ার ধরন বা গুণ প্রকাশ করায় এটি Adverb of Manner।'
      }
    }
    if (text.includes('runs very fast')) {
      return {
        answer: 'Adverb',
        reason: 'এখানে ‘fast’ শব্দটি ‘runs’ ভার্বটি কেমন করে দৌড়ায় তা নির্দেশ করায় এটি Adverb।'
      }
    }
    if (text.includes('water the plants')) {
      return {
        answer: 'Verb',
        reason: 'এখানে ‘water’ শব্দটি পানি দেওয়া কাজ প্রকাশ করতে ব্যবহৃত হয়েছে, তাই এটি Verb।'
      }
    }
    if (text.includes('able') && text.includes('students')) {
      return {
        answer: 'disabled / enable',
        reason: 'অর্থভেদে বিশেষ চাহিদা সম্পন্ন শিক্ষার্থী বোঝাতে ‘disabled’ অথবা সক্ষম করা অর্থে ‘enable’ গঠিত হয়।'
      }
    }
    if (text.includes('harm') && text.includes('health')) {
      return {
        answer: 'harmful',
        reason: 'Noun ‘harm’ এর সাথে সাফিক্স ‘-ful’ যুক্ত হয়ে Adjective ‘harmful’ (ক্ষতিকর) গঠিত হয়েছে।'
      }
    }
    if (text.includes('honesty is the best')) {
      return {
        answer: 'Abstract Noun',
        reason: '‘Honesty’ (সততা) একটি অদৃশ্য গুণ বা ধারণার নাম, তাই এটি Abstract Noun।'
      }
    }
    return {
      answer: 'নির্দিষ্ট পার্টস অফ স্পিচ',
      reason: 'নিয়ম: বাক্যে শব্দের অবস্থান ও কাজের ওপর ভিত্তি করে পার্টস অফ স্পিচ নির্ধারিত হয়।'
    }
  }

  // 5. Sentences, Transformation & Connectors
  if (top.includes('sentence') || top.includes('changing') || top.includes('transformation') || top.includes('connector')) {
    if (text.includes('only allah')) {
      return {
        answer: 'None but Allah can save us from this catastrophe.',
        reason: 'ব্যক্তি বা আল্লাহ/স্রষ্টা বোঝাতে ‘Only’ এর পরিবর্তে বাক্যের শুরুতে ‘None but’ বসে।'
      }
    }
    if (text.includes('seeing the tiger')) {
      return {
        answer: 'When the woodcutter saw the tiger, he ran away in fear.',
        reason: 'Present Participle Phrase যুক্ত Simple বাক্যকে Complex করতে সময় নির্দেশক ‘When’ এবং Past Simple ব্যবহৃত হয়।'
      }
    }
    if (text.includes('as he was ill')) {
      return {
        answer: 'Because of his illness, he could not attend the meeting.',
        reason: '‘As/Since’ যুক্ত কারণসূচক Complex বাক্যকে Simple করতে ‘Because of + possessive + noun’ বসে।'
      }
    }
    if (text.includes('how beautiful')) {
      return {
        answer: 'The full moon is very beautiful.',
        reason: '‘How + adjective’ যুক্ত Exclamatory বাক্যকে Assertive করতে ‘Subject + verb + very + adjective’ বসে।'
      }
    }
    if (text.includes('nobody believes a liar')) {
      return {
        answer: 'do they?',
        reason: '‘Nobody’ একটি নেতিবাচক অনির্দিষ্ট সর্বনাম, এর প্রোনাউন ‘they’ এবং নেতিবাচক হওয়ার কারণে Tag হবে এফার্মেটিভ: ‘do they?’।'
      }
    }
    if (text.includes('let us arrange')) {
      return {
        answer: 'shall we?',
        reason: '‘Let us’ বা ‘Let\'s’ দ্বারা প্রস্তাব বা পরামর্শ বোঝালে Tag Question সর্বদা ‘shall we?’ হয়।'
      }
    }
    return {
      answer: 'রূপান্তরিত বাক্য',
      reason: 'নিয়ম: বাক্যের মূল অর্থ অপরিবর্তিত রেখে ব্যাকরণিক ক্লজ ও লিংকারের পরিবর্তনের মাধ্যমে বাক্য রূপান্তর করতে হয়।'
    }
  }

  // 6. Voice
  if (top.includes('voice') || text.includes('passive') || text.includes('active')) {
    if (text.includes('elected him president')) {
      return {
        answer: 'He was elected president of the club by the committee.',
        reason: 'Factitive Object (president) অক্ষত রেখে মূল ব্যক্তিবাচক Object (him) কে Subject (He) বানিয়ে Past Simple Passive করা হয়েছে।'
      }
    }
    if (text.includes("one's promises")) {
      return {
        answer: 'Promises should be kept.',
        reason: 'Indefinite pronoun ‘one’ থাকলে প্যাসিভে সাধারণত ‘by one’ বাদ দিয়ে সরাসরি ‘Promises should be kept’ লেখা নিয়ম।'
      }
    }
    if (text.includes('who taught you french')) {
      return {
        answer: 'By whom were you taught French?',
        reason: '‘Who’ যুক্ত প্রশ্নবোধক বাক্যকে প্যাসিভ করার সময় ‘By whom + auxiliary + subject + V3’ কাঠামো অনুসরণ করা হয়।'
      }
    }
    if (text.includes('look down upon')) {
      return {
        answer: 'Let not the underprivileged be looked down upon.',
        reason: 'Negative Imperative বাক্যকে প্যাসিভ করার সময় ‘Let not + object + be + V3’ কাঠামো ব্যবহৃত হয়।'
      }
    }
    return {
      answer: 'সঠিক Voice রূপান্তর',
      reason: 'নিয়ম: Active-এর Object প্যাসিভে Subject হয়, Tense অনুযায়ী be-verb বসে, মূল Verb-এর Past Participle (V3) হয় এবং preposition সহকারে Subject অবজেক্টে পরিণত হয়।'
    }
  }

  // 7. Narration
  if (top.includes('narration') || top.includes('speech')) {
    if (text.includes('are you preparing')) {
      return {
        answer: 'He asked me if I was preparing for the board exam.',
        reason: 'Interrogative Sentence-এ Reporting Verb ‘asked’ হয়, লিংকার ‘if’ বসে এবং Tense পরিবর্তিত হয়ে Past Continuous হয়।'
      }
    }
    if (text.includes('always speak the truth')) {
      return {
        answer: 'Mother advised her son always to speak the truth.',
        reason: 'Imperative Sentence-এ উপদেশ বোঝালে Reporting Verb ‘advised’ এবং লিংকার হিসেবে ‘to + V1’ বসে।'
      }
    }
    if (text.includes('the sun rises in the east')) {
      return {
        answer: 'The teacher said that the sun rises in the east.',
        reason: 'Universal Truth (চিরন্তন সত্য) এর ক্ষেত্রে Narration রূপান্তরে Tense-এর কোনো পরিবর্তন হয় না।'
      }
    }
    return {
      answer: 'সঠিক পরোক্ষ উক্তি (Indirect Speech)',
      reason: 'নিয়ম: Reporting Verb, লিংকার (that/if/to), Person পরিবর্তন এবং Tense-এর ব্যাকরণিক রূপান্তরের মাধ্যমে Indirect Speech গঠিত হয়।'
    }
  }

  // 8. Subject-Verb Agreement
  if (top.includes('agreement') || top.includes('subject-verb')) {
    if (text.includes('quality of these mangoes')) {
      return {
        answer: 'is',
        reason: 'Prepositionাল ফ্রেজের পূর্বে মূল Subject হলো ‘The quality’ (Singular), তাই Verb হবে ‘is’।'
      }
    }
    if (text.includes('neither of the two boys')) {
      return {
        answer: 'has',
        reason: '‘Neither of’ দ্বারা দুজনের কাউকেই নয় বোঝায় এবং এটি Singular বিবেচনা করা হয়, তাই Verb ‘has’ বসে।'
      }
    }
    if (text.includes('the news')) {
      return {
        answer: 'is',
        reason: '‘News’ দেখতে Plural হলেও এটি আসলে Singular Uncountable Noun, তাই Singular Verb ‘is’ বসে।'
      }
    }
    if (text.includes('bread and butter')) {
      return {
        answer: 'is',
        reason: '‘Bread and butter’ একক খাদ্য বা বিষয় বোঝানোর ক্ষেত্রে Singular Verb ‘is’ গ্রহণ করে।'
      }
    }
    if (text.includes('ten miles')) {
      return {
        answer: 'is',
        reason: 'নির্দিষ্ট দূরত্ব বা পরিমাপ একক সমষ্টি প্রকাশ করায় Singular Verb ‘is’ বসে।'
      }
    }
    return {
      answer: 'সঠিক ভার্ব (is / has / was)',
      reason: 'নিয়ম: আসল হেড-ওয়ার্ড বা মূল Subject এর সংখ্যা (Singular/Plural) এবং অর্থ অনুসারে Verb নির্ধারিত হয়।'
    }
  }

  // Default Fallback
  return {
    answer: 'সঠিক উত্তর যাচাই করুন',
    reason: 'নিয়ম: প্রদত্ত ব্যাকরণিক সূত্র ও উদাহরণের সাথে মিলিয়ে সঠিক উত্তর ও পদক্রম নির্ধারণ করা হয়েছে।'
  }
}
