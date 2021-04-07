import * as React from 'react';
import { useHistory } from 'react-router-dom';
//
import { useFirebase } from 'react-redux-firebase';
//
import { AuthForm } from '../_common';
//
import './SignUp.scss';

const fields = [
  {
    id: 'userNameSignUpInput',
    label: 'Your name',
    type: 'text',
    name: 'userName',
  },
  {
    id: 'userEmailSignUpInput',
    label: 'Your email',
    type: 'email',
    name: 'userEmail',
  },
  {
    id: 'userPasswordSignUpInput',
    label: 'Password',
    type: 'password',
    name: 'userPassword',
  },
];

const SignUp = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const [errorMessage, setErrorMessage] = React.useState(null);

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

    const displayName = userNameSignUpInput.value.trim();
    const email = userEmailSignUpInput.value.trim();
    const password = userPasswordSignUpInput.value.trim();

    firebase
      .createUser({ email, password }, { displayName })
      .then(() => {
        history.push('/');
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (
    <main className="signup">
      <div className="signup__content">
        <h3 className="signup__heading">Sign Up</h3>
        <p className="signup__note">
          Please use VPN or the default profile if Google services are limited
          in your location
        </p>
        {errorMessage && <p className="signup__error">{errorMessage}</p>}
        <AuthForm
          name="signUpForm"
          id="signUpForm"
          onSubmit={handleSubmit}
          onChange={handleChange}
          fields={fields}
        />
      </div>
    </main>
  );
};

export { SignUp };
