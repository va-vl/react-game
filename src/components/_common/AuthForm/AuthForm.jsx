import * as React from 'react';
import PropTypes from 'prop-types';
//
import { AuthFormButtons } from './AuthFormButtons';
//
import './AuthForm.scss';

const AuthForm = ({
  heading,
  note,
  error,
  name,
  id,
  isLoading,
  onFormSubmit,
  onFormChange,
  submitButtonLabel,
  linkButtonLabel,
  linkButtonPath,
  children,
}) => (
  <>
    <h3 className="auth-form__heading">{heading}</h3>
    {note && <p className="auth-form__note">{note}</p>}
    {error && <p className="auth-form__error">{error}</p>}
    <form name={name} id={id} onSubmit={onFormSubmit} onChange={onFormChange}>
      <div>{children}</div>
      <div className="auth-form__buttons">
        <AuthFormButtons
          submitButtonLabel={submitButtonLabel}
          linkButtonLabel={linkButtonLabel}
          linkButtonPath={linkButtonPath}
          isLoading={isLoading}
        />
      </div>
    </form>
  </>
);

AuthForm.defaultProps = {
  note: null,
  error: null,
  onFormChange: null,
};

AuthForm.propTypes = {
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,

  submitButtonLabel: PropTypes.string.isRequired,
  linkButtonLabel: PropTypes.string.isRequired,
  linkButtonPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,

  onFormChange: PropTypes.func,
  error: PropTypes.string,
  note: PropTypes.string,
};

export { AuthForm };
