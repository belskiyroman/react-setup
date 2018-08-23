import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Checkbox, Label, Icon, Table,
} from 'semantic-ui-react';
import {
  BiomarkerInfo, ChangedPhysician, InfoRequest, PatientInfo, QoLInfo,
} from './components/index';
import { Pagination } from '../../../components/pagination';
import { InputBorder, SelectMaterial } from '../../../components/form';
import { Status } from '../../../components/table';

const tableSortFields = [
  {
    text: 'ID',
    value: 'ID',
  },
  {
    text: 'Name',
    value: 'Name',
  },
  {
    text: 'Gender',
    value: 'Gender',
  },
  {
    text: 'Date of Birth',
    value: 'Date of Birth',
  },
  {
    text: 'Country',
    value: 'Country',
  },
  {
    text: 'Lyso-Gb1',
    value: 'Lyso-Gb1',
  },
  {
    text: 'Last sest',
    value: 'Last sest',
  },
  {
    text: 'QoL Updates',
    value: 'QoL Updates',
  },
];

const PatientsListView = ({
  totalPages = 1,
  currentPage = 1,
  patientList = [],
  user = {},
}) => (
  <div>
    <h4>My patients that are using myLSD application</h4>
    <div className="controls">
      <div className="grow-1">
        <InputBorder
          fillIndicator
          className="controls__item"
          placeholder="Search by name or ID"
          label={<Label><Icon name="search" /></Label>}
          labelPosition="right"
        />
        <SelectMaterial
          className="controls__item"
          placeholder="Sort by"
          options={tableSortFields}
        />
      </div>
      <Checkbox label="Show inactive" />
    </div>
    <div className="m-t-20">
      <Table selectable>
        <Table.Header>
          <Table.Row verticalAlign="bottom">
            <Table.HeaderCell>Name<br />ID</Table.HeaderCell>
            <Table.HeaderCell>Date of Birth<br />Gender</Table.HeaderCell>
            <Table.HeaderCell>Phone<br />Country</Table.HeaderCell>
            <Table.HeaderCell>Disease</Table.HeaderCell>
            <Table.HeaderCell>Lyso-Gb1<br />ng/ml</Table.HeaderCell>
            <Table.HeaderCell>Last test</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">QoL Updates</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {patientList.map(({
            id,
            current_physician_id,
            first_name,
            last_name,
            status,
            patient_data,
            biomarker_data,
            last_qol_data,
            ...rest
          }) => (
            <Table.Row key={id}>
              <Table.Cell>
                <Link
                  to={`/physician/patients/${id}`}
                  className="primary-text primary-text--big text-hover-red"
                >
                  {first_name} {last_name}
                </Link>
                <br />
                <Status status={status} />
                <span className="sub-text">{id}</span>
              </Table.Cell>
              {
                current_physician_id !== user.id
                  ? <ChangedPhysician />
                  : (
                    <React.Fragment>
                      <PatientInfo {...rest} />
                      {
                        biomarker_data
                          ? <BiomarkerInfo {...biomarker_data} />
                          : <InfoRequest text="Request Biomarker" colSpan="2" />
                      }
                      {
                        last_qol_data
                          ? <QoLInfo date={last_qol_data.date} />
                          : <InfoRequest text="Request QoL" colSpan="2" textAlign="right" />
                      }
                    </React.Fragment>
                  )
              }
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  </div>
);

export default PatientsListView;
