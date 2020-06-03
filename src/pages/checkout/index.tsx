import React, { useCallback, useContext, useMemo } from 'react';
import { Formik, Field } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import OrderProducts from '../../components/checkout/order-products';
import PaymentMethods from '../../components/checkout/payment-methods';
import Checkbox from '../../components/input/checkbox';
import Input from '../../components/input/formik-text';
import { PAYMENT_METHOD } from '../../types/orders';
import { OrderSchema } from './validationSchemas';
import useRequest from '../../hooks/use-request';
import { CartContext } from '../../contexts/cart';
import Button from '../../components/button';

import './styles.css';

const Checkout: React.FC = () => {
  const { products } = useContext(CartContext);
  const { t } = useTranslation();

  const { create } = useRequest({ endpoint: 'orders' });

  const submitHandler = useCallback(
    async values => {
      try {
        await create(values);
        toast.success('Order has been successfully created!');
      } catch (e) {
        toast.error(t('common.messages.smthWrong'));
      }
    },
    [create, t],
  );

  const initialValues = useMemo(
    () => ({
      customerName: '',
      customerSurname: '',
      customerCity: '',
      customerNovaPoshtaDep: '',
      customerPhone: '',
      customerEmail: '',
      createAccount: false,
      comments: '',
      paymentMethod: PAYMENT_METHOD.ON_CARD,
      products,
    }),
    [products],
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
                    <Input
                      id="shipping-name"
                      name="customerName"
                      wrapperClasses="form-row-first"
                      label="First name"
                      required
                    />
                    <Input
                      id="shipping-surname"
                      name="customerSurname"
                      wrapperClasses="form-row-last"
                      label="Last name"
                      required
                    />
                    <div className="clear" />
                    <Input id="shipping-city" name="customerCity" label="City" required />
                    <Input id="shipping-np" name="customerNovaPoshtaDep" label="Nova Poshta Dep" required />
                    <Input id="shipping-phone" name="customerPhone" label="Phone" required />
                    <Input id="shipping-email" name="customerEmail" label="Email address" />
                  </div>
                </div>
                <div className="account-fields">
                  <p className="form-row">
                    <Field
                      component={Checkbox}
                      id="createAccount"
                      name="createAccount"
                      label="Create an account?"
                      onChange={(): void => {}}
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
              <OrderProducts products={products} />
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
                  <Button label="Place order" type="submit" className="submit-order" />
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
