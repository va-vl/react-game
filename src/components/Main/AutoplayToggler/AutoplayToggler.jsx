import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
//
import { gameToggleAutoplayAC } from '../../../store/gameReducer/gameReducerACs';
import { autoplaySelector } from '../../../store/selectors';
//
import './AutoplayToggler.scss';

const AutoplayToggler = () => {
  const dispatch = useDispatch();
  const isAutoplayOn = useSelector(autoplaySelector);
  const { t } = useTranslation();

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
        {t('Main.AutoplayToggler.AutoplayButton')}
      </button>
      <p>{t(`Main.AutoplayToggler.${isAutoplayOn ? 'TextOn' : 'TextOff'}`)}</p>
    </div>
  );
};

export { AutoplayToggler };
