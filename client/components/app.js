import React from 'react';

import Header from './header';
import BinsMain from './bins/bins_main';
import BinsList from './bins/bins_list';

import { Route } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={BinsList} />
      <Route path="/bins" component={BinsMain} />
    </div>
  )
};
