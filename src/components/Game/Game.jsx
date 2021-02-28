import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import generateLevel from './generateLevel';
import Card from './Card/Card';

const fronts = {};

const backs = {};

const Game = () => {
  const history = useHistory();
  const cardsAmount = useSelector((state) => state.settingsReducer.cardsAmount);
  const levelLayout = generateLevel(Object.keys(fronts), cardsAmount);
  const backIndex = useSelector(
    (state) => state.settingsReducer.cardsBackIndex,
  );

  return (
    <div className="game">
      <div className="game__content">
        <ul className={`game__board game__board--${cardsAmount}`}>
          {levelLayout.map(({ cardIndex }, index) => {
            const keyProp = `card-${cardIndex}-${index}`;

            return (
              <Card
                key={keyProp}
                frontSrc={fronts[cardIndex]}
                backSrc={backs[backIndex]}
              />
            );
          })}
        </ul>
      </div>
      <button
        className="game__button"
        type="button"
        onClick={() => {
          history.push('/');
        }}
      >
        To main menu
      </button>
    </div>
  );
};

export default React.memo(Game);
