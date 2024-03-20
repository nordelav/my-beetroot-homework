import numCheck from './numCheck.js';

const factorialCalc = (n) => {
  numCheck(n);
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(`Факторіал ${n} - ${factorial}`);
};

export default factorialCalc;
