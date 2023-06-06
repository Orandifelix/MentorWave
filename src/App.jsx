import "./App.css";
import Layout from "./components/home/Layout";

  return (
<<<<<<< HEAD
    <div className="App">
      <h1 className="ui centered header">Hello from MentorWave</h1>
      {/* <Mentors/> */}
      {loggedIn ? (
        <div>
          <h1>Welcome {user.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login handleLogin={handleLogin} handleRegistration={handleRegistration} />
        </div>
      )}
=======
    <div>
      <Layout />
>>>>>>> c1671ad0df0c56ccec944ad36a897c44e94da2ff
    </div>
  );
}

export default App;
