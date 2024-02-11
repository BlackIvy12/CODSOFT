import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/mag.jpg';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="header">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
          <h2 className="name">JobQuest</h2>
          
      </div>
      </div> <hr />
      <div className="main-container">
        <h1>Welcome to JobQuest</h1>
      <p className='message'>
          A platform where opportunities unfold like an epic quest! 🌟
          Whether you're a visionary employer seeking the perfect talent or a
           daring candidate embarking on a career adventure, you've entered a realm of infinite possibilities.
            🌐 Let the journey to your dream job or ideal candidate begin – because at JobQuest, 
            every connection is a step closer to triumph!</p>
        <p>
          <br />
          <Link to="/signup">
            <button className="home-button">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button className="home-button">Sign In</button>
          </Link>
        </p>
      </div>
      <footer className='footer-container'>
        <p>&copy; 2024 JobQuest. All rights reserved.<br />
        proudly brought to you by Nompumelelo Mukondeleli Mufara <em />
        </p>
        </footer>
    </div>

  );
};

export default HomePage;
