import * as React from 'react';
import { useHistory } from 'react-router-dom';
//
import { useFirebase } from 'react-redux-firebase';
//
import { AuthForm } from '../_common';
//
import './SignIn.scss';

const fields = [
  {
    type: 'text',
    label: 'Email',
    name: 'userEmail',
    id: 'userEmailSignInInput',
  },
  {
    type: 'password',
    label: 'Password',
    name: 'userPassword',
    id: 'userPasswordSignInInput',
  },
];

const SignIn = () => {
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
        {errorMessage && <p className="signin__error">{errorMessage}</p>}
        <AuthForm
          name="signInForm"
          id="signInForm"
          onSubmit={handleSubmit}
          onChange={handleChange}
          fields={fields}
          firebaseErrorMessage={errorMessage}
        />
      </div>
    </main>
  );
};

export { SignIn };
