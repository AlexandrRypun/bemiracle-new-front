import React from 'react';
import { Link } from 'react-router-dom';

import { Category } from '../../../../types/categories';
import { getTranslation } from '../../../../utils/common';

interface Props extends React.ComponentProps<'object'> {
  categories: Category[];
}

const CategoriesList: React.FC<Props> = ({ categories = [] }) => (
  <ul role="menu" className="submenu">
    {categories.map(category => (
      <li key={category.id} className="menu-item menu-item-type-custom menu-item-object-custom">
        <Link className="akasha-menu-item-title" to={`/category/${category.id}`}>
          {getTranslation('name', category)}
        </Link>
      </li>
    ))}
  </ul>
);

export default CategoriesList;
