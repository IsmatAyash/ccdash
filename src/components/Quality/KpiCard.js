import React from 'react';
import { Card, Icon, Statistic, Grid } from 'semantic-ui-react';
import { ResponsiveContainer, AreaChart, Area, XAxis } from 'recharts';
import _ from 'lodash';

const CustomizedLabel = ({ x, y, stroke, value }) => (
  <text x={x} y={y} dy={-4} stroke={stroke} fontSize={10} textAnchor='middle'>
    {Math.round(value * 100, 4)}%
  </text>
);

const CustomizedAxisTick = ({ x, y, stroke, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor='end' fill='#666' fontSize={10}>
      {payload.value}
    </text>
  </g>
);

const KpiCard = ({ title, icon, color, description, kpis }) => {
  const grade = Math.round(_.meanBy(kpis, 'grade') * 100, 2);
  return (
    <Card fluid color={color}>
      <Card.Content>
        <Card.Header>
          <Grid>
            <Grid.Column width={2}>
              <Icon name={icon} color={color} size='large' />
            </Grid.Column>
            <Grid.Column width={11}>{title}</Grid.Column>
            <Grid.Column width={1}>
              <Statistic size='tiny' color={color}>
                <Statistic.Value>{grade.toString()}</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column style={{ marginLeft: 4 }}>
              <Icon name='percent' size='small' color={color} />
            </Grid.Column>
          </Grid>
        </Card.Header>
        <Card.Meta style={{ marginBottom: 5, marginTop: 3 }}>
          {description}
        </Card.Meta>
        <Card.Description>
          <div style={{ width: '100%', height: 70 }}>
            <ResponsiveContainer>
              <AreaChart
                data={kpis}
                margin={{
                  top: 15,
                  right: 15,
                  left: 15,
                  bottom: 0,
                }}>
                <XAxis dataKey='qtr' tick={<CustomizedAxisTick />} />
                <Area
                  type='monotone'
                  dataKey='grade'
                  stroke='#8884d8'
                  fill={color}
                  label={<CustomizedLabel />}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default KpiCard;
