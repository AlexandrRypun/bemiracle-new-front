import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import Breadcrumbs from './components/breadcrumbs';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homepage/homepage';
import AboutUs from './pages/about-us/about-us';
import Category from './pages/category/category';
import Product from './pages/product';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Orders from './pages/orders';
import BrowserProvider from './contexts/browser';
import CartProvider from './contexts/cart';
import BreadcrumbsProvider from './contexts/breadcrumbs';
import UserProvider from './contexts/user';

import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/slick.min.css';
import './assets/fonts/flaticon.css';
import './assets/css/megamenu.css';
import './assets/css/style.css';
import './index.css';

const App: React.FC = () => (
  <BrowserProvider>
    <CartProvider>
      <BreadcrumbsProvider>
        <UserProvider>
          <>
            <Header />
            <Breadcrumbs />
            <div className="main-container container">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/category/:categoryId" component={Category} />
                <Route path="/products/:productId" component={Product} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/orders" component={Orders} />
              </Switch>
              <ToastContainer limit={4} />
            </div>
            <Footer />
          </>
        </UserProvider>
      </BreadcrumbsProvider>
    </CartProvider>
  </BrowserProvider>
);

export default App;
