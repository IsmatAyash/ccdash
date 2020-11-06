import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { ContactsTable, Barchart } from '../components/Contacts';
import './Dashboard.css';

const Style = {
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',
  borderRadius: '0',
  marginLeft: '10px',
  marginRight: '2px',
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
              <ContactsTable contacts={monthly} mnt={true} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment style={Style}>
              <ContactsTable contacts={daily} mnt={false} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Dashboard;
