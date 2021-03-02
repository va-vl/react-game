import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { handleSignUp } from '../../utils/handleAuth';
import LabeledField from '../_common/LabeledField/LabeledField';
import './SignUp.scss';

const SignUp = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      userNameSignUpInput,
      userEmailSignUpInput,
      userPasswordSignUpInput,
    } = document.forms.signUpForm.elements;

    const userName = userNameSignUpInput.value.trim();
    const userEmail = userEmailSignUpInput.value.trim();
    const userPassword = userPasswordSignUpInput.value.trim();

    if (userName && userEmail && userPassword) {
      handleSignUp({ userName, userPassword, userEmail }).then(
        ({ ok, payload }) => {
          if (!ok) {
            setErrorMessage(payload);
          } else {
            history.push('/signin');
          }
        },
      );
    } else {
      setErrorMessage('Fields must contain more than just empty spaces!');
    }
  };

  return (
    <main className="signup">
      <div className="signup__content">
        <h3 className="signup__heading">Sign Up</h3>
        <form
          className="signup__form"
          name="signUpForm"
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <div className="signup__input">
            <LabeledField
              id="userNameSignUpInput"
              label="Your name"
              type="text"
              name="userName"
            />
          </div>
          <div className="signup__input">
            <LabeledField
              id="userEmailSignUpInput"
              label="Your email"
              type="email"
              name="userEmail"
            />
          </div>
          <div className="signup__input">
            <LabeledField
              id="userPasswordSignUpInput"
              label="Password"
              type="password"
              name="userPassword"
            />
          </div>
          <p className="signup__error">{errorMessage}</p>
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

export default SignUp;
