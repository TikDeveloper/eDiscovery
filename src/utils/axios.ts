import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.2.155:5000/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});
