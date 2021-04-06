import * as React from 'react';
//
import { useSelector, useDispatch } from 'react-redux';
import { updateCardsAmountAC } from '../../../store/settingsReducer/settingsReducerACs';
import { gameResetAC } from '../../../store/gameReducer/gameReducerACs';
import { cardsAmountSelector } from '../../../store/selectors';
//
import { RadiosSet } from '../../_common';
//
import { GAME_SIZES } from '../../../constants/constants';

const CardsAmountSet = () => {
  const dispatch = useDispatch();
  const cardsAmount = useSelector(cardsAmountSelector);

  const changeAmountHandler = (event) => {
    dispatch(updateCardsAmountAC(event.target.value));
    dispatch(gameResetAC());
  };

  return (
    <RadiosSet
      name="cardsAmount"
      legend="Cards amount:"
      sourceArr={GAME_SIZES}
      defaultValue={cardsAmount}
      changeHandler={changeAmountHandler}
    />
  );
};

export { CardsAmountSet };
