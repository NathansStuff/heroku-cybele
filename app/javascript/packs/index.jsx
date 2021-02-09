import React from 'react';
import ReactDOM from 'react-dom';
import App from '../routing/app';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <NavBar />
      <Route path='/' component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div'))
  );
});
