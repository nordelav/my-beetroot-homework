const username = prompt('Як тебе звати ?', 'Валентин');
alert(`Привіт, ${username}`);

const YEAR = 2024;
const ageOfBirth = +prompt('У якому році ти народився?', '1997');
alert(`${username}, твій вік - ${YEAR - ageOfBirth}`);

const sideLenght = +prompt('Вкажіть довжину сторони квадрату в см');
alert(`Периметр квадрату дорівнює ${sideLenght * 4} см`);

const circleRadius = +prompt('Введіть радіус кола у см');
const circleSquare = Math.round(Math.PI * circleRadius ** 2);
alert(`Площа кола дорівнює ${circleSquare} см`);

const distance = +prompt('Ввведіть відстань у кілометрах');
const hour = +prompt('Введіть час у годинах, за який ви хочете доїхати');
alert(
  `Вам потрібно рухатись із швидкістю ${Math.round(distance / hour)} км/год`
);

const quantity = +prompt('Введіть кількість долларів', '1');
const EURO_CURRENTY = 0.92;
alert(`Дана сумма відповідає ${(quantity * EUROCURRENTCY).toFixed(2)} євро`);
