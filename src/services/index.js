import axios from 'axios';

const DEBUG = process.env.NODE_ENV === 'development';

const api = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
    'X-GUEST': 'error',
    'X-Forwarded-User': DEBUG ? 'aakumar@noon.com' : ''
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (DEBUG) {console.info('✉️ ', config);}
  return config;
}, (error) => {
  if (DEBUG) {console.error('✉️ ', error);}
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  if (DEBUG) {console.info('📩 ', response);}
  return response;
}, (error) => {
  if (error.response) {
    throw axios.Cancel(error);
  }
  if (error.response && error.response.data) {
    if (DEBUG) {console.error('Error: ', error.response.data);}
    return Promise.reject(error.response.data);
  }
  if (DEBUG) {console.error('📩 ', error);}
  return Promise.reject(error.message);
});

export default {
  submit: (payload) => api.post('/submit', payload),
  fetchSignedUrl: (params) => api.get('/api/storage/s3/signed-url/public-read', { params }),
  uploadImage: (payload) => api.post('/upload', payload)
};
