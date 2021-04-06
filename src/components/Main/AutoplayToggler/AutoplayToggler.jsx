import * as React from 'react';
//
import { useDispatch, useSelector } from 'react-redux';
import { gameToggleAutoplayAC } from '../../../store/gameReducer/gameReducerACs';
import { autoplaySelector } from '../../../store/selectors';
//
import './AutoplayToggler.scss';

const AutoplayToggler = () => {
  const dispatch = useDispatch();
  const isAutoplayOn = useSelector(autoplaySelector);

  const toggleAutoplay = () => {
    dispatch(gameToggleAutoplayAC());
  };

  return (
    <div className="autoplay-toggler">
      <button
        type="button"
        className="autoplay-toggler__button"
        onClick={toggleAutoplay}
      >
        Toggle autoplay
      </button>
      <p>{`Autoplay is ${isAutoplayOn ? 'on' : 'off'}`}</p>
    </div>
  );
};

export { AutoplayToggler };
