import axios from 'axios';

import { getAccessToken, getRefreshToken, storeAccessToken } from './storage';

const api = axios.create({
  baseURL: 'http://10.0.0.101:8000/api',
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await getAccessToken();
    console.log('interpect request ', config.url);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const refreshToken = await getRefreshToken();
      if (refreshToken !== null) {
        return new Promise(function (resolve, reject) {
          api
            .post('/token/refresh/', { refresh: refreshToken })
            .then((response) => {
              storeAccessToken(response.data.access);
              api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
              originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
              resolve(axios(originalRequest));
            })
            .catch(async (err) => {
              //await removeTokens();
              reject(err);
            });
        });
      }
    }
  }
);

export default api;
