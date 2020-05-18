import React from 'react';
import { Link } from 'react-router-dom';

import { CartProduct, IMG_SIZE } from '../../../../../../types/products';
import { getTranslation } from '../../../../../../utils/common';
import { getMainImgSrc } from '../../../../../../utils/products';
import './styles.css';

interface Props extends React.ComponentProps<any> {
  product: CartProduct;
}
const CartItem: React.FC<Props> = ({ product }) => {
  return (
    <li className="mini_cart_item">
      <span className="cart-icon-item-remove">×</span>
      <Link to={`/products/${product.id}`}>
        <img
          src={getMainImgSrc(product, IMG_SIZE.THUMBNAIL)}
          alt={getTranslation('name', product)}
          width="600"
          height="778"
        />
        {getTranslation('name', product)}
      </Link>
      <span className="quantity">
        {product.quantity} × <span>$</span>
        {product.price}
      </span>
    </li>
  );
};

export default CartItem;
