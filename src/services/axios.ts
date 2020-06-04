import axios, { AxiosError } from 'axios';

import { refreshTokens } from './auth';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
});

apiClient.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401 && error.config.url !== 'auth/signin') {
      const success = await refreshTokens();
      if (success) {
        return axios.request(error.config);
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
