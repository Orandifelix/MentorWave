import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Login({ handleLogin, handleClick }) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login action with loginData
    handleLogin();
    // Reset the form after submission
    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="ui placeholder segment center-content" style={{margin:"10% auto",inset:"0", width:"70%"}}>
      <div className="ui two column stackable grid">
        <div className="column login-column">
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
              <label>Username</label>
              <div className="ui left icon input">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
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
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
                <i className="lock icon"></i>
              </div>
            </div>
            <button className="ui blue submit button" type="submit">
            <i className="key icon"></i>Login
            </button> <br/>
            <div className="field">
              <p className="ui small header">
                Forgot password? <a href="#reset">Click here</a>
              </p>
            </div>
          </form>
        </div>
        <div className="middle aligned column">
          <div
            className="ui big secondary positive button"
            onClick={handleClick}
          >
            <i className="signup icon"></i>
            Sign Up
          </div>
        </div>
      </div>
      <div className="ui vertical divider">OR</div>
    </div>
  );
}

export default Login;
