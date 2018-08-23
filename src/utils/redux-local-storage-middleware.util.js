const localStorageMiddleware = storageKey => ({ getState }) => next => (action) => {
  const result = next(action);
  localStorage.setItem(storageKey || 'storage', JSON.stringify(getState()));
  return result;
};

export default localStorageMiddleware;
