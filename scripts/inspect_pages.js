import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function inspectPDF(filename) {
  const filePath = path.join('C:/Users/ASUS/Desktop/123456', filename);
  const dataBuffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: dataBuffer });
  await parser.load();
  console.log(`=== ${filename} ===`);
  const numPages = parser.doc ? parser.doc.numPages : 1;
  console.log(`Pages: ${numPages}`);
  for (let i = 1; i <= numPages; i++) {
    const pageText = await parser.getPageText(i);
    console.log(`--- Page ${i} text ---`);
    console.log(pageText.text || JSON.stringify(pageText));
  }
}

async function run() {
  await inspectPDF('Avighna Flyer a4 (4 flyers).pdf');
}

run();
