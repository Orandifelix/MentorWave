
// import React, { useState, useEffect } from 'react';

// function MyAccount() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user data from backend or authentication service
//     // Update the "user" state with the retrieved data
//     const fetchUserDetails = async () => {
//       try {
//         const response = await fetch('/api/user'); // Replace with your API endpoint
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   return (
//     <div className="profile-section">
//       <h2>My Profile</h2>
//       {user ? (
//         <div>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           {/* Additional user details */}
//         </div>
//       ) : (
//         <p>Loading user details...</p>
//       )}
//     </div>
//   );
// }

// export default MyAccount;



// import React, { useState } from 'react';

// function MyAccount() {
//   // State variables for user profile information
//   const [name, setName] = useState('');
//   const [profilePicture, setProfilePicture] = useState('');
//   const [bio, setBio] = useState('');
//   const [areasOfInterest, setAreasOfInterest] = useState('');
//   const [contactInfo, setContactInfo] = useState('');

//   // State variables for mentor/mentee preferences
//   const [communicationMethods, setCommunicationMethods] = useState([]);
//   const [availability, setAvailability] = useState('');
//   const [mentoringGoals, setMentoringGoals] = useState('');

//   // State variables for meeting scheduling
//   const [meetingDate, setMeetingDate] = useState('');
//   const [meetingTime, setMeetingTime] = useState('');

//   // Handle form submission for profile information
//   const handleProfileSubmit = (e) => {
//     e.preventDefault();
//     // Process and update user profile information in backend
//     // Use the state variables to send updated data
//     // ...
//     console.log('Profile information saved:', {
//       name,
//       profilePicture,
//       bio,
//       areasOfInterest,
//       contactInfo
//     });
//   };

//   // Handle form submission for mentor/mentee preferences
//   const handlePreferencesSubmit = (e) => {
//     e.preventDefault();
//     // Process and update mentor/mentee preferences in backend
//     // Use the state variables to send updated data
//     // ...
//     console.log('Preferences saved:', {
//       communicationMethods,
//       availability,
//       mentoringGoals
//     });
//   };

//   // Handle meeting scheduling
//   const handleMeetingSchedule = (e) => {
//     e.preventDefault();
//     // Process and handle meeting scheduling logic
//     // Use the state variables for meeting date and time
//     // ...
//     console.log('Meeting scheduled:', {
//       meetingDate,
//       meetingTime
//     });
//   };

//   return (
//     <div>
//       <h2>My Account</h2>

//       {/* Profile Information Section */}
//       <section>
//         <h3>Profile Information</h3>
//         <form onSubmit={handleProfileSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           {/* <div>
//             <label htmlFor="profilePicture">Profile Picture:</label>
//             <input
//               type="text"
//               id="profilePicture"
//               value={profilePicture}
//               onChange={(e) => setProfilePicture(e.target.value)}
//             />
//           </div> */}
//           <div>
//             <label htmlFor="bio">Bio:</label>
//             <textarea
//               id="bio"
//               value={bio}
//               onChange={(e) => setBio(e.target.value)}
//             ></textarea>
//           </div>
//           <div>
//             <label htmlFor="areasOfInterest">Areas of Interest:</label>
//             <input
//               type="text"
//               id="areasOfInterest"
//               value={areasOfInterest}
//               onChange={(e) => setAreasOfInterest(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="contactInfo">Contact Information:</label>
//             <input
//               type="text"
//               id="contactInfo"
//               value={contactInfo}
//               onChange={(e) => setContactInfo(e.target.value)}
//             />
//           </div>
//           <button type="submit">Save Changes</button>
//         </form>
//       </section>

//       {/* Mentor/Mentee Preferences Section */}
//       <section>
//         <h3>Mentor/Mentee Preferences</h3>
//         <form onSubmit={handlePreferencesSubmit}>
//           <div>
//             <label htmlFor="communicationMethods">Communication Methods:</label>
//             <input
//               type="text"
//               id="communicationMethods"
//               value={communicationMethods}
//               onChange={(e) => setCommunicationMethods(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="availability">Availability:</label>
//             <input
//               type="text"
//               id="availability"
//               value={availability}
//               onChange={(e) => setAvailability(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="mentoringGoals">Mentoring Goals:</label>
//             <input
//               type="text"
//               id="mentoringGoals"
//               value={mentoringGoals}
//               onChange={(e) => setMentoringGoals(e.target.value)}
//             />
//           </div>
//           <button type="submit">Save Preferences</button>
//         </form>
//       </section>

//       {/* Meeting Scheduling Section */}
//       <section>
//         <h3>Meeting Scheduling</h3>
//         <form onSubmit={handleMeetingSchedule}>
//           <div>
//             <label htmlFor="meetingDate">Meeting Date:</label>
//             <input
//               type="text"
//               id="meetingDate"
//               value={meetingDate}
//               onChange={(e) => setMeetingDate(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="meetingTime">Meeting Time:</label>
//             <input
//               type="text"
//               id="meetingTime"
//               value={meetingTime}
//               onChange={(e) => setMeetingTime(e.target.value)}
//             />
//           </div>
//           <button type="submit">Schedule Meeting</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default MyAccount;

// import React, { useState, useEffect } from 'react';

// function MyAccount() {
//   // State variables for user profile information
//   const [name, setName] = useState('');
//   const [profilePicture, setProfilePicture] = useState('');
//   const [bio, setBio] = useState('');
//   const [areasOfInterest, setAreasOfInterest] = useState('');
//   const [contactInfo, setContactInfo] = useState('');

//   useEffect(() => {
//     // Fetch user data from the backend and update the state variables
//     fetchUserData();
//   }, []);

//   const fetchUserData = () => {
//     // Replace this with your own API endpoint for fetching user data
//     fetch('/api/user')
//       .then(response => response.json())
//       .then(data => {
//         // Update the state variables with the fetched user data
//         setName(data.name);
//         setProfilePicture(data.profilePicture);
//         setBio(data.bio);
//         setAreasOfInterest(data.areasOfInterest);
//         setContactInfo(data.contactInfo);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   };

//   // Rest of the code (form submissions and JSX) remains the same
//   // ...

//   return (
//     <div>
//       <h2>My Account</h2>

//       {/* Display user profile information */}
//       <section>
//         <h3>Profile Information</h3>
//         <div>
//           <label>Name:</label>
//           <span>{name}</span>
//         </div>
//         <div>
//           <label>Profile Picture:</label>
//           {profilePicture ? (
//             <img src={profilePicture} alt="Profile" />
//           ) : (
//             <span>No profile picture</span>
//           )}
//         </div>
//         <div>
//           <label>Bio:</label>
//           <span>{bio}</span>
//         </div>
//         <div>
//           <label>Areas of Interest:</label>
//           <span>{areasOfInterest}</span>
//         </div>
//         <div>
//           <label>Contact Information:</label>
//           <span>{contactInfo}</span>
//         </div>
//       </section>

//       {/* Rest of the code */}
//       {/* ... */}
//     </div>
//   );
// }

// export default MyAccount;
import React, { useState } from 'react';

function ProfileInformation({ userProfile }) {
  const [name, setName] = useState(userProfile.name);
  const [profilePicture, setProfilePicture] = useState("https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=");
  const [bio, setBio] = useState(userProfile.bio);

  const [contactInfo, setContactInfo] = useState(userProfile.contactInfo);

  const handleSaveChanges = () => {
   
  };

  return (
  <div>
      <form>
        <div>
          <label></label>
          <img src={profilePicture} alt="Avatar" />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Bio:</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
        </div>
        <div>
          <label>Contact Info:</label>
          <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
        </div>
        <button type="button" onClick={handleSaveChanges}>Save Changes</button>
      </form>
    </div>
  );
}

function MentorMenteePreferences({ userProfile }) {
  const [communicationMethods, setCommunicationMethods] = useState(userProfile.communicationMethods);

  const handleSavePreferences = () => {
    
  };

  return (
    <div>
      <h3>Communication Preferences</h3>
      <form>
        <input type="text" value={communicationMethods} onChange={(e) => setCommunicationMethods(e.target.value)} />
        <button type="button" onClick={handleSavePreferences}>Save Preferences</button>
      </form>
    </div>
  );
}

function MeetingScheduling({ userProfile }) {
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  const handleScheduleMeeting = () => {
    
  };
  return (
    <div>
      <h3>Schedule Meeting</h3>
      <form>
        <input type="date" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} />
        <input type="time" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} />
        <button type="button" onClick={handleScheduleMeeting}>Schedule Meeting</button>
      </form>
    </div>
  );
}

function UserProfile() {

  const userProfile = {
    name: 'John Doe',
    profilePicture: 'profile.jpg',
    bio: 'I am a software developer',
    areasOfInterest: 'Web development, AI',
    contactInfo: 'john.doe@example.com',
    communicationMethods: 'Email, Chat',
    availability: 'Flexible',
    mentoringGoals: 'Gain industry insights',
  };

  return (
    <div>
      <h2>My Account</h2>
      <ProfileInformation userProfile={userProfile} />
      <MentorMenteePreferences userProfile={userProfile} />
      <MeetingScheduling userProfile={userProfile} />
    </div>
  );
}

export default UserProfile;