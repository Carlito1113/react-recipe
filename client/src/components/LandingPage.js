import React from 'react';
import './LandingPage.css';
import { Link } from 'react-scroll';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-description">
        <p>
          Don't know what to cook for dinner?
        </p>
        <p>
          Start by searching for a type of cousine or an ingredient you'd want the
          recipe to have. You''ll receive random recipes that match your needs
          and after creating an account with us, you'll be able to save your
          favorite recipes and start your own Recipe Book!
        </p>
      </div>

      <Link id="get-started-btn" to="form" smooth={true}>
        Get Started!
      </Link>
    </div>
  );
};

export default LandingPage;
