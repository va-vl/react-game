import React from 'react';
import PropTypes from 'prop-types';
import './RangeSlider.scss';

const RangeSlider = ({ label, id, name, value, changeHandler }) => (
  <label htmlFor={id} className="range-slider">
    <span className="range-slider__label">{`${label}: `}</span>
    <input
      id={id}
      name={name}
      onChange={changeHandler}
      className="range-slider__slider"
      type="range"
      min="0"
      max="100"
      value={value}
    />
    <output htmlFor={name} className="range-slider__value">
      {value}
    </output>
  </label>
);

RangeSlider.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default RangeSlider;
