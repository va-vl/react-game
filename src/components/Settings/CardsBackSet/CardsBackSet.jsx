import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RadiosSet from '../../_common/RadiosSet/RadiosSet';
import { updateCardsBackAC } from '../../../store/settingsReducer/settingsReducerACs';
import { cardsBackIndexSelector } from '../../../store/selectors';
import { getResources } from '../../../utils/storage';

const CardsBackSet = () => {
  const dispatch = useDispatch();
  const cardsBackIndex = useSelector(cardsBackIndexSelector);
  const { cardBacks } = getResources();

  const changeBackHandler = (event) => {
    dispatch(updateCardsBackAC(event.target.value));
  };

  return (
    <RadiosSet
      name="cardsBack"
      legend="Cards back:"
      sourceArr={cardBacks}
      defaultValue={cardsBackIndex}
      changeHandler={changeBackHandler}
    />
  );
};

export default CardsBackSet;
