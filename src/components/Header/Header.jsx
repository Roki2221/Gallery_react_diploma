import React from 'react';
import CSS from './Header.module.css';
import Navbar from 'components/Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={`${CSS.header} container`}>
      {/* лого силка */}

      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2 className={CSS.header_logo}>ExhibitA</h2>
      </Link>

      {/* НАВІГАЦІЯ */}
      <Navbar></Navbar>

      {/* HERO */}
      <div className={CSS.hero}>
        <h1 className={CSS.main_title}>
          <span className={CSS.header_title_bold}>Welcome to the</span>
          <br />
          <span className={CSS.header_title_bold + ' ' + CSS.header_title}>
            ExhibitA Art
          </span>
          <br />
          <span className={CSS.header_title}>Gallery</span>
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
