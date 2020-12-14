import React from 'react';
import { Table } from 'semantic-ui-react';

function TableHeader({ columns, sortColumn, onSort }) {
  const raiseSort = path => {
    const sortCol = { ...sortColumn };
    if (sortCol.path !== path) sortCol.path = path;
    onSort(sortCol);
  };

  return (
    <Table.Header>
      <Table.Row>
        {columns.map(column => (
          <Table.HeaderCell
            key={column.key}
            sorted={column.path === sortColumn?.path ? sortColumn?.order : null}
            onClick={() => raiseSort(column.path)}>
            {column.label}
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  );
}

export default TableHeader;
