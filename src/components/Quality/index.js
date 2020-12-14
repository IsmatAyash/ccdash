import React, { useContext } from 'react';
import { CcdashContext } from '../../services/context';
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import KpiCard from './KpiCard';
import Agents from './Agents';
import QualityChart from './QualityChart';
import OtherStats from './OtherStats';

const Quality = () => {
  const { quality } = useContext(CcdashContext);
  console.log('Quality Grades', quality);
  return (
    <Container fluid>
      <Grid>
        <GridRow color='red' divided stretched columns={4}>
          <GridColumn color='grey' mobile={16} tablet={8} computer={4}>
            <KpiCard />
          </GridColumn>
          <GridColumn color='grey' mobile={16} tablet={8} computer={4}>
            <KpiCard />
          </GridColumn>
          <GridColumn color='grey' mobile={16} tablet={8} computer={4}>
            <KpiCard />
          </GridColumn>
          <GridColumn color='grey' mobile={16} tablet={8} computer={4}>
            <KpiCard />
          </GridColumn>
        </GridRow>
        <GridRow color='green' columns={4}>
          <GridColumn color='grey' mobile={16} tablet={8} computer={4}>
            <KpiCard />
          </GridColumn>
          <GridColumn color='grey' mobile={16} tablet={8} computer={4}>
            <KpiCard />
          </GridColumn>
          <GridColumn color='grey' mobile={16} tablet={8} computer={4}>
            <KpiCard />
          </GridColumn>
          <GridColumn color='grey' mobile={16} tablet={8} computer={4}>
            <KpiCard />
          </GridColumn>
        </GridRow>
        <GridRow color='blue' columns={2}>
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
