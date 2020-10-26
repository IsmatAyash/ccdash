import React from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';
import NumberFormat from 'react-number-format';

const renderCell = (item, column) => {
  if (column.content) return column.content(item);

  return column.format ? null : _.get(item, column.path);
};

const renderStyle = (item, column) => {
  if (column.cellstyle)
    if (column.path === 'aRate')
      return _.get(item, column.path) < 5 ? 'positive' : 'negative';
    else return _.get(item, column.path) > 80 ? 'positive' : 'negative';
  return null;
};

const renderFormat = (item, column) => {
  if (column.format)
    return (
      <NumberFormat
        value={Math.trunc(_.get(item, column.path))}
        displayType={'text'}
        thousandSeparator={true}
        suffix={column.format === 'per' && '%'}></NumberFormat>
    );
  return null;
};

function TableBody({ data, columns }) {
  return (
    <Table.Body>
      {data.map(item => (
        <Table.Row key={item.id}>
          {columns.map(column => (
            <Table.Cell key={column.key} className={renderStyle(item, column)}>
              {renderCell(item, column)}
              {renderFormat(item, column)}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  );
}

export default TableBody;
