const hidden = 'hidden';

const backDropHandler = e => {
  const serviceModal = document.getElementsByClassName('services-modal')[0];
  const sideBar = document.getElementsByClassName('menu')[0];
  sideBar.classList.add(hidden);
  serviceModal.classList.add(hidden);
  e.target.classList.toggle(hidden);
};

export default backDropHandler;
