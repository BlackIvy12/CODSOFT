import React, { useState } from 'react';
import './CandidateDocuments.css';

const CandidateDocuments = () => {
  const [cv, setCv] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCv(file);
  };

  const handleUpload = () => {
    console.log('Uploaded CV:', cv);
  };

  const handleDownload = () => {
    console.log('Downloading CV:', cv);
  };

  return (
    <div className="document-container">
      <h2>Candidate Documents</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CV</button>
      {cv && <button onClick={handleDownload}>Download CV</button>}
    </div>
  );
};

export default CandidateDocuments;
