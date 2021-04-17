import * as React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
//
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { authSelector } from '../../../store/selectors';
//
import './AuthReady.scss';

const AuthReady = ({ children }) => {
  const auth = useSelector(authSelector);
  const { t } = useTranslation();

  return isLoaded(auth) ? (
    children
  ) : (
    <div className="auth-ready">
      <p className="auth-ready__text">{t('AuthReady.Loading')}</p>
    </div>
  );
};

AuthReady.defaultProps = {
  children: undefined,
};

AuthReady.propTypes = {
  children: PropTypes.node,
};

export { AuthReady };
