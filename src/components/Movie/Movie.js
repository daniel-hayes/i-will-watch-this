import React from 'react';
import { posterPath } from '../../../config';
import './Movie.scss';

const Movie = (props) => (
  <li onClick={props.remove.bind(null, props.index)} className="movie">
    <img src={posterPath + props.movies.posterPath} />
    <div>
      <p className="title">{props.movies.title}</p>
    </div>
  </li>
);
export default Movie;
