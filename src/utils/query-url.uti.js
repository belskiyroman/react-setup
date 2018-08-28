/* eslint-disable no-restricted-globals */

export const parseQuery = query => query
  .substr(1)
  .split('&')
  .reduce((acc, item) => {
    const [key, value] = item.split('=');
    return key && value ? { ...acc, [key]: value } : acc;
  }, {});

export const toQueryStr = params => Object.entries(params)
  .filter(([key, value]) => key && value)
  .map(item => item.join('='))
  .join('&')
  .replace(/(^)/, '?');


export const queryUrl = (params) => {
  const queryParams = parseQuery(location.search);
  const queryStr = toQueryStr({ ...queryParams, ...params });
  const url = location.pathname.replace(/\/$/, '') + queryStr;

  history.replaceState({
    ...queryParams,
    ...params,
    ...(history.state),
  }, document.title, url);
};
