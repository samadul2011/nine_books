// Comprehensive educational explanations, Bengali translations, formulas, and practical examples
// Strictly scoped TOPIC-WISE to ensure accurate context for every lesson

// 1. ARTICLES RESOLVER
function resolveArticleRule(text, idx) {
  const low = text.toLowerCase()
  if (low.includes("use 'a'") || (low.startsWith("a ") && low.includes("consonant"))) {
    return {
      bn_name: "A-এর সাধারণ নিয়ম (Indefinite Article)",
      bn_expl: "ব্যঞ্জনধ্বনি (Consonant sound: ক, খ, গ... সাউন্ড) দিয়ে শুরু হওয়া একক গণনাযোগ্য (singular countable) Noun-এর পূর্বে 'a' বসে।",
      structure: "a + Consonant Sound (যেমন: a boy, a pen, a cat)",
      example_breakdown: "I saw a dog. / He bought a new car.",
      tips: "শব্দটি অবশ্যই একটি (singular) এবং গণনা করা যায় এমন হতে হবে।"
    }
  }
  if (low.includes("university") || low.includes("european") || low.includes("one-eyed") || low.includes("yoo") || low.includes("starts with 'yoo'")) {
    return {
      bn_name: "A-এর ব্যতিক্রমী নিয়ম ('ইউ' ও 'ওয়া' ধ্বনি)",
      bn_expl: "শব্দের শুরুতে Vowel (U বা E বা O) থাকা সত্ত্বেও যদি তার উচ্চারণ 'ইউ' (yoo) বা 'ওয়া' (waa)-এর মতো হয়, তবে ভাওয়েল থাকা সত্ত্বেও তার পূর্বে 'an' না বসে 'a' বসে।",
      structure: "a + 'yoo' sound (university, European) / 'waa' sound (one-eyed)",
      example_breakdown: "a university, a European trip, a one-eyed man, a uniform, a useful book.",
      tips: "অক্ষর নয়, উচ্চারণ গুরুত্বপূর্ণ! University-এর উচ্চারণ 'ইউ'-এর মতো হয় বলেই 'a' বসে।"
    }
  }
  if (low.includes("use 'an'") || (low.startsWith("an ") && low.includes("vowel"))) {
    return {
      bn_name: "An-এর সাধারণ নিয়ম (Indefinite Article)",
      bn_expl: "স্বরধ্বনি (Vowel sound: অ, আ, ই, এ... সাউন্ড) দিয়ে শুরু হওয়া একক গণনাযোগ্য Noun-এর পূর্বে 'an' বসে।",
      structure: "an + Vowel Sound (যেমন: an apple, an egg, an umbrella)",
      example_breakdown: "She ate an orange after school. / He has an umbrella.",
      tips: "উচ্চারণ যাতে মসৃণ ও শ্রুতিমধুর হয় সেজন্য ভাওয়েল সাউন্ডের পূর্বে an বসে।"
    }
  }
  if (low.includes("silent") || low.includes("honest") || low.includes("hour") || low.includes("mba") || low.includes("mp") || low.includes("ssc")) {
    return {
      bn_name: "An-এর ব্যতিক্রমী নিয়ম (Silent 'H' ও সংক্ষিপ্ত পদবি)",
      bn_expl: "শব্দের শুরুর Consonant 'H' যদি অনুচ্চারিত (silent) থাকে বা সংক্ষিপ্ত শব্দের (abbreviation) শুরুতে ভাওয়েল সাউন্ড এলে 'an' বসে।",
      structure: "an + silent 'h' (hour, honest, heir) / vowel-sound abbreviation (MP, MBA, SSC)",
      example_breakdown: "an hour (উচ্চারণ আওয়ার), an honest man, an heir, an MP (উচ্চারণ এম), an MBA degree.",
      tips: "H উচ্চারিত হলে 'a' বসে (a horse, a house); কিন্তু H অনুচ্চারিত থাকলে 'an' বসে (an honest boy)।"
    }
  }
  if (low.includes("use 'the'") || low.includes("salt") || low.includes("sun") || low.includes("earth") || low.includes("the phone")) {
    return {
      bn_name: "The-এর ব্যবহার (Definite Article)",
      bn_expl: "নির্দিষ্ট কোনো ব্যক্তি, বস্তু, স্থান, নদী, পর্বতমালা, ধর্মগ্রন্থ, সংবাদপত্র, বা পূর্বে উল্লেখিত কোনো Noun-কে পুনরাবৃত্তি করলে তার পূর্বে 'the' বসে।",
      structure: "the + Specific Noun / Unique Things / Superlative Degree",
      example_breakdown: "I bought a phone yesterday. The phone is amazing. / Pass me the salt. / The sun rises in the east.",
      tips: "Superlative Degree (the best, the tallest) এবং একক মহাজাগতিক বস্তুর পূর্বে সর্বদা 'the' বসে।"
    }
  }
  if (low.includes("no article") || low.includes("zero article") || low.includes("dogs love") || low.includes("water boils") || low.includes("happiness")) {
    return {
      bn_name: "Zero Article (যেখানে কোনো আর্টিকেল বসে না)",
      bn_expl: "সাধারণ অর্থে বহুবচন (plural) বা গণনাহীন (uncountable) Noun, খেলাধুলা, ভাষা, ঋতু, রোগ ও খাদ্যসামগ্রীর নামের পূর্বে কোনো আর্টিকেল বসে না (x)।",
      structure: "Zero Article (x) + General Plural / Uncountable / Languages / Sports",
      example_breakdown: "Water boils at 100°C. / Dogs love bones. / He plays cricket. / Honesty is the best policy.",
      tips: "তবে নির্দিষ্ট করে বোঝালে 'the' বসতে পারে (যেমন: The water of this pond is dirty)।"
    }
  }
  return {
    bn_name: "আর্টিকেলের নিয়ম ও প্রয়োগ",
    bn_expl: "প্রসঙ্গ ও শব্দের উচ্চারণ লক্ষ্য করে সঠিক Article (a, an, the বা zero article) ব্যবহার করুন।",
    structure: "Article + (Adjective) + Noun",
    example_breakdown: "He is a good student. / She gave me an apple. / The Padma is a big river.",
    tips: "বোর্ড পরীক্ষায় শূন্যস্থানের পরবর্তী শব্দের প্রথম উচ্চারণ লক্ষ্য করা অত্যন্ত জরুরি।"
  }
}

