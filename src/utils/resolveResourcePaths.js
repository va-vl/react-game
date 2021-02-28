const importAll = (requireContext) =>
  requireContext.keys().reduce((acc, key) => {
    const index = key.match(/(?!\.\/)\d+/)[0];
    const path = requireContext(key).default;

    acc[index] = path;

    return acc;
  }, {});

const resources = {
  cardFronts: importAll(
    require.context('../assets/cards/back', false, /.svg$/),
  ),
  cardBacks: importAll(require.context('../assets/cards/back', false, /.svg$/)),
  bgm: importAll(require.context('../assets/music/', false, /.mp3$/)),
};

const resolveResourcePaths = () => {
  localStorage.removeItem('resources');
  localStorage.setItem('resources', JSON.stringify(resources));
};

export default resolveResourcePaths;
