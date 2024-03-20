import numCheck from './numCheck.js';

const numberJoin = (a, b, c) => {
  numCheck(a);
  numCheck(b);
  numCheck(c);
  let numArray = [];
  numArray.push(a, b, c);
  console.log(`Складене число -  ${numArray.join('')}`);
};
export default numberJoin;
