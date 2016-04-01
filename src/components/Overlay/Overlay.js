import React from 'react';
import SearchMovies from '../SearchMovies';
import './Overlay.scss';

const Overlay = (props) => (
  <div className="overlay">
  	<i className="icon-cancel" onClick={props.closeOverlay}></i>
  	<h1 className="text-center lg-txt">Search Movies</h1>
    <SearchMovies addToList={props.addToList} />
  </div>
);

export default Overlay;
