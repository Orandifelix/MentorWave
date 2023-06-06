import React, { useState } from "react";

const Registration = ({ handleRegistration }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [expertise, setExpertise] = useState("");
  const [isMentor, setIsMentor] = useState(false);

  //handle mentee registration
  const handleMenteeSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        expertise,
        isMentor,
      };
      handleRegistration(userData);
    }
  };

  //handle mentor registration
  const handleMentorSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        expertise,
        isMentor,
      };
      handleRegistration(userData);
    }
  };

  //handle mentor checkbox change
  const handleMentorCheckboxChange = (e) => {
    setIsMentor(e.target.checked);
  };

  return (
    <div className="ui container">
      <h2 id="register">Registration</h2>
      
      <div className="ui segment">
        <h3>Register as Mentee</h3>
        <form className="ui form" onSubmit={handleMenteeSubmit}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Expertise</label>
            <input
              type="text"
              name="expertise"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            />
          </div>
          <button className="ui button" type="submit">
            Register as Mentee
          </button>
        </form>
      </div>
      <div className="ui segment">
        <h3>Register as Mentor</h3>
        <form className="ui form" onSubmit={handleMentorSubmit}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Expertise</label>
            <input
              type="text"
              name="expertise"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Is Mentor?</label>
            <input
              type="checkbox"
              name="isMentor"
              value={isMentor}
              onChange={(e) => handleMentorCheckboxChange(e)}
            />
            <label>I want to Register as a Mentor</label>
          </div>
          <button className="ui button" type="submit">Register as Mentot</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
