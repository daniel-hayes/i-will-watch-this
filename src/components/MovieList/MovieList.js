import React, { Component } from 'react';
import { firebaseUrl } from '../../../config';
import Movie from '../Movie';
import Rebase from 're-base';

const baseUrl = Rebase.createClass(firebaseUrl);

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesToWatch: []
    };

    // TODO Remove this
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    baseUrl.syncState('movieList', {
      context: this,
      state: 'moviesToWatch',
      asArray: true
    });
  }

  // TODO Remove this function
  //handleClick() {
  //  console.log('hi');
  //  this.setState({
  //    moviesToWatch: this.state.moviesToWatch.concat([obj])
  //  });
  //}

  render() {
    let listOfMovies = this.state.moviesToWatch;
    if (listOfMovies.length) {
      //console.log(listOfMovies);
      listOfMovies = listOfMovies.map((movie, i) => <Movie key={i} movies={movie} />);
    }
    return (
      <div>
        <h1>Saved Movies</h1>
        <ul className="movie-list-container">{listOfMovies}</ul>
      </div>
    );
  }
  //
  //render() {
  //  let movie = '';
  //  console.log(this.state);
  //  return(
  //    <ul>
  //      <li onClick={this.handleClick}>{this.state.moviesToWatch}</li>
  //    </ul>
  //  )
  //}
}
