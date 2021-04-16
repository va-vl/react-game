import * as React from 'react';
import { useHistory } from 'react-router-dom';
//
import { useFirebase } from 'react-redux-firebase';
//
import { LabeledField, AuthFormButtons } from '../_common';
//
import './SignUp.scss';

const SignUp = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [displayName, setDisplayName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleFormChange = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleDisplayNameChange = ({ target: { value } }) => {
    setDisplayName(value);
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
        <form
          name="signUpForm"
          id="signUpForm"
          onSubmit={handleSubmit}
          onChange={handleFormChange}
        >
          <div className="signup__input">
            <LabeledField
              type="text"
              label="Your name"
              name="displayName"
              id="userNameSignUpInput"
              value={displayName}
              onChange={handleDisplayNameChange}
            />
          </div>
          <div className="signup__input">
            <LabeledField
              type="email"
              label="Email"
              name="userEmail"
              id="userEmailSignUpInput"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="signup__input">
            <LabeledField
              type="password"
              label="Password"
              name="userPassword"
              id="userPasswordSignUpInput"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <AuthFormButtons
            submitLabel="Sign Up"
            linkLabel="To Sign In"
            linkPath="/signin"
          />
        </form>
      </div>
    </main>
  );
};

export { SignUp };
