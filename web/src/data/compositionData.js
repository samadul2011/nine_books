// English Writing & Composition Dataset
// Extracted and consolidated from EasyCompositio
// Contains 265 topics across 8 core categories + CV Writing builder, Exam Tips & Format Guides

export const COMPOSITION_SUBJECT = {
  id: 'composition-subject-id',
  name_bn: 'Writing & Composition',
  name_en: 'English Writing & Composition',
  icon_url: 'https://img.icons8.com/color/96/hand-with-pen.png'
}

export const COMPOSITION_CATEGORIES = [
  {
    "id": "All",
    "name_bn": "All Topics",
    "name_en": "All Topics",
    "icon": "BookOpen",
    "color": "text-teal-400"
  },
  {
    "id": "Paragraph",
    "name_bn": "Paragraph",
    "name_en": "Paragraph",
    "icon": "FileText",
    "color": "text-emerald-400"
  },
  {
    "id": "Easy",
    "name_bn": "Composition",
    "name_en": "Composition",
    "icon": "Sparkles",
    "color": "text-sky-400"
  },
  {
    "id": "Dialogue",
    "name_bn": "Dialogue",
    "name_en": "Dialogue",
    "icon": "MessagesSquare",
    "color": "text-indigo-400"
  },
  {
    "id": "Short Story",
    "name_bn": "Short Story",
    "name_en": "Short Story",
    "icon": "Bookmark",
    "color": "text-purple-400"
  },
  {
    "id": "Completing Story",
    "name_bn": "Completing Story",
    "name_en": "Completing Story",
    "icon": "PenTool",
    "color": "text-pink-400"
  },
  {
    "id": "Application",
    "name_bn": "Application",
    "name_en": "Application",
    "icon": "FileCheck2",
    "color": "text-amber-400"
  },
  {
    "id": "Letter",
    "name_bn": "Letter",
    "name_en": "Letter",
    "icon": "Mail",
    "color": "text-orange-400"
  },
  {
    "id": "Email",
    "name_bn": "Email",
    "name_en": "Email",
    "icon": "Send",
    "color": "text-cyan-400"
  },
  {
    "id": "CV",
    "name_bn": "CV Builder",
    "name_en": "CV Builder",
    "icon": "Award",
    "color": "text-rose-400"
  }
];

export const EXAM_TIPS = {
  "Paragraph": {
    "title": "Paragraph Writing Exam Rules & Common Mistakes",
    "rules": [
      {
        "point": "One Single Paragraph Rule (একক অনুচ্ছেদ নিয়ম)",
        "desc": "A paragraph must always be written in ONE single continuous block of text. Never divide a paragraph into multiple sub-paragraphs or headings in board exams! (একটি প্যারাগ্রাফ কখনোই একাধিক প্যারায় বা পয়েন্ট আকারে বিভক্ত করা যাবে না।)"
      },
      {
        "point": "Topic Sentence & Concluding Sentence (শুরু ও সমাপ্তি)",
        "desc": "Start with a strong topic sentence that introduces the main theme, and conclude with a summarizing sentence. (একটি চমৎকার সূচনামূলক বাক্য দিয়ে শুরু করতে হবে এবং শেষ বাক্যটিতে সম্পূর্ণ বক্তব্যের নির্যাস থাকতে হবে।)"
      },
      {
        "point": "Tense Consistency (টেন্স সংক্রান্ত ধারাবাহিকতা)",
        "desc": "For descriptive topics (e.g. 'A Rickshaw Puller', 'Environment Pollution'), use Present Simple Tense throughout. For narrative events (e.g. 'A Rainy Day you experienced'), maintain consistent Past Tense. (বর্ণনামূলক বিষয়ে প্রেজেন্ট সিম্পল এবং স্মৃতি বা অতীত অভিজ্ঞতায় পাস্ট টেন্সের ধারাবাহিকতা রক্ষা করতে হবে।)"
      },
      {
        "point": "Word Limit & Pacing (শব্দসীমা ও সময়)",
        "desc": "Board recommended limit: 130–180 words. Allocate 15–20 minutes in the exam hall. (বোর্ড পরীক্ষায় শব্দসীমা সাধারণতঃ ১৫০-১৮০ শব্দ। ১৫-২০ মিনিটের মধ্যে লেখা শেষ করা উচিত।)"
      }
    ]
  },
  "Easy": {
    "title": "Composition / Essay Exam Rules & High-Score Tips",
    "rules": [
      {
        "point": "Proper Subheadings (সুস্পষ্ট শিরোনাম ও অনুচ্ছেদ)",
        "desc": "Always write clear bold subheadings: 'Introduction', 'Main Causes / Descriptions', 'Importance / Merits & Demerits', and 'Conclusion'. (রচনাতে অবশ্যই পয়েন্ট বা শিরোনাম যেমন ভূমিকা, বিবরণ, প্রয়োজনীয়তা, ও উপসংহার আলাদা করে লিখবে।)"
      },
      {
        "point": "Avoid Repetition (পুনরাবৃত্তি বর্জন ও লিঙ্কার ব্যবহার)",
        "desc": "Do not repeat the same point in different words. Use transitional linkers like 'Furthermore', 'Moreover', 'In addition', 'Consequently'. (একই কথা বারবার না লিখে বিভিন্ন লিঙ্কার ব্যবহার করে নতুন তথ্য উপস্থাপন করো।)"
      },
      {
        "point": "Quotations & Proverbs (উদ্ধৃতি ও প্রবাদবাক্য)",
        "desc": "Using 1-2 standard English proverbs or famous quotes (e.g., 'Health is wealth', 'Early to bed and early to rise') creates a great impression on the examiner. (উপযুক্ত স্থানে প্রবাদ বা মহান বাণী ব্যবহার করলে পরীক্ষক পূর্ণ নম্বর প্রদানে আগ্রহী হন।)"
      },
      {
        "point": "Exam Timing (সময় বণ্টন)",
        "desc": "An essay carries 10–14 marks. Spend 25–30 minutes writing 200–300 words. (রচনায় সাধারণতঃ ১০-১৪ নম্বর থাকে। ২৫-৩০ মিনিট সময় নিয়ে ২৫০-৩০০ শব্দ লেখা উত্তম।)"
      }
    ]
  },
  "Dialogue": {
    "title": "Dialogue Writing Rules & Scoring Strategies",
    "rules": [
      {
        "point": "Balanced Conversational Turns (উভয়ের সমান সংলাপ)",
        "desc": "Give equal speaking turns to both characters (at least 6-8 meaningful exchanges each). (সংলাপের উভয় চরিত্রের মধ্যে অন্তত ৬-৮ জোড়া সমান বক্তব্য বা ভাব বিনিময় থাকতে হবে।)"
      },
      {
        "point": "Natural Greetings & Sign-offs (স্বাভাবিক কুশল বিনিময় ও বিদায়)",
        "desc": "Start with friendly greetings ('Hello', 'Good morning', 'How are you?') and end with polite sign-offs ('Thank you', 'See you later'). (শুরুতে কুশল বিনিময় এবং শেষে ধন্যবাদ বা বিদায় জানানো বাধ্যতামূলক।)"
      },
      {
        "point": "Punctuation with Names (নাম ও বিরামচিহ্ন)",
        "desc": "Write speaker's name followed by a colon: 'Rahim: ...' and keep the dialogue aligned neatly. (বক্তার নামের পর কোলন চিহ্ন (:) দিয়ে সংলাপ শুরু করতে হবে।)"
      },
      {
        "point": "Avoid One-Word Answers (এক শব্দের উত্তর বর্জন)",
        "desc": "Instead of just 'Yes' or 'No', write complete conversational sentences with reasoning. (সংলাপে কেবল 'হ্যাঁ' বা 'না' না বলে কারণসহ পূর্ণ বাক্য বলা উচিত।)"
      }
    ]
  },
  "Short Story": {
    "title": "Story Writing Rules & Mark Optimization",
    "rules": [
      {
        "point": "Always Use Past Tense (সর্বদা অতীতকাল ব্যবহার)",
        "desc": "Stories narrate past events, so write in Past Simple / Past Continuous (e.g., 'Once there lived...', 'He was walking...', 'He decided...'). (গল্প সর্বদা অতীতকালে রচিত হয়, তাই Past Tense ব্যবহার নিশ্চিত করতে হবে।)"
      },
      {
        "point": "Title & Moral Carry 2 Marks (শিরোনাম ও নীতিবাক্য)",
        "desc": "Always write an attractive title at the top and a clear 'Moral' at the end. In board marking schemes, Title + Moral carry 2 separate marks! (গল্পের শীর্ষে শিরোনাম এবং শেষে নীতিবাক্য লিখলে বোর্ড নিয়মে নিশ্চিত ২ নম্বর পাওয়া যায়।)"
      },
      {
        "point": "Direct Speech & Quotes (উদ্ধৃতি চিহ্নের ব্যবহার)",
        "desc": "Put spoken dialogue inside proper quotation marks: He said, 'I will help you.' (চরিত্রদের সরাসরি কথা ইনভার্টেড কমার ভেতরে লিখতে হয়।)"
      },
      {
        "point": "Smooth Climax & Conclusion (নাটকীয়তা ও সুন্দর সমাপ্তি)",
        "desc": "Develop the plot logically to reach a climax and resolve it smoothly. (গল্পের ঘটনাপ্রবাহ ক্রমান্বয়ে পরিণতির দিকে নিয়ে যেতে হবে।)"
      }
    ]
  },
  "Completing Story": {
    "title": "Completing Story Rules & Guidelines",
    "rules": [
      {
        "point": "Continue From Prompt (প্রদত্ত অংশের সাথে ধারাবাহিকতা)",
        "desc": "Read the given beginning carefully and continue seamlessly in the same tense and tone. (প্রশ্নপত্রে দেওয়া ৩-৪টি লাইনের সাথে সামঞ্জস্য রেখে গল্প এগিয়ে নিতে হবে।)"
      },
      {
        "point": "Appropriate Title (উপযুক্ত নাম)",
        "desc": "Provide a relevant title that reflects the lesson or climax of the story. (গল্পটির মূল শিক্ষাকে ফুটিয়ে তুলে এমন একটি লাগসই শিরোনাম দাও।)"
      },
      {
        "point": "Pacing & Length (দৈর্ঘ্য ও পরিসর)",
        "desc": "Keep the story between 120–160 words, ensuring each paragraph advances the plot. (গল্পটি ১২০-১৬০ শব্দের মধ্যে শেষ করা আদর্শ।)"
      },
      {
        "point": "Conclude with Moral (নীতিশিক্ষা)",
        "desc": "Conclude with a bold moral: Moral: Where there is a will, there is a way. (গল্পের শেষে অবশ্যই একটি উপযুক্ত নীতিবাক্য যোগ করবে।)"
      }
    ]
  },
  "Application": {
    "title": "Formal School Application 8-Step Rules",
    "rules": [
      {
        "point": "One-Page Layout (এক পৃষ্ঠার নিয়ম)",
        "desc": "Always write an application on a single fresh page. Never turn over to another page in board exams! (দরখাস্ত সর্বদা একই পৃষ্ঠায় এক নজরে উপস্থাপন করতে হয়।)"
      },
      {
        "point": "No Comma After Subject (সাবজেক্টে কমা নয়)",
        "desc": "Write: 'Subject: Application for leave of absence' (No comma after the subject heading). (সাবজেক্ট লাইনের পর কোনো কমা হবে না।)"
      },
      {
        "point": "Proper Salutation & Subscription (সম্বোধন ও সমাপ্তি)",
        "desc": "Use 'Sir,' (with comma). At the end write 'I remain, Sir,' or 'Your most obedient pupil,'. ('Sir,' দিয়ে শুরু করে শেষে 'Your most obedient student' লেখা নিয়ম।)"
      },
      {
        "point": "Left Margin Alignment (সোজা মার্জিন রক্ষা)",
        "desc": "Keep Date, Authority, Subject, Salutation, Body, and Signature aligned strictly along the left margin. (তারিখ থেকে শুরু করে স্বাক্ষর পর্যন্ত বাম পাশের মার্জিন বরাবর সোজা রাখতে হবে।)"
      }
    ]
  },
  "Letter": {
    "title": "Informal Letter 6 Essential Parts & Envelope Rules",
    "rules": [
      {
        "point": "6 Essential Parts (চিঠির ৬টি অবিচ্ছেদ্য অংশ)",
        "desc": "Heading (Address & Date) -> Salutation (Dear X) -> Body -> Subscription (Yours ever) -> Signature -> Envelope. (চিঠির ৬টি অংশ যথাযথভাবে থাকতে হবে।)"
      },
      {
        "point": "Envelope Drawing is Compulsory (খাম আঁকা বাধ্যতামূলক)",
        "desc": "Draw a neat rectangular box with 'STAMP' on top-right, 'FROM' on the left, and 'TO' on the right. This carries 2 separate marks! (চিঠির শেষে খাম না আঁকলে ২ নম্বর কাটা যাবে! তাই ডাকটিকিটসহ খাম আঁকা আবশ্যক।)"
      },
      {
        "point": "Natural & Cordial Tone (আন্তরিক ও সাবলীল ভাষা)",
        "desc": "Use friendly, warm sentences. Avoid dry, formal bureaucratic language in personal letters. (বন্ধু বা পিতামাতাকে লেখার সময় আন্তরিক ও ভালোবাসাপূর্ণ ভাষা ব্যবহার করো।)"
      },
      {
        "point": "Standard Sign-Off (উপযুক্ত বিদায়)",
        "desc": "Use 'Yours ever', 'Your loving friend', followed by your first name. ('Yours ever' বা 'Your loving friend' লিখে নিজের নাম লেখো।)"
      }
    ]
  },
  "Email": {
    "title": "Email Writing Standard Board Rules",
    "rules": [
      {
        "point": "Accurate Header Fields (হেডার অংশ)",
        "desc": "Always include: 'To:', 'From:', 'Subject:', 'Date:'. Email addresses must be all lowercase without spaces (e.g., student@gmail.com). (হেডার অংশে To, From, Subject ও Date নির্ভুল ও ছোট হাতের অক্ষরে লিখতে হবে।)"
      },
      {
        "point": "Concise & Focused (সংক্ষিপ্ত ও স্পষ্ট বার্তা)",
        "desc": "Unlike letters, emails must be brief, direct, and crisp. Avoid overly long personal pleasantries. (ইমেইল খুব সংক্ষিপ্ত ও বিষয়ভিত্তিক হওয়া বাঞ্ছনীয়।)"
      },
      {
        "point": "Professional Sign-Off (মার্জিত সমাপ্তি)",
        "desc": "End with 'Best regards,' or 'Warm wishes,' followed by your name. (বিদায় বাক্যাংশে Best regards বা Warm wishes ব্যবহার করো।)"
      }
    ]
  }
};

export const FORMAT_GUIDES = {
  "Letter": {
    "title": "Informal Letter Format Guide (ব্যক্তিগত চিঠিপত্রের কাঠামো)",
    "steps": [
      "1. The Heading (ঠিকানা ও তারিখ): উপরে ডান বা বাম কোণে প্রেরকের ঠিকানা ও তারিখ (যেমন: Dhanmondi, Dhaka / 10 October 2024)।",
      "2. The Salutation (সম্বোধন): Dear [Friend's Name], / My dear Father,",
      "3. The Body (মূল বক্তব্য): \n   - Opening (কুশল বিনিময়)\n   - Main Message (চিঠির মূল উদ্দেশ্য ও বিস্তারিত)\n   - Conclusion (পিতামাতাকে শ্রদ্ধা ও ছোটদের ভালোবাসা)",
      "4. The Subscription (বিদায় সম্ভাষণ): Yours ever, / Your loving friend,",
      "5. The Signature (স্বাক্ষর/নাম): Your name (যেমন: Rahim)",
      "6. The Postal Envelope (খাম ও ডাকটিকিট): চিঠির নিচে আয়তাকার খাম আঁকতে হবে।"
    ],
    "envelope": {
      "from_label": "FROM (প্রেরক):",
      "from_details": [
        "Name: [Your Name]",
        "Vill/Road: Dhanmondi",
        "Post: Dhaka - 1205",
        "Dist: Dhaka"
      ],
      "to_label": "TO (প্রাপক):",
      "to_details": [
        "Name: [Friend's Name]",
        "Vill/Road: GEC Circle",
        "Post: Chattogram - 4000",
        "Dist: Chattogram"
      ]
    }
  },
  "Application": {
    "title": "Formal School Application 8 Steps (বিদ্যালয় দরখাস্তের ৮টি ধাপ)",
    "steps": [
      "1. Date (তারিখ): যেমন: 15 October 2024",
      "2. Designation & Address (কর্তৃপক্ষের পদবী ও ঠিকানা): The Headmaster / The Principal, [School Name], Dhaka.",
      "3. Subject Line (বিষয়): Subject: Application for leave of absence (or full-free studentship, canteen, etc.)",
      "4. Salutation (সম্বোধন): Sir,",
      "5. Body - First Paragraph (মূল কারণ): With due respect and humble submission, I beg to state that...",
      "6. Concluding Prayer (প্রার্থনা): May I, therefore, pray and hope that you would be kind enough to grant my application.",
      "7. Subscription (বিনীত নিবেদন): I remain, Sir, / Your most obedient pupil,",
      "8. Student Identification (শিক্ষার্থীর পরিচয়): Name: [Your Name], Class: 9, Section: A, Roll: 01."
    ]
  },
  "Email": {
    "title": "Email Writing Standard Structure (ইমেইল লেখার কাঠামো)",
    "steps": [
      "1. To: recipient.email@gmail.com",
      "2. From: your.email@gmail.com",
      "3. Subject: Short, clear, and relevant to the point",
      "4. Date: 15 October 2024, 10:30 AM",
      "5. Salutation: Dear [Name], / Respected Sir,",
      "6. Opening & Purpose: I hope this email finds you well. I am writing to...",
      "7. Main Content: 2-3 short, clear sentences.",
      "8. Sign-off: Best regards, / Sincerely, followed by Your Name."
    ]
  }
};

export const CV_TEMPLATES = [
  {
    "id": "modern_student",
    "name": "Modern Student Resume",
    "description": "Tech-focused fresh graduate with internship and leadership highlights.",
    "fullName": "Nadia Rahman",
    "fatherName": "Md. Lutfor Rahman",
    "motherName": "Sharmin Sultana",
    "dateOfBirth": "15/07/2002",
    "gender": "Female",
    "nationality": "Bangladeshi",
    "religion": "Islam",
    "maritalStatus": "Single",
    "bloodGroup": "B+",
    "nid": "123456789012",
    "phone": "+8801712345678",
    "email": "nadia.rahman@student.com",
    "presentAddress": "House 45, Block C, Gulshan, Dhaka",
    "permanentAddress": "Village: Jorargonj, Cumilla",
    "careerObjective": "Aspiring software engineer blending product thinking with data-driven mobile experiences.",
    "education": "B.Sc. in Computer Science & Engineering, North South University (2022-Present)\nHSC - Cantonment Public School (2020), GPA: 4.80\nSSC - Government High School, Comilla (2018), GPA: 5.00",
    "experience": "Intern, CloudBridge Technologies (Jun 2024 - Dec 2024)\n- Built Kotlin features for a payroll module\n- Automated QA reports and supported agile sprints",
    "skills": "Kotlin, Java, Python, Firebase, SQL, Data Analysis, UI/UX Research, Team Collaboration",
    "languages": "Bengali (Native), English (Fluent), Hindi (Conversational)",
    "references": "Mr. Kazi Alam, Tech Club Mentor, North South University\nPhone: +8801730000000",
    "hobbies": "Coding contests, Blogging about tech, Campus debate"
  },
  {
    "id": "creative_media",
    "name": "Creative Media Student",
    "description": "Multimedia storyteller focusing on campaigns and brand narrative.",
    "fullName": "Arif Hossain",
    "fatherName": "Md. Abdul Hossain",
    "motherName": "Farida Akhter",
    "dateOfBirth": "02/03/2001",
    "gender": "Male",
    "nationality": "Bangladeshi",
    "religion": "Islam",
    "maritalStatus": "Single",
    "bloodGroup": "O+",
    "nid": "987654321098",
    "phone": "+8801711112233",
    "email": "arif.hossain@creative.net",
    "presentAddress": "42 Lake Drive, Dhanmondi, Dhaka",
    "permanentAddress": "Village: Shibpur, Comilla",
    "careerObjective": "Creative media student crafting digital storytelling, motion design, and campaign content.",
    "education": "B.A. in Multimedia Arts, Dhaka International University (2022-Present)\nHSC - Merit College, Dhaka (2020)\nSSC - Model School, Comilla (2018)",
    "experience": "Creative Intern, Studio Lumina (Jul 2023 - Feb 2024)\n- Produced motion graphics for micro-documentaries\n- Managed social media reels and brand style guides\nFreelance designer for campus tech fest campaigns",
    "skills": "Adobe Photoshop, Illustrator, Premiere Pro, After Effects, Storyboarding, Branding, Social Campaign Strategy",
    "languages": "Bengali (Native), English (Professional), Arabic (Basics)",
    "references": "Ms. Rehana Tarannum, Creative Director, Studio Lumina\nEmail: rehana@lumina.studio",
    "hobbies": "Mini-documentaries, Street photography, Travel blogging"
  },
  {
    "id": "research_scholar",
    "name": "Research Scholar Starter",
    "description": "Academic CV targeting lab assistance and research internships.",
    "fullName": "Rifat Ahmed",
    "fatherName": "Md. Shahidul Islam",
    "motherName": "Nargis Akhter",
    "dateOfBirth": "10/12/1999",
    "gender": "Male",
    "nationality": "Bangladeshi",
    "religion": "Islam",
    "maritalStatus": "Single",
    "bloodGroup": "A+",
    "nid": "112233445566",
    "phone": "+8801722223344",
    "email": "rifat.ahmed@researchlab.edu",
    "presentAddress": "12, University Road, Sher-e-Bangla, Dhaka",
    "permanentAddress": "Village: Begumganj, Noakhali",
    "careerObjective": "Support faculty-led research by combining data analysis with disciplined lab practices.",
    "education": "M.Sc. in Environmental Sciences, University of Dhaka (2024-Present)\nB.Sc. in Environmental Science, University of Dhaka (2020-2023)\nHSC - Dhaka College (2020)\nSSC - Comilla Zilla School (2018)",
    "experience": "Research Assistant, BRAC University Physics Lab (Jan 2023 - Present)\n- Collected & analyzed experimental data for renewable energy study\n- Coordinated instrumentation calibrations\nProject Assistant, Smart Water Monitoring Study (Sep 2022 - Dec 2022)",
    "skills": "Research Methods, Data Analysis, SPSS, MATLAB, Lab Safety, Technical Writing, Public Speaking",
    "languages": "Bengali (Native), English (Fluent), Arabic (Basic)",
    "references": "Dr. Sanjida Rahman, Associate Professor, School of Environmental Science\nEmail: sanjida@du.ac.bd",
    "hobbies": "Science clubs, Nature photography, Mentoring junior researchers"
  }
];

export const COMPOSITION_TOPICS = [
  {
    "id": "rainy_day",
    "title": "A Rainy Day",
    "category": "Paragraph",
    "questions": [],
    "template": "A rainy day is a day when it rains all day long. The sky remains overcast with dark, thick clouds, and the sun is not visible. Sometimes it pours heavily, and sometimes it drizzles softly. On such a day, the roads often become muddy and waterlogged, making travel difficult for people. Students enjoy a rainy day because schools are often closed or classes are suspended. People stay indoors, and mothers cook hot Khichuri with fried eggs or hilsa fish. Children make paper boats and float them on rainwater with joy. The trees and plants look fresh, lively, and green after being washed by the rain. However, day laborers and poor people suffer a lot because they cannot go out for work. Despite some difficulties, a rainy day brings a pleasant relief from the scorching summer heat.",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "drizzles",
        "banglaMeaning": "গুড়ি গুড়ি বৃষ্টি হওয়া",
        "partOfSpeech": "verb"
      },
      {
        "word": "water-logged",
        "banglaMeaning": "জলমগ্ন / জলাবদ্ধ",
        "partOfSpeech": "adj"
      },
      {
        "word": "peaceful",
        "banglaMeaning": "শান্তিপূর্ণ",
        "partOfSpeech": "adj"
      },
      {
        "word": "refreshing",
        "banglaMeaning": "সতেজতাদায়ক",
        "partOfSpeech": "adj"
      },
      {
        "word": "slums",
        "banglaMeaning": "বস্তি এলাকা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 136
  },
  {
    "id": "best_friend",
    "title": "My Best Friend",
    "questions": [],
    "template": "A best friend is one of the greatest blessings of life. My best friend's name is {FRIEND_NAME}. We study in the same class at our school and sit next to each other on the same bench. {FRIEND_NAME} is very polite, honest, and helpful. We share our tiffin, study together, and play cricket in the afternoon. Whenever I face any difficulty in English or Math, my friend helps me patiently. We never fight or quarrel with each other. If I fall sick, {FRIEND_NAME} visits my home and shares all the class notes with me. My parents also love my friend like their own child. A true friend stands by our side in times of danger and joy. I am very proud of our strong friendship and pray that it lasts forever.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "social being",
        "banglaMeaning": "সামাজিক জীব",
        "partOfSpeech": "noun"
      },
      {
        "word": "well-behaved",
        "banglaMeaning": "সদ্ব্যবহারকারী / সুশীল",
        "partOfSpeech": "adj"
      },
      {
        "word": "trustworthy",
        "banglaMeaning": "বিশ্বাসযোগ্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "disciplined",
        "banglaMeaning": "নিয়মানুবর্তী",
        "partOfSpeech": "adj"
      },
      {
        "word": "unconditional",
        "banglaMeaning": "শর্তহীন",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 130
  },
  {
    "id": "our_school",
    "title": "Our School",
    "questions": [],
    "template": "The name of our school is {SCHOOL_NAME}. It is one of the most famous and well-known schools in our district. Our school has a large, attractive three-story building with clean and spacious classrooms. In front of the school building, there is a big green playground where we play football, cricket, and handball during breaks. We also have a rich library with thousands of books, a modern science laboratory, and a computer lab. There are about one thousand students and thirty qualified teachers in our school. Our teachers teach us with great care, love, and discipline. Every year, our school achieves excellent results in the SSC and JSC board examinations. I feel very proud to be a student of this prestigious institution.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "qualified",
        "banglaMeaning": "যোগ্যতাসম্পন্ন",
        "partOfSpeech": "adj"
      },
      {
        "word": "facilities",
        "banglaMeaning": "সুবিধাসমূহ",
        "partOfSpeech": "noun"
      },
      {
        "word": "assembly",
        "banglaMeaning": "প্রাত্যহিক সমাবেশ",
        "partOfSpeech": "noun"
      },
      {
        "word": "environment",
        "banglaMeaning": "পরিবেশ",
        "partOfSpeech": "noun"
      },
      {
        "word": "discipline",
        "banglaMeaning": "শৃঙ্খলা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 121
  },
  {
    "id": "journey_train",
    "title": "A Journey by Train",
    "questions": [],
    "template": "A journey by train is always pleasant, exciting, and memorable. Last month, I had the opportunity to travel from Dhaka to Chattogram by train with my parents. We reached Kamalapur Railway Station early in the morning and boarded the Subarna Express. As the train started moving, a cool breeze touched my face through the window. I enjoyed watching the green paddy fields, flowing rivers, village markets, and flying birds through the window. The natural beauty of rural Bangladesh looked like a colorful painting. Hawkers sold tea, hot roasted peanuts, and newspapers inside the train. After six comfortable hours, we safely reached our destination. The journey gave me immense joy and refreshed my mind.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "pleasant",
        "banglaMeaning": "আনন্দদায়ক",
        "partOfSpeech": "adj"
      },
      {
        "word": "destination",
        "banglaMeaning": "গন্তব্যস্থল",
        "partOfSpeech": "noun"
      },
      {
        "word": "rhythmic",
        "banglaMeaning": "ছন্দময়",
        "partOfSpeech": "adj"
      },
      {
        "word": "soothing",
        "banglaMeaning": "শান্তিদায়ক / আরামদায়ক",
        "partOfSpeech": "adj"
      },
      {
        "word": "memorable",
        "banglaMeaning": "স্মরণীয়",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 113
  },
  {
    "id": "physical_exercise",
    "title": "Physical Exercise",
    "questions": [],
    "template": "Physical exercise means the regular movement of our limbs and body according to specific rules. It is essential for maintaining good health and physical fitness. There are various forms of physical exercise, such as walking, jogging, swimming, cycling, and playing outdoor games like football and cricket. Regular exercise improves blood circulation, strengthens muscles, and prevents many diseases like diabetes and high blood pressure. There is a wise proverb: 'A sound mind in a sound body.' When our body is fit, our mind remains sharp and active for studying. Morning is the best time for exercise because the air is pure and fresh. Every student should take regular physical exercise to lead a happy, healthy, and energetic life.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "circulation",
        "banglaMeaning": "রক্ত সঞ্চালন",
        "partOfSpeech": "noun"
      },
      {
        "word": "digestive",
        "banglaMeaning": "হজম সংক্রান্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "obesity",
        "banglaMeaning": "স্থূলতা / অতিরিক্ত ওজন",
        "partOfSpeech": "noun"
      },
      {
        "word": "essential",
        "banglaMeaning": "অপরিহার্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "metabolism",
        "banglaMeaning": "বিপাক প্রক্রিয়া",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 117
  },
  {
    "id": "village_fair",
    "title": "A Village Fair",
    "questions": [],
    "template": "A village fair is a traditional and colorful gathering held in rural Bangladesh. It usually takes place during Bengali festivals like Pahela Baishakh, after harvest, or near a village riverbank. People of all ages, especially women and children, visit the fair wearing colorful dresses. Temporary stalls are set up selling handmade clay pots, wooden toys, bamboo flutes, sweetmeats, and colorful bangles. Delicious traditional foods like Jilapi, Sandesh, and Batasha are very popular. Children enjoy riding the wooden Ferris wheel, watching magic shows, and playing with balloons. The fair provides great entertainment and brings joy to simple village people. It is a wonderful symbol of our rich rural culture and heritage.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "traditional",
        "banglaMeaning": "ঐতিহ্যবাহী",
        "partOfSpeech": "adj"
      },
      {
        "word": "gathering",
        "banglaMeaning": "সমাবেশ / মিলনমেলা",
        "partOfSpeech": "noun"
      },
      {
        "word": "attraction",
        "banglaMeaning": "আকর্ষণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "craftsmen",
        "banglaMeaning": "কারিগরবৃন্দ",
        "partOfSpeech": "noun"
      },
      {
        "word": "heritage",
        "banglaMeaning": "ঐতিহ্য",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 110
  },
  {
    "id": "daily_life",
    "title": "My Daily Life",
    "questions": [],
    "template": "A disciplined daily life is the key to success for every student. I follow a simple and regular daily routine. I wake up at 5:30 AM, wash myself, and say my morning prayer. Then I go for a short morning walk and take my breakfast. I study my lessons for two hours before getting ready for school. I attend my school regularly from 9:30 AM to 4:00 PM and pay full attention in class. In the afternoon, I play football or cricket with my friends in the playground. In the evening, I sit down to complete my homework and study until 10:00 PM. After having dinner with my family, I go to bed by 10:30 PM. Following this balanced routine keeps me healthy, happy, and successful in my studies.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "disciplined",
        "banglaMeaning": "নিয়মানুবর্তী",
        "partOfSpeech": "adj"
      },
      {
        "word": "routine",
        "banglaMeaning": "দৈনন্দিন কাজের তালিকা",
        "partOfSpeech": "noun"
      },
      {
        "word": "attentively",
        "banglaMeaning": "মনোযোগ সহকারে",
        "partOfSpeech": "adv"
      },
      {
        "word": "refresh",
        "banglaMeaning": "সতেজ করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "punctual",
        "banglaMeaning": "সময়নিষ্ঠ",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 129
  },
  {
    "id": "tree_plantation",
    "title": "Tree Plantation",
    "questions": [],
    "template": "Tree plantation means planting trees in large numbers for the benefit of our environment. Trees are the closest friends of humans and nature. They give us oxygen to breathe and absorb harmful carbon dioxide from the atmosphere. Trees provide us with delicious fruits, timber for furniture, firewood, and valuable herbal medicines. They also prevent soil erosion, reduce the risk of floods, and bring rain to our country. Without trees, our planet would turn into a hot and barren desert. The monsoon season is the best time for planting trees along roadsides, school grounds, and empty spaces. We must plant more trees and protect them to keep our earth green, healthy, and beautiful for future generations.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "plantation",
        "banglaMeaning": "বৃক্ষরোপণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "oxygen",
        "banglaMeaning": "অক্সিজেন গ্যাস",
        "partOfSpeech": "noun"
      },
      {
        "word": "erosion",
        "banglaMeaning": "ভাঙন / ক্ষয়",
        "partOfSpeech": "noun"
      },
      {
        "word": "ecological",
        "banglaMeaning": "বাস্তুসংস্থান সংক্রান্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "uninhabitable",
        "banglaMeaning": "বসবাসের অযোগ্য",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": true,
    "boardTags": [
      "SSC",
      "Barishal Board"
    ],
    "banglaTranslation": "বৃক্ষরোপণ বলতে ব্যাপক হারে গাছ লাগানো ও সেগুলোর পরিচর্যা করাকে বোঝায়। গাছ প্রকৃতির সবচেয়ে মূল্যবান উপহার। গাছ আমাদের অক্সিজেন দেয়, কার্বন ডাই-অক্সাইড শোষণ করে পরিবেশের ভারসাম্য বজায় রাখে। গাছ থেকে আমরা ফলমূল, কাঠ, ছায়া ও জীবনরক্ষাকারী ওষুধ পাই। নির্বিচারে গাছ কাটার কারণে বৈশ্বিক উষ্ণতা, অনাবৃষ্টি ও বন্যা দেখা দিচ্ছে। তাই পরিবেশ রক্ষা করতে আমাদের সবাইকে নিয়মিত গাছ লাগাতে হবে। বর্ষাকাল হলো বৃক্ষরোপণের সর্বোৎকৃষ্ট সময়।",
    "wordCount": 115
  },
  {
    "id": "morning_walk",
    "title": "A Morning Walk",
    "questions": [],
    "template": "A morning walk is the simplest and best form of physical exercise. It is suitable for people of all ages, from young students to elderly people. I go for a morning walk every day at 6:00 AM in a nearby park. In the early morning, nature looks calm, peaceful, and fresh. The cool breeze is free from smoke and dust, and the golden rays of the rising sun feel soothing. Walking for thirty minutes every morning refreshes both the body and the mind. It keeps our heart healthy, improves digestion, and boosts our energy for the entire day. A regular morning walk helps us stay active, fit, and cheerful throughout our life.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "energetic",
        "banglaMeaning": "কর্মচঞ্চল / উদ্যমী",
        "partOfSpeech": "adj"
      },
      {
        "word": "dewdrops",
        "banglaMeaning": "শিশিরবিন্দু",
        "partOfSpeech": "noun"
      },
      {
        "word": "breeze",
        "banglaMeaning": "মৃদু বাতাস",
        "partOfSpeech": "noun"
      },
      {
        "word": "circulation",
        "banglaMeaning": "রক্ত প্রবাহ",
        "partOfSpeech": "noun"
      },
      {
        "word": "hypertension",
        "banglaMeaning": "উচ্চ রক্তচাপ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 112
  },
  {
    "id": "my_mother",
    "title": "My Mother",
    "questions": [],
    "template": "My mother is the most dearest and precious person in my life. Her name is my greatest source of inspiration. She is kind, affectionate, and hardworking. She wakes up early in the morning before everyone else and prepares delicious breakfast and tiffin for us. She manages all household chores with a sweet smile and never complains about hard work. Whenever I fall ill, she stays awake by my bed all night and nurses me with great care. She also helps me with my studies and teaches me good manners and honesty. Her selfless love and endless sacrifices make our home a heaven of peace. I love my mother deeply and pray to Allah for her long, healthy, and happy life.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "unconditional",
        "banglaMeaning": "শর্তহীন",
        "partOfSpeech": "adj"
      },
      {
        "word": "chores",
        "banglaMeaning": "ঘরের কাজকর্ম",
        "partOfSpeech": "noun"
      },
      {
        "word": "sacrifices",
        "banglaMeaning": "আত্মত্যাগ করে",
        "partOfSpeech": "verb"
      },
      {
        "word": "grateful",
        "banglaMeaning": "কৃতজ্ঞ",
        "partOfSpeech": "adj"
      },
      {
        "word": "patience",
        "banglaMeaning": "ধৈর্য",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 120
  },
  {
    "id": "environment_pollution",
    "title": "Environment Pollution",
    "questions": [],
    "template": "Environment pollution is one of the most serious global problems of the modern world. Our environment consists of air, water, soil, and sound. Today, all these elements are being polluted in various harmful ways. Smoke from factories, brick kilns, and motor vehicles pollutes the air we breathe. Industrial waste and toxic chemicals dumped into rivers pollute the water. In addition, loud horns and loudspeakers cause severe sound pollution. Environment pollution causes deadly diseases like asthma, cancer, and heart attacks, and damages our ecological balance. To save our earth, we must stop indiscriminate deforestation, use eco-friendly fuels, and create mass public awareness to keep our environment clean.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "pollution",
        "banglaMeaning": "দূষণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "ecosystem",
        "banglaMeaning": "বাস্তুতন্ত্র",
        "partOfSpeech": "noun"
      },
      {
        "word": "hazardous",
        "banglaMeaning": "বিপজ্জনক",
        "partOfSpeech": "adj"
      },
      {
        "word": "renewable",
        "banglaMeaning": "নবায়নযোগ্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "awareness",
        "banglaMeaning": "সচেতনতা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": true,
    "boardTags": [
      "SSC 2024",
      "Top Suggestion ⭐"
    ],
    "banglaTranslation": "পরিবেশ দূষণ বর্তমান বিশ্বের অন্যতম প্রধান সংকট। আমাদের পরিবেশ গঠিত বায়ু, পানি, মাটি ও জীবজগতের সমন্বয়ে। কলকারখানার বিষাক্ত ধোঁয়া, যানবাহনের কালো ধোঁয়া ও বর্জ্যের কারণে পরিবেশ মারাত্মকভাবে দূষিত হচ্ছে। দূষিত বায়ু গ্রহণ করার ফলে শ্বাসকষ্ট, ক্যান্সার ও হৃদরোগের মতো মারাত্মক রোগ সৃষ্টি হচ্ছে। নদী-নালার পানি দূষিত হওয়ায় নিরাপদ পানির সংকট দেখা দিচ্ছে। পরিবেশ রক্ষা করতে হলে আমাদের বনায়ন বৃদ্ধি করতে হবে এবং বর্জ্য পরিশোধনাগার ব্যবহার করতে হবে।",
    "wordCount": 106
  },
  {
    "id": "my_aim_in_life",
    "title": "My Aim in Life",
    "questions": [],
    "template": "Having a clear aim in life gives direction, purpose, and motivation to a person. My aim in life is to become a qualified and compassionate doctor. In Bangladesh, many poor village people suffer from diseases because they cannot afford costly medical treatment. After completing my SSC and HSC exams with GPA-5, I want to get admitted into a government medical college to study MBBS. After becoming a doctor, I plan to set up a free clinic in my village to serve poor and helpless patients without charging fees. Serving suffering humanity is the greatest service to God. I am studying sincerely every day to turn this noble dream into reality.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "rudder",
        "banglaMeaning": "নৌকার হাল",
        "partOfSpeech": "noun"
      },
      {
        "word": "noble",
        "banglaMeaning": "মহৎ",
        "partOfSpeech": "adj"
      },
      {
        "word": "profession",
        "banglaMeaning": "পেশা",
        "partOfSpeech": "noun"
      },
      {
        "word": "destination",
        "banglaMeaning": "লক্ষ্য / গন্তব্য",
        "partOfSpeech": "noun"
      },
      {
        "word": "humanity",
        "banglaMeaning": "মানবতা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 110
  },
  {
    "id": "winter_morning",
    "title": "A Winter Morning",
    "questions": [],
    "template": "A winter morning in Bangladesh is cold, misty, and charming. Thick fog covers the entire surroundings, and objects at a distance cannot be seen clearly. The sun rises late and shines gently through the morning mist. Dewdrops fall on grass and leaves at night and sparkle like diamonds in the early morning sunlight. People wear warm sweaters, jackets, and shawls to protect themselves from the chilly wind. In villages, elderly people and children sit around fires of dry leaves to warm themselves. Delicious winter foods like hot date juice and homemade pithas (such as Bhapa and Chitoi) are enjoyed by all. Despite the cold, a winter morning is refreshing and enjoyable.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "misty",
        "banglaMeaning": "কুয়াশাচ্ছন্ন",
        "partOfSpeech": "adj"
      },
      {
        "word": "dense",
        "banglaMeaning": "ঘন",
        "partOfSpeech": "adj"
      },
      {
        "word": "delicacies",
        "banglaMeaning": "সুস্বাদু খাবার",
        "partOfSpeech": "noun"
      },
      {
        "word": "basking",
        "banglaMeaning": "রোদ পোহানো",
        "partOfSpeech": "verb"
      },
      {
        "word": "shivering",
        "banglaMeaning": "ঠান্ডায় কাঁপা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 111
  },
  {
    "id": "value_of_time",
    "title": "Value of Time",
    "questions": [],
    "template": "Time is the most valuable and priceless treasure in human life. Once a moment is lost, it can never be recovered with all the wealth in the world. As the famous proverb says, 'Time and tide wait for none.' Successful people in history achieved greatness because they made the best use of every single minute. On the other hand, those who waste their time in laziness and procrastination suffer regret and failure in life. For students, time management is especially crucial. A student who studies regularly according to a timetable does well in exams. We must value our time, avoid idleness, and perform all our daily duties promptly to achieve success in life.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "precious",
        "banglaMeaning": "মূল্যবান",
        "partOfSpeech": "adj"
      },
      {
        "word": "procrastination",
        "banglaMeaning": "দীর্ঘসূত্রতা / কাজ ফেলে রাখা",
        "partOfSpeech": "noun"
      },
      {
        "word": "punctual",
        "banglaMeaning": "সময়নিষ্ঠ",
        "partOfSpeech": "adj"
      },
      {
        "word": "opportunity",
        "banglaMeaning": "সুযোগ",
        "partOfSpeech": "noun"
      },
      {
        "word": "prosperous",
        "banglaMeaning": "সমৃদ্ধশালী",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 113
  },
  {
    "id": "book_fair",
    "title": "A Book Fair",
    "questions": [],
    "template": "A book fair is an attractive and cultural exhibition where different kinds of books are displayed and sold. In Bangladesh, the Ekushey Book Fair is held every year in February at Bangla Academy in memory of our Language Martyrs. Hundreds of colorful stalls are set up selling storybooks, novels, poetry, science fiction, and textbooks. Thousands of book lovers, students, and writers gather at the fair daily. People browse through new books, buy their favorite titles at discounts, and collect autographs from famous authors. The whole atmosphere is filled with culture, literature, and knowledge. A book fair inspires people to develop the noble habit of reading books.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "stalls",
        "banglaMeaning": "বইয়ের দোকান / প্রদর্শনী কক্ষ",
        "partOfSpeech": "noun"
      },
      {
        "word": "varieties",
        "banglaMeaning": "নানা রকম / বৈচিত্র্য",
        "partOfSpeech": "noun"
      },
      {
        "word": "cultural",
        "banglaMeaning": "সাংস্কৃতিক",
        "partOfSpeech": "adj"
      },
      {
        "word": "knowledge",
        "banglaMeaning": "জ্ঞান",
        "partOfSpeech": "noun"
      },
      {
        "word": "heritage",
        "banglaMeaning": "ঐতিহ্য",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 106
  },
  {
    "id": "traffic_jam",
    "title": "Traffic Jam",
    "questions": [],
    "template": "Traffic jam is a common and painful problem in major cities of Bangladesh, especially in Dhaka. It occurs when a large number of vehicles get stuck on the road for hours. Narrow roads, unplanned construction, illegal parking, violation of traffic rules, and the movement of slow rickshaws alongside fast vehicles are the main causes of traffic jam. It wastes valuable working hours for office workers and causes students to miss school and exams. Serious patients in ambulances often suffer the most. To solve this severe problem, the government should widen roads, build more flyovers and metro rails, and strictly enforce traffic laws.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "congestion",
        "banglaMeaning": "যানজট / অতিরিক্ত ভিড়",
        "partOfSpeech": "noun"
      },
      {
        "word": "violation",
        "banglaMeaning": "আইন অমান্য করা",
        "partOfSpeech": "noun"
      },
      {
        "word": "overpass",
        "banglaMeaning": "উড়াল সড়ক / ফ্লাইওভার",
        "partOfSpeech": "noun"
      },
      {
        "word": "sufferings",
        "banglaMeaning": "দুর্ভোগ",
        "partOfSpeech": "noun"
      },
      {
        "word": "pedestrian",
        "banglaMeaning": "পথচারী",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 102
  },
  {
    "id": "my_favourite_game",
    "title": "My Favourite Game",
    "questions": [],
    "template": "My favourite game is football. It is the most popular, thrilling, and exciting sport in the world. Football is played between two teams of eleven players each on a large rectangular grass field. I usually play football in our school playground with my classmates every afternoon. Playing football requires speed, stamina, teamwork, and quick decision-making. It provides excellent physical exercise, strengthens muscles, and keeps the body active and healthy. It also teaches us valuable life skills like discipline, cooperation, and sportsmanship. Whenever I play football, I feel joyful, refreshed, and full of energy.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "opponent",
        "banglaMeaning": "প্রতিপক্ষ",
        "partOfSpeech": "noun"
      },
      {
        "word": "teamwork",
        "banglaMeaning": "দলগত কাজ",
        "partOfSpeech": "noun"
      },
      {
        "word": "refresh",
        "banglaMeaning": "মন চাঙ্গা করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "stamina",
        "banglaMeaning": "দৈহিক শক্তি / সহনশীলতা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 93
  },
  {
    "id": "flood_in_bangladesh",
    "title": "Flood in Bangladesh",
    "questions": [],
    "template": "Flood is a common natural disaster in Bangladesh that occurs almost every year during the monsoon season. Heavy rainfall and water rushing down from the upstream rivers cause floods in our country. During a flood, houses, roads, crops, and schools go underwater. Thousands of people become homeless and take shelter on embankments and rooftops. Floods destroy valuable crops, cause food shortages, and spread waterborne diseases like cholera and diarrhea. After the flood recedes, the government and relief organizations distribute food, clean drinking water, and medicine to the affected people. Tree planting and modern flood control embankments can help minimize flood damage.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "disaster",
        "banglaMeaning": "দুর্যোগ",
        "partOfSpeech": "noun"
      },
      {
        "word": "overflow",
        "banglaMeaning": "উপচে পড়া / প্লাবিত হওয়া",
        "partOfSpeech": "verb"
      },
      {
        "word": "devastating",
        "banglaMeaning": "বিধ্বংসী / সর্বনাশা",
        "partOfSpeech": "adj"
      },
      {
        "word": "rehabilitation",
        "banglaMeaning": "পুনর্বাসন",
        "partOfSpeech": "noun"
      },
      {
        "word": "submerged",
        "banglaMeaning": "নিমজ্জিত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 101
  },
  {
    "id": "my_village",
    "title": "My Village",
    "questions": [],
    "template": "The name of my village is Sonapur. It is a peaceful and beautiful village located in our district. A small river flows gently beside our village, adding to its natural charm. Green paddy fields, coconut trees, mango orchards, and freshwater ponds surround the village. Most of the villagers are farmers, fishermen, and teachers. They are simple, kind, and hardworking people who live in peace and harmony. Our village has a primary school, a high school, a weekly market, and a health clinic. The air in my village is clean and free from urban pollution. I love my sweet village very much.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "scenic",
        "banglaMeaning": "নৈসর্গিক / মনোরম",
        "partOfSpeech": "adj"
      },
      {
        "word": "tranquility",
        "banglaMeaning": "প্রশান্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "hospitable",
        "banglaMeaning": "অতিথিপরায়ণ",
        "partOfSpeech": "adj"
      },
      {
        "word": "agricultural",
        "banglaMeaning": "কৃষিভিত্তিক",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 101
  },
  {
    "id": "my_pet_animal",
    "title": "My Pet Animal",
    "questions": [],
    "template": "My pet animal is a cute white cat named Tommy. He has soft white fur, bright blue eyes, and a bushy tail. Tommy is very playful, friendly, and intelligent. Every morning, he drinks fresh milk from a bowl and loves eating fish and rice. Whenever I return home from school, Tommy runs to the door, meows happily, and rubs against my legs. He likes playing with a small woolen ball and chases mice in our house. At night, he sleeps comfortably in a cozy basket in my room. Tommy is an affectionate companion, and I love taking care of him.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "playful",
        "banglaMeaning": "চঞ্চল / আমুদে",
        "partOfSpeech": "adj"
      },
      {
        "word": "affectionate",
        "banglaMeaning": "স্নেহশীল",
        "partOfSpeech": "adj"
      },
      {
        "word": "responsibility",
        "banglaMeaning": "দায়িত্বশীলতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "companion",
        "banglaMeaning": "সঙ্গী",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 100
  },
  {
    "id": "library",
    "title": "Our School Library",
    "questions": [],
    "template": "A school library is a storehouse of knowledge and an essential part of any educational institution. Our school has a large and well-organized library on the second floor. It contains thousands of books on various subjects, including literature, science, history, biographies, and dictionaries. Daily newspapers and educational magazines are also available. The library has separate reading tables where students can read quietly in a calm atmosphere. The librarian is very helpful and issues books to students for home reading. A school library enriches our vocabulary, broadens our minds, and creates a lifelong love for reading.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "treasure",
        "banglaMeaning": "রত্নভাণ্ডার",
        "partOfSpeech": "noun"
      },
      {
        "word": "concentrate",
        "banglaMeaning": "মনোনিবেশ করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "enrich",
        "banglaMeaning": "সমৃদ্ধ করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "borrow",
        "banglaMeaning": "ধার নেওয়া",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 95
  },
  {
    "id": "para_tea_stall",
    "title": "A Tea Stall",
    "questions": [],
    "template": "A roadside tea stall is a very common and familiar sight in villages and cities across Bangladesh. It is usually a small shop with a tin roof, a few wooden benches, and tables. The stall owner continuously boils water in a large kettle to prepare hot tea with milk and sugar. Besides tea, biscuits, bananas, breads, and cigarettes are sold here. People from all walks of life, such as rickshaw pullers, students, and office workers, gather at the tea stall. They drink tea, read newspapers, and discuss politics, sports, and village news. A tea stall is a popular social meeting place for common people.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "common",
        "banglaMeaning": "সাধারণ / পরিচিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "gathering",
        "banglaMeaning": "আড্ডা / মিলনমেলা",
        "partOfSpeech": "noun"
      },
      {
        "word": "refreshment",
        "banglaMeaning": "জলখাবার / ক্লান্তি দূরীকরণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "conversation",
        "banglaMeaning": "কথোপকথন",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 104
  },
  {
    "id": "para_rainy_day",
    "title": "A Rainy Day",
    "questions": [],
    "template": "A rainy day is a day of continuous rainfall. The sky remains dark with clouds, and the sun stays hidden. Roads become muddy and flooded, making daily movement difficult. However, students feel happy because classes are often suspended. Nature looks fresh, green, and vibrant as rainwater washes the trees and plants. At home, families enjoy delicious Khichuri and spend time together. While children float paper boats with excitement, poor people face hardships due to waterlogging and lack of daily work. Overall, a rainy day brings a cool and poetic atmosphere to our country.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "gloomy",
        "banglaMeaning": "মেঘলা / অন্ধকারাচ্ছন্ন",
        "partOfSpeech": "adj"
      },
      {
        "word": "inconvenience",
        "banglaMeaning": "অসুবিধা",
        "partOfSpeech": "noun"
      },
      {
        "word": "monsoon",
        "banglaMeaning": "বর্ষাকাল",
        "partOfSpeech": "noun"
      },
      {
        "word": "downpour",
        "banglaMeaning": "মুষলধারে বৃষ্টি",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 93
  },
  {
    "id": "para_winter_morning",
    "title": "A Winter Morning",
    "questions": [],
    "template": "A winter morning in Bangladesh is cold, misty, and peaceful. Dense fog covers the roads and fields, reducing visibility until the sun rises. Dewdrops glisten on grass like pearls in the soft morning sunlight. People wear warm sweaters, and villagers gather around bonfires of dry leaves to keep warm. Fresh date juice and hot pithas are the most delightful treats of a winter morning. Farmers head to their fields early, while students walk to school wrapped in scarves. Despite the shivering cold, the calm beauty of a winter morning is loved by all.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "chilly",
        "banglaMeaning": "কনকনে ঠান্ডা",
        "partOfSpeech": "adj"
      },
      {
        "word": "dewdrops",
        "banglaMeaning": "শিশিরবিন্দু",
        "partOfSpeech": "noun"
      },
      {
        "word": "scenery",
        "banglaMeaning": "প্রাকৃতিক দৃশ্য",
        "partOfSpeech": "noun"
      },
      {
        "word": "refreshing",
        "banglaMeaning": "সতেজতাদায়ক",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 93
  },
  {
    "id": "para_life_farmer",
    "title": "The Life of a Farmer",
    "questions": [],
    "template": "A farmer is the backbone of our agricultural economy in Bangladesh. He leads a very simple, hardworking, and humble life. A farmer wakes up early in the morning before sunrise and goes to the field with his cattle and plough. He works tirelessly in the hot sun and heavy rain to cultivate rice, jute, wheat, and vegetables. He provides food for the entire nation with his honest labor. Despite his hard work, most farmers remain poor and face financial hardships due to floods and droughts. We must respect our farmers and provide them with modern agricultural support.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "hardworking",
        "banglaMeaning": "পরিশ্রমী",
        "partOfSpeech": "adj"
      },
      {
        "word": "harvest",
        "banglaMeaning": "ফসল কাটা",
        "partOfSpeech": "verb"
      },
      {
        "word": "backbone",
        "banglaMeaning": "মেরুদণ্ড",
        "partOfSpeech": "noun"
      },
      {
        "word": "nourish",
        "banglaMeaning": "খাদ্য জুগিয়ে বাঁচিয়ে রাখা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 97
  },
  {
    "id": "para_school_magazine",
    "title": "A School Magazine",
    "questions": [],
    "template": "A school magazine is an annual publication containing literary contributions from students and teachers. It is published by the school magazine committee under the guidance of our English teachers. The magazine features essays, short stories, poems, jokes, and annual reports of school activities and sports. It provides a wonderful platform for young students to express their creativity and improve their writing skills. Reading the school magazine fills students with joy and pride. It reflects the intellectual life of a school and preserves fond memories of student life.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "publication",
        "banglaMeaning": "প্রকাশনা",
        "partOfSpeech": "noun"
      },
      {
        "word": "creativity",
        "banglaMeaning": "সৃজনশীলতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "contribute",
        "banglaMeaning": "অবদান রাখা / লেখা জমা দেওয়া",
        "partOfSpeech": "verb"
      },
      {
        "word": "editor",
        "banglaMeaning": "সম্পাদক",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 87
  },
  {
    "id": "para_mobile_phone",
    "title": "Mobile Phone",
    "questions": [],
    "template": "A mobile phone is a wonderful invention of modern science and technology. It has revolutionized global communication. Today, a mobile phone is not just used for voice calls; with smartphone technology, we can send instant messages, attend online classes, read digital books, and browse the internet. Mobile banking like bKash and Nagad has made financial transactions quick and easy. However, excessive use of mobile phones can cause eye strain, waste valuable study time, and create gaming addiction among students. Therefore, students should use mobile phones wisely for learning and avoid overuse.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "communication",
        "banglaMeaning": "যোগাযোগ",
        "partOfSpeech": "noun"
      },
      {
        "word": "device",
        "banglaMeaning": "যন্ত্র / কৌশল",
        "partOfSpeech": "noun"
      },
      {
        "word": "indispensable",
        "banglaMeaning": "অপরিহার্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "addiction",
        "banglaMeaning": "আসক্তি",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 91
  },
  {
    "id": "a_teacher",
    "title": "A Good Teacher",
    "questions": [],
    "template": "A good teacher is a friend, philosopher, and guide to students. In our school, our English teacher is a great role model. He is punctual, kind, and knowledgeable. He explains difficult grammar and writing lessons in a very easy and interesting way so that every student can understand. He never loses his patience with slow learners and encourages us to read books and speak English confidently. He also teaches us honesty, moral values, and discipline. A good teacher shapes the character and bright future of students, and we respect him deeply.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "inspiration",
        "banglaMeaning": "অনুপ্রেরণা",
        "partOfSpeech": "noun"
      },
      {
        "word": "dedication",
        "banglaMeaning": "উৎসর্গ / নিষ্ঠা",
        "partOfSpeech": "noun"
      },
      {
        "word": "knowledgeable",
        "banglaMeaning": "জ্ঞানী",
        "partOfSpeech": "adj"
      },
      {
        "word": "compassionate",
        "banglaMeaning": "দয়ালু / সহানুভূতিশীল",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 91
  },
  {
    "id": "lost_kitten",
    "title": "The Lost Kitten",
    "questions": [],
    "template": "One day I found a little kitten near the roadside. The kitten was very small, shivering with cold, and meowing weakly. I gently picked it up and brought it to my home. After that, I gave it some warm milk and made a cozy bed for it to sleep. The next morning, we put up posters in our neighborhood. Finally, we found its worried owner, and seeing them reunited made me feel very happy.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 74
  },
  {
    "id": "surprise_birthday",
    "title": "A Surprise Birthday",
    "questions": [],
    "template": "Last week we organized a surprise birthday party for our close friend Rahim. We decorated the living room with colorful balloons, glowing lights, and ribbons. Everyone secretly planned to bring a homemade chocolate cake and special gifts. When Rahim arrived, he was completely surprised and overjoyed. We all sang the birthday song together and spent an unforgettable evening full of joy and laughter.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 63
  },
  {
    "id": "unity_is_strength",
    "title": "Unity is Strength: The Old Man and His Quarreling Sons",
    "questions": [],
    "template": "Once there was an old man who lived with his four sons in a village. The sons were always quarrelling with each other and fighting over small things every day. The old man felt very sad and worried about their future. He knew that discord would ruin their family. One day, he decided to teach them an unforgettable lesson. He called all his sons to his room and handed them a bundle of ten sticks tied tightly together. He asked each of them one by one to break the bundle. The first son tried with all his strength but failed. The second, third, and fourth sons also tried hard, but none of them could break the bundle. Then the wise father untied the bundle and gave a single stick to each son. He told them to break the single sticks. The sons snapped the sticks effortlessly in seconds. The old man smiled and said, 'My sons, learn from this. If you remain united like the bundle of sticks, no enemy can harm you. But if you divide and quarrel, you will be broken easily.' The sons realized their mistake, promised never to fight again, and lived together in harmony. Unity is strength.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 202
  },
  {
    "id": "honesty_is_best_policy",
    "title": "Honesty is the Best Policy: The Poor Woodcutter and the Golden Axe",
    "questions": [],
    "template": "Once there was a poor woodcutter who lived in a small hut near a river. Every day he went into the forest to cut wood and sold it in the local market to support his family. One day, while cutting a branch overhanging the deep river, his iron axe accidentally slipped from his hands and fell into the deep water. The axe was his only means of earning a livelihood. Desperate and helpless, the poor man sat by the riverbank and wept bitterly. Suddenly, the river god emerged from the shining water and asked him why he was crying. After hearing his misfortune, the god dived into the water and brought out a dazzling axe made of pure gold. The honest woodcutter looked at it and humbly said it was not his. The god dived again and brought out a beautiful silver axe. The woodcutter politely refused again, stating that his axe was just ordinary iron. Finally, the god brought out the old iron axe. The woodcutter beamed with joy and cried, 'Yes, this is my axe!' Pleased with his remarkable honesty, the river god gifted him all three axes. The woodcutter sold the golden and silver axes, became prosperous, and lived happily ever after. Honesty is truly the best policy.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 211
  },
  {
    "id": "slow_and_steady",
    "title": "Slow and Steady Wins the Race: The Hare and the Tortoise",
    "questions": [],
    "template": "One day, a proud hare and a patient tortoise met in a forest. The hare was famous for his blazing speed, while the tortoise was known for his slow and steady pace. The hare ridiculed the tortoise for moving so slowly and challenged him to a running race. The calm tortoise accepted the challenge with confidence. All the forest animals gathered around the track to witness the competition. As the race began, the hare dashed forward like an arrow and quickly left the tortoise far behind. Seeing the vast distance between them, the overconfident hare decided to take a short nap under the cool shade of a banyan tree. He soon fell into a deep sleep. Meanwhile, the tortoise kept walking steadily step by step without pausing for a single moment. When the hare finally woke up and rushed to the finish line, he was shocked to see the tortoise already celebrating victory amidst cheers from the animals. The hare hung his head in shame. The race proved that slow and steady wins the race.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 175
  },
  {
    "id": "friend_in_need",
    "title": "A Friend in Need is a Friend Indeed: Two Friends and a Bear",
    "questions": [],
    "template": "Two close friends were walking together through a dense and dangerous forest. Before starting their journey, they solemnly promised to stand by each other in any time of peril. As they walked deeper into the woods, a huge wild bear suddenly emerged from the bushes and rushed towards them. In sudden panic, one of the friends quickly climbed up a tall tree to save his own life, completely abandoning his companion. The other friend did not know how to climb trees. Remembering that bears do not touch dead bodies, he immediately threw himself flat upon the ground, closed his eyes, and held his breath. The ferocious bear approached him, sniffed his ears, face, and nose, and assuming him to be dead, walked quietly away into the forest. When the danger had passed, the selfish friend climbed down from the tree and jokingly asked, 'What did the bear whisper into your ears?' The wise friend replied calmly, 'The bear advised me never to trust a friend who deserts you in times of danger.' A friend in need is a friend indeed.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 180
  },
  {
    "id": "liar_shepherd",
    "title": "The Liar Shepherd: The Boy Who Cried Wolf",
    "questions": [],
    "template": "A young shepherd boy tended his flock of sheep near a dark forest on the outskirts of a village. His daily routine was monotonous, and one day he decided to play a mischievous prank to entertain himself. He ran towards the village shouting frantically at the top of his voice, 'Wolf! Wolf! Please help me, a wolf is attacking the sheep!' Hearing his desperate cries, the kind villagers dropped their work, grabbed sticks and axes, and rushed to his rescue. When they arrived out of breath, they found no wolf; the sheep were grazing peacefully, and the boy was laughing mockingly at them. The villagers returned annoyed. A few days later, the boy repeated the same trick, and the villagers were tricked again. However, one afternoon, a ferocious wolf actually emerged from the forest and attacked the flock. Terrified, the shepherd boy screamed for help with all his might, 'Wolf! Wolf! Please save us!' But this time, the villagers assumed he was lying again, and no one came to his aid. The wolf killed many sheep, and the boy wept in bitter regret. Nobody believes a liar, even when he speaks the truth.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 193
  },
  {
    "id": "thirsty_crow",
    "title": "A Thirsty Crow",
    "questions": [],
    "template": "On a scorching summer afternoon, a thirsty crow was flying over the countryside searching desperately for water. His throat was parched, and he was exhausted after hours of searching. Just when he was losing hope, he spotted a large pitcher resting under a shady tree in a garden. He flew down eagerly and peered inside. To his dismay, there was only a little water left at the bottom of the pitcher, and its neck was too narrow for his beak to reach. The clever crow did not lose heart. He looked around and noticed a pile of small pebbles scattered on the ground. A brilliant idea struck him. He picked up the pebbles one by one with his beak and dropped them patiently into the pitcher. With each stone dropped, the water level gradually rose higher and higher until it reached the brim. The thirsty crow drank the refreshing water to his heart's content, quenched his thirst, and flew away happily. Where there is a will, there is a way.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 170
  },
  {
    "id": "grapes_are_sour",
    "title": "Grapes are Sour: The Hungry Fox",
    "questions": [],
    "template": "One hot summer day, a hungry fox was roaming through the countryside in search of food. He had not eaten for days and felt extremely weak. Suddenly, he entered a lush vineyard and spotted big, juicy bunches of purple grapes hanging temptingly from a high wooden trellis. His mouth watered at the sight of the ripe grapes. The fox took a few steps back, ran forward, and leaped as high as he could, but he fell short. He tried again and again from different angles, jumping with all his might, but the grapes hung far out of his reach. Exhausted, panting heavily, and with aching legs, he finally gave up the attempt. As he walked away with his nose in the air, he said dismissively, 'The grapes are probably sour and not worth eating anyway.' We often despise what we cannot achieve, comforting ourselves with false excuses.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 147
  },
  {
    "id": "king_midas",
    "title": "King Midas and the Golden Touch",
    "questions": [],
    "template": "Long ago, there lived a wealthy monarch named King Midas who loved gold more than anything else in the world. Despite his immense fortune, his desire for wealth was insatiable. One day, a benevolent god visited his palace and offered to grant him any wish he desired. King Midas immediately wished that everything he touched would turn into pure gold. The god granted his desire. Overjoyed, Midas touched stones, chairs, and pillars, and each instantly transformed into solid shining gold. However, his delight soon turned into horror. When he sat down for dinner, the food turned to gold as soon as it touched his lips, and the water became liquid gold, leaving him starving and thirsty. Suddenly, his beloved little daughter ran into the room to comfort him. In distress, Midas embraced her, and she instantly turned into a lifeless golden statue. Weeping in agony, Midas realized his foolish greed and begged the god to take back the cursed gift. The merciful god instructed him to wash in the sacred River Pactolus. Midas plunged into the river, the golden touch washed away, and his daughter and food were restored to life. Greed brings only sorrow, and love is far more precious than wealth.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 203
  },
  {
    "id": "who_will_bell_the_cat",
    "title": "Who Will Bell the Cat? The Meeting of Mice",
    "questions": [],
    "template": "A large community of mice lived in fear inside a big mansion because of an agile and ferocious cat that hunted them day and night. Many mice had fallen victim to the predator, and the survivors were terrified to step out for food. To find a solution, the mice called a general council. Various ideas were proposed, but none seemed practical. Finally, a young mouse stood up proudly and announced, 'I have a wonderful plan! Let us tie a small bell around the cat's neck. Whenever the cat approaches, the bell will jingle, giving us plenty of time to run into our holes.' The mice cheered enthusiastically and applauded his cleverness. However, an elderly, experienced mouse stood up slowly and said, 'The plan is indeed admirable, but tell me: who is going to bell the cat?' Complete silence fell over the room. Not a single mouse volunteered to undertake such a perilous task. It is easy to propose grand ideas, but difficult to put them into practice.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 167
  },
  {
    "id": "grasp_all_lose_all",
    "title": "Grasp All, Lose All: The Greedy Farmer and the Golden Goose",
    "questions": [],
    "template": "Once, a poor farmer lived in a humble village with his family, struggling daily to make ends meet. One day, he bought a remarkable goose that possessed a magical quality: every single morning, the goose laid a shining golden egg. The overjoyed farmer sold the golden egg in the market every day, earning generous amounts of money. Soon, the family built a grand house, wore fine clothes, and enjoyed delicious meals. However, as his wealth increased, the farmer grew increasingly greedy and impatient. He thought that the goose's stomach must contain a vast reservoir of gold and decided to seize it all at once rather than waiting for one egg a day. Driven by uncontrollable greed, he took a sharp knife, slaughtered the goose, and cut open its belly. To his utter despair, the inside was just like that of any ordinary bird, with no gold at all. The farmer wept bitterly over his foolish mistake, realizing that he had destroyed his fortune forever. Grasp all, lose all.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 168
  },
  {
    "id": "lion_and_mouse",
    "title": "The Lion and the Mouse",
    "questions": [],
    "template": "One hot afternoon, a mighty lion was sleeping peacefully under the shade of a large tree in the jungle. A tiny mouse playing nearby accidentally scurried across the sleeping beast's mane and nose. Awakened and furious, the lion trapped the trembling mouse beneath his massive paw and prepared to crush him. The frightened mouse begged for mercy, saying, 'O King of the jungle, please forgive my mistake and spare my life! If you let me go, I may one day repay your kindness.' Amused by the thought of such a tiny creature helping the king of beasts, the lion laughed heartily and generously let him go free. A few weeks later, hunters entered the jungle and captured the lion in a heavy rope net. Unable to free himself, the lion roared in helpless rage. Hearing the familiar roar, the little mouse hurried to the scene and immediately began gnawing through the thick ropes with his sharp teeth. Within a short time, the lion was freed. The lion warmly thanked the little mouse and learned that even the smallest friend can be of great help. Kindness is never wasted.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 188
  },
  {
    "id": "ant_and_grasshopper",
    "title": "The Ants and the Grasshopper",
    "questions": [],
    "template": "Throughout the warm, sunlit days of summer, a cheerful grasshopper spent his time singing melodies, dancing across the meadows, and enjoying the present moment without a care for the future. Nearby, a colony of industrious ants worked tirelessly from dawn till dusk, gathering grain and storing food inside their underground chambers for the approaching winter. The carefree grasshopper laughed at their constant labor and invited them to relax and sing with him, but the wise ants advised him to prepare for the harsh cold months ahead. The grasshopper ignored their warning and continued his merrymaking. Soon, winter arrived with freezing winds and heavy snow covering the ground. The shivering grasshopper found no food and began starving. Desperate, he knocked on the ants' door and pleaded for a little grain. The ants asked what he had done all summer, and when he admitted he was only singing, they replied, 'If you sang all summer, you must dance through the winter.' The humbled grasshopper realized too late that hard work today secures tomorrow.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 171
  },
  {
    "id": "ant_and_dove",
    "title": "An Ant and a Dove",
    "questions": [],
    "template": "On a scorching summer day, a little ant wandering along a riverbank slipped on the wet mud and fell into the swirling waters. The strong current carried her away, and she struggled desperately to stay afloat, crying out for help. Perched on a tree branch overlooking the river, a compassionate white dove noticed the drowning ant. Acting quickly, the dove plucked a large green leaf with her beak and dropped it gently into the water beside the ant. The ant climbed onto the floating leaf, which drifted safely to the riverbank. Grateful for her life, the ant looked up and thanked the gentle bird. A few days later, a bird hunter crept quietly through the woods and aimed his net to capture the sleeping dove. The ant noticed the imminent danger and instantly crawled onto the hunter's bare foot, delivering a sharp and painful bite. The hunter screamed in pain and dropped his net. Startled by the commotion, the dove took flight and escaped safely. The grateful friends learned that one good turn deserves another.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 175
  },
  {
    "id": "pied_piper_of_hamelin",
    "title": "The Pied Piper of Hamelin",
    "questions": [],
    "template": "Long ago, the beautiful German town of Hamelin suffered from a terrible plague of rats. Millions of rodents invaded homes, devoured food supplies, and harassed the citizens. Helpless and desperate, the town mayor and council promised a handsome reward of a thousand gold coins to anyone who could rid the town of the menace. Soon, a tall stranger wearing a colorful coat arrived, carrying a magical pipe. He promised to eliminate every rat in exchange for the promised reward. The mayor eagerly agreed. The Pied Piper stepped into the streets and began playing an enchanting melody. Fascinated by the magical tunes, rats poured out from every cellar, attic, and corner, forming a massive procession behind him. The piper led them straight into the River Weser, where all the rats drowned. When the piper returned to claim his rightful fee, the ungrateful mayor refused to pay, offering only a petty sum. Angered by their deceit, the piper returned the following morning and played a sweet, hypnotic melody. All the joyful children of Hamelin followed his music through the streets and into a mountain cavern that sealed behind them, never to return. The grief-stricken townspeople learned a painful lesson: broken promises always bring severe consequences.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 203
  },
  {
    "id": "two_rats_and_monkey",
    "title": "Two Rats and a Cunning Monkey",
    "questions": [],
    "template": "Two hungry rats wandering in search of food discovered a large, delicious piece of bread on the road. Both were eager to eat, but they could not agree on how to divide it equally, each claiming the bigger share. As their quarrel escalated into a fierce fight, a cunning monkey sitting on a nearby tree branch observed them with a sly grin. He climbed down, pretended to be a fair mediator, and offered to divide the bread into two perfectly equal halves. The foolish rats gratefully accepted his help. The monkey fetched a balance scale, broke the bread into two uneven pieces, and placed them on the pans. Seeing one side heavier, he took a large bite from the heavier piece. Now the other side became heavier, so he took a bite from that one. He deliberately repeated this process until only a tiny crumb remained. When the alarmed rats asked for their bread back, the monkey declared the remaining crumb to be his rightful fee for arbitrating their dispute and swallowed it whole. Empty-handed and sorrowful, the rats learned that when two fools fight, a cunning third party always takes the prize.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 193
  },
  {
    "id": "bayazid_devotion",
    "title": "Bayazid’s Devotion to His Mother: The Boy Who Stood All Night",
    "questions": [],
    "template": "Hazrat Bayazid Bostami was a devoted and pious boy who loved and revered his ailing mother deeply. One cold winter night, while he was studying, his sick mother woke up from her sleep and asked for a glass of water. Bayazid immediately went to the kitchen, but to his dismay, the water pitcher was completely empty. Determined not to disappoint his mother, he took a jug and walked through the dark, chilly night to a distant well to fetch fresh water. By the time he returned home with the filled glass, his mother had fallen asleep again. Unwilling to disturb her peaceful rest, Bayazid stood quietly beside her bed all night, holding the glass of water in his freezing hands. When the morning light broke, his mother opened her eyes and saw her son shivering but standing patiently with the glass. Overwhelmed by his extraordinary devotion and love, tears rolled down her cheeks, and she prayed from the bottom of her heart for his success and spiritual elevation. Her heartfelt blessings turned Bayazid into one of the greatest saints in Islamic history.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 182
  },
  {
    "id": "saadi_value_of_dress",
    "title": "Sheikh Saadi’s Wit: Value of Dress",
    "questions": [],
    "template": "Sheikh Saadi was a legendary Persian poet and scholar renowned across the land for his immense wisdom and simplicity. One day, a wealthy nobleman invited him to a lavish feast attended by eminent dignitaries. Saadi traveled a long distance and arrived wearing humble, worn-out clothes. Judging him solely by his modest appearance, the superficial host paid him no attention, offered him no seat of honor, and served him ordinary leftover food in a secluded corner. Saadi ate quietly without complaint and departed. A few days later, Saadi returned to the nobleman's house for another celebration, but this time he dressed in luxurious silk robes, an ornate turban, and costly jewels. The moment the host saw him, he bowed respectfully, escorted him to the chief seat at the banquet, and served rich delicacies. When the feast began, Saadi did something astonishing: instead of eating, he began feeding the delicious food to his silk robes, saying, 'Eat, my fine dress, eat!' Bewildered, the host asked for an explanation. Saadi smiled and replied, 'When I came in ordinary clothes, you neglected me; today you honor me only because of my expensive robes. Therefore, this feast is for my clothes, not for me.' Deeply ashamed, the nobleman begged for forgiveness and realized that true worth lies in character, not outward appearance.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 217
  },
  {
    "id": "robert_bruce_spider",
    "title": "Robert Bruce and the Spider: Failure is the Pillar of Success",
    "questions": [],
    "template": "Robert Bruce was the patriotic King of Scotland whose kingdom was invaded by a powerful enemy army. Bruce led his brave soldiers into battle to defend their homeland, but suffered defeat six consecutive times. Disheartened, wounded, and pursued by the enemy, the king fled into the desolate mountains and took refuge inside a dark, damp cave. Sitting alone in despair, he felt that his cause was lost and contemplated giving up the struggle. Suddenly, his attention was drawn to a tiny spider hanging from the cave ceiling, attempting to swing its thread onto an adjacent beam to weave its web. Bruce watched intently as the spider tried and fell once, twice, three times, and continued failing up to six times. Yet, the tiny creature showed no discouragement. Gathering all its strength, the spider made a seventh attempt and successfully fastened its thread to the beam. Inspired by the spider's relentless perseverance, Bruce sprang to his feet with renewed courage, declaring, 'If a tiny spider can succeed after six failures, why should I give up?' He reassembled his army, fought bravely in the decisive battle of Bannockburn, and liberated Scotland. Failure is indeed the pillar of success if one perseveres.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 199
  },
  {
    "id": "abdul_qadir_truthfulness",
    "title": "Hazrat Abdul Qadir Jilani’s Truthfulness",
    "questions": [],
    "template": "When Hazrat Abdul Qadir Jilani was a young boy, he set out on a caravan journey from his hometown to Baghdad to pursue higher religious education. Before his departure, his pious mother sewed forty gold coins securely inside the lining of his coat for his living expenses and made him promise never to utter a lie under any circumstances. As the caravan traversed a lonely desert route, a gang of fierce bandits attacked them, looting money and valuable belongings from every traveler. One of the robbers approached young Abdul Qadir and asked mockingly, 'Do you possess anything of value, boy?' The truthful boy replied calmly, 'Yes, I have forty gold coins sewn inside my coat.' Thinking the boy was joking, the robber brought him before the bandit chief. When the coat was torn open and the hidden gold coins were revealed, the astonished chief asked, 'Why did you reveal your hidden treasure when no one could have discovered it?' The boy answered, 'I promised my mother never to tell a lie, and I cannot break my promise for mere worldly wealth.' Deeply moved by the boy's unwavering honesty, the chief broke into tears, repented for his evil deeds, returned all the looted goods to the travelers, and gave up robbery forever. Truthfulness possesses the power to transform hearts.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 218
  },
  {
    "id": "hatem_tai_generosity",
    "title": "The Magnanimity of Hatem Tai",
    "questions": [],
    "template": "Hatem Tai was a legendary Arabian chieftain celebrated throughout history for his boundless hospitality and selfless generosity. He never turned away a beggar, never closed his doors to travelers, and considered serving fellow human beings his highest virtue. One freezing winter night, a poor traveler arrived at his doorstep seeking food and shelter. Hatem Tai welcomed him warmly, but upon searching his household, discovered there was no food left to prepare a meal. Without hesitation, he sacrificed his own prized Arabian stallion, which was his most cherished possession, to feed his hungry guest. On another occasion, an emperor envious of Hatem's fame sent an assassin to take his life. When the assassin arrived without revealing his identity, Hatem treated him with utmost kindness and hospitality. When the assassin confessed his mission, Hatem Tai calmly offered his own neck without resistance. Overwhelmed by such saintly generosity, the assassin threw away his sword and fell at his feet in reverence. Hatem Tai proved that true nobility lies in self-sacrifice and unconditional kindness toward humanity.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 172
  },
  {
    "id": "solomon_sheba",
    "title": "King Solomon and the Queen of Sheba",
    "questions": [],
    "template": "King Solomon was universally renowned for his extraordinary wisdom, just governance, and deep understanding of nature. Hearing tales of his unmatched intellect, the Queen of Sheba decided to visit his royal court in Jerusalem to test his wisdom with intricate riddles and puzzles. Upon her arrival, she presented two identical garlands of blooming flowers, holding one in each hand. One garland was freshly plucked from the garden, while the other was artificially crafted from delicate wax with such exquisite artistry that the keenest eyes could not discern the difference. The queen asked Solomon to identify the real garland without touching them or leaving his throne. The courtiers were perplexed by the impossible challenge. Calm and composed, King Solomon noticed a swarm of bees buzzing outside the palace and ordered the large windows of the banquet hall to be opened. Within moments, the bees flew into the hall, bypassed the artificial garland entirely, and settled upon the natural flowers to collect nectar. Solomon smiled and correctly identified the real garland. The Queen of Sheba was filled with admiration and bowed before his supreme wisdom.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 183
  },
  {
    "id": "androcles_lion",
    "title": "Androcles and the Lion: Kindness to Animals",
    "questions": [],
    "template": "In ancient Rome, a poor slave named Androcles fled into the wilderness to escape the relentless cruelty and torture of his merciless master. Exhausted and famished, he sought shelter inside a dark cave. Suddenly, a massive lion entered the cave, roaring in agonizing distress rather than attacking. Terrified at first, Androcles noticed that the beast was limping heavily and holding up its swollen paw, which was bleeding profusely. Gathering his courage, the compassionate slave approached the beast gently, examined the paw, and carefully extracted a huge sharp thorn embedded deep in its flesh. Relieved of pain, the lion licked Androcles's hands affectionately like a loyal dog, and the two lived together as companions in the cave for many months. Eventually, Roman soldiers captured Androcles and sentenced him to be devoured by a starving lion in the grand amphitheater before thousands of spectators. When the fierce lion was released into the arena, it bounded toward Androcles, but suddenly stopped, recognized its savior, and lovingly rubbed its head against his feet. The astonished emperor summoned Androcles, listened to his remarkable story of mutual compassion, and granted both Androcles and the lion complete freedom. Kindness shown to any living creature is never forgotten.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 200
  },
  {
    "id": "money_cannot_buy_happiness",
    "title": "Money Cannot Buy Happiness: The Happy Cobbler and the Rich Banker",
    "questions": [],
    "template": "In a busy town, a humble cobbler lived in a modest hut next to the grand mansion of a wealthy banker. The cobbler worked diligently from morning to evening repairing worn shoes, earning just enough to provide daily bread for his family. Yet, his heart was full of joy, and he sang melodious songs with great delight all day long, sleeping soundly every night. In contrast, the neighboring banker possessed vast wealth, gold, and properties, but was constantly plagued by anxiety, stress, and fear of thieves, spending sleepless nights tossing in bed. Envious of the cobbler's carefree happiness, the banker called him into his mansion and presented him with a bag filled with one thousand gold coins. Overwhelmed with fortune, the cobbler took the money home and buried it secretly beneath his floorboards. However, the sudden wealth destroyed his peace of mind. He constantly feared robbers, stopped singing his cheerful songs, became suspicious of his neighbors, and spent sleepless nights guarding his treasure. Realizing that the gold had stolen his true contentment, he rushed back to the banker, returned the bag of gold, and said, 'Please take back your wealth and give me back my songs and peaceful sleep.' True happiness springs from a contented heart, not from material riches.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 210
  },
  {
    "id": "brave_boy_student",
    "title": "A Brave Boy/Student: Saving the Train with a Red Cloth",
    "questions": [],
    "template": "One bright afternoon, a brave schoolboy named Rahim was walking home along the railway tracks after his classes. As he strolled, he noticed to his horror that a significant section of the railway line was fractured and displaced due to recent heavy rains. At that very moment, he heard the distant whistle of an approaching express train carrying hundreds of passengers, speeding rapidly toward the broken track. Realizing that an enormous catastrophe was imminent, Rahim knew he had to act within seconds. Without hesitation, the courageous boy took off his bright red shirt, tied it firmly to a fallen tree branch, and ran down the middle of the tracks toward the speeding train, waving the red cloth vigorously while shouting with all his might. Spotting the desperate red danger signal ahead, the vigilant train driver immediately slammed on the emergency brakes. The train ground to a screeching halt just a few yards away from the shattered track. Overwhelmed with gratitude, the railway authorities and passengers embraced the heroic student with tears of joy. Rahim's bravery and presence of mind saved hundreds of innocent lives from a disastrous tragedy.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 188
  },
  {
    "id": "honesty_of_schoolboy",
    "title": "The Honesty of a Schoolboy: Returning the Lost Wallet",
    "questions": [],
    "template": "One rainy morning, a poor schoolboy named Kamal was walking briskly to school along a busy city avenue. Near a bus stand, his foot brushed against a heavy leather wallet lying soaked in the mud. Kamal picked it up, opened it, and found a large bundle of banknotes, several identification cards, credit cards, and important business documents belonging to a businessman. Despite coming from an impoverished family that struggled with daily necessities, Kamal did not hesitate for a moment; his parents and teachers had taught him that integrity is priceless and taking what belongs to others is a sin. Looking at the contact card inside the wallet, Kamal went to a nearby telephone booth and informed the owner about the lost item. Within an hour, the anxious businessman arrived, overwhelmed with relief upon recovering his valuable documents and money. He offered Kamal a handsome monetary reward, but the modest boy politely declined, saying that doing the right thing was its own reward. Impressed by his exemplary honesty, the businessman visited Kamal's school the following morning and sponsored his entire education. Honesty earns respect, dignity, and lasting honor.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 187
  },
  {
    "id": "devotion_to_education",
    "title": "Devotion to Education: A Poor Girl's Struggle",
    "questions": [],
    "template": "Lipi was a bright and determined schoolgirl living in a remote village, but her family was stricken with severe poverty. Her father was chronically ill, and her mother earned meager wages as a household maid. Despite facing immense hardships, lack of electricity, and scarcity of food, Lipi possessed an unyielding passion for learning. While many girls in her village were forced to drop out of school, Lipi refused to abandon her dream of education. Every afternoon after school, she helped her mother with domestic chores, tutored younger neighborhood children to pay for her school supplies, and studied late at night under the illumination of a roadside street lamp. Recognizing her relentless dedication and academic talent, her teachers supported her with free books and mentorship. Through unwavering perseverance, hard work, and faith in her abilities, Lipi excelled in her board examinations with top honors, secured a prestigious government scholarship for higher studies, and eventually became a respected college professor. Her inspiring journey proved that genuine devotion to education can overcome even the harshest circumstances and illuminate the path to a glorious future.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 181
  },
  {
    "id": "strange_call_at_midnight",
    "title": "A Strange Call at Midnight",
    "questions": [],
    "template": "It was a stormy midnight, and the entire neighborhood was wrapped in deep slumber when Rashed was suddenly awakened by the sharp ringing of his telephone. Surprised and apprehensive, he lifted the receiver and heard a trembling, panicked voice on the other end whispering, 'Please help us, the old warehouse near the railway bridge is on fire and two stray puppies are trapped inside!' Before Rashed could ask for details, the line went dead. Though he wondered if it was a prank, his conscience urged him to verify the situation. Equipping himself with a raincoat and a powerful flashlight, Rashed rushed through the pouring rain to the abandoned warehouse. To his shock, thick smoke was billowing from the wooden shed where a small electrical fire had ignited. Hearing faint whimpering, Rashed bravely broke through the latch, rescued the two frightened puppies, and alerted the nearby fire service before the flames could spread to adjacent homes. The timely intervention prevented a major disaster, and Rashed felt profound satisfaction in answering the mysterious midnight call that saved innocent lives.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 177
  },
  {
    "id": "help_dying_woman",
    "title": "Help a Dying Woman: Friends Saving a Stranger",
    "questions": [],
    "template": "Two compassionate college friends, Karim and Rahim, were cycling home late at night along a deserted highway. As they navigated a sharp turn, they noticed an elderly woman lying motionless on the roadside, bleeding severely from head injuries after being struck by a hit-and-run vehicle. While several vehicles passed by without stopping, Karim and Rahim immediately halted their bicycles and rushed to her side. Finding that she was barely breathing, the quick-thinking friends wrapped their scarves tightly around her wounds to stem the bleeding, flagged down a passing auto-rickshaw, and rushed her to the nearest hospital emergency room. They stayed by her side, donated blood, and contacted her frantic family members, who had been searching for her. Thanks to the timely medical intervention arranged by the two brave youths, the doctors successfully stabilized the woman and saved her life. The grateful family thanked the boys with tears of gratitude, and the local community lauded their courage. Selfless service to humanity in moments of peril is the highest expression of compassion.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 170
  },
  {
    "id": "perseverance_poor_student",
    "title": "Perseverance of a Poor Student",
    "questions": [],
    "template": "Sohan was an extraordinarily talented student from a destitute background who dreamed of becoming an engineer. Tragically, his father passed away when Sohan was in high school, leaving his family in deep financial crisis. Despite the overwhelming adversity and pressure to quit school and work full-time, Sohan refused to let poverty crush his ambition. He adopted a grueling daily routine: waking up at four in the morning to distribute newspapers, attending school during the day, giving private tuitions in the evening, and studying tirelessly late into the night. He studied under kerosene lamps, borrowed textbooks from libraries, and remained steadfast in his pursuit of excellence. His extraordinary perseverance bore fruit when he secured the first rank in the national university entrance examination, winning a full scholarship to study engineering. Today, Sohan is a successful engineer who supports his family and funds scholarships for underprivileged students, proving that sheer determination can conquer any obstacle.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 153
  },
  {
    "id": "impact_natural_disaster",
    "title": "Impact of a Natural Disaster: Leadership During a Flood",
    "questions": [],
    "template": "When torrential monsoon rains triggered a catastrophic flash flood that inundated a low-lying riverside village, chaos and panic broke out as homes were submerged and communication lines severed. In the midst of the crisis, a sixteen-year-old youth leader named Asif demonstrated exemplary courage and leadership. Instead of panicking, Asif quickly mobilized the village youth brigade, constructed makeshift rescue rafts from banana trunks and empty barrels, and launched an organized rescue operation. Working tirelessly through rain and floodwaters, they evacuated stranded elderly villagers and children to the roof of the local cyclone shelter, distributed dry food rations and clean drinking water, and provided first aid to the injured. When the military relief teams arrived two days later, they were astonished to find the entire village safely organized with zero casualties, thanks to Asif's swift and fearless leadership. True heroes emerge in times of crisis to protect and inspire their communities.",
    "category": "Completing Story",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 149
  },
  {
    "id": "sick_leave_application",
    "title": "Application for Sick Leave",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for sick leave\n\nRespected Sir,\n\nI beg most respectfully to state that I am a regular student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO} in your school. I could not attend school for the last three days from 20th to 22nd instant due to sudden viral fever and severe headache. The doctor advised me to take complete bed rest for quick recovery. I have now recovered and feel fit to resume my regular classes.\n\nMay I, therefore, pray and hope that you would kindly grant me leave of absence for those three days and oblige thereby.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "respectfully",
        "banglaMeaning": "সম্মানের সাথে / বিনীতভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "resume",
        "banglaMeaning": "পুনরায় শুরু করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "recovery",
        "banglaMeaning": "সুস্থতা / আরোগ্য",
        "partOfSpeech": "noun"
      },
      {
        "word": "oblige",
        "banglaMeaning": "বাধিত করা / অনুগ্রহ করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 116
  },
  {
    "id": "leave_application_family",
    "title": "Application for Leave to Attend Family Function",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for leave of absence to attend elder sister's wedding ceremony\n\nRespected Sir,\n\nWith due respect and humble submission, I beg to state that the marriage ceremony of my elder sister will take place on next Friday at our village home in Cumilla. Being the only younger brother, I have to assist my parents in managing various family arrangements and attending to guests. Consequently, it will not be possible for me to attend school from 25th to 27th instant.\n\nI, therefore, pray and hope that you would be kind enough to grant me three days' leave of absence in advance.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "submission",
        "banglaMeaning": "বিনীত নিবেদন",
        "partOfSpeech": "noun"
      },
      {
        "word": "consequently",
        "banglaMeaning": "ফলস্বরূপ / অতএব",
        "partOfSpeech": "adv"
      },
      {
        "word": "arrangements",
        "banglaMeaning": "আয়োজন / ব্যবস্থা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 118
  },
  {
    "id": "tc_application",
    "title": "Application for Transfer Certificate (TC)",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for a Transfer Certificate (TC)\n\nRespected Sir,\n\nI have the honour to state that my father is a government employee and he has recently been transferred from Dhaka to Chattogram district. Our whole family will shift to Chattogram by the end of this month. Under these circumstances, it is impossible for me to continue my studies in your esteemed institution. I have cleared all school dues and returned all borrowed library books.\n\nI, therefore, pray and hope that you would be benevolent enough to issue me a Transfer Certificate so that I can get myself admitted into a reputed school in Chattogram.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "esteemed",
        "banglaMeaning": "সম্মানিত / স্বনামধন্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "benevolent",
        "banglaMeaning": "দয়ালু / সদয়",
        "partOfSpeech": "adj"
      },
      {
        "word": "cleared dues",
        "banglaMeaning": "বকেয়া পরিশোধ করেছে",
        "partOfSpeech": "verb"
      },
      {
        "word": "circumstances",
        "banglaMeaning": "পরিস্থিতি / অবস্থা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 121
  },
  {
    "id": "testimonial_application",
    "title": "Application for Testimonial/Character Certificate",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for a Testimonial\n\nRespected Sir,\n\nI beg to state that I successfully passed the SSC Board Examination this year from your reputed institution bearing Roll No. 124508 and Registration No. 1810234567 under Dhaka Board with GPA-5.00. Now, I am seeking admission into a prestigious college for higher secondary education, for which a testimonial regarding my character and academic performance is urgently required.\n\nMay I, therefore, pray and hope that you would be kind enough to issue me a testimonial appreciating my conduct and academic achievements.\n\nYours obediently,\n{NAME}\nEx-Student, Class: {CLASS}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "testimonial",
        "banglaMeaning": "প্রশংসাপত্র",
        "partOfSpeech": "noun"
      },
      {
        "word": "reputed",
        "banglaMeaning": "সুখ্যাত",
        "partOfSpeech": "adj"
      },
      {
        "word": "conduct",
        "banglaMeaning": "আচরণ / চরিত্র",
        "partOfSpeech": "noun"
      },
      {
        "word": "prestigious",
        "banglaMeaning": "মর্যাদাপূর্ণ",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 103
  },
  {
    "id": "library_card_application",
    "title": "Application for Library Card",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for issuing a Library Card\n\nRespected Sir,\n\nI beg to state that I am a regular student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO} in your school. I am very keen on reading books beyond my academic syllabus to enrich my general knowledge and English vocabulary. However, without a formal library card, I cannot borrow reference books, storybooks, or science journals from our school library.\n\nI, therefore, pray and hope that you would be kind enough to grant me permission and instruct the librarian to issue me a library card.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "keen",
        "banglaMeaning": "আগ্রহী / উৎসুক",
        "partOfSpeech": "adj"
      },
      {
        "word": "reference",
        "banglaMeaning": "তথ্যসূত্র / সহায়ক",
        "partOfSpeech": "noun"
      },
      {
        "word": "enrich",
        "banglaMeaning": "সমৃদ্ধ করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 110
  },
  {
    "id": "morning_school_application",
    "title": "Application for Morning/Day School Shift",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for holding morning school during summer\n\nRespected Sir,\n\nWe, the students of your school, beg to state that the intense summer heat has made normal daytime classes unbearable. The scorching sun and humid weather cause extreme fatigue, dehydration, and dizziness among students during noon hours. In the afternoon, it becomes almost impossible to concentrate on our studies in crowded classrooms.\n\nWe, therefore, earnestly pray that you would consider holding classes in the morning from 7:00 AM to 11:30 AM until the excessive heat subsides.\n\nYours obediently,\nThe Students of {SCHOOL_NAME}\nRepresented by {NAME}, Class: {CLASS}, Roll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "scorching",
        "banglaMeaning": "প্রখর / তীব্র উত্তপ্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "unbearable",
        "banglaMeaning": "অসহনীয়",
        "partOfSpeech": "adj"
      },
      {
        "word": "fatigue",
        "banglaMeaning": "ক্লান্তি / অবসাদ",
        "partOfSpeech": "noun"
      },
      {
        "word": "subsides",
        "banglaMeaning": "কমে যাওয়া / প্রশমিত হওয়া",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 107
  },
  {
    "id": "leave_application_exam",
    "title": "Application for Leave During Exam Period",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for leave during exam period and special re-test\n\nRespected Sir,\n\nI beg to state that I am a student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO}. I am suffering from acute jaundice and high fever, and the physician has advised complete bed rest and isolation for the next five days. Unfortunately, our First Term Examination is ongoing, and I will be unable to sit for the English and Mathematics papers on 24th and 25th instant. Medical certificates are attached herewith for your kind perusal.\n\nI, therefore, pray and hope that you would kindly grant me leave of absence for those exam days and permit me to sit for a special re-test upon my complete recovery.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "acute",
        "banglaMeaning": "তীব্র / মারাত্মক",
        "partOfSpeech": "adj"
      },
      {
        "word": "physician",
        "banglaMeaning": "চিকিৎসক",
        "partOfSpeech": "noun"
      },
      {
        "word": "perusal",
        "banglaMeaning": "পর্যবেক্ষণ / বিবেচনা",
        "partOfSpeech": "noun"
      },
      {
        "word": "herewith",
        "banglaMeaning": "এর সাথে সংযুক্ত",
        "partOfSpeech": "adv"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 135
  },
  {
    "id": "financial_help_application",
    "title": "Application for Financial Help/Fee Waiver",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for financial assistance from the Poor Fund\n\nRespected Sir,\n\nI beg to state that I am a meritorious student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO}. My father is a low-income shopkeeper and the sole breadwinner of our seven-member family. Due to recent illness and rising living costs, it has become extremely difficult for him to bear my educational expenses, examination fees, and textbook costs. I secured GPA-5 in the previous term exams and have always maintained good conduct.\n\nI, therefore, pray and hope that you would be kind enough to grant me some financial help from the School Poor Fund to enable me to continue my studies.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "meritorious",
        "banglaMeaning": "মেধাবী",
        "partOfSpeech": "adj"
      },
      {
        "word": "breadwinner",
        "banglaMeaning": "পরিবারের উপার্জনক্ষম ব্যক্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "assistance",
        "banglaMeaning": "সাহায্য / অনুদান",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 128
  },
  {
    "id": "seat_change_application",
    "title": "Application for Changing Seat in Classroom",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Class Teacher\nClass: {CLASS}, Section: {SECTION}\n{SCHOOL_NAME}\n\nSubject: Application for changing seat in the classroom\n\nRespected Teacher,\n\nI beg to state that I am a student of your class bearing Roll No. {ROLL_NO}. Currently, my seat is on the last bench of the classroom. Being short-sighted (myopic), I face great difficulty in reading what is written on the blackboard and hearing the teacher's voice clearly from the back row. This is hampering my daily studies.\n\nI, therefore, earnestly request you to kindly re-allocate my seat to one of the front benches so that I can follow the classroom lessons attentively.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "short-sighted",
        "banglaMeaning": "ক্ষীণদৃষ্টিসম্পন্ন",
        "partOfSpeech": "adj"
      },
      {
        "word": "hampering",
        "banglaMeaning": "ব্যাঘাত ঘটাচ্ছে",
        "partOfSpeech": "verb"
      },
      {
        "word": "re-allocate",
        "banglaMeaning": "পুনর্বণ্টন করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 114
  },
  {
    "id": "study_tour_permission",
    "title": "Application for Study Tour Permission",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for permission and financial support to go on a Study Tour\n\nRespected Sir,\n\nWe, the students of Class {CLASS} of your school, beg to state that we are keen on organizing an educational study tour to the National Botanical Garden and National Museum in Dhaka during the upcoming weekend. A study tour is an integral part of modern education as it provides practical knowledge beyond textbooks, refreshes tired minds, and enhances our historical awareness. Two of our senior teachers have kindly agreed to guide us.\n\nWe, therefore, pray and hope that you would kindly grant us permission for the study tour and sanction a suitable grant from the school fund.\n\nYours obediently,\nThe Students of Class {CLASS}\nRepresented by {NAME}, Roll No: {ROLL_NO}, Section: {SECTION}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "integral",
        "banglaMeaning": "অপরিহার্য / অবিচ্ছেদ্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "sanction",
        "banglaMeaning": "মঞ্জুর করা / অনুমোদন দেওয়া",
        "partOfSpeech": "verb"
      },
      {
        "word": "enhances",
        "banglaMeaning": "বৃদ্ধি করে",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 134
  },
  {
    "id": "re_exam_application",
    "title": "Application for Re-examination/Re-test",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for permission to sit for a Re-examination\n\nRespected Sir,\n\nI beg to state that I am a regular student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO}. I could not appear in the Mathematics examination of the Second Term due to a severe road accident that caused injuries to my right hand. A medical fitness certificate and hospital discharge documents are enclosed herewith for your kind consideration. I have always been a sincere student and wish to clear my term assessment.\n\nI, therefore, pray and hope that you would kindly permit me to sit for a re-examination in Mathematics at your earliest convenience.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "enclosed",
        "banglaMeaning": "সংযুক্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "assessment",
        "banglaMeaning": "মূল্যায়ন",
        "partOfSpeech": "noun"
      },
      {
        "word": "convenience",
        "banglaMeaning": "সুবিধা অনুযায়ী সময়",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 122
  },
  {
    "id": "full_free_studentship",
    "title": "Application for Full Free Studentship",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for Full Free Studentship\n\nRespected Sir,\n\nI beg to state that I am a student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO}. My father is a small farmer whose meager income barely supports our family of six members. After paying for our basic food and family necessities, it is utterly impossible for him to bear my monthly school tuition fees. However, I have a deep passion for education and stood 1st in the last final examination.\n\nI, therefore, earnestly pray that you would be kind enough to grant me full free studentship so that I can continue my studies without interruption.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "meager",
        "banglaMeaning": "স্বল্প / অপ্রতুল",
        "partOfSpeech": "adj"
      },
      {
        "word": "tuition fees",
        "banglaMeaning": "বেতন / টিউশন ফি",
        "partOfSpeech": "noun"
      },
      {
        "word": "interruption",
        "banglaMeaning": "বাধা / বিরতি",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 121
  },
  {
    "id": "remission_delay_fine",
    "title": "Application for Remission of Delay Fine",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for remission of delay fine\n\nRespected Sir,\n\nI beg to state that I am a student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO}. I could not pay my monthly school tuition fee on the scheduled date because my father was hospitalized in Dhaka due to sudden illness. All family funds were spent on his medical treatment. Now that he has recovered, I am ready to pay all outstanding tuition fees.\n\nI, therefore, pray and hope that you would kindly remit the delay fine and allow me to deposit the monthly fees.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "remission",
        "banglaMeaning": "মওকুফ",
        "partOfSpeech": "noun"
      },
      {
        "word": "outstanding",
        "banglaMeaning": "বকেয়া",
        "partOfSpeech": "adj"
      },
      {
        "word": "remit",
        "banglaMeaning": "মওকুফ করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 111
  },
  {
    "id": "hostel_seat_application",
    "title": "Application for Seat in School Hostel",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for a seat in the school hostel\n\nRespected Sir,\n\nI beg to state that I am a student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO}. My family has recently shifted to our village home located more than 25 kilometers away from our school. Due to bad roads and scarce public transport, commuting daily is extremely exhausting and causes me to miss morning classes. Staying in the school hostel would provide me a peaceful study environment.\n\nI, therefore, pray and hope that you would kindly allot me a seat in the school hostel and oblige thereby.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "commuting",
        "banglaMeaning": "যাতায়াত করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "exhausting",
        "banglaMeaning": "ক্লান্তিকর",
        "partOfSpeech": "adj"
      },
      {
        "word": "allot",
        "banglaMeaning": "বরাদ্দ দেওয়া",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 115
  },
  {
    "id": "flood_relief_application",
    "title": "Application for Relief for Flood-Affected People",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for permission to organize a Flood Relief Camp\n\nRespected Sir,\n\nWe, the students of your school, beg to state that catastrophic floods have recently devastated large areas of Sylhet and Sunamganj. Thousands of families have lost their houses, crops, and domestic cattle. The victims are living in temporary shelters without clean drinking water, dry food, clothes, or emergency medicines. As conscious citizens, we the students wish to raise donations and relief goods to help the flood victims.\n\nWe, therefore, pray and hope that you would kindly permit us to open a relief collection booth in the school campus and guide us in dispatching relief materials to the affected area.\n\nYours obediently,\nThe Students of {SCHOOL_NAME}\nRepresented by {NAME}, Class: {CLASS}, Roll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "devastated",
        "banglaMeaning": "বিধ্বস্ত করেছে",
        "partOfSpeech": "verb"
      },
      {
        "word": "conscious",
        "banglaMeaning": "সচেতন",
        "partOfSpeech": "adj"
      },
      {
        "word": "dispatching",
        "banglaMeaning": "প্রেরণ করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 132
  },
  {
    "id": "multimedia_classroom_application",
    "title": "Application for Multimedia Classroom",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for setting up a Multimedia Classroom facility\n\nRespected Sir,\n\nWe, the students of Class {CLASS} of your esteemed institution, beg to state that in this modern era of digital technology, visual and interactive learning is indispensable. Setting up a multimedia classroom equipped with projectors, computers, and sound systems will enable our teachers to demonstrate complex science concepts, historical documentaries, and English pronunciation lessons vividly.\n\nWe, therefore, pray and hope that you would take necessary initiatives to set up a modern multimedia classroom in our school at your earliest convenience.\n\nYours obediently,\nThe Students of Class {CLASS}\nRepresented by {NAME}, Roll No: {ROLL_NO}, Section: {SECTION}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "interactive",
        "banglaMeaning": "মিথস্ক্রিয়াভিত্তিক / সক্রিয় অংশগ্রহণমূলক",
        "partOfSpeech": "adj"
      },
      {
        "word": "vividly",
        "banglaMeaning": "প্রাণবন্তভাবে / স্পষ্টভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "equipped",
        "banglaMeaning": "সজ্জিত / সুসজ্জিত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 113
  },
  {
    "id": "half_holiday_permission",
    "title": "Application for Permission for Half-Holiday",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for a Half-Holiday\n\nRespected Sir,\n\nWe, the students of your school, beg to state that our school football team has brilliantly won the Inter-School Football Tournament Championship final today by defeating Dhaka Collegiate School. This glorious victory has brought great pride and prestige to our institution, and all students are eager to celebrate this memorable occasion.\n\nWe, therefore, pray and hope that you would kindly grant us a half-holiday after the fourth period to celebrate this glorious victory.\n\nYours obediently,\nThe Students of {SCHOOL_NAME}\nRepresented by {NAME}, Class: {CLASS}, Roll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "tournament",
        "banglaMeaning": "প্রতিযোগিতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "glorious",
        "banglaMeaning": "গৌরবময় / মহিমান্বিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "prestige",
        "banglaMeaning": "মর্যাদা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 101
  },
  {
    "id": "drama_cultural_function",
    "title": "Application for Staging Drama/Cultural Function",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for permission to stage a Drama and Cultural Program\n\nRespected Sir,\n\nWe, the students of your school, beg to state that on the upcoming occasion of our School Annual Day, we wish to stage a famous drama by Rabindranath Tagore along with patriotic songs and dances. Cultural functions develop students' creative potential, public speaking skills, and aesthetic appreciation. Our teachers have kindly consented to supervise our rehearsals.\n\nWe, therefore, pray and hope that you would be kind enough to grant us permission to stage the drama and allocate the school auditorium and sound system for the event.\n\nYours obediently,\nThe Cultural Committee of {SCHOOL_NAME}\nRepresented by {NAME}, Class: {CLASS}, Roll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "aesthetic",
        "banglaMeaning": "নান্দনিক",
        "partOfSpeech": "adj"
      },
      {
        "word": "consented",
        "banglaMeaning": "সম্মতি প্রদান করেছেন",
        "partOfSpeech": "verb"
      },
      {
        "word": "auditorium",
        "banglaMeaning": "মিলনায়তন",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 121
  },
  {
    "id": "leave_in_advance",
    "title": "Application for Leave in Advance",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for leave in advance\n\nRespected Sir,\n\nI beg to state that I am a regular student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO} in your school. My family is traveling to Rajshahi on next Monday to attend my cousin's wedding ceremony, and I have to accompany my parents. For this reason, I will not be able to attend school from 26th to 28th instant. I assure you that I will collect class notes from my classmates upon my return.\n\nI, therefore, pray and hope that you would kindly grant me three days' leave in advance and oblige thereby.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "accompany",
        "banglaMeaning": "সঙ্গ দেওয়া / সাথে যাওয়া",
        "partOfSpeech": "verb"
      },
      {
        "word": "advance",
        "banglaMeaning": "অগ্রিম",
        "partOfSpeech": "noun"
      },
      {
        "word": "assure",
        "banglaMeaning": "আশ্বস্ত করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 118
  },
  {
    "id": "leave_of_absence",
    "title": "Application for Leave of Absence",
    "questions": [],
    "template": "Date: {DATE}\n\nTo\nThe Headmaster\n{SCHOOL_NAME}\n{ADDRESS}\n\nSubject: Application for leave of absence\n\nRespected Sir,\n\nI beg most respectfully to state that I am a student of Class {CLASS}, Section {SECTION}, Roll No. {ROLL_NO} in your school. I could not attend school for the last two days, from 21st to 22nd instant, due to sudden severe fever and stomach ache. As the illness occurred abruptly, I could not submit an application in advance. Now I am fully cured and eager to resume my studies.\n\nMay I, therefore, pray and hope that you would be benevolent enough to excuse my absence and grant me leave for those two days.\n\nYours obediently,\n{NAME}\nClass: {CLASS}\nSection: {SECTION}\nRoll No: {ROLL_NO}",
    "category": "Application",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "abruptly",
        "banglaMeaning": "হঠাৎ করে",
        "partOfSpeech": "adv"
      },
      {
        "word": "cured",
        "banglaMeaning": "আরোগ্য লাভ করেছে",
        "partOfSpeech": "adj"
      },
      {
        "word": "benevolent",
        "banglaMeaning": "সদয় / দয়ালু",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 118
  },
  {
    "id": "letter_to_friend_picnic",
    "title": "Letter to Friend Describing a Picnic",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope you are well. I am fine too. I am writing to tell you about a wonderful picnic we had recently. Last week our school organized an annual picnic. We went to Sonargaon Panam Nagar. It was a beautiful historical place. We started our journey early in the morning. All my classmates and teachers were with us. We traveled by bus. The journey was very enjoyable. Everyone was singing songs and having fun. When we reached the picnic spot we were very excited. The place was full of natural beauty and ancient architecture. We walked around the historic buildings and took many photographs. We played many games like football and cricket. Some students went boating in the lake. Others walked around enjoying nature. At lunch time we all sat together. We had delicious food like biriyani, chicken, and sweets. After lunch we rested for some time. In the afternoon we had a cultural program. Students sang songs and recited poems. Everyone enjoyed a lot. It was one of the best days of my life. I wish you were there with us. Next time you must join us. Please write back soon.\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "historical",
        "banglaMeaning": "ঐতিহাসিক",
        "partOfSpeech": "adj"
      },
      {
        "word": "architecture",
        "banglaMeaning": "স্থাপত্যশৈলী / নির্মাণকলা",
        "partOfSpeech": "noun"
      },
      {
        "word": "recited",
        "banglaMeaning": "আবৃত্তি করেছিল",
        "partOfSpeech": "verb"
      },
      {
        "word": "memorable",
        "banglaMeaning": "স্মরণীয়",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 200
  },
  {
    "id": "letter_to_friend_exam",
    "title": "Letter to Friend About Exam Preparation",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope you are keeping well. I am also fine by the grace of Almighty Allah. I am writing to tell you about my exam preparation. Our annual examination is coming very soon. I am working very hard to prepare for it. I have already completed revising all the textbook chapters and made neat notes. I wake up early every morning and study for several hours according to my daily timetable. I am revising all my lessons carefully. Mathematics and English need more practice, so I am giving them extra time. I am solving past question papers every day and taking mock tests. My teachers are helping me a lot by explaining difficult concepts. I am also taking care of my health so that I stay energetic throughout the exam days. I feel confident that I will achieve a great result. How is your preparation going? Please write to me about your studies.\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "preparation",
        "banglaMeaning": "প্রস্তুতি",
        "partOfSpeech": "noun"
      },
      {
        "word": "revising",
        "banglaMeaning": "পুনরাবৃত্তি / রিভিশন দেওয়া",
        "partOfSpeech": "verb"
      },
      {
        "word": "concepts",
        "banglaMeaning": "ধারণাসমূহ",
        "partOfSpeech": "noun"
      },
      {
        "word": "confident",
        "banglaMeaning": "আত্মবিশ্বাসী",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 161
  },
  {
    "id": "letter_to_friend_birthday",
    "title": "Letter to Friend Inviting to Birthday Party",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope you are doing well. I am fine here. I am writing this letter to warmly invite you to my birthday party. My birthday falls on next Sunday. I am organizing a small celebration party on that day. The party will be held at our residence in the evening starting at 6:00 PM. I am inviting all our close friends and classmates. You are one of my best friends, so your presence is very important to me. We will have lots of fun together with music, games, and delicious food like biriyani, chicken roast, and sweets. There will be a birthday cake cutting ceremony as well. It will be a memorable evening for all of us. Please try your best to join us on time. I will be waiting eagerly for your arrival.\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "warmly",
        "banglaMeaning": "আন্তরিকভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "residence",
        "banglaMeaning": "বাসস্থান / বাড়ি",
        "partOfSpeech": "noun"
      },
      {
        "word": "ceremony",
        "banglaMeaning": "অনুষ্ঠান",
        "partOfSpeech": "noun"
      },
      {
        "word": "eagerly",
        "banglaMeaning": "আগ্রহভরে",
        "partOfSpeech": "adv"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 142
  },
  {
    "id": "letter_to_friend_hobby",
    "title": "Letter to Friend About Your Hobby",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope this letter finds you in good health. I am fine too. Today I want to tell you about my favourite hobby. My hobby is gardening. I love spending time with plants and flowers in my free time. Working with green soil and colorful blossoms gives me immense peace and relaxation after long hours of study. I have planted roses, jasmines, and marigolds in front of our house, along with fresh tomatoes and chillies. Gardening keeps me active, improves my creativity, and teaches me the value of patience. My parents and neighbors appreciate the beauty of our garden. What is your hobby? Do you have any special interest? Please write to me about it soon.\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "blossoms",
        "banglaMeaning": "ফুটে থাকা ফুল",
        "partOfSpeech": "noun"
      },
      {
        "word": "immense",
        "banglaMeaning": "অসীম / প্রচুর",
        "partOfSpeech": "adj"
      },
      {
        "word": "relaxation",
        "banglaMeaning": "বিশ্রাম / মানসিক প্রশান্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "appreciate",
        "banglaMeaning": "প্রশংসা করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 124
  },
  {
    "id": "letter_to_friend_visit",
    "title": "Letter to Friend About Your Recent Visit",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope you are well. I am fine too. I am writing to share my wonderful experience of a recent visit. Last week I visited Cox's Bazar with my family. It was an amazing and memorable trip. When we reached the beach, I was completely enchanted by the endless blue sea and roaring waves. We spent the day walking along the golden sandy shore, watching the breathtaking sunset, and enjoying fresh seafood. We also visited Himchari waterfall and Inani beach with coral rocks. The fresh sea breeze and scenic beauty gave us immense joy. This trip will always remain one of my sweetest memories. I hope we can plan a trip together in the near future. Write back soon!\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "enchanted",
        "banglaMeaning": "মুগ্ধ / আকৃষ্ট",
        "partOfSpeech": "adj"
      },
      {
        "word": "breathtaking",
        "banglaMeaning": "অসাধারণ সুন্দর / চোখ জুড়ানো",
        "partOfSpeech": "adj"
      },
      {
        "word": "waterfall",
        "banglaMeaning": "ঝরনা / জলপ্রপাত",
        "partOfSpeech": "noun"
      },
      {
        "word": "scenic",
        "banglaMeaning": "মনোরম প্রাকৃতিক দৃশ্য",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 127
  },
  {
    "id": "letter_to_father_studies",
    "title": "Letter to Father About Your Studies",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nMy dear Father,\n\nI hope you are keeping well by the grace of Almighty Allah. I am fine here. Mother and everyone at home must be doing well. I am writing this letter to update you about my academic progress. My studies are going on smoothly and I am following my study timetable regularly. I am doing exceptionally well in Mathematics and General Science, which are my favorite subjects. I am also putting in extra effort in English grammar and Bengali literature. I complete all homework on time and attend all classes attentively. My teachers are pleased with my discipline and performance. Please do not worry about my studies or health. I eat healthy meals and take adequate rest. Please convey my deepest love to mother and little sister.\n\nYour loving son,\n{NAME}",
    "category": "Letter",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "academic",
        "banglaMeaning": "প্রাতিষ্ঠানিক / লেখাপড়া সংক্রান্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "progress",
        "banglaMeaning": "উন্নতি / অগ্রগতি",
        "partOfSpeech": "noun"
      },
      {
        "word": "exceptionally",
        "banglaMeaning": "ব্যতিক্রমীভাবে / চমৎকারভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "adequate",
        "banglaMeaning": "পর্যাপ্ত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 135
  },
  {
    "id": "letter_to_brother_advice",
    "title": "Letter to Younger Brother Giving Advice",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nMy dear Brother,\n\nI hope you are well. I am fine here. How are mother and father? Give them my love and respect. I am writing this letter to give you some affectionate advice regarding your studies and future. Education and good character are the true foundation of success in life. As your elder brother, I want to see you excel in your studies and make our parents proud. Make a disciplined daily timetable and follow it strictly. Avoid wasting valuable hours on social media or mobile games. Choose good and sincere friends who motivate you to study hard. Always show respect to your teachers and elders. Sincerity, honesty, and regular hard work always bring great success. If you need any guidance in your lessons, feel free to write to me anytime. Take care of your health.\n\nYour loving brother,\n{NAME}",
    "category": "Letter",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "affectionate",
        "banglaMeaning": "স্নেহপূর্ণ",
        "partOfSpeech": "adj"
      },
      {
        "word": "excel",
        "banglaMeaning": "উন্নত করা / শ্রেষ্ঠ হওয়া",
        "partOfSpeech": "verb"
      },
      {
        "word": "foundation",
        "banglaMeaning": "ভিত্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "guidance",
        "banglaMeaning": "দিকনির্দেশনা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 143
  },
  {
    "id": "letter_to_friend_congratulations",
    "title": "Letter to Friend Congratulating on Success",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope you are in the best of spirits. I am fine too. I was thrilled to hear the wonderful news that you secured GPA-5 in the recent SSC Board Examination! Please accept my heartiest congratulations on your brilliant achievement. Your perseverance, dedication, and sleepless nights of hard work have paid off splendidly. You have made your parents, teachers, and all of us immensely proud. You have proved that consistent effort always brings glorious success. I am confident that you will continue to excel in your college studies. Keep shining and aiming high! Let us meet soon to celebrate your grand success.\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "thrilled",
        "banglaMeaning": "রোমাঞ্চিত / অত্যন্ত আনন্দিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "perseverance",
        "banglaMeaning": "অধ্যবসায় / দৃঢ় সংকল্প",
        "partOfSpeech": "noun"
      },
      {
        "word": "splendidly",
        "banglaMeaning": "চমৎকারভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "consistent",
        "banglaMeaning": "ধারাবাহিক",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 110
  },
  {
    "id": "letter_to_friend_book",
    "title": "Letter to Friend About a Book You Read",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope you are doing well. I am fine here. Today I want to tell you about an inspiring book I recently finished reading. The book is titled 'Wings of Fire' by Dr. A.P.J. Abdul Kalam. It is a wonderful autobiography that shows how a simple boy from a humble background became a great scientist and nation's leader. The book is written in simple, moving language and teaches us the power of determination, courage, and perseverance. It taught me that failures are merely stepping stones toward success. Reading good books broadens our knowledge and enriches our character. I strongly recommend you to read this book during your vacation. Let me know your thoughts once you read it.\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "autobiography",
        "banglaMeaning": "আত্মজীবনী",
        "partOfSpeech": "noun"
      },
      {
        "word": "humble",
        "banglaMeaning": "বিনম্র / সাধারণ",
        "partOfSpeech": "adj"
      },
      {
        "word": "determination",
        "banglaMeaning": "দৃঢ় সংকল্প",
        "partOfSpeech": "noun"
      },
      {
        "word": "broadens",
        "banglaMeaning": "প্রসারিত করে",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 125
  },
  {
    "id": "letter_to_friend_school",
    "title": "Letter to Friend Describing Your School",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope you are in good health. I am fine too. You asked me to describe my school in your last letter, so I am gladly sharing it with you. The name of my school is Model High School. It is one of the most reputable schools in our area. Our school has a large multi-storey building with clean, well-ventilated classrooms. There is a huge green playground where we play football and cricket during the tiffin break. We have a rich library with thousands of books and a modern computer lab. Our teachers are highly qualified, kind, and always ready to help us. The school environment is peaceful, green, and disciplined. I am proud to be a student here. I wish you could visit our school someday.\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "reputable",
        "banglaMeaning": "খ্যাতিমান / নামকরা",
        "partOfSpeech": "adj"
      },
      {
        "word": "multi-storey",
        "banglaMeaning": "বহুতল বিশিষ্ট",
        "partOfSpeech": "adj"
      },
      {
        "word": "ventilated",
        "banglaMeaning": "বাতাস চলাচলের সুবিধাযুক্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "disciplined",
        "banglaMeaning": "নিয়মানুবর্তী",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 135
  },
  {
    "id": "letter_to_friend_daily_routine",
    "title": "Letter to Friend About Your Daily Routine",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope you are well. I am also fine. You asked me to describe my daily routine, so I am writing to give you a quick glimpse into my day. I wake up early at 5:30 AM, say my morning prayer, and go for a refreshing walk. After returning, I study for two hours when my mind is sharp. Then I have my breakfast and get ready for school. At school, I attend all classes attentively and take notes. After returning home in the afternoon, I rest, take snacks, and play outdoor sports like cricket with friends. In the evening, I complete all my homework and study till 10:00 PM. After dinner with family, I go to sleep at 10:30 PM. This disciplined routine keeps me healthy and stress-free. Please write to me about your daily routine as well.\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "glimpse",
        "banglaMeaning": "এক ঝলক ধারণা",
        "partOfSpeech": "noun"
      },
      {
        "word": "attentively",
        "banglaMeaning": "মনোযোগ সহকারে",
        "partOfSpeech": "adv"
      },
      {
        "word": "disciplined",
        "banglaMeaning": "সুশৃঙ্খল",
        "partOfSpeech": "adj"
      },
      {
        "word": "stress-free",
        "banglaMeaning": "চিন্তামুক্ত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 147
  },
  {
    "id": "letter_to_friend_festival",
    "title": "Letter to Friend About a Festival",
    "questions": [],
    "template": "{ADDRESS}\n{DATE}\n\nDear Tanvir,\n\nI hope you are enjoying good health. I am fine too. I am writing to tell you about the festival we celebrated recently. We celebrated Eid-ul-Fitr with immense joy and festivity. The day started early with the morning Eid prayer at the local Eidgah. Everyone wore new traditional clothes and embraced each other warmly. My mother prepared delicious traditional dishes like Semai, Biriyani, and sweets. We visited our relatives, neighbors, and friends throughout the day. We received Eidi gift money from elders, which brought great happiness to all children. In the evening we attended a local fair. The festival strengthened our bonds of love and compassion. How did you celebrate your festival? Please write back soon.\n\nYour loving friend,\n{NAME}",
    "category": "Letter",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "festivity",
        "banglaMeaning": "উৎসবমুখরতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "embraced",
        "banglaMeaning": "কোলাকুলি করেছিল",
        "partOfSpeech": "verb"
      },
      {
        "word": "compassion",
        "banglaMeaning": "সহমর্মিতা / দয়া",
        "partOfSpeech": "noun"
      },
      {
        "word": "strengthened",
        "banglaMeaning": "সুদৃঢ় করেছিল",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 124
  },
  {
    "id": "easy_my_country",
    "title": "My Country (Bangladesh)",
    "template": "My Country (Bangladesh)\n\nBangladesh is my country. I love my country very much. It is a beautiful country in South Asia. I am proud to be a Bangladeshi. Bangladesh is a small country but it has a big population. About 170 million people live here. The capital city is Dhaka. Dhaka is a very busy and modern city. It is the heart of our country. Our country has a rich history and culture that makes us special.\n\nBangladesh is called the land of rivers. We have many rivers like Padma, Meghna, Jamuna, and Brahmaputra. These rivers are the lifeblood of our country. They provide water for farming and fishing. The rivers make our land fertile. Bangladesh is mainly a flat land. It has green fields everywhere. The land is very fertile and good for agriculture. Farmers grow rice, jute, wheat, and vegetables. Rice is our main food. We eat rice every day. We also grow tea in Sylhet region. The tea gardens are very beautiful. The green paddy fields look wonderful. Our farmers work hard in the fields every day.\n\nBangladesh has six seasons. They are summer, rainy season, autumn, late autumn, winter, and spring. Each season has its own beauty and charm. The rainy season brings heavy rain. Rivers become full of water. Everything looks green and fresh. In winter the weather is cool and pleasant. People enjoy winter mornings. They eat special foods like pitha and payesh. Summer is hot but mangoes and jackfruits grow in this season. Spring brings flowers everywhere. The weather becomes very nice in spring.\n\nOur national language is Bangla. We fought for this language in 1952. Many brave people gave their lives for our mother tongue. We celebrate 21st February as Language Martyrs Day. This day is now recognized by UNESCO as International Mother Language Day. The whole world celebrates this day. We feel proud that our language movement inspired the world. Our national flag is green with a red circle in the middle. The green color means the green land of Bangladesh. The red circle means the rising sun and the blood of martyrs. Our national anthem was written by Rabindranath Tagore. Our national flower is the white water lily. The Royal Bengal Tiger is our national animal.\n\nWe became independent in 1971. We fought a great liberation war for nine months. About three million people sacrificed their lives. We are proud of our freedom fighters. Bangabandhu Sheikh Mujibur Rahman was the father of our nation. He led us to independence with his brave leadership. He gave the famous speech on 7th March 1971. This speech inspired the whole nation to fight for freedom. We celebrate 26th March as Independence Day and 16th December as Victory Day. On these days we remember our martyrs and freedom fighters with respect.\n\nOur people are friendly and helpful. They are simple and hardworking. We have a rich culture and traditions. We celebrate many festivals like Pohela Boishakh, Eid, Durga Puja, and others. Pohela Boishakh is the Bengali New Year. People wear traditional clothes and enjoy cultural programs. We love music, dance, and poetry. Rabindranath Tagore and Kazi Nazrul Islam are our great poets. Their songs and poems are loved by everyone. We also have many folk songs and traditional music.\n\nBangladesh has many beautiful places. Cox's Bazar is the longest sea beach in the world. It is in Bangladesh. Thousands of tourists visit there every year. The beach is 120 kilometers long. The view of the sea is amazing. The Sundarbans is the largest mangrove forest in the world. The Royal Bengal Tiger lives there. It is a UNESCO World Heritage Site. We also have Sajek Valley, Saint Martin Island, and Srimangal tea gardens. Ratargul Swamp Forest is another beautiful place. Bangladesh is also famous for its natural beauty and greenery. The countryside looks like green carpets.\n\nOur villages are very beautiful with green fields and ponds. Village people are simple and kind. They help each other. Our cities are growing fast. New buildings and roads are being built. Bangladesh is developing in many sectors. Our garment industry is very famous worldwide. We export clothes to many countries. This industry employs millions of people especially women.\n\nOur country faces some problems like poverty, floods, and overpopulation. But we are working hard to solve them. Our economy is growing every year. We are making progress in education and technology. More children are going to school now. Digital Bangladesh is making life easier. We are also improving healthcare facilities. I feel proud to be a Bangladeshi. I pray for the peace and progress of my country. I love Bangladesh very much. I will work hard to make my country better and stronger.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 785
  },
  {
    "id": "easy_rainy_day",
    "title": "A Rainy Day",
    "template": "A Rainy Day\n\nA rainy day is a day when it rains all day long. Last week I experienced such a rainy day. I remember it very well. It was a memorable day for me. It started early in the morning and continued until evening.\n\nThe day started with dark clouds in the sky. The sky was covered with thick dark clouds from the early morning. The weather became gloomy and dull. The sun was completely hidden behind the clouds. It started raining at around 8 o'clock. The rain was heavy and continuous. It did not stop for hours. Big raindrops fell from the sky. The wind was also blowing hard. Trees were swaying in the strong wind. Their branches moved back and forth. Sometimes there was thunder and lightning. The thunder made loud frightening sounds. The lightning was very bright and scary. It lit up the dark sky for a moment. Some people got scared by the loud sounds.\n\nThe roads became muddy and slippery very quickly. Water was everywhere on the streets. Small ponds and ditches filled with rainwater. The streets looked like small rivers. Water was flowing like streams. Low areas were flooded with water. People could not go out easily. Those who went out got completely wet. They used umbrellas and raincoats. But still the rain was too heavy. The umbrellas could not protect them fully. Some people's umbrellas turned inside out because of strong wind. Rickshaws and cars moved slowly through the water.\n\nChildren were very happy to see the rain. They were excited and joyful. They played in the rain without fear. They made paper boats with colorful papers. They floated them in the water on the streets. They ran after the boats laughing and shouting. It was great fun for them. They jumped in puddles making big splashes. Their mothers called them inside but they did not listen. But older people faced many problems. They could not go to work. Students could not go to school. All schools were closed due to heavy rain. Shops remained closed. The markets were empty. The whole day seemed dull and boring for adults. Office workers stayed home.\n\nI stayed at home the whole day. I could not go to school. I looked out of the window and enjoyed watching the rain. The scene was beautiful and peaceful. The trees were dancing in the wind. The leaves were washed clean by the rain. Everything looked fresh and green. The plants and trees looked happy. They needed water badly. I read storybooks sitting by the window. I also played indoor games with my younger brother. We played ludo and chess. We also built things with blocks. My mother made hot snacks for us. She made pakoras and samosas. The smell filled the house. We had hot tea with the snacks. We enjoyed it very much. The food tasted more delicious on that rainy day. My father also stayed home from work. The whole family was together which was nice.\n\nThe sound of rain was soothing and relaxing. It felt peaceful and calm. The pitter-patter sound of raindrops was like music. It made me sleepy and comfortable. I felt cozy inside the warm house. The rainwater made a nice sound on the tin roof. I felt safe and happy inside. The cold weather made me want to sleep. In the evening the rain finally stopped. The sun came out for a short time before sunset. A beautiful rainbow appeared in the sky. It had seven beautiful colors. Red, orange, yellow, green, blue, indigo, and violet. It was a wonderful sight. Everyone came out to see it. The air became fresh and cool. Birds started chirping again after the rain. They flew from tree to tree. They were happy that the rain had stopped. Frogs began croaking loudly. The evening became peaceful and pleasant.\n\nA rainy day has its own charm and beauty. It brings relief from hot summer weather. It cools down the temperature. It is very good for nature and farmers. Rain provides water to crops and plants. Farmers need rain for their fields. Without rain crops will die. Rain fills ponds and rivers. It cleans the air and removes dust. Plants and trees grow well after rain. Though a rainy day creates some problems it is necessary for life. We cannot live without rain. Water is essential for all living things. I enjoyed that rainy day very much. It was a break from the normal routine. I will always remember this special day.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 756
  },
  {
    "id": "easy_my_school",
    "title": "My School",
    "template": "My School\n\nThe name of my school is Dhaka High School. I am a student of class nine in this school. I love my school very much. It is one of the best schools in our area. I have been studying here for many years. This school has become a big part of my life.\n\nMy school has a beautiful building. The building is three stories high and painted in cream and blue colors. It looks very nice and attractive. There are many classrooms in the building. All classrooms are big and well-ventilated. They have large windows that let in fresh air and sunlight. The classrooms are clean and comfortable. Each classroom has benches, desks, and a blackboard. Some rooms also have projectors for digital learning. The school has a large playground in front. We play football, cricket, volleyball, and other games there during breaks. The playground is green with soft grass. There are also some shade trees around the playground where we sit and rest.\n\nWe have a morning assembly every day. All students gather in the playground. We stand in straight lines class by class. First we pray together. Then the headmaster gives us good advice. He talks about discipline, studies, and good behavior. He also announces important news. After that we sing the national anthem together. It fills us with patriotic feelings. After the assembly we go to our respective classrooms. The assembly makes us feel united as a school.\n\nOur teachers are very good and qualified. They teach us with great care and love. They explain every lesson clearly and patiently. They use examples to make things easy. They make difficult subjects easy to understand. They are friendly with students but also strict about discipline. They want us to become good students and good human beings. If any student does not understand something, teachers explain it again. They never get tired of teaching. They stay after school to help slow learners. Our teachers care about each student personally.\n\nOur school has a big library on the second floor. There are thousands of books in the library. Students can borrow books and take them home. I love to read story books and adventure novels from the library. The librarian is very helpful. He suggests good books to read. He knows what type of books each student likes. The library has reading tables where students can sit and study quietly. We also have a well-equipped science laboratory. We do interesting experiments there. We learn chemistry, physics, and biology practically. This practical knowledge helps us understand better. We also have a computer lab with many computers. We learn computer skills and programming there. We practice typing and learn different software.\n\nThe school has clean toilets and safe drinking water facilities. There are water purifiers installed. We can drink pure water anytime. There are many trees all around the school. The environment is green and beautiful. Birds sing on the trees. It creates a peaceful atmosphere for learning. Flowers bloom in the school garden. The garden is maintained by students and teachers together.\n\nWe celebrate many occasions in our school. We have an annual sports day where students participate in different sports competitions. Winners get prizes and certificates. We also have cultural programs where students sing songs, recite poems, and perform dramas. These programs showcase our talents. We celebrate Independence Day on 26th March and Victory Day on 16th December. We hoist the national flag and remember our brave freedom fighters. We also celebrate Teachers Day when we thank our teachers for their hard work and dedication. We give them flowers and cards. International Mother Language Day is also celebrated with great enthusiasm.\n\nOur school maintains good discipline. Every student must wear proper school uniform. Boys wear white shirts and blue pants. Girls wear white shirts and blue skirts. We must attend school regularly and on time. Being late is not acceptable. We must respect our teachers and elders. We must not make noise in class. We must complete our homework on time. These rules help us become responsible.\n\nThe school teaches us both education and good values. It prepares us for life. It teaches us honesty, truthfulness, and hard work. It also teaches us to respect others and help those in need. It makes us good citizens. My school is like my second home. I spend many hours here every day. I have made many good friends here. We study together and play together. I am proud to be a student of this school. I will always remember my school days with joy and happiness. My school has shaped my character and future.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 774
  },
  {
    "id": "easy_winter_morning",
    "title": "A Winter Morning",
    "template": "A Winter Morning\n\nA winter morning is different from other mornings. It has a special beauty and charm. It is cold and misty. Everything looks white with thick fog. The whole world seems wrapped in a white blanket. We cannot see far away because of the mist. Visibility is very low. The sun hides behind the fog. It rises late in winter. Sometimes we cannot see the sun until 9 or 10 o'clock. The morning remains dark for a long time.\n\nThe air is cold and fresh in the morning. People feel cold and shiver. Their bodies tremble in the cold wind. They wear warm clothes to protect themselves. They wear sweaters, shawls, and jackets. Some people wear caps on their heads and socks on their feet. Children wrap themselves in blankets. They do not want to leave their warm beds. In villages people make fires to keep warm. They sit around the fire in groups. They warm their hands and bodies near the flames. They talk and enjoy the warmth together. Children and old people suffer most from the cold. Their bodies are weaker. They cannot bear the cold easily. Poor people have no warm clothes. They suffer a lot in winter. They gather dry straw and leaves. They burn them to get some warmth. Some poor people cannot afford blankets or quilts.\n\nSome people exercise in the morning. They jog or walk briskly to keep warm. Exercise makes their blood flow faster. It helps them feel warmer. Morning walkers enjoy the fresh air. Dewdrops fall on grass and leaves during the night. In the morning they shine like pearls. They look very beautiful in the morning light. When the sun comes out they slowly disappear. They evaporate in the sunlight. The grass looks wet and shiny.\n\nThe scenery in winter morning is very beautiful. Nature looks different and peaceful. The trees and fields have a special appearance. Everything is covered with mist. The landscape looks magical. Farmers go to their fields early in the morning. They work in the cold morning. They wear warm clothes while working. Some cover their heads with gamcha. Date juice is collected in winter mornings. Village boys climb date palm trees. They collect fresh juice in pots. The juice seller brings fresh date juice to sell. People drink it with great pleasure. It is sweet and delicious. It tastes wonderful in cold weather. Fresh date juice is a special treat of winter.\n\nMany winter vegetables are available in this season. Cabbage, cauliflower, carrots, and beans grow well in winter. Markets are full of fresh vegetables. People cook delicious dishes with them. The vegetables taste better in winter. People eat special winter cakes called pitha. Mothers make different types of pitha at home. There are chitoi pitha, bhapa pitha, and patishapta. The whole family sits together and enjoys eating them. They also make payesh with date juice. It is a traditional winter food. These foods make winter special and enjoyable.\n\nBirds sit quietly on tree branches. They make soft sounds in the morning. They look for food. They fly from tree to tree. Cows and goats come out slowly from their sheds. They also feel the cold weather. They move slowly in search of food. Their breath is visible in the cold air. Village children go to school wearing warm clothes. They walk through the misty paths. The cold wind touches their faces. They walk quickly to stay warm.\n\nIn cities people also face the cold. Office workers find it hard to leave their beds. They want to sleep more. Students struggle to wake up early. But they have to go to school. Tea stalls become crowded in winter mornings. People drink hot tea to warm themselves. The smell of hot tea fills the air. Some people eat hot snacks like samosas and parathas.\n\nI love winter mornings very much. The fresh air makes me feel good. I wake up early and go for a walk. The beauty of nature in winter is wonderful. Everything looks clean and pure. Though it is cold it has its own joy and beauty. The silence of the morning is peaceful. Winter morning teaches us to work hard even in difficult conditions. It shows the beauty of nature. A winter morning is truly a gift of nature. It is a special time that comes only once a year. I always wait for winter to enjoy these beautiful mornings.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 740
  },
  {
    "id": "easy_my_mother",
    "title": "My Mother",
    "template": "My Mother\n\nMy mother is the most important person in my life. I love her more than anyone else in this world. She is my first teacher, my best friend, and my greatest support. Without her I cannot imagine my life. She is the center of our family. Everything in our home revolves around her.\n\nMy mother is a wonderful woman. She is in her late thirties but looks much younger. She has a kind and gentle face that always has a smile. Her smile makes everyone happy. She has beautiful eyes full of love and care. She is not very tall but has a strong and healthy body. She works very hard every day for our family. Her hands show the hard work she does.\n\nMy mother wakes up very early every morning, even before the sun rises. She is always the first person to wake up in our house. She prepares breakfast for everyone in the family. She makes delicious parathas, eggs, and tea. She makes sure we all eat properly before going to school or work. She takes care of all our needs without complaining. She packs my tiffin box with love. She always includes my favorite foods. She knows exactly what I like to eat. She never forgets anything.\n\nMy mother is very kind and gentle in nature. She always smiles even when she is tired. Her sweet smile makes everyone feel happy and comfortable. She never gets angry without a good reason. Even when I make mistakes, she teaches me nicely. She explains what I did wrong and how to improve. She never shouts at me or hits me. She believes in teaching with love and patience. Her voice is always soft and calm.\n\nMy mother understands all my problems and feelings. When I am sad or upset, she sits with me and talks. She comforts me with her sweet words. She knows how to make me feel better. When I am sick, she takes care of me day and night. She does not sleep properly until I feel better. She gives me medicine on time. She cooks special food that I like when I am ill. She puts her hand on my forehead to check if I have fever. Her touch makes me feel better. Her love is the best medicine.\n\nMy mother helps me a lot with my studies. Every evening she sits with me while I do homework. She checks all my homework carefully. She teaches me when I do not understand something. She is very patient while teaching. She explains the same thing many times until I understand. She never gets frustrated. She encourages me to study hard. She always wants me to do well in school. She is very happy when I get good marks. She feels proud of my achievements. She shows my report card to everyone.\n\nMy mother cooks delicious food every day. She knows what every family member likes. She makes my favorite dishes often. Everything she cooks tastes wonderful. She has magic in her hands. Even simple food becomes tasty when she cooks it. My mother keeps our house very clean. She works from morning till late night. She washes clothes, cleans all the rooms, and arranges everything properly. She makes our house look beautiful and organized. She never complains about her hard work. She does everything with love.\n\nMy mother always sacrifices her own comfort for us. She buys new clothes for us but rarely buys anything for herself. She wears old sarees while we wear new clothes. She eats last after feeding everyone in the family. Sometimes she eats less so we can eat more. She always thinks about others first. She puts our needs before her own needs. She is truly selfless. She never thinks about herself.\n\nMy mother takes care of my father too. She makes sure he is comfortable. She prepares his clothes for office. She serves him food with love. She respects him and supports him. My father also loves and respects my mother. They work together as a team.\n\nMother is like God on earth. No one can love us like a mother. Her love is pure, unconditional, and selfless. She expects nothing in return. A mother's love is the greatest love in the world. I feel very blessed to have such a wonderful mother. I want to make her proud with my success. I want to take good care of her when she grows old. I pray to Allah for her long and healthy life. I love my mother very much and I can never repay her love and sacrifices. She is my hero and my inspiration.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 779
  },
  {
    "id": "easy_my_best_friend",
    "title": "My Best Friend",
    "template": "My Best Friend\n\nFriendship is a precious gift from God. A good friend makes life beautiful and meaningful. I am very lucky to have a best friend. My best friend is more than just a friend. He is like my brother. We share a special bond that I cannot describe in words. His name is Rahim. We have been friends for many years now.\n\nI met my best friend when we were very young. We were in the same school from class one. At first we were just classmates. But slowly we became close friends. Now we are inseparable. We study in the same class and sit together on the same bench. Every morning I wait for him at school. When I see him I feel happy. My day becomes good when I am with my friend. If he is absent I feel lonely and miss him.\n\nMy best friend is a very kind person. He has a gentle face and a beautiful smile. His smile can brighten anyone's day. He is always cheerful and positive. Even in difficult times he stays calm. He never panics. He has a very good nature. He is polite to everyone. Teachers love him because he is well-behaved and disciplined. He respects elders and helps younger students. His parents have raised him very well. Everyone in school knows him and likes him.\n\nWe help each other in everything. If I am weak in any subject he explains it to me patiently. He never gets tired of teaching me. He makes difficult topics easy to understand. When he faces problems I try my best to help him. We do our homework together. Sometimes we study late at night before exams. We prepare together and share notes. We practice questions together. Because of his help I have improved in my studies. He is very intelligent and hardworking. He always gets good marks.\n\nWe enjoy playing together in the afternoon. After school we go to the playground. We play cricket and football with other friends. Sometimes we ride bicycles in the park. We enjoy the fresh air and nature. We also enjoy indoor games like chess and ludo. He is very good at chess and often beats me. During break time at school we share our tiffin. Whatever I bring I share with him. He also shares everything with me. We eat together and talk about many things. We discuss our classes, teachers, and cricket matches.\n\nWhat I love most about my friend is his honesty. He always tells the truth. He never lies or cheats. He is very sincere in his work. He completes his tasks on time. He never copies in exams. These qualities make him special. He is also very helpful. If any student needs help he is ready to assist. He shares his things without hesitation. He lends his books and notes to others.\n\nWe share all our secrets with each other. We trust each other completely. I tell him everything that happens in my life. He listens carefully and gives good advice. When I am sad or worried he comforts me. He knows how to make me laugh. He tells jokes and funny stories. When I am in trouble he stands by me. He supports me in every situation. A friend in need is a friend indeed. My best friend is exactly like that.\n\nWe rarely fight with each other. Sometimes we have small disagreements but they do not last long. We quickly forget our arguments and become friends again. We cannot stay angry with each other. Our friendship is very strong and pure. We celebrate each other's birthdays and special days. We exchange gifts and cards. We plan our future together. We want to study in the same college and work together. We dream of traveling to different places together.\n\nOur parents also know about our friendship. They are happy that we are good friends. Sometimes I visit his house and sometimes he comes to mine. Our families also know each other. His mother treats me like her own son. My mother also loves him.\n\nI am very grateful to God for giving me such a wonderful friend. True friendship is rare in this world. Many people have friends but not everyone has a best friend. I consider myself very lucky. I pray that our friendship lasts forever. I will always value and protect our friendship. My best friend is a blessing in my life. He makes my life happier and better.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 751
  },
  {
    "id": "easy_book_fair",
    "title": "A Book Fair",
    "template": "A Book Fair\n\nA book fair is a wonderful event for book lovers and students. It is a place where thousands of books are displayed and sold. Last month I had the opportunity to visit a big book fair. It was an exciting and memorable experience for me. I learned many things from this visit.\n\nThe book fair was held at Bangla Academy in Dhaka. It was the famous Ekushey Book Fair. This fair is organized every year in February to celebrate our Language Movement. The fair is very popular in Bangladesh. People from all over the country come to visit it. Some people travel long distances to attend this fair. I went there with my father and elder brother on a Friday afternoon. We were all very excited.\n\nWhen we entered the fair I was amazed by its size. The fair was huge and spread over a large area. There were hundreds of colorful stalls arranged in long rows. Each stall belonged to different publishers and book sellers. They had decorated their stalls beautifully with banners and posters. The names of famous books and authors were displayed everywhere. The whole atmosphere was filled with the smell of new books. The environment was festive and lively.\n\nThere were books of all types at the fair. Story books, novels, poems, and textbooks were available. I saw many science books and history books. Geography books and religious books were also there. Comic books and children's books had colorful pictures. They looked very attractive to young readers. There were also magazines and newspapers. Some stalls sold only English books. Others had Bangla books. Dictionary and reference books were also available. Books on every subject imaginable were present.\n\nThe book fair was very crowded. Thousands of people were moving from one stall to another. Students, teachers, writers, and book lovers filled the entire place. Some people were seriously looking for specific books. Others were just browsing and enjoying the environment. Children were excited to see cartoon and story books. They pulled their parents towards these stalls. Many famous authors and poets were present at the fair. They sat at their publishers' stalls. People stood in lines to meet them and get books signed. This was a special attraction of the fair. I also got an autograph from one famous writer.\n\nI walked slowly through all the stalls with my father. I looked at many different books. I picked up some books and read a few pages to check if they were interesting. Some books caught my attention immediately. The book sellers were very friendly. They helped us find the books we wanted. They explained the contents of different books. Some stalls were offering special discounts. This made people very happy. Many people bought multiple books because of discounts.\n\nI wanted to buy many books but I had limited money. My father gave me some money as a gift. I carefully selected a few books that I really needed. I bought one adventure novel, one science book, and two comic books. The prices were very reasonable compared to bookshops. The book sellers packed the books nicely in bags. I felt very happy carrying my new books. I could not wait to start reading them.\n\nThe fair also had cultural programs. There was a small stage where poets recited their poems. Writers discussed their new books with readers. These discussions were very interesting. These programs were very interesting and educational. Music and songs were also performed in the evening. The whole environment was filled with culture and knowledge. I watched some of these programs with my family.\n\nWhat I loved most about the book fair was the enthusiasm of people. Everyone there loved books and reading. Students were buying books for their studies. Parents were buying books for their children. The book fair promotes good reading habits among people. It encourages us to read more books. It also helps publishers and writers. They can sell their books directly to readers. They can meet their readers face to face.\n\nThe book fair is very important for our society. It spreads knowledge and education. Students get a chance to see thousands of books in one place. They can compare different books and choose the best ones. The fair also celebrates our language and culture. It reminds us of our Language Martyrs who sacrificed their lives for Bangla. The fair creates love for books and reading.\n\nI enjoyed my visit to the book fair very much. I spent the whole afternoon there. I learned many things and had a great time. The experience was truly enriching. I will definitely visit the book fair again next year. I will also encourage my friends to visit. Books are our best friends. They give us knowledge, wisdom, and joy. The book fair is a celebration of this friendship. It is a must-visit event for everyone.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 813
  },
  {
    "id": "easy_railway_station",
    "title": "A Railway Station",
    "template": "A Railway Station\n\nA railway station is one of the busiest places in any city or town. It is a place full of life and activity. Last week I visited Kamalapur Railway Station in Dhaka. It is the main railway station of our capital city. My experience there was very interesting and educational.\n\nI went to the station with my father. We reached there in the morning around nine o'clock. The station building was very large and impressive. It had a modern design with wide entrances and exits. As soon as we entered I saw crowds of people everywhere. The whole place was filled with noise and movement. People were rushing in different directions. Some were entering the station while others were leaving.\n\nThe station has several platforms. Each platform is long and wide. Trains arrive and depart from these platforms throughout the day and night. When we reached platform number three was very crowded. A train was about to arrive. Passengers were standing with their luggage ready to board. The platforms are numbered clearly. Large signboards show which train will arrive at which platform.\n\nThere is a big waiting room at the station. Many passengers were sitting there waiting for their trains. Some sat on benches reading newspapers. Others were talking on mobile phones. Children were playing and running around. Families sat together with their luggage piled around them. The waiting room has fans and lights. It provides shelter from sun and rain.\n\nThe ticket counter was very busy. Long lines of people stood waiting to buy tickets. The ticket sellers sat behind glass windows. They sold tickets very quickly. People told them their destination and the ticket seller printed the ticket immediately. Some people were buying tickets for the same day. Others were buying advance tickets. There is also a separate reservation counter where people can book seats many days in advance. This is very helpful during busy seasons.\n\nThe station has a large notice board near the entrance. It displays the timing of all trains. It shows when trains will arrive and when they will depart. It also tells the platform number for each train. Passengers keep checking this board to know about their train. Sometimes trains are late due to technical problems or bad weather. Then passengers become worried and keep looking at the board anxiously.\n\nThere are many small shops and stalls inside the station. Tea stalls are the most popular. People drink hot tea and chat while waiting. The tea seller continuously makes tea in a large pot. Snack shops sell samosas, singara, biscuits, and chips. The smell of fried snacks fills the air. Book and magazine stalls sell newspapers, magazines, and novels. People buy these to read during the journey. Sweet shops sell various Bengali sweets like rasgulla and sandesh. There is also a small restaurant that serves rice and curry.\n\nPorters are seen everywhere at the station. They wear red shirts and turbans so passengers can identify them easily. They help passengers carry heavy luggage. They use metal trolleys to move bags and suitcases. For this service they charge some money. Old people and women especially need their help. Some porters wait near the platforms to help passengers get on trains.\n\nVendors move around the platforms selling different things. They sell cold water bottles, soft drinks, fruits like bananas and oranges, and packaged snacks. They call out loudly to attract customers. Their voices mix with the general noise of the station. When a train stops they rush to the windows selling their items to passengers inside.\n\nThe station master is a very important person. He sits in the control room and manages all activities. He wears a proper uniform with a cap. He ensures that trains arrive and depart on time. He communicates with other stations through radio and telephone. He controls the signals that tell trains when to stop or go. Everything runs smoothly because of his supervision.\n\nWhen a train arrives there is sudden excitement. The platform becomes extremely crowded. People rush toward the train. Those who are boarding try to find their seats quickly. Families say goodbye to their loved ones. Some people cry when separating from family members. Those arriving from the train are welcomed by relatives and friends. There are happy reunions with hugs and smiles. Joy and sadness exist together at the railway station.\n\nAnnouncements are made continuously through loudspeakers. A voice announces the arrival and departure of trains. It tells passengers which train is arriving on which platform. The announcements are made in both Bangla and English. The sound echoes throughout the station. Everyone listens carefully to these announcements.\n\nRailway police and security guards patrol the station. They maintain law and order. They watch for any suspicious activity. They help passengers who face problems. They give directions to people who are confused. They ensure the safety of all passengers.\n\nA railway station is truly a place of continuous movement. It connects cities, towns, and villages. People from different places meet here. It is an essential part of our transport system. Railways are important for the economy and development of our country. My visit to the railway station taught me many things. It showed me how railways help people travel and connect with each other.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 879
  },
  {
    "id": "easy_village_market",
    "title": "A Village Market",
    "template": "A Village Market\n\nA village market is very different from a city market. It is simpler, smaller, and more traditional. Last Friday I visited the village market at Mirzapur. My grandfather took me there. It was my first visit to a village market. The experience was very interesting and enjoyable.\n\nVillage markets do not sit every day. They are held once or twice a week on specific days. The market day is very important for village people. They wait eagerly for this day. On market day the whole village becomes active and busy. People from nearby villages also come to this market to buy and sell things.\n\nThe market is held in an open space under some big trees. There is no proper building or roof. Some sellers spread mats on the ground. Others set up temporary stalls with bamboo poles and cloth. The market looks very colorful with different items displayed everywhere. Everything is arranged in a simple but organized manner.\n\nFarmers come to the market early in the morning. They bring fresh vegetables from their fields. Potatoes, carrots, tomatoes, beans, brinjals, and pumpkins are sold. Green leafy vegetables like spinach and amaranth are also available. Everything is fresh because it comes directly from the farms. The vegetables look clean and healthy. There are no plastic bags. Vegetables are wrapped in banana leaves or newspaper.\n\nFarmers also bring fruits to sell. Ripe mangoes, bananas, jackfruits, papayas, and guavas are displayed attractively. Seasonal fruits are cheaper in village markets than in city shops. Children gather around the fruit sellers. They ask their parents to buy fruits for them. The sweet smell of ripe fruits fills the air.\n\nThe fish market section is always very busy and noisy. Fishermen bring fresh fish from rivers and ponds. They sell different types of fish like rui, katla, hilsa, and tilapia. The fish are still alive and jumping in baskets. People check the fish very carefully before buying. They ask about the price and bargain loudly. Bargaining is a common practice in village markets. Nobody buys anything without bargaining first.\n\nThere are shops selling daily necessities. Rice, lentils, flour, and oil are sold in large quantities. Sugar, salt, turmeric, and other spices are available. Villagers buy these items for their homes. They buy enough supplies for the whole week. Some shops sell kerosene oil for lamps because many villages still do not have electricity in all houses.\n\nCloth shops attract many customers especially women. They sell colorful sarees, lungis, shirts, and children's clothes. Village women love to buy bright colored sarees. They feel happy when they wear new clothes. Men buy lungis and shirts. The cloth seller displays his items nicely. He praises his products and tries to convince customers to buy.\n\nPottery sellers sit in one corner with clay pots, plates, and water pitchers. These traditional items are still used in many village homes. The earthen pots keep water cool naturally. They are environment friendly and cheap. Many villagers prefer them over plastic containers.\n\nBlacksmiths sell iron tools needed for farming. Spades, sickles, axes, and knives are displayed. Farmers need these tools for their daily work. They check the quality carefully before buying. Strong and durable tools are important for farming work.\n\nThere are small tea stalls at the market. Village men gather at these stalls to drink tea and chat. They discuss village news, politics, weather, and crops. The tea seller knows everyone. He makes hot tea continuously. The stall is always crowded. People enjoy socializing over a cup of tea.\n\nSweet shops sell traditional sweets like jilapi, sandesh, and laddu. These sweets are made fresh daily. Children love these sweets very much. Parents buy small amounts as treats for their children. The sweet seller wraps them in paper made from old newspapers.\n\nThere are also vendors selling toys, bangles, ribbons, and small items. Village children gather around these vendors with great excitement. Colorful plastic toys, wooden toys, and balloons attract them. Girls love to buy colorful bangles. These small sellers move from place to place calling out to attract customers.\n\nThe atmosphere at the village market is very lively and noisy. Sellers shout loudly to advertise their products. Buyers bargain and argue about prices. Children run around playing. But despite all the noise there is no serious quarrel or fight. Everyone knows each other. People are friendly and helpful.\n\nThe village market is not just a place for buying and selling. It is also a social meeting place. People meet their friends and relatives. They exchange news and information. They discuss their problems and share solutions. Old friends sit together and talk about old times. The market strengthens community bonds.\n\nThe village market plays a very important role in rural economy. Farmers sell their products and earn money. This helps them support their families. They buy necessary items for their daily needs. The market provides employment to many people. Sellers, porters, and shopkeepers earn their living from it.\n\nI really enjoyed visiting the village market. It showed me the simple and traditional way of rural life. Everything was natural and honest. There was no pollution or rush like city markets. People were happy and content. The village market has a special charm and beauty. It represents our rural culture and tradition. I will always remember my first visit to this wonderful place.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 891
  },
  {
    "id": "easy_tea_stall",
    "title": "A Tea Stall",
    "template": "A Tea Stall\n\nA tea stall is a very common sight in Bangladesh. It is found in every village, town, and city. Tea stalls are an important part of our daily life and culture. There is a small tea stall near our school gate. I pass by this tea stall every day. Sometimes I stop there with my friends to drink tea.\n\nThe tea stall is very simple and small. It has a tin roof supported by bamboo poles. One side is open while the other sides have walls made of wood or tin sheets. Inside the stall there are a few old wooden benches and two small tables. Sometimes there are only wooden stools for sitting. The furniture is simple but functional. The floor is made of cement. Everything is arranged in a compact space.\n\nThe owner of the tea stall is a middle-aged man. Everyone calls him tea maker or cha-wala. He is a hardworking person. He prepares tea from early morning until late at night. He has a large aluminum kettle where he boils water continuously. He adds tea leaves, milk, and sugar to make the tea. The mixture boils and creates a wonderful aroma. The smell of hot tea spreads in the surrounding area. It attracts people to the stall naturally.\n\nThe tea stall sells various items besides tea. Hot tea is the main and most popular item. The tea is served in small glass cups or clay cups. Some customers prefer tea with more milk while others like it with less sugar. The tea maker remembers everyone's preference. Biscuits of different types are displayed in glass jars. Bread, toast, and buns are also available. These go well with tea. Some tea stalls sell cigarettes and betel leaves. Samosas, singara, and other fried snacks are sold in the evening. Everything is very cheap. Even poor people can afford to buy tea and snacks here.\n\nPeople of all ages and professions visit the tea stall. Students come in the morning before school starts. They drink tea quickly and rush to class. After school they come again in groups. They sit, chat, and laugh together while enjoying tea. Workers and laborers stop at the tea stall during their breaks. They rest their tired bodies and refresh themselves with hot tea. Rickshaw pullers and cart drivers come when they have no passengers. They park their vehicles nearby and relax with a cup of tea.\n\nOffice employees visit the tea stall in the morning and evening. They read newspapers while sipping tea. Old people come in the afternoon. They have plenty of time. They sit for hours drinking tea slowly and talking with others. The tea stall welcomes everyone equally. Rich or poor, young or old, everyone is treated the same way.\n\nThe tea stall is always busy and full of activity. In the early morning workers and farmers stop by for their first cup of tea. This gives them energy to start the day. The tea maker works very fast. He serves tea quickly because people are in a hurry to go to work. Students gather at the stall creating noise and excitement. They discuss their studies, exams, and cricket matches. They share their problems and happiness.\n\nIn the evening the tea stall becomes most crowded. This is the busiest time. People come to relax after finishing their work. They want to forget the tiredness of the day. Groups of friends sit together discussing various topics. Politics is a very popular subject. Everyone has their own opinion about political leaders and parties. Sometimes heated debates occur but they remain friendly. Sports especially cricket is another favorite topic. People discuss recent matches and players' performances.\n\nLocal news and gossip are shared at the tea stall. People discuss what is happening in the neighborhood. They talk about marriages, problems, and community issues. Farmers discuss weather, crops, and market prices. The tea stall serves as an informal meeting place where information is exchanged. It functions like a community center for common people.\n\nThe tea stall owner knows almost everyone who comes. He listens to their stories patiently. He knows about their families and problems. Sometimes he gives advice. He is like a friend to all his customers. He remembers who likes strong tea and who prefers it mild. This personal touch makes people feel comfortable.\n\nThe environment at a tea stall is very informal and relaxed. People feel free to speak their minds. There is no formality or pretense. Everyone sits close together regardless of their social status. A farmer can sit next to a teacher. A student can chat with an old man. This equality is beautiful.\n\nPoor people find special comfort at the tea stall. They cannot afford expensive cafes or restaurants. The tea stall is their place. Here they can forget their worries for some time. A hot cup of tea makes them feel better. They share their sorrows with others who understand their situation. This emotional support is very important for them.\n\nThe furniture and cups at tea stalls are usually not very clean by modern standards. The cups may be old and chipped. The tables are worn out. But regular customers do not mind. They come for the taste of tea and the company of people. The friendly atmosphere is more important than cleanliness. The authentic taste of roadside tea has its own charm that expensive cafes cannot provide.\n\nA tea stall plays a very important social role in our society. It brings people from different backgrounds together. It creates a sense of community. People make friends at tea stalls. They share both happy and sad moments. The tea stall is truly a symbol of simple life. It represents our culture and social bonds. Despite being small and simple it holds great significance in daily life. I love the tea stall near our school. It is a special place where people connect with each other over a simple cup of tea.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 994
  },
  {
    "id": "easy_street_hawker",
    "title": "A Street Hawker",
    "template": "A Street Hawker\n\nA street hawker is a familiar figure in Bangladesh. We see hawkers everywhere in villages, towns, and cities. They are an important part of our daily life. I often see different hawkers near our house and school. They sell various useful items to people.\n\nStreet hawkers sell many different things. Some hawkers sell fresh vegetables and fruits. They carry vegetables in large baskets balanced on their heads or shoulders. Others sell fish in buckets. Some hawkers sell clothes, sarees, and shirts. They spread their items on the ground or hang them on poles. Toy hawkers sell colorful toys, balloons, and dolls that attract children. There are hawkers who sell household items like utensils, combs, mirrors, and plastic containers. Bangle sellers carry colorful bangles in big trays. Food hawkers sell snacks, sweets, ice cream, and cold drinks. Each hawker specializes in particular products.\n\nA street hawker does not have a permanent shop or fixed location. This makes them different from regular shopkeepers. They move from place to place throughout the day. They walk through narrow lanes and streets selling their goods. They visit residential areas where families live. They know their regular customers and the best times to visit different neighborhoods.\n\nHawkers carry their goods in different ways. Some use large baskets which they carry on their heads. This requires great balance and strength. Others use handcarts or small wooden carts with wheels. These carts are pushed through streets. Some hawkers use bicycles or vans to transport more goods. A few carry their items in bags hung from poles balanced on their shoulders. Whatever method they use requires physical strength and stamina.\n\nHawkers announce their presence by calling out loudly. Each hawker has a unique call or cry. The vegetable hawker shouts the names of vegetables he is selling. The fish seller calls out the names of fish. Some hawkers ring bells or make sounds with whistles. These calls can be heard from far away. Housewives recognize the voices of regular hawkers. They come out of their houses when they hear familiar calls.\n\nThe life of a street hawker is very hard and challenging. They wake up very early in the morning, often before sunrise. They go to wholesale markets to buy goods. They select fresh vegetables, fruits, or other items carefully. They have to bargain to get good prices because their profit margin is very small. After buying goods they start their daily rounds.\n\nHawkers walk many kilometers every day. They move from street to street in hot sun and heavy rain. Summer heat makes them sweat and tired. Monsoon rain soaks them completely. Winter cold makes their hands and feet numb. But they cannot stop working because they need to earn money daily. They rarely take rest. They keep moving until evening trying to sell everything they carry.\n\nThe income of a street hawker is very small. They earn only a few hundred taka per day. From this small amount they have to support their entire family. They need to pay for food, rent, children's education, and medical expenses. Life is a constant struggle for them. They save very little money. One day without work means one day without income.\n\nMost street hawkers are poor and uneducated people. They come from villages searching for work in cities. They have no skills or education to get regular jobs in offices or factories. Hawking is one of the few options available to them. Despite their poverty they choose honest work instead of begging or stealing. This shows their dignity and self-respect. They work hard with their own hands to earn bread for their families.\n\nStreet hawkers are very useful to common people like us. They provide great convenience. They bring goods directly to our doorsteps. Housewives can buy vegetables and fish without going to distant markets. This saves time and effort especially for busy families. Old people and mothers with small children find it very helpful. Working women appreciate hawkers because they can shop quickly during short breaks.\n\nThe prices charged by hawkers are usually reasonable and negotiable. They often sell at lower prices than regular shops because they have no rent or electricity costs. Sometimes they give small discounts to regular customers. They may add a little extra vegetable as a gift. This creates good relationships with customers.\n\nMany housewives wait for particular hawkers every day. The vegetable hawker comes every morning around the same time. The fish seller arrives in the afternoon. The milk seller comes early before sunrise. Children eagerly wait for the toy hawker and ice cream seller. Women look forward to bangle sellers and cosmetics hawkers. These hawkers become part of daily routine.\n\nHowever street hawkers face many serious problems. They have no legal protection or rights. Police and city authorities often trouble them. They are accused of blocking roads and creating traffic problems. They are not allowed to sell in many busy areas. Sometimes police drive them away or even confiscate their goods. This causes them great loss.\n\nHawkers have no fixed income or job security. Bad weather ruins their business. Heavy rain keeps customers indoors. Storms can damage their goods. During such days they earn nothing but still need to feed their families. They have no sick leave or holidays. If they fall ill they lose income. They have no insurance or savings to fall back on. Their life is full of uncertainty.\n\nDespite all these hardships and difficulties street hawkers remain cheerful and optimistic. They always smile and speak politely to customers. They never show their pain and problems. They maintain good behavior to keep customers happy. This positive attitude in the face of adversity is truly admirable.\n\nStreet hawkers are an integral part of our society. They serve common people honestly. They contribute to the economy by providing goods and services. They create employment for themselves without depending on others. We should respect their hard work and dignity. We should treat them kindly and buy from them when possible. They deserve our sympathy and support. Society should recognize their contribution and protect their rights. Street hawkers represent the hardworking poor people who keep our economy moving with their honesty and labor.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1032
  },
  {
    "id": "early_rising",
    "title": "Early Rising",
    "template": "Early Rising\n\nEarly rising means getting up from bed early in the morning. It is one of the best habits a person can develop. Early rising has been praised by wise people throughout history. Successful people all over the world wake up early. I try to wake up at five thirty every morning. This good habit has changed my life in many positive ways.\n\nEarly rising is very important for our health and success in life. The morning time is truly the most beautiful and productive part of the day. Everything in nature is fresh and new in the morning. The environment is clean and pure. The air is rich in oxygen because plants release oxygen during the night. Breathing this fresh air makes our body and mind strong and healthy.\n\nIn the morning there is peace and quietness everywhere. There is no noise from traffic or crowds. No loud sounds disturb the calm atmosphere. This peaceful environment is perfect for thinking, working, and studying. The mind works best in this quietness. We can concentrate fully on whatever we do.\n\nNature looks most beautiful in the early morning. The sky gradually changes colors from dark to pink to bright blue. The sun rises slowly spreading golden light everywhere. Birds wake up and start singing melodious songs. They fly from tree to tree chirping happily. Flowers bloom with fresh colors and sweet fragrance. Dewdrops on grass and leaves shine like tiny diamonds. The cool breeze touches our face gently. Everything feels magical and wonderful. People who wake up late miss all this natural beauty.\n\nEarly rising has many great benefits for our health. Morning air is pure and rich in oxygen. When we breathe this air our lungs become strong. Our blood gets more oxygen. This improves blood circulation in our body. All our organs work better. Early risers feel more energetic throughout the day.\n\nPeople who wake up early have time to exercise. Morning is the best time for physical exercise. We can go for a walk, jog, or run. We can do yoga or simple exercises at home. Exercise makes our muscles strong and bones healthy. It improves our digestion and metabolism. Regular morning exercise keeps us fit and prevents many diseases. People who sleep late miss the opportunity to exercise in fresh air.\n\nEarly rising is also very beneficial for students. The morning mind is fresh and alert after a good night's sleep. Students can concentrate better on their studies. They understand difficult topics more easily. Memory power is strongest in the morning. Whatever we learn in the morning stays in our mind longer. Students who study in the morning get better results in exams. They learn faster and remember more.\n\nMany great and successful people were early risers. Scientists, leaders, writers, and businessmen wake up early. They complete their most important work in the morning hours. Morning time is very productive because there are fewer distractions. No phone calls disturb us. No visitors come. We can focus completely on our work. Early risers can finish more tasks in less time. They achieve more than others who sleep late.\n\nEarly rising teaches us discipline and self-control. When we force ourselves to wake up early despite feeling sleepy, we develop willpower. This discipline helps us in all areas of life. It builds strong character. Disciplined people become successful in their careers and personal lives.\n\nEarly risers have more time in their day. They can plan their day properly. They are never in a hurry or rush. They complete all their work calmly and efficiently. They have time for family, hobbies, and relaxation. Late risers always feel rushed and stressed. They miss breakfast and rush to work or school. They cannot give their best performance.\n\nHowever many people find it very difficult to wake up early. The main reason is that they sleep very late at night. They watch television, use mobile phones, or chat until midnight. Then they cannot wake up early. To become an early riser we must develop the habit of sleeping early. We need seven to eight hours of good sleep. If we sleep at ten o'clock we can easily wake up at five or six in the morning.\n\nWe should set an alarm clock and keep it away from the bed. This forces us to get up to turn it off. Once we are up we should not go back to bed. We should immediately wash our face with cold water. This removes sleepiness. We should have a strong determination and will power. The first few days may be difficult. We may feel sleepy and tired. But if we continue for two or three weeks it becomes a habit. After that waking up early becomes natural and easy.\n\nParents should teach children to wake up early from childhood. Children learn what they see at home. If parents wake up early children will also develop this habit. Schools should encourage early rising. Morning assemblies and first period classes teach students to come early.\n\nMany religious and spiritual people practice early rising. Muslims wake up before sunrise for Fajr prayer. This is a blessed time. Hindus and Buddhists also meditate in the early morning. All religions emphasize the importance of morning prayers and meditation. Our Prophet Muhammad peace be upon him advised people to wake up early. He said that mornings are blessed and bring success.\n\nEarly rising brings many blessings to our life. It improves health, increases productivity, and brings success. It gives us time to enjoy nature's beauty. It makes us disciplined and organized. It reduces stress and makes life happy. All successful people follow this golden habit. We should all try to wake up early every day. We should make it our permanent habit. If we wake up early consistently we will see positive changes in our life. Our health will improve. Our work will be better. We will feel happier and more satisfied. Early rising is truly the key to a successful and healthy life. Let us all promise to become early risers from today.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1012
  },
  {
    "id": "easy_my_hobby",
    "title": "My Hobby",
    "template": "My Hobby\n\nEveryone needs some activity that makes them happy and relaxed. A hobby is exactly that - something we do for pleasure in our free time. My hobby is reading books. I have loved reading since I was a small child. Reading has become an important and enjoyable part of my daily life.\n\nI discovered my love for reading when I was in class three. My father bought me a colorful picture book about animals. I was fascinated by the beautiful pictures and interesting facts. That book opened a new world for me. From that day I started asking my parents to buy more books. They were very happy to see my interest. They encouraged me to read more.\n\nNow I read different types of books. I love adventure stories and mystery novels. They take me to exciting places and thrilling situations. I also enjoy reading fairy tales and folk stories. Science fiction books about space and future are very interesting. Sometimes I read biography books about great people. These books teach me valuable lessons about life. I also read books about animals, nature, and science. Each book gives me new knowledge and experiences.\n\nI spend time reading whenever I am free. After finishing my homework in the evening I take a book and start reading. I have a small corner in my room with a comfortable chair and good light. This is my reading space. I sit there quietly and lose myself in the book. On holidays I can read for hours without stopping. Sometimes I read in the park on Sunday mornings. The fresh air and natural environment make reading even more enjoyable.\n\nReading is not just fun for me. It is also very useful and educational. Books teach me many things that I cannot learn in school. I learn new words and improve my vocabulary every day. My English has become much better because of reading. I can write compositions more easily now. My teachers often praise my writing. This is all because of my reading hobby.\n\nBooks take me to different countries and times. I can visit ancient Egypt, explore the Amazon jungle, or travel to distant planets - all without leaving my room. Through books I meet interesting characters and learn about different cultures. I understand how people in other countries live. This broadens my mind and makes me more knowledgeable.\n\nMy hobby has taught me patience and concentration. Some books are long and take many days to finish. I have learned to be patient and keep reading until the end. Reading also improves my concentration. When I read I focus completely on the book. This skill helps me in my studies too. I can now concentrate better in class and while doing homework.\n\nMy parents are very supportive of my hobby. They buy me books as gifts on my birthday and good results. They take me to book fairs and bookshops. My father reads books too so he understands my passion. Sometimes we discuss the books we have read. My mother is happy that I spend time on something useful instead of wasting time on television or mobile games.\n\nMy teachers also appreciate my reading hobby. They often ask me to suggest good books to other students. In our school library I am a regular visitor. The librarian knows me well. She reserves new books for me. Sometimes our English teacher invites me to share my thoughts about a book with the class. This makes me feel special and proud.\n\nMy hobby has made me popular among my friends. They know I read a lot. When they need a good book to read they ask me for suggestions. Sometimes we exchange books. This way we can read more books without buying all of them. Some of my friends have also started reading more because of my influence. We have formed a small reading club at school.\n\nReading keeps me busy in a positive and productive way. While other children waste hours watching television or playing video games I use my time reading. I do not get bored even when I am alone. I always have a book to keep me company. Books are my best friends. They never disappoint me.\n\nSome people turn their hobbies into careers. Many writers started as readers who loved books. Some become teachers, librarians, or publishers. I also dream of doing something related to books in the future. Maybe I will become a writer and create stories for children. Or perhaps I will open a bookshop or library. Even if I choose a different career I will never stop reading. It has become a permanent part of my life.\n\nMy hobby brings me great joy and satisfaction. When I finish a good book I feel happy and fulfilled. I feel like I have gained something valuable. Sometimes a book touches my heart deeply. The lessons and messages from books stay with me forever. They help me become a better person.\n\nA hobby is like a faithful friend that never leaves us. It stays with us in all situations. When we are sad a hobby makes us happy. When we are stressed it relaxes us. When we are bored it entertains us. Everyone should develop at least one good and healthy hobby. Students especially need hobbies because they study for long hours and need mental relaxation. A hobby refreshes the mind and prepares us to work with new energy.\n\nI feel very fortunate to have reading as my hobby. It has enriched my life in countless ways. It has made me more knowledgeable, creative, and thoughtful. It has improved my language skills and academic performance. Most importantly it has given me endless hours of pleasure and happiness. I will continue reading throughout my life. Books will always be my companions. I encourage everyone to find a hobby they love. A good hobby makes life beautiful, meaningful, and worth living.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 990
  },
  {
    "id": "easy_value_of_time",
    "title": "Value of Time",
    "template": "Value of Time\n\nTime is the most precious thing in our life. It is more valuable than money, gold, or any other treasure. Time is priceless because once it passes it never comes back. We cannot buy time with money. We cannot stop time or turn it back. Every moment that passes is gone forever. Understanding the value of time is essential for success and happiness in life.\n\nTime moves forward continuously. It does not wait for anyone. Every second, minute, and hour passes whether we use it properly or waste it. The clock keeps ticking without stopping. We all have exactly 24 hours in a day. Rich or poor, king or beggar, everyone gets the same amount of time. The difference between successful and unsuccessful people is how they use their time.\n\nSuccessful people know the value of time. They use every moment wisely. They do not waste even a single minute. They plan their day carefully from morning to night. They know what to do at what time. They complete their work on time. They are punctual and disciplined. Famous scientists, leaders, writers, and businessmen all valued time greatly. They achieved great things because they managed their time well.\n\nOn the other hand people who waste time never achieve anything significant in life. They keep postponing their work for tomorrow. They spend hours doing useless activities. They watch television for hours or play games all day. They sleep too much or gossip unnecessarily. When they finally realize their mistake it is too late. Then they regret but regret does not bring back lost time.\n\nStudents who waste time suffer the most. They do not study regularly. They keep postponing their homework and assignments. They think they have plenty of time. They play when they should study. They spend hours on mobile phones and social media. When exams come near they panic. They try to study everything in a few days. But this is impossible. They fail in exams and feel sad. Then they blame everyone except themselves. The real reason for their failure is wasting time.\n\nTime waits for no one. If we miss a train or bus we have to wait for the next one. We lose precious time and may miss important appointments. If we miss an opportunity in life it may never return. A student who wastes school years cannot get them back. A farmer who misses the planting season loses the whole year's crop. A businessman who delays decisions may lose profitable opportunities. Therefore we must act at the right time.\n\nWe should use our time wisely and productively. First we should make a proper daily routine. We should plan how to spend each hour of the day. We should give time to all important activities. Study or work comes first. But we also need time for play, exercise, rest, and family. Everything should be balanced. We should follow our routine strictly. This brings discipline to our life.\n\nWe should do our work on time without delay. We should not procrastinate or postpone tasks for later. Procrastination means putting off work for tomorrow. This is a very bad habit. It is the thief of time. If we have to do something we should do it immediately. Delay creates problems. A small task becomes big if ignored. A small problem becomes serious if not solved quickly.\n\nThere are many wise proverbs about time. The saying 'Time and tide wait for none' teaches us that time does not stop for anyone. Just like ocean tides come and go at fixed times, time also moves according to its own schedule. We must adjust ourselves to time. Another proverb says 'A stitch in time saves nine.' This means if we repair a small tear in cloth immediately with one stitch, it prevents the tear from becoming bigger which would need nine stitches later. Similarly solving small problems quickly prevents bigger problems in future.\n\nGreat men throughout history understood the value of time. They utilized every moment productively. They did not waste time in idleness or pleasure. Scientists worked in laboratories for hours making discoveries. Writers wrote books late into the night. Leaders worked tirelessly for their countries. Their time consciousness made them successful and famous. We should follow their example.\n\nFor students time is especially precious. Student life is the golden period of life. This is the time to learn, grow, and build the foundation for future. Students who use their time wisely become successful. They should study regularly according to a timetable. They should complete homework and assignments on time. They should attend school regularly. They should not waste time on unnecessary entertainment. Watching television or playing video games for hours is harmful. A little recreation is good but too much is waste of time.\n\nTime management is a very important life skill. It means planning and controlling how we spend our time. Good time management makes us efficient and successful. We can do more work in less time. We feel less stressed because we are organized. Schools and parents should teach children about time management from an early age. Children who learn this skill early become successful adults.\n\nTime is a gift from Allah. He has given us life with limited time. Nobody knows how long they will live. We should respect this precious gift. We should use our time for good purposes. We should help others when we have time. We should do good deeds. We should learn new things. We should work hard. We should make our life meaningful and productive.\n\nWe should also give time to our family. Parents, siblings, and relatives need our time and attention. Spending quality time with family strengthens relationships. It brings happiness to everyone. In our busy lives we should not ignore family time. Similarly we should give time to society. We should participate in community work. We should help poor and needy people.\n\nTime cannot be stored or saved for later use like money. Each day brings new 24 hours. Yesterday's unused time cannot be added to today. Therefore we must use each day properly. We should start our day early. Morning hours are most productive. Our mind is fresh and alert in the morning. We should use morning time for important work.\n\nIn conclusion time is the most valuable asset we have. It is more precious than all the wealth in the world. We cannot buy it, store it, or get it back once lost. Therefore we must use every moment wisely. We should value time from childhood. We should develop the habit of punctuality and discipline. We should complete our work on time. We should not waste time in useless activities. If we respect time and use it properly we will definitely succeed in life. If we waste time carelessly we will fail and regret later. Let us all promise to value time and make the best use of every moment. Time is life. If we waste time we waste life.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1166
  },
  {
    "id": "easy_aim_in_life",
    "title": "Your Aim in Life",
    "template": "Your Aim in Life\n\nEvery person should have a clear aim or goal in life. An aim gives direction and purpose to our existence. Without an aim we wander aimlessly like a ship without a captain or compass. I also have a definite aim in my life. I want to become a doctor. This has been my dream since childhood. I am working hard every day to make this dream come true.\n\nI chose to become a doctor for several important reasons. First, I want to serve humanity and help sick people. When I see poor people suffering from diseases I feel sad. Many people die because they cannot afford treatment. As a doctor I will be able to cure their diseases and save lives. There is no greater joy than saving a human life. Second, the medical profession is very noble and respected. Doctors are honored in every society. People trust doctors and respect them. Third, I am very interested in biology and science. I enjoy learning about the human body and how it works. Studying medicine will allow me to explore my interest deeply.\n\nHaving a clear aim has changed my life positively. Now I have a purpose and direction. Every morning when I wake up I know what I am working for. My aim motivates me to study hard. When I feel tired or lazy I remember my goal. This gives me new energy and enthusiasm. My aim helps me make better decisions. I choose activities that bring me closer to my goal. I avoid things that waste my time and distract me.\n\nI know that becoming a doctor is not easy. It requires years of hard study and dedication. The medical entrance exam is very competitive. Thousands of students appear but only a few get selected. The course is long and difficult. Medical students have to study complex subjects and work very hard. But I am ready to face all these challenges. I believe that with determination and effort nothing is impossible.\n\nTo achieve my aim I am preparing myself systematically. First and most important is studying hard. I pay full attention in class. I listen carefully to all my teachers. I make notes of important points. I do my homework regularly and properly. I have a fixed study schedule which I follow strictly. I give extra time to science subjects especially biology, chemistry, and physics. These subjects are crucial for medical studies.\n\nI read books beyond my textbooks. I have bought several reference books on biology. Reading additional books gives me deeper knowledge. I also read biographies of famous doctors. Their life stories inspire me. I learn from their struggles and success. I read medical magazines and articles. This keeps me updated about new medical discoveries and treatments.\n\nPractice is very important. I solve many questions and previous years' exam papers. This improves my problem-solving skills. I also take online practice tests. These tests show me where I am weak. Then I work harder on those topics. Practice makes us perfect. The more I practice, the more confident I become.\n\nI am also developing other important skills. Good doctors need excellent communication skills. They must talk to patients gently and explain things clearly. I am working on my speaking and writing skills. I participate in debates and discussions. Doctors also need patience and compassion. They must understand patients' problems and treat them kindly. I am trying to become more patient and caring. I help my family members and neighbors whenever they need assistance.\n\nMy parents are my biggest support system. They fully support my aim. They encourage me every day. They provide me with all the books and resources I need. My father often discusses my studies with me. My mother takes care of my health and food. She ensures I eat nutritious meals. Good health is essential for hard study. My teachers are also very helpful. They guide me properly. They give extra classes for difficult topics. They suggest good books and study materials. I am very grateful to my parents and teachers.\n\nI maintain a balanced routine. I study for long hours but also take short breaks. During breaks I relax and refresh my mind. I do physical exercise regularly. I play outdoor games in the evening. This keeps my body fit and mind fresh. A healthy body supports a healthy mind. I also get proper sleep. Sleep is important for memory and concentration. I try to sleep for seven to eight hours daily.\n\nI know that failures are part of the journey. Sometimes I may not get expected marks in tests. Sometimes I may find a chapter very difficult. But I will never give up. I will learn from my mistakes. Every failure teaches us something valuable. Great scientists and doctors also failed many times before achieving success. Thomas Edison failed thousands of times before inventing the light bulb. But he did not quit. His determination led to success. I will follow their example.\n\nAfter achieving my aim and becoming a doctor, I have many plans. First, I will make my parents proud and happy. They have sacrificed so much for me. My success will be their reward. I will serve my country by working in hospitals. I will treat patients with dedication and honesty. Many doctors become greedy and charge high fees. I will not do that. I will serve poor people free or at low cost.\n\nI also want to work in rural areas where medical facilities are scarce. Villages lack good hospitals and doctors. People there suffer without proper treatment. I want to open a small clinic in my village. This will help local people. I will organize free medical camps for poor people. I will spread awareness about diseases and prevention. Education is as important as treatment.\n\nI believe that success without service is meaningless. Earning money is necessary but helping others is more important. A doctor who only cares about money is not a true doctor. A true doctor thinks about humanity first. I want to be remembered as a kind and helpful doctor. I want people to bless me for relieving their pain.\n\nMy aim is not just a career choice. It is a commitment to serve humanity. Medicine is not just a profession but a mission. It requires dedication, sacrifice, and continuous learning. Medical science keeps advancing. A good doctor must keep learning throughout life. I am ready for this lifelong journey of learning and serving.\n\nI believe in hard work, honesty, and sincerity. These are the keys to success. Shortcuts and dishonest means may give quick results but they do not last. True success comes through honest effort. I pray to Allah to help me achieve my aim. I ask for His blessings and guidance. With faith in God and belief in myself, I will definitely succeed.\n\nEvery student should have a clear aim in life. We should decide what we want to become. Then we should work towards that goal every single day. Small daily efforts lead to big achievements. We should not get distracted by temporary pleasures. We should remain focused on our aim. With determination, hard work, and patience we can achieve any goal. Let us all dream big and work hard to make our dreams reality. Our aims should not be selfish. They should benefit society. When we succeed we should help others too. This makes success truly meaningful and satisfying.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1241
  },
  {
    "id": "easy_favorite_season",
    "title": "The Season You Like Most",
    "template": "The Season You Like Most\n\nBangladesh is blessed with six distinct seasons. Each season has its own unique beauty and characteristics. The six seasons are summer, rainy season, autumn, late autumn, winter, and spring. All seasons are beautiful in their own way. But among all these seasons I like spring the most. Spring is called the king of all seasons. It is the most pleasant and charming time of the year.\n\nSpring comes after winter. It arrives in the months of Falgun and Chaitra according to the Bengali calendar. In English calendar this is February and March. I wait eagerly for spring every year. When spring finally arrives I feel very happy and excited. The whole world seems to change during this season. Everything becomes fresh, colorful, and beautiful. Nature wears its most attractive dress in spring.\n\nThe weather in spring is absolutely perfect. It is neither too hot nor too cold. The temperature is just right. During the day the sun shines gently and warmly. It is not harsh like summer sun. The air feels pleasant and comfortable. Cool breezes blow throughout the day. These soft winds touch our face gently. They bring freshness and joy. The sky looks clear and bright blue. Sometimes white clouds float slowly. The whole atmosphere feels wonderful.\n\nNature looks most beautiful in spring. Trees that were bare in winter now become full of fresh green leaves. New leaves grow on every branch. The trees look young and alive again. The whole world becomes green. This greenery is very soothing to the eyes. It makes us feel happy and peaceful. Flowers bloom everywhere during spring. Gardens become full of colorful flowers. Red roses, yellow marigolds, white jasmine, and many other flowers blossom. These flowers make the environment colorful and fragrant.\n\nThe fragrance of flowers fills the air in spring. When we walk through gardens or parks we can smell the sweet perfume of flowers. This natural fragrance is very pleasant. It makes us feel fresh and cheerful. Different flowers have different beautiful smells. Roses have a strong sweet smell. Jasmine flowers smell lovely especially at night. The smell of flowers attracts butterflies and bees.\n\nBirds are most active and happy in spring. They sing melodious songs all day long. Their sweet chirping fills the air. Different birds make different sounds. The cuckoo bird sings its famous call during spring. Hearing the cuckoo's song is a special joy of this season. Birds build nests and lay eggs during spring. They fly from tree to tree collecting twigs and grass for nests. Watching birds is very enjoyable in this season.\n\nSpring brings many special fruits and flowers. Mangoes start growing on trees. Small raw mangoes appear on branches. Though we cannot eat them yet, it is exciting to see them growing. We know that soon summer will come and mangoes will ripen. Many fruits like litchis and jackfruits start developing. Various seasonal flowers bloom only in spring. The krishnachura or flame tree blooms with bright red flowers. The whole tree becomes red like fire. It looks absolutely stunning.\n\nFarmers become busy in spring. They harvest the crops that were planted months ago. Golden rice fields are ready for harvest. Farmers cut the ripe paddy and collect it. This is a happy time for farmers. Their hard work throughout the year gives results. They celebrate the harvest with joy. Spring is a season of prosperity for agriculture. The land gives us food and wealth.\n\nThe fields look especially beautiful in spring. Green paddy fields stretch far and wide. Sometimes there are yellow mustard fields. The yellow flowers of mustard create a golden carpet. When wind blows these fields wave like ocean waves. This sight is mesmerizing. Children fly colorful kites in open fields. The clear sky and gentle wind make it perfect for kite flying. Groups of children run in fields trying to catch kites.\n\nPeople feel healthy and energetic in spring. The pleasant weather makes us feel active. We do not feel lazy like in summer heat. We do not shiver like in winter cold. Our body feels comfortable. We can work more efficiently. Students can study better because the weather does not trouble them. Morning and evening walks are most enjoyable in spring. Many people go to parks with their families. Children play outdoors happily.\n\nSpring is perfect for outdoor activities. Schools organize picnics and excursions during this season. Students go to parks, historical places, or natural spots. These trips are fun and educational. Families also plan outings. They visit gardens, zoos, or riverside spots. People enjoy eating and playing in the pleasant weather. Sports competitions are held in spring. Cricket matches and football games are common. The comfortable weather allows long outdoor games.\n\nFestivals and celebrations occur during spring. The biggest Bengali festival Pohela Boishakh falls in spring. This is the Bengali New Year celebrated on 14th April. People wear colorful traditional clothes. Cultural programs are organized everywhere. Songs, dances, and processions fill the streets. The whole country celebrates with joy. Everyone wishes each other happy new year. This festival shows our love for Bengali culture and traditions.\n\nPoets and writers have praised spring throughout history. They write beautiful poems about spring's beauty. Spring has inspired countless songs and stories. Artists paint pictures of spring scenes. The season fills creative people with inspiration. In schools we learn poems about spring. These poems describe flowers, birds, and nature. Reading and reciting spring poems is very enjoyable.\n\nHowever spring in Bangladesh is quite short. It lasts only about two months. Before we can fully enjoy it, summer arrives with its intense heat. This makes spring even more precious. We must enjoy every moment of this beautiful season. We should spend time outdoors. We should visit gardens and appreciate nature's beauty. We should not waste this golden time staying indoors.\n\nSpring teaches us important lessons about life. It shows us that after difficult times good times come. Winter's cold and hardship end when spring arrives. Similarly in life after struggles and problems better days come. Spring teaches hope and optimism. The blooming flowers teach us to stay cheerful and spread happiness. The singing birds remind us to be joyful. Nature's renewal in spring shows that we too can renew ourselves and start fresh.\n\nEvery season has its importance in nature's cycle. Summer, rain, autumn, winter, and spring all serve purposes. But spring holds a special place in my heart. Its perfect weather, blooming flowers, singing birds, and overall beauty make it extraordinary. The joy and freshness it brings are unmatched. Spring makes life feel wonderful and worth living. It reminds us of Allah's infinite creativity and blessings.\n\nI love everything about spring - the weather, the flowers, the birds, the greenery, the festivals, and the overall atmosphere. When spring arrives I feel like nature is celebrating. Every morning in spring feels like a gift. I wake up happily knowing the day will be pleasant. I wish spring could last longer. But even in its short duration it leaves beautiful memories. I eagerly wait throughout the year for spring to return. When it comes again I welcome it with open arms and a joyful heart. Spring will always remain my favorite season.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1204
  },
  {
    "id": "easy_memorable_day",
    "title": "A Memorable Day in Your Life",
    "template": "A Memorable Day in Your Life\n\nLife is full of many days. Most days pass normally without anything special. But some days remain in our memory forever. These special days are called memorable days. Everyone has some memorable days in their life. I also have such a day that I can never forget. The day I received the award for being the best student of our school is the most memorable day of my life.\n\nThis memorable event happened six months ago. It was the annual prize-giving ceremony of our school. The event was held on 10th January. I remember every detail of that day clearly. Even now when I think about it I feel the same excitement and happiness. That day changed something inside me. It filled me with confidence and pride.\n\nThe day started like any other normal day. I woke up in the morning not knowing what awaited me. My mother woke me early and told me to get ready properly. Today was the school's annual function and all students had to attend. I took a bath and wore my best uniform. My mother combed my hair neatly. My father was also getting ready to come to school. Parents were invited to the function. I was feeling nervous and excited at the same time.\n\nWhen we reached school I saw the whole campus decorated beautifully. Colorful flags and banners were everywhere. A large stage was set up in the playground. Chairs were arranged in rows for students and guests. The stage had a big banner saying Annual Day Celebration. Flowers decorated the stage. Everything looked festive and special. All students were wearing clean neat uniforms. Teachers were busy organizing everything.\n\nThe program started at ten o'clock in the morning. Our headmaster welcomed everyone. He spoke about the school's achievements during the year. He praised the teachers and students. Then there were cultural programs. Students performed songs, dances, and dramas. I enjoyed watching my friends perform. Everyone clapped and cheered. The atmosphere was filled with joy and celebration.\n\nAfter the cultural programs it was time for prize distribution. My heart started beating faster. I knew I had performed well in exams. I had stood first in my class. But I did not know if I would get any special award. The headmaster announced that they would give awards for best students in each subject. He also announced a special award for the overall best student of the school.\n\nOne by one students went up to the stage to receive prizes. They received certificates and books. Their parents looked proud. I received prizes for best performance in English and Mathematics. I felt happy receiving these awards. But then came the moment I will never forget. The headmaster announced the name of the best student of the year. He said my name loudly and clearly. For a moment I could not believe my ears. Was it really my name?\n\nEveryone started clapping loudly. My teachers were smiling at me. My classmates turned to look at me with admiration. I felt my face becoming red with shyness and happiness. Slowly I stood up from my seat. My legs were shaking with nervousness and excitement. I walked towards the stage feeling like I was in a dream. The walk to the stage seemed very long though it was just a few seconds.\n\nI climbed the stairs and stood on the stage. The bright lights made me feel a bit dizzy. I looked at the huge crowd of students, teachers, and parents. Everyone was looking at me. I felt overwhelmed with emotions. The chief guest gave me a beautiful trophy and a certificate. The trophy was shining and heavy. It had my name engraved on it. I held it carefully in my hands. The headmaster shook my hand and congratulated me. He said he was very proud of me. Teachers hugged me and blessed me.\n\nI looked at the audience and found my parents. My father had tears in his eyes. They were tears of happiness and pride. My mother was wiping her eyes with her sari. They were both crying with joy. This sight touched my heart deeply. I realized how happy I had made them. All their sacrifices and hard work for me had paid off. They had worked so hard to give me good education. Now I was making them proud. This was their moment as much as mine.\n\nAfter receiving the award I returned to my seat. My friends congratulated me enthusiastically. They patted my back and hugged me. Teachers came to my seat to bless me. Everyone was so kind and encouraging. I felt very grateful for all the love and support. The rest of the ceremony passed in a blur. I was still processing what had happened. I kept looking at the trophy in my hands to make sure it was real.\n\nAfter the function ended many students and parents came to congratulate me. They praised my achievement. Teachers told my parents how hard I had worked. My parents thanked them for their guidance. My father looked happier than I had ever seen him. He told everyone proudly that I was his son. My mother hugged me tightly. She blessed me and prayed for my continued success.\n\nWhen we reached home my extended family was waiting. They had heard the news. They had prepared sweets to celebrate. Everyone congratulated me. My grandparents blessed me with tears of joy. My younger siblings looked at me with admiration. They said they wanted to be like me. This made me feel responsible. I realized that now I had to set a good example for them.\n\nThat evening my father took us all to a nice restaurant. We had a special dinner to celebrate. My father ordered my favorite dishes. Everyone was in a festive mood. We talked and laughed. My father spoke about how proud he felt. He said this was one of the happiest days of his life. My mother thanked Allah for blessing us. This family celebration made the day even more special.\n\nBefore sleeping that night I looked at the trophy on my study table. The shining trophy reflected the light. I felt proud but also humble. I knew this success was not just my effort. So many people had contributed to it. My parents who sacrificed everything. My teachers who patiently taught me. My friends who supported me. Without all of them this achievement would not have been possible.\n\nThat memorable day taught me many valuable lessons. First it showed me that hard work always pays off. I had studied sincerely throughout the year. I had put in effort consistently. The result was this sweet success. Second it taught me the importance of making parents proud. Seeing happiness in my parents' eyes was more valuable than any trophy. Their tears of joy were my real prize. Third it taught me to stay humble. Success should not make us arrogant. We should remember everyone who helped us reach there.\n\nThat day also motivated me to work even harder in future. It set a new standard for me. Now I want to achieve even more. I want to make my parents proud again and again. I want to justify the faith my teachers have in me. This success has given me confidence that I can achieve my dreams if I work hard.\n\nEven after six months that day remains fresh in my memory. When I feel tired or discouraged I remember that day. I look at the trophy and certificate on my wall. They remind me of my capability. They tell me that I can overcome challenges. They give me strength to work harder. That memorable day has become a source of permanent motivation for me.\n\nEveryone should work towards creating such memorable days in their life. These days become beautiful memories that stay forever. They give us joy even years later. They inspire us during difficult times. We should set goals and work sincerely to achieve them. Success may not come easily but when it comes it creates unforgettable memories. The day I received the best student award will always remain the most precious and memorable day of my life.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1373
  },
  {
    "id": "easy_wonders_modern_science",
    "title": "Wonders of Modern Science",
    "template": "Wonders of Modern Science\n\nWe live in the age of science and technology. Modern science has completely changed our world and the way we live. Life today is very different from life a hundred years ago. Science has given us countless wonderful gifts. These scientific inventions have made our lives comfortable, easy, and exciting. We cannot imagine living without these wonders of modern science.\n\nIn the past people lived very simple and difficult lives. They had no modern facilities or conveniences. They worked very hard even for small things. Communication was difficult. Traveling was slow and dangerous. Medical treatment was poor. Many people died from diseases that are easily curable today. Life was full of hardships. But now science has solved most of these problems. It has transformed human life dramatically.\n\nElectricity is perhaps the greatest wonder of modern science. It is the foundation of modern civilization. Electricity has changed everything. It lights up our homes, streets, and cities. We cannot imagine life without electricity now. At night our houses are bright as day. Streets are safe because of electric lights. All our modern machines run on electricity. Fans keep us cool in summer. Air conditioners provide comfort. Refrigerators preserve our food. Washing machines clean our clothes. Electric heaters warm us in winter.\n\nTelevision is a wonderful entertainment device. We can watch news, movies, dramas, and educational programs sitting at home. Television brings the whole world to our living room. We see events happening in distant countries instantly. Sports matches, concerts, and important ceremonies are broadcast live. Children learn many things from educational channels. Television has become an important part of every home.\n\nComputers are miraculous machines. They have revolutionized everything. Computers can perform millions of calculations in seconds. They never get tired or make mistakes. They store huge amounts of information in small space. Offices, banks, schools, and hospitals all use computers. They make work faster, easier, and more accurate. Students use computers for learning and research. Computers have made many complex tasks simple. Scientists use supercomputers for research. Weather forecasting is done by computers. Airplanes and spacecraft are controlled by computers.\n\nThe Internet is another mind-blowing wonder. It has connected the entire world. We can communicate with anyone anywhere instantly. The internet provides unlimited information on any topic. Students can learn anything online. There are millions of websites with educational content. We can read books, watch videos, and take courses online. Social media platforms connect friends and families across continents. Email has made communication instant and free. Video calls allow us to see and talk to people far away.\n\nMobile phones are incredible inventions. Earlier telephones were connected with wires and fixed in one place. Now we carry phones in our pockets. We can call anyone from anywhere. Mobile phones have become mini computers. Smartphones can do almost everything. We can take photos and videos. We can listen to music and watch movies. We can browse internet and check emails. We can use GPS for directions. We can do online banking and shopping. Mobile phones have made life extremely convenient.\n\nMedical science has made amazing progress. Diseases that were once deadly can now be easily cured. Medicines are available for almost every illness. Advanced surgical techniques save millions of lives. Doctors can transplant organs from one person to another. Kidney, heart, and liver transplants are successful. X-rays help doctors see inside our body without cutting. CT scans and MRI machines detect diseases early. Vaccines prevent dangerous diseases. Polio and smallpox have been nearly eliminated. People live much longer and healthier lives now thanks to medical science.\n\nTransportation has become incredibly fast and comfortable. Airplanes fly across oceans and continents in hours. A journey that took months by ship now takes few hours by plane. Trains are fast and comfortable. They connect cities and countries. Cars and buses make daily travel convenient. We can go anywhere easily. Express highways reduce travel time. Transportation of goods has also become efficient. Fresh food and products reach distant places quickly.\n\nSpace science is exploring the universe. Scientists have sent rockets and satellites into space. Humans have walked on the moon. Space stations orbit Earth continuously. Satellites help in communication and weather forecasting. They transmit television signals across the world. GPS satellites guide travelers and ships. Space telescopes discover new planets and stars. Mars rovers explore the red planet. Space science is revealing secrets of the universe.\n\nScience has also helped agriculture greatly. Modern farming machines make farming easier and faster. Tractors plow large fields quickly. Harvesters cut and collect crops efficiently. Better seeds produce more crops. Farmers get high yield from same land. Chemical fertilizers make soil fertile. Pesticides protect plants from insects. Irrigation systems provide water to dry areas. Scientific farming methods have increased food production. This helps feed growing populations.\n\nRobots are wonderful creations. They can do difficult and dangerous work. Robots work in factories assembling products. They work faster and more accurately than humans. Robots explore dangerous places where humans cannot go. They defuse bombs and clean up nuclear accidents. In hospitals surgical robots assist doctors. In homes robot vacuum cleaners clean floors automatically. Robots are even being sent to other planets.\n\nPrinting press and books have spread knowledge. Earlier books were copied by hand which was very slow. Now millions of books are printed quickly. Knowledge is preserved in books. Libraries contain vast amounts of information. Anyone can access this knowledge. Education has become widespread because of printed books. Newspapers keep us informed about daily events. Magazines provide entertainment and information.\n\nPhotography and cameras have captured moments. We can preserve memories in photographs. Family photos remind us of happy times. Video cameras record moving pictures. We can watch recorded events again and again. Cameras in phones make photography accessible to everyone. Security cameras help prevent crimes. Satellite cameras monitor Earth from space.\n\nHowever modern science also has some negative effects that we must be careful about. Nuclear weapons can destroy entire cities. They pose great danger to humanity. Wars using modern weapons kill millions. Chemical and biological weapons are terrible. Pollution from factories harms our environment. Air and water pollution cause health problems. Global warming is melting ice caps and changing climate. Excessive use of chemicals damages soil and crops.\n\nToo much technology makes people lazy and dependent. People do less physical work. This causes health problems like obesity. Children spend too much time on phones and computers. They do not play outdoors. Their eyesight becomes weak. Excessive screen time affects mental health. Social media addiction is a growing problem. People become isolated from real human connections.\n\nDespite these drawbacks the benefits of science far outweigh the problems. Science itself is not bad. It is how we use it that matters. We should use science for good purposes only. We should not misuse scientific knowledge. Nuclear energy can provide electricity or destroy cities. It depends on our choice. We must use technology responsibly and ethically.\n\nStudents should study science seriously. Science subjects should be given importance in schools. Our future depends on scientific advancement. Countries that invest in science and technology progress faster. We need more scientists, engineers, and researchers. Young people should pursue careers in science. They should create new inventions that help humanity.\n\nWe should be grateful to scientists for their great inventions. Scientists work day and night doing research. They face failures but never give up. Their dedication has given us all these wonders. We should respect and honor them. Famous scientists like Einstein, Newton, and Edison changed the world with their discoveries. We should follow their example.\n\nModern science will continue bringing more wonders in future. Every day new inventions are being made. Artificial intelligence is advancing rapidly. Self-driving cars are being developed. Scientists are finding cures for more diseases. New sources of clean energy are being discovered. The future looks bright with scientific progress.\n\nIn conclusion modern science has made life wonderful. It has given us comfort, knowledge, and power. We should embrace science while being careful about its misuse. We should use scientific gifts wisely and responsibly. We should work for scientific progress that benefits all humanity. Science is indeed a great blessing if we use it properly. Let us thank Allah for giving humans the intelligence to create these wonders.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1379
  },
  {
    "id": "easy_newspaper",
    "title": "Newspaper",
    "template": "Newspaper\n\nA newspaper is one of the most important things in modern life. It is a printed publication that comes out every day. Newspapers have been part of our lives for many years. They bring us news and information from around the world. Reading newspaper is a very good habit. Every educated and aware person should read newspaper daily. It keeps us connected with what is happening in our country and the world.\n\nA newspaper is like a storehouse of knowledge and information. It contains many different types of content. The front page has the most important and breaking news. It tells about major events happening nationally and internationally. There is news about politics and government. We learn what our leaders are doing. We know about new policies and laws. There is news about our Prime Minister and other important officials.\n\nSports news is very popular among readers. People love to read about cricket matches. Bangladesh cricket team's performance is followed keenly. Football news from English Premier League and World Cup attracts readers. Results of matches and player statistics are published. Sports pages also cover other games like tennis, badminton, and athletics. Young people especially enjoy the sports section.\n\nNewspapers have entertainment pages too. They tell about movies and television shows. Information about actors and actresses is given. Film reviews help people decide which movies to watch. Celebrity news and gossip are also included. Some newspapers have special entertainment supplements on weekends. These are very popular with readers who want light reading.\n\nBusiness sections provide important economic information. They give news about stock markets and share prices. Information about banks and financial institutions is published. Business people read these pages to make investment decisions. Economic policies of government are discussed. Import and export data is provided. This section helps understand the economy of our country.\n\nEducational news is valuable for students. Information about exam results is published. Notices about admissions in schools and colleges are given. Scholarship opportunities are announced. Students find information about coaching centers and courses. Job notifications and career guidance are also included. Many students look for job advertisements in newspapers.\n\nNewspapers have special pages for different interests. Some have science and technology sections. They inform about new inventions and discoveries. Health pages give medical advice and information about diseases. Many newspapers have children's sections with stories and puzzles. These help develop reading habits in children. Some newspapers publish literary pages with poems and short stories.\n\nAdvertisements are an important part of newspapers. Companies advertise their products and services. People advertise to buy or sell houses, cars, and other items. Matrimonial advertisements help people find marriage partners. Job advertisements notify about employment opportunities. Many people read newspapers specifically for advertisements. Classified ads section is very useful for finding various services.\n\nReading newspaper regularly makes us knowledgeable and aware. We learn what is happening around us. We understand our country and its problems better. We know about important decisions and their effects on us. We learn about other countries and international relations. This knowledge helps us become informed citizens. We can discuss current affairs intelligently with others. Our general knowledge improves greatly through newspaper reading.\n\nNewspapers improve our language skills significantly. We learn new words and their correct usage. Our vocabulary expands. We see how sentences are constructed properly. This helps improve our writing ability. Students benefit immensely from reading newspapers. Their English becomes better. They can write essays and compositions more easily. Teachers always advise students to read newspapers daily for language improvement.\n\nNewspapers play a very important role in democracy. They inform citizens about government actions. They report both good and bad things honestly. Good newspapers criticize wrong policies and corruption. They support good causes and movements. They work as the voice of common people. They highlight social problems that need attention. They create awareness about important issues. Press freedom is essential for a healthy democracy. Journalists risk their lives to bring us truth.\n\nReading newspaper is part of many people's daily routine. Morning is the best time to read newspaper. Many people read it with their breakfast. It gives a good start to the day. We feel updated and ready to face the world. Some people read newspaper during their commute to work. Office workers often read newspaper during breaks. Old retired people have plenty of time. They read newspaper thoroughly from front to back.\n\nNowadays online newspapers are also available. We can read them on computers and mobile phones. This is very convenient for busy people. Online newspapers are updated constantly throughout the day. We get breaking news immediately. We can read newspapers from different countries online. Videos and interactive content make online news more engaging. Young people especially prefer reading news online.\n\nHowever printed newspapers still have their own special charm and importance. The feeling of holding paper and turning pages is different. We can read printed newspapers anywhere without electricity or internet. We can cut and save important articles. Many older people are not comfortable with technology. They prefer traditional printed newspapers. Libraries and offices keep newspaper archives for reference.\n\nNewspapers must maintain high standards of journalism. They should verify facts before publishing. Fake news and rumors should not be spread. Good newspapers employ trained journalists. They have editors who check all content carefully. Responsible journalism builds public trust. Unfortunately some newspapers publish sensational news to increase sales. They focus on scandals and controversy. This is not good journalism. Readers should choose quality newspapers that maintain ethical standards.\n\nThe newspaper industry provides employment to many people. Journalists, editors, photographers, and designers work for newspapers. Printers operate printing presses. Distribution networks employ thousands. Newspaper vendors sell papers at streets and stations. It is an important sector of the economy. However newspapers face challenges from digital media. Many young people prefer getting news online. Newspapers must adapt to changing times to survive.\n\nNewspaper reading has many benefits but we should be critical readers. Not everything printed is absolutely true. We should verify important information from multiple sources. We should not believe everything blindly. Different newspapers may have different political views. They may present news with bias. We should read with open mind and form our own opinions. We should distinguish between news and editorial opinions.\n\nEvery student should develop the regular habit of reading newspaper. It should become part of daily routine like eating breakfast. Start with reading headlines and small articles. Gradually read more detailed news. Choose a good quality newspaper known for honest reporting. Read at least for fifteen minutes daily. This small habit will bring great benefits in life. Your knowledge will increase. Your language will improve. You will become an aware and responsible citizen.\n\nIn conclusion newspapers are extremely important for society. They inform, educate, and entertain us. They connect us with the world. They help democracy function properly. Reading newspaper makes us intelligent and aware. It is essential for students' academic and personal development. We should make newspaper reading a daily habit. In this digital age newspapers still remain relevant and valuable. Let us respect and support good journalism. An informed society is a strong society. Newspaper reading contributes to building such a society.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1195
  },
  {
    "id": "easy_student_life",
    "title": "Student Life",
    "template": "Student Life\n\nStudent life is the most important and golden period of our entire life. It is the time of learning, growing, and building our future. This phase of life shapes our character and determines our success. Student life begins when we start school and continues until we finish our education. These years are precious and should be used wisely. What we do during student life affects our whole life.\n\nStudent life is truly the foundation of our future. Just like a strong foundation is needed to build a tall building, good student life is needed to build a successful life. During these years we learn knowledge and skills. We develop our personality and character. We make habits that stay with us forever. Students are the future citizens of the nation. The progress and development of any country depend on its students. If students are good the country will prosper. If students are careless the nation will suffer.\n\nThe primary and most important duty of a student is to study sincerely. Education is the main purpose of student life. Students must take their studies seriously. They should attend school or college regularly. Regular attendance is very important. Missing classes means missing knowledge. Students should reach school on time. Being punctual is a good habit. They should sit quietly in class and pay full attention to teachers. Listening carefully helps understand lessons better.\n\nStudents should complete their homework and assignments properly and on time. Homework is given to practice what is taught in class. It strengthens our understanding. Copying homework from others is wrong and harmful. Students should do their own work honestly. They should read their textbooks regularly. Reading only before exams is not enough. Daily reading helps retain information better. Students should also read books beyond textbooks. Extra reading expands knowledge and improves thinking ability.\n\nAsking questions is very important in student life. If students do not understand something they should ask teachers. Good teachers always welcome questions. There is no shame in not knowing. The shame is in not trying to learn. Students should clear all their doubts immediately. Unresolved doubts pile up and create problems later. Revision is also crucial. Students should revise lessons regularly. This helps remember things for long time.\n\nBut student life is not only about books and studies. It is also about building character and values. Students should learn to be honest and truthful. Honesty is the foundation of good character. Students should never lie or cheat. Cheating in exams may give temporary success but it does not give real knowledge. Success achieved through dishonesty does not last. Students should develop the habit of hard work. There are no shortcuts to real success. Only sincere effort brings lasting achievement.\n\nRespecting teachers is very important. Teachers are like our second parents. They guide us and teach us. They care about our future. Without good teachers we cannot learn properly. Students should listen to teachers respectfully. They should follow teachers' advice and instructions. Teachers have experience and wisdom. Their guidance is valuable. Students should also respect their parents. Parents work very hard to give us education. They sacrifice many things for our future. Making parents proud should be every student's goal.\n\nDiscipline is the key to success in student life. Students must maintain discipline in everything. They should follow school rules strictly. They should wear proper uniform. They should keep themselves neat and clean. Their behavior should be polite and gentle. Students should not fight or quarrel. They should not use bad words. Good behavior creates a good impression. Discipline in daily routine is also important. Students should have fixed time for study, play, and rest. Following a timetable helps manage time properly.\n\nFriendship is an important part of student life. Students make many friends during school and college years. Good friends make student life enjoyable and memorable. Students should choose their friends carefully. Good company brings good influence. Friends should help each other in studies. They should encourage good habits. However students must avoid bad company. Bad friends can ruin our life completely. They lead us to wrong paths. Smoking, drugs, and other bad habits often start through bad friends. Students should stay far away from such things.\n\nPhysical health is equally important as studies. A healthy body holds a healthy mind. Students should play outdoor games regularly. Games and sports keep body fit and mind fresh. They teach teamwork and sportsmanship. Students should not study continuously for hours. They need physical activity too. Playing in fresh air is very beneficial. Students should eat healthy food. Junk food harms health. Proper sleep is also necessary. Growing students need at least eight hours of sleep. Good sleep improves concentration and memory.\n\nStudent life faces many modern challenges. Technology has brought both benefits and problems. Mobile phones and internet are useful for learning but can also be distracting. Many students waste hours on social media, video games, and chatting. This screen addiction is very harmful. It affects studies, health, and relationships. Students should use technology wisely and in limit. They should use phones for learning not for endless entertainment. Parents and teachers should monitor students' phone usage.\n\nParticipating in extracurricular activities is beneficial for students. Cultural programs, debates, and competitions help develop confidence. They improve speaking and presentation skills. Students learn to work in teams. These activities make student life colorful and interesting. Sports competitions teach us to accept both victory and defeat gracefully. Annual functions and celebrations create happy memories. However extracurricular activities should not interfere with studies. Balance is important.\n\nStudents should learn to love their country. Patriotism is a noble quality. Students are future citizens who will lead the nation. They should respect our national flag, anthem, and symbols. They should know our history and freedom struggle. Students should follow rules and laws. They should not damage public property. They should keep their surroundings clean. Students should participate in social service activities. Helping poor and needy people develops empathy and kindness.\n\nTime management is a crucial skill for students. Student life is busy with studies, homework, projects, and activities. Managing time properly helps complete everything efficiently. Students should make a daily schedule. They should allocate specific time for each task. Wasting time brings problems later. Procrastination is very bad. Students often postpone work for later. Then they face pressure when deadlines approach. Completing work on time reduces stress.\n\nExam time is challenging for students. Some students study throughout the year. For them exams are not stressful. But students who study only during exams face problems. Last minute cramming does not work well. Students should prepare steadily through the year. During exams they should revise regularly. They should practice writing answers. Good sleep before exam is important. Tension and anxiety should be avoided. Confidence comes from proper preparation.\n\nFailure is part of learning. Not every student always succeeds. Sometimes we fail in exams or competitions. This should not discourage us. Failure teaches important lessons. It shows our weak points. We should learn from failures and improve. Many great people failed multiple times before achieving success. Thomas Edison failed thousands of times. But he never gave up. His persistence led to great inventions. Students should develop such determination.\n\nStudent life prepares us for adult life. The habits we form now stay with us forever. Students who work hard become successful adults. Those who waste student life suffer throughout life. These years never come back. Once lost they cannot be recovered. We should realize the importance of student life while we are students. Many people regret after wasting their student days. We should not make this mistake.\n\nParents and teachers play important roles in shaping student life. They should guide students properly. They should encourage good habits. They should provide proper environment for studies. But ultimately students themselves are responsible. They must understand their duties. They must work sincerely. Nobody else can study for us. Our future is in our own hands.\n\nEvery student should remember that knowledge is power. Education opens doors of opportunity. It helps us achieve our dreams. It makes us independent and confident. Education not only gives us jobs but also makes us better human beings. Educated people serve society better. They understand their responsibilities. They can distinguish right from wrong. They can solve problems intelligently.\n\nStudent life is indeed a blessing. Not everyone gets opportunity to study. In many poor families children work instead of going to school. We are fortunate to get education. We should value this opportunity. We should make the best use of student life. We should study sincerely, behave properly, maintain health, and build character. Let us promise to become good students and make our parents, teachers, and nation proud. Student life is preparation for life. Let us prepare ourselves well.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1464
  },
  {
    "id": "easy_physical_exercise",
    "title": "Physical Exercise",
    "template": "Physical Exercise\n\nPhysical exercise is essential for good health and fitness. It means moving our body in various ways to keep it strong and active. Exercise includes all activities that make our muscles work and our heart beat faster. Walking, running, swimming, cycling, and playing sports are all forms of exercise. Even simple activities like climbing stairs or doing household work count as exercise. Regular physical exercise is one of the best things we can do for our health.\n\nPhysical exercise is extremely important for everyone regardless of age. It is especially crucial for students and young people. In today's modern world many people live inactive lifestyles. They sit for long hours studying or working. They use cars and elevators instead of walking. They watch television and use phones for entertainment. This lack of physical activity is very harmful. It leads to many health problems. Our body is designed to move. When we don't move enough our body becomes weak and sick.\n\nRegular exercise keeps our body healthy and strong. It makes our muscles powerful and our bones stronger. When we exercise our muscles contract and relax repeatedly. This makes them grow bigger and stronger. Strong muscles help us do daily tasks easily. Exercise also strengthens our bones. This prevents bone diseases in old age. It improves our flexibility. Our joints remain movable and we can bend and stretch easily. Without exercise our body becomes stiff and rigid.\n\nExercise is excellent for our heart. The heart is a muscle that pumps blood throughout our body. When we exercise our heart beats faster. It pumps more blood. This makes the heart muscle stronger. A strong heart works more efficiently. It reduces risk of heart diseases. Exercise also improves blood circulation. Blood reaches all parts of body properly. This ensures all organs get enough oxygen and nutrients. Good circulation keeps us energetic and active.\n\nExercise helps in proper digestion. When we move our body the digestive system works better. Food is digested properly. We do not suffer from constipation or stomach problems. Exercise increases our appetite. We feel hungry and eat well. It helps our body absorb nutrients from food efficiently. People who exercise regularly rarely have digestive problems.\n\nPhysical exercise is amazing for mental health too. It is not just about body fitness. Exercise makes our mind fresh and sharp. When we exercise our brain releases special chemicals called endorphins. These chemicals make us feel happy and relaxed. Exercise reduces stress and tension. After a tiring day of study or work, exercise refreshes our mind. It helps us forget our worries. We feel peaceful and calm.\n\nExercise improves our concentration and memory. Students who exercise regularly can focus better in class. They remember lessons more easily. Their academic performance improves. Exercise increases blood flow to brain. This provides more oxygen to brain cells. Brain functions better with good oxygen supply. That is why exercise makes us mentally sharp. It helps us think clearly and make better decisions.\n\nExercise helps us sleep better. People who exercise regularly sleep peacefully at night. Their sleep quality is much better. Good sleep is essential for health. During sleep our body repairs itself and brain processes information learned during day. Without proper sleep we feel tired and irritable. Exercise tires our body in a good way. It makes us naturally sleepy at night.\n\nRegular physical activity helps maintain healthy body weight. Obesity is a growing problem nowadays. Many children and adults are overweight. This happens because of eating too much and moving too little. Exercise burns calories. When we exercise our body uses stored fat for energy. This helps reduce weight. Exercise along with healthy diet keeps us fit. It prevents obesity and related diseases like diabetes.\n\nThere are many different types of exercises. Some are simple while others are more intense. Walking is the simplest and most accessible exercise. Everyone can walk. We do not need any equipment or special place. Walking for thirty minutes daily is very beneficial. It is suitable for all ages. Even old people and sick people can walk slowly. Morning walk in fresh air is especially good.\n\nRunning and jogging are more intense than walking. They burn more calories and make us fit quickly. Young people can run or jog regularly. It strengthens legs and improves stamina. However we should start slowly and gradually increase speed and distance. Running on soft ground like grass is better than hard surfaces.\n\nSwimming is called a complete exercise. It exercises almost all body parts simultaneously. Arms, legs, and core muscles all work while swimming. It is also gentle on joints. Swimming is refreshing and enjoyable especially in hot weather. Children should learn swimming. It is a valuable life skill and excellent exercise.\n\nCycling is another wonderful exercise. It strengthens leg muscles and improves stamina. Cycling to school or nearby places is good for health and environment. It reduces pollution. Many people enjoy cycling in parks or countryside. It is fun and healthy.\n\nPlaying outdoor games is the best exercise for children and students. Football, cricket, volleyball, basketball, and badminton are excellent. These games are fun and competitive. We enjoy while exercising. Games teach teamwork and sportsmanship. They build character along with fitness. Schools should have compulsory sports periods. Students should play daily instead of staying indoors.\n\nYoga is an ancient Indian form of exercise. It involves various body postures and breathing techniques. Yoga improves flexibility and balance. It calms the mind and reduces stress. Many people practice yoga for physical and mental wellness. It is suitable for all ages. Even old people can do gentle yoga.\n\nGymnastics and aerobics are structured exercise programs. They involve specific movements performed rhythmically. Many people attend gym classes. Trainers guide them through exercises. Gym equipment helps exercise different muscles. However gym membership can be expensive. Simple exercises at home work equally well.\n\nWe should exercise regularly to get maximum benefits. Exercising once a week is not enough. We should make it a daily habit. At least thirty minutes of moderate exercise daily is recommended. We can split it into smaller sessions if needed. Morning is generally the best time for exercise. Air is fresh and mind is clear. However evening exercise is also good. We should not exercise immediately after eating. Give body at least one hour to digest food.\n\nWe should start exercise gradually. Suddenly doing intense exercise can cause injury. Begin with light exercises and slowly increase intensity. If we feel pain or discomfort we should stop and rest. Warming up before exercise is important. Do light stretching to prepare muscles. Cooling down after exercise is also necessary. Drink plenty of water during and after exercise. Body loses water through sweat and needs replacement.\n\nWe should wear comfortable clothes for exercise. Tight clothes restrict movement. Proper shoes are important especially for running. Good shoes protect our feet and knees. Exercise in safe open spaces. Busy roads are dangerous. Parks and playgrounds are ideal.\n\nHowever we should not over-exercise. Too much exercise can harm body. Everything should be in moderation. Some people become obsessed with exercise. They exercise for hours damaging their muscles and joints. Listen to your body. If feeling very tired take rest. Balance is key to healthy life.\n\nUnfortunately modern children are exercising less. They spend hours on phones, computers, and video games. They prefer indoor entertainment over outdoor play. Parents should encourage children to play outside. Limit screen time strictly. Take children to parks. Play with them. Set good example by exercising yourself.\n\nA famous saying states sound mind lives in sound body. This is absolutely true. We cannot have healthy mind without healthy body. Exercise creates that healthy body. Successful people understand importance of fitness. They take out time for exercise despite busy schedules. They know that health is real wealth. Without health we cannot enjoy anything in life.\n\nSchools should make physical education compulsory. Every day should have at least one period for sports or exercise. Unfortunately many schools neglect physical education. They focus only on academic studies. This is wrong. Students need physical activity for overall development. Government should ensure all schools have proper playgrounds and sports facilities.\n\nIn conclusion physical exercise is absolutely essential for healthy life. It benefits our body, mind, and overall wellbeing. It prevents diseases, improves mood, increases energy, and helps us live longer. We should make exercise a regular part of daily routine. Just thirty minutes daily can make huge difference. Let us all promise to exercise regularly. Let us choose active lifestyle over sedentary one. Health is our greatest treasure and exercise is key to maintaining it. Start exercising today for better and happier tomorrow.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1442
  },
  {
    "id": "easy_duties_to_parents",
    "title": "Duties to Parents",
    "template": "Duties to Parents\n\nParents are the most precious and important people in our life. They are our first teachers, protectors, and true well-wishers. Allah has given us many blessings but parents are among the greatest. They gave us birth and brought us into this beautiful world. Without parents we would not exist. We owe our entire existence to them. Therefore it is our sacred duty to love, respect, and serve them throughout our life.\n\nRespecting and honoring parents is commanded by Allah Himself. In the Holy Quran Allah has mentioned the rights of parents many times. After worshipping Allah the next most important duty is being good to parents. Prophet Muhammad peace be upon him taught us to treat parents with utmost kindness and respect. He said Paradise lies under the feet of mothers. This shows the extremely high status Islam gives to parents. In every religion and culture throughout history parents have been honored and respected. This is a universal human value.\n\nParents sacrifice everything for their children. From the moment we are conceived in our mother's womb, parents start sacrificing for us. Mother carries us for nine months bearing all discomfort and pain. Father works hard to provide for the family. When we are born they dedicate their entire life to raising us. Day and night they work tirelessly for our wellbeing and happiness.\n\nParents work extremely hard to fulfill all our needs. They provide us with food, clothes, shelter, and every comfort. They do not eat until we have eaten. They do not sleep peacefully until we are comfortable. They spend their money on us rather than on themselves. They buy us nice clothes, toys, and everything we desire. Education is very expensive today but parents manage somehow. They pay school fees, buy books and supplies. They may have to sacrifice their own wishes but they never compromise on our education.\n\nWhen we are sick parents take care of us day and night without rest. Mother stays awake all night if we have fever. She does not care about her own tiredness. Father rushes us to hospital and gets the best treatment. They worry about our health more than their own. When we are in pain they suffer more than us. Their love is truly unconditional and selfless. They never expect anything in return for all they do.\n\nParents constantly worry about our future. They always think about our wellbeing. They pray for our success and happiness every day. Their prayers are very powerful. They want us to have better life than they had. They want us to avoid the struggles they faced. All their hopes and dreams revolve around us. They face many difficulties in life but never complain. They silently bear all hardships to keep us happy.\n\nSuch immense love and sacrifice deserve our deepest respect and gratitude. We can never truly repay what parents have done for us. Even if we serve them for our entire life it would not equal what they have done. However we must try our best to fulfill our duties towards them.\n\nOur first duty is to obey and respect our parents. We should listen carefully to their advice and follow it. They have much more experience and wisdom than us. They have seen life. They know what is good for us and what is harmful. Their guidance comes from genuine concern for us. We should never disobey them or argue with them disrespectfully. Even if we disagree with something we should express it politely.\n\nWe must never hurt our parents with harsh words or bad behavior. Sharp words hurt more than physical pain. Speaking rudely to parents is a great sin. We should always talk to them gently and politely. We should control our anger and never raise our voice at them. Their feelings are very delicate. They get hurt easily by our harsh words. We should be careful about what we say to them.\n\nWe should help our parents in household work. We should not create extra burden for them. As they grow older they become physically weak. Their energy decreases. We should take over their responsibilities gradually. We should do shopping, cleaning, and other heavy work. We should not let them overwork. When mother cooks we should help her. When father needs something we should get it for him. Small acts of service make them very happy.\n\nWe must take care of our elderly parents. As parents age they need more care and attention. Their health deteriorates. They may become sick often. We should attend to their medical needs. Take them to doctors regularly. Ensure they take medicines on time. Keep them comfortable. In old age parents need emotional support even more than physical care. They feel lonely and neglected. We should spend quality time with them. Talk to them. Listen to their stories patiently even if repeated. Make them feel valued and important.\n\nWe should never send our old parents to old homes. This is very cruel and sinful. Our home is their home. They raised us in this house. They have every right to live here. How can we throw them out when they become old and weak? They took care of us when we were helpless babies. Now it is our turn to care for them. Keeping parents at home and serving them is our religious and moral duty.\n\nWe must study hard and succeed in life to make our parents proud. Our success is the greatest reward they can receive. When we achieve something their faces glow with happiness and pride. All their years of hard work and sacrifice become worthwhile. They feel their efforts were not wasted. Our failure disappoints them deeply. Therefore we should work hard in studies and career.\n\nWhen we start earning we should share generously with our parents. Whatever we have is because of them. They spent on us without counting. Now we should spend on them happily. Buy them gifts. Fulfill their wishes. If they want to visit someplace take them. Give them money to spend. Make their life comfortable. Never refuse when they ask for something. Never complain about spending on them.\n\nWe should celebrate special days with parents. Celebrate their birthdays and wedding anniversaries. Make these occasions memorable for them. These small gestures bring immense joy. Surprise them with gifts and special meals. Invite family and make them feel special. Such moments become precious memories.\n\nWe must never forget their sacrifices even after becoming successful and wealthy. Success should not make us arrogant. We should remain humble and grateful. Some people forget their parents after achieving success. They feel ashamed of their simple parents. This is terrible behavior. Our success is built on their sacrifices. We should acknowledge this always.\n\nWe should always seek our parents' blessings and prayers. Their prayers have special acceptance with Allah. A parent's blessing brings success and prosperity. On the other hand a parent's curse brings destruction. Before starting any important work seek their blessings. Their happiness ensures our success.\n\nWe must teach our children to respect their grandparents. Children learn by watching us. If they see us serving our parents they will learn to serve us when we become old. If we neglect our parents our children will treat us the same way. Good values must pass to next generation. Family traditions of respect should continue.\n\nDisrespecting parents is among the gravest sins. A person who hurts his parents cannot succeed in life. He loses blessings and faces problems. Allah does not accept the prayers of someone who disobeys parents. Paradise is forbidden for those who are cruel to parents. On Judgment Day Allah will ask about how we treated our parents. We must be able to answer positively.\n\nThe famous hadith states that Paradise lies under the feet of mothers. This means serving mother leads to Paradise. Another hadith says pleasing parents means pleasing Allah and angering parents means angering Allah. These teachings show the supreme importance of parents in Islam.\n\nIn conclusion our duties towards parents are numerous and important. We must love them unconditionally. Respect them deeply. Obey them willingly. Serve them happily. Care for them tenderly. Support them financially. Spend time with them. Never hurt them. Always make them proud. This is what Islam teaches. This is what humanity demands. This is what conscience dictates. Let us all promise today that we will fulfill our duties towards our dear parents. They deserve all our love, respect, and service. May Allah help us become better children and may He grant our parents long, healthy, and happy lives.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1432
  },
  {
    "id": "easy_digital_bangladesh",
    "title": "Digital Bangladesh",
    "template": "Digital Bangladesh\n\nDigital Bangladesh is an ambitious vision and development goal for our country. It means using modern digital technology and information technology in every sector of national life. The concept aims to transform Bangladesh into a knowledge-based society and digital economy. The government wants to modernize Bangladesh by using computers, internet, and digital services everywhere. This technological transformation will help make our country developed and prosperous.\n\nThe journey towards Digital Bangladesh officially started around 2009. The government declared it as a national vision and priority. Since then remarkable progress has been made. Now more than a decade later we can see significant changes happening all around us. Digital technology is slowly becoming part of our daily life.\n\nThe government is working on numerous digital projects and initiatives. One major focus is spreading internet connectivity across the entire country. Previously internet was available only in big cities. Now even remote villages have internet access. Mobile phone networks have expanded dramatically. Almost every adult person now has a mobile phone. Smartphones are becoming increasingly common and affordable. Through these phones people can easily access information and services from anywhere.\n\nE-governance is being implemented systematically. This means government services are being digitized and made available online. Many government offices now provide online services. People can apply for various documents through websites without visiting offices. Birth certificates can be obtained online. Passport applications are processed digitally. National ID cards are issued electronically. Land records are being digitized. This digital system saves enormous time for citizens. Previously people had to stand in long queues for hours. They had to visit offices multiple times. There was also corruption and delays. Now everything can be done from home using computer or mobile. This reduces corruption because human interaction is minimized.\n\nThe education sector is experiencing digital revolution. Many schools and colleges now have computer laboratories. Students are learning computer skills and programming from early age. Digital content like videos and animations are used for teaching complex subjects. This makes learning more interesting and effective. Interactive whiteboards are replacing traditional blackboards in many schools. During the COVID pandemic online classes became very important. Students attended classes from home through video calls. Teachers conducted lessons using various online platforms. Many educational websites offer free online courses. Students can learn anything from world-class teachers through internet. This is truly revolutionizing education in Bangladesh.\n\nHealthcare services are also improving through digitization. Hospitals maintain digital medical records of patients. All test reports and medical history are stored electronically. This helps doctors make better decisions. Telemedicine services allow doctors to consult patients remotely through video calls. This is extremely helpful for people living in remote areas. They can get expert medical advice without traveling to cities. Online pharmacies deliver medicines to homes. Health apps provide information about diseases and medications.\n\nBusiness and commerce have gone substantially digital. E-commerce or online shopping has become very popular. People buy clothes, electronics, books, and even groceries online. Items are delivered to their doorstep. Digital payment systems have revolutionized transactions. Mobile banking services like Bkash, Nagad, and Rocket are used by millions. People transfer money, pay bills, and shop using their mobile phones. Digital payment is safe, fast, and convenient. It also promotes transparency in financial transactions.\n\nThe agriculture sector is benefiting from digital technology too. Farmers receive weather forecasts and farming advice through mobile phones. They learn about modern farming techniques through apps. They can check market prices of crops before selling. This helps them get fair prices. Agricultural helplines provide instant guidance. Digital platforms connect farmers directly with buyers eliminating middlemen.\n\nDigital Bangladesh initiative has created massive employment opportunities. The information technology sector is growing rapidly. Thousands of young people work in software companies. They develop apps, websites, and digital solutions. Bangladesh has become a hub for IT outsourcing. Many Bangladeshi programmers work for foreign companies remotely. They earn valuable foreign currency. This contributes significantly to our economy. Freelancing through online platforms has become a popular career option. Young people provide various services to international clients from home.\n\nDigital Bangladesh brings numerous benefits to society. It saves precious time for everyone. Tasks that took days can now be completed in minutes. It saves money by reducing travel and other expenses. It makes life much easier and more convenient. It increases efficiency in all sectors. Government and private offices work faster and better. Digital systems reduce corruption because everything is documented and transparent. It creates employment for youth. It improves education and healthcare. It connects people across the country and world.\n\nHowever Digital Bangladesh also faces several challenges. Not everyone can use technology equally. Elderly people find digital devices and internet difficult to use. They need training and assistance. Poor people cannot afford smartphones and internet connections. There is digital divide between rich and poor. Internet speed and quality are not good everywhere. Rural areas often have slow and unreliable internet. Frequent power cuts create problems. Digital devices need electricity to function. Load shedding disrupts online work and studies.\n\nCybersecurity is an emerging concern. As more services go online cybercrime is increasing. Hackers try to steal personal information and money. People's bank accounts and social media are targeted. Many people fall victim to online fraud. There is need for strong cyber security measures and awareness. Laws against cybercrime need to be strengthened and enforced.\n\nThe government is working continuously to address these challenges. They are conducting training programs to teach people digital skills. They are improving internet infrastructure across the country. Fiber optic cables are being laid. More mobile towers are being erected. Internet speed is gradually increasing. More power plants are being built to ensure uninterrupted electricity supply. Laws and regulations for cybercrime are being formulated. Cyber security systems are being strengthened.\n\nFor Digital Bangladesh to succeed every citizen must participate and contribute. Students especially have crucial role to play. They are the future of the nation. They should learn technology seriously. Computer skills should be developed. Programming and coding should be learned. Students should use technology for learning not just entertainment. They should create digital content and solutions. Parents should support and encourage their children. They should provide necessary devices and internet access. Teachers should adopt digital teaching methods. They should use technology to make classes interesting.\n\nDigital literacy should be spread among all age groups. Community training centers should teach digital skills to adults and elderly people. Women should be encouraged to learn and use technology. This will empower them economically and socially.\n\nDigital Bangladesh is not just a government project. It is a national dream and collective responsibility. If we all work together this vision will definitely be achieved. Bangladesh will become a modern digitally advanced nation. We will compete successfully with developed countries. Our economy will grow stronger. Our people will live better quality lives. Services will be faster and more efficient. Corruption will decrease. Opportunities will increase.\n\nThe progress made so far gives us hope and confidence. Ten years ago we could not imagine such widespread use of technology. Today even villagers use smartphones and internet. Tomorrow we will achieve even more. Let us embrace digital technology enthusiastically. Let us learn and adapt. Let us support Digital Bangladesh vision. Together we will build a modern prosperous Bangladesh. Our future is digital and bright.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1214
  },
  {
    "id": "easy_patriotism",
    "title": "Patriotism",
    "template": "Patriotism\n\nPatriotism means deep love and devotion for one's country. It is one of the noblest human emotions. A patriot is someone who loves their motherland above everything else. True patriotism is not just about waving flags or singing songs. It is a feeling that comes from deep within the heart. It makes us proud of our national identity. It motivates us to work for our country's progress and welfare.\n\nEvery person should love their motherland. The country we are born in is like our mother. Just as we love our mother naturally we should love our country naturally. Bangladesh is our motherland. This beautiful land gave us birth and identity. We should feel proud to be Bangladeshi. Our country has given us everything we have.\n\nWe should love Bangladesh because it is our home. This is the land where we were born and raised. Our parents, family, and friends live here. Our childhood memories are connected to this soil. The rivers, fields, trees, and villages of Bangladesh are part of our identity. The green paddy fields and winding rivers make Bangladesh unique. The culture and traditions of Bangladesh shape who we are.\n\nThis land nourishes and sustains us. The fertile soil of Bangladesh produces rice, vegetables, and fruits that feed us. The rivers provide fish and water. The trees give us oxygen, shade, and fruits. The natural resources of our country support our lives. Everything we eat, drink, and breathe comes from this land. How can we not love the land that gives us life?\n\nWe should especially love Bangladesh because of our freedom fighters' great sacrifice. Our country was not always free. We were ruled by Pakistan until 1971. Our people were oppressed. Our language and culture were under attack. Then in 1971 we fought a glorious Liberation War. For nine long months our brave people fought against a powerful army. Three million people sacrificed their lives. Countless women lost their honor. The whole nation suffered unimaginable pain.\n\nOur freedom fighters gave up everything for this land. Young students left their studies. Farmers left their fields. Teachers, doctors, workers all joined the war. They fought with primitive weapons against modern army. Many died hungry. Many were tortured brutally. But they never gave up. Their only goal was to free their motherland. Finally on 16th December 1971 Bangladesh became independent.\n\nOur national flag is painted red and green with the blood of martyrs. The red circle represents the blood sacrificed. The green background symbolizes our green land. When we see our flag waving we should remember those who died for it. Our national anthem fills our heart with pride and emotion. It describes the beauty of our motherland. When we sing it we should feel connected to our roots.\n\nTrue patriotism is shown through actions not just words. Many people claim to love their country but their actions say otherwise. Real patriots demonstrate their love through daily behavior and choices. There are countless ways to show patriotism.\n\nFirst and foremost we should respect our country and never speak badly about it. Criticism should be constructive not destructive. We should acknowledge problems but also appreciate achievements. We should never insult our country in front of others especially foreigners. National pride should be maintained.\n\nFollowing rules and laws is basic patriotism. Every country has laws for the welfare of citizens. When we follow traffic rules we show patriotism. When we stand in queue we show discipline. Law-abiding citizens make the country strong. Breaking rules and taking shortcuts weakens the nation. We cannot claim to love our country while breaking its laws daily.\n\nPaying taxes honestly is patriotic duty. Taxes are used for development. They build roads, schools, and hospitals. They pay for police and military. Tax evasion is stealing from the nation. Honest taxpayers are true patriots. Similarly voting in elections is both right and duty. Democracy works when citizens participate. We should elect honest capable leaders.\n\nKeeping our country clean is important patriotism. We should not throw garbage on streets. Public places should be kept neat. Walls should not be defaced. Rivers should not be polluted. Cleanliness reflects national character. A patriot feels ashamed when the country is dirty. Planting trees and protecting environment shows love for motherland. This land will pass to our children. We must preserve it for them.\n\nDoing our work sincerely is patriotic contribution. Students should study diligently. Their education will benefit the nation. Workers should work honestly. Their productivity builds the economy. Farmers should grow good crops to feed the nation. Teachers should teach well to create educated citizens. Doctors should serve patients sincerely. Everyone has a role. When each person does their duty well the whole country progresses.\n\nOur country needs many things from its citizens. Bangladesh needs educated people. Every child should go to school. Educated citizens build strong nations. We should spread education especially among poor and rural people. Girls' education is particularly important. Educated mothers raise educated children.\n\nOur country needs good health services for all. Hospitals and clinics should reach every village. Healthcare should be affordable. Healthy citizens work better and live happier. We should maintain personal hygiene and public health.\n\nBangladesh needs employment for its youth. Millions of young people cannot find jobs. Unemployment creates frustration and social problems. We need industries and businesses to create jobs. Skilled workers are needed. Youth should learn trades and skills. Entrepreneurship should be encouraged.\n\nOur country desperately needs honest and capable leaders. Corruption is destroying Bangladesh. Dishonest leaders steal public money. They make wrong decisions for personal gain. We must elect good people. We should reject corrupt politicians. Young educated people should enter politics to reform the system.\n\nBangladesh needs unity above everything. We are divided by religion, region, and politics. These divisions weaken us. We must remember we are all Bangladeshi first. Whether Hindu or Muslim, from Dhaka or Chittagong, Awami League or BNP supporter - we share one motherland. Political differences should not create hatred. Religious diversity should be celebrated not fought over. Unity makes nations strong while division destroys them.\n\nWe should help each other as fellow citizens. Rich people should help poor. Educated should teach illiterate. Privileged should lift up underprivileged. When all citizens prosper together the nation prospers. Social inequality creates problems. We should work towards just and equal society.\n\nBangladesh needs development in all sectors. Infrastructure should improve. Roads, bridges, and ports need modernization. We should adopt new technologies. We must compete with other nations in global economy. Hard work and innovation will make Bangladesh prosperous.\n\nPatriotism does not mean hating other countries. True patriots respect all nations. We can love Bangladesh most while respecting India, Pakistan, and others. We should maintain good relationships with all countries. International friendship benefits everyone. Hatred and war destroy nations.\n\nTrue patriotism lies in action not empty words. Many people give patriotic speeches but do nothing. They throw garbage then talk about loving country. They break laws then sing national anthem. This is hypocrisy. Real patriots work quietly. They contribute through their behavior. They build the nation through daily good deeds.\n\nStudents are future patriots and custodians of Bangladesh. Schools must teach patriotism. National history especially Liberation War should be taught thoroughly. Children should know about Bangabandhu Sheikh Mujibur Rahman and other national heroes. They should learn about Language Movement martyrs. National days like Independence Day and Victory Day should be celebrated meaningfully. When young generation loves their country the future is secure.\n\nEvery Bangladeshi should promise to be a true patriot. We should love our motherland deeply. We should respect our flag and anthem. We should remember our martyrs with gratitude. We should work hard for national progress. We should follow laws and pay taxes. We should keep Bangladesh clean and green. We should vote wisely. We should help fellow citizens. We should spread education and healthcare. We should fight corruption. We should maintain unity.\n\nBangladesh is our beloved motherland. Our ancestors' blood is mixed in this soil. Our future generations will live here. We must protect and develop this precious land. True patriotism means dedicated service to the nation. Let us all be genuine patriots. Let us work together to make Bangladesh a developed, prosperous, and respected nation. Our love for Bangladesh should reflect in our every action. This is the meaning of true patriotism.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1387
  },
  {
    "id": "easy_uses_of_computer",
    "title": "Uses of Computer",
    "template": "Uses of Computer\n\nThe computer is one of the most important and revolutionary inventions of modern times. It has completely changed the way we live, work, and communicate. Today computers are found everywhere - in homes, offices, schools, hospitals, banks, and factories. Life without computers is now almost unimaginable. Computers have made our lives easier, faster, and more efficient.\n\nA computer is an electronic machine that can store, process, and retrieve information very quickly. It can perform millions of calculations in seconds without making any mistakes. Charles Babbage is called the father of computers. He designed the first mechanical computer in the 19th century. Since then computers have evolved tremendously. Today's computers are millions of times more powerful than early computers.\n\nComputers have countless uses in almost every field of life. In education computers have become essential tools. Students use computers to study, research, and complete assignments. Educational software makes learning fun and interactive. Students can watch educational videos and animations that explain difficult concepts clearly. Online classes allow students to learn from anywhere. During the COVID pandemic computers enabled education to continue through online classes. Many educational websites offer free courses on every subject. Students can learn anything they want through the internet. Computers help students prepare presentations and projects beautifully. They can type essays and reports neatly. Libraries use computers to manage books and help students find resources quickly.\n\nIn offices and businesses computers are absolutely necessary. Companies use computers for accounting, record keeping, and data management. Business communications happen through emails which are instant and free. Video conferencing allows people from different countries to meet virtually. This saves time and travel costs. Marketing and advertising are done through computers. Online shopping has become possible because of computers. Banks use computers to manage accounts and process transactions. ATM machines are actually computers that allow us to withdraw money anytime. Stock markets operate through computerized systems. Without computers modern business would be impossible.\n\nHospitals and medical facilities depend heavily on computers. Doctors use computers to diagnose diseases and plan treatments. Medical records are stored electronically making them easy to access and update. X-rays, CT scans, and MRI machines are all computerized. They help doctors see inside the body without surgery. Hospitals use computers to monitor patients' vital signs continuously. Medicines and treatments are researched using powerful computers. Surgeons sometimes use computer-guided robots to perform delicate operations. Computers have saved countless lives by making healthcare more accurate and efficient.\n\nScientists and researchers use supercomputers for complex calculations and simulations. Weather forecasting is done by computers that analyze huge amounts of data. Space exploration depends on computers to control rockets and satellites. Scientists studying climate change, diseases, and other problems use computers to process data and find solutions. New medicines and technologies are discovered with computer assistance.\n\nIn transportation computers play vital roles. Air traffic control systems use computers to track and guide airplanes safely. Modern cars have computers that control the engine and provide navigation. Train and bus schedules are managed by computers. Online ticket booking has made travel much more convenient. GPS navigation systems in phones and vehicles help us find directions easily.\n\nGovernments use computers to provide services to citizens. Birth certificates, passports, and national ID cards are processed through computer systems. Tax collection and management is computerized. Police use computers to maintain crime records and investigate cases. Digital Bangladesh initiative shows how computers are transforming government services.\n\nIn entertainment and communication computers have created new possibilities. We watch movies, listen to music, and play games on computers. Social media platforms connect billions of people worldwide. Video calls allow us to see and talk to family and friends far away. Photography and video editing are done on computers. Artists and designers use computers to create amazing digital art. Musicians compose and record music using computers.\n\nBanking has become much easier with computers. We can check our account balance, transfer money, and pay bills online from home. Mobile banking apps make financial transactions simple and quick. This saves time and eliminates the need to visit banks physically.\n\nComputers are used in agriculture too. Farmers get weather information and farming advice through computer systems. They can check market prices before selling crops. Modern farming equipment uses computers to plant and harvest more efficiently.\n\nHowever computers also have some negative effects. Spending too much time on computers can harm eyesight and cause back problems. Computer addiction affects many people especially youngsters. They waste hours playing games or browsing social media instead of studying or working. Cybercrime is a growing problem. Hackers steal money and personal information. Viruses and malware can damage computer systems. Children may access inappropriate content on the internet. Too much reliance on computers makes people lazy and reduces face-to-face human interaction.\n\nDespite these problems the benefits of computers far outweigh the negatives. We must use computers wisely and responsibly. Parents should monitor children's computer usage. Antivirus software should be installed to protect from threats. We should take regular breaks while using computers to protect our health.\n\nComputers have become indispensable in modern life. They have revolutionized every field. Future computers will be even more powerful and useful. Artificial intelligence and quantum computing will create new possibilities. Students should learn computer skills as they are essential for future careers. Bangladesh needs more computer education and IT development. Computers are not just machines - they are tools that empower us to achieve more, learn more, and connect more. Let us embrace computer technology while using it wisely for the benefit of humanity.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 922
  },
  {
    "id": "easy_eid_ul_fitr",
    "title": "Eid-ul-Fitr",
    "template": "Eid-ul-Fitr\n\nEid-ul-Fitr is the biggest and most joyous festival for Muslims around the world. It is celebrated after the holy month of Ramadan. The word Eid means festival or celebration. Fitr means breaking the fast. So Eid-ul-Fitr means the festival of breaking the fast. This day brings happiness, peace, and blessings to everyone.\n\nEid-ul-Fitr comes after thirty days of fasting during Ramadan. Throughout Ramadan Muslims fast from dawn to sunset. They do not eat or drink anything during daylight hours. They pray more, read the Quran, and try to become better people. Fasting teaches discipline, patience, and sympathy for poor people who go hungry. When Ramadan ends and the new moon is sighted, Eid-ul-Fitr begins. It falls on the first day of Shawwal month in the Islamic calendar.\n\nThe Eid day starts very early in the morning. Everyone wakes up early with excitement and happiness. They take a bath and wear new or best clothes. The whole family dresses up nicely. Children especially love wearing new clothes. Women and girls wear colorful dresses, bangles, and jewelry. Men wear panjabis, kurtas, or new shirts. Everyone looks beautiful and happy.\n\nBefore going to Eid prayer people eat something sweet. Traditionally they eat dates or sweet dishes. This breaks the long period of fasting that lasted a month. After eating they go to the mosque or Eidgah for special Eid prayer. The Eid prayer is performed in congregation. Thousands of people gather in open fields or large mosques. The sight of so many people praying together is very beautiful. Everyone stands shoulder to shoulder without any difference between rich and poor. This shows equality in Islam.\n\nThe Eid prayer is different from regular prayers. It includes extra takbirs and a special sermon called khutbah. The imam gives a speech about the importance of Eid, charity, and brotherhood. He reminds people to help the poor and maintain good relationships. After the prayer people hug each other and say Eid Mubarak which means blessed Eid. They embrace friends and strangers with love. Old enmities are forgotten. People forgive each other. This creates a wonderful atmosphere of peace and harmony.\n\nAfter prayer people visit the graves of their deceased relatives. They pray for the souls of departed family members. This is a solemn moment that reminds us about life and death. It teaches us to be humble and remember those who are no longer with us.\n\nThen the real celebration begins at home. Families prepare special delicious foods. Traditional dishes like semai, polao, korma, biriyani, and various meat dishes are cooked. Sweet dishes and desserts are prepared in every home. The smell of cooking fills neighborhoods. Mothers and sisters work hard in the kitchen to prepare the feast. The dining table is full of mouth-watering foods.\n\nFamily members and relatives gather together. They eat the special Eid meal together. The taste of Eid food is different from regular days. Everything seems more delicious. People enjoy eating and talking together. This strengthens family bonds. In our busy modern lives we often cannot spend time together. Eid brings the whole family under one roof.\n\nVisiting relatives and friends is an important part of Eid. People visit each other's homes throughout the day. They exchange greetings and gifts. Children are especially excited because they receive Eidi - money gifts from elders. Parents, grandparents, uncles, and aunts give Eidi to children. The children save this money or buy things they like. Receiving Eidi makes children extremely happy.\n\nPeople wear their best clothes and take photographs. Families take group photos to preserve memories. These photos remind us of happy times spent together. Young people meet friends and celebrate. Streets are full of people in festive clothes. Markets and parks become crowded. The whole atmosphere is filled with joy and excitement.\n\nCharity is very important on Eid. Before Eid prayer every capable Muslim must give Zakat-ul-Fitr. This is a special charity to help poor people celebrate Eid too. The money collected is distributed to needy families so they can buy food and clothes. Islam teaches that Eid happiness should be shared with everyone. Rich people should help poor people. This ensures that no one remains sad on Eid day.\n\nEid has great social and spiritual significance. It teaches us brotherhood and equality. On Eid everyone is equal before Allah. Rich and poor stand together in prayer. Eid removes differences and brings people closer. It creates love and harmony in society. People forget their problems and quarrels. They start fresh with clean hearts.\n\nEid also teaches us gratitude. We thank Allah for giving us strength to complete Ramadan fasting. We feel grateful for all His blessings - food, family, health, and happiness. This gratitude makes us humble and kind.\n\nFor children Eid is the most wonderful day of the year. They get new clothes, toys, and money. They meet cousins and play together. They eat delicious food and sweets. Streets have temporary stalls selling toys, balloons, and colorful items. Children buy these and enjoy themselves thoroughly. The joy on children's faces is the most beautiful sight of Eid.\n\nIn Bangladesh Eid-ul-Fitr is celebrated with great enthusiasm. Offices, schools, and businesses remain closed for three days. Many people travel to their village homes to celebrate with parents and extended family. Roads, trains, and buses become extremely crowded before Eid. This journey home is difficult but people happily bear the trouble to spend Eid with loved ones. Villages become very crowded and lively during Eid.\n\nEid also has some challenges. Shopping before Eid becomes very expensive. Prices of clothes, food, and other items increase. This creates problems for poor families. Traffic jams and accidents increase during Eid travel season. Some people spend beyond their means trying to celebrate lavishly. This is not wise. Eid should be celebrated simply and within budget.\n\nThe true spirit of Eid lies not in expensive clothes or food but in purity of heart, love for others, and gratitude to Allah. A simple celebration with family is better than extravagant display. We should remember poor people and share our happiness with them. We should forgive those who hurt us and ask forgiveness from those we hurt. We should strengthen relationships and spread peace.\n\nEid-ul-Fitr is indeed a blessed day that brings joy, peace, and spiritual renewal. It is a day to thank Allah, love family, help the poor, and celebrate life. Every Muslim waits eagerly for Eid throughout the year. The happiness and blessings of Eid remain in our hearts long after the day ends. May every Eid bring happiness, prosperity, and peace to everyone. Eid Mubarak!",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1096
  },
  {
    "id": "easy_honesty_best_policy",
    "title": "Honesty is the Best Policy",
    "template": "Honesty is the Best Policy\n\nHonesty means always telling the truth and being fair in all dealings. It means not lying, cheating, or stealing. An honest person says what is true even when it is difficult. Honest people are trusted and respected by everyone. The proverb 'Honesty is the best policy' means that being truthful and sincere is always the wisest choice in life. This is a golden principle that leads to success and peace.\n\nHonesty is one of the most important qualities a person can have. It is the foundation of good character. All other good qualities like trustworthiness, loyalty, and integrity are built on honesty. An honest person lives with dignity and self-respect. They can sleep peacefully at night because their conscience is clear. Dishonest people may gain temporary benefits but they lose peace of mind. They always fear being caught and exposed.\n\nIn everyday life honesty is tested in many situations. Students face honesty tests during exams. Some students copy from others or use unfair means. They may get good marks through cheating but this success is false. They do not learn anything. Their certificates become worthless. When they face real challenges in jobs they fail because they lack actual knowledge. On the other hand students who study honestly may score less sometimes but they gain real education and skills. Their success is genuine and lasting.\n\nBusinesspeople face honesty tests daily. Some sell fake or low-quality products. They cheat customers to make quick profits. Initially they may earn more money but customers lose trust when they discover the cheating. Word spreads and the business collapses. Honest businesspeople sell quality products at fair prices. They build good reputation. Customers trust them and remain loyal. Such businesses grow steadily and last for generations. Many famous companies succeeded because of honest practices.\n\nIn relationships honesty creates strong bonds. Friends who are honest with each other develop deep trust. They can share secrets knowing they will not be betrayed. Dishonest friends break trust and destroy friendships. In families honesty creates harmony. Children who are honest with parents feel free to discuss problems. Parents can guide them properly. When family members lie to each other misunderstandings grow and relationships suffer.\n\nIn professional life honesty is highly valued. Employers want honest employees who do not steal or lie. An honest worker may make mistakes but they admit them openly. This honesty is appreciated. They get opportunities to improve. Dishonest workers hide mistakes which cause bigger problems. They lose jobs when discovered. Many careers have been destroyed by single acts of dishonesty.\n\nHonesty in public life is crucial for society. When leaders and officials are honest the country prospers. Laws are applied fairly. Public money is spent properly on schools, hospitals, and roads. Citizens trust the government. Unfortunately when leaders are dishonest corruption spreads everywhere. Public funds are stolen. Projects remain incomplete. Poor people suffer. Society breaks down. Many countries remain poor because of dishonest leadership.\n\nHonesty sometimes seems difficult. Speaking truth may create immediate problems. A student who admits breaking something may get scolded. A worker who reports a mistake may face criticism. But these short-term difficulties are better than long-term consequences of lying. Once you tell one lie you need more lies to cover it. The web of lies grows complicated. Eventually truth comes out making the situation much worse. People who could have forgiven a mistake become angry about the lying.\n\nThere are countless real-life examples proving honesty is the best policy. History remembers honest people with respect. Hazrat Abu Bakr, Prophet Muhammad's companion, was called Al-Siddiq meaning the truthful one. His honesty made him beloved. Prophet Muhammad himself was known as Al-Amin meaning the trustworthy even before prophethood. People trusted him with their valuables. His honesty became a major reason why people accepted his message.\n\nAbraham Lincoln walked miles to return a few cents he had mistakenly overcharged a customer. This honesty made him Honest Abe and later President of America. Mahatma Gandhi always spoke truth no matter what consequences he faced. His truthfulness gave him moral authority that helped free India. These great people showed that honesty builds character and achieves great things.\n\nMany folk tales teach about honesty. The story of the boy who cried wolf shows how lying destroys trust. The boy repeatedly lied about wolves attacking. When a wolf really came nobody believed him. The moral is clear - liars are not believed even when they tell truth. Another story tells of a woodcutter who lost his axe in the river. When a spirit offered him a golden axe he honestly said it was not his. The spirit rewarded his honesty with both golden and iron axes. These stories teach children the value of honesty.\n\nDishonesty always leads to trouble eventually. A person who builds career on fake certificates gets caught someday. Students who always copy cannot perform in interviews or jobs. Businesses built on cheating eventually collapse. Dishonest politicians lose public support. The saying what goes around comes around proves true. People who cheat others eventually face similar treatment. While honest people enjoy respect and peace.\n\nParents must teach children to be honest from early age. When children lie parents should explain why it is wrong rather than just punishing. Children should see parents being honest in daily life. If children see parents lying or cheating they learn the same. Schools should emphasize honesty. Teachers should appreciate honest students even if they admit mistakes. Society should honor honest people. We should not admire those who become rich through dishonest means.\n\nHonesty also means admitting when we do not know something. Pretending to know everything and giving wrong information is dishonest. Honest people admit their limitations. This actually earns more respect than false claims. Honesty means giving people their due credit. Taking credit for others' work is dishonest and unfair.\n\nBeing honest sometimes requires courage. Standing up for truth when others are lying needs bravery. Refusing to join corrupt practices when everyone else does requires strength. But this courage defines character. History is made by courageous honest people not by convenient liars.\n\nIn conclusion honesty is indeed the best policy in every aspect of life. It may seem difficult sometimes but it always brings better results than dishonesty. Honest people sleep peacefully and live with dignity. They build strong relationships and successful careers. Society functions well when people are honest. Parents should teach children this virtue. Schools should promote it. Leaders should practice it. Each of us should commit to honesty in our daily lives. As the famous saying goes you can fool some people sometimes but you cannot fool all people all the time. Truth eventually prevails. Therefore being honest from the beginning is the wisest choice. Honesty truly is and always will be the best policy.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1132
  },
  {
    "id": "easy_independence_day",
    "title": "Independence Day (26th March)",
    "template": "Independence Day (26th March)\n\nThe 26th of March is the most important day in Bangladesh's history. It is our Independence Day. On this day in 1971 Bangladesh declared independence from Pakistan. This date marks the beginning of our Liberation War. Every year we celebrate this day with great respect and enthusiasm. It reminds us of the supreme sacrifice made by our brave freedom fighters.\n\nBangladesh was part of Pakistan from 1947 to 1971. We were called East Pakistan while the other part was West Pakistan. Though we were one country we were very different. We spoke Bangla while they spoke Urdu. We had our own culture and traditions. West Pakistan was far away separated by more than one thousand miles of Indian territory. Yet they ruled over us. They treated us unfairly in every way.\n\nWest Pakistani rulers discriminated against Bengalis systematically. Our Bangla language was disrespected. They wanted to impose Urdu on us. We were economically exploited. Though East Pakistan earned more foreign currency through jute exports the money was spent in West Pakistan. Our region remained poor while they developed. We had fewer schools, colleges, hospitals, and roads. Bengali people were not given important jobs in government and military. Political power remained with West Pakistan despite East Pakistan having larger population.\n\nWhen we protested against this injustice they oppressed us more. In 1952 they tried to make Urdu the only state language. Our students protested and several were killed on 21st February. This Language Movement showed Bengali nationalism was growing strong. Over the years our demand for rights increased. In 1970 general elections were held. Bangabandhu Sheikh Mujibur Rahman's Awami League won absolute majority. They won 160 out of 162 seats from East Pakistan. According to democratic rules they should have formed the government. But West Pakistani rulers refused to transfer power. This was completely unjust and unacceptable.\n\nBangabandhu called for non-cooperation movement against this injustice. The whole of East Pakistan stopped functioning. People followed Bangabandhu's directives not government orders. On 7th March 1971 Bangabandhu gave his historic speech at Ramna Race Course Dhaka. More than one million people gathered to hear him. He declared that Bengali people's struggle was now for independence and freedom. His thundering words inspired the entire nation. He said if needed people should fight with whatever they have. This speech is considered one of the greatest speeches in history. It united all Bengalis in the freedom struggle.\n\nWest Pakistani rulers decided to crush Bengali nationalism through military force. On the dark night of 25th March 1971 they launched Operation Searchlight. Pakistan Army attacked unarmed civilians brutally. They killed students, teachers, workers, and common people. Dhaka University was attacked. Many students and professors were murdered. The Army burned houses and killed thousands. It was genocide - planned systematic killing of Bengali people. The horror of that night cannot be described in words.\n\nBangabandhu was arrested that night but before arrest he declared Bangladesh's independence through wireless message. The declaration reached Bengali military officers and people. On 26th March the independence declaration was broadcast from Chittagong radio station. Major Ziaur Rahman read the declaration on behalf of Bangabandhu. He announced that Bangladesh was now independent. This declaration on 26th March 1971 officially started our Liberation War. The Pakistani flag came down and the red-green flag of Bangladesh went up.\n\nAfter the declaration Bengali people took up arms to fight for freedom. Students, farmers, workers, teachers - people from all walks of life became freedom fighters. The Pakistan Army was well-equipped with modern weapons. Our Mukti Bahini freedom fighters had limited weapons. But they had unbreakable determination and love for motherland. They fought with extraordinary bravery. Every Bengali became a fighter. Women supported the war effort. Even children helped freedom fighters with information and supplies.\n\nThe nine-month war was brutal. Pakistan Army committed terrible atrocities. They killed three million innocent people. They dishonored hundreds of thousands of women. They burned villages and destroyed properties. They targeted intellectuals - teachers, doctors, writers, journalists - killing our brightest minds. But Bengali people did not surrender. They fought back courageously. India supported Bangladesh by giving shelter to ten million refugees and finally joining the war militarily. Mukti Bahini and Indian forces together defeated Pakistan Army.\n\nOn 16th December 1971 Pakistan Army surrendered in Dhaka. Bangladesh achieved complete victory. Our dream that began on 26th March was fulfilled on 16th December. These two dates - 26th March and 16th December - are the most sacred days for Bangladesh. March 26th is Independence Day marking the beginning of our freedom struggle. December 16th is Victory Day celebrating the successful end.\n\nWe celebrate 26th March with deep respect and solemnity. The day begins at dawn with 31 gun salutes. The national flag is hoisted on all government and private buildings. The President and Prime Minister place floral wreaths at the National Martyrs Memorial at Savar. They pay tribute to martyrs who sacrificed their lives. People from all walks of life visit the memorial throughout the day. They place flowers and pray for the departed souls. The memorial stands tall reminding us of the great sacrifice.\n\nSpecial prayers are held in mosques and temples. We pray for the souls of martyrs and for the continued peace and prosperity of Bangladesh. Schools, colleges, and institutions organize special programs. Students recite patriotic poems and sing national songs. Discussions and seminars are held about the Liberation War. Freedom fighters share their experiences with younger generation. These events ensure that new generation remembers and values our independence.\n\nTelevision and radio broadcast special programs throughout the day. Documentaries about Liberation War are shown. Patriotic songs fill the air. Newspapers publish special supplements with articles about independence and freedom fighters. The whole nation is wrapped in the spirit of patriotism.\n\nThis day teaches us valuable lessons. Independence is precious and was earned through immense sacrifice. We must protect it carefully. We should love our country and work for its development. Unity among all citizens regardless of religion, region, or political belief is essential. The freedom fighters did not fight for any particular group. They fought for all Bangladeshis. We must maintain that unity.\n\nWe should remember that freedom brings responsibilities. We are responsible for building the Bangladesh our martyrs dreamed of. A country free from poverty, injustice, and corruption. A country where every child gets education. Where everyone has food, shelter, and healthcare. Where people live with dignity and security. This is the Bangladesh our freedom fighters fought for. We must work to achieve this vision.\n\nThe young generation must learn about Liberation War properly. They should know the names and stories of brave martyrs and freedom fighters. They should understand the suffering and sacrifice involved. This knowledge will make them proud Bangladeshis and responsible citizens. Schools must teach Liberation War history thoroughly and correctly.\n\nWe owe everything to our freedom fighters and martyrs. They gave us this independent country. They gave their today for our tomorrow. We can never repay this debt. The least we can do is honor their memory and work sincerely for Bangladesh's progress. Every citizen should ask themselves - am I worthy of the freedom they gave me? Am I contributing to the nation they died for?\n\nIndependence Day reminds us that freedom is not free. It costs blood, tears, and sacrifice. We must never take our independence for granted. We should protect it zealously. We should be vigilant against any internal or external threats to our sovereignty. We should work together to make Bangladesh strong, prosperous, and respected globally.\n\nLet us pledge on this Independence Day to be true patriots. Let us promise to build the Golden Bengal that Bangabandhu dreamed of. Let us work with honesty, dedication, and unity. Let us make our martyrs proud by creating a better Bangladesh. Joy Bangla! Long live Bangladesh! Long live the memory of our brave martyrs!",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1311
  },
  {
    "id": "easy_health_is_wealth",
    "title": "Health is Wealth",
    "template": "Health is Wealth\n\nHealth is wealth is a famous proverb that contains deep wisdom. It means that good health is more valuable than money and material possessions. A healthy person is truly wealthy even if they have little money. But a sick person cannot enjoy life even with all the riches in the world. Health is the greatest treasure we can possess. Without health everything else loses meaning and value.\n\nGood health means being physically and mentally fit. A healthy person has a strong body free from diseases. Their organs function properly. They have energy to work and enjoy life. They sleep well and wake up refreshed. Good health also includes mental wellness. A healthy mind is peaceful and positive. It is free from excessive stress, anxiety, and depression. True health is the combination of physical fitness, mental peace, and emotional balance.\n\nHealth is wealth because it enables us to do everything in life. A healthy person can work hard and earn money. They can study well and achieve success. They can play sports and enjoy recreation. They can travel and explore new places. They can take care of their family. But when health is lost all these become impossible. A sick person cannot work even if they want to. They cannot enjoy food or entertainment. Their whole life revolves around illness and treatment.\n\nMoney cannot buy health once it is lost. Rich people can afford the best doctors and expensive treatments but many diseases cannot be cured completely. Prevention is better than cure. Maintaining good health is easier and cheaper than treating illness. A poor person who is healthy lives better than a rich person who is chronically ill. The poor person can work, eat, and sleep peacefully. The sick rich person suffers despite wealth. This proves that health is more valuable than money.\n\nMany factors contribute to good health. Proper nutrition is fundamental. We should eat balanced meals containing proteins, carbohydrates, vitamins, and minerals. Fresh fruits and vegetables should be part of daily diet. We should avoid junk food, excessive oil, and too much sugar. Eating too much or too little both harm health. Drinking plenty of clean water is essential. Water helps body function properly and flushes out toxins.\n\nRegular physical exercise is crucial for maintaining health. Exercise makes muscles strong and bones healthy. It improves heart and lung function. It helps maintain proper weight and prevents obesity. Exercise reduces stress and improves mood. People should exercise at least 30 minutes daily. Walking, jogging, cycling, swimming, or playing sports are all good exercises. Even simple activities like climbing stairs and doing household work keep body active.\n\nAdequate sleep is vital for good health. Adults need 7-8 hours of sleep while children need more. During sleep body repairs itself and brain processes information. Lack of sleep causes tiredness, poor concentration, and weakened immunity. It increases risk of diseases. We should maintain regular sleep schedule - sleeping and waking at consistent times.\n\nMental health is equally important as physical health. Stress is a major threat to health in modern life. Excessive worry and anxiety cause many physical and mental problems. We should learn to manage stress through relaxation techniques, hobbies, and positive thinking. Spending time with loved ones, pursuing interests, and practicing meditation help maintain mental peace. A positive attitude towards life promotes both mental and physical wellness.\n\nHygiene practices protect health. We should bathe regularly and keep body clean. Washing hands before eating and after using toilet prevents many diseases. Brushing teeth twice daily prevents dental problems. Keeping home and surroundings clean prevents mosquitoes and germs. Clean environment means fewer diseases.\n\nRegular health check-ups help detect problems early. Many serious diseases show no symptoms initially. Blood pressure, blood sugar, and cholesterol should be checked periodically especially after age 40. Early detection makes treatment easier and more effective. Vaccinations protect against dangerous diseases. Children should receive all recommended vaccines. Adults should take vaccines like flu shot when needed.\n\nBad habits destroy health. Smoking is extremely harmful. It causes lung cancer, heart disease, and many other problems. It also harms people nearby through secondhand smoke. Smoking should be completely avoided. Alcohol consumption damages liver and brain. Excessive drinking ruins health and life. Drug abuse is equally dangerous and often fatal. These substances give temporary pleasure but permanent damage.\n\nIn poor countries like Bangladesh many health challenges exist. Malnutrition affects many children. They don't get enough nutritious food to grow properly. This affects their physical and mental development. Safe drinking water is not available everywhere. Contaminated water causes diarrhea, cholera, and other waterborne diseases. Thousands die from preventable diseases due to lack of proper healthcare facilities. Poverty forces people to live in unhygienic conditions. They cannot afford nutritious food or medical treatment.\n\nGovernment should invest more in public health. Hospitals and clinics should reach every village. Healthcare should be affordable for all. Clean water supply and sanitation facilities should be provided everywhere. Awareness programs should educate people about hygiene, nutrition, and disease prevention. School health programs should teach children about healthy living. These measures will improve national health.\n\nIndividuals must take responsibility for their own health. We should not ignore warning signs. Small problems can become big if neglected. Taking medicine without doctor's advice is dangerous. We should consult qualified doctors not quacks. Following doctor's instructions completely is important. Many people stop taking medicine when they feel better. This causes disease to return worse than before.\n\nIn our busy modern lives we often neglect health. We work long hours without rest. We eat fast food because we don't have time to cook healthy meals. We sacrifice sleep to meet deadlines. We sit for hours without moving. This lifestyle is destroying our health. We must realize that no success means anything if we lose health achieving it. What use is earning money if we must spend it all on medical treatment?\n\nWe should prioritize health over everything else. Making time for exercise, preparing healthy meals, and getting enough sleep should not be optional. They are necessary investments in our wellbeing. Companies should promote employee health through flexible hours, stress management programs, and wellness initiatives. Parents should ensure children develop healthy habits early. Schools should emphasize physical education along with academic studies.\n\nHealthy citizens build healthy nations. When people are healthy they work productively. They contribute to economy and society. Healthcare costs decrease. Life expectancy increases. Quality of life improves. Countries with healthy populations progress faster. Therefore maintaining health is not just personal concern but national priority.\n\nOur body is a precious gift. We must take good care of it. Once health is seriously damaged it is very difficult to recover fully. Many regret neglecting their health only after becoming seriously ill. By then it may be too late. Prevention is always better easier and cheaper than cure. We should form healthy habits while we are young and healthy.\n\nIn conclusion health truly is wealth - the most valuable treasure we possess. No amount of money can replace good health. We should eat nutritiously, exercise regularly, sleep adequately, maintain hygiene, manage stress, and avoid harmful habits. Regular check-ups help catch problems early. Government should ensure healthcare for all. But ultimately each person must take responsibility for maintaining their own health. Let us remember that a healthy person has thousands of dreams but a sick person has only one - to become healthy again. We should treasure and protect our health above all else. Health is not everything but without health everything is nothing. Therefore health truly is the greatest wealth.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1257
  },
  {
    "id": "easy_importance_of_education",
    "title": "Importance of Education",
    "template": "Importance of Education\n\nEducation is the most powerful tool for personal development and social progress. It is the foundation upon which we build our future. Education means acquiring knowledge, skills, values, and wisdom. It is not just about reading books and passing exams. True education develops our mind, character, and abilities. It prepares us to face life's challenges successfully. Education transforms individuals and societies. It is the key that opens doors to opportunities and success.\n\nEducation is essential for every human being. It is a basic human right. Every child deserves quality education regardless of their economic status, gender, or location. Unfortunately millions of children worldwide cannot go to school due to poverty, conflict, or discrimination. This is a great tragedy. Denying education to any child means denying them the chance to fulfill their potential. Society loses when talent remains undeveloped due to lack of education.\n\nThe importance of education cannot be overstated. First and foremost education develops knowledge and skills. Through education we learn to read, write, and calculate. We learn about history, geography, science, and literature. We gain knowledge about the world we live in. This knowledge broadens our understanding and perspective. Education teaches us how to think critically and solve problems. These skills are essential for success in any field.\n\nEducation empowers individuals economically. Educated people have better employment opportunities. They can earn higher incomes and achieve financial security. In today's competitive world most good jobs require education and skills. Without education people remain trapped in poverty doing low-paying manual labor. Education breaks the cycle of poverty. When poor families invest in children's education those children can get better jobs and lift the entire family out of poverty. Statistics show clear correlation between education level and income. Higher education generally means higher earning potential throughout life.\n\nEducation promotes equality and social justice. When everyone has access to quality education social gaps narrow. Education enables children from poor families to compete with those from wealthy families. It provides opportunity for upward social mobility based on merit rather than birth. Education especially helps marginalized groups. Educating girls empowers women and transforms societies. Educated women marry later, have fewer healthier children, and participate in economic activities. They make better decisions about family health and children's education. Societies where women are educated develop faster and better.\n\nEducation builds confident individuals. Knowledge gives people self-confidence and self-respect. Educated people can express themselves clearly and defend their rights. They are not easily exploited or cheated. They can understand contracts, laws, and their civic rights. Ignorant people often suffer because they don't know their rights or how to access help. Education gives voice to the voiceless and power to the powerless.\n\nEducation promotes health and wellbeing. Educated people make better health choices. They understand importance of hygiene, vaccination, and proper nutrition. They know when to seek medical help. Educated mothers take better care of children's health. Studies show that child mortality rates are much lower among children of educated mothers. Health literacy gained through education saves countless lives.\n\nEducation strengthens democracy and governance. Democracy works well when citizens are educated. They can understand political issues and make informed voting choices. They can hold leaders accountable. They can participate meaningfully in civic life. Educated citizens demand good governance and fight against corruption. Ignorant populations are easily misled by propaganda and false promises. Educated societies tend to have more stable democratic systems and better governance.\n\nEducation fosters innovation and progress. All scientific discoveries and technological advances come from educated minds. From medicine to space exploration educated people drive human progress. Countries that invest heavily in education become leaders in innovation and technology. They develop strong economies. Countries neglecting education remain underdeveloped regardless of their natural resources. Human capital developed through education is more valuable than oil or minerals.\n\nEducation builds character and values. Schools teach not just academic subjects but also moral values like honesty, responsibility, respect, and compassion. Education makes us better human beings. It reduces prejudice and promotes tolerance. Educated people are generally more open-minded and respectful of diversity. Education teaches us to live peacefully in society and contribute positively to community.\n\nEducation enables personal fulfillment and happiness. Learning is inherently satisfying. Reading books opens new worlds. Understanding how things work brings joy. Educated people appreciate art, music, and literature more deeply. They can engage in intellectual discussions. They have richer mental lives. Education enables people to pursue their interests and passions. It helps discover talents and develop them fully. An educated person lives a more meaningful and satisfying life.\n\nDespite its obvious importance many challenges exist in education systems globally. In developing countries like Bangladesh millions of children still cannot access quality education. Schools lack basic facilities - no proper buildings, insufficient teachers, no libraries or laboratories. Teacher quality is often poor. Many teachers are not properly trained. Class sizes are too large making individual attention impossible. Rote memorization is emphasized over understanding and critical thinking. Examinations test memory rather than real learning.\n\nPoverty is the biggest barrier to education. Poor families cannot afford school fees, books, and uniforms. They need children to work and contribute to family income. Parents who are themselves uneducated don't understand education's value. Girls especially face discrimination. In many places girls are denied education because of poverty, cultural attitudes, or early marriage. This is tragic waste of human potential.\n\nGovernments must prioritize education funding. Education should receive adequate budget allocation. All children should have access to free quality primary and secondary education. Schools should have proper infrastructure, qualified teachers, and learning materials. Teacher training should improve. Teaching methods should emphasize understanding and creativity rather than memorization. Curriculum should be relevant to real life and job market needs.\n\nParents must prioritize children's education. No matter how poor they should try to send children to school. Short-term sacrifices bring long-term benefits. Education is the best investment parents can make for children's future. Communities should support education. People should value teachers and respect education. Social attitudes that discriminate against girls' education must change.\n\nStudents themselves must take education seriously. They should attend school regularly and study diligently. They should ask questions and think critically. They should read beyond textbooks. They should develop good study habits early. They should pursue education for knowledge and character development not just for certificates.\n\nIn conclusion education is fundamentally important for individuals and society. It is the engine of personal success and national development. It breaks chains of poverty and opens doors of opportunity. It empowers, enlightens, and enables. No nation can progress without educating its people. Investment in education yields highest returns. As Nelson Mandela said education is the most powerful weapon you can use to change the world. Every child deserves this powerful weapon. Let us commit to making quality education accessible to all. Let us create societies where every child regardless of birth circumstances can learn, grow, and achieve their full potential. Education truly is the foundation upon which we build our future.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1160
  },
  {
    "id": "easy_pohela_boishakh",
    "title": "Pohela Boishakh",
    "template": "Pohela Boishakh\n\nPohela Boishakh is the first day of the Bengali New Year. It is the biggest cultural festival of Bangladesh. The day falls on 14th April every year. Pohela means first and Boishakh is the first month of the Bengali calendar. So Pohela Boishakh means the first day of Boishakh. This day is celebrated with great joy and enthusiasm throughout Bangladesh. It is a festival that unites all Bengalis regardless of religion, class, or politics.\n\nThe Bengali calendar has a long history. It was introduced by Emperor Akbar in the 16th century. He wanted a calendar system that would help collect taxes based on harvest seasons. The Bengali year is based on solar calendar. It starts around mid-April which is the beginning of harvest season. This made the calendar practical for agricultural society. Over centuries Pohela Boishakh became not just a calendar date but a major cultural celebration. It represents Bengali identity, culture, and traditions.\n\nPohela Boishakh celebrations have deep cultural significance. It symbolizes new beginnings, hope, and renewal. On this day people forget past sorrows and look forward to a better year ahead. They start fresh accounts in business. Old debts are settled. New resolutions are made. The festival celebrates Bengali culture, language, and heritage. It reminds us of our roots and traditions. In an era of globalization Pohela Boishakh keeps our unique Bengali identity alive.\n\nThe celebration of Pohela Boishakh starts very early in the morning. People wake up early and take baths. They wear traditional Bengali clothes. This is an important part of the celebration. Men wear punjabi-pajama or dhuti-kurta. Women wear colorful sarees - red and white are especially popular. White sarees with red borders are traditional Pohela Boishakh attire. Girls decorate their hair with flowers. Women wear traditional jewelry and colorful bangles. Everyone wants to look their best in traditional Bengali style.\n\nPeople greet each other with Shubho Noboborsho meaning Happy New Year. They hug friends and family wishing them prosperity and happiness in the new year. This warm greeting creates a festive atmosphere everywhere. The spirit of joy and goodwill fills the air. Old quarrels are forgotten. People start relationships afresh.\n\nThe main celebration happens in cities especially Dhaka. Thousands gather at Ramna Batamul near Ramna Park before sunrise. Bangladesh Shilpakala Academy and Chhayanaut cultural organization organize a cultural program there. As the sun rises they sing Rabindranath Tagore's song Esho he Boishakh. This beautiful song welcomes the new year. The scene of thousands singing together in the morning light is breathtaking. This program has been held for decades and has become a symbol of Pohela Boishakh.\n\nA colorful procession called Mongol Shobhajatra is organized by students of Dhaka University Faculty of Fine Arts. This procession started in 1989 and has become an integral part of Pohela Boishakh. Students create large colorful masks and sculptures of animals, birds, and mythical creatures. These represent Bengali folklore and culture. The procession moves through Dhaka streets with thousands participating. It symbolizes unity and hope. UNESCO recognized Mongol Shobhajatra as Intangible Cultural Heritage of Humanity in 2016. This international recognition made us proud.\n\nFairs are held everywhere on Pohela Boishakh. Villages, towns, and cities organize Boishakhi Melas. These fairs are full of activity and color. Stalls sell traditional Bengali food, sweets, toys, handicrafts, and clothes. The smell of delicious foods fills the air. Traditional games and entertainments are arranged. Circus, magic shows, and folk performances attract crowds. Children enjoy rides and games. The fairs continue for several days in many places.\n\nFood is central to Pohela Boishakh celebration. Traditional Bengali dishes are prepared and enjoyed. Panta bhat (soaked rice) with fried hilsa fish and green chilies is the iconic Pohela Boishakh food. This simple meal represents rural Bengali culture. Pithas (rice cakes), payesh, and various sweets are prepared. Restaurants offer special Bengali menus. Families cook favorite dishes and eat together. The taste of traditional food connects us to our heritage.\n\nBusinesses especially shops open new account books on this day. This is called Halkhata. Shopkeepers invite customers and distribute sweets. Old debts are settled and new business relationships begin. This tradition strengthens business relationships and community bonds. Many businesses see this as auspicious beginning for the financial year.\n\nCultural programs are held everywhere. Television and radio broadcast special programs throughout the day. Singers perform Bengali songs. Dancers present traditional dances. Dramas depicting Bengali life and history are staged. Poets recite their works. These programs showcase rich Bengali culture and arts.\n\nChildren especially love Pohela Boishakh. They wear new clothes, visit fairs, play games, and eat special foods. Parents buy them toys and sweets. The excitement on children's faces adds to the festive atmosphere. For children it is a day of pure joy and fun.\n\nPohela Boishakh is secular festival. People of all religions celebrate together. Muslims, Hindus, Buddhists, Christians - everyone participates equally. This unity is beautiful. Religion does not divide us on this day. We are all simply Bengalis celebrating our shared culture. This secular character of Pohela Boishakh promotes harmony and tolerance. It shows that cultural identity can unite people across religious boundaries.\n\nThe festival also has economic importance. Small businesses, artisans, and performers earn significantly from Boishakhi Melas and programs. Traditional crafts get market opportunity. Folk artists showcase their talents. The festival promotes local economy and preserves traditional arts and crafts.\n\nHowever Pohela Boishakh celebrations face some challenges. In recent years the festival has become somewhat commercialized. The true cultural spirit sometimes gets lost in commercial activities. Some people celebrate just for fun without understanding cultural significance. Traffic congestion and overcrowding in cities create problems. Security concerns require heavy police presence. Some religious extremists oppose the celebration calling it un-Islamic. This is unfortunate. Cultural festivals should not be seen through religious lens.\n\nWe must preserve the authentic cultural spirit of Pohela Boishakh. The festival should teach younger generation about Bengali culture and traditions. Parents should explain significance not just take children for entertainment. Schools should organize programs educating students about Bengali heritage. Media should promote cultural aspects rather than just entertainment and food.\n\nPohela Boishakh should remain inclusive and secular. Everyone regardless of religion should feel welcome to participate. The festival belongs to all Bengalis. Political or religious divisions should not enter this celebration. Let it remain a day of unity, joy, and cultural pride.\n\nIn conclusion Pohela Boishakh is more than just New Year celebration. It is expression of Bengali identity, culture, and spirit. It connects us to our roots and traditions. It brings people together in joy and harmony. It reminds us who we are as a nation. In this rapidly changing modern world Pohela Boishakh preserves our unique Bengali character. We should celebrate it enthusiastically while maintaining its true cultural essence. Let every Pohela Boishakh strengthen our love for Bengali language, culture, and heritage. Let it inspire us to build a prosperous, peaceful, and culturally rich Bangladesh. Shubho Noboborsho to all!",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1150
  },
  {
    "id": "easy_national_flag",
    "title": "Our National Flag",
    "template": "Our National Flag\n\nOur national flag is the symbol of our sovereignty, independence, and national identity. It represents Bangladesh and everything it stands for. The flag is very precious to us because it was earned through the blood and sacrifice of millions. When we see our flag waving in the air we feel proud to be Bangladeshi. We should respect and honor our national flag always.\n\nThe design of our national flag is simple yet meaningful. It has a green background with a red circle slightly towards the left. The green color represents the lush green landscape of Bangladesh. Our country is covered with green paddy fields, trees, and vegetation. Bangladesh is one of the greenest countries in the world. The green also symbolizes youth, vitality, and freshness. It represents our hope for a bright future.\n\nThe red circle in the middle represents the sun rising over Bengal. It signifies the birth of a new nation. When Bangladesh became independent the sun of freedom rose ending the dark night of oppression. The red circle also represents the blood of martyrs. During our Liberation War in 1971 three million people sacrificed their lives for independence. The red circle honors their supreme sacrifice. It reminds us that our freedom was not free - it was bought with blood.\n\nThe flag's measurements follow specific proportions. The length to width ratio is 10:6. The red circle's radius is one-fifth of the flag's length. The circle is positioned slightly left of center so that when the flag waves it appears centered. These specifications ensure uniformity. Every official flag must follow these exact measurements.\n\nOur national flag was designed in 1971 during the Liberation War. Initially the flag had a golden map of Bangladesh in the red circle. After independence the map was removed to simplify the design. The current version was officially adopted on 17th January 1972. The flag was designed by painter Quamrul Hassan based on original concept by freedom fighters.\n\nThe national flag has great significance in our national life. It is hoisted on all government buildings, schools, and institutions. It flies high at the National Parliament, Supreme Court, and all government offices. On national days like Independence Day and Victory Day the flag is displayed everywhere. Private homes and buildings also hoist the flag on these occasions. Seeing flags everywhere creates patriotic atmosphere.\n\nThe flag is raised every morning and lowered at sunset at government buildings. This is done with proper ceremony. Guards salute as the flag goes up or down. This daily ritual shows respect for the national symbol. On national mourning days the flag is flown at half-mast showing grief and respect for the deceased.\n\nOur flag protocol has specific rules. The national flag must always be treated with dignity. It should never touch the ground. It should not be used as decoration or worn as clothing. No other flag should be placed higher than the national flag. When displayed with other flags it should occupy the place of honor. Using the flag disrespectfully is punishable offense. These rules ensure the flag receives proper respect.\n\nDuring international events our flag represents Bangladesh globally. At United Nations headquarters flags of all member countries fly together. When Bangladesh participates in international conferences, sports events, or diplomatic meetings our flag is displayed. Athletes winning medals see our flag raised while the national anthem plays. This moment fills every Bangladeshi with pride. Our flag on the international stage shows that Bangladesh is a sovereign nation with equal status among nations.\n\nIn schools students salute the flag every morning during assembly. They sing the national anthem standing in attention facing the flag. This daily practice instills patriotism from young age. Students learn to respect national symbols. School students should understand that the flag represents not just cloth but the entire nation - its history, struggle, and aspirations.\n\nOur freedom fighters fought under this flag. During Liberation War Mukti Bahini raised the flag in liberated areas. Seeing the flag gave people hope and courage. When Pakistan Army was finally defeated and surrendered on 16th December 1971 the Pakistani flag came down and Bangladesh flag went up. That moment marked complete victory. Photographs of the flag-raising ceremony at Race Course Ground in Dhaka on 16th December 1971 show the joy of freedom.\n\nMany martyrs died protecting the flag. During Liberation War Pakistani forces tried to prevent display of Bangladesh flag. Those caught with the flag were punished severely. Yet people risked their lives to fly it. The flag represented their dream of freedom. Every martyr's blood added meaning to the red circle. We must never forget that our flag represents their sacrifice.\n\nThe national flag inspires patriotism and unity. When we see the flag we feel connected to all other Bangladeshis. Rich or poor, Hindu or Muslim, from Chittagong or Rangpur - all are united under this flag. It reminds us we are one nation sharing common identity, history, and future. The flag rises above all our differences and divisions.\n\nChildren should be taught proper flag etiquette. They should know how to respect the flag. They should understand its symbolism and history. Schools play important role in this education. Teachers should explain the significance of colors and symbols. Students should learn about freedom fighters who fought under this flag. This knowledge creates informed patriotic citizens.\n\nUnfortunately sometimes people show disrespect to the flag unknowingly. Using flag colors and design for commercial purposes or fashion is inappropriate. Printed flag on paper that gets thrown away is disrespectful. Old or damaged flags should be disposed of properly, preferably by burning privately with respect. They should not be thrown in garbage. People should be educated about proper flag treatment.\n\nOn national days every citizen should display the flag. It is matter of pride and duty. Flags should be displayed properly - clean, undamaged, and in correct position. The sight of thousands of flags on Independence Day and Victory Day creates powerful visual impact. It shows national unity and pride.\n\nOur flag should remind us of our responsibilities. We are custodians of the independence it represents. We must protect and develop Bangladesh. We must work honestly for national progress. We must maintain unity and peace. We must ensure that sacrifices of martyrs were not in vain. We must build the Bangladesh they dreamed of - prosperous, just, and democratic.\n\nEvery country's flag is sacred to its citizens. For us Bangladeshis our flag is especially precious because of the tremendous sacrifice behind it. It is not just red and green cloth. It is woven with blood of three million martyrs and tears of millions who suffered. It represents our hard-won freedom and sovereignty.\n\nWhenever we see our national flag we should feel three emotions - pride, gratitude, and responsibility. Pride in our nation and identity. Gratitude towards those who gave us this freedom. Responsibility to protect and develop our country. If every citizen feels this way Bangladesh will surely become the prosperous nation our freedom fighters envisioned.\n\nLet us respect and honor our national flag always. Let us never dishonor it by unpatriotic actions. Let the red-green flag of Bangladesh fly high forever symbolizing a free, sovereign, and prosperous nation. Long live Bangladesh! Long live our national flag!",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1206
  },
  {
    "id": "easy_reading_newspaper",
    "title": "Reading Newspaper",
    "template": "Reading Newspaper\n\nReading newspaper is one of the most beneficial habits anyone can develop. A newspaper is a daily publication containing news, articles, and information about current events. Newspapers have existed for hundreds of years and remain relevant even in the digital age. Reading newspaper regularly keeps us informed about what is happening in our country and around the world. It is window to the world that opens daily bringing fresh information and perspectives.\n\nEvery educated person should read newspaper daily. It is not just habit but necessity in modern life. Newspapers serve multiple important purposes. They inform, educate, and entertain readers. They keep us connected to society and aware of important issues. Without reading newspaper we remain ignorant about significant events affecting our lives.\n\nNewspapers cover wide range of topics. The front page contains most important and breaking news. We learn about political developments, government decisions, and major events. National and international news helps us understand our country and world. We learn about elections, new policies, diplomatic relations between countries, and significant happenings globally. This political awareness is essential for informed citizenship.\n\nBusiness sections provide economic news. Stock market movements, new business ventures, banking news, and economic policies are reported. For business people this information is crucial for decision making. Even common people benefit by understanding economic trends affecting prices and employment.\n\nSports pages are extremely popular especially among youth. Cricket, football, and other sports news attracts millions of readers. Match results, player performances, and upcoming tournaments are covered. Sports news provides entertainment and connects fans with their favorite teams and players.\n\nNewspapers publish educational information valuable for students. Exam results, scholarship announcements, admission notices, and job advertisements appear in newspapers. Students find information about courses, coaching centers, and career guidance. Many students specifically read newspapers to find such opportunities. Job seekers scan employment sections for job vacancies.\n\nEditorial and opinion pages present different viewpoints on important issues. Experts write columns analyzing problems and suggesting solutions. These opinion pieces help readers understand complex issues from various angles. They stimulate thinking and encourage readers to form their own informed opinions. Letters to editor section shows what common people think about various matters.\n\nEntertainment sections provide lighter content. Movie reviews, celebrity news, TV program schedules, and cultural events are covered. Comics and puzzles provide fun moments. This entertainment value makes newspapers enjoyable not just informative.\n\nAdvertisements are integral part of newspapers. Companies advertise products and services. People post classified ads to buy, sell, or rent things. Matrimonial ads help families find suitable matches. Service providers advertise their offerings. Readers use these advertisements to make purchasing decisions and find services they need.\n\nReading newspaper regularly provides numerous benefits. First and foremost it improves general knowledge. We learn about various topics daily. This accumulated knowledge makes us informed individuals. We can participate intelligently in discussions about current affairs. Good general knowledge helps in competitive exams, interviews, and social interactions.\n\nNewspapers significantly improve language skills especially English. Reading English newspapers is excellent way to enhance vocabulary. We encounter new words daily. Seeing how words are used in context helps understand their meanings better. Sentence structures used by professional journalists serve as models for good writing. Regular reading improves our own writing and speaking abilities. Students who read newspapers consistently show better language proficiency than those who do not.\n\nNewspapers develop critical thinking skills. Reading different viewpoints on same issue teaches us to analyze and evaluate information. We learn to distinguish facts from opinions. We develop ability to think independently rather than accepting everything at face value. This critical thinking ability is valuable throughout life.\n\nReading newspaper makes us aware citizens. Democracy functions well when citizens are informed. We need to know what our government is doing. Are policies beneficial? Are leaders performing well? Is public money being spent properly? Newspapers provide this information enabling us to hold leaders accountable. Informed citizens make better voting choices.\n\nNewspapers connect us to our community. Local news sections report what is happening in our city or region. We learn about local problems, initiatives, and events. This creates sense of community engagement. We become aware of issues affecting our neighborhood and can participate in finding solutions.\n\nDifferent newspapers have different standards and perspectives. Some newspapers maintain high journalistic standards reporting news accurately and objectively. Others may show bias or sensationalize news to increase sales. Readers should choose quality newspapers known for responsible journalism. Renowned newspapers in Bangladesh include Prothom Alo, Daily Star, Ittefaq, and others. These maintain professional standards and editorial integrity.\n\nThe best time to read newspaper is morning. Many people read it during breakfast starting their day informed. Some read during commute to work. Others prefer evening reading after returning home. Whatever time suits one's schedule, some time should be allocated daily for newspaper reading.\n\nOne need not read entire newspaper. That would take hours. Smart reading means scanning headlines first. Then reading articles that interest us or are important. We can skip sections that do not concern us. Even 15-20 minutes of focused reading provides substantial information and benefits.\n\nIn digital age many people read newspapers online. Most newspapers have websites and mobile apps. Online reading is convenient - accessible anytime anywhere. It is also environmentally friendly saving paper. However traditional printed newspapers have their own charm. The experience of holding paper and turning pages is different. Many people, especially older generation, prefer physical newspapers. Both formats serve the same purpose - keeping us informed.\n\nSome people wrongly think newspapers are boring or unnecessary. They prefer television news or social media for information. However newspapers provide depth that TV news cannot. TV news gives brief highlights while newspapers offer detailed coverage and analysis. Social media contains much unverified information and fake news. Newspapers employ professional journalists who verify facts before publishing. Reading newspaper provides reliable authentic information.\n\nParents should encourage children to read newspapers. Initially children may find it difficult or uninteresting. They can start with sections they enjoy - sports, comics, or interesting features. Gradually they can explore other sections. Parents can discuss news articles with children making it interactive and interesting. This develops reading habit and general awareness from young age.\n\nTeachers should promote newspaper reading in schools. Some schools have newspaper reading hour or maintain newspaper files. Students should be encouraged to read current affairs and discuss them in class. This makes learning more relevant to real world. It also prepares students for exams that test current affairs knowledge.\n\nGovernment should ensure newspapers reach all areas including remote villages. Affordable subscription rates should be maintained. Digital access should expand so more people can read online. An informed population is asset for any nation. Newspapers play crucial role in creating such informed citizenry.\n\nIn conclusion reading newspaper is extremely valuable habit that everyone should cultivate. It keeps us informed, improves language skills, enhances knowledge, develops critical thinking, and makes us responsible citizens. In this rapidly changing world staying updated is not luxury but necessity. Newspapers provide reliable window to this changing world. Let us make newspaper reading our daily habit. Those few minutes invested daily will yield lifelong benefits. An informed mind is empowered mind. Reading newspaper empowers us with knowledge and awareness essential for personal growth and active citizenship. Start reading newspaper today if you haven't already. Your future self will thank you for this wise decision.",
    "category": "Easy",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 1224
  },
  {
    "id": "email_congratulations",
    "title": "Email Congratulating on Brilliant Success",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: Congratulations on Your Success!\n\nDear {FRIEND_NAME},\n\nI hope you are doing well. I just heard the wonderful news about your brilliant success in the examination. I am so happy for you. You have worked very hard for this. Your dedication and effort have paid off. You truly deserved this achievement. I always knew you would succeed. Your result has made everyone proud. Your parents must be very happy. All your teachers are also proud of you. This success is just the beginning. I am sure you will achieve even more in the future. Keep working hard like this. Never lose your confidence. You are an inspiration to all of us. I wish you all the best for your future. May you continue to succeed in everything you do. Once again congratulations on your brilliant success.\n\nBest regards,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 144
  },
  {
    "id": "email_birthday_invitation",
    "title": "Email Inviting to Birthday Party",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: Invitation to My Birthday Party\n\nDear {FRIEND_NAME},\n\nI hope you are well. I am writing to invite you to my birthday party. My birthday is on next Friday. I am organizing a party to celebrate with my close friends. You are one of my best friends. So your presence is very important to me. The party will be held at our residence at 6:00 PM. Please try your best to come. I will be very happy to see you there. We will have lots of fun together. There will be music, games, and dancing. I have arranged a nice birthday cake. There will be delicious food and snacks. All our friends will be there. We will take many pictures together. It will be a memorable day for me. Your presence will make my birthday special. Please confirm if you can come. I am eagerly waiting for your reply. See you at the party.\n\nYour loving friend,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 163
  },
  {
    "id": "email_wedding_invitation",
    "title": "Email Inviting to Wedding Ceremony",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: Invitation to Wedding Ceremony\n\nDear {FRIEND_NAME},\n\nI hope this email finds you in good health. I am writing to invite you to the wedding ceremony of my elder sister. It is a very special occasion for our family. The wedding will take place on next Sunday. We would be honored to have you with us. Your presence will make the ceremony more joyful. The celebration will be grand. There will be traditional music and dances. Delicious food will be served. Many relatives and friends will attend. We will all dress in traditional clothes. It will be a beautiful event. I really want you to be there. We have been friends for so long. Such occasions are more enjoyable when friends are together. Please try to adjust your schedule. Bring your family if you wish. Everyone is welcome. After the wedding we can spend some time together. We can talk and share memories. I am looking forward to seeing you there. Please let me know if you can attend.\n\nYour loving friend,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 178
  },
  {
    "id": "email_study_tour",
    "title": "Email Describing Study Tour/Picnic",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: About Our Recent Study Tour\n\nDear {FRIEND_NAME},\n\nI hope you are keeping well. I am writing to tell you about our recent study tour. Last week we went to Sonargaon. It was an amazing experience. We started our journey early in the morning. All my classmates and teachers were with us. The bus ride was very enjoyable. Everyone was singing and having fun. When we reached the place we were very excited. We visited the historic Panam Nagar and museum. The scenery was beautiful. We learned many new things. Our teachers explained everything clearly. We took lots of photographs. We also played games together. The lunch was delicious. We ate and enjoyed together. It was one of the best days of my school life. I wish you were there with us. You would have loved it. I have so many stories to tell you. We should meet soon. I want to share all the details with you. How are your studies going? Write back soon.\n\nYour loving friend,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 175
  },
  {
    "id": "email_thank_gift",
    "title": "Email Thanking for a Gift",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: Thank You for the Wonderful Gift\n\nDear {FRIEND_NAME},\n\nI hope you are doing well. I am writing to thank you for the wonderful gift. Yesterday I received the beautiful book you sent on my birthday. I was so happy to get it. It is very useful for my daily studies. It is exactly what I wanted. You know my choice so well. The gift is beautiful and useful. I have already started using it. Every time I use it I remember you. You are so kind and thoughtful. You always care about me. This gift is very special to me. I will treasure it forever. Thank you so much for your love and affection. You always make me feel special. I am very lucky to have you in my life. May Allah bless you with happiness and good health. I hope to see you soon. Once again thank you from the bottom of my heart.\n\nWith love and gratitude,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 166
  },
  {
    "id": "email_plan_after_ssc",
    "title": "Email About Plan After SSC Exam",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: My Plans After SSC Exam\n\nDear {FRIEND_NAME},\n\nI hope you are well. Our SSC exam is finally over. I feel so relieved. Now I want to share my plans with you. I have thought about it carefully. I have discussed with my parents and teachers. They all support my decision. I want to take Science in college. I am interested in this subject. I think it will help me achieve my career goals. I am planning to get admission in a good college. I am working on the application process. I am also thinking about what to do during the vacation. I want to learn some new skills. Maybe I will join a computer course. I also want to spend time with family. What are your plans? Which subjects are you choosing? Have you decided on a college? Let me know about your plans. We should meet during the vacation. We can discuss our future together. I am excited about this new chapter of life. Let us keep in touch.\n\nYour loving friend,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 180
  },
  {
    "id": "email_condolence",
    "title": "Email Expressing Condolence",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: Deepest Condolences\n\nDear {FRIEND_NAME},\n\nI hope you are bearing this difficult time with patience. I just heard the sad news about the passing away of your grandmother. I am deeply shocked and saddened. Please accept my heartfelt condolences. I know how close you were. This must be very hard for you and your family. Words cannot express how sorry I am for your loss. May Allah grant the departed soul eternal peace. May He give you and your family the strength to bear this loss. Please know that I am here for you. If you need anything please let me know. I will always support you. In this time of grief we all stand with you. Your loved one will always be remembered. May all the good memories bring you comfort. Please take care of yourself and your family. You are in my thoughts and prayers. May Allah help you through this difficult time.\n\nWith deepest sympathy,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 164
  },
  {
    "id": "email_advice_studies",
    "title": "Email Advising to be Sincere in Studies",
    "questions": [],
    "template": "To: [Brother's Email]\nFrom: {EMAIL}\nSubject: Advice About Your Studies\n\nDear {FRIEND_NAME},\n\nI hope you are well. How are your studies going? I heard from mother that you are neglecting your studies recently. I am writing this email to give you some advice. Brother, you must take your studies seriously. Your final exam is coming very soon. Student life is very important. This is the time to build your future. If you waste this time you will regret later. You are a bright student. You can do very well if you try. Please make a study routine and follow it. Study regularly every day. Pay attention in class. Do your homework on time. Stay away from bad company. Friends can influence us a lot. Choose friends who are serious about studies. Do not waste time on mobile phones and games. These are distractions. Focus on your goals. Our parents work very hard for us. We should not disappoint them. Make them proud with your good results. I believe in you. I know you can achieve great things. Just work hard and stay focused. If you need any help I am always here for you. Study well and make us all proud.\n\nYour loving brother,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 205
  },
  {
    "id": "email_asking_money",
    "title": "Email Asking for Money",
    "questions": [],
    "template": "To: [Father's Email]\nFrom: {EMAIL}\nSubject: Request for Money\n\nDear Father,\n\nI hope you are keeping well. Mother and everyone at home are fine. I am also fine here. I am writing to ask for some money. I need money for buying some essential books and exam fees. This is very important for my studies. All my classmates are buying these. Our teachers have also advised us to get them. These will help me study better. I have checked the prices. I need about 3,000 Taka. I know you work very hard for us. I do not want to burden you. But this is really necessary. I promise to use the money carefully. I will not waste it on unnecessary things. I am studying hard to make you proud. My exam is coming soon. I am preparing well. Please send me the money as soon as possible. I will be waiting for your reply. Please take care of your health. Give my love to mother and everyone.\n\nYour loving son,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 171
  },
  {
    "id": "email_physical_exercise",
    "title": "Email About Importance of Physical Exercise",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: Importance of Physical Exercise\n\nDear {FRIEND_NAME},\n\nI hope this email finds you well. I heard that you are often falling sick and feel weak. I am worried about you. I think you need to do physical exercise regularly. Regular exercise keeps our body fit and mind fresh. Exercise is very important for good health. It makes our body strong and fit. It keeps us active and energetic. Regular exercise prevents many diseases. It improves blood circulation. It strengthens our heart and muscles. Exercise also helps in studies. After exercising our mind becomes fresh. We can concentrate better. You should start with simple exercises. Wake up early and go for a morning walk. Walk for at least 30 minutes daily. You can also do jogging or cycling. Play outdoor games like cricket or football. These are fun and healthy. Swimming is also excellent exercise. If you cannot go out do some exercises at home. You can do yoga or simple stretching. The important thing is to be regular. Exercise every day without fail. Within few weeks you will feel the difference. You will become healthier and happier. Please take care of your health. Health is wealth. Without good health we cannot enjoy life. Start exercising from today. I am sure you will benefit from it.\n\nYour caring friend,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 224
  },
  {
    "id": "email_new_school",
    "title": "Email Describing Your New School",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: About My New School\n\nDear {FRIEND_NAME},\n\nI hope you are doing well. You asked me about my new school. So I am writing to tell you about it. The name of my new school is Model High School. The school building is very beautiful. There are many classrooms with modern facilities. We have a big playground. The library has thousands of books. There is also a computer lab and science lab. The teachers are very friendly and helpful. They teach us very well. My classmates are also nice. I have already made some new friends. The school follows strict discipline. Everyone must wear proper uniform. Classes start on time. The school organizes many activities. We have sports day and cultural programs. However I miss my old school and friends. I miss you a lot. But I am trying to adjust here. This school will give me better education. That is why my parents admitted me here. How are things at your school? How are our old friends? Please write to me about everyone. Let us stay in touch. I am waiting for your reply.\n\nYour loving friend,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 194
  },
  {
    "id": "email_quick_recovery",
    "title": "Email Wishing Quick Recovery",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: Get Well Soon\n\nDear {FRIEND_NAME},\n\nI hope you are feeling better now. I heard that you are suffering from high fever. I am very sad to know this. We are all praying for your speedy recovery. You were absent from school for many days. We all miss you very much. Classes are not the same without you. Everyone asks about you. All our friends send their love. Please take complete rest. Do not worry about studies. You can cover everything later. Health is more important than anything. Take your medicines on time. Follow the doctor's advice properly. Eat healthy food. Drink plenty of water. Get enough sleep. I am sure you will recover soon. You are strong and brave. Please take care of yourself. If you need any help let me know. I can bring you notes from school. I can also help you with homework later. I pray for your quick recovery. May Allah give you good health. I hope to see you back in school very soon. Get well soon my friend.\n\nWith best wishes,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 184
  },
  {
    "id": "email_career_advice",
    "title": "Email Seeking Career Advice",
    "questions": [],
    "template": "To: [Uncle's Email]\nFrom: {EMAIL}\nSubject: Need Your Advice About Career\n\nDear Uncle,\n\nI hope you and aunty are well. I am writing to seek your advice. I have just completed my SSC examinations. I am confused about my career path. I need guidance from an experienced person like you. You have always helped me with good advice. I am considering Science and Commerce. Both options seem good to me. I am interested in both fields. But I cannot decide which one to choose. My parents say I should follow my interest. But I want practical advice too. I want to know about job opportunities. I want to choose something that has a good future. You have knowledge about these things. You know the current job market. Please guide me. What do you think is better for me? Which field has more scope? I trust your judgment. Your advice will help me make the right decision. I am waiting for your reply. Please write back soon. I need to make a decision quickly. Give my regards to aunty and cousins.\n\nYour loving nephew,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 184
  },
  {
    "id": "email_exam_results",
    "title": "Email Sharing Exam Results",
    "questions": [],
    "template": "To: [Father's Email]\nFrom: {EMAIL}\nSubject: My Exam Results\n\nDear Father,\n\nI hope you are well. I have good news to share with you. Today our annual exam results were published. I did well in the exam. I have secured GPA 5.00 and stood first in my class. I am happy with my performance. I worked very hard for this exam. Your advice and mother's support helped me a lot. All my teachers are happy with my results. My friends have congratulated me. The headmaster also praised me. This success is because of your blessings. You always encourage me to study hard. You provide everything I need. I promise to work even harder in future. I will make you more proud. I will keep improving my results. Thank you for everything you do for us. Please share this news with mother. Give my love to everyone at home. I miss you all very much. I will call you this evening. Take care of your health.\n\nYour loving son,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 169
  },
  {
    "id": "email_borrow_book",
    "title": "Email Requesting to Lend a Book",
    "questions": [],
    "template": "To: [Friend's Email]\nFrom: {EMAIL}\nSubject: Request to Borrow a Book\n\nDear {FRIEND_NAME},\n\nI hope you are well. I am writing to ask for a small favor. Can you please lend me your English Grammar and Composition book? I know you have this book. I saw it at your house last time. I need this book urgently. It will help me with my studies. Our teacher recommended this book. I tried to buy it from bookshops. But it is not available anywhere. I also checked the school library. They do not have it either. So I thought of asking you. I promise to take good care of the book. I will not damage or lose it. I will return it within a week. I will give it back as soon as I finish reading. If you need it urgently then no problem. I will wait until you are free. But if you can lend it now I will be grateful. Please let me know. I can come to your house to collect it. Or we can meet at school. Thank you for helping me. You are a true friend.\n\nYour loving friend,\n{NAME}",
    "category": "Email",
    "classLevel": "All",
    "vocabulary": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 193
  },
  {
    "id": "dialogue_ssc_exam_preparation",
    "title": "Dialogue: Preparation for the SSC Exam",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about preparation for the SSC Exam.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. What are you doing right now?\n{FRIEND_NAME}: I am just reading my English book. What about you?\n{NAME}: Actually, I wanted to discuss our preparation for the upcoming SSC exam.\n{FRIEND_NAME}: Sure! How is your preparation going on?\n\n{NAME}: My preparation is going well, but I am still a bit nervous about Mathematics.\n{FRIEND_NAME}: Don't worry. If you practice math daily, it will become easy for you.\n{NAME}: How is your preparation in English and Science?\n{FRIEND_NAME}: I have completed my syllabus and now I am solving test papers.\n{NAME}: That is great! We should study together to solve our weak points.\n{FRIEND_NAME}: Yes, group study will help both of us get GPA-5 in the exam.\n\n{NAME}: Thank you so much for your valuable advice and time.\n{FRIEND_NAME}: You are most welcome! We will surely do great.\n{NAME}: I have to go now. My tuition class starts soon.\n{FRIEND_NAME}: Okay, take care. Goodbye!\n{NAME}: Goodbye! See you tomorrow.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": true,
    "boardTags": [
      "SSC 2024",
      "Top Suggestion ⭐"
    ],
    "banglaTranslation": "রাহিম ও করিমের মধ্যে এসএসসি পরীক্ষার প্রস্তুতি বিষয়ক কথোপকথন:\n\nরাহিম: কেমন আছো করিম? তোমার এসএসসি পরীক্ষার প্রস্তুতি কেমন চলছে?\nকরিম: ভালো আছি। আমার প্রস্তুতি বেশ ভালো, তবে গণিত এবং ইংরেজি গ্রামার নিয়ে একটু চিন্তিত আছি।\nরাহিম: প্রতিদিন নিয়মিত অনুশীলন করলে এই ভয় কেটে যাবে। আমি একটি রুটিন বানিয়ে প্রতিদিন সব বিষয় রিভিশন দিচ্ছি।\nকরিম: দারুণ পরামর্শ! আমিও একটি সুশৃঙ্খল রুটিন মেনে পড়াশোনা করব।",
    "wordCount": 188
  },
  {
    "id": "dialogue_learning_english",
    "title": "Dialogue: Importance of Learning English",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about the importance of learning English.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. Where are you going now?\n{FRIEND_NAME}: I am going to the language club to practice English.\n{NAME}: That is great! Can you tell me why learning English is so important?\n{FRIEND_NAME}: Of course! English is an international language.\n\n{NAME}: How does it help us in our daily life and career?\n{FRIEND_NAME}: We need English for higher education, getting good jobs, and using the internet.\n{NAME}: Is it necessary for international communication?\n{FRIEND_NAME}: Yes, without English, we cannot communicate with people around the world.\n{NAME}: How can we improve our English speaking and writing?\n{FRIEND_NAME}: We should read English newspapers, learn new vocabulary, and practice speaking daily.\n{NAME}: That sounds very practical. I will start practicing from today.\n\n{NAME}: Thank you so much for this important discussion.\n{FRIEND_NAME}: You are most welcome! Keep practicing regularly.\n{NAME}: I have to go home now. My mother is calling.\n{FRIEND_NAME}: Okay, take care of yourself. Goodbye!\n{NAME}: Goodbye! Have a nice day.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": true,
    "boardTags": [
      "SSC",
      "Dhaka Board"
    ],
    "banglaTranslation": "ইংরেজি ভাষা শেখার গুরুত্ব নিয়ে দুই বন্ধুর কথোপকথন:\n\nসোহেল: হ্যালো রনি! ইংরেজি শেখা আমাদের জন্য কেন এত গুরুত্বপূর্ণ?\nরনি: ইংরেজি একটি আন্তর্জাতিক ভাষা। উচ্চশিক্ষা, ভালো চাকরি, আন্তর্জাতিক ব্যবসা এবং ইন্টারনেটের সমস্ত তথ্য জানার জন্য ইংরেজি জানা অপরিহার্য।\nসোহেল: আমাদের কীভাবে ইংরেজি দক্ষতা বাড়ানো উচিত?\nরনি: প্রতিদিন ইংরেজি পত্রিকা পড়া, বন্ধুদের সাথে ইংরেজিতে কথা বলা এবং প্রতিদিন নতুন নতুন শব্দার্থ শেখার মাধ্যমে আমরা ইংরেজি শিখতে পারি।",
    "wordCount": 188
  },
  {
    "id": "dialogue_bad_effects_smoking",
    "title": "Dialogue: Bad Effects of Smoking",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about the bad effects of smoking.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. Why do you look so worried?\n{FRIEND_NAME}: I saw a young boy smoking on the street just now. It made me sad.\n{NAME}: Truly, smoking is a dangerous habit. Can we talk about its bad effects?\n{FRIEND_NAME}: Yes, of course. Everybody should know about its danger.\n\n{NAME}: What are the main harmful effects of smoking?\n{FRIEND_NAME}: Smoking causes deadly diseases like lung cancer, heart attack, and asthma.\n{NAME}: Does smoking also harm non-smokers nearby?\n{FRIEND_NAME}: Yes, passive smoking is equally dangerous for family members and children.\n{NAME}: It also wastes a lot of hard-earned money.\n{FRIEND_NAME}: Exactly! Smoking destroys both physical health and wealth.\n{NAME}: We must make our friends aware so that everyone avoids smoking.\n\n{NAME}: Thank you so much for sharing your thoughts on this serious issue.\n{FRIEND_NAME}: You are most welcome! Let us always say no to smoking.\n{NAME}: I must leave now. I have to attend my coaching class.\n{FRIEND_NAME}: Sure, take care and stay healthy. Goodbye!\n{NAME}: Goodbye! See you later.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 196
  },
  {
    "id": "dialogue_early_rising",
    "title": "Dialogue: Benefits of Early Rising",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about the benefits of early rising.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. You look very fresh and energetic today!\n{FRIEND_NAME}: Thanks! I have started waking up early in the morning every day.\n{NAME}: Really? What are the benefits of waking up early?\n{FRIEND_NAME}: Early rising has countless benefits for our body and mind.\n\n{NAME}: Can you tell me some of these benefits?\n{FRIEND_NAME}: We can breathe fresh morning air and do light physical exercise.\n{NAME}: Does it help students in their studies too?\n{FRIEND_NAME}: Yes, the morning environment is quiet and the mind remains sharp for learning.\n{NAME}: So an early riser gets more time to finish daily tasks?\n{FRIEND_NAME}: Exactly! As the proverb says: Early to bed and early to rise makes a man healthy, wealthy, and wise.\n{NAME}: From tomorrow, I will also build the habit of early rising.\n\n{NAME}: Thank you for inspiring me with this healthy habit.\n{FRIEND_NAME}: You are most welcome! You will definitely feel the positive change.\n{NAME}: I have to go now. It is time for my breakfast.\n{FRIEND_NAME}: Okay, enjoy your breakfast. Goodbye!\n{NAME}: Goodbye! See you at school.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 205
  },
  {
    "id": "dialogue_tree_plantation",
    "title": "Dialogue: Tree Plantation",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about the importance of tree plantation.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. What are those plant saplings in your hand?\n{FRIEND_NAME}: I bought these from a nursery to plant in our school garden.\n{NAME}: That is a wonderful initiative! Why is tree plantation so necessary?\n{FRIEND_NAME}: Trees are the most important friends of nature and humans.\n\n{NAME}: What do trees provide for our environment?\n{FRIEND_NAME}: Trees give us oxygen to breathe and absorb harmful carbon dioxide.\n{NAME}: Do trees also protect us from natural disasters?\n{FRIEND_NAME}: Yes, they prevent soil erosion, reduce floods, and bring rain to our country.\n{NAME}: Without trees, our world would become a desert.\n{FRIEND_NAME}: True! So we must plant more and more trees during the rainy season.\n{NAME}: I will also join you and plant trees around my home.\n\n{NAME}: Thank you so much for this noble and green discussion.\n{FRIEND_NAME}: You are most welcome! Let us make our country green.\n{NAME}: I must go now to get my garden tools.\n{FRIEND_NAME}: Sure, let us meet in the garden. Goodbye!\n{NAME}: Goodbye! See you soon.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 198
  },
  {
    "id": "dialogue_mobile_internet",
    "title": "Dialogue: Uses and Abuses of Mobile Phone/Internet",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about the uses and abuses of mobile phones and the internet.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. What are you browsing on your phone?\n{FRIEND_NAME}: I am watching an online science lecture on YouTube.\n{NAME}: Mobile phones and the internet have made our education very easy, right?\n{FRIEND_NAME}: Yes, but it has both good uses and bad abuses.\n\n{NAME}: What are the main benefits of using mobile phones?\n{FRIEND_NAME}: We can communicate instantly, attend online classes, and search for study materials.\n{NAME}: And what are the negative sides of it?\n{FRIEND_NAME}: Excessive screen time harms eyesight, wastes study hours, and causes gaming addiction.\n{NAME}: How can students use it safely and wisely?\n{FRIEND_NAME}: Students should use the internet only for educational purposes and limit gaming time.\n{NAME}: That is very true. We must be responsible users of technology.\n\n{NAME}: Thank you for this insightful discussion on modern technology.\n{FRIEND_NAME}: You are most welcome! Technology is a good servant but a bad master.\n{NAME}: I have to go now to start my offline homework.\n{FRIEND_NAME}: Great, focus on your studies. Goodbye!\n{NAME}: Goodbye! Take care.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 202
  },
  {
    "id": "dialogue_future_plan_ssc",
    "title": "Dialogue: Future Plan after SSC / Aim in Life",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about future plans after the SSC exam.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. The SSC exam will end very soon.\n{FRIEND_NAME}: Yes, time is passing fast. Have you thought about your future plan?\n{NAME}: Yes, I have a clear plan. What about you?\n{FRIEND_NAME}: I want to take the Science group in college. Tell me about your aim.\n\n{NAME}: My aim in life is to become a doctor and serve poor village people.\n{FRIEND_NAME}: That is a very noble profession! Why do you want to be a doctor?\n{NAME}: In our villages, poor people do not get proper treatment and suffer a lot.\n{FRIEND_NAME}: What is your plan for admission after the exam?\n{NAME}: I will get admitted to a good college and prepare for the medical entrance test.\n{FRIEND_NAME}: I also plan to become a software engineer to build Digital Bangladesh.\n\n{NAME}: Thank you so much for sharing your inspiring future plan with me.\n{FRIEND_NAME}: You are most welcome! May Allah fulfill our honest dreams.\n{NAME}: I have to leave now. My father is calling me.\n{FRIEND_NAME}: Sure, give my regards to your parents. Goodbye!\n{NAME}: Goodbye! Best of luck to you.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 211
  },
  {
    "id": "dialogue_customer_salesman",
    "title": "Dialogue: Between a Customer and a Salesman (Buying Clothes/Books)",
    "template": "Dialogue between a Salesman and a Customer ({NAME}) at a store.\n\nSalesman: Good morning, Sir! Welcome to our store. How may I help you?\n{NAME}: Good morning! I want to buy a nice shirt for an upcoming party.\nSalesman: Sure! We have a great collection of casual and formal shirts.\n{NAME}: Please show me some formal full-sleeve shirts in light blue or white.\nSalesman: Here is a premium cotton formal shirt. It is very comfortable and stylish.\n{NAME}: Wow, the fabric and design look really good!\n\n{NAME}: Can I check the fitting in the trial room?\nSalesman: Certainly, Sir! The trial room is right over there on your left.\n{NAME}: (After trying) The size fits me perfectly. What is the price of this shirt?\nSalesman: The price is 1,200 Taka, and we are offering a 10% discount today.\n{NAME}: That sounds fair. Please pack this shirt nicely.\nSalesman: Sure, Sir! Here is your packed shirt along with the cash memo.\n\n{NAME}: Here is the money. Thank you for your wonderful customer service.\nSalesman: You are most welcome, Sir! Thank you for shopping with us.\n{NAME}: I will definitely visit your store again.\nSalesman: Please visit us again. Have a great day and goodbye!\n{NAME}: Goodbye!",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 205
  },
  {
    "id": "dialogue_doctor_patient",
    "title": "Dialogue: Between a Doctor and a Patient",
    "template": "Dialogue between a Doctor and a Patient ({NAME}).\n\nDoctor: Good morning! Please sit down. What seems to be the problem?\n{NAME}: Good morning, Doctor. I have been suffering from a fever and headache since yesterday.\nDoctor: I see. Let me check your temperature and pulse first.\n{NAME}: Doctor, I also feel very weak and have a sore throat.\nDoctor: Your temperature is 101 degrees Fahrenheit. Open your mouth, please.\n{NAME}: Ah... Is it anything serious, Doctor?\n\nDoctor: Don't worry, it is just a seasonal viral flu. There is nothing to panic about.\n{NAME}: What medicines should I take, Doctor?\nDoctor: I am prescribing paracetamol for the fever and an antihistamine for your throat.\n{NAME}: How many days do I need to take these medicines?\nDoctor: Take them for three days after meals, and drink plenty of warm water.\n{NAME}: Should I follow any special diet?\nDoctor: Eat light, nutritious food and take complete bed rest for two days.\n\n{NAME}: Thank you so much, Doctor, for your kind advice and treatment.\nDoctor: You are welcome! You will recover very soon.\n{NAME}: Here is your consultation fee. Goodbye, Doctor!\nDoctor: Take care and get well soon. Goodbye!",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 195
  },
  {
    "id": "dialogue_picnic_plan",
    "title": "Dialogue: Planning a Picnic / Study Tour",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about planning a school picnic.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. Our final exams have just ended!\n{FRIEND_NAME}: Yes! We are all totally free and relaxed now.\n{NAME}: How about arranging a picnic or study tour with our classmates?\n{FRIEND_NAME}: That is an excellent idea! Where should we go?\n\n{NAME}: I think Sonargaon or the National Botanical Garden would be great spots.\n{FRIEND_NAME}: Sonargaon is historical and very beautiful. Everybody will love it.\n{NAME}: How many students and teachers will join us?\n{FRIEND_NAME}: Around 30 students and two guide teachers will join our picnic team.\n{NAME}: We should hire a tourist bus and arrange a music system for fun.\n{FRIEND_NAME}: Yes! We will also hire a cook to prepare delicious Biryani for lunch.\n{NAME}: Let us collect contributions from everyone tomorrow.\n\n{NAME}: Thank you so much for helping me plan this exciting picnic.\n{FRIEND_NAME}: You are most welcome! We are going to have tremendous fun.\n{NAME}: I have to go now to inform our class captain.\n{FRIEND_NAME}: Sure, let us meet tomorrow with the list. Goodbye!\n{NAME}: Goodbye! See you in class.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 200
  },
  {
    "id": "dialogue_book_fair_visit",
    "title": "Dialogue: Visiting Book Fair",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about visiting the Ekushey Book Fair.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. Did you visit the Ekushey Book Fair this year?\n{FRIEND_NAME}: Yes, I visited the Bangla Academy book fair last Friday with my family.\n{NAME}: How was your experience there?\n{FRIEND_NAME}: It was truly exciting and colorful! Thousands of book lovers were there.\n\n{NAME}: What kind of books did you find at the fair?\n{FRIEND_NAME}: There were hundreds of stalls with storybooks, novels, science fiction, and history.\n{NAME}: Did you buy any books for yourself?\n{FRIEND_NAME}: Yes, I bought two science fiction novels by Zafar Iqbal and a poetry book.\n{NAME}: Did you get a chance to meet any famous writers?\n{FRIEND_NAME}: Yes, I met an author and took his autograph on my new book!\n{NAME}: That is wonderful! Book fairs create a genuine love for reading among students.\n\n{NAME}: Thank you so much for sharing your wonderful experience with me.\n{FRIEND_NAME}: You are most welcome! You should also visit the fair before it ends.\n{NAME}: I will definitely visit this coming weekend. I have to go now.\n{FRIEND_NAME}: Okay, enjoy your visit when you go. Goodbye!\n{NAME}: Goodbye! Take care.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 210
  },
  {
    "id": "dialogue_sick_friend_visit",
    "title": "Dialogue: Visiting a Sick Friend",
    "template": "Dialogue between {NAME} and a Sick Friend ({FRIEND_NAME}) during a visit.\n\n{NAME}: Hello {FRIEND_NAME}! How are you feeling today?\n{FRIEND_NAME}: Hello {NAME}! Thank you for visiting me. I am feeling slightly better today.\n{NAME}: We were all very worried when you were absent from school.\n{FRIEND_NAME}: I had severe fever, but the doctor said the crisis is over now.\n{NAME}: That is a big relief! I brought some fresh fruits for you.\n{FRIEND_NAME}: Thank you so much, {NAME}. You are very thoughtful.\n\n{NAME}: Did the doctor say when you can return home and join classes?\n{FRIEND_NAME}: The doctor advised me to rest for another four days before going back to school.\n{NAME}: Don't worry about school lessons at all. I have written all class notes for you.\n{FRIEND_NAME}: You are such a true friend! Thank you so much for your help.\n{NAME}: It is my duty! Just focus on resting and eating nutritious food.\n{FRIEND_NAME}: With your prayers and support, I will recover very quickly.\n\n{NAME}: I should leave now so that you can get proper rest and sleep.\n{FRIEND_NAME}: Thank you again from the bottom of my heart for coming to see me.\n{NAME}: You are always welcome! Praying for your quick recovery.\n{FRIEND_NAME}: Goodbye, my dear friend.\n{NAME}: Goodbye! Get well soon.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 214
  },
  {
    "id": "dialogue_football_match",
    "title": "Dialogue: Discussing a Football Match",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about an exciting football match.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. Did you watch yesterday's final football match?\n{FRIEND_NAME}: Yes! I watched the whole match on TV. It was breathtaking!\n{NAME}: What a thrilling performance by both teams!\n{FRIEND_NAME}: Absolutely! The excitement lasted until the final whistle.\n\n{NAME}: Which moment of the match did you enjoy the most?\n{FRIEND_NAME}: The second goal in the 85th minute was an unbelievable long-range shot!\n{NAME}: Yes, and the goalkeeper also made two brilliant penalty saves.\n{FRIEND_NAME}: Both teams displayed great teamwork, discipline, and sportsmanship.\n{NAME}: Football is truly the most popular and energetic sport in the world.\n{FRIEND_NAME}: Playing football also keeps our physical body strong, active, and fit.\n{NAME}: Let us play a friendly football match on our school ground this Friday.\n\n{NAME}: Thank you so much for this exciting sports discussion.\n{FRIEND_NAME}: You are most welcome! I am already excited for Friday's game.\n{NAME}: I must go home now to complete my studies.\n{FRIEND_NAME}: Sure, take care and see you on the playground. Goodbye!\n{NAME}: Goodbye!",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 193
  },
  {
    "id": "dialogue_homework_help",
    "title": "Dialogue: Asking for Help with Homework",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} asking for help with school homework.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. Are you free for a few minutes?\n{FRIEND_NAME}: Yes, I am totally free. What happened, {NAME}?\n{NAME}: Actually, I am having trouble understanding some English grammar homework.\n{FRIEND_NAME}: Don't worry at all! I will gladly help you. What is the topic?\n\n{NAME}: It is about Voice Change and Right Forms of Verbs.\n{FRIEND_NAME}: Voice Change is very easy once you understand the basic subject-object rules.\n{NAME}: Can you please explain this difficult exercise on page 45?\n{FRIEND_NAME}: Sure! Look, here the object becomes the subject, followed by the auxiliary verb.\n{NAME}: Oh! Now I understand the pattern clearly. It is much easier than I thought!\n{FRIEND_NAME}: Exactly! If you practice these 10 sentences, you will master it completely.\n\n{NAME}: Thank you so much for your kind help and patience.\n{FRIEND_NAME}: You are most welcome! We can always study and solve problems together.\n{NAME}: I have to finish writing the rest of the exercises now.\n{FRIEND_NAME}: Best of luck with your homework. Goodbye!\n{NAME}: Goodbye! See you in class tomorrow.",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 199
  },
  {
    "id": "dialogue_digital_bangladesh",
    "title": "Dialogue: Planning for Digital Bangladesh",
    "template": "Dialogue between {NAME} and {FRIEND_NAME} about Digital and Smart Bangladesh.\n\n{NAME}: Hello {FRIEND_NAME}! How are you?\n{FRIEND_NAME}: Hello {NAME}! I am fine, and you?\n{NAME}: I am fine too. What are you reading so attentively?\n{FRIEND_NAME}: I am reading an article on Smart Bangladesh and Digital technology.\n{NAME}: That is very interesting! How has digitalization changed our country?\n{FRIEND_NAME}: It has brought a revolutionary change to every sector of Bangladesh.\n\n{NAME}: What are the biggest benefits people are getting today?\n{FRIEND_NAME}: Mobile banking like bKash/Nagad, online admission, and e-governance make life easy.\n{NAME}: How is it helping students in their education?\n{FRIEND_NAME}: Multimedia classrooms, digital textbooks, and online classes make learning fun and accessible.\n{NAME}: How can our generation contribute to a Smart Bangladesh?\n{FRIEND_NAME}: We should learn computer programming, science, and technical skills to lead the nation.\n{NAME}: That is a great vision. We must prepare ourselves for the digital future.\n\n{NAME}: Thank you so much for this modern and informative discussion.\n{FRIEND_NAME}: You are most welcome! The future of our country is bright.\n{NAME}: I have to go now to attend my computer training session.\n{FRIEND_NAME}: Excellent! Learn well and take care. Goodbye!\n{NAME}: Goodbye!",
    "category": "Dialogue",
    "classLevel": "All",
    "vocabulary": [],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 197
  },
  {
    "id": "story_unity_is_strength",
    "title": "Unity is Strength",
    "template": "Once an old farmer lived with his four sons in a village. The sons always quarrelled with one another. The old man was very worried about them. One day, he fell ill and decided to teach them a lesson. He called all his sons and gave them a bundle of sticks tied together. He asked each son to break the bundle. They all tried hard with all their strength, but nobody could break it.\n\nThen the father untied the bundle and gave one single stick to each son. He told them to break the stick. This time, they broke the sticks very easily in seconds. The old man smiled and said, \"My sons, if you remain united like the bundle, nobody can hurt you. But if you quarrel and stay divided, you will be broken easily.\"\n\nThe sons understood the lesson, stopped fighting, and lived happily together.\n\nMoral: Unity is strength.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "quarrel",
        "banglaMeaning": "ঝগড়া করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "bundle",
        "banglaMeaning": "আঁটি / গুচ্ছ",
        "partOfSpeech": "noun"
      },
      {
        "word": "united",
        "banglaMeaning": "একতাবদ্ধ",
        "partOfSpeech": "adj"
      }
    ],
    "questions": [],
    "isSuggestion": true,
    "boardTags": [
      "SSC 2023",
      "Dhaka Board"
    ],
    "banglaTranslation": "একদা এক গ্রামে এক বৃদ্ধ কৃষক তার চার ছেলেকে নিয়ে বাস করতেন। ছেলেরা সর্বদা নিজেদের মধ্যে ঝগড়া করত। বৃদ্ধ লোকটি তাদেরকে নিয়ে খুব চিন্তিত ছিলেন। একদিন তিনি অসুস্থ হয়ে পড়লেন এবং তাদেরকে একটি শিক্ষা দেওয়ার সিদ্ধান্ত নিলেন। তিনি ছেলেদের ডাকলেন এবং একসাথে বাঁধা এক আঁটি লাঠি দিলেন। তিনি প্রত্যেক ছেলেকে সেই আঁটি ভাঙতে বললেন। তারা তাদের সমস্ত শক্তি দিয়ে চেষ্টা করল, কিন্তু কেউই তা ভাঙতে পারল না।\n\nএরপর পিতা আঁটিটি খুলে দিলেন এবং প্রত্যেক ছেলেকে একটি করে লাঠি দিলেন। তিনি তাদেরকে লাঠিটি ভাঙতে বললেন। এবার তারা খুব সহজেই কয়েক সেকেন্ডের মধ্যে লাঠিগুলো ভেঙে ফেলল। বৃদ্ধ লোকটি হেসে বললেন, \"হে আমার ছেলেরা, যদি তোমরা এই আঁটির মতো ঐক্যবদ্ধ থাকো, তবে কেউ তোমাদের ক্ষতি করতে পারবে না। কিন্তু যদি তোমরা ঝগড়া করে বিভক্ত হয়ে যাও, তবে খুব সহজেই ভেঙে পড়বে।\"\n\nছেলেরা এই শিক্ষা বুঝতে পারল, ঝগড়া থামাল এবং সুখে-শান্তিতে একসাথে বাস করতে লাগল।\n\nনীতিবাক্য: একতাই বল।",
    "wordCount": 151
  },
  {
    "id": "story_honesty_best_policy",
    "title": "Honesty is the Best Policy",
    "template": "Once a poor woodcutter lived near a river. Every day he cut wood in the forest and sold it in the market to feed his family. One day, while cutting a tree near the river, his iron axe slipped from his hand and fell into deep water. The poor man sat by the river and started crying because he had no other axe.\n\nSuddenly, a river god appeared from the water. Seeing the sad man, the god dived into the water and brought out a golden axe. The woodcutter said, \"This is not my axe.\" The god dived again and brought out a silver axe. The woodcutter again said no. Finally, the god brought his old iron axe. The woodcutter became very happy and said, \"Yes, this is my axe!\"\n\nThe river god was pleased with his honesty and gave him all three axes as a reward.\n\nMoral: Honesty is the best policy.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "woodcutter",
        "banglaMeaning": "কাঠুরে",
        "partOfSpeech": "noun"
      },
      {
        "word": "appeared",
        "banglaMeaning": "আবির্ভূত হলো / দেখা দিল",
        "partOfSpeech": "verb"
      },
      {
        "word": "reward",
        "banglaMeaning": "পুরস্কার",
        "partOfSpeech": "noun"
      }
    ],
    "questions": [],
    "isSuggestion": true,
    "boardTags": [
      "Rajshahi Board",
      "Top Suggestion ⭐"
    ],
    "banglaTranslation": "একদা এক নদীর তীরে এক দরিদ্র কাঠুরে বাস করত। প্রতিদিন সে বনে কাঠ কাটত এবং পরিবারকে খাওয়ানোর জন্য বাজারে তা বিক্রি করত। একদিন নদীর কাছে একটি গাছ কাটার সময় তার লোহার কুঠারটি হাত থেকে পিছলে গভীর পানিতে পড়ে গেল। দরিদ্র লোকটি নদীর পাড়ে বসে কাঁদতে লাগল, কারণ তার আর কোনো কুঠার ছিল না।\n\nহঠাৎ পানি থেকে একজন জলদেবতা আবির্ভূত হলেন। দুঃখী লোকটিকে দেখে জলদেবতা পানিতে ডুব দিলেন এবং একটি সোনার কুঠার নিয়ে এলেন। কাঠুরে বলল, \"এটি আমার কুঠার নয়।\" দেবতা আবার ডুব দিলেন এবং একটি রূপার কুঠার নিয়ে এলেন। কাঠুরে আবারও না বলল। অবশেষে দেবতা তার পুরানো লোহার কুঠারটি নিয়ে এলেন। কাঠুরে খুব খুশি হয়ে বলল, \"হ্যাঁ, এটিই আমার কুঠার!\"\n\nজলদেবতা তার সততায় অত্যন্ত সন্তুষ্ট হলেন এবং পুরস্কার হিসেবে তাকে তিনটি কুঠারই দিয়ে দিলেন।\n\nনীতিবাক্য: সততাই সর্বোৎকৃষ্ট পন্থা।",
    "wordCount": 153
  },
  {
    "id": "story_friend_in_need",
    "title": "A Friend in Need is a Friend Indeed",
    "template": "Once two close friends, Rahim and Karim, were walking through a deep forest. They promised to help each other in times of danger. Suddenly, they saw a big bear coming towards them. Both friends were terrified.\n\nRahim quickly climbed up a nearby tree to save himself. But Karim did not know how to climb trees. He remembered that bears do not touch dead bodies. So, he lay flat on the ground, closed his eyes, and held his breath.\n\nThe bear came near Karim, smelled his nose and ears, and thought he was dead. So, the bear slowly walked away into the forest.\n\nWhen the danger was over, Rahim came down from the tree and asked jokingly, \"What did the bear whisper in your ear?\" Karim replied, \"The bear told me never to trust a friend who leaves you alone in danger.\"\n\nMoral: A friend in need is a friend indeed.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "terrified",
        "banglaMeaning": "ভীত / আতঙ্কিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "whisper",
        "banglaMeaning": "ফিসফিস করে বলা",
        "partOfSpeech": "verb"
      },
      {
        "word": "danger",
        "banglaMeaning": "বিপদ",
        "partOfSpeech": "noun"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 150
  },
  {
    "id": "story_slow_steady",
    "title": "Slow and Steady Wins the Race",
    "template": "Once a proud hare and a slow tortoise lived in a forest. The hare always laughed at the tortoise for his slow speed. The tortoise felt bad and challenged the hare to a running race. The hare proudly accepted.\n\nThe race started. The hare ran very fast and went far ahead. Looking back, he saw the tortoise far behind. The hare thought, \"The tortoise is very slow. Let me take a short nap under this tree.\" Soon, he fell into deep sleep.\n\nMeanwhile, the tortoise kept walking slowly but steadily without stopping. After some time, he passed the sleeping hare and reached the finish line.\n\nWhen the hare woke up, he ran fast, but it was too late. The tortoise had already won the race. The hare felt very ashamed.\n\nMoral: Slow and steady wins the race.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "challenged",
        "banglaMeaning": "চ্যালেঞ্জ ছুড়ে দিল / আহ্বান করল",
        "partOfSpeech": "verb"
      },
      {
        "word": "steadily",
        "banglaMeaning": "ধীরে কিন্তু অবিরাম গতিতে",
        "partOfSpeech": "adv"
      },
      {
        "word": "ashamed",
        "banglaMeaning": "লজ্জিত",
        "partOfSpeech": "adj"
      }
    ],
    "questions": [],
    "isSuggestion": true,
    "boardTags": [
      "Class 6-8",
      "Cumilla Board"
    ],
    "banglaTranslation": "একদা এক বনে একটি অহংকারী খরগোশ এবং একটি ধীরগতির কচ্ছপ বাস করত। খরগোশটি সর্বদা কচ্ছপের ধীর গতির জন্য তাকে উপহাস করত। কচ্ছপের খারাপ লাগল এবং সে খরগোশকে দৌড় প্রতিযোগিতার চ্যালেঞ্জ জানাল। খরগোশ গর্বের সাথে তা গ্রহণ করল।\n\nদৌড় শুরু হলো। খরগোশ খুব দ্রুত দৌড়াল এবং অনেক দূর এগিয়ে গেল। পেছন ফিরে সে দেখল কচ্ছপ অনেক পেছনে পড়ে আছে। খরগোশ ভাবল, \"কচ্ছপ তো অনেক ধীর। এই গাছের নিচে আমি একটু ঘুমিয়ে নিই।\" দ্রুতই সে গভীর ঘুমে তলিয়ে গেল।\n\nএদিকে কচ্ছপটি না থেমে ধীরে কিন্তু অবিরামভাবে হেঁটে চলল। কিছুক্ষণ পর সে ঘুমন্ত খরগোশকে ছাড়িয়ে গেল এবং ফিনিশ লাইনে পৌঁছে গেল।\n\nখরগোশের যখন ঘুম ভাঙল, সে দ্রুত দৌড়াল, কিন্তু তখন অনেক দেরি হয়ে গেছে। কচ্ছপ ততক্ষণে দৌড়ে জয়ী হয়ে গেছে। খরগোশ খুব লজ্জিত হলো।\n\nনীতিবাক্য: ধীরে অথচ নিয়মিত চলাই বিজয়ের চাবিকাঠি।",
    "wordCount": 137
  },
  {
    "id": "story_where_will_way",
    "title": "Where There is a Will, There is a Way",
    "template": "On a hot summer day, a crow was very thirsty. He flew from place to place in search of water, but found none. He became very weak and tired.\n\nAt last, he saw a pitcher under a tree in a garden. He flew down eagerly and looked inside. There was some water at the bottom of the pitcher. But the water level was too low, and his beak could not reach it.\n\nThe clever crow did not give up hope. He looked around and saw many small pebbles on the ground. He had a brilliant idea. He picked up the pebbles one by one with his beak and dropped them into the pitcher.\n\nSlowly, the water level rose to the top. The crow drank the cool water happily, quenched his thirst, and flew away with joy.\n\nMoral: Where there is a will, there is a way.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "pitcher",
        "banglaMeaning": "কলসি / পানির পাত্র",
        "partOfSpeech": "noun"
      },
      {
        "word": "pebbles",
        "banglaMeaning": "ছোট নুড়িপাথর",
        "partOfSpeech": "noun"
      },
      {
        "word": "quenched",
        "banglaMeaning": "মিটাল (তৃষ্ণা)",
        "partOfSpeech": "verb"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 146
  },
  {
    "id": "story_grasp_all_lose_all",
    "title": "Grasp All, Lose All",
    "template": "Once a poor farmer lived in a small village. He had a wonderful goose. Every morning, the goose laid a shining golden egg. The farmer sold the egg in the market and earned good money. Slowly, he became rich.\n\nHowever, the farmer was very greedy and impatient. He thought, \"There must be many golden eggs inside the stomach of this goose. Why should I wait for one egg every day? I will kill the goose and get all the eggs at once.\"\n\nDriven by greed, he took a sharp knife and cut open the belly of the poor goose. But to his great shock, he found no eggs inside. It was just like any other ordinary goose.\n\nThe greedy farmer lost both the goose and the golden eggs forever. He cried bitterly over his foolish mistake.\n\nMoral: Grasp all, lose all.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "greedy",
        "banglaMeaning": "লোভী",
        "partOfSpeech": "adj"
      },
      {
        "word": "impatient",
        "banglaMeaning": "অধৈর্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "bitterly",
        "banglaMeaning": "তিক্তভাবে / অঝোরে",
        "partOfSpeech": "adv"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 141
  },
  {
    "id": "story_robert_bruce_spider",
    "title": "Robert Bruce and the Spider",
    "template": "Robert Bruce was the brave king of Scotland. Enemy soldiers invaded his kingdom and drove him away. Bruce fought six battles against his enemies to free his country, but he lost every time.\n\nHopeless and sad, the king hid inside a dark cave in the mountains. He thought he would never win and wanted to give up. While sitting quietly, he noticed a tiny spider trying to reach its web on the roof of the cave.\n\nThe spider tried six times, but fell down every time. Yet, it did not lose hope. On the seventh try, the spider tried with all its strength and successfully reached the web.\n\nThis inspired King Bruce deeply. He said, \"If a tiny spider can succeed after failing six times, why should I give up?\" He gathered his soldiers again, fought bravely, and freed his motherland.\n\nMoral: Failure is the pillar of success.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "invaded",
        "banglaMeaning": "আক্রমণ করল",
        "partOfSpeech": "verb"
      },
      {
        "word": "inspired",
        "banglaMeaning": "অনুপ্রাণিত করল",
        "partOfSpeech": "verb"
      },
      {
        "word": "succeed",
        "banglaMeaning": "সফল হওয়া",
        "partOfSpeech": "verb"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 148
  },
  {
    "id": "story_bell_the_cat",
    "title": "Who Will Bell the Cat",
    "template": "A large number of mice lived in a big house. A big cat also lived there. The cat hunted and killed the mice every day. The mice were terrified and could not go out to find food.\n\nTo solve this serious problem, all the mice held a meeting. Many mice gave different suggestions. Finally, a young mouse stood up and said, \"I have a great plan! Let us tie a bell around the cat's neck. When the cat comes, the bell will ring and we can run away to safety.\"\n\nAll the mice cheered and clapped with joy. But an old wise mouse stood up and asked calmly, \"The plan is very good. But who will bell the cat?\"\n\nHearing this, all the mice became silent. No mouse was brave enough to go near the dangerous cat.\n\nMoral: It is easy to say, but hard to do.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "terrified",
        "banglaMeaning": "আতঙ্কিত / অত্যন্ত ভীত",
        "partOfSpeech": "adj"
      },
      {
        "word": "suggestions",
        "banglaMeaning": "পরামর্শ / প্রস্তাব",
        "partOfSpeech": "noun"
      },
      {
        "word": "silent",
        "banglaMeaning": "নীরব / চুপচাপ",
        "partOfSpeech": "adj"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 147
  },
  {
    "id": "story_liar_shepherd",
    "title": "The Liar Shepherd Boy",
    "template": "A young shepherd boy tended sheep near a forest on the edge of a village. His work was boring, so he wanted to have some fun.\n\nOne day, he shouted loudly, \"Wolf! Wolf! Help me! A wolf is attacking the sheep!\" The kind villagers heard his cries, left their work, and ran with sticks to help him. When they arrived, they saw no wolf. The boy laughed at them. The villagers felt angry and went back. The boy played the same trick a few days later.\n\nOne afternoon, a real wolf came out of the forest and attacked the sheep. The terrified boy screamed with all his might, \"Wolf! Wolf! Please help!\" But this time, the villagers thought he was lying again. Nobody came to help him.\n\nThe wolf killed many sheep, and the boy wept in deep sorrow.\n\nMoral: Nobody believes a liar, even when he speaks the truth.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "shepherd",
        "banglaMeaning": "রাখাল বালক",
        "partOfSpeech": "noun"
      },
      {
        "word": "screamed",
        "banglaMeaning": "চিৎকার করল",
        "partOfSpeech": "verb"
      },
      {
        "word": "sorrow",
        "banglaMeaning": "দুঃখ / অনুশোচনা",
        "partOfSpeech": "noun"
      }
    ],
    "questions": [],
    "isSuggestion": true,
    "boardTags": [
      "Jashore Board",
      "SSC 2024"
    ],
    "banglaTranslation": "এক তরুণ রাখাল বালক গ্রামের প্রান্তে বনের কাছে ভেড়া চরাত। তার কাজ একঘেয়ে ছিল, তাই সে কিছুটা মজা করতে চাইল।\n\nএকদিন সে জোরে চিৎকার করে উঠল, \"বাঘ! বাঘ! বাঁচাও! একটি বাঘ ভেড়াদের আক্রমণ করেছে!\" দয়ালু গ্রামবাসীরা তার ডাক শুনে কাজকর্ম ফেলে লাঠি হাতে তাকে সাহায্য করতে ছুটে এল। তারা এসে কোনো বাঘ দেখতে পেল না। ছেলেটি তাদের দেখে হাসতে লাগল। গ্রামবাসীরা রেগে ফিরে গেল। কয়েকদিন পর ছেলেটি একই চালাকি করল।\n\nএকদিন বিকেলে সত্যিই একটি নেকড়ে বাঘ বন থেকে বেরিয়ে এসে ভেড়াদের আক্রমণ করল। ভীত ছেলেটি তার সর্বশক্তি দিয়ে চিৎকার করল, \"বাঘ! বাঘ! দয়া করে বাঁচাও!\" কিন্তু এবার গ্রামবাসীরা ভাবল সে আবার মিথ্যা বলছে। কেউ তাকে সাহায্য করতে এল না।\n\nবাঘটি অনেকগুলো ভেড়া মেরে ফেলল এবং রাখাল বালক গভীর শোকে কাঁদতে লাগল।\n\nনীতিবাক্য: মিথ্যাবাদীকে কেউ বিশ্বাস করে না, এমনকি যখন সে সত্য বলে তখনও নয়।",
    "wordCount": 150
  },
  {
    "id": "story_lion_mouse",
    "title": "The Lion and the Mouse",
    "template": "One day, a mighty lion was sleeping under a tree in a jungle. A little mouse was playing nearby and accidentally ran over the lion's nose. The lion woke up angrily and caught the tiny mouse under his huge paw.\n\nThe frightened mouse begged, \"Please spare my life, King of the jungle! If you let me go, I may help you one day.\" The lion laughed at the idea of a tiny mouse helping him, but kindly let him go.\n\nA few days later, hunters caught the lion in a strong rope net. The lion roared loudly in helpless anger. Hearing the roar, the little mouse ran to the spot. He quickly cut the thick ropes with his sharp teeth.\n\nSoon, the lion was free. He thanked the little mouse warmly and learned that even small creatures can be of great help.\n\nMoral: Kindness is never wasted.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "mighty",
        "banglaMeaning": "শক্তিশালী / পরাক্রমশালী",
        "partOfSpeech": "adj"
      },
      {
        "word": "spare",
        "banglaMeaning": "প্রাণে বাঁচানো / ক্ষমা করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "creatures",
        "banglaMeaning": "প্রাণী / জীব",
        "partOfSpeech": "noun"
      }
    ],
    "questions": [],
    "isSuggestion": true,
    "boardTags": [
      "Chattogram Board",
      "SSC"
    ],
    "banglaTranslation": "একদিন এক বিশাল সিংহ জঙ্গলে একটি গাছের নিচে ঘুমাচ্ছিল। একটি ছোট ইঁদুর কাছেই খেলছিল এবং হঠাৎ ভুলবশত সিংহের নাকের ওপর দিয়ে দৌড়ে গেল। সিংহ রেগে জেগে উঠল এবং তার বিশাল থাবার নিচে ক্ষুদ্র ইঁদুরটিকে আটকে ফেলল।\n\nভীত ইঁদুরটি মিনতি করল, \"হে বনের রাজা, দয়া করে আমার প্রাণ ভিক্ষা দিন! আপনি যদি আমাকে ছেড়ে দেন, তবে একদিন আমিও আপনাকে সাহায্য করতে পারি।\" একটি ছোট ইঁদুর তাকে সাহায্য করবে শুনে সিংহ হেসে উঠল, কিন্তু দয়া করে তাকে ছেড়ে দিল।\n\nকয়েকদিন পর শিকারিরা সিংহটিকে একটি শক্ত দড়ির জালে বন্দি করল। সিংহটি অসহায় ক্রোধে গর্জন করতে লাগল। গর্জন শুনে ছোট ইঁদুরটি দৌড়ে এল। সে তার ধারালো দাঁত দিয়ে দ্রুত মোটা দড়িগুলো কেটে ফেলল।\n\nশীঘ্রই সিংহটি মুক্ত হলো। সে ছোট ইঁদুরকে উষ্ণ ধন্যবাদ জানাল এবং শিখল যে ক্ষুদ্র প্রাণীরাও অনেক বড় সাহায্য করতে পারে।\n\nনীতিবাক্য: দয়া ও পরোপকার কখনো বৃথা যায় না।",
    "wordCount": 147
  },
  {
    "id": "story_bayazid_devotion",
    "title": "Devotion to Mother - Bayazid Bostami",
    "template": "Hazrat Bayazid Bostami was a devoted boy who loved his sick mother very much. One cold winter night, while he was studying, his mother woke up and asked for a glass of water.\n\nBayazid went to the kitchen, but found the water pitcher completely empty. He did not want to disappoint his mother. So, he took a jar and walked through the dark, cold night to a distant well to fetch water.\n\nWhen he returned home with the water, his mother had fallen asleep again. Unwilling to disturb her peaceful sleep, Bayazid stood quietly beside her bed holding the glass of water in his cold hands all night.\n\nIn the morning, his mother opened her eyes and saw her son shivering with the glass. Tears of love rolled down her eyes. She prayed from the bottom of her heart for him. Her prayers made him a great saint.\n\nMoral: Respect and love for parents brings divine blessings.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "devoted",
        "banglaMeaning": "অনুগত / ভক্তিমান",
        "partOfSpeech": "adj"
      },
      {
        "word": "fetch",
        "banglaMeaning": "গিয়ে নিয়ে আসা",
        "partOfSpeech": "verb"
      },
      {
        "word": "shivering",
        "banglaMeaning": "কাঁপছে (ঠান্ডায়)",
        "partOfSpeech": "verb"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 157
  },
  {
    "id": "story_sheikh_saadi_dress",
    "title": "Sheikh Saadi and the Dress",
    "template": "Sheikh Saadi was a famous Persian poet and wise man. Once, a rich nobleman invited him to a big feast. Saadi went there wearing simple and old clothes.\n\nSeeing his poor dress, the host ignored him. He gave Saadi no respect and offered him ordinary food in a dark corner. Saadi ate quietly and returned home.\n\nA few days later, Saadi went to another feast at the same house. This time, he wore expensive silk robes and a grand turban. The host welcomed him warmly, gave him the best seat, and served delicious food.\n\nWhen the food was served, Saadi did not eat. Instead, he began putting the food into his pockets and robes, saying, \"Eat, my dress, eat!\" The host was surprised and asked why he was doing so. Saadi replied, \"You welcomed me for my dress, not for me.\"\n\nThe host felt very ashamed.\n\nMoral: Character is more important than dress.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "nobleman",
        "banglaMeaning": "অভিজাত ব্যক্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "ignored",
        "banglaMeaning": "উপেক্ষা করল / পাত্তা দিল না",
        "partOfSpeech": "verb"
      },
      {
        "word": "delicious",
        "banglaMeaning": "সুস্বাদু",
        "partOfSpeech": "adj"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 153
  },
  {
    "id": "story_abdul_qadir_truthfulness",
    "title": "Hazrat Abdul Qadir Jilani's Truthfulness",
    "template": "When Hazrat Abdul Qadir Jilani was a young boy, he was sent to Baghdad for higher education. Before leaving, his pious mother sewed forty gold coins inside his coat for his expenses. She advised him, \"My son, always speak the truth and never tell a lie.\"\n\nOn the way, a gang of robbers attacked their caravan and looted everyone's money. A robber asked young Abdul Qadir, \"Do you have anything valuable?\" The boy replied truthfully, \"Yes, I have forty gold coins sewn inside my coat.\"\n\nThe robber took him to the leader. The leader asked in surprise, \"Why did you reveal your hidden money?\" The boy replied, \"I promised my mother never to tell a lie.\"\n\nHearing this, the bandit leader broke into tears. He felt ashamed, returned all the looted goods, and gave up robbery forever.\n\nMoral: Truthfulness always triumphs.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "pious",
        "banglaMeaning": "ধার্মিক / পুণ্যবান",
        "partOfSpeech": "adj"
      },
      {
        "word": "caravan",
        "banglaMeaning": "কাফেলা / যাত্রীদলের বহর",
        "partOfSpeech": "noun"
      },
      {
        "word": "reveal",
        "banglaMeaning": "ফাঁস করা / প্রকাশ করা",
        "partOfSpeech": "verb"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 141
  },
  {
    "id": "story_sour_grapes",
    "title": "The Fox and the Sour Grapes",
    "template": "One hot afternoon, a hungry fox was wandering in search of food. He entered a lush garden and saw ripe, juicy purple grapes hanging from a high vine.\n\nHis mouth began to water. He stepped back, ran, and jumped as high as he could, but he could not reach the grapes. He tried again and again from different angles. He leaped with all his strength, but the grapes hung far too high.\n\nAfter trying many times, the fox became tired and breathless. Realizing he could not get them, he walked away with his nose in the air and said, \"The grapes are sour and not good to eat anyway.\"\n\nMoral: It is easy to dislike what you cannot get.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "wandering",
        "banglaMeaning": "ঘোরাঘুরি করছিল",
        "partOfSpeech": "verb"
      },
      {
        "word": "angles",
        "banglaMeaning": "বিভিন্ন দিক / কোণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "sour",
        "banglaMeaning": "টক / অম্ল",
        "partOfSpeech": "adj"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 119
  },
  {
    "id": "story_ant_dove",
    "title": "The Ant and the Dove",
    "template": "On a hot summer day, a little ant went to a river to drink water. She slipped on the wet bank and fell into the swirling river. The ant was drowning and cried for help.\n\nA kind white dove sitting on a nearby tree saw the ant in danger. She quickly plucked a large leaf and dropped it into the water near the ant. The ant climbed onto the leaf and floated safely to the riverbank.\n\nA few days later, a hunter came to the forest. He aimed his net to catch the sleeping dove. The ant saw the danger and immediately bit the hunter's foot hard. The hunter screamed in pain and dropped his net.\n\nThe dove heard the sound and flew away to safety.\n\nMoral: One good turn deserves another.",
    "category": "Short Story",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "swirling",
        "banglaMeaning": "ঘূর্ণায়মান (পানি)",
        "partOfSpeech": "adj"
      },
      {
        "word": "plucked",
        "banglaMeaning": "ছিঁড়ে নিল (পাতা)",
        "partOfSpeech": "verb"
      },
      {
        "word": "aimed",
        "banglaMeaning": "লক্ষ্য স্থির করল",
        "partOfSpeech": "verb"
      }
    ],
    "questions": [],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 132
  },
  {
    "id": "padma_bridge",
    "title": "The Padma Multipurpose Bridge",
    "questions": [],
    "template": "The Padma Multipurpose Bridge is a historic achievement and the biggest infrastructure project in Bangladesh. Built over the mighty Padma River, it is a two-level steel truss bridge measuring 6.15 kilometers in length. It has a four-lane highway on the upper deck and a single-track railway on the lower deck. The bridge directly connects 21 southwestern districts with the capital city Dhaka, reducing travel time significantly. It boosts the national economy, trade, and agriculture. The Padma Bridge stands as a proud symbol of our self-confidence, capability, and economic progress.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "prestigious",
        "banglaMeaning": "মর্যাদাপূর্ণ / সম্মানজনক",
        "partOfSpeech": "adj"
      },
      {
        "word": "turbulent",
        "banglaMeaning": "প্রমত্তা / উত্তাল",
        "partOfSpeech": "adj"
      },
      {
        "word": "revolutionized",
        "banglaMeaning": "আমূল পরিবর্তন এনেছে",
        "partOfSpeech": "verb"
      },
      {
        "word": "domestic",
        "banglaMeaning": "দেশীয় / নিজস্ব",
        "partOfSpeech": "adj"
      },
      {
        "word": "dignity",
        "banglaMeaning": "মর্যাদা / গৌরব",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": true,
    "boardTags": [
      "SSC 2023",
      "Top Suggestion ⭐"
    ],
    "banglaTranslation": "পদ্মা বহুমুখী সেতু আধুনিক বাংলাদেশের প্রকৌশলশিল্পের এক অনন্য সৃষ্টি ও জাতীয় গর্বের প্রতীক। এটি ২০২২ সালের ২৫ জুন প্রধানমন্ত্রী শেখ হাসিনা কর্তৃক উদ্বোধন করা হয়। এটি নিজস্ব অর্থায়নে তৈরি আমাদের আত্মমর্যাদা ও অর্থনৈতিক সক্ষমতার প্রতীক। এই সেতুটি ৬.১৫ কিলোমিটার দীর্ঘ এবং এটি বাংলাদেশের দীর্ঘতম সেতু। পদ্মা সেতু রাজধানী ঢাকার সাথে দক্ষিণ-পশ্চিমাঞ্চলের ২১টি জেলাকে সরাসরি সংযুক্ত করেছে। এটি মানুষের যাতায়াতের সময় কয়েক ঘণ্টা থেকে মাত্র কয়েক মিনিটে নামিয়ে এনেছে। এটি জাতীয় জিডিপিতে প্রায় ১.২% থেকে ১.৫% প্রবৃদ্ধি যোগ করছে।",
    "wordCount": 89
  },
  {
    "id": "metro_rail",
    "title": "Metro Rail in Dhaka",
    "questions": [],
    "template": "The Dhaka Metro Rail (MRT Line-6) is a modern, fast, and eco-friendly electric train service in Bangladesh. It runs on elevated tracks connecting Uttara to Motijheel via key city points. The Metro Rail has transformed urban transportation in Dhaka by saving passengers hours of traffic jam. The air-conditioned trains are safe, clean, and punctual, carrying thousands of commuters every day. Automatic ticketing and smart passes make traveling effortless for students and office workers. Metro Rail is a major milestone in building a modern, smart, and prosperous Bangladesh.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "milestone",
        "banglaMeaning": "যুগান্তকারী মাইলফলক",
        "partOfSpeech": "noun"
      },
      {
        "word": "eco-friendly",
        "banglaMeaning": "পরিবেশবান্ধব",
        "partOfSpeech": "adj"
      },
      {
        "word": "commuters",
        "banglaMeaning": "নিত্যযাত্রীগণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "elevated",
        "banglaMeaning": "উড়াল / উঁচুতে স্থাপিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "metropolis",
        "banglaMeaning": "মহানগরী",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": true,
    "boardTags": [
      "SSC 2024",
      "Dhaka Board"
    ],
    "banglaTranslation": "ঢাকা মেট্রো রেল বাংলাদেশের গণপরিবহন ব্যবস্থার এক যুগান্তকারী ও আধুনিক সংযোজন। উত্তরা থেকে মতিঝিল পর্যন্ত বিস্তৃত এই আধুনিক বিদ্যুৎচালিত দ্রুতগতির রেল প্রতিদিন লক্ষ লক্ষ যাত্রীকে দ্রুত, আরামদায়ক ও যানজটমুক্ত সেবা দিচ্ছে। এটি সম্পূর্ণ পরিবেশবান্ধব এবং শহরের বায়ুদূষণ ও শব্দদূষণ ব্যাপকভাবে হ্রাস করেছে। মেট্রো রেলের কারণে মানুষের মূল্যবান কর্মঘণ্টা ও অর্থ সাশ্রয় হচ্ছে। এটি আমাদের আধুনিক স্মার্ট বাংলাদেশের অগ্রযাত্রার এক উজ্জ্বল নিদর্শন।",
    "wordCount": 87
  },
  {
    "id": "price_hike",
    "title": "Price Hike of Essential Commodities",
    "questions": [],
    "template": "Price hike of essential commodities is a serious problem affecting the daily life of common people in Bangladesh. The prices of daily necessities like rice, oil, onions, vegetables, and gas have increased significantly. Inflation, market syndicates, transportation costs, and global economic crises are the primary causes of price hike. It puts severe financial pressure on middle-class and low-income families, making it difficult for them to afford nutritious food and basic needs. To control price hike, the government should monitor markets strictly, break unfair syndicates, and ensure fair distribution of goods.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "commodities",
        "banglaMeaning": "নিত্যপ্রয়োজনীয় পণ্যসামগ্রী",
        "partOfSpeech": "noun"
      },
      {
        "word": "inflation",
        "banglaMeaning": "মুদ্রাস্ফীতি / দরবৃদ্ধি",
        "partOfSpeech": "noun"
      },
      {
        "word": "hoarding",
        "banglaMeaning": "মজুতদারি",
        "partOfSpeech": "noun"
      },
      {
        "word": "syndicate",
        "banglaMeaning": "অসাধু চক্র",
        "partOfSpeech": "noun"
      },
      {
        "word": "extortion",
        "banglaMeaning": "চাঁদাবাজি",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 90
  },
  {
    "id": "load_shedding",
    "title": "Load Shedding",
    "questions": [],
    "template": "Load shedding means the planned suspension of electricity supply for a specific period. It is a major crisis in Bangladesh caused by insufficient power generation compared to high demand. Load shedding disrupts normal daily life, studies, and industrial production. During load shedding in summer, people suffer from extreme heat and suffocating darkness. Students cannot study properly for their examinations, and hospital surgeries are interrupted. Factories and businesses face heavy financial losses. To overcome load shedding, we must build new power plants, utilize renewable solar energy, and prevent the wastage of electricity.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "discontinuation",
        "banglaMeaning": "বিচ্ছিন্নকরণ / বন্ধ হওয়া",
        "partOfSpeech": "noun"
      },
      {
        "word": "generation",
        "banglaMeaning": "বিদ্যুৎ উৎপাদন",
        "partOfSpeech": "noun"
      },
      {
        "word": "humid",
        "banglaMeaning": "আর্দ্র / ভ্যাপসা",
        "partOfSpeech": "adj"
      },
      {
        "word": "renewable",
        "banglaMeaning": "নবায়নযোগ্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "uninterrupted",
        "banglaMeaning": "নিরবচ্ছিন্ন",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 91
  },
  {
    "id": "smart_bangladesh",
    "title": "Smart Bangladesh",
    "questions": [],
    "template": "Smart Bangladesh is a visionary national roadmap to build a technologically advanced, prosperous, and knowledge-based nation by 2041. It rests on four key pillars: Smart Citizens, Smart Government, Smart Economy, and Smart Society. Under this vision, public services, education, healthcare, and trade will be completely digitalized. High-speed internet, AI, and paperless offices will make life faster and easier. Students play the most important role in achieving Smart Bangladesh by acquiring computer coding, science, and technological skills to lead our nation forward.",
    "category": "Paragraph",
    "classLevel": "HSC",
    "vocabulary": [
      {
        "word": "visionary",
        "banglaMeaning": "দূরদর্শী / স্বপ্নদর্শী",
        "partOfSpeech": "adj"
      },
      {
        "word": "pillars",
        "banglaMeaning": "মূল স্তম্ভসমূহ",
        "partOfSpeech": "noun"
      },
      {
        "word": "transparent",
        "banglaMeaning": "স্বচ্ছ / স্পষ্ট",
        "partOfSpeech": "adj"
      },
      {
        "word": "sustainable",
        "banglaMeaning": "টেকসই",
        "partOfSpeech": "adj"
      },
      {
        "word": "empowered",
        "banglaMeaning": "ক্ষমতায়িত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 81
  },
  {
    "id": "dengue_fever",
    "title": "Dengue Fever and Its Prevention",
    "questions": [],
    "template": "Dengue fever is a viral disease transmitted by the bite of infected female Aedes mosquitoes. It is common in Bangladesh during the rainy season. Symptoms of dengue include high fever, severe headache, muscle and joint pain, nausea, and skin rashes. In severe cases, blood platelet counts drop dangerously. Aedes mosquitoes breed in clean, stagnant water inside flower pots, discarded tyres, and air cooler trays. To prevent dengue, we must keep our surroundings clean, eliminate standing water, use mosquito nets while sleeping, and seek immediate medical advice if fever occurs.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "mosquito-borne",
        "banglaMeaning": "মশাবাহিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "stagnant",
        "banglaMeaning": "জমে থাকা / বদ্ধ পানি",
        "partOfSpeech": "adj"
      },
      {
        "word": "platelet",
        "banglaMeaning": "রক্তের অনুচক্রিকা",
        "partOfSpeech": "noun"
      },
      {
        "word": "fatal",
        "banglaMeaning": "মারাত্মক / প্রাণঘাতী",
        "partOfSpeech": "adj"
      },
      {
        "word": "repellent",
        "banglaMeaning": "মশা তাড়ানোর ঔষধ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 89
  },
  {
    "id": "deforestation_bd",
    "title": "Deforestation and Global Warming",
    "questions": [],
    "template": "Deforestation means the reckless and large-scale cutting down of trees and forests. In Bangladesh, forest areas are shrinking rapidly due to population pressure, urbanization, and agricultural expansion. Deforestation causes serious environmental hazards like global warming, soil erosion, frequent floods, and loss of wildlife habitats. It reduces rainfall and disrupts ecological balance. To combat this critical danger, we must strictly enforce forest protection laws, stop illegal tree cutting, and launch massive tree plantation campaigns throughout the country to restore green forests.",
    "category": "Paragraph",
    "classLevel": "HSC",
    "vocabulary": [
      {
        "word": "indiscriminate",
        "banglaMeaning": "নির্বিচার / বাছবিচারহীন",
        "partOfSpeech": "adj"
      },
      {
        "word": "accumulate",
        "banglaMeaning": "পুঞ্জীভূত হওয়া / জমা হওয়া",
        "partOfSpeech": "verb"
      },
      {
        "word": "catastrophic",
        "banglaMeaning": "মারাত্মক ধ্বংসাত্মক",
        "partOfSpeech": "adj"
      },
      {
        "word": "submerge",
        "banglaMeaning": "পানিতে নিমজ্জিত করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "conservation",
        "banglaMeaning": "সংরক্ষণ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 80
  },
  {
    "id": "female_education",
    "title": "Female Education in Bangladesh",
    "questions": [],
    "template": "Female education is essential for the overall development and prosperity of Bangladesh. Women constitute half of our total population. No nation can make progress while leaving half of its citizens uneducated. Educated women can manage families efficiently, ensure proper healthcare and education for children, and contribute to the national economy. The government of Bangladesh provides free education, stipends, and free textbooks for female students up to the secondary level. Educating girls empowers women, reduces poverty, and builds an enlightened, progressive society.",
    "category": "Paragraph",
    "classLevel": "SSC",
    "vocabulary": [
      {
        "word": "indispensable",
        "banglaMeaning": "অপরিহার্য / আবশ্যক",
        "partOfSpeech": "adj"
      },
      {
        "word": "prerequisite",
        "banglaMeaning": "পূর্বশর্ত",
        "partOfSpeech": "noun"
      },
      {
        "word": "literacy",
        "banglaMeaning": "সাক্ষরতা / শিক্ষা",
        "partOfSpeech": "noun"
      },
      {
        "word": "stipends",
        "banglaMeaning": "বৃত্তি / উপবৃত্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "superstition",
        "banglaMeaning": "কুসংস্কার",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 81
  },
  {
    "id": "pahela_baishakh",
    "title": "Pahela Baishakh: Bengali New Year",
    "questions": [],
    "template": "Pahela Baishakh is the first day of the Bengali New Year, celebrated on 14th April across Bangladesh with immense enthusiasm. It is a non-communal festival uniting people of all religions and classes. The day begins with cultural programs at Ramna Batamul in Dhaka. Students and artists bring out the colorful Mangal Shobhajatra carrying traditional masks and motifs. People wear traditional dresses - men wear Panjabis and women wear red-and-white sarees. Families eat traditional Panta Ilish and enjoy visiting Baishakhi fairs. Pahela Baishakh celebrates the rich cultural heritage and unity of the Bengali nation.",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "vocabulary": [
      {
        "word": "transcends",
        "banglaMeaning": "ছাড়িয়ে যায় / অতিক্রম করে",
        "partOfSpeech": "verb"
      },
      {
        "word": "harmony",
        "banglaMeaning": "সম্প্রীতি / মেলবন্ধন",
        "partOfSpeech": "noun"
      },
      {
        "word": "attire",
        "banglaMeaning": "পোশাক-পরিচ্ছদ",
        "partOfSpeech": "noun"
      },
      {
        "word": "motifs",
        "banglaMeaning": "শিল্পপ্রতীক / নকশা",
        "partOfSpeech": "noun"
      },
      {
        "word": "heritage",
        "banglaMeaning": "ঐতিহ্য",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 93
  },
  {
    "id": "mother_language_day",
    "title": "International Mother Language Day",
    "questions": [],
    "template": "21st February is observed as International Mother Language Day across the world in honor of the Language Martyrs of Bangladesh. On this day in 1952, brave students like Salam, Barkat, Rafiq, and Jabbar sacrificed their lives for the recognition of Bangla as a state language. In 1999, UNESCO declared 21st February as International Mother Language Day. On this historic day, people walk barefoot in the early morning singing 'Amar Bhaier Rokte Rangano Ekushey February' and place floral wreaths at the Shaheed Minar. It teaches us to respect all mother tongues worldwide.",
    "category": "Paragraph",
    "classLevel": "All",
    "vocabulary": [
      {
        "word": "linguistic",
        "banglaMeaning": "ভাষাগত",
        "partOfSpeech": "adj"
      },
      {
        "word": "diversity",
        "banglaMeaning": "বৈচিত্র্য",
        "partOfSpeech": "noun"
      },
      {
        "word": "martyrs",
        "banglaMeaning": "ভাষাশহীদগণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "proclaimed",
        "banglaMeaning": "ঘোষণা করা হয়েছে",
        "partOfSpeech": "verb"
      },
      {
        "word": "tributes",
        "banglaMeaning": "শ্রদ্ধাঞ্জলি",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 91
  },
  {
    "id": "story_pied_piper",
    "title": "The Pied Piper of Hamelin",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "Long ago, the town of Hamelin in Germany was full of rats. The rats were everywhere - in houses, shops, and streets. They ate the food and bit the people. The citizens were helpless.\n\nOne day, a strange man wearing colorful clothes came to the town. He held a pipe and promised to remove all the rats for a bag of gold. The mayor agreed. The piper played a sweet tune on his pipe. All the rats followed him to the river and drowned.\n\nWhen the piper asked for his reward, the greedy mayor refused to pay him. Angry, the piper played another magical tune the next morning. All the children of the town followed him happily into a mountain cave and never returned.\n\nMoral: Always keep your promise.",
    "vocabulary": [
      {
        "word": "citizens",
        "banglaMeaning": "নাগরিকবৃন্দ",
        "partOfSpeech": "noun"
      },
      {
        "word": "reward",
        "banglaMeaning": "পুরস্কার / পারিশ্রমিক",
        "partOfSpeech": "noun"
      },
      {
        "word": "refused",
        "banglaMeaning": "প্রত্যাখ্যান করল / অস্বীকৃতি জানাল",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 129
  },
  {
    "id": "story_two_rats_monkey",
    "title": "Two Rats and a Cunning Monkey",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "One day, two hungry rats found a big piece of bread on the road. Both of them wanted the larger share and began to fight fiercely.\n\nA clever monkey was watching them from a nearby tree. He came down and said, \"Do not fight, my friends. I will divide the bread into two equal halves for you.\" The foolish rats happily agreed.\n\nThe monkey brought a weighing scale and broke the bread into two uneven pieces. When one side was heavier, he took a big bite from it. Then the other side became heavier, so he took a bite from that side too. He continued this until only a tiny crumb was left.\n\nWhen the rats asked for their bread, the monkey swallowed the last crumb as his fee. The poor rats were left empty-handed.\n\nMoral: When two fools fight, a third party wins.",
    "vocabulary": [
      {
        "word": "fiercely",
        "banglaMeaning": "ভীষণভাবে / তীব্রভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "weighing scale",
        "banglaMeaning": "দাঁড়িপাল্লা / ওজন মাপার যন্ত্র",
        "partOfSpeech": "noun"
      },
      {
        "word": "crumb",
        "banglaMeaning": "টুকরো / কণা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 144
  },
  {
    "id": "story_king_midas_touch",
    "title": "King Midas and the Golden Touch",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "King Midas was a very rich king, but he loved gold more than anything else in the world. One day, a god granted him a wish. Greedy Midas wished that everything he touched would turn into gold.\n\nAt first, the king was overjoyed. He touched flowers, chairs, and tables, and they all became pure gold. But soon, trouble started. When he tried to eat, the bread and water turned into hard gold in his mouth.\n\nSuddenly, his beloved little daughter ran into the room and hugged him. Instantly, she turned into a cold golden statue. The king wept in sorrow and realized his foolish greed. He begged the god to take the power back.\n\nThe god took pity on him and restored his daughter to life.\n\nMoral: Greed brings only sorrow.",
    "vocabulary": [
      {
        "word": "granted",
        "banglaMeaning": "মঞ্জুর করল / দিল",
        "partOfSpeech": "verb"
      },
      {
        "word": "instantly",
        "banglaMeaning": "তাৎক্ষণিকভাবে / সাথে সাথে",
        "partOfSpeech": "adv"
      },
      {
        "word": "statue",
        "banglaMeaning": "মূর্তি",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 131
  },
  {
    "id": "story_fox_without_tail",
    "title": "The Fox without a Tail",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "Once, a cunning fox was caught in a hunter's trap. While struggling hard to escape, his beautiful tail was cut off. The fox felt very ugly and ashamed to face other foxes.\n\nHe thought of a clever plan. He called a meeting of all the foxes in the forest. He said, \"Dear friends, our tails are useless and heavy. Hunters catch us by our tails. We should all cut off our tails to look smart and run faster.\"\n\nMany young foxes agreed and were ready to cut their tails. But an old wise fox stood up and said, \"You are advising us to cut our tails only because you lost yours!\"\n\nAll the foxes laughed, and the embarrassed fox ran away into the woods.\n\nMoral: Do not listen to selfish advice.",
    "vocabulary": [
      {
        "word": "struggling",
        "banglaMeaning": "সংগ্রাম করছিল / ধস্তাধস্তি করছিল",
        "partOfSpeech": "verb"
      },
      {
        "word": "useless",
        "banglaMeaning": "অকেজো / অপ্রয়োজনীয়",
        "partOfSpeech": "adj"
      },
      {
        "word": "embarrassed",
        "banglaMeaning": "লজ্জিত / অপ্রস্তুত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 131
  },
  {
    "id": "story_fox_and_crow",
    "title": "The Clever Fox and the Foolish Crow",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "One sunny morning, a crow found a delicious piece of meat. She flew to a high branch of a tree to enjoy her food in peace.\n\nA hungry fox was walking under the tree and saw the meat in the crow's beak. His mouth watered, and he decided to get it by tricking her.\n\nThe clever fox walked near the tree and said politely, \"Good morning, beautiful crow! Your feathers are so black and shining. Surely, your voice must be sweet too. Will you sing a sweet song for me?\"\n\nThe foolish crow felt very proud of the praise. She opened her beak to sing \"Caw! Caw!\" The moment she opened her mouth, the piece of meat fell to the ground. The fox quickly ate it and ran away.\n\nMoral: Do not trust flatterers.",
    "vocabulary": [
      {
        "word": "feathers",
        "banglaMeaning": "পালক",
        "partOfSpeech": "noun"
      },
      {
        "word": "praise",
        "banglaMeaning": "প্রশংসা",
        "partOfSpeech": "noun"
      },
      {
        "word": "flatterers",
        "banglaMeaning": "তোষামোদকারী / চাটুকার",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 134
  },
  {
    "id": "story_capseller_monkeys",
    "title": "The Cap Seller and the Monkeys",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "A cap seller was walking from village to village selling colorful caps. On a hot afternoon, he was very tired. He put his basket of caps beside a big banyan tree and lay down to take a nap under its cool shade.\n\nA group of naughty monkeys lived on that tree. While the man was sleeping, the monkeys climbed down quietly, took all the caps from the basket, and put them on their heads.\n\nWhen the cap seller woke up, he found his basket empty. Looking up, he saw the monkeys wearing his caps. He shouted and threw stones at them, but the monkeys only threw fruits back at him.\n\nThe clever man remembered that monkeys like to copy human actions. He took off his own cap and threw it onto the ground. Instantly, all the monkeys threw their caps down too. The cap seller quickly collected his caps and went away happily.\n\nMoral: Presence of mind solves difficult problems.",
    "vocabulary": [
      {
        "word": "naughty",
        "banglaMeaning": "দুষ্টু",
        "partOfSpeech": "adj"
      },
      {
        "word": "copy",
        "banglaMeaning": "অনুকরণ করা / নকল করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "instantly",
        "banglaMeaning": "মুহূর্তের মধ্যে",
        "partOfSpeech": "adv"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 160
  },
  {
    "id": "story_hidden_treasure",
    "title": "The Hidden Treasure in the Vineyard",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "An old farmer had three sons who were very lazy. They never worked in the fields and spent their time sleeping and wasting money. The old farmer was worried about their future.\n\nOn his deathbed, the farmer called his sons and said, \"My sons, I have buried a rich treasure in our vineyard. Dig the whole field after my death, and you will find it.\"\n\nAfter their father died, the greedy sons went to the vineyard with spades. They dug every inch of the land deeply, but found no gold or silver. Disappointed, they planted grape seeds in the dug soil.\n\nThat year, because of the deep digging, the vineyard produced a bumper crop of sweet grapes. The sons sold the grapes and earned a large amount of money. They finally understood what their wise father meant.\n\nMoral: Hard work is the true treasure.",
    "vocabulary": [
      {
        "word": "vineyard",
        "banglaMeaning": "আঙ্গুর বাগান",
        "partOfSpeech": "noun"
      },
      {
        "word": "buried",
        "banglaMeaning": "মাটির নিচে পুঁতে রাখা",
        "partOfSpeech": "verb"
      },
      {
        "word": "bumper crop",
        "banglaMeaning": "প্রচুর বা বাম্পার ফসল",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 144
  },
  {
    "id": "story_solomon_two_mothers",
    "title": "King Solomon and the Two Mothers",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "King Solomon was famous for his great wisdom and justice. One day, two women came to his court carrying a little baby. Both women claimed to be the real mother of the child.\n\nThe first woman said, \"This baby is mine! Her baby died last night, and she stole my child.\" The second woman shouted, \"No, she is lying! The living child is mine!\"\n\nThere were no witnesses. The ministers were puzzled. King Solomon thought for a moment and ordered a soldier, \"Fetch a sword. Cut the baby into two equal halves and give one half to each woman.\"\n\nHearing this, the first woman cried out in agony, \"My Lord, please do not kill the child! Give the baby to her, but let him live!\" The second woman remained cold and agreed to cut the child.\n\nSolomon immediately handed the baby to the first woman, knowing that a real mother would never let her child die.\n\nMoral: A mother's love is selfless and true.",
    "vocabulary": [
      {
        "word": "wisdom",
        "banglaMeaning": "প্রজ্ঞা / জ্ঞান",
        "partOfSpeech": "noun"
      },
      {
        "word": "witnesses",
        "banglaMeaning": "সাক্ষীগণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "agony",
        "banglaMeaning": "তীব্র যন্ত্রণা / হাহাকার",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 164
  },
  {
    "id": "story_androcles_lion",
    "title": "Androcles and the Lion",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "Androcles was a poor slave in ancient Rome who escaped from his cruel master into a thick forest. While hiding inside a cave, he saw a big lion roaring in pain. Androcles was terrified at first, but noticed that a large thorn was stuck in the lion's paw.\n\nTaking pity on the beast, Androcles went near and gently pulled out the sharp thorn. Relieved of pain, the lion licked his hands like a pet dog and became his friend.\n\nMonths later, soldiers captured Androcles and threw him into an arena to be killed by a hungry lion. When the beast was released, it rushed forward, but suddenly stopped and lovingly rubbed its head against Androcles.\n\nIt was the same lion he had helped in the forest. The astonished king granted freedom to both Androcles and the lion.\n\nMoral: Kindness is never forgotten.",
    "vocabulary": [
      {
        "word": "slave",
        "banglaMeaning": "ক্রীতদাস",
        "partOfSpeech": "noun"
      },
      {
        "word": "thorn",
        "banglaMeaning": "কাঁটা",
        "partOfSpeech": "noun"
      },
      {
        "word": "astonished",
        "banglaMeaning": "বিস্মিত / অবাক",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 142
  },
  {
    "id": "story_fox_and_goat",
    "title": "The Fox and the Goat in the Well",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "A cunning fox accidentally fell into a deep well while walking in the dark. The water was not deep, but the walls were too steep for him to climb out.\n\nThe next morning, a thirsty goat came to the well and looked down. Seeing the fox, the goat asked, \"Is the water good to drink?\"\n\nThe clever fox replied quickly, \"The water is sweet and refreshing! Jump down and drink as much as you want!\" Without thinking twice, the foolish goat leaped into the well.\n\nAfter drinking water, the goat realized she was trapped. The fox said, \"Put your front legs against the wall. I will climb on your back, jump out, and then pull you up.\" The goat agreed. The fox jumped on her horns, leaped out of the well, and ran away laughing, leaving the goat trapped.\n\nMoral: Look before you leap.",
    "vocabulary": [
      {
        "word": "steep",
        "banglaMeaning": "খাড়া",
        "partOfSpeech": "adj"
      },
      {
        "word": "trapped",
        "banglaMeaning": "আটকা পড়া",
        "partOfSpeech": "adj"
      },
      {
        "word": "refreshing",
        "banglaMeaning": "তৃপ্তিদায়ক / সতেজকারী",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 144
  },
  {
    "id": "story_dog_and_shadow",
    "title": "The Greedy Dog and His Shadow",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "A hungry dog found a big, juicy bone near a meat shop. He was very happy and held the bone firmly between his jaws. He wanted to enjoy the bone alone in a quiet place.\n\nOn his way home, he had to cross a narrow wooden bridge over a clear stream. While walking across the bridge, he looked down into the water and saw his own reflection.\n\nThe foolish dog thought that there was another dog in the water with an even bigger bone. Driven by greed, he wanted to snatch that bone too.\n\nHe opened his mouth and barked loudly, \"Bow-wow!\" The moment he opened his mouth, his own bone fell into the deep water and sank to the bottom. The greedy dog lost his food and went away hungry.\n\nMoral: Greed leads to loss.",
    "vocabulary": [
      {
        "word": "firmly",
        "banglaMeaning": "দৃঢ়ভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "reflection",
        "banglaMeaning": "প্রতিবিম্ব / ছায়া",
        "partOfSpeech": "noun"
      },
      {
        "word": "snatch",
        "banglaMeaning": "ছিনিয়ে নেওয়া",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 136
  },
  {
    "id": "story_two_frogs_milk",
    "title": "The Two Frogs in a Pot of Milk",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "Two little frogs were hopping around a dairy farm. By mistake, both of them fell into a large pot filled with fresh milk. The pot was deep and slippery, and they could not jump out.\n\nBoth frogs started swimming to keep themselves afloat. After struggling for some time, the first frog became tired and hopeless. He said, \"It is useless to swim in this deep milk. Nobody will save us.\" He gave up, stopped paddling, and drowned to the bottom.\n\nHowever, the second frog refused to give up hope. He kept kicking his legs and paddling continuously with all his strength. His continuous churning turned the milk into a thick lump of solid butter. The clever frog climbed onto the butter and easily jumped out of the pot to safety.\n\nMoral: Never give up hope.",
    "vocabulary": [
      {
        "word": "afloat",
        "banglaMeaning": "ভাসমান অবস্থায়",
        "partOfSpeech": "adj"
      },
      {
        "word": "paddling",
        "banglaMeaning": "হাত-পা নেড়ে সাঁতার কাটা",
        "partOfSpeech": "verb"
      },
      {
        "word": "churning",
        "banglaMeaning": "ঘোটা / আলোড়ন তৈরি করা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 135
  },
  {
    "id": "story_town_country_mouse",
    "title": "The Town Mouse and the Country Mouse",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "A town mouse went to visit his cousin in the countryside. The country mouse welcomed him warmly and served him simple grain and roots. The town mouse turned up his nose and said, \"Your life is so boring! Come with me to the town and enjoy rich food every day.\"\n\nThe country mouse accompanied his cousin to a grand city house. In the dining room, they found a banquet table filled with cheese, meat, and cakes. As they began to eat, the door burst open and two ferocious dogs rushed in barking loudly.\n\nThe terrified mice ran for their lives and hid in a narrow hole. The country mouse shivered with fear, packed his bag, and said, \"I prefer my humble food in peace to rich cakes in constant terror.\"\n\nMoral: A peaceful simple life is better than wealthy danger.",
    "vocabulary": [
      {
        "word": "accompanied",
        "banglaMeaning": "সঙ্গ দিল / সাথে গেল",
        "partOfSpeech": "verb"
      },
      {
        "word": "ferocious",
        "banglaMeaning": "হিংস্র / ভয়ঙ্কর",
        "partOfSpeech": "adj"
      },
      {
        "word": "humble",
        "banglaMeaning": "নম্র / সাধারণ",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 140
  },
  {
    "id": "story_wind_and_sun",
    "title": "The Wind and the Sun",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "One day, the North Wind and the Sun had a dispute about who was stronger. Just then, they saw a traveler walking down the road wrapped in a warm coat.\n\nThe Wind said proudly, \"Let us see who can take off that traveler's coat first. Whoever does it is the strongest.\" The Sun agreed and let the Wind try first.\n\nThe Wind blew fiercely with cold gusts of storm. But the harder the Wind blew, the tighter the traveler wrapped his coat around himself. At last, the Wind became tired and gave up.\n\nThen the Sun began to shine brightly and warmly. As the gentle heat increased, the traveler started sweating. Soon, he unbuttoned his coat and took it off with a smile. The Wind accepted defeat.\n\nMoral: Gentleness is more powerful than force.",
    "vocabulary": [
      {
        "word": "dispute",
        "banglaMeaning": "বিতর্ক / দ্বন্দ্ব",
        "partOfSpeech": "noun"
      },
      {
        "word": "fiercely",
        "banglaMeaning": "প্রচণ্ডভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "gentle",
        "banglaMeaning": "কোমল / মৃদু",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 134
  },
  {
    "id": "story_stag_horns",
    "title": "The Stag and His Beautiful Horns",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "A stag was drinking water from a clear forest pool. He saw his reflection and admired his large, beautiful horns. But when he looked at his thin and slender legs, he felt ashamed and hated them.\n\nSuddenly, a pack of wild hounds came barking to hunt him. The stag ran swiftly across the open plain. His slender legs carried him fast and helped him outrun the hounds.\n\nHowever, as he entered a dense forest, his large spreading horns got caught in the thick branches of a tree. He pulled hard, but could not free himself. Soon, the hounds caught up with him.\n\nBefore dying, the stag lamented, \"Alas! The legs I despised helped me escape, while the horns I praised caused my destruction.\"\n\nMoral: All that glitters is not gold.",
    "vocabulary": [
      {
        "word": "admired",
        "banglaMeaning": "প্রশংসা করল / মুগ্ধ হলো",
        "partOfSpeech": "verb"
      },
      {
        "word": "slender",
        "banglaMeaning": "চিকন ও পাতলা",
        "partOfSpeech": "adj"
      },
      {
        "word": "despised",
        "banglaMeaning": "ঘৃণা করেছিল",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 130
  },
  {
    "id": "story_boy_jar_nuts",
    "title": "The Boy and the Jar of Nuts",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "A little boy was very fond of cashew nuts. One afternoon, his mother placed a glass jar filled with delicious roasted nuts on the kitchen table and asked him to take only a few.\n\nThe greedy boy put his hand deep into the jar and grabbed a huge fistful of nuts. But when he tried to pull his hand out, the neck of the jar was too narrow for his closed fist.\n\nHe pulled and twisted his hand with all his might, but could not take it out. Unwilling to drop any nuts, he started crying loudly in frustration.\n\nHis mother heard his cries, came in, and said with a smile, \"My dear son, do not be greedy. Drop half of the nuts, and your hand will come out easily.\" The boy let go of some nuts and took his hand out happily.\n\nMoral: Do not try to take too much at once.",
    "vocabulary": [
      {
        "word": "fond of",
        "banglaMeaning": "পছন্দ করা / অনুরাগী",
        "partOfSpeech": "adj"
      },
      {
        "word": "fistful",
        "banglaMeaning": "মুঠো ভর্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "frustration",
        "banglaMeaning": "হতাশা / বিরক্তি",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 153
  },
  {
    "id": "story_milkmaid_pail",
    "title": "The Milkmaid and Her Pail",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "A cheerful milkmaid named Patty was walking to the market carrying a pail of fresh milk on her head. As she walked, she began daydreaming about what she would do with the money.\n\nShe thought, \"I will sell this milk and buy a hundred eggs. The eggs will hatch into healthy chicks. I will raise them and sell the hens for a good price. With that money, I will buy a gorgeous silk dress and go to the festival. All the young men will ask to dance with me, but I will proudly toss my head and say no!\"\n\nAs she spoke, she tossed her head proudly. Instantly, the pail tumbled off her head and crashed onto the ground. All the milk spilled, and her dreams were shattered.\n\nMoral: Do not count your chickens before they hatch.",
    "vocabulary": [
      {
        "word": "daydreaming",
        "banglaMeaning": "দিবাস্বপ্ন দেখছিল",
        "partOfSpeech": "verb"
      },
      {
        "word": "gorgeous",
        "banglaMeaning": "চমৎকার / জমকালো",
        "partOfSpeech": "adj"
      },
      {
        "word": "shattered",
        "banglaMeaning": "চূর্ণ-বিচূর্ণ হলো / ভেঙে গেল",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 137
  },
  {
    "id": "story_faithful_dog",
    "title": "The Faithful Dog and the Snake",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "A farmer had a faithful dog who guarded his house and looked after his baby boy. One day, the farmer and his wife went to work in the fields, leaving the sleeping baby in the cradle guarded by the loyal dog.\n\nWhile they were away, a poisonous snake entered the room and slithered towards the baby's cradle. The brave dog attacked the snake fiercely and killed it after a bloody fight.\n\nWhen the farmer returned home, he saw the dog's mouth covered with fresh blood. Thinking that the dog had killed his child, the furious farmer struck the poor dog with a heavy stick and killed it on the spot.\n\nWhen he ran into the room, he saw his baby sleeping safely, with the dead snake lying nearby. The farmer wept in deep regret for his hasty action.\n\nMoral: Think carefully before acting in anger.",
    "vocabulary": [
      {
        "word": "faithful",
        "banglaMeaning": "বিশ্বস্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "cradle",
        "banglaMeaning": "দোলনা (শিশুর)",
        "partOfSpeech": "noun"
      },
      {
        "word": "furious",
        "banglaMeaning": "অত্যন্ত ক্রুদ্ধ / ক্ষিপ্ত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 145
  },
  {
    "id": "story_ant_grasshopper",
    "title": "The Ant and the Grasshopper",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "During the warm summer months, a lazy grasshopper spent all his time singing songs and playing in the green fields. Nearby, a hardworking ant carried heavy grains of wheat to her home to prepare for the coming winter.\n\nThe grasshopper laughed at the ant and said, \"Why do you work so hard in the sunshine? Come, let us sing and dance together!\" The wise ant replied, \"Winter is coming soon. You should also store food for the cold days.\"\n\nThe grasshopper ignored her advice and kept dancing. Soon, freezing winter arrived with snow covering the ground. The starving grasshopper found nothing to eat and went to the ant begging for food. The ant said, \"If you sang all summer, you must dance through the winter.\"\n\nMoral: Work hard today for a better tomorrow.",
    "vocabulary": [
      {
        "word": "starving",
        "banglaMeaning": "ক্ষুধার্ত / অনাহারে থাকা",
        "partOfSpeech": "adj"
      },
      {
        "word": "freezing",
        "banglaMeaning": "হিমশীতল",
        "partOfSpeech": "adj"
      },
      {
        "word": "ignored",
        "banglaMeaning": "উপেক্ষা করল / কান দিল না",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 133
  },
  {
    "id": "story_selfish_tree",
    "title": "The Selfish Tree and the Little Bird",
    "category": "Short Story",
    "classLevel": "All",
    "questions": [],
    "template": "A tall, shady tree stood in a green meadow. It was proud of its thick branches and green leaves, but it was very selfish. It never allowed any birds to build nests or animals to rest under its shade.\n\nOne hot summer day, a tired little bird with an injured wing flew to the tree and begged for shelter. The selfish tree shook its branches angrily and drove the poor bird away.\n\nSoon, autumn passed and a harsh winter arrived. Because the tree was so unfriendly, the warm rays of spring refused to visit it. All other trees blossomed with sweet flowers, but the selfish tree remained dry, bare, and frozen. It finally realized that without sharing and kindness, life is lonely and cold.\n\nMoral: Sharing brings true happiness.",
    "vocabulary": [
      {
        "word": "meadow",
        "banglaMeaning": "ঘাসযুক্ত মাঠ / তৃণভূমি",
        "partOfSpeech": "noun"
      },
      {
        "word": "shelter",
        "banglaMeaning": "আশ্রয়",
        "partOfSpeech": "noun"
      },
      {
        "word": "blossomed",
        "banglaMeaning": "ফুল ফুটল / প্রস্ফুটিত হলো",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 129
  },
  {
    "id": "para_national_flag",
    "title": "Our National Flag",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A national flag is the supreme symbol of independence, dignity, and sovereignty for any free nation. We have our own national flag which was earned through the supreme sacrifice of three million martyrs during our Liberation War in 1971. The ratio of its length and breadth is 10:6. Our flag is bottle-green in color with a bright red circle in the middle. The green color represents the everlasting beauty, lush green fields, and youthfulness of Bangladesh. The red circle represents the rising sun of independence and the sacred blood shed by our heroic freedom fighters. Our national flag is hoisted every day on government buildings, educational institutions, and embassies. On national mourning days, it is kept at half-mast. We love and respect our national flag deeply and are always ready to defend its honor at any cost.",
    "vocabulary": [
      {
        "word": "sovereignty",
        "banglaMeaning": "সার্বভৌমত্ব",
        "partOfSpeech": "noun"
      },
      {
        "word": "martyrs",
        "banglaMeaning": "শহীদগণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "hoisted",
        "banglaMeaning": "উত্তোলন করা হয়",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": true,
    "boardTags": [
      "SSC 2024",
      "Dhaka Board"
    ],
    "banglaTranslation": "জাতীয় পতাকা যেকোনো স্বাধীন জাতির জন্য স্বাধীনতা, মর্যাদা ও সার্বভৌমত্বের সর্বোচ্চ প্রতীক। আমাদের নিজস্ব জাতীয় পতাকা রয়েছে যা ১৯৭১ সালের মহান মুক্তিযুদ্ধে ৩০ লক্ষ শহীদের আত্মত্যাগের বিনিময়ে অর্জিত হয়েছে। এর দৈর্ঘ্য ও প্রস্থের অনুপাত ১০:৬। আমাদের পতাকা গাঢ় সবুজ রঙের এবং মাঝখানে একটি উজ্জ্বল লাল বৃত্ত রয়েছে। সবুজ রঙটি চিরন্তন সৌন্দর্য, সবুজ মাঠ এবং বাংলাদেশের তারুণ্যের প্রতীক। লাল বৃত্তটি স্বাধীনতার উদীয়মান সূর্য এবং বীর মুক্তিযোদ্ধাদের তাজা রক্তের প্রতীক। আমাদের জাতীয় পতাকা প্রতিদিন সরকারি ভবন, শিক্ষা প্রতিষ্ঠান ও দূতাবাসে উত্তোলন করা হয়। জাতীয় শোক দিবসে এটি অর্ধনমিত রাখা হয়। আমরা আমাদের জাতীয় পতাকাকে গভীরভাবে ভালোবাসি ও সম্মান করি।",
    "wordCount": 137
  },
  {
    "id": "para_rickshaw_puller",
    "title": "A Rickshaw Puller",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A rickshaw puller is a very familiar person in our cities, towns, and villages. He is a poor and hardworking day labourer who earns his livelihood by pulling a rickshaw. Most rickshaw pullers do not own a rickshaw; they rent it from a owner on a daily basis. He wears simple, torn clothes and works tirelessly from early morning till late night. In scorching heat, heavy rainfall, or severe winter cold, he carries passengers and heavy goods from one place to another. Despite his relentless physical labor, his income is very meager. He lives in a small slum with his family and struggles hard to buy daily food and medicine for his children. Although his life is full of hardship, he renders great service to our daily transportation. We should behave politely with him and treat him with dignity and respect.",
    "vocabulary": [
      {
        "word": "tirelessly",
        "banglaMeaning": "ক্লান্তিহীনভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "meager",
        "banglaMeaning": "অল্প / সামান্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "dignity",
        "banglaMeaning": "মর্যাদা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": true,
    "boardTags": [
      "Class 6-8",
      "Rajshahi Board"
    ],
    "banglaTranslation": "রিকশাচালক আমাদের শহর, নগর ও গ্রামের অত্যন্ত পরিচিত একজন মানুষ। তিনি একজন দরিদ্র ও পরিশ্রমী দিনমজুর যিনি রিকশা চালিয়ে জীবিকা নির্বাহ করেন। বেশিরভাগ রিকশাচালকের নিজস্ব রিকশা নেই; তারা প্রতিদিন ভাড়ায় মালিকের কাছ থেকে রিকশা নেন। তিনি সাধারণ পোশাক পরেন এবং সকাল থেকে গভীর রাত পর্যন্ত অক্লান্ত পরিশ্রম করেন। প্রচণ্ড রোদ, বৃষ্টি বা শীতের মধ্যেও তিনি যাত্রী ও মালপত্র বহন করেন। কঠোর শারীরিক পরিশ্রম সত্ত্বেও তার আয় খুবই কম। তিনি বস্তিতে পরিবার নিয়ে কষ্টকর জীবন যাপন করেন। তাঁর জীবন কষ্টে ভরা হলেও তিনি আমাদের প্রতিদিনের যাতায়াতে অসামান্য সেবা প্রদান করেন।",
    "wordCount": 141
  },
  {
    "id": "para_street_hawker",
    "title": "A Street Hawker",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A street hawker is a common sight in both urban and rural areas of Bangladesh. He is a petty trader who sells various articles by moving from street to street. He usually carries his goods in a basket on his head, in his hands, or on a small wooden pushcart. A street hawker sells vegetables, fresh fruits, sweets, toys, cosmetics, kitchen utensils, and cheap clothes. To attract the attention of customers, especially children and housewives, he calls out loudly or rings a small bell. He sells his goods at cheap prices and often bargains with buyers. His daily income is small and uncertain. During bad weather or political strikes, he cannot sell his items and suffers greatly. In spite of many difficulties, a street hawker brings daily necessities directly to our doorsteps, making our lives easier.",
    "vocabulary": [
      {
        "word": "utensils",
        "banglaMeaning": "গৃহস্থালির তৈজসপত্র / বাসনকোসন",
        "partOfSpeech": "noun"
      },
      {
        "word": "bargains",
        "banglaMeaning": "দামাদামি করে",
        "partOfSpeech": "verb"
      },
      {
        "word": "necessities",
        "banglaMeaning": "প্রয়োজনীয় জিনিসপত্র",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 136
  },
  {
    "id": "para_day_labourer",
    "title": "A Day Labourer",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A day labourer is a person who performs heavy physical work on daily wages. He is seen working in agricultural fields, construction sites, road making, and brick kilns. He wakes up early in the morning, takes his spade and basket, and searches for work in the local market. His job is tough and exhausting; he carries heavy loads, digs soil, and breaks stones from morning till evening in all weather conditions. If he gets work, he earns a small wage to buy daily rice and salt for his family. If he finds no work, he and his family go to bed hungry. He lives in a small thatched hut with no modern facilities. He plays a vital role in building our national infrastructure. We should ensure fair wages and social security for day labourers.",
    "vocabulary": [
      {
        "word": "wages",
        "banglaMeaning": "মজুরি / পারিশ্রমিক",
        "partOfSpeech": "noun"
      },
      {
        "word": "exhausting",
        "banglaMeaning": "অত্যন্ত ক্লান্তিকর",
        "partOfSpeech": "adj"
      },
      {
        "word": "infrastructure",
        "banglaMeaning": "অবকাঠামো",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 134
  },
  {
    "id": "para_moonlit_night",
    "title": "A Moonlit Night",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A moonlit night is a night of heavenly beauty and calm tranquility. On such a night, the full moon shines like a silver plate in a clear, cloudless sky. The bright moonlight bathes the whole earth in a soft, silvery glow. Rivers, ponds, green fields, and trees seem to smile in pure joy. Nature puts on a magical appearance, creating a dreamy atmosphere all around. People of all ages enjoy the serene beauty of a moonlit night. Little children play outdoor games in courtyards and listen to fairy tales from their grandparents. Young people sit together to sing melodious songs or walk in the open fields. A moonlit night removes the darkness of the night and fills the human mind with peace, joy, and poetic feelings. It is indeed a blessing of nature.",
    "vocabulary": [
      {
        "word": "tranquility",
        "banglaMeaning": "প্রশান্তি / নিস্তব্ধতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "serene",
        "banglaMeaning": "নির্মল / শান্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "melodious",
        "banglaMeaning": "মধুর / সুরলা",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 133
  },
  {
    "id": "para_railway_station",
    "title": "A Railway Station",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A railway station is a busy and noisy place where passenger and goods trains stop and depart regularly. It is an essential junction for public travel and transport. A typical railway station has passenger platforms, ticket counters, waiting rooms, and station master's offices. Whenever a train arrives, the station becomes crowded with hustle and bustle. Passengers rush to board the train or get off with their luggage. Red-shirted porters are seen carrying heavy bags on their heads. Bookstalls, tea stalls, and food vendors remain busy selling items to passengers. Beggars and hawkers move from compartment to compartment. When the train departs with a whistle, the platform suddenly becomes calm and quiet again. A railway station reflects a miniature picture of human life full of joy, departure, and reunion.",
    "vocabulary": [
      {
        "word": "junction",
        "banglaMeaning": "মিলনস্থল / সংযোগস্থল",
        "partOfSpeech": "noun"
      },
      {
        "word": "hustle and bustle",
        "banglaMeaning": "কোলাহল ও ছোটাছুটি",
        "partOfSpeech": "noun"
      },
      {
        "word": "porters",
        "banglaMeaning": "কুলি / মালবাহী",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 128
  },
  {
    "id": "para_village_doctor",
    "title": "A Village Doctor",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A village doctor is a very important and popular figure in rural Bangladesh. He is usually not a certified MBBS doctor, but has practical experience from working with senior practitioners or completing a short pharmacy course. He has a small dispensary in the local village market where he keeps common medicines, syrups, and tablets. He wears simple clothes and is known to everyone in the village. He treats common ailments like fever, cold, diarrhea, and cuts. When a patient is too ill to visit the dispensary, the village doctor visits the patient's house on foot or bicycle even in the middle of the night. He charges a very small fee and often treats poor villagers for free. He is a true friend and helper to the village community.",
    "vocabulary": [
      {
        "word": "dispensary",
        "banglaMeaning": "ঔষধালয় / ডিসপেনসারি",
        "partOfSpeech": "noun"
      },
      {
        "word": "ailments",
        "banglaMeaning": "অসুখ-বিসুখ / রোগ",
        "partOfSpeech": "noun"
      },
      {
        "word": "practitioners",
        "banglaMeaning": "চিকিৎসকগণ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 128
  },
  {
    "id": "para_first_day_school",
    "title": "My First Day at School",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "My first day at school is one of the most memorable and unforgettable days of my life. I was six years old when my father took me to our local primary school for admission. As I entered the school compound, I saw many unfamiliar children in uniform playing and shouting joyfully. At first, I felt nervous, shy, and a little frightened. My father took me to the Headmaster's office. The Headmaster was a kind and smiling person. He asked me my name and a few simple questions, which I answered correctly. He patted my shoulder affectionately and admitted me to Class One. My class teacher took me to the classroom and introduced me to my classmates. Soon, I made friends and played games during tiffin break. That sweet day opened the door of knowledge for me.",
    "vocabulary": [
      {
        "word": "memorable",
        "banglaMeaning": "স্মরণীয়",
        "partOfSpeech": "adj"
      },
      {
        "word": "unfamiliar",
        "banglaMeaning": "অপরিচিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "affectionately",
        "banglaMeaning": "স্নেহভরে",
        "partOfSpeech": "adv"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 136
  },
  {
    "id": "para_early_rising",
    "title": "Early Rising",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "Early rising is the healthy habit of getting out of bed early in the morning. It is one of the most beneficial habits for building a sound mind in a sound body. The morning atmosphere is calm, cool, and free from air pollution. An early riser gets the golden opportunity to inhale fresh oxygen and enjoy the picturesque beauty of sunrise and blooming flowers. A light morning walk or physical exercise keeps the body energetic and agile throughout the entire day. Moreover, an early riser gets extra time to plan and finish his daily studies or work smoothly without rush. As the famous English proverb goes, \"Early to bed and early to rise makes a man healthy, wealthy, and wise.\" Students should develop the habit of early rising from childhood for lifelong success.",
    "vocabulary": [
      {
        "word": "beneficial",
        "banglaMeaning": "উপকারী / কল্যাণকর",
        "partOfSpeech": "adj"
      },
      {
        "word": "picturesque",
        "banglaMeaning": "নয়নভিরাম / ছবির মতো সুন্দর",
        "partOfSpeech": "adj"
      },
      {
        "word": "agile",
        "banglaMeaning": "কর্মক্ষম / চটপটে",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 133
  },
  {
    "id": "para_street_beggar",
    "title": "A Street Beggar",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A street beggar is a common and pitiful sight in our towns and cities. He is a destitute and helpless person who begs for alms from passersby to survive. He usually wears dirty, tattered clothes and carries a small bowl or tin can in his hand. Some street beggars are blind, lame, crippled, or suffer from chronic diseases, while others are very old and frail with nobody to look after them. They sit near bus stations, railway platforms, market gates, and religious places. When people walk by, the beggar stretches out his hands and prays for charity in a pathetic voice. Begging is not a respectful profession and is a social curse. The government and wealthy citizens should establish rehabilitation centers, medical care, and vocational training to eliminate street begging permanently.",
    "vocabulary": [
      {
        "word": "destitute",
        "banglaMeaning": "নিঃস্ব / অভাবগ্রস্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "tattered",
        "banglaMeaning": "ছেঁড়া / ছিন্নভিন্ন",
        "partOfSpeech": "adj"
      },
      {
        "word": "rehabilitation",
        "banglaMeaning": "পুনর্বাসন",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 131
  },
  {
    "id": "para_national_bird",
    "title": "Our National Bird: The Magpie Robin",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "The Magpie Robin, locally known as \"Doyel\", is the national bird of Bangladesh. It is a small, cheerful, and charming songbird found abundantly all over the country. The male Doyel has shiny black plumage on its head, back, and throat, with a clean white belly, wings, and outer tail feathers. The female is grayish-black. Doyel is famous for its melodious whistling songs and sweet whistles heard early in the morning. It feeds on small insects, worms, caterpillars, and fruits, helping farmers by controlling crop pests. It builds its cozy nest in tree hollows, holes in old walls, and under roofs. The sweet singing Doyel represents the simplicity, innocence, and natural charm of rural Bangladesh. It is a beloved national symbol depicted on our coins and stamps.",
    "vocabulary": [
      {
        "word": "plumage",
        "banglaMeaning": "পাখির পালক",
        "partOfSpeech": "noun"
      },
      {
        "word": "melodious",
        "banglaMeaning": "মধুর সুরযুক্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "depicted",
        "banglaMeaning": "চিত্রিত / অঙ্কিত",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 126
  },
  {
    "id": "para_school_peon",
    "title": "A School Peon",
    "category": "Paragraph",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A school peon is an indispensable fourth-class employee of a school. He is a familiar and hardworking person respected by both teachers and students. He arrives at school early in the morning, unlocks all classrooms, and ensures that the school premises, blackboards, and benches are clean and neat. During class hours, his primary duty is to ring the school bell punctually at the start and end of every period and tiffin break. He carries notices, registers, and circulars from the Headmaster's office to various classrooms. He also delivers water and tea to teachers and helps during examinations by distributing question papers. At the end of the school day, he locks all the doors and gates securely. Although his salary is modest, his dedicated service keeps the school running smoothly.",
    "vocabulary": [
      {
        "word": "indispensable",
        "banglaMeaning": "অপরিহার্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "punctually",
        "banglaMeaning": "সময়মতো / যথাসময়ে",
        "partOfSpeech": "adv"
      },
      {
        "word": "modest",
        "banglaMeaning": "বিনম্র / সীমিত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 129
  },
  {
    "id": "para_independence_day",
    "title": "Independence Day of Bangladesh",
    "category": "Paragraph",
    "classLevel": "SSC",
    "questions": [],
    "template": "The 26th of March is the Independence Day of Bangladesh, celebrated nationwide with immense pride and enthusiasm. It marks the historic day in 1971 when the Father of the Nation, Bangabandhu Sheikh Mujibur Rahman, proclaimed the independence of Bangladesh following the brutal crackdown by Pakistani occupation forces on the night of 25th March. The day begins with a 31-gun salute at dawn. The President, Prime Minister, and citizens place floral wreaths at the National Martyrs' Memorial at Savar to pay homage to the heroic freedom fighters. Educational institutions arrange cultural programs, rallies, and seminars highlighting the glorious history of the Liberation War. Government and private buildings are illuminated with colorful lights. Independence Day reminds us of the supreme sacrifice made by three million martyrs and inspires us to build a prosperous, democratic, and exploitation-free nation.",
    "vocabulary": [
      {
        "word": "proclaimed",
        "banglaMeaning": "ঘোষণা করলেন",
        "partOfSpeech": "verb"
      },
      {
        "word": "homage",
        "banglaMeaning": "শ্রদ্ধাঞ্জলি / সম্মান",
        "partOfSpeech": "noun"
      },
      {
        "word": "illuminated",
        "banglaMeaning": "আলোকিত করা হয়",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 135
  },
  {
    "id": "para_victory_day",
    "title": "Victory Day of Bangladesh",
    "category": "Paragraph",
    "classLevel": "SSC",
    "questions": [],
    "template": "The 16th of December is the Victory Day of Bangladesh. It is the most glorious and momentous day in our national history. On this memorable day in 1971, after a nine-month-long bloody Liberation War, the Pakistani army surrendered unconditionally to the joint forces of Bangladesh and India at the historic Race Course Ground in Dhaka. Bangladesh emerged as a free and sovereign country on the world map. The nation celebrates this day with great joy, reverence, and solemnity. People from all walks of life visit the National Memorial at Savar to pay deep homage to the heroic martyrs. The National Parade Ground in Dhaka hosts a spectacular military parade. Various cultural programs and discussions are held across the country. Victory Day teaches us patriotism, unity, and resilience against all forms of injustice.",
    "vocabulary": [
      {
        "word": "momentous",
        "banglaMeaning": "অত্যন্ত গুরুত্বপূর্ণ / স্মরণীয়",
        "partOfSpeech": "adj"
      },
      {
        "word": "unconditionally",
        "banglaMeaning": "নিঃশর্তভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "resilience",
        "banglaMeaning": "প্রতিরোধ ক্ষমতা / দৃঢ়তা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 132
  },
  {
    "id": "para_water_pollution",
    "title": "Water Pollution",
    "category": "Paragraph",
    "classLevel": "SSC",
    "questions": [],
    "template": "Water is called life, but contaminated water causes severe diseases and ecological disasters. Water pollution is one of the most critical environmental hazards in Bangladesh today. Water is polluted in various ways. Farmers use excessive chemical fertilizers, pesticides, and insecticides in agriculture, which get washed away by rainwater into rivers, ponds, and canals. Mills and factories dump untreated toxic chemical wastes directly into nearby water bodies like the Buriganga and Karnaphuli rivers. Moreover, human waste, rotten garbage, and plastic bottles thrown into water cause severe water contamination. Polluted water spreads fatal waterborne diseases such as cholera, typhoid, and jaundice. It also destroys aquatic ecosystems and kills fish. To protect our health and environment, we must install waste treatment plants (ETP), use organic fertilizers, and strictly enforce environmental protection laws.",
    "vocabulary": [
      {
        "word": "contaminated",
        "banglaMeaning": "দূষিত / বিষাক্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "untreated",
        "banglaMeaning": "অপরিশোধিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "aquatic",
        "banglaMeaning": "জলজ",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 129
  },
  {
    "id": "para_air_pollution",
    "title": "Air Pollution",
    "category": "Paragraph",
    "classLevel": "SSC",
    "questions": [],
    "template": "Air is the most vital element of our environment, without which no living being can survive for a few minutes. Clean air is essential for healthy living, but unfortunately, our air is being heavily polluted every day. Air pollution occurs when harmful gases, dust, and smoke enter the atmosphere. In Bangladesh, brick kilns, unfit motor vehicles, and industrial factories emit large volumes of toxic black smoke containing carbon monoxide, sulfur dioxide, and lead particles. Indiscriminate cutting of trees and burning of fossil fuels also contribute to air pollution. Inhaling polluted air causes deadly respiratory diseases such as asthma, bronchitis, lung cancer, and heart attacks. Air pollution also leads to acid rain and global warming. To curb air pollution, we must use green energy, plant more trees, modernize brick kilns, and ban unfit vehicles.",
    "vocabulary": [
      {
        "word": "vital",
        "banglaMeaning": "অপরিহার্য / অত্যাবশ্যকীয়",
        "partOfSpeech": "adj"
      },
      {
        "word": "respiratory",
        "banglaMeaning": "শ্বাসযন্ত্র সংক্রান্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "curb",
        "banglaMeaning": "নিয়ন্ত্রণ করা / দমন করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 133
  },
  {
    "id": "para_internet_uses",
    "title": "Uses and Abuses of Internet",
    "category": "Paragraph",
    "classLevel": "SSC",
    "questions": [],
    "template": "The internet is one of the most miraculous inventions of modern science that has turned the world into a global village. It has brought revolutionary changes to communication, education, commerce, and healthcare. Through the internet, students can access online libraries, video lectures, and research materials within seconds. Professionals can work remotely, businessmen run e-commerce platforms, and doctors provide telemedicine services. We can send emails, make video calls, and share information instantly with people worldwide. However, the internet has its dark side too. Excessive use leads to digital addiction, loss of eyesight, and sleep disorders. Cybercrimes, hacking, online fraud, and spreading of fake news on social media cause serious harm to society. Therefore, we should use the internet constructively for education and personal growth while staying alert to its misuse.",
    "vocabulary": [
      {
        "word": "miraculous",
        "banglaMeaning": "বিস্ময়কর / অলৌকিক",
        "partOfSpeech": "adj"
      },
      {
        "word": "revolutionary",
        "banglaMeaning": "বিপ্লবী / যুগান্তকারী",
        "partOfSpeech": "adj"
      },
      {
        "word": "constructively",
        "banglaMeaning": "গঠনমূলকভাবে",
        "partOfSpeech": "adv"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 129
  },
  {
    "id": "para_cyclone_bd",
    "title": "A Cyclone in Bangladesh",
    "category": "Paragraph",
    "classLevel": "SSC",
    "questions": [],
    "template": "A cyclone is a catastrophic atmospheric storm characterized by violent circular winds and torrential rainfall. Because of its geographic location near the Bay of Bengal, Bangladesh frequently faces devastating cyclones. A cyclone strikes with blazing wind speeds exceeding 150 km/h, accompanied by giant tidal waves and massive storm surges. It uproots giant trees, tears off tin roofs, collapses houses, and damages power grids and roads. Coastal districts like Cox's Bazar, Bhola, and Patuakhali suffer the worst devastation. Standing crops are washed away, livestock perish, and hundreds of human lives are lost. In the aftermath, scarcity of safe drinking water and food triggers deadly waterborne epidemics. While natural disasters cannot be prevented, early cyclone warning systems, well-built cyclone shelters, and timely evacuation can significantly minimize loss of lives and property.",
    "vocabulary": [
      {
        "word": "catastrophic",
        "banglaMeaning": "সর্বনাশা / ভয়াবহ ধ্বংসাত্মক",
        "partOfSpeech": "adj"
      },
      {
        "word": "surges",
        "banglaMeaning": "জলোচ্ছ্বাস / তীব্র ঢেউ",
        "partOfSpeech": "noun"
      },
      {
        "word": "evacuation",
        "banglaMeaning": "নিরাপদ স্থানে স্থানান্তর",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 129
  },
  {
    "id": "para_food_adulteration",
    "title": "Food Adulteration",
    "category": "Paragraph",
    "classLevel": "SSC",
    "questions": [],
    "template": "Food adulteration is the unethical practice of mixing harmful chemicals, impure ingredients, or poisonous dyes into food items to increase profit. It has become an alarming public health crisis in Bangladesh. Dishonest traders and food producers mix toxic formalin to preserve fish and fruits, inject chemical calcium carbide to ripen bananas and mangoes artificially, and use hazardous textile dyes in sweetmeats and spices. Stale and expired food items are frequently sold in hotels and restaurants. Consuming adulterated food causes serious, irreversible illnesses such as kidney failure, liver cirrhosis, heart attacks, stomach ulcers, and cancer. It severely harms children and pregnant women. To eradicate this crime, mobile courts must conduct regular raids, strict penalties and capital punishment should be enforced against corrupt traders, and public awareness must be created.",
    "vocabulary": [
      {
        "word": "unethical",
        "banglaMeaning": "অনৈতিক",
        "partOfSpeech": "adj"
      },
      {
        "word": "hazardous",
        "banglaMeaning": "বিপজ্জনক",
        "partOfSpeech": "adj"
      },
      {
        "word": "eradicate",
        "banglaMeaning": "নির্মূল করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 128
  },
  {
    "id": "para_historical_place",
    "title": "A Visit to a Historical Place",
    "category": "Paragraph",
    "classLevel": "SSC",
    "questions": [],
    "template": "Visiting a historical place is an enriching experience that expands our knowledge and brings history alive. Last winter, our school organized an educational excursion to the historic Shat Gombuj Mosque in Bagerhat, a UNESCO World Heritage Site. We traveled by bus and reached Bagerhat in the morning. The grand mosque was founded in the 15th century by the great saint warrior Hazrat Khan Jahan Ali. As I stood before the magnificent monument, I was amazed by its splendid medieval architectural beauty. The mosque has seventy-seven low domes and eleven arched doorways. The brickwork and massive pillars reflect the supreme craftsmanship of that era. Beside the mosque lies the vast Ghoradighi pond. Walking through the historical site filled my mind with awe and respect for our cultural heritage. It was an unforgettable educational journey.",
    "vocabulary": [
      {
        "word": "enriching",
        "banglaMeaning": "সমৃদ্ধকারী / শিক্ষণীয়",
        "partOfSpeech": "adj"
      },
      {
        "word": "magnificent",
        "banglaMeaning": "মহিমান্বিত / চমৎকার",
        "partOfSpeech": "adj"
      },
      {
        "word": "craftsmanship",
        "banglaMeaning": "কারুকার্য / শিল্পদক্ষতা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 133
  },
  {
    "id": "para_bangabandhu",
    "title": "Bangabandhu Sheikh Mujibur Rahman",
    "category": "Paragraph",
    "classLevel": "HSC",
    "questions": [],
    "template": "Bangabandhu Sheikh Mujibur Rahman is the undisputed Father of the Nation and the architect of independent Bangladesh. Born on 17 March 1920 in Tungipara, Gopalganj, he dedicated his entire life to the emancipation of the oppressed Bengali nation. He led key historic movements including the 1952 Language Movement, the 1966 Six-Point Charter, and the 1969 Mass Upsurge. His historic 7th March 1971 speech at the Race Course Ground was a clarion call for independence: \"The struggle this time is for our freedom, the struggle this time is for our independence!\" Under his visionary leadership, Bangladesh emerged as an independent state in 1971 after nine months of Liberation War. Tragically, on 15 August 1975, Bangabandhu and most of his family members were assassinated by a group of traitorous officers. His immortal ideals of courage, justice, and patriotism continue to guide the nation.",
    "vocabulary": [
      {
        "word": "undisputed",
        "banglaMeaning": "অবিসংবাদিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "emancipation",
        "banglaMeaning": "মুক্তি / স্বাধীনতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "assassinated",
        "banglaMeaning": "নৃশংসভাবে নিহত / হত্যা করা হয়েছে",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 141
  },
  {
    "id": "para_global_warming_simple",
    "title": "Global Warming and Climate Change",
    "category": "Paragraph",
    "classLevel": "HSC",
    "questions": [],
    "template": "Global warming is the alarming gradual increase in the average temperature of the Earth's atmosphere and oceans. The primary cause of global warming is the greenhouse effect triggered by human activities. Burning fossil fuels such as coal, oil, and gas emits massive amounts of greenhouse gases like carbon dioxide and methane. Widespread deforestation further worsens the crisis as fewer trees remain to absorb carbon dioxide. Global warming causes polar ice caps to melt, leading to rising sea levels that threaten to submerge low-lying coastal areas of Bangladesh. It also triggers extreme climate anomalies such as severe droughts, unseasonal floods, super-cyclones, and loss of biodiversity. To combat global warming, world nations must urgently cut carbon emissions, promote renewable solar and wind energy, and undertake massive afforestation programs globally.",
    "vocabulary": [
      {
        "word": "gradual",
        "banglaMeaning": "ক্রমবর্ধমান / ধীরে ধীরে ঘটা",
        "partOfSpeech": "adj"
      },
      {
        "word": "anomalies",
        "banglaMeaning": "অস্বাভাবিকতা / পরিবর্তন",
        "partOfSpeech": "noun"
      },
      {
        "word": "afforestation",
        "banglaMeaning": "বনায়ন / গাছ লাগানো",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 127
  },
  {
    "id": "para_discipline_value",
    "title": "Discipline and Its Importance",
    "category": "Paragraph",
    "classLevel": "HSC",
    "questions": [],
    "template": "Discipline is the vital virtue of training our mind and character to obey established rules, order, and self-control. It is the cornerstone of all human achievement, peace, and social order. In nature, everything from planetary motion to the changing of seasons operates in strict discipline. Similarly, human life without discipline is like a ship without a rudder, doomed to drift and crash. In educational institutions, discipline helps students maintain focus, acquire knowledge, and build exemplary character. In professional life and sports, talent without discipline results in failure, while disciplined effort guarantees mastery. A disciplined person manages time efficiently and respects social duties. On the contrary, an undisciplined society suffers from lawlessness, chaos, and decay. Therefore, every student should practice self-discipline diligently to ensure personal prosperity and national progress.",
    "vocabulary": [
      {
        "word": "cornerstone",
        "banglaMeaning": "ভিত্তিপ্রস্তর / মূল ভিত্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "rudder",
        "banglaMeaning": "জাহাজের হাল",
        "partOfSpeech": "noun"
      },
      {
        "word": "diligently",
        "banglaMeaning": "নিষ্ঠার সাথে / একাগ্রভাবে",
        "partOfSpeech": "adv"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 128
  },
  {
    "id": "para_childhood_memories",
    "title": "My Childhood Memories",
    "category": "Paragraph",
    "classLevel": "HSC",
    "questions": [],
    "template": "Childhood is the golden, carefree period of human life, and its memories remain immortal in our hearts. Whenever I look back on my early years, a flood of sweet nostalgia fills my soul. I spent my childhood in a picturesque village blessed with green meadows, flowing canals, and shady banyan trees. I vividly remember playing traditional games like hide-and-seek, kabaddi, and flying colorful kites in the autumn breeze with my neighborhood friends. Bathing in the pond, plucking juicy green mangoes during summer thunderstorms, and catching small fish in shallow rainwater were our greatest delights. There were no academic anxieties or worldly stress; life was pure simplicity and joy. Although those blissful days have vanished into the past, their cherished memories continue to bring comfort and a warm smile to my heart.",
    "vocabulary": [
      {
        "word": "nostalgia",
        "banglaMeaning": "স্মৃতিবেদনা / ফেলে আসা দিনের স্মৃতি",
        "partOfSpeech": "noun"
      },
      {
        "word": "vividly",
        "banglaMeaning": "স্পষ্টভাবে / জীবন্তভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "blissful",
        "banglaMeaning": "পরমানন্দদায়ক / সুখময়",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 131
  },
  {
    "id": "para_drug_addiction",
    "title": "Drug Addiction and Its Effects",
    "category": "Paragraph",
    "classLevel": "HSC",
    "questions": [],
    "template": "Drug addiction is a dangerous social curse that is destroying the potential of millions of young people worldwide. It refers to the uncontrollable, chronic dependency on narcotic drugs like heroin, yaba, cocaine, and cannabis. Young people often fall prey to drug addiction due to bad companionship, depression, curiosity, or frustration. Once addicted, drugs inflict severe damage on the human body and nervous system, leading to brain impairment, liver failure, respiratory collapse, and premature death. When addicts run out of money, they resort to theft, robbery, and violent crimes, ruining family harmony and destabilizing social security. Eradicating drug addiction requires a multi-pronged approach: strict border vigilance to halt drug smuggling, severe legal punishment for drug syndicates, modern rehabilitation facilities, and moral guidance from families.",
    "vocabulary": [
      {
        "word": "dependency",
        "banglaMeaning": "নির্ভরশীলতা / আসক্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "impairment",
        "banglaMeaning": "ক্ষতিসাধন / বিকলাঙ্গতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "vigilance",
        "banglaMeaning": "সতর্কতা / পাহারা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 123
  },
  {
    "id": "dialogue_reading_newspaper",
    "title": "Dialogue: Importance of Reading Newspaper",
    "category": "Dialogue",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "Rahim: Hello Karim! Good morning. What are you reading so attentively?\n\nKarim: Good morning Rahim. I am reading today's daily newspaper.\n\nRahim: Do you read the newspaper every day? Why is it so important?\n\nKarim: Yes, I read it daily. A newspaper is a storehouse of knowledge. It gives us the latest news about national and international politics, science, sports, and economy.\n\nRahim: That sounds really useful. Does it help students with their studies too?\n\nKarim: Absolutely! Reading newspapers improves our English vocabulary, general knowledge, and writing skills. It keeps us aware of current affairs and competitive exams.\n\nRahim: What happens if someone does not read newspapers?\n\nKarim: A person who does not read newspapers remains like a frog in a well, completely unaware of what is happening around the globe.\n\nRahim: I understand now. From today, I will make a regular habit of reading newspapers.\n\nKarim: That is a wonderful decision, Rahim. It will broaden your outlook on life.\n\nRahim: Thank you very much for your valuable advice, Karim.\n\nKarim: You are most welcome, Rahim!",
    "vocabulary": [
      {
        "word": "attentively",
        "banglaMeaning": "মনোযোগ সহকারে",
        "partOfSpeech": "adv"
      },
      {
        "word": "storehouse",
        "banglaMeaning": "ভাণ্ডার / সমৃদ্ধ উৎস",
        "partOfSpeech": "noun"
      },
      {
        "word": "broaden",
        "banglaMeaning": "প্রশস্ত করা / বিস্তৃত করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 176
  },
  {
    "id": "dialogue_librarian_student",
    "title": "Dialogue: Borrowing a Book from the Library",
    "category": "Dialogue",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "Student: Good morning, Sir.\n\nLibrarian: Good morning! How can I help you today?\n\nStudent: Sir, I would like to borrow a book on English Grammar and Composition for Class Eight.\n\nLibrarian: Sure! Do you have your library membership card with you?\n\nStudent: Yes Sir, here is my library card.\n\nLibrarian: Thank you. Let me check our catalogue. Yes, \"Advanced English Grammar\" by Raymond Murphy is available on Shelf Number 4.\n\nStudent: That is great! Could you please issue this book for me?\n\nLibrarian: Certainly. You can keep this book for fourteen days. Please make sure you return or renew it before the due date.\n\nStudent: What should I do if I cannot finish reading within two weeks?\n\nLibrarian: You can easily bring the book here and renew it for another week without any fine.\n\nStudent: I will remember that. And I promise to take good care of the pages.\n\nLibrarian: Here is your book and library card. Happy reading!\n\nStudent: Thank you very much for your kind help, Sir.\n\nLibrarian: You are welcome!",
    "vocabulary": [
      {
        "word": "catalogue",
        "banglaMeaning": "তালিকা / বইয়ের সূচি",
        "partOfSpeech": "noun"
      },
      {
        "word": "issue",
        "banglaMeaning": "ধার দেওয়া / প্রদান করা",
        "partOfSpeech": "verb"
      },
      {
        "word": "renew",
        "banglaMeaning": "নবায়ন করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 173
  },
  {
    "id": "dialogue_physical_exercise_new",
    "title": "Dialogue: Importance of Physical Exercise",
    "category": "Dialogue",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "Sohan: Hello Tanvir! Where are you going so early in the morning?\n\nTanvir: Hi Sohan! I am going to the school playground for my daily physical exercise.\n\nSohan: You do exercise every morning? Is it really necessary?\n\nTanvir: Of course! Physical exercise is essential for keeping our body fit and active. Health is wealth, and without good health, we cannot enjoy our life.\n\nSohan: How does regular exercise benefit our body and mind?\n\nTanvir: It improves blood circulation, strengthens our muscles, and boosts our immune system against diseases. It also refreshes the brain and enhances concentration in studies.\n\nSohan: I often feel lazy and tired during classes. Will exercise help me?\n\nTanvir: Definitely! If you do light jogging, walking, or freehand exercise every morning, you will feel energetic throughout the day.\n\nSohan: That sounds fantastic. Can I join you from tomorrow?\n\nTanvir: Sure! Come to the field at 6:00 AM. We will exercise together.\n\nSohan: Thank you so much, Tanvir. See you tomorrow!\n\nTanvir: You are welcome, Sohan. See you!",
    "vocabulary": [
      {
        "word": "essential",
        "banglaMeaning": "অপরিহার্য / আবশ্যক",
        "partOfSpeech": "adj"
      },
      {
        "word": "circulation",
        "banglaMeaning": "রক্ত সঞ্চালন",
        "partOfSpeech": "noun"
      },
      {
        "word": "concentration",
        "banglaMeaning": "মনোযোগ / একাগ্রতা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 170
  },
  {
    "id": "dialogue_making_tea",
    "title": "Dialogue: How to Make a Cup of Tea",
    "category": "Dialogue",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "Nadia: Hi Rina! Welcome to my house. Would you like to have a hot cup of tea?\n\nRina: Hi Nadia! Thank you, I would love a cup of tea. But do you know how to make good tea?\n\nNadia: Yes, of course! It is very easy and simple. Let me show you.\n\nRina: Please tell me the steps. I want to learn.\n\nNadia: First, take a cup of water in a kettle and put it on the stove. Let the water boil properly.\n\nRina: What should we do after the water starts boiling?\n\nNadia: When the water boils, add one teaspoon of tea leaves into the boiling water and let it brew for two minutes.\n\nRina: How do we add milk and sugar?\n\nNadia: Strain the hot tea liquor through a strainer into a cup. Then add warm milk and one spoon of sugar according to your taste, and stir well with a spoon.\n\nRina: Wow, that smells so aromatic and delicious!\n\nNadia: Here is your fresh cup of hot tea. Enjoy it!\n\nRina: Thank you so much, Nadia. It tastes wonderful!",
    "vocabulary": [
      {
        "word": "brew",
        "banglaMeaning": "ফোটানো / জ্বাল দেওয়া",
        "partOfSpeech": "verb"
      },
      {
        "word": "strainer",
        "banglaMeaning": "ছাঁকনি",
        "partOfSpeech": "noun"
      },
      {
        "word": "aromatic",
        "banglaMeaning": "সুগন্ধযুক্ত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 182
  },
  {
    "id": "dialogue_buying_train_ticket",
    "title": "Dialogue: Buying a Train Ticket at the Booking Counter",
    "category": "Dialogue",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "Passenger: Good morning, Sir.\n\nBooking Clerk: Good morning! Where would you like to travel?\n\nPassenger: I want to travel from Dhaka to Chattogram on the Subarna Express tomorrow morning.\n\nBooking Clerk: Which class of ticket do you prefer—Shovon Chair or AC Snigdha?\n\nPassenger: Please give me two Shovon Chair tickets.\n\nBooking Clerk: Let me check our seat reservation system. Yes, seats are available in Coach 'Kha'.\n\nPassenger: That is great! What is the departure time of the train from Kamalapur Station?\n\nBooking Clerk: The train departs sharp at 7:00 AM. You should arrive at the platform at least twenty minutes before departure.\n\nPassenger: How much do the two tickets cost in total?\n\nBooking Clerk: The fare is 400 Taka per ticket. So the total amount is 800 Taka.\n\nPassenger: Here is the money—one thousand Taka note.\n\nBooking Clerk: Here are your two printed tickets and two hundred Taka change. Please check the date and seat numbers.\n\nPassenger: Everything is correct. Thank you very much for your assistance, Sir.\n\nBooking Clerk: You are welcome. Have a safe and pleasant journey!",
    "vocabulary": [
      {
        "word": "reservation",
        "banglaMeaning": "সংরক্ষণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "departure",
        "banglaMeaning": "প্রস্থান / ছেড়ে যাওয়া",
        "partOfSpeech": "noun"
      },
      {
        "word": "fare",
        "banglaMeaning": "ভাড়া",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 179
  },
  {
    "id": "dialogue_summer_vacation",
    "title": "Dialogue: Spending Summer Vacation",
    "category": "Dialogue",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "Arman: Hello Fahim! Our summer vacation starts next week. What is your plan?\n\nFahim: Hi Arman! I am planning to visit my grandparents in our village in Sylhet.\n\nArman: That sounds exciting! What will you do in the village?\n\nFahim: I will swim in the river, pluck ripe mangoes and jackfruits from orchards, and explore the lush green tea gardens.\n\nArman: Village life in summer is truly wonderful and peaceful.\n\nFahim: What about you, Arman? How are you going to spend your holiday?\n\nArman: I am going to Cox's Bazar with my family. I want to see the longest sea beach in the world and watch the magnificent sunset over the ocean.\n\nFahim: That will be an unforgettable trip! Don't forget to take lots of photographs.\n\nArman: I will also spend one hour every morning reading English storybooks and doing homework so that studies are not neglected.\n\nFahim: That is a very smart balance between recreation and study.\n\nArman: Have a joyful vacation in your village, Fahim!\n\nFahim: Thank you, Arman! Wish you a great tour too.",
    "vocabulary": [
      {
        "word": "orchards",
        "banglaMeaning": "ফলের বাগান",
        "partOfSpeech": "noun"
      },
      {
        "word": "magnificent",
        "banglaMeaning": "চমৎকার / দৃষ্টিনন্দন",
        "partOfSpeech": "adj"
      },
      {
        "word": "recreation",
        "banglaMeaning": "বিনোদন / চিত্তবিনোদন",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 177
  },
  {
    "id": "dialogue_village_vs_city",
    "title": "Dialogue: Village Life vs. City Life",
    "category": "Dialogue",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "Hasan: Hi Rashed! You recently returned from your village. How was your experience?\n\nRashed: Hello Hasan! It was amazing. The fresh air, scenic green beauty, and peaceful environment of the village refreshed my heart.\n\nHasan: But don't you think city life is better because of modern facilities?\n\nRashed: Cities certainly have modern hospitals, top educational institutions, and better transport, but they also suffer from noise, pollution, and severe traffic jams.\n\nHasan: That is true. In the city, people live busy and stressful lives with little time for neighbours.\n\nRashed: Exactly! In the village, people are simple, cordial, and always ready to help each other in times of need.\n\nHasan: However, villages often lack uninterrupted electricity, high-speed internet, and advanced healthcare.\n\nRashed: You are right. Both lives have their advantages and disadvantages. A blend of modern amenities in villages would make them ideal.\n\nHasan: I completely agree with you, Rashed. We need balanced development everywhere.\n\nRashed: Well said, Hasan!",
    "vocabulary": [
      {
        "word": "cordial",
        "banglaMeaning": "আন্তরিক / সৌহার্দ্যপূর্ণ",
        "partOfSpeech": "adj"
      },
      {
        "word": "amenities",
        "banglaMeaning": "সুযোগ-সুবিধা",
        "partOfSpeech": "noun"
      },
      {
        "word": "uninterrupted",
        "banglaMeaning": "নিরবচ্ছিন্ন / একটানা",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 158
  },
  {
    "id": "dialogue_traffic_jam_remedies",
    "title": "Dialogue: Traffic Jam in Cities and Its Remedies",
    "category": "Dialogue",
    "classLevel": "SSC",
    "questions": [],
    "template": "Nabil: Hi Shakib! Why are you so late today? The class has already started.\n\nShakib: Hello Nabil. I was stuck in a terrible traffic jam at Farmgate for over an hour.\n\nNabil: Traffic jam has become a daily nightmare in Dhaka. It wastes valuable working hours and causes huge economic loss.\n\nShakib: What are the main causes behind this intolerable traffic congestion?\n\nNabil: The rapid growth of population, narrow roads, violation of traffic rules by reckless drivers, and unauthorized parking on roads are the major reasons.\n\nShakib: In addition, thousands of slow-moving rickshaws mixed with fast vehicles worsen the situation.\n\nNabil: How can we solve this pressing problem?\n\nShakib: The government should construct more flyovers, expand the Metro Rail network, widen narrow roads, and strictly enforce traffic laws against unlicensed drivers.\n\nNabil: Public awareness is equally vital. Drivers and pedestrians must respect traffic signals and stop illegal parking.\n\nShakib: Absolutely. If these measures are implemented sincerely, city commuting will become smooth and comfortable.\n\nNabil: Let us hope for a quick solution.\n\nShakib: Yes, indeed.",
    "vocabulary": [
      {
        "word": "congestion",
        "banglaMeaning": "যানজট / অতিরিক্ত ভিড়",
        "partOfSpeech": "noun"
      },
      {
        "word": "unauthorized",
        "banglaMeaning": "অননুমোদিত / বেআইনি",
        "partOfSpeech": "adj"
      },
      {
        "word": "pedestrians",
        "banglaMeaning": "পথচারীগণ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 174
  },
  {
    "id": "dialogue_bank_account",
    "title": "Dialogue: How to Open a Bank Account",
    "category": "Dialogue",
    "classLevel": "SSC",
    "questions": [],
    "template": "Applicant: Good morning, Sir. May I come in?\n\nBank Officer: Good morning! Yes, please have a seat. How can I assist you?\n\nApplicant: Sir, I am a college student and I want to open a Student Savings Account in your bank.\n\nBank Officer: That is a wonderful decision! Having a bank account encourages the habit of saving money for the future.\n\nApplicant: What documents do I need to submit to open the account?\n\nBank Officer: You will need to fill out this application form, provide two passport-sized photographs, a photocopy of your Birth Certificate or National ID card, and a student ID card copy.\n\nApplicant: Do I need an introducer and a nominee?\n\nBank Officer: Yes, you need an introducer who holds an active account in our branch, along with a photograph and NID copy of your nominee.\n\nApplicant: What is the minimum initial deposit required for students?\n\nBank Officer: For student accounts, the initial deposit is only five hundred Taka.\n\nApplicant: That is very convenient. I will bring all the required documents tomorrow.\n\nBank Officer: Perfect. We will process your account and debit card within three working days.\n\nApplicant: Thank you very much for your guidance, Sir.\n\nBank Officer: You are welcome!",
    "vocabulary": [
      {
        "word": "nominee",
        "banglaMeaning": "উত্তরাধিকারী / মনোনীত ব্যক্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "deposit",
        "banglaMeaning": "জমা রাখা / আমানত",
        "partOfSpeech": "noun"
      },
      {
        "word": "convenient",
        "banglaMeaning": "সুবিধাজনক",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 203
  },
  {
    "id": "dialogue_env_pollution_new",
    "title": "Dialogue: Environment Pollution and Its Remedies",
    "category": "Dialogue",
    "classLevel": "SSC",
    "questions": [],
    "template": "Anis: Hello Kamal! Have you noticed the thick smog and bad smell in our city today?\n\nKamal: Hi Anis! Yes, our environment is getting polluted alarmingly day by day.\n\nAnis: Air, water, soil, and sound pollution are degrading our natural surroundings and threatening public health.\n\nKamal: What do you think are the primary causes of environmental degradation?\n\nAnis: Industrial waste dumping, toxic smoke from brick kilns and vehicles, plastic pollution, and indiscriminate tree felling are the main culprits.\n\nKamal: The consequences are severe. Deadly diseases like asthma, cancer, and jaundice are increasing rapidly.\n\nAnis: What practical steps should we take to protect our environment?\n\nKamal: We must undertake massive tree plantation campaigns, ban single-use polythene bags, install effluent treatment plants in industries, and promote clean green energy.\n\nAnis: Mass media and schools should also launch awareness programs so that citizens stop throwing garbage into open drains and rivers.\n\nKamal: Exactly! A clean environment is our basic right and shared responsibility.\n\nAnis: Let us start by keeping our own neighborhood clean and green.\n\nKamal: Wonderful idea, Anis! Let us work together.",
    "vocabulary": [
      {
        "word": "degrading",
        "banglaMeaning": "অবনতি ঘটাচ্ছে",
        "partOfSpeech": "verb"
      },
      {
        "word": "indiscriminate",
        "banglaMeaning": "নির্বিচার / বাছবিচারহীন",
        "partOfSpeech": "adj"
      },
      {
        "word": "effluent",
        "banglaMeaning": "শিল্পবর্জ্য / তরল বর্জ্য",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 180
  },
  {
    "id": "dialogue_load_shedding_new",
    "title": "Dialogue: Load Shedding and Power Crisis",
    "category": "Dialogue",
    "classLevel": "SSC",
    "questions": [],
    "template": "Fahad: Hi Jamil! You look exhausted. Did you not sleep well last night?\n\nJamil: Hello Fahad. There was continuous load shedding throughout the night, making it impossible to sleep in the sweltering heat.\n\nFahad: Load shedding has become an unbearable nuisance in both cities and villages.\n\nJamil: Yes, it seriously disrupts our studies, especially during exam season. When electricity goes off, we cannot read or use computers.\n\nFahad: Not only students, but hospitals, industries, and agricultural irrigation also suffer tremendous losses due to power failure.\n\nJamil: Why is there such a massive gap between demand and supply of electricity?\n\nFahad: The main causes are shortage of fuel and gas, system loss, illegal power connections, and outdated transmission lines.\n\nJamil: How can this energy crisis be resolved?\n\nFahad: The government should invest heavily in renewable energy like rooftop solar panels and wind energy, upgrade power stations, and strictly curb illegal power consumption.\n\nJamil: Citizens should also avoid wasting electricity by turning off unused lights and fans.\n\nFahad: Absolutely. Conscious energy usage can save substantial power.\n\nJamil: Thank you for the insightful discussion, Fahad.\n\nFahad: You are welcome, Jamil!",
    "vocabulary": [
      {
        "word": "sweltering",
        "banglaMeaning": "ভ্যাপসা গরম / অসহ্য উত্তপ্ত",
        "partOfSpeech": "adj"
      },
      {
        "word": "irrigation",
        "banglaMeaning": "কৃষি সেচকাজ",
        "partOfSpeech": "noun"
      },
      {
        "word": "transmission",
        "banglaMeaning": "বিদ্যুৎ সঞ্চালন",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 187
  },
  {
    "id": "dialogue_dengue_prevention",
    "title": "Dialogue: Dengue Fever and Mosquito Prevention",
    "category": "Dialogue",
    "classLevel": "SSC",
    "questions": [],
    "template": "Rony: Hello Sami! Did you hear that our classmate Tanvir has been hospitalized with Dengue fever?\n\nSami: Hi Rony! Yes, I heard it. Dengue is spreading alarmingly across our city this monsoon.\n\nRony: It is caused by the bite of the Aedes mosquito, which breeds in clean, stagnant water.\n\nSami: What are the common symptoms of Dengue fever?\n\nRony: High fever, severe headache, muscle and joint pain, rash, and sudden drop in blood platelet count are the key symptoms.\n\nSami: How can we protect ourselves and our community from Aedes mosquitoes?\n\nRony: We must ensure that stagnant water does not accumulate in flowerpots, discarded coconut shells, car tyres, and rooftop containers for more than three days.\n\nSami: Using mosquito nets while sleeping, applying mosquito repellents, and wearing full-sleeved clothes are also essential precautions.\n\nRony: City corporations must spray effective insecticides regularly and clear open drains.\n\nSami: We should also organize a clean-up campaign in our school campus this Friday.\n\nRony: That is a great initiative! Let us mobilize our classmates.\n\nSami: Together we can keep Dengue away.\n\nRony: Exactly!",
    "vocabulary": [
      {
        "word": "stagnant",
        "banglaMeaning": "জমাটবদ্ধ / বদ্ধ (পানি)",
        "partOfSpeech": "adj"
      },
      {
        "word": "platelet",
        "banglaMeaning": "অনুচক্রিকা / রক্তকণিকা",
        "partOfSpeech": "noun"
      },
      {
        "word": "repellents",
        "banglaMeaning": "মশা তাড়ানোর ওষুধ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 179
  },
  {
    "id": "dialogue_improving_english",
    "title": "Dialogue: How to Improve English Speaking Skills",
    "category": "Dialogue",
    "classLevel": "SSC",
    "questions": [],
    "template": "Mitu: Hi Sadia! You speak English so fluently and confidently. How did you improve your speaking skills?\n\nSadia: Hello Mitu! Thank you for the compliment. I used to be very shy and afraid of making mistakes, but regular practice helped me overcome fear.\n\nMitu: What specific methods did you follow to practice speaking?\n\nSadia: First, I started talking in simple English with my friends and family daily. I stopped worrying about grammatical perfection and focused on communication.\n\nMitu: Did you listen to English programs or read books?\n\nSadia: Yes! Listening to English news on BBC, watching documentaries, and reading English storybooks improved my pronunciation and vocabulary tremendously.\n\nMitu: Sometimes I cannot find the right words while speaking. What should I do?\n\nSadia: Try learning 5 new English words every day with their sentence examples. Also, practice speaking before a mirror for 10 minutes every day.\n\nMitu: That sounds very practical. Can we practice speaking in English together during tiffin break?\n\nSadia: Absolutely! It will benefit both of us.\n\nMitu: Thank you so much for your encouraging advice, Sadia.\n\nSadia: You are most welcome, Mitu!",
    "vocabulary": [
      {
        "word": "fluently",
        "banglaMeaning": "সাবলীলভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "compliment",
        "banglaMeaning": "প্রশংসা",
        "partOfSpeech": "noun"
      },
      {
        "word": "pronunciation",
        "banglaMeaning": "উচ্চারণ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 184
  },
  {
    "id": "dialogue_utilization_time",
    "title": "Dialogue: Proper Utilization of Time and Leisure",
    "category": "Dialogue",
    "classLevel": "SSC",
    "questions": [],
    "template": "Asif: Hi Babul! What were you doing on your smartphone all afternoon?\n\nBabul: Hello Asif. I was just scrolling through social media reels and playing online video games.\n\nAsif: You spent almost four hours on phone gaming? That is a huge waste of precious time!\n\nBabul: I had free time, so I thought it was harmless.\n\nAsif: Time is the most valuable asset in human life. Once lost, it can never be recovered. As students, we must utilize our time productively.\n\nBabul: How should we spend our leisure time properly?\n\nAsif: Leisure should refresh both body and mind. You can read informative books, play outdoor sports, practice gardening, learn computer programming, or help parents with household chores.\n\nBabul: I realize now that excessive screen time drains my energy and distracts me from studies.\n\nAsif: Following a balanced daily routine ensures that you study attentively and enjoy healthy recreation without wasting time.\n\nBabul: From today, I will limit my screen time and use my leisure constructively.\n\nAsif: I am very glad to hear that, Babul. Time management is the key to success.\n\nBabul: Thank you for opening my eyes, Asif!\n\nAsif: You are welcome!",
    "vocabulary": [
      {
        "word": "precious",
        "banglaMeaning": "মূল্যবান / মূল্যবান সম্পদ",
        "partOfSpeech": "adj"
      },
      {
        "word": "productively",
        "banglaMeaning": "ফলপ্রসূভাবে / দক্ষতার সাথে",
        "partOfSpeech": "adv"
      },
      {
        "word": "constructively",
        "banglaMeaning": "গঠনমূলকভাবে",
        "partOfSpeech": "adv"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 193
  },
  {
    "id": "dialogue_female_education_dialogue",
    "title": "Dialogue: Importance of Female Education",
    "category": "Dialogue",
    "classLevel": "SSC",
    "questions": [],
    "template": "Suma: Hello Rina! Where are you coming from?\n\nRina: Hi Suma! I am returning from a seminar on \"Empowerment of Women through Education\".\n\nSuma: That is a very timely topic. Why is female education so vital for our nation?\n\nRina: Women constitute nearly half of our total population. No nation can achieve real progress keeping half of its population illiterate in darkness.\n\nSuma: How does an educated woman contribute to her family and society?\n\nRina: An educated woman manages her family budget efficiently, maintains hygiene, and takes proper care of her children's health and education. As Napoleon famously said, \"Give me an educated mother, and I will give you an educated nation.\"\n\nSuma: Moreover, educated women can work as doctors, engineers, teachers, and entrepreneurs, boosting the national economy.\n\nRina: Exactly! Education prevents child marriage and empowers women to stand on their own feet with dignity.\n\nSuma: Our government is providing free tuition and stipends for female students to encourage girls' education.\n\nRina: Yes, and we must ensure that every girl in our country completes higher education without barriers.\n\nSuma: Wonderful discussion, Rina!\n\nRina: Thank you, Suma!",
    "vocabulary": [
      {
        "word": "empowerment",
        "banglaMeaning": "ক্ষমতায়ন",
        "partOfSpeech": "noun"
      },
      {
        "word": "constitute",
        "banglaMeaning": "গঠন করে / অংশ ধারণ করে",
        "partOfSpeech": "verb"
      },
      {
        "word": "entrepreneurs",
        "banglaMeaning": "উদ্যোক্তাগণ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 186
  },
  {
    "id": "dialogue_illiteracy_eradication",
    "title": "Dialogue: How to Eradicate Illiteracy in Bangladesh",
    "category": "Dialogue",
    "classLevel": "HSC",
    "questions": [],
    "template": "Salam: Hello Rafiq! What are you thinking about so deeply?\n\nRafiq: Hi Salam. I was reading a statistical report on illiteracy in developing countries. Illiteracy is indeed the biggest obstacle to our national progress.\n\nSalam: You are right. An illiterate person cannot read, write, or adopt modern agricultural and technological methods effectively.\n\nRafiq: Illiteracy breeds poverty, malnutrition, overpopulation, and unemployment in a vicious cycle.\n\nSalam: How can we eradicate this deep-rooted social curse from Bangladesh?\n\nRafiq: First, primary and secondary education must be made strictly compulsory and completely free for all children. Midday meals and free books should reach remote rural schools.\n\nSalam: What role can educated youth and college students play?\n\nRafiq: Students can set up night schools and adult literacy centers in villages during vacations to teach basic reading, writing, and arithmetic to adult workers.\n\nSalam: The government and NGOs should launch mass literacy campaigns through television, radio, and mobile apps.\n\nRafiq: If every educated citizen resolves to teach at least one illiterate person, our country can achieve 100% literacy very soon.\n\nSalam: \"Each one, teach one\" should be our national motto.\n\nRafiq: Exactly! Let us start today.",
    "vocabulary": [
      {
        "word": "illiteracy",
        "banglaMeaning": "নিরক্ষরতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "obstacle",
        "banglaMeaning": "বাধা / প্রতিবন্ধকতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "vicious cycle",
        "banglaMeaning": "দুষ্টচক্র",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 190
  },
  {
    "id": "dialogue_price_hike_dialogue",
    "title": "Dialogue: Price Hike of Essential Commodities",
    "category": "Dialogue",
    "classLevel": "HSC",
    "questions": [],
    "template": "Tareq: Hello Masud! You look worried. What happened?\n\nMasud: Hi Tareq. I just came back from the kitchen market. The prices of daily essentials like rice, oil, onions, and vegetables have skyrocketed beyond belief.\n\nTareq: Yes, the current price hike is causing unbearable hardship to poor and middle-class families with fixed incomes.\n\nMasud: What factors are responsible for this artificial price inflation?\n\nTareq: The main causes are dishonest syndicates of hoarders, extortion on transport highways, global fuel price hikes, and flawed market monitoring.\n\nMasud: Unscrupulous traders create artificial crises by hoarding goods in cold storages and selling them at exorbitant rates.\n\nTareq: How can the government curb this exploitation?\n\nMasud: The Directorate of National Consumer Rights Protection (DNCRP) and mobile courts must conduct strict daily market monitoring and penalize syndicate cartels.\n\nTareq: The Open Market Sale (OMS) and Trading Corporation of Bangladesh (TCB) should also expand their fair-price truck sales in every ward.\n\nMasud: If supply chains are protected from extortion and middlemen, food prices will return to affordable levels.\n\nTareq: Absolutely. Immediate action is needed to relieve public suffering.\n\nMasud: I completely agree with you.",
    "vocabulary": [
      {
        "word": "skyrocketed",
        "banglaMeaning": "আকাশচুম্বী বৃদ্ধি পেয়েছে",
        "partOfSpeech": "verb"
      },
      {
        "word": "hoarders",
        "banglaMeaning": "মজুতদারগণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "exorbitant",
        "banglaMeaning": "অতিরিক্ত চড়া / মাত্রাতিরিক্ত",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 186
  },
  {
    "id": "dialogue_road_accidents",
    "title": "Dialogue: Road Accidents and Road Safety in Bangladesh",
    "category": "Dialogue",
    "classLevel": "HSC",
    "questions": [],
    "template": "Mahir: Hello Joy! Did you read the morning newspaper? Another fatal road crash occurred on the Dhaka-Aricha highway today, claiming five lives.\n\nJoy: Hi Mahir. It is tragic and heartbreaking. Road accidents have become a daily phenomenon in Bangladesh, turning highways into death traps.\n\nMahir: Why are road accidents happening with such alarming frequency?\n\nJoy: Reckless driving, over-speeding, overtaking on blind curves, and driving by underage or unlicensed drivers are the primary causes.\n\nMahir: In addition, thousands of mechanically unfit vehicles ply on narrow, broken highways without proper fitness certificates.\n\nJoy: Lack of pedestrian foot-over bridges and jaywalking across busy highways also trigger fatal collisions.\n\nMahir: How can we ensure road safety across the country?\n\nJoy: Strict enforcement of the Road Transport Act is crucial. Corrupt licensing must be stopped, modern speed radars should monitor highways, and drunken or reckless drivers must receive exemplary punishment.\n\nMahir: Comprehensive driver training institutions and public awareness campaigns on traffic rules are equally indispensable.\n\nJoy: Safe roads are our fundamental right, and collective vigilance is needed to save innocent lives.\n\nMahir: Well said, Joy!",
    "vocabulary": [
      {
        "word": "reckless",
        "banglaMeaning": "বেপরোয়া",
        "partOfSpeech": "adj"
      },
      {
        "word": "jaywalking",
        "banglaMeaning": "নিয়ম না মেনে রাস্তা পারাপার",
        "partOfSpeech": "noun"
      },
      {
        "word": "vigilance",
        "banglaMeaning": "সচেতনতা ও সতর্কতা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 180
  },
  {
    "id": "dialogue_global_warming_dialogue",
    "title": "Dialogue: Global Warming and Climate Crisis",
    "category": "Dialogue",
    "classLevel": "HSC",
    "questions": [],
    "template": "Imran: Hello Tanmoy! Have you noticed how erratic our weather has become lately? Unprecedented heatwaves followed by sudden torrential rains!\n\nTanmoy: Hi Imran! Yes, this erratic weather is the direct consequence of catastrophic global warming.\n\nImran: Why is the global temperature rising at such a dangerous rate?\n\nTanmoy: Industrialized nations are burning billions of tons of fossil fuels, releasing carbon dioxide, methane, and greenhouse gases into the atmosphere. Widespread deforestation has crippled nature's carbon-absorbing capacity.\n\nImran: How does this climate change affect Bangladesh specifically?\n\nTanmoy: Bangladesh is one of the most climate-vulnerable countries in the world. Melting Himalayan and polar glaciers are causing sea-level rise that threatens to submerge one-fifth of our coastal belt by 2050, displacing millions as climate refugees.\n\nImran: In addition, frequent cyclones, salinization of agricultural soil, and river erosion are worsening rural poverty.\n\nTanmoy: What global and local actions must be taken?\n\nImran: World leaders must drastically cut greenhouse emissions and transition to solar and wind energy. Locally, we must construct strong embankments, protect the Sundarbans mangrove forest, and plant millions of trees.\n\nTanmoy: Climate action cannot wait. We must act now to save our planet.\n\nImran: Fully agreed, Tanmoy!",
    "vocabulary": [
      {
        "word": "erratic",
        "banglaMeaning": "অস্থির / খামখেয়ালী",
        "partOfSpeech": "adj"
      },
      {
        "word": "vulnerable",
        "banglaMeaning": "ঝুঁকিপূর্ণ / অরক্ষিত",
        "partOfSpeech": "adj"
      },
      {
        "word": "salinization",
        "banglaMeaning": "লবণাক্ততাকরণ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 194
  },
  {
    "id": "dialogue_patriotism_duties",
    "title": "Dialogue: Patriotism and Duties of Students to the Nation",
    "category": "Dialogue",
    "classLevel": "HSC",
    "questions": [],
    "template": "Zubair: Hello Mahbub! What does patriotism truly mean to you?\n\nMahbub: Hi Zubair! Patriotism is not just singing the national anthem or waving the flag; it is the deep, selfless love for one's motherland and the willingness to serve its people with integrity.\n\nZubair: What are the specific duties of students towards the nation?\n\nMahbub: A student's primary duty is to study sincerely, acquire scientific and moral knowledge, and build an honest, disciplined character. An educated, ethical youth is the greatest wealth of a country.\n\nZubair: Can students contribute to society alongside their academic studies?\n\nMahbub: Certainly! Students can volunteer in disaster relief operations, teach illiterate village children, participate in tree plantation drives, and donate blood to save lives.\n\nZubair: They should also resist corruption, voice out against social injustice, and preserve public property.\n\nMahbub: Exactly. Today's students are tomorrow's leaders, scientists, teachers, and administrators. Our dedicated service can transform Bangladesh into a prosperous, developed nation.\n\nZubair: Let us promise to dedicate our knowledge and skills to the service of our beloved motherland.\n\nMahbub: That is the noblest vow we can take, Zubair!\n\nZubair: Indeed!",
    "vocabulary": [
      {
        "word": "selfless",
        "banglaMeaning": "নিঃস্বার্থ",
        "partOfSpeech": "adj"
      },
      {
        "word": "integrity",
        "banglaMeaning": "সততা ও নীতিপরায়ণতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "vow",
        "banglaMeaning": "প্রতিজ্ঞা / শপথ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 185
  },
  {
    "id": "easy_tree_plantation",
    "title": "Tree Plantation",
    "category": "Easy",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "Tree Plantation\n\nIntroduction:\nTree plantation means planting and caring for trees on a large scale. Trees are the most precious and irreplaceable gift of nature. They are our closest friends and the guardians of human life on Earth. Without trees, the existence of all living beings is impossible.\n\nImportance and Benefits of Trees:\nTrees provide us with life-saving oxygen by taking in harmful carbon dioxide during photosynthesis. They give us sweet fruits for food, timber for building houses and furniture, and valuable herbs for medicines. Trees provide shelter to birds, wild animals, and insects. Furthermore, trees prevent soil erosion, absorb excess rainwater to mitigate floods, and attract rain clouds to maintain agricultural fertility.\n\nNegative Effects of Deforestation:\nUnfortunately, people are cutting down trees recklessly for fuel, furniture, and urbanization. This reckless deforestation leads to severe environmental hazards such as global warming, desertification, rising sea levels, and catastrophic storms. Without adequate forest cover, our mother planet will turn into a barren desert.\n\nConclusion:\nTo maintain ecological balance and ensure a healthy future for the coming generations, we must plant more trees. June and July (the monsoon season) is the ideal time for tree plantation in Bangladesh. The government, schools, and local communities should observe tree plantation weeks every year. Planting a tree is planting a life.",
    "vocabulary": [
      {
        "word": "irreplaceable",
        "banglaMeaning": "অপূরণীয় / অনন্য",
        "partOfSpeech": "adj"
      },
      {
        "word": "photosynthesis",
        "banglaMeaning": "সালোকসংশ্লেষণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "mitigate",
        "banglaMeaning": "হ্রাস করা / উপশম করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": true,
    "boardTags": [
      "SSC 2024",
      "All Boards"
    ],
    "banglaTranslation": "ভূমিকা:\nবৃক্ষরোপণ মানে পরিকল্পিতভাবে গাছ লাগানো ও লালন-পালন করা। গাছ আমাদের পরম বন্ধু এবং পৃথিবীর সমস্ত প্রাণের ধারক।\n\nগাছের গুরুত্ব ও উপকারিতা:\nগাছ সালোকসংশ্লেষণের মাধ্যমে আমাদের অক্সিজেন দেয় এবং ক্ষতিকর কার্বন ডাই-অক্সাইড শোষণ করে। গাছ আমাদের পুষ্টিকর ফল, জ্বালানি, গৃহনির্মাণের কাঠ এবং জীবনরক্ষাকারী ভেষজ ওষুধ দেয়। এছাড়া গাছ মাটির ক্ষয় রোধ করে এবং প্রাকৃতিক দুর্যোগ ও বন্যা প্রতিরোধে সহায়তা করে।\n\nবনায়ন ধ্বংসের ক্ষতি:\nমানুষ অসচেতনভাবে গাছ কেটে ফেলছে। বন উজাড় করার কারণে বৈশ্বিক উষ্ণতা বাড়ছে, মেরু অঞ্চলের বরফ গলছে এবং আবহাওয়া চরমভাবাপন্ন হচ্ছে।\n\nউপসংহার:\nএকটি সুন্দর ও বাসযোগ্য পৃথিবী গড়ে তোলার জন্য আমাদের প্রত্যেকের উচিত প্রতি বছর বর্ষাকালে অন্তত কয়েকটি করে ফলদ, বনজ ও ভেষজ গাছ লাগানো।",
    "wordCount": 215
  },
  {
    "id": "easy_journey_train_comp",
    "title": "A Journey by Train",
    "category": "Easy",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A Journey by Train\n\nIntroduction:\nA journey by train is always pleasant, comfortable, and memorable. It provides a wonderful opportunity to witness the panoramic natural beauty of the countryside while enjoying a smooth ride. During my last winter vacation, I had the thrilling experience of making a journey by train from Dhaka to Sylhet.\n\nThe Journey and Experience:\nMy father purchased four tickets for the 'Parabat Express'. On the scheduled morning, we reached Kamalapur Railway Station early. The station was buzzing with passengers, porters, and tea vendors. As the train blew its whistle and rolled out of the platform, my heart leapt with excitement. I secured a window seat.\n\nSights and Sceneries:\nAs the train gathered speed, the urban skyscrapers disappeared and were replaced by vast green paddy fields, meandering rivers, rustic villages, and grazing cattle. Trees and telegraph posts seemed to run backward. When the train crossed the giant Meghna Bridge, the sight of the shimmering water under the sun was breathtaking. In Sylhet, the scenic green hillocks and expansive tea gardens looked heavenly.\n\nConclusion:\nWe reached Sylhet Railway Station in the afternoon. The five-hour journey passed like a sweet dream without any fatigue. The sights and sounds of rural Bangladesh made a lasting impression on my mind. It remains the most delightful journey of my life.",
    "vocabulary": [
      {
        "word": "panoramic",
        "banglaMeaning": "নয়নভিরাম / চতুর্দিকের দৃশ্যপট",
        "partOfSpeech": "adj"
      },
      {
        "word": "meandering",
        "banglaMeaning": "আঁকাবাঁকা নদী বা পথ",
        "partOfSpeech": "adj"
      },
      {
        "word": "fatigue",
        "banglaMeaning": "ক্লান্তি / অবসাদ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 218
  },
  {
    "id": "easy_rivers_of_bangladesh",
    "title": "The Rivers of Bangladesh",
    "category": "Easy",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "The Rivers of Bangladesh\n\nIntroduction:\nBangladesh is a riverine country crisscrossed by hundreds of rivers, big and small. Rivers are the lifeblood of our economy, culture, and natural environment. The major rivers of Bangladesh are the Padma, the Meghna, the Jamuna, the Brahmaputra, the Surma, and the Karnaphuli.\n\nImportance in Agriculture and Economy:\nOur rivers make the soil exceptionally fertile by depositing rich silt during the annual monsoon. Farmers cultivate bumper crops of rice, jute, sugarcane, and vegetables on this fertile land. Moreover, rivers provide an abundant supply of delicious freshwater fish, especially our national pride, the Hilsa. Rivers also serve as cheap, convenient routes for transporting heavy goods and passengers.\n\nHydroelectricity and Tourism:\nRivers like the Karnaphuli generate clean hydroelectric power at Kaptai. The panoramic beauty of rivers inspired generations of poets, singers, and artists in our folklore and literature.\n\nProblems and Challenges:\nHowever, rivers also bring suffering during devastating monsoonal floods and bank erosions that render thousands homeless. Today, river pollution from industrial waste and encroachment pose serious threats to our aquatic ecosystems.\n\nConclusion:\nRivers are our national blessing and identity. We must protect our rivers by stopping illegal encroachment, dredging silted riverbeds, and preventing chemical pollution. If our rivers survive, Bangladesh will prosper.",
    "vocabulary": [
      {
        "word": "riverine",
        "banglaMeaning": "নদীমাতৃক",
        "partOfSpeech": "adj"
      },
      {
        "word": "fertile",
        "banglaMeaning": "উর্বর",
        "partOfSpeech": "adj"
      },
      {
        "word": "encroachment",
        "banglaMeaning": "অবৈধ দখল",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 206
  },
  {
    "id": "easy_favourite_teacher",
    "title": "My Favourite Teacher",
    "category": "Easy",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "My Favourite Teacher\n\nIntroduction:\nA teacher is an architect of a nation who dispels the darkness of ignorance and illuminates the minds of students. In our school, there are many qualified and respected teachers, but Mr. Rafiqul Islam, our English teacher, is my most favourite teacher.\n\nPersonality and Character:\nMr. Rafiqul Islam is an M.A. in English from Dhaka University. He is a tall, handsome gentleman who dresses in neat, modest clothes. He is polite, soft-spoken, and possesses an amiable and cheerful personality. He never loses his temper in class and treats every student with parental affection.\n\nMethod of Teaching:\nHis teaching methodology is extraordinary and engaging. He explains complex English grammar rules, vocabulary, and composition topics in simple, lucid language. He uses multimedia slides, storytelling, and interactive quizzes to make every lesson lively and enjoyable. If any student fails to understand a topic, he explains it patiently multiple times.\n\nGuidance and Inspiration:\nBeyond academics, he teaches us moral values, honesty, discipline, and patriotism. He encourages us to read extracurricular books and practice speaking in English without hesitation.\n\nConclusion:\nMr. Rafiqul Islam is not merely an instructor; he is a friend, philosopher, and guide. His exemplary character and selfless devotion inspire me to become a noble human being like him. I respect and admire him from the depth of my heart.",
    "vocabulary": [
      {
        "word": "illuminates",
        "banglaMeaning": "আলোকিত করে",
        "partOfSpeech": "verb"
      },
      {
        "word": "amiable",
        "banglaMeaning": "মিষ্টভাষী / অমায়িক",
        "partOfSpeech": "adj"
      },
      {
        "word": "lucid",
        "banglaMeaning": "সহজবোধ্য / স্পষ্ট",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 221
  },
  {
    "id": "easy_daily_routine",
    "title": "My Daily Routine",
    "category": "Easy",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "My Daily Routine\n\nIntroduction:\nA daily routine is a systematic plan for utilizing time efficiently throughout the day. Discipline and punctuality are the keys to academic excellence and personal success. As a student, I follow a well-structured daily routine to balance study, exercise, rest, and recreation.\n\nMorning Schedule:\nMy day begins early at 5:30 AM. After saying my morning prayers, I go for a thirty-minute morning walk in the open field with my father. Inhaling fresh oxygen refreshes my mind. I take a light breakfast at 7:00 AM and sit down to study for two hours when my mind is sharp and attentive.\n\nSchool and Afternoon Hours:\nAt 9:30 AM, I take my bath, put on my clean school uniform, and leave for school. I attend all classes attentively, take notes, and interact during lessons. During tiffin break at 1:30 PM, I eat my homemade snack and chat with friends. School finishes at 4:00 PM. Returning home, I wash up, eat a snack, and play football or cricket in the field till sunset.\n\nEvening and Night Schedule:\nIn the evening, after washing my hands and face, I sit at my study table at 6:30 PM. I prepare my daily homework and revise lessons till 10:00 PM. I take dinner with my family at 10:15 PM and go to bed by 10:45 PM.\n\nConclusion:\nFollowing this timetable keeps me healthy, active, and academically prepared. It eliminates exam anxiety and makes my student life smooth and organized.",
    "vocabulary": [
      {
        "word": "systematic",
        "banglaMeaning": "পদ্ধতিগত / সুশৃঙ্খল",
        "partOfSpeech": "adj"
      },
      {
        "word": "punctuality",
        "banglaMeaning": "সময়নিষ্ঠা",
        "partOfSpeech": "noun"
      },
      {
        "word": "eliminates",
        "banglaMeaning": "দূর করে / বাদ দেয়",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 245
  },
  {
    "id": "easy_village_doctor_comp",
    "title": "A Village Doctor",
    "category": "Easy",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A Village Doctor\n\nIntroduction:\nA village doctor is an indispensable public servant and healthcare provider in rural Bangladesh. Since certified medical doctors with MBBS degrees are rarely available in remote villages, the rural population relies heavily on the village doctor for their daily medical needs.\n\nQualifications and Dispensary:\nA village doctor is usually a Registered Medical Practitioner (LMAF/RMP) or has gained practical expertise by assisting senior physicians. He runs a small dispensary in the local village market. In his modest chamber, he stores common generic medicines, syrups, bandages, antiseptics, and a stethoscope. His chamber remains crowded with poor villagers every morning and evening.\n\nService and Duties:\nThe village doctor treats common everyday diseases like seasonal flu, viral fever, dysentery, gastric pain, and cuts. When a village patient falls critically ill at midnight, the doctor visits the patient's humble hut on foot or bicycle regardless of rain, storm, or darkness. He examines the patient with care, administers injections, and offers comforting words.\n\nSocial Value:\nHe charges very minimal fees and frequently provides free medicines to impoverished patients. He acts as an affectionate counselor and trusted guardian for the villagers.\n\nConclusion:\nAlthough his medical knowledge is basic, his selfless and dedicated service saves countless lives in rural areas. The government should provide modern training to village doctors to enhance rural healthcare.",
    "vocabulary": [
      {
        "word": "physicians",
        "banglaMeaning": "চিকিৎসকগণ",
        "partOfSpeech": "noun"
      },
      {
        "word": "antiseptics",
        "banglaMeaning": "জীবাণুনাশক",
        "partOfSpeech": "noun"
      },
      {
        "word": "impoverished",
        "banglaMeaning": "দরিদ্র / অভাবী",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 219
  },
  {
    "id": "easy_favourite_game_comp",
    "title": "My Favourite Game",
    "category": "Easy",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "My Favourite Game\n\nIntroduction:\nGames and sports are essential for maintaining physical fitness, mental agility, and character building. Among all outdoor sports, Cricket is my most favourite game. Cricket is an internationally celebrated sport known as the 'Gentleman's Game'. In Bangladesh, cricket is not just a game; it is a national passion and emotion.\n\nHow the Game is Played:\nCricket is played between two teams of eleven players each on a large grassy oval field. In the center is a 22-yard pitch with wickets at both ends. The game involves batting, bowling, and fielding. One team bats to score runs, while the other team bowls and fields to restrict runs and take wickets. The team that scores more runs wins the match. Cricket has three popular formats: Test matches, One Day Internationals (ODI), and exciting T20 games.\n\nWhy I Like Cricket:\nI love playing cricket because it develops teamwork, leadership, patience, and quick decision-making skills. I am an all-rounder in our school cricket team; I open the batting and bowl medium-fast swing. My favourite cricketer is Shakib Al Hasan because of his world-class all-round talent.\n\nConclusion:\nPlaying cricket after school keeps my body energetic, strengthens my stamina, and refreshes my mind from academic stress. It teaches us sportsmanship—how to accept victory with humility and defeat with grace.",
    "vocabulary": [
      {
        "word": "agility",
        "banglaMeaning": "কর্মতৎপরতা / ক্ষিপ্রতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "stamina",
        "banglaMeaning": "শারীরিক সহনশীলতা / শক্তি",
        "partOfSpeech": "noun"
      },
      {
        "word": "humility",
        "banglaMeaning": "নম্রতা / বিনয়",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 217
  },
  {
    "id": "easy_moonlit_night_comp",
    "title": "A Moonlit Night",
    "category": "Easy",
    "classLevel": "Class 6-8",
    "questions": [],
    "template": "A Moonlit Night\n\nIntroduction:\nA moonlit night is a celestial gift of nature that fills the Earth with serenity, enchantment, and poetic charm. It occurs during the lunar fortnight when the full moon shines like a silver plate in a spotless, clear azure sky.\n\nPicturesque Natural Beauty:\nOn a moonlit night, the silvery beams of the moon bathe the landscape in a soft, dreamy radiance. The green fields, leaves of trees, and quiet rivers glitter like diamonds. Nature seems to wear a silvery veil of peace. The calm water of ponds and rivers reflects the glowing moon, creating an ethereal spectacle. The cool nocturnal breeze brings a refreshing scent of blooming night flowers like jasmine and Hasna-hena.\n\nHuman Activities and Joy:\nPeople of all walks of life rejoice in the gentle beauty of a moonlit night. In villages, little children play outdoor games in courtyards while listening to fairy tales told by grandmothers. Villagers gather on porches to sing folk songs and chat peacefully. In cities, people stand on rooftops to enjoy the tranquil panorama.\n\nConclusion:\nA moonlit night washes away the exhaustion, worries, and fatigue of daily life. It elevates the human soul towards beauty, calm contemplation, and spiritual joy. It is truly one of the most delightful experiences on Earth.",
    "vocabulary": [
      {
        "word": "celestial",
        "banglaMeaning": "স্বর্গীয় / আকাশিক",
        "partOfSpeech": "adj"
      },
      {
        "word": "ethereal",
        "banglaMeaning": "অলৌকিক / অপূর্ব সুন্দর",
        "partOfSpeech": "adj"
      },
      {
        "word": "contemplation",
        "banglaMeaning": "গভীর ভাবনা / ধ্যান",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 212
  },
  {
    "id": "easy_female_education_comp",
    "title": "Female Education in Bangladesh",
    "category": "Easy",
    "classLevel": "SSC",
    "questions": [],
    "template": "Female Education in Bangladesh\n\nIntroduction:\nWomen constitute almost half of the total population of Bangladesh. No country can achieve economic prosperity and social progress keeping half of its population illiterate and confined within the four walls of domesticity. Female education is therefore the cornerstone of sustainable national development.\n\nRole of Women in Society and Family:\nAn educated mother is the first and greatest teacher of a child. As Napoleon Bonaparte famously declared, \"Give me an educated mother, and I will give you an educated nation.\" An educated woman manages family finances prudently, maintains household hygiene, and ensures proper nutrition and healthcare for her children. Furthermore, educated women contribute directly to the national GDP as doctors, engineers, corporate executives, entrepreneurs, and skilled garments professionals.\n\nSocial Transformation:\nFemale education is the most effective weapon against early child marriage, dowry violence, and maternal mortality. It empowers women with financial self-reliance, self-dignity, and decision-making authority in family and state affairs.\n\nGovernment Initiatives:\nThe government of Bangladesh has implemented commendable policies, including free secondary education for girls, female student stipends, and reserved quotas in jobs, leading to gender parity in school enrollment.\n\nConclusion:\nEducating a woman is educating an entire family and uplifting an entire nation. We must remove all social obstacles to ensure that every girl in Bangladesh receives quality higher education.",
    "vocabulary": [
      {
        "word": "sustainable",
        "banglaMeaning": "টেকসই",
        "partOfSpeech": "adj"
      },
      {
        "word": "prudently",
        "banglaMeaning": "বিচক্ষণতার সাথে",
        "partOfSpeech": "adv"
      },
      {
        "word": "parity",
        "banglaMeaning": "সমতা / সমমর্যাদা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 218
  },
  {
    "id": "easy_floods_in_bangladesh",
    "title": "Floods in Bangladesh: Causes and Remedies",
    "category": "Easy",
    "classLevel": "SSC",
    "questions": [],
    "template": "Floods in Bangladesh: Causes and Remedies\n\nIntroduction:\nBangladesh is a low-lying riverine delta that experiences seasonal floods almost every year. While moderate floods enrich our agricultural soil with fertile silt, catastrophic flash floods cause colossal devastation to life, property, and the national economy.\n\nCauses of Floods:\nFloods in Bangladesh are caused by both natural and anthropogenic factors. Heavy torrential monsoon rains and glacial melting in the Himalayas swell international transboundary rivers like the Padma, Meghna, and Jamuna. Massive siltation in riverbeds reduces their water-holding capacity. Additionally, deforestation in upstream regions, unplanned urbanization, and inadequate drainage systems exacerbate urban waterlogging.\n\nConsequences and Devastation:\nSevere floods submerge vast tracts of land, destroy standing crops, drown livestock, and damage highways and bridges. Thousands of families become homeless climate refugees. In the aftermath of floods, contaminated floodwaters trigger deadly epidemics of cholera, typhoid, and diarrhea.\n\nRemedies and Solutions:\nTo mitigate flood damage, we must undertake capital dredging of silted rivers, construct robust flood-control embankments, and improve modern urban drainage networks. Early flood warning radar systems and community cyclone shelters must be upgraded. Regional cooperation with neighbouring countries for water management is also crucial.\n\nConclusion:\nAlthough floods cannot be eradicated completely, scientific disaster management and timely relief operations can minimize losses and protect our vulnerable population.",
    "vocabulary": [
      {
        "word": "colossal",
        "banglaMeaning": "বিশাল / প্রকাণ্ড",
        "partOfSpeech": "adj"
      },
      {
        "word": "anthropogenic",
        "banglaMeaning": "মানব সৃষ্ট",
        "partOfSpeech": "adj"
      },
      {
        "word": "mitigate",
        "banglaMeaning": "হ্রাস করা / উপশম করা",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 211
  },
  {
    "id": "easy_internet_modern_life",
    "title": "Internet and Its Impact on Modern Society",
    "category": "Easy",
    "classLevel": "SSC",
    "questions": [],
    "template": "Internet and Its Impact on Modern Society\n\nIntroduction:\nThe internet is undeniably the most transformative and miraculous technological invention of the twenty-first century. It has interconnected humanity into an interconnected global village, revolutionizing communication, business, education, and entertainment.\n\nBenefits and Applications:\nThe internet has democratized education. Students can access millions of digital e-books, research journals, and online courses on platforms like Coursera and YouTube from home. In business, e-commerce platforms and digital banking (Bkash, Nagad) allow instant global transactions. Telemedicine connects rural patients with expert doctors. Social networking platforms enable instantaneous communication across continents.\n\nDrawbacks and Hazards:\nDespite its immense advantages, the internet has significant downsides. Excessive screen time leads to digital addiction, loss of eyesight, insomnia, and social isolation. The internet is also exploited by cybercriminals for hacking, identity theft, financial fraud, and spreading disinformation.\n\nConclusion:\nThe internet is a powerful tool; its value depends entirely on how we use it. We must practice self-restraint, cyber literacy, and cybersecurity ethics to harness its constructive potential while shielding ourselves from its perils.",
    "vocabulary": [
      {
        "word": "democratized",
        "banglaMeaning": "সবার জন্য উন্মুক্ত করেছে",
        "partOfSpeech": "verb"
      },
      {
        "word": "instantaneous",
        "banglaMeaning": "মুহূর্তের মধ্যে ঘটা",
        "partOfSpeech": "adj"
      },
      {
        "word": "disinformation",
        "banglaMeaning": "উদ্দেশ্যপ্রণোদিত ভুল তথ্য / মিথ্যা সংবাদ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 172
  },
  {
    "id": "easy_env_pollution_comp",
    "title": "Environment Pollution and Its Remedies",
    "category": "Easy",
    "classLevel": "SSC",
    "questions": [],
    "template": "Environment Pollution and Its Remedies\n\nIntroduction:\nOur environment consists of air, water, soil, plants, and living organisms that co-exist in a delicate ecological harmony. Unfortunately, rapid industrialization, population explosion, and unplanned urbanization have caused severe environmental pollution, threatening human survival.\n\nTypes and Causes of Pollution:\n1. Air Pollution: Emission of toxic gases (carbon monoxide, sulfur dioxide) from brick kilns, unfit motor vehicles, and factories pollutes the air, causing fatal lung cancer and respiratory ailments.\n2. Water Pollution: Industrial chemical effluents dumped directly into rivers like Buriganga and excessive agricultural pesticides contaminate drinking water, causing cholera, jaundice, and fish mortality.\n3. Soil Pollution: Indiscriminate dumping of non-biodegradable polythene and plastic waste degrades soil fertility.\n4. Sound Pollution: Hydraulic horns and loud loudspeakers cause hearing impairment and hypertension.\n\nRemedies:\nTo save our planet, we must implement strict environmental laws, install Effluent Treatment Plants (ETP) in every factory, shift to clean solar and wind energy, ban single-use plastics, and launch massive national tree plantation campaigns.\n\nConclusion:\nA green and unpolluted environment is the fundamental right of every citizen. Individual awareness and collective responsibility are imperative to secure a clean and habitable Earth.",
    "vocabulary": [
      {
        "word": "ecological",
        "banglaMeaning": "বাস্তুসংস্থান সংক্রান্ত / পরিবেশগত",
        "partOfSpeech": "adj"
      },
      {
        "word": "non-biodegradable",
        "banglaMeaning": "প্রাকৃতিকভাবে অপচনশীল",
        "partOfSpeech": "adj"
      },
      {
        "word": "imperative",
        "banglaMeaning": "অপরিহার্য / অতীব জরুরি",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 189
  },
  {
    "id": "easy_padma_bridge_comp",
    "title": "The Padma Multipurpose Bridge",
    "category": "Easy",
    "classLevel": "SSC",
    "questions": [],
    "template": "The Padma Multipurpose Bridge\n\nIntroduction:\nThe Padma Multipurpose Bridge is a monumental engineering masterpiece and the crowning glory of modern Bangladesh. Inaugurated on 25 June 2022 by Prime Minister Sheikh Hasina, it stands as an enduring symbol of our national self-reliance, pride, and economic capability.\n\nKey Engineering Features:\nThe bridge is 6.15 kilometers long and 18.10 meters wide, making it the longest bridge in Bangladesh. It is a two-tier steel truss bridge with a four-lane highway on the upper deck and a single-track railway line on the lower deck. Constructed over the ferocious and turbulent Padma River, it connects Mawa in Munshiganj to Janjira in Shariatpur with 41 steel spans resting on 42 massive pillars.\n\nEconomic and Social Impact:\nThe Padma Bridge has directly connected twenty-one southwestern districts with the capital city, Dhaka. It has drastically reduced travel time from hours to mere minutes, ending the perilous ferry-crossing era. It facilitates fast transport of agricultural produce, shrimp, and industrial goods, boosting our national GDP by 1.2% to 1.5% annually.\n\nConclusion:\nFinanced entirely by our own domestic funds, the Padma Bridge proved our national resilience to the global community. It has revolutionized regional connectivity and inaugurated a golden era of industrial prosperity in southern Bangladesh.",
    "vocabulary": [
      {
        "word": "monumental",
        "banglaMeaning": "স্মরণীয় / যুগান্তকারী",
        "partOfSpeech": "adj"
      },
      {
        "word": "turbulent",
        "banglaMeaning": "প্রমত্তা / উত্তাল",
        "partOfSpeech": "adj"
      },
      {
        "word": "resilience",
        "banglaMeaning": "দৃঢ়তা / প্রতিকূলতা জয়ের ক্ষমতা",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": true,
    "boardTags": [
      "HSC 2024",
      "Top Suggestion ⭐"
    ],
    "banglaTranslation": "ভূমিকা:\nপদ্মা বহুমুখী সেতু বাংলাদেশের ইতিহাসের সর্ববৃহৎ ও গৌরবময় অবকাঠামো প্রকল্প। এটি আমাদের জাতীয় অহংকার ও অর্থনৈতিক সক্ষমতার প্রতীক।\n\nপ্রকৌশল বৈশিষ্ট্য:\nএই দ্বিতল ইস্পাতের সেতুটি ৬.১৫ কিলোমিটার দীর্ঘ। ওপরের তলায় চার লেনের মহাসড়ক এবং নিচের তলায় একক রেলপথ রয়েছে। প্রমত্তা পদ্মা নদীর ওপর ৪২টি পিলারের ওপর ৪১টি স্প্যান বসিয়ে এটি নির্মাণ করা হয়েছে।\n\nঅর্থনৈতিক প্রভাব:\nপদ্মা সেতুর মাধ্যমে দেশের দক্ষিণ-পশ্চিমাঞ্চলের ২১টি জেলা সরাসরি ঢাকার সাথে যুক্ত হয়েছে। পণ্য পরিবহন সহজ হওয়ায় দক্ষিণবঙ্গে নতুন নতুন শিল্পকারখানা ও কর্মসংস্থান সৃষ্টি হচ্ছে, যা দেশের অর্থনীতিকে দ্রুত এগিয়ে নিচ্ছে।",
    "wordCount": 204
  },
  {
    "id": "easy_victory_day_comp",
    "title": "Victory Day of Bangladesh",
    "category": "Easy",
    "classLevel": "SSC",
    "questions": [],
    "template": "Victory Day of Bangladesh\n\nIntroduction:\nThe 16th of December is the Victory Day of Bangladesh, celebrated nationwide with immense pride, reverence, and patriotic fervor. It marks the glorious day in 1971 when our heroic freedom fighters defeated the Pakistani occupation army, establishing Bangladesh as a sovereign nation on the world map.\n\nHistorical Background:\nFor twenty-four years, the people of East Pakistan suffered extreme economic exploitation and political oppression under Pakistani rulers. Under the charismatic leadership of Bangabandhu Sheikh Mujibur Rahman, the Bengali nation launched the Liberation War in 1971. After nine months of valiant armed struggle and the supreme sacrifice of three million martyrs, 93,000 Pakistani soldiers surrendered unconditionally at the Race Course Ground.\n\nCelebrations and Observance:\nThe day commences with a 31-gun salute at sunrise. Thousands of patriotic citizens visit the National Martyrs' Memorial at Savar to pay heartfelt floral homage to the fallen heroes. A grand military parade is showcased at the National Parade Square. Educational institutions organize rallies, cultural dramas, and seminars recounting our Liberation War history.\n\nConclusion:\nVictory Day is a day of rededication. It inspires us to eliminate poverty, corruption, and illiteracy to build an exploitation-free 'Sonar Bangla'.",
    "vocabulary": [
      {
        "word": "fervor",
        "banglaMeaning": "গভীর আবেগ ও উদ্দীপনা",
        "partOfSpeech": "noun"
      },
      {
        "word": "charismatic",
        "banglaMeaning": "সম্মোহনী / প্রভাবশালী",
        "partOfSpeech": "adj"
      },
      {
        "word": "valiant",
        "banglaMeaning": "সাহসী / বীরত্বপূর্ণ",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 193
  },
  {
    "id": "easy_mother_language_day_comp",
    "title": "International Mother Language Day",
    "category": "Easy",
    "classLevel": "SSC",
    "questions": [],
    "template": "International Mother Language Day\n\nIntroduction:\nThe 21st of February is an unforgettable red-letter day in our national history, observed globally as International Mother Language Day. Bengalis are the only nation in world history who shed their sacred blood to protect the dignity of their mother tongue, Bangla.\n\nHistorical Significance (1952):\nIn 1948, Pakistani rulers unjustly declared Urdu as the sole state language of Pakistan. The student community and people of East Bengal protested vehemently. On 21 February 1952, police opened fire on a peaceful student procession in Dhaka, martyring Salam, Barkat, Rafiq, Jabbar, and Shafiur. Their martyrdom forced the government to grant Bangla state language status.\n\nGlobal Recognition by UNESCO:\nIn November 1999, UNESCO officially proclaimed February 21 as International Mother Language Day. Today, over 190 nations worldwide observe this day to promote linguistic diversity and protect endangered indigenous languages.\n\nCelebration:\nThe day begins with the barefoot 'Probhat Feri' procession towards the Central Shaheed Minar, singing the immortal song, \"Amar Bhaier Rokte Rangano Ekushey February\". People offer floral wreaths to honour the martyrs.\n\nConclusion:\nEkushey February taught us the spirit of resistance against injustice and laid the foundation for our 1971 Liberation War. We must cherish our mother tongue while respecting all languages.",
    "vocabulary": [
      {
        "word": "vehemently",
        "banglaMeaning": "তীব্রভাবে / সোচ্চার কণ্ঠে",
        "partOfSpeech": "adv"
      },
      {
        "word": "martyrdom",
        "banglaMeaning": "আত্মাহুতি / শহীদত্ব",
        "partOfSpeech": "noun"
      },
      {
        "word": "indigenous",
        "banglaMeaning": "স্থানীয় / আদিবাসী",
        "partOfSpeech": "adj"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 203
  },
  {
    "id": "easy_cleanliness_comp",
    "title": "Cleanliness and Personal Hygiene",
    "category": "Easy",
    "classLevel": "SSC",
    "questions": [],
    "template": "Cleanliness and Personal Hygiene\n\nIntroduction:\nCleanliness is the essential virtue of keeping our body, mind, clothes, and surrounding environment clean and free from dirt. As the well-known English proverb states, \"Cleanliness is next to godliness.\" It is the foundation of physical health, mental peace, and social dignity.\n\nPersonal Hygiene:\nTo maintain personal hygiene, we should take a daily bath with soap, wash our hair, clip our fingernails regularly, and brush our teeth twice a day. Washing hands with soap before eating and after using the toilet is the most effective safeguard against infectious bacteria and viruses.\n\nEnvironmental Cleanliness:\nCleanliness extends beyond the self to our home, school, and neighborhood. We must avoid littering on streets and dispose of household garbage in designated dustbins. Keeping our drains clean and eliminating stagnant water prevents mosquito breeding and outbreaks of Dengue and Malaria.\n\nMental Cleanliness:\nMental cleanliness implies purifying the mind from envy, hatred, greed, and malice. A clean mind fosters positive thinking, academic excellence, and virtuous conduct.\n\nConclusion:\nA clean person is admired and respected in society. Students should practice cleanliness diligently as a lifelong habit to lead a happy, disease-free, and honorable life.",
    "vocabulary": [
      {
        "word": "hygiene",
        "banglaMeaning": "স্বাস্থ্যবিধি",
        "partOfSpeech": "noun"
      },
      {
        "word": "infectious",
        "banglaMeaning": "সংক্রামক",
        "partOfSpeech": "adj"
      },
      {
        "word": "malice",
        "banglaMeaning": "বিদ্বেষ / শত্রুভাব",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 192
  },
  {
    "id": "easy_discipline_comp",
    "title": "Discipline in Student Life",
    "category": "Easy",
    "classLevel": "HSC",
    "questions": [],
    "template": "Discipline in Student Life\n\nIntroduction:\nDiscipline is the conscious practice of training one's mind and conduct to adhere to established rules, systematic order, and moral self-restraint. It is the bedrock of all personal accomplishment, academic brilliance, and societal harmony. Student life is the most fertile phase where the habits of discipline must be firmly cultivated.\n\nDiscipline in Nature and Human Society:\nNature itself operates on supreme discipline—the sun rises punctually, seasons follow an orderly cycle, and celestial bodies maintain precise orbits. Similarly, human civilization without discipline disintegrates into anarchy. A school without discipline is a chaotic crowd; an army without discipline is an armed mob.\n\nSignificance for Students:\nFor a student, discipline implies punctuality, regular class attendance, obedience to teachers and parents, and systematic time management. A disciplined student plans daily study hours, exercises regularly, avoids toxic digital distractions, and prepares thoroughly for examinations without panic.\n\nConsequences of Indiscipline:\nAn undisciplined student squanders precious youthful years in idleness and procrastinates, eventually facing academic failure, psychological depression, and career ruin.\n\nConclusion:\nDiscipline is not a restriction on personal liberty; rather, it is the bridge between goals and accomplishments. Every student must embrace strict self-discipline to become an enlightened leader and responsible citizen.",
    "vocabulary": [
      {
        "word": "bedrock",
        "banglaMeaning": "মূল ভিত্তিপ্রস্তর",
        "partOfSpeech": "noun"
      },
      {
        "word": "anarchy",
        "banglaMeaning": "নৈরাজ্য / বিশৃঙ্খলা",
        "partOfSpeech": "noun"
      },
      {
        "word": "procrastinates",
        "banglaMeaning": "গড়িমসি করে / কাজ ফেলে রাখে",
        "partOfSpeech": "verb"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 201
  },
  {
    "id": "easy_liberation_war_1971",
    "title": "The Historic 1971 Liberation War of Bangladesh",
    "category": "Easy",
    "classLevel": "HSC",
    "questions": [],
    "template": "The Historic 1971 Liberation War of Bangladesh\n\nIntroduction:\nThe 1971 Liberation War is the most epoch-making, valiant, and bloody chapter in the national history of Bangladesh. Through this monumental struggle, the oppressed Bengali nation broke the shackles of Pakistani subjugation and earned sovereign statehood on 16 December 1971.\n\nBackground and Root Causes:\nFollowing the 1947 partition, West Pakistani rulers treated East Bengal as an economic colony, depriving Bengalis of fair political representation, economic resources, and cultural rights. When the Awami League won an absolute majority in the 1970 general elections, the military junta refused to transfer power. On 25 March 1971, the Pakistani military launched 'Operation Searchlight', committing horrific genocide against unarmed civilians in Dhaka.\n\nThe War and Supreme Sacrifice:\nBangabandhu declared independence on 26 March. The valiant Mukti Bahini (Freedom Fighters), consisting of students, farmers, army, and police personnel, waged a fierce guerrilla war. After nine months of heroic resistance, with friendly support from India, the allied forces defeated the enemy on 16 December 1971. Three million martyrs laid down their lives, and two hundred thousand women endured supreme sacrifice.\n\nConclusion:\nThe Liberation War represents the triumph of justice, democracy, and national unity over tyranny. We must uphold the sacred ideals of 1971 and build a prosperous, non-communal Bangladesh.",
    "vocabulary": [
      {
        "word": "epoch-making",
        "banglaMeaning": "যুগান্তকারী",
        "partOfSpeech": "adj"
      },
      {
        "word": "subjugation",
        "banglaMeaning": "পরাধীনতা / বশ্যতা",
        "partOfSpeech": "noun"
      },
      {
        "word": "tyranny",
        "banglaMeaning": "স্বৈরাচার / অত্যাচার",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 210
  },
  {
    "id": "easy_smart_bangladesh_comp",
    "title": "Smart Bangladesh: Transforming the Nation",
    "category": "Easy",
    "classLevel": "HSC",
    "questions": [],
    "template": "Smart Bangladesh: Transforming the Nation\n\nIntroduction:\n'Smart Bangladesh' is the visionary national roadmap aimed at transforming Bangladesh into an innovative, technologically advanced, and knowledge-based high-income economy by the year 2041. Building upon the success of 'Digital Bangladesh', this vision focuses on modern digital ecosystems to ensure inclusive economic growth.\n\nFour Key Pillars of Smart Bangladesh:\n1. Smart Citizens: Developing a tech-savvy, digitally literate, creative, and ethical workforce equipped with skills in Artificial Intelligence (AI), robotics, coding, and data science.\n2. Smart Economy: Transitioning to a cashless digital economy driven by fintech, e-commerce, automated supply chains, and high-tech software exports.\n3. Smart Government: Providing transparent, paperless, and corruption-free public administrative services via cloud platforms and citizen-centric e-governance.\n4. Smart Society: Creating an equitable, tolerant, and eco-friendly social structure with universal digital healthcare, smart transport, and green urbanization.\n\nChallenges and Prerequisites:\nAchieving Smart Bangladesh requires bridging the urban-rural digital divide, ensuring affordable high-speed broadband internet in remote villages, fortifying national cybersecurity, and updating educational curricula to match fourth industrial revolution (4IR) standards.\n\nConclusion:\nSmart Bangladesh is a transformative leap forward. The active involvement of our energetic youth and forward-thinking policymakers will propel our beloved motherland into the ranks of developed nations.",
    "vocabulary": [
      {
        "word": "transformative",
        "banglaMeaning": "রূপান্তরকারী / যুগান্তকারী",
        "partOfSpeech": "adj"
      },
      {
        "word": "equitable",
        "banglaMeaning": "ন্যায়সঙ্গত / বৈষম্যহীন",
        "partOfSpeech": "adj"
      },
      {
        "word": "curricula",
        "banglaMeaning": "পাঠ্যক্রমসমূহ",
        "partOfSpeech": "noun"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 199
  },
  {
    "id": "easy_duties_good_citizen",
    "title": "Duties and Responsibilities of a Good Citizen",
    "category": "Easy",
    "classLevel": "HSC",
    "questions": [],
    "template": "Duties and Responsibilities of a Good Citizen\n\nIntroduction:\nA citizen is a legally recognized member of a sovereign state who enjoys fundamental rights and privileges provided by the constitution. However, rights and duties are intrinsically interconnected. A state can only flourish when its citizens perform their civic and moral responsibilities faithfully.\n\nKey Duties and Responsibilities:\n1. Allegiance to the Constitution and Law: A good citizen must respect the national constitution, obey the laws of the land, and maintain civic discipline.\n2. Payment of Taxes: Paying government taxes and utility dues honestly and punctually enables the state to build infrastructure, hospitals, and schools.\n3. Exercising the Right to Vote: Voting conscientiously in elections without prejudice ensures good governance and democratic stability.\n4. Protecting Public Property: A responsible citizen safeguards state infrastructure, trains, bridges, and public parks from vandalism and damage.\n5. Social Harmony and Patriotism: Promoting communal harmony, resisting corruption, and assisting fellow citizens during natural calamities are noble civic duties.\n\nRole of Students:\nStudents must study diligently, acquire moral character, and volunteer in community welfare drives to prepare themselves as conscientious future citizens.\n\nConclusion:\n\"Ask not what your country can do for you; ask what you can do for your country.\" Selfless civic responsibility is the bedrock of national greatness and prosperity.",
    "vocabulary": [
      {
        "word": "intrinsically",
        "banglaMeaning": "স্বভাবগতভাবে / অবিচ্ছেদ্যভাবে",
        "partOfSpeech": "adv"
      },
      {
        "word": "allegiance",
        "banglaMeaning": "আনুগত্য",
        "partOfSpeech": "noun"
      },
      {
        "word": "conscientiously",
        "banglaMeaning": "বিবেকসম্মতভাবে / নিষ্ঠার সাথে",
        "partOfSpeech": "adv"
      }
    ],
    "isSuggestion": false,
    "boardTags": [],
    "banglaTranslation": "",
    "wordCount": 212
  }
];

export function getCompositionCategoryCount(categoryId) {
  if (!categoryId || categoryId === 'All') {
    return COMPOSITION_TOPICS.length
  }
  return COMPOSITION_TOPICS.filter(t => t.category === categoryId).length
}

export function filterCompositionTopics({ category = 'All', classLevel = 'All', query = '' }) {
  const q = (query || '').trim().toLowerCase()
  return COMPOSITION_TOPICS.filter(item => {
    // Category check
    if (category !== 'All' && item.category !== category) {
      return false
    }
    // Class level check
    if (classLevel !== 'All' && item.classLevel !== 'All') {
      if (classLevel === 'Class 6-8' && !['Class 6-8', 'Class 6', 'Class 7', 'Class 8'].includes(item.classLevel)) {
        return false
      }
      if (classLevel === 'SSC' && !['SSC', 'Class 9-10'].includes(item.classLevel)) {
        return false
      }
      if (classLevel === 'HSC' && !['HSC', 'Class 11-12'].includes(item.classLevel)) {
        return false
      }
    }
    // Search query check
    if (q) {
      const matchTitle = (item.title || '').toLowerCase().includes(q)
      const matchCategory = (item.category || '').toLowerCase().includes(q)
      const matchTemplate = (item.template || '').toLowerCase().includes(q)
      const matchBangla = (item.banglaTranslation || '').toLowerCase().includes(q)
      const matchVocab = (item.vocabulary || []).some(v => 
        (v.word || '').toLowerCase().includes(q) || (v.banglaMeaning || '').includes(q)
      )
      return matchTitle || matchCategory || matchTemplate || matchBangla || matchVocab
    }
    return true
  })
}

export function getCompositionById(id) {
  return COMPOSITION_TOPICS.find(t => t.id === id) || null
}
