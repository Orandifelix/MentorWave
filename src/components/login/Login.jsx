import { useState, useEffect } from "react";
import { baseUrl } from "./LoginRegistration";
import { Checkbox } from "semantic-ui-react";
import Axios from "axios";
import Swal from "sweetalert2";
import "./login.css";

function Login({ handleLogin, handleClick }) {
  const [userData, setUserData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    Axios.get(baseUrl).then((response) => setUserData(response.data));
    console.log(userData);
    return () => {};
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.length === 0) {
      return;
    }
    const foundUser = userData.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );
    if (!foundUser) {
      console.log(loginData.email, loginData.password);
      Swal.fire({
        icon: "error",
        title: "Authentication Failed",
        text: "The provided username or password are incorrect. Please try again",
        showCloseButton: "true",
      });
      setLoginData({
        email: "",
        password: "",
      });
      return;
    }
    handleLogin();
    setLoginData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="login-container">
      <div id="login-page">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Type your email"
              required
            />
            <i className="mail icon" id="email-icon"></i>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Type your password"
              minLength={8}
              required
            />
            <i className="lock icon" id="password-icon"></i>
          </div>
          <Checkbox
            value={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />{" "}
          <span> {!showPassword ? "Show" : "Hide"} Password</span>
         
          <p>
          <br></br>
            Forgot Password? <a>Click here</a>
          </p>
          <button
            type="submit"
            className="ui fluid primary button"
            id="sign-in-btn">
            <i className="sign in icon"></i>LOGIN
          </button>
        </form>
        <h3 className="centered">Or</h3>
        <p className="inquiry">
          New Member? <a onClick={handleClick}>Register Here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
