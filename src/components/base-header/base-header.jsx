import PropTypes from 'prop-types';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const BaseHeader = ({ homeUrl = '/', children }) => (
  <header className="header">
    <Link to={homeUrl}>
      <img className="header__logo" src="/centogene-logo.svg" alt="centogene-logo" />
    </Link>
    <div className="header__links">
      <a className="header__link-item" href="javascript:void(0)">Contact Us</a>
      <a className="header__link-item" href="javascript:void(0)">Go to CentoPortal</a>
    </div>
    {children}
  </header>
);

export default BaseHeader;

BaseHeader.defaultProps = {
  children: null,
  homeUrl: '/',
};

BaseHeader.propTypes = {
  children: PropTypes.any,
  homeUrl: PropTypes.string,
};
