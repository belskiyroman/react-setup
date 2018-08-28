import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const TreatmentInfo = ({
  drug = '',
  dosage = '',
  frequency = '',
  start_date = '',
  end_date,
}) => (
  <div className="current-treatment divider-top patient-info-section p-l-30">
    <div className="current-treatment-header">
      <div>
        <h5>Current Treatment</h5>
        <span className="color-label color-label-black font-16 m-t-15">
          {drug}
        </span>
      </div>
      <div>
        <a href="#link-for-treatments">
          <Button basic>All Treatment Courses</Button>
        </a>
      </div>
    </div>

    <table className="treatment-table m-t-30">
      <tbody>
        <tr>
          <td>
            <div className="info-item">
              <span className="sub-text">Dosage</span>
              <span className="primary-text">{dosage}</span>
            </div>
          </td>
          <td>
            <div className="info-item">
              <span className="sub-text">Frequency</span>
              <span className="primary-text">
                {frequency}
              </span>
            </div>
          </td>
          <td>
            <div className="info-item">
              <span className="sub-text">Next Infusion</span>
              <span className="primary-text">
                        ???
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="info-item">
              <span className="sub-text">Start Date</span>
              <span className="primary-text">
                {moment(start_date).format('DD MMM YYYY')}
              </span>
            </div>
          </td>
          <td colSpan={2}>
            <div className="info-item">
              <span className="sub-text">Duration</span>
              <span className="primary-text">
                {moment(end_date || Date.now()).diff(moment(start_date), 'month')}

              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TreatmentInfo;

TreatmentInfo.defaultProps = {
  end_date: Date.now(),
};

TreatmentInfo.propTypes = {
  dosage: PropTypes.string.isRequired,
  drug: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string,
};
