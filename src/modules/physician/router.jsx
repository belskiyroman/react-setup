import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
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
import { connectStore } from '../../utils';
import reducers from './reducers';
import sagas from './sagas';
import { BasePage } from '../../hoc/base-page';
import { Header } from './components/header';
import LoginPage from './pages/login';
import NotFoundPage from '../../pages/404';
import PatientListPage from './pages/patients-list';
import PatientProfilePage from './pages/patient-profile';


const authContainer = connect(state => ({ isLogin: state.user.isLogin }));

/* eslint-disable-next-line react/prop-types */
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={authContainer(({ isLogin, ...props }) => (
      isLogin
        ? <Component {...props} />
      /* eslint-disable-next-line no-restricted-globals */
        : <Redirect to={{ pathname: LOGIN_ROUTE, state: { from: location.pathname } }} />
    ))}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
    PropTypes.instanceOf(React.PureComponent),
  ]).isRequired,
};

const Physician = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to={LOGIN_ROUTE} />
      <Route exact path={LOGIN_ROUTE} component={LoginPage} />
      <PrivateRoute exact path={PATIENTS_ROUTE} component={PatientListPage} />
      <PrivateRoute exact path={PATIENT_PROFILE_ROUTE} component={PatientProfilePage} />
      <Route component={BasePage(NotFoundPage, Header)} />
    </Switch>
  </BrowserRouter>
);

export default connectStore(reducers, sagas)(Physician);
