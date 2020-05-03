import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
};

const MenuItemCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [opened, setOpened] = useState(false);

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
    <div>
      <a href="#" onClick={(): void => setOpened(!opened)}>
        Categories
      </a>
      {opened && (
        <ul>
          {categories.map(({ id, name }) => (
            <Link key={id} to={`/category/${id}`}>
              {name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItemCategories;
