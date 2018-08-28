import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAction } from '../../actions';
import HeaderView from './header.view';

const languages = [
  { title: 'EN', flagUrl: '/en.png' },
];

const HeaderContainer = ({ user, isLogin, logout }) => (
  <HeaderView
    isLogin={isLogin}
    firstName={user.first_name}
    lastName={user.last_name}
    institution={user.institution}
    languages={languages}
    onLogout={() => logout()}
  />
);

const container = connect(
  state => ({
    user: state.user.profile,
    isLogin: state.user.isLogin,
  }),
  dispatch => ({
    logout: bindActionCreators(logoutAction, dispatch),
  }),
);

export default container(HeaderContainer);

HeaderContainer.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
