import * as React from 'react';
import PropTypes from 'prop-types';
//
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { authSelector } from '../../../store/selectors';
//
import './AuthReady.scss';

const AuthReady = ({ children }) => {
  const auth = useSelector(authSelector);

  if (!isLoaded(auth)) {
    return (
      <div className="auth-ready">
        <p className="auth-ready__text">Loading</p>
      </div>
    );
  }

  return children;
};

AuthReady.defaultProps = {
  children: undefined,
};

AuthReady.propTypes = {
  children: PropTypes.node,
};

export { AuthReady };
