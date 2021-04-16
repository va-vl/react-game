import * as React from 'react';
import { useHistory } from 'react-router-dom';
//
import { useFirebase } from 'react-redux-firebase';
//
import { LabeledField, AuthFormButtons } from '../_common';
//
import './SignIn.scss';

const SignIn = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleFormChange = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
        <form
          name="signInForm"
          id="signInForm"
          onSubmit={handleSubmit}
          onChange={handleFormChange}
        >
          <div className="signin__input">
            <LabeledField
              type="email"
              label="Email"
              name="userEmail"
              id="userEmailSignInInput"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="signin__input">
            <LabeledField
              type="password"
              label="Password"
              name="userPassword"
              id="userPasswordSignInInput"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <AuthFormButtons
            submitLabel="Sign In"
            linkLabel="To Sign Up"
            linkPath="/signup"
          />
        </form>
      </div>
    </main>
  );
};

export { SignIn };
