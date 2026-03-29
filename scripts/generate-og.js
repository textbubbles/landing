const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const WIDTH = 1200;
const HEIGHT = 630;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

// === Background ===
ctx.fillStyle = '#0a0a0a';
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Subtle gradient glow
const glow = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 0, WIDTH / 2, HEIGHT / 2, 450);
glow.addColorStop(0, 'rgba(0, 122, 255, 0.08)');
glow.addColorStop(0.5, 'rgba(0, 122, 255, 0.02)');
glow.addColorStop(1, 'rgba(0, 122, 255, 0)');
ctx.fillStyle = glow;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Top accent line
const borderGrad = ctx.createLinearGradient(0, 0, WIDTH, 0);
borderGrad.addColorStop(0, 'rgba(0, 122, 255, 0)');
borderGrad.addColorStop(0.3, 'rgba(0, 122, 255, 0.3)');
borderGrad.addColorStop(0.5, 'rgba(0, 122, 255, 0.5)');
borderGrad.addColorStop(0.7, 'rgba(0, 122, 255, 0.3)');
borderGrad.addColorStop(1, 'rgba(0, 122, 255, 0)');
ctx.fillStyle = borderGrad;
ctx.fillRect(0, 0, WIDTH, 2);

// === Stacked layout: Logo on top, Title below, Tagline below that ===
// This gives each element room to breathe and be large

// --- Logo: Blue rounded square with chat bubble ---
const logoSize = 100;
const logoRadius = 22;
const logoCenterX = WIDTH / 2;
const logoTopY = 130;
const logoX = logoCenterX - logoSize / 2;
const logoY = logoTopY;

// Rounded rectangle
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

// Chat bubble - filled white
const iconViewBox = 24;
const iconPadding = 24;
const iconDrawSize = logoSize - iconPadding;
const iconScaleFactor = iconDrawSize / iconViewBox;
const iconXStart = logoX + iconPadding / 2;
const iconYStart = logoY + iconPadding / 2 - 2;

ctx.save();
ctx.translate(iconXStart, iconYStart);
ctx.scale(iconScaleFactor, iconScaleFactor);

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(5, 3);
ctx.lineTo(19, 3);
ctx.bezierCurveTo(20.1046, 3, 21, 3.8954, 21, 5);
ctx.lineTo(21, 15);
ctx.bezierCurveTo(21, 16.1046, 20.1046, 17, 19, 17);
ctx.lineTo(7, 17);
ctx.lineTo(3, 21);
ctx.lineTo(3, 5);
ctx.bezierCurveTo(3, 3.8954, 3.8954, 3, 5, 3);
ctx.closePath();
ctx.fill();
ctx.restore();

// --- Title: Large, bold, white ---
ctx.font = 'bold 80px Helvetica, Arial, sans-serif';
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('TextBubbles', WIDTH / 2, 320);

// --- Tagline ---
ctx.font = '32px Helvetica, Arial, sans-serif';
ctx.fillStyle = '#8e8e93';
ctx.textAlign = 'center';
ctx.fillText('iMessage API for Developers', WIDTH / 2, 395);

// --- CTA Button ---
const ctaText = 'Get Started →';
ctx.font = 'bold 26px Helvetica, Arial, sans-serif';
const ctaMetrics = ctx.measureText(ctaText);
const ctaPadH = 36;
const ctaPadV = 16;
const ctaW = ctaMetrics.width + ctaPadH * 2;
const ctaH = 54;
const ctaX = (WIDTH - ctaW) / 2;
const ctaY = 440;
const ctaR = ctaH / 2;

// Draw pill-shaped button
ctx.beginPath();
ctx.moveTo(ctaX + ctaR, ctaY);
ctx.lineTo(ctaX + ctaW - ctaR, ctaY);
ctx.quadraticCurveTo(ctaX + ctaW, ctaY, ctaX + ctaW, ctaY + ctaR);
ctx.quadraticCurveTo(ctaX + ctaW, ctaY + ctaH, ctaX + ctaW - ctaR, ctaY + ctaH);
ctx.lineTo(ctaX + ctaR, ctaY + ctaH);
ctx.quadraticCurveTo(ctaX, ctaY + ctaH, ctaX, ctaY + ctaR);
ctx.quadraticCurveTo(ctaX, ctaY, ctaX + ctaR, ctaY);
ctx.closePath();
ctx.fillStyle = '#007AFF';
ctx.fill();

// CTA text
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = 'bold 26px Helvetica, Arial, sans-serif';
ctx.fillText(ctaText, WIDTH / 2, ctaY + ctaH / 2);

// --- Domain ---
ctx.font = '18px Helvetica, Arial, sans-serif';
ctx.fillStyle = '#3a3a3a';
ctx.textAlign = 'center';
ctx.fillText('textbubbles.com', WIDTH / 2, HEIGHT - 42);

// === Save ===
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '../public/og-image.png');
fs.writeFileSync(outputPath, buffer);

console.log('OG image generated:', outputPath);
console.log('Size:', buffer.length, 'bytes');
