
import NavBar from "./components/home/NavBar";
import Footer from "./components/home/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Mentors from "./components/mentorspage/Mentors";
import { useState } from "react";
import LoginRegistration from "./components/login/LoginRegistration";
import Home from "./components/home/Home";
import About from "./components/about/About";
import MyAccount from "./components/account/MyAccount";

function App() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setLogin(!login);
    navigate("/login");
  };
  const handleLoginForm = () => {
    setLogin(!login);
    navigate("/");
  };
  if (login) {
    return <LoginRegistration handleLoginForm={handleLoginForm}/>;
  }
  return (

    <>
      <NavBar handleClick={handleLoginClick} />
      <Routes>
        <Route path="/" element={<Home handleClick={handleLoginClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentors" element={<Mentors handleLoginClick={handleLoginClick} />} />
        <Route path="/account" element={<MyAccount />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
