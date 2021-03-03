import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameToggleAutoplayAC } from '../../../store/gameReducer/gameReducerACs';
import { autoplaySelector } from '../../../store/selectors';

const AutoplayToggler = () => {
  const dispatch = useDispatch();
  const isAutoplayOn = useSelector(autoplaySelector);

  const toggleAutoplay = () => {
    dispatch(gameToggleAutoplayAC());
  };

  return (
    <>
      <button type="button" className="main__button" onClick={toggleAutoplay}>
        Toggle autoplay
      </button>
      <p className="main__info">
        {`Autoplay is ${isAutoplayOn ? 'on' : 'off'}`}
      </p>
    </>
  );
};

export default AutoplayToggler;
