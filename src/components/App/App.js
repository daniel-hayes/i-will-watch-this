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
	}

	handleOverlay() {
		let overlayState = this.state.overlayOpen === false ? true : false;
		this.setState({ overlayOpen: overlayState });
		document.body.classList.toggle('overflow-hidden');
	}

  removeMovie(index) {
    let newList = this.state.moviesToWatch;
    newList.splice(index, 1);
    this.setState({ moviesToWatch: newList });
  }

  componentDidMount() {
    baseUrl.syncState('movieList', {
      context: this,
      state: 'moviesToWatch',
      asArray: true
    });
  }

	render() {
		let overlay = this.state.overlayOpen === true ? <Overlay closeOverlay={this.handleOverlay} /> : '';

    console.log(this.state.moviesToWatch);

		return (
		  <div className="container">
		  	<Header toggleOverlay={this.handleOverlay} savedMovies={this.state.moviesToWatch.length} />
			  <div className="content">
		    	<MovieList moviesToWatch={this.state.moviesToWatch} removeMovie={this.removeMovie} />
		      <Footer />
		      {overlay}
			  </div>
		  </div>
		);
	}
}
