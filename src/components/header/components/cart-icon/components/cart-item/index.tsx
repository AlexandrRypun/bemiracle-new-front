import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { CartProduct, IMG_SIZE } from '../../../../../../types/products';
import { getTranslation } from '../../../../../../utils/common';
import { getMainImgSrc } from '../../../../../../utils/products';

import './styles.css';

type Props = {
  product: CartProduct;
  removeFromCart: (id: number) => (e: MouseEvent) => void;
};
const CartItem: React.FC<Props> = ({ product, removeFromCart }) => {
  return (
    <li className="mini_cart_item">
      <span className="cart-icon-item-remove" onClick={removeFromCart(product.id)}>
        ×
      </span>
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
        {product.inCart} × <span>$</span>
        {product.price}
      </span>
    </li>
  );
};

export default CartItem;
