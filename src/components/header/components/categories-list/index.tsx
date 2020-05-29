import React from 'react';
import { Link } from 'react-router-dom';

import { Category, CategoryTranslation } from '../../../../types/categories';
import { useEntitiesTranslations } from '../../../../hooks/use-entity-translation';

import './styles.css';

interface Props extends React.ComponentProps<'object'> {
  categories: Category[];
}

const CategoriesList: React.FC<Props> = ({ categories = [] }) => {
  const categoriesWithCurrentTranslation = useEntitiesTranslations<Category, CategoryTranslation>(categories);

  return (
    <ul role="menu" className="submenu menu-categories-list">
      {categoriesWithCurrentTranslation.map(category => (
        <li key={category.id} className="menu-item menu-item-type-custom menu-item-object-custom">
          <Link className="akasha-menu-item-title category-menu-item" to={`/category/${category.id}`}>
            {category.currentTranslation.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
