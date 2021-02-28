import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ frontSrc, backSrc }) => (
  <div>
    <img src={backSrc} alt="card back" draggable="false" />
    <img src={frontSrc} alt="card front" draggable="false" />
  </div>
);

Card.propTypes = {
  frontSrc: PropTypes.string.isRequired,
  backSrc: PropTypes.string.isRequired,
};

export default Card;
