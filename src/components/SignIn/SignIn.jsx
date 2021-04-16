import * as React from 'react';
import { useHistory } from 'react-router-dom';
//
import { useFirebase } from 'react-redux-firebase';
//
import { AuthForm, LabeledField } from '../_common';
//
import './SignIn.scss';

const SignIn = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

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

    setIsLoading(true);

    firebase
      .login({ email, password })
      .then(() => {
        firebase.reloadAuth().then(() => {
          history.push('/');
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  };

  return (
    <main className="signin">
      <div className="signin__content">
        <AuthForm
          heading="Sign In"
          note="Use test@test.com / test1234 if you don't want to create an account"
          error={errorMessage}
          name="signInForm"
          id="signInForm"
          isLoading={isLoading}
          onFormSubmit={handleSubmit}
          onFormChange={handleFormChange}
          submitButtonLabel="Sign In"
          linkButtonLabel="To Sign Up"
          linkButtonPath="/signup"
        >
          <LabeledField
            type="email"
            id="userEmailSignInInput"
            name="userEmail"
            value={email}
            onChange={handleEmailChange}
            label="Email"
            autocomplete="email"
          />
          <LabeledField
            type="password"
            id="userPasswordSignInInput"
            name="userPassword"
            value={password}
            onChange={handlePasswordChange}
            label="Password"
            autocomplete="email"
          />
        </AuthForm>
      </div>
    </main>
  );
};

export { SignIn };
