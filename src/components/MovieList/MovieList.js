import React, { Component } from 'react';
import { firebaseUrl } from '../../../config';
import Movie from '../Movie';
import Overlay from '../Overlay';
import './MovieList.scss';
import Rebase from 're-base';

const baseUrl = Rebase.createClass(firebaseUrl);


export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesToWatch: [],
      sortList: '',
      searchString: ''
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.sort = this.sort.bind(this);
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
    this.setState({ searchString: event.target.value });
  }

  sort() {
    this.setState({ sortList: 'asc' });

    this.state.moviesToWatch.sort((a, b) => {
      let titleA = a.title.toUpperCase(),
        titleB = b.title.toUpperCase();
      return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
    });
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
        <div onClick={this.sort}>sort</div>
        <input type="text" placeholder="Search saved movies" onChange={this.handleFilter} />
        <Overlay />
        <ul className="movie-list-container">{listOfMovies}</ul>
      </div>
    );
  }
}
