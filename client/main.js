import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { Bins } from '../imports/api/bins';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
