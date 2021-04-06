import * as React from 'react';
import { useHistory } from 'react-router-dom';
//
import { useSelector, useDispatch } from 'react-redux';
import {
  cardsAmountSelector,
  musicVolumeSelector,
  soundVolumeSelector,
} from '../../store/selectors';
import {
  updateMusicVolumeAC,
  updateSoundVolumeAC,
} from '../../store/settingsReducer/settingsReducerACs';
import { gameInitAC } from '../../store/gameReducer/gameReducerACs';

const HotKeysHandler = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const musicVolume = useSelector(musicVolumeSelector);
  const soundVolume = useSelector(soundVolumeSelector);
  const cardsAmount = useSelector(cardsAmountSelector);

  React.useEffect(() => {
    const handleMute = ({ key, code, altKey, metaKey }) => {
      const keyCondition = key.toLowerCase() === 'm' || code === 'KeyM';
      const metaCondition = altKey || metaKey;

      if (keyCondition && metaCondition) {
        const val = !musicVolume ? 50 : 0;
        dispatch(updateMusicVolumeAC(val));
      }
    };

    document.addEventListener('keydown', handleMute);

    return () => document.removeEventListener('keydown', handleMute);
  }, [musicVolume]);

  React.useEffect(() => {
    const handleMute = ({ key, code, altKey, metaKey }) => {
      const keyCondition = key.toLowerCase() === 'v' || code === 'KeyV';
      const metaCondition = altKey || metaKey;

      if (keyCondition && metaCondition) {
        const val = !soundVolume ? 50 : 0;
        dispatch(updateSoundVolumeAC(val));
      }
    };

    document.addEventListener('keydown', handleMute);

    return () => document.removeEventListener('keydown', handleMute);
  }, [soundVolume]);

  React.useEffect(() => {
    const handleToStats = ({ key, code, altKey, metaKey }) => {
      const keyCondition = key.toLowerCase() === 't' || code === 'KeyT';
      const metaCondition = altKey || metaKey;

      if (keyCondition && metaCondition) {
        history.push('/stats');
      }
    };

    document.addEventListener('keydown', handleToStats);

    return () => document.removeEventListener('keydown', handleToStats);
  }, []);

  React.useEffect(() => {
    const handleToStats = ({ key, code, altKey, metaKey }) => {
      const keyCondition = key.toLowerCase() === 's' || code === 'KeyS';
      const metaCondition = altKey || metaKey;

      if (keyCondition && metaCondition) {
        history.push('/settings');
      }
    };

    document.addEventListener('keydown', handleToStats);

    return () => document.removeEventListener('keydown', handleToStats);
  }, []);

  React.useEffect(() => {
    const handleToStats = ({ key, code, altKey, metaKey }) => {
      const keyCondition = key.toLowerCase() === 'r' || code === 'KeyR';
      const metaCondition = altKey || metaKey;

      if (keyCondition && metaCondition) {
        dispatch(gameInitAC(cardsAmount));
        history.push('game');
      }
    };

    document.addEventListener('keydown', handleToStats);

    return () => document.removeEventListener('keydown', handleToStats);
  }, [cardsAmount]);

  return null;
};

export { HotKeysHandler };
