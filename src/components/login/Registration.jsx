import { useState } from "react";
import Login from "./Login";
// import './Registration.css'


// eslint-disable-next-line react/prop-types
function Registration({ handleRegister, handleLoginForm, userData ,setUserData }) {


  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(userData);
  };



  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister()
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      agreedToTerms: false,
    });
  };
  return (
    <div
      className="ui padded container"
      style={{ margin: "20px auto", width: "50%" }}>
      <h2 className="ui padded header centered">Sign Up</h2>
      <div className="ui attached message">
        <div><h1>Welcome to MentorWave</h1></div>
        <h4>Fill out the form below to sign-up for a new account</h4>
      </div>
      <form className="ui form attached fluid segment" onSubmit={handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label>First Name</label>
            <input placeholder="First Name" name="firstName" type="text" value={userData.firstName} onChange={handleChange} required/>
          </div>
          <div className="field">
            <label>Last Name</label>
            <input placeholder="Last Name" type="text"name="lastName" value={userData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="field">
          <label>Username</label>
          <input placeholder="Username" type="text" required />
        </div>
        <div className="field">
          <label>Email</label>
          <input placeholder="Username" type="email" name="email" value={userData.email} onChange={handleChange} required />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" minLength={8} value={userData.password} onChange={handleChange}/>
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />
        </div>
        <div className="field">
        <select name="role" value={userData.role} onChange={handleChange}>
          <option value="">Role</option>
          <option value="1">Mentee</option>
          <option value="0">Mentor</option>
        </select>
        </div>
        <div className="inline field">
          <div className="ui checkbox">
            <input type="checkbox" id="terms" tabindex="0" className="hidden" value={userData.agreedToTerms} onChange={handleChange} />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
        </div>
        <button className="ui blue submit button" onClick={handleLoginForm}>Register</button>
      </form>
      <div className="ui bottom attached warning message">
        <i className="icon large help"></i>
        Already signed up ? <a href="#">Login here</a> instead.
      </div>
    </div>
  );
}

export default Registration;
