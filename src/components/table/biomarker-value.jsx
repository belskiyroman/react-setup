import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

const BiomarkerValue = ({
  value, prevValue, biomarkerDate, firstTreatmentDate, children,
}) => {
  const HALF_OF_YEAR = 6;
  const BOUNDARY_OF_POSITIVE_RESULT = 100;
  const BOUNDARY_OF_PERMISSIBLE_WORSENED = 20;
  const isHalfOfYearAgo = moment(biomarkerDate).diff(moment(firstTreatmentDate), 'month') > HALF_OF_YEAR;
  const isBiomarkerGood = value <= BOUNDARY_OF_POSITIVE_RESULT;
  const isResultWorsened = value - prevValue >= BOUNDARY_OF_PERMISSIBLE_WORSENED;
  const classes = classNames({
    'biomarker-green': isHalfOfYearAgo && isBiomarkerGood && !isResultWorsened,
    'biomarker-red': isHalfOfYearAgo && (!isBiomarkerGood || isResultWorsened),
    'biomarker-yellow': !isHalfOfYearAgo,
  });
  return <span className={classes}>{children}</span>;
};

BiomarkerValue.propTypes = {
  value: PropTypes.number.isRequired,
  prevValue: PropTypes.number.isRequired,
  biomarkerDate: PropTypes.string.isRequired,
  firstTreatmentDate: PropTypes.string.isRequired,
};

export default BiomarkerValue;
