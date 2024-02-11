import React, { useState } from 'react';
import './JobDetails.css';

const JobListing = () => {
  const [jobDetails, setJobDetails] = useState({
    location: '',
    useMainAddress: true,
    branches: '',
    jobDescription: '',
    qualifications: '',
    closingDate: '',
  });

  const [postedJobs, setPostedJobs] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newJob = { ...jobDetails, id: Date.now() };
    setPostedJobs((prevJobs) => [...prevJobs, newJob]);
    setJobDetails({
      location: '',
      useMainAddress: true,
      branches: '',
      jobDescription: '',
      qualifications: '',
      closingDate: '',
    });
  };

  const handleEdit = (id) => {
    const selectedJob = postedJobs.find((job) => job.id === id);
    setJobDetails(selectedJob);
    setPostedJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  const handleDelete = (id) => {
    setPostedJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <div className="job-listing">
      <h2>Job Listing</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={jobDetails.location}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Use Main Address:
          <input
            type="checkbox"
            name="useMainAddress"
            checked={jobDetails.useMainAddress}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          Branches (if different from main address):
          <input
            type="text"
            name="branches"
            value={jobDetails.branches}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Job Description:
          <textarea
            name="jobDescription"
            value={jobDetails.jobDescription}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Qualifications:
          <textarea
            name="qualifications"
            value={jobDetails.qualifications}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Closing Date:
          <input
            type="date"
            name="closingDate"
            value={jobDetails.closingDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Post Job</button>
      </form>
      <div className="posted-jobs">
        <h3>Posted Jobs</h3>
        <ul>
          {postedJobs.map((job) => (
            <li key={job.id}>
              <strong>Location:</strong> {job.location} <br />
              <strong>Branches:</strong> {job.useMainAddress ? 'Main Address' : job.branches} <br />
              <strong>Job Description:</strong> {job.jobDescription} <br />
              <strong>Qualifications:</strong> {job.qualifications} <br />
              <strong>Closing Date:</strong> {job.closingDate} <br />
              <button onClick={() => handleEdit(job.id)}>Edit</button>
              <button onClick={() => handleDelete(job.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobListing;
