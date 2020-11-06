import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Label } from 'semantic-ui-react';
import logo from '../images/logo.png';
import './Navbar.css';

function Navbar({ selectedItem, onItemSelect }) {
  const [visible, setVisible] = useState(false);
  const today = new Date();
  const menuItems = [
    { id: 0, name: 'all', icon: 'recycle', label: 'All Channels' },
    { id: 1, name: 'phone', icon: 'phone', label: 'Voice' },
    { id: 2, name: 'mail', icon: 'mail', label: 'Email' },
    { id: 3, name: 'chat', icon: 'wechat', label: 'Chat' },
    { id: 4, name: 'headphones', icon: 'headphones', label: 'Operators' },
  ];
  console.log('visible', visible);

  return (
    <div>
      <Menu
        icon='labeled'
        size='mini'
        color='teal'
        pointing
        attached='top'
        stackable
        className='menu-margin'>
        <Menu.Item>
          <Link to='/' onClick={() => setVisible(!visible)}>
            <img className='menu-logo' src={logo} alt='bobdirect logo' />
          </Link>
        </Menu.Item>
        {menuItems.map(item => (
          <Menu.Item
            key={item.id}
            name={item.name}
            active={selectedItem === item.name}
            onClick={() => onItemSelect(item.name)}>
            <Icon name={item.icon} />
            {item.label}
          </Menu.Item>
        ))}

        <Menu.Menu position='right'>
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
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Navbar;
