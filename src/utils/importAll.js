function importAll(requireContext) {
  return requireContext.keys().reduce((acc, key) => {
    acc.push(requireContext(key).default);
    return acc;
  }, []);
}

export default importAll;
