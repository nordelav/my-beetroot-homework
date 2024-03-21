const numCheck = (a) => {
  if (typeof a !== 'number' || isNaN(a) || a < 0) {

    throw new Error(`помилка вводу. Введіть додатнє число`);
  }
};
export default numCheck;
