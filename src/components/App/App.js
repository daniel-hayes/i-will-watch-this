import React, { Component } from 'react';
import MovieList from '../MovieList';
import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';
import '../App/App.scss';

const App = () => (
  <div className="container">
    <Nav />
  	<Header />
	  <div className="content">
    	<MovieList />
      <Footer />
	  </div>
  </div>
);

export default App;
