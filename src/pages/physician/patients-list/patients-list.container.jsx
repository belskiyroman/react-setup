import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPatientListAction } from '../../../core/actions/index';
import PatientsListView from './patients-list.view';

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

class PatientsListContainer extends Component {
  componentDidMount() {
    const { getPatientList } = this.props;
    getPatientList();
  }

  render() {
    return <PatientsListView {...this.props} user={userData} />;
  }
}

const container = connect(
  state => ({
    totalPages: state.physician.totalPages,
    currentPage: state.physician.currentPage,
    patientList: state.physician.patientList,
  }),
  dispatch => ({
    getPatientList: bindActionCreators(getPatientListAction, dispatch),
  }),
);

export default container(PatientsListContainer);
