import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { Dropdown, Select, Form, Input } from 'semantic-ui-react';

// import 'semantic-ui-css/semantic.min.css';
// import '../src/styles/main.scss';
import './semantic.css';

const data = [
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Date of birth',
    value: 'dateOfBirth',
  },
  {
    text: 'Country',
    value: 'country',
  },
  {
    text: 'Desease',
    value: 'desease',
  },
  {
    text: 'Lyso-Gb1',
    value: 'lysoGb1',
  },
  {
    text: 'Last test',
    value: 'lastTest',
  },
  {
    text: 'QoL updates',
    value: 'qolUpdates',
  },
];

storiesOf('Form', module)
  .add('Select', () => (
    <div style={{ padding: '20px' }}>
      <Dropdown className="cs" icon="chevron down" placeholder="Select your country" selection options={data} />
      <Form.Select className="cs" icon="chevron down" placeholder="Select your country" options={data} />
      <Select className="cs" icon="chevron down" placeholder="Select your country" options={data} />
    </div>
  ))
  .add('Input', () => (
    <div style={{ padding: '20px' }}>
      <Input className="cs" />
    </div>
  ));
