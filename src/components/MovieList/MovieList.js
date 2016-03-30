import React, { Component } from 'react';
import { firebaseUrl } from '../../../config';
import Movie from '../Movie';
import './MovieList.scss';
import Rebase from 're-base';

const baseUrl = Rebase.createClass(firebaseUrl);


export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesToWatch: [],
      searchString: ''
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    baseUrl.syncState('movieList', {
      context: this,
      state: 'moviesToWatch',
      asArray: true
    });
  }

  handleFilter(event) {
    this.setState({ searchString: event.target.value.toLowerCase() });
  }

  remove(index) {
    let newList = this.state.moviesToWatch;
    newList.splice(index, 1);
    this.setState({ moviesToWatch: newList });
  }

  render() {
    let listOfMovies = this.state.moviesToWatch,
        searchString = this.state.searchString;

    if (searchString.length) {
      listOfMovies = listOfMovies.filter(m => m.title.toLowerCase().match(searchString));
    }

    if (listOfMovies.length) {
      listOfMovies = listOfMovies.map((movie, i) => <Movie key={i} index={i} remove={this.remove} movies={movie} />);
    }
    return (
      <div className="movie-list-wrapper">
        <input type="text" placeholder="Search saved movies" onChange={this.handleFilter} />
        <ul className="movie-list-container">{listOfMovies}</ul>
      </div>
    );
  }
}
