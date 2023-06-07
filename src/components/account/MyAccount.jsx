// import React, { useState } from 'react';
// import './account.css';

// function ProfileInformation({ userProfile }) {
//   const [name, setName] = useState(userProfile.name);
//   const [profilePicture, setProfilePicture] = useState("https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=");
//   const [bio, setBio] = useState(userProfile.bio);

//   const [contactInfo, setContactInfo] = useState(userProfile.contactInfo);

//   const handleSaveChanges = () => {
   
//   };

//   return (
//   <div>
//       <form>
//         <div>
//           <label></label>
//           <img src={profilePicture} alt="Avatar" />
//         </div>
//         <div>
//           <label>Change Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Bio:</label>
//           <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
//         </div>
//         <div>
//           <label>Contact Info:</label>
//           <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
//         </div>
//         <button type="button" onClick={handleSaveChanges}>Save Changes</button>
//       </form>
//     </div>
//   );
// }

// function MenteePreferences({ userProfile }) {
//   const [communicationMethods, setCommunicationMethods] = useState(userProfile.communicationMethods);

//   const handleSavePreferences = () => {
    
//   };

//   return (
//     <div>
//       <h3>Communication Preferences</h3>
//       <form>
//         <input type="text" value={communicationMethods} onChange={(e) => setCommunicationMethods(e.target.value)} />
//         <button type="button" onClick={handleSavePreferences}>Save Preferences</button>
//       </form>
//     </div>
//   );
// }

// function MeetingScheduling({ userProfile }) {
//   const [meetingDate, setMeetingDate] = useState('');
//   const [meetingTime, setMeetingTime] = useState('');

//   const handleScheduleMeeting = () => {
    
//   };
//   return (
//     <div>
//       <h3>Schedule Meeting</h3>
//       <form>
//         <input type="date" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} />
//         <input type="time" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} />
//         <button type="button" onClick={handleScheduleMeeting}>Schedule Meeting</button>
//       </form>
//     </div>
//   );
// }

// function MyAccount() {

//   const userProfile = {
//     name: '',
//     profilePicture: '',
//     bio: '',
//     contactInfo: '',
//     communicationMethods: '',
//     mentoringGoals: '',
//   };

//   return (
//     <div>
//       <h2>My Account</h2>
//       <ProfileInformation userProfile={userProfile} />
//       <MenteePreferences userProfile={userProfile} />
//       <MeetingScheduling userProfile={userProfile} />
//     </div>
//   );
// }

// export default MyAccount;





// import React, { useState } from 'react';
// import './account.css';

// function ProfileInformation({ userProfile }) {
//   const [name, setName] = useState(userProfile.name);
//   const [profilePicture, setProfilePicture] = useState("https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=");
//   const [bio, setBio] = useState(userProfile.bio);
//   const [contactInfo, setContactInfo] = useState(userProfile.contactInfo);

//   const [showDetails, setShowDetails] = useState(false);

//   const handleSaveChanges = () => {
   
//   };

//   const handleToggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div>
//       <div className="profile-header" onClick={handleToggleDetails}>
//         <img src={profilePicture} alt="Avatar" />
//         <h3>{name}</h3>
//       </div>
//       {showDetails && (
//         <form>
//           <div>
//             <label>Change Name:</label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div>
//             <label>Bio:</label>
//             <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
//           </div>
//           <div>
//             <label>Contact Info:</label>
//             <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
//           </div>
//           <button type="button" onClick={handleSaveChanges}>Save Changes</button>
//         </form>
//       )}
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import './account.css';

// function ProfileInformation({ userProfile }) {
//   const [name, setName] = useState(userProfile.name);
//   const [profilePicture, setProfilePicture] = useState("https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=");
//   const [bio, setBio] = useState(userProfile.bio);
//   const [contactInfo, setContactInfo] = useState(userProfile.contactInfo);
//   const [email, setEmail] = useState(userProfile.email);
//   const [password, setPassword] = useState(userProfile.password);

//   const [showDetails, setShowDetails] = useState(false);

