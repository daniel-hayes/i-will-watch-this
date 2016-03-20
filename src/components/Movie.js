import React, { Component } from 'react';
import { posterPath } from '../../config';

export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seenMovie: 'need-to-watch'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event);
    let movieSeenToggle = (this.state.seenMovie === 'need-to-watch') ? 'seen' : 'need-to-watch';
    this.setState({seenMovie: movieSeenToggle});
  }

  render() {
    let movieProps = this.props.movies;

    return (
      <li onClick={this.handleClick} className={"movie " + this.state.seenMovie}>
        <img src={posterPath + movieProps['poster_path']} />
        <div className="hide">
          <div>{movieProps.title}</div>
          <div>{movieProps.overview}</div>
          <div>{movieProps['vote_average']}</div>
        </div>
      </li>
    );
  }
}
