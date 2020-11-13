import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Contacts from './components/Contacts';
import Trends from './components/Trends/Trends';
import Dashboard from './components/Dashboard';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Menubar from './components/Dashboard/Menubar';

function App() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Menubar onToggleMenu={() => toggleMenu()} />

      <Switch>
        <Route exact path='/' render={() => <Dashboard visible={visible} />} />
        <Route path='/contacts' render={() => <Contacts />}></Route>
        <Route path='/trends' component={Trends} />
      </Switch>
    </>
  );
}

export default App;
