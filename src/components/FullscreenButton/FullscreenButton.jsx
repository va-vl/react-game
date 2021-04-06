import * as React from 'react';
import PropTypes from 'prop-types';
//
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from 'react-icons/ai';
//
import './FullscreenButton.scss';

const handleFullscreenOff = () => document.exitFullscreen();

const FullscreenButton = ({ status, handleFullscreenOn }) =>
  status ? (
    <button
      type="button"
      className="fullscreen-button"
      onClick={handleFullscreenOff}
    >
      <AiOutlineFullscreenExit />
    </button>
  ) : (
    <button
      type="button"
      className="fullscreen-button"
      onClick={handleFullscreenOn}
    >
      <AiOutlineFullscreen />
    </button>
  );

FullscreenButton.propTypes = {
  handleFullscreenOn: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

export { FullscreenButton };
