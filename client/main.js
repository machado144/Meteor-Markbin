import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import { Bins } from '../imports/api/bins';

const routes = (
  <BrowserRouter>
    <Route path="/" component={App}>
    </Route>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.container'));
});
