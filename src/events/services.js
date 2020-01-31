import overlayAction from "./OverlayActions";

const servicesToggle = evt => {
  const serviceModal = document.getElementsByClassName('services-modal')[0];
  overlayAction(serviceModal);
};

export default servicesToggle;
