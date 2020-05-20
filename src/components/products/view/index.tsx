import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import useRequest from '../../../hooks/use-request';
import { IMG_SIZE, Product } from '../../../types/products';

import './styles.css';
import { getTranslation } from '../../../utils/common';
import Loader from '../../loader';
import { getImgSrc } from '../../../utils/products';

enum TAB {
  DESC = 'description',
  INGR = 'ingredients',
}

type Props = {
  productId: number;
};
const ProductView: React.FC<Props> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<TAB>(TAB.DESC);

  const endpoint = useMemo(() => `products/${productId}`, [productId]);
  const { isFetching, getData } = useRequest({ endpoint, initIsFetching: true });
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData<Product>();
      setProduct({ ...response, inStock: 9 });
    };
    fetchData();
  }, []);

  const changeQty = useCallback(
    (newQty: number): void => {
      setQty(Number.isNaN(newQty) || newQty < 1 || !product ? 1 : newQty > product.inStock ? product.inStock : newQty);
    },
    [setQty, product],
  );
  const getTabContent = useCallback((): React.ReactElement => {
    let content = <></>;
    if (product) {
      switch (activeTab) {
        case TAB.DESC:
          content = <div className="product-tab-description">{getTranslation('description', product)}</div>;
          break;
        case TAB.INGR:
          content = <div className="product-tab-ingredients">{getTranslation('ingredients', product)}</div>;
          break;
      }
    }
    return content;
  }, [activeTab, product]);

  const prodName = useMemo(() => (product ? getTranslation('name', product) : ''), [product]);

  return (
    <Loader isLoading={isFetching}>
      {product ? (
        <div className="product-view col-md-12">
          <div className="main-contain-summary">
            <div className="contain-left">
              <div className="single-left">
                <div className="akasha-product-gallery">
                  <div className="flex-viewport">
                    <figure className="product-image-gallery">
                      <div>
                        <img alt="img" src="http://192.168.1.5:3000/products/image/16" />
                      </div>
                    </figure>
                  </div>
                  <ol className="flex-control-nav flex-control-thumbs">
                    {product.images.map(image => (
                      <li key={image.id}>
                        <img src={getImgSrc(image, IMG_SIZE.THUMBNAIL)} alt={prodName} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="entry-summary">
                <div className="flash">
                  <span className="onnew">
                    <span className="text">New</span>
                  </span>
                </div>
                <h1 className="product-title">{prodName}</h1>
                <p className="price">${product.price}</p>
                <p className={`stock ${product.inStock > 0 ? 'in' : 'out'}-stock`}>
                  Availability: <span>{product.inStock > 0 ? 'In stock' : 'Not available'}</span>
                </p>
                <div className="product-short-description">{getTranslation('shortDescription', product)}</div>
                <div className="cart">
                  <div className="quantity">
                    <div className="control">
                      <span className="qty-arrow qty-minus" onClick={(): void => changeQty(qty - 1)} />
                      <input
                        value={qty}
                        className="product-qty"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => changeQty(Number(e.target.value))}
                      />
                      <span className="qty-arrow qty-plus" onClick={(): void => changeQty(qty + 1)} />
                    </div>
                  </div>
                  <button className={`product-add-to-cart ${product.inStock > 0 ? '' : 'disabled'}`}>
                    Add to cart
                  </button>
                </div>
                <div className="product_meta">
                  <span className="product-category">
                    Category:&nbsp;
                    <Link to={`/category/${product.category.id}`}>{getTranslation('name', product.category)}</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-data-tabs">
            <ul className="tabs-list">
              <li className={`tab-title ${activeTab === TAB.DESC ? 'active' : ''}`}>
                <span onClick={(): void => setActiveTab(TAB.DESC)}>Description</span>
              </li>
              <li className={`tab-title ${activeTab === TAB.INGR ? 'active' : ''}`}>
                <span onClick={(): void => setActiveTab(TAB.INGR)}>Ingredients</span>
              </li>
            </ul>
            <div className="tab-content">{getTabContent()}</div>
          </div>
        </div>
      ) : null}
    </Loader>
  );
};

export default ProductView;
