import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  PATIENTS_ROUTE,
  PATIENT_PROFILE_ROUTE,
  LOGIN_ROUTE,
} from './constants';
import { connectStore, getFromStore } from '../../utils';
import reducers from './reducers';
import sagas from './sagas';
import LoginPage from './pages/login';
import NotFoundPage from '../../pages/404';
import PatientListPage from './pages/patients-list';
import PatientProfilePage from './pages/patient-profile';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      getFromStore('user.isLogin')
        ? <Component {...props} />
        : <Redirect to={{ pathname: LOGIN_ROUTE, state: { from: props.location } }} />
    )}
  />
);

const Physician = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to={LOGIN_ROUTE} />
      <Route exact path={LOGIN_ROUTE} component={LoginPage} />
      <PrivateRoute exact path={PATIENTS_ROUTE} component={PatientListPage} />
      <PrivateRoute exact path={PATIENT_PROFILE_ROUTE} component={PatientProfilePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default connectStore(reducers, sagas)(Physician);
