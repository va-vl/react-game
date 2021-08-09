import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './AuthFormButtons.scss';

const AuthFormButtons = ({
  submitButtonLabel,
  linkButtonLabel,
  linkButtonPath,
  isLoading,
}) => (
  <div>
    <button className="button" type="submit" disabled={isLoading}>
      {submitButtonLabel}
    </button>
    <Link to={linkButtonPath}>
      <button className="button" type="button" disabled={isLoading}>
        {linkButtonLabel}
      </button>
    </Link>
  </div>
);

AuthFormButtons.propTypes = {
  submitButtonLabel: PropTypes.string.isRequired,
  linkButtonLabel: PropTypes.string.isRequired,
  linkButtonPath: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export { AuthFormButtons };
