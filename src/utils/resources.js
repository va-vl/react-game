const importImages = (requireContext) =>
  requireContext.keys().reduce((acc, key) => {
    const path = requireContext(key).default;
    acc.push(path);
    return acc;
  }, []);

const importSounds = (requireContext) =>
  requireContext.keys().reduce((acc, key) => {
    const path = requireContext(key).default;
    const keyProp = key.match(/\w+/);
    acc[keyProp] = path;
    return acc;
  }, {});

const resources = {
  cardFronts: importImages(
    require.context('../assets/cards/front', false, /.svg$/),
  ),
  cardBacks: importImages(
    require.context('../assets/cards/back', false, /.svg$/),
  ),
  sfx: importSounds(require.context('../assets/sfx', false, /.mp3$/)),
};

const resolveResources = () => {
  localStorage.removeItem('resources');
  localStorage.setItem('resources', JSON.stringify(resources));
};

const getResources = () => JSON.parse(localStorage.getItem('resources'));

export { resolveResources, getResources };
