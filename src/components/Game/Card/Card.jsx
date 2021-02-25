/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { frontSrc, backSrc } = this.props;

    return (
      <div
        onClick={() => {
          console.log('hello');
        }}
      >
        <img src={backSrc} alt="card back" draggable="false" />
        <img src={frontSrc} alt="card front" draggable="false" />
      </div>
    );
  }
}

Card.propTypes = {
  frontSrc: PropTypes.string.isRequired,
  backSrc: PropTypes.string.isRequired,
};

export default Card;
