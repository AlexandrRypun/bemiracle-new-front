import React from 'react';

import { Order } from '../../../types/orders';

import './styles.css';

type Props = {
  order: Order;
};
const OrderView: React.FC<Props> = ({ order }) => {
  return <div>Order page</div>;
};

export default OrderView;
