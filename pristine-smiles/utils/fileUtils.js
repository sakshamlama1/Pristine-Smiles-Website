import fs from 'fs/promises';
import path from 'path';

export async function getPriceListPDF() {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const pdfPath = path.resolve(__dirname, '../files/Pristine Smiles - Price List.pdf');
    const fileBuffer = await fs.readFile(pdfPath);
    return { buffer: fileBuffer, filename: 'Pristine Smiles - Price List.pdf', path: pdfPath };
}
