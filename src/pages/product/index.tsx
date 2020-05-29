import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ProductView from '../../components/products/view';
import useRequest from '../../hooks/use-request';
import { Product, ProductTranslation } from '../../types/products';
import Loader from '../../components/loader';
import { BreadcrumbsContext } from '../../contexts/breadcrumbs';
import useEntityTranslation from '../../hooks/use-entity-translation';
import { CategoryTranslation } from '../../types/categories';

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const match = useRouteMatch<{ productId: string }>();
  const endpoint = useMemo(() => `products/${match.params.productId}`, [match]);
  const { isFetching, get } = useRequest({ endpoint, initIsFetching: true });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await get<Product>();
      setProduct(response);
    };
    fetchData();
  }, [get]);

  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  const { t } = useTranslation();

  const translation = useEntityTranslation<ProductTranslation>(product);
  const categoryTranslation = useEntityTranslation<CategoryTranslation>(product ? product.category : null);

  useEffect(() => {
    if (product) {
      setBreadcrumbs([
        { to: '/', label: t('common.breadcrumbs.home') },
        { to: `/category/${product.category.id}`, label: categoryTranslation.name },
        { label: translation.name },
      ]);
    }
  }, [product, translation, categoryTranslation, setBreadcrumbs, t]);

  return <Loader isLoading={isFetching}>{product ? <ProductView product={product} /> : null}</Loader>;
};

export default ProductPage;
