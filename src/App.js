import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import { groupData } from './utils/helper';
import Dashboard from './components/Dashboard';
import { CcdashContext } from './services/context';

function App() {
  const { monthly, daily } = React.useContext(CcdashContext);
  const [selectedChannel, setSelectedChannel] = useState('all');

  const channels = data => {
    return selectedChannel === 'all'
      ? groupData(data)
      : data.filter(c => c.contactType === selectedChannel);
  };

  const handleChannelSelect = name => {
    setSelectedChannel(name);
  };

  return (
    <Router>
      <Navbar
        onItemSelect={handleChannelSelect}
        selectedItem={selectedChannel}
      />
      <Dashboard monthly={channels(monthly)} daily={channels(daily)} />
    </Router>
  );
}

export default App;
