import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import LanguageItem from './language-item';

const userMenu = [
  {
    key: 1,
    content: <span>Sign Out</span>,
    onClick: () => console.info('>>> Sign Out'),
  },
];

const languages = [
  { title: 'EN', flagUrl: '/en.png' },
];

const languagesConfig = languages.map((item, index) => ({
  key: index,
  value: index,
  content: <LanguageItem {...item} />,
}));

const Header = () => (
  <header className="header">
    <img className="header__logo" src="/centogene-logo.svg" alt="centogene-logo" />
    <div className="header__links">
      <a className="header__link-item" href="javascript:void(0)">Contact Us</a>
      <a className="header__link-item" href="javascript:void(0)">Go to CentoPortal</a>
    </div>
    <Dropdown
      className="header__dropdown"
      icon="chevron down"
      options={userMenu}
      trigger={(
        <div className="header__user-menu">
          <span className="header__user-menu__name">Dr. Nettie Thompson</span>
          <span className="header__user-menu__info">Royal Free Medical Centre</span>
        </div>
      )}
    />
    <Dropdown
      className="header__dropdown"
      icon="chevron down"
      // options={languagesConfig}
      trigger={languagesConfig[0].content}
    />
  </header>
);

export default Header;
