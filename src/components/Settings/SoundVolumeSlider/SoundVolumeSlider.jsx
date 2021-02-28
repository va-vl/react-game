import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSoundVolumeAC } from '../../../store/settingsReducer/settingsReducerACs';
import { soundVolumeSelector } from '../../../store/selectors';
import RangeSlider from '../../_common/RangeSlider/RangeSlider';

const SoundVolumeSlider = () => {
  const dispatch = useDispatch();
  const musicVolume = useSelector(soundVolumeSelector);
  const changeSoundHandler = (event) => {
    dispatch(updateSoundVolumeAC(event.target.value));
  };

  return (
    <RangeSlider
      label="Sound volume"
      name="settingSoundVolume"
      id="settingSoundVolume"
      value={musicVolume}
      changeHandler={changeSoundHandler}
    />
  );
};

export default SoundVolumeSlider;
