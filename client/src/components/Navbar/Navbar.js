import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar({ history, loggedin, setLoggedin }) {
  const [clicked, setClicked] = useState(false);

  function logoutHandler() {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-id');
    setLoggedin(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="routerLink">
        <h1 className="navbar__logo">
           <i class="fas fa-bookmark"></i> Recipe Book
        </h1>
      </Link>

      <div className="navbar__menu--icon" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      {!loggedin ? (
        <ul className={clicked ? 'navbar__menu active' : 'navbar__menu'}>
          <Link className="routerLink" to="login">
            <li className="navbar__links">Login</li>
          </Link>
          <Link className="routerLink" to="/signup">
            <li className="navbar__links">Sign Up</li>
          </Link>
        </ul>
      ) : (
        <>
          <ul className={clicked ? 'navbar__menu active' : 'navbar__menu'}>
            <Link className="routerLink" to="user">
              <li className="navbar__links">My Recipes</li>
            </Link>
            <Link className="routerLink" to="login">
              <li onClick={logoutHandler} className="navbar__links">
                Logout
              </li>
            </Link>
          </ul>
          <button className='navbar__user'>C</button>
        </>
      )}
    </nav>
  );
}
