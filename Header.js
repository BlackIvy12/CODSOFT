import React from 'react';
import {  Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Header.css';

const Header = () => {
	const pageStyle = {
		backgroundColor: 'gold',
	};
	return (	
		<header>	
	<div className="header-container"style={pageStyle}>
	<div className="logo-container">
	<img src={logo} alt="Logo" className="logo" />
	</div>
	<div className="web-name">
	<h1> My Jobs Boards</h1>
	</div>
	<nav>
		<ul>
			<li><Link to="/employer-dashboard"> EmployerDashboard</Link></li>
			</ul>
			</nav>
	</div>
	</header>
	);
};

export default Header;
	