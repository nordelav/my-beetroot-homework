import numCheck from './numCheck.js';

const areaCalc = (a, b = a) => {
  numCheck(a);
  numCheck(b);
  console.log(`Площа прямокутника - ${a*b}`);
};

export default areaCalc;
