import React, { Component } from 'react';
import MovieList from '../MovieList';
import Header from '../Header';
import Overlay from '../Overlay';
import Footer from '../Footer';
import '../App/App.scss';
import { firebaseUrl } from '../../../config';
import Rebase from 're-base';

const baseUrl = Rebase.createClass(firebaseUrl);

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			overlayOpen: false,
      moviesToWatch: []
		};

		this.handleOverlay = this.handleOverlay.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.addToList = this.addToList.bind(this);
	}

	handleOverlay() {
		let overlayState = this.state.overlayOpen === false ? true : false;
		this.setState({ overlayOpen: overlayState });
		document.body.classList.toggle('overflow-hidden');
	}

  removeMovie(index) {
    let newList = this.state.moviesToWatch;
    newList.splice(newList.indexOf(index), 1);
    console.log(this.state.moviesToWatch);
    console.log(newList);
    this.setState({ moviesToWatch: newList });
  }

  addToList(returnedMovie) {
    this.setState({ moviesToWatch: this.state.moviesToWatch.concat([returnedMovie])});
  }

  componentDidMount() {
    baseUrl.syncState('movieList', {
      context: this,
      state: 'moviesToWatch',
      asArray: true
    });
  }

	render() {
		return (
		  <div className="container">
		  	<Header toggleOverlay={this.handleOverlay} savedMovies={this.state.moviesToWatch.length} />
			  <div className="content">
		    	<MovieList moviesToWatch={this.state.moviesToWatch} removeMovie={this.removeMovie} />
		      <Footer />
		      {this.state.overlayOpen ? <Overlay closeOverlay={this.handleOverlay} savedMovies={this.state.moviesToWatch} addToList={this.addToList} /> : ''}
			  </div>
		  </div>
		);
	}
}
