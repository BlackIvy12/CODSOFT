import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CandidateProfile from './CandidateProfile';
import Applications from './Applications';
import CandidateDocuments from './CandidateDocuments';
import CandidateAccount from './CandidateAccount';
import './CandidateDashboard.css';

const CandidateDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`candidate-dashboard ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar">
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>
        <h2>Candidate Dashboard</h2>
      </div>
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <Link to="/candidate/profile">Profile</Link>
        <Link to="/candidate/applications">Applications</Link>
        <Link to="/candidate/documents">Documents</Link>
        <Link to="/candidate/account"> Account Management </Link>
      </div>
      <div className="WelcomeC">
        <p> This is your dashboard, where you'll have a control over everything concerning your job-seeking journey.
          Click on the navigation button to get started or take a tour around your dashboard</p>
        </div>
      <div className="content">
        <Switch>
          <Route path="/candidate/profile" component={CandidateProfile} />
          <Route path="/candidate/applications" component={Applications} />
          <Route path="/candidate/documents" component={CandidateDocuments} />
          <Route path="/candidate/account" component={CandidateAccount} />
        </Switch>
      </div>
    </div>
  );
};

export default CandidateDashboard;
