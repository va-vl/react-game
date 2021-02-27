function importAll(requireContext) {
  return requireContext.keys().reduce((acc, key) => {
    const index = key.match(/(?!\.\/)\d+/)[0];
    const path = requireContext(key).default;

    acc[index] = path;

    return acc;
  }, {});
}

export default importAll;
