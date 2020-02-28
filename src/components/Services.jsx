import React from "react";
import services from "../constants/services";
import Icon from "./basic/Icon";
import close from "../assets/icons/close.svg";
import modals from "../events/modals";

const Services = () => {
  return (
    <div id={'services'} className={'services-modal hidden'}>
      <section className={'header'}>
        <h4>Our Services</h4>
        <Icon src={close} className="close-icon" height={5} width={5} units={'vh'} onClick={e => modals.tutorForms(e)}/>
      </section>
      <section className={'body'}>
        {services.map((service) => (<a href={service.link} className={'service-link'} key={service.key}>{service.title}</a>))}
      </section>
      <section>
        <a href={'https://rabbii.co.ke/#services'} className={'learn'}>Learn more about our services here</a>
      </section>
    </div>
  );
};

export default Services;
