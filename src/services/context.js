import React, { useState, useEffect } from 'react';
import { getTraffics, getTraffic } from './acdService';

const CcdashContext = React.createContext();

const CcdashProvider = ({ children }) => {
  const [monthly, setMonthly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [channel, setChannel] = useState('all');
  const [dashboard, setDashboard] = useState('Home');

  const updateChannel = name => {
    setChannel(name);
  };

  const updateDashboard = item => {
    setDashboard(item);
  };

  useEffect(() => {
    async function getMonthly() {
      const { data } = await getTraffics();
      setMonthly(data);
    }
    getMonthly();
  }, []);

  useEffect(() => {
    async function getDaily() {
      const { data } = await getTraffic(new Date().getMonth() + 1);
      setDaily(data);
    }
    getDaily();
  }, []);

  return (
    <CcdashContext.Provider
      value={{
        monthly,
        daily,
        channel,
        updateChannel,
        dashboard,
        updateDashboard,
      }}>
      {children}
    </CcdashContext.Provider>
  );
};

export { CcdashProvider, CcdashContext };
