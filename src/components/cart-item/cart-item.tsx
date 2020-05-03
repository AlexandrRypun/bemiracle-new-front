import React from 'react';

import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';
import './cart-item.css';

const CartItem: React.FC = () => (
  <div>
    <CartIcon className="cart-icon" />
    <span>0</span>
  </div>
);

export default CartItem;
