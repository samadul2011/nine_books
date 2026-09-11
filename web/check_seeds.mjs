import fs from 'fs';

const files = [
  '../seed_bangla_goddho_01_12.sql',
  '../seed_bangla_goddho_13_25.sql',
  '../seed_bangla_kobita_26_40.sql',
  '../seed_bangla_kobita_41_53.sql'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const chapters = content.match(/Chapter \d+:[^\n]+/g) || [];
    const hasPathPorichiti = (content.match(/পাঠ[ -]পরিচিতি/g) || []).length;
    const hasSrijonshil = (content.match(/সৃজনশীল প্রশ্ন/g) || []).length;
    const hasSarongsho = (content.match(/সারাংশ|সারসংক্ষেপ/g) || []).length;
    console.log(`${file}: Chapters=${chapters.length}, পাঠ-পরিচিতি=${hasPathPorichiti}, সৃজনশীল প্রশ্ন=${hasSrijonshil}, সারাংশ/সারসংক্ষেপ=${hasSarongsho}`);
  }
}
