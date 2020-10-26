import React from 'react';
import { Message } from 'semantic-ui-react';

const Msgtouser = () => (
  <Message warning>
    <Message.Header>An unexpected error occured</Message.Header>
    <p>Check messages at the server level</p>
  </Message>
);

export default Msgtouser;
