import { useState } from "react";
import "./login.css";
import Swal from "sweetalert2";
import { Checkbox } from "semantic-ui-react";
import Axios from "axios";
import { baseUrl } from "./LoginRegistration";
import { BsSoundwave } from "react-icons/bs";

function Registration({
  userData,
  setUserData,
  handleRegister,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*12345678).*$/;
  
  const validatePassword = (password) => {
      return Promise.resolve(pattern.test(password));
  };
  const handleChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === "checkbox" ? checked : event.target.value;
    setUserData((prevData) => ({
      ...prevData,
      [name]: name === "agreedToTerms" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
     const passwordIsValid = await validatePassword(userData.password);
    if(!passwordIsValid){
      setIsValid(false);
      setLoading(false);
      return false;
    }
    Axios.post(baseUrl, userData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Thank you for registering! Proceed to log in with your new credentials",
        });
        setUserData({
          fullName: "",
          email: "",
          password: "",
          role: "",
          agreedToTerms: false,
        });
        handleRegister();
        setLoading(false);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Sorry, an error occurred during registration.",
        });
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div className="navbar-logo">
        <h1 className="ui large header">
          Mentor<span>Wave</span>
          <BsSoundwave />
        </h1>
      </div>
      <div id="login-page">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Full Names</label>
            <input
              name="fullName"
              placeholder="Enter your full names"
              type="text"
              value={userData.fullName}
              onChange={handleChange}
              required
            />
            <i className="user icon" id="user-icon"></i>
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
            <i className="mail icon" id="email-icon"></i>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              minLength={8}
              placeholder="********"
              title="password must contain numbers and letters"
              value={userData.password}
              onChange={handleChange}
              required
            />
            <i className="lock icon" id="password-icon"></i>
          </div>
          {!isValid && <p className="error-message">Pasword must contain letters and numbers.</p>}
          <div className="input-field">
            <Checkbox
              value={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            <span> {!showPassword ? "Show" : "Hide"} Password</span>
          </div>
          <div className="input-field">
            <label>Account Type</label>
            <select
              name="role"
              className="ui select dropdown register-select"
              value={userData.role}
              onChange={handleChange}>
              <option value="" hidden>
                Role
              </option>
              <option value="mentee">Mentee</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>
          <div className="input-field">
            <Checkbox
              name="agreedToTerms"
              value={userData.agreedToTerms}
              onChange={handleChange}
              required
            />
            <span>
              {" "}
              I agree to the <a>terms and conditions</a>
            </span>
          </div>
          <button
            onClick={() => {
              setLoading(true);
            }}
            type="submit"
            className={!loading? "register-btn": "ui fluid loading primary button"}>
            Register
          </button>
        </form>
        <div className="ui bottom attached message" id="register-message">
          Already signed up ? <a onClick={handleRegister}>Login here</a>{" "}
          instead.
        </div>
      </div>
    </div>
  );
}

export default Registration;
