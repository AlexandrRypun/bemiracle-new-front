import React, { useCallback, useContext, useEffect, useRef, useState, MouseEvent, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Canvas from '../../../canvas';
import useDetectClick from '../../../../hooks/use-detect-click';
import CartItem from './components/cart-item';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../../../contexts/cart';

import './styles.css';

const CartIcon: React.FC = () => {
  const { products, removeFromCart } = useContext(CartContext);
  const total = useMemo(() => products.reduce((sum, product) => sum + product.price * product.quantity, 0), [products]);

  const removeFromCartHandler = useCallback(
    (productId: number) => (e: MouseEvent): void => {
      e.nativeEvent.stopImmediatePropagation();
      removeFromCart(productId);
    },
    [removeFromCart],
  );

  const [opened, setOpened] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeCartCanvas = useCallback(() => {
    if (opened) {
      setOpened(false);
    }
  }, [opened]);
  useDetectClick({
    ref,
    onClickOutside: closeCartCanvas,
  });
  const history = useHistory();
  useEffect(() => setOpened(false), [history.location.key]);

  return (
    <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown cart-icon">
      <div className="shopcart-dropdown block-cart-link" onClick={(): void => setOpened(true)}>
        <span className="icon">
          <span className="flaticon-bag" />
          <span className="count">{products.length}</span>
        </span>
      </div>
      <Canvas opened={opened}>
        <div ref={ref} className="widget akasha widget_shopping_cart cart-canvas">
          <div className="widget_shopping_cart_content">
            <h3 className="minicart-title">
              Your Cart<span className="count">{products.length}</span>
            </h3>
            <ul className="akasha-mini-cart cart_list product_list_widget products-list">
              {products.map(product => (
                <CartItem key={product.product.id} product={product} removeFromCart={removeFromCartHandler} />
              ))}
            </ul>
            <p className="akasha-mini-cart__total total">
              <strong>Subtotal:</strong>
              <span className="akasha-Price-amount amount">${total}</span>
            </p>
            <p className="akasha-mini-cart__buttons buttons">
              <Link to="/cart" className="button akasha-forward">
                View cart
              </Link>
              <Link to="/checkout" className="button checkout akasha-forward">
                Checkout
              </Link>
            </p>
          </div>
        </div>
      </Canvas>
    </div>
  );
};
export default CartIcon;
