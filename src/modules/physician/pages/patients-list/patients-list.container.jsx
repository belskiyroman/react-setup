import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'underscore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryUrl } from '../../../../utils/query-url.uti';
import {
  getPatientListAction,
  putPatientListRequestFiltersAction,
  getPatientBiomarkersPermissionAction,
  getPatientQoLPermissionAction,
} from '../../actions/index';
import PatientsListView from './patients-list.view';

class PatientsListContainer extends Component {
  static DEBOUNCE_TIME = 700;

  constructor(props) {
    super(props);
    this.onSearch = _.debounce(this.setFilters.bind(this), PatientsListContainer.DEBOUNCE_TIME);
  }

  componentDidMount() {
    const {
      sortBy, currentPage, search, getPatientList,
    } = this.props;
    getPatientList();
    queryUrl({ sortBy, search, page: currentPage });
  }

  setFilters(filters) {
    this.props.setRequestFilters(filters);
    queryUrl(filters);
  }

  render() {
    return (
      <PatientsListView
        {...this.props}
        onSearch={this.onSearch}
        onPageChange={currentPage => this.setFilters({ currentPage })}
        onSort={sortBy => this.setFilters({ sortBy })}
        onToggleInactive={inactive => this.setFilters({ inactive })}
      />
    );
  }
}

const container = connect(
  state => ({
    user: state.user.profile,
    inactive: state.patientList.inactive,
    search: state.patientList.search,
    sortBy: state.patientList.sortBy,
    totalPages: state.patientList.totalPage,
    currentPage: state.patientList.currentPage,
    patientList: state.patientList.data,
  }),
  dispatch => ({
    getPatientList: bindActionCreators(getPatientListAction, dispatch),
    setRequestFilters: bindActionCreators(putPatientListRequestFiltersAction, dispatch),
    onBiomarkersPermission: bindActionCreators(getPatientBiomarkersPermissionAction, dispatch),
    onQoLPermission: bindActionCreators(getPatientQoLPermissionAction, dispatch),
  }),
);

PatientsListContainer.propTypes = {
  getPatientList: PropTypes.func.isRequired,
  setRequestFilters: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default withRouter(container(PatientsListContainer));
