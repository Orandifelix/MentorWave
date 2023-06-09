import { useState } from "react";
// import {NavLink} from 'react-router-dom'
import Login from "./Login";
import Registration from "./Registration";
import Home from "../home/Home";
import "semantic-ui-css/semantic.min.css";
import "./LoginRegistration.css";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const LoginRegistration = ({handleLoginForm}) => {


  const [userIsRegistered, setUserIsRegistered] = useState(true)
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreedToTerms: false,
  });

  const handleClick = () => {
    setUserIsRegistered(false);
  };
  //handle login
  const handleLogin = () => {
    //logic to authenticate user
    if (userData.password === userData.confirmPassword) {
      setUserIsLoggedIn(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match",
      });
    }
  };
  //handle logout
  const handleLogout = () => {
    setUserIsLoggedIn(false);
  };
  const handleRegister = () => {
    if(userData.password ===userData.confirmPassword) {
      Swal({
        icon: "success",
        title: "Registration Successful",
        text: "Please login to continue",
      })
      setUserIsRegistered(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match, please try again",
      });
    }
  };

  return (
    <section className='ui raised segment'>
    <div className='ui inverted teal segment'>
    <div className='ui container' style={{marginBottom:"25%"}}>
      {!userIsLoggedIn ? (
        userIsRegistered ? (
          <Login handleLogin={handleLoginForm} handleClick={handleClick}/>
        ) : (
          <Registration handleRegister={handleRegister}handleLogin={handleLoginForm} handleClick={handleClick} userData={userData} setUserData={setUserData}/>
        )
      ) : (
        <div>
          <Home handleLogout={handleLogout} />
        </div>
      )}
    </div>
    </div>
    </section>
  )
}

export default LoginRegistration;