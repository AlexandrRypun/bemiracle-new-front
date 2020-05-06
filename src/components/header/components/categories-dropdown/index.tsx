import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
};

const CategoriesDropdown: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setTimeout(
      () =>
        setCategories([
          { id: 1, name: 'AAA' },
          { id: 2, name: 'BBB' },
        ]),
      2000,
    );
  }, []);

  return (
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
};

export default CategoriesDropdown;
