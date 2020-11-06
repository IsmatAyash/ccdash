import React from 'react';
import { Icon } from 'semantic-ui-react';

export const Columns = mnt => [
  {
    key: 1,
    path: 'dayMonth',
    label: mnt ? 'Month' : 'Day',
    content: tra => (
      <React.Fragment>
        <Icon size='small' name={tra.contactType} color='blue' />
        {mnt
          ? new Date(2020, tra.dayMonth - 1, 1).toLocaleString('default', {
              month: 'short',
            })
          : tra.dayMonth}
      </React.Fragment>
    ),
  },
  {
    key: 2,
    path: 'offered',
    label: 'Ofrd',
    format: 'num',
  },
  {
    key: 3,
    path: 'answered',
    label: 'Ans',
    format: 'num',
  },
  {
    key: 4,
    path: 'abandoned',
    label: 'Abn',
    format: 'num',
  },
  {
    key: 5,
    path: 'serviceLevel',
    label: 'SL',
    cellstyle: true,
    format: 'per',
    content: tra => (
      <Icon name={tra.serviceLevel > 80 ? 'checkmark' : 'attention'} />
    ),
  },
  {
    key: 6,
    path: 'abnRate',
    label: 'AR',
    cellstyle: true,
    format: 'per',
    content: tra => <Icon name={tra.abnRate < 5 ? 'checkmark' : 'attention'} />,
  },
];
