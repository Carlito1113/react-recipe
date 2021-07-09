import React, { useState } from 'react';
import { Button } from '../Button';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ history, loggedin, setLoggedin }) {
  const [clicked, setClicked] = useState(false);

  function logoutHandler() {
    localStorage.removeItem('auth-token');
    setLoggedin(false);
  }

  return (
    <nav className="NavbarItems">
      <Link to="/" className="routerLink">
        <h1 className="navbar-logo">
          Recipe Book <i className="fas fa-drumstick-bite"></i>
        </h1>
      </Link>

      <div className="menu-icon" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      {!loggedin ? (
        <ul className="nav-menu">
          <Link className="routerLink" to="login">
            <li href="/login" className="nav-links">
              Login
            </li>
          </Link>
        </ul>
      ) : (
        <ul className="nav-menu">
          <Link className="routerLink" to="user">
            <li href="/user" className="nav-links">
              My Recipes
            </li>
          </Link>
          <Link className="routerLink" to="login">
            <li onClick={logoutHandler} href="/login" className="nav-links">
              Logout
            </li>
          </Link>
        </ul>
      )}
      <Link to="/signup">
        <Button>Sign Up</Button>
      </Link>
    </nav>
  );
}
