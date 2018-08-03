import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table } from 'semantic-ui-react';

const PatientInfo = ({
  date_of_birth,
  gender,
  phone,
  country,
  disease,
}) => (
  <React.Fragment>
    <Table.Cell>
      <span className="primary-text">
        {moment(date_of_birth).format('DD MMM YYYY')}
      </span>
      <br />
      <span className="sub-text">{gender}</span>
    </Table.Cell>
    <Table.Cell>
      <span className="primary-text">{phone}</span>
      <br />
      <span className="sub-text">{country}</span>
    </Table.Cell>
    <Table.Cell className="primary-text">
      {disease}
    </Table.Cell>
  </React.Fragment>
);

PatientInfo.propTypes = {
  date_of_birth: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  disease: PropTypes.string.isRequired,
};

export default PatientInfo;