// 2. PREPOSITIONS RESOLVER
function resolvePrepositionRule(text, idx) {
  const low = text.toLowerCase()
  if (low.includes("'at'") && (low.includes("time") || low.includes("5 pm") || low.includes("noon") || low.includes("night"))) {
    return {
      bn_name: "At-এর ব্যবহার (নির্দিষ্ট সময়)",
      bn_expl: "ঘড়ির নির্দিষ্ট সময়, নির্দিষ্ট মুহূর্ত (যেমন: at noon, at night, at dawn) বোঝাতে 'at' বসে।",
      structure: "at + Specific Point in Time (যেমন: at 5 PM, at midnight)",
      example_breakdown: "The train arrives at 10:30 AM. / We have lunch at noon.",
      tips: "নির্দিষ্ট বিন্দু বা ক্ষুদ্র সময়ের ক্ষেত্রে সর্বদা 'at' ব্যবহৃত হয়।"
    }
  }
  if (low.includes("'on'") && (low.includes("day") || low.includes("date") || low.includes("monday") || low.includes("july"))) {
    return {
      bn_name: "On-এর ব্যবহার (বার ও নির্দিষ্ট তারিখ)",
      bn_expl: "সপ্তাহের দিন (Sunday, Friday), নির্দিষ্ট তারিখ (16th December) বা বিশেষ দিবসের পূর্বে 'on' বসে।",
      structure: "on + Days / Dates / Special Days (যেমন: on Friday, on my birthday)",
      example_breakdown: "Our exam starts on Monday. / Bangladesh became independent on 16th December.",
      tips: "দিন বা তারিখের সাথে সর্বদা 'on' বসে।"
    }
  }
  if (low.includes("'in'") && (low.includes("year") || low.includes("month") || low.includes("season") || low.includes("morning") || low.includes("2024"))) {
    return {
      bn_name: "In-এর ব্যবহার (মাস, বছর, ঋতু ও দীর্ঘ সময়)",
      bn_expl: "মাস (in May), বছর (in 1971), ঋতু (in summer, in winter) এবং দিনের বড় অংশ (in the morning) বোঝাতে 'in' বসে।",
      structure: "in + Months / Years / Centuries / Seasons",
      example_breakdown: "I was born in 2005. / It rains heavily in July. / Birds sing in the morning.",
      tips: "দীর্ঘ সময়কালের ক্ষেত্রে 'in' এবং নির্দিষ্ট দিনের ক্ষেত্রে 'on' বসে।"
    }
  }
  if (low.includes("'in'") && (low.includes("country") || low.includes("city") || low.includes("dhaka") || low.includes("room") || low.includes("space"))) {
    return {
      bn_name: "In-এর ব্যবহার (স্থান ও সীমানা)",
      bn_expl: "কোনো আবদ্ধ কক্ষের ভেতরে, বড় শহর, জেলা বা দেশের পূর্বে 'in' বসে।",
      structure: "in + Big Cities / Countries / Enclosed Spaces",
      example_breakdown: "We live in Dhaka. / He is sitting in the library.",
      tips: "বড় স্থানের পূর্বে in এবং ছোট নির্দিষ্ট বিন্দুর পূর্বে at বসে।"
    }
  }
  if (low.includes("'at'") && (low.includes("school") || low.includes("bus stop") || low.includes("home") || low.includes("point"))) {
    return {
      bn_name: "At-এর ব্যবহার (নির্দিষ্ট অবস্থান)",
      bn_expl: "নির্দিষ্ট অবস্থান, ঠিকানা বা ছোট স্থানের পূর্বে 'at' বসে।",
      structure: "at + Specific Point / Landmark (at school, at home, at the bus stop)",
      example_breakdown: "Wait for me at the station. / My father is at home.",
      tips: "Home, school, station, bus stop-এর পূর্বে 'at' বসে।"
    }
  }
  if (low.includes("into") || low.includes("movement") || low.includes("entering")) {
    return {
      bn_name: "Into-এর ব্যবহার (গতিশীল প্রবেশ)",
      bn_expl: "বাইরে থেকে কোনো কিছুর ভেতরে গতি নিয়ে প্রবেশ করা বোঝাতে 'into' বসে।",
      structure: "Verb of Movement + into + Place/Container",
      example_breakdown: "The teacher walked into the classroom. / The frog jumped into the pond.",
      tips: "স্থির অবস্থা বোঝাতে in, কিন্তু গতিশীল প্রবেশ বোঝাতে into বসে।"
    }
  }
  if (low.includes("collocation") || low.includes("abide") || low.includes("interested") || low.includes("good at") || low.includes("fond of")) {
    return {
      bn_name: "Appropriate Preposition (উপযুক্ত প্রিপজিশন)",
      bn_expl: "কিছু নির্দিষ্ট শব্দের পর সুনির্দিষ্ট Preposition বসে। এদের অর্থ নির্দিষ্ট থাকে।",
      structure: "Word + Fixed Preposition (abide by, good at, interested in)",
      example_breakdown: "He is good at mathematics. / She is fond of sweets. / You must abide by the rules.",
      tips: "পরীক্ষায় এই প্রিপজিশনগুলো সরাসরি প্রশ্ন হিসেবে আসে।"
    }
  }
  return {
    bn_name: "প্রিপজিশনের নিয়ম ও প্রয়োগ",
    bn_expl: "Noun বা Pronoun-এর সাথে বাক্যের অন্য অংশের সম্পর্ক প্রকাশ করতে সঠিক Preposition ব্যবহার করুন।",
    structure: "Preposition + Noun / Pronoun / Gerund (V-ing)",
    example_breakdown: "The book is on the table. / We are proud of our freedom fighters.",
    tips: "সময়, স্থান ও গতিবিধির প্রেক্ষাপট বুঝে সঠিক প্রিপজিশন বসান।"
  }
}

