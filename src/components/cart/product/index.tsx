import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';

import { IMG_SIZE, ProductTranslation } from '../../../types/products';
import { getMainImgSrc } from '../../../utils/products';
import InputNumber from '../../input/number';
import { CartContext } from '../../../contexts/cart';
import useEntityTranslation from '../../../hooks/use-entity-translation';
import { OrderProduct } from '../../../types/orders';

import './styles.css';

type Props = {
  product: OrderProduct;
};
const Product: React.FC<Props> = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const onQuantityChange = useCallback(
    (newValue: number): void => {
      if (newValue && newValue > 0) {
        const newQty = newValue > product.product.inStock ? product.product.inStock : newValue;
        if (newQty > product.quantity) {
          addToCart(product.product, newQty - product.quantity);
        } else if (newQty < product.quantity) {
          removeFromCart(product.product.id, product.quantity - newQty);
        }
      }
    },
    [product, addToCart, removeFromCart],
  );

  const onRemove = useCallback((): void => removeFromCart(product.product.id), [removeFromCart, product]);

  const translation = useEntityTranslation<ProductTranslation>(product.product);

  return (
    <tr className="cart-product-row">
      <td className="remove">
        <span className="remove" onClick={onRemove}>
          ×
        </span>
      </td>
      <td className="image">
        <Link to={`/products/${product.id}`}>
          <img src={getMainImgSrc(product.product, IMG_SIZE.THUMBNAIL)} alt={translation.name} />
        </Link>
      </td>
      <td className="name">
        <Link to={`/products/${product.id}`}>{translation.name}</Link>
      </td>
      <td className="price">${product.price}</td>
      <td className="quantity">
        <InputNumber value={product.quantity} changeHandler={onQuantityChange} />
      </td>
      <td className="subtotal">${product.quantity * product.price}</td>
    </tr>
  );
};

export default Product;
