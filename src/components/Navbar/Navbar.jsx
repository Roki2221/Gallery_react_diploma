import React, { useState } from 'react';
import CSS from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, SetMenuOpen] = useState(false);
  return (
    <nav className={CSS.nav_link}>
      {/* НАВІГАЦІЯ */}
      <div
        className={CSS.mobile_menu_button}
        onClick={() => {
          SetMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? CSS.open : ''}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="about">about us</Link>
        </li>
        <li>
          <Link to="exhibitions">exhibitions</Link>
        </li>
        <li>
          <Link to="events">events</Link>
        </li>
        <li>
          <Link to="gallery">gallery</Link>
        </li>
        <li>
          <Link to="blog">blog</Link>
        </li>
        <li>
          <Link to="contacts">contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
