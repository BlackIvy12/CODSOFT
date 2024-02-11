import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import EmployerProfile from './EmployerProfile';
import JobDetails from './JobDetails';
import EmployerDocuments from './EmployerDocuments';
import EmployerAccount from './EmployerAccount';
import './EmployerDashboard.css';

const EmployerDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`employer-dashboard ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar">
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>
        <h2>Employer Dashboard</h2>
      </div>
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <Link to="/employer/profile">Profile</Link>
        <Link to="/employer/posts">Posts</Link>
        <Link to="/employer/documents"> Documents </Link>
        <Link to="/employer/account"> Account Management </Link>
      </div>
      <div className="WelcomeE">
        <p> This is your dashboard, where you'll have a control over everything concerning your recruitment journey.
          Click on the navigation button to get started or take a tour around your dashboard</p>
        </div>
      <div className="content">
        <Switch>
          <Route path="/employer/profile" component={EmployerProfile} />
          <Route path="/employer/posts" component={JobDetails} />
          <Route path="/employer/documents" component={EmployerDocuments} />
          <Route path="/employer/account" component={EmployerAccount} />
        </Switch>
      </div>
    </div>

  );
};

export default EmployerDashboard;
