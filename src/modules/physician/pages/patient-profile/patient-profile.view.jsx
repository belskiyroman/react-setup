import PropTypes from 'prop-types';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import {
  PersonalInfo,
  BiomarkerInfo,
  BiomarkerInfoRequest,
  TreatmentInfo,
  QoLInfo,
  QoLInfoRequest,
  BiomarkerSection,
  QoLSection,
  TreatmentSection,
} from './components';


const PatientProfileView = ({
  profile = {},
  biomarkerPermission,
  biomarker_data_requested_at,
  biomarkers = [],
  treatments = [],
  treatmentPermission,
  qol = [],
  qolPermission,
  qol_data_requested_at,
  currentTreatment = {},
  treatmentsTotalPages = 1,
  treatmentsCurrentPage = 1,
  onTreatmentPageChange,
}) => (
  <div>
    <h4>My patients that are using myLSD application</h4>
    <div className="controls">
      <Link className="come-back" to="/physician/patients">
        <Icon name="arrow left" />
        Back to Patient List
      </Link>
    </div>
    <section className="flex m-t-30">
      <PersonalInfo className="divider-right" {...profile} />
      <div className="flex-column grow-2">
        <div className="flex grow-1">
          <div className="biometric-info grow-1 divider-right patient-info-section p-l-30">
            <h5>Lyso-Gb1</h5>
            {
              biomarkerPermission
                ? <BiomarkerInfo {...(profile.biomarker_data)} />
                : <BiomarkerInfoRequest requestedAt={biomarker_data_requested_at} />
            }
          </div>
          <div className="qol-info patient-info-section p-l-30">
            <h5>QoL Metrics</h5>
            {
              qolPermission
                ? <QoLInfo />
                : <QoLInfoRequest requestedAt={qol_data_requested_at} />
            }
          </div>
        </div>
        {treatmentPermission && currentTreatment && <TreatmentInfo {...currentTreatment} />}
      </div>
    </section>

    { biomarkerPermission && <BiomarkerSection biomarkers={biomarkers} /> }
    { treatmentPermission && (
    <TreatmentSection
      treatments={treatments}
      treatmentsCurrentPage={treatmentsCurrentPage}
      treatmentsTotalPages={treatmentsTotalPages}
      onPageChange={onTreatmentPageChange}
    />
    ) }
    { qolPermission && <QoLSection qol={qol} /> }

  </div>
);

export default PatientProfileView;

PatientProfileView.defaultProps = {
  biomarker_data_requested_at: '',
  biomarkers: [],
  currentTreatment: null,
  qol: [],
  qol_data_requested_at: '',
  treatments: [],
  treatmentsCurrentPage: 1,
  treatmentsTotalPages: 1,
};

PatientProfileView.propTypes = {
  profile: PropTypes.object.isRequired,
  biomarkerPermission: PropTypes.bool.isRequired,
  qolPermission: PropTypes.bool.isRequired,
  treatmentPermission: PropTypes.bool.isRequired,
  biomarker_data_requested_at: PropTypes.string,
  biomarkers: PropTypes.array,
  currentTreatment: PropTypes.object,
  qol: PropTypes.array,
  qol_data_requested_at: PropTypes.string,
  treatments: PropTypes.array,
  treatmentsCurrentPage: PropTypes.number,
  treatmentsTotalPages: PropTypes.number,
  onTreatmentPageChange: PropTypes.func.isRequired,
};
