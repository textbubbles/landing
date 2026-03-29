const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Dimensions for OG image
const WIDTH = 1200;
const HEIGHT = 630;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

// Background - dark like the site
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Subtle blue radial glow
const glow = ctx.createRadialGradient(WIDTH/2, HEIGHT/2 - 30, 0, WIDTH/2, HEIGHT/2 - 30, 350);
glow.addColorStop(0, 'rgba(0, 122, 255, 0.12)');
glow.addColorStop(1, 'rgba(0, 122, 255, 0)');
ctx.fillStyle = glow;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Logo - blue rounded square with chat bubble
const logoSize = 80;
const logoX = (WIDTH - logoSize) / 2;
const logoY = 130;
const logoRadius = 18;

// Draw rounded rectangle for logo background
ctx.beginPath();
ctx.moveTo(logoX + logoRadius, logoY);
ctx.lineTo(logoX + logoSize - logoRadius, logoY);
ctx.quadraticCurveTo(logoX + logoSize, logoY, logoX + logoSize, logoY + logoRadius);
ctx.lineTo(logoX + logoSize, logoY + logoSize - logoRadius);
ctx.quadraticCurveTo(logoX + logoSize, logoY + logoSize, logoX + logoSize - logoRadius, logoY + logoSize);
ctx.lineTo(logoX + logoRadius, logoY + logoSize);
ctx.quadraticCurveTo(logoX, logoY + logoSize, logoX, logoY + logoSize - logoRadius);
ctx.lineTo(logoX, logoY + logoRadius);
ctx.quadraticCurveTo(logoX, logoY, logoX + logoRadius, logoY);
ctx.closePath();
ctx.fillStyle = '#007AFF';
ctx.fill();

// Chat bubble icon - scaled and centered in logo
const iconScale = 2.0;
const iconOffsetX = logoX + (logoSize - 18 * iconScale) / 2 - 2;
const iconOffsetY = logoY + (logoSize - 18 * iconScale) / 2 - 3;

ctx.save();
ctx.translate(iconOffsetX, iconOffsetY);
ctx.scale(iconScale, iconScale);

ctx.strokeStyle = 'white';
ctx.lineWidth = 2.5;
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
ctx.bezierCurveTo(19, 3, 21, 3, 21, 5);
ctx.lineTo(21, 15);
ctx.stroke();

ctx.restore();

// TextBubbles text - centered
ctx.font = 'bold 60px -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, sans-serif';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('TextBubbles', WIDTH / 2, 280);

// Tagline - centered
ctx.font = '28px -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, sans-serif';
ctx.fillStyle = '#888888';
ctx.fillText('iMessage API for Developers', WIDTH / 2, 340);

// Feature pills - centered
ctx.font = '18px -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, sans-serif';
ctx.fillStyle = '#007AFF';
ctx.fillText('💬 Blue Bubbles   •   📱 SMS Fallback   •   ❤️ Reactions   •   🎉 Effects', WIDTH / 2, 420);

// URL at bottom - centered
ctx.font = '20px -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, sans-serif';
ctx.fillStyle = '#555555';
ctx.fillText('textbubbles.com', WIDTH / 2, 550);

// Save to file
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '../public/og-image.png');
fs.writeFileSync(outputPath, buffer);

console.log('OG image generated:', outputPath);
console.log('Size:', buffer.length, 'bytes');
