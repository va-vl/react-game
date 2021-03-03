import { useEffect } from 'react';
import useSound from 'use-sound';
import { useSelector } from 'react-redux';
import { gameSoundSelector, soundVolumeSelector } from '../store/selectors';
import { getResources } from '../utils/resources';

const SoundPlayer = () => {
  const sound = useSelector(gameSoundSelector);
  const soundVolume = useSelector(soundVolumeSelector);
  const {
    sfx: { error, match, move, win },
  } = getResources();

  const [playErrorSound] = useSound(error, {
    volume: soundVolume / 1500,
  });
  const [playMatchSound] = useSound(match, {
    volume: soundVolume / 1000,
  });
  const [playMoveSound] = useSound(move, {
    volume: soundVolume / 1000,
  });
  const [playWinSound] = useSound(win, {
    volume: soundVolume / 1000,
  });

  useEffect(() => {
    switch (sound) {
      case 'error':
        playErrorSound();
        break;
      case 'match':
        playMatchSound();
        break;
      case 'move':
        playMoveSound();
        break;
      case 'win':
        playWinSound();
        break;
      default:
        break;
    }
  }, [sound]);

  return null;
};

export default SoundPlayer;
