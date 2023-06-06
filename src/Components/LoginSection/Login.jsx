import React, { useState } from "react";

const Login = ({ handleLogin, handleRegistration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all fields");
    } else {
      const userdata = { email: email, password: password };
      handleLogin(userdata);
    }
  };

  //handle registration
  const handleRegistrationClick = (event) => {
    event.preventDefault();
    handleRegistration();
  }

  return (
    <div className="ui container">
    <h2>Login</h2>
    <form className = "ui form">
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
        <button className="ui button" type="submit" onClick={handleSubmit}>
          Login
        </button>
        {error && <p>{error}</p>}
        <p> Don't have an account? <a href="#register" onClick={handleRegistrationClick} >Register here</a> </p>
    </form>
  </div>
  );
};

export default Login;
