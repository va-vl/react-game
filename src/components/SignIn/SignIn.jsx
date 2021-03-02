import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LabeledField from '../_common/LabeledField/LabeledField';
import { handleSignIn } from '../../utils/handleAuth';
import './SignIn.scss';

const SignIn = () => {
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
      userEmailSignInInput: { value: userEmail },
      userPasswordSignInInput: { value: userPassword },
    } = document.forms.signInForm.elements;

    if (userEmail && userPassword) {
      handleSignIn({ userEmail, userPassword }).then(({ ok, payload }) => {
        if (!ok) {
          setErrorMessage(payload);
        } else {
          history.push('/');
        }
      });
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
              label="Email"
              name="userEmail"
              id="userEmailSignInInput"
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

export default SignIn;
