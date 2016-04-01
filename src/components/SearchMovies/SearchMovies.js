import React, { Component } from 'react';
import Movie from '../Movie';
import { apiKey, posterPath, firebaseUrl } from '../../../config';
import './SearchMovies.scss';
import Rebase from 're-base';

const baseUrl = Rebase.createClass(firebaseUrl);

let defaultWidth = 30;

export default class SearchMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      returnedMovies: '',
      searchValue: '',
      inputWidth: {width: defaultWidth},
      mounting: false,
      listStatus: 'Add'
    };

    this.addToList = this.addToList.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    let value = event.target.value;

    this.setState({
      searchValue: value,
      mounting: true
    });

    // call movie db api
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

  addToList(returnedMovie) {
    console.log(returnedMovie);
    console.log(returnedMovie.id);

    baseUrl.post(`movieList/${returnedMovie.id}`, {
      data: {
        id: returnedMovie.id,
        title: returnedMovie.title,
        poster_path: returnedMovie['poster_path'],
        overview: returnedMovie.overview,
        release_date: returnedMovie['release_date']
      }
    });
  }

  searchDropDown(searchedMovies) {
    searchedMovies = searchedMovies.map((movieVal, i) => {
      return (
        <Movie key={i} 
          movies={movieVal} 
          addRemove={this.addToList} />
      );
    });

    this.setState({
      returnedMovies: searchedMovies
    });
  }

  componentDidUpdate() {
    if (this.state.mounting === true) {
      this.setState({
        inputWidth: {width: document.getElementById('hiddenSearch').offsetWidth + defaultWidth},
        mounting: false
      });
    }
  }

  componentDidMount() {
    document.getElementById('search').focus();
  }

  render() {
    return (
      <div>
        <label className="search-label text-center" for="search">
          <i className="icon-search"></i>
          <input id="search" className="search text-center" type="text" onChange={this.handleInput} style={this.state.inputWidth} />
        </label>
        <span id="hiddenSearch" className="hidden-search-value">{this.state.searchValue}</span>
        <ul className="content">{this.state.returnedMovies}</ul>
      </div>
    );
  }
}
