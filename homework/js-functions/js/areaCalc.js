import numCheck from './numCheck.js';

const areaCalc = (a, b = a) => {
  numCheck(a);
  numCheck(b);
  let area = a * b;
  console.log(`Площа прямокутника - ${area}`);
};

export default areaCalc;
