
import NavBar from "./components/home/NavBar";
import Layout from "./components/home/Layout";
import Footer from "./components/home/Footer";
import { Route, Routes } from "react-router-dom";
import Mentors from "./components/mentorspage/Mentors";
// import Login from "./components/login/Login";
import { useState } from "react";
import LoginRegistration from "./components/login/LoginRegistration";
// import About from "./components/about/About";
// import UserProfile from "./components/account/Account";


function App() {
const [login, setLogin]= useState("false");

if(login==="true"){
  return <LoginRegistration />;
}
  
  return (
    <>
      <NavBar handleClick={()=>setLogin("true")}  />
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/mentors" element={<Mentors />} />
        {/* <Route path="/login" element={<Login/>} /> */}
        {/* <Route path="/account" element={<UserProfile />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
