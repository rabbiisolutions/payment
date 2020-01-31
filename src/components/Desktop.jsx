import Teachers from "./Teachers";
import React from "react";
import texts from "../constants/texts";

const DesktopView = () => {
  return (
      <div id={'desktop-view'}>
        <section id={'teachers'}>
          <h2 className={'section-title'}>{texts.titles[0]}</h2>
          <Teachers/>
        </section>
      </div>
  )
};

export default DesktopView;
