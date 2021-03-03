import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import LabeledField from '../_common/LabeledField/LabeledField';
import './SignIn.scss';

const SignIn = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      userEmailSignInInput: { value: email },
      userPasswordSignInInput: { value: password },
    } = document.forms.signInForm.elements;

    firebase
      .login({ email, password })
      .then(() => {
        firebase.reloadAuth().then(() => {
          history.push('/');
        });
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (
    <main className="signin">
      <div className="signin__content">
        <h3 className="signin__heading">Sign In</h3>
        <p className="signin__note">
          Use test@test.com / test1234 if you don&apos;t want to create an
          account
        </p>
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
