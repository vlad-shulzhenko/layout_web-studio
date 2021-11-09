import axios from 'axios';

const BASE_URL = 'db.json';

const postsAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
})

export const getPosts = () => {
  return postsAPI.get();
}


