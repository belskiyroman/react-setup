import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import { BiomarkerValue } from '../../../../../components/table';

const BiomarkerInfo = ({
  date,
  value,
  previous_value,
  treatment_date,
}) => (
  <React.Fragment>
    <span className="sub-text">
                      Updated {moment(date).format('DD MMM YYYY')}
    </span>
    <div className="m-t-30">
      <span className="biomarker-value weight-500">
        <BiomarkerValue
          value={value}
          prevValue={previous_value}
          biomarkerDate={date}
          treatmentDate={treatment_date}
        >
          {value}
        </BiomarkerValue>
      </span>
      <span className="biomarker-value">ng/ml</span>
    </div>
    <div className="m-t-30">
      <a href="#link-for-biomarkers">
        <Button basic>All Biomarkers</Button>
      </a>
    </div>
  </React.Fragment>
);

export default BiomarkerInfo;

BiomarkerInfo.propTypes = {
  date: PropTypes.string.isRequired,
  previous_value: PropTypes.number.isRequired,
  treatment_date: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
