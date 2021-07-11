import React, { useState } from 'react';
import { Button } from '../Button';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ history, loggedin, setLoggedin }) {
  const [clicked, setClicked] = useState(false);

  function logoutHandler() {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-id');
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
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <Link className="routerLink" to="login">
            <li className="nav-links">Login</li>
          </Link>
          <Link className="routerLink" to="/signup">
            <li className="nav-links">Sign Up</li>
          </Link>
        </ul>
      ) : (
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <Link className="routerLink" to="user">
            <li className="nav-links">My Recipes</li>
          </Link>
          <Link className="routerLink" to="login">
            <li onClick={logoutHandler} className="nav-links">
              Logout
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
}
