import fs from 'fs';

const img1 = fs.readFileSync('public/previews/optimax-dashboard-preview.png');
const img2 = fs.readFileSync('public/previews/hero-system-preview.png');

console.log('Optimax Image 1:', img1.readUInt32BE(16), 'x', img1.readUInt32BE(20));
console.log('Hero Image 2:', img2.readUInt32BE(16), 'x', img2.readUInt32BE(20));
