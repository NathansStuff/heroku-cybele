import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/home';
import Animal from '../pages/animal/animal';
import SearchPage from '../pages/search/search';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/animal/:id' component={Animal} />
            <Route exact path='/search' component={SearchPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
