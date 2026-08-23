import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folder = 'C:/Users/ASUS/Desktop/123456';
const files = fs.readdirSync(folder);
const outDir = path.join(__dirname, '../public/assets/extracted');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function extractJpegsFromBuffer(buffer, prefix) {
  let count = 0;
  let offset = 0;
  while (offset < buffer.length - 3) {
    // Look for JPEG SOI: 0xFF, 0xD8, 0xFF
    if (buffer[offset] === 0xFF && buffer[offset + 1] === 0xD8 && buffer[offset + 2] === 0xFF) {
      const start = offset;
      offset += 3;
      // Search for JPEG EOI: 0xFF, 0xD9
      let end = -1;
      while (offset < buffer.length - 1) {
        if (buffer[offset] === 0xFF && buffer[offset + 1] === 0xD9) {
          end = offset + 2;
          break;
        }
        offset++;
      }
      if (end !== -1 && (end - start) > 5000) { // filter tiny thumbnails/artifacts > 5KB
        const imgData = buffer.subarray(start, end);
        const fileName = `${prefix}_img_${count}.jpg`;
        const filePath = path.join(outDir, fileName);
        fs.writeFileSync(filePath, imgData);
        console.log(`Saved JPEG: ${fileName} (${imgData.length} bytes)`);
        count++;
      }
    } else {
      offset++;
    }
  }
}

for (const file of files) {
  if (file.endsWith('.pdf')) {
    const safeName = file.replace(/[^a-zA-Z0-9]/g, '_');
    const buffer = fs.readFileSync(path.join(folder, file));
    console.log(`Extracting images from ${file}...`);
    extractJpegsFromBuffer(buffer, safeName);
  }
}
