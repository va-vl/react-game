/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../services/userService';

// import userRegisterAC from '../../store/registrationReducer/registrationActionCreators';

const SignUp = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'userEmail':
        setUserEmail(value);
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

    if (userName && userEmail && userPassword) {
      userService.register({ userName, userEmail, userPassword });
      props.history.push('/signin');
    }
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form name="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userNameSignUpInput">
            Username:
            <input
              required
              type="text"
              name="userName"
              value={userName}
              onChange={handleChange}
              id="userNameSignUpInput"
            />
          </label>
        </div>
        <div>
          <label htmlFor="userEmailSignUpInput">
            E-mail:
            <input
              required
              type="email"
              name="userEmail"
              value={userEmail}
              onChange={handleChange}
              id="userEmailSignUpInput"
            />
          </label>
        </div>
        <div>
          <label htmlFor="userPasswordSignUpInput">
            Password:
            <input
              required
              type="password"
              name="userPassword"
              id="userPasswordSignUpInput"
              value={userPassword}
              onChange={handleChange}
            />
          </label>
          {userName && !userPassword && <div>Password is required</div>}
        </div>
        <div>
          <button type="submit">Register</button>
          <Link to="/signin">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
