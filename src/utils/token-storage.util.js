class TokenStorage {
  constructor(storage, key) {
    this.storage = storage;
    this.key = key;
  }

  getToken() {
    return this.storage.getItem(this.key);
  }

  setToken(token) {
    return this.storage.setItem(this.key, token);
  }

  removeToken() {
    this.storage.removeItem(this.key);
  }
}

export default TokenStorage;
