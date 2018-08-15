import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell, ReferenceLine,
} from 'recharts';
import { YELLOW, RED, GREEN } from '../../core/constants';
import { biomarkerStatus } from '../../utils';

const color = {
  '-1': RED,
  0: YELLOW,
  1: GREEN,
};

const data = [
  { id: 'May', month: 'May', value: 40 },
  { id: 'July', month: 'July', value: 38 },
  { id: 'Aug', month: 'Aug', value: 94 },
  { id: 'Sept', month: 'Sept', value: 150 },
  { id: 'Oct', month: 'Oct', value: 60 },
  { id: 'Nov', month: 'Nov', value: 90 },
  { id: 'Dec', month: 'Dec', value: 85 },
];

const BiomarkersBarChart = () => (
  <BarChart
    barSize={6}
    width={600}
    height={300}
    data={data}
  >
    <XAxis
      dataKey="month"
      tickLine={false}
      ticks={[]}
      stroke="#B9C3C6"
      stroke-width="1"
    />
    <YAxis
      tickLine={false}
      ticks={[100]}
      axisLine={false}
      stroke-width="1"
    />
    <CartesianGrid strokeDasharray="1 3" />
    <ReferenceLine y={100} stroke="#B9C3C6" strokeDasharray="1 3" />
    <Bar dataKey="value" fill="#8884d8" label={{ position: 'top' }}>
      {data.map((item, index) => (
        <Cell key={item.id} fill={color[biomarkerStatus(item)]} />
      ))}
    </Bar>
  </BarChart>
);

export default BiomarkersBarChart;
