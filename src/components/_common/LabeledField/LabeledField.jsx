import * as React from 'react';
import PropTypes from 'prop-types';
//
import './LabeledField.scss';

const LabeledField = ({ type, label, name, id }) => (
  <label className="labeled-field" htmlFor={id}>
    <span>{`${label}: `}</span>
    <input
      className="labeled-field__input"
      defaultValue=""
      required
      type={type}
      name={name}
      id={id}
    />
  </label>
);

LabeledField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export { LabeledField };
