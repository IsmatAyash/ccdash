import React from 'react';
import { Icon } from 'semantic-ui-react';

export const Columns = () => [
  {
    key: 1,
    path: 'name',
    label: 'Name',
  },
  {
    key: 2,
    path: 'year',
    label: 'Year',
  },
  {
    key: 3,
    path: 'Q1',
    label: 'Q1',
    format: 'per',
  },
  {
    key: 4,
    path: 'Q2',
    label: 'Q2',
    format: 'per',
  },
  {
    key: 5,
    path: 'Q3',
    label: 'Q3',
    format: 'per',
  },
  {
    key: 6,
    path: 'Q4',
    label: 'Q4',
    format: 'per',
  },
  {
    key: 7,
    path: 'final',
    label: 'Final',
    cellstyle: true,
    format: 'per',
    content: g => <Icon name={g.final > 80 ? 'checkmark' : 'attention'} />,
  },
];
