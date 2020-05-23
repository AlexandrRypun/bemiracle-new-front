import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { CartProduct, Product } from '../../types/products';

type ProductsQuantities = { [id: string]: number };
type AlreadyInCartF = (id: number) => number;
type ContextProps = {
  products: CartProduct[];
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
  const getStoredCartProducts = useCallback((): CartProduct[] => {
    const storedCartProducts = localStorage.getItem('cartProducts');
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  }, []);
  const [products, setProducts] = useState<CartProduct[]>(getStoredCartProducts());

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products));
  }, [products]);

  const inCartQuantities = useMemo<ProductsQuantities>(() => {
    const productsQty: ProductsQuantities = {};
    products.forEach(product => {
      productsQty[product.id] = product.inCart;
    });
    return productsQty;
  }, [products]);

  const alreadyInCart = useCallback<AlreadyInCartF>((productId: number) => inCartQuantities[productId] || 0, [
    inCartQuantities,
  ]);
  const addToCart = useCallback((product: Product, qty: number): void => {
    const products = getStoredCartProducts();
    const index = products.findIndex(({ id }) => product.id === id);
    if (index === -1) {
      products.push({ ...product, inCart: qty });
    } else {
      const newQty = products[index].inCart + qty;
      products.splice(index, 1, {
        ...products[index],
        inCart: newQty > products[index].inStock ? products[index].inStock : newQty,
      });
    }
    setProducts(products);
  }, []);

  const removeFromCart = useCallback((productId: number, qty?: number): void => {
    const products = getStoredCartProducts();
    const index = products.findIndex(({ id }) => productId === id);
    const product = products[index];
    if (index !== -1) {
      const newQty = qty ? product.inCart - qty : 0;
      if (newQty < 1) {
        products.splice(index, 1);
      } else {
        products.splice(index, 1, { ...product, inCart: newQty });
      }
    }
    setProducts(products);
  }, []);

  return (
    <CartContext.Provider value={{ products, alreadyInCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
