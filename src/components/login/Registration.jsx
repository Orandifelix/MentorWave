import  { useState } from "react";
// eslint-disable-next-line react/prop-types
function Registration({handleRegister}) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreedToTerms: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(userData);
  };

  //handle checkbox change
  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      agreedToTerms: checked,
    }));
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister()
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      agreedToTerms: false,
    })
  }
  return (
    <div className="ui segment ">
      <div className="ui two column very relaxed grid">
        <div className="column">
          <form className="ui form" onSubmit={handleSubmit}>
            <h3>Register Here</h3>
            <div className="two fields">
              <div className="twelve wide field">
                <label>First Name</label>
                <input type="text" name="firstName" value={userData.firstName} onChange={handleChange}/>
              </div>
              <div className="twelve wide field">
                <label>Last Name</label>
                <input type="text" name="lastName" value={userData.lastName} onChange={handleChange}/>
              </div>
            </div>
            <div className="ten wide field">
              <label>Email</label>
              <input type="email" name="email" value={userData.email} onChange={handleChange}/>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange}/>
              </div>
              <div className="field">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange}/>
              </div>
            </div>
            <div className="four wide field">
              <select name="role" value={userData.role} onChange={handleChange}>
                <option value="">Role</option>
                <option value="1">Mentee</option>
                <option value="0">Mentor</option>
              </select>
            </div>
            <div className="ui checkbox">
              <input type="checkbox" tabindex="0"  value={userData.agreedToTerms} onChange={handleCheckboxChange}/>
              <label>I agree to the terms and conditions</label>
            </div>
            <div className="field">
              <button className="ui primary button">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;

