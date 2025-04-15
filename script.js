// DOM elements
const button = document.getElementById('generate-btn');
const colorBoxes = Array.from({ length: 5 }, (_, i) => document.getElementById(`${['first', 'second', 'third', 'fourth', 'fifth'][i]}-color-box`));
const colorCodes = colorBoxes.map(box => box.querySelector('.color-code p'));

// Color generation helper functions
function hslToHex(h, s, l) {
    l /= 100;
    s /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) [r, g, b] = [c, x, 0];
    else if (60 <= h && h < 120) [r, g, b] = [x, c, 0];
    else if (120 <= h && h < 180) [r, g, b] = [0, c, x];
    else if (180 <= h && h < 240) [r, g, b] = [0, x, c];
    else if (240 <= h && h < 300) [r, g, b] = [x, 0, c];
    else if (300 <= h && h <= 360) [r, g, b] = [c, 0, x];

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function generateSoftColors() {
    // Generate colors across full spectrum but keep them soft
    const baseHues = [
        Math.random() * 360,  // Any hue
        (Math.random() * 360 + 72) % 360,  // Offset by ~72 degrees
        (Math.random() * 360 + 144) % 360, // Offset by ~144 degrees
        (Math.random() * 360 + 216) % 360, // Offset by ~216 degrees
        (Math.random() * 360 + 288) % 360  // Offset by ~288 degrees
    ];

    return baseHues.map(hue => {
        // Keep saturation moderate for softer colors
        const saturation = 45 + Math.random() * 25;
        // Keep lightness relatively high for softness
        const lightness = 15 + Math.random() * 20;
        return hslToHex(hue, saturation, lightness);
    });
}

// Event listener for color generation
button.addEventListener('click', () => {
    const colors = generateSoftColors();

    // Update UI with new colors
    colors.forEach((color, index) => {
        colorBoxes[index].style.backgroundColor = color;
        colorCodes[index].textContent = color;
    });
});
