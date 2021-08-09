import * as React from 'react';
import { useTranslation, Trans } from 'react-i18next';
//
import { OutsideLink } from '../_common';
//
import logo from '../../assets/rs_school_logo.svg';
//
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p className="footer__text">
        <Trans
          i18nKey="Footer"
          t={t}
          values={{ name: 'va-z' }}
          components={{ 1: <OutsideLink href="https://github.com/va-z" /> }}
        />
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
};

export { Footer };
