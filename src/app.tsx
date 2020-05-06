import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import AboutUs from './pages/about-us/about-us';
import Category from './pages/category/category';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/chosen.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/jquery.scrollbar.css';
import './assets/css/lightbox.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/slick.min.css';
import './assets/fonts/flaticon.css';
import './assets/css/megamenu.css';
import './assets/css/dreaming-attribute.css';
import './assets/css/style.css';

const App: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/category/:categoryId" component={Category} />
    </Switch>
  </>
);

export default App;
