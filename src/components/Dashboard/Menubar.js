import React, { useState, useContext } from 'react';
import Navbar from './../Contacts/Navbar';
import { Menu, Icon } from 'semantic-ui-react';
import { CcdashContext } from '../../services/context';

const Menubar = ({ onToggleMenu }) => {
  const { channel, updateChannel, dashboard } = useContext(CcdashContext);

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
          <Navbar onItemSelect={handleChannelSelect} selectedItem={channel} />
        )}
      </Menu.Menu>
      <Menu.Menu position='right'>
        <div className='ui right aligned item'>
          <div className='ui transparent icon'>
            <Icon name='dashboard'></Icon>
            <span style={{ margin: 5 }}>E-Banking Wallboard...</span>
          </div>
        </div>
      </Menu.Menu>
    </Menu>
  );
};

export default Menubar;
