const formula1 = "$$ARR = \\frac{\\text{গড় নিট মুনাফা}}{\\text{গড় বিনিয়োগ}} \\times ১০০\\%$$";
const formula2 = "$$PBP = \\frac{\\text{প্রাথমিক বিনিয়োগ}}{\\text{বার্ষিক নগদ আন্তঃপ্রবাহ}}$$";

function formatMathFormulas(text) {
  // Remove \text{...}
  let res = text.replace(/\\text\{([^}]+)\}/g, '$1');
  
  // Replace \times with ×
  res = res.replace(/\\times/g, '×');
  
  // Replace \frac{A}{B} with an elegant HTML fraction
  res = res.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, 
    '<span class="inline-flex flex-col text-center align-middle mx-2 text-base font-semibold leading-tight">' +
      '<span class="border-b border-cyan-400 pb-0.5 px-2 text-cyan-200">$1</span>' +
      '<span class="pt-0.5 px-2 text-cyan-300">$2</span>' +
    '</span>'
  );
  
  // Replace $$...$$ with formula card
  res = res.replace(/\$\$([\s\S]+?)\$\$/g, (match, inner) => {
    return `\n<div class="my-4 p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 text-cyan-100 text-center text-lg sm:text-xl font-bold shadow-md overflow-x-auto flex items-center justify-center gap-2">\n  <span>📐 সূত্র:</span> <div>${inner.trim()}</div>\n</div>\n`;
  });
  
  // Replace $...$ inline
  res = res.replace(/\$([^$\n]+)\$/g, '<span class="px-2 py-0.5 rounded-lg bg-slate-800 text-cyan-300 font-semibold border border-cyan-500/20 text-sm sm:text-base">$1</span>');
  
  return res;
}

console.log("Formatted 1:\n", formatMathFormulas(formula1));
console.log("Formatted 2:\n", formatMathFormulas(formula2));
