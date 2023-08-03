export default function MovieCard({ movie, type }) {
  const imageUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <div className="movie-card">
      <div className="overlay">
        {movie.poster_path ? (
          <img
            src={`${imageUrl}${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
    </div>
  );
}
