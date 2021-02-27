/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from 'react-icons/ai';
import './FullscreenButton.scss';

const handleFullscreenOff = () => document.exitFullscreen();

const FullscreenButton = ({ status, handleFullscreenOn }) =>
  status ? (
    <button
      className="fullscreen-button"
      type="button"
      onClick={handleFullscreenOff}
    >
      <AiOutlineFullscreenExit />
    </button>
  ) : (
    <button
      className="fullscreen-button"
      type="button"
      onClick={handleFullscreenOn}
    >
      <AiOutlineFullscreen />
    </button>
  );

export default FullscreenButton;
