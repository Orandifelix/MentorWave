import React, { useEffect } from "react";
import "./Stats.css";

function Organizations() {
  useEffect(() => {
    const logos = document.querySelectorAll(".organization-logo");

    // Reset animation for each logo when the component mounts
    logos.forEach((logo) => {
      logo.style.animation = "none";
      logo.offsetHeight; // Trigger a reflow, resetting the animation
      logo.style.animation = null;
    });
  }, []);

  return (
    <div className="ui segment">
      <h2 className="ui header centered">
        New age Mentoring Platform  
      </h2>
      <h2 className="ui green header centered"> Powered by People from World-Renowned
        Organizations</h2>
      <div
        id="organizations-container"
        className="ui doubling stackable cards segment"
      >
        <img src="/apple.png" alt="Logo 1" className="organization-logo" />
        <img src="/google.png" alt="Logo 1" className="organization-logo" />
        <img src="/equity.png" alt="Logo 1" className="organization-logo" />
        <img src="/amazon.png" alt="Logo 1" className="organization-logo" />
        <img src="/kcb.png" alt="Logo 1" className="organization-logo" />
        <img src="/safaricom.png" alt="Logo 1" className="organization-logo" />
        <img src="/stanibic.png" alt="Logo 1" className="organization-logo" />
        <img src="/moringa.png" alt="Logo 1" className="organization-logo" />
        <img src="/microsoft.png" alt="Logo 1" className="organization-logo" />
        <img src="/who.png" alt="Logo 1" className="organization-logo" />
      </div>
    </div>
  );
}

export default Organizations;
