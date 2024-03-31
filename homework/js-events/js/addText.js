const addtext = () => {
  const DOMTextBlock = document.getElementById('js-textblock');

  if (!DOMTextBlock) return;

  let text = DOMTextBlock.innerText;

  window.addEventListener('keydown', (e) => {

    if (e.code === 'KeyE' && e.ctrlKey) {

      e.preventDefault();

      DOMTextBlock.innerText = '';

      const textArea = document.createElement('textarea');

      textArea.className = 'main-textarea';

      textArea.id = 'js-textarea';

      textArea.innerText = text;

      DOMTextBlock.appendChild(textArea);
    }

    if (e.code == 'KeyS' && e.ctrlKey) {
      
      e.preventDefault();

      const DOMTextField = document.getElementById('js-textarea');

      if(!DOMTextField) return;

      text = DOMTextField.value;

      DOMTextField.parentNode.removeChild(DOMTextField);

      DOMTextBlock.innerText=text;
    }
  });
};

export default addtext;
