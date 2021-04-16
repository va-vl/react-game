import * as React from 'react';
import { useHistory } from 'react-router-dom';
//
import { useFirebase } from 'react-redux-firebase';
//
import { LabeledField, AuthForm } from '../_common';
//
import './SignUp.scss';

const SignUp = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [displayName, setDisplayName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

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

    setIsLoading(true);

    firebase
      .createUser({ email, password }, { displayName })
      .then(() => {
        history.push('/');
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  };

  return (
    <main className="signup">
      <div className="signup__content">
        <AuthForm
          heading="Sign Up"
          note="Please use VPN or the default profile if Google services are limited
          in your location"
          error={errorMessage}
          name="signUpForm"
          id="signUpForm"
          isLoading={isLoading}
          onFormSubmit={handleSubmit}
          onFormChange={handleFormChange}
          submitButtonLabel="Sign Up"
          linkButtonLabel="To Sign In"
          linkButtonPath="/signin"
        >
          <LabeledField
            type="text"
            label="Your name"
            name="displayName"
            id="userNameSignUpInput"
            value={displayName}
            onChange={handleDisplayNameChange}
          />
          <LabeledField
            type="email"
            label="Email"
            name="userEmail"
            id="userEmailSignUpInput"
            value={email}
            onChange={handleEmailChange}
          />
          <LabeledField
            type="password"
            label="Password"
            name="userPassword"
            id="userPasswordSignUpInput"
            value={password}
            onChange={handlePasswordChange}
          />
        </AuthForm>
      </div>
    </main>
  );
};

export { SignUp };
