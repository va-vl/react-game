import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMusicVolumeAC } from '../../../store/settingsReducer/settingsReducerACs';
import { musicVolumeSelector } from '../../../store/selectors';
import RangeSlider from '../../_common/RangeSlider/RangeSlider';

const MusicVolumeSlider = () => {
  const dispatch = useDispatch();
  const musicVolume = useSelector(musicVolumeSelector);
  const changeMusicHandler = (event) => {
    dispatch(updateMusicVolumeAC(event.target.value));
  };

  return (
    <RangeSlider
      label="Music volume"
      name="settingMusicVolume"
      id="settingMusicVolume"
      value={musicVolume}
      changeHandler={changeMusicHandler}
    />
  );
};

export default MusicVolumeSlider;
