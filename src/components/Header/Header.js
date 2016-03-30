import React from 'react';
import './Header.scss';

const Header = (props) => (
  <header>
    <button className="nav-button" onClick={props.toggleNav}>
      <i className="icon-list"></i>
    </button>
    <h1 className="page-title lg-txt text-center">Saved Movies <span className="count">{props.savedMovies || ''}</span></h1>
    <div className="icon-export"></div>
    <button className="search-button" onClick={props.toggleOverlay}>
      <i className="icon-plus"></i>
    </button>
  </header>
);

export default Header;
