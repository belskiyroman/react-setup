import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const languageItemPropTypes = {
  flagUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const LanguageItem = ({ flagUrl, title }) => (
  <React.Fragment>
    <img className="header__language-flag" src={flagUrl} alt="language-flag" />
    <span className="header__language-abbr">{title}</span>
  </React.Fragment>
);

LanguageItem.propTypes = languageItemPropTypes;

const LanguageDropdown = ({ languages, defaultItem }) => {
  const languagesConfig = languages.map((item, index) => ({
    key: index,
    value: index,
    content: <LanguageItem {...item} />,
  }));
  return (
    <Dropdown
      className="header__dropdown selection"
      options={languagesConfig}
      trigger={<LanguageItem {...defaultItem} />}
    />
  );
};


LanguageDropdown.propTypes = {
  defaultItem: PropTypes.shape(languageItemPropTypes).isRequired,
  languages: PropTypes.arrayOf(PropTypes.shape(languageItemPropTypes)).isRequired,
};

export default LanguageDropdown;
