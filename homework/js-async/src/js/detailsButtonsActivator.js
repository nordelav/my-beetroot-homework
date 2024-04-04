const detailsButtonsActivator = (array, wrapper) => {

  const DOMDetaiilsButtonsActivator = Array.from(

    document.getElementsByClassName('js-detailsButton')
  );
  if (!DOMDetaiilsButtonsActivator) return;

  DOMDetaiilsButtonsActivator.forEach((e) => {

    e.addEventListener('click', () => {

      const DOMDetailsBlock = document.getElementById('js-detailsBlock');

      if (DOMDetailsBlock) wrapper.removeChild(DOMDetailsBlock);

      const filmObject = array[DOMDetaiilsButtonsActivator.indexOf(e)];

      const DetailsBlock = document.createElement('div');

      DetailsBlock.className = 'main-details details';

      DetailsBlock.id = 'js-detailsBlock';

      const div = document.createElement('div');

      div.className = 'details-text';

      for (const key in filmObject) {

        if (key === 'Poster') {

          const frame = document.createElement('div');

          frame.className = 'details-frame';

          const img = document.createElement('img');

          img.src = filmObject.Poster;

          frame.appendChild(img);

          DetailsBlock.appendChild(frame);

        } else {

          const text = document.createElement('p');

          text.textContent = `${key}:  ${filmObject[key]}`;

          div.appendChild(text);
        }
      }

      DetailsBlock.appendChild(div);

      wrapper.append(DetailsBlock);

    });

  });
  
};
export default detailsButtonsActivator;
