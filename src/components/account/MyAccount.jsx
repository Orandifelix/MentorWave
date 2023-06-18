import React, { useState } from "react";
import "./account.css";
import Swal from "sweetalert2";
import AccountDetails from "./AccountDetails";

const MyAccount = () => {
  const [avatar, setAvatar] = useState(
    "https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
  );
  const [userName, setUserName] = useState("");
  const [profession, setProfession] = useState("");
  const [menteeBio, setMenteeBio] = useState("");
  const [menteeGoal, setMenteeGoal] = useState("");
  const [mentorPreference, setMentorPreference] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handlePhotoUpload = (e) => {
    const uploadedPhoto = e.target.files[0];
    setAvatar(URL.createObjectURL(uploadedPhoto));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      text: "Your account details have been updated successfully",
      title: "Welcome To MentorWave!",
      icon: "success",
      showCloseButton: true,
    });
    setShowDetails(true);
  };

  return (
    <div className="my-account-container">
      {!showDetails?   (
        <>
        <div className="ui raised segment">
        <div className="ui inverted segment" style={{backgroundColor:"#16163F"}}>
            <h2>Join The MentorWave Community</h2>
            <h3>Tell us more about yourself. Kindly fill this form to continue</h3>
          </div>
        
          <form className="ui form"id="account-container" onSubmit={handleSubmit}>
            <div className="custom-account-form">
            <div className="form-group">
              {avatar ? (
                <img className="ui circular image" src={avatar} alt="Avatar" />
              ) : (
                <div></div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="upload-photo">Upload Photo:</label>
              <input
                id="upload-photo"
                className="ui button"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Set Username:</label>
              <input
                id="username"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="profession">Profession:</label>
              <input
                id="profession"
                type="text"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mentee-bio">Mentee Bio:</label>
              <textarea
                id="mentee-bio"
                value={menteeBio}
                onChange={(e) => setMenteeBio(e.target.value)}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="mentee-goal">Mentoring Goal:</label>
              <input
                id="mentee-goal"
                type="text"
                value={menteeGoal}
                onChange={(e) => setMenteeGoal(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mentor-preferences">Mentor preferences:</label>
              <select
                id="mentor-preferences"
                value={mentorPreference}
                onChange={(e) => setMentorPreference(e.target.value)}>
                <option value="">Select a preference</option>
                <option value=" Accounting/Tax services">
                  Accounting/Tax services
                </option>
                <option value="Data Science">Data Science</option>
                <option value=" Computer services/information technology">
                  Computer services/information technology
                </option>
                <option value="Business consulting/coaching">Business consulting/coaching</option>
                <option value="Digital marketing/e-commerce">Digital marketing/e-commerce</option>
              </select>
            </div>
            <br></br>
            <div className="form-group">
              <button className="ui fluid secondary button" type="submit">
                Save Changes
              </button>
            </div>
            </div>
          </form>
          </div>
        </>
      ) : (
        <AccountDetails
          details={{
            userName,
            profession,
            menteeBio,
            menteeGoal,
            mentorPreference,
          }}
          avatar={avatar}
        />
      )}
    </div>
  );
};

export default MyAccount;
