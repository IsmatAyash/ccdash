import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Label, Image } from 'semantic-ui-react';
import './Navbar.css';

function Navbar({ selectedItem, onItemSelect }) {
  const today = new Date();
  const menuItems = [
    { id: 0, name: 'all', icon: 'recycle', label: 'All Channels' },
    { id: 1, name: 'phone', icon: 'phone', label: 'Voice' },
    { id: 2, name: 'mail', icon: 'mail', label: 'Email' },
    { id: 3, name: 'chat', icon: 'wechat', label: 'Chat' },
    { id: 4, name: 'headphones', icon: 'headphones', label: 'Operators' },
  ];

  return (
    <div>
      <Menu
        inverted
        size='tiny'
        attached='top'
        stackable
        className='menu-margin'>
        {menuItems.map(item => (
          <Menu.Item
            key={item.id}
            name={item.name}
            active={selectedItem === item.name}
            color='teal'
            onClick={() => onItemSelect(item.name)}>
            <Icon name={item.icon} />
            {item.label}
          </Menu.Item>
        ))}

        {/* <Menu.Menu position='right'>
          <div className='ui right aligned item'>
            <div className='ui transparent item'>
              <Label color='teal'>
                <Icon name='database' />
                <span className='menu-label'>
                  {today.toLocaleString('default', { month: 'long' })}{' '}
                  {today.getFullYear()}
                </span>
              </Label>
            </div>
          </div>
        </Menu.Menu> */}
      </Menu>
    </div>
  );
}

export default Navbar;
