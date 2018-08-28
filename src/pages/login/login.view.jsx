import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { InputMaterial } from '../../components/form';

const LoginView = ({ onLogin, onChange, loginError = false }) => (
  <div className="login-form">
    <h2>Login to account</h2>
    <InputMaterial
      fluid
      error={loginError}
      className="m-t-40"
      name="email"
      placeholder="Email"
      onChange={onChange}
    />
    <InputMaterial
      fluid
      error={loginError}
      message="Check you email and password"
      className="m-t-30"
      name="password"
      placeholder="Password"
      type="password"
      onChange={onChange}
    />
    <div className="m-t-40 align-right">
      <Button className="login-button" color="red" onClick={onLogin}>
        Login
      </Button>
    </div>
    <div className="help-info">
      <h5>Need help?</h5>
      <p className="help-info-padding">Contact our CentoPortal® support team</p>
      <a href="mailto:support@centoportal.com">support@centoportal.com</a>
      <p>+49 (0) 0381 / 80113-417</p>
    </div>
  </div>
);

LoginView.defaultProps = {
  loginError: false,
};

LoginView.propTypes = {
  loginError: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginView;
