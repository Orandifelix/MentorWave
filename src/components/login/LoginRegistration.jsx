import {useState} from 'react'
import Login from './Login'
import Registration from './Registration'
import 'semantic-ui-css/semantic.min.css';
import './LoginRegistration.css'

const LoginRegistration = ({handleLoginForm}) => {


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
    <section className='ui raised segment'>
    <div className='ui inverted teal segment'>
    <div className='ui container' style={{marginBottom:"25%"}}>
      {!userIsLoggedIn ? (
        userIsRegistered ? (
          <Login handleLogin={handleLoginForm} handleClick={handleClick}/>
        ) : (
          <Registration handleRegister={handleRegister}handleLogin={handleLoginForm} handleClick={handleClick}/>
        )
      ):(
        <div>
          <h1>Welcome</h1>
          <button onClick={handleLogout}>LOG OUT</button>
        </div>
      )}

    </div>
    </div>
    </section>
  )
}

export default LoginRegistration