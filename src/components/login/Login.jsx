import { useState, useEffect } from "react";
import { Checkbox } from "semantic-ui-react";
import { baseUrl } from "./LoginRegistration";
import Axios from "axios";
import Swal from "sweetalert2";

function Login({ handleLogin, handleClick }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState([]);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    Axios.get(baseUrl).then((response) => setUserData(response.data));
    console.log(userData)
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
      // Data is still being fetched, show a loading indicator or handle the case
      return;
    }
    const foundUser = userData.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );
    if (!foundUser) {
      console.log(loginData.email, loginData.password);
      Swal.fire({
        icon:"error",
        title:"Authentication Failed",
        text:"The provided username or password are incorrect. Please try again",
        showCloseButton:"true",

      })
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
    <div className="login-page">
      <div className="ui placeholder segment center-content" id="login-page">
        <div className="ui two column stackable grid">
          <div className="column login-column">
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="field">
                <label>Email</label>
                <div className="ui left icon input">
                  <input
                    type="email"
                    name="email"
                    placeholder="yourname@example.com"
                    value={loginData.username}
                    onChange={handleChange}
                    required
                  />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    type={!showPassword ? "password" : "text"}
                    name="password"
                    placeholder="********"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="field">
                <Checkbox
                  value={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />{" "}
                <span> {!showPassword ? "Show" : "Hide"} Password</span>
              </div>
              <button className="ui fluid blue submit button" type="submit">
                <i className="key icon"></i>Login
              </button>
              <br />
              <div className="field">
                <p className="ui small header">
                  Forgot password? <a href="#reset">Click here</a>
                </p>
              </div>
            </form>
          </div>
          <div className="middle aligned column">
            <h3 className="inquiry">Don't have an account?</h3>
            <div
              className="ui big secondary positive button"
              onClick={handleClick}>
              <i className="signup icon"></i>
              Register
            </div>
          </div>
        </div>
        <div className="ui vertical divider">OR</div>
      </div>
    </div>
  );
}

export default Login;
