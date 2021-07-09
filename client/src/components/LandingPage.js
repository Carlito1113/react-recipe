import React from 'react';
import './LandingPage.css';
import { Link } from 'react-scroll';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Link id="get-started" to="form" smooth={true}>
        Get Started!
      </Link>
    </div>
  );
};

export default LandingPage;
