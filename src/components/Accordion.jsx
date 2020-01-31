import sectionCollapseHandler from "../events/collapse";
import Icon from "./basic/Icon";
import downIcon from "../assets/icons/collapse/bx_bx-caret-downdown.svg";
import upIcon from "../assets/icons/collapse/bx_bx-caret-downup.svg";
import React from "react";
import texts from "../constants/texts";
import Teachers from "./Teachers";

const Content = (data) => {
  return (
      <div className="collapse-content">
        {data}
      </div>
  )
};

const Toggle = (title) => {
  return (
      <div className="collapse-toggle" onClick={e => sectionCollapseHandler(e)}>
        <span className="collapse-title">{title}</span>
        <Icon src={downIcon} height={1.5} width={1.5} className="down"/>
        <Icon src={upIcon} height={1.2} width={1.2} className="up hidden"/>
      </div>);
};

const Accordion = () => {
  return (
      <section id={'mobile-collapse'} className={'accordion'}>
        <p id={'accordion-lead'}>tap a section to expand or collapse it</p>
        {Toggle(texts.titles[0])}
        {Content(<Teachers/>)}
      </section>
  )
};

export default Accordion;