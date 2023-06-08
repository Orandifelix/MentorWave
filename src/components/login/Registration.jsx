import { useState } from "react";
// import './Registration.css'


function Registration({ handleRegister, handleLoginForm }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreedToTerms: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(userData);
  };

  //handle checkbox change
  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      agreedToTerms: checked,
    }));
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
      <div class="ui attached message">
        <div><h1>Welcome to MentorWave</h1></div>
        <h4>Fill out the form below to sign-up for a new account</h4>
      </div>
      <form class="ui form attached fluid segment" onSubmit={handleSubmit}>
        <div class="two fields">
          <div class="field">
            <label>First Name</label>
            <input placeholder="First Name" name="firstName" type="text" value={userData.firstName} onChange={handleChange} required/>
          </div>
          <div class="field">
            <label>Last Name</label>
            <input placeholder="Last Name" type="text"name="lastName" value={userData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div class="field">
          <label>Username</label>
          <input placeholder="Username" type="text" required />
        </div>
        <div class="field">
          <label>Email</label>
          <input placeholder="Username" type="email" name="email" value={userData.email} onChange={handleChange} required />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" name="password" minLength={8} value={userData.password} onChange={handleChange}/>
        </div>
        <div class="field">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />
        </div>
        <div class="field">
        <select name="Role" value={userData.role} onChange={handleChange}>
          <option value="">Role</option>
          <option value="1">Mentee</option>
          <option value="0">Mentor</option>
        </select>
        </div>
        <div class="inline field">
          <div class="ui checkbox">
            <input type="checkbox" id="terms" tabindex="0" class="hidden" value={userData.agreedToTerms} onChange={handleChange} />
            <label for="terms">I agree to the terms and conditions</label>
          </div>
        </div>
        <button class="ui blue submit button" onClick={handleLoginForm}>Register</button>
      </form>
      <div class="ui bottom attached warning message">
        <i class="icon large help"></i>
        Already signed up ? <a href="#">Login here</a> instead.
      </div>
    </div>
  );
}

export default Registration;
