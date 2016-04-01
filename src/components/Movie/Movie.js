import React from 'react';
import { posterPath } from '../../../config';
import PosterNotFound from '../PosterNotFound';
import './Movie.scss';

const Movie = (props) => {
	let poster = props.movies['poster_path'] ? <img className="poster" src={posterPath + props.movies['poster_path']} /> : <PosterNotFound />;

	return (
		<li className="movie">
    	{poster}
    	<div className="title-wrapper">
      	<p className="title">{props.movies.title}</p>
    	</div>
    	<div className="poster-action">
  			<div className="poster-action-inner text-center">
  				<p>Add</p>
  				<i className="icon-plus" onClick={props.addRemove.bind(null, props.movies)}></i>
    		</div>
  		</div>
  	</li>
	)
};
  
export default Movie;
