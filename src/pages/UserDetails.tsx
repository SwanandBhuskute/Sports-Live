import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import useUserPreferences from './Preferences/useUserPreferences';
import ChangePassword from './ChangePassword';

const UserDetails: React.FC = () => {
  const authToken = localStorage.getItem("authToken");
  const [showChangePasswordModal, setShowChangePasswordModal] = useState<boolean>(false);
  const [loadingPreferences, setLoadingPreferences] = useState<boolean>(true); // State for loading preferences
  const userPreferences = useUserPreferences(authToken);

  const userDataString = localStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const handleCloseChangePasswordModal = () => {
    setShowChangePasswordModal(false);
  };

  useEffect(() => {
    if (userPreferences !== null) {
      setLoadingPreferences(false); 
    }
  }, [userPreferences]);

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">User Details<hr className='m-2'/></h2>
        <p className="mb-2"><strong>Name:</strong> {userData.name}</p>
        <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
        <h3 className="text-lg font-bold mb-2">Preferences:</h3>
        <div className="mb-4">
          {loadingPreferences ? ( 
            <p>Loading...</p>
          ) : (
            <>
              {userPreferences && userPreferences.selectedTeams && userPreferences.selectedSports ? (
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
              ) : (
                <p>No Preferences selected</p>
              )}
            </>
          )}
        </div>
        <button onClick={() => setShowChangePasswordModal(true)} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 focus:outline-none">Change Password</button>
      </div>

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <ChangePassword closeModal={ handleCloseChangePasswordModal } />
        </div>
      )}
    </>
  );
};

export default UserDetails;
