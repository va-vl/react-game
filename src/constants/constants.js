const FLIP_ANIMATION_DELAY = 400;
const MATCH_ANIMATION_DELAY = 500;
const SOUND_DELAY = 100;
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
  MATCH_ANIMATION_DELAY,
  FLIP_ANIMATION_DELAY,
  SOUND_DELAY,
  API_URL,
  GAME_SIZES,
  APP_THEMES,
  HOT_KEYS,
};
