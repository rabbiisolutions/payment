import React from "react";
import ButtonLink from "./basic/ButtonLink.jsx";
import signUpHandler from "../events/SignUpModal";

const SignUpModal = (props) => {
  return (
      <div className={props.className}>
        <div className={"close-icon " + props.status} onClick={e => signUpHandler(e)}>&#10006;</div>
        <div id="sign-up-text">{props.signUpText}</div>
        <section>
          <div className="user-title">
            clients/parents only
          </div>
          <div id="client-btns">
            <ButtonLink link="https://forms.gle/y7KTkMDtYCtAywDu6" className="client-btn" value="Get a Tutor"/>
          </div>
        </section>
        <div className="info">If you face difficulty in registering call, text or WhatsApp on 0772 915 361</div>
      </div>
  );
};

// Exporting the component
export default SignUpModal;
