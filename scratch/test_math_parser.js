// Test Math Problem & Solution Parser
const sampleContent = `
# ১ম অধ্যায়: বাস্তব সংখ্যা (Real Numbers)

**গণিত • নবম-দশম শ্রেণি (NCTB ২০২৬ শিক্ষাক্রম)**

---

### 🎯 এ অধ্যায় শেষে আমরা যা শিখতে পারব (শিখনফল)
> বাস্তব সংখ্যার শ্রেণিবিন্যাস করতে পারব;
> মূলদ ও অমূলদ সংখ্যা চিহ্নিত করতে পারব;
> আবৃত্ত দশমিক ভগ্নাংশকে সাধারণ ভগ্নাংশে প্রকাশ করতে পারব।

### 🔹 বিষয়: বাস্তব সংখ্যার শ্রেণিবিন্যাস ও মূলদ-অমূলদ সংখ্যা
সকল মূলদ সংখ্যা এবং অমূলদ সংখ্যাকে বাস্তব সংখ্যা (Real Number) বলা হয়।

> 🔢 **গাণিতিক সমস্যা ১ (উদাহরণ):** প্রমাণ কর যে, $\\sqrt{2}$ একটি অমূলদ সংখ্যা।
> 💡 **সমাধান:** 
> ধরি, $\\sqrt{2}$ একটি মূলদ সংখ্যা।
> তাহলে এমন দুটি পরস্পর সহমৌলিক স্বাভাবিক সংখ্যা $p$ ও $q$ ($q > 1$) থাকবে যেন,
> $\\sqrt{2} = \\frac{p}{q}$
> উভয়পক্ষকে বর্গ করে পাই, $2 = \\frac{p^2}{q^2}$
> বা, $2q = \\frac{p^2}{q}$
> স্পষ্টত $2q$ একটি পূর্ণসংখ্যা কিন্তু $\\frac{p^2}{q}$ পূর্ণসংখ্যা নয় কারণ $p$ ও $q$ পরস্পর সহমৌলিক।
> অতএব, $2q$ এবং $\\frac{p^2}{q}$ সমান হতে পারে না।
> সুতরাং, $\\sqrt{2}$ মূলদ সংখ্যা নয়।
> 🎯 **উত্তর / প্রমাণিত:** $\\sqrt{2}$ একটি অমূলদ সংখ্যা।

> 🔢 **অনুশীলনী ১.১ (সমস্যা ২):** $0.\\dot{3}$ কে সাধারণ ভগ্নাংশে রূপান্তর কর।
> 💡 **সমাধান:** 
> দেওয়া আছে, আবৃত্ত দশমিক সংখ্যা $= 0.\\dot{3} = 0.3333...$
> সাধারণ ভগ্নাংশের নিয়ম অনুযায়ী:
> ভগ্নাংশের লব = (সম্পূর্ণ সংখ্যা - অনাবৃত্ত অংশ) $= 3 - 0 = 3$
> ভগ্নাংশের হর = (যতগুলো আবৃত্ত অঙ্ক ততগুলো ৯) $= 9$
> অতএব, সাধারণ ভগ্নাংশ $= \\frac{3}{9} = \\frac{1}{3}$
> 🎯 **উত্তর:** $\\frac{1}{3}$
`;

function parseBlocks(content) {
  const lines = content.split('\n');
  const blocks = [];
  let currentMarkdown = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check if line is a Math Problem
    const isMathProblem = 
      trimmed.startsWith('> 🔢') || 
      trimmed.startsWith('🔢') ||
      trimmed.startsWith('> **সমস্যা') ||
      trimmed.startsWith('**সমস্যা:') ||
      trimmed.startsWith('> **উদাহরণ') ||
      trimmed.startsWith('**উদাহরণ:');

    if (isMathProblem) {
      if (currentMarkdown.length > 0) {
        blocks.push({ type: 'markdown', text: currentMarkdown.join('\n') });
        currentMarkdown = [];
      }

      // Gather problem prompt
      let problemLines = [trimmed.replace(/^>\s*🔢?\s*/, '').replace(/^\*\*সমস্যা[:.]?\s*/, '').replace(/^\*\*উদাহরণ[:.]?\s*/, '')];
      let j = i + 1;
      let solutionLines = [];
      let foundSolution = false;

      while (j < lines.length) {
        const nextLine = lines[j];
        const nextTrim = nextLine.trim();

        if (nextTrim.startsWith('> 💡 **সমাধান') || nextTrim.startsWith('💡 **সমাধান') || nextTrim.startsWith('**সমাধান:') || nextTrim.startsWith('> **সমাধান:')) {
          foundSolution = true;
          solutionLines.push(nextTrim.replace(/^>\s*💡?\s*\*\*সমাধান[:.]?\s*/, '').replace(/^\*\*সমাধান[:.]?\s*/, ''));
          j++;
          break;
        } else if (nextTrim.startsWith('> 🔢') || nextTrim.startsWith('###') || nextTrim.startsWith('## ') || nextTrim.startsWith('# ')) {
          break;
        } else {
          problemLines.push(nextTrim.replace(/^>\s*/, ''));
          j++;
        }
      }

      if (foundSolution) {
        // Gather full solution body
        while (j < lines.length) {
          const sLine = lines[j];
          const sTrim = sLine.trim();

          if (sTrim.startsWith('> 🔢') || sTrim.startsWith('🔢') || sTrim.startsWith('###') || sTrim.startsWith('## ') || sTrim.startsWith('# ') || sTrim.startsWith('> ❓')) {
            break;
          }
          solutionLines.push(sTrim.replace(/^>\s*/, ''));
          j++;
        }

        blocks.push({
          type: 'math-problem',
          id: `math-${i}`,
          problem: problemLines.filter(Boolean).join('\n'),
          solution: solutionLines.filter(Boolean).join('\n')
        });

        i = j;
        continue;
      }
    }

    currentMarkdown.push(line);
    i++;
  }

  if (currentMarkdown.length > 0) {
    blocks.push({ type: 'markdown', text: currentMarkdown.join('\n') });
  }

  return blocks;
}

const parsed = parseBlocks(sampleContent);
console.log('Total blocks parsed:', parsed.length);
parsed.forEach((b, idx) => {
  console.log(`Block ${idx + 1}: ${b.type}`);
  if (b.type === 'math-problem') {
    console.log('  PROB:', b.problem);
    console.log('  SOL:', b.solution.substring(0, 80) + '...');
  }
});
