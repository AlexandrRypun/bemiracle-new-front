import React from 'react';
import { Link } from 'react-router-dom';

import MenuItemCategories from '../menu-item-categories/menu-item-categories';

const Menu: React.FC = () => {
  return (
    <div>
      <MenuItemCategories />
      <Link to="/about-us">About us</Link>
    </div>
  );
};

export default Menu;
