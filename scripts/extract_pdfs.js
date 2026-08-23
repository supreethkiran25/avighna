import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folder = 'C:/Users/ASUS/Desktop/123456';
const files = fs.readdirSync(folder);

const results = {};

async function run() {
  for (const file of files) {
    if (file.endsWith('.pdf')) {
      const filePath = path.join(folder, file);
      const dataBuffer = fs.readFileSync(filePath);
      try {
        const parser = new PDFParse({ data: dataBuffer });
        await parser.load();
        const info = await parser.getInfo();
        const textData = await parser.getText();
        
        results[file] = {
          info: info,
          total_pages: textData.total_pages || (textData.pages ? textData.pages.length : 1),
          text: textData.text || (textData.pages ? textData.pages.map(p => p.text).join('\n--- PAGE BREAK ---\n') : String(textData))
        };
        console.log(`Parsed ${file}: ${results[file].total_pages} pages`);
      } catch (err) {
        console.error(`Error parsing ${file}:`, err);
        results[file] = { error: err.message, stack: err.stack };
      }
    }
  }

  const outPath = path.join(__dirname, 'extracted_pdf_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`Successfully extracted PDF data to ${outPath}`);
}

run();
