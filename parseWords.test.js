const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/function parseWords\(raw\)\{[\s\S]*?\n\s*\}/);
if (!match) {
  console.error('parseWords function not found');
  process.exit(1);
}
// Evaluate function source to define parseWords
// eslint-disable-next-line no-eval
eval(match[0]);

function assertEqual(name, got, expected) {
  const ok = JSON.stringify(got) === JSON.stringify(expected);
  console[ok ? 'log' : 'error'](`[test] ${name}:`, ok ? 'OK' : `FAIL\n  got: ${JSON.stringify(got)}\n  expected: ${JSON.stringify(expected)}`);
  return ok;
}

let ok = true;
ok = assertEqual('split commas', parseWords('pes, les,dom'), ['pes','les','dom']) && ok;
ok = assertEqual('split semicolons', parseWords('pes;les; dom'), ['pes','les','dom']) && ok;
ok = assertEqual('split newlines', parseWords('pes\nles\ndom'), ['pes','les','dom']) && ok;
ok = assertEqual('mixed delimiters', parseWords(' pes,les;dom\n oko '), ['pes','les','dom','oko']) && ok;
ok = assertEqual('diacritics preserved', parseWords('žába, kůň'), ['žába','kůň']) && ok;
ok = assertEqual('consecutive delimiters collapsed', parseWords('pes,,;\n;les'), ['pes','les']) && ok;
ok = assertEqual('empty -> []', parseWords('   '), []) && ok;

process.exit(ok ? 0 : 1);
