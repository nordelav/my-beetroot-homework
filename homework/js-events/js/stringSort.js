import argSort from './argSort.js';

import tDataRemover from './tDataRemover.js';

import { data, tableFill } from './tableFill.js';


const stringSort = () => {

  const DOMStringSort = Array.from(

    document.getElementsByClassName('js-stringsort')
  );

  DOMStringSort.forEach((element) => {

    element.addEventListener('click', () => {

      const sortedData = data.sort((a, b) =>

        a[argSort(element)].localeCompare(b[argSort(element)])
      );

      tDataRemover();

      tableFill(sortedData);

    });

  });
  
};

export { stringSort };
