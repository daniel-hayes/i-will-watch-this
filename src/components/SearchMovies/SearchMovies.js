import React, { Component } from 'react';
import { apiKey } from '../../../config';
import Movie from '../Movie';
import './SearchMovies.scss';

let defaultWidth = 30;

export default class SearchMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      returnedMovies: '',
      searchValue: '',
      inputWidth: {width: defaultWidth},
      mounting: false
    };

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

  searchDropDown(searchedMovies) {
    searchedMovies = searchedMovies.map((movieVal, i) => {
      return (
        <Movie key={i} 
          movies={movieVal} 
          addRemove={this.props.addToList}
          addRemoveText="Add" />
      )
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
