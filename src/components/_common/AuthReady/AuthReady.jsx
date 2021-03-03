import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { authSelector } from '../../../store/selectors';
import './AuthReady.scss';

function AuthReady({ children }) {
  const auth = useSelector(authSelector);

  if (!isLoaded(auth)) {
    return (
      <div className="auth-ready">
        <p className="auth-ready__text">Loading</p>
      </div>
    );
  }

  return children;
}

export default AuthReady;
