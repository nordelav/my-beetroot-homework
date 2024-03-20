import numCheck from './numCheck.js';

const perfectNumCheck = (n) => {
  numCheck(n);
  let divisorArray = [];
  let sumArray = 0;
  for (let j = (n-1); j !== 0; j--) {
    if (n % j === 0) {
      divisorArray.push(j);
    }
  }
  for (let i = 0; i < divisorArray.length; i++) {
    sumArray = sumArray + divisorArray[i];
  }
  if (sumArray === n) {
    return true;
  } else {
    return false;
  }
};

export default perfectNumCheck;
