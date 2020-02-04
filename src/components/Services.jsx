import React from "react";
import services from "../constants/services";

const Services = () => {
  return (
    <div id={'services'} className={'services-modal hidden'}>
      <h4>Our Services</h4>
      {services.map((service) => (<a href={service.link} className={'service-link'} key={service.key}>{service.title}</a>))}
      <p className={'info'}>click anywhere outside this dialog to close it</p>
    </div>
  );
};

export default Services;
