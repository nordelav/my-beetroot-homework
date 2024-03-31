const blockMover = () => {

  const DOMMovableBlock = document.getElementById('js-movable-block');

  if (!DOMMovableBlock) throw new Error('DOMMovableBlock hasn`t found');

  const DOMResizePoint = document.getElementById('js-resizepoint');

  if (!DOMResizePoint) throw new Error('DOMResizePoint hasn`t found');

  const startPosition = DOMMovableBlock.getBoundingClientRect();

  let moving = false;

  DOMMovableBlock.addEventListener('mousedown', (e) => {

    if (e.target===DOMResizePoint) {

      moving = true;
    }
  });

  document.addEventListener('mousemove', (e) => {

    if (!moving) return;

    const newX = e.clientX - startPosition.x;

    const newY = e.clientY - startPosition.y;

    DOMMovableBlock.style.width = startPosition.width + newX + 'px';

    DOMMovableBlock.style.height = startPosition.height + newY + 'px';
  });

  document.addEventListener('mouseup', () => {

    moving = false;

  });
};

export default blockMover;
