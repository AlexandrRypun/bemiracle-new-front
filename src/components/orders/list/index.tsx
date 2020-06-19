import React from 'react';

import { Order } from '../../../types/orders';
import OrderTeaser from '../teaser';

import './styles.css';

type Props = {
  orders: Order[];
};
const OrdersList: React.FC<Props> = ({ orders }) => {
  return (
    <ul className="orders">
      {orders.map(order => (
        <OrderTeaser key={order.id} order={order} />
      ))}
    </ul>
  );
};

export default OrdersList;
