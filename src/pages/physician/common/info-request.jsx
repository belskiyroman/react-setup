import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'semantic-ui-react';

const InfoRequest = ({ text, ...rest }) => (
  <Table.Cell {...rest}>
    <Button basic>{text}</Button>
  </Table.Cell>
);

InfoRequest.propTypes = {
  ...Table.Cell.propTypes,
  text: PropTypes.string.isRequired,
};

export default InfoRequest;
