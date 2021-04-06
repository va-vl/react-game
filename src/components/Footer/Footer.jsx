import * as React from 'react';
//
import { OutsideLink } from '../_common';
//
import logo from '../../assets/rs_school_logo.svg';
//
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <p className="footer__text">
      <span>Made by </span>
      <OutsideLink href="https://github.com/va-z">va-z</OutsideLink>
      <span> in 2021</span>
    </p>
    <OutsideLink href="https://rs.school/react/">
      <img
        className="footer__logo"
        alt="logo"
        src={logo}
        width="80"
        height="auto"
      />
    </OutsideLink>
  </footer>
);

export { Footer };
