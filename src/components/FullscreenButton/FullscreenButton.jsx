import * as React from 'react';
import PropTypes from 'prop-types';
//
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from 'react-icons/ai';
//
import './FullscreenButton.scss';

const handleFullscreenOff = () => document.exitFullscreen();

const FullscreenButton = ({ status, handleFullscreenOn }) => (
  <button
    type="button"
    className="fullscreen-button"
    onClick={status ? handleFullscreenOff : handleFullscreenOn}
  >
    {status ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
  </button>
);

FullscreenButton.propTypes = {
  handleFullscreenOn: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

export { FullscreenButton };
