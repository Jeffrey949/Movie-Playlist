import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function ResultCard({ movie }) {
  const imageUrl = 'https://image.tmdb.org/t/p/w200';

  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(GlobalContext);

  const storedMovie = watchlist.find((obj) => obj.id === movie.id);
  const storedMovieWatchted = watched.find((obj) => obj.id === movie.id);
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatchted
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`${imageUrl}${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : '--'}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToWatchlist(movie)}
            // onClick={console.log('hello')}
            disabled={watchlistDisabled}
          >
            Add to WatchList
          </button>

          <button
            className="btn"
            onClick={() => addMovieToWatched(movie)}
            // onClick={console.log('hello')}
            disabled={storedMovieWatchted}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}
