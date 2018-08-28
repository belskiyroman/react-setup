import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as SemanticPagination } from 'semantic-ui-react';

const MIN_PAGE_COUNT = 1;

const Pagination = ({ totalPages, currentPage, onPageChange }) => totalPages > MIN_PAGE_COUNT && (
  <SemanticPagination
    secondary
    firstItem={null}
    lastItem={null}
    boundaryRange={null}
    siblingRange={4}
    activePage={currentPage}
    totalPages={totalPages}
    onPageChange={onPageChange}
  />
);

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
