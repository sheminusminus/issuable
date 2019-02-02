import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com',
});

export function setAuth(token) {
  instance.defaults.headers.common.Authorization = `token ${token}`;
}

export async function get(url, config) {
  return axios.get(url, config);
}
