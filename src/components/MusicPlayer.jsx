import * as React from 'react';
import useSound from 'use-sound';
//
import { useSelector } from 'react-redux';
import { musicVolumeSelector } from '../store/selectors';
//
import bgm from '../assets/bgm/01-kalimba-relaxation-music.mp3';

const MusicPlayer = () => {
  const musicVolume = useSelector(musicVolumeSelector);

  const [play, { isPlaying }] = useSound(bgm, {
    volume: musicVolume / 1000,
    interrupt: false,
  });

  React.useEffect(() => {
    const startMusic = () => {
      play();
      document.body.removeEventListener('click', startMusic);
    };

    document.body.addEventListener('click', startMusic);
  }, [play]);

  React.useEffect(() => {
    if (!isPlaying) {
      play();
    }
  }, [isPlaying]);

  return null;
};

export { MusicPlayer };
