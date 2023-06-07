import "./App.css";
import NavBar from "./components/home/NavBar";
import Layout from "./components/home/Layout";
import Footer from "./components/home/Footer";
import { Route, Routes } from "react-router-dom";
import Mentors from "./components/mentorspage/Mentors";
// import Login from "./components/login/Login";
// import About from "./components/about/About";
// import UserProfile from "./components/account/Account";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/mentors" element={<Mentors />} />
        {/* <Route path="/account" element={<UserProfile />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </>
  );
  }
export default App;
