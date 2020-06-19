import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Order } from '../../types/orders';
import OrderTeaser from '../../components/orders/teaser';
import useRequest from '../../hooks/use-request';
import { GetManyResponse } from '../../types/common';
import Loader from '../../components/loader';

import './styles.css';

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const { t } = useTranslation();

  const { isFetching, get } = useRequest({ endpoint: 'orders', initIsFetching: true });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await get<GetManyResponse<Order>>();
        const { data: orders = [] } = response || {};
        setOrders(orders);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [get]);

  return (
    <div className="orders-page">
      <h1 className="page-title">{t('orders.header')}</h1>
      {orders.length === 0 && !isFetching ? (
        <p className="no-data">{t('orders.noOrders')}</p>
      ) : (
        <Loader isLoading={isFetching}>
          <table className="orders-list" cellSpacing="0">
            <colgroup>
              <col className="order-name" />
              <col className="order-status" />
              <col className="order-price" />
              <col className="order-payment-method" />
              <col className="order-date" />
            </colgroup>
            <thead>
              <tr>
                <th>{t('orders.title')}</th>
                <th>{t('orders.status')}</th>
                <th>{t('orders.price')}</th>
                <th className="payment-method">{t('orders.paymentMethod')}</th>
                <th>{t('orders.createdDate')}</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <OrderTeaser key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        </Loader>
      )}
    </div>
  );
};

export default OrdersPage;
