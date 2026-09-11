-- ============================================================
-- Unit 14: Renewable Energy (১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy))
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

    -- Find Chapter (Unit 14)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 14 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 14 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Renewable Energy Sources (Part 1)
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u14_l01$
# ১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

### 🎯 Learning Outcomes

*After we have studied this unit, we will be able to describe familiar objects*

- participate in conversation, discussion

- read intensively and extensively

- write formal letters.

---

## 📖 Lesson 1: Renewable Energy Sources (Part 1)

Pairwork. Read the words in the box. Which of the words are related to energy?

| 1. fuel | 2. desert | 3. fossil | 4. sun |
| --- | --- | --- | --- |
| oil | forest | relic | wind |
| gas | valley | remnant | water |
| soil | waterfall | sign | coal |

Now, underline the odd word in each column that doesn't belong to the group. Then compare with your partner. Check the meanings of the new words in a dictionary.

> 📝 **Activity:** Read the text and answer the questions that follow.

In a speech at the 90th Science

Congress, acknowledged

internationally scientist and former Indian president Mr.APJ Abdul Kalam mentioned a very important aspect of this mankind's future energy crisis. He pointed out that the era of wood and bio-mass has almost come to an end.

The age of oil and natural gas

would soon be over within the next few decades. Massive burning of world's coal reserves may lead to a worldwide ecological disaster because coal burning emits the highest amount of carbon in the atmosphere. So according to Kalam, the only solution that mankind can look to is the massive use of solar energy in future because it has some advantages over other forms of renewable energies.

Now, why has Kalam put so much importance to the issue of energy? The energy sources have always been a major factor of change throughout history. The world's petroleum consumption has increased from 3 billion barrels annually in 1930 to 37 billion barrels annually today. In the next quarter century, the world's population is expected to be about 8 billion which is 30 percent higher than today. Developing countries will grow their economies about two times faster than industrialised countries. Global economic growth is expected to continue at 3 percent per year. Consequently, the global demand for energy will grow at about 1.7 percent per year on an average. It indicates a 50-percent rise of energy consumption by 2030. If the world's daily petroleum consumption is 100 million barrels now, it will rise to 150 million barrels by that time. The present reserve of hydro-carbon energy resources is limited and it will not be sufficient to meet the future energy challenges of the world. Hence, leading industrial countries have taken initiatives to use alternative energy sources mainly known as green or renewable energy sources. The bottom line of Kalam's speech indicates the concern of mankind in the 21st century.

### ❓ Questions:

What is the scientist Kalam concerned about?

Why do you think the massive burning of coal may lead to an ecological disaster?

What according to Mr Kalam is the solution of future energy crisis?

Why does Mr Kalam put so much importance on the issue of energy?

Why does Mr Kalam put much importance on solar energy?

Make sentences using the substitution table.

| The energy industries |   |   | the use of renewable energy |
| --- | --- | --- | --- |
|   |   | taken | sources. |
| The global petroleum consumption | have has | been <br> emphasised | a major factor for change throughout history. |
| Major industrial economies |   | increased | to three billion barrels per year. |
|   |   |   | initiatives to tap alternative |
| Scientists |   |   | energy sources. |

Complete the following passage with words from the box. There are more words than necessary.

| suggested | radiates | would | effective | conducted either | energy |
| --- | --- | --- | --- | --- | --- |
| affected | cns1s | use | were |   |   |

To answer the energy.......... in the world, scientist, professor, and former Indian president Mr. APJ Abdul Kalam has ........... that solar energy can be harnessed by establishing space stations in outer space in order to.......... solar power round

the clock.

Mr. Kalam said that the sun .......... about 10 trillion times the energy which humans consume across the world today.

If we .......... able to extract even a small portion of this energy from the sun, it .......... be sufficient to secure the energy demands of our future.

Pointing out that space based solar power plants do not get by weather, the scientist said that it would thus be far more m

efficiency and power generation than the surface based systems.

Professor Kalam suggested that the energy should be transmitted from space back to earth .......... through microwave or any other technology like laser. Careful research of the impact and safety concerns would have to be in this regard.

'Massive burning of world's coal reserves may lead to a worldwide ecological disaster ...'--- Do you support this view? Explain why/why not.

