import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateCardsAmountAC,
  updateMusicVolumeAC,
  updateSoundVolumeAC,
  updateCardsBackAC,
  updateAppThemeAC,
} from '../../store/settingsReducer/settingsReducerACs';
import {
  musicVolumeSelector,
  soundVolumeSelector,
  cardsAmountSelector,
  cardsBackIndexSelector,
  appThemeSelector,
} from '../../store/selectors';
import { GAME_SIZES, APP_THEMES } from '../../constants/constants';
import RangeSlider from './RangeSlider/RangeSlider';
import RadiosSet from './RadiosSet/RadiosSet';
import importAll from '../../utils/importAll';
import './Settings.scss';

const cardBacks = importAll(
  require.context('../../assets/cards/back', false, /.svg$/),
);

const Settings = () => {
  const dispatch = useDispatch();
  const musicVolume = useSelector(musicVolumeSelector);
  const soundVolume = useSelector(soundVolumeSelector);
  const cardsAmount = useSelector(cardsAmountSelector);
  const cardsBackIndex = useSelector(cardsBackIndexSelector);
  const appTheme = useSelector(appThemeSelector);

  const changeMusicHandler = (event) => {
    dispatch(updateMusicVolumeAC(event.target.value));
  };

  const changeSoundHandler = (event) => {
    dispatch(updateSoundVolumeAC(event.target.value));
  };

  const changeAmountHandler = (event) => {
    dispatch(updateCardsAmountAC(event.target.value));
  };

  const changeBackHandler = (event) => {
    dispatch(updateCardsBackAC(event.target.value));
  };

  const changeThemeHandler = (event) => {
    dispatch(updateAppThemeAC(event.target.value));
  };

  return (
    <main className="settings">
      <div className="settings__content">
        <h3 className="settings__heading">Settings</h3>
        <form className="settings__form">
          <div className="settings__input">
            <RangeSlider
              label="Music volume"
              name="settingMusicVolume"
              id="settingMusicVolume"
              value={musicVolume}
              changeHandler={changeMusicHandler}
            />
          </div>
          <div className="settings__input">
            <RangeSlider
              label="Sound volume"
              name="settingSoundVolume"
              id="settingSoundVolume"
              value={soundVolume}
              changeHandler={changeSoundHandler}
            />
          </div>
          <div className="settings__input">
            <RadiosSet
              name="cardsAmount"
              legend="Cards amount:"
              sourceArr={GAME_SIZES}
              defaultValue={cardsAmount}
              changeHandler={changeAmountHandler}
            />
          </div>
          <div>
            <RadiosSet
              name="cardsBack"
              legend="Cards back:"
              sourceArr={Object.entries(cardBacks)}
              defaultValue={cardsBackIndex}
              changeHandler={changeBackHandler}
            />
          </div>
          <div>
            <RadiosSet
              name="appTheme"
              legend="Select app theme:"
              sourceArr={APP_THEMES}
              defaultValue={appTheme}
              changeHandler={changeThemeHandler}
            />
          </div>
        </form>
        <Link className="settings__button" to="/">
          Go back
        </Link>
      </div>
    </main>
  );
};

export default Settings;
