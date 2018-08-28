import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';
import { yearsList } from '../../../../../utils';
import { BiomarkersBarChart } from '../../../../../components/chart';
import { SelectMaterial } from '../../../../../components/form';

const YEAR_AGO = 50;
const yearsOptions = yearsList(YEAR_AGO)
  .reverse()
  .map(year => ({ text: year, value: year }));

const BiomarkerSection = ({ biomarkers = [] }) => (
  <section id="link-for-biomarkers" className="m-t-50">
    <h4>LysoGb1 Biomarkers</h4>
    <div className="section-border flex m-t-30">
      <div className="chart-box divider-right">
        <div className="align-right p-b-30">
          <SelectMaterial
            className="select-year"
            placeholder="Year"
            options={yearsOptions}
            defaultValue={yearsOptions[0].value}
          />
        </div>
        <BiomarkersBarChart data={biomarkers} />
      </div>

      <Table className="biomarker-table" textAlign="center" selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>LysoGb1</Table.HeaderCell>
            <Table.HeaderCell>Test Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {biomarkers.map(item => (
            <Table.Row verticalAlign="bottom" key={item.id}>
              <Table.Cell>
                <div className="biomarker-table-value">
                  <span className="dot bg-red" />
                  <span>{item.value} ng/mL</span>
                </div>
              </Table.Cell>
              <Table.Cell>
                {moment(item.date).format('DD MMM YYYY')}
              </Table.Cell>
            </Table.Row>))}
        </Table.Body>
      </Table>
    </div>
  </section>
);

export default BiomarkerSection;

BiomarkerSection.propTypes = {
  biomarkers: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      id: PropTypes.number,
      value: PropTypes.number,
    }),
  ).isRequired,
};
