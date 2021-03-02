import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
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

  useEffect(() => {
    const handleMute = ({ key, altKey, metaKey }) => {
      if (key.toLowerCase() === 'm' && (altKey || metaKey)) {
        const val = !musicVolume ? 50 : 0;
        dispatch(updateMusicVolumeAC(val));
      }
    };

    document.addEventListener('keydown', handleMute);

    return () => document.removeEventListener('keydown', handleMute);
  }, [musicVolume]);

  useEffect(() => {
    const handleMute = ({ key, altKey, metaKey }) => {
      if (key.toLowerCase() === 'v' && (altKey || metaKey)) {
        const val = !soundVolume ? 50 : 0;
        dispatch(updateSoundVolumeAC(val));
      }
    };

    document.addEventListener('keydown', handleMute);

    return () => document.removeEventListener('keydown', handleMute);
  }, [soundVolume]);

  useEffect(() => {
    const handleToStats = ({ key, altKey, metaKey }) => {
      if (key.toLowerCase() === 't' && (altKey || metaKey)) {
        history.push('/stats');
      }
    };

    document.addEventListener('keydown', handleToStats);

    return () => document.removeEventListener('keydown', handleToStats);
  }, []);

  useEffect(() => {
    const handleToStats = ({ key, altKey, metaKey }) => {
      if (key.toLowerCase() === 's' && (altKey || metaKey)) {
        history.push('/settings');
      }
    };

    document.addEventListener('keydown', handleToStats);

    return () => document.removeEventListener('keydown', handleToStats);
  }, []);

  useEffect(() => {
    const handleToStats = ({ key, altKey, metaKey }) => {
      if (key.toLowerCase() === 'r' && (altKey || metaKey)) {
        dispatch(gameInitAC());
        history.push('game');
      }
    };

    document.addEventListener('keydown', handleToStats);

    return () => document.removeEventListener('keydown', handleToStats);
  }, []);

  return null;
};

export default HotKeysHandler;
