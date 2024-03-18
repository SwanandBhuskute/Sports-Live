import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import useUserPreferences from './Preferences/useUserPreferences';

const UserDetails: React.FC = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const userPreferences = useUserPreferences(authToken);

  // Get user data from localStorage
  const userDataString = localStorage.getItem('userData');
  if (!userDataString) {
    return <div className="text-red-500">User data not found</div>;
  }

  // Parse user data from localStorage
  const userData = JSON.parse(userDataString);

  // Update authToken if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <p className="mb-2"><strong>Name:</strong> {userData.name}</p>
        <p className="mb-2"><strong>Email:</strong> {userData.email}</p>
        <h3 className="text-lg font-bold mb-2">Preferences:</h3>
        {userPreferences ? (
          <>
            <p className="mb-2"><strong>Selected Teams:</strong> {userPreferences.selectedTeams.join(', ')}</p>
            <p className="mb-2"><strong>Selected Sports:</strong> {userPreferences.selectedSports.join(', ')}</p>
          </>
        ) : (
          <p>Loading preferences...</p>
        )}
      </div>
    </>
  );
};

export default UserDetails;
