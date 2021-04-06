import * as React from 'react';
import PropTypes from 'prop-types';
//
import './AboutHotKey.scss';

const AboutHotKey = ({ outerClassName, name, description }) => (
  <div className={outerClassName}>
    <span className="hotkey">{`ALT + ${name.toUpperCase()}`}</span>
    <span>{` - ${description}`}</span>
  </div>
);

AboutHotKey.defaultProps = {
  outerClassName: null,
};

AboutHotKey.propTypes = {
  outerClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export { AboutHotKey };
