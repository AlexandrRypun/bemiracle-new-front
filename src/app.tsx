import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import AboutUs from './pages/about-us/about-us';
import Category from './pages/category/category';

const App: React.FC = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/category/:categoryId" component={Category} />
    </Switch>
  </div>
);

export default App;
