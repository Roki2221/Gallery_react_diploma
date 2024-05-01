import React from 'react';
import logo from '../../img/mt-2138-home-logo.png';
import CSS from './Header.module.css';
import Navbar from 'components/Navbar/Navbar';
import { Link } from 'react-router-dom';
// import About from '../../pages/About';
// import Exhibitions from '../../pages/Exhibitions';
// import Gallery from '../../pages/Gallery';
// import Blog from '../../pages/Blog';
// import Contacts from '../../pages/Contacts';
// import Events from '../../pages/Events';
// import Home from '../../pages/Home';

function Header() {
  return (
    <header className={CSS.header}>
      {/* лого силка */}
      <div className={CSS.logo}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="exhibita" />
        </Link>
      </div>

      {/* НАВІГАЦІЯ */}
      <Navbar></Navbar>

      {/* HERO */}
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
