import * as React from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
import { useSelector } from 'react-redux';
//
import { musicVolumeSelector } from '../store/selectors';
//
import bgm from '../assets/bgm/01-kalimba-relaxation-music.mp3';

const MusicContext = React.createContext();
const useMusic = () => React.useContext(MusicContext);

const MusicProvider = ({ children }) => {
  const musicVolume = useSelector(musicVolumeSelector);

  const [play, { isPlaying, stop }] = useSound(bgm, {
    volume: musicVolume / 1000,
    interrupt: true,
    loop: true,
  });

  return (
    <MusicContext.Provider value={{ isPlaying, play, stop }}>
      {children}
    </MusicContext.Provider>
  );
};

MusicProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MusicProvider, useMusic };
