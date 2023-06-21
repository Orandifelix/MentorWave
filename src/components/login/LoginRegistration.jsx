import { useState, useContext } from "react";
import { AppContext } from "../../context/Context";
import Login from "./Login";
import Registration from "./Registration";
import Home from "../home/Home";
import "semantic-ui-css/semantic.min.css";

const LoginRegistration = ({ handleLoginForm }) => {
  const [userIsRegistered, setUserIsRegistered] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setUserIsRegistered(false);
  };
  function handleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <div>
      {!isLoggedIn ? (
        userIsRegistered ? (
          <Login
            handleLogin={handleLoginForm}
            handleClick={handleClick}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        ) : (
          <Registration
            handleRegister={() => setUserIsRegistered(true)}
            handleClick={handleClick}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
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
