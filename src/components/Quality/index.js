import React, { useContext } from 'react';
import { CcdashContext } from '../../services/context';
import { Container, Grid } from 'semantic-ui-react';
import KpiCard from './KpiCard';
import Agents from './Agents';
import QualityChart from './QualityChart';
import OtherStats from './OtherStats';
import { dataCards } from './DataRows';
import {
  gradesByEmp,
  gradesByPeriod,
  groupedByQtrYear,
  transposeGrades,
  comparativeByYear,
} from './helper';
import _ from 'lodash';

const Quality = () => {
  const { contacts } = useContext(CcdashContext);
  const { quality, year, team } = contacts;

  const agentsFiltered =
    team === 'Teams'
      ? gradesByEmp(quality).filter(g => g.year === year)
      : gradesByEmp(quality).filter(
          g => g.teamName === team && g.year === year
        );

  const kpisFiltered =
    team !== 'Teams'
      ? gradesByPeriod(quality).filter(g => g.teamName === team)
      : gradesByPeriod(quality);

  const qtrKpis = groupedByQtrYear(kpisFiltered);
  const currYear = new Date().getFullYear();

  return (
    <Container fluid>
      <Grid style={{ margin: 3 }}>
        {dataCards.map(c => (
          <Grid.Column mobile={16} tablet={8} computer={4} key={c.code}>
            <KpiCard
              title={c.title}
              icon={c.icon}
              color={c.color}
              description={c.description}
              kpis={qtrKpis
                .filter(g => g.year === year)
                .map(g => ({ qtr: g.qtr, grade: g[c.code] }))}
            />
          </Grid.Column>
        ))}
      </Grid>
      <Grid style={{ margin: 3 }} columns={2} stackable>
        <Grid.Column stretched columns={8}>
          <Agents grades={transposeGrades(agentsFiltered)} />
        </Grid.Column>
        <Grid.Column stretched columns={8}>
          <Grid columns={3} stackable centered>
            <Grid.Column stretched width={16}>
              <OtherStats />
            </Grid.Column>
            {[currYear, currYear - 1].map(yr => (
              <Grid.Column key={yr} width={8}>
                <QualityChart
                  comparative={comparativeByYear(qtrKpis, yr)}
                  period={yr}
                  color={yr === currYear ? 'green' : 'red'}
                  icon={yr === currYear ? 'trophy' : 'certificate'}
                />
              </Grid.Column>
            ))}
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Quality;
