import React from 'react';
import { Table } from 'semantic-ui-react';

const NotMinePatient = () => (
  <React.Fragment>
    <Table.Cell colSpan="6">
      <span className="warning-text">
        This patient has changes his Physician.
        You have no access to his data anymore
      </span>
    </Table.Cell>
  </React.Fragment>
);

export default NotMinePatient;
