import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BreadcrumbsContext } from '../../contexts/breadcrumbs';

import './styles.css';

const Breadcrumbs: React.FC = () => {
  const { breadcrumbs } = useContext(BreadcrumbsContext);

  return breadcrumbs.length ? (
    <div className="breadcrumbs-block">
      <nav>
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
            {i < breadcrumbs.length - 1 && <i className="fa fa-angle-right" />}
          </React.Fragment>
        ))}
      </nav>
    </div>
  ) : null;
};

export default Breadcrumbs;
