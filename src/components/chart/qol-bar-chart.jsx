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

class QoLBarChart extends React.PureComponent {
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
    const {
      color, showTicks, data = [], onHover = [],
    } = this.props;
    return (
      <BarChart
        barSize={6}
        width={this.CHART_WIDTH}
        height={160}
        data={data}
        margin={{ top: 10, left: 30, right: 30 }}
      >
        <XAxis
          dataKey={showTicks ? 'key' : 'hideTicks'}
          tickLine={false}
          ticks={[]}
        />
        <YAxis
          hide
          axisLine={false}
          tickLine={false}
          ticks={[]}
        />

        <CartesianGrid strokeDasharray="1 3" />
        <ReferenceLine y={0} stroke="red" x="0" x1="1" ref={this.xLine} />

        <Bar
          className="opacity"
          dataKey="value"
          label={{ position: 'top' }}
          onMouseEnter={onHover[0]}
          onMouseLevel={onHover[1]}
        >
          {data.map((item, index) => (
            <Cell fill={color} key={item.id} />
          ))}
        </Bar>
      </BarChart>
    );
  }
}

QoLBarChart.defaultProps = {
  showTicks: false,
};

QoLBarChart.propTypes = {
  showTicks: PropTypes.bool,
  color: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    key: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
};

export default QoLBarChart;
