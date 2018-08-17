import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

const Staff = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/staff" render={() => <Redirect to="/staff/patients" />} />
      <Route exact path="/staff/patients" render={() => <h1>Staff Patients List</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Staff;
