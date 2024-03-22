import React, { useState } from 'react';
import { API_ENDPOINT } from '../config/constants';

interface ChangePasswordProps {
  closeModal: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ closeModal }) => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const authToken = localStorage.getItem('authToken');

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
        // Password successfully updated, show success message
        console.log('Password updated successfully');
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false); // Hide success message after 3 seconds
            closeModal(); // Close the modal after successful password change
        }, 3000);
      } else {
        // Handle error cases
        console.error('Error updating password');
      }
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="bg-white p-6 w-1/3 rounded-md relative">
      {showSuccessMessage && (
        <div className="bg-green-200 text-green-700 px-4 py-2 rounded-md">
          Password Changed Successfully
        </div>
      )}
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
        <button onClick={closeModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 focus:outline-none">Cancel</button>
        <button onClick={handleChangePassword} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">Save</button>
      </div>
    </div>
  );
};

export default ChangePassword;
