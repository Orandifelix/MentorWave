import { useState } from "react";
// import {NavLink} from 'react-router-dom'
import Login from "./Login";
import Registration from "./Registration";
import Layout from "../home/Layout";
import Home from "../home/Home";
import "semantic-ui-css/semantic.min.css";
import "./LoginRegistration.css";

const LoginRegistration = () => {
  const [userIsRegistered, setUserIsRegistered] = useState(true);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const handleClick = () => {
    setUserIsRegistered(false);
  };
  //handle login
  const handleLogin = () => {
    setUserIsLoggedIn(true);
  };
  //handle logout
  const handleLogout = () => {
    setUserIsLoggedIn(false);
  };
  const handleRegister = () => {
    setUserIsRegistered(true);
    // setUserIsLoggedIn(true)
  };

  return (
    <div className="main-login">
      {!userIsLoggedIn ? (
        userIsRegistered ? (
          <Login handleLogin={handleLogin} handleClick={handleClick} />
        ) : (
          <Registration
            handleRegister={handleRegister}
            handleClick={handleClick}
          />
        )
      ) : (
        <div>
          <Home handleLogout={handleLogout} />
        </div>
      )}
    </div>
  );
};

export default LoginRegistration;
