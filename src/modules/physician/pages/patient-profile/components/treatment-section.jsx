import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';
import { Pagination } from '../../../../../components/pagination';

const TreatmentSection = ({
  treatments = [],
  treatmentsTotalPages = 1,
  treatmentsCurrentPage = 1,
  onPageChange,
}) => (
  <section id="link-for-treatments" className="m-t-50">
    <h4>Treatment</h4>
    <Table className="m-t-30" selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Drug</Table.HeaderCell>
          <Table.HeaderCell>Dosage</Table.HeaderCell>
          <Table.HeaderCell>Frequency</Table.HeaderCell>
          <Table.HeaderCell>Infusions</Table.HeaderCell>
          <Table.HeaderCell>Start Date</Table.HeaderCell>
          <Table.HeaderCell>Duration</Table.HeaderCell>
          <Table.HeaderCell>End Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {treatments.map(item => (
          <Table.Row verticalAlign="bottom" key={item.id}>
            <Table.Cell>{item.drug}</Table.Cell>
            <Table.Cell>{item.dosage}</Table.Cell>
            <Table.Cell>{item.frequency}</Table.Cell>
            <Table.Cell>{item.infusions_num || 0}</Table.Cell>
            <Table.Cell>{moment(item.start_date).format('DD MMM YYYY')}</Table.Cell>
            <Table.Cell>
              {moment(item.end_date || Date.now()).diff(moment(item.start_date), 'month')}
            </Table.Cell>
            <Table.Cell>
              {item.end_date
                ? moment(item.end_date).format('DD MMM YYYY')
                : <div className="color-label color-label-black">Current</div>}
            </Table.Cell>
          </Table.Row>))}
      </Table.Body>
    </Table>
    <Pagination
      totalPages={treatmentsTotalPages}
      currentPage={treatmentsCurrentPage}
      onPageChange={onPageChange}
    />
  </section>
);

export default TreatmentSection;

TreatmentSection.propTypes = {
  treatments: PropTypes.arrayOf(PropTypes.shape({
    dosage: PropTypes.string,
    drug: PropTypes.string,
    end_date: PropTypes.string,
    frequency: PropTypes.string,
    start_date: PropTypes.string,
  })).isRequired,
  treatmentsCurrentPage: PropTypes.number.isRequired,
  treatmentsTotalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
