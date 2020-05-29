import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { CartProduct, IMG_SIZE, ProductTranslation } from '../../../../../../types/products';
import { getMainImgSrc } from '../../../../../../utils/products';
import useEntityTranslation from '../../../../../../hooks/use-entity-translation';

import './styles.css';

type Props = {
  product: CartProduct;
  removeFromCart: (id: number) => (e: MouseEvent) => void;
};
const CartItem: React.FC<Props> = ({ product, removeFromCart }) => {
  const translation = useEntityTranslation<ProductTranslation>(product);

  return (
    <li className="mini_cart_item">
      <span className="cart-icon-item-remove" onClick={removeFromCart(product.id)}>
        ×
      </span>
      <Link to={`/products/${product.id}`}>
        <img src={getMainImgSrc(product, IMG_SIZE.THUMBNAIL)} alt={translation.name} width="600" height="778" />
        {translation.name}
      </Link>
      <span className="quantity">
        {product.inCart} × <span>$</span>
        {product.price}
      </span>
    </li>
  );
};

export default CartItem;