// 3. TENSE RESOLVER
function resolveTenseRule(text, idx) {
  const low = text.toLowerCase()
  if (low.includes("continuous") && (low.includes("present") || low.includes("am/is/are") || low.includes("in progress"))) {
    return {
      bn_name: "Present Continuous Tense (ঘটমান বর্তমান কাল)",
      bn_expl: "বর্তমানে কোনো কাজ চলছে বা ঘটছে বোঝাতে Present Continuous Tense ব্যবহৃত হয়।",
      structure: "Subject + am/is/are + Verb-ing + Object",
      example_breakdown: "I am writing a letter now. / The birds are singing in the garden.",
      tips: "Now, at this moment, at present থাকলে সাধারণত Present Continuous Tense হয়।"
    }
  }
  if (low.includes("simple present") || (low.includes("base verb") && low.includes("s/es")) || (low.includes("routine") && low.includes("fact"))) {
    return {
      bn_name: "Present Simple Tense (সাধারণ বর্তমান কাল)",
      bn_expl: "নিয়মিত অভ্যাস, চিরন্তন সত্য বা সাধারণ ঘটনা বোঝাতে Simple Present Tense ব্যবহৃত হয়।",
      structure: "Subject + V1 (Base verb) + s/es (if 3rd person singular) + Object",
      example_breakdown: "The sun rises in the east. / She reads the newspaper every morning.",
      tips: "Subject যদি He/She/It বা একক নাম হয়, তবে Verb-এর সাথে s বা es যোগ করতে হয়।"
    }
  }
  if (low.includes("simple past") || low.includes("v2") || low.includes("past form") || low.includes("yesterday")) {
    return {
      bn_name: "Past Simple Tense (সাধারণ অতীত কাল)",
      bn_expl: "অতীতে কোনো নির্দিষ্ট সময়ে একটি কাজ সম্পন্ন হয়েছিল বোঝাতে Simple Past Tense ব্যবহৃত হয়।",
      structure: "Subject + V2 (Past form of Verb) + Object",
      example_breakdown: "They visited Sylhet last week. / Shakib scored a century yesterday.",
      tips: "Yesterday, ago, last year, once, in 1971 ইত্যাদি অতীতের শব্দ থাকলে Verb-এর V2 রূপ বসে।"
    }
  }
  if (low.includes("perfect") && (low.includes("present") || low.includes("have/has") || low.includes("already"))) {
    return {
      bn_name: "Present Perfect Tense (পুরাঘটিত বর্তমান কাল)",
      bn_expl: "কোনো কাজ এইমাত্র শেষ হয়েছে কিন্তু তার ফলাফল এখনো বিদ্যমান বোঝাতে Present Perfect Tense ব্যবহৃত হয়।",
      structure: "Subject + have/has + V3 (Past Participle) + Object",
      example_breakdown: "I have finished my homework. / He has just arrived from Chittagong.",
      tips: "Just, just now, already, yet, recently থাকলে Present Perfect Tense হয়।"
    }
  }
  if (low.includes("past perfect") || (low.includes("had") && low.includes("before"))) {
    return {
      bn_name: "Past Perfect Tense (পুরাঘটিত অতীত কাল)",
      bn_expl: "অতীতে দুটি কাজের মধ্যে যে কাজটি অপেক্ষাকৃত পূর্বে ঘটেছিল তা Past Perfect এবং পরেরটি Simple Past হয়।",
      structure: "Past Perfect (had + V3) + before + Simple Past (V2) অথবা Simple Past + after + Past Perfect",
      example_breakdown: "The patient had died before the doctor came. / We reached the station after the train had left.",
      tips: "Before-এর পূর্বে had + V3 এবং After-এর পরে had + V3 বসে।"
    }
  }
  if (low.includes("future") || low.includes("will")) {
    return {
      bn_name: "Future Simple Tense (সাধারণ ভবিষ্যৎ কাল)",
      bn_expl: "ভবিষ্যতে কোনো কাজ সংঘটিত হবে বোঝাতে Future Simple Tense ব্যবহৃত হয়।",
      structure: "Subject + will/shall + V1 (Base verb) + Object",
      example_breakdown: "We will start the new project tomorrow. / I shall help you in need.",
      tips: "Tomorrow, next week, next year, soon ইত্যাদি থাকলে Future Simple Tense হয়।"
    }
  }
  return {
    bn_name: "কালের গঠন ও প্রয়োগ (Tense Structure)",
    bn_expl: "ক্রিয়া সম্পাদনের সময় অনুযায়ী Tense নির্ধারিত হয়। সঠিক সহায়ক ক্রিয়া ও ক্রিয়ার রূপ লক্ষ্য করুন।",
    structure: "Subject + Auxiliary Verb + Principal Verb + Extension",
    example_breakdown: "She has been studying since morning. / They were playing when it rained.",
    tips: "Tense-এর পরিবর্তন সরাসরি ইংরেজি বাক্যের অর্থ নির্ধারণ করে।"
  }
}

