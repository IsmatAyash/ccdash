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

const reducer = (state, { type, payload }) => {
  switch (type) {
    case MONTHLY:
      return { ...state, monthly: payload };
    case DAILY:
      return { ...state, daily: payload };
    case QUALITY:
      return { ...state, quality: payload };
    case CHANNEL:
      return { ...state, channel: payload };
    case DASHBOARD:
      return { ...state, dashboard: payload };
    case YEAR:
      return { ...state, year: payload };
    case TEAM:
      return { ...state, team: payload };
    case VISIBLE:
      return { ...state, visible: payload };
    case ERROR:
      return { ...state, error: 'Something went wrong' };
    default:
      return state;
  }
};

export default reducer;
