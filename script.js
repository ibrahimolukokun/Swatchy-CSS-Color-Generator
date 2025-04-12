const hexadecimalNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let button = document.getElementById('generate-btn');


let firstColorCode = document.getElementById('first-color-code').querySelector('p');
let secondColorCode = document.getElementById('second-color-code').querySelector('p');
let thirdColorCode = document.getElementById('third-color-code').querySelector('p');
let fourthColorCode = document.getElementById('fourth-color-code').querySelector('p');
let fifthColorCode = document.getElementById('fifth-color-code').querySelector('p');

let firstColorBox = document.getElementById('first-color-box');
let secondColorBox = document.getElementById('second-color-box');
let thirdColorBox = document.getElementById('third-color-box');
let fourthColorBox = document.getElementById('fourth-color-box');
let fifthColorBox = document.getElementById('fifth-color-box');

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length);
    return randomNumber;
}

button.addEventListener('click', () => {
    let hexCodeForFirstColor = '#';
    let hexCodeForSecondColor = '#';
    let hexCodeForThirdColor = '#';
    let hexCodeForFourthColor = '#';
    let hexCodeForFifthColor = '#';

    for (let i = 0; i < 6; i++) {
        hexCodeForFirstColor += hexadecimalNumberSystem[getRandomNumber()];
        hexCodeForSecondColor += hexadecimalNumberSystem[getRandomNumber()];
        hexCodeForThirdColor += hexadecimalNumberSystem[getRandomNumber()];
        hexCodeForFourthColor += hexadecimalNumberSystem[getRandomNumber()];
        hexCodeForFifthColor += hexadecimalNumberSystem[getRandomNumber()];
    }
    firstColorBox.style.backgroundColor = hexCodeForFirstColor;
    firstColorCode.textContent = hexCodeForFirstColor;

    secondColorBox.style.backgroundColor = hexCodeForSecondColor;
    secondColorCode.textContent = hexCodeForSecondColor;

    thirdColorBox.style.backgroundColor = hexCodeForThirdColor;
    thirdColorCode.textContent = hexCodeForThirdColor;

    fourthColorBox.style.backgroundColor = hexCodeForFourthColor;
    fourthColorCode.textContent = hexCodeForFourthColor;

    fifthColorBox.style.backgroundColor = hexCodeForFifthColor;
    fifthColorCode.textContent = hexCodeForFifthColor;
});