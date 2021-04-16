import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './AuthFormButtons.scss';

const AuthFormButtons = ({ submitLabel, linkLabel, linkPath }) => (
  <div>
    <button className="button" type="submit">
      {submitLabel}
    </button>
    <Link className="button" to={linkPath}>
      {linkLabel}
    </Link>
  </div>
);

AuthFormButtons.propTypes = {
  submitLabel: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};

export { AuthFormButtons };
