import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Product } from '../../../types/products';
import ProductTeaser from '../teaser';
import Pagination from '../../pagination';
import useRequest from '../../../hooks/use-request';
import { GetManyResponse } from '../../../types/common';
import constants from '../../../configs/constants';
import SelectBox from '../../selectbox';

type Props = {
  filters: Partial<Product>;
};
type Products = {
  products: Product[];
  total: number;
};
const ProductsList: React.FC<Props> = ({ filters }) => {
  const [products, setProducts] = useState<Products>({ products: [], total: 0 });
  const [perPage, setPerPage] = useState<number>(constants.products.perPage[0]);
  const [page, setPage] = useState<number>(1);
  const perPageOptions = useMemo(
    () =>
      constants.products.perPage.map(count => ({
        value: count,
        label: `Show ${count}`,
      })),
    [constants.products.perPage],
  );
  const { isFetching, getData } = useRequest({ endpoint: 'products' });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await getData<GetManyResponse<Product>>(
        {
          ...filters,
          take: perPage,
          skip: (page - 1) * perPage,
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
  }, [filters, page, perPage]);

  return (
    <div className="row">
      <div className="main-content col-md-12">
        <div className="shop-control shop-before-control">
          <form className="akasha-ordering" method="get">
            <select title="product_cat" name="orderby" className="orderby">
              <option value="menu_order">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="date">Sort by latest</option>
              <option value="price">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
            </select>
          </form>
          <div>
            <SelectBox
              options={perPageOptions}
              selected={perPage}
              changeHandler={(p): void => {
                setPerPage(Number(p));
                setPage(1);
              }}
            />
          </div>
        </div>
        <div className="auto-clear equal-container better-height akasha-products">
          <ul className="row products columns-3">
            {products.products.map(product => (
              <ProductTeaser key={product.id} product={product} />
            ))}
          </ul>
        </div>
        <Pagination page={page} total={products.total} perPage={perPage} onPageChanged={setPage} />
      </div>
    </div>
  );
};

export default ProductsList;
