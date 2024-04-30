import React from 'react';
import logo from '../img/mt-2138-home-logo.png';
import CSS from './Header.module.css';
function Header() {
  return (
    <header className={CSS.header}>
      <img src={logo} className={CSS.logo} alt="exhibita" />
      {/* <nav className={CSS.nav_link}>
        <div className={CSS.mobile_nav}>
          <button className={CSS.toggle_btn} onclick={toggleMenu()}>
            Menu
          </button>
          <ul className={CSS.nav_menu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div className={`${CSS.hero} container`}>
        <h1 className={CSS.main_title}>
          <br />
          Welcome to the
          <span className={CSS.header_title}>
            <span className={CSS.header_title_bold}>
              <br /> ExhibitA Art
            </span>
            <br /> Gallery
          </span>
        </h1>
        <p className={CSS.hero_text}>
          For years all creative types in the local area flocked here, to the
          biggest art gallery in the region, where every kind of art - be it
          modern or experimental is both respected and exhibited!
        </p>
      </div>
    </header>
  );
}

export default Header;
