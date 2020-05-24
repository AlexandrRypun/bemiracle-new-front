import React from 'react';

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
                <label>
                  <input type="checkbox" name="createaccount" value="1" />
                  <span>Create an account?</span>
                </label>
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
          <table className="order-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  T-shirt with skirt – Pink&nbsp;&nbsp; <strong className="product-quantity">× 1</strong>
                </td>
                <td>$150.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <td>$418.00</td>
              </tr>
            </tfoot>
          </table>
          <div className="payment">
            <ul className="methods">
              <li>
                <input id="method-card" type="radio" name="payment_method" value="card" />
                <label htmlFor="method-card">Card</label>
                <div className="method-details">
                  <p>
                    Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                  </p>
                </div>
              </li>
              <li>
                <input id="method-cash" type="radio" name="payment_method" value="cash" />
                <label htmlFor="method-cash">Cash on delivery</label>
                <div className="method-details">
                  <p>Pay with cash upon delivery.</p>
                </div>
              </li>
            </ul>
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