// 4. PARTS OF SPEECH RESOLVER (Strictly for Parts of Speech topics)
function resolvePartsOfSpeechRule(text, idx) {
  const low = text.toLowerCase()
  if (low.startsWith("noun:") || (low.includes("noun") && (low.includes("person") || low.includes("names a")))) {
    return {
      bn_name: "বিশেষ্য পদ (Noun)",
      bn_expl: "যে শব্দ দ্বারা কোনো ব্যক্তি, বস্তু, স্থান, গুণ, অবস্থা বা সমষ্টির নাম বোঝায় তাকে Noun বলে।",
      structure: "Noun = Person / Place / Thing / Idea / Name",
      example_breakdown: "Karim lives in Dhaka. (Karim = ব্যক্তি, Dhaka = স্থান)",
      tips: "চেনার উপায়: শব্দের শেষে -tion, -ment, -ness, -ity, -hood, -ship, -er, -or থাকলে Noun হয়।"
    }
  }
  if (low.startsWith("pronoun:") || (low.includes("pronoun") && (low.includes("in place of") || low.includes("replaces")))) {
    return {
      bn_name: "সর্বনাম পদ (Pronoun)",
      bn_expl: "বারবার Noun-এর পুনরাবৃত্তি এড়াতে Noun-এর পরিবর্তে যে শব্দ ব্যবহৃত হয় তাকে Pronoun বলে।",
      structure: "Subject Pronouns (I, We, You, He, She, They) | Object Pronouns (me, us, him, her, them)",
      example_breakdown: "Sumon is honest. He (Pronoun) always speaks the truth.",
      tips: "ব্যক্তির ক্ষেত্রে He/She/They এবং বস্তুর ক্ষেত্রে It ব্যবহৃত হয়।"
    }
  }
  if (low.startsWith("verb:") || (low.includes("verb") && (low.includes("action") || low.includes("state")))) {
    return {
      bn_name: "ক্রিয়া পদ (Verb)",
      bn_expl: "যে শব্দ দ্বারা কোনো কাজ করা, হওয়া, থাকা বা কোনো অবস্থা প্রকাশ পায় তাকে Verb বলে।",
      structure: "Base Form (V1) ➔ Past Form (V2) ➔ Past Participle (V3)",
      example_breakdown: "The students write poems. (write = ক্রিয়া) / The baby is sleeping.",
      tips: "Verb ছাড়া কোনো ইংরেজি বাক্য সম্পূর্ণ হতে পারে না।"
    }
  }
  if (low.startsWith("adjective:") || (low.includes("adjective") && (low.includes("describes a noun") || low.includes("modifies a noun")))) {
    return {
      bn_name: "বিশেষণ পদ (Adjective)",
      bn_expl: "যে শব্দ Noun বা Pronoun-এর দোষ, গুণ, অবস্থা, সংখ্যা বা পরিমাণ প্রকাশ করে তাকে Adjective বলে।",
      structure: "Adjective + Noun (যেমন: red apple) অথবা Linking Verb + Adjective (যেমন: He is happy)",
      example_breakdown: "She bought five (সংখ্যা) beautiful (গুণ) flowers.",
      tips: "চেনার উপায়: শব্দের শেষে -ful, -less, -able, -ive, -ous, -ic থাকলে সাধারণত Adjective হয়।"
    }
  }
  if (low.startsWith("adverb:") || (low.includes("adverb") && (low.includes("describes a verb") || low.includes("quickly")))) {
    return {
      bn_name: "ক্রিয়া-বিশেষণ (Adverb)",
      bn_expl: "যে শব্দ কোনো Verb, Adjective বা অন্য কোনো Adverb-কে বিশেষায়িত করে (কখন, কোথায়, কীভাবে কাজ ঘটে) তাকে Adverb বলে।",
      structure: "Adjective + ly = Adverb (যেমন: quick + ly = quickly, slow + ly = slowly)",
      example_breakdown: "The boy speaks politely. / He walks very fast.",
      tips: "How? (কীভাবে), Where? (কোথায়), When? (কখন)-এর উত্তর পাওয়া যায় Adverb দিয়ে।"
    }
  }
  if (low.startsWith("conjunction:") || low.includes("conjunction")) {
    return {
      bn_name: "সংযোজক অব্যয় (Conjunction)",
      bn_expl: "যে শব্দ দুই বা ততোধিক Word, Phrase বা Clause-কে সংযুক্ত করে তাকে Conjunction বলে।",
      structure: "Coordinating (and, but, or, so) | Subordinating (because, though, if, when)",
      example_breakdown: "He worked hard but (বিপরীত ভাব) failed. / Since he was ill, he could not come.",
      tips: "And সমজাতীয় ধারণা এবং But বিপরীত ধারণা যুক্ত করে।"
    }
  }
  if (low.startsWith("interjection:") || low.includes("interjection") || low.includes("feeling")) {
    return {
      bn_name: "আবেগসূচক অব্যয় (Interjection)",
      bn_expl: "যে শব্দ দ্বারা মনের আকস্মিক আনন্দ, দুঃখ, বিস্ময় বা ভয় প্রকাশ পায় তাকে Interjection বলে।",
      structure: "Interjection! + Sentence (যেমন: Hurrah! We won.)",
      example_breakdown: "Alas! The poor farmer is no more. / Bravo! You have done a great job.",
      tips: "Interjection-এর পরে সর্বদা বিস্ময়সূচক চিহ্ন (!) বসে।"
    }
  }
  return {
    bn_name: "পদ প্রকরণ (Parts of Speech)",
    bn_expl: "বাক্যে ব্যবহৃত প্রত্যেকটি অর্থপূর্ণ শব্দ এক একটি Part of Speech। শব্দের কাজের ওপর ভিত্তি করে পদ নির্ধারিত হয়।",
    structure: "8 Parts of Speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection",
    example_breakdown: "The clever fox quickly jumped over the lazy dog.",
    tips: "একই শব্দ বাক্যে ব্যবহারের ওপর ভিত্তি করে ভিন্ন ভিন্ন Part of Speech হতে পারে।"
  }
}

