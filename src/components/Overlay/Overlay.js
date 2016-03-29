import React from 'react';
import SearchMovies from '../SearchMovies';
import './Overlay.scss';

const Overlay = (props) => (
  <div className="overlay">
  	<i className="icon-cancel" onClick={props.closeOverlay}></i>
    <SearchMovies />
  </div>
);

export default Overlay;
