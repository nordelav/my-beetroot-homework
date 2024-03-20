import numCheck from './numCheck.js';

const numberCompare = (a, b) => {
  numCheck(a);
  numCheck(b);
  if (a > b) {
    console.log('-1');
  } else if (a < b) {
    console.log('+1');
  } else {
    console.log('0');
  }
};

export default numberCompare;
