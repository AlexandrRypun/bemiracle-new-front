import React from 'react';
import { Link } from 'react-router-dom';

import { Category } from '../../../../types/categories';

interface Props extends React.ComponentProps<'object'> {
  categories: Category[];
}

const CategoriesList: React.FC<Props> = ({ categories = [] }) => (
  <ul role="menu" className="submenu">
    {categories.map(({ id, name }) => (
      <li key={id} className="menu-item menu-item-type-custom menu-item-object-custom">
        <Link className="akasha-menu-item-title" to={`/category/${id}`}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

export default CategoriesList;
