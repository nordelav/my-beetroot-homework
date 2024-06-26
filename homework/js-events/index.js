import addtext from './js/addText.js';

import { data, tableFill } from './js/tableFill.js';

import { stringSort } from './js/stringSort.js';

import numberSort from './js/numberSort.js';

import blockMover from './js/blockMover.js';

/*Створити HTML-сторінку для відображення/редагування тексту.
При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом.
Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.*/

addtext();

/* Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.
Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.*/


tableFill(data);

stringSort();

numberSort();

/*Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.*/ 

blockMover();
