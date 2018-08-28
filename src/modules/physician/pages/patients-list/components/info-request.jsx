import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button, Table } from 'semantic-ui-react';

const InfoRequest = ({
  text,
  requestedAt,
  onRequest,
  ...rest
}) => (
  <Table.Cell {...rest}>
    <Button onClick={onRequest} basic>{text}</Button>
    {
      requestedAt
      && (
        <span className="requested-at">
          Requested {moment(requestedAt).format('DD MMM YYYY')}
        </span>
      )
    }
  </Table.Cell>
);

InfoRequest.defaultProps = {
  requestedAt: null,
};

InfoRequest.propTypes = {
  ...Table.Cell.propTypes,
  text: PropTypes.string.isRequired,
  onRequest: PropTypes.func.isRequired,
  requestedAt: PropTypes.string,
};

export default InfoRequest;
