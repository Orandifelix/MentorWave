import "./Stats.css";

function Organizations() {
  return (
    <div id="organizations">
      <h2>OUR HAPPY CLIENTS</h2>
      <div className="ui doubling stackable cards segment" style={{backgroundColor:"#F8F0FF", margin:"20px 0"}}>
        <div className="ui card">
          {" "}
          <img
            className="safaricom"
            src="../public/safaricom-logo.png"
            alt="safaricom-logo"
          />
        </div>
        <div className="ui card">
          {" "}
          <img
            className="logos"
            src="../public/moringa.png"
            alt="moringa-logo"
          />
        </div>

        <div className="ui card">
          <img
            className="logos"
            src="../public/stanibic.png"
            alt="stanibic-logo"
          />
        </div>

        <div className="ui card">
          <img
            className="logos"
            src="../public/equity.png"
            alt="stanibic-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Organizations;
