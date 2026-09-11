-- ============================================================
-- Unit 16: Graffiti (১৬শ অধ্যায়: গ্রাফিতি (Unit 16: Graffiti))
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

    -- Find Chapter (Unit 16)
    SELECT id INTO v_chapter_id FROM chapters WHERE subject_id = v_subject_id AND order_index = 16 LIMIT 1;
    IF v_chapter_id IS NULL THEN
        RAISE EXCEPTION 'Chapter for Unit 16 not found. Please run seed_english.sql first.';
    END IF;

    -- Clean previous lessons for this chapter
    DELETE FROM lessons WHERE chapter_id = v_chapter_id;

    -- Insert Lessons
    -- Lesson 1: Lesson 1: Graffiti -- The Voice of the Streets
    INSERT INTO lessons (chapter_id, content_text, order_index)
    VALUES (v_chapter_id, $tag_u16_l01$
# ১৬শ অধ্যায়: গ্রাফিতি (Unit 16: Graffiti)

**English For Today • Class 9 (NCTB 2026 Curriculum)**

---

"Why did you kill my son?"-graffiti on a Dhaka metro rail pillar near Mirpur I O circle.

Learning outcomes

After we have studied this unit, we will be able to describe the function of graffiti during people's movements m Bangladesh

recognize graffiti as a form of art

redefine our responsibilities as citizens

> 📝 **Activity:** Read the text and complete the activities that follow.

"Art should comfort the disturbed and disturb the comfortable," writes the pseudonymous street artist Banksy-a sentiment that encapsulates the spirit of graffiti's defiance.

On 16 July 2024, Abu Sayeed, an unarmed organizer of the students' movement for quota reform at Begum Rokeya University in Rangpur, was shot and killed by police as he stood with his arms stretched out, leaving his mother, Monowara Begum, shell-shocked and crying, "My son only wanted a job; if you don't want to give him a job, then don't-but why did you kill him?"

Since the 1960s, graffiti in Bangladesh has served as a powerful voice for resistance. In 1966, student activists spray-painted slogans like "Down with Ayub Khan" on walls, using graffiti as a covert means of protest against a repressive regime. When military forces approached, they shouted "chika! chika!"-a word meaning mole or muskrat- pretending they were killing rodents to disguise their actions. This guerrilla tactic marked the beginning of graffiti as a tool of dissent in Bangladesh, and it played a crucial role in the Liberation War in 1971.

Noor Hossain, with the words "Down with Autocracy" ("C:16" -r1" <li<f"; however, the Bangla spelling for -r1" is f;r - the misspelling underscoring raw spontaneity of such expressions) boldly painted in bright white on his bare chest, was photographed by Dinu Alam on 10 November, 1987, during a pro-democracy protest in Dhaka. Shortly after, he was shot and killed by

Bangladesh Police.

Wall art featuring Noor Hossain's iconic photograph, displayed on a Dhaka wall.

In recent times, graffiti has resurfaced as a powerful expression of dissent, particularly during the July uprising. Spray-painted messages-like "The country is nobody's father's"-invoked the legacy of past movements, echoing the iconic "Gonotontro Mukti Paak" (Let Democracy Be Free), famously written on the body of protester Noor Hossain during the Ershad regime. Each stroke of paint carried forward a history of defiance that has shaped Bangladesh's political landscape, drawing connections between past and present struggles for justice.

Wall art depicting iconic moments of the July uprising

Graffiti 's potency lies in its subversive, guerrilla nature. Unlike wall art, which is typically organized and sanctioned, graffiti thrives on immediacy, spontaneity, and the risk of persecution. Where wall art may take time and care, graffiti is often quick, requiring speed and anonymity due to the threat of detection. Its purpose is to challenge power, counter surveillance, and inscribe messages that are otherwise censored or suppressed.

The July uprising brought new dimensions to this medium of dissent. Spray-painted slogans defied erasure, embodying collective rage and revolutionary solidarity. Demands like "Ek dofa, ek dabi, shoirachar tui kobe jabi?" surfaced as cries for justice, echoing the French philosopher Jacques Derrida's assertion that "What cannot be said... must not be silenced but written."

A strong sense of inclusivity was also reflected in the wall art and graffiti during and after the July uprising, which highlighted the case of the marginalized and minoritized people in multiple instances. Numerous graffiti and wall art pieces not only called for justice but also carried a broader message of liberation, "Not a land of one nation, Bangladesh is a land of many communities" symbolizing the interconnected struggles of all communities. It underscored the message i.e. our collective liberation is intertwined, with the fight for justice uniting people across

regions and backgrounds. Wall art stating: "Not a land of one nation, Bangladesh is a land of many communities. "

The true power of graffiti lies in its resilience; it persists as a medium for revolutionary memory and collective consciousness. It speaks for those

'Cl silenced, ensures the struggles of the marginalized endure, and, as Banksy's words suggest, comforts the disturbed while disturbing the comfortable.

### ❓ Answer the following questions based on your reading of the passage:

How does graffiti serve as a powerful tool of resistance and dissent, especially in political movements? Compare its role in Bangladesh from the 1960s to the July uprising of 2024.

How does graffiti reflect the interconnected struggles for justice across different communities and regions? How do slogans like "From the plains to the hills, this time liberation is for all" illustrate this message?

In what ways do graffiti and wall art differ in terms of their purpose, creation, and the risks involved? What makes graffiti a more subversive, guerrilla form of expression?

What role do immediacy and anonymity play in the creation of graffiti, especially in politically charged contexts? Why are these characteristics essential to its effectiveness?

How can graffiti contribute to collective memory and preserve the struggles of marginalized communities, as seen in the recent protests? What makes it an enduring form of expression, even in the face of censorship?

Writing Exercise:

Graffiti has been considered a significant form of expression in political movements, especially in times of oppression. Write a short essay discussing the role of graffiti in resisting censorship and challenging power, particularly in the context of Bangladesh's history. Analyze how graffiti, as a form of spontaneous and guerrilla expression, differs from other more organized artistic expressions like wall art. Use examples from the passage, including the slogans during the July uprising, to support your argument.

**Group Work:** Graffiti or Wall Art Project

In your group, design a graffiti or wall art piece that expresses your message of resistance, solidarity, or demand for change. Focus on the symbolism, color choices, and text that will best represent your cause. Afterward, explain your design choices and how they reflect the message you want to convey to the public.

---

### ❓ Questions & Answers (পাঠভিত্তিক প্রশ্ন ও উত্তর)

> ❓ **Q: What is graffiti and how has its cultural perception evolved?**
> 💡 **Answer:** Graffiti refers to writing or drawings painted on public walls; once dismissed as vandalism, it is now widely recognized as a powerful form of public art and sociopolitical expression.

> ❓ **Q: How have graffiti and street murals played a role in Bangladesh's history?**
> 💡 **Answer:** From the 1952 Language Movement and 1971 Liberation War to modern student movements, street murals and calligraphic graffiti have voiced citizens' aspiration for justice and freedom.

---

### 📚 Grammar & Writing Corner (ব্যাকরণ ও লিখিত দক্ষতা)

- **Grammar Focus (Expressing Opinions & Stance):**
  - Phrases: *From my perspective*, *Evidence suggests that*, *It is widely held that*.
- **Writing Activity (Analytical Paragraph):**
  - Write a paragraph analyzing how street graffiti and murals played an inspiring role in Bangladesh's democratic movements.
$tag_u16_l01$, 1);

END $$;
