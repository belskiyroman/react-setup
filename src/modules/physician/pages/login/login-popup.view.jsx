import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'semantic-ui-react';

const LoginPopup = ({ onLogin, onClose }) => (
  <React.Fragment>
    <div className="modal-bg" />
    <div className="login-modal">
      <div className="login-modal-head">
        <h5>Where do you want to log in?</h5>
        <Button
          basic
          color="red"
          className="close-button"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
      <div className="target m-t-40">
        <button className="target-logo" type="button">
          <img src="/centoportal-logo.png" alt="centoportal-logo" />
        </button>
        <div className="target-text">
          CentoPortal to request a genetic,
          biochemical or biomarker analysis.
        </div>
      </div>
      <div className="target target-margin">
        <button className="target-logo" onClick={onLogin} type="button">
          <img src="/mylsd-logo.png" alt="mylsd-logo" />
        </button>
        <div className="target-text">
          MyLSD to track your patients well
          being and reaction to treatment on a regular basis.
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default LoginPopup;

LoginPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};
