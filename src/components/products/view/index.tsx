import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  productId: number;
};
const ProductView: React.FC<Props> = ({ productId }) => {
  return (
    <div className="product-view col-md-12">
      <div className="main-contain-summary">
        <div className="contain-left">
          <div className="single-left">
            <div className="akasha-product-gallery">
              <div className="flex-viewport">
                <figure className="product-image-gallery">
                  <div>
                    <img alt="img" src="http://192.168.1.5:3000/products/image/16" />
                  </div>
                </figure>
              </div>
              <ol className="flex-control-nav flex-control-thumbs">
                <li>
                  <img src="http://192.168.1.5:3000/products/image/16?size=thumbnail" alt="img" />
                </li>
                <li>
                  <img src="http://192.168.1.5:3000/products/image/16?size=thumbnail" alt="img" />
                </li>
              </ol>
            </div>
          </div>
          <div className="entry-summary">
            <div className="flash">
              <span className="onnew">
                <span className="text">New</span>
              </span>
            </div>
            <h1 className="product-title">T-shirt with skirt</h1>
            <p className="price">$146.00</p>
            <p className="stock in-stock">
              Availability: <span> In stock</span>
            </p>
            <div className="product-short-description">short description</div>
            <div className="cart">
              <div className="quantity">
                <span className="qty-label">Quantiy:</span>
                <div className="control">
                  <span className="qty-arrow qty-minus" />
                  <input
                    type="text"
                    data-step="1"
                    min="0"
                    max=""
                    value="0"
                    title="Qty"
                    className="product-qty"
                    inputMode="numeric"
                  />
                  <span className="qty-arrow qty-plus" />
                </div>
              </div>
              <button className="product-add-to-cart disabled">Add to cart</button>
            </div>
            <div className="product_meta">
              <div className="wcml-dropdown product wcml_currency_switcher">
                <ul>
                  <li className="wcml-cs-active-currency">
                    <a className="wcml-cs-item-toggle">USD</a>
                    <ul className="wcml-cs-submenu">
                      <li>
                        <a>EUR</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <span className="product-category">
                Category: <Link to="categories/2">Summer Sale</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-data-tabs">
        <ul className="tabs-list">
          <li className="tab-title active">
            <span>Description</span>
          </li>
          <li className="tab-title">
            <span>Additional information</span>
          </li>
        </ul>
        <div>full description html</div>
      </div>
    </div>
  );
};

export default ProductView;
