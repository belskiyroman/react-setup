import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as SemanticPagination } from 'semantic-ui-react';

const MIN_PAGE_COUNT = 1;

const Pagination = ({ totalPages, currentPage }) => totalPages > MIN_PAGE_COUNT && (
  <SemanticPagination
    secondary
    firstItem={null}
    lastItem={null}
    boundaryRange={null}
    siblingRange={4}
    defaultActivePage={currentPage}
    totalPages={totalPages}
  />
);

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
