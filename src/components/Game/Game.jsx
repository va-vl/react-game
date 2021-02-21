import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import createPairs from './createPairs';
import importAll from '../../utils/importAll';
import Card from './Card/Card';

const fronts = importAll(
  require.context('../../assets/cards/front', false, /.svg$/),
);

const backs = importAll(
  require.context('../../assets/cards/back', false, /.svg$/),
);

const back = backs[0];

class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.randomPairs = createPairs(fronts);
  }

  render() {
    const { randomPairs } = this;
    const { userName } = this.props;

    return (
      <>
        <Typography>{`Hello, ${userName}!`}</Typography>
        <ul
          style={{
            display: 'grid',
            grid: 'repeat(4, auto) / repeat(4, auto)',
            width: '60%',
            margin: '0 auto',
          }}
        >
          {randomPairs.map((item, index) => {
            const keyProp = `card-${index}`;

            return <Card key={keyProp} frontSrc={item} backSrc={back} />;
          })}
        </ul>
      </>
    );
  }
}

Game.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Game;
