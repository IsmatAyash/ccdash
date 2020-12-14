import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import './QualityBar.css';

function QualityBar({ selectedTeam, onTeamSelect }) {
  const teams = [
    { id: 0, name: 'Teams', icon: 'group' },
    { id: 1, name: 'A-Gents', icon: 'adn' },
    {
      id: 2,
      name: 'WeBound',
      icon: 'american sign language interpreting',
    },
    {
      id: 3,
      name: 'PionEars',
      icon: 'assistive listening systems',
    },
    { id: 4, name: 'Rony', icon: 'male' },
  ];

  return (
    <div>
      <Menu inverted attached stackable className='menu-margin' size='small'>
        {teams.map(tm => (
          <Menu.Item
            key={tm.id}
            name={tm.name}
            active={selectedTeam === tm.name}
            color='teal'
            onClick={() => onTeamSelect(tm.name)}>
            <Icon name={tm.icon} />
            {tm.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

export default QualityBar;
