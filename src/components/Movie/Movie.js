import React from 'react';
import { posterPath } from '../../../config';
import PosterNotFound from '../PosterNotFound';
import './Movie.scss';

const Movie = (props) => {
	let poster = props.movies.posterPath ? <img className="poster" src={posterPath + props.movies.posterPath} /> : <PosterNotFound />;

	return (
		<li onClick={props.remove.bind(null, props.index)} className="movie">
    	{poster}
    	<div className="title-wrapper">
      	<p className="title">{props.movies.title}</p>
    	</div>
  	</li>
	)
};
  
export default Movie;
