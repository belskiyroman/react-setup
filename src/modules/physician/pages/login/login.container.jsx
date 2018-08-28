import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../../actions';
import { HOME_ROUTE } from '../../constants/routes.const';
import LoginView from '../../../../pages/login';
import LoginPopup from './login-popup.view';
import { loginResetErrorAction } from '../../actions/user.actions';

class LoginContainer extends Component {
  state = {
    password: '',
    email: '',
    isModal: false,
    isLoginError: true,
  };

  componentDidMount() {
    this.props.resetLoginError();
  }

  onChange({ name, value }) {
    if (!name) return;
    this.setState({ [name]: value });
    this.props.resetLoginError();
  }

  login() {
    this.togglePopup();
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  togglePopup() {
    this.setState(prevState => ({ isModal: !prevState.isModal }));
  }

  render() {
    const { isModal, isLoginError } = this.state;
    const { isLogin, loginError } = this.props;

    return isLogin
      ? <Redirect to={HOME_ROUTE} />
      : (
        <React.Fragment>
          <LoginView
            loginError={isLoginError && loginError}
            onChange={(e, data) => this.onChange(data)}
            onLogin={() => this.togglePopup()}
          />

          {
            isModal
            && (
              <LoginPopup
                onLogin={() => this.login()}
                onClose={() => this.togglePopup()}
              />
            )
          }
        </React.Fragment>
      );
  }
}

const container = connect(
  state => ({
    user: state.user.profile,
    isLogin: state.user.isLogin,
    loginError: state.user.loginError,
  }),
  dispatch => ({
    login: bindActionCreators(loginAction, dispatch),
    resetLoginError: bindActionCreators(loginResetErrorAction, dispatch),
  }),
);

export default container(LoginContainer);

LoginContainer.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  resetLoginError: PropTypes.func.isRequired,
};
