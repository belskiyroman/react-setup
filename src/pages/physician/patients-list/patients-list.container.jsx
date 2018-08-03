import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPatientListAction } from '../../../core/actions/index';
import PatientsListView from './patients-list.view';

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
    totalPages: state.physician.totalPages,
    currentPage: state.physician.currentPage,
    patientList: state.physician.patientList,
  }),
  dispatch => ({
    getPatientList: bindActionCreators(getPatientListAction, dispatch),
  }),
);

export default container(PatientsListContainer);