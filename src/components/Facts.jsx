import React from "react";
import facts from "../constants/facts";


const Desc = (desc) => {
  return (
      desc.map((item) => (
          <p className={'desc'} key={item.key}>
            <span className={'variable'}>{item.value[0]}</span>
            <span className={'value'}>{item.value[1]}</span>
          </p>
      ))
  );
};

const Fact = (props) => {
  return (
    <div className={'fact'}>
      <h4 className={'title'}>{props.title}</h4>
      {Desc(props.desc)}
    </div>
  );
};

const Facts = () => {
  return (
      <section id={'facts'}>
        <h2 className={'section-title'}>Did you know?</h2>
        <div id={'facts-list'}>
          <Fact title={facts.self.title} desc={facts.self.desc}/>
          <Fact title={facts.govt.title} desc={facts.govt.desc}/>
          <Fact title={facts.savings.title} desc={facts.savings.desc}/>
        </div>
        <div id={'tag-line'}>
          {facts.tagLine}
        </div>
      </section>
  )
};

export default Facts;
