import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Segment, Sidebar } from 'semantic-ui-react';
import { CcdashContext } from './services/context';
import Contacts from './components/Contacts';
import Trends from './components/Trends/Trends';
import Menubar from './components/Menubar';
import Home from './components/Home';
import SideBar from './components/SideBar';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const { visible, updateVisible } = useContext(CcdashContext);

  const toggleMenu = () => {
    updateVisible(!visible);
  };

  return (
    <>
      <Grid columns={1}>
        <Grid.Column>
          <Menubar onToggleMenu={() => toggleMenu()} />
          <Sidebar.Pushable as={Segment} style={{ height: '100vh' }}>
            <SideBar shown={visible} />
            <Sidebar.Pusher dimmed={visible}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/trends' component={Trends} />
              </Switch>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default App;
