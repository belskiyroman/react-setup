import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const BiomarkerInfoRequest = ({ requestedAt }) => (
  <React.Fragment>
    <p className="m-t-30">
      You don&apos;t have access to bio marker dynamics.
      Access is managed directly by Patient.
    </p>
    <div className="m-t-30">
      {
        requestedAt
        && (
          <p>
            Requested {moment(requestedAt).format('DD MMM YYYY')}
          </p>
        )
      }
      <Button>Request again</Button>
    </div>
  </React.Fragment>
);

export default BiomarkerInfoRequest;

BiomarkerInfoRequest.propTypes = {
  requestedAt: PropTypes.string.isRequired,
};
