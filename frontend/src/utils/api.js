import axios from 'axios';
// const token = localStorage.getItem('token');
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // ← set once here
  withCredentials: true, // optional if you're using cookies/sessions
});

export default api;
