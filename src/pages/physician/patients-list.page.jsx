import React from 'react';

const PatientsListPage = () => (
  <div className="container">
    <header className="header">
      <img className="header__logo" src="/logo.svg" alt="centogene-logo" />
      <div className="header__menu" />
    </header>
    <main className="content">
      <ul className="tabs">
        <li className="tabs__item">task</li>
        <li className="tabs__item">patients</li>
        <li className="tabs__item">phisician</li>
      </ul>
      <div className="controls" />
      <div className="table" />
    </main>
  </div>
);

export default PatientsListPage;
