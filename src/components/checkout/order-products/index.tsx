import React, { useContext, useMemo } from 'react';

import { CartContext } from '../../../contexts/cart';
import OrderProduct from '../order-product';

import './styles.css';

const OrderProducts: React.FC = () => {
  const { products } = useContext(CartContext);
  const total = useMemo(() => products.reduce((sum, product) => sum + product.price * product.inCart, 0), [products]);

  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <OrderProduct key={product.id} product={product} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <td>${total}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderProducts;
