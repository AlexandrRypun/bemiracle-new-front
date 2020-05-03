import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const Category: React.FC = () => {
  const match = useRouteMatch<{ categoryId: string }>();
  return (
    <div>
      This is a page of category {match.params.categoryId}
    </div>
  );
};

export default Category;
