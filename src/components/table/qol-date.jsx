import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const QoLDate = ({ date }) => {
  const ONE_WEEK = 7;
  const TODAY = moment().startOf('day');
  const YESTERDAY = TODAY.clone().subtract(1, 'days');
  const momentDate = moment(date).startOf('day');

  let displayDate;

  if (momentDate.isSame(TODAY)) {
    displayDate = <span>Today<span className="blue-dot" /></span>;
  } else if (momentDate.isSame(YESTERDAY)) {
    displayDate = <span>Yesterday<span className="blue-dot" /></span>;
  } else {
    const days = moment().diff(momentDate, 'days');
    displayDate = days <= ONE_WEEK ? `${days}d` : momentDate.format('DD MMM YYYY');
  }


  return displayDate;
};

QoLDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default QoLDate;
