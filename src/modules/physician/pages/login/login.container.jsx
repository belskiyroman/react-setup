import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../../modules/physician/actions/index';
import LoginView from './login.view';

class LoginContainer extends Component {
  state = {
    password: '',
    email: '',
  };

  handleChange({ name, value }) {
    if (!name) return;
    this.setState({ [name]: value });
  }

  login() {
    this.props.login(this.state);
  }

  render() {
    return this.props.isLogin
      ? <Redirect to="/physician/patients" />
      : (
        <LoginView
          {...this.props}
          login={() => this.login()}
          handleChange={(e, data) => this.handleChange(data)}
        />
      );
  }
}

const container = connect(
  state => ({
    user: state.user.profile,
    isLogin: state.user.isLogin,
  }),
  dispatch => ({
    login: bindActionCreators(loginAction, dispatch),
  }),
);

export default container(LoginContainer);
