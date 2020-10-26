import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function CustomizedLabel({ x, y, stroke, value }) {
  return (
    <text
      x={x}
      y={y}
      dy={-4}
      fill={stroke}
      fontSize={10}
      fontWeight='bold'
      textAnchor='middle'>
      {Math.round(value, 2)}%
    </text>
  );
}

function Barchart({ data }) {
  const daily = data.map(d => {
    return {
      name: d.dayMonth,
      sl: ((d.offered - d.aftThreshold) / d.offered) * 100,
      ans: d.answered,
      ofd: d.offered,
    };
  });

  return (
    <div style={{ width: '100%', height: 200, fontSize: 10 }}>
      <ResponsiveContainer>
        <ComposedChart data={daily} barGap='-75%' margin={{ top: 20 }}>
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='name' />
          <YAxis yAxisId='left' />
          <YAxis yAxisId='right' orientation='right' />
          <Tooltip />
          <Legend iconType='circle' iconSize='12' />
          <Bar
            yAxisId='left'
            dataKey='ofd'
            fill='#8884d8'
            // label={{ fill: 'red', fontSize: 14, position: 'insideBottom' }}
          />
          <Bar
            yAxisId='left'
            dataKey='ans'
            fill='#413ea0'
            // label={{ fontSize: 14, position: 'insideBottom' }}
          />
          <Line
            yAxisId='right'
            type='monotone'
            dataKey='sl'
            stroke='#ff7300'
            strokeWidth='2'
            label={<CustomizedLabel />}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default React.memo(Barchart);
