import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const QoLDate = ({ date }) => {
  const ONE_WEEK = 7;
  const TODAY = moment().startOf('day');
  const YESTERDAY = TODAY.clone().subtract(1, 'days');
  const momentDate = moment(date).startOf('day');

  if (momentDate.isSame(TODAY)) {
    return <span>Today<span className="dot bg-blue" /></span>;
  }
  if (momentDate.isSame(YESTERDAY)) {
    return <span>Yesterday<span className="dot bg-blue" /></span>;
  }

  const days = moment().diff(momentDate, 'days');
  return days > ONE_WEEK
    ? momentDate.format('DD MMM YYYY')
    : `${days}d`;
};

QoLDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default QoLDate;
