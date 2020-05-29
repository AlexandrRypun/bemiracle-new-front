import React from 'react';

import { CartProduct, ProductTranslation } from '../../../types/products';
import useEntityTranslation from '../../../hooks/use-entity-translation';

type Props = {
  product: CartProduct;
};

const OrderProduct: React.FC<Props> = ({ product }) => {
  const translation = useEntityTranslation<ProductTranslation>(product);
  return (
    <tr className="order-product">
      <td>
        {translation.name} <strong className="product-quantity">× {product.inCart}</strong>
      </td>
      <td>${product.price * product.inCart}</td>
    </tr>
  );
};

export default OrderProduct;
