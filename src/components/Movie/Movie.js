import React from 'react';
import { posterPath } from '../../../config';
import PosterNotFound from '../PosterNotFound';
import './Movie.scss';

const Movie = (props) => {
  let icon = props.addRemoveText === 'Add' ? 'icon-plus' : 'icon-cancel';

  return (
  	<li className="movie">
    	{props.movies['poster_path'] ? <img className="poster" src={posterPath + props.movies['poster_path']} /> : <PosterNotFound />}
    	<div className="title-wrapper">
      	<p className="title">{props.movies.title}</p>
    	</div>
    	<div className="poster-action">
  			<div className="poster-action-inner text-center">
  				<p>{props.addRemoveText}</p>
  				<i className={icon} onClick={props.addRemove.bind(null, props.movies)}></i>
    		</div>
  		</div>
  	</li>
  );
};
  
export default Movie;
