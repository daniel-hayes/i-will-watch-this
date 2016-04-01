import React, { Component } from 'react';
import Movie from '../Movie';
import './MovieList.scss';


export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    this.setState({ searchString: event.target.value.toLowerCase() });
  }

  render() {
    let listOfMovies = this.props.moviesToWatch,
        searchString = this.state.searchString;

    if (searchString.length) {
      listOfMovies = listOfMovies.filter(m => m.title.toLowerCase().match(searchString));
    }

    if (listOfMovies.length) {
      listOfMovies = listOfMovies.map((movie, i) => <Movie key={i} index={i} addRemove={this.props.removeMovie} movies={movie} />);
    }

    return (
      <div className="movie-list-wrapper">
        <label className="filter-label" for="filter">
          <i className="icon-search"></i>
          <input type="text" className="filter" id="filter" placeholder="Search saved movies" onChange={this.handleFilter} />
        </label>
        <ul className="movie-list-container">{listOfMovies}</ul>
      </div>
    );
  }
}
