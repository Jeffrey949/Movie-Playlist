import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

export default function Watched() {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} type="watched" />
              </li>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">You have not watched any movies yet</h2>
        )}
      </div>
    </div>
  );
}
