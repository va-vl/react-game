import * as React from 'react';
import PropTypes from 'prop-types';
//
import './LabeledField.scss';

const LabeledField = ({
  type,
  label,
  name,
  id,
  value,
  onChange,
  autocomplete,
}) => (
  <label className="labeled-field" htmlFor={id}>
    <span>{`${label}: `}</span>
    <input
      required
      className="labeled-field__input"
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      id={id}
      autoComplete={autocomplete}
    />
  </label>
);

LabeledField.defaultProps = {
  autocomplete: 'off',
};

LabeledField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  autocomplete: PropTypes.string,
};

export { LabeledField };
