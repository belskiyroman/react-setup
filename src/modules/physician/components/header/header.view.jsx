import PropTypes from 'prop-types';
import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { LanguagesDropdown } from '../../../../components/language-dropdown';

const HeaderView = ({
  isLogin = false,
  firstName = '',
  lastName = '',
  institution = '',
  languages = [],
  onLogout,
}) => (
  <React.Fragment>
    {
      isLogin
      && (
        <Dropdown
          className="header__dropdown selection"
          trigger={(
            <div className="header__user-menu">
              <span className="header__user-menu__name">Dr. {firstName} {lastName}</span>
              <span className="header__user-menu__info">{institution}</span>
            </div>
          )}
          options={[
            {
              key: 1,
              content: <span>Sign Out</span>,
              onClick: onLogout,
            },
          ]}
        />
      )
    }
    <LanguagesDropdown languages={languages} defaultItem={languages[0]} />
  </React.Fragment>
);

export default HeaderView;

HeaderView.defaultProps = {
  firstName: '',
  lastName: '',
  institution: '',
};

HeaderView.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  institution: PropTypes.string,
  isLogin: PropTypes.bool.isRequired,
  languages: PropTypes.array.isRequired,
  onLogout: PropTypes.func.isRequired,
};