// 5. VOICE RESOLVER
function resolveVoiceRule(text, idx) {
  const low = text.toLowerCase()
  if (low.includes("passive") || low.includes("active and passive")) {
    return {
      bn_name: "Passive Voice-এর গঠন",
      bn_expl: "Passive Voice-এ কাজটির ফলাফল বা Object-কে প্রাধান্য দেওয়া হয় এবং মূল Verb সর্বদা Past Participle (V3) হয়।",
      structure: "Object as Sub + be verb (Tense অনুযায়ী) + V3 + by + Sub as Obj",
      example_breakdown: "Active: She writes a letter. ➔ Passive: A letter is written by her.",
      tips: "Subject রূপান্তর: I ➔ me, We ➔ us, He ➔ him, She ➔ her, They ➔ them."
    }
  }
  if (low.includes("active")) {
    return {
      bn_name: "Active Voice-এর ধারণা",
      bn_expl: "Active Voice-এ Subject নিজে সক্রিয়ভাবে কাজটি সম্পন্ন করে।",
      structure: "Subject + Finite Verb + Object",
      example_breakdown: "The cat caught the mouse. / Bangladesh won the series.",
      tips: "সাধারণ বাক্য গঠনে Subject শুরুতে থাকে।"
    }
  }
  return {
    bn_name: "বাচ্য পরিবর্তন (Voice Transformation)",
    bn_expl: "Active থেকে Passive করার সময় Tense অনুযায়ী সঠিক Be Verb এবং মূল Verb-এর V3 রূপ ব্যবহার করুন।",
    structure: "Sub ➔ Obj (by যোগে), Obj ➔ Sub, Verb ➔ be + V3",
    example_breakdown: "Active: They play football. ➔ Passive: Football is played by them.",
    tips: "Continuous tense-এ 'being' এবং Perfect tense-এ 'been' যুক্ত হয়।"
  }
}

