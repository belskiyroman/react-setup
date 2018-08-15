import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getPatientProfileAction,
  getPatientBiomarkersAction,
  getPatientTreatmentsAction,
  getPatientQoLAction,
} from '../../../core/actions';
import PatientsProfileView from './patient-profile.view';
import { BasePage } from '../../../utils';

class PatientsProfileContainer extends Component {
  componentDidMount() {
    this.props.getPatientProfile();
    this.props.getPatientBiomarkers();
    this.props.getPatientTreatments();
    this.props.getPatientQoL();
  }

  render() {
    return <PatientsProfileView {...this.props} />;
  }
}

const container = connect(
  state => ({
    profile: state.physician.patientProfile.data,
    biomarkers: state.physician.patientBiomarkers.data,
    treatments: state.physician.patientTreatments.data,
    treatmentsTotalPages: state.physician.patientTreatments.meta.pagination.total,
    treatmentsCurrentPage: state.physician.patientTreatments.meta.pagination.current,
    qol: state.physician.patientQoL.data,
  }),
  dispatch => ({
    getPatientProfile: bindActionCreators(getPatientProfileAction, dispatch),
    getPatientBiomarkers: bindActionCreators(getPatientBiomarkersAction, dispatch),
    getPatientTreatments: bindActionCreators(getPatientTreatmentsAction, dispatch),
    getPatientQoL: bindActionCreators(getPatientQoLAction, dispatch),
  }),
);

export default BasePage(container(PatientsProfileContainer));
