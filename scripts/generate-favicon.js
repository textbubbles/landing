const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Generate multiple sizes
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

function generateIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  const padding = size * 0.08;
  const cornerRadius = size * 0.22;
  
  // Blue rounded square background
  ctx.beginPath();
  const x = padding;
  const y = padding;
  const w = size - padding * 2;
  const h = size - padding * 2;
  const r = cornerRadius;
  
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  
  ctx.fillStyle = '#007AFF';
  ctx.fill();
  
  // Chat bubble icon - scaled to fit
  const iconScale = size / 24 * 0.5;
  const iconOffsetX = size / 2 - 12 * iconScale;
  const iconOffsetY = size / 2 - 12 * iconScale - size * 0.02;
  
  ctx.save();
  ctx.translate(iconOffsetX, iconOffsetY);
  ctx.scale(iconScale, iconScale);
  
  ctx.strokeStyle = 'white';
  ctx.lineWidth = Math.max(2.5, 3 / iconScale);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Chat bubble path: M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z
  ctx.beginPath();
  ctx.moveTo(21, 15);
  ctx.bezierCurveTo(21, 16.1, 20.1, 17, 19, 17);
  ctx.lineTo(7, 17);
  ctx.lineTo(3, 21);
  ctx.lineTo(3, 5);
  ctx.bezierCurveTo(3, 3.9, 3.9, 3, 5, 3);
  ctx.lineTo(19, 3);
  ctx.bezierCurveTo(20.1, 3, 21, 3.9, 21, 5);
  ctx.lineTo(21, 15);
  ctx.stroke();
  
  ctx.restore();
  
  return canvas.toBuffer('image/png');
}

// Generate all sizes
for (const { size, name } of sizes) {
  const buffer = generateIcon(size);
  const outputPath = path.join(__dirname, '../public', name);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated ${name} (${size}x${size}): ${buffer.length} bytes`);
}

// Also create favicon.ico (copy from 32x32)
const ico32 = generateIcon(32);
fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), ico32);
console.log('Generated favicon.ico');

console.log('\nAll favicons generated!');
