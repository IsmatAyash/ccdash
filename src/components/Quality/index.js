import React, { useContext } from 'react';
import { CcdashContext } from '../../services/context';
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import KpiCard from './KpiCard';
import Agents from './Agents';
import QualityChart from './QualityChart';
import OtherStats from './OtherStats';

const row1 = [
  {
    title: 'Customer Care',
    icon: 'heart',
    grade: 90,
    code: 'care',
    color: 'red',
  },
  {
    title: 'Contact Handling',
    icon: 'sign language',
    grade: 89,
    code: 'handling',
    color: 'brown',
  },
  {
    title: 'Product Knowledge',
    icon: 'graduation',
    grade: 89,
    code: 'knowledge',
    color: 'green',
  },
  {
    title: 'Effective Response',
    icon: 'reply all',
    grade: 89,
    code: 'response',
    color: 'blue',
  },
];
const row2 = [
  { title: 'Greetings', icon: 'handshake', grade: 89, code: 'greeting' },
  {
    title: 'Contact Etiquette',
    icon: 'balance scale',
    grade: 89,
    code: 'etiquette',
  },
  { title: 'System Familiarities', icon: 'cogs', grade: 89, code: 'system' },
  { title: 'Sales Skills', icon: 'dollar', grade: 89, code: 'sales' },
];

const Quality = () => {
  const { quality } = useContext(CcdashContext);
  console.log('Quality Grades', quality);
  return (
    <Container fluid>
      <Grid inverted style={{ marginLeft: 10 }}>
        <GridRow columns={4} style={{ marginTop: 10 }}>
          {row1.map(r1 => (
            <GridColumn
              stretched
              key={r1.code}
              mobile={16}
              tablet={8}
              computer={4}>
              <KpiCard
                title={r1.title}
                icon={r1.icon}
                grade={r1.grade}
                code={r1.code}
                color={r1.color}
              />
            </GridColumn>
          ))}
        </GridRow>
        <GridRow stretched columns={4}>
          {row2.map(r2 => (
            <GridColumn key={r2.code} mobile={16} tablet={8} computer={4}>
              <KpiCard
                title={r2.title}
                icon={r2.icon}
                grade={r2.grade}
                code={r2.code}
                color={r2.color}
              />
            </GridColumn>
          ))}
        </GridRow>
        <GridRow columns={2}>
          <GridColumn>
            <Agents />
          </GridColumn>
          <GridColumn textAlign='right'>
            <GridRow>
              <QualityChart />
            </GridRow>
            <GridRow
              style={{ paddingLeft: '8rem' }}
              stretched
              textAlign='right'>
              <OtherStats />
            </GridRow>
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
};

export default Quality;
