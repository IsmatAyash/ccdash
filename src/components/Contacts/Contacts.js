import React, { useState, useContext } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Barchart from './Barchart';
import ContactsTable from './ContactsTable';
import { groupData } from '../../utils/helper';
import Navbar from './../Navbar';
import { CcdashContext } from '../../services/context';
import './Contacts.css';

const Style = {
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',
  borderRadius: '0',
  marginLeft: '10px',
  marginRight: '2px',
};

const Contacts = () => {
  const { monthly, daily } = useContext(CcdashContext);
  const [selectedChannel, setSelectedChannel] = useState('all');

  const channels = data => {
    return selectedChannel === 'all'
      ? groupData(data)
      : groupData(data.filter(c => c.contactType === selectedChannel));
  };

  const handleChannelSelect = name => {
    setSelectedChannel(name);
  };

  return (
    <div>
      <Navbar
        onItemSelect={handleChannelSelect}
        selectedItem={selectedChannel}
      />

      <Grid columns={2}>
        <Grid.Row stretched>
          <Grid.Column width={11} className='dashboard-column'>
            <Segment style={Style}>
              <Barchart data={daily} />
            </Segment>
            <Segment style={Style}>
              <ContactsTable contacts={channels(monthly)} mnt={true} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment style={Style}>
              <ContactsTable contacts={channels(daily)} mnt={false} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Contacts;
