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
  };

  return (
    <div className=" ui container"
    style={{
      //add background image to the container
      backgroundImage: "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      
    }}>
      <form
        className="ui form"
        style={{
          margin: "auto",
          width: "30%",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#f5f7f5",
          
          flexDirection:"column",
          //move container to the right of the screen
          marginRight:"10%",
          marginTop:"5%",
          marginBottom:"5%",
          height:"350px",
          alignItems:"center",
        }}
      >
        <h2>Login</h2>
        <div className="ten wide field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="ten wide field">
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
        <p>
          Don't have an account?
          <a href="#register" onClick={handleRegistrationClick}>
            Register here
          </a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
