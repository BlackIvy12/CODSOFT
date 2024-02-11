import React, { useState } from 'react';
import './EmployerDocuments.css';

const EmployerDocuments = () => {
  const [applicationForm, setApplicationForm] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setApplicationForm(file);
  };

  const handleUpload = () => {
    console.log('Uploaded application form:', applicationForm);
  };

  return (
    <div className="document-container">
      <h2>Employer Documents</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Application Form</button>
    </div>
  );
};

export default EmployerDocuments;
