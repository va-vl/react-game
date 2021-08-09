import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { useTranslation } from 'react-i18next';
//
import { AuthForm, LabeledField } from '../_common';
//
import './SignIn.scss';

const SignIn = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const { t } = useTranslation();
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
          heading={t('SignIn.Heading')}
          note={t('SignIn.Note')}
          error={errorMessage}
          name="signInForm"
          id="signInForm"
          isLoading={isLoading}
          onFormSubmit={handleSubmit}
          onFormChange={handleFormChange}
          submitButtonLabel={t('SignIn.SubmitButtonLabel')}
          linkButtonLabel={t('SignIn.LinkButtonLabel')}
          linkButtonPath="/signup"
        >
          <LabeledField
            type="email"
            id="userEmailSignInInput"
            name="userEmail"
            value={email}
            onChange={handleEmailChange}
            label={t('SignIn.EmailLabel')}
            autocomplete="email"
          />
          <LabeledField
            type="password"
            id="userPasswordSignInInput"
            name="userPassword"
            value={password}
            onChange={handlePasswordChange}
            label={t('SignIn.PasswordLabel')}
            autocomplete="email"
          />
        </AuthForm>
      </div>
    </main>
  );
};

export { SignIn };
