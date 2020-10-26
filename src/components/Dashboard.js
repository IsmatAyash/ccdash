import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Barchart from './charts/Barchart';
import Traffic from './Traffic';
import './Dashboard.css';

const Style = {
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',
  borderRadius: '0',
  marginLeft: '10px',
};

function Dashboard({ monthly, daily }) {
  return (
    <div>
      <Grid columns={2}>
        <Grid.Row stretched>
          <Grid.Column width={11} className='dashboard-column'>
            <Segment style={Style}>
              <Barchart data={daily} />
            </Segment>
            <Segment style={Style}>
              <Traffic data={monthly} mnt={true} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5} style={{ paddingRight: '0' }}>
            <Segment style={Style}>
              <Traffic data={daily} mnt={false} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Dashboard;

{
  /* <div>
<Grid>
  <Grid.Column mobile={16} tablet={8} computer={4}>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column mobile={16} tablet={8} computer={4}>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column mobile={16} tablet={8} computer={4}>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column mobile={16} tablet={8} computer={4}>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column mobile={16} tablet={8} computer={4}>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
</Grid>

<Grid>
  <Grid.Column largeScreen={2} widescreen={1}>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column largeScreen={2} widescreen={1}>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column largeScreen={2} widescreen={1}>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
  <Grid.Column largeScreen={2} widescreen={1}>
    <Image src='/images/wireframe/paragraph.png' />
  </Grid.Column>
</Grid>
</div> */
}
