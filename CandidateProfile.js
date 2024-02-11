import React, { useState } from 'react';
import './CandidateProfile.css'; 


const CandidateProfile = () => {
  const [candidateInfo, setCandidateInfo] = useState({
    firstName: '',
    lastName: '',
    city: '',
    country: '',
    telephone: '',
    homeNumber: '',
    mobileNumber: '',
    qualification: 'High School Leaving Certificate',
    otherQualification: '',
    startYear: '',
    endYear: '',
    institution: '',
    additionalEducation: [],
    jobPreferences: {
      permanent: false,
      temporary: false,
      internship: false,
      learnership: false,
      availableImmediately: false,
      negotiableAvailability: false,
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCandidateInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCandidateInfo((prevInfo) => ({
      ...prevInfo,
      jobPreferences: {
        ...prevInfo.jobPreferences,
        [name]: checked,
      },
    }));
  };

  const handleAddEducation = () => {
    const newEducation = {
      qualification: '',
      startYear: '',
      endYear: '',
      institution: '',
    };

    setCandidateInfo((prevInfo) => ({
      ...prevInfo,
      additionalEducation: [...prevInfo.additionalEducation, newEducation],
    }));
  };

  const handleRemoveEducation = (index) => {
    setCandidateInfo((prevInfo) => {
      const updatedEducation = [...prevInfo.additionalEducation];
      updatedEducation.splice(index, 1);
      return {
        ...prevInfo,
        additionalEducation: updatedEducation,
      };
    });
  };

  const handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    setCandidateInfo((prevInfo) => {
      const updatedEducation = [...prevInfo.additionalEducation];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: value,
      };
      return {
        ...prevInfo,
        additionalEducation: updatedEducation,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Candidate Profile Submitted:', candidateInfo);
  };

  return (
    <div>
    <div className="candidate-profile">
      <h2>Candidate Profile</h2>
      <form onSubmit={handleSubmit}>

        <h3>Personal Details</h3>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={candidateInfo.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={candidateInfo.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={candidateInfo.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={candidateInfo.country}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Telephone:
          <input
            type="tel"
            name="telephone"
            value={candidateInfo.telephone}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Home Number:
          <input
            type="tel"
            name="homeNumber"
            value={candidateInfo.homeNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="tel"
            name="mobileNumber"
            value={candidateInfo.mobileNumber}
            onChange={handleInputChange}
          />
        </label>

        <h3>Educational History</h3>
        <label>
          Qualification:
          <select
            name="qualification"
            value={candidateInfo.qualification}
            onChange={handleInputChange}
          >
            <option value="High School Leaving Certificate">High School Leaving Certificate</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Honors Degree">Honors Degree</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
          {candidateInfo.qualification === 'Other' && (
            <input
              type="text"
              name="otherQualification"
              value={candidateInfo.otherQualification}
              onChange={handleInputChange}
              placeholder="Specify other qualification"
            />
          )}
        </label>
        <label>
          Start Year:
          <input
            type="number"
            name="startYear"
            value={candidateInfo.startYear}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Year:
          <input
            type="number"
            name="endYear"
            value={candidateInfo.endYear}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Institution:
          <input
            type="text"
            name="institution"
            value={candidateInfo.institution}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleAddEducation}>
          Add Another Education
        </button>
        {candidateInfo.additionalEducation.map((education, index) => (
          <div key={index} className="additional-education">
            <label>
              Qualification:
              <select
                name="qualification"
                value={education.qualification}
                onChange={(event) => handleEducationChange(index, event)}
              >
                <option value="High School Leaving Certificate">High School Leaving Certificate</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Honors Degree">Honors Degree</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
              {education.qualification === 'Other' && (
                <input
                  type="text"
                  name="otherQualification"
                  value={education.otherQualification}
                  onChange={(event) => handleEducationChange(index, event)}
                  placeholder="Specify other qualification"
                />
              )}
            </label>
            <label>
              Start Year:
              <input
                type="number"
                name="startYear"
                value={education.startYear}
                onChange={(event) => handleEducationChange(index, event)}
              />
            </label>
            <label>
              End Year:
              <input
                type="number"
                name="endYear"
                value={education.endYear}
                onChange={(event) => handleEducationChange(index, event)}
              />
            </label>
            <label>
              Institution:
              <input
                type="text"
                name="institution"
                value={education.institution}
                onChange={(event) => handleEducationChange(index, event)}
              />
            </label>
            <button type="button" onClick={() => handleRemoveEducation(index)}>
              Remove
            </button>
          </div>
        ))}

        <h3>Job Preferences</h3>
        <label>
          Seeking Opportunities:<br />
          <br />
          
          <input
            type="checkbox"
            name="permanent"
            checked={candidateInfo.jobPreferences.permanent}
            onChange={handleCheckboxChange}
          />
          Permanent
          <input
            type="checkbox"
            name="temporary"
            checked={candidateInfo.jobPreferences.temporary}
            onChange={handleCheckboxChange}
          />
          Temporary
          <input
            type="checkbox"
            name="internship"
            checked={candidateInfo.jobPreferences.internship}
            onChange={handleCheckboxChange}
          />
          Internship
          <input
            type="checkbox"
            name="learnership"
            checked={candidateInfo.jobPreferences.learnership}
            onChange={handleCheckboxChange}
          />
          Learnership
        </label>
        <label>
          <h3>Availability:</h3>
          <input
            type="checkbox"
            name="availableImmediately"
            checked={candidateInfo.jobPreferences.availableImmediately}
            onChange={handleCheckboxChange}
          />
          Available Immediately
          <input
            type="checkbox"
            name="negotiableAvailability"
            checked={candidateInfo.jobPreferences.negotiableAvailability}
            onChange={handleCheckboxChange}
          />
          Negotiable Availability
        </label>
        <div className="button">
        <button type="submit">Save Profile</button>
       
        </div>
      </form>
      </div>
    </div>
  );
};

export default CandidateProfile;
