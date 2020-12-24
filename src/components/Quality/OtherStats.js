import React from 'react';
import { Icon, Image, Statistic, Step } from 'semantic-ui-react';

const OtherStats = () => {
  return (
    <Step.Group>
      <Step>
        <Icon name='chess king' />
        <Statistic style={{ marginRight: 10 }}>
          <Statistic.Value>76</Statistic.Value>
        </Statistic>
        <Step.Content>
          <Step.Title>Quizes</Step.Title>
          <Step.Description>Weekly basis</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Icon name='chess queen' />
        <Statistic style={{ marginRight: 10 }}>
          <Statistic.Value>76</Statistic.Value>
        </Statistic>
        <Step.Content>
          <Step.Title>ATS</Step.Title>
          <Step.Description>Adherence</Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon name='users' />
        <Statistic style={{ marginRight: 10 }}>
          <Statistic.Value>76</Statistic.Value>
        </Statistic>
        <Step.Content>
          <Step.Title>Discipline</Step.Title>
          <Step.Description>Abidance</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  );
};

export default OtherStats;
