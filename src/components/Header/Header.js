import React, { Component } from 'react';
import './Header.scss';
import hamburger from './hamburger.png';
import add from './add.png';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      nav: ''
    };

    this.handleNav = this.handleNav.bind(this);
  }

  handleNav() {
    document.body.classList.toggle('nav-open');
  }

  render() {
    return (
      <header>
        <div className="nav-button" role="button" onClick={this.handleNav}>
          <img src={hamburger} alt="menu" />
        </div>
        <h1 className="page-title lg-txt text-center">Saved Movies</h1>
        <div className="search-button" role="button" onClick={this.handleNav}>
          <img src={add} alt="add movie" />
        </div>
      </header>
    );
  }
}