In Sohan's village, some people headed by Mr Asadul Islam came from an organisation to hold a meeting at the local Union Parishad (UP) Office. Their objective was to introduce alternative power supply systems in rural households. Read the dialogue between the UP Chairman and Mr. Islam.

Chairman Mr.Islam

What's your alternative power supply system?

Well, it's solar power and we are going to use solar power units in rural areas.

Chairman What is it? Is it something new?

Mr. Islam Not exactly. It's already familiar in many parts of the world. We've introduced it in our country too. But yes, in this locality it's something new.

Chairman Mr.Islam

Chairman

I see. Why do you call it 'alternative power supply system'?

Because solar power is a substitute for conventional electricity. It's actually a renewable energy source. Our solar units can be installed on open roof tops or at any open place where sunlight is available.

Sounds good. How much electricity can they give? Can they run my irrigation pump?

Mr.Islam

Chairman

Mr.Islam Chairman

I'm afraid Mr. Chairman, they can't. Our solar panels are small and are designed for domestic purposes only. They can produce enough electricity to run say, two or three tube lights, two fans, a TV set and the like. But larger units can run...

Sorry to interrupt Mr. Asad. I've to go to the bus stand now to receive a friend. Anyway, several villages in our Union are still without electricity. I hope people will welcome your 'alternative power supply system'.

Thank you, Mr. Chairman. Goodbye. Goodbye, Mr. Islam. See you again.

True or False? If false, write the correct answer.

Alternative power supply system 1s a completely new system m our country.

A renewable energy source can be a substitute for conventional electricity.

Solar power units of Mr.Islam are for commercial use only.

What questions would you like to ask Mr. Islam about solar panel, solar unit, energy sources, 'alternative power supply system', its capacity, its advantages and disadvantages, etc? Make a list of your probable questions.

Role play. Work in pairs. You take the role of the Chairman and your partner the role of Mr. Islam. Rewrite the dialogue and act If out.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What are renewable energy sources and why are they vital?**
> 💡 **Answer:** Renewable energy sources are clean, naturally replenishing power sources like solar, wind, hydro, and biomass that produce little or no greenhouse gas emissions.

> ❓ **Q: Why must the world transition away from conventional fossil fuels?**
> 💡 **Answer:** Fossil fuels (coal, oil, and gas) are finite, rapidly depleting, cause dangerous air pollution, and are the primary driver of catastrophic global climate change.
$tag_u14_l01$, 1);

    -- Lesson 2: Lesson 2: Renewable Energy Sources (Part 2)
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u14_l02$
# ১৪শ অধ্যায়: নবায়নযোগ্য শক্তি (Unit 14: Renewable Energy)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

## 📖 Lesson 2: Renewable Energy Sources (Part 2)

Look at the following pictures and discuss with your partner what you see in them. How are the two pictures related to each other?

> 📝 **Activity:** Read the text and answer the questions that follow.

Countries of the world rely heavily on petroleum, coal and natural gas for their energy sources. There are two major types of energy sources: renewable and non-renewable. Hydro-carbon or fossil fuels are non-renewable sources of energy. Reliance on them poses real big problems. First, fossil fuels such as oil, coal, gas etc, are finite energy resources and the world eventually will run out of them. Secondly, they will become too expensive in the coming decades and too damaging for the environment. Thirdly, fossil fuels have direct polluting impacts on earth's environment causing global warming. In contrast, renewable energy sources such as, wind and solar energy are constantly and naturally replenished and never run out.

Most renewable energy comes either directly or indirectly from the sun. Sunlight or solar energy can be used for heating and lighting homes, for generating electricity and for other commercial and industrial uses.

The sun's heat drives the wind and this wind energy can be captured with wind turbines to produce electricity. Then the wind and the sun's heat cause water to evaporate. When the water vapour turns into rain or snow and flows downhill into rivers or streams, its energy can be captured as hydroelectric energy.

Along with the rain and snow, sunlight causes plants to grow. Plants produce

\c, biomass which again can be turned into fuels such as firewood, alcohol, etc.

f"-) that are called bioenergy.

