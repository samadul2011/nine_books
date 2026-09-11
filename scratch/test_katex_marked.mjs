import { marked } from 'marked';
import katex from 'katex';

const raw = 'অনুশীলনী ৪.১ • প্রশ্ন ১: সরল করো: $\\frac{7^3 \\times 7^{-3}}{3 \\times 3^{-4}}$';
const withMath = raw.replace(/\$([^\$]+)\$/g, (_, eq) => {
  return katex.renderToString(eq, { throwOnError: false });
});

const html = marked.parse(withMath);
console.log('Includes katex-html:', html.includes('katex-html'));
console.log('Includes frac-line:', html.includes('frac-line'));
console.log('Final HTML length:', html.length);
