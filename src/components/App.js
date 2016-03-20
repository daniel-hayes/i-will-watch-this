import React, { Component } from 'react';
import globalConfig from '../../config';

import SearchMovies from './SearchMovies';
import MovieList from './MovieList';

console.log(globalConfig);

const App = () => (
  <div className="container">
    <SearchMovies />
    <MovieList />
  </div>
);

export default App;
