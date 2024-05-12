import React, { useState } from 'react';
import CSS from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, SetMenuOpen] = useState(false);

  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 110) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener('scroll', setFixed);
  return (
    <nav className={`${CSS.nav_link} `}>
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
      <ul
        className={`${window.innerWidth < 768 && menuOpen ? CSS.open : ''} ${
          fix ? CSS.fixed : ''
        } ${CSS.menu_list}`}
      >
        <li
          onClick={() => {
            SetMenuOpen(!menuOpen);
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? CSS.active : '')}
            to="/"
          >
            home
          </NavLink>
        </li>
        <li
          onClick={() => {
            SetMenuOpen(!menuOpen);
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? CSS.active : '')}
            to="about"
          >
            about us
          </NavLink>
        </li>
        <li
          onClick={() => {
            SetMenuOpen(!menuOpen);
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? CSS.active : '')}
            to="exhibitions"
          >
            exhibitions
          </NavLink>
        </li>
        <li
          onClick={() => {
            SetMenuOpen(!menuOpen);
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? CSS.active : '')}
            to="events"
          >
            events
          </NavLink>
        </li>
        <li
          onClick={() => {
            SetMenuOpen(!menuOpen);
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? CSS.active : '')}
            to="gallery"
          >
            gallery
          </NavLink>
        </li>
        <li
          onClick={() => {
            SetMenuOpen(!menuOpen);
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? CSS.active : '')}
            to="blog"
          >
            blog
          </NavLink>
        </li>
        <li
          onClick={() => {
            SetMenuOpen(!menuOpen);
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? CSS.active : '')}
            to="contacts"
          >
            contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
