import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Card, Icon } from 'semantic-ui-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8042'];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = 80 - innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <g>
      <text
        x={x}
        y={y}
        fill='black'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
        fontSize={11}
        fontWeight='bold'>
        {`${(value * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const renderColorfulLegendText = (value, { color }) => (
  <span style={{ color }}>{value}</span>
);

const QualityChart = ({ comparative, period, color, icon }) => {
  return (
    <Card fluid color={color}>
      <Card.Content>
        <Icon
          name={icon}
          size='large'
          color={color}
          style={{ float: 'right' }}
        />
        <Card.Header>Grades {period}</Card.Header>
        <Card.Meta>Quality quarterly grades</Card.Meta>
        <div
          style={{
            width: '100%',
            height: 200,
            justifyContent: 'center',
          }}>
          <ResponsiveContainer height='100%'>
            <PieChart>
              <Pie
                data={comparative}
                outerRadius={80}
                innerRadius={45}
                paddingAngle={5}
                fill='#8884d8'
                dataKey='value'
                labelLine={false}
                label={renderCustomizedLabel}>
                {comparative.map(
                  (entry, index) =>
                    entry.value !== 0 && (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    )
                )}
              </Pie>
              <Legend formatter={renderColorfulLegendText} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card.Content>
    </Card>
  );
};

export default React.memo(QualityChart);
