// * Мінімум
/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
дорослим (18-59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/

const userAge = +prompt('Введіть ваш вік у вигляді числа');
if (userAge && userAge >= 0) {
  if (userAge <= 11) {
    alert('Ти - дитина!');
  } else if (userAge >= 12 && userAge <= 17) {
    alert('Ти  - підліток');
  } else if (userAge >= 18 && userAge <= 59) {
    alert('Ви  - дорослий');
  } else {
    alert('Ви  - пенсіонер');
  }
} else {
  alert('Дані введено невірно! Введіть число ваш вік у вигляді числа!');
}

/*Запитай у користувача число від 0 до 9 і 
виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/

const numKey = +prompt('введіть число від 0 ло 9');
switch (numKey) {
  case 0:
    alert('Ваш символ - ")"');
    break;

  case 1:
    alert('Ваш символ - "!"');
    break;

  case 2:
    alert('Ваш символ - "@"');
    break;

  case 3:
    alert('Ваш символ - "#"');
    break;

  case 4:
    alert('Ваш символ -"$"');
    break;
  case 5:
    alert('Ваш символ - "%"');
    break;
  case 6:
    alert('Ваш символ - "^"');
    break;

  case 7:
    alert('Ваш символ - "&"');
    break;

  case 8:
    alert('Ваш символ - "*"');
    break;

  case 9:
    alert('Ваш символ - "("');
    break;

  default:
    alert('Введено неправильні дані!');
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const rangeStart = +prompt('Введіть початок діапазону');
const rangeEnd = +prompt('Введіть кінець діапазону');
let rangeSum = rangeStart;
for (let i = rangeStart; i <= rangeEnd; i++) {
  rangeSum += i;
}
alert(`Сумма діапазону - ${rangeSum}`);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNum = +prompt('Введіть перше число');
const secoundNum = +prompt('Введіть перше число');
let startNum;
if (firstNum > secoundNum) {
  startNum = firstNum;
} else {
  startNum = secoundNum;
}

for (let i = startNum; i != 0; i--) {
  if (firstNum % i === 0 && secoundNum % i === 0) {
    alert(`Найбільший спільний дільник  - ${i}`);
    break;
  }
}

// Запитай у користувача число і виведи всі дільники цього числа.

const userNumber = +prompt(
  'Введіть число. Всі дільники буде виведено в консоль'
);
for (let i = userNumber; i != 0; i--) {
  if (userNumber % i === 0) {
    console.log(i);
  } else {
    continue;
  }
}

//* Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const fiveDigitNumber = prompt('Введіть п’ятирозрядне число');
if (
  fiveDigitNumber.charAt(0) ===
    fiveDigitNumber.charAt(fiveDigitNumber.length - 1) &&
  fiveDigitNumber.charAt(1) ===
    fiveDigitNumber.charAt(fiveDigitNumber.length - 2)
) {
  alert(`Число - паліндром !`);
} else {
  alert(`Число не є паліндромом.`);
}

/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.
*/

let purchaseSum = +prompt(`Введіть сумму покупки у грн`);
if (purchaseSum > 200 && purchaseSum < 300) {
  purchaseSum -= +(purchaseSum * 0.03).toFixed(2);
  alert(`Ваша знижка - 3%`);
} else if (purchaseSum >= 300 && purchaseSum < 500) {
  purchaseSum -= +(purchaseSum * 0.05).toFixed(2);
  alert(`Ваша знижка - 5%`);
} else if (purchaseSum >= 500) {
  purchaseSum -= +(purchaseSum * 0.07).toFixed(2);
  alert(`Ваша знижка - 7%`);
} else {
  alert(`Сумма замала для знижки`);
}
alert(`Сумма до сплати - ${purchaseSum}`);

/*Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем. */

let zeroNum = 0;
let negativeNum = 0;
let positiveNum = 0;
let evenNum = 0;
let oddNum = 0;
for (let i = 0; i < 10; i++) {
  let n = +prompt(`Введіть число`);

  if (n > 0) {
    positiveNum += 1;
    switch (n) {
      case n % 2 === 0: {
        evenNum += 1;
        break;
      }
      default: {
        oddNum += 1;
      }
    }
  } else if (n === 0) {
    zeroNum += 1;
  } else if (n < 0) {
    negativeNum += 1;
  }
}
alert(
  `Користувачем було введено ${positiveNum} додатніх 
  чисел з яких - ${evenNum} парних та ${oddNum} непарних, 
  ${negativeNum} від'ємних чисел та ${zeroNum} нулів`
);

/* Зацикли відображення днів тижня таким чином: 
«День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.*/

let showDay = true;
let n = 0;
const weekDays = [
  `Понеділок`,
  'Вівторок',
  'Середа',
  'Четвер',
  'П`ятниця',
  'Субота',
  'Неділя',
];
while (showDay) {
  showDay = confirm(`${weekDays[n]}, хочеш бачити наступний день?`);
  n++;
  if (n > 6) {
    n = 0;
  }
}

// *Максимум
/*Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом:
кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?».
Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50.
Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N
*/

let max = +prompt(`Введіть максимум вибірки`);
let min = +prompt(`Введіть мінімум вибірки`);
alert(`Загадайте число від ${min} до ${max}`);
let askingNumber;
let answer=true;
while (answer) {
  askingNumber = Math.round(((max + min) / 2));
  answer = prompt(
    `Можливо, загадане число - ${askingNumber} Напишіть знаком, воно рівне, більше чи менше загаданому`
  );

  switch(answer){
    case '>':{
      min = askingNumber-1;
      break;
    } 
    case `<`: {
      max = askingNumber+1;
      break;
    }
    case `=`:{
      alert(`Ура, я вгадав число !`);
      break;
    }
    default:
      alert(`Помилка  вводу`);
      break;

  }
  if(answer===`=`){
    break;
  }

}

//  Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

/*Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
Враховуй можливість переходу на наступний місяць, рік, а також високосний рік. */

const userDay = +prompt(`Введіть день`);
const userMonth = +prompt(`Введіть місяць числом`);
const userYear = +prompt(`Введіть рік чотирьохзначним числом`);
let nextDate;
let monthDays;
switch (userMonth) {
  case 2:
    if (userYear % 4 === 0 || userYear % 100 === 0) {
      monthDays = 29;
    } else {
      monthDays = 28;
    }

    break;
  case 4:
  case 6:
  case 9:
  case 11:
    monthDays = 30;
    break;

  default:
    monthDays = 31;
    break;
}
if (userDay == monthDays && userMonth === 12) {
  nextDate = `1.1.${userYear + 1}`;
} else if (userDay == monthDays) {
  nextDate = `1.${userMonth + 1}.${userYear}`;
} else {
  nextDate = `${userDay + 1}.${userMonth}.${userYear}`;
}
alert(`Наступна дата - ${nextDate}`);
