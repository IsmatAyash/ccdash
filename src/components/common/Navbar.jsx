import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';

// handleItemClick = (e, { name }) => {
//   this.setState({ activeItem: name });
// };

function Navbar({ selectedItem, onItemSelect }) {
  return (
    <Menu icon='labeled' compact size='mini' color='teal' pointing>
      <Menu.Item>
        <Icon name='globe' color='teal' />
      </Menu.Item>
      <Menu.Item
        name='all'
        active={selectedItem === 'all'}
        onClick={() => onItemSelect('all')}>
        <Icon name='recycle' />
        All Channels
      </Menu.Item>

      <Menu.Item
        name='voice'
        active={selectedItem === 'phone'}
        onClick={() => onItemSelect('phone')}>
        <Icon name='file audio' />
        Voice
      </Menu.Item>

      <Menu.Item
        name='email'
        active={selectedItem === 'mail'}
        onClick={() => onItemSelect('mail')}>
        <Icon name='mail' />
        Email
      </Menu.Item>

      <Menu.Item
        name='chat'
        active={selectedItem === 'chat'}
        onClick={() => onItemSelect('chat')}>
        <Icon name='wechat' />
        Chat
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
