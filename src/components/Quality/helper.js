import _ from 'lodash';

export const gradesByEmp = quality =>
  _.orderBy(
    quality.map(x => ({
      empName: x.empName,
      teamName: x.teamName,
      year: x.year,
      period: x.period,
      grade: _.mean([
        x.greeting,
        x.handling,
        x.care,
        x.knowledge,
        x.system,
        x.sales,
        x.etiquette,
      ]),
    })),
    ['year', 'empName']
  );

export const gradesByPeriod = quality =>
  _.orderBy(
    quality.map(x => ({
      key: `${x.year}-${x.period}`,
      teamName: x.teamName,
      year: x.year,
      period: x.period,
      greeting: x.greeting,
      etiquette: x.etiquette,
      handling: x.handling,
      knowledge: x.knowledge,
      response: x.response,
      sales: x.sales,
      system: x.system,
      care: x.care,
    })),
    ['year', 'teamName', 'period']
  );

export const groupedByQtrYear = grades =>
  _(grades)
    .groupBy('key')
    .map((q, id) => ({
      qtr: `Q${id.substring(5)}`,
      year: Number(id.substring(0, 4)),
      greeting: _.meanBy(q, 'greeting'),
      etiquette: _.meanBy(q, 'etiquette'),
      handling: _.meanBy(q, 'handling'),
      knowledge: _.meanBy(q, 'knowledge'),
      response: _.meanBy(q, 'response'),
      system: _.meanBy(q, 'system'),
      care: _.meanBy(q, 'care'),
      sales: _.meanBy(q, 'sales'),
    }))
    .value();

export const transposeGrades = result => {
  let marks = [];
  let curr = result[0]?.empName;
  let tra = [{}];
  let counter = 0;
  let obj = {
    id: 0,
    name: '',
    teamName: '',
    Q1: 0,
    Q2: 0,
    Q3: 0,
    Q4: 0,
    year: 0,
    final: 0,
  };
  let obj1 = { ...obj };
  for (let i = 0; i < result.length; i++) {
    if (result[i].empName === curr) {
      switch (result[i].period) {
        case 2:
          obj1.Q2 = result[i].grade * 100;
          break;
        case 3:
          obj1.Q3 = result[i].grade * 100;
          break;
        case 4:
          obj1.Q4 = result[i].grade * 100;
          break;
        default:
          obj1.Q1 = result[i].grade * 100;
          break;
      }
    } else {
      obj1.id = counter++;
      obj1.name = result[i].empName || obj1.name;
      obj1.year = result[i].year || obj1.year;
      obj1.teamName = result[i].teamName || obj1.teamName;
      marks = [obj1.Q1, obj1.Q2, obj1.Q3, obj1.Q4].filter(g => g !== 0);
      obj1.final = _.mean(marks);
      tra.push(obj1);
      obj1 = { ...obj };
      curr = result[i].empName;
      obj1.name = curr;
    }
  }
  return _.orderBy(_.tail(tra), 'final', 'desc').filter(g => g.final);
};
