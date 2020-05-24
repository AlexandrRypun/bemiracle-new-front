import React from 'react';

import { CartProduct } from '../../../types/products';

import { getTranslation } from '../../../utils/common';

type Props = {
  product: CartProduct;
};

const OrderProduct: React.FC<Props> = ({ product }) => {
  return (
    <tr className="order-product">
      <td>
        {getTranslation('name', product)} <strong className="product-quantity">× {product.inCart}</strong>
      </td>
      <td>${product.price * product.inCart}</td>
    </tr>
  );
};

export default OrderProduct;
