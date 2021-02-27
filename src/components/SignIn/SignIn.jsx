import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import LabeledField from '../_common/LabeledField/LabeledField';
import { handleSignIn } from '../../utils/handleAuth';
import { userSignInAC } from '../../store/userReducer/userReducerACs';
import './SignIn.scss';

const SignIn = ({ history }) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (errorMessage) {
      setErrorMessage(null);
    }

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
      handleSignIn(userName, userPassword, history).then(
        ({ isSignInSuccessful, payload }) => {
          if (!isSignInSuccessful) {
            setErrorMessage(payload);
          } else {
            dispatch(userSignInAC(payload));
          }
        },
      );
    }
  };

  return (
    <main className="signin">
      <div className="signin__content">
        <h3 className="signin__heading">Sign In</h3>
        <form className="signin__form" onSubmit={handleSubmit}>
          <div className="signin__input">
            <LabeledField
              type="text"
              label="Username"
              value={userName}
              name="userName"
              id="userNameSignInInput"
              onChange={handleChange}
            />
          </div>
          <div className="signin__input">
            <LabeledField
              type="password"
              label="Password"
              value={userPassword}
              name="userPassword"
              id="userPasswordSignInInput"
              onChange={handleChange}
            />
          </div>
          <p className="signin__error">{errorMessage}</p>
          <div>
            <button className="signin__button" type="submit">
              Login
            </button>
            <Link className="signin__button" to="/signup">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

SignIn.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(SignIn);
