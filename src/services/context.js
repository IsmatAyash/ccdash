import React, { useEffect, createContext, useReducer } from 'react';
import { getTraffics, getTraffic, getQualityGrades } from './acdService';
import {
  MONTHLY,
  DAILY,
  QUALITY,
  CHANNEL,
  DASHBOARD,
  YEAR,
  TEAM,
  VISIBLE,
  ERROR,
} from './actionTypes';
import { initialState } from './initialState';
import reducer from './reducer';

const CcdashContext = createContext();

const CcdashProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getTraffics()
      .then(({ data }) => dispatch({ type: MONTHLY, payload: data }))
      .catch(error => dispatch({ type: ERROR }));
  }, []);

  useEffect(
    () =>
      getTraffic(new Date().getMonth() + 1)
        .then(({ data }) => dispatch({ type: DAILY, payload: data }))
        .catch(error => dispatch({ type: ERROR })),
    []
  );

  useEffect(() => {
    getQualityGrades()
      .then(({ data }) => dispatch({ type: QUALITY, payload: data }))
      .catch(error => dispatch({ type: ERROR }));
  }, []);

  const value = {
    contacts,
    updChannel: ch => dispatch({ type: CHANNEL, payload: ch }),
    updDash: dash => dispatch({ type: DASHBOARD, payload: dash }),
    updYear: yr => dispatch({ type: YEAR, payload: yr }),
    updTeam: tm => dispatch({ type: TEAM, payload: tm }),
    updVisible: vz => dispatch({ type: VISIBLE, payload: vz }),
  };

  return (
    <CcdashContext.Provider value={value}>{children}</CcdashContext.Provider>
  );
};

export { CcdashProvider, CcdashContext };
