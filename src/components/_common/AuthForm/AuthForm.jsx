import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { LabeledField } from '..';
//
import './AuthForm.scss';

const AuthForm = ({ name, id, onSubmit, onChange, fields }) => (
  <form name={name} id={id} onSubmit={onSubmit} onChange={onChange}>
    {fields.map((fieldConfig) => (
      <div className="auth-form__input">
        <LabeledField {...fieldConfig} />
      </div>
    ))}
    {name === 'signInForm' ? (
      <div>
        <button className="auth-form__button" type="submit">
          Login
        </button>
        <Link className="auth-form__button" to="/signup">
          To Sign Up
        </Link>
      </div>
    ) : (
      <div>
        <button className="auth-form__button" type="submit">
          Sign Up
        </button>
        <Link className="auth-form__button" to="/signin">
          To Sign In
        </Link>
      </div>
    )}
  </form>
);

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  fields: PropTypes.instanceOf(Array).isRequired,
  register: PropTypes.func.isRequired,
};

export { AuthForm };
