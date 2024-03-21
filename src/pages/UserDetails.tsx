// import React, { useState, useEffect } from 'react';
// import Navbar from './NavBar';
// import { API_ENDPOINT } from '../config/constants';
// import { Link } from 'react-router-dom';

// const UserDetails: React.FC = () => {
//   const [authToken, setAuthToken] = useState<string | null>(null);
//   const [userPreferences, setUserPreferences] = useState<{ selectedTeams: string[], selectedSports: string[] } | null>(null);
//   const [showChangePasswordModal, setShowChangePasswordModal] = useState<boolean>(false);
//   const [currentPassword, setCurrentPassword] = useState<string>('');
//   const [newPassword, setNewPassword] = useState<string>('');
//   const [preferencesStored, setPreferencesStored] = useState<unknown>([]);

//   // Get user data from localStorage
//   const userDataString = localStorage.getItem('userData');
//   if (!userDataString) {
//     return (
//       <div className="flex items-center justify-center text-red-500 mt-5 font-semibold">
//         <div>User data not found</div> <br/>
//         <div><Link to="/home" className="bg-blue-500 p-1 px-3 m-2 text-white text-lg font-semibold rounded">Go back Home</Link></div>
//       </div>
//     )
//   }

//   // Parse user data from localStorage
//   const userData = JSON.parse(userDataString);
//   setPreferencesStored(userData.preferences);

//   // Update authToken if user is logged in
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       setAuthToken(token);
//     }
//   }, []);

//   // Function to retrieve preferences from localStorage
  
//   // Initial retrieval of preferences
//   useEffect(() => {
//     const retrievePreferences = () => {
//       const preferencesString = localStorage.getItem('userData');
//       if (preferencesString) {
//         const userData = JSON.parse(preferencesString);
//         setUserPreferences(userData.preferences);
//       }
//     };
//     retrievePreferences();
//   }, [preferencesStored]);

//   const handleChangePassword = async () => {
//     try {
//       const response = await fetch(`${API_ENDPOINT}/user/password`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${authToken}`,
//         },
//         body: JSON.stringify({
//           current_password: currentPassword,
//           new_password: newPassword,
//         }),
//       });
//       if (response.ok) {
//         // Password successfully updated, you may want to handle this
//         console.log('Password updated successfully');
//         setShowChangePasswordModal(false);
//       } else {
//         // Handle error cases
//         console.error('Error updating password');
//       }
//     } catch (error) {
//       console.error('Error updating password:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg">
//         <h2 className="text-2xl font-bold mb-4">User Details<hr className='m-2'/></h2>
//         <p className="mb-2"><strong>Name:</strong> {userData.name}</p>
//         <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
//         <h3 className="text-lg font-bold mb-2">Preferences:</h3>
//         {userPreferences && (
//           <>
//             {userPreferences.selectedTeams.length > 0 || userPreferences.selectedSports.length > 0 ? (
//               <>
//                 <p className="mb-2"><strong>Selected Teams:</strong> {userPreferences.selectedTeams.join(', ')}</p>
//                 <p className="mb-2"><strong>Selected Sports:</strong> {userPreferences.selectedSports.join(', ')}</p>
//               </>
//             ) : (
//               <p>No Preferences selected</p>
//             )}
//           </>
//         )}
//         <button onClick={() => setShowChangePasswordModal(true)} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 focus:outline-none">Change Password</button>
//       </div>

//       {/* Change Password Modal */}
//       {showChangePasswordModal && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-md">
//             <h2 className="text-2xl font-bold mb-4">Change Password</h2>
//             <div className="mb-4">
//               <label htmlFor="currentPassword" className="block mb-2 font-semibold">Current Password</label>
//               <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="newPassword" className="block mb-2 font-semibold">New Password</label>
//               <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
//             </div>
//             <div className="flex justify-end">
//               <button onClick={() => setShowChangePasswordModal(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 focus:outline-none">Cancel</button>
//               <button onClick={handleChangePassword} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UserDetails;


import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import { API_ENDPOINT } from '../config/constants';
import useUserPreferences from './Preferences/useUserPreferences';

