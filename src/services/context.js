import React, { useState, useEffect } from 'react';
import { getTraffics, getTraffic, getQualityGrades } from './acdService';

const CcdashContext = React.createContext();

const CcdashProvider = ({ children }) => {
  const [monthly, setMonthly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [channel, setChannel] = useState('all');
  const [year, setYear] = useState(new Date().getFullYear());
  const [dashboard, setDashboard] = useState('Home');
  const [visible, setVisible] = useState(false);
  const [quality, setQuality] = useState([]);
  const [team, setTeam] = useState('Teams');

  const updateChannel = name => {
    setChannel(name);
  };

  const updateDashboard = item => {
    setDashboard(item);
  };

  const updateVisible = () => {
    setVisible(!visible);
  };

  const updateYear = yr => {
    setYear(yr);
  };

  const updateTeam = tm => {
    setTeam(tm);
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

  useEffect(() => {
    async function getQuality() {
      const { data } = await getQualityGrades();
      setQuality(data);
    }
    getQuality();
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
        visible,
        updateVisible,
        quality,
        year,
        updateYear,
        team,
        updateTeam,
      }}>
      {children}
    </CcdashContext.Provider>
  );
};

export { CcdashProvider, CcdashContext };
