import React from 'react';

import OrderProducts from '../../components/checkout/order-products';
import PaymentMethods from '../../components/checkout/payment-methods';
import Checkbox from '../../components/input/checkbox';

import './styles.css';

const Checkout: React.FC = () => {
  return (
    <div className="checkout-page">
      <div className="login-block">
        Returning customer?&nbsp;
        <a href="#" className="login">
          Click here to login
        </a>
      </div>
      <form name="checkout" method="post" className="checkout-form">
        <div className="customer-details">
          <div className="address">
            <div className="shipping">
              <h3>Shipping details</h3>
              <div className="shipping-fields">
                <p className="form-row form-row-first">
                  <label htmlFor="shipping-name">First name</label>
                  <input type="text" name="name" id="shipping-name" />
                </p>
                <p className="form-row form-row-last">
                  <label htmlFor="shipping-surname">Last name</label>
                  <input type="text" name="surname" id="shipping-surname" />
                </p>
                <p className="form-row">
                  <label htmlFor="shipping-city">Town / City</label>
                  <input type="text" name="city" id="shipping-city" />
                </p>
                <p className="form-row">
                  <label htmlFor="shipping-phone">Phone</label>
                  <input type="text" name="phone" id="shipping-phone" />
                </p>
                <p className="form-row">
                  <label htmlFor="shipping-email">Email address</label>
                  <input type="text" className="input-text " name="email" id="shipping-email" />
                </p>
              </div>
            </div>
            <div className="account-fields">
              <p className="form-row">
                <Checkbox
                  id="create_account"
                  name="create_account"
                  value="1"
                  label="Create an account?"
                  onChange={() => {}}
                />
              </p>
            </div>
          </div>
          <div className="additional-info">
            <h3>Additional information</h3>
            <div className="additional-fields">
              <p className="form-row">
                <label htmlFor="order-comments">Order notes</label>
                <textarea
                  name="order-comments"
                  id="order-comments"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  rows={2}
                  cols={5}
                />
              </p>
            </div>
          </div>
        </div>
        <h3 className="order-review-header">Your order</h3>
        <div className="order-review">
          <OrderProducts />
          <div className="payment">
            <PaymentMethods />
            <div className="form-row place-order">
              <div className="terms-and-conditions">
                <p>
                  Your personal data will be used to process your order, support your experience throughout this
                  website, and for other purposes described in our&nbsp;
                  <a href="#" target="_blank">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
              <button type="submit" className="submit-order" value="Place order">
                Place order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
