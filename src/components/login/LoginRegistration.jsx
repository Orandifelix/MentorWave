import { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import Home from "../home/Home";
import "semantic-ui-css/semantic.min.css";


const LoginRegistration = ({handleLoginForm}) => {

  const [userIsRegistered, setUserIsRegistered] = useState(true)
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setUserIsRegistered(false);
  };

  //handle logout
  const handleLogout = () => {
    setUserIsLoggedIn(false);
  };

  return (
    
    <div>
      {!userIsLoggedIn ? (
        userIsRegistered ? (
          <Login handleLogin={handleLoginForm} handleClick={handleClick} showPassword={showPassword} setShowPassword={setShowPassword}/>
        ) : (
          <Registration handleRegister={()=>setUserIsRegistered(true)} handleClick={handleClick} showPassword={showPassword} setShowPassword={setShowPassword}/>
        )
      ) : (
        <div>
          <Home handleLogout={handleLogout} />
        </div>
      )}
    </div>
  
  )
}

export default LoginRegistration;