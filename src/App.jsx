import "./App.css";
import react, { useState } from "react";
// import Mentors from "./components/mentorspage/Mentors";
import Login from "./Components/LoginSection/Login";
import Registration from "./Components/LoginSection/Registration";
// import userdata from "./data/user"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  //function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
  };

  //function to handle login
  const handleLogin = (user) => {
    setLoggedIn(true);
    setUser(user);
  };

  //function to handle registration
  const handleRegistration = (user) => {
    setLoggedIn(true);
    setUser(user);
  };

  return (
    <div className="App">
      <h1 className="ui centered header">Hello from MentorWave</h1>
      {/* <Mentors/> */}
      {loggedIn ? (
        <div>
          <h1>Welcome {user.username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login handleLogin={handleLogin} />
          <Registration handleRegistration={handleRegistration} />
        </div>
      )}
    </div>
  );
}

export default App;
