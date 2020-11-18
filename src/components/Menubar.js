import React, { useContext } from 'react';
import ContactsBar from './Contacts/ContactsBar';
import { Menu, Icon } from 'semantic-ui-react';
import { CcdashContext } from '../services/context';

const Menubar = ({ onToggleMenu }) => {
  const { channel, updateChannel, dashboard } = useContext(CcdashContext);

  const today = new Date();
  const menuTitle =
    dashboard === 'Contacts'
      ? `${today.toLocaleString('default', {
          month: 'long',
        })} ${today.getFullYear()}`
      : 'Ebanking Wallboard...';

  const handleChannelSelect = name => {
    updateChannel(name);
  };

  return (
    <Menu inverted stackable>
      <Menu.Item onClick={onToggleMenu}>
        <Icon name='bars'></Icon> Menu
      </Menu.Item>
      <Menu.Menu>
        {dashboard === 'Contacts' && (
          <ContactsBar
            onItemSelect={handleChannelSelect}
            selectedItem={channel}
          />
        )}
      </Menu.Menu>
      <Menu.Menu position='right'>
        <div className='ui right aligned item'>
          <div className='ui transparent icon'>
            <Icon
              name={dashboard === 'Contacts' ? 'database' : 'dashboard'}></Icon>
            <span style={{ margin: 5 }}>{menuTitle}</span>
          </div>
        </div>
      </Menu.Menu>
    </Menu>
  );
};

export default Menubar;
