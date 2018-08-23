import { combineReducers } from 'redux';

import user from './user.reducer';
import patientList from './patient-list.reducer';
import patientProfile from './patient-profile.reducer';
import patientBiomarkers from './patient-biomarkers.reducer';
import patientTreatments from './patient-treatments.reducer';
import patientQoL from './patient-qol.reducer';

export default combineReducers({
  user,
  patientList,
  patientProfile,
  patientBiomarkers,
  patientTreatments,
  patientQoL,
});
