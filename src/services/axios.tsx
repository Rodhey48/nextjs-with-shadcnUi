// services/api.js
import axios from 'axios';
import Swal from 'sweetalert2';

const API_BASE_URL = 'https://dev-api.eduku.io/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, data } = error.response;
      Swal.fire({
        icon: 'error',
        title: `Error ${status}`,
        text: data.message || 'An error occurred',
      });
    } else if (error.request) {
      // The request was made but no response was received
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Please check your internet connection',
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'An error occurred',
      });
    }
    return Promise.reject(error.response.data);
  }
);

export default api;
