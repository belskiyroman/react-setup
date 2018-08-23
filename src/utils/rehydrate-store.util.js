const reHydrateStore = (storageKey) => {
  try {
    const store = localStorage.getItem(storageKey || 'storage');
    return store ? JSON.parse(store) : {};
  } catch (e) {
    localStorage.removeItem(storageKey || 'storage');
    return {};
  }
};

export default reHydrateStore;
