import React from 'react';
import { Link } from 'react-router-dom';
import { CartProduct } from '../../../../../../types/products';

import './styles.css';

interface Props extends React.ComponentProps<any> {
  product: CartProduct;
}
const CartItem: React.FC<Props> = ({ product }) => {
  return (
    <li className="mini_cart_item">
      <span className="cart-icon-item-remove">×</span>
      <Link to={`/products/${product.id}`}>
        <img src={product.img} alt={product.name} width="600" height="778" />
        {product.name}
      </Link>
      <span className="quantity">
        {product.quantity} × <span>$</span>
        {product.price}
      </span>
    </li>
  );
};

export default CartItem;
