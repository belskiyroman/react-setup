import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import moment from 'moment';
import { BiomarkerValue } from '../../../../../components/table';

const BiomarkerInfo = ({
  value,
  previous_value,
  date,
  treatment_date,
}) => (
  <React.Fragment>
    <Table.Cell className="biomarker-value">
      <BiomarkerValue
        value={value}
        prevValue={previous_value}
        biomarkerDate={date}
        treatmentDate={treatment_date}
      >
        {value}
      </BiomarkerValue>
    </Table.Cell>
    <Table.Cell className="sub-text sub-text--big">
      {moment(date).format('DD MMM YYYY')}
    </Table.Cell>
  </React.Fragment>
);

BiomarkerInfo.propTypes = {
  value: PropTypes.number.isRequired,
  previous_value: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  treatment_date: PropTypes.string.isRequired,
};

export default BiomarkerInfo;
