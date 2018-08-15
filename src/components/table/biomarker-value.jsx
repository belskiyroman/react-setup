import React from 'react';
import PropTypes from 'prop-types';
import { biomarkerStatus } from '../../utils';

const colorClass = {
  '-1': 'biomarker-red',
  0: 'biomarker-yellow',
  1: 'biomarker-green',
};

const BiomarkerValue = ({
  value,
  prevValue,
  biomarkerDate,
  firstTreatmentDate,
  children,
}) => {
  const status = biomarkerStatus({
    value,
    prevValue,
    biomarkerDate,
    firstTreatmentDate,
  });
  return <span className={colorClass[status]}>{children}</span>;
};

BiomarkerValue.propTypes = {
  value: PropTypes.number.isRequired,
  prevValue: PropTypes.number.isRequired,
  biomarkerDate: PropTypes.string.isRequired,
  firstTreatmentDate: PropTypes.string.isRequired,
};

export default BiomarkerValue;
