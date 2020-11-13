import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Menubar from './Menubar';
import Home from './../Home';
import { Grid, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { CcdashContext } from '../../services/context';
import Contacts from './../Contacts';
import Trends from './../Trends/Trends';

const Dashboard = ({ visible }) => {
  const { updateDashboard, dashboard } = useContext(CcdashContext);

  const iconStyle = {
    marginLeft: 10,
  };

  return (
    <Grid columns={1}>
      <Grid.Column>
        {/* <Menubar onToggleMenu={() => toggleMenu()} /> */}
        <Sidebar.Pushable as={Segment} style={{ height: '100vh' }}>
          <Sidebar
            as={Menu}
            animation='slide along'
            inverted
            vertical
            visible={visible}
            width='wide'>
            <Menu.Item as={Link} to='/' onClick={() => updateDashboard('Home')}>
              <div>
                <Icon name='home'></Icon>
                <span style={iconStyle}>Home</span>
              </div>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to='/contacts'
              onClick={() => updateDashboard('Contacts')}>
              <div>
                <Icon name='audible'></Icon>
                <span style={iconStyle}>Contacts Evolution</span>
              </div>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to='/trends'
              onClick={() => updateDashboard('Trends')}>
              <div>
                <Icon name='area chart'></Icon>
                <span style={iconStyle}>Traffic Trends</span>
              </div>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              {dashboard === 'Contacts' ? (
                <Contacts />
              ) : dashboard === 'Trends' ? (
                <Trends />
              ) : (
                <Home />
              )}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default Dashboard;
