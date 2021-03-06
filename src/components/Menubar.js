import React, { useContext } from 'react';
import ContactsBar from './Contacts/ContactsBar';
import { Menu, Icon } from 'semantic-ui-react';
import { CcdashContext } from '../services/context';
import QualityBar from './Quality/QualityBar';

const Menubar = ({ onToggleMenu }) => {
  const { contacts, updYear, updTeam, updChannel } = useContext(CcdashContext);
  const { channel, dashboard, team, year } = contacts;

  const today = new Date();
  const years = [today.getFullYear(), today.getFullYear() - 1];
  const menuTitle =
    dashboard === 'Contacts'
      ? `${today.toLocaleString('default', {
          month: 'long',
        })} ${today.getFullYear()}`
      : 'Ebanking Wallboard...';

  const handleChannelSelect = name => {
    updChannel(name);
  };

  const handleTeamSelect = tm => {
    updTeam(tm);
  };

  const handleYearSelect = yr => {
    updYear(yr);
  };

  return (
    <Menu stackable attached='top' borderless inverted compact>
      <Menu.Item onClick={onToggleMenu}>
        <div className='ui transparent icon'>
          <Icon name='bars'></Icon> Menu
        </div>
      </Menu.Item>
      <Menu.Menu>
        {dashboard === 'Contacts' && (
          <ContactsBar
            onItemSelect={handleChannelSelect}
            selectedItem={channel}
          />
        )}
        {dashboard === 'Quality' && (
          <QualityBar onTeamSelect={handleTeamSelect} selectedTeam={team} />
        )}
      </Menu.Menu>
      <Menu.Menu position='right'>
        {dashboard === 'Quality' ? (
          <>
            <div className='ui right aligned item'>
              <div className='ui transparent icon'>
                <Icon name='hand point right' />
              </div>
            </div>
            {years.map(yr => (
              <Menu.Item
                key={yr}
                name={yr.toString()}
                color='teal'
                active={yr === year}
                onClick={() => handleYearSelect(yr)}>
                {yr}
              </Menu.Item>
            ))}
          </>
        ) : (
          <div className='ui right aligned item'>
            <div className='ui transparent icon'>
              <Icon
                name={
                  dashboard === 'Contacts' ? 'database' : 'dashboard'
                }></Icon>
              <span style={{ margin: 5 }}>{menuTitle}</span>
            </div>
          </div>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Menubar;
