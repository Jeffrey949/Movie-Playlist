import { useEffect, useState } from 'react';
import axios from 'redaxios';
import ResultCard from './ResultCard';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Add() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const debouncedQuery = useDebouncedValue(query, 300);
  useDocumentTitle('Add Movie');

  // const { API_KEY } = import.meta.env;
  const Url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=3aeaaa014d0a9a93c5525075579e4b08`;

  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setMovies([]);
      return;
    }
    async function searchMovie() {
      try {
        const response = await axios.get(Url);
        const data = response.data;
        setMovies(data.results);
      } catch (error) {
        setMovies([]);
      }
    }
    searchMovie();
  }, [debouncedQuery]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="search"
              placeholder="Search for Movies"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
