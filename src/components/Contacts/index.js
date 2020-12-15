import React, { useContext } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Barchart from './Barchart';
import ContactsTable from './ContactsTable';
import { groupData } from '../../utils/helper';
import { CcdashContext } from '../../services/context';
import styled from 'styled-components';

const StyledSegment = styled(Segment)`
  box-shadow: none !important;
  border: none !important;
`;

const Contacts = () => {
  const { monthly, daily, channel } = useContext(CcdashContext);

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
            <StyledSegment>
              <Barchart data={channels(daily)} />
            </StyledSegment>
            <StyledSegment>
              <ContactsTable contacts={channels(monthly)} mnt={true} />
            </StyledSegment>
          </Grid.Column>
          <Grid.Column width={5}>
            <StyledSegment>
              <ContactsTable contacts={channels(daily)} mnt={false} />
            </StyledSegment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Contacts;
