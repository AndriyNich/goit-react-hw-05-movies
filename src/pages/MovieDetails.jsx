import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <div> MovieDetails </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
