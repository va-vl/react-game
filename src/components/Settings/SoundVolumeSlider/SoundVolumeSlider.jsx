import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
//
import { updateSoundVolumeAC } from '../../../store/settingsReducer/settingsReducerACs';
import { soundVolumeSelector } from '../../../store/selectors';
//
import { RangeSlider } from '../../_common';

const SoundVolumeSlider = () => {
  const dispatch = useDispatch();
  const musicVolume = useSelector(soundVolumeSelector);
  const { t } = useTranslation();

  const changeSoundHandler = (event) => {
    dispatch(updateSoundVolumeAC(event.target.value));
  };

  return (
    <RangeSlider
      label={t('Settings.SoundVolumeSlider.Legend')}
      name="settingSoundVolume"
      id="settingSoundVolume"
      value={musicVolume}
      changeHandler={changeSoundHandler}
    />
  );
};

export { SoundVolumeSlider };
