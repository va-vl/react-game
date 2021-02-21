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
        style={{
          position: 'relaitve',
          width: '100px',
          height: '120px',
        }}
      >
        <img
          style={{
            position: 'absolute',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
          }}
          src={backSrc}
          alt="card back"
          width="100"
          height="120"
        />
        <img
          style={{
            position: 'absolute',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          src={frontSrc}
          alt="card front"
          width="100"
          height="120"
        />
      </div>
    );
  }
}

Card.propTypes = {
  frontSrc: PropTypes.string.isRequired,
  backSrc: PropTypes.string.isRequired,
};

export default Card;
