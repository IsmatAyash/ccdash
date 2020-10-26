import _ from 'lodash';

const initialValues = dm => ({
  dayMonth: dm,
  offered: 0,
  answered: 0,
  abandoned: 0,
  serviceLevel: 0,
  aRate: 0,
  aftThreshold: 0,
  count: 0,
});

export function groupData(data) {
  let result = [];
  data.reduce((res, value) => {
    if (!res[value.dayMonth]) {
      res[value.dayMonth] = initialValues(value.dayMonth);
      result.push(res[value.dayMonth]);
    }
    res[value.dayMonth].offered += value.offered;
    res[value.dayMonth].answered += value.answered;
    res[value.dayMonth].abandoned += value.abandoned;
    res[value.dayMonth].serviceLevel += value.serviceLevel;
    res[value.dayMonth].aRate += value.aRate;
    res[value.dayMonth].aftThreshold += value.aftThreshold;
    res[value.dayMonth].count++;
    res[value.dayMonth].contactType = value.contactType;
    return res;
  }, {});

  return _.orderBy(
    result.map(a => {
      return {
        id: a.dayMonth,
        contactType: 'recycle',
        dayMonth: a.dayMonth,
        offered: a.offered,
        answered: a.answered,
        abandoned: a.abandoned,
        serviceLevel: a.serviceLevel / a.count,
        aRate: a.aRate / a.count,
        aftThreshold: a.aftThreshold,
      };
    }),
    'dayMonth',
    'asc'
  );
}
