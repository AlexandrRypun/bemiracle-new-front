import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import ProductsList from '../../components/products/list';

const Category: React.FC = () => {
  const match = useRouteMatch<{ categoryId: string }>();
  return <ProductsList filters={{ categoryId: Number(match.params.categoryId) }} />;
};

export default Category;
