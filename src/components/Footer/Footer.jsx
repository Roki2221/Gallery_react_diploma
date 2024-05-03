import React from 'react';
import { Link } from 'react-router-dom';
import CSS from './Footer.module.css';
function Footer() {
  return (
    <div className={`${CSS.footer_container} container`}>
      <div>
        <h2>
          Sign Up
          <span>Follow Our Art Blog's Updates to Know About Exhibits</span>
        </h2>

        <form action="">
          <input type="text" />
        </form>
        <h3>
          Spread the Word!
          <span>on Our Social Media:</span>
        </h3>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <span></span>
      </div>
    </div>
  );
}

export default Footer;
