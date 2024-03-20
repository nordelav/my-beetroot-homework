const variablesQuantity = () => {
  let a=true;
  let quantity=0;
  while(a){
    a=prompt(`введіть аргумент функції`);
    if (!a){
      break;
    }
    quantity += 1;

  }
  alert(`Кількість введених аргументів дорівнює - ${quantity}`);
};

export default variablesQuantity ;
