const shoppingList = [
  {
    item: 'cabbage',
    cost: 12.5,
    quatity: 3,
    wasBought: true,
    sum: 37.5,
  },

  {
    item: 'tomato',
    cost: 16.9,
    quatity: 1,
    wasBought: false,
    sum: 16.9,
  },

  {
    item: 'sausage',
    cost: 56.4,
    quatity: 5,
    wasBought: true,
    sum: 282,
  },

  {
    item: 'cheese',
    cost: 71.9,
    quatity: 9,
    wasBought: false,
    sum: 647.1,
  },
];

const listMethods = {
  sumCorrector() {
    shoppingList.forEach((object) => {
      object.sum = Math.round(object.cost * object.quatity);
    });
  },
  unboughtSort() {
    const list = shoppingList.sort((a, b) => {
      if (a.wasBought && !b.wasBought) {
        return 1;
      }
      if (!a.wasBought && b.wasBought) {
        return -1;
      }
      if (a.wasBought && b.wasBought) {
        return 0;
      }
    });

    console.log(list);
  },

  buyItem() {
    const itemName = prompt(
      'Write down name of item, that you have already bought',
      'cheese'
    ).toLowerCase();
    if (itemName) {
      shoppingList.forEach((object) => {
        if (object.item === itemName) {
          object.wasBought = true;
        }
      });
    }
  },

  deleteItem() {
    const itemName = prompt(
      'Write down name of item, that you want to delete',
      'cheese'
    ).toLowerCase();
    if (itemName) {
      // ! При використанні splice видалення не працює, тому використа filter
      const updatedList = shoppingList.filter((object) => {
        if (object.item === itemName) {
          return false;
        }
        return object;
      });
      console.log(updatedList);
    }
  },

  addItem() {
    const item = prompt('Name of Product', 'cabbage');
    const cost = +prompt('Cost', '12.5');
    const quatity = +prompt('How many you need?', '3');
    const wasBought = confirm('Have you bought it yet?');
    const sum = Math.round(cost * quatity);

    if (item && cost && quatity) {
      if (shoppingList.find((object) => object.item === item)) {
        shoppingList.forEach((object) => {
          if (object.item === item) {
            object.quatity = object.quatity + quatity;

            object.sum = Math.round(object.cost * object.quatity);
          }
        });
      } else {
        shoppingList.push({ item, cost, quatity, wasBought, sum });
      }

      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    }
  },

  productSum(list) {
    this.sumCorrector();
    const generalSum = list.reduce((sum, object) => sum + object.sum, 0);

    console.log(`item sum is: ${generalSum}`);
  },

  situativeSum() {
    const userChoose = confirm(
      'Bought sum or unbought sum?. if "OK" bought sum will be shown'
    );
    let filteredList;
    if (userChoose) {
      filteredList = shoppingList.filter((object) => !object.wasBought);
    } else {
      filteredList = shoppingList.filter((object) => object.wasBought);
    }
    listMethods.productSum(filteredList);
  },

  sumSort() {
    const userAnswer = prompt(
      'If you need sort from biggest sum, press > , if from smallest  - press <'
    );
    switch (userAnswer) {
      case '>': {
        const list = shoppingList.sort((a, b) => a.sum - b.sum);
        console.log(list);
        break;
      }
      case '<': {
        const list = shoppingList.sort((a, b) => b.sum - a.sum);
        console.log(list);
        break;
      }
      default:
        throw new Error('Невірно введені данні введіть > або <');
    }
  },
};

export { shoppingList, listMethods };
