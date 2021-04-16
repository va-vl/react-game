import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//
import {
  cardsAmountSelector,
  musicVolumeSelector,
  soundVolumeSelector,
} from '../store/selectors';
import {
  updateMusicVolumeAC,
  updateSoundVolumeAC,
} from '../store/settingsReducer/settingsReducerACs';
import { gameInitAC } from '../store/gameReducer/gameReducerACs';

const isHotKeyPressed = ({ key, code, altKey, metaKey }, hotKey) => {
  if (!key) {
    return false;
  }

  const keyCondition = key.toLowerCase() === hotKey.toLowerCase();
  const codeCondition = code === `Key${hotKey.toUpperCase()}`;
  const metaCondition = altKey || metaKey;

  return (keyCondition || codeCondition) && metaCondition;
};

const HotKeysHandler = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const musicVolume = useSelector(musicVolumeSelector);
  const soundVolume = useSelector(soundVolumeSelector);
  const cardsAmount = useSelector(cardsAmountSelector);

  React.useEffect(() => {
    const handleMuteMusic = (event) => {
      if (isHotKeyPressed(event, 'm')) {
        const val = !musicVolume ? 50 : 0;
        dispatch(updateMusicVolumeAC(val));
      }
    };

    document.addEventListener('keydown', handleMuteMusic);

    return () => document.removeEventListener('keydown', handleMuteMusic);
  }, [musicVolume]);

  React.useEffect(() => {
    const handleMuteSound = (event) => {
      if (isHotKeyPressed(event, 'v')) {
        const val = !soundVolume ? 50 : 0;
        dispatch(updateSoundVolumeAC(val));
      }
    };

    document.addEventListener('keydown', handleMuteSound);

    return () => document.removeEventListener('keydown', handleMuteSound);
  }, [soundVolume]);

  React.useEffect(() => {
    const handleToStats = (event) => {
      if (isHotKeyPressed(event, 't')) {
        history.push('/stats');
      }
    };

    document.addEventListener('keydown', handleToStats);

    return () => document.removeEventListener('keydown', handleToStats);
  }, []);

  React.useEffect(() => {
    const handleToSettings = (event) => {
      if (isHotKeyPressed(event, 's')) {
        history.push('/settings');
      }
    };

    document.addEventListener('keydown', handleToSettings);

    return () => document.removeEventListener('keydown', handleToSettings);
  }, []);

  React.useEffect(() => {
    const handleToGame = (event) => {
      if (isHotKeyPressed(event, 'r')) {
        dispatch(gameInitAC(cardsAmount));
        history.push('game');
      }
    };

    document.addEventListener('keydown', handleToGame);

    return () => document.removeEventListener('keydown', handleToGame);
  }, [cardsAmount]);

  return null;
};

export { HotKeysHandler };
