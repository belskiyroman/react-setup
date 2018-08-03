import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const STATUSES = {
  PENDING: 'pending',
  NEW: 'new',
};

const Status = ({ status }) => {
  switch (status) {
    case STATUSES.NEW:
      return <span className="status-new">new</span>;
    case STATUSES.PENDING:
      return <Icon className="status-pending" name="clock outline" />;
    default:
      return null;
  }
};

Status.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUSES)),
};

Status.defaultProps = {
  status: null,
};

export default Status;
