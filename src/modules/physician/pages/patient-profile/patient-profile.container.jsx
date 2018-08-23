import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  getPatientProfileAction,
  getPatientBiomarkersAction,
  getPatientTreatmentsAction,
  getPatientQoLAction,
} from '../../actions';
import PatientsProfileView from './patient-profile.view';

class PatientsProfileContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getPatientProfile(id);
    this.props.getPatientBiomarkers(id);
    this.props.getPatientTreatments(id);
    this.props.getPatientQoL(id);
  }

  render() {
    return <PatientsProfileView {...this.props} />;
  }
}

const container = connect(
  (state, props) => ({
    profile: state.patientProfile.isLoaded
      ? state.patientProfile.data
      : state.patientList.data.find(
        item => item.id.toString() === props.match.params.id.toString(),
      ),
    biomarkers: state.patientBiomarkers.data,
    currentTreatment: state.patientTreatments.data.find(item => item.current) || {},
    treatments: state.patientTreatments.data,
    treatmentsTotalPages: state.patientTreatments.totalPage,
    treatmentsCurrentPage: state.patientTreatments.currentPage,
    qol: state.patientQoL.data,
  }),
  dispatch => ({
    getPatientProfile: bindActionCreators(getPatientProfileAction, dispatch),
    getPatientBiomarkers: bindActionCreators(getPatientBiomarkersAction, dispatch),
    getPatientTreatments: bindActionCreators(getPatientTreatmentsAction, dispatch),
    getPatientQoL: bindActionCreators(getPatientQoLAction, dispatch),
  }),
);

export default withRouter(container(PatientsProfileContainer));
