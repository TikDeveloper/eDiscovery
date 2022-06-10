import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gurubook.evnnews.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
