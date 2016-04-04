import React, { Component } from 'react';
import { apiKey } from '../../../config';
import Movie from '../Movie';
import helpers from '../../utils/helpers';
import './SearchMovies.scss';

let defaultWidth = 30;

export default class SearchMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      returnedMovies: '',
      searchValue: '',
      loadPage: 1,
      totalPages: 0,
      inputWidth: {width: defaultWidth},
      mounting: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.loadMoreMovies = this.loadMoreMovies.bind(this);
  }

  handleInput(event) {
    let value = event.target.value;

    this.setState({
      searchValue: value,
      mounting: true
    });

    // call movie db api
    if (value.length > 2) {
      helpers.searchMovieDb(value)
        .then((response) => {
          this.searchedMovies(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      // reset list of movies
      this.setState({returnedMovies: ''});
    }

    this.setState({
      loadPage: 1,
      totalPages: 0
    });
  }

  searchedMovies(searchedMovies) {
    let totalPages = searchedMovies['total_pages'];

    searchedMovies = searchedMovies.results.map((movieVal) => {
      return (
        <Movie key={movieVal.id + this.state.loadPage}
          movies={movieVal}
          addRemove={this.props.addToList}
          savedMovies={this.props.savedMovies}
          addRemoveText="Add" />
      )
    });

    let loadMore = this.state.loadPage === 1 ? searchedMovies : this.state.returnedMovies.concat(searchedMovies);

    this.setState({
      returnedMovies: loadMore,
      totalPages: totalPages
    });
  }

  loadMoreMovies() {
    let nextPage = this.state.loadPage + 1;

    helpers.searchMovieDb(this.state.searchValue, nextPage)
      .then((response) => {
        this.searchedMovies(response.data);
      })
      .catch((err) => console.log(err));

    this.setState({ loadPage: nextPage });
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
        <div className="load-more-wrapper text-center">
          {this.state.totalPages > 1 && this.state.loadPage < this.state.totalPages ? <button className="load-more lrg-txt" onClick={this.loadMoreMovies}>Load More</button> : null}
        </div>
      </div>
    );
  }
}
