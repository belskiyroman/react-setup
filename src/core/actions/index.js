import {
  loginAction,
  loginSuccessAction,
  loginErrorAction,

  logoutAction,
  logoutSuccessAction,
  logoutErrorAction,
} from './user.actions';
import {
  getPatientListAction,
  putPatientListAction,
  errorPatientListAction,

  getPatientProfileAction,
  putPatientProfileAction,
  errorPatientProfileAction,

  getPatientBiomarkersAction,
  putPatientBiomarkersAction,
  errorPatientBiomarkersAction,

  getPatientTreatmentsAction,
  putPatientTreatmentsAction,
  errorPatientTreatmentsAction,

  getPatientQoLAction,
  putPatientQoLAction,
  errorPatientQoLAction,
} from './phisician.actions';

export {
  /* user.actions */
  loginAction,
  loginSuccessAction,
  loginErrorAction,

  logoutAction,
  logoutSuccessAction,
  logoutErrorAction,

  /* phisician.actions */
  getPatientListAction,
  putPatientListAction,
  errorPatientListAction,

  getPatientProfileAction,
  putPatientProfileAction,
  errorPatientProfileAction,

  getPatientBiomarkersAction,
  putPatientBiomarkersAction,
  errorPatientBiomarkersAction,

  getPatientTreatmentsAction,
  putPatientTreatmentsAction,
  errorPatientTreatmentsAction,

  getPatientQoLAction,
  putPatientQoLAction,
  errorPatientQoLAction,
};
