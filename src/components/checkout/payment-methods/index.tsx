import React, { useCallback, useState } from 'react';

import { PAYMENT_METHOD } from '../../../types/orders';
import RadioInput from '../../input/radio';

import './styles.css';

const PaymentMethods: React.FC = () => {
  const [method, setMethod] = useState<PAYMENT_METHOD>(PAYMENT_METHOD.ON_CARD);
  const onMethodChanged = useCallback((checkedMethod: PAYMENT_METHOD) => (): void => setMethod(checkedMethod), [
    setMethod,
  ]);

  return (
    <ul className="payment-methods">
      <li>
        <RadioInput
          id="method-card"
          name="paymentMethod"
          value={PAYMENT_METHOD.ON_CARD}
          checked
          onChange={onMethodChanged(PAYMENT_METHOD.ON_CARD)}
          label="Card"
        />
        {PAYMENT_METHOD.ON_CARD === method && (
          <div className="method-details">
            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
          </div>
        )}
      </li>
      <li>
        <RadioInput
          id="method-cash"
          name="paymentMethod"
          value={PAYMENT_METHOD.CASH}
          onChange={onMethodChanged(PAYMENT_METHOD.CASH)}
          label="Cash on delivery"
        />
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