// 6. NARRATION RESOLVER
function resolveNarrationRule(text, idx) {
  const low = text.toLowerCase()
  if (low.includes("direct")) {
    return {
      bn_name: "Direct Speech (প্রত্যক্ষ উক্তি)",
      bn_expl: "বক্তার মুখের অবিকল বক্তব্য উদ্ধৃতি চিহ্নের (Inverted comma) মধ্যে উপস্থাপন করাকে Direct Speech বলে।",
      structure: "Reporting Clause + , + \"Reported Speech\"",
      example_breakdown: "He said, \"I am learning English.\"",
      tips: "Direct speech-এ কমার পর প্রথম অক্ষর ক্যাপিটাল হয়।"
    }
  }
  if (low.includes("indirect")) {
    return {
      bn_name: "Indirect Speech (পরোক্ষ উক্তি)",
      bn_expl: "বক্তার বক্তব্য নিজের ভাষায় অর্থের বিকৃতি না ঘটিয়ে প্রকাশ করাকে Indirect Speech বলে।",
      structure: "Reporting Subject + told/asked + that/if + Subject + Past Tense",
      example_breakdown: "He said that he was learning English.",
      tips: "Present Tense সাধারণত Past Tense-এ পরিবর্তিত হয়।"
    }
  }
  return {
    bn_name: "উক্তি পরিবর্তনের নিয়ম (Narration Rules)",
    bn_expl: "Reporting verb অতীত কালের হলে ভেতরের Tense, Person এবং নৈকট্যসূচক শব্দ পরিবর্তিত হয়।",
    structure: "Tense Shift: Present ➔ Past, Past Simple ➔ Past Perfect | Now ➔ Then, Today ➔ That day",
    example_breakdown: "Father said to me, \"You should read attentively.\" ➔ Father advised me to read attentively.",
    tips: "Person পরিবর্তন: 1st person Subject অনুযায়ী, 2nd person Object অনুযায়ী পরিবর্তিত হয়।"
  }
}

// 7. SUBJECT-VERB AGREEMENT RESOLVER
function resolveSubjectVerbRule(text, idx) {
  const low = text.toLowerCase()
  if (low.includes("singular") || low.includes("one of") || low.includes("each") || low.includes("every")) {
    return {
      bn_name: "Singular Subject-এর নিয়ম",
      bn_expl: "Subject যদি একবচন (Singular) হয়, অথবা Each, Every, One of the... থাকে, তবে Verb সর্বদা Singular হয়।",
      structure: "Singular Subject ➔ Singular Verb (is, was, has, verb+s/es)",
      example_breakdown: "One of my friends is a doctor. (Friends বহুবচন হলেও Subject হলো One)। / Every student was present.",
      tips: "'One of the'-এর পর Noun plural হলেও Verb অবশ্যই singular হবে।"
    }
  }
  if (low.includes("plural") || low.includes("and")) {
    return {
      bn_name: "Plural Subject ও 'And'-এর নিয়ম",
      bn_expl: "দুটি Subject যখন 'and' দ্বারা যুক্ত হয়, তখন তারা বহুবচন (Plural) হিসেবে গণ্য হয় এবং Verb plural হয়।",
      structure: "Sub 1 + and + Sub 2 ➔ Plural Verb (are, were, have)",
      example_breakdown: "Hasan and Mahin are playing football in the field.",
      tips: "ব্যতিক্রম: দুটি শব্দ মিলে একটি ধারণা বোঝালে singular হয় (Bread and butter is my favorite breakfast)।"
    }
  }
  if (low.includes("either") || low.includes("neither") || low.includes("nor") || low.includes("or")) {
    return {
      bn_name: "Either...or / Neither...nor-এর নিয়ম",
      bn_expl: "Either...or বা Neither...nor দ্বারা যুক্ত হলে Verb-এর রূপ তার সবচেয়ে নিকটবর্তী Subject অনুযায়ী নির্ধারিত হয়।",
      structure: "Neither A nor B + Verb (B অনুযায়ী)",
      example_breakdown: "Neither the teacher nor the students were present. / Either he or I am mistaken.",
      tips: "Verb-এর ঠিক আগের Subject-টি খেয়াল করুন।"
    }
  }
  return {
    bn_name: "Subject-Verb Agreement-এর মূল নীতি",
    bn_expl: "Subject-এর Number (বচন) ও Person (পুরুষ) অনুযায়ী Verb-এর সঠিক রূপ নির্ধারণ করাই হলো মূল নিয়ম।",
    structure: "Singular Subject ➔ Singular Verb | Plural Subject ➔ Plural Verb",
    example_breakdown: "The quality of the mangoes was good. (Subject হলো quality, mangoes নয়)।",
    tips: "Prepositional phrase (যেমন: of the mangoes) বাদ দিয়ে মূল Subject চিহ্নিত করুন।"
  }
}

