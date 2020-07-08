import config2 from '../config2';

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config2.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config2.TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config2.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
};

export default TokenService;