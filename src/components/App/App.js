import React, { Component } from 'react';
import MovieList from '../MovieList';
import Header from '../Header';
import Nav from '../Nav';
import Overlay from '../Overlay';
import Footer from '../Footer';
import '../App/App.scss';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			overlayOpen: false
		};
		
		this.handleNav = this.handleNav.bind(this);
		this.handleOverlay = this.handleOverlay.bind(this);
	}

	handleNav() {
    document.body.classList.toggle('nav-open');
  }

	handleOverlay() {
		let overlayState = this.state.overlayOpen === false ? true : false;
		this.setState({ overlayOpen: overlayState });
		document.body.classList.toggle('overflow-hidden');
	}

	render() {
		let overlay = this.state.overlayOpen === true ? <Overlay closeOverlay={this.handleOverlay} /> : '';

		return (
		  <div className="container">
		    <Nav />
		  	<Header toggleNav={this.handleNav} toggleOverlay={this.handleOverlay} />
			  <div className="content">
		    	<MovieList />
		      <Footer />
		      {overlay}
			  </div>
		  </div>
		);
	}
}
