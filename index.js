import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage';
import SignUp from './SignUp';
import Header from './Header';
import SignIn from './SignIn';
import CandidateDashboard from './CandidateDashboard';
import EmployerDashboard from './EmployerDashboard';
import EmployerProfile from './EmployerProfile';
import JobListing from './JobListing';
import CandidateDocuments from './CandidateDocuments';
import Applications from './Applications';
import EmployerDocuments from './EmployerDocuments';
import CandidateProfile from './CandidateProfile';
import CandidateAccount from './CandidateAccount';
import EmployerAccount from './EmployerAccount';
import JobDetails from './JobDetails';
import './JobDetails.css';
import './HomePage.css';
import './Header.css';
import './index.css';
import './SignIn.css';
import './EmployerDashboard.css';
import './EmployerProfile.css';
import './JobListing.css';
import './EmployerDashboard.css';
import './SignUp.css';


const root = createRoot(document.getElementById('root'));

const App = () => {
	return (
	<Router>
	<Switch>
	<Route path="/" exact component={HomePage} />
	<Route path="/signup" exact component={SignUp} />
	<Route path="/signin" exact component={SignIn} />
	<Route path="/employer-dashboard" exact component={EmployerDashboard} />
	<Route path="/candidate-dashboard" exact component={CandidateDashboard} />
	<Route path="/employer/profile" component={EmployerProfile} />
	<Route path="/employer/posts" component={JobDetails} />
	<Route path="/employer/documents" component={EmployerDocuments} />
	<Route path="/candidate/profile" component={CandidateProfile} />
	<Route path="/candidate/applications" component={Applications} />
	<Route path="/candidate/documents" component={CandidateDocuments} />
	<Route path="/employer/account" component={EmployerAccount} />
	<Route path="/candidate/account" component={CandidateAccount} />
	<Route path="/candidate/job-listing" component={JobListing} />
	</Switch>
	</Router>
	);
};
root.render(
<App />,
);
reportWebVitals();
