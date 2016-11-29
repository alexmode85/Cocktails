import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './containers/Main-layout';
import SearchLayout from './containers/search-layout/index';

// Pages
import Home from './components/home';
import CockList from './components/Coc-list/index';
import NotFound from './components/NotFound';
import Cocktail from './components/cocktail';



export default (
  <Router history={browserHistory}>
    <Route component={MainLayout} >
      <Route path='/' component={Home} />
      <Route path='/:base'  >
        <Route component={SearchLayout}>
          <IndexRoute component={CockList} />
          <Route path='/:base/:cocktail' component={Cocktail} />
        </Route>
      </Route>
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
);
