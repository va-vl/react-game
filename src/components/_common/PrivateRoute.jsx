/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path }) => (
  <Route
    exact
    path={path}
    render={(props) =>
      localStorage.getItem('user') ? (
        React.createElement(Component, props)
      ) : (
        <Redirect
          to={{
            pathname: 'signin',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default PrivateRoute;
