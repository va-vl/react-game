import { useEffect } from 'react';
import useSound from 'use-sound';
import { useSelector } from 'react-redux';
import bgm from '../../assets/bgm/01-kalimba-relaxation-music.mp3';
import { musicVolumeSelector } from '../../store/selectors';

const MusicPlayer = () => {
  const musicVolume = useSelector(musicVolumeSelector);

  const [play, { isPlaying }] = useSound(bgm, {
    volume: musicVolume / 1000,
    interrupt: false,
  });

  useEffect(() => {
    const startMusic = () => {
      play();
      document.body.removeEventListener('click', startMusic);
    };

    document.body.addEventListener('click', startMusic);
  }, [play]);

  useEffect(() => {
    if (!isPlaying) {
      play();
    }
  }, [isPlaying]);

  return null;
};

export default MusicPlayer;
