/* eslint-disable react/no-find-dom-node */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell, ReferenceLine,
} from 'recharts';
import { YELLOW, RED, GREEN } from '../../constants/index';
import { biomarkerStatus } from '../../utils/index';

const color = {
  '-1': RED,
  0: YELLOW,
  1: GREEN,
};

class BiomarkersBarChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.CHART_WIDTH = 600;
    this.xLine = React.createRef();
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.xLine.current);

    if (node) {
      const line = node.querySelector('.recharts-reference-line-line');
      if (line) {
        line.setAttribute('x1', 0);
        line.setAttribute('x2', this.CHART_WIDTH);
      }
    }
  }

  render() {
    const { data } = this.props;

    return (
      <BarChart
        barSize={6}
        width={this.CHART_WIDTH}
        height={300}
        data={data}
        margin={{ bottom: 0, right: 30 }}
      >
        <XAxis
          dataKey="key"
          tickLine={false}
          ticks={[]}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          ticks={[100]}
        />
        <CartesianGrid strokeDasharray="1 3" />
        <ReferenceLine y={100} strokeDasharray="1 3" />
        <ReferenceLine y={0} stroke="red" x="0" x1="1" ref={this.xLine} />
        <Bar dataKey="value" label={{ position: 'top' }}>
          {data.map((item, index) => (
            <Cell fill={color[biomarkerStatus(item)]} key={item.id} />
          ))}
        </Bar>
      </BarChart>
    );
  }
}

BiomarkersBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    key: PropTypes.string,
    value: PropTypes.number,
  })).isRequired,
};

export default BiomarkersBarChart;
