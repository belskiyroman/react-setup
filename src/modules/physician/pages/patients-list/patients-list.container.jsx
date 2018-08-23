import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPatientListAction } from '../../../core/actions/index';
import PatientsListView from './patients-list.view';
import { BasePage } from '../../../utils';

class PatientsListContainer extends Component {
  componentDidMount() {
    const { getPatientList } = this.props;
    getPatientList();
  }

  render() {
    return <PatientsListView {...this.props} />;
  }
}

const container = connect(
  state => ({
    user: state.user.profile,
    totalPages: state.physician.patientList.totalPage,
    currentPage: state.physician.patientList.currentPage,
    patientList: state.physician.patientList.data,
  }),
  dispatch => ({
    getPatientList: bindActionCreators(getPatientListAction, dispatch),
  }),
);

export default BasePage(container(PatientsListContainer));
