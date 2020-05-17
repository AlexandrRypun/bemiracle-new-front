import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import ProductsList from '../../components/products/list';
import { Product } from '../../types/products';

const Category: React.FC = () => {
  const match = useRouteMatch<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: 'Women Bags',
          price: 45.55,
          img: 'https://shezan.pk/wp-content/uploads/2020/01/juice-Size-in-pixel-570x760-8.jpg',
        },
        {
          id: 2,
          name: 'bb',
          price: 145,
          img: 'https://shezan.pk/wp-content/uploads/2020/01/juice-Size-in-pixel-570x760-8.jpg',
        },
        {
          id: 3,
          name: 'Women Bags',
          price: 45.55,
          img: 'https://shezan.pk/wp-content/uploads/2020/01/juice-Size-in-pixel-570x760-8.jpg',
        },
        {
          id: 4,
          name: 'bb',
          price: 145,
          img: 'https://shezan.pk/wp-content/uploads/2020/01/juice-Size-in-pixel-570x760-8.jpg',
        },
      ]);
    }, 500);
  }, [setProducts]);
  return <ProductsList products={products} />;
};

export default Category;
