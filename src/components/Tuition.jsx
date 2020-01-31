import { BrowserRouter as Router } from 'react-router-dom';
import Button from "./basic/Button";
import ImageWebp from "../helpers/ImageWebp";
import tuition from "../constants/tuition";
import React from "react";
import Icon from "./basic/Icon";
import servicesToggle from "../events/services";

const Card = (props) => {
  return (
    <div className={'tuition-type'}>
      <ImageWebp src={props.jpeg} srcWebp={props.webp} className={'tuition-image'}/>
      <div className={'col'}>
        <h4>{props.title}</h4>
        <Icon src={props.icon} width={15} height={15} units={'vw'} className={'tuition-icon'}/>
        <p>{props.desc}</p>
        <Button className={'services'} value={'Get a Tutor'} onClick={e => servicesToggle(e)}/>
      </div>
    </div>
  );
};

const Tuition = () => {
  return (
    <Router>
      <p className={'section-desc'}>{tuition.tagLine}</p>
      <div id={'tuition-list'}>
        <Card icon={tuition.personal.icon} title={tuition.personal.title}
              desc={tuition.personal.description} jpeg={tuition.personal.image.jpeg}
              webp={tuition.personal.webp}
        />
        <Card icon={tuition.group.icon} title={tuition.group.title}
              desc={tuition.group.description} jpeg={tuition.group.image.jpeg}
              webp={tuition.group.webp}
        />
      </div>
    </Router>
  );
};

export default Tuition;
