import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
//
import { updateMusicVolumeAC } from '../../../store/settingsReducer/settingsReducerACs';
import { musicVolumeSelector } from '../../../store/selectors';
//
import { RangeSlider } from '../../_common';

const MusicVolumeSlider = () => {
  const dispatch = useDispatch();
  const musicVolume = useSelector(musicVolumeSelector);
  const { t } = useTranslation();

  const changeMusicHandler = (event) => {
    dispatch(updateMusicVolumeAC(event.target.value));
  };

  return (
    <RangeSlider
      label={t('Settings.MusicVolumeSlider.Legend')}
      name="settingMusicVolume"
      id="settingMusicVolume"
      value={musicVolume}
      changeHandler={changeMusicHandler}
    />
  );
};

export { MusicVolumeSlider };
