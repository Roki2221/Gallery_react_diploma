import React from 'react';
import { Link } from 'react-router-dom';
import CSS from './Footer.module.css';
import sprite from '../../img/icons.svg';
function Footer() {
  return (
    <footer className={CSS.footer_container}>
      <div className={`${CSS.footer_signUp_container} container`}>
        <div className={CSS.footer_text_container}>
          <h2>Sign Up</h2>
          <p>
            <span>Follow Our Art Blog's Updates to </span>
            <span>Know About Exhibits</span>
          </p>
        </div>
        <div>
          <form className={CSS.subscribe_container}>
            <label className="email-name">
              <input
                type="email"
                name="footer-email"
                className={CSS.footer_input}
                placeholder="Your e-mail address *"
                required
                pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}"
                title="The email must be in format test@gmail.com After @ dont use numbers and symblos like -, _, etc."
              />
            </label>
            <button type="submit" className={CSS.subscribe_btn}>
              subscribe
            </button>
          </form>
        </div>
        <div className={CSS.footer_social_container}>
          <p className={CSS.soc_subtitle}>
            Spread the Word! <span>on Our Social Media:</span>
          </p>
          <ul className={CSS.social_links}>
            <li className={CSS.social_links_item}>
              <a href="https://www.instagram.com/" className={CSS.footer_soc}>
                <svg className={CSS.social_icon} width="24" height="24">
                  <use href={sprite + '#icon-instagram'}></use>
                </svg>
              </a>
            </li>
            <li className={CSS.social_links_item}>
              <a href="https://twitter.com/" className={CSS.footer_soc}>
                <svg className={CSS.social_icon} width="24" height="24">
                  <use href={sprite + '#icon-twitter'}></use>
                </svg>
              </a>
            </li>
            <li className={CSS.social_links_item}>
              <a href="https://www.facebook.com/" className={CSS.footer_soc}>
                <svg className={CSS.social_icon} width="24" height="24">
                  <use href={sprite + '#icon-facebook'}></use>
                </svg>
              </a>
            </li>
            <li className={CSS.social_links_item}>
              <a
                href="https://www.linkedin.com/feed/"
                className={CSS.footer_soc}
              >
                <svg className={CSS.social_icon} width="24" height="24">
                  <use href={sprite + '#icon-linkedin'}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${CSS.contacts_container} container`}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2 className={CSS.footer_logo}>ExhibitA</h2>
        </Link>
        <span className={CSS.footer_logo_subtitle}>
          … experience the amazing art on exhibit!
        </span>
        <div className={CSS.footer_address_link}>
          <div className={CSS.phone_link}>
            <svg className={CSS.address_icon} width="24" height="24">
              <use href={sprite + '#icon-phone'}></use>
            </svg>
            <a href="tel:+380684439426">+380 (68) 443-94-26</a>
          </div>
          <div className={CSS.physical_address}>
            <svg className={CSS.address_icon} width="24" height="24">
              <use href={sprite + '#icon-location'}></use>
            </svg>
            <span>
              9401 N Meridian St, Indianapolis, IN 46260, United States
            </span>
          </div>
        </div>
      </div>
      <div className={`${CSS.footer_terms} container`}>
        <span className={CSS.rights_text}>
          ExhibitA © 2020. All rights reserved.
        </span>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className={CSS.terms_link}>Privacy Policy</span>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className={CSS.terms_link}>Terms of Use</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
