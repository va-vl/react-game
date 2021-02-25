/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../services/userService';

const SignIn = (props) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'userPassword':
        setUserPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName && userPassword) {
      userService.login(userName, userPassword);
      props.history.push('/');
    }
  };

  return (
    <div>
      <h3>Sign In</h3>
      <form name="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userNameSignInInput">
            Username:
            <input
              required
              type="text"
              name="userName"
              value={userName}
              onChange={handleChange}
              id="userNameSignInInput"
            />
          </label>
        </div>
        <div>
          <label htmlFor="userPasswordSignInInput">
            Password:
            <input
              required
              type="password"
              name="userPassword"
              id="userPasswordSignInInput"
              value={userPassword}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
          <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
