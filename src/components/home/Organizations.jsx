import React from "react";
import "./Stats.css";

function Organizations() {
  return (
    <>
      <h2 className="organisation-title">
        New age Mentoring Platform, Powered by People <br /> from World-Renowned
        Organizations
      </h2>
      <div
        id="organizations-container"
        className="ui doubling stackable cards segment"
      >
        <img
          src="../public/apple.png"
          alt="Logo 1"
          className="organization-logo"
        />
        <img
          src="../public/google.png"
          alt="Logo 1"
          className="organization-logo"
        />

        <img
          src="../public/equity.png"
          alt="Logo 1"
          className="organization-logo"
        />
        <img
          src="../public/amazon.png"
          alt="Logo 1"
          className="organization-logo"
        />
        <img
          src="../public/kcb.png"
          alt="Logo 1"
          className="organization-logo"
        />
        <img
          src="../public/safaricom.png"
          alt="Logo 1"
          className="organization-logo"
        />
        <img
          src="../public/stanibic.png"
          alt="Logo 1"
          className="organization-logo"
        />
        <img
          src="../public/moringa.png"
          alt="Logo 1"
          className="organization-logo"
        />
        <img
          src="../public/microsoft.png"
          alt="Logo 1"
          className="organization-logo"
        />
        <img
          src="../public/who.png"
          alt="Logo 1"
          className="organization-logo"
        />
      </div>
    </>
  );
}

export default Organizations;
