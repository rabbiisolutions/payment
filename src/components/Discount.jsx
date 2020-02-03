import { BrowserRouter as Router } from 'react-router-dom';
import teacher from "../assets/icons/discount/teacher.svg";
import one from "../assets/icons/discount/emojione-v1_keycap-1.svg";
import two from "../assets/icons/discount/emojione-v1_keycap-2-1.svg";
import three from "../assets/icons/discount/emojione-v1_keycap-3.svg";
import four from "../assets/icons/discount/emojione-v1_keycap-4.svg";
import five from "../assets/icons/discount/emojione-v1_keycap-5.svg";
import discount from "../constants/discount";
import React from "react";
import Icon from "./basic/Icon";
import Refer from "./Refer";

const Title = (props) => {
  return (
      <h4 className={'point-title'}>
        <Icon src={teacher} height={'4'} width={'4'} units={'rem'} className={'point-icon'}/>
        <span>{props.title}</span>
      </h4>
  )
};

const Timeline = (props) => {
  return (
      <div className={'timeline'}>
        <Icon src={props.icon} width={2.5} height={2.5} units={'rem'}/>
        <span className={'box'}>
          {props.desc}
        </span>
      </div>
  )
};

const Discount = () => {
  return (
      <Router>
        <p className={'section-desc'}>{discount.tagLine}</p>
        <div id={'timeline'}>
          <div id={'start'}>
            <span id={'circle'}/>
            Start
          </div>
          <div className={'container left'}>
            <Title title={discount.howItWorks.title}/>
            <Timeline icon={one} desc={discount.howItWorks.list[0]}/>
            <Timeline icon={two} desc={discount.howItWorks.list[1]}/>
            <Timeline icon={three} desc={discount.howItWorks.list[2]}/>
          </div>
          <div className={'container right'}>
            <Title title={discount.howToRefer.title}/>
            <Timeline icon={one} desc={discount.howToRefer.list[0] + discount.howToRefer.list[1]}/>
            <Timeline icon={two} desc={discount.howToRefer.list[2]}/>
            <Timeline icon={three} desc={discount.howToRefer.list[3]}/>
            <Timeline icon={four} desc={discount.howToRefer.list[4]}/>
            <Timeline icon={five} desc={discount.howToRefer.list[5]}/>
          </div>
          <div className={'container left'}>
            <Title title={discount.example.title}/>
            <Timeline icon={one} desc={discount.example.list[0]}/>
            <Timeline icon={two} desc={discount.example.list[1]}/>
            <Timeline icon={three} desc={discount.example.list[2] + discount.example.list[3]}/>
          </div>
        </div>
        <div id={'refer'}>
          <Refer/>
        </div>
      </Router>
  )
};

export default Discount;
