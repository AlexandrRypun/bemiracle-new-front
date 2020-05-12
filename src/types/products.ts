export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

export interface CartProduct extends Product {
  quantity: number;
}
