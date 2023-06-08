import React from 'react';

const AccountDetails = ({ details, avatar }) => {
  return ( 
      <div className="ui segment">
        <h2>Account Details</h2>
          <img className="avatar" src={avatar} alt="Avatar" />
            <h4> userName: {details.userName}</h4>
            <h4>Profession: {details.profession}</h4>
            <h3>My Bio</h3>
            <p>{details.menteeBio}</p>
            <h4> Mentor Goal: {details.mentorGoal}</h4>
            <h4> Preference: {details.mentorPreference}</h4>
      </div>
  );
};

export default AccountDetails;