import React from 'react';
import { Table } from 'semantic-ui-react';

function TableHeader({ columns }) {
  return (
    <Table.Header>
      <Table.Row>
        {columns.map(column => (
          <Table.HeaderCell key={column.key}>{column.label}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  );
}

export default TableHeader;
