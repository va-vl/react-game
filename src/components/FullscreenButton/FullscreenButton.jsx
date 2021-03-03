import React from 'react';
import PropTypes from 'prop-types';
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

FullscreenButton.propTypes = {
  handleFullscreenOn: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FullscreenButton;
