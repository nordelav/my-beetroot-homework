

import variablesQuantity from './js/variablesQuantity.js';
import numberCompare from './js/numberCompare.js';
import factorialCalc from './js/factorialCalc.js';
import numberJoin from './js/numberJoin.js';
import areaCalc from './js/areaCalc.js';
import numCheck from './js/NumCheck.js';
import perfectNumCheck from './js/perfectNumCheck.js';
import perfectNumRange from './js/perfectNumRange.js';

// *Мінімум

// 1 - Напиши всі можливі варіанти створення функцій.

// ! Declaration (оголошення)
function testAddition(a, b) {
  return a + b;
}

// ! Присвоєння (Expression)
const testDivision = function testDivision(a, b) {
  return a / b;
};

// ! Стрілочна

const multipyTest = (a, b) => {
  return a * b;
};

// 2 Створи функцію, яка буде виводити кількість переданих їй аргументів.

variablesQuantity();

/* 3 -Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/

numberCompare(7, 6);

/* 4 - Напиши функцію, яка обчислює факторіал переданого їй числа.*/

factorialCalc (5);

/* 5 - Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
Наприклад: цифри 1, 4, 9 перетворяться в число 149*/

numberJoin(5,3,5);


/* 6 - Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */

areaCalc(6);

// *Норма

/* 1 - Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/

console.log(perfectNumCheck(6));

/* 2 - Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
і виводить тільки ті числа з діапазону, які є досконалими. 
Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/ 

perfectNumRange();