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
            src="https://github.com/Donvine254/MentorWave/blob/main/public/safaricom-logo.png?raw=true"
            alt="safaricom-logo"
          />
        </div>
        <div className="ui card">
          {" "}
          <img
            className="logos"
            src="https://github.com/Donvine254/MentorWave/blob/main/public/moringa.png?raw=true"
            alt="moringa-logo"
          />
        </div>

        <div className="ui card">
          <img
            className="logos"
            src="https://github.com/Donvine254/MentorWave/blob/main/public/stanibic.png?raw=true"
            alt="stanbic-logo"
          />
        </div>

        <div className="ui card">
          <img
            className="logos"
            src="https://github.com/Donvine254/MentorWave/blob/main/public/equity.png?raw=true"
            alt="equity-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Organizations;
