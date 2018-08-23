import React from 'react';
import moment from 'moment';
import { NavLink as Link } from 'react-router-dom';
import { Icon, Button, Table } from 'semantic-ui-react';
import { YELLOW, RED, BLUE } from '../../../core/constants';
import { Pagination } from '../../../components/pagination';
import { BiomarkerValue } from '../../../components/table';
import { BiomarkersBarChart, QoLBarChart } from '../../../components/chart';
import { SelectMaterial } from '../../../components/form';
import { yearsList } from '../../../utils';

const YEAR_AGO = 50;
const yearsOptions = yearsList(YEAR_AGO)
  .reverse()
  .map(year => ({ text: year, value: year }));

const PatientProfileView = ({
  profile = {},
  biomarkers = [],
  treatments = [],
  currentTreatment,
  treatmentsTotalPages,
  treatmentsCurrentPage,
  qol = [],
}) => (
  <div>
    <h4>My patients that are using myLSD application</h4>
    <div className="controls">
      <Link className="come-back" to="/physician/patients">
        <Icon name="arrow left" />
        Back to Patient List
      </Link>
    </div>
    <section className="flex m-t-30">
      <div className="grow-1 divider-right p-t-15 p-b-30 p-r-30">
        <h1>{profile.first_name} {profile.last_name}</h1>
        <span className="sub-text">ID {profile.id}</span>

        <table className="personal-info">
          <tbody>
            <tr>
              <td>
                <div className="info-item">
                  <span className="sub-text">Gender</span>
                  <span className="primary-text">{profile.gender}</span>
                </div>
              </td>
              <td>
                <div className="info-item">
                  <span className="sub-text">Disease</span>
                  <span className="primary-text">{profile.disease}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="info-item">
                  <span className="sub-text">Birth Date</span>
                  <span className="primary-text">
                    {moment(profile.date_of_birth).format('DD MMM YYYY')}
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="info-item">
                  <span className="sub-text">Height</span>
                  <span className="primary-text">{profile.height} {profile.height ? 'cm' : null}</span>
                </div>
              </td>
              <td>
                <div className="info-item">
                  <span className="sub-text">Weight</span>
                  <span className="primary-text">{profile.weight} {profile.weight ? 'kg' : null}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="info-item">
                  <span className="sub-text">Country</span>
                  <span className="primary-text">{profile.country}</span>
                </div>
              </td>
              <td>
                <div className="info-item">
                  <span className="sub-text">City</span>
                  <span className="primary-text">{profile.city}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="info-item">
                  <span className="sub-text">ZIP Code</span>
                  <span className="primary-text">{profile.zip_code}</span>
                </div>
              </td>
              <td>
                <div className="info-item">
                  <span className="sub-text">Address</span>
                  <span className="primary-text">{profile.address}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="info-item">
                  <span className="sub-text">Phone</span>
                  <span className="primary-text">{profile.phone}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="info-item">
                  <span className="sub-text">Email</span>
                  <a href={profile.email}>{profile.email}</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div className="flex-column grow-2">
        <div className="flex grow-1">

          <div className="biometric-info grow-1 divider-right patient-info-section p-l-30">
            <h5>Lyso-Gb1</h5>
            <span className="sub-text">
              Updated {moment(profile.biomarker_data.date).format('DD MMM YYYY')}
            </span>
            <div className="m-t-30">
              <span className="biomarker-value weight-500">
                <BiomarkerValue
                  value={profile.biomarker_data.value}
                  prevValue={profile.biomarker_data.previous_value}
                  biomarkerDate={profile.biomarker_data.date}
                  treatmentDate={profile.biomarker_data.treatment_date}
                >
                  {profile.biomarker_data.value}
                </BiomarkerValue>
              </span>
              <span className="biomarker-value">ng/ml</span>
            </div>
            <div className="m-t-30">
              <Button basic>All Biomarkers</Button>
            </div>
          </div>

          <div className="qol-info patient-info-section p-l-30">
            <h5>QoL Metrics</h5>
            <span className="sub-text">Updated Today</span>
            <div className="m-t-30">
              <div className="qol-value">
                <h5>
                  <img src="/heart.svg" alt="" />
                  72
                </h5>
                <span className="biomarker-red">SF-36</span>
              </div>
              <div className="qol-value">
                <h5>
                  <img src="/fire.svg" alt="" />
                  7/6
                </h5>
                <span className="biomarker-yellow">Pain</span>
              </div>
              <div className="qol-value">
                <h5>
                  <img src="/flower.svg" alt="" />
                  35
                </h5>
                <span className="biomarker-blue">Depression</span>
              </div>
            </div>
            <div className="m-t-30">
              <Button basic>All QoL Dynamics</Button>
            </div>
          </div>

        </div>
        <div className="current-treatment divider-top patient-info-section p-l-30">
          <div className="current-treatment-header">
            <div>
              <h5>Current Treatment</h5>
              <span className="color-label color-label-black font-16 m-t-15">
                {currentTreatment.drug}
              </span>
            </div>
            <div>
              <Button basic>All Treatment Courses</Button>
            </div>
          </div>

          <table className="treatment-table m-t-30">
            <tbody>
              <tr>
                <td>
                  <div className="info-item">
                    <span className="sub-text">Dosage</span>
                    <span className="primary-text">{currentTreatment.dosage}</span>
                  </div>
                </td>
                <td>
                  <div className="info-item">
                    <span className="sub-text">Frequency</span>
                    <span className="primary-text">
                      {currentTreatment.frequency}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="info-item">
                    <span className="sub-text">Next Infusion</span>
                    <span className="primary-text">
                      ???
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="info-item">
                    <span className="sub-text">Start Date</span>
                    <span className="primary-text">
                      {moment(currentTreatment.start_date).format('DD MMM YYYY')}
                    </span>
                  </div>
                </td>
                <td colSpan={2}>
                  <div className="info-item">
                    <span className="sub-text">Duration</span>
                    <span className="primary-text">
                      {moment(currentTreatment.end_date || Date.now()).diff(moment(currentTreatment.start_date), 'month')}

                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </section>

    <section className="m-t-50">
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

    <section className="m-t-50">
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
      <Pagination totalPages={treatmentsTotalPages} currentPage={treatmentsCurrentPage} />
    </section>

    <section className="m-t-50 ">
      <h4>Quality of Life</h4>
      <div className="section-border flex m-t-30">
        <div className="chart-box divider-right">

          <div>
            <div className="qol-chart-header">
              <div className="qol-chart-name">
                <img className="icon" src="/heart.svg" alt="heart" />
                <span>SF-36</span>
              </div>
              <span className="qol-chart-max-value">max 100</span>
            </div>
            <QoLBarChart color={RED} data={qol} />
          </div>

          <div>
            <div className="qol-chart-header">
              <div className="qol-chart-name">
                <img className="icon" src="/fire.svg" alt="fire" />
                <span>Pain</span>
              </div>
              <span className="qol-chart-max-value">max 10</span>
            </div>
            <QoLBarChart color={YELLOW} data={qol} />
          </div>

          <div>
            <div className="qol-chart-header">
              <div className="qol-chart-name">
                <img className="icon" src="/flower.svg" alt="flower" />
                <span>Depression</span>
              </div>
              <span className="qol-chart-max-value">max 63</span>
            </div>
            <QoLBarChart color={BLUE} data={qol} showTicks />
          </div>

        </div>
        <div />
      </div>
    </section>
  </div>
);

export default PatientProfileView;
