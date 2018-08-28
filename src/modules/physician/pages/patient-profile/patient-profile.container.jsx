import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  getPatientProfileAction,
  getPatientBiomarkersAction,
  getPatientTreatmentsAction,
  getPatientQoLAction,
  putTreatmentsRequestFiltersAction,
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

  onTreatmentPageChange(currentPage) {
    this.props.setTreatmentsFilters({ currentPage });
  }

  render() {
    return (
      <PatientsProfileView
        {...this.props}
        onTreatmentPageChange={(...args) => this.onTreatmentPageChange(...args)}
      />
    );
  }
}

const getPatientProfile = (state, props) => (Object.keys(state.patientProfile.data).length
  && state.patientProfile.data.id.toString() === props.match.params.id.toString()
  ? state.patientProfile.data
  : state.patientList.data.find(
    item => item.id.toString() === props.match.params.id.toString(),
  ));

const container = connect(
  (state, props) => ({
    profile: getPatientProfile(state, props),
    biomarkerPermission: !!getPatientProfile(state, props).biomarker_data,
    treatmentPermission: !!getPatientProfile(state, props).biomarker_data,
    qolPermission: !!getPatientProfile(state, props).last_qol_data,
    biomarkers: state.patientBiomarkers.data,
    currentTreatment: state.patientTreatments.data.find(item => item.current),
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
    setTreatmentsFilters: bindActionCreators(putTreatmentsRequestFiltersAction, dispatch),
  }),
);

export default withRouter(container(PatientsProfileContainer));

PatientsProfileContainer.propTypes = {
  getPatientBiomarkers: PropTypes.func.isRequired,
  getPatientProfile: PropTypes.func.isRequired,
  getPatientQoL: PropTypes.func.isRequired,
  getPatientTreatments: PropTypes.func.isRequired,
  setTreatmentsFilters: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
