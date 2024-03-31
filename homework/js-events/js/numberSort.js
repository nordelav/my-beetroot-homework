import argSort from './argSort.js';

import tDataRemover from './tDataRemover.js';

import { data, tableFill } from './tableFill.js';


const numberSort = () => {

  const DOMNumberSort = Array.from(

    document.getElementsByClassName('js-numbersort')
  );

  DOMNumberSort.forEach((element) => {

    element.addEventListener('click', () => {

      const sortedData = data.sort(
        
        (a, b) =>
          parseFloat(b[argSort(element)]) - parseFloat(a[argSort(element)])
      );

      tDataRemover();

      tableFill(sortedData);
      
    });
  });
};

export default numberSort;
