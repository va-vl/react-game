import React from 'react';
import logo from '../../assets/rs_school_logo.svg';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <p>
      <span>Made by </span>
      <a
        className="footer__link"
        href="https://github.com/va-z"
        target="_blank"
        rel="noreferrer"
      >
        va-z
      </a>
      <span> in 2021</span>
    </p>
    <a
      className="footer__logo-link"
      href="https://rs.school/react/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="footer__logo"
        alt="logo"
        src={logo}
        width="80"
        height="auto"
      />
    </a>
  </footer>
);

export default Footer;
