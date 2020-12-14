import React from 'react';
import { Icon, Image, Statistic } from 'semantic-ui-react';

const OtherStats = () => {
  return (
    <Statistic.Group widths={4}>
      <Statistic>
        <Statistic.Value>76</Statistic.Value>
        <Statistic.Label>Quizes</Statistic.Label>
      </Statistic>

      {/* <Statistic>
        <Statistic.Value text>
          Three
          <br />
          Thousand
        </Statistic.Value>
        <Statistic.Label>Signups</Statistic.Label>
      </Statistic> */}

      <Statistic>
        <Statistic.Value>
          <Icon name='calendar check' />
          80
        </Statistic.Value>
        <Statistic.Label>ATS</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
          <Image
            src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'
            inline
            circular
          />
          95
        </Statistic.Value>
        <Statistic.Label>Discipline</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
};

export default OtherStats;
