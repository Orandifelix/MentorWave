// import React from 'react';
// import './details.css';

// const AccountDetails = ({ details, avatar }) => {
//   return (
//     <div className="account-details-container">
//       <div className="account-card">
//         <h2>Account Details</h2>
//         <div className="avatar-container">
//           <img className="avatar" src={avatar} alt="Avatar" />
//         </div>
//         <div className="details-container">
//           <p>
//             <strong>Username:</strong> {details.userName}
//           </p>
//           <p>
//             <strong>Profession:</strong> {details.profession}
//           </p>
//           <p>
//             <strong>Mentee Bio:</strong> {details.menteeBio}
//           </p>
//           <p>
//             <strong>Mentoring Goal:</strong> {details.menteeGoal}
//           </p>
//           <p>
//             <strong>Mentor Preferences:</strong> {details.mentorPreference}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountDetails;

// import React from 'react';
// import './details.css';

// const AccountDetails = ({ details, avatar }) => {
//   return (
//     <div className="account-details-container">
//       <div className="account-card">
//         <h2>Account Details</h2>
//         <div className="avatar-container">
//           <img className="avatar" src={avatar} alt="Avatar" />
//         </div>
//         <div className="details-container">
//           <p>{details.userName}</p>
//           <p>{details.profession}</p>
//           <p>{details.menteeBio}</p>
//           <p>{details.menteeGoal}</p>
//           <p>{details.mentorPreference}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountDetails;



import React from 'react';

const AccountDetails = ({ details, avatar }) => {
  return (
    <div className="account-details-container">
      <div className="ui form">
        <h2>Account Details</h2>
        <div className="avatar-container">
          <img className="avatar" src={avatar} alt="Avatar" />
        </div>
        <form className="details-container">
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={details.userName} readOnly />
          </div>
          <div className="form-group">
            <label>Profession:</label>
            <input type="text" value={details.profession} readOnly />
          </div>
          <div className="form-group">
            <label>Mentee Bio:</label>
            <textarea value={details.menteeBio} readOnly />
          </div>
          <div className="form-group">
            <label>Mentoring Goal:</label>
            <input type="text" value={details.menteeGoal} readOnly />
          </div>
          <div className="form-group">
            <label>Mentor Preferences:</label>
            <input type="text" value={details.mentorPreference} readOnly />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;