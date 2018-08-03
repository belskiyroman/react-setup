import React from 'react';
import { Table } from 'semantic-ui-react';
import InfoRequest from './info-request';

const ChangedPhysician = () => (
  <React.Fragment>
    <Table.Cell colSpan="5">
      <span className="warning-text">
        This patient has changes his Physician.
        You have no access to his data anymore
      </span>
    </Table.Cell>
    <InfoRequest text="Hide" textAlign="right" />
  </React.Fragment>
);

export default ChangedPhysician;
