import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function ResultCard({ movie }) {
  const imageUrl = 'https://image.tmdb.org/t/p/w200';

  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  const storedMovie = watchlist.find((obj) => obj.id === movie.id);

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
            disabled={storedMovie}
          >
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
}
