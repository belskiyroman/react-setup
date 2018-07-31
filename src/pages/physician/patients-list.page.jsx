import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Dropdown, Select, Input, Checkbox, Label, Icon,
} from 'semantic-ui-react';

const userMenuData = [
  {
    key: 1,
    content: <span>Sign Out</span>,
    onClick: () => console.info('>>> Sign Out'),
  },
];

const PatientsListPage = () => (
  <div className="container">
    <header className="header">
      <img className="header__logo" src="/centogene-logo.svg" alt="centogene-logo" />
      <div className="header__links">
        <a className="header__link-item" href="javascript:void(0)">Contact Us</a>
        <a className="header__link-item" href="javascript:void(0)">Go to CentoPortal</a>
      </div>
      <Dropdown
        className="header__dropdown"
        icon="chevron down"
        options={userMenuData}
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
        trigger={(
          <React.Fragment>
            <img className="header__language-flag" src="/en.png" alt="language-flag" />
            <span className="header__language-abbr">EN</span>
          </React.Fragment>
        )}
      />
    </header>
    <main className="content">
      <ul className="tabs">
        <li>
          <Link className="tabs__item" activeClassName="tabs__item--active" to="/tasks">tasks</Link>
        </li>
        <li>
          <Link className="tabs__item" activeClassName="tabs__item--active" to="/patients">patients</Link>
        </li>
        <li>
          <Link className="tabs__item" activeClassName="tabs__item--active" to="/phisicians">phisicians</Link>
        </li>
      </ul>
      <div className="controls">
        <div className="grow">
          <Input
            className="cs controls__item"
            placeholder="Search by name or ID"
            label={<Label><Icon name="search" /></Label>}
            labelPosition="right"
          />
          <Select
            className="material controls__item"
            icon="chevron down"
            placeholder="Select your country"
            options={[]}
          />
        </div>
        <Checkbox className="cs" label="Show inactive" />
      </div>
      <div className="table" />
    </main>
  </div>
);

export default PatientsListPage;
