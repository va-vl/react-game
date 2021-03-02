import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelector } from '../../store/selectors';

const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector(authSelector);

  return isLoaded(auth) ? (
    <Route
      {...remainingProps}
      render={({ location }) => {
        const isAuthReady = isLoaded(auth) && !isEmpty(auth);
        return isAuthReady ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  ) : null;
};

PrivateRoute.defaultProps = {
  children: null,
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
