import moment from 'moment';

const biomarkerStatus = ({
  value,
  prevValue,
  biomarkerDate,
  firstTreatmentDate,
}) => {
  const HALF_OF_YEAR = 6;
  const BOUNDARY_OF_POSITIVE_RESULT = 100;
  const BOUNDARY_OF_PERMISSIBLE_WORSENED = 20;

  const pastTime = moment(Date.parse(biomarkerDate)).diff(moment(Date.parse(firstTreatmentDate)), 'month');
  const isHalfOfYearAgo =  pastTime > HALF_OF_YEAR;
  const isBiomarkerGood = value <= BOUNDARY_OF_POSITIVE_RESULT;
  const isResultWorsened = value - prevValue >= BOUNDARY_OF_PERMISSIBLE_WORSENED;

  if (!isHalfOfYearAgo) return 0;
  if (isHalfOfYearAgo && isBiomarkerGood && !isResultWorsened) return 1;
  if (isHalfOfYearAgo && (!isBiomarkerGood || isResultWorsened)) return -1;

  throw new Error('Unexpected case of coloring the biomarker.');
};

export default biomarkerStatus;
