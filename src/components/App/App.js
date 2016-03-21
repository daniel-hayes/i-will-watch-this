import React, { Component } from 'react';
import SearchMovies from '../SearchMovies';
import MovieList from '../MovieList';

const App = () => (
  <div className="container">
    <SearchMovies />
    <MovieList />
  </div>
);

export default App;
