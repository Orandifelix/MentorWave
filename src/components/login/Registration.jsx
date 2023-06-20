import { useState } from "react";
import "./login.css";
import Swal from "sweetalert2";
import { Checkbox } from "semantic-ui-react";
import Axios  from "axios";
import { v4 as uuidv4 } from 'uuid';
import { baseUrl } from "./LoginRegistration";

function Registration({ handleLoginForm, userData, setUserData, handleRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    setUserData((prevData) => ({
      ...prevData,id:uuidv4(),
      [name]: name === 'agreedToTerms' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(baseUrl, userData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Thank you for registering! Proceed to log in with your new credentials",
        });
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: "",
          agreedToTerms: false,
        });
        handleRegister();
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Sorry, an error occurred during registration.",
        });
      });
  };
  
  return (
    <div className="login-container">
    <div className="ui padded container" id="registerForm">
      <div className="ui attached message">
        <div>
          <h1>Welcome to MentorWave</h1>
        </div>
        <h4>Fill out the form below to sign-up for a new account</h4>
      </div>
      <form className="ui form attached fluid segment" onSubmit={handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label>First Name</label>
            <input
              placeholder="First Name"
              name="firstName"
              type="text"
              value={userData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            placeholder="email"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type={!showPassword ? "password" : "text"}
            name="password"
            minLength={8}
            placeholder="********"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <Checkbox
            value={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />{" "}
          <span> {!showPassword ? "Show" : "Hide"} Password</span>
        </div>
        <div className="field">
          <select name="role" value={userData.role} onChange={handleChange}>
            <option value="">Role</option>
            <option value="mentee">Mentee</option>
            <option value="mentor">Mentor</option>
          </select>
        </div>
        <div className="inline field">
          <div className="ui checkbox">
            <input
              type="checkbox"
              id="terms"
              className="hidden"
              name="agreedToTerms"
              value={userData.agreedToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
        </div>
        <button className="ui blue submit button" onClick={handleLoginForm}>
          Register
        </button>
      </form>
      <div className="ui bottom attached warning message">
        <i className="icon large help"></i>
        Already signed up ? <a onClick={handleRegister}>Login here</a> instead.
      </div>
    </div>
    </div>
  );
}

export default Registration;
