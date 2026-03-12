import axios from 'axios';

const mealdbApi = axios.create({
  baseURL: import.meta.env.VITE_MEALDB_API_URL || 'https://www.themealdb.com/api/json/v1/1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mealdbApi;
