import { Product } from './products';

export enum PAYMENT_METHOD {
  CASH = 'cash',
  ON_CARD = 'oncard',
}

export enum ORDER_STATUS {
  NEW = 'new',
  SENT = 'sent',
  RETRIEVED = 'retrieved',
}

export interface OrderProduct {
  id?: number;
  quantity: number;
  price: number;
  product: Product;
}

export interface Order {
  id: number;
  price: number;
  status: ORDER_STATUS;
  paymentMethod: PAYMENT_METHOD;
  readonly createdAt: string;
  customerName: string;
  customerSurname: string;
  customerPhone: string;
  customerEmail: string;
  customerCity: string;
  customerNovaPoshtaDep: number;
  comments: string;
  products: OrderProduct[];
}
