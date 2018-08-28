import PropTypes from 'prop-types';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Label, Icon, Table, Checkbox,
} from 'semantic-ui-react';
import { routeTemplate } from '../../../../utils';
import { PATIENT_PROFILE_ROUTE } from '../../constants';
import {
  BiomarkerInfo, NotMinePatient, InfoRequest, PatientInfo,
} from './components/index';
import { Pagination } from '../../../../components/pagination';
import { InputBorder, SelectMaterial } from '../../../../components/form';
import { Status, QoLDate } from '../../../../components/table';

const tableSortFields = [
  {
    text: 'Default',
    value: '',
  },
  {
    text: 'ID',
    value: 'id',
  },
  {
    text: 'Name',
    value: 'full_name',
  },
  {
    text: 'Gender',
    value: 'gender',
  },
  {
    text: 'Date of Birth',
    value: 'date_of_birth',
  },
  {
    text: 'Country',
    value: 'country',
  },
  // {
  //   text: 'Lyso-Gb1',
  //   value: '',
  // },
  // {
  //   text: 'Last sest',
  //   value: '',
  // },
  // {
  //   text: 'QoL Updates',
  //   value: '',
  // },
];

const defaultSortBy = (sortBy) => {
  const found = tableSortFields.find(item => item.value === sortBy);
  return found ? found.value : tableSortFields[0].value;
};

const PatientsListView = ({
  inactive,
  sortBy,
  search,
  totalPages = 1,
  currentPage = 1,
  patientList = [],
  user = {},
  onSort,
  onSearch,
  onPageChange,
  onToggleInactive,
  onBiomarkersPermission,
  onQoLPermission,
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
          onChange={(e, data) => onSearch(data.value)}
          defaultValue={search}
        />
        <SelectMaterial
          className="controls__item"
          placeholder="Sort by"
          options={tableSortFields}
          onChange={(e, data) => onSort(data.value)}
          defaultValue={defaultSortBy(sortBy)}
        />
      </div>
      <Checkbox
        label="Show inactive"
        defaultChecked={inactive}
        onChange={(e, data) => onToggleInactive(data.checked)}
      />
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
            biomarker_data_requested_at,
            qol_data_requested_at,
            ...rest
          }) => (
            <Table.Row key={id}>
              <Table.Cell>
                {
                  current_physician_id !== user.id
                    ? (
                      <span className="primary-text primary-text--big text-hover-red">
                        {first_name} {last_name}
                      </span>
                    )
                    : (
                      <Link
                        to={routeTemplate(PATIENT_PROFILE_ROUTE, { id })}
                        className="primary-text primary-text--big text-hover-red"
                      >
                        {first_name} {last_name}
                      </Link>
                    )
                }
                <br />
                <Status status={status} />
                <span className="sub-text">{id}</span>
              </Table.Cell>
              {
                current_physician_id !== user.id
                  ? <NotMinePatient />
                  : (
                    <React.Fragment>
                      <PatientInfo {...rest} />
                      {
                        biomarker_data
                          ? <BiomarkerInfo {...biomarker_data} />
                          : (
                            <InfoRequest
                              text="Request Biomarker"
                              colSpan="2"
                              onRequest={() => onBiomarkersPermission(id)}
                              requestedAt={biomarker_data_requested_at}
                            />
                          )
                      }
                      {
                        last_qol_data
                          ? (
                            <Table.Cell className="primary-text text-hover-grey" textAlign="right">
                              {last_qol_data.date && <QoLDate date={last_qol_data.date} />}
                            </Table.Cell>
                          )
                          : (
                            <InfoRequest
                              text="Request QoL"
                              colSpan="2"
                              textAlign="right"
                              onRequest={() => onQoLPermission(id)}
                              requestedAt={qol_data_requested_at}
                            />
                          )
                      }
                    </React.Fragment>
                  )
              }
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(e, data) => onPageChange(data.activePage)}
      />
    </div>
  </div>
);


export default PatientsListView;

PatientsListView.propTypes = {
  onSort: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onToggleInactive: PropTypes.func.isRequired,
  onBiomarkersPermission: PropTypes.func.isRequired,
  onQoLPermission: PropTypes.func.isRequired,
  patientList: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  inactive: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
};
