import React, { Component } from 'react';
import SearchMovies from '../SearchMovies';
import MovieList from '../MovieList';
import '../App/App.scss';

const App = () => (
  <div className="container">
    <div className="search">
      <h1>I Will Watch This</h1>
      <SearchMovies />
    </div>
    <MovieList />
  </div>
);

export default App;
