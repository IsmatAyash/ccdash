import React, { useContext } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { CcdashContext } from '../services/context';

const sidebar = [
  { id: 1, path: '/', comp: 'Home', icon: 'home', label: 'Home' },
  {
    id: 2,
    path: '/contacts',
    comp: 'Contacts',
    icon: 'audible',
    label: 'Contacts Evolution',
  },
  {
    id: 3,
    path: '/trends',
    comp: 'Trends',
    icon: 'area chart',
    label: 'Traffic Trends',
  },
];

const SideBar = () => {
  const { updateDashboard, updateVisible, visible } = useContext(CcdashContext);

  const handleClick = menuItem => {
    updateVisible(!visible);
    updateDashboard(menuItem);
  };

  const iconStyle = {
    marginLeft: 10,
  };

  return (
    <>
      <Sidebar
        as={Menu}
        animation='slide along'
        inverted
        vertical
        visible={visible}
        width='wide'>
        {sidebar.map(item => (
          <Menu.Item
            key={item.id}
            as={Link}
            to={item.path}
            onClick={() => handleClick(item.comp)}>
            <div>
              <Icon name={item.icon}></Icon>
              <span style={iconStyle}>{item.label}</span>
            </div>
          </Menu.Item>
        ))}
      </Sidebar>
    </>
  );
};

export default SideBar;
