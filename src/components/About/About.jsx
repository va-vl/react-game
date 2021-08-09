import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//
import { AboutHotKey } from './AboutHotKey';
//
import { OutsideLink } from '../_common';
//
import { HOT_KEYS } from '../../constants/constants';
//
import './About.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__content">
        <div className="about__section">
          <h3 className="about__heading">{t('About.HotKey.Heading')}</h3>
          {Object.entries(HOT_KEYS).map(([name, description]) => (
            <AboutHotKey
              outerClassName="about__paragraph"
              key={name}
              name={name}
              description={t(`About.HotKey.Descriptions.${description}`)}
            />
          ))}
        </div>
        <div className="about__section">
          <h3 className="about__heading">{t('About.Heading')}</h3>
          <p className="about__paragraph">
            <span>{t('About.Stack')}</span>
            <span> </span>
            <OutsideLink href="https://www.flaticon.com">
              {t('About.ImageSource')}
            </OutsideLink>
          </p>
        </div>
        <div className="about__section">
          <p className="about__paragraph">
            &quot;Kalimba Relaxation Music&quot; Kevin MacLeod (incompetech.com)
          </p>
          <p className="about__paragraph">
            Licensed under Creative Commons: By Attribution 4.0 License
          </p>
          <OutsideLink
            href="http://creativecommons.org/licenses/by/4.0/"
            outerClassName="about__paragraph"
          >
            http://creativecommons.org/licenses/by/4.0/
          </OutsideLink>
        </div>
        <Link className="about__button" to="/">
          To main menu
        </Link>
      </div>
    </div>
  );
};

export { About };
