import React, { Component } from 'react';
import { posterPath } from '../../../config';
import PosterNotFound from '../PosterNotFound';
import PosterAction from '../PosterAction';
import './Movie.scss';

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addRemove(this.props.movies);

    if (this.props.addRemoveText === 'Add') {
      this.setState({ added: true });
    }
  }

  componentWillMount() {
    if (this.props.savedMovies) {
      this.props.savedMovies.map((savedMovie) => {
        if (savedMovie.id === this.props.movies.id) {
          this.setState({ added: true });
        }
      });
    }
  }

  render() {
    return (
      <li className={this.state.added ? 'movie saved' : 'movie not-saved'}>
        {this.props.movies['poster_path'] ? <img className="poster" src={posterPath + this.props.movies['poster_path']} /> : <PosterNotFound />}
        <div className="title-wrapper">
          <p className="title">{this.props.movies.title}</p>
        </div>
        <PosterAction handleClick={this.handleClick} addRemoveText={this.props.addRemoveText} added={this.state.added} />
      </li>
    );
  }
}
