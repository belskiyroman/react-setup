import React from 'react';
import {
  Select, Checkbox, Label, Icon, Table, Pagination,
} from 'semantic-ui-react';
import {
  BiomarkerInfo, ChangedPhysician, InfoRequest, PatientInfo, QoLInfo,
} from '../common/index';
import { InputBorder } from '../../../components/form/index';
import { TabsRouter } from '../../../components/tabs/index';
import { Status } from '../../../components/table/index';
import { Header } from '../../../components/header/index';

const tabs = [
  { title: 'patients', to: '/' },
];

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

const userData = {
  id: 1,
  email: 'vicente@example.org',
  institution: 'gaucher',
  profile: {
    first_name: 'Vicente',
    last_name: 'Corkery',
    country: 'Falkland Islands (Malvinas)',
    city: 'Lake Lorenberg',
    zip_code: '17162',
    address: '8382 Christoper Parkways',
    phone: '(947) 993-3521 3939',
  },
};


const PatientsListView = ({
  totalPages,
  currentPage,
  patientList = [],
  user = userData,
}) => (
  <div className="container">
    <Header />
    <main className="content">
      <TabsRouter tabs={tabs} />
      <div className="controls">
        <div className="grow">
          <InputBorder
            className="cs controls__item"
            fillClass="test"
            placeholder="Search by name or ID"
            label={<Label><Icon name="search" /></Label>}
            labelPosition="right"
          />
          <Select
            className="material controls__item"
            icon="chevron down"
            placeholder="Sort by..."
            options={tableSortFields}
          />
        </div>
        <Checkbox className="cs" label="Show inactive" />
      </div>
      <div className="table">
        <Table className="cs" selectable>
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
            }) => (
              <Table.Row key={id}>
                <Table.Cell>
                  <span className="primary-text primary-text--big table__text-hover-red">
                    {first_name} {last_name}
                  </span>
                  <br />
                  <Status status={status} />
                  <span className="sub-text">{id}</span>
                </Table.Cell>
                {
                  current_physician_id !== userData.id
                    ? <ChangedPhysician />
                    : (
                      <React.Fragment>
                        {
                          patient_data
                            ? <PatientInfo {...patient_data} />
                            : <InfoRequest text="Request Personal Info" colSpan="3" />
                        }
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
        {
          totalPages > 1
          && (
            <Pagination
              secondary
              firstItem={null}
              lastItem={null}
              boundaryRange={null}
              siblingRange={4}
              defaultActivePage={currentPage}
              totalPages={totalPages}
            />
          )
        }
      </div>
    </main>
  </div>
);

export default PatientsListView;