const UserDetails: React.FC = () => {
  const authToken = localStorage.getItem("authToken");
  const [showChangePasswordModal, setShowChangePasswordModal] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const userPreferences = useUserPreferences(authToken);
  // const [preferencesStored, setPreferencesStored] = useState<any>(useUserPreferences(authToken));

  const userDataString = localStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;
  // setPreferencesStored(userData.preferences);

  const handleChangePassword = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}/user/password`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword,
        }),
      });
      if (response.ok) {
        // Password successfully updated, you may want to handle this
        console.log('Password updated successfully');
        setShowChangePasswordModal(false);
      } else {
        // Handle error cases
        console.error('Error updating password');
      }
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">User Details<hr className='m-2'/></h2>
        <p className="mb-2"><strong>Name:</strong> {userData.name}</p>
        <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
        <h3 className="text-lg font-bold mb-2">Preferences:</h3>
        {userPreferences && (
          <>
            {userPreferences.selectedTeams.length > 0 || userPreferences.selectedSports.length > 0 ? (
              <>
                <p className="mb-2"><strong>Selected Sports:</strong> {userPreferences.selectedSports.join(', ')}</p>
                <p className="mb-2"><strong>Selected Teams:</strong> {userPreferences.selectedTeams.join(', ')}</p>
              </>
            ) : (
              <p>No Preferences selected</p>
            )}
          </>
        )}
        <button onClick={() => setShowChangePasswordModal(true)} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 focus:outline-none">Change Password</button>
      </div>

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <div className="mb-4">
              <label htmlFor="currentPassword" className="block mb-2 font-semibold">Current Password</label>
              <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block mb-2 font-semibold">New Password</label>
              <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            </div>
            <div className="flex justify-end">
              <button onClick={() => setShowChangePasswordModal(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 focus:outline-none">Cancel</button>
              <button onClick={handleChangePassword} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;




// import React, { useState, useEffect } from 'react';
// import Navbar from './NavBar';
// import { API_ENDPOINT } from '../config/constants';
// import { Link } from 'react-router-dom';
// import useUserPreferences from './Preferences/useUserPreferences';

// const UserDetails: React.FC = () => {
//   const authToken = localStorage.getItem("authToken");
//   const [showChangePasswordModal, setShowChangePasswordModal] = useState<boolean>(false);
//   const [currentPassword, setCurrentPassword] = useState<string>('');
//   const [newPassword, setNewPassword] = useState<string>('');
//   const userPreferences = useUserPreferences(authToken);
//   // const [preferencesStored, setPreferencesStored] = useState<any>(useUserPreferences(authToken));

//   const userDataString = localStorage.getItem('userData');
//   const userData = userDataString ? JSON.parse(userDataString) : null;
//   // setPreferencesStored(userData.preferences);

//   // // Function to retrieve preferences from localStorage
//   // const retrievePreferences = () => {
//   //   const preferencesString = localStorage.getItem('userData');
//   //   if (preferencesString) {
//   //     const userData = JSON.parse(preferencesString);
//   //     console.log("userData.preferences", userData.preferences);
//   //     console.log("preferencesStored", preferencesStored)
//   //     if(JSON.stringify(userData.preferences) !== JSON.stringify(preferencesStored)) {
//   //       setPreferencesStored(userData.preferences);
//   //     }
//   //     // setPreferencesStored(userData.preferences);
//   //   }
//   // };

//   // useEffect(() => {
//   // // Effect to retrieve preferences on component mount
//   //   const userDataString = localStorage.getItem('userData');
//   //   const userData = userDataString ? JSON.parse(userDataString) : null;
//   //   console.log("userData.preferences", userData.preferences);
//   //   console.log("preferencesStored", preferencesStored)
//   //   if(JSON.stringify(userData.preferences) !== JSON.stringify(preferencesStored)) {
//   //     setPreferencesStored(userData.preferences);
//   //     // setUserPreferences(useUserPreferences(authToken))    
//   //   }
    
//   //   retrievePreferences();
//   // }, [preferencesStored]);

//   // Effect to update preferences when localStorage changes
//   // useEffect(() => {
//   //   window.addEventListener('storage', retrievePreferences);
//   // //   // setPreferencesStored(userData.preferences)
//   // //   // const userDataString = localStorage.getItem('userData');
//   // //   // const userData = userDataString ? JSON.parse(userDataString) : null;
//   // //   // if(JSON.stringify(userData.preferences) === JSON.stringify(preferencesStored)) {
//   // //   //   setPreferencesStored(userData.preferences);
//   // //   // }
//   //   return () => {
//   //     window.removeEventListener('storage', retrievePreferences);
//   //   };
//   // }, [preferencesStored]);

//   const handleChangePassword = async () => {
//     try {
//       const response = await fetch(`${API_ENDPOINT}/user/password`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${authToken}`,
//         },
//         body: JSON.stringify({
//           current_password: currentPassword,
//           new_password: newPassword,
//         }),
//       });
//       if (response.ok) {
//         // Password successfully updated, you may want to handle this
//         console.log('Password updated successfully');
//         setShowChangePasswordModal(false);
//       } else {
//         // Handle error cases
//         console.error('Error updating password');
//       }
//     } catch (error) {
//       console.error('Error updating password:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg">
//         <h2 className="text-2xl font-bold mb-4">User Details<hr className='m-2'/></h2>
//         <p className="mb-2"><strong>Name:</strong> {userData.name}</p>
//         <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
//         <h3 className="text-lg font-bold mb-2">Preferences:</h3>
//         {userPreferences && (
//           <>
//             {userPreferences.selectedTeams.length > 0 || userPreferences.selectedSports.length > 0 ? (
//               <>
//                 <p className="mb-2"><strong>Selected Sports:</strong> {userPreferences.selectedSports.join(', ')}</p>
//                 <p className="mb-2"><strong>Selected Teams:</strong> {userPreferences.selectedTeams.join(', ')}</p>
//               </>
//             ) : (
//               <p>No Preferences selected</p>
//             )}
//           </>
//         )}
//         <button onClick={() => setShowChangePasswordModal(true)} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 focus:outline-none">Change Password</button>
//       </div>

//       {/* Change Password Modal */}
//       {showChangePasswordModal && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-md">
//             <h2 className="text-2xl font-bold mb-4">Change Password</h2>
//             <div className="mb-4">
//               <label htmlFor="currentPassword" className="block mb-2 font-semibold">Current Password</label>
//               <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="newPassword" className="block mb-2 font-semibold">New Password</label>
//               <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
//             </div>
//             <div className="flex justify-end">
//               <button onClick={() => setShowChangePasswordModal(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 focus:outline-none">Cancel</button>
//               <button onClick={handleChangePassword} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UserDetails;
