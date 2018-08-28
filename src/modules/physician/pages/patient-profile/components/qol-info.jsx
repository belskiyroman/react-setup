import React from 'react';
import { Button } from 'semantic-ui-react';

const QoLInfo = () => (
  <React.Fragment>
    <span className="sub-text">Updated Today</span>
    <div className="m-t-30">
      <div className="qol-value">
        <h5>
          <img src="/heart.svg" alt="" />
          72
        </h5>
        <span className="biomarker-red">SF-36</span>
      </div>
      <div className="qol-value">
        <h5>
          <img src="/fire.svg" alt="" />
          7/6
        </h5>
        <span className="biomarker-yellow">Pain</span>
      </div>
      <div className="qol-value">
        <h5>
          <img src="/flower.svg" alt="" />
          35
        </h5>
        <span className="biomarker-blue">Depression</span>
      </div>
    </div>
    <div className="m-t-30">
      <a href="#link-for-qol">
        <Button basic>All QoL Dynamics</Button>
      </a>
    </div>
  </React.Fragment>
);

export default QoLInfo;
