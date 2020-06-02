import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Products from '../../components/cart/products';
import { CartContext } from '../../contexts/cart';

import './styles.css';

const Cart: React.FC = () => {
  const { products } = useContext(CartContext);
  const total = useMemo(() => products.reduce((sum, product) => sum + product.price * product.quantity, 0), [products]);

  return (
    <div className="cart-page">
      <Products />
      <div className="total">
        <h2>Cart totals</h2>
        <table cellSpacing="0">
          <tbody>
            <tr>
              <th>Total</th>
              <td>${total}</td>
            </tr>
          </tbody>
        </table>
        <div className="to-checkout">
          <Link to="/checkout">Proceed to checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
