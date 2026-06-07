import fs from 'fs';
import path from 'path';
import wawoff2 from 'wawoff2';

const ttfPath = path.join('public', 'fonts', 'Bounded-Variable.ttf');
const woff2Path = path.join('public', 'fonts', 'Bounded-Variable.woff2');

console.log('Reading TTF font from:', ttfPath);
const input = fs.readFileSync(ttfPath);
console.log('TTF Size:', input.length, 'bytes');

console.log('Compressing to WOFF2...');
wawoff2.compress(input)
  .then((out) => {
    fs.writeFileSync(woff2Path, out);
    console.log('Saved WOFF2 font to:', woff2Path);
    console.log('WOFF2 Size:', out.length, 'bytes');
    console.log('Compression Ratio:', ((out.length / input.length) * 100).toFixed(2) + '%');
  })
  .catch((err) => {
    console.error('Error during compression:', err);
  });
