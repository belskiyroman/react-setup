const routeTemplater = (template, config) => {
  const replacer = (match, group, key, delimiter = '') => (config[key] || '') + delimiter;
  return template
    .replace(/(:(\w+?))(\/|&)/g, replacer)
    .replace(/(:(\w+?))()$/, replacer);
};

export default routeTemplater;
