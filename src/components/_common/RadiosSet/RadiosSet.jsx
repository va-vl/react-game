import React from 'react';
import PropTypes from 'prop-types';
import './RadiosSet.scss';

const RadiosSet = ({
  name,
  legend,
  sourceArr,
  defaultValue,
  changeHandler,
}) => (
  <fieldset onChange={changeHandler} className="radios-set">
    <legend className="radios-set__legend">{legend}</legend>
    <div className="radios-set__content">
      {name === 'cardsBack'
        ? sourceArr.map(([keyProperty, path]) => {
            const id = `${name}${keyProperty}`;

            return (
              <label
                key={id}
                htmlFor={id}
                className={`radios-set__wrapper--${name}`}
              >
                {React.createElement('input', {
                  id,
                  type: 'radio',
                  value: `${keyProperty}`,
                  name: `${name}`,
                  className: `radios-set__radio--${name}`,
                  defaultChecked: keyProperty === defaultValue,
                })}
                <img
                  className={`radios-set__label--${name}`}
                  src={path}
                  alt="back"
                />
              </label>
            );
          })
        : sourceArr.map((item) => {
            const id = `${name}${item}`;

            return (
              <label key={id} htmlFor={id}>
                {React.createElement('input', {
                  id,
                  type: 'radio',
                  value: `${item}`,
                  name: `${name}`,
                  className: 'radios-set__radio',
                  defaultChecked: item === defaultValue,
                })}
                <span className="radios-set__label">{item}</span>
              </label>
            );
          })}
    </div>
  </fieldset>
);

RadiosSet.propTypes = {
  name: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  sourceArr: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ).isRequired,
};

export default RadiosSet;
