import { useState } from 'react';
import axios from 'redaxios';
import MovieCard from './MovieCard';

export default function Add() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const search = (e) => {
    setQuery(e.target.value);
    searchMovie();
  };

  // const { API_KEY } = import.meta.env;
  const Url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=3aeaaa014d0a9a93c5525075579e4b08`;

  async function searchMovie() {
    try {
      const response = await axios.get(Url);
      const data = response.data;
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
      setMovies([]);
    }
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for Movies"
              value={query}
              onChange={search}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
