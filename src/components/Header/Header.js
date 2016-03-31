import React from 'react';
import './Header.scss';

const Header = (props) => (
  <header>
    <h1 className="app-name page-title lg-txt">IWWT</h1>
    <h1 className="page-title lg-txt text-center">Saved Movies <span className="count">{props.savedMovies || '0'}</span></h1>
    <button className="search-button" onClick={props.toggleOverlay}>
      <i className="icon-plus"></i>
    </button>
  </header>
);

export default Header;
