import React from 'react';
import PropTypes from 'prop-types';
import './LabeledField.scss';

const LabeledField = ({ type, label, value, name, id, onChange }) => (
  <label className="labeled-field" htmlFor={id}>
    <span>{`${label}: `}</span>
    <input
      className="labeled-field__input"
      required
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
    />
  </label>
);

LabeledField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabeledField;
