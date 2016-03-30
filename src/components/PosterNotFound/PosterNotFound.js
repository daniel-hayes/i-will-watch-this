import React from 'react';
import notFound from '../../assets/images/not-found.jpg';
import './PosterNotFound.scss';

const PosterNotFound = () => (
	<div className="poster poster-not-found">
		<div className="poster-not-found-info">
			<p>Poster Not Found</p>
			<i className="icon-video"></i>
		</div>
		<img src={notFound} />
	</div>
);

export default PosterNotFound;
