import numCheck from './numCheck.js';

import perfectNumCheck from './perfectNumCheck.js';

const perfectNumRange = () => {

  const a = +prompt(

    'Ця функція виведе усі досконалі числа у діапазоні. Введіть початок діапазону'
  );
  numCheck(a);

  const b = +prompt('Введіть кінець діапазону');

  numCheck(b);

  const perfectArray = [];

  for (let i = a; i <= b; i++) {

    if (!i) {

      continue;
    }

    if (perfectNumCheck(i)) {

      perfectArray.push(i);
    }

    continue;
  }

  alert(` Досконалі чисела в діапазоні від ${a} до ${b}: ${perfectArray}`);
};

export default perfectNumRange;
