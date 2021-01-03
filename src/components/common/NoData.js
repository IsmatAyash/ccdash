import React from 'react';
import { Message } from 'semantic-ui-react';

const NoData = () => {
  return (
    <>
      <Message warning>
        <Message.Header>There is no data to display!</Message.Header>
        <p>Check the datasource and try again.</p>
      </Message>
    </>
  );
};

export default NoData;
