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
    console.log(index, 'index');
    console.log(newList.indexOf(index), 'indexof');
    console.log(newList);
    // newList.splice(index, 1);
    // console.log(newList);
    // this.setState({ moviesToWatch: newList });
  }

  componentDidMount() {
    this.ref = baseUrl.syncState('movieList', {
      context: this,
      state: 'moviesToWatch',
      asArray: true
    });
  }

  componentWillUnmount(){
    baseUrl.removeBinding(this.ref);
  }

	render() {
		return (
		  <div className="container">
		  	<Header toggleOverlay={this.handleOverlay} savedMovies={this.state.moviesToWatch.length} />
			  <div className="content">
		    	<MovieList moviesToWatch={this.state.moviesToWatch} removeMovie={this.removeMovie} />
		      <Footer />
		      {this.state.overlayOpen ? <Overlay closeOverlay={this.handleOverlay} /> : ''}
			  </div>
		  </div>
		);
	}
}
