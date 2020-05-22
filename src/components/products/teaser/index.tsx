import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { IMG_SIZE, Product } from '../../../types/products';
import { getTranslation } from '../../../utils/common';
import { getMainImgSrc } from '../../../utils/products';
import { CartContext } from '../../../contexts/cart';

import './styles.css';

type Props = {
  product: Product;
};
const ProductTeaser: React.FC<Props> = ({ product }) => {
  const { alreadyInCart, addToCart } = useContext(CartContext);
  const canAddToCart = useMemo(() => product.inStock - alreadyInCart(product.id) > 0, [
    product.id,
    product.inStock,
    alreadyInCart,
  ]);

  return (
    <li className="product-teaser col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6">
      <div className="product-teaser-inner">
        <div className="product-img">
          <Link to={`/products/${product.id}`}>
            <img
              className="img-responsive"
              src={getMainImgSrc(product, IMG_SIZE.TEASER)}
              alt={getTranslation('name', product)}
              width="600"
              height="778"
            />
          </Link>
          <div className="flash">
            <span className="onnew">
              <span className="text">New</span>
            </span>
          </div>
          <div className="group-button">
            {canAddToCart && (
              <div className="add-to-cart" onClick={(): void => addToCart(product, 1)}>
                <span className="add-to-cart-button" />
              </div>
            )}
          </div>
        </div>
        <div className="product-data">
          <h3 className="product-name">
            <Link to={`/products/${product.id}`}>{getTranslation('name', product)}</Link>
          </h3>
          <span className="price">${product.price}</span>
        </div>
      </div>
    </li>
  );
};

export default ProductTeaser;
