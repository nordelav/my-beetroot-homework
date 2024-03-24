import car from './js/carObject.js';
import dashCalc, { dashFirst, dashSecound,showDash } from './js/dashObject.js';
import time from './js/timeObject.js';

// *Мінімум
/*
Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
1-Метод, який виводить на екран інформацію про автомобіль.
2-Додавання ім’я водія у список
3-Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
*/

car.showInfo();

car.AddDrivers('Artur');

console.log(car.checkDrivers('Artur'));

car.calcTravel(5000);


// *Норма
/* Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
1 - Зміни часу на передану кількість секунд.
2 - Зміни часу на передану кількість хвилин.
3 - Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». 
Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
*/

time.showTime();

time.addSecounds(150);

time.showTime();

time.addMinutes(100);

time.showTime();

time.addHours(25);

time.showTime();


// * Максимум

/*Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
1 - Складання 2-х об'єктів-дробів.
2 - Віднімання 2-х об'єктів-дробів.
3 - Множення 2-х об'єктів-дробів.
4 - Ділення 2-х об'єктів-дробів.
5 - Скорочення об'єкта-дробу.
*/

// * Виведення двох об'єктів , як звичайних дробів. Їх дані будуть аргументами для методів нижче.
showDash(dashFirst.numerator,dashFirst.banner);

showDash(dashSecound.numerator,dashSecound.banner);


dashCalc.dashAddition(
  dashFirst.numerator,
  dashFirst.banner,
  dashSecound.numerator,
  dashSecound.banner
);

dashCalc.dashSubstraction(
  dashFirst.numerator,
  dashFirst.banner,
  dashSecound.numerator,
  dashSecound.banner
);

dashCalc.dashMultiply(
  dashFirst.numerator,
  dashFirst.banner,
  dashSecound.numerator,
  dashSecound.banner
);

// ! Я не робив окремий метод на ділення, так як вважаю, що скорочення це і є ділення.
dashCalc.dashSimplify();
