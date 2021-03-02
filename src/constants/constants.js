const DEBOUNCE_DELAY = 200;
const CLEANUP_ANIMATION_DELAY = 200;
const FLIP_ANIMATION_DELAY = 500;
const API_URL = process.env.REACT_APP_API_URL;
const GAME_SIZES = [12, 16, 20, 24];
const APP_THEMES = ['green', 'blue', 'brown'];
const HOT_KEYS = {
  r: 'start new game',
  s: 'to settings',
  t: 'to stats',
  m: 'mute music',
  v: 'mute sound',
};

export {
  DEBOUNCE_DELAY,
  CLEANUP_ANIMATION_DELAY,
  FLIP_ANIMATION_DELAY,
  API_URL,
  GAME_SIZES,
  APP_THEMES,
  HOT_KEYS,
};
