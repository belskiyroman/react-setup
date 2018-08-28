import React from 'react';
import PropTypes from 'prop-types';
import { biomarkerStatus } from '../../utils/index';

const colorClass = {
  '-1': 'biomarker-red',
  0: 'biomarker-yellow',
  1: 'biomarker-green',
};

const BiomarkerValue = ({
  value,
  prevValue,
  biomarkerDate,
  treatmentDate,
  children,
}) => {
  const status = biomarkerStatus({
    value,
    prevValue,
    biomarkerDate,
    treatmentDate,
  });
  return <span className={colorClass[status]}>{children}</span>;
};

BiomarkerValue.propTypes = {
  biomarkerDate: PropTypes.string.isRequired,
  prevValue: PropTypes.number.isRequired,
  treatmentDate: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
};

export default BiomarkerValue;
