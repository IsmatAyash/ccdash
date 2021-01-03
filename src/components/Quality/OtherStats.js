import React from 'react';
import { Icon, Statistic, Step } from 'semantic-ui-react';

const OtherStats = () => {
  return (
    <div>
      <Step.Group size='small' stackable='tablet' fluid widths={3}>
        <Step>
          <Icon name='chess king' />
          <Statistic style={{ marginRight: 8 }} size='small'>
            <Statistic.Value>76</Statistic.Value>
          </Statistic>
          <Step.Content>
            <Step.Title>Quality</Step.Title>
            <Step.Description>Contact Quality</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name='chess queen' />
          <Statistic style={{ marginRight: 8 }} size='small'>
            <Statistic.Value>80</Statistic.Value>
          </Statistic>
          <Step.Content>
            <Step.Title>ATS</Step.Title>
            <Step.Description>Adherence</Step.Description>
          </Step.Content>
        </Step>

        <Step>
          <Icon name='users' size='tiny' />
          <Statistic style={{ marginRight: 8 }} size='small'>
            <Statistic.Value>98</Statistic.Value>
          </Statistic>
          <Step.Content>
            <Step.Title>EBI</Step.Title>
            <Step.Description>Discipline</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    </div>
  );
};

export default OtherStats;
