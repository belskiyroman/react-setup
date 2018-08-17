import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
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
    const { id } = this.props.match.params;

    this.props.getPatientProfile(id);
    this.props.getPatientBiomarkers(id);
    this.props.getPatientTreatments(id);
    this.props.getPatientQoL(id);
  }

  render() {
    console.log(this.props);
    return <PatientsProfileView {...this.props} />;
  }
}

const container = connect(
  (state, props) => {
    console.log('props: ', props);
    return ({
      profile: state.physician.patientProfile.isLoaded
        ? state.physician.patientProfile.data
        : state.physician.patientList.data.find(
          item => item.id.toString() === props.match.params.id.toString(),
        ),
      biomarkers: state.physician.patientBiomarkers.data,
      treatments: state.physician.patientTreatments.data,
      treatmentsTotalPages: state.physician.patientTreatments.meta.pagination.total,
      treatmentsCurrentPage: state.physician.patientTreatments.meta.pagination.current,
      qol: state.physician.patientQoL.data,
    });
  },
  dispatch => ({
    getPatientProfile: bindActionCreators(getPatientProfileAction, dispatch),
    getPatientBiomarkers: bindActionCreators(getPatientBiomarkersAction, dispatch),
    getPatientTreatments: bindActionCreators(getPatientTreatmentsAction, dispatch),
    getPatientQoL: bindActionCreators(getPatientQoLAction, dispatch),
  }),
);

export default BasePage(withRouter(container(PatientsProfileContainer)));
