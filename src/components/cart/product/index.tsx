import React, { useCallback, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { CartProduct, IMG_SIZE } from '../../../types/products';
import { getMainImgSrc } from '../../../utils/products';
import InputNumber from '../../input-number';
import { CartContext } from '../../../contexts/cart';
import { getTranslation } from '../../../utils/common';

import './styles.css';

type Props = {
  product: CartProduct;
};
const Product: React.FC<Props> = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const onQuantityChange = useCallback(
    (newValue: number): void => {
      if (newValue && newValue > 0) {
        const newQty = newValue > product.inStock ? product.inStock : newValue;
        if (newQty > product.inCart) {
          addToCart(product, newQty - product.inCart);
        } else if (newQty < product.inCart) {
          removeFromCart(product.id, product.inCart - newQty);
        }
      }
    },
    [product, addToCart, removeFromCart],
  );

  const onRemove = useCallback((): void => removeFromCart(product.id), [removeFromCart, product.id]);

  const prodName = useMemo(() => (product ? getTranslation('name', product) : ''), [product]);

  return (
    <tr className="cart-product-row">
      <td className="remove">
        <span className="remove" onClick={onRemove}>
          ×
        </span>
      </td>
      <td className="image">
        <Link to={`/products/${product.id}`}>
          <img src={getMainImgSrc(product, IMG_SIZE.THUMBNAIL)} alt={prodName} />
        </Link>
      </td>
      <td className="name">
        <Link to={`/products/${product.id}`}>{prodName}</Link>
      </td>
      <td className="price">${product.price}</td>
      <td className="quantity">
        <InputNumber value={product.inCart} changeHandler={onQuantityChange} />
      </td>
      <td className="subtotal">${product.inCart * product.price}</td>
    </tr>
  );
};

export default Product;
