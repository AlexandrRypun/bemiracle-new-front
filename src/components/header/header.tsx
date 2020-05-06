import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../cart-item/cart-item';
import MenuItemCategories from '../menu-item-categories/menu-item-categories';

const Header: React.FC = () => (
  <header id="header" className="header style-02 header-dark">
    <div className="header-wrap-stick">
      <div className="header-position">
        <div className="header-middle">
          <div className="akasha-menu-wapper" />
          <div className="header-middle-inner">
            <div className="header-search-menu">
              <div className="block-menu-bar">
                <a className="menu-bar menu-toggle" href="#">
                  <span />
                  <span />
                  <span />
                </a>
              </div>
            </div>
            <div className="header-logo-nav">
              <div className="header-logo">
                <Link to="/">
                  <img alt="Akasha" src={require('../../assets/images/logo.png')} className="logo" />
                </Link>
              </div>
              <div className="box-header-nav menu-nocenter">
                <ul id="menu-primary-menu" className="clone-main-menu akasha-clone-mobile-menu akasha-nav main-menu">
                  <li
                    id="menu-item-230"
                    className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-230 parent parent-megamenu item-megamenu"
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    id="menu-item-228"
                    className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-228 parent parent-megamenu item-megamenu menu-item-has-children"
                  >
                    <a className="akasha-menu-item-title" title="Shop" href="/">
                      Shop
                    </a>
                    <span className="toggle-submenu"></span>
                    <div className="submenu megamenu megamenu-shop">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="akasha-listitem style-01">
                            <div className="listitem-inner">
                              <h4 className="title">Shop Layouts </h4>
                              <ul className="listitem-list">
                                <li>
                                  <a href="shop.html" target="_self">
                                    Shop Grid{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list.html" target="_self">
                                    <span className="image">
                                      <img
                                        src="assets/images/label-new.jpg"
                                        className="attachment-full size-full"
                                        alt="img"
                                      />
                                    </span>
                                    Shop List
                                  </a>
                                </li>
                                <li>
                                  <a href="shop.html" target="_self">
                                    No Sidebar{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-leftsidebar.html" target="_self">
                                    Left Sidebar{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-rightsidebar.html" target="_self">
                                    Right Sidebar{' '}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="akasha-listitem style-01">
                            <div className="listitem-inner">
                              <h4 className="title">Product Layouts </h4>
                              <ul className="listitem-list">
                                <li>
                                  <a href="single-product.html" target="_self">
                                    Vertical Thumbnails{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-policy.html" target="_self">
                                    <span className="image">
                                      <img
                                        src="assets/images/label-new.jpg"
                                        className="attachment-full size-full"
                                        alt="img"
                                      />
                                    </span>
                                    Extra Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-rightsidebar.html" target="_self">
                                    Right Sidebar{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-leftsidebar.html" target="_self">
                                    Left Sidebar{' '}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="akasha-listitem style-01">
                            <div className="listitem-inner">
                              <h4 className="title">Product Extends </h4>
                              <ul className="listitem-list">
                                <li>
                                  <a href="single-product-bundle.html" target="_self">
                                    <span className="image">
                                      <img
                                        src="assets/images/label-new.jpg"
                                        className="attachment-full size-full"
                                        alt="img"
                                      />
                                    </span>
                                    Product Bundle
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-360deg.html" target="_self">
                                    <span className="image">
                                      <img
                                        src="assets/images/label-hot.jpg"
                                        className="attachment-full size-full"
                                        alt="img"
                                      />
                                    </span>
                                    Product 360 Deg{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-video.html" target="_self">
                                    Video{' '}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="akasha-listitem style-01">
                            <div className="listitem-inner">
                              <h4 className="title">Other Pages </h4>
                              <ul className="listitem-list">
                                <li>
                                  <a href="cart.html">Cart </a>
                                </li>
                                <li>
                                  <a href="wishlist.html" target="_self">
                                    Wishlist{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="checkout.html" target="_self">
                                    Checkout{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="order-tracking.html" target="_self">
                                    Order Tracking{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="my-account.html" target="_self">
                                    My Account{' '}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="akasha-listitem style-01">
                            <div className="listitem-inner">
                              <h4 className="title">Product Types </h4>
                              <ul className="listitem-list">
                                <li>
                                  <a href="single-product-simple.html" target="_self">
                                    Simple{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product.html" target="_self">
                                    <span className="image">
                                      <img
                                        src="assets/images/label-hot.jpg"
                                        className="attachment-full size-full"
                                        alt="img"
                                      />
                                    </span>
                                    Variable{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-external.html" target="_self">
                                    External / Affiliate{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-group.html" target="_self">
                                    Grouped{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-outofstock.html" target="_self">
                                    Out Of Stock{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-onsale.html" target="_self">
                                    On Sale{' '}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    id="menu-item-229"
                    className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-229 parent parent-megamenu item-megamenu"
                  >
                    <Link to="/delivery">Delivery</Link>
                  </li>
                  <li
                    id="menu-item-996"
                    className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-996 parent parent-megamenu item-megamenu"
                  >
                    <Link to="/about-us">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-control">
              <div className="header-control-inner">
                <div className="meta-dreaming">
                  <ul className="wpml-menu">
                    <li className="menu-item akasha-dropdown block-language">
                      <a href="#" data-akasha="akasha-dropdown">
                        <img src={require('../../assets/images/en.png')} alt="en" />
                        English
                      </a>
                      <span className="toggle-submenu"></span>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <a href="#">
                            <img src={require('../../assets/images/it.png')} alt="it" />
                            Italiano
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="header-search akasha-dropdown">
                    <div className="header-search-inner" data-akasha="akasha-dropdown">
                      <a href="#" className="link-dropdown block-link">
                        <span className="flaticon-magnifying-glass-1"></span>
                      </a>
                    </div>
                    <div className="block-search">
                      <form
                        role="search"
                        method="get"
                        className="form-search block-search-form akasha-live-search-form"
                      >
                        <div className="form-content search-box results-search">
                          <div className="inner">
                            <input
                              autoComplete="off"
                              className="searchfield txt-livesearch input"
                              name="s"
                              value=""
                              placeholder="Search here..."
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="category">
                          <select title="product_cat" name="product_cat" className="category-search-option">
                            <option value="0">All Categories</option>
                            <option className="level-0" value="light">
                              Shoes
                            </option>
                            <option className="level-0" value="chair">
                              Accessories
                            </option>
                            <option className="level-0" value="table">
                              Bags
                            </option>
                            <option className="level-0" value="bed">
                              Life style
                            </option>
                            <option className="level-0" value="new-arrivals">
                              New arrivals
                            </option>
                            <option className="level-0" value="lamp">
                              Summer Sale
                            </option>
                            <option className="level-0" value="specials">
                              Specials
                            </option>
                            <option className="level-0" value="sofas">
                              Women
                            </option>
                          </select>
                        </div>
                        <button type="submit" className="btn-submit">
                          <span className="flaticon-magnifying-glass-1"></span>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="akasha-dropdown-close">x</div>
                  <div className="menu-item block-user block-dreaming akasha-dropdown">
                    <a className="block-link" href="#">
                      <span className="flaticon-profile"></span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--orders">
                        <a href="#">Orders</a>
                      </li>
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-adchair">
                        <a href="#">Addresses</a>
                      </li>
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-account">
                        <a href="#">Account details</a>
                      </li>
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--customer-logout">
                        <a href="#">Logout</a>
                      </li>
                    </ul>
                  </div>
                  <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown">
                    <div className="shopcart-dropdown block-cart-link" data-akasha="akasha-dropdown">
                      <a className="block-link link-dropdown" href="#">
                        <span className="flaticon-bag"></span>
                        <span className="count">3</span>
                      </a>
                    </div>
                    <div className="widget akasha widget_shopping_cart">
                      <div className="widget_shopping_cart_content">
                        <h3 className="minicart-title">
                          Your Cart<span className="minicart-number-items">3</span>
                        </h3>
                        <ul className="akasha-mini-cart cart_list product_list_widget">
                          <li className="akasha-mini-cart-item mini_cart_item">
                            <a href="#" className="remove remove_from_cart_button">
                              ×
                            </a>
                            <a href="#">
                              <img
                                src="assets/images/apro134-1-600x778.jpg"
                                className="attachment-akasha_thumbnail size-akasha_thumbnail"
                                alt="img"
                                width="600"
                                height="778"
                              />
                              T-shirt with skirt – Pink&nbsp;
                            </a>
                            <span className="quantity">
                              1 ×{' '}
                              <span className="akasha-Price-amount amount">
                                <span className="akasha-Price-currencySymbol">$</span>150.00
                              </span>
                            </span>
                          </li>
                          <li className="akasha-mini-cart-item mini_cart_item">
                            <a href="#" className="remove remove_from_cart_button">
                              ×
                            </a>
                            <a href="#">
                              <img
                                src="assets/images/apro1113-600x778.jpg"
                                className="attachment-akasha_thumbnail size-akasha_thumbnail"
                                alt="img"
                                width="600"
                                height="778"
                              />
                              Abstract Sweatshirt&nbsp;
                            </a>
                            <span className="quantity">
                              1 ×{' '}
                              <span className="akasha-Price-amount amount">
                                <span className="akasha-Price-currencySymbol">$</span>129.00
                              </span>
                            </span>
                          </li>
                          <li className="akasha-mini-cart-item mini_cart_item">
                            <a href="#" className="remove remove_from_cart_button">
                              ×
                            </a>
                            <a href="#">
                              <img
                                src="assets/images/apro201-1-600x778.jpg"
                                className="attachment-akasha_thumbnail size-akasha_thumbnail"
                                alt="img"
                                width="600"
                                height="778"
                              />
                              Mini Dress&nbsp;
                            </a>
                            <span className="quantity">
                              1 ×{' '}
                              <span className="akasha-Price-amount amount">
                                <span className="akasha-Price-currencySymbol">$</span>139.00
                              </span>
                            </span>
                          </li>
                        </ul>
                        <p className="akasha-mini-cart__total total">
                          <strong>Subtotal:</strong>
                          <span className="akasha-Price-amount amount">
                            <span className="akasha-Price-currencySymbol">$</span>418.00
                          </span>
                        </p>
                        <p className="akasha-mini-cart__buttons buttons">
                          <a href="cart.html" className="button akasha-forward">
                            Viewcart
                          </a>
                          <a href="checkout.html" className="button checkout akasha-forward">
                            Checkout
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-mobile">
      <div className="header-mobile-left">
        <div className="block-menu-bar">
          <a className="menu-bar menu-toggle" href="#">
            <span />
            <span />
            <span />
          </a>
        </div>
        <div className="header-search akasha-dropdown">
          <div className="header-search-inner" data-akasha="akasha-dropdown">
            <a href="#" className="link-dropdown block-link">
              <span className="flaticon-magnifying-glass-1"></span>
            </a>
          </div>
          <div className="block-search">
            <form role="search" method="get" className="form-search block-search-form akasha-live-search-form">
              <div className="form-content search-box results-search">
                <div className="inner">
                  <input
                    autoComplete="off"
                    className="searchfield txt-livesearch input"
                    name="s"
                    value=""
                    placeholder="Search here..."
                    type="text"
                  />
                </div>
              </div>
              <div className="category">
                <select title="product_cat" name="product_cat" className="category-search-option">
                  <option value="0">All Categories</option>
                  <option className="level-0" value="light">
                    Shoes
                  </option>
                  <option className="level-0" value="chair">
                    Accessories
                  </option>
                  <option className="level-0" value="table">
                    Bags
                  </option>
                  <option className="level-0" value="bed">
                    Life style
                  </option>
                  <option className="level-0" value="new-arrivals">
                    New arrivals
                  </option>
                  <option className="level-0" value="lamp">
                    Summer Sale
                  </option>
                  <option className="level-0" value="specials">
                    Specials
                  </option>
                  <option className="level-0" value="sofas">
                    Women
                  </option>
                </select>
              </div>
              <button type="submit" className="btn-submit">
                <span className="flaticon-magnifying-glass-1"></span>
              </button>
            </form>
          </div>
        </div>
        <ul className="wpml-menu">
          <li className="menu-item akasha-dropdown block-language">
            <a href="#" data-akasha="akasha-dropdown">
              <img src={require('../../assets/images/en.png')} alt="en" />
              English
            </a>
            <span className="toggle-submenu"></span>
            <ul className="sub-menu">
              <li className="menu-item">
                <a href="#">
                  <img src={require('../../assets/images/it.png')} alt="it" />
                  Italiano
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="header-mobile-mid">
        <div className="header-logo">
          <Link to="/">
            <img alt="Akasha" src={require('../../assets/images/logo.png')} className="logo" />
          </Link>
        </div>
      </div>
      <div className="header-mobile-right">
        <div className="header-control-inner">
          <div className="meta-dreaming">
            <div className="menu-item block-user block-dreaming akasha-dropdown">
              <a className="block-link" href="#">
                <span className="flaticon-profile"></span>
              </a>
              <ul className="sub-menu">
                <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--orders">
                  <a href="#">Orders</a>
                </li>
                <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-adchair">
                  <a href="#">Addresses</a>
                </li>
                <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-account">
                  <a href="#">Account details</a>
                </li>
                <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--customer-logout">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
            <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown">
              <div className="shopcart-dropdown block-cart-link" data-akasha="akasha-dropdown">
                <a className="block-link link-dropdown" href="#">
                  <span className="flaticon-bag"></span>
                  <span className="count">3</span>
                </a>
              </div>
              <div className="widget akasha widget_shopping_cart">
                <div className="widget_shopping_cart_content">
                  <h3 className="minicart-title">
                    Your Cart<span className="minicart-number-items">3</span>
                  </h3>
                  <ul className="akasha-mini-cart cart_list product_list_widget">
                    <li className="akasha-mini-cart-item mini_cart_item">
                      <a href="#" className="remove remove_from_cart_button">
                        ×
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/apro134-1-600x778.jpg"
                          className="attachment-akasha_thumbnail size-akasha_thumbnail"
                          alt="img"
                          width="600"
                          height="778"
                        />
                        T-shirt with skirt – Pink&nbsp;
                      </a>
                      <span className="quantity">
                        1 ×{' '}
                        <span className="akasha-Price-amount amount">
                          <span className="akasha-Price-currencySymbol">$</span>150.00
                        </span>
                      </span>
                    </li>
                    <li className="akasha-mini-cart-item mini_cart_item">
                      <a href="#" className="remove remove_from_cart_button">
                        ×
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/apro1113-600x778.jpg"
                          className="attachment-akasha_thumbnail size-akasha_thumbnail"
                          alt="img"
                          width="600"
                          height="778"
                        />
                        Abstract Sweatshirt&nbsp;
                      </a>
                      <span className="quantity">
                        1 ×{' '}
                        <span className="akasha-Price-amount amount">
                          <span className="akasha-Price-currencySymbol">$</span>129.00
                        </span>
                      </span>
                    </li>
                    <li className="akasha-mini-cart-item mini_cart_item">
                      <a href="#" className="remove remove_from_cart_button">
                        ×
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/apro201-1-600x778.jpg"
                          className="attachment-akasha_thumbnail size-akasha_thumbnail"
                          alt="img"
                          width="600"
                          height="778"
                        />
                        Mini Dress&nbsp;
                      </a>
                      <span className="quantity">
                        1 ×{' '}
                        <span className="akasha-Price-amount amount">
                          <span className="akasha-Price-currencySymbol">$</span>139.00
                        </span>
                      </span>
                    </li>
                  </ul>
                  <p className="akasha-mini-cart__total total">
                    <strong>Subtotal:</strong>
                    <span className="akasha-Price-amount amount">
                      <span className="akasha-Price-currencySymbol">$</span>418.00
                    </span>
                  </p>
                  <p className="akasha-mini-cart__buttons buttons">
                    <a href="cart.html" className="button akasha-forward">
                      Viewcart
                    </a>
                    <a href="checkout.html" className="button checkout akasha-forward">
                      Checkout
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
