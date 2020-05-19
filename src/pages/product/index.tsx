import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import ProductView from '../../components/products/view';

const Product: React.FC = () => {
  const match = useRouteMatch<{ productId: string }>();
  return <ProductView productId={Number(match.params.productId)} />;
};

export default Product;
