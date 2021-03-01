const importAll = (requireContext) =>
  requireContext.keys().reduce((acc, key) => {
    const path = requireContext(key).default;
    acc.push(path);
    return acc;
  }, []);

const resources = {
  cardFronts: importAll(
    require.context('../assets/cards/front', false, /.svg$/),
  ),
  cardBacks: importAll(require.context('../assets/cards/back', false, /.svg$/)),
};

const resolveResources = () => {
  localStorage.removeItem('resources');
  localStorage.setItem('resources', JSON.stringify(resources));
};

const getResources = () => JSON.parse(localStorage.getItem('resources'));

export { resolveResources, getResources };
