import React from 'react';
import PropTypes from 'prop-types';
import './RangeSlider.scss';

const RangeSlider = ({ name, value, changeHandler }) => (
  <div className="range-slider">
    <h4 className="range-slider__title">{name}</h4>
    <div className="range-slider__wrapper">
      <input
        onChange={(event) => {
          changeHandler(event.target.value);
        }}
        className="range-slider__slider"
        type="range"
        min="0"
        max="100"
        value={value}
      />
      <div className="range-slider__value">{value}</div>
    </div>
  </div>
);

RangeSlider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default RangeSlider;
