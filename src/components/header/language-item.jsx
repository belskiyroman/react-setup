import React from 'react';
import PropTypes from 'prop-types';

const LanguageItem = ({ flagUrl, title }) => (
  <React.Fragment>
    <img className="header__language-flag" src={flagUrl} alt="language-flag" />
    <span className="header__language-abbr">{title}</span>
  </React.Fragment>
);

LanguageItem.propTypes = {
  flagUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LanguageItem;
