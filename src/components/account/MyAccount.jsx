// import React, { useState } from 'react';
// import './account.css';
// import Swal from 'sweetalert2';
// import AccountDetails from './AccountDetails';

// const MyAccount = () => {
//   const [avatar, setAvatar] = useState("https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=");
//   const [userName, setUserName] = useState('');
//   const [profession, setProfession] = useState('');
//   const [menteeBio, setMenteeBio] = useState('');
//   const [menteeGoal, setMenteeGoal] = useState('');
//   const [mentorPreference, setMentorPreference] = useState('');
//   const [showDetails, setShowDetails] = useState(false);

//   const handlePhotoUpload = (e) => {
//     const uploadedPhoto = e.target.files[0];
//     setPhoto(uploadedPhoto);

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       setAvatar(event.target.result);
//     };
//     reader.readAsDataURL(uploadedPhoto);
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire ({
//       text:"Your account details have been updated successfully",
//       title:"Welcome To MentorWave!",
//       icon:"success",
//       showCloseButton: true
//     });
    
//     // setAvatar('');
//     // setUserName('');
//     // setProfession('');
//     // setMenteeBio('');
//     // setMenteeGoal('');
//     // setMentorPreference('');
//     setShowDetails(true);

//   };

//   return (
//     <div className="my-account-container">
//       <h2>Join The MentorWave Community</h2>
//       <h3>Kindly fill this form to continue</h3>
//       <form className= "ui form"onSubmit={handleSubmit}>
//       <div className="form-group">
//           {avatar ? (
//             <img className="ui circular image"src={avatar} alt="Avatar" />
//           ) : (
//             <div></div>
//           )}
//         </div>
//         <div className="form-group">
//           <label>Upload Photo:</label>
//           <input className="ui button" type="file" accept="image/*" onChange={handlePhotoUpload} />
//         </div>
//         <div className="form-group">
//           <label>Set Username:</label>
//           <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Profession:</label>
//           <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Mentee Bio:</label>
//           <textarea className="ui fluid container" value={menteeBio} onChange={(e) => setMenteeBio(e.target.value)}></textarea>
//         </div>
//         <div className="form-group">
//           <label>Mentoring Goal:</label>
//           <input type="text" value={menteeGoal} onChange={(e) => setMenteeGoal(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Mentor preferences:</label>
//           <input type="text" value={mentorPreference} onChange={(e) => setMentorPreference(e.target.value)} />
//         </div>
//         <div className="form-group">
//         <button className="ui fluid primary button" type="submit">Save Changes</button>
//         </div>
//       </form>
//       {showDetails && (
//         <AccountDetails
//           details={{
//             userName,
//             profession,
//             menteeBio,
//             menteeGoal,
//             mentorPreference
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default MyAccount;


// import React, { useState } from 'react';
// import './account.css';
// import Swal from 'sweetalert2';
// import AccountDetails from './AccountDetails';

// const MyAccount = () => {
//   const [avatar, setAvatar] = useState("https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=");
//   const [userName, setUserName] = useState('');
//   const [profession, setProfession] = useState('');
//   const [menteeBio, setMenteeBio] = useState('');
//   const [menteeGoal, setMenteeGoal] = useState('');
//   const [mentorPreference, setMentorPreference] = useState('');
//   const [showDetails, setShowDetails] = useState(false);

//   const handlePhotoUpload = (e) => {
//     const uploadedPhoto = e.target.files[0];
//     setAvatar(uploadedPhoto);

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       setAvatar(event.target.result);
//     };
//     reader.readAsDataURL(uploadedPhoto);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire ({
//       text:"Your account details have been updated successfully",
//       title:"Welcome To MentorWave!",
//       icon:"success",
//       showCloseButton: true
//     });

//     setShowDetails(true);
//   };

//   return (
//     <div className="my-account-container">
//       <h2>Join The MentorWave Community</h2>
//       <h3>Kindly fill this form to continue</h3>
//       <form className="ui form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           {avatar ? (
//             <img className="ui circular image" src={avatar} alt="Avatar" />
//           ) : (
//             <div></div>
//           )}
//         </div>
//         <div className="form-group">
//           <label>Upload Photo:</label>
//           <input className="ui button" type="file" accept="image/*" onChange={handlePhotoUpload} />
//         </div>
//         <div className="form-group">
//           <label>Set Username:</label>
//           <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Profession:</label>
//           <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Mentee Bio:</label>
//           <textarea className="ui fluid container" value={menteeBio} onChange={(e) => setMenteeBio(e.target.value)}></textarea>
//         </div>
//         <div className="form-group">
//           <label>Mentoring Goal:</label>
//           <input type="text" value={menteeGoal} onChange={(e) => setMenteeGoal(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Mentor preferences:</label>
//           <input type="text" value={mentorPreference} onChange={(e) => setMentorPreference(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <button className="ui fluid primary button" type="submit">Save Changes</button>
//         </div>
//       </form>
//       {showDetails && (
//         <div className="account-details-container">
//           <h2>Account Details</h2>
//           <p>Username: {userName}</p>
//           <p>Profession: {profession}</p>
//           <p>Mentee Bio: {menteeBio}</p>
//           <p>Mentoring Goal: {menteeGoal}</p>
//           <p>Mentor Preferences: {mentorPreference}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyAccount;

// import React, { useState } from 'react';
// import './account.css';
// import Swal from 'sweetalert2';
// import AccountDetails from './AccountDetails';

// const MyAccount = () => {
//   const [avatar, setAvatar] = useState("https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=");
//   const [userName, setUserName] = useState('');
//   const [profession, setProfession] = useState('');
//   const [menteeBio, setMenteeBio] = useState('');
//   const [menteeGoal, setMenteeGoal] = useState('');
//   const [mentorPreference, setMentorPreference] = useState('');
//   const [showDetails, setShowDetails] = useState(false);

//   const handlePhotoUpload = (e) => {
//     const uploadedPhoto = e.target.files[0];
//     setAvatar(uploadedPhoto);

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       setAvatar(event.target.result);
//     };
//     reader.readAsDataURL(uploadedPhoto);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire({
//       text: "Your account details have been updated successfully",
//       title: "Welcome To MentorWave!",
//       icon: "success",
//       showCloseButton: true
//     });

//     setShowDetails(true);
//   };

//   return (
//     <div className="my-account-container">
//       {!showDetails ? (
//         <>
//           <h2>Join The MentorWave Community</h2>
//           <h3>Kindly fill this form to continue</h3>
//           <form className="ui form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               {avatar ? (
//                 <img className="ui circular image" src={avatar} alt="Avatar" />
//               ) : (
//                 <div></div>
//               )}
//             </div>
//             <div className="form-group">
//               <label htmlFor="upload-photo">Upload Photo:</label>
//               <input
//                 id="upload-photo"
//                 className="ui button"
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="username">Set Username:</label>
//               <input
//                 id="username"
//                 type="text"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="profession">Profession:</label>
//               <input
//                 id="profession"
//                 type="text"
//                 value={profession}
//                 onChange={(e) => setProfession(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="mentee-bio">Mentee Bio:</label>
//               <textarea
//                 id="mentee-bio"
//                 className="ui fluid container"
//                 value={menteeBio}
//                 onChange={(e) => setMenteeBio(e.target.value)}
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label htmlFor="mentee-goal">Mentoring Goal:</label>
//               <input
//                 id="mentee-goal"
//                 type="text"
//                 value={menteeGoal}
//                 onChange={(e) => setMenteeGoal(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="mentor-preferences">Mentor preferences:</label>
//               <input
//                 id="mentor-preferences"
//                 type="text"
//                 value={mentorPreference}
//                 onChange={(e) => setMentorPreference(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <button className="ui fluid primary button" type="submit">
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </>
//       ) : (
//         <AccountDetails
//           details={{
//             userName,
//             profession,
//             menteeBio,
//             menteeGoal,
//             mentorPreference
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default MyAccount;

import React, { useState } from 'react';
import './account.css';
import Swal from 'sweetalert2';
import AccountDetails from './AccountDetails';

const MyAccount = () => {
  const [avatar, setAvatar] = useState("https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=");
  const [userName, setUserName] = useState('');
  const [profession, setProfession] = useState('');
  const [menteeBio, setMenteeBio] = useState('');
  const [menteeGoal, setMenteeGoal] = useState('');
  const [mentorPreference, setMentorPreference] = useState('');
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
      showCloseButton: true
    });

    setShowDetails(true);
  };

  return (
    <div className="my-account-container">
      {!showDetails ? (
        <>
          <h2>Join The MentorWave Community</h2>
          <h3>Kindly fill this form to continue</h3>
          <form className="ui form" onSubmit={handleSubmit}>
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
                className="ui fluid container"
                value={menteeBio}
                onChange={(e) => setMenteeBio(e.target.value)}
              ></textarea>
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
                onChange={(e) => setMentorPreference(e.target.value)}
              >
                <option value="">Select a preference</option>
                <option value="software developer">Software Developer</option>
                <option value="finance analyst">Finance Analyst</option>
                <option value="accountant">Accountant</option>
                <option value="advocate">Advocate</option>
              </select>
            </div>
            <div className="form-group">
              <button className="ui fluid primary button" type="submit">
                Save Changes
              </button>
            </div>
          </form>
        </>
      ) : (
        <AccountDetails
          details={{
            userName,
            profession,
            menteeBio,
            menteeGoal,
            mentorPreference
          }}
          avatar={avatar}
        />
      )}
    </div>
  );
};

export default MyAccount;