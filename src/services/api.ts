import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for modifying requests
api.interceptors.request.use(
  config => {
    // Modify the config object here, such as adding authentication token or other headers
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add response interceptor for handling responses
api.interceptors.response.use(
  response => {
    // Modify the response object here, such as handling success status codes
    return response;
  },
  error => {
    // Handle errors here, such as displaying error messages or redirecting to an error page
    return Promise.reject(error);
  },
);

export default api;
