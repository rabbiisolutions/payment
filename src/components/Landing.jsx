import React from "react";
import celebrateJpg from "../assets/images/celebrate.jpg";
import savingsJpg from "../assets/images/savings.jpg";
import celebrateWebp from "../assets/images/celebrate.webp";
import savingsWebp from "../assets/images/savings.webp";
import landingWebp from "../assets/images/landing.webp";
import landingJpg from "../assets/images/landing.png";
import ImageWebp from "../helpers/ImageWebp";
import texts from "../constants/texts";
import ButtonLink from "./basic/ButtonLink";

const Landing = () => {
  return (
      <section id={'landing'}>
        <ImageWebp
            src={celebrateJpg}
            srcWebp={celebrateWebp}
            className={'landing-image'}
            alt={'celebrate'}
        />
        <ImageWebp
            src={landingJpg}
            srcWebp={landingWebp}
            className={'mobile-landing'}
            alt={'mobile-landing'}
        />
        <div id={'greeting'}>
          <h2>investment that matters</h2>
          <p>Parents spend an average of half a million per student in primary and high school,</p>
          <p className={'bold'}>We provide the extra help to make sure that it counts.</p>
          <div id={'light-box'}>
            <p>Sign up to see our price list <span>(client only*)</span>.</p>
            <ButtonLink value={texts.signUp} link={"https://forms.gle/3JZCSM2JJTPLTjP57"} className="services"/>
          </div>
        </div>
        <ImageWebp
            src={savingsJpg}
            srcWebp={savingsWebp}
            className={'landing-image'}
            alt={'savings'}
        />
      </section>
  )
};
export default Landing;
