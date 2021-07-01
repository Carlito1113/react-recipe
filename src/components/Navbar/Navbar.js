import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavbarItems">
      <Link to='/' className='logoLink'>
        <h1 className="navbar-logo">
          Recipe Book <i className="fas fa-drumstick-bite"></i>
        </h1>
      </Link>
      <div className="menu-icon" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <Link to={item.url}>
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            </Link>
          );
        })}
      </ul>
      <Link to="/signup">
        <Button>Sign Up</Button>
      </Link>
    </nav>
  );
}