// 8. SENTENCES & CLAUSES RESOLVER
function resolveSentenceRule(text, idx) {
  const low = text.toLowerCase()
  if (low.includes("subject") && low.includes("predicate")) {
    return {
      bn_name: "Subject ও Predicate (উদ্দেশ্য ও বিধেয়)",
      bn_expl: "বাক্যে যার সম্পর্কে কিছু বলা হয় সে হলো Subject (উদ্দেশ্য), এবং Subject সম্পর্কে যা কিছু বলা হয় তা হলো Predicate (বিধেয়)।",
      structure: "Sentence = Subject (কে/কারা) + Predicate (Verb ও বাকি অংশ)",
      example_breakdown: "The brave soldiers (Subject) fought for the motherland (Predicate).",
      tips: "Verb-কে 'কে' বা 'কারা' দিয়ে প্রশ্ন করলে Subject পাওয়া যায়।"
    }
  }
  if (low.includes("phrase") || low.includes("clause")) {
    return {
      bn_name: "Phrase বনাম Clause (বাক্যাংশ)",
      bn_expl: "Phrase হলো এমন শব্দগুচ্ছ যাতে কোনো Finite Verb (সমাপিকা ক্রিয়া) থাকে না; পক্ষান্তরে Clause-এ নিজস্ব Subject ও Finite Verb থাকে।",
      structure: "Phrase = No Finite Verb | Clause = Subject + Finite Verb",
      example_breakdown: "Phrase: in front of the gate. | Clause: because he was ill.",
      tips: "Clause একটি পূর্ণ বাক্যের অংশ বা পূর্ণ বাক্য হতে পারে, কিন্তু Phrase কখনোই পূর্ণ বাক্য নয়।"
    }
  }
  if (low.includes("simple") || low.includes("complex") || low.includes("compound")) {
    return {
      bn_name: "Simple, Complex ও Compound বাক্য",
      bn_expl: "গঠন অনুসারে বাক্য তিন প্রকার: Simple (একটিমাত্র Finite Verb), Complex (একটি Principal Clause ও এক বা একাধিক Subordinate Clause), এবং Compound (দুই বা ততোধিক Co-ordinate Clause যুক্ত)।",
      structure: "Simple = 1 Subject + 1 Finite Verb | Complex = Subordinating Conjunction (Though, Because, If) | Compound = and, but, or, so",
      example_breakdown: "Simple: Inspite of his poverty, he is honest. ➔ Complex: Though he is poor, he is honest. ➔ Compound: He is poor but honest.",
      tips: "বোর্ড পরীক্ষার Transformation-এ Simple-Complex-Compound সবচেয়ে বেশি আসে।"
    }
  }
  return {
    bn_name: "বাক্যের গঠন ও প্রকারভেদ",
    bn_expl: "অর্থ ও গঠন অনুসারে সঠিক বাক্য কাঠামো ব্যবহার করে স্বচ্ছ ইংরেজি ভাব প্রকাশ করুন।",
    structure: "Subject + Verb + Object / Complement",
    example_breakdown: "Honesty always triumphs over dishonesty.",
    tips: "সঠিক বিরামচিহ্ন ও Conjunction বাক্যের অর্থ স্পষ্ট করে।"
  }
}

