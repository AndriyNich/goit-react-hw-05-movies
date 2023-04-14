import { useState, useEffect } from 'react';
import { loadTrendList } from 'services/api';
import { MoviesList } from '../components/MoviesList/MoviesList';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    loadTrendList(abortController).then(data => {
      console.log(data.data.results);
      setMoviesList(data.data.results);
    });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      {moviesList.length > 0 && <MoviesList data={moviesList} />}
    </main>
  );
};

export default Home;
