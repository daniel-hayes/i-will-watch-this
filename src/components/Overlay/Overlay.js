import React from 'react';
import SearchMovies from '../SearchMovies';
import Tooltip from '../Tooltip';
import './Overlay.scss';

const Overlay = (props) => (
  <div className="overlay">
  	<i className="icon-cancel tooltip-wrapper" onClick={props.closeOverlay}>
      <Tooltip toolTipVal="Close" />
    </i>
  	<h1 className="text-center lg-txt">Search Movies</h1>
    <SearchMovies addToList={props.addToList} savedMovies={props.savedMovies} />
  </div>
);

export default Overlay;
