import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://37.157.219.248/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
