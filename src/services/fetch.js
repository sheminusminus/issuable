import axios from 'axios';

// shared axios instance
const instance = axios.create({
  baseURL: 'https://api.github.com',
});

// set axios instance auth token
export function setAuth(token) {
  instance.defaults.headers.common.Authorization = `token ${token}`;
}

// axios.get wrapper
export async function get(url, config) {
  return instance.get(url, config);
}
