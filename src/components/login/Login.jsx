import  { useState } from 'react';
import './Login.css'

// eslint-disable-next-line react/prop-types
function Login({ handleLogin, handleClick }) {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login action with loginData
    handleLogin();
    // Reset the form after submission
    setLoginData({
      username: '',
      password: ''
    });
  };

  return (
    <div className="ui centred placeholder segment">
      <div className="ui two column very relaxed stackable grid">
        <div className="column">
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
                />
                <i className="lock icon"></i>
              </div>
            </div>
            <button className="ui blue submit button" type="submit">
              Login
            </button>
            <div className="field">
              <p>
                Forgot password <a href="#reset">Click here</a>
              </p>
            </div>
          </form>
        </div>
        <div className="middle aligned column">
          <div className="ui big button" onClick={handleClick}>
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