Scientists have identified Hydrogen as another form of renewable energy source. It is the most abundant element in nature. But it does not exist separately as a gas. It is always combined with other elements, such as with oxygen to make water. Hydrogen, separated from another element, can be burned as a fuel to produce electricity.

Our Earth's interior contains molten lava which gives off extreme heat. This heat inside the Earth produces steam and hot water which can be used as geothermal energy to produce electricity for heating homes, etc.

Ocean energy comes from several sources. Ocean's force of tide and wave can be used to produce energy. The surface of the ocean gets more heat from the sun than the ocean depths. This temperature difference can be used as energy source too.

Questions

What do you mean by renewable energy sources?

What are the problems with non-renewable energy sources?

What are the major differences between renewable and non-renewable energy sources?

c. Which of the renewable energy sources mentioned in the text have you heard of before? One of those resources is used in the Chittagong Hill Tracts (CHT) to produce electricity. Can you say what it is? Browse the net in groups to find out the answers to the following issues and present them to the class.

What is the name of the project?

Where in the CHT is the project located?

When did it start operation?

How much electricity is being produced from here for the national grid?

How many units are working there?

What is the positive impact of the project on our national development?

> 📝 **Activity:** Read the dialogue between Raju, a student of class ten and his uncle, Mr. Barua who works at Sangu Gas Field and answer the questions that follow.

Mr.Barna Raju Mr.Barna Raju

Mr.Barna

Raju Mr.Barna

Raju

Questions

What are you reading, Raju?

English, Uncle. A chapter on renewable energy sources.

I see. Do you know renewable energy is also called green energy? Green energy?... No Uncle, I don't know. Nothing is there about green energy in the text either.

Are you sure? Anyway, renewable energy sources provide us with energy which doesn't harm environment during its production or consumption. Say, solar energy. You see, there's no burning, no smoke, no emission of gases. It's a sort of clean technology and clean energy source.

Oh exactly. That's what our teacher said, I remember.

On the other hand, burning fossil fuels, say oil or coal, emits greenhouse gases that harm the environment.

0 ... I see. Yes, I've got the clue, Uncle. Thanks a lot. I now understand the relation between the two pictures in section A. Green energy sources make a green globe.

Why is renewable energy called green energy?

'Nothing is there about green energy in the text either'. --- Do you think this statement of Raju is correct? Explain why yes/no.

'I now understand the relation between the two pictures in section A'. What does Raju mean here? What does he really understand? Do you agree with Raju's view here? Why?

> 📝 **Activity:** Read the dialogue and act it out in pairs.

: What's solar energy?

: It's one of the renewable energy sources.

: Why is it called green energy?

: Well, it's green energy because it helps us keep the Earth green. I mean it doesn't emit any pollutants in the atmosphere when we produce and use it.

: I see. Then it must be a clean source of energy.

: Exactly. And that's why it's also called clean energy.

Now complete the following dialogue taking cues from the above model.

: What's wind energy?

: It's one of the .................................

: Why's it called ?

: Well, it's green energy because the

Earth green. I mean it doesn't ......................................

. when we produce

and use it.

: I see. Then it source of energy.

: Exactly. And that's why clean energy.

Now write dialogues on hydroelectricity, ocean energy, geothermal energy, hydrogen energy, using the model in E above.

Both South and North Dhaka City Corporation are installing solar panels in place of conventional electricity connections to illuminate roads in many areas. Write a letter to the editor of a daily newspaper appreciating this initiative and saying why this should be followed by other city authorities too.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What are the major prospects for solar energy in Bangladesh?**
> 💡 **Answer:** Bangladesh receives abundant tropical sunshine throughout the year, making rooftop solar systems and solar irrigation pumps exceptionally viable and cost-effective.

> ❓ **Q: How has the Solar Home System (SHS) program impacted rural Bangladesh?**
> 💡 **Answer:** It brought clean electricity to millions of off-grid rural households, enabling children to study at night, powering mobile phones, and boosting rural businesses.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Predictive Future & Passive):**
  - *"In the coming decades, renewable power **will be adopted** across Bangladesh."*
- **Writing Activity (Argumentative Paragraph):**
  - Write a paragraph presenting why solar and wind energy are superior alternatives to polluting coal-fired power plants.
$tag_u14_l02$, 2);

END $$;
