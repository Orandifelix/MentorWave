import {useState} from 'react'
import Login from './Login'
import Registration from './Registration'
import 'semantic-ui-css/semantic.min.css';
import './LoginRegistration.css'

const LoginRegistration = () => {


  const [userIsRegistered, setUserIsRegistered] = useState(true)
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

  const handleClick = () => {
    setUserIsRegistered(false)
  }
  //handle login
  const handleLogin = () => {
    setUserIsLoggedIn(true)
  }
  //handle logout
  const handleLogout =() =>{
    setUserIsLoggedIn(false)
  }
  const handleRegister =()=>{
    setUserIsRegistered(true)
  }


  return (
    <div>
      {!userIsLoggedIn ? (
        userIsRegistered ? (
          <Login handleLogin={handleLogin} handleClick={handleClick}/>
        ) : (
          <Registration handleRegister={handleRegister} handleClick={handleClick}/>
        )
      ):(
        <div>
          <h1>Welcome</h1>
          <button onClick={handleLogout}>LOG OUT</button>
        </div>
      )}

    </div>
  )
}

export default LoginRegistration