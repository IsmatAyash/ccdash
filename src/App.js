import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { groupData } from './utils/helper';
import Contacts from './components/Contacts/Contacts';
import { CcdashContext } from './services/context';
import Trends from './components/Trends/Trends';

function App() {
  const { monthly, daily } = React.useContext(CcdashContext);
  const [selectedChannel, setSelectedChannel] = useState('all');

  const channels = data => {
    return selectedChannel === 'all'
      ? groupData(data)
      : groupData(data.filter(c => c.contactType === selectedChannel));
  };

  const handleChannelSelect = name => {
    setSelectedChannel(name);
  };

  return (
    <>
      {/* <Navbar
        onItemSelect={handleChannelSelect}
        selectedItem={selectedChannel}
      /> */}
      <Route path='/' render={() => <Contacts />}></Route>
      <Route path='/trends' component={Trends} />
    </>
  );
}

export default App;