// MAIN DISPATCHER: Strictly checks topic category FIRST to prevent cross-topic keyword contamination!
export function getSmartExplanation(ruleText, topicName = "") {
  const top = (topicName || "").toLowerCase()
  const lowText = (ruleText || "").toLowerCase()

  // 1. ARTICLES
  if (top.includes("article")) {
    return resolveArticleRule(ruleText)
  }

  // 2. PREPOSITIONS
  if (top.includes("preposition")) {
    return resolvePrepositionRule(ruleText)
  }

  // 3. TENSE
  if (top.includes("tense")) {
    return resolveTenseRule(ruleText)
  }

  // 4. PARTS OF SPEECH (ONLY when topic actually is Parts of Speech)
  if (top.includes("parts of speech")) {
    return resolvePartsOfSpeechRule(ruleText)
  }

  // 5. VOICE
  if (top.includes("voice")) {
    return resolveVoiceRule(ruleText)
  }

  // 6. NARRATION
  if (top.includes("narration") || top.includes("speech")) {
    return resolveNarrationRule(ruleText)
  }

  // 7. SUBJECT-VERB AGREEMENT
  if (top.includes("subject") && top.includes("verb")) {
    return resolveSubjectVerbRule(ruleText)
  }

  // 8. SENTENCES & CLAUSES
  if (top.includes("sentence") || top.includes("clause") || top.includes("phrase") || top.includes("combination")) {
    return resolveSentenceRule(ruleText)
  }

  // 9. MODIFIERS
  if (top.includes("modifier")) {
    return {
      bn_name: "মডিফায়ার (Modifiers)",
      bn_expl: "যে শব্দ বা শব্দগুচ্ছ অন্য কোনো Noun, Verb বা Adjective-এর পূর্বে (Pre-modifier) বা পরে (Post-modifier) বসে অতিরিক্ত তথ্য প্রদান করে তাকে Modifier বলে।",
      structure: "Pre-modifier + Noun (যেমন: a barking dog) | Noun + Post-modifier (যেমন: the boy standing there)",
      example_breakdown: "She is an extremely (Pre-modifier of clever) clever student. / The man with an umbrella (Post-modifier) entered.",
      tips: "SSC ও HSC পরীক্ষায় Noun-কে বিশেষায়িত করার জন্য Adjective, Participle ও Infinitive বহুল ব্যবহৃত হয়।"
    }
  }

  // 10. PUNCTUATION
  if (top.includes("punctuation")) {
    return {
      bn_name: "বিরামচিহ্ন (Punctuation Marks)",
      bn_expl: "বাক্যের ভাব ও বক্তব্য স্পষ্ট করার জন্য বিরতি নির্দেশক চিহ্নসমূহকে Punctuation Marks বলে।",
      structure: "Full stop (.), Comma (,), Semicolon (;), Question mark (?), Quotation marks (\"\")",
      example_breakdown: "Yes, I know that he is coming tomorrow. / \"Where are you going?\" asked mother.",
      tips: "সরাসরি বক্তব্য (Direct speech)-কে সর্বদা Inverted comma-র মধ্যে রাখতে হয়।"
    }
  }

  // 11. IDIOMS & PHRASES
  if (top.includes("idiom") || top.includes("phrase")) {
    return {
      bn_name: "বাগধারা ও প্রবাদ (Idioms and Phrases)",
      bn_expl: "শব্দগত অর্থের বাইরে যখন কোনো শব্দগুচ্ছ বিশেষ কোনো ব্যঞ্জনাপূর্ণ অর্থ প্রকাশ করে তখন তাকে Idiom বলে।",
      structure: "Idiomatic Expression = Special Metaphorical Meaning",
      example_breakdown: "A blessing in disguise (আপাতদৃষ্টিতে ক্ষতিকর হলেও প্রকৃতপক্ষে মঙ্গলজনক) / By leaps and bounds (দ্রুতগতিতে)।",
      tips: "পরীক্ষার জন্য সর্বাধিক ব্যবহৃত প্রবাদ ও বাগধারাগুলোর বাংলা অর্থ মুখস্থ রাখুন।"
    }
  }

  // 12. MODAL VERBS
  if (top.includes("modal")) {
    return {
      bn_name: "মডাল ভার্ব (Modal Auxiliaries)",
      bn_expl: "Can, could, may, might, shall, should, will, would, must হলো Modal Verbs। এদের পর সর্বদা মূল Verb-এর Base Form (V1) বসে।",
      structure: "Subject + Modal Verb + V1 (Base Form) + Object",
      example_breakdown: "You should obey your parents. / May I come in, sir? / He can solve this difficult problem.",
      tips: "Modal Verb-এর পরে কখনো s/es, -ed বা -ing যুক্ত হয় না।"
    }
  }

  // Fallback: Smart parsing based on text structure without cross-topic keywords
  let title = "ব্যাকরণগত নিয়ম ও গঠন"
  let body = ruleText
  let structure = ""
  let example = ""

  if (ruleText.includes("Structure:")) {
    const sParts = ruleText.split("Structure:")
    body = sParts[0].trim()
    structure = sParts[1].trim()
  }

  if (body.includes("Example:")) {
    const eParts = body.split("Example:")
    body = eParts[0].trim()
    example = eParts[1].trim()
  }

  if (body.includes(":")) {
    const cParts = body.split(":")
    title = cParts[0].trim()
    body = cParts.slice(1).join(":").trim()
  }

  return {
    bn_name: title,
    bn_expl: body,
    structure: structure,
    example_breakdown: example || "নিয়মটি বাস্তব বাক্যে লক্ষ্য করুন।",
    tips: "বোর্ড ও একাডেমিক পরীক্ষার জন্য এই ধরনের নিয়মগুলো অত্যন্ত গুরুত্বপূর্ণ।"
  }
}
