import React, { useEffect, useMemo, useState } from 'react';

import { Product } from '../../../types/products';
import ProductTeaser from '../teaser';
import Pagination from '../../pagination';
import useRequest from '../../../hooks/use-request';
import { GetManyResponse } from '../../../types/common';
import constants from '../../../configs/constants';
import SelectBox from '../../selectbox';

import './styles.css';

type Props = {
  params: Partial<Product>;
};
type Products = {
  products: Product[];
  total: number;
};
type Filters = {
  page: number;
  perPage: number;
  sortBy: string;
};
const initialFilters = {
  page: 1,
  perPage: constants.products.perPage[0],
  sortBy: '-id',
};

const ProductsList: React.FC<Props> = ({ params }) => {
  const [products, setProducts] = useState<Products>({ products: [], total: 0 });
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const perPageOptions = useMemo(
    () =>
      constants.products.perPage.map(count => ({
        value: count,
        label: `Show ${count}`,
      })),
    [],
  );
  const sortingOptions = useMemo(
    () => [
      {
        value: '-id',
        label: `Sort by date: latest to earliest`,
      },
      {
        value: 'id',
        label: `Sort by date: earliest to latest`,
      },
      {
        value: '-price',
        label: `Sort by price: high to low`,
      },
      {
        value: 'price',
        label: `Sort by price: low to high`,
      },
    ],
    [],
  );
  const { isFetching, get } = useRequest({ endpoint: 'products' });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await get<GetManyResponse<Product>>(
        {
          ...params,
          take: filters.perPage,
          skip: (filters.page - 1) * filters.perPage,
          orderBy: filters.sortBy,
        },
        error => {
          console.error(error);
        },
      );
      const { data: products = [], total = 0 } = response || {};
      setProducts({
        products,
        total,
      });
    };
    fetchData();
  }, [params, filters, get]);

  return (
    <div className="product-list">
      <div className="product-list-control">
        <SelectBox
          options={sortingOptions}
          selected={filters.sortBy}
          changeHandler={(sortBy): void => {
            setFilters({ ...filters, sortBy: String(sortBy) });
          }}
        />
        <SelectBox
          options={perPageOptions}
          selected={filters.perPage}
          changeHandler={(p): void => setFilters({ ...filters, perPage: Number(p), page: 1 })}
        />
      </div>
      <ul className="products">
        {products.products.map(product => (
          <ProductTeaser key={product.id} product={product} />
        ))}
      </ul>
      <Pagination
        page={filters.page}
        total={products.total}
        perPage={filters.perPage}
        onPageChanged={(page: number): void => setFilters({ ...filters, page })}
      />
    </div>
  );
};

export default ProductsList;
