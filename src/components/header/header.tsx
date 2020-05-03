import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../components/menu/menu';
import CartItem from '../cart-item/cart-item';

const Header: React.FC = () => (
  <div>
    <Link to="/">logo</Link>
    <Menu />
    <CartItem />
  </div>
);

export default Header;
