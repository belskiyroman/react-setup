import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPatientListAction } from '../../actions/index';
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
    user: state.user.profile,
    totalPages: state.patientList.totalPage,
    currentPage: state.patientList.currentPage,
    patientList: state.patientList.data,
  }),
  dispatch => ({
    getPatientList: bindActionCreators(getPatientListAction, dispatch),
  }),
);

export default container(PatientsListContainer);