//   const handleSaveChanges = () => {
//     // Save changes logic
//   };

//   const handleToggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div>
//       <div className="profile-header" onClick={handleToggleDetails}>
//         <img src={profilePicture} alt="Avatar" />
//         <h3>{name}</h3>
//       </div>
//       {showDetails && (
//         <form>
//           <div>
//             <label>Change Name:</label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div>
//             <label>Bio:</label>
//             <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
//           </div>
//           <div>
//             <label>Contact Info:</label>
//             <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           <button type="button" onClick={handleSaveChanges}>Save Changes</button>
//         </form>
//       )}
//     </div>
//   );
// }




// function MenteePreferences({ userProfile }) {
//   const [communicationMethods, setCommunicationMethods] = useState(userProfile.communicationMethods);

//   const handleSavePreferences = () => {
//     // Save preferences logic
//   };

//   return (
//     <div>
//       <h3>Communication Preferences</h3>
//       <form>
//         <input type="text" value={communicationMethods} onChange={(e) => setCommunicationMethods(e.target.value)} />
//         <button type="button" onClick={handleSavePreferences}>Save Preferences</button>
//       </form>
//     </div>
//   );
// }

// function MeetingScheduling({ userProfile }) {
//   const [meetingDate, setMeetingDate] = useState('');
//   const [meetingTime, setMeetingTime] = useState('');

//   const handleScheduleMeeting = () => {
//     // Schedule meeting logic
//   };

//   return (
//     <div>
//       <h3>Schedule Meeting</h3>
//       <form>
//         <input type="date" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} />
//         <input type="time" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} />
//         <button type="button" onClick={handleScheduleMeeting}>Schedule Meeting</button>
//       </form>
//     </div>
//   );
// }

// function MyAccount() {

//   const userProfile = {
//     name: '',
//     profilePicture: '',
//     bio: '',
//     contactInfo: '',
//     communicationMethods: '',
//     mentoringGoals: '',
//   };

//   return (
//     <div>
//       <h2>My Account</h2>
//       <ProfileInformation userProfile={userProfile} />
//       <MenteePreferences userProfile={userProfile} />
//       <MeetingScheduling userProfile={userProfile} />
//     </div>
//   );
// }

// export default MyAccount;



import React, { useState } from 'react';
import './account.css';
import Swal from 'sweetalert2';


const MyAccount = () => {
  const [avatar, setAvatar] = useState("https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=");
  const [photo, setPhoto] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [menteeBio, setMenteeBio] = useState('');
  const [menteeGoal, setMenteeGoal] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handlePhotoUpload = (e) => {
    const uploadedPhoto = e.target.files[0];
    setPhoto(uploadedPhoto);

    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatar(event.target.result);
    };
    reader.readAsDataURL(uploadedPhoto);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire ({
      text:"Your account details have been updated successfully",
      title:"Welcome To MentorWave!",
      icon:"success",
      showCloseButton: true
    });
    
    setAvatar('');
    setPhoto(null);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMenteeBio('');
    setMenteeGoal('');
    setContactNumber('');
  };

  return (
    <div className="my-account-container">
      <h2>Join The MentorWave Community</h2>
      <h3>Kindly fill this form to continue</h3>
      <form className= "ui form"onSubmit={handleSubmit}>
      <div className="form-group">
          {avatar ? (
            <img className="ui circular image"src={avatar} alt="Avatar" />
          ) : (
            <div></div>
          )}
        </div>
        <div className="form-group">
          <label>Upload Photo:</label>
          <input className="ui button" type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>
        <div className="form-group">
          <label>Set Username:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Profession:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Mentee Bio:</label>
          <textarea className="ui fluid container" value={menteeBio} onChange={(e) => setMenteeBio(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label>Mentoring Goal:</label>
          <input type="text" value={menteeGoal} onChange={(e) => setMenteeGoal(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Mentor preferences:</label>
          <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        </div>
        <div className="form-group">
        <button className="ui fluid primary button" type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default MyAccount;