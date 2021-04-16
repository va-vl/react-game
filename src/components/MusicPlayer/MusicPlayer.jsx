import * as React from 'react';
//
import { BiPlayCircle, BiStopCircle } from 'react-icons/bi';
//
import { useMusic } from '../../contexts/MusicContext';
//
import './MusicPlayer.scss';

const MusicPlayer = () => {
  const { isPlaying, play, stop } = useMusic();

  const handleClick = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  return (
    <button type="button" className="music-button" onClick={handleClick}>
      {isPlaying ? <BiStopCircle /> : <BiPlayCircle />}
    </button>
  );
};

export { MusicPlayer };
