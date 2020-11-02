import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import TableHeader from '../common/tableHeader';
import TableBody from '../common/tableBody';
import { Columns } from './Columns';
import _ from 'lodash';
import './Contacts.css';

const Contacts = ({ contacts, mnt }) => {
  const [sortCol, setSortCol] = useState({
    path: 'dayMonth',
    order: 'ascending',
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(contacts);
  }, [contacts]);

  const handleSort = sortColumn => {
    if (sortCol.path === sortColumn.path) {
      setData(data.reverse());
      const order =
        sortColumn.order === 'ascending' ? 'descending' : 'ascending';
      setSortCol({ ...sortCol, order: order });
    } else {
      setData(_.sortBy(data, [sortColumn.path]));
      setSortCol({ path: sortColumn.path, order: 'ascending' });
    }
  };

  const columns = Columns(mnt);

  return (
    <Table
      celled
      compact='very'
      sortable
      size='small'
      selectable
      textAlign='center'
      verticalAlign='middle'>
      <TableHeader columns={columns} sortColumn={sortCol} onSort={handleSort} />
      <TableBody data={data} columns={columns} />
    </Table>
  );
};

export default Contacts;
