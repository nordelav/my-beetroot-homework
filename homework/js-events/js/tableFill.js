const data = [
  { name: 'John', age: 30, salary: 50000, country: 'USA' },

  { name: 'Alice', age: 25, salary: 60000, country: 'Canada' },

  { name: 'Bob', age: 35, salary: 70000, country: 'UK' },

  { name: 'Emily', age: 28, salary: 55000, country: 'Australia' },

  { name: 'Michael', age: 32, salary: 65000, country: 'Germany' },
];

const tableFill = (array) => {

  const DOMTable = document.getElementById('js-table');

  if (!DOMTable) throw new Error('We don`t have DOMTable ');

  const tBody = document.createElement('tbody');

  tBody.id = 'js-tbody';

  array.forEach((object) => {

    const tableRow = document.createElement('tr');

    for (const prop in object) {
      
      const tableData = document.createElement('td');

      tableData.innerText = object[prop];

      tableRow.appendChild(tableData);
    }

    tBody.appendChild(tableRow);
  });

  DOMTable.appendChild(tBody);
};

export { tableFill, data };
