// Initialising the canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
const mult = 1.1;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * mult;

// Setting up the letters
let letters = `ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890
ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890
ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890`;
letters = letters.split('');

// Setting up the columns
window.addEventListener('orientationchange', () => {
  window.location.reload();
});
const fontSize = 11;
const columns = canvas.width / fontSize;

// Setting up the drops
const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}
const n1 = 0.99;
const n2 = 40;
// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > n1) {
      drops[i] = 0;
    }
  }
}
// Loop the animation
setInterval(draw, n2);
