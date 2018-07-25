import React from 'react';

const BaseLayout = ({ children }) => (
  <div>
    <header>
      <img src="logo.svg" alt="centogene-logo"/>
      <ul className="tabs">
        <li className="tabs__item">task</li>
        <li className="tabs__item">patients</li>
        <li className="tabs__item">phisician</li>
      </ul>
      <div></div>
    </header>
    <main>

    </main>
  </div>
);

export default BaseLayout;
