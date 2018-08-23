import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { connectStore } from '../../../utils';
import { LoginContainer } from '../../../pages/physician/login';
import { PatientListContainer } from '../../../pages/physician/patients-list';
import { PatientProfileContainer } from '../../../pages/physician/patient-profile';


const Physician = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/physician/login" />
      <Route exact path="/physician/login" component={LoginContainer} />
      <Route exact path="/physician/patients" component={PatientListContainer} />
      <Route exact path="/physician/patients/:id" component={PatientProfileContainer} />
    </Switch>
  </BrowserRouter>
);

export default connectStore(Physician);
