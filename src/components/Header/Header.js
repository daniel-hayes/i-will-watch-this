import React from 'react';
import Tooltip from '../Tooltip';
import './Header.scss';

const Header = (props) => (
  <header>
    <div className="max">
      <h1 className="app-name page-title lg-txt">IWWT</h1>
      <h1 className="page-title lg-txt text-center">Saved Movies <span className="count">{props.savedMovies || '0'}</span></h1>
      <button className="search-button tooltip-wrapper" onClick={props.toggleOverlay}>
        <i className="icon-plus">
          <Tooltip toolTipVal="Add" />
        </i>
      </button>
    </div>
  </header>
);

export default Header;
