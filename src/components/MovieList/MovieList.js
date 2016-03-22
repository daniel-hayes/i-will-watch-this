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

    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    baseUrl.syncState('movieList', {
      context: this,
      state: 'moviesToWatch',
      asArray: true
    });
  }

  remove(index) {
    let newList = this.state.moviesToWatch;
    newList.splice(index, 1);
    this.setState({ moviesToWatch: newList });
  }

  render() {
    let listOfMovies = this.state.moviesToWatch;
    if (listOfMovies.length) {
      listOfMovies = listOfMovies.map((movie, i) => <Movie key={i} index={i} remove={this.remove} movies={movie} />);
    }
    return (
      <div>
        <h1>Saved Movies</h1>
        <ul className="movie-list-container">{listOfMovies}</ul>
      </div>
    );
  }
}
