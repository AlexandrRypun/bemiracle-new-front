import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import ProductsList from '../../components/products/list';
import constants from '../../configs/constants';
import useRequest from '../../hooks/use-request';
import { GetManyResponse } from '../../types/common';
import { Product } from '../../types/products';
import SelectBox from '../../components/selectbox';
import Pagination from '../../components/pagination';
import Loader from '../../components/loader';
import { BreadcrumbsContext } from '../../contexts/breadcrumbs';
import { useTranslation } from 'react-i18next';
import { Category, CategoryTranslation } from '../../types/categories';
import useEntityTranslation from '../../hooks/use-entity-translation';

import './styles.css';

type Products = {
  products: Product[];
  total: number;
};
type Filters = {
  page: number;
  perPage: number;
  sortBy: string;
};
const initialState = {
  products: [],
  total: 0,
};
const initialFilters = {
  page: 1,
  perPage: constants.products.perPage[0],
  sortBy: '-id',
};

const CategoryPage: React.FC = () => {
  const match = useRouteMatch<{ categoryId: string }>();
  const [products, setProducts] = useState<Products>(initialState);
  const [category, setCategory] = useState<Category | null>(null);
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
    setProducts(initialState);
    setFilters(initialFilters);
  }, [match.params.categoryId]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await get<GetManyResponse<Product>>({
          categoryId: match.params.categoryId,
          take: filters.perPage,
          skip: (filters.page - 1) * filters.perPage,
          orderBy: filters.sortBy,
        });
        const { data: products = [], total = 0 } = response || {};
        setProducts({
          products,
          total,
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [match, filters, get]);

  const history = useHistory();
  const { isFetching: isCategoryFetching, get: getCategory } = useRequest({
    endpoint: `/categories/${match.params.categoryId}`,
    initIsFetching: true,
  });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await getCategory<Category>({});
        setCategory(response || null);
      } catch (e) {
        history.push('/');
      }
    };
    fetchData();
  }, [history, match, getCategory]);

  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  const { t } = useTranslation();
  const categoryTranslation = useEntityTranslation<CategoryTranslation>(category);

  useEffect(() => {
    if (category) {
      setBreadcrumbs([{ to: '/', label: t('common.breadcrumbs.home') }, { label: categoryTranslation.name }]);
    }
  }, [category, categoryTranslation, setBreadcrumbs, t]);

  return (
    <div className="category-products">
      {products.total === 0 && !isFetching && !isCategoryFetching ? (
        <p className="no-data">There is no products</p>
      ) : (
        <Loader isLoading={isFetching || isCategoryFetching} showChildren={products.total > 0}>
          <div className="category-products-control">
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
          <ProductsList products={products.products} />
          <Pagination
            page={filters.page}
            total={products.total}
            perPage={filters.perPage}
            onPageChanged={(page: number): void => setFilters({ ...filters, page })}
          />
        </Loader>
      )}
    </div>
  );
};

export default CategoryPage;
