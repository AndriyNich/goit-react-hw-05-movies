import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = '2ea7c46495834bb72f73e9f64cf920c5';

export const loadTrendList = async abort => {
  return await axios.get('/3/trending/movie/week', {
    signal: abort.signal,
    params: { api_key: API_KEY },
  });
};
