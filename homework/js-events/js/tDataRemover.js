const tDataRemover = () => {
  
  const DOMTbody = document.getElementById('js-tbody');

  if (!DOMTbody) throw new Error('We don`t have DOMTbody');

  DOMTbody.parentElement.removeChild(DOMTbody);
};

export default tDataRemover;
