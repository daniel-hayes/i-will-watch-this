import React, { Component } from 'react';
import { posterPath, firebaseUrl } from '../../../config';
import AddRemoveButton from '../AddRemoveButton';
import InfoButton from '../InfoButton';
import Rebase from 're-base';

const baseUrl = Rebase.createClass(firebaseUrl);

export default class SearchedMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSearchedMovieClick = this.handleSearchedMovieClick.bind(this);
  }

  handleSearchedMovieClick() {
    console.log(this.props);
    let addMovie = this.props.returnedMovie;

    // TODO Clean up
    baseUrl.post(`movieList/${addMovie.id}`, {
      data: {
        title: addMovie.title,
        posterPath: addMovie['poster_path'],
        overview: addMovie.overview,
        releaseDate: addMovie['release_date'],
        voteAverage: addMovie['vote_average']
      }
    });
  }

  render() {
    let movieVal = this.props.returnedMovie,
      formatDate = '';

    console.log(movieVal);

    if (movieVal['release_date']) {
      formatDate = '(' + movieVal['release_date'].substring(0, 4) + ')';
    }

    return (
      <li>
        <img src={posterPath + movieVal['poster_path']} alt={movieVal.title} />
        {movieVal.title}
        {formatDate}
        <AddRemoveButton handleClick={this.handleSearchedMovieClick} />
        <InfoButton />
      </li>
    );
  }
}
