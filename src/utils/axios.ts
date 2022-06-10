import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gurubook.evnnews.com',
  headers: {
    'Content-Type': 'application/json'
  }
});
