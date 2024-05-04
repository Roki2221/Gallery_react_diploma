import React from 'react';
// import { Link } from 'react-router-dom';
import CSS from './Footer.module.css';
import sprite from '../../img/icons.svg';
function Footer() {
  return (
    <footer className={`${CSS.footer_container} container`}>
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
            <a href="https://www.linkedin.com/feed/" className={CSS.footer_soc}>
              <svg className={CSS.social_icon} width="24" height="24">
                <use href={sprite + '#icon-linkedin'}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
