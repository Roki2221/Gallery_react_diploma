import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CSS from './BreadCrumb.module.css';
const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  if (location.pathname === '/') {
    // Не відображати breadcrumb на домашній сторінці
    return null;
  }
  return (
    <nav aria-label="breadcrumb">
      <ol className={CSS.breadcrumb}>
        <li className={CSS.breadcrumb_item}>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={name}
              className={`${CSS.breadcrumb_item} ${isLast ? CSS.active : ''}`}
            >
              {isLast ? name : <Link to={routeTo}>{name}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
