const modalActivator = () => {
  const DOMModalOpen = document.getElementById('js-modal-open');

  if (!DOMModalOpen) throw new Error('DOMModalOpen hasn`t found');

  const DOMModalClose = document.getElementById('js-modal-close');

  if (!DOMModalClose) throw new Error('DOMModalClose hasn`t found');

  const DOMModal = document.getElementById('js-modal');

  if (!DOMModal) throw new Error('DOMModal hasn`t found');

  DOMModalOpen.addEventListener('click', () => {
    console.log(DOMModal.classList);
    DOMModal.classList.add('header-modal--active');
  });

  DOMModalClose.addEventListener('click', () => {
    DOMModal.classList.remove('header-modal--active');
  });
};

export default modalActivator ;
