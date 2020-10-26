import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import './Traffic.css';

function Traffic({ data, mnt }) {
  const columns = [
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
      label: 'Aba',
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
      path: 'aRate',
      label: 'AR',
      cellstyle: true,
      format: 'per',
      content: tra => <Icon name={tra.aRate < 5 ? 'checkmark' : 'attention'} />,
    },
  ];

  return (
    <Table
      celled
      compact='very'
      size='small'
      selectable
      textAlign='center'
      verticalAlign='middle'>
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </Table>
  );
}

export default Traffic;
