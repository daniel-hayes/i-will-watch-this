import React, { Component } from 'react';
import { posterPath, firebaseUrl } from '../../../config';
import AddRemoveButton from '../AddRemoveButton';
import InfoButton from '../InfoButton';
import Rebase from 're-base';

const baseUrl = Rebase.createClass(firebaseUrl);

export default class SearchedMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listStatus: 'Add'
    };

    this.handleSearchedMovieClick = this.handleSearchedMovieClick.bind(this);
  }

  handleSearchedMovieClick() {
    let newStatus = '';

    if(this.state.listStatus === 'Add') {
      this.addToList(this.props.returnedMovie);
      newStatus = 'Remove';
    } else {
      newStatus = 'Add';
    }

    this.setState({ listStatus: newStatus });
  }

  addToList(returnedMovie) {
    baseUrl.post(`movieList/${returnedMovie.id}`, {
      data: {
        title: returnedMovie.title,
        posterPath: returnedMovie['poster_path'],
        overview: returnedMovie.overview,
        releaseDate: returnedMovie['release_date']
      }
    });
  }

  render() {
    let movieVal = this.props.returnedMovie,
      formatDate = '';

    if (movieVal['release_date']) {
      formatDate = '(' + movieVal['release_date'].substring(0, 4) + ')';
    }

    return (
      <li className="movie">
        <img src={posterPath + movieVal['poster_path']} alt={movieVal.title} />
        {movieVal.title}
        {formatDate}
        <AddRemoveButton handleClick={this.handleSearchedMovieClick} listStatus={this.state.listStatus} />
      </li>
    );
  }
}
