import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import LabeledField from '../_common/LabeledField/LabeledField';
import { handleSignIn } from '../../utils/handleAuth';
import { userSignInAC } from '../../store/userReducer/userReducerACs';
import './SignIn.scss';

const SignIn = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleChange = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      userNameSignInInput: { value: userName },
      userPasswordSignInInput: { value: userPassword },
    } = document.forms.signInForm.elements;

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
        <form
          className="signin__form"
          name="signInForm"
          id="signInForm"
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <div className="signin__input">
            <LabeledField
              type="text"
              label="Username"
              name="userName"
              id="userNameSignInInput"
            />
          </div>
          <div className="signin__input">
            <LabeledField
              type="password"
              label="Password"
              name="userPassword"
              id="userPasswordSignInInput"
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
