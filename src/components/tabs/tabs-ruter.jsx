import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

const TabsRouter = ({ tabs = [] }) => (
  <ul className="tabs">
    {tabs.map(tab => (
      <li key={tab.to + tab.title}>
        <Link className="tabs__item" activeClassName="tabs__item--active" to={tab.to}>{tab.title}</Link>
      </li>
    ))}
  </ul>
);

TabsRouter.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default TabsRouter;
