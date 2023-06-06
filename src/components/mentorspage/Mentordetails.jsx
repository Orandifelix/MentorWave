import { imageUrl } from "./Mentorscard";

const Mentordetails = ({handleClick}) => {
  return (
    <div className="ui fluid segment">
      <div className="ui three column centered stackable padded grid">
        <div className="row custom-bg">
          <div className="column">
            <img
              src={imageUrl}
              alt="mentor image"
              className="ui medium circular image"
            />
          </div>
          <div className="column mentor-content">
            <div className="flex-container">
              <h2 className="large header">Donvine Mugendi</h2>
              <img
                className="mentor-badge"
                src="../public/mentorbadge.png"
                alt="mentors badge"
              />
            </div>
            <h3>
              <span>Mentor Industry: </span>
              Computer services/information technology
            </h3>
            <h3>
              <span>Mentor Expertise: </span>Software engineering
            </h3>
            <button className="ui fluid button" onClick={handleClick}> &#8592; Go Back</button>
          </div>
          <div className="column mentor-content">
            <div className="ui fluid buttons">
              <button className="ui button primary">
                <b className="ui colored header">Start a Conversation</b>
              </button>
              <button className="or"></button>
              <button className="ui teal button"><b className="ui colored header">Book a Meeting</b></button>
            </div>
            <div className="ui padded segment centered">
              <div>
              <label htmlFor="date">Date: </label>
                <input type="date" name="date"/>
              </div>
              <div><br></br></div>
              <div>
               <label htmlFor="time">Time: </label>
                <input type="time" name="time" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: "5px solid #4adfda" }}></hr>
      <div className="ui segment">
        <h1 className="custom-header">How i can help</h1>
        <h2>My Professional Background</h2>
        <div className="mentor-bio">
          <p>
            Donvine is a seasoned software engineer with over 10 years of
            experience specializing in web development. He has a strong passion
            for mentoring and sharing his expertise in Javascript ES6, React,
            Ruby, and Rust. With a focus on scalability and efficiency.
          </p>
          <p>
            Donvine has a proven track record of building robust websites. His
            deep understanding of Javascript ES6 allows him to develop clean and
            maintainable code, ensuring optimal performance and readability.
          </p>
          <p>
            As a mentor, Donvine is dedicated to guiding aspiring developers in
            their learning journey. He excels in explaining complex concepts in
            a simple and approachable manner, making him an ideal mentor for
            those seeking to enhance their skills in Javascript ES6, React,
            Ruby, and Rust.
          </p>
          <p>
            {" "}
            Donvine's experience includes working with notable companies and
            receiving endorsements from industry professionals. This recognition
            speaks to his expertise and commitment to delivering high-quality
            solutions. By choosing Donvine as your mentor, you can benefit from
            his extensive knowledge and gain valuable insights into software
            engineering best practice
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mentordetails;
