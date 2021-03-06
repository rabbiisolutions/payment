import Teachers from "./Teachers";
import Tuition from "./Tuition";
import Discount from "./Discount";
import React from "react";
import texts from "../constants/texts";

const DesktopView = () => {
  return (
      <div id={'desktop-view'}>
        <section id={'teachers'}>
          <h2 className={'section-title'}>{texts.titles[0]}</h2>
          <Teachers/>
        </section>
        <section id={'tuition'}>
          <h2 className={'section-title'}>{texts.titles[1]}</h2>
          <Tuition/>
        </section>
        <section id={'discount'}>
          <h2 className={'section-title'}>{texts.titles[2]}</h2>
          <Discount/>
        </section>
      </div>
  )
};

export default DesktopView;
