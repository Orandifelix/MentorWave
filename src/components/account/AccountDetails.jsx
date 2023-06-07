import React from 'react';
import './account.css';

const AccountDetails = ({ details, avatar }) => {
  return (
    <div className="account-details-container">
      <div className="account-card">
        <h2>Account Details</h2>
        <div className="avatar-container">
          <img className="avatar" src={avatar} alt="Avatar" />
        </div>
        <div className="details-container">
          <p>
            <strong>Username:</strong> {details.userName}
          </p>
          <p>
            <strong>Profession:</strong> {details.profession}
          </p>
          <p>
            <strong>Mentee Bio:</strong> {details.menteeBio}
          </p>
          <p>
            <strong>Mentoring Goal:</strong> {details.menteeGoal}
          </p>
          <p>
            <strong>Mentor Preferences:</strong> {details.mentorPreference}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;