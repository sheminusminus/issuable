export const formatRepos = data => data.reduce((obj, item) => ({
  ...obj,
  [item.id]: item,
}), {});
