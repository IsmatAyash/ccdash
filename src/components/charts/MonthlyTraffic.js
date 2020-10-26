import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// const data = [
//   {
//     name: 'Jan',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Feb',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Mar',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Apr',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'May',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Jun',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Jul',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: 'Aug',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Sep',
//     uv: 1000,
//     pv: 3800,
//     amt: 1181,
//   },
//   {
//     name: 'Oct',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Nov',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Dec',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
// ];

function MonthlyTraffic({ data }) {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' padding={{ left: 0, right: 0 }} />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='pv'
        stroke='#8884d8'
        activeDot={{ r: 8 }}
      />
      <Line
        type='monotone'
        dataKey='uv'
        stroke='#82ca9d'
        label={{ position: 'top' }}
      />
    </LineChart>
  );
}

export default React.memo(MonthlyTraffic);
