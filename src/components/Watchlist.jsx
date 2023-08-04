import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  useDocumentTitle('watchlist');

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} type="watchlist" />
              </li>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies yet in your watchlist</h2>
        )}
      </div>
    </div>
  );
}
