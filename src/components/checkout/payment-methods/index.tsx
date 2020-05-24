import React, { useCallback, useState } from 'react';

import { PAYMENT_METHOD } from '../../../types/orders';

import './styles.css';

const PaymentMethods: React.FC = () => {
  const [method, setMethod] = useState<PAYMENT_METHOD>(PAYMENT_METHOD.ON_CARD);
  const onMethodChanged = useCallback((checkedMethod: PAYMENT_METHOD) => (): void => setMethod(checkedMethod), [
    setMethod,
  ]);

  return (
    <ul className="payment-methods">
      <li>
        <input
          id="method-card"
          type="radio"
          name="payment_method"
          value={PAYMENT_METHOD.ON_CARD}
          defaultChecked
          onChange={onMethodChanged(PAYMENT_METHOD.ON_CARD)}
        />
        <label htmlFor="method-card">Card</label>
        {PAYMENT_METHOD.ON_CARD === method && (
          <div className="method-details">
            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
          </div>
        )}
      </li>
      <li>
        <input
          id="method-cash"
          type="radio"
          name="payment_method"
          value={PAYMENT_METHOD.CASH}
          onChange={onMethodChanged(PAYMENT_METHOD.CASH)}
        />
        <label htmlFor="method-cash">Cash on delivery</label>
        {PAYMENT_METHOD.CASH === method && (
          <div className="method-details">
            <p>Pay with cash upon delivery.</p>
          </div>
        )}
      </li>
    </ul>
  );
};

export default PaymentMethods;
