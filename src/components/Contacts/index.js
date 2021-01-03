import React, { useContext } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Barchart from './Barchart';
import ContactsTable from './ContactsTable';
import { groupData } from '../../utils/helper';
import { CcdashContext } from '../../services/context';

const Contacts = () => {
  const { contacts } = useContext(CcdashContext);
  const { monthly, daily, channel } = contacts;

  const channels = data => {
    return channel === 'all'
      ? groupData(data)
      : groupData(data.filter(c => c.contactType === channel));
  };

  return (
    <div>
      <Grid columns={2} centered>
        <Grid.Row stretched>
          <Grid.Column width={11}>
            <Segment basic>
              <Barchart data={channels(daily)} />
              <ContactsTable traffic={channels(monthly)} mnt={true} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment basic>
              <ContactsTable traffic={channels(daily)} mnt={false} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Contacts;
