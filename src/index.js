import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './components/App';
import SearchMovies from './components/SearchMovies';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={SearchMovies} />
    </Route>
  </Router>
);

console.log(router);

ReactDOM.render(router, document.getElementById('app'));
