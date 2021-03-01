import React from 'react';
import { Link } from 'react-router-dom';
import { HOT_KEYS } from '../../constants/constants';
import './About.scss';

const About = () => (
  <div className="about">
    <div className="about__content">
      <h3 className="about__heading">Hot keys:</h3>
      {Object.entries(HOT_KEYS).map(([item, value]) => (
        <div className="about__subparagraph" key={value}>
          <span className="about__key">{`ALT + ${item.toUpperCase()}`}</span>
          <span>{` - ${value}`}</span>
        </div>
      ))}
      <h3 className="about__heading">About</h3>
      <p className="about__paragraph">Made with React and Redux.</p>
      <p className="about__paragraph">
        {'SVG images '}
        <a
          className="about__link"
          href="https://www.flaticon.com"
          target="_blank"
          rel="noreferrer"
        >
          designed by Flaticon
        </a>
        .
      </p>
      <p className="about__paragraph">
        <span className="about__subparagraph">
          &quot;Kalimba Relaxation Music&quot; Kevin MacLeod (incompetech.com)
        </span>
        <span className="about__subparagraph">
          Licensed under Creative Commons: By Attribution 4.0 License
        </span>
        <span className="about__subparagraph">
          <a
            className="about__link"
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            http://creativecommons.org/licenses/by/4.0/
          </a>
        </span>
      </p>
      <Link className="about__button" to="/">
        To main menu
      </Link>
    </div>
  </div>
);

export default About;
