//U99350821
import React from 'react';

const MovieSelector = ({ movies, selectedMovie, onSelectMovie }) => {
  return (
    <div className="movie-selector">
      <label htmlFor="movie-select">Select a movie:</label>
      <select
        id="movie-select"
        value={selectedMovie}
        onChange={(e) => onSelectMovie(e.target.value)}
      >
        {movies.map((movie) => (
          <option key={movie} value={movie}>
            {movie}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieSelector;
