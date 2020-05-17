import axios from 'axios';

axios.interceptors.request.use(
  config => {
    config.baseURL = `${process.env.REACT_APP_API_DOMAIN}/`;

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default axios;
