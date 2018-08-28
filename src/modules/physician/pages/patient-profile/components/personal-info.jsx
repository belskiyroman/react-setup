import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

const PersonalInfo = ({
  id,
  first_name = '',
  last_name = '',
  gender = '',
  disease = '',
  date_of_birth = '',
  height = '',
  weight = '',
  country = '',
  city = '',
  zip_code = '',
  address = '',
  phone = '',
  email = '',
  className = '',
}) => (
  <div className={`grow-1 p-t-15 p-b-30 p-r-30 ${className}`}>
    <h1>{first_name} {last_name}</h1>
    <span className="sub-text">ID {id}</span>
    <table className="personal-info">
      <tbody>
        <tr>
          <td>
            <div className="info-item">
              <span className="sub-text">Gender</span>
              <span className="primary-text">{gender}</span>
            </div>
          </td>
          <td>
            <div className="info-item">
              <span className="sub-text">Disease</span>
              <span className="primary-text">{disease}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className="info-item">
              <span className="sub-text">Birth Date</span>
              <span className="primary-text">
                {moment(date_of_birth).format('DD MMM YYYY')}
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="info-item">
              <span className="sub-text">Height</span>
              <span className="primary-text">{height} {height ? 'cm' : null}</span>
            </div>
          </td>
          <td>
            <div className="info-item">
              <span className="sub-text">Weight</span>
              <span className="primary-text">{weight} {weight ? 'kg' : null}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="info-item">
              <span className="sub-text">Country</span>
              <span className="primary-text">{country}</span>
            </div>
          </td>
          <td>
            <div className="info-item">
              <span className="sub-text">City</span>
              <span className="primary-text">{city}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="info-item">
              <span className="sub-text">ZIP Code</span>
              <span className="primary-text">{zip_code}</span>
            </div>
          </td>
          <td>
            <div className="info-item">
              <span className="sub-text">Address</span>
              <span className="primary-text">{address}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className="info-item">
              <span className="sub-text">Phone</span>
              <span className="primary-text">{phone}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className="info-item">
              <span className="sub-text">Email</span>
              <a href={email}>{email}</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PersonalInfo;

PersonalInfo.defaultProps = {
  className: '',
};

PersonalInfo.propTypes = {
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  date_of_birth: PropTypes.string.isRequired,
  disease: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  last_name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  zip_code: PropTypes.string.isRequired,
  className: PropTypes.string,
};
