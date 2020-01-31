const hidden = 'hidden';

const backDropHandler = e => {
  let signUp = document.getElementsByClassName('sign-up modal')[0];
  const serviceModal = document.getElementsByClassName('services-modal')[0];
  const sideBar = document.getElementsByClassName('menu')[0];
  //const services = document.getElementsByClassName('our-services')[0];
  signUp.classList.add(hidden);
  sideBar.classList.add(hidden);
  serviceModal.classList.add(hidden);
  //services.classList.add(hidden);
  e.target.classList.toggle(hidden);
};

export default backDropHandler;
