import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RadiosSet from '../../_common/RadiosSet/RadiosSet';
import { updateCardsAmountAC } from '../../../store/settingsReducer/settingsReducerACs';
import { gameClearProgressAC } from '../../../store/gameReducer/gameReducerACs';
import { cardsAmountSelector } from '../../../store/selectors';
import { GAME_SIZES } from '../../../constants/constants';

const CardsAmountSet = () => {
  const dispatch = useDispatch();
  const cardsAmount = useSelector(cardsAmountSelector);

  const changeAmountHandler = (event) => {
    dispatch(updateCardsAmountAC(event.target.value));
    dispatch(gameClearProgressAC());
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

export default CardsAmountSet;
