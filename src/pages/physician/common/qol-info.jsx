import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { QoLDate } from '../../../components/table';

const QoLInfo = ({ date }) => (
  <Table.Cell className="primary-text table__text-hover-gray" textAlign="right">
    <QoLDate date={date} />
  </Table.Cell>
);

QoLInfo.propTypes = {
  date: PropTypes.string.isRequired,
};

export default QoLInfo;