import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { Product } from '../../types/products';
import { OrderProduct } from '../../types/orders';

type ProductsQuantities = { [id: string]: number };
type AlreadyInCartF = (id: number) => number;
type ContextProps = {
  products: OrderProduct[];
  alreadyInCart: AlreadyInCartF;
  addToCart: (product: Product, qty: number) => void;
  removeFromCart: (id: number, qty?: number) => void;
};
const initialValue = {
  products: [],
  alreadyInCart: (): number => 0,
  addToCart: (): void => {},
  removeFromCart: (): void => {},
};

export const CartContext = React.createContext<ContextProps>(initialValue);

const CartProvider: React.FC<React.PropsWithChildren<React.ReactNode>> = ({ children }) => {
  const getStoredCartProducts = useCallback((): OrderProduct[] => {
    const storedCartProducts = localStorage.getItem('cartProducts');
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  }, []);
  const [products, setProducts] = useState<OrderProduct[]>(getStoredCartProducts());

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products));
  }, [products]);

  const inCartQuantities = useMemo<ProductsQuantities>(() => {
    const productsQty: ProductsQuantities = {};
    products.forEach(product => {
      productsQty[product.product.id] = product.quantity;
    });
    return productsQty;
  }, [products]);

  const alreadyInCart = useCallback<AlreadyInCartF>((productId: number) => inCartQuantities[productId] || 0, [
    inCartQuantities,
  ]);
  const addToCart = useCallback(
    (product: Product, qty: number): void => {
      const products = getStoredCartProducts();
      const index = products.findIndex(({ product: { id } }) => product.id === id);
      if (index === -1) {
        products.push({ product, quantity: qty, price: product.price });
      } else {
        const newQty = products[index].quantity + qty;
        products.splice(index, 1, {
          ...products[index],
          quantity: newQty > products[index].product.inStock ? products[index].product.inStock : newQty,
        });
      }
      setProducts(products);
    },
    [getStoredCartProducts],
  );

  const removeFromCart = useCallback(
    (productId: number, qty?: number): void => {
      const products = getStoredCartProducts();
      const index = products.findIndex(({ product: { id } }) => productId === id);
      const product = products[index];
      if (index !== -1) {
        const newQty = qty ? product.quantity - qty : 0;
        if (newQty < 1) {
          products.splice(index, 1);
        } else {
          products.splice(index, 1, { ...product, quantity: newQty });
        }
      }
      setProducts(products);
    },
    [getStoredCartProducts],
  );

  return (
    <CartContext.Provider value={{ products, alreadyInCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
