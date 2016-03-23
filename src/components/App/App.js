import React, { Component } from 'react';
import SearchMovies from '../SearchMovies';
import MovieList from '../MovieList';
import '../App/App.scss';

const App = () => (
  <div className="container">
  	<header>this is the header</header>
	  <nav>
			<h1 className="page-title text-center">IWWT</h1>
			<h2>Add Movie</h2>
			<h2>List 1</h2>
			<h2>List 2</h2>
			<h2>List 3</h2>
			<h2>List 4</h2>
			<h2>List 5</h2>
			<h2>List 6</h2>
	  </nav>
	  <div className="content">
    	<MovieList />
      <SearchMovies />
	  </div>
  </div>
);

export default App;
