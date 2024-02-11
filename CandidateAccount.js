import React, { useState } from 'react';
import './CandidateAccount.css'

const CandidateAccount = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    console.log('Updating candidate password:', currentPassword, newPassword);
  };

  const handleAccountDeletion = () => {
    console.log('Deleting candidate account');
  };

  return (
    <div>
      <h2>Candidate Account Management</h2>
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

export default CandidateAccount;
