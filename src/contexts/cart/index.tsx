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
  const cartProducts = useMemo<CartProduct[]>(() => {
    const storedCartProducts = localStorage.getItem('cartProducts');
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  }, []);
  const [products, setProducts] = useState<CartProduct[]>(cartProducts);

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
    setProducts(products => {
      const index = products.findIndex(({ id }) => product.id === id);
      if (index === -1) {
        products.push({ ...product, inCart: qty });
      } else {
        products.splice(index, 1, { ...products[index], inCart: products[index].inCart += qty });
      }
      return [...products];
    });
  }, []);

  const removeFromCart = useCallback((productId: number, qty?: number): void => {
    setProducts(products => {
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
      return [...products];
    });
  }, []);

  return (
    <CartContext.Provider value={{ products, alreadyInCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
