import React from 'react';

import { Product } from '../../../types/products';
import ProductTeaser from '../teaser';

import './styles.css';

type Props = {
  products: Product[];
};

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <ul className="products">
      {products.map(product => (
        <ProductTeaser key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
