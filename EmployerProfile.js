 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
 import './EmployerProfile.css';
 
 const  EmployerProfile = () => {
    const [companyDetails, setCompanyDetails] = useState ({
        companyName: '',
        companyCity: '',
        companyCountry: '',
        companyEmail: '',
        companyTelephone: '',
        companySummary: '',
        companyField: '',
    });

    const handleUpdateDetails = (event) => {
        event.preventDefault();
        console.log('Updated Company Details:', companyDetails);
    };

    return (
        <div className="employer-profile">
            <div className="profile-link">
                <Link to="/employer/profile">View Profile </Link>
                < Link to="/employer/edit-profile">Edit Profile</Link>
            </div>
            <form onSubmit={handleUpdateDetails} className="company-details-form">
            <h3>Contact details</h3>
                       <label>
                        Email Address:
                        <input type="email" value={companyDetails.companyEmail} onChange={(e) => setCompanyDetails
                        ({...companyDetails, companyEmail: e.target.value})} required />
                        </label>
                        <label>
                            Telephone Number:
                            <input type="tel" value={companyDetails.companyTelephone} onChange={(e) => setCompanyDetails
                            ({...companyDetails,companyTelephone: e.target.value})} required />
                            </label>
                <label>
                    Company Name:
                    <input type="text" value={companyDetails.companyName} onChange={(e) => setCompanyDetails
                    ({...companyDetails, companyName: e.target.value})} required />
                    </label>
                    <label>
                       City:
                       <input type="text" value={companyDetails.companyCity} onChange={(e) => setCompanyDetails
                       ({...companyDetails, companyCity: e.target.value})} required />
                       </label> 
                       <label>
                       Country:
                       <input type="text" value={companyDetails.companyCountry} onChange={(e) => setCompanyDetails
                       ({...companyDetails, companyCountry: e.target.value})} required />
                       </label>
                      
                    <button type="submit"> Update Details </button>
                    </form>
                    </div>
    );
 };
 export default EmployerProfile;