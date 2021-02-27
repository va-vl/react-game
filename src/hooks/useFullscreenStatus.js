import React, { useLayoutEffect } from 'react';

/**
 * Based on the algorithm described in the following tutorial:
 * https://dev.to/darthknoppix/using-the-fullscreen-api-with-react-1lgf
 */

const FULLSCREEN_ELEMENTS = [
  'fullscreenElement',
  'mozFullScreenElement',
  'msFullscreenElement',
  'webkitFullscreenElement',
];

const getBrowserFullscreenProp = () =>
  FULLSCREEN_ELEMENTS.reduce(
    (acc, i) => (acc === null && document[i] !== undefined ? i : acc),
    null,
  ) || new Error('Your browser does not support fullscreen mode.');

const getFullscreenStatus = (fullscreenProp) =>
  document[fullscreenProp] !== null;

const useFullscreenStatus = (elementRef) => {
  const fullscreenProp = getBrowserFullscreenProp();
  const [isFullscreen, setIsFullscreen] = React.useState(
    getFullscreenStatus(fullscreenProp),
  );

  const setFullscreen = () => {
    if (elementRef.current === null) return;

    elementRef.current
      .requestFullscreen()
      .then(() => {
        setIsFullscreen(getFullscreenStatus(fullscreenProp));
      })
      .catch(() => {
        setIsFullscreen(false);
      });
  };

  useLayoutEffect(() => {
    document.onfullscreenchange = () => {
      setIsFullscreen(getFullscreenStatus(fullscreenProp));
    };

    return () => {
      document.onfullscreenchange = undefined;
    };
  });

  return [isFullscreen, setFullscreen];
};

export default useFullscreenStatus;
