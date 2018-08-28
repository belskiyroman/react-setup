import PropTypes from 'prop-types';
import React from 'react';
import { YELLOW, RED, BLUE } from '../../../../../constants';
import { QoLBarChart } from '../../../../../components/chart';

const QoLSection = ({ qol }) => (
  <section id="link-for-qol" className="m-t-50 ">
    <h4>Quality of Life</h4>
    <div className="section-border flex m-t-30">
      <div className="chart-box divider-right">

        <div>
          <div className="qol-chart-header">
            <div className="qol-chart-name">
              <img className="icon" src="/heart.svg" alt="heart" />
              <span>SF-36</span>
            </div>
            <span className="qol-chart-max-value">max 100</span>
          </div>
          <QoLBarChart color={RED} data={qol} />
        </div>

        <div>
          <div className="qol-chart-header">
            <div className="qol-chart-name">
              <img className="icon" src="/fire.svg" alt="fire" />
              <span>Pain</span>
            </div>
            <span className="qol-chart-max-value">max 10</span>
          </div>
          <QoLBarChart color={YELLOW} data={qol} />
        </div>

        <div>
          <div className="qol-chart-header">
            <div className="qol-chart-name">
              <img className="icon" src="/flower.svg" alt="flower" />
              <span>Depression</span>
            </div>
            <span className="qol-chart-max-value">max 63</span>
          </div>
          <QoLBarChart color={BLUE} data={qol} showTicks />
        </div>

      </div>
      <div />
    </div>
  </section>
);

export default QoLSection;

QoLSection.propTypes = {
  qol: PropTypes.array.isRequired,
};
