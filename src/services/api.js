import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

// https://api.themoviedb.org/3/movie/550?api_key=2ea7c46495834bb72f73e9f64cf920c5

// export const fetchData() {}

export const loadTrendList = abort => {
  return axios.get('/3/trending/movie/week', {
    params: { api_key: '2ea7c46495834bb72f73e9f64cf920c5' },
  });
};
// signal: abort.signal,
