import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { children, path } = props;

  return (
    <Route
      exact
      path={path}
      render={({ location }) => {
        const user = localStorage.getItem('user');

        if (user) {
          return children;
        }

        return (
          <Redirect
            to={{
              pathname: 'signin',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
