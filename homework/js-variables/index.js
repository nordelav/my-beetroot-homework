// *Мінімум

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
console.log(+(0.1 + 0.2).toFixed(1));

//  2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
console.log(+'1' + 2);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const memorySize = +prompt('Введіть розмір флешки у гігабайтах', '1') * 1024;
alert(
  `На флешку поміститься ${Math.trunc(
    memorySize / 820
  )} файла розміром 860 мб. Вільного місця - ${memorySize % 820} мб`
);

// * Норма

/*  1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться. */
const walletBalance = +prompt('Введіть сумму коштів у гаманці');
const chocolatePrice = +prompt('Введіть ціну однієї шоколадки');
alert(
  `Ви зможете придбати ${Math.trunc(
    walletBalance / chocolatePrice
  )} шоколадок. У вас залишиться ${walletBalance % chocolatePrice} гривень`
);

/* Запитай у користувача тризначне число і виведи його задом наперед.
 Для вирішення завдання тобі знадобиться оператор % (залишок від ділення). */
//  ! Я так і не зрозумів, нащо  залишок від ділення
const threeDigitNumber = prompt('Введіть трьохзначне число', '123');
let numberPosition = threeDigitNumber.length - 1;
let reverseNum = '';
while (numberPosition >= 0) {
  reverseNum += threeDigitNumber.charAt(numberPosition);
  numberPosition--;
}
alert(`Число задом на перед -  ${reverseNum}`);

// * Максимум
/* 1 Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
Вивести суму нарахованих відсотків.*/
// ! Я не впевнений у правильності 
const depositSum = +prompt(
  'Введіть сумму у грн. Річний відсоток складає 5%',
  '2000'
);

const depositMonth = +prompt('Введіть кількість місяців', '2');
const monthGrowth = +((depositSum * 0.05) / 12).toFixed(2);
let depositResult = depositSum;
let month = depositMonth;
while (month!=0){
  depositResult += monthGrowth;
  month--;
}
alert( `Ви отримаєте  ${+depositResult.toFixed(2)} через ${depositMonth} місяців`);
