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
      {sourceArr.map((item, index) => {
        const id = `${name}${item}`;

        return (
          <label
            key={id}
            htmlFor={id}
            className={
              name === 'cardsBack'
                ? 'radios-set__wrapper--cardsBack'
                : 'radios-set__wrapper'
            }
          >
            {React.createElement('input', {
              id,
              type: 'radio',
              value: name === 'cardsBack' ? index : item,
              name: `${name}`,
              className:
                name === 'cardsBack'
                  ? 'radios-set__radio--cardsBack'
                  : 'radios-set__radio',
              defaultChecked:
                name === 'cardsBack'
                  ? index === defaultValue
                  : item === defaultValue,
            })}
            {name === 'cardsBack' ? (
              <img
                className="radios-set__label--cardsBack"
                src={item}
                alt="back"
              />
            ) : (
              <span className="radios-set__label">{item}</span>
            )}
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
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  sourceArr: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ).isRequired,
};

export default React.memo(RadiosSet);
