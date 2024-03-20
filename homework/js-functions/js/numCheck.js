const numCheck = (a)=>{
  if(a<0||typeof a!=='number'|| isNaN(a)){
    alert(`помилка вводу. Введіть додатнє число`);
    throw new Error(`помилка вводу. Введіть додатнє число`);
  }
}
export default numCheck;