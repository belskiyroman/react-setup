import React from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'semantic-ui-react';

export default () => (
  <div className="container">
    <h1><Link to="/physician">The Index page</Link></h1>
    <div>
      <h3>Select</h3>
      <Select
        placeholder="Select your country"
        options={[
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
        ]}
      />
    </div>
  </div>
);
