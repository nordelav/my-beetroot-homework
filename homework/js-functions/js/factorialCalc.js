import numCheck from './numCheck.js';

const factorialCalc = (n) => {
  
  numCheck(n);

  if (n === 1) {

    return n;
  }
  return (n = n * factorialCalc(n - 1));
};

export default factorialCalc;
