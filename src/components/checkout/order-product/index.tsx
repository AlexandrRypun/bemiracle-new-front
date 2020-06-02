import React from 'react';

import { ProductTranslation } from '../../../types/products';
import useEntityTranslation from '../../../hooks/use-entity-translation';
import { OrderProduct } from '../../../types/orders';

type Props = {
  product: OrderProduct;
};

const OrderProductLine: React.FC<Props> = ({ product }) => {
  const translation = useEntityTranslation<ProductTranslation>(product.product);
  return (
    <tr className="order-product">
      <td>
        {translation.name} <strong className="product-quantity">× {product.quantity}</strong>
      </td>
      <td>${product.price * product.quantity}</td>
    </tr>
  );
};

export default OrderProductLine;
