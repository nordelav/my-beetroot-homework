let username = prompt('Як тебе звати ?', 'Валентин');
alert(`Привіт, ${username}`);

const YEAR = 2024;
let ageOfBirth = prompt('У якому році ти народився?', '1997');
alert(`${username}, твій вік - ${YEAR - ageOfBirth}`);

let sideLenght = prompt('Вкажіть довжину сторони квадрату в см');
alert(`Периметр квадрату дорівнює ${sideLenght*4} см`);

let circleRadius = prompt('Введіть радіус кола у см');
let circleSquare = Math.round(Math.PI*(circleRadius**2));
alert(`Площа кола дорівнює ${circleSquare} см`);

let distance = prompt('Ввведіть відстань у кілометрах');
let hour = prompt('Введіть час у годинах, за який ви хочете доїхати');
alert(`Вам потрібно рухатись із швидкістю ${Math.round(distance/hour)} км/год`);


let quantity =prompt('Введіть кількість долларів','1');
const EUROCURRENTCY =0.92;
alert(`Дана сумма відповідає ${(quantity*EUROCURRENTCY).toFixed(2)} євро`);