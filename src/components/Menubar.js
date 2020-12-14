import React, { useContext } from 'react';
import ContactsBar from './Contacts/ContactsBar';
import { Menu, Icon } from 'semantic-ui-react';
import { CcdashContext } from '../services/context';
<<<<<<< HEAD
import QualityBar from './Quality/QualityBar';

const Menubar = ({ onToggleMenu }) => {
  const {
    channel,
    updateChannel,
    dashboard,
    year,
    updateYear,
    team,
    updateTeam,
  } = useContext(CcdashContext);

  const today = new Date();
  const years = [today.getFullYear(), today.getFullYear() - 1];
=======

const Menubar = ({ onToggleMenu }) => {
  const { channel, updateChannel, dashboard } = useContext(CcdashContext);

  const today = new Date();
>>>>>>> a80a9a188539dc04775aece2059637c3c66a1193
  const menuTitle =
    dashboard === 'Contacts'
      ? `${today.toLocaleString('default', {
          month: 'long',
        })} ${today.getFullYear()}`
      : 'Ebanking Wallboard...';

  const handleChannelSelect = name => {
    updateChannel(name);
  };

<<<<<<< HEAD
  const handleTeamSelect = tm => {
    updateTeam(tm);
  };

  const handleYearSelect = yr => {
    updateYear(yr);
  };

  return (
    <Menu inverted stackable attached>
      <Menu.Item onClick={onToggleMenu}>
        <div className='ui transparent icon'>
          <Icon name='bars'></Icon> Menu
        </div>
=======
  return (
    <Menu inverted stackable>
      <Menu.Item onClick={onToggleMenu}>
        <Icon name='bars'></Icon> Menu
>>>>>>> a80a9a188539dc04775aece2059637c3c66a1193
      </Menu.Item>
      <Menu.Menu>
        {dashboard === 'Contacts' && (
          <ContactsBar
            onItemSelect={handleChannelSelect}
            selectedItem={channel}
          />
        )}
<<<<<<< HEAD
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
=======
      </Menu.Menu>
      <Menu.Menu position='right'>
        <div className='ui right aligned item'>
          <div className='ui transparent icon'>
            <Icon
              name={dashboard === 'Contacts' ? 'database' : 'dashboard'}></Icon>
            <span style={{ margin: 5 }}>{menuTitle}</span>
          </div>
        </div>
>>>>>>> a80a9a188539dc04775aece2059637c3c66a1193
      </Menu.Menu>
    </Menu>
  );
};

export default Menubar;
