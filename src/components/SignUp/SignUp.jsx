import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { handleSignUp } from '../../utils/handleAuth';
import LabeledField from '../_common/LabeledField/LabeledField';
import './SignUp.scss';

const SignUp = ({ history }) => {
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
      handleSignUp({ userName, userEmail, userPassword }, history);
    }
  };

  return (
    <main className="signup">
      <div className="signup__content">
        <h3 className="signup__heading">Sign Up</h3>
        <form className="signup__form" onSubmit={handleSubmit}>
          <div className="signup__input">
            <LabeledField
              id="userNameSignUpInput"
              label="User name"
              type="text"
              name="userName"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <div className="signup__input">
            <LabeledField
              id="userEmailSignUpInput"
              label="E-mail"
              type="email"
              name="userEmail"
              value={userEmail}
              onChange={handleChange}
            />
          </div>
          <div className="signup__input">
            <LabeledField
              id="userPasswordSignUpInput"
              label="Password"
              type="password"
              name="userPassword"
              value={userPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="signin__button" type="submit">
              Register
            </button>
            <Link className="signin__button" to="/signin">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

SignUp.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(SignUp);
