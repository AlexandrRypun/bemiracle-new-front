import React, { useContext } from 'react';

import Product from '../product';

import './styles.css';
import { CartContext } from '../../../contexts/cart';

const Products: React.FC = () => {
  const { products } = useContext(CartContext);

  return (
    <table className="cart-products-list" cellSpacing="0">
      <colgroup>
        <col className="remove" />
        <col className="image" />
        <col className="name" />
        <col className="price" />
        <col className="quantity" />
        <col className="subtotal" />
      </colgroup>
      <thead>
        <tr>
          <th />
          <th />
          <th className="name">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <Product key={product.product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default Products;
