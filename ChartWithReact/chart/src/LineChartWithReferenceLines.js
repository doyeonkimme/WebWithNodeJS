import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    co2: 2400,
  },
  {
    name: 'Page B',
    co2: 1398,
  },
  {
    name: 'Page C',
    co2: 6800,
  },
  {
    name: 'Page D',
    co2: 3908,
  },
  {
    name: 'Page E',
    co2: 700,
  },
  {
    name: 'Page F',
    co2: 3800,
  },
  {
    name: 'Page G',
    co2: 4300,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-width-reference-line-edjv0';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine x="Page C" stroke="red" label="Max CO2 PAGE" />
          <ReferenceLine y={1000} label="Max1" stroke="#FFBB00" />
          <ReferenceLine y={2000} label="Max2" stroke="#FF8224" />
          <ReferenceLine y={5000} label="Max3" stroke="#FF0000" />
          <Line type="monotone" dataKey="co2" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
