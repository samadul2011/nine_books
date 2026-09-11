// Comprehensive educational explanations, Bengali translations, formulas, and practical examples
// Designed specifically for Bangladeshi students (NCTB Class 8, SSC Class 9-10, and HSC Class 11-12)

export const GRAMMAR_EXPLANATIONS = {
  // --- PARTS OF SPEECH ---
  "Noun": {
    bn_name: "বিশেষ্য পদ (Noun)",
    bn_expl: "যে শব্দ দ্বারা কোনো ব্যক্তি, বস্তু, স্থান, গুণ, অবস্থা বা সমষ্টির নাম বোঝায় তাকে Noun বলে। বাক্যে এটি সাধারণত Subject বা Object হিসেবে বসে।",
    structure: "Noun = Person / Place / Thing / Idea / Quality",
    example_breakdown: "Karim (ব্যক্তি) lives in Dhaka (স্থান) and loves honesty (গুণ)।",
    tips: "চেনার উপায়: শব্দের শেষে -tion, -ment, -ness, -ity, -hood, -ship, -er, -or থাকলে সাধারণত Noun হয়।"
  },
  "Pronoun": {
    bn_name: "সর্বনাম পদ (Pronoun)",
    bn_expl: "বারবার Noun-এর পুনরাবৃত্তি এড়াতে Noun-এর পরিবর্তে যে শব্দ ব্যবহার করা হয় তাকে Pronoun বলে।",
    structure: "Subject Pronouns (I, We, You, He, She, It, They) | Object Pronouns (me, us, him, her, them)",
    example_breakdown: "Rimi is a brilliant student. She (Pronoun) reads attentively every day.",
    tips: "Reflexive: myself, himself. Relative: who, which, that. Demonstrative: this, that, these, those."
  },
  "Verb": {
    bn_name: "ক্রিয়া পদ (Verb)",
    bn_expl: "যে শব্দ দ্বারা কোনো কাজ করা, হওয়া, থাকা বা কোনো অবস্থা প্রকাশ পায় তাকে Verb বলে। Verb ছাড়া কোনো পূর্ণাঙ্গ ইংরেজি বাক্য তৈরি হতে পারে না।",
    structure: "Principal Verb (Base/V1, Past/V2, Past Participle/V3) + Auxiliary Verb (am, is, are, was, were, have, has, can...)",
    example_breakdown: "The boys are playing (ক্রিয়া) football. Here 'are' is auxiliary and 'playing' is principal verb.",
    tips: "Tense অনুযায়ী Verb-এর রূপ পরিবর্তন হয়। Subject 3rd person singular হলে Present Indefinite-এ verb-এর সাথে s/es যুক্ত হয়।"
  },
  "Adjective": {
    bn_name: "বিশেষণ পদ (Adjective)",
    bn_expl: "যে শব্দ Noun বা Pronoun-এর দোষ, গুণ, অবস্থা, সংখ্যা, পরিমাণ ইত্যাদি প্রকাশ করে তাকে Adjective বলে। এটি Noun-কে বর্ণনা (modify) করে।",
    structure: "Adjective + Noun (যেমন: a smart boy) অথবা Linking Verb + Adjective (যেমন: He is happy)",
    example_breakdown: "She bought three (সংখ্যা) red (রং/গুণ) apples from the market.",
    tips: "চেনার উপায়: শব্দের শেষে -ful, -less, -able, -ive, -ous, -ic, -al থাকলে সাধারণত Adjective হয়।"
  },
  "Adverb": {
    bn_name: "ক্রিয়া-বিশেষণ (Adverb)",
    bn_expl: "যে শব্দ কোনো Verb, Adjective বা অন্য কোনো Adverb-কে বিশেষায়িত করে (কখন, কোথায়, কীভাবে, কতটুকু কাজ সম্পন্ন হয় তা বোঝায়) তাকে Adverb বলে।",
    structure: "How? (Manner) + Where? (Place) + When? (Time) | Adjective + ly = Adverb (যেমন: quick + ly = quickly)",
    example_breakdown: "The horse runs very (Adverb modifying fast) fast (Adverb modifying runs).",
    tips: "সতর্কতা: সব -ly যুক্ত শব্দ Adverb নয় (যেমন: friendly, lovely, fatherly হলো Adjective)।"
  },
  "Preposition": {
    bn_name: "পদান্বয়ী অব্যয় (Preposition)",
    bn_expl: "যে শব্দ Noun বা Pronoun-এর পূর্বে বসে বাক্যের অন্যান্য শব্দের সাথে তার সম্পর্ক বা অবস্থান নির্দেশ করে তাকে Preposition বলে।",
    structure: "Preposition + Noun / Pronoun / Gerund (V-ing)",
    example_breakdown: "The book is on (উপরে) the table. He is fond of (ভক্ত) listening to music.",
    tips: "সময় ও স্থানে: নির্দিষ্ট সময়/বিন্দুতে at, বারে on, মাস/বছর/ঋতু/বড় স্থানে in বসে।"
  },
  "Conjunction": {
    bn_name: "সংযোজক অব্যয় (Conjunction)",
    bn_expl: "যে শব্দ দুই বা ততোধিক Word, Phrase বা Clause-কে একত্রিত করে তাকে Conjunction বলে।",
    structure: "Coordinating (and, but, or, so, yet) | Subordinating (because, though, although, if, since, when)",
    example_breakdown: "He is poor but (বিপরীত ভাব) honest. Because (কারণ) it was raining, we stayed home.",
    tips: "Correlative Conjunctions জোড়ায় বসে: either...or, neither...nor, not only...but also।"
  },
  "Interjection": {
    bn_name: "আবেগসূচক অব্যয় (Interjection)",
    bn_expl: "যে শব্দ দ্বারা মনের আকস্মিক অনুভূতি যেমন আনন্দ, দুঃখ, বিস্ময়, ভয় বা ঘৃণা প্রকাশ পায় তাকে Interjection বলে।",
    structure: "Interjection! + Sentence (যেমন: Hurrah! We have won.)",
    example_breakdown: "Alas! (হায়!) The poor man lost everything in the flood.",
    tips: "Interjection-এর পরে সর্বদা বিস্ময়সূচক চিহ্ন (!) বসে।"
  },

  // --- TENSES ---
  "Continuous tenses": {
    bn_name: "চলমান কাল (Continuous Tenses)",
    bn_expl: "কোনো কাজ বর্তমানে, অতীতে বা ভবিষ্যতে নির্দিষ্ট সময়ে চলছে বা চলছিল বোঝাতে Continuous Tense ব্যবহৃত হয়।",
    structure: "Subject + be verb (am/is/are/was/were/will be) + Verb-ing + Object",
    example_breakdown: "She is writing a letter now. (বর্তমানে কাজ চলছে) | They were studying when I called. (অতীতে চলছিল)",
    tips: "Stative verbs (যেমন: know, love, believe, see, want) সাধারণত continuous tense-এ ব্যবহৃত হয় না।"
  },
  "Simple tenses": {
    bn_name: "সাধারণ কাল (Simple / Indefinite Tenses)",
    bn_expl: "নিয়মিত অভ্যাস, চিরন্তন সত্য, সাধারণ তথ্য বা অতীতে ঘটে যাওয়া নির্দিষ্ট কাজ প্রকাশ করতে Simple Tense ব্যবহৃত হয়।",
    structure: "Present: Sub + V1(s/es) | Past: Sub + V2 | Future: Sub + will + V1",
    example_breakdown: "The sun rises in the east (চিরন্তন সত্য). | Shakib played well yesterday (অতীতের নির্দিষ্ট ঘটনা).",
    tips: "Always, usually, regularly, everyday থাকলে Simple Present; yesterday, ago, last week থাকলে Simple Past হয়।"
  },
  "Perfect tenses": {
    bn_name: "পুরাঘটিত কাল (Perfect Tenses)",
    bn_expl: "কোনো কাজ এইমাত্র বা নির্দিষ্ট সময়ের আগেই শেষ হয়েছে কিন্তু তার ফলাফল বিদ্যমান থাকলে Perfect Tense ব্যবহৃত হয়।",
    structure: "Present: Sub + have/has + V3 | Past: Sub + had + V3 | Future: Sub + will have + V3",
    example_breakdown: "I have already finished my homework. (এইমাত্র শেষ হয়েছে) | The train had left before we reached the station.",
    tips: "Just, just now, already, yet, recently থাকলে সাধারণত Present Perfect Tense হয়।"
  },

  // --- ARTICLES ---
  "Use 'a'": {
    bn_name: "A-এর ব্যবহার (Indefinite Article)",
    bn_expl: "ব্যঞ্জনধ্বনি (Consonant sound) দিয়ে শুরু হওয়া একক গণনাযোগ্য (singular countable) বিশেষ্যের পূর্বে 'a' বসে।",
    structure: "a + Consonant Sound (ক, খ, গ... উচ্চারণ)",
    example_breakdown: "a pen, a book, a boy. ব্যতিক্রম: a university, a European, a one-taka note (কারণ 'ইউ' ও 'ওয়া' উচ্চারণ)।",
    tips: "মনে রাখবেন: অক্ষরের চেয়ে উচ্চারণ বেশি গুরুত্বপূর্ণ। U-এর উচ্চারণ 'ইউ' হলে a বসে।"
  },
  "Use 'an'": {
    bn_name: "An-এর ব্যবহার (Indefinite Article)",
    bn_expl: "স্বরধ্বনি (Vowel sound: অ, আ, ই, এ... উচ্চারণ) দিয়ে শুরু হওয়া একক গণনাযোগ্য বিশেষ্যের পূর্বে 'an' বসে।",
    structure: "an + Vowel Sound",
    example_breakdown: "an apple, an egg, an umbrella. ব্যতিক্রম: an honest man, an hour, an MP, an SSC examinee (উচ্চারণ ভাওয়েল ধ্বনি)।",
    tips: "H অনুচ্চারিত থাকলে (যেমন: honest, hour, heir) বা সংক্ষিপ্ত শব্দে ভাওয়েল সাউন্ড এলে an বসে।"
  },
  "Use 'the'": {
    bn_name: "The-এর ব্যবহার (Definite Article)",
    bn_expl: "নির্দিষ্ট কোনো ব্যক্তি, বস্তু, স্থান, নদী, পর্বতশ্রেণী, ধর্মগ্রন্থ, সংবাদপত্র, মহাজাগতিক বস্তু বা শ্রেষ্ঠত্ব (Superlative degree) বোঝাতে 'the' বসে।",
    structure: "the + Specific Noun / Unique Things in Universe",
    example_breakdown: "The Padma is a mighty river. | Mount Everest is the highest (Superlative) peak in the world.",
    tips: "একক বস্তু (the sun, the earth, the sky) এবং জাতি বোঝাতে (the rich, the English) the বসে।"
  },

  // --- VOICE ---
  "Voice": {
    bn_name: "বাচ্য পরিবর্তন (Active to Passive Voice)",
    bn_expl: "Subject নিজে কাজটি করে (Active) নাকি কাজটি Subject দ্বারা সম্পন্ন হয় (Passive) তা প্রকাশ করাকে Voice বলে।",
    structure: "Active: Subject + Verb + Object ➔ Passive: Object as Subject + be verb + V3 (Past Participle) + by + Subject as Object",
    example_breakdown: "Active: Farmers grow rice. ➔ Passive: Rice is grown by farmers.",
    tips: "Passive voice-এ প্রধান verb-টি সর্বদা Past Participle (V3) রূপে থাকে।"
  },

  // --- NARRATION ---
  "Narration": {
    bn_name: "উক্তি পরিবর্তন (Direct and Indirect Speech)",
    bn_expl: "কারো বক্তব্য হুবহু উদ্ধৃত করাকে Direct Speech এবং বক্তব্যের ভাব নিজের ভাষায় প্রকাশ করাকে Indirect Speech বলে।",
    structure: "Direct: He said, 'I am ill.' ➔ Indirect: He said that he was ill.",
    example_breakdown: "Reporting verb past হলে reported speech-এর tense অতীত রূপ নেয় (am/is/are ➔ was/were, have/has ➔ had, will ➔ would)।",
    tips: "উদ্ধৃতি চিহ্ন তুলে দিয়ে সাধারণত 'that' যুক্ত হয় এবং Person নিয়ম অনুযায়ী পরিবর্তিত হয়।"
  },

  // --- SUBJECT-VERB AGREEMENT ---
  "Subject-Verb Agreement": {
    bn_name: "কর্তা ও ক্রিয়ার সংগতি (Subject-Verb Agreement)",
    bn_expl: "Subject-এর Number (বচন) ও Person (পুরুষ) অনুযায়ী Verb-এর রূপ নির্ধারিত হওয়ার নিয়মকে Subject-Verb Agreement বলে।",
    structure: "Singular Subject ➔ Singular Verb | Plural Subject ➔ Plural Verb",
    example_breakdown: "The color of the eyes is (not are) blue. (Subject হলো color, eyes নয়)।",
    tips: "Either/neither, each, every, one of the... এর পরে সর্বদা Singular Verb বসে।"
  }
}

// Fallback helper to generate smart educational explanation for any rule
export function getSmartExplanation(ruleText, topicName) {
  // Check exact keys
  for (const [key, data] of Object.entries(GRAMMAR_EXPLANATIONS)) {
    if (ruleText.toLowerCase().includes(key.toLowerCase()) || topicName.toLowerCase().includes(key.toLowerCase())) {
      return data
    }
  }

  // Automatic smart breakdown for structured rules
  let title = "গুরুত্বপূর্ণ ব্যাকরণ নিয়ম"
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
    example_breakdown: example || "নিয়মটি বাস্তব বাক্যে প্রয়োগ করে চর্চা করুন।",
    tips: "বোর্ড ও একাডেমিক পরীক্ষার জন্য এই কাঠামোর প্রশ্নগুলো বারবার অনুশীলন করুন।"
  }
}
