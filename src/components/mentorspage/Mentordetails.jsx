import Swal from "sweetalert2";

const Mentordetails = ({ handleClick, mentor, handleLoginClick }) => {
  function handleConversation() {
    Swal.fire({
      title: "<b>Sign in Required</b>",
      icon: "error",
      text: "Only registered users can perform this action.",
      showCloseButton: true,
      confirmButtonText: "Sign In",
      confirmButtonColor: "#0F73BD",
      footer: "Not a registered user?  <a href='#'>Join MentorWave today!</a>",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLoginClick();
      }
    });
  }
  function handleBooking() {
    Swal.fire({
      title: "<b>Sign in Required</b>",
      icon: "error",
      text: "Only registered users can perform this action.",
      showCloseButton: true,
      confirmButtonText: "Sign In",
      confirmButtonColor: "#0F73BD",
      footer: "Not a registered user?  <a href='#'>Join MentorWave today!</a>",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLoginClick();
      }
    });
  }

  return (
    <div className="ui fluid segment">
      <div className="ui three column centered stackable padded grid">
        <div className="row custom-bg">
          <div className="column mentordetails">
            <img
              src={mentor.image}
              alt="mentor image"
              className="ui medium circular image"
              id="mentor-image"
            />
          </div>
          <div className="column mentor-content">
            <div className="flex-container">
              <h2 className="large header">{mentor.name}</h2>
            </div>
            <h3 className="ui header">
              <span>Mentor Industry: </span>
              {mentor.industry}
            </h3>
            <h3 className="ui header">
              <span>Mentor Expertise: </span>
              {mentor.expertise}
            </h3>
            <button className="ui fluid button" onClick={handleClick}>
              {" "}
              &#8592; Go Back
            </button>
          </div>
          <div className="column mentor-content">
            <div className="ui fluid buttons">
              <button
                className="ui button"
                id="conversation-btn"
                onClick={handleConversation}>
                <b className="ui colored header">Start a Conversation</b>
              </button>
              <button className="or"></button>
              <button className="ui button" id="meeting" onClick={handleBooking}>
                <b className="ui colored header">Book a Meeting</b>
              </button>
            </div>
            <div className="ui padded segment centered">
              <div className="book-mentor">
                <label htmlFor="date">Date: </label>
                <input type="date" name="date" />
              </div>
              <div>
                <br></br>
              </div>
              <div className="book-mentor">
                <label htmlFor="time">Time: </label>
                <input type="time" name="time" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="ui segment">
        <h1 className="custom-header">How i can help</h1>
        <h2>My Professional Background</h2>
        <div className="mentor-bio" id="custom-overflow">
          {mentor.background}
        </div>
      </div>
    </div>
  );
};

export default Mentordetails;
