import React, { Component } from 'react';
import SearchedMovie from './SearchedMovie';
import { apiKey } from '../../config';

export default class SearchMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      returnedMovies: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    let value = event.target.value;

    if (value.length > 2) {
      fetch('http://api.themoviedb.org/3/search/movie?query=' + value + '&api_key=' + apiKey, {
        method: 'get'
      })
        .then((response) => response.json())
        .then((data) => {
          this.searchDropDown(data.results);
        })
        .catch((err) => console.log(err));
    } else {
      // reset list of movies
      this.setState({returnedMovies: ''});
    }
  }

  searchDropDown(searchedMovies) {
    searchedMovies = searchedMovies.map((movieVal, i) => <SearchedMovie key={i} returnedMovie={movieVal} /> );
    this.setState({
      returnedMovies: searchedMovies
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} />
        <ul>{this.state.returnedMovies}</ul>
      </div>
    );
  }
}
