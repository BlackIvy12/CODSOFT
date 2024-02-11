import React, { useState } from 'react';
import './EmployerAccount.css';

const EmployerAccount = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    console.log('Updating employer password:', currentPassword, newPassword);
  };

  const handleAccountDeletion = () => {
    console.log('Deleting employer account');
  };

  return (
    <div>
      <h2>Employer Account Management</h2>
      <form onSubmit={handlePasswordUpdate}>
        <label>
          Current Password:
          <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
        </label>
        <label>
          New Password:
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </label>
        <button type="submit">Update Password</button>
      </form>
      <button onClick={handleAccountDeletion}>Delete Account</button>
    </div>
  );
};

export default EmployerAccount;
