import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Barchart from './charts/Barchart';
import Traffic from './Traffic';
import './Dashboard.css';

function Dashboard({ monthly, daily }) {
  return (
    <Grid columns={2} divided>
      <Grid.Row stretched>
        <Grid.Column width={11} className='dashboard__segment'>
          <Segment>
            <Barchart data={daily} />
          </Segment>
          <Segment>
            <Traffic data={monthly} mnt={true} />
          </Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          <Segment>
            <Traffic data={daily} mnt={false} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Dashboard;
