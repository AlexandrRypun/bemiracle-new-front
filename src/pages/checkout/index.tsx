import React, { useCallback, useMemo } from 'react';
import { Formik, Field } from 'formik';

import OrderProducts from '../../components/checkout/order-products';
import PaymentMethods from '../../components/checkout/payment-methods';
import Checkbox from '../../components/input/checkbox';
import Input from '../../components/input/formik-text';
import { PAYMENT_METHOD } from '../../types/orders';
import { OrderSchema } from './validationSchemas';

import './styles.css';

const Checkout: React.FC = () => {
  const submitHandler = useCallback(values => {
    console.log(values);
  }, []);

  const initialValues = useMemo(
    () => ({
      name: '',
      surname: '',
      city: '',
      phone: '',
      email: '',
      createAccount: false,
      comments: '',
      paymentMethod: PAYMENT_METHOD.ON_CARD,
    }),
    [],
  );

  return (
    <div className="checkout-page">
      <div className="login-block">
        Returning customer?&nbsp;
        <a href="#" className="login">
          Click here to login
        </a>
      </div>
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={OrderSchema}>
        {({ handleSubmit }): JSX.Element => (
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="customer-details">
              <div className="address">
                <div className="shipping">
                  <h3>Shipping details</h3>
                  <div className="shipping-fields">
                    <Input id="shipping-name" name="name" wrapperClasses="form-row-first" label="First name" />
                    <Input id="shipping-surname" name="surname" wrapperClasses="form-row-last" label="Last name" />
                    <div className="clear" />
                    <Input id="shipping-city" name="city" label="City" />
                    <Input id="shipping-phone" name="phone" label="Phone" />
                    <Input id="shipping-email" name="email" label="Email address" />
                  </div>
                </div>
                <div className="account-fields">
                  <p className="form-row">
                    <Field
                      component={Checkbox}
                      id="createAccount"
                      name="createAccount"
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
                    <Field
                      as="textarea"
                      name="comments"
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
                <Field component="div" name="paymentMethods">
                  <PaymentMethods />
                </Field>
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
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
