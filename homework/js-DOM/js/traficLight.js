const traficLight = () => {
  const DOMTraficSwitch = document.getElementById('js-trafic-switch');

  const DOMTraficBulb = document.getElementsByClassName('js-trafic-bulb');

  let traficCount = 0;

  let colorCount = 0;

  DOMTraficSwitch.addEventListener('click', () => {
    
    let traficColors = ['red', 'yellow', 'green'];

    if (!DOMTraficBulb[traficCount]) {

      DOMTraficBulb[traficCount - 1].classList.remove(

        `trafic-light-bulb-${traficColors.at(colorCount - 1)}`
      );
      traficCount = 0;

      colorCount = 0;
    }

    if (!traficColors[colorCount]) colorCount = 0;

    if (DOMTraficBulb[traficCount - 1]) {

      DOMTraficBulb[traficCount - 1].classList.remove(

        `trafic-light-bulb-${traficColors.at(colorCount - 1)}`
      );
    }

    DOMTraficBulb[traficCount].classList.add(

      `trafic-light-bulb-${traficColors.at(colorCount)}`
    );

    traficCount += 1;

    colorCount += 1;
  });
};

export default traficLight;
