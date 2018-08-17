import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { PatientListContainer } from '../../pages/physician/patients-list';
import { PatientProfileContainer } from '../../pages/physician/patient-profile';

const Physician = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/physician" render={() => <Redirect to="/physician/patients" />} /> */}
      <Redirect exact from="/physician" to="/physician/patients" />
      <Route exact path="/physician/patients" component={PatientListContainer} />
      <Route exact path="/physician/patients/:id" component={PatientProfileContainer} />
    </Switch>
  </BrowserRouter>
);

export default Physician;
