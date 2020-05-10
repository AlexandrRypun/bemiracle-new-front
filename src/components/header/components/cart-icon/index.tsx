import React, { useCallback, useRef, useState } from 'react';
import Canvas from '../../../canvas';
import useDetectClick from '../../../../hooks/use-detect-click';

import './styles.css';

const CartIcon: React.FC<React.ComponentProps<any>> = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const ref = useRef(null);
  const closeCartCanvas = useCallback(() => {
    if (opened) {
      setOpened(false);
    }
  }, [opened]);
  useDetectClick({
    ref,
    onClickOutside: closeCartCanvas,
  });
  return (
    <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown">
      <div className="shopcart-dropdown block-cart-link" onClick={() => setOpened(true)}>
        <span className="cart-icon-icon">
          <span className="flaticon-bag" />
          <span className="count">3</span>
        </span>
      </div>
      <Canvas opened={opened}>
        <div ref={ref} className="widget akasha widget_shopping_cart">
          <div className="widget_shopping_cart_content">
            <h3 className="minicart-title">
              Your Cart<span className="minicart-number-items">3</span>
            </h3>
            <ul className="akasha-mini-cart cart_list product_list_widget">
              <li className="akasha-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  ×
                </a>
                <a href="#">
                  <img
                    src="assets/images/apro134-1-600x778.jpg"
                    className="attachment-akasha_thumbnail size-akasha_thumbnail"
                    alt="img"
                    width="600"
                    height="778"
                  />
                  T-shirt with skirt – Pink&nbsp;
                </a>
                <span className="quantity">
                  1 ×{' '}
                  <span className="akasha-Price-amount amount">
                    <span className="akasha-Price-currencySymbol">$</span>150.00
                  </span>
                </span>
              </li>
            </ul>
            <p className="akasha-mini-cart__total total">
              <strong>Subtotal:</strong>
              <span className="akasha-Price-amount amount">
                <span className="akasha-Price-currencySymbol">$</span>418.00
              </span>
            </p>
            <p className="akasha-mini-cart__buttons buttons">
              <a href="cart.html" className="button akasha-forward">
                Viewcart
              </a>
              <a href="checkout.html" className="button checkout akasha-forward">
                Checkout
              </a>
            </p>
          </div>
        </div>
      </Canvas>
    </div>
  );
};
export default CartIcon;
